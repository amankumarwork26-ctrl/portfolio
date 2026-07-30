import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="about section" 
      style={{ marginTop: '70px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="section-tag">01 / About</div>
        <h2 className="section-title">Who Am I<span>?</span></h2>
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-avatar">
              <div className="avatar-ring"></div>
              <div className="avatar-inner">
                <img src="/images/aman-profile.jpeg" alt="Aman Kumar" className="avatar-photo" loading="eager" fetchPriority="high" />
              </div>
              <div className="avatar-badge">Every Master was once a Beginner</div>
            </div>
            <div className="about-quick-info">
              <div className="quick-item">
                <span className="qi-icon"><svg viewBox="0 0 24 24" fill="#ff6b35" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg></span>
                <span>Bihar, India</span>
              </div>
              <div className="quick-item">
                <span className="qi-icon"><svg viewBox="0 0 24 24" fill="#8b5cf6" stroke="none"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg></span>
                <span>Bachelor of Computer Applications</span>
              </div>
              <div className="quick-item">
                <span className="qi-icon"><svg viewBox="0 0 24 24" fill="#06d6a0" stroke="none"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" /></svg></span>
                <span>English / Hindi</span>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p>
              I am actively developing my skills in programming, databases, web development, and software engineering.
            </p>
            <p>
              I am passionate about <strong>Python, SQL, Data Structures, and Artificial Intelligence</strong>. My goal is to continuously improve my technical abilities and contribute to innovative software solutions.
            </p>
            <p>
              I believe in <strong>learning by building</strong> — every project is a new problem to solve. I am currently focused on strengthening my fundamentals and building a solid GitHub portfolio to land my first internship.
            </p>
            <div className="about-strengths">
              <div className="strength-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> Quick Learner</div>
              <div className="strength-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> Team Player</div>
              <div className="strength-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg> Problem Solver</div>
              <div className="strength-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg> Hard Working</div>
              <div className="strength-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg> Positive Attitude</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
