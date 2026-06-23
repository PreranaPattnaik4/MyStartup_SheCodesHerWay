
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Star, ArrowLeft, Quote, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allResources } from '@/lib/knowledge-hub-data';

export default function SuccessStoriesPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'vision-community-voices');
  const items = allResources.filter(r => r.category === 'success-stories');

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
            <Star className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Success Stories</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Inspirational journeys of women who have built their paths and made their mark.
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
            {items.map((s, i) => (
              <Card key={i} className="bg-white border-primary/10 shadow-lg hover:-translate-y-1 transition-all group">
                <CardHeader className="p-8 text-center pb-4">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6 transition-colors group-hover:bg-primary/20">
                    <s.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold leading-tight">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-grow">
                  <div className="relative p-6 bg-muted/30 rounded-2xl border border-dashed border-muted-foreground/20 italic text-foreground/80 leading-relaxed">
                    <Quote className="h-8 w-8 text-primary/10 absolute -top-2 -left-2" />
                    {s.description}
                  </div>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto font-bold group mx-auto">
                    <Link href={s.href}>
                      Read Her Story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
