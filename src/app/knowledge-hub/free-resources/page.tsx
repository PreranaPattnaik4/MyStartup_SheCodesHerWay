
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Download, ArrowLeft, Package, Sparkles, ShieldCheck, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allResources } from '@/lib/knowledge-hub-data';

export default function FreeResourcesPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'inclusive-approach-4');
  const items = allResources.filter(r => r.category === 'free-resources');

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
            <Download className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Free Resources</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Our open-access collection of tools, ethical checklists, and productivity kits designed for your growth.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((f, i) => (
              <Card key={i} className="bg-white shadow-md border-none overflow-hidden group flex flex-col hover:shadow-xl transition-all">
                <div className="h-2 bg-primary"></div>
                <CardHeader className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <f.icon className="h-10 w-10 text-primary/30 group-hover:text-primary transition-colors" />
                    {f.popular && <Badge className="bg-rose-500"><Sparkles className="mr-1 h-3 w-3" /> Popular</Badge>}
                  </div>
                  <CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8 flex-grow">
                  <p className="text-foreground/80 leading-relaxed text-base">{f.description}</p>
                </CardContent>
                <CardFooter className="px-8 py-6 border-t bg-muted/10">
                  <Button asChild className="w-full font-bold">
                    <Link href={f.href}>
                      Get Resource <Download className="ml-2 h-4 w-4" />
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
