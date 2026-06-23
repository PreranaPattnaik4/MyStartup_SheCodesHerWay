
import { BookOpen, FileText, Bot, Code, Briefcase, Target, Wrench, Map, Star, Download, LucideIcon, Rocket, Heart, Sparkles, Zap, ShieldCheck, PenTool, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import React from 'react';

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
  content?: React.ReactNode;
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
  // Interview Prep
  {
    id: 'hr-interview-prep',
    title: "HR Interview Preparation Guide",
    description: "Master common HR questions, build confidence, and secure your dream job with this comprehensive guide.",
    category: 'interview-prep',
    icon: Target,
    href: '/knowledge-hub/article/hr-interview-prep',
    readTime: '15 min read',
    dateAdded: '2025-11-25',
    trending: true,
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            The HR interview is often the final step of the recruitment process. While technical interviews assess your skills and knowledge, HR interviews evaluate your personality, communication abilities, cultural fit, attitude, and career aspirations.
          </p>
          <p className="mt-4 text-lg text-foreground/80 leading-relaxed font-semibold">
            A successful HR interview demonstrates that you are not only capable of performing the job but also a valuable addition to the organization.
          </p>
        </section>

        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ShieldCheck className="text-primary" /> Why HR Interviews Matter
          </h2>
          <p className="mb-4 font-medium">HR professionals assess:</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Communication Skills", "Teamwork & Collaboration", "Problem-Solving Ability",
              "Professional Attitude", "Leadership Potential", "Adaptability & Flexibility",
              "Long-Term Career Goals", "Cultural Fit"
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-green-500" /> {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Before the Interview</h2>
          <h3 className="text-xl font-bold text-primary mb-2">Research the Company</h3>
          <p className="text-foreground/80 mb-4">Learn about: Company mission and vision, products and services, company culture, recent achievements, and industry trends.</p>
          <div className="bg-muted p-6 rounded-xl border">
            <p className="font-bold mb-2">Sample Answer: "Why do you want to work with us?"</p>
            <p className="italic text-foreground/70">
              "I admire the company's focus on innovation and customer satisfaction. I was particularly impressed by your recent initiatives in AI-driven solutions. I believe my skills and learning mindset align well with your mission and long-term vision."
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Common HR Interview Questions</h2>
          
          <div className="border-l-4 border-primary pl-6 space-y-4">
            <h3 className="text-xl font-bold">1. Tell Me About Yourself</h3>
            <p className="text-foreground/80 italic">"I recently completed my studies in Computer Science and have been focusing on developing skills in Artificial Intelligence, NLP, and Python. I enjoy learning new technologies and working on practical projects. My goal is to build a career in AI and contribute to innovative technology solutions."</p>
            <div className="flex gap-4 text-sm font-medium">
              <span className="text-green-600">✔ Keep it under 2 minutes</span>
              <span className="text-green-600">✔ Focus on professional info</span>
            </div>
          </div>

          <div className="border-l-4 border-primary pl-6 space-y-4">
            <h3 className="text-xl font-bold">2. What Are Your Strengths?</h3>
            <p className="text-foreground/80 italic">"My strengths include problem-solving, continuous learning, and effective communication. I enjoy tackling challenges, learning new technologies, and collaborating with others to achieve common goals."</p>
          </div>

          <div className="border-l-4 border-primary pl-6 space-y-4">
            <h3 className="text-xl font-bold">3. What Are Your Weaknesses?</h3>
            <p className="text-foreground/80 italic">"I used to hesitate when speaking in large groups. To improve, I actively participate in presentations and discussions, which has significantly increased my confidence."</p>
            <p className="text-xs text-muted-foreground uppercase font-bold">Rule: Always mention steps taken to improve.</p>
          </div>
        </section>

        <section className="bg-secondary/30 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">The STAR Method for Conflict Resolution</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { l: "S", t: "Situation", d: "Describe the problem." },
              { l: "T", t: "Task", d: "Explain your responsibility." },
              { l: "A", t: "Action", d: "Describe what you did." },
              { l: "R", t: "Result", d: "Share the positive outcome." }
            ].map(step => (
              <div key={step.l} className="bg-white p-4 rounded-xl shadow-sm border">
                <span className="text-3xl font-black text-primary/20">{step.l}</span>
                <h4 className="font-bold text-primary">{step.t}</h4>
                <p className="text-sm text-foreground/70">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Body Language Tips</h2>
            <ul className="space-y-2">
              {["Maintain eye contact", "Sit confidently", "Smile naturally", "Listen carefully", "Show enthusiasm"].map(tip => (
                <li key={tip} className="flex items-center gap-2 text-sm"><CheckCircle2 className="text-green-500 h-4 w-4" /> {tip}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Virtual Interview Tips</h2>
            <ul className="space-y-2">
              {["Test mic & camera", "Check internet connection", "Professional background", "Join 10 mins early"].map(tip => (
                <li key={tip} className="flex items-center gap-2 text-sm"><CheckCircle2 className="text-primary h-4 w-4" /> {tip}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="bg-primary text-primary-foreground p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-2">Final Formula for Success</h2>
          <p className="text-primary-foreground/90 text-lg italic">"Prepare • Practice • Communicate • Demonstrate • Follow Up"</p>
        </div>
      </div>
    )
  },
  // Tutorials
  {
    id: 'tut-vibe-1',
    title: "Intro to Vibe Coding: Build without Fear",
    description: "Learn how to use natural language and intent to create applications using AI-assisted tools.",
    category: 'tutorials',
    icon: Zap,
    href: '/knowledge-hub/article/tut-vibe-1',
    readTime: '6 min read',
    dateAdded: '2025-11-20',
    trending: true,
  },
  {
    id: 'tut-canva-1',
    title: "Canva for Creative Content: Design Basics",
    description: "A step-by-step guide to creating professional social media graphics and brand assets.",
    category: 'tutorials',
    icon: Sparkles,
    href: '/knowledge-hub/article/tut-canva-1',
    readTime: '8 min read',
    dateAdded: '2025-11-22',
  },
  // Guides
  {
    id: 'gui-lead-1',
    title: "Confidence & Leadership Foundations",
    description: "A comprehensive guide to finding your voice and leading with authenticity in any field.",
    category: 'guides',
    icon: Heart,
    href: '/knowledge-hub/article/gui-lead-1',
    dateAdded: '2025-11-25',
    downloadAvailable: true,
  },
  {
    id: 'gui-biz-1',
    title: "Entrepreneurship & Business Mindset",
    description: "Moving from idea to execution: How to build a sustainable startup or small business.",
    category: 'guides',
    icon: Rocket,
    href: '/knowledge-hub/article/gui-biz-1',
    dateAdded: '2025-11-28',
  },
  // AI & Tech
  {
    id: 'ai-resp-1',
    title: "AI Literacy & Responsible AI Practices",
    description: "Understand the ethics of AI, bias detection, and how to use generative models responsibly.",
    category: 'ai-tech',
    icon: Bot,
    href: '/knowledge-hub/article/ai-resp-1',
    trending: true,
    readTime: '10 min read',
    dateAdded: '2025-12-01',
  },
  {
    id: 'ai-tools-1',
    title: "Mastering Prompt Writing as a Skill",
    description: "How to craft clear, goal-oriented prompts for research, content, and digital productivity.",
    category: 'ai-tech',
    icon: Bot,
    href: '/knowledge-hub/article/ai-tools-1',
    readTime: '7 min read',
    dateAdded: '2025-12-05',
  },
  // Coding Resources
  {
    id: 'cod-fund-1',
    title: "Coding & Technical Fundamentals",
    description: "The core concepts of the web: HTML, CSS, and JavaScript for total beginners.",
    category: 'coding-resources',
    icon: Code,
    href: '/knowledge-hub/article/cod-fund-1',
    dateAdded: '2025-12-08',
  },
  {
    id: 'cod-cloud-1',
    title: "Google Firebase & Cloud Basics",
    description: "A resource list for understanding hosting, databases, and authentication for your projects.",
    category: 'coding-resources',
    icon: Code,
    href: '/knowledge-hub/article/cod-cloud-1',
    dateAdded: '2025-12-10',
  },
  // Career Development
  {
    id: 'car-brand-1',
    title: "Personal Branding & Digital Presence",
    description: "Build an online identity that reflects your skills, values, and professional goals.",
    category: 'career-development',
    icon: Briefcase,
    href: '/knowledge-hub/article/car-brand-1',
    dateAdded: '2025-12-12',
  },
  {
    id: 'car-soft-1',
    title: "Emotional Intelligence & Self-Growth",
    description: "Developing the soft skills necessary for resilience, teamwork, and long-term career success.",
    category: 'career-development',
    icon: Briefcase,
    href: '/knowledge-hub/article/car-soft-1',
    dateAdded: '2025-12-15',
  },
  // Interview Preparation
  {
    id: 'int-tech-1',
    title: "Coding Interview Walkthroughs",
    description: "Practice solving common technical problems with guided logic and AI-assisted explanations.",
    category: 'interview-prep',
    icon: Target,
    href: '/knowledge-hub/article/int-tech-1',
    dateAdded: '2025-12-18',
  },
  // Templates & Toolkits
  {
    id: 'tem-res-1',
    title: "Tech-Ready Resume Template",
    description: "A clean, structured template optimized for technical and digital career applications.",
    category: 'templates-toolkits',
    icon: Wrench,
    href: '/knowledge-hub/article/tem-res-1',
    dateAdded: '2025-12-22',
    downloadAvailable: false,
    isComingSoon: true,
  },
  {
    id: 'tem-pitch-1',
    title: "Startup Pitch Deck Toolkit",
    description: "Essential slides and structure for presenting your business idea to partners and mentors.",
    category: 'templates-toolkits',
    icon: Wrench,
    href: '/knowledge-hub/article/tem-pitch-1',
    dateAdded: '2025-12-25',
    downloadAvailable: false,
    isComingSoon: true,
  },
  // Learning Roadmaps
  {
    id: 'roa-tech-1',
    title: "Women in Tech Career Roadmap",
    description: "From digital literacy to cloud-based application development: Your path into technology.",
    category: 'learning-roadmaps',
    icon: Map,
    href: '/knowledge-hub/article/roa-tech-1',
    dateAdded: '2025-12-28',
  },
  {
    id: 'roa-cre-1',
    title: "Creative Entrepreneur Roadmap",
    description: "A step-by-step journey from storytelling to building a profitable digital audience.",
    category: 'learning-roadmaps',
    icon: Map,
    href: '/knowledge-hub/article/roa-cre-1',
    dateAdded: '2025-12-30',
  },
  // Success Stories
  {
    id: 'suc-comm-1',
    title: "Community Impact through Real-World Projects",
    description: "How one Sangini used her tech skills to solve a local problem and inspire others.",
    category: 'success-stories',
    icon: Star,
    href: '/knowledge-hub/article/suc-comm-1',
    dateAdded: '2026-01-02',
  },
  {
    id: 'suc-break-1',
    title: "Returning to Work with Digital Confidence",
    description: "A story of resilience and rediscovery after a long career break.",
    category: 'success-stories',
    icon: Star,
    href: '/knowledge-hub/article/suc-break-1',
    dateAdded: '2026-01-05',
  },
  // Free Resources
  {
    id: 'fre-prod-1',
    title: "Digital Literacy & Productivity Starter Kit",
    description: "Essential tools and workflows to manage your time and digital tasks effectively.",
    category: 'free-resources',
    icon: Download,
    href: '/knowledge-hub/article/fre-prod-1',
    popular: true,
    dateAdded: '2026-01-08',
  },
  {
    id: 'fre-ai-1',
    title: "Ethical AI Checklist",
    description: "A simple guide to ensure your AI-assisted work remains responsible and transparent.",
    category: 'free-resources',
    icon: Download,
    href: '/knowledge-hub/article/fre-ai-1',
    dateAdded: '2026-01-10',
  },
];
