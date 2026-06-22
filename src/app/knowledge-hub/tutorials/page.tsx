
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { BookOpen, ArrowLeft, Clock, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const tutorials = [
  {
    title: "Getting Started with AI: A Beginner's Guide",
    summary: "An easy-to-follow introduction to Artificial Intelligence and how you can use it in your daily life to boost productivity and creativity.",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/ai-tut/600/400",
    imageHint: "AI assistant",
    difficulty: "Beginner"
  },
  {
    title: "Build Your First Personal Portfolio Website",
    summary: "Learn how to build a professional portfolio using HTML, CSS, and basic JavaScript from scratch. Show off your projects to the world!",
    readTime: "15 min read",
    image: "https://picsum.photos/seed/web-tut/600/400",
    imageHint: "coding website",
    difficulty: "Beginner"
  },
  {
    title: "Introduction to Prompt Engineering",
    summary: "Master the fundamental principles of crafting effective prompts to get the best results from AI tools like ChatGPT and Gemini.",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/prompt-tut/600/400",
    imageHint: "AI prompts",
    difficulty: "Beginner"
  }
];

export default function TutorialsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Tutorials</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Step-by-step technical and creative walkthroughs to help you master new skills.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tut, i) => (
              <Card key={i} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
                <div className="relative aspect-video w-full">
                  <Image src={tut.image} alt={tut.title} fill className="object-cover" data-ai-hint={tut.imageHint} />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90">{tut.difficulty}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Clock className="h-3 w-3" /> {tut.readTime}
                  </div>
                  <CardTitle className="text-xl leading-tight">{tut.title}</CardTitle>
                  <CardDescription className="line-clamp-3 mt-2">{tut.summary}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full group">
                    <Link href="#">
                      Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
