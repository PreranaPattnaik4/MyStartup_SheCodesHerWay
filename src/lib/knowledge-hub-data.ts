
import { BookOpen, FileText, Bot, Code, Briefcase, Target, Wrench, Map, Star, Download, LucideIcon } from 'lucide-react';

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  href: string;
  readTime?: string;
  trending?: boolean;
  popular?: boolean;
  dateAdded: string;
  image?: string;
  imageHint?: string;
  tags?: string[];
  downloadAvailable?: boolean;
  isComingSoon?: boolean;
}

export const hubCategories = [
  { id: 'tutorials', title: 'Tutorials', icon: BookOpen, description: 'Step-by-step technical and creative tutorials.' },
  { id: 'guides', title: 'Guides', icon: FileText, description: 'Comprehensive guides on technology, design, and leadership.' },
  { id: 'ai-tech', title: 'AI & Technology', icon: Bot, description: 'Learn about AI, prompting, and future technology.' },
  { id: 'coding-resources', title: 'Coding Resources', icon: Code, description: 'Tools, libraries, and coding resources.' },
  { id: 'career-development', title: 'Career Development', icon: Briefcase, description: 'Resources for personal branding and career growth.' },
  { id: 'interview-prep', title: 'Interview Preparation', icon: Target, description: 'Interview tips and preparation resources.' },
  { id: 'templates-toolkits', title: 'Templates & Toolkits', icon: Wrench, description: 'Downloadable templates and frameworks.' },
  { id: 'learning-roadmaps', title: 'Learning Roadmaps', icon: Map, description: 'Structured learning paths.' },
  { id: 'success-stories', title: 'Success Stories', icon: Star, description: 'Inspirational community stories.' },
  { id: 'free-resources', title: 'Free Resources', icon: Download, description: 'Free learning materials and downloads.' },
];

export const allResources: ResourceItem[] = [
  // Tutorials
  {
    id: 'tut-1',
    title: "Getting Started with AI: A Beginner's Guide",
    description: "An easy-to-follow introduction to Artificial Intelligence and how you can use it in your daily life.",
    category: 'tutorials',
    icon: BookOpen,
    href: '/knowledge-hub/tutorials',
    readTime: '5 min read',
    dateAdded: '2025-11-01',
    image: 'https://picsum.photos/seed/ai1/600/400',
    imageHint: 'AI assistant'
  },
  {
    id: 'tut-2',
    title: "Build Your First Personal Portfolio Website",
    description: "Learn how to build a professional portfolio using HTML, CSS, and basic JavaScript from scratch.",
    category: 'tutorials',
    icon: BookOpen,
    href: '/knowledge-hub/tutorials',
    readTime: '15 min read',
    dateAdded: '2025-11-05',
    image: 'https://picsum.photos/seed/port/600/400',
    imageHint: 'web portfolio'
  },
  // Guides
  {
    id: 'gui-1',
    title: "Complete Guide to Building a Tech Career in 2026",
    description: "A strategic roadmap for navigating the evolving tech landscape and landing your dream role.",
    category: 'guides',
    icon: FileText,
    href: '/knowledge-hub/guides',
    dateAdded: '2025-11-10',
    downloadAvailable: true,
    image: 'https://picsum.photos/seed/career/600/400',
    imageHint: 'tech career'
  },
  {
    id: 'gui-2',
    title: "Women in Tech Leadership Guide",
    description: "Actionable advice and strategies for women looking to step into leadership positions in the tech industry.",
    category: 'guides',
    icon: FileText,
    href: '/knowledge-hub/guides',
    dateAdded: '2025-11-12',
    downloadAvailable: false,
    isComingSoon: true,
    image: 'https://picsum.photos/seed/lead/600/400',
    imageHint: 'leadership'
  },
  // AI & Tech
  {
    id: 'ai-1',
    title: "Prompt Engineering Basics for Beginners",
    description: "Master the art of talking to AI models like ChatGPT and Gemini for maximum results.",
    category: 'ai-tech',
    icon: Bot,
    href: '/knowledge-hub/ai-tech',
    trending: true,
    readTime: '8 min read',
    dateAdded: '2025-11-15',
    image: 'https://picsum.photos/seed/prompt/600/400',
    imageHint: 'AI chat'
  },
  {
    id: 'ai-2',
    title: "Top AI Tools Every Professional Should Know",
    description: "Boost your productivity with these essential AI-powered tools across various domains.",
    category: 'ai-tech',
    icon: Bot,
    href: '/knowledge-hub/ai-tech',
    readTime: '6 min read',
    dateAdded: '2025-11-18',
    image: 'https://picsum.photos/seed/tools/600/400',
    imageHint: 'productivity tools'
  },
  // Coding Resources
  {
    id: 'cod-1',
    title: "Essential Git & GitHub Cheat Sheet",
    description: "The only reference you need for the most common Git commands and GitHub workflows.",
    category: 'coding-resources',
    icon: Code,
    href: '/knowledge-hub/coding-resources',
    dateAdded: '2025-11-20',
    image: 'https://picsum.photos/seed/git/600/400',
    imageHint: 'coding git'
  },
  {
    id: 'cod-2',
    title: "Top Free Platforms to Learn Programming",
    description: "A curated list of high-quality, free resources to learn coding from the best.",
    category: 'coding-resources',
    icon: Code,
    href: '/knowledge-hub/coding-resources',
    dateAdded: '2025-11-22',
    image: 'https://picsum.photos/seed/learn/600/400',
    imageHint: 'code learning'
  },
  // Career Development
  {
    id: 'car-1',
    title: "How to Create an ATS-Friendly Resume",
    description: "Ensure your resume gets past the robots and into the hands of real recruiters.",
    category: 'career-development',
    icon: Briefcase,
    href: '/knowledge-hub/career-development',
    dateAdded: '2025-11-25',
    image: 'https://picsum.photos/seed/resume/600/400',
    imageHint: 'resume design'
  },
  {
    id: 'car-2',
    title: "LinkedIn Profile Optimization Checklist",
    description: "Simple steps to make your profile stand out to recruiters and industry peers.",
    category: 'career-development',
    icon: Briefcase,
    href: '/knowledge-hub/career-development',
    dateAdded: '2025-11-27',
    downloadAvailable: true,
    image: 'https://picsum.photos/seed/linked/600/400',
    imageHint: 'linkedin profile'
  },
  // Interview Preparation
  {
    id: 'int-1',
    title: "Top 50 Technical Interview Questions",
    description: "The most common technical questions asked in interviews for software roles.",
    category: 'interview-prep',
    icon: Target,
    href: '/knowledge-hub/interview-prep',
    dateAdded: '2025-11-29',
    image: 'https://picsum.photos/seed/interview/600/400',
    imageHint: 'interview prep'
  },
  {
    id: 'int-2',
    title: "HR Interview Preparation Guide",
    description: "Master the behavioral and soft-skill questions that determine company fit.",
    category: 'interview-prep',
    icon: Target,
    href: '/knowledge-hub/interview-prep',
    dateAdded: '2025-12-01',
    image: 'https://picsum.photos/seed/hr/600/400',
    imageHint: 'hr interview'
  },
  // Templates & Toolkits
  {
    id: 'tem-1',
    title: "Professional Resume Template",
    description: "A clean, modern, and high-impact resume template for any tech or creative role.",
    category: 'templates-toolkits',
    icon: Wrench,
    href: '/knowledge-hub/templates-toolkits',
    dateAdded: '2025-12-03',
    downloadAvailable: false,
    isComingSoon: true,
    image: 'https://picsum.photos/seed/temp1/600/400',
    imageHint: 'resume template'
  },
  {
    id: 'tem-2',
    title: "Project Planning Template",
    description: "Keep your team and projects organized with this easy-to-use planning framework.",
    category: 'templates-toolkits',
    icon: Wrench,
    href: '/knowledge-hub/templates-toolkits',
    dateAdded: '2025-12-05',
    downloadAvailable: false,
    isComingSoon: true,
    image: 'https://picsum.photos/seed/temp2/600/400',
    imageHint: 'project plan'
  },
  // Learning Roadmaps
  {
    id: 'roa-1',
    title: "AI Engineer Roadmap",
    description: "A step-by-step path from zero to becoming a proficient AI and machine learning engineer.",
    category: 'learning-roadmaps',
    icon: Map,
    href: '/knowledge-hub/learning-roadmaps',
    dateAdded: '2025-12-07',
    image: 'https://picsum.photos/seed/road1/600/400',
    imageHint: 'ai roadmap'
  },
  {
    id: 'roa-2',
    title: "Front-End Developer Roadmap",
    description: "Master HTML, CSS, JavaScript, and modern frameworks like React with this guide.",
    category: 'learning-roadmaps',
    icon: Map,
    href: '/knowledge-hub/learning-roadmaps',
    dateAdded: '2025-12-09',
    image: 'https://picsum.photos/seed/road2/600/400',
    imageHint: 'frontend roadmap'
  },
  // Success Stories
  {
    id: 'suc-1',
    title: "From Beginner to Tech Professional",
    description: "The inspiring journey of how one of our community members pivoted into tech.",
    category: 'success-stories',
    icon: Star,
    href: '/knowledge-hub/success-stories',
    dateAdded: '2025-12-11',
    image: 'https://picsum.photos/seed/story1/600/400',
    imageHint: 'success story'
  },
  {
    id: 'suc-2',
    title: "Building Confidence Through Learning",
    description: "How structured learning and community support helped rebuild professional confidence.",
    category: 'success-stories',
    icon: Star,
    href: '/knowledge-hub/success-stories',
    dateAdded: '2025-12-13',
    image: 'https://picsum.photos/seed/story2/600/400',
    imageHint: 'confidence growth'
  },
  // Free Resources
  {
    id: 'fre-1',
    title: "AI Learning Starter Pack",
    description: "Everything you need to kickstart your journey into the world of Artificial Intelligence.",
    category: 'free-resources',
    icon: Download,
    href: '/knowledge-hub/free-resources',
    popular: true,
    dateAdded: '2025-12-15',
    image: 'https://picsum.photos/seed/free1/600/400',
    imageHint: 'free bundle'
  },
  {
    id: 'fre-2',
    title: "Career Growth Resource Bundle",
    description: "A collection of guides and tools to accelerate your professional development.",
    category: 'free-resources',
    icon: Download,
    href: '/knowledge-hub/free-resources',
    dateAdded: '2025-12-17',
    image: 'https://picsum.photos/seed/free2/600/400',
    imageHint: 'career bundle'
  },
];
