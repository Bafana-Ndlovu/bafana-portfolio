// All the words and links on the site live here, so updating the portfolio never means touching layout code.
// Leave a contact value empty ('') and that link is simply not shown — no broken links.

export const profile = {
  name: 'Bafana Ndlovu',
  role: 'AI Full-stack developer',
  location: 'South Africa',
  headline: 'I build software for the problems people in my community deal with every day.',
  intro:
    'I design and build full-stack web apps with React, TypeScript and Supabase, from the first sketch in Stitch to a tested, deployed product.',
  lookingFor:
    'I am looking for a junior full-stack or AI software developer role where I can ship real features for real users.',
  about: [
    'I am training as an Artificial Intelligence Software Developer (NQF 5) at Melsoft Academy. Before that I built a long run of JavaScript, TypeScript and React projects, several of them in teams.',
    'I like problems I can see from my own street: finding a plumber you can trust, getting a pothole fixed, helping families cover funeral costs. I start with the people who have the problem, design the screens, then build it properly: planned in Issues, built on branches, reviewed in pull requests and tested in CI.',
  ],
  email: 'bafanandlovu1984@gmail.com',
  linkedin: 'https://www.linkedin.com/in/david-bafana-5a765b187',
  github: 'https://github.com/Bafana-Ndlovu',
  cv: 'https://docs.google.com/document/d/1rFLOBN_cOut24DzdIKpmVwm7hBkZj5tT6Us4vVLZHUc/export?format=pdf', // downloads the Google Doc as a PDF
}

export const problems = [
  { problem: 'No easy way to find a plumber you can trust', app: 'FixLink', href: '#fixlink' },
  { problem: 'Potholes and burst pipes reported, then forgotten', app: 'FixMyKasi', href: '#fixmykasi' },
  { problem: 'Families struggling to cover funeral costs', app: 'Sisonke', href: '#more' },
  { problem: 'Sneaker cleaning that means a trip to town', app: 'SoleCare', href: '#more' },
]

export type Project = {
  id: string
  name: string
  kind: string
  summary: string
  problem: string
  role: string
  stack: string[]
  image: string
  imageAlt: string
  live: string
  github: string
}

export const featured: Project[] = [
  {
    id: 'fixlink',
    name: 'FixLink',
    kind: 'Capstone project',
    summary: 'A marketplace that connects South African households with verified local plumbers, electricians, cleaners and other home-service pros.',
    problem:
      'Hiring a tradesperson still runs on WhatsApp groups and word of mouth, so customers cannot check who is qualified or what a job should cost.',
    role: 'Everything: business case, PRD, Stitch designs, database and security rules, frontend, tests, CI and deployment.',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Postgres RLS', 'Vitest', 'GitHub Actions', 'Vercel'],
    image: '/projects/fixlink.webp',
    imageAlt: 'FixLink home page with a service search bar and a booking request card',
    live: 'https://fixlink-three.vercel.app',
    github: 'https://github.com/Bafana-Ndlovu/fixlink',
  },
  {
    id: 'fixmykasi',
    name: 'FixMyKasi',
    kind: 'Team project',
    summary: 'Residents report community faults like potholes, burst pipes and broken streetlights, see who is assigned to fix them, and track each one until it is fixed.',
    problem:
      'Fault reports get lost between call centres, WhatsApp groups and councillors, and residents are left guessing whether anyone is coming.',
    role: 'Designer and frontend developer in a team. I designed the screens and built the UI, and reviewed teammates’ pull requests.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    image: '/projects/fixmykasi.webp',
    imageAlt: 'FixMyKasi public fault list showing reported potholes and power outages with their status',
    live: 'https://fixmykasi.vercel.app',
    github: 'https://github.com/Paul280-cloud/fixmykasi',
  },
  {
    id: 'pulse',
    name: 'Pulse',
    kind: 'Individual build',
    summary: 'A live board of every earthquake recorded on Earth in the last 24 hours, with the current weather where the biggest ones struck.',
    problem:
      'A practice in working with live public data: pulling two free APIs, storing snapshots in a database and presenting them clearly.',
    role: 'Solo: data pipeline, Supabase tables and the filterable, sortable frontend.',
    stack: ['JavaScript', 'Vite', 'Supabase', 'USGS API', 'Open-Meteo API', 'Vercel'],
    image: '/projects/pulse.webp',
    imageAlt: 'Pulse dashboard listing recent earthquakes with magnitude, location and depth',
    live: 'https://pulse-flame-nu.vercel.app',
    github: 'https://github.com/Bafana-Ndlovu/Pulse',
  },
]

export const moreProjects = [
  {
    name: 'Sisonke',
    text: 'A community funeral benefit scheme where each member chips in R5 to R20 when a family loses someone.',
    stack: 'React, TypeScript, Supabase',
    github: 'https://github.com/Bafana-Ndlovu/sisonke',
  },
  {
    name: 'SoleCare',
    text: 'An Android app for doorstep sneaker cleaning, with photo checks at pickup so every pair comes back to its owner.',
    stack: 'Expo, React Native, Supabase',
    github: 'https://github.com/Bafana-Ndlovu/solecare',
  },
  {
    name: 'TaskForge API',
    text: 'A REST API for managing tasks with Node.js and Express, documented with a Postman collection.',
    stack: 'Node.js, Express',
    github: 'https://github.com/Bafana-Ndlovu/taskforge-api',
  },
]

export const skills = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML and CSS', 'React Router', 'React Native (Expo)'] },
  { group: 'Backend and data', items: ['Supabase', 'PostgreSQL', 'Row Level Security', 'Node.js', 'Express', 'REST APIs'] },
  { group: 'Quality and delivery', items: ['Vitest and Jest', 'GitHub Actions CI', 'Git and pull requests', 'Vercel', 'Netlify'] },
  { group: 'Product and design', items: ['Google Stitch', 'PRDs and implementation plans', 'Responsive design', 'Accessibility basics'] },
]
