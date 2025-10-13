
import "./pic.css";



function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, <br /> <span className="my-name">I’m Walela Eliakim</span></h1>
       <h2>Frontend Engineer Focused on Performance & Accessibility</h2>
        <p>I architect and build complex web applications with a focus on speed, scalability, and maintainability. Let's solve real-world problems with elegant code.</p>
        <a href="#projects" className="btn">Download CV</a>
        <a href="#projects" className="btn">View Projects</a>
      </div>
      <div className="hero-image">
        <img 
          src="/images/pic.jpg"
          alt="ellie"
        />
      </div>
    </section>
  );
}

export default Hero;
