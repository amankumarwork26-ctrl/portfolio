import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">Aman Kumar<span>.</span></span>
            <p>Software Developer</p>
            <p className="footer-built">Designed &amp; Developed by Aman Kumar</p>
          </div>
          <div className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Aman Kumar. All rights reserved.</p>
          <Link to="/" className="back-top">&uarr; Back to Home Page</Link>
        </div>
      </div>
    </footer>
  );
}
