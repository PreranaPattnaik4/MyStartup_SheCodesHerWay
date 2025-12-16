
import { Users, Handshake, Briefcase, Globe } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const goals = [
    {
        icon: Users,
        title: "Women Trained",
        description: "Empower 1,000+ women with hands-on skills in tech, creative, and leadership fields.",
        color: "bg-blue-500",
    },
    {
        icon: Handshake,
        title: "Mentor Network",
        description: "Build a strong network of over 100 dedicated mentors to guide and support our community.",
        color: "bg-teal-500",
    },
    {
        icon: Briefcase,
        title: "Key Partnerships",
        description: "Forge strategic partnerships with at least 10 organizations to expand opportunities.",
        color: "bg-amber-500",
    },
    {
        icon: Globe,
        title: "Community Growth",
        description: "Grow our inclusive community to over 5,000 members across the globe.",
        color: "bg-rose-500",
    },
];

export default function ImpactGoals() {
    const targetImage = PlaceHolderImages.find(p => p.id === 'impact-goals-target');
  return (
    <section>
        <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Impact Goals (2025-2026)</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                We are committed to making a tangible difference in the lives of women across India.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative pl-8">
                 <div className="absolute left-[39px] top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
                <div className="space-y-12">
                    {goals.map((goal, index) => (
                        <div key={index} className="flex items-start gap-6">
                            <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full ${goal.color} text-white`}>
                                <goal.icon className="h-7 w-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{goal.title}</h3>
                                <p className="mt-1 text-foreground/80">{goal.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
                {targetImage && (
                    <Image 
                        src={targetImage.imageUrl}
                        alt={targetImage.description}
                        width={400}
                        height={400}
                        className="rounded-full"
                        data-ai-hint={targetImage.imageHint}
                    />
                )}
            </div>
        </div>
    </section>
  )
}
