import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TutorialsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Tutorials</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Step-by-step technical and creative walkthroughs to help you master new skills.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center shadow-lg">
            <CardHeader>
              <CardTitle>Content Coming Soon!</CardTitle>
              <CardDescription>
                We are currently curating a high-quality selection of tutorials on coding, design, and AI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/knowledge-hub">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Knowledge Hub
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
