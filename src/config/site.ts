// Type for contact method
type ContactMethod = {
  type: 'email' | 'whatsapp';
  value: string;
  buttonText?: string;
};

export const siteConfig = {
  name: 'James',
  title: 'James - Kichwa Builder',
  description: 'Kichwa-born builder of intelligent systems.',
  url: 'https://indiegen.ai',
  contact: {
    email: 'james@urkulabs.com',
    // Choose between 'email' or 'whatsapp'
    contactMethod: {
      type: 'whatsapp', // 'email' or 'whatsapp'
      value: '593987398610', // email or phone number with country code (no + or spaces)
      buttonText: 'Send Message' // Optional: Customize the button text
    } as ContactMethod
  },
};

export const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#craft' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#roots' },
  { name: 'Contact', href: '#contact' },
];

export const skills = [
  { name: '🌐 Web development', level: 90 },
  { name: '🤖 Machine Learning, Deep Learning and Automation', level: 85 },
  { name: '🌍 International Trade', level: 85 },
  { name: '🚀 Leadership', level: 80 },
  { name: '🤝 Business Development', level: 80 },
  { name: '🎯 Project Management', level: 80 },
];

export const projects = [
  {
    title: 'Urku LLM',
    description: 'LLaMA based Lora fine tuning for indigenous language preservation and learning. Replicated as a custom GPT for demonstration purposes due to budget constrains to run the full version. Published as conference paper.',
    tags: ['LLaMA 4', 'NLP', 'Custom GPT'],
    image: '/images/projects/URKU_NLP.png',
    link: '#',
    category: ['all', 'ai'],
  },
  {
    title: 'Totalhome.ec',
    description: 'Designed and implemented an ecommerce platform including optimized automation scripts for the automation of internal business processes. The project included a parallel internal website for LMS, as well as a private app for business intelligence.',
    tags: ['Ecommerce', 'php', 'javascript', 'automation'],
    image: '/images/projects/thw.png',
    link: 'https://totalhome.ec',
    category: ['all', 'web'],
  },
  {
    title: 'Kallari',
    description: 'A responsive web app featuring a propietary model for international trade analysis. The product receives a natural language request as input and maps it to public customs records of Ecuador to populate a viability report based on market trends and landed costs.',
    tags: ['Machine Learning', 'Next.js', 'Tailwind CSS', 'TypeScript', 'React'],
    image: '/images/projects/kallari.png',
    link: 'https://kallari-demo-app.windsurf.build',
    category: ['all', 'ai', 'web'],
  },
];

export const timeline = [
  {
    year: '2024 - Present',
    title: 'Building the Future',
    description: 'Leading innovative projects at the intersection of technology and cultural preservation.',
    icon: '🚀',
  },
  {
    year: '2023 - 2024',
    title: 'Academy',
    description: 'Led research on large language models (LLMs) at Universidad San Francisco de Quito. Produced a paper, came across problems with the academy and left.',
    icon: '💻',
  },
  {
    year: '2019 - 2023',
    title: 'University & Import Operations',
    description: 'Studied Computer Science, focusing on artificial intelligence and human-computer interaction. Managed import operations, successfully bringing in 20+ containers.',
    icon: '🎓',
  },
  {
    year: '2002 - 2019',
    title: 'Early Years',
    description: 'Grew up in Riobamba, Ecuador, developing a deep connection with nature, my Kichwa heritage, and a passion for technology.',
    icon: '🌄',
  },
];
