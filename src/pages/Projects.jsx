import { useState } from 'react';
import { projectsData } from '../data/projects.jsx';
import ScrollReveal from '../components/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section 
      id="projects" 
      className="projects section" 
      style={{ marginTop: '70px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="section-tag">04 / Projects</div>
        <h2 className="section-title">What I've <span>Built</span></h2>
        <p className="section-sub">Real projects that demonstrate my skills and problem-solving approach</p>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.15}>
              <div className="project-card">
                <div className="project-img">
                  <div className="project-placeholder">
                    <span className="project-icon">{project.icon}</span>
                  </div>
                  <div className="project-overlay">
                    <button className="overlay-btn overlay-demo" onClick={() => setSelectedProject(project)}>Read More</button>
                  </div>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.techTags.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="projects-cta">
          <a href="https://github.com/" className="btn btn-outline" target="_blank" rel="noopener noreferrer">View All on GitHub →</a>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
