
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Bot, Users, HeartHandshake, CheckCircle2, Rocket, BrainCircuit, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const keyHighlights = [
    { icon: BrainCircuit, text: "Skill-building across tech, creativity, business, and leadership" },
    { icon: HeartHandshake, text: "Mentorship and guided support from industry experts" },
    { icon: Users, text: "A supportive, inclusive women-led community" },
    { icon: Bot, text: "AI-powered learning assistance to guide your journey" },
    { icon: Rocket, text: "A clear path from confusion to confidence and independence" },
];

export default function WhatWeOffer() {
    const cardImage = PlaceHolderImages.find((p) => p.id === 'feature-community');

    return (
        <section className="w-full">
             <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold">What We Offer</h2>
            </div>
            <Card className="w-full max-w-6xl mx-auto shadow-lg overflow-hidden border-primary/20 bg-secondary/30">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div>
                            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Women Empowerment Program</p>
                            <h3 className="font-headline text-3xl md:text-4xl font-bold mt-2">
                                Sangini Udaan : EmpowerFly
                            </h3>
                            <Badge className="mt-3">Founding Cohort — Launching Soon</Badge>
                             <p className="mt-4 text-lg text-foreground/90 font-semibold italic">
                                “Empower Her to Fly Beyond Limits.”
                            </p>
                            <p className="mt-4 text-foreground/80">
                                A supportive, women-led empowerment journey designed to help you rise with confidence and fly beyond limits.
                            </p>
                        </div>
                        <div className="mt-8 space-y-4">
                            {keyHighlights.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                    <p className="text-foreground/90">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <Button asChild size="lg">
                                <Link href="/apply">Join the Founding Cohort</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative min-h-[300px] md:min-h-full">
                        {cardImage && (
                            <Image
                                src={cardImage.imageUrl}
                                alt="Women collaborating and empowering each other"
                                fill
                                className="object-cover"
                                data-ai-hint={cardImage.imageHint}
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent md:bg-gradient-to-r"></div>
                    </div>
                </div>
            </Card>
        </section>
    );
}
