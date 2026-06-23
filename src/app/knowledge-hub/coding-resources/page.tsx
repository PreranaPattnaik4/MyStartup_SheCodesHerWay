
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Code, ArrowLeft, ExternalLink, Bookmark, Cpu, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allResources } from '@/lib/knowledge-hub-data';

export default function CodingResourcesPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'feature-workshops');
  const items = allResources.filter(r => r.category === 'coding-resources');

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
            <Code className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Coding Resources</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Essential tools, code snippets, and technical references for web development and software ecosystems.
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
            {items.map((res, i) => (
              <Card key={i} className="bg-white shadow-md hover:shadow-lg transition-all border-primary/10 group">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 p-8 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <res.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold leading-tight">{res.title}</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-foreground/80 mb-8 leading-relaxed">{res.description}</p>
                  <Button asChild className="w-full font-bold">
                    <Link href={res.href}>
                      Access Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
