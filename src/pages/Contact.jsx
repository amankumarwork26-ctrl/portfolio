import { useState, useRef, useEffect } from 'react';
import { countryCodes } from '../data/countryCodes';
import { motion, useScroll, useTransform } from 'framer-motion';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('zQPK0VBOzbW3OsAqU');

export default function Contact() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const formWrapRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      formWrapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 350);
    return () => clearTimeout(t);
  }, []);

  function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  function validateMobile(val) {
    return /^\d{7,15}$/.test(val.replace(/[\s-]/g, ''));
  }

  function validate() {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name (min 2 characters)';
    }
    if (!validateEmail(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!validateMobile(formData.mobile.trim())) {
      errs.mobile = 'Please enter a valid mobile number';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please write a message (min 5 characters)';
    }
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      toast.error('Please fill all fields correctly.');
      return;
    }

    setSending(true);
    const toastId = toast.loading('Sending your message...');

    try {

      const senderName = formData.name.trim();
      const senderEmail = formData.email.trim();
      const phoneNumber = `${formData.countryCode} ${formData.mobile.trim()}`;
      const subject = 'Portfolio Contact Message';
      const userMessage = formData.message.trim();
      const fullMessage = `Name: ${senderName}\nEmail: ${senderEmail}\nMobile: ${phoneNumber}\n\nMessage:\n${userMessage}`;

      await emailjs.send('service_jh2ld8a', 'template_g7adx7o', {
        to_email: 'amankumar.work26@gmail.com',
        from_name: senderName,
        from_email: senderEmail,
        reply_to: senderEmail,
        sender_name: senderName,
        sender_email: senderEmail,
        name: senderName,
        email: senderEmail,
        user_name: senderName,
        user_email: senderEmail,
        visitor_name: senderName,
        visitor_email: senderEmail,
        contact_name: senderName,
        contact_email: senderEmail,
        subject,
        title: subject,
        message: fullMessage,
        user_message: fullMessage,
        phone: phoneNumber,
        mobile: phoneNumber,
        contact_mobile: phoneNumber,
        sender_info: `Name: ${senderName}\nEmail: ${senderEmail}\nMobile: ${phoneNumber}`,
        original_message: userMessage,
      });

      toast.success("Message sent! I'll reply within 24 hours.", { id: toastId });
      setFormData({ name: '', email: '', countryCode: '+91', mobile: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error('EmailJS failed:', err);
      toast.error('Failed to send message. Please email directly.', { id: toastId });
    } finally {
      setSending(false);
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const spring = {
    type: 'spring',
    stiffness: 120,
    damping: 16,
    mass: 0.6,
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: 0.1 },
    },
  };

  const fieldItem = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: spring },
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const orbY1 = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], [20, -40]);

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      className="contact section"
      style={{ marginTop: '70px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* ===== Background Decorations ===== */}
      <div className="contact-bg" aria-hidden="true">
        <motion.span className="bg-orb orb-1" style={{ y: orbY1 }} />
        <motion.span className="bg-orb orb-2" style={{ y: orbY2 }} />
        <motion.span className="bg-orb orb-3" style={{ y: orbY3 }} />
      </div>

      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">06 / Contact</div>
          <h2 className="section-title">Let's <span className="title-gradient">Connect</span></h2>
          <p className="section-sub">Have an idea, opportunity, or helpful advice? I would love to hear from you.</p>
        </motion.div>

        <div className="contact-grid">
          <div className="contact-info">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55 }}
            >
              <h3>Get In Touch</h3>
              <p>Whether you want to discuss a project, share guidance, or connect professionally, feel free to reach out. I am always ready to learn, build, and grow with the right people.</p>
            </motion.div>
            <div className="contact-links">
              {[
                {
                  href: 'mailto:amankumar.work26@gmail.com',
                  label: 'Email',
                  value: 'amankumar.work26@gmail.com',
                  external: false,
                  icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
                  stroke: true,
                },
                {
                  href: 'https://www.linkedin.com/in/aman-kumar-395a3535b',
                  label: 'LinkedIn',
                  value: 'aman-kumar-395a3535b',
                  external: true,
                  icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
                },
                {
                  href: 'https://github.com/amankumarwork26-ctrl',
                  label: 'GitHub',
                  value: 'github.com/amankumar',
                  external: true,
                  icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
                },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="contact-link"
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="cl-icon">
                    <svg viewBox="0 0 24 24" {...(item.stroke ? { fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' } : { fill: 'currentColor' })}>
                      {item.icon}
                    </svg>
                  </span>
                  <div>
                    <span className="cl-label">{item.label}</span>
                    <span className="cl-val">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
          <motion.div
            ref={formWrapRef}
            className="contact-form-wrap"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
          >
            <span className="form-border" aria-hidden="true" />
            <div className="form-header">
              <span className="form-icon">
                <svg viewBox="0 0 448 512" fill="currentColor"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" /></svg>
              </span>
              <h3 className="form-title">Send me a message</h3>
              <p className="form-sub">I'll get back to you as soon as possible.</p>
            </div>
            <form ref={formRef} id="contactForm" noValidate onSubmit={handleSubmit}>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-20px' }}
              >
              <motion.div className="form-group" variants={fieldItem}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your full name" required value={formData.name} onChange={handleChange} style={errors.name ? { borderColor: 'var(--accent3)' } : {}} />
                <span className="err-msg" id="nameErr">{errors.name || ''}</span>
              </motion.div>
              <motion.div className="form-group" variants={fieldItem}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required value={formData.email} onChange={handleChange} style={errors.email ? { borderColor: 'var(--accent3)' } : {}} />
                <span className="err-msg" id="emailErr">{errors.email || ''}</span>
              </motion.div>
              <motion.div className="form-group" variants={fieldItem}>
                <label htmlFor="mobile">Mobile Number</label>
                <div className="phone-row">
                  <select id="countryCode" name="countryCode" aria-label="Country code" required value={formData.countryCode} onChange={handleChange}>
                    {countryCodes.map((c) => (
                      <option key={c.code + c.label} value={c.code}>
                        {c.flag} {c.label}
                      </option>
                    ))}
                  </select>
                  <input type="tel" id="mobile" name="mobile" placeholder="Your mobile number" inputMode="tel" required value={formData.mobile} onChange={handleChange} style={errors.mobile ? { borderColor: 'var(--accent3)' } : {}} />
                </div>
                <span className="err-msg" id="mobileErr">{errors.mobile || ''}</span>
              </motion.div>
              <motion.div className="form-group" variants={fieldItem}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your message" required value={formData.message} onChange={handleChange} style={errors.message ? { borderColor: 'var(--accent3)' } : {}}></textarea>
                <span className="err-msg" id="msgErr">{errors.message || ''}</span>
              </motion.div>
              </motion.div>
              <motion.button
                type="submit"
                className="btn btn-primary btn-full"
                id="submitBtn"
                disabled={sending}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="btn-shimmer" aria-hidden="true" />
                {sending ? 'Sending...' : 'Send Message →'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
