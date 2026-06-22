import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function InterviewPrepPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <Target className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Interview Preparation</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Mock questions, tips, and confidence-building advice for your next big interview.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center shadow-lg">
            <CardHeader>
              <CardTitle>Content Coming Soon!</CardTitle>
              <CardDescription>
                Our comprehensive interview preparation kits are currently in production.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/knowledge-hub">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Knowledge Hub
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
