export const projectsData = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description:
      'This responsive portfolio website is built with React and Vite. It features a modern ultra-dark neon glass UI, smooth animations, page transitions, and a polished personal brand experience.',
    longDescription:
      'A comprehensive personal portfolio designed to showcase my skills, projects, and professional journey. Built with React 19, Vite, and Framer Motion, it leverages custom hooks, a particles canvas, page transitions, and a fully responsive layout that works flawlessly across all devices. Includes a contact form powered by EmailJS.',
    challenges: [
      'Implementing smooth, physics-based scroll and page-transition animations without performance drops.',
      'Designing a consistent Ultra Dark neon theme that remains highly legible in both light and dark modes.',
      'Ensuring complete responsiveness across mobile, tablet, and desktop views.',
      'Deploying a React SPA to GitHub Pages with correct asset paths and client-side routing.'
    ],
    techTags: ['React', 'Framer Motion', 'Vite', 'CSS3'],
    github: 'https://github.com/amankumarwork26-ctrl/portfolio',
    liveDemo: 'https://amankumarwork26-ctrl.github.io/portfolio/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Pharmacy Management System',
    description:
      'A production-ready full-stack pharmacy SaaS with billing, inventory, role-based access control, reports, and an RTI module.',
    longDescription:
      'A complete full-stack Pharmacy Management System built with React, TypeScript, Node.js, Express, Prisma ORM, and PostgreSQL. It includes JWT authentication with refresh tokens, role-based access control (Super Admin / Admin / Staff), a billing system with GST calculation and PDF generation, inventory management with low-stock and expiry alerts, purchase and returns processing, sales/profit reports, audit logs, and a dashboard with analytics.',
    challenges: [
      'Designing role-based access control and secure JWT authentication with refresh tokens.',
      'Building a billing system with GST calculations, auto stock updates, and PDF invoice generation.',
      'Implementing real-time low-stock and expiry alerts across inventory management.',
      'Adding an RTI module with auto-generated PDF drafts, due-date reminders, and status tracking.'
    ],
    techTags: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/amankumarwork26-ctrl/Pharmacy-Management-System',
    liveDemo: '',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.78.77L12 21l7.64-7.64.78-.77a5.4 5.4 0 0 0 0-7.65z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'AI Resume Analyzer',
    description:
      'An AI-powered resume analyzer that uploads a PDF resume and provides actionable feedback on content, structure, and ATS compatibility.',
    longDescription:
      'A full-stack web application that analyzes resumes using the OpenRouter AI API. Users upload their resume in PDF format and get AI-generated suggestions to improve quality, structure, and ATS (Applicant Tracking System) compatibility. Built with Node.js and Express on the backend with a clean, responsive frontend. Built to learn how AI APIs integrate with full-stack development.',
    challenges: [
      'Parsing and extracting content from uploaded PDF resumes.',
      'Integrating the OpenRouter AI API securely on the backend to avoid exposing API keys.',
      'Generating clear, structured, and actionable AI feedback on resume quality.'
    ],
    techTags: ['Node.js', 'Express', 'OpenRouter AI', 'JavaScript'],
    github: 'https://github.com/amankumarwork26-ctrl/Resume-Analiser-Project',
    liveDemo: 'https://resume-analiser-project.onrender.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];
