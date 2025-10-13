import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { MdDevices } from "react-icons/md"; // from react-icons/md


export default function Skills() {
  return (
    <section className="skills">
      <h2 className="section-title">Frontend Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          HTML5
        </div>
        <div className="skill-card">
          <FaCss3Alt className="skill-icon" />
          CSS3
        </div>
        <div className="skill-card">
          <SiJavascript className="skill-icon" />
          JavaScript (ES6+)
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon" />
          React.js
        </div>
        <div className="skill-card">
          <SiTailwindcss className="skill-icon" />
          Tailwind CSS
        </div>
        <div className="skill-card">
          <MdDevices className="skill-icon" />
          Responsive Design
        </div>
        <div className="skill-card">
          <FaGitAlt className="skill-icon" />
          Git / GitHub
        </div>
      </div>
    </section>
  );
}
