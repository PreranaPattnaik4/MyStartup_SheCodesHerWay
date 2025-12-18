
import Header from '@/components/header';
import Footer from '@/components/footer';
import ExecutiveSummaryGenerator from '@/components/home/executive-summary-generator';
import { Bot } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function AiToolsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <Bot className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl flex items-center justify-center gap-4">
                    AI-Powered Executive Summary
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Generate a concise and compelling executive summary for your pitch deck using our AI tool.
                </p>
                <Button asChild variant="outline" className="mt-8">
                    <Link href="/ai-coaching">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to All AI Tools
                    </Link>
                </Button>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <ExecutiveSummaryGenerator />
        </section>
      </main>
      <Footer />
    </div>
  );
}
