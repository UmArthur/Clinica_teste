import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteLayout";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Dermatology Clinic, P. A." },
      { name: "description", content: "Learn more about The Dermatology Clinic P.A., dedicated to quality dermatological care since 1932." },
    ],
  }),
  component: AboutUs,
});

export function AboutUs() {
  const btn = "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-relief transition hover:brightness-110 hover:-translate-y-0.5";
  const btnWhite = "inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-primary border border-primary shadow-relief transition hover:bg-secondary";

  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="bg-[#359C76] py-16 text-center text-primary-foreground">
        <h1 className="font-display text-5xl font-bold md:text-6xl">About Us</h1>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <p className="font-display text-4xl font-bold text-primary mb-8">The Dermatology Clinic P.A.</p>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          is a free-standing single specialty clinic dedicated to quality dermatological care for the entire family. Since its inception in 1932, board-certified dermatologists have provided state of the art medical and surgical care for diseases of the hair, skin, nails, and mucous membranes. The Dermatology Clinic's mission is to maintain its excellent reputation for providing the highest quality, up to date and compassionate care for all patients with diseases of the skin.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/specialties" className={btnWhite}>
            View our specialties
          </Link>
          <Link to="/find-a-doctor" className={btn}>
            Find a Location
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}