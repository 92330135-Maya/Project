import express from "express";
import mysql from "mysql2";
import cors from "cors";
import multer from "multer";
import path from "path";
import bcrypt from "bcrypt";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/image", express.static("image")); // عرض الصور

/* ================== Multer Config ================== */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "image/"),
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname.split(".")[0] +
        "_" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });

/* ================== MySQL Connection ================== */
// استخدمي DATABASE_URL مباشرة
const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect((err) => {
  if (err) console.log("DB connection error:", err);
  else console.log("✅ MySQL connected");
});

/* ================== MENU ROUTES ================== */
app.get("/menu", (req, res) => {
  db.query("SELECT id, item_name, price, image FROM menu", (err, data) => {
    if (err) return res.status(500).json(err);
    const menuWithImageURL = data.map((item) => ({
      ...item,
      image: item.image
        ? `${req.protocol}://${req.get("host")}/image/${item.image}`
        : null,
    }));
    res.json(menuWithImageURL);
  });
});

app.post("/menu", upload.single("image"), (req, res) => {
  const { name, price } = req.body;
  const image = req.file ? req.file.filename : null;
  db.query(
    "INSERT INTO menu (item_name, price, image) VALUES (?, ?, ?)",
    [name, price, image],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json("Menu Added Successfully");
    }
  );
});

/* ================== ORDERS ROUTE ================== */
//orders
app.post("/orders", (req, res) => {
  const { customer, items, total } = req.body;

  const q =
    "INSERT INTO orders (name, email, location, total) VALUES (?, ?, ?, ?)";

  db.query(
    q,
    [customer.name, customer.email, customer.Location, total],
    (err, result) => {
      if (err) return res.status(500).json(err);

      const orderId = result.insertId;

      const values = items.map((item) => [
        orderId,
        item.item_name,
        item.price,
        item.counter,
      ]);

      db.query(
        "INSERT INTO order_items (order_id, item_name, price, quantity) VALUES ?",
        [values],
        (err2) => {
          if (err2) return res.status(500).json(err2);
          res.json({ success: true });
        }
      );
    }
  );
});


/* ================== REGISTER ================== */
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields required" });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword],
      (err, result) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY")
            return res.status(400).json({ message: "Email already exists" });
          return res.status(500).json({ message: "Database error" });
        }
        res.json({ message: "User registered successfully", userId: result.insertId });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ================== LOGIN ================== */
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "All fields required" });

  db.query(
    "SELECT id, name, email, password FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });
      if (result.length === 0)
        return res.status(401).json({ message: "Invalid email or password" });

      const user = result[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(401).json({ message: "Invalid email or password" });

      res.json({
        message: "Login successful",
        user: { id: user.id, name: user.name, email: user.email },
      });
    }
  );
});

/* ================== START SERVER ================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
