
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Download, ArrowLeft, Package, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const freebies = [
  {
    title: "AI Learning Starter Pack",
    description: "A bundled resource containing our best basic guides on using AI for learning and productivity.",
    popular: true,
    items: "5 PDFs, 2 Templates"
  },
  {
    title: "Career Growth Resource Bundle",
    description: "All our checklists and toolkits for job hunting, networking, and personal branding in one place.",
    popular: false,
    items: "4 Checklists, 1 Guide"
  }
];

export default function FreeResourcesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <Download className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Free Resources</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Our open-access collection of tools, guides, and bundles to support your growth.
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
            {freebies.map((f, i) => (
              <Card key={i} className="bg-white shadow-md border-none overflow-hidden group">
                <div className="h-2 bg-primary"></div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Package className="h-8 w-8 text-primary/30" />
                    {f.popular && <Badge className="bg-rose-500"><Sparkles className="mr-1 h-3 w-3" /> Most Downloaded</Badge>}
                  </div>
                  <CardTitle className="text-2xl">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">{f.description}</p>
                  <div className="p-3 bg-muted rounded-lg text-sm text-muted-foreground flex justify-between">
                    <span>Includes:</span>
                    <span className="font-bold">{f.items}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" /> Access Bundle
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
