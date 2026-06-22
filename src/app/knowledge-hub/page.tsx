import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, FileText, Bot, Code, Briefcase, Target, Wrench, Map, Star, Download, ArrowRight, Library } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const hubSections = [
  {
    title: "Tutorials",
    icon: BookOpen,
    description: "Step-by-step technical and creative tutorials for all skill levels.",
    href: "/knowledge-hub/tutorials",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    badge: "📚"
  },
  {
    title: "Guides",
    icon: FileText,
    description: "Comprehensive guides on technology, design, and leadership.",
    href: "/knowledge-hub/guides",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    badge: "📝"
  },
  {
    title: "AI & Technology",
    icon: Bot,
    description: "Learn about the latest in AI, prompting, and future tech trends.",
    href: "/knowledge-hub/ai-tech",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    badge: "🤖"
  },
  {
    title: "Coding Resources",
    icon: Code,
    description: "Curated tools, libraries, and snippets to accelerate your development.",
    href: "/knowledge-hub/coding-resources",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    badge: "💻"
  },
  {
    title: "Career Development",
    icon: Briefcase,
    description: "Resources for personal branding, networking, and career pivots.",
    href: "/knowledge-hub/career-development",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    badge: "🚀"
  },
  {
    title: "Interview Preparation",
    icon: Target,
    description: "Master the art of interviews with tips, mock questions, and advice.",
    href: "/knowledge-hub/interview-prep",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    badge: "🎯"
  },
  {
    title: "Templates & Toolkits",
    icon: Wrench,
    description: "Downloadable templates for projects, pitch decks, and more.",
    href: "/knowledge-hub/templates-toolkits",
    color: "text-teal-500",
    bgColor: "bg-teal-50",
    badge: "🛠"
  },
  {
    title: "Learning Roadmaps",
    icon: Map,
    description: "Clear, structured paths to master new skills and domains.",
    href: "/knowledge-hub/learning-roadmaps",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
    badge: "🗺"
  },
  {
    title: "Success Stories",
    icon: Star,
    description: "Inspirational stories from women in our community.",
    href: "/knowledge-hub/success-stories",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    badge: "📖"
  },
  {
    title: "Free Resources",
    icon: Download,
    description: "Access our collection of free tools, cheatsheets, and downloads.",
    href: "/knowledge-hub/free-resources",
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    badge: "📥"
  }
];

export default function KnowledgeHubPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          <div className="container relative mx-auto px-4 text-center">
            <Library className="mx-auto h-16 w-16 text-primary mb-6" />
            <h1 className="font-headline text-5xl font-bold md:text-7xl">Knowledge Hub</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-foreground/80">
              Explore tutorials, guides, career resources, AI learning materials, coding walkthroughs, industry insights, and practical tools designed to help women learn, grow, and succeed in technology.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hubSections.map((section) => (
              <Card key={section.title} className="group hover:shadow-xl transition-all duration-300 border-none bg-white shadow-md">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${section.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <section.icon className={`h-6 w-6 ${section.color}`} />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-headline">{section.title}</CardTitle>
                    <span className="text-2xl">{section.badge}</span>
                  </div>
                  <CardDescription className="text-base pt-2">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0 h-auto font-semibold">
                    <Link href={section.href}>
                      Explore Section <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="font-headline text-3xl font-bold">Continuous Learning & Growth</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Our Knowledge Hub is updated weekly with fresh content, industry insights, and new resources curated by our mentors and core team. Stay curious and keep building your path.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
               <Badge variant="outline" className="px-4 py-1">New content added weekly</Badge>
               <Badge variant="outline" className="px-4 py-1">Expert-curated resources</Badge>
               <Badge variant="outline" className="px-4 py-1">Community-driven insights</Badge>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
