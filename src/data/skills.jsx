export const skillsData = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    type: 'items',
    items: [
      { name: 'HTML5', logo: import.meta.env.BASE_URL + 'images/skills/html5 logo.jpg', alt: 'HTML5' },
      { name: 'CSS3', logo: import.meta.env.BASE_URL + 'images/skills/css logo.jpg', alt: 'CSS3' },
      { name: 'JavaScript', logo: import.meta.env.BASE_URL + 'images/skills/java script logo.jpg', alt: 'JavaScript' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    type: 'items',
    items: [
      { name: 'Node.js', logo: import.meta.env.BASE_URL + 'images/skills/node js logo.jpg', alt: 'Node.js' },
      { name: 'Express.js', logo: import.meta.env.BASE_URL + 'images/skills/express js.jpg', alt: 'Express.js' },
      {
        name: 'REST API',
        svg: (
          <svg className="tech-rest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    type: 'items',
    items: [
      { name: 'Python', logo: import.meta.env.BASE_URL + 'images/skills/python logo.jpg', alt: 'Python' },
      { name: 'C', logo: import.meta.env.BASE_URL + 'images/skills/c language.jpg', alt: 'C' },
      { name: 'C++', logo: import.meta.env.BASE_URL + 'images/skills/c++ logo.jpg', alt: 'C++' },
      { name: 'Java', logo: import.meta.env.BASE_URL + 'images/skills/java logo.jpg', alt: 'Java' },
    ],
  },
  {
    id: 'cs',
    title: 'CS Fundamentals',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    type: 'items',
    items: [
      {
        name: 'DSA',
        svg: (
          <svg className="tech-ds" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="6" height="6" rx="1" />
            <rect x="9" y="2" width="6" height="6" rx="1" />
            <rect x="16" y="7" width="6" height="6" rx="1" />
            <rect x="9" y="16" width="6" height="6" rx="1" />
            <path d="M5 13v3m7-9v3m7 3v3m-7 6v3" />
          </svg>
        ),
      },
      { name: 'DBMS', logo: import.meta.env.BASE_URL + 'images/skills/sql logo.jpg', alt: 'SQL' },
      {
        name: 'Operating Systems',
        svg: (
          <svg className="tech-os" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        ),
      },
      {
        name: 'Computer Networks',
        svg: (
          <svg className="tech-network" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2" />
            <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14" />
          </svg>
        ),
      },
      {
        name: 'OOP',
        svg: (
          <svg className="tech-oop" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Prompt Engineering',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    type: 'items',
    items: [
      {
        name: 'Prompt Engineering',
        svg: (
          <svg className="tech-ai" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
      },
      {
        name: 'OpenAI API',
        svg: (
          <svg className="tech-openai" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0014.913 2a5.985 5.985 0 00-4.916.516A6.046 6.046 0 003.398 9.6a6.065 6.065 0 00.676 4.006 5.985 5.985 0 00.516 4.91 6.046 6.046 0 006.51 2.9A6.065 6.065 0 0019.088 22a5.985 5.985 0 004.916-.516 6.046 6.046 0 002.99-6.51 6.065 6.065 0 00-.676-4.006zM12.058 20c-3.18 0-5.85-2.67-5.85-5.85s2.67-5.85 5.85-5.85 5.85 2.67 5.85 5.85-2.67 5.85-5.85 5.85z" />
          </svg>
        ),
      },
      {
        name: 'Gemini API',
        svg: (
          <svg className="tech-gemini" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Productivity',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    type: 'tags',
    tags: ['VS Code', 'Git', 'GitHub', 'MS Word', 'Excel', 'PowerPoint'],
  },
];
