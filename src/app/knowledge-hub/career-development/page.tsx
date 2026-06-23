
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Briefcase, ArrowLeft, CheckCircle2, Download, ListChecks, UserCircle, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allResources } from '@/lib/knowledge-hub-data';

export default function CareerDevelopmentPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'feature-internships');
  const items = allResources.filter(r => r.category === 'career-development');

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
            <Briefcase className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Career Development</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Guidance on personal branding, digital presence, and developing the emotional intelligence needed for success.
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
          <div className="max-w-4xl mx-auto space-y-10">
            {items.map((res, i) => (
              <Card key={i} className="bg-white shadow-md border-primary/10 overflow-hidden group">
                <CardHeader className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl transition-colors group-hover:bg-primary/20">
                        <res.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-headline leading-tight">{res.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg leading-relaxed text-foreground/80">{res.description}</CardDescription>
                </CardHeader>
                <CardFooter className="bg-muted/10 p-8 border-t">
                  <Button asChild className="font-bold">
                    <Link href={res.href}>
                      Explore Full Resource <ArrowRight className="ml-2 h-4 w-4" />
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
