
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Award, BookOpen, Calendar, Clock, Disc, GitBranch, Goal, Heart, Lightbulb, Mic, Projector, Rocket, Sparkles, Star, Users, Zap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const scheduleDetails = [
    {
        title: "Total Program Duration",
        details: [
            "3 Months (12 Weeks)",
            "Common timeline for all tracks",
            "Skill depth varies by track, structure remains the same",
        ],
        icon: Clock,
    },
    {
        title: "Training Schedule (Weekly Format)",
        details: [
            "2–3 live training sessions per week",
            "Sessions include: Concept learning, Guided practice, Interactive discussions, Mentorship touchpoints",
            "Additional optional community sessions may be added",
        ],
        icon: Calendar,
    },
]

const months = [
    {
        title: "Month 1 — Foundations & Track Fundamentals",
        focus: "Core fundamentals of the selected track, Digital confidence & orientation, Responsible AI, prompt writing & vibe coding basics, Understanding tools, workflows, and expectations",
        sessions: "2–3 sessions per week, Track-specific fundamental course, Beginner-friendly, no prior experience required",
        outcome: "Strong conceptual foundation, Tool familiarity, Clear understanding of chosen track direction",
        icon: Rocket,
    },
    {
        title: "Month 2 — Advanced Learning & Demo Projects",
        focus: "Advanced concepts for each track, Real-world exposure, Applying skills through guided demo projects",
        sessions: "2 sessions per week, Hands-on learning with mentor guidance",
        projects: "One demo project per track, Step-by-step implementation, Feedback and improvement cycles",
        outcome: "Skill confidence, Practical application experience, Preparation for live projects",
        icon: Zap,
    },
    {
        title: "Month 3 — Live Projects, Innovation & Evaluation",
        focus: "Real-world collaboration with SheCodesHerWay, Final course module, Independent thinking and problem-solving",
        sessions: "Live project collaboration sessions, Mentorship & review meetings",
        projects: "One live project per track. Participants also build: Their own project based on: Theme, Problem statement, Prototype design. Final submission & presentation.",
        evaluation: "Project examination and review, Performance-based assessment",
        recognition: "Top 100 performers announced, Top 10 participants from each track highlighted. Ranking based on: Learning progress, Project quality, Participation, Innovation and consistency",
        outcome: "Skill confidence, Practical application experience, Preparation for live projects",
        icon: Star,
    },
]

export default function ProgramStructurePage() {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <GitBranch className="mx-auto h-12 w-12 text-primary" />
                        <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">Program Structure & Timeline</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                            A detailed look at the 3-month journey of Sangini Udaan : EmpowerFly.
                        </p>
                        <Button asChild className="mt-8">
                            <Link href="/sangini-udaan">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Program Overview
                            </Link>
                        </Button>
                    </div>
                </section>
                
                <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <Card className="text-center bg-accent/20 border-accent/30 shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-3xl">Sangini Udaan : EmpowerFly — Cohort 1</CardTitle>
                            </CardHeader>
                            <CardContent className="text-foreground/80 text-lg">
                                <p>A very warm welcome to all the participants and mentors joining our founding cohort! We are thrilled to have you on this journey of growth, learning, and empowerment. Together, we will build something truly special.</p>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-8">
                            {scheduleDetails.map(detail => (
                                <Card key={detail.title} className="shadow-lg">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                                            <detail.icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle>{detail.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc list-inside space-y-2 text-foreground/80">
                                            {detail.details.map(item => <li key={item}>{item}</li>)}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Separator />

                        <div className="space-y-12">
                             {months.map(month => (
                                <Card key={month.title} className="shadow-lg overflow-hidden">
                                    <CardHeader className="bg-muted/50">
                                        <CardTitle className="font-headline text-2xl flex items-center gap-3">
                                            <month.icon className="h-6 w-6 text-primary" />
                                            {month.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6 space-y-6">
                                        <div>
                                            <h4 className="font-semibold flex items-center gap-2 mb-2"><Goal size={18}/>Focus</h4>
                                            <p className="text-foreground/80">{month.focus}</p>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold flex items-center gap-2 mb-2"><BookOpen size={18}/>Sessions</h4>
                                                <p className="text-foreground/80">{month.sessions}</p>
                                            </div>
                                             <div>
                                                <h4 className="font-semibold flex items-center gap-2 mb-2"><Lightbulb size={18}/>Outcome</h4>
                                                <p className="text-foreground/80">{month.outcome}</p>
                                            </div>
                                        </div>
                                        {month.projects && (
                                            <div>
                                                <h4 className="font-semibold flex items-center gap-2 mb-2"><Projector size={18}/>Projects</h4>
                                                <p className="text-foreground/80">{month.projects}</p>
                                            </div>
                                        )}
                                        {month.evaluation && (
                                            <div>
                                                <h4 className="font-semibold flex items-center gap-2 mb-2"><Award size={18}/>Evaluation & Recognition</h4>
                                                <p><strong className="font-medium">Evaluation Process: </strong>{month.evaluation}</p>
                                                <p><strong className="font-medium">Recognition: </strong>{month.recognition}</p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                             ))}
                        </div>

                        <Separator/>
                        
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-3"><Users size={24}/>Community & Engagement Sessions</CardTitle>
                                <CardDescription>Additional 6 Special Sessions (Across 3 Months)</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>These sessions are designed for bonding, reflection, and growth. Topics include fun interactive activities, knowledge sharing with mentors, “Tell Us About Yourself” sessions, personal journeys & challenges, future goals and career plans, open discussions and inspiration talks.</p>
                            </CardContent>
                        </Card>
                        
                        <Separator/>

                        <Card className="shadow-lg bg-green-50 border-green-200">
                             <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-3"><Sparkles size={24}/>End of Program Outcomes</CardTitle>
                            </CardHeader>
                             <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-green-800 font-medium">
                                    <li>Completion of structured learning journey</li>
                                    <li>Hands-on project experience</li>
                                    <li>Portfolio-ready work</li>
                                    <li>Certificates and recognition</li>
                                    <li>Strong community connections</li>
                                    <li>Clarity on next career or growth steps</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Separator/>
                        
                        <div>
                             <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl flex items-center gap-3"><Disc size={24}/>Soft Skills & Interview Preparation (Program-Wide Policy)</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <Badge>Mandatory Foundation for All</Badge>
                                        <p className="mt-2">The Emotional, Personal & Soft Skills Growth track is a compulsory core foundation for all Sangini Udaan : EmpowerFly participants, regardless of their primary learning track. This ensures every participant develops professional communication, confidence and leadership presence, emotional intelligence, and career and interview readiness.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold flex items-center gap-2"><Mic size={18}/>Interview Preparation — Included for All Participants</h4>
                                        <p className="mt-2">Interview preparation is fully integrated within the Soft Skills track and is mandatory for all participants, including those in tech, business, creative, non-tech, and all-in-one tracks. Coverage includes resume and profile guidance, interview communication skills, HR and behavioral interview practice, confidence building, and professional mindset.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold flex items-center gap-2"><Heart size={18}/>Track Enrollment Clarification</h4>
                                        <ul className="list-disc list-inside space-y-2 mt-2">
                                            <li>Every participant must complete the Soft Skills & Interview Preparation foundation.</li>
                                            <li>Participants who want deep, specialized focus on emotional growth, leadership, communication, and interview mastery may choose “Emotional, Personal & Soft Skills Growth” as their primary track.</li>
                                            <li>Participants who select other tracks will complete soft skills and interview preparation as a mandatory shared foundation, alongside their main track.</li>
                                        </ul>
                                    </div>
                                    <p className="font-semibold text-primary p-4 bg-primary/10 rounded-lg">Clear Participant Understanding Statement: Soft skills and interview preparation are compulsory for all Sangini Udaan : EmpowerFly participants. Learners seeking advanced depth in emotional intelligence, leadership, communication, and career readiness may choose the Emotional, Personal & Soft Skills Growth track as their primary specialization.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
