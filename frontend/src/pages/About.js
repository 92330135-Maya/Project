import React from "react";
function About() {
return (
<section id="about" className="about">
<div className="about-container">
<div className="about-text">
<h2>About Us</h2>
<p>
Welcome to <strong>TastyBite</strong> — where every dish tells a story!  
We started our journey in 2015 with one simple goal:  
to serve fresh, delicious, and handcrafted meals made with love.  
Our chefs use locally sourced ingredients to bring out the best flavors of every cuisine.
</p>
<p>
Whether you're craving a cheesy pizza, a juicy burger, or creamy pasta —  
 we've got something to make your day tastier.
</p>
</div>
<div className="about-image">
<img 
src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"  alt="Restaurant" />
</div>
</div>
</section>
  );
}

export default About;