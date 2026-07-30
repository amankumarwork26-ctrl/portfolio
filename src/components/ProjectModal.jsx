import { motion } from 'framer-motion';
import { X, ExternalLink, Code } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className="modal-header">
          <div className="modal-icon">{project.icon}</div>
          <h2>{project.title}</h2>
        </div>

        <div className="modal-body">
          <p className="modal-desc">{project.longDescription || project.description}</p>
          
          {project.challenges && (
            <div className="modal-challenges">
              <h3>Key Challenges Solved</h3>
              <ul>
                {project.challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-tech">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {project.techTags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <Code size={18} style={{ marginRight: '8px' }} /> Source Code
          </a>
          <a href={project.liveDemo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={18} style={{ marginRight: '8px' }} /> Live Demo
          </a>
        </div>
      </motion.div>
    </div>
  );
}
