
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Bot, ArrowLeft, TrendingUp, Clock, ArrowRight, ShieldCheck, PenTool } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const aiArticles = [
  {
    title: "AI Literacy & Responsible AI Practices",
    description: "Understand the ethics of AI, how to detect bias, and the principles of transparent, human-centered technology.",
    readTime: "10 min read",
    trending: true,
    image: "https://picsum.photos/seed/respai/600/400",
    icon: ShieldCheck
  },
  {
    title: "Mastering Prompt Writing as a Skill",
    description: "Go beyond simple commands. Learn how to structure prompts for complex research, creative writing, and data analysis.",
    readTime: "7 min read",
    trending: false,
    image: "https://picsum.photos/seed/promptskill/600/400",
    icon: PenTool
  },
  {
    title: "Prompt Engineering Basics for Beginners",
    description: "An essential primer on talking to AI models like Gemini and ChatGPT for daily productivity gains.",
    readTime: "8 min read",
    trending: false,
    image: "https://picsum.photos/seed/ai-1/600/400",
    icon: Bot
  }
];

export default function AiTechPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <Bot className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">AI & Technology</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Stay ahead with resources on responsible AI, advanced prompting, and emerging technologies.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/knowledge-hub">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Hub
              </Link>
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {aiArticles.map((art, i) => (
              <Card key={i} className="flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto">
                  <Image src={art.image} alt={art.title} fill className="object-cover" />
                  {art.trending && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-500"><TrendingUp className="mr-1 h-3 w-3" /> Trending</Badge>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Clock className="h-3 w-3" /> {art.readTime}
                    </div>
                    <CardTitle className="text-xl mb-2 flex items-center gap-2">
                        <art.icon className="h-5 w-5 text-primary" />
                        {art.title}
                    </CardTitle>
                    <CardDescription>{art.description}</CardDescription>
                  </div>
                  <Button variant="link" className="p-0 h-auto w-fit mt-4 group">
                    Read Article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
