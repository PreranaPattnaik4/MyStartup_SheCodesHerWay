
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Code, ArrowLeft, ExternalLink, Bookmark } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    title: "Essential Git & GitHub Cheat Sheet",
    description: "A one-page reference for all the commands you need to master version control and collaboration.",
    links: [
      { label: "View Guide", href: "#" },
      { label: "Cheat Sheet (PDF)", href: "#" }
    ]
  },
  {
    title: "Top Free Platforms to Learn Programming",
    description: "The ultimate list of high-quality, zero-cost platforms to learn everything from web dev to data science.",
    links: [
      { label: "Visit List", href: "#" }
    ]
  }
];

export default function CodingResourcesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <Code className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Coding Resources</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Essential tools, code snippets, and references for web and software development.
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
            {resources.map((res, i) => (
              <Card key={i} className="bg-white shadow-md hover:shadow-lg transition-all">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <CardTitle className="text-xl font-bold">{res.title}</CardTitle>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-6">{res.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {res.links.map((link, j) => (
                      <Button key={j} variant="secondary" size="sm" asChild>
                        <Link href={link.href}>
                          {link.label} <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    ))}
                  </div>
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
