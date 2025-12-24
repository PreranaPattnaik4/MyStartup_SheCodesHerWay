'use client';

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Linkedin } from 'lucide-react';

export default function PartnerPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    toast({
        title: "Application Submitted!",
        description: `Thank you for your interest! We've received your application and will be in touch soon.`,
    });
    form.reset();
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">Partner with Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Join our core team or collaborate with us to help shape the future of women in tech and creative fields.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto shadow-lg">
                 <form onSubmit={handleSubmit} data-form-type="Core Team Application">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>Join Our Core Team</CardTitle>
                            <CardDescription>
                                Are you passionate about our mission? We're looking for dedicated individuals to join our core team and drive our initiatives forward.
                            </CardDescription>
                          </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="applicant-name">Full Name</Label>
                            <Input id="applicant-name" placeholder="Your Name" required/>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="applicant-email">Email Address</Label>
                            <Input id="applicant-email" type="email" placeholder="you@example.com" required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="applicant-linkedin">LinkedIn Profile</Label>
                             <div className="relative">
                                <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="applicant-linkedin" placeholder="https://linkedin.com/in/your-profile" className="pl-9" required/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="applicant-contribution">How would you like to contribute?</Label>
                            <Textarea id="applicant-contribution" placeholder="Tell us about your expertise and how you'd like to help..." required/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Apply Now</Button>
                    </CardFooter>
                </form>
            </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
