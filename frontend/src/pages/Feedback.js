import React from "react";
import "../App.css"; 

const testimonials = [
  { name: "Sarah", role: "Food Blogger", text: "Amazing food! Loved the taste and presentation. Highly recommend to everyone!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Ali", role: "Chef", text: "The pasta was cooked perfectly and the staff were super friendly. Will visit again!", img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "Lina", role: "Designer", text: "Best pizza in town! Fast delivery and great customer service. Five stars!", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "John", role: "Food Critic", text: "Excellent ambiance and friendly staff. Loved the desserts!", img: "https://randomuser.me/api/portraits/men/64.jpg" },
  { name: "Emma", role: "Blogger", text: "A wonderful experience! Cozy place and delicious meals. Highly recommended!", img: "https://randomuser.me/api/portraits/women/22.jpg" },
];

function Feedback() {
  return (
    <section id="feedback">
      <h2>Customer Feedback</h2>
      <div className="testimonial-slider">
        <div className="testimonial-track">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <img src={item.img} alt={item.name} />
              <p>{item.text}</p>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <span className={`dot ${index === 0 ? "active" : ""}`} key={index}></span>
        ))}
      </div>
    </section>
  );
}

export default Feedback;