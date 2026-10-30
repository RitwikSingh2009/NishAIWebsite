import { Features } from "@/components/features";
import { PersonalizationGraphic } from "@/components/personalization-graphic";
import { PhosphorVideo } from "@/components/phosphor-video";
import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  return (
    <main className="pt-24 text-center sm:pt-32">
      <h1 className="px-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        Writing agent{" "}
        <span className="font-display font-normal italic text-purple-500">personalized to you</span>
      </h1>
      <img
        src="/images/nish%20ai%20hero.JPG"
        alt="Crystal ball on a rock by the water"
        className="mx-auto mt-12 h-[80vh] w-[calc(100%-1.5rem)] rounded-2xl object-cover object-[center_45%] sm:mt-16"
      />
      <div className="relative isolate overflow-hidden">
        <PhosphorVideo />
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 text-left sm:px-6 sm:py-32 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Custom AI models</h2>
            <p className="mt-6 max-w-xl text-lg text-black/70 sm:text-xl">
              Nish is a writing engine tailored to you, built right into your desktop apps. It learns your voice,
              vocabulary, and typing style, then helps autocomplete your thoughts as you write.
            </p>
          </div>
          <PersonalizationGraphic />
        </section>
      </div>
      <Features />
      <section id="waitlist" className="scroll-mt-8 px-4 py-24 sm:py-32">
        <WaitlistForm />
      </section>
    </main>
  );
}
