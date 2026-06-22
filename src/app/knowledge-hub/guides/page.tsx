
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { FileText, ArrowLeft, Download, CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const guides = [
  {
    title: "Complete Guide to Building a Tech Career in 2026",
    overview: "A strategic roadmap for navigating the evolving tech landscape. Learn about high-demand roles, required skills, and networking strategies.",
    takeaways: ["Industry trends analysis", "Skill gap assessment", "Networking effectively"],
    downloadLabel: "Download Guide (PDF)",
    isReady: true
  },
  {
    title: "Women in Tech Leadership Guide",
    overview: "Actionable advice and strategies for women looking to step into leadership positions in the tech industry, covering negotiation, presence, and team building.",
    takeaways: ["Developing executive presence", "Effective communication", "Navigating workplace politics"],
    downloadLabel: "Download Guide (Coming Soon)",
    isReady: false
  }
];

export default function GuidesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <FileText className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Expert Guides</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              In-depth references and handbooks for your learning and career journey.
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
            {guides.map((guide, i) => (
              <Card key={i} className="shadow-lg border-none bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Expert Guide</span>
                  </div>
                  <CardTitle className="text-3xl font-headline">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Overview</h4>
                    <p className="text-foreground/80 leading-relaxed">{guide.overview}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Key Takeaways</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {guide.takeaways.map((take, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                          <CheckCircle2 className="h-4 w-4 text-primary" /> {take}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 p-6 rounded-b-lg">
                  <Button className="w-full sm:w-auto" disabled={!guide.isReady}>
                    <Download className="mr-2 h-4 w-4" />
                    {guide.downloadLabel}
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
