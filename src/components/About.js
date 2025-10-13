import { FaLaptopCode, FaReact, FaPaintBrush, FaSearch, FaTools, FaPlug } from "react-icons/fa";

function About() {
  return (
    <div>  
       <section className="about">
       <header className="about-header">
  <h1>About Me</h1>
</header>

<section className="two-columns">
  <div className="column">
    <h2>Who I Am</h2> 
    <p>I'm a <span>frontend engineer </span>specializing in building and optimizing high-performance, scalable React applications. My focus is on creating seamless user experiences that are both fast and accessible.

With 2 years of experience in the ecosystem, I've worked extensively with React, Next.js, TypeScript, and  to deliver complex SaaS products.

I'm driven by a desire to understand the "why" behind the code and to find the most effective solution, not just the easiest one. I'm eager to join a team that challenges the status quo and values technical excellence.
        </p>
  </div>
      
  <div className="column">
    <h2>My services</h2>

  
  <div className="services-grid">

  <div className="service-card">
    <FaLaptopCode className="service-icon" />
    <h3>Responsive Web Development</h3>
    
  </div>

  <div className="service-card">
    <FaReact className="service-icon" />
    <h3>React & Next.js Applications</h3>
  
  </div>

  <div className="service-card">
    <FaPaintBrush className="service-icon" />
    <h3>UI / UX Implementation</h3>
 
  </div>

  <div className="service-card">
    <FaSearch className="service-icon" />
    <h3>SEO Optimization</h3>
   
  </div>

  <div className="service-card">
    <FaTools className="service-icon" />
    <h3>Frontend Maintenance</h3>
   
  </div>

  <div className="service-card">
    <FaPlug className="service-icon" />
    <h3>API Integration</h3>
    
  </div>

</div>

    
    
    
    
  
   </div>
</section>
    
  

      </section>
    </div>
  );
}

export default About;
