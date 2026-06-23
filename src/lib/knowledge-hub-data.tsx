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
  UserCircle,
  GraduationCap,
  Globe,
  AlertCircle,
  MessageCircle,
  Bookmark
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
    id: 'challenges-women-face',
    title: "Challenges Women Face During Education and After Long Career Breaks",
    description: "An in-depth look at social, professional, and emotional obstacles women face, with actionable strategies to overcome them.",
    category: 'guides',
    icon: AlertCircle,
    href: '/knowledge-hub/article/challenges-women-face',
    readTime: '14 min read',
    dateAdded: '2026-04-10',
    trending: true,
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4 font-headline">Introduction</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Women often face unique challenges during their educational journey and later in life when returning to studies, work, or pursuing a new career after a long break. These challenges may arise from social expectations, family responsibilities, financial constraints, confidence issues, or limited access to opportunities.
          </p>
          <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
            Understanding these challenges is the first step toward overcoming them and building a path toward personal and professional success.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold font-headline flex items-center gap-2">
            <GraduationCap className="text-primary" /> Challenges During Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                t: "Confidence & Self-Belief", 
                d: "Underestimating abilities despite being capable. Leads to avoiding leadership roles or hesitating to ask questions.", 
                s: "Practice positive self-talk and seek mentorship.", 
                i: Sparkles,
                c: "bg-blue-50 border-blue-100" 
              },
              { 
                t: "Access to Resources", 
                d: "Barriers like lack of internet, financial constraints, or limited technology resources.", 
                s: "Utilize free online resources and apply for grants.", 
                i: Globe,
                c: "bg-green-50 border-green-100" 
              },
              { 
                t: "Social Expectations", 
                d: "Prioritizing household duties over studies, or pressure to conform to traditional roles.", 
                s: "Set boundaries and seek family support.", 
                i: Users,
                c: "bg-amber-50 border-amber-100" 
              },
              { 
                t: "Fear of Failure", 
                d: "Avoiding challenges or competitions due to the fear of making mistakes.", 
                s: "View failure as a vital part of the learning process.", 
                i: Target,
                c: "bg-rose-50 border-rose-100" 
              }
            ].map(item => (
              <Card key={item.t} className={cn("border shadow-sm", item.c)}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-white p-2.5 rounded-xl shadow-sm"><item.i className="h-5 w-5 text-primary"/></div>
                  <CardTitle className="text-lg">{item.t}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm opacity-90 leading-relaxed">{item.d}</p>
                  <div className="text-sm font-semibold">
                    <span className="text-primary">Solution:</span> {item.s}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted/30 p-8 rounded-3xl border space-y-8">
          <h2 className="text-2xl font-bold font-headline flex items-center gap-2">
            <RefreshCw className="text-primary" /> Challenges After a Long Career Break
          </h2>
          <p className="text-foreground/80 leading-relaxed">Whether for childcare, health, or relocation, returning can be intimidating. Here is how to navigate common hurdles:</p>
          
          <div className="space-y-6">
            {[
              { 
                q: "Loss of Professional Confidence", 
                r: "Your break didn't erase your skills. You gained time management and resilience.", 
                ans: "Focus on transferable skills and start small." 
              },
              { 
                q: "Technology Changes", 
                r: "Industries evolve, but tools can be learned quickly through focus.", 
                ans: "Take modern certifications and practice daily." 
              },
              { 
                q: "The Resume Gap", 
                r: "Employers today value life experience and growth during gaps.", 
                ans: "Be honest. Example: 'Focused on responsibilities while upskilling through projects.'" 
              },
              { 
                q: "Family & Career Balance", 
                r: "Managing children and work is a high-level coordination skill.", 
                ans: "Create routines, set priorities, and build a support system." 
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start border-b pb-6 last:border-0">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">
                  {i + 1}
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg">{item.q}</h4>
                  <p className="text-foreground/70 italic text-sm">" {item.r} "</p>
                  <p className="text-sm"><span className="font-bold text-primary">Success Strategy:</span> {item.ans}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <Card className="bg-indigo-50 border-indigo-100 p-8 rounded-3xl flex flex-col items-center text-center space-y-4">
             <div className="bg-white p-4 rounded-full shadow-md"><TrendingUp className="h-8 w-8 text-indigo-600" /></div>
             <h3 className="text-2xl font-bold font-headline">Emotional Challenges</h3>
             <p className="text-indigo-900/80 leading-relaxed">
               Avoid comparing your journey with peers. Success is not a race. Everyone has a unique timeline. Imposter syndrome is common—focus on progress rather than perfection.
             </p>
          </Card>
          <Card className="bg-emerald-50 border-emerald-100 p-8 rounded-3xl flex flex-col items-center text-center space-y-4">
             <div className="bg-white p-4 rounded-full shadow-md"><Goal className="h-8 w-8 text-emerald-600" /></div>
             <h3 className="text-2xl font-bold font-headline">Strategies for Success</h3>
             <p className="text-emerald-900/80 leading-relaxed">
               Invest in continuous learning, build a supportive professional network, and create a 3-tier career plan (Short, Mid, and Long term goals).
             </p>
          </Card>
        </section>

        <div className="bg-white p-8 rounded-2xl border border-dashed border-primary/40 text-center space-y-6">
          <h3 className="font-bold text-primary text-2xl flex items-center justify-center gap-2">
            <Star className="h-6 w-6" /> Celebrate Small Wins
          </h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto italic">
            "Completing a course, updating your resume, or even attending a single webinar counts. Every step builds momentum toward your future."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Badge variant="secondary" className="px-4 py-2">Updated Resume</Badge>
             <Badge variant="secondary" className="px-4 py-2">LinkedIn Optimized</Badge>
             <Badge variant="secondary" className="px-4 py-2">First Job Applied</Badge>
          </div>
        </div>

        <section className="text-center pt-8 border-t">
          <h2 className="text-3xl font-bold font-headline mb-4">Conclusion</h2>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            The journey of education and career growth may not always be easy, but it is absolutely possible. Embrace lifelong learning, build your confidence, and take consistent action.
          </p>
          <p className="mt-6 text-2xl font-bold text-primary font-headline italic">
            "A career break is a pause in the journey, not the end of the story."
          </p>
        </section>
      </div>
    )
  },
  {
    id: 'women-empowerment-guide',
    title: "Women Empowerment Guide: Unlocking Potential, Building Confidence, and Creating Change",
    description: "Unlock your full potential with this essential guide on confidence, financial independence, leadership, and digital mastery.",
    category: 'guides',
    icon: Heart,
    href: '/knowledge-hub/article/women-empowerment-guide',
    readTime: '18 min read',
    dateAdded: '2026-04-05',
    trending: true,
    popular: true,
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4 font-headline">Introduction</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Women empowerment is the process of enabling women and girls to gain confidence, develop skills, access opportunities, make informed decisions, and achieve their full potential. Empowerment begins with self-belief and grows through education, financial independence, leadership, and continuous personal development.
          </p>
          <div className="mt-8 bg-primary/10 p-6 rounded-2xl border border-primary/20 text-center">
            <p className="text-xl font-bold text-primary italic font-headline">
              "Empowered women contribute to stronger families, thriving communities, and innovative workplaces."
            </p>
          </div>
        </section>

        <section className="bg-muted/30 p-8 rounded-3xl border">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Eye className="text-primary" /> What is Women Empowerment?
          </h2>
          <p className="mb-6 leading-relaxed">It means giving women the knowledge, resources, opportunities, and confidence needed to take control of their lives and shape their futures. An empowered woman:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
             {[
               { t: "Believes in Herself", i: Star },
               { t: "Informed Decisions", i: Target },
               { t: "Pursues Growth", i: GraduationCap },
               { t: "Takes Leadership", i: Users },
               { t: "Supports Others", i: Heart },
               { t: "Social Impact", i: Globe }
             ].map((item, i) => (
               <div key={i} className="bg-white p-4 rounded-xl border flex items-center gap-3 shadow-sm">
                 <div className="bg-primary/10 p-2 rounded-lg"><item.i className="h-5 w-5 text-primary"/></div>
                 <span className="font-semibold text-sm">{item.t}</span>
               </div>
             ))}
          </div>
        </section>

        <section className="space-y-8">
           <h2 className="text-2xl font-bold font-headline">The 5 Pillars of Empowerment</h2>
           <div className="grid gap-6">
              {[
                { 
                  id: 1, 
                  title: "Self-Confidence & Self-Belief", 
                  desc: "Confidence is the foundation. Learn to celebrate achievements, practice positive self-talk, and step outside your comfort zone.",
                  icon: Sparkles,
                  color: "bg-blue-50 border-blue-100 text-blue-700"
                },
                { 
                  id: 2, 
                  title: "Education & Lifelong Learning", 
                  desc: "Education opens doors to independence. Embrace a growth mindset and believe abilities are developed through effort.",
                  icon: GraduationCap,
                  color: "bg-green-50 border-green-100 text-green-700"
                },
                { 
                  id: 3, 
                  title: "Financial Independence", 
                  desc: "Financial literacy empowers choice. Master budgeting, saving, and investing to build a secure future.",
                  icon: DollarSign,
                  color: "bg-amber-50 border-amber-100 text-amber-700"
                },
                { 
                  id: 4, 
                  title: "Leadership Development", 
                  desc: "Leadership is impact. Develop communication and emotional intelligence to guide others toward positive goals.",
                  icon: Users,
                  color: "bg-rose-50 border-rose-100 text-rose-700"
                },
                { 
                  id: 2, 
                  title: "Digital Skills & Technology", 
                  desc: "Technology creates pathways. Mastery of AI, content creation, and software tools bridges the opportunity gap.",
                  icon: Cpu,
                  color: "bg-indigo-50 border-indigo-100 text-indigo-700"
                }
              ].map(pillar => (
                <Card key={pillar.title} className={cn("border shadow-sm", pillar.color)}>
                  <CardHeader className="flex flex-row items-start gap-4 p-6">
                    <div className="p-3 bg-white rounded-2xl shadow-sm">
                      <pillar.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{pillar.title}</CardTitle>
                      <p className="mt-2 opacity-90 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
           </div>
        </section>

        <section className="bg-secondary/20 p-8 rounded-3xl border border-secondary/30">
          <h2 className="text-2xl font-bold mb-6 font-headline">Overcoming Challenges</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold flex items-center gap-2"><Target className="text-primary"/> Common Obstacles</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-rose-400"/> Self-doubt & Imposter Syndrome</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-rose-400"/> Fear of failure</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-rose-400"/> Limited access to opportunities</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-rose-400"/> Societal expectations</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold flex items-center gap-2"><CheckCircle2 className="text-primary"/> Strategies for Success</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2 font-semibold text-primary">✔ Build support networks</li>
                <li className="flex items-center gap-2 font-semibold text-primary">✔ Seek mentors proactively</li>
                <li className="flex items-center gap-2 font-semibold text-primary">✔ Focus on continuous learning</li>
                <li className="flex items-center gap-2 font-semibold text-primary">✔ Practice radical self-care</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white p-8 rounded-2xl border border-dashed border-primary/40 text-center space-y-6">
            <h3 className="font-bold text-primary text-2xl flex items-center justify-center gap-2">
              <PenTool className="h-6 w-6" /> Community Impact Activity
            </h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Identify a challenge affecting women or girls in your community. Create a simple 5-step action plan: Problem Definition, Solution Mapping, Resource Gathering, Team Building, and Impact Measurement.
            </p>
            <Button variant="outline" className="font-bold">Download Impact Template <Download className="ml-2 h-4 w-4" /></Button>
          </div>
        </section>

        <div className="bg-primary text-primary-foreground p-10 rounded-3xl space-y-8 shadow-xl">
           <h2 className="text-3xl font-bold font-headline text-center">Action Plan for Personal Growth</h2>
           <div className="grid gap-4">
              {[
                "Set one clear personal goal.",
                "Set one clear learning goal.",
                "Set one clear career goal.",
                "Identify resources and support systems.",
                "Take consistent action every single week."
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="font-medium">{step}</p>
                </div>
              ))}
           </div>
        </div>

        <section className="text-center pt-8 border-t">
          <h2 className="text-3xl font-bold font-headline mb-4">Conclusion</h2>
          <p className="text-xl text-foreground/80 leading-relaxed italic max-w-3xl mx-auto">
            "Women empowerment is a journey of growth, confidence, leadership, and opportunity. Every woman has the potential to learn, lead, innovate, and inspire change. Remember: Empowered women empower women, and together they transform the world."
          </p>
        </section>
      </div>
    )
  },
  {
    id: 'car-return-guide',
    title: "Returning to Work After a Career Break",
    description: "Rebuild confidence, identify transferable skills, and successfully transition back into the professional world.",
    category: 'career-development',
    icon: RefreshCw,
    href: '/knowledge-hub/article/car-return-guide',
    readTime: '12 min read',
    dateAdded: '2026-04-01',
    trending: true,
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4 font-headline">Introduction</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Taking a career break is more common than ever. Whether you paused your professional journey due to family responsibilities, education, caregiving, health reasons, relocation, personal commitments, or other life circumstances, returning to work can feel both exciting and challenging.
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
               "Choose a target career path.",
               "Identify and bridge skill gaps through upskilling.",
               "Complete relevant training and certifications.",
               "Update your resume and optimize your LinkedIn profile.",
               "Build a portfolio or project showcase.",
               "Start networking.",
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

        <section className="text-center pt-8 border-t">
          <h2 className="text-3xl font-bold font-headline mb-4">Conclusion</h2>
          <p className="text-xl text-foreground/80 leading-relaxed italic max-w-3xl mx-auto">
            "Remember: Your career is not defined by where you paused—it is defined by the courage to begin again."
          </p>
        </section>
      </div>
    )
  },
  {
    id: 'bus-basics-1',
    title: "Business Basics: Understanding Value Creation and Financial Fundamentals",
    description: "Learn the core components of a business and fundamental financial concepts like revenue, expenses, and profit.",
    category: 'guides',
    icon: Briefcase,
    href: '/knowledge-hub/article/bus-basics-1',
    readTime: '15 min read',
    dateAdded: '2026-03-15',
    trending: true,
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4 font-headline">Introduction</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Every successful business exists for one primary reason: <strong>to create value</strong>. Understanding how businesses create value and manage finances is essential for future leaders.
          </p>
        </section>

        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="text-primary" /> Learning Objectives
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Understand value creation",
              "Identify core business components",
              "Explain revenue generation",
              "Understand marketing & operations",
              "Learn financial fundamentals",
              "Apply to real-world ideas"
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
                  { n: "Learning new skills", s: "Online platform", v: "Convenient education" },
                  { n: "Transportation", s: "Ride-sharing app", v: "Faster travel" },
                  { n: "Communication", s: "Messaging app", v: "Instant connectivity" }
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
          <h2 className="text-2xl font-bold mb-4 font-headline">The Five Core Components</h2>
          <div className="grid gap-6">
            {[
              { id: 1, title: "Product or Service", desc: "What the business offers to customers.", icon: ShoppingBag, color: "bg-blue-50 text-blue-700" },
              { id: 2, title: "Customers", desc: "Individuals or organizations using the product.", icon: Users, color: "bg-green-50 text-green-700" },
              { id: 3, title: "Revenue", desc: "Money generated from selling products.", icon: DollarSign, color: "bg-amber-50 text-amber-700" },
              { id: 4, title: "Marketing", desc: "Communicating value to reach customers.", icon: Megaphone, color: "bg-rose-50 text-rose-700" },
              { id: 5, title: "Operations", desc: "Activities to deliver products efficiently.", icon: Settings, color: "bg-indigo-50 text-indigo-700" }
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

        <section className="space-y-8">
          <h2 className="text-2xl font-bold mb-4 font-headline">Financial Fundamentals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-blue-500 shadow-lg">
              <CardHeader><CardTitle className="text-xl">Revenue</CardTitle></CardHeader>
              <CardContent><p className="text-sm font-mono">Sales × Price</p></CardContent>
            </Card>
            <Card className="border-t-4 border-t-rose-500 shadow-lg">
              <CardHeader><CardTitle className="text-xl">Expenses</CardTitle></CardHeader>
              <CardContent><p className="text-sm font-mono">Operating Costs</p></CardContent>
            </Card>
            <Card className="border-t-4 border-t-green-500 shadow-lg">
              <CardHeader><CardTitle className="text-xl">Profit</CardTitle></CardHeader>
              <CardContent><p className="text-sm font-mono">Revenue - Expenses</p></CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center pt-8 border-t">
          <h2 className="text-3xl font-bold font-headline mb-4">Conclusion</h2>
          <p className="text-xl text-foreground/80 leading-relaxed italic max-w-3xl mx-auto">
            "Understanding business basics helps you make smarter decisions and create meaningful impact."
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