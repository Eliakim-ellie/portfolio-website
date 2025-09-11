import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>My Portfolio</h2>
      <ul>
        <li><Link to="/">Home</Link></li>

        {/* simple anchors for in-page navigation */}
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>

        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
