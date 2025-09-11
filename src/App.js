import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

   function App() {
  const mySkills = ["HTML", "CSS", "JavaScript", "React", "Git"];


  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills skills={mySkills} />
    </div>
  );
}

export default App;
