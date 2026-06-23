
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Map, ArrowLeft, Milestone, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allResources } from '@/lib/knowledge-hub-data';
import { Badge } from '@/components/ui/badge';

export default function LearningRoadmapsPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'vision-journey');
  const items = allResources.filter(r => r.category === 'learning-roadmaps');

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        <section className="bg-secondary py-16 relative overflow-hidden">
          {bgImage && (
            <Image 
              src={bgImage.imageUrl}
              alt={bgImage.description}
              fill
              className="object-cover opacity-10"
              priority
              data-ai-hint={bgImage.imageHint}
            />
          )}
          <div className="container relative mx-auto px-4 text-center">
            <Map className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Learning Roadmaps</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Structured paths to help you navigate from a beginner to an expert in various digital and creative fields.
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
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {items.map((road, i) => (
              <Card key={i} className="bg-white shadow-lg border-primary/10 group overflow-hidden">
                <div className="p-8 flex items-center justify-between border-b bg-primary/5">
                   <div className="bg-white p-3 rounded-2xl shadow-sm border border-primary/10">
                      <road.icon className="h-8 w-8 text-primary" />
                   </div>
                   <Badge variant="secondary">Step-by-Step</Badge>
                </div>
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-bold mb-4">{road.title}</CardTitle>
                  <CardDescription className="text-base text-foreground/80 leading-relaxed">
                    {road.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-8 pt-0">
                  <Button asChild className="w-full font-bold">
                    <Link href={road.href}>
                      View Roadmap <ArrowRight className="ml-2 h-4 w-4" />
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
