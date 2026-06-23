
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Wrench, ArrowLeft, Download, Eye, FileJson, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allResources } from '@/lib/knowledge-hub-data';

export default function TemplatesToolkitsPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'inclusive-approach-3');
  const items = allResources.filter(r => r.category === 'templates-toolkits');

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
            <Wrench className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Templates & Toolkits</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Ready-to-use frameworks and documents to save you time and effort.
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
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((temp, i) => (
              <Card key={i} className="group relative overflow-hidden bg-white border-primary/10 shadow-md hover:shadow-xl transition-all p-2">
                <CardHeader className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <temp.icon className="h-6 w-6 text-primary" />
                    </div>
                    {temp.isComingSoon && <Badge variant="secondary">Coming Soon</Badge>}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2 leading-tight">{temp.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-foreground/70">{temp.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-6 pt-0 gap-3">
                  <Button asChild className="w-full font-bold" disabled={temp.isComingSoon}>
                    <Link href={temp.href}>
                      Explore Toolkit <ArrowRight className="ml-2 h-4 w-4" />
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
