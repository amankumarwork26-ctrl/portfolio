import { skillsData } from '../data/skills.jsx';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="skills section" 
      style={{ marginTop: '70px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="section-tag">02 / Skills</div>
        <h2 className="section-title">Tech <span>Skill</span></h2>
        <p className="section-sub">Technologies I'm learning and working with</p>

        <div className="skills-grid">
          {skillsData.map((cat, idx) => (
            <ScrollReveal key={cat.id} delay={idx * 0.15}>
              <div className="skill-category">
                <div className="skill-cat-header">
                  <span className="cat-icon">{cat.icon}</span>
                  <h3>{cat.title}</h3>
                </div>

                {cat.type === 'items' && (
                  <div className="skill-items">
                    {cat.items.map((item, idx) => (
                      <div className="skill-item" key={idx}>
                        <span className="skill-logo">
                          {item.logo ? (
                            <img src={item.logo} alt={item.alt || item.name} />
                          ) : (
                            item.svg
                          )}
                        </span>
                        <span className="skill-name">{item.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {cat.type === 'tags' && (
                  <div className="skill-tags">
                    {cat.tags.map((tag, idx) => (
                      <span className="skill-tag" key={idx}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
