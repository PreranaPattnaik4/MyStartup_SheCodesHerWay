
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { FileText, ArrowLeft, Download, CheckCircle2, Star, Heart, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allResources } from '@/lib/knowledge-hub-data';

export default function GuidesPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'inclusive-approach-1');
  const items = allResources.filter(r => r.category === 'guides');

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
            <FileText className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Expert Guides</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              In-depth references and handbooks for your learning, leadership, and entrepreneurship journey.
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
          <div className="max-w-4xl mx-auto space-y-12">
            {items.map((guide, i) => (
              <Card key={i} className="shadow-lg border-none bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <guide.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Expert Guide</span>
                  </div>
                  <CardTitle className="text-3xl font-headline leading-tight">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground/80 leading-relaxed text-lg">{guide.description}</p>
                </CardContent>
                <CardFooter className="bg-muted/30 p-6 rounded-b-lg flex flex-wrap gap-4">
                  <Button asChild className="w-full sm:w-auto">
                    <Link href={guide.href}>Read Full Guide</Link>
                  </Button>
                  {guide.downloadAvailable && (
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                  )}
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
