
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Target, ArrowLeft, Clock, ArrowRight, Bookmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allResources } from '@/lib/knowledge-hub-data';

export default function InterviewPrepPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'feature-mentors');
  const items = allResources.filter(r => r.category === 'interview-prep');

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
            <Target className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Interview Preparation</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Mock questions, tips, and confidence-building advice for your next big career milestone.
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
          {items.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {items.map((res, i) => (
                <Card key={i} className="flex flex-col bg-white border-primary/10 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <res.icon className="h-6 w-6 text-primary" />
                      </div>
                      {res.trending && <Badge className="bg-amber-500">Trending</Badge>}
                    </div>
                    <CardTitle className="text-2xl mt-4 leading-tight group-hover:text-primary transition-colors">
                      {res.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                        <Clock className="h-3 w-3" /> {res.readTime}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base leading-relaxed">
                      {res.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-6 border-t bg-muted/10">
                    <Button asChild variant="link" className="p-0 h-auto font-bold group">
                      <Link href={res.href}>
                        Open Prep Kit <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border shadow-sm max-w-2xl mx-auto">
                <p className="text-muted-foreground mb-4">No specific interview prep resources available yet.</p>
                <Button asChild variant="outline">
                    <Link href="/knowledge-hub">Explore Other Categories</Link>
                </Button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
