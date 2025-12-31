import React, { useState } from "react";

const ChildForm = ({ onSubmitData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitData(formData);
    setFormData({ name: "", email: "", Location: "" });
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <input
        className="contactInput"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        className="contactInput"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <textarea
        className="contactTextarea"
        name="Location"
        value={formData.Location}
        onChange={handleChange}
        placeholder="Your Location"
        required
      />
      <button className="contactButton" type="submit">
        Send Order
      </button>
    </form>
  );
};

export default ChildForm;