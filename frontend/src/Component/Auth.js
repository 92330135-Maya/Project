import React, { useState } from "react";
import '../App.css';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = process.env.REACT_APP_API_URL;
    const url = isLogin ? `${API_URL}/login` : `${API_URL}/register`;
    const body = isLogin ? { email, password } : { name, email, password };

    try {
      const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!res.ok) { alert(data.message); return; }

      if (isLogin) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful ✅");
      } else {
        alert("Registered successfully ✅");
        setIsLogin(true);
      }

      setName(""); setEmail(""); setPassword("");
    } catch (err) {
      alert("Server error ❌");
    }
  };

  return (
    <div className="authContainer">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <div className="authBox">
        <form onSubmit={handleSubmit} className="authForm">
          {!isLogin && <input placeholder="Name" value={name} className="authInput" onChange={(e) => setName(e.target.value)} required />}
          <input type="email" placeholder="Email" value={email} className="authInput" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} className="authInput" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="authButton">{isLogin ? "Login" : "Register"}</button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)} className="switchAuth">{isLogin ? "Create account" : "Back to login"}</p>
      </div>
    </div>
  );
}

export default Auth;