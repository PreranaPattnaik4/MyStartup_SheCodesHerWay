
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StartupSchool() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "startup-school-hero");
  return (
    <section>
       <div className="max-w-6xl mx-auto py-12">
        <p>India</p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              {brand.name}
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-2">
              Startup School: Prompt to Prototype
            </h2>
            <p className="mt-8 text-lg text-foreground/80">
              {brand.programTagline}
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Startup School is a series of guided online trainings and
              workshops designed to equip early-stage startup founders with the
              tools, products, and knowledge that growing companies need.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
          <div className="relative">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>India - online</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>November 27 - December 7, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
