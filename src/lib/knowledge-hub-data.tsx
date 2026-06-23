import { 
  BookOpen, 
  FileText, 
  Bot, 
  Code, 
  Briefcase, 
  Target, 
  Wrench, 
  Map, 
  Star, 
  Download, 
  LucideIcon, 
  Rocket, 
  Heart, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  PenTool, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Users, 
  Mic, 
  RefreshCw, 
  Lightbulb, 
  Pilcrow, 
  Eye, 
  Cpu, 
  UserCheck, 
  Goal, 
  DollarSign, 
  Megaphone, 
  LayoutTemplate,
  ShoppingBag,
  ArrowRight,
  Settings,
  ListChecks,
  UserCircle
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
  {
    id: 'car-return-guide',
    title: "Returning to Work After a Career Break",
    description: "Rebuild confidence, identify transferable skills, and successfully transition back into the professional world.",
    category: 'career-development',
    icon: RefreshCw,
    href: '/knowledge-hub/article/car-return-guide',
    readTime: '12 min read',
    dateAdded: '2026-03-01',
    trending: true,
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4 font-headline">Introduction</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Taking a career break is more common than ever. Whether you paused your professional journey due to family responsibilities, education, caregiving, health reasons, relocation, personal commitments, or other life circumstances, returning to work can feel both exciting and challenging.
          </p>
          <p className="mt-4 text-lg text-foreground/80 leading-relaxed font-semibold">
            The good news is that a career break does not define your future. Your experiences, skills, resilience, and willingness to learn can become valuable strengths as you re-enter the workforce or begin a completely new career path.
          </p>
        </section>

        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ShieldCheck className="text-primary" /> Understanding Career Breaks
          </h2>
          <p className="mb-4">Common reasons for career breaks include:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Raising children", "Caring for family members", "Pursuing education",
              "Personal development", "Relocation", "Health and wellness",
              "Entrepreneurship", "Volunteering"
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-green-500" /> {item}
              </li>
            ))}
          </div>
          <p className="mt-6 text-sm italic text-muted-foreground">Many successful professionals have taken career breaks and later returned stronger and more focused.</p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold mb-4 font-headline">Changing Your Mindset</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-rose-50 border-rose-100">
               <CardHeader>
                  <CardTitle className="text-rose-700">Common Worries</CardTitle>
               </CardHeader>
               <CardContent className="text-rose-900/80 text-sm space-y-2">
                  <p>• Being out of touch with trends</p>
                  <p>• Fast technology changes</p>
                  <p>• Competition from younger candidates</p>
                  <p>• Explaining gaps in the resume</p>
               </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-100">
               <CardHeader>
                  <CardTitle className="text-green-700">Gained Strengths</CardTitle>
               </CardHeader>
               <CardContent className="text-green-900/80 text-sm space-y-2">
                  <p>• Enhanced resilience & adaptability</p>
                  <p>• Advanced problem-solving</p>
                  <p>• Improved time management</p>
                  <p>• Emotional intelligence & leadership</p>
               </CardContent>
            </Card>
          </div>
          <div className="bg-muted p-6 rounded-xl border text-center">
            <p className="font-bold text-primary italic">"Your career is not defined by where you paused—it is defined by the courage to begin again."</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-headline">Identifying Transferable Skills</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { t: "Communication", d: "Managing family or community work improves clarity and empathy.", i: Megaphone },
              { t: "Leadership", i: Users, d: "Coordinating events or responsibilities demonstrates authority." },
              { t: "Problem-Solving", i: Lightbulb, d: "Daily life often requires creative, instant solutions." },
              { t: "Project Management", i: LayoutTemplate, d: "Planning budgets and schedules is core project management." }
            ].map(skill => (
              <div key={skill.t} className="flex items-start gap-4 p-5 border rounded-xl bg-white shadow-sm">
                <div className="bg-primary/10 p-2.5 rounded-full">
                  <skill.i className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{skill.t}</h4>
                  <p className="text-sm text-foreground/70">{skill.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-secondary/20 p-8 rounded-3xl border border-secondary/30">
          <h2 className="text-2xl font-bold mb-6 font-headline">Action Plan for Re-entry</h2>
          <div className="grid gap-4">
             {[
               "Assess your current skills and interests.",
               "Choose a target career path (Tech, Marketing, etc.).",
               "Identify and bridge skill gaps through upskilling.",
               "Complete relevant training and certifications.",
               "Update your resume and optimize your LinkedIn profile.",
               "Build a portfolio or project showcase.",
               "Start networking and engaging in communities.",
               "Apply consistently and track your progress."
             ].map((step, i) => (
               <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border shadow-sm">
                 <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                   {i + 1}
                 </div>
                 <p className="font-medium text-foreground/80">{step}</p>
               </div>
             ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 font-headline">Professional Presence</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2"><FileText className="text-primary"/> The Resume</h3>
              <p className="text-foreground/80">Don't hide the gap. Explain it confidently.</p>
              <div className="bg-muted p-4 rounded-lg border italic text-sm">
                "Career Break (2020–2025): Focused on family responsibilities while continuously developing skills through online learning, certifications, and personal projects."
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2"><Users className="text-primary"/> Networking</h3>
              <p className="text-foreground/80">Relationships over job requests. Attend webinars, join Sangini circles, and connect with mentors on LinkedIn.</p>
            </div>
          </div>
        </section>

        <div className="bg-primary text-primary-foreground p-10 rounded-3xl text-center space-y-6 shadow-xl">
          <h2 className="text-3xl font-bold font-headline">Reflection Activity</h2>
          <p className="max-w-2xl mx-auto opacity-90">Take 10 minutes to write down: your top 3 strengths, 2 new skills you want to learn, and the first action you will take this week.</p>
          <Button variant="secondary" className="font-bold">Download Reflection Sheet <Download className="ml-2 h-4 w-4" /></Button>
        </div>

        <section className="text-center pt-8 border-t">
          <h2 className="text-3xl font-bold font-headline mb-4">Conclusion</h2>
          <p className="text-xl text-foreground/80 leading-relaxed italic max-w-3xl mx-auto">
            "By investing in learning, building confidence, and taking consistent action, you can successfully restart your career journey and create a future filled with new opportunities."
          </p>
        </section>
      </div>
    )
  },
  {
    id: 'bus-basics-1',
    title: "Business Basics: Value Creation & Finance",
    description: "Learn the core components of a business and fundamental financial concepts like revenue, expenses, and profit.",
    category: 'guides',
    icon: Briefcase,
    href: '/knowledge-hub/article/bus-basics-1',
    readTime: '15 min read',
    dateAdded: '2026-02-01',
    trending: true,
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4 font-headline">Introduction</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Every successful business, whether a small startup, a global corporation, or a social enterprise, exists for one primary reason: <strong>to create value</strong>. Businesses solve problems, fulfill needs, and improve people's lives through products or services. Understanding how businesses create value and manage finances is essential for aspiring entrepreneurs, innovators, and future leaders.
          </p>
        </section>

        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="text-primary" /> Learning Objectives
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Understand the concept of value creation",
              "Identify the key components of a business",
              "Explain how businesses generate revenue",
              "Understand marketing and operations",
              "Learn basic financial concepts (Profit, Budgeting)",
              "Apply fundamentals to a real-world idea"
            ].map(obj => (
              <li key={obj} className="flex items-start gap-2 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-headline">What is Value Creation?</h2>
          <p className="text-foreground/80 mb-6 leading-relaxed">
            Value creation occurs when a business provides a solution that improves a customer's life, saves time, reduces costs, or fulfills a need. Customers choose products and services because they perceive them as valuable.
          </p>
          <div className="rounded-xl border shadow-sm overflow-hidden bg-white">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="font-bold">Need</TableHead>
                  <TableHead className="font-bold">Solution</TableHead>
                  <TableHead className="font-bold">Value Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { n: "Learning new skills", s: "Online learning platform", v: "Convenient education" },
                  { n: "Transportation", s: "Ride-sharing app", v: "Faster travel" },
                  { n: "Communication", s: "Messaging application", v: "Instant connectivity" },
                  { n: "Shopping", s: "E-commerce platform", v: "Convenience and variety" }
                ].map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.n}</TableCell>
                    <TableCell>{row.s}</TableCell>
                    <TableCell className="font-medium text-primary">{row.v}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold mb-4 font-headline">The Five Core Components of a Business</h2>
          
          <div className="grid gap-6">
            {[
              { id: 1, title: "Product or Service", desc: "What the business offers to solve a problem.", icon: ShoppingBag, color: "bg-blue-50 border-blue-100 text-blue-700" },
              { id: 2, title: "Customers", desc: "Individuals or organizations that use the product.", icon: Users, color: "bg-green-50 border-green-100 text-green-700" },
              { id: 3, title: "Revenue", desc: "Money generated from selling your offerings.", icon: DollarSign, color: "bg-amber-50 border-amber-100 text-amber-700" },
              { id: 4, title: "Marketing", desc: "Reaching potential customers and communicating value.", icon: Megaphone, color: "bg-rose-50 border-rose-100 text-rose-700" },
              { id: 5, title: "Operations", desc: "Activities required to deliver the product efficiently.", icon: Settings, color: "bg-indigo-50 border-indigo-100 text-indigo-700" }
            ].map((comp) => (
              <Card key={comp.id} className={cn("border-none shadow-sm", comp.color)}>
                <CardHeader className="flex flex-row items-center gap-4 py-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <comp.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">{comp.id}. {comp.title}</CardTitle>
                    <p className="text-sm opacity-90">{comp.desc}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-secondary/30 p-8 rounded-2xl border">
          <h2 className="text-2xl font-bold mb-6 font-headline text-center">Case Study: AI Learning Platform</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            {[
              { t: "Product", d: "AI learning app", i: Bot },
              { t: "Customers", d: "Students & Pros", i: Users },
              { t: "Revenue", d: "Subscriptions", i: DollarSign },
              { t: "Marketing", d: "Social Media", i: Megaphone },
              { t: "Operations", d: "Cloud Hosting", i: RefreshCw }
            ].map(item => (
              <div key={item.t} className="bg-white p-4 rounded-xl border shadow-sm">
                <item.i className="h-6 w-6 mx-auto mb-2 text-primary" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">{item.t}</h4>
                <p className="text-sm font-semibold mt-1">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold mb-4 font-headline">Financial Fundamentals</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-blue-500 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2"><TrendingUp className="h-5 w-5 text-blue-500"/> Revenue</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-3 rounded text-sm font-mono">Revenue = Sales × Price</div>
                <p className="text-sm text-foreground/70 italic">Total money earned before expenses.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-rose-500 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2"><Download className="h-5 w-5 text-rose-500"/> Expenses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-3 rounded text-sm font-mono">Total Operating Costs</div>
                <p className="text-sm text-foreground/70 italic">Hosting, salaries, marketing, etc.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2"><Zap className="h-5 w-5 text-green-500"/> Profit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-3 rounded text-sm font-mono">Profit = Revenue - Expenses</div>
                <p className="text-sm text-foreground/70 italic text-green-600 font-bold">The money you keep.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="bg-white p-8 rounded-2xl border border-dashed border-primary/40 text-center">
            <h3 className="font-bold text-primary text-2xl mb-4 flex items-center justify-center gap-2">
              <PenTool className="h-6 w-6" /> Practical Activity
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              Download our <strong>Business Model Canvas</strong> and try to draft your first 1-month budget including estimated revenue and marketing costs.
            </p>
             <Button className="font-bold">
               Download Template <Download className="ml-2 h-4 w-4" />
             </Button>
          </div>
        </section>

        <div className="bg-primary text-primary-foreground p-10 rounded-3xl text-center space-y-6 shadow-xl">
          <h2 className="text-3xl font-bold font-headline">Key Takeaways</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {[
              "Businesses create value by solving problems.",
              "Revenue is gross income, Profit is what remains.",
              "Marketing builds awareness; Operations builds delivery.",
              "Budgeting is your financial roadmap.",
              "High revenue doesn't always mean high profit.",
              "Customers are the engine of every business."
            ].map(tk => (
              <div key={tk} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary-foreground/50 mt-1 flex-shrink-0" />
                <span className="font-medium">{tk}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="text-center pt-8 border-t">
          <h2 className="text-3xl font-bold font-headline mb-4">Conclusion</h2>
          <p className="text-xl text-foreground/80 leading-relaxed italic max-w-3xl mx-auto">
            "Successful businesses don't simply sell products—they solve problems, create value, and build lasting relationships with their customers."
          </p>
        </section>
      </div>
    )
  },
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
          <h2 className="text-3xl font-bold mb-4 font-headline">Introduction</h2>
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
          <h2 className="text-2xl font-bold mb-4 font-headline">Before the Interview</h2>
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
          <h2 className="text-2xl font-bold mb-4 font-headline">Common HR Interview Questions</h2>
          
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
          <h2 className="text-2xl font-bold mb-4 text-center font-headline">The STAR Method for Conflict Resolution</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { l: "S", t: "Situation", d: "Describe the problem." },
              { l: "T", t: "Task", d: "Explain your responsibility." },
              { l: "A", t: "Action", d: "Describe what you did." },
              { l: "R", t: "Result", d: "Share the positive outcome." }
            ].map(step => (
              <div key={step.l} className="bg-white p-4 rounded-xl shadow-sm border text-center">
                <span className="text-3xl font-black text-primary/20">{step.l}</span>
                <h4 className="font-bold text-primary">{step.t}</h4>
                <p className="text-sm text-foreground/70">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-primary text-primary-foreground p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-2">Final Formula for Success</h2>
          <p className="text-primary-foreground/90 text-lg italic">"Prepare • Practice • Communicate • Demonstrate • Follow Up"</p>
        </div>
      </div>
    )
  },
  {
    id: 'gui-lead-1',
    title: "Confidence & Leadership Foundations",
    description: "A comprehensive guide to finding your voice and leading with authenticity in any field.",
    category: 'guides',
    icon: Heart,
    href: '/knowledge-hub/article/gui-lead-1',
    readTime: '12 min read',
    dateAdded: '2025-11-25',
    downloadAvailable: true,
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4 font-headline">Introduction</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Confidence and leadership are two essential skills that help individuals succeed in academics, careers, entrepreneurship, and personal life. Confidence enables you to believe in your abilities, while leadership empowers you to inspire, guide, and positively influence others. Together, these skills form the foundation for personal and professional growth.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-headline">What is Confidence?</h2>
          <p className="text-foreground/80 mb-6 leading-relaxed">
            Confidence is the belief in your ability to handle challenges, make decisions, and achieve goals. Confident individuals are more willing to take initiative, communicate effectively, and embrace new opportunities.
          </p>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <h3 className="text-xl font-bold mb-6">Benefits of Confidence</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Improves communication skills", "Enhances decision-making abilities", "Increases resilience during challenges",
                "Encourages personal growth", "Builds a positive mindset", "Helps overcome fear and self-doubt"
              ].map(benefit => (
                <li key={benefit} className="flex items-center gap-2 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-green-500" /> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4 font-headline">Building Self-Confidence</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { t: "1. Develop a Growth Mindset", d: "View mistakes as learning opportunities rather than failures. Every challenge helps you improve and become stronger." },
              { t: "2. Set Small Achievable Goals", d: "Start with manageable goals and gradually increase the difficulty. Achieving small successes boosts confidence over time." },
              { t: "3. Practice Positive Self-Talk", d: "Replace negative thoughts with encouraging statements such as: 'I can learn this', 'I am improving every day', and 'I am capable of handling challenges'." },
              { t: "4. Improve Communication Skills", d: "Practice speaking clearly, listening actively, and expressing your ideas confidently." }
            ].map(step => (
              <div key={step.t} className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="font-bold text-lg mb-2">{step.t}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-accent/10 p-6 rounded-xl border border-accent/20 italic text-center text-accent-foreground font-semibold">
            "Step Outside Your Comfort Zone: Try new experiences, participate in discussions, volunteer for projects, and embrace opportunities for growth."
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-headline">Understanding Leadership</h2>
          <p className="text-foreground/80 mb-6 leading-relaxed">
            Leadership is the ability to influence, motivate, and guide individuals or teams toward achieving a common goal. Leadership is not about authority; it is about responsibility, service, and creating a positive impact.
          </p>
          <div className="bg-muted/50 p-8 rounded-2xl border">
            <h3 className="text-xl font-bold mb-6 text-center">Characteristics of Effective Leaders</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Integrity", "Accountability", "Empathy", "Communication", "Problem-Solving", "Vision", "Adaptability", "Collaboration"].map(trait => (
                <div key={trait} className="bg-white p-3 rounded-lg shadow-sm text-center text-sm font-semibold border border-primary/10">
                  {trait}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-headline">Leadership Styles</h2>
          <div className="space-y-4">
            {[
              { t: "Democratic Leadership", d: "Leaders involve team members in decision-making and encourage participation." },
              { t: "Transformational Leadership", d: "Leaders inspire others through vision, innovation, and motivation." },
              { t: "Servant Leadership", d: "Leaders focus on supporting and empowering their team members." },
              { t: "Coaching Leadership", d: "Leaders guide individuals by mentoring and helping them develop their skills." }
            ].map(style => (
              <div key={style.t} className="flex items-start gap-4 p-5 border rounded-xl hover:bg-muted/30 transition-colors">
                <div className="bg-primary/10 p-2.5 rounded-full">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{style.t}</h4>
                  <p className="text-foreground/70">{style.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-secondary/30 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center font-headline">Essential Leadership Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Communication", d: "Strong leaders communicate clearly, listen actively, and ensure everyone understands goals and expectations." },
              { t: "Decision-Making", d: "Leaders evaluate options, consider consequences, and make informed decisions." },
              { t: "Team Building", d: "Effective leaders encourage collaboration, trust, and mutual respect among team members." },
              { t: "Conflict Resolution", d: "Leaders address disagreements constructively and work toward positive solutions." },
              { t: "Emotional Intelligence", d: "Understanding and managing emotions helps leaders build stronger relationships and make better decisions." }
            ].map(skill => (
              <div key={skill.t} className="space-y-2">
                <h4 className="font-bold flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" /> {skill.t}
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">{skill.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-headline">Developing Leadership Skills</h2>
          <div className="grid sm:grid-cols-2 gap-4">
             {[
               { t: "Take Initiative", d: "Volunteer for responsibilities and demonstrate willingness to lead projects or activities." },
               { t: "Learn from Role Models", d: "Study successful leaders and identify qualities you can apply in your own life." },
               { t: "Seek Feedback", d: "Constructive feedback helps identify strengths and areas for improvement." },
               { t: "Practice Leadership Daily", d: "Leadership opportunities exist everywhere—in classrooms, communities, workplaces, and personal projects." }
             ].map(item => (
               <div key={item.t} className="p-4 bg-white border rounded-lg shadow-sm">
                 <h4 className="font-bold text-primary mb-1">{item.t}</h4>
                 <p className="text-sm text-foreground/70">{item.d}</p>
               </div>
             ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 font-headline">Practical Activities</h2>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl border border-dashed border-primary/40">
              <h3 className="font-bold text-primary text-lg mb-2 flex items-center gap-2">
                <PenTool className="h-5 w-5" /> Activity 1: Confidence Journal
              </h3>
              <p className="text-foreground/70">Write down: Three strengths you possess, one achievement you are proud of, and one goal you want to accomplish this week.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-dashed border-primary/40">
              <h3 className="font-bold text-primary text-lg mb-2 flex items-center gap-2">
                <Users className="h-5 w-5" /> Activity 2: Leadership Challenge
              </h3>
              <p className="text-foreground/70">Lead a small group activity, discussion, or project and reflect on your experience.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-dashed border-primary/40">
              <h3 className="font-bold text-primary text-lg mb-2 flex items-center gap-2">
                <Mic className="h-5 w-5" /> Activity 3: Public Speaking Practice
              </h3>
              <p className="text-foreground/70">Prepare a short 2-minute speech on a topic of your choice and present it to friends, classmates, or family members.</p>
            </div>
          </div>
        </section>

        <div className="bg-primary text-primary-foreground p-10 rounded-3xl text-center space-y-6 shadow-xl ring-4 ring-primary/10">
          <h2 className="text-3xl font-bold font-headline">Key Takeaways</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {[
              "Confidence begins with self-belief and continuous learning.",
              "Leadership is about influence, responsibility, and service.",
              "Effective communication is essential for both confidence and leadership.",
              "Mistakes are opportunities for growth.",
              "Leadership skills can be developed through practice.",
              "Confident leaders inspire positive change and empower others."
            ].map(tk => (
              <div key={tk} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary-foreground/50 mt-1 flex-shrink-0" />
                <span className="font-medium">{tk}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="text-center pt-8 border-t">
          <h2 className="text-3xl font-bold font-headline mb-4">Conclusion</h2>
          <p className="text-xl text-foreground/80 leading-relaxed italic max-w-3xl mx-auto">
            "Confidence and leadership are lifelong skills that empower individuals to achieve their goals, overcome challenges, and inspire others. By developing self-confidence, improving communication, and practicing leadership regularly, you can unlock your full potential and create a positive impact in both your personal and professional journey."
          </p>
        </section>
      </div>
    )
  },
  {
    id: 'gui-biz-1',
    title: "Entrepreneurship & Business Mindset",
    description: "Moving from idea to execution: How to build a sustainable startup or small business.",
    category: 'guides',
    icon: Rocket,
    href: '/knowledge-hub/article/gui-biz-1',
    readTime: '10 min read',
    dateAdded: '2025-11-28',
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4 font-headline">Introduction</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Entrepreneurship is more than starting a business—it's about identifying opportunities, solving problems, and creating value. An entrepreneurial mindset helps individuals think creatively, take initiative, and adapt to challenges.
          </p>
        </section>

        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="text-primary" /> Learning Objectives
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Understand entrepreneurship fundamentals",
              "Develop problem-solving skills",
              "Learn how businesses create value",
              "Build resilience and adaptability"
            ].map(obj => (
              <li key={obj} className="flex items-start gap-2 text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-12">
          <h2 className="text-2xl font-bold mb-4 font-headline">Key Topics</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <Lightbulb className="h-6 w-6" /> What is Entrepreneurship?
            </h3>
            <p className="text-foreground/80">Entrepreneurship is driven by three core pillars:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
              <li><strong>Innovation and Creativity:</strong> Thinking differently to create new ideas.</li>
              <li><strong>Identifying Opportunities:</strong> Recognizing gaps and needs in the market.</li>
              <li><strong>Creating Solutions:</strong> Building something that solves a real problem.</li>
            </ul>
          </div>

          <div className="bg-muted/30 p-8 rounded-2xl border">
            <h3 className="text-xl font-bold mb-6">Characteristics of Successful Entrepreneurs</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { t: "Leadership", i: Users },
                { t: "Risk-taking", i: Rocket },
                { t: "Persistence", i: Zap },
                { t: "Adaptability", i: RefreshCw }
              ].map(char => (
                <div key={char.t} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border">
                  <char.i className="h-8 w-8 text-primary mb-3" />
                  <span className="font-bold text-sm">{char.t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary font-headline text-center">Design Thinking for Problem Solving</h3>
            <p className="text-foreground/80 text-center max-w-2xl mx-auto mb-8">A human-centered approach to innovation:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { t: "Empathize", d: "Understand your users' needs and motivations.", i: Heart, c: "bg-rose-50 border-rose-100" },
                { t: "Define", d: "Clearly state the problem you want to solve.", i: Target, c: "bg-blue-50 border-blue-100" },
                { t: "Ideate", d: "Brainstorm creative solutions without judgment.", i: Lightbulb, c: "bg-amber-50 border-amber-100" },
                { t: "Prototype", d: "Build a simple, low-cost version of your solution.", i: Wrench, c: "bg-teal-50 border-teal-100" },
                { t: "Test", d: "Get feedback and iterate on your prototype.", i: CheckCircle2, c: "bg-indigo-50 border-indigo-100" }
              ].map((step, i) => (
                <div key={step.t} className={cn("p-6 rounded-2xl border text-center flex flex-col items-center", step.c)}>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold mb-4 shadow-sm border">
                      {i + 1}
                  </div>
                  <step.i className="h-8 w-8 mb-4 opacity-70" />
                  <h4 className="font-bold text-base mb-2">{step.t}</h4>
                  <p className="text-xs text-foreground/70 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary/20 p-8 rounded-2xl border border-secondary/30">
            <h3 className="text-xl font-bold mb-4">Business Model Basics</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Customers</h4>
                <p className="text-sm text-foreground/70">Who are you serving? What are their pain points?</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2"><Briefcase className="h-4 w-4 text-primary" /> Products & Services</h4>
                <p className="text-sm text-foreground/70">What are you offering? How does it create value?</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2"><DollarSign className="h-4 w-4 text-primary" /> Revenue Streams</h4>
                <p className="text-sm text-foreground/70">How will your business sustain itself financially?</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2"><Rocket className="h-4 w-4 text-primary" /> Marketing</h4>
                <p className="text-sm text-foreground/70">How will people find out about your solution?</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white p-8 rounded-2xl border border-dashed border-primary/40 text-center">
            <h3 className="font-bold text-primary text-2xl mb-4 flex items-center justify-center gap-2">
              <PenTool className="h-6 w-6" /> Practical Activity
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              Identify a problem in your community and brainstorm three possible solutions.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Every great impact begins with a single observant mind."
            </p>
          </div>
        </section>

        <section className="text-center pt-8 border-t">
          <h2 className="text-3xl font-bold font-headline mb-4">Conclusion</h2>
          <p className="text-xl text-foreground/80 leading-relaxed italic max-w-3xl mx-auto">
            "Entrepreneurial thinking empowers individuals to transform challenges into opportunities and create meaningful impact. It's not just about business—it's a way of looking at the world."
          </p>
        </section>
      </div>
    )
  },
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
  {
    id: 'int-tech-1',
    title: "Coding Interview Walkthroughs",
    description: "Practice solving common technical problems with guided logic and AI-assisted explanations.",
    category: 'interview-prep',
    icon: Target,
    href: '/knowledge-hub/article/int-tech-1',
    dateAdded: '2025-12-18',
  },
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
