import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function AboutProgram() {
  const image1 = PlaceHolderImages.find((p) => p.id === 'about-program-1');
  const image2 = PlaceHolderImages.find((p) => p.id === 'about-program-2');

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[450px]">
          {image1 && (
            <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={image1.imageUrl}
                alt={image1.description}
                fill
                className="object-cover"
                data-ai-hint={image1.imageHint}
              />
            </div>
          )}
          {image2 && (
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-lg overflow-hidden border-4 border-background shadow-2xl">
              <Image
                src={image2.imageUrl}
                alt={image2.description}
                fill
                className="object-cover"
                data-ai-hint={image2.imageHint}
              />
            </div>
          )}
        </div>
        <div>
          <h2 className="font-headline text-4xl font-bold">About the program</h2>
          <div className="w-24 h-1 bg-primary my-4"></div>
          <div className="space-y-4 text-foreground/80">
            <p>
              Through a series of guided online trainings and workshops, the program empowers non-technical and creative founders, as well as pre-entrepreneurs to ideate, design, and validate prototypes using intuitive, prompt-based tools like Gemini, Nano Banana, Imagen, and Veo in AI Studio.
            </p>
            <p>
              After the two week program, participants will be invited to submit their prototypes. Participants with outstanding submissions will be invited to present their prototypes at the "Build the Future" Showcase, which will take place in January. Showcase presenters will also receive mentoring from experts from Google.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}