
'use client';

import {
  Rocket,
  Lightbulb,
  Heart,
  Briefcase,
  Users,
  Award,
  CheckCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const timelinePhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation & Orientation',
    description:
      'Introduction to the Sangini Udaan journey, program values, learning expectations, responsible AI principles, and baseline skill assessment.',
    icon: Rocket,
  },
  {
    phase: 'Phase 2',
    title: 'Core Skill & AI Learning',
    description:
      'Track-specific technical and digital skills, AI fundamentals, tool exposure, and ethical technology practices aligned with industry standards.',
    icon: Lightbulb,
  },
  {
    phase: 'Phase 3',
    title: 'Personal Growth & Communication',
    description:
      'Confidence building, emotional intelligence, storytelling, public speaking, leadership basics, and professional mindset development.',
    icon: Heart,
  },
  {
    phase: 'Phase 4',
    title: 'Real-World Projects & Portfolio',
    description:
      'Hands-on problem-solving projects, guided implementation, collaboration, and creation of a showcase-ready portfolio.',
    icon: Briefcase,
  },
  {
    phase: 'Phase 5',
    title: 'Community Collaboration & Impact',
    description:
      'Team-based initiatives, social impact projects, leadership participation, and contribution to community-driven outcomes.',
    icon: Users,
  },
  {
    phase: 'Phase 6',
    title: 'Industry Guidance & Career Direction',
    description:
      'Mentorship, feedback, career path exploration, interview readiness, goal-setting, and next-step planning.',
    icon: Award,
  },
];

export default function ProgramFlow() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold text-foreground">
            The Sangini Udaan : EmpowerFly Journey
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            A shared learning journey for holistic growth, real-world
            readiness, and long-term impact.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"
            aria-hidden="true"
          ></div>

          <div className="space-y-12 md:space-y-0">
            {timelinePhases.map((item, index) => (
              <div
                key={index}
                className="relative md:grid md:grid-cols-2 md:items-center md:gap-x-12"
              >
                {/* Content Card - Left */}
                <div
                  className={cn(
                    'md:text-right',
                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                  )}
                >
                  {index % 2 === 0 && (
                    <Card className="shadow-lg bg-white mb-8 md:mb-0">
                      <CardHeader>
                        <p className="text-sm font-semibold text-primary">
                          {item.phase}
                        </p>
                        <CardTitle className="font-headline text-2xl">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Timeline Marker */}
                <div
                  className={cn(
                    'absolute top-0 left-4 md:left-1/2 w-8 h-8 rounded-full bg-background flex items-center justify-center border-2 border-primary shadow-md -translate-x-1/2',
                    index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                  )}
                >
                  <item.icon className="h-4 w-4 text-primary" />
                </div>

                {/* Vertical line for mobile */}
                <div
                  className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-1/2 md:hidden"
                  aria-hidden="true"
                ></div>

                {/* Content Card - Right and Mobile */}
                <div
                  className={cn(
                    'ml-12 md:ml-0',
                    index % 2 !== 0 ? 'md:order-1' : 'md:order-2'
                  )}
                >
                  {index % 2 !== 0 && (
                     <Card className="shadow-lg bg-white hidden md:block">
                      <CardHeader>
                         <p className="text-sm font-semibold text-primary">
                          {item.phase}
                        </p>
                        <CardTitle className="font-headline text-2xl">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                   {/* Mobile Card */}
                   <Card className="shadow-lg bg-white md:hidden">
                      <CardHeader>
                         <p className="text-sm font-semibold text-primary">
                          {item.phase}
                        </p>
                        <CardTitle className="font-headline text-2xl">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <Card className="bg-white p-6 shadow-md border-t-4 border-primary">
            <p className="text-foreground/80 italic">
              “All Sangini Udaan tracks follow a shared learning journey through
              a common timeline. While skill focus may vary by track, every
              participant progresses through the same structured phases
              designed for holistic growth, real-world readiness, and long-term
              impact.”
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}
