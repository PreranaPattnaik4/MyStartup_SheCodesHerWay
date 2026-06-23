
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Calendar, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { allResources } from '@/lib/knowledge-hub-data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ShareDropdown from '@/components/knowledge-hub/share-dropdown';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = allResources.find(r => r.id === slug);

  if (!resource) {
    return notFound();
  }

  const Icon = resource.icon;

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-white">
        {/* Article Header */}
        <div className="bg-secondary/20 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button asChild variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-primary">
              <Link href="/knowledge-hub">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Knowledge Hub
              </Link>
            </Button>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="outline" className="bg-white border-primary/20 text-primary px-3 py-1">
                {resource.category.replace('-', ' ').toUpperCase()}
              </Badge>
              {resource.trending && <Badge className="bg-amber-500 text-white">TRENDING</Badge>}
              {resource.popular && <Badge className="bg-rose-500 text-white">POPULAR</Badge>}
            </div>

            <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight mb-8">
              {resource.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span>SheCodesHerWays Editorial</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Published on {new Date(resource.dateAdded).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              {resource.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{resource.readTime}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <article className="lg:col-span-12 prose prose-lg max-w-none prose-headings:font-headline prose-primary">
              {resource.content ? (
                resource.content
              ) : (
                <div className="py-20 text-center bg-muted/30 rounded-3xl border-2 border-dashed border-muted-foreground/20">
                  <h2 className="text-2xl font-bold text-muted-foreground mb-4">Detailed Content Coming Soon</h2>
                  <p className="text-muted-foreground/80 max-w-md mx-auto">
                    We're hard at work finalizing the full text for this resource. Check back soon or browse our other active guides!
                  </p>
                  <Button asChild className="mt-8">
                    <Link href="/knowledge-hub">Explore More Resources</Link>
                  </Button>
                </div>
              )}
            </article>
          </div>
          
          <Separator className="my-16" />

          {/* Footer of article */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-10 px-8 bg-muted/30 rounded-3xl border">
            <div>
              <h4 className="font-bold text-xl mb-1">Found this helpful?</h4>
              <p className="text-muted-foreground">Help other Sanginis find this resource by sharing it.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ShareDropdown title={resource.title} />
              <Button variant="outline" className="rounded-full px-6">
                <Bookmark className="mr-2 h-4 w-4" /> Save for Later
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
