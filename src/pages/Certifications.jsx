import { certificationsData } from '../data/certifications.jsx';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <motion.section 
      id="certifications" 
      className="certs section" 
      style={{ marginTop: '70px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="section-tag">05 / Certifications</div>
        <h2 className="section-title">My <span>Certifications</span></h2>
        <div className="certs-grid">
          {certificationsData.map((cert, idx) => (
            <ScrollReveal key={cert.id} delay={idx * 0.15}>
              <div className="cert-card">
                <div className={`cert-icon ${cert.colorClass}`}>{cert.svg}</div>
                <div className="cert-body">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                  <a href={cert.file} className="cert-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
