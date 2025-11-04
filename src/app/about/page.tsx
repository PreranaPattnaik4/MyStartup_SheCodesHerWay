
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { brand } from '@/lib/brand';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const coreValues = [
    { value: "Empowerment", meaning: "Helping women find their voice and independence" },
    { value: "Innovation", meaning: "Merging technology with creativity and purpose" },
    { value: "Community", meaning: "Building sisterhood through support and shared growth" },
    { value: "Inclusivity", meaning: "Every woman is welcome, regardless of background" },
    { value: "Courage", meaning: "Encouraging women to dream, lead, and take flight" },
]

export default function AboutPage() {
    const founderImage = PlaceHolderImages.find((p) => p.id === 'founder-portrait');

    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="font-headline text-4xl font-bold md:text-6xl">About SheCodesHerWay</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                            Empowering Women to Learn, Lead, and Rise.
                        </p>
                    </div>
                </section>
                
                <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        <section className="max-w-4xl mx-auto text-center">
                             <p className="font-headline text-2xl text-foreground/90">
                                SheCodesHerWay is a women-led startup founded by **{brand.founder.name}**, created with one powerful purpose — to help women **build their path, lead their way, and leave their mark.**
                            </p>
                            <p className="mt-6 text-lg text-foreground/80">
                                We believe every woman deserves the tools, confidence, and community to turn her dreams into action — whether through **technology, entrepreneurship, creativity, or leadership.**
                            </p>
                            <p className="mt-4 text-lg text-foreground/80">
                                Through our flagship program **{brand.programName}**, we are building a movement where women can **learn, connect, and grow** — developing digital skills, emotional strength, and the confidence to fly beyond limits. 🌷
                            </p>
                        </section>

                        <Separator />

                        <section className="max-w-4xl mx-auto">
                            <div className="text-center">
                               <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Mission & Vision</h2>
                            </div>
                            <div className="mt-8 grid gap-8 md:grid-cols-2">
                                <Card className="shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-3xl">Mission</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-foreground/80">To **empower women** with **digital learning, mentorship, and leadership training** — while building a global community that celebrates **collaboration, creativity, and courage.**</p>
                                    </CardContent>
                                </Card>
                                <Card className="shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-3xl">Vision</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-foreground/80">To create a world where **every woman** has the opportunity, resources, and confidence to soar — beyond barriers, beyond expectations, and into her fullest potential.</p>
                                    </CardContent>
                                </Card>
                            </div>
                             <p className="mt-8 text-center font-headline text-xl text-primary">Because when one woman rises, she inspires countless others to follow. 🌸</p>
                        </section>
                        
                        <Separator />

                        <section className="max-w-4xl mx-auto">
                            <div className="text-center">
                                <h2 className="font-headline text-3xl font-bold md:text-4xl">What We Do</h2>
                                <p className="mt-4 text-lg text-foreground/80">At **SheCodesHerWay**, we blend **technology, creativity, and emotional empowerment** into one holistic ecosystem designed for women’s growth.</p>
                            </div>
                            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
                                <li className="rounded-lg bg-muted p-4">🌷 **Sangini Udaan** — our flagship empowerment and mentorship program.</li>
                                <li className="rounded-lg bg-muted p-4">💻 **Learning Tracks** — coding, digital tools, AI, storytelling, and leadership.</li>
                                <li className="rounded-lg bg-muted p-4">🚀 **Entrepreneurship Bootcamps** — helping women launch and grow their startups.</li>
                                <li className="rounded-lg bg-muted p-4">🎨 **Creative Pathways** — blogging, Canva design, digital art, and content creation.</li>
                                <li className="rounded-lg bg-muted p-4">💖 **Emotional & Soft Skills Growth** — confidence, communication, and leadership sessions.</li>
                            </ul>
                            <p className="mt-6 text-center font-headline text-xl text-primary">It’s not just learning — it’s transformation.</p>
                        </section>

                        <Separator />
                        
                        <section>
                            <Card className="overflow-hidden shadow-lg max-w-4xl mx-auto">
                                <div className="grid md:grid-cols-2">
                                  <div className="relative h-80 md:h-full min-h-[350px]">
                                    {founderImage && (
                                      <Image
                                        src={founderImage.imageUrl}
                                        alt={founderImage.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={founderImage.imageHint}
                                      />
                                    )}
                                  </div>
                                  <div className="flex flex-col justify-center p-8 md:p-12">
                                    <h2 className="font-headline text-3xl font-bold">Our Founder</h2>
                                    <p className="mt-2 text-xl font-semibold text-primary">{brand.founder.name}</p>
                                    <p className='italic text-muted-foreground'>Founder & Developer | SheCodesHerWay</p>
                                    <p className="mt-4 text-foreground/80">A visionary committed to empowering women through innovation and inclusivity. Prerana started SheCodesHerWay to bridge the gap between **education and opportunity**, creating a safe, inspiring space where women can learn, collaborate, and grow without limits.</p>
                                    <p className="mt-4 text-foreground/80">Her leadership reflects courage, compassion, and creativity — the essence of the SheCodesHerWay spirit. ✨</p>
                                  </div>
                                </div>
                            </Card>
                        </section>

                        <Separator />

                        <section className="max-w-4xl mx-auto text-center">
                            <h2 className="font-headline text-3xl font-bold md:text-4xl">Join the Movement</h2>
                            <p className="mt-4 text-lg text-foreground/80">
                                SheCodesHerWay isn’t just a startup — it’s a **movement of women who dare to dream, build, and rise together.** Whether you want to **learn a new skill**, **start your career**, or **launch your own venture**, we’re here to guide, mentor, and celebrate your journey.
                            </p>
                             <Button asChild size="lg" className="mt-8">
                                <Link href="/apply">Join Us - Let's Build Your Path</Link>
                            </Button>
                        </section>

                         <Separator />

                        <section>
                            <div className="text-center mb-10">
                                <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Core Values</h2>
                            </div>
                            <Card className="max-w-2xl mx-auto shadow-lg">
                                <CardContent className="pt-6">
                                     <Table>
                                        <TableHeader>
                                            <TableRow>
                                            <TableHead>Value</TableHead>
                                            <TableHead>What It Means</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {coreValues.map((item) => (
                                            <TableRow key={item.value}>
                                                <TableCell className="font-medium">{item.value}</TableCell>
                                                <TableCell>{item.meaning}</TableCell>
                                            </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
