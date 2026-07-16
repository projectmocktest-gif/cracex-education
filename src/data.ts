import { Feature, Course, JobNotification, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Career', href: '#career' },
  { label: 'Our Courses', href: '#courses' },
  { label: 'Recent Job Notification', href: '#jobs' },
  { label: 'CracEx App', href: '#app' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Premium Coaching & Guidance',
    description: 'Learn from highly experienced faculty and expert educators who have cracked these exams themselves.',
    iconName: 'GraduationCap',
  },
  {
    id: 2,
    title: 'Most Affordable Fee Structure',
    description: 'Quality education offering the best value and lowest prices in the region without compromising standards.',
    iconName: 'IndianRupee',
  },
  {
    id: 3,
    title: 'Rigorous Online Mock Tests',
    description: 'Robust student assessment platform to track exam readiness with detailed analytics.',
    iconName: 'FileEdit',
  },
  {
    id: 4,
    title: 'Hybrid Learning Model',
    description: 'The perfect blend of traditional classroom teaching and accessible digital resources.',
    iconName: 'Laptop',
  },
  {
    id: 5,
    title: 'Advanced Learning Methodology',
    description: 'Concept-driven, scientific shortcuts and systematic teaching techniques to save time.',
    iconName: 'Lightbulb',
  },
  {
    id: 6,
    title: 'Exam-Focused Batches',
    description: 'Targeted preparation strategies designed specifically for individual government exams.',
    iconName: 'Target',
  },
  {
    id: 7,
    title: 'Trilingual Medium of Study',
    description: 'Instruction available in Bengali, Hindi, and English for absolute clarity and comfort.',
    iconName: 'Languages',
  },
  {
    id: 8,
    title: 'Personalized Care & Assessment',
    description: 'Dedicated performance tracking and regular individual evaluation to ensure growth.',
    iconName: 'UserCheck',
  },
  {
    id: 9,
    title: 'Doubt-Clearing & Grooming',
    description: 'Interactive doubt resolution combined with interview and personality grooming sessions.',
    iconName: 'MessageCircleQuestion',
  },
];

export const COURSES: Course[] = [
  { id: 'psc', name: 'WBPSC', shortDesc: 'State Public Service Commission', iconName: 'Landmark' },
  { id: 'ssc', name: 'SSC', shortDesc: 'Staff Selection Commission (CGL, CHSL, MTS)', iconName: 'Briefcase' },
  { id: 'railway', name: 'Railway (RRB)', shortDesc: 'NTPC, Group D, ALP', iconName: 'Train' },
  { id: 'banking', name: 'Banking', shortDesc: 'IBPS, SBI, RBI (PO & Clerk)', iconName: 'PiggyBank' },
  { id: 'police', name: 'WBP & KP', shortDesc: 'West Bengal & Kolkata Police', iconName: 'ShieldCheck' },
  { id: 'tet', name: 'TET', shortDesc: 'Teacher Eligibility Test (Primary/Upper)', iconName: 'BookOpen' },
  { id: 'icds', name: 'ICDS', shortDesc: 'Supervisor & Worker Exams', iconName: 'Users' },
  { id: 'panchayat', name: 'Gram Panchayat', shortDesc: 'State Panchayat Recruitment', iconName: 'Map' },
];

export const MOCK_JOBS: JobNotification[] = [
  { id: '1', title: 'SSC CGL 2024 Notification Released', date: '2024-06-24', department: 'SSC', isNew: true },
  { id: '2', title: 'WBPSC Clerkship Admit Card Out', date: '2024-06-20', department: 'WBPSC' },
  { id: '3', title: 'RRB NTPC Upcoming Vacancies Announced', date: '2024-06-15', department: 'Railway', isNew: true },
  { id: '4', title: 'IBPS PO 2024 Short Notice', date: '2024-06-10', department: 'Banking' },
  { id: '5', title: 'Kolkata Police Constable Final Result', date: '2024-06-05', department: 'WBP & KP' },
  { id: '6', title: 'Primary TET Interview Schedule', date: '2024-06-01', department: 'WB Primary Board' },
];

export const HERO_SLIDES = [
  {
    id: 'slide1',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
    alt: 'Students studying in a classroom'
  },
  {
    id: 'slide2',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
    alt: 'Person writing in notebook'
  },
  {
    id: 'slide3',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    alt: 'Online test taking'
  }
];
