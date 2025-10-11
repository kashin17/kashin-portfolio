import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { connectDB } from '../config/db.js';
import User from '../models/User.js';
import Project from '../models/Project.js';
import Experience from '../models/Experience.js';
import Skill from '../models/Skill.js';

await connectDB();
await Promise.all([User.deleteMany({}), Project.deleteMany({}), Experience.deleteMany({}), Skill.deleteMany({})]);

const admin = await User.create({
  name: 'Admin',
  email: 'admin@kashin.dev',
  passwordHash: await bcrypt.hash('Admin@123', 10),
  role: 'admin'
});

// Skills (sample from resume)
await Skill.insertMany([
  { name: 'Python', group: 'language', level: 4 },
  { name: 'Java', group: 'language', level: 4 },
  { name: 'C', group: 'language', level: 3 },
  { name: 'JavaScript', group: 'language', level: 4 },
  { name: 'SQL', group: 'language', level: 4 },
  { name: 'React', group: 'framework', level: 4 },
  { name: 'Node.js', group: 'framework', level: 4 },
  { name: 'Django', group: 'framework', level: 4 },
  { name: 'SpringBoot', group: 'framework', level: 3 },
  { name: 'Flutter', group: 'framework', level: 3 },
  { name: 'MongoDB', group: 'database', level: 4 },
  { name: 'MySQL', group: 'database', level: 4 },
  { name: 'PostgreSQL', group: 'database', level: 3 },
  { name: 'Power BI', group: 'tool', level: 3 },
  { name: 'PowerApps', group: 'tool', level: 4 },
  { name: 'Power Automate', group: 'tool', level: 4 },
  { name: 'SharePoint', group: 'tool', level: 4 }
]);

// Experience
await Experience.insertMany([
  {
    company: 'Forescribe',
    role: 'Backend Developer Intern',
    startDate: new Date('2025-06-01'),
    endDate: null,
    location: 'Remote',
    bullets: [
      'Designed a scalable Timeline backend (NestJS, MongoDB, Prisma).',
      'Added real-time audit logging, synthetic events, cursor-based pagination, and batched queries.'
    ]
  },
  {
    company: 'Escorts Kubota Limited',
    role: 'Software Engineer Intern',
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-05-31'),
    location: 'Faridabad, Haryana',
    bullets: [
      'Built a no-code/low-code FormBuilder (Django, React, PostgreSQL).',
      'Implemented AI Expense Audit Tool using Gemini LLM API.'
    ]
  },
  {
    company: 'NHPC Limited',
    role: 'Software Engineer Intern',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-09-30'),
    location: 'Faridabad, Haryana',
    bullets: [
      'Developed a Flutter app for attendance with Node.js backend and MySQL.',
      'Implemented GPS-based geofencing.'
    ]
  },
  {
    company: 'sbPowerDev (Startup)',
    role: 'Analyst Intern',
    startDate: new Date('2022-04-01'),
    endDate: new Date('2023-04-30'),
    location: 'Delhi, Noida',
    bullets: [
      'Built PowerApps apps and automated workflows with Power Automate.',
      'Designed Power BI dashboards and integrated SharePoint/Dataverse/Dynamics 365.'
    ]
  }
]);

// Projects from resume
await Project.insertMany([
  {
    title: 'Enterprise ChatBot Application',
    slug: 'enterprise-chatbot',
    summary: 'Django + Gemini LLM chatbot for secure document Q&A.',
    description: 'Upload PDFs/Docs and query via natural language. Backend manages file parsing and LLM routing.',
    techStack: ['Django','Gemini','HTML','Tailwind','JavaScript'],
    repoUrl: 'https://github.com/kashin17/enterprise-chatbot',
    liveUrl: '',
    imageUrl: '/uploads/sample-chatbot.png',
    galleryImages: [],
    galleryVideos: [],
    order: 1
  },
  {
    title: 'AI Expense Audit Tool',
    slug: 'ai-expense-audit',
    summary: 'Automated PDF extraction for reimbursements using Gemini API.',
    techStack: ['Django','Python','Gemini'],
    repoUrl: '',
    imageUrl: '/uploads/sample-expense.png',
    galleryImages: [],
    galleryVideos: [],
    order: 2
  },
  {
    title: 'Attendance Tracking Mobile App',
    slug: 'attendance-tracker',
    summary: 'Flutter mobile app with Node.js backend and GPS validation.',
    techStack: ['Flutter','Node.js','MySQL'],
    imageUrl: '/uploads/sample-attendance.png',
    galleryImages: [],
    galleryVideos: [],
    order: 3
  },
  {
    title: 'Config Service',
    slug: 'config-service',
    summary: 'Spring Boot + Thymeleaf configuration management with MySQL.',
    techStack: ['SpringBoot','Thymeleaf','MySQL'],
    imageUrl: '/uploads/sample-config.png',
    galleryImages: [],
    galleryVideos: [],
    order: 4
  },
  {
    title: 'Leave Application System',
    slug: 'leave-system',
    summary: 'PowerApps + Automate + SharePoint workflow for leave approvals.',
    techStack: ['PowerApps','Power Automate','SharePoint'],
    imageUrl: '/uploads/sample-leave.png',
    galleryImages: [],
    galleryVideos: [],
    order: 5
  },
  {
    title: 'Timeline Backend (Forescribe)',
    slug: 'timeline-backend',
    summary: 'NestJS + MongoDB timeline with audit logs and cursor pagination.',
    techStack: ['NestJS','MongoDB','Prisma','Node.js'],
    imageUrl: '/uploads/sample-timeline.png',
    galleryImages: [],
    galleryVideos: [],
    order: 6
  }
]);

console.log('✅ Seeded admin, skills, experience, and projects');
await mongoose.disconnect();
