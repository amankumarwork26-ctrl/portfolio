import { Link } from 'react-router-dom';
import useParticles from '../hooks/useParticles';
import useTypingEffect from '../hooks/useTypingEffect';
import { motion } from 'framer-motion';

const phrases = [
  'Web Developer',
  'Python Programmer',
  'Database Explorer',
  'Problem Solver',
  'AI Enthusiast',
  'Software Developer',
];

export default function Home() {
  const canvasRef = useParticles();
  const typedTextRef = useTypingEffect(phrases);

  return (
    <motion.section 
      id="home" 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} id="heroCanvas"></canvas>
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Aman <span>Kumar</span></h1>
        <div className="hero-role">
          <span className="role-static">Aspiring Software Developer &amp; </span>
          <span className="typed-text" ref={typedTextRef}></span><span className="typed-cursor">|</span>
        </div>
        <p className="hero-desc">
          I build clean, efficient software and love turning ideas into real-world solutions.
          My mission is to grow into a professional developer who ships technology that truly makes a difference.
        </p>
        <div className="hero-btns">
          <Link to="/about" className="btn btn-primary">Learn More</Link>
          <a href={import.meta.env.BASE_URL + 'resumes/aman-resume.pdf'} className="btn btn-outline" target="_blank" rel="noopener noreferrer">View Resume</a>
          <a href={import.meta.env.BASE_URL + 'resumes/aman-resume.pdf'} className="btn btn-ghost" download>Download Resume</a>
          <Link to="/contact" className="btn btn-ghost">Contact Me</Link>
        </div>
        <div className="hero-stats">
          <div className="stat"><span className="stat-num">3+</span><span className="stat-label">Projects</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-num">10+</span><span className="stat-label">Technologies</span></div>
        </div>
      </div>
      <Link to="/about" className="hero-scroll-hint" aria-label="Scroll to about section">
        <span className="scroll-mouse"></span>
        <span className="scroll-arrow"></span>
      </Link>
    </motion.section>
  );
}
