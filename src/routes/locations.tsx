import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SiteHeader, SiteFooter, btn } from "@/components/SiteLayout";
import office1 from "@/assets/doctor-1.jpg";
import office2 from "@/assets/doctor-2.jpg";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations | Dermatology Clinic, P. A." },
      { name: "description", content: "Find The Dermatology Clinic, P.A. locations across Wichita." },
    ],
  }),
  component: Locations,
});

function Locations() {
  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="bg-[#359C76] text-primary-foreground">
        <div className="mx-auto max-w-[958px] px-6 py-16 text-center">
          <h1 className="font-display text-5xl font-bold md:text-6xl">Location</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg">
            Our network of physician practices throughout the Wichita area provides access to experienced dermatologists who are dedicated to providing comprehensive skin care and improving the health of you and your family.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[958px] px-4 py-8 space-y-12">
        <div className="space-y-4">
          <div className="rounded-2xl bg-background shadow-relief overflow-hidden">
            <h2 className="font-display text-2xl font-bold text-primary p-6">East Wichita Office</h2>
            <img src={office1} alt="East Wichita Office" className="w-full h-64 object-contain" />
            <div className="p-6">
              <p className="text-muted-foreground mb-4">
                835 N Hillside St<br />
                Wichita, KS 67214-4913
              </p>
              <Link to="https://maps.app.goo.gl/z34ifEbrV7zdYvWq8" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#359C76] px-7 py-3 font-semibold text-white shadow-relief transition hover:brightness-110 hover:-translate-y-0.5">
                Get directions
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl bg-background shadow-relief overflow-hidden">
            <h2 className="font-display text-2xl font-bold text-primary p-6">West Wichita Office</h2>
            <img src={office2} alt="West Wichita Office" className="w-full h-64 object-contain" />
            <div className="p-6">
              <p className="text-muted-foreground mb-4">
                East 21st St<br />
                Derby, KS 67037
              </p>
              <Link to="https://maps.app.goo.gl/8LMRxCFQGivAW5wn8" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#359C76] px-6 py-2 font-semibold text-white shadow-relief transition hover:brightness-110 hover:-translate-y-0.5">
                Get directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 pb-20">
        <div className="rounded-2xl bg-background p-8 shadow-relief">
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Contact The Dermatology Clinic, P.A.</h2>
          <a href="tel:+13162476451" className={btn + " mt-6"}>
            <Phone className="h-5 w-5" />
            (316) 247-6451
          </a>
          <div className="mt-8">
            <h3 className="font-display text-xl font-bold text-primary mb-3">Business Hours</h3>
            <p className="text-muted-foreground leading-relaxed">
              Monday – Friday: 8:00 AM – 5:00 PM<br />
              Saturday: Closed<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default Locations;
