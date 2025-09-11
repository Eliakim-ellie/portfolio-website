import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  const mySkills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React to showcase my skills and projects.",
      imageUrl: "https://via.placeholder.com/400x200",
      projectLink: "#"
    },
    {
      title: "Todo App",
      description: "A simple todo list app with add, edit, and delete features.",
      imageUrl: "https://via.placeholder.com/400x200",
      projectLink: "#"
    },
    {
      title: "Weather App",
      description: "A weather app that fetches real-time data using an API.",
      imageUrl: "https://via.placeholder.com/400x200",
      projectLink: "#"
    }
  ];

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills skills={mySkills} />
            <Projects projects={projects} />
            <Contact />
          </>
        } />
        <Route path="/blog" element={<Blog />} />
        {/* Add more routes here as your site grows */}
      </Routes>
    </div>
  );
}

export default App;
