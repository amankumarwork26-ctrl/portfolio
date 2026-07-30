export const projectsData = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description:
      'This responsive portfolio website is built with HTML, CSS, and JavaScript. It features a modern UI, smooth animations, and a polished personal brand experience.',
    longDescription:
      'A comprehensive personal portfolio designed to showcase my skills, projects, and professional journey. It leverages modern frontend practices like CSS Grid/Flexbox, custom animations, and a responsive layout that works flawlessly across all devices. The project aims to provide an interactive and engaging user experience.',
    challenges: [
      'Implementing smooth, physics-based scroll animations without performance drops.',
      'Designing a consistent Ultra Dark neon theme that remains highly legible.',
      'Ensuring complete responsiveness across mobile, tablet, and desktop views.'
    ],
    techTags: ['React', 'Framer Motion', 'CSS3', 'Vite'],
    github: '#',
    liveDemo: '#',
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
    title: 'Resume Analyzer',
    description:
      'A smart resume analysis tool that helps extract and evaluate key details from resumes for better screening and profile matching.',
    longDescription:
      'An automated tool that parses resumes and extracts critical information such as skills, experience, and contact details. It streamlines the recruitment process by providing structured data outputs from unstructured PDF or DOCX files, helping HR professionals quickly identify the best candidates.',
    challenges: [
      'Parsing complex PDF structures with varying layouts and fonts.',
      'Extracting entities accurately using natural language processing (NLP) techniques.',
      'Building a clean, intuitive web interface for users to upload and view results.'
    ],
    techTags: ['Python', 'NLP', 'Data Parsing', 'Flask/FastAPI'],
    github: '#',
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
