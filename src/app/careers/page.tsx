
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, HeartHandshake, Handshake, ArrowRight, ClipboardList, UserCheck, Zap, CheckCircle2, Users, Award, Linkedin, FileText, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const opportunities = [
    {
        icon: Briefcase,
        title: "Internship Program",
        description: "Gain real-world skills and hands-on experience by joining our training-based internship. Work on live projects, receive mentorship, and get certified.",
        cta: "Explore Internships",
        href: "/internship"
    },
    {
        icon: HeartHandshake,
        title: "Become a Mentor",
        description: "Are you a student or professional passionate about giving back? Guide and inspire the next generation of women leaders and creators.",
        cta: "Apply to be a Mentor",
        href: "/mentor"
    },
    {
        icon: Handshake,
        title: "Join Our Core Team",
        description: "Are you passionate about our mission? We're looking for dedicated individuals to join our core team and drive our initiatives forward.",
        cta: "Join Our Core Team",
        href: "/partner"
    }
];

const responsibilities = [
    {
        icon: ClipboardList,
        title: "Internship Responsibilities",
        points: [
            "Contribute to live projects in your chosen domain (Tech, Design, Content, etc.).",
            "Collaborate with team members and mentors to achieve project goals.",
            "Participate actively in learning sessions and workshops.",
            "Complete assigned tasks and deliverables within the specified timelines.",
            "Engage with the community and share your learning journey."
        ]
    },
    {
        icon: UserCheck,
        title: "Mentor Responsibilities",
        points: [
            "Provide one-on-one or group guidance to program participants.",
            "Share industry knowledge, experience, and career advice.",
            "Participate in mentorship circles and Q&A sessions.",
            "Help mentees set and achieve their personal and professional goals.",
            "Offer constructive feedback and encouragement.",
        ]
    },
    {
        icon: Zap,
        title: "Core Team Responsibilities",
        points: [
            "Drive strategic initiatives and contribute to program development.",
            "Help manage community engagement, events, and communications.",
            "Collaborate on platform growth, partnerships, and outreach efforts.",
            "Take ownership of key areas and contribute to operational excellence.",
            "Uphold the mission and values of SheCodesHerWay in all activities.",
        ]
    }
]

export default function CareersPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h1 className="font-headline text-4xl font-bold md:text-6xl">Get Involved</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Join our mission to build a world where every woman has the opportunity to soar. Explore how you can contribute.
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {opportunities.map((opp) => (
                    <Card key={opp.title} className="flex flex-col shadow-lg transform transition-transform hover:-translate-y-2 duration-300">
                        <CardHeader className="items-center text-center">
                            <div className="bg-primary/10 text-primary p-4 rounded-full">
                                <opp.icon className="h-8 w-8" />
                            </div>
                            <CardTitle className="pt-4">{opp.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow text-center">
                            <p className="text-foreground/80">{opp.description}</p>
                        </CardContent>
                        <div className="p-6 pt-0 text-center">
                             <Button asChild>
                                <Link href={opp.href}>
                                    {opp.cta}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </section>

        <Separator />

        <section className="bg-muted/50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold">Roles &amp; Responsibilities</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                        Understand the key responsibilities for each role and how you can make an impact.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {responsibilities.map((role) => (
                         <Card key={role.title} className="flex flex-col shadow-lg bg-white">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                                        <role.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle>{role.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                               <ul className="space-y-3">
                                 {role.points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-foreground/80">{point}</span>
                                    </li>
                                 ))}
                               </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto bg-accent/20 border-accent/50 shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl md:text-3xl">
                        Join SheCodesHerWay – Core Team Collaboration!
                    </CardTitle>
                    <CardContent className="text-lg text-accent-foreground/90 pt-4">
                         We’re inviting passionate, purpose-driven individuals to collaborate with us at SheCodesHerWay, a women-led, mission-driven startup (pre-seed stage).
                    </CardContent>
                </CardHeader>
                <CardContent>
                    <div className="text-center mb-6">
                        <h3 className="font-semibold text-xl text-primary flex items-center justify-center gap-2"><Zap size={20}/> What’s in it for you:</h3>
                    </div>
                    <ul className="space-y-3 max-w-2xl mx-auto text-foreground/80">
                        <li className="flex items-start gap-3">
                            <Users size={20} className="text-primary mt-1"/>
                            <div><span className="font-bold">Participation Recognition:</span> Receive a Collaboration Template at joining.</div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Award size={20} className="text-primary mt-1"/>
                            <div><span className="font-bold">Certificates:</span> 3-month Diamond & 6-month Platinum tiers for dedicated contributors.</div>
                        </li>
                         <li className="flex items-start gap-3">
                            <Linkedin size={20} className="text-primary mt-1"/>
                            <div><span className="font-bold">Career Visibility:</span> LinkedIn experience guidance and platform recognition.</div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Zap size={20} className="text-primary mt-1"/>
                            <div><span className="font-bold">Top Contributor Spotlight:</span> Exceptional contributors recognized at the top in every field.</div>
                        </li>
                    </ul>
                    <div className="mt-8 text-center bg-background/50 p-4 rounded-lg">
                        <p className="font-semibold text-lg">📝 Flexible, experience-driven collaboration – learn, contribute, and grow in a real startup environment.</p>
                        <p className="text-sm mt-2"><span className="font-bold">Important:</span> This is voluntary, unpaid, and non-employment collaboration, designed for impact, learning, and skill-building.</p>
                        <Button asChild variant="link" className="mt-2">
                            <Link href="https://docs.google.com/document/d/1aGJ6ldythh6hwnUa-zz-mr23x-hSPRlzuJKA2qIXZR0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <FileText className="mr-2"/> Read the full Collaboration Guidelines here
                            </Link>
                        </Button>
                    </div>
                    <p className="text-center mt-8 font-semibold text-lg text-primary flex items-center justify-center gap-2">
                        Let’s build, grow, and empower together! <Heart size={20} />
                    </p>
                </CardContent>
            </Card>
        </section>

        <section className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8 text-center">
            <h2 className="font-headline text-3xl font-bold">Don't see a fit?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                We're always open to new ideas and collaborations. If you have a different way you'd like to contribute, we'd love to hear from you.
            </p>
            <Button asChild variant="outline" className="mt-8">
                <Link href="/contact">Get in Touch</Link>
            </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
