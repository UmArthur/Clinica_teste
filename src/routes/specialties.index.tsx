import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SiteHeader, SiteFooter, GreenBanner } from "@/components/SiteLayout";
import { specialties } from "@/lib/specialties";

export const Route = createFileRoute("/specialties/")({
  head: () => ({
    meta: [
      { title: "Specialties | Dermatology Clinic, P. A." },
      { name: "description", content: "Explore our medical, surgical and cosmetic dermatology specialties." },
      { property: "og:title", content: "Specialties | Dermatology Clinic, P. A." },
      { property: "og:description", content: "Explore our medical, surgical and cosmetic dermatology specialties." },
    ],
  }),
  component: SpecialtiesPage,
});

function SpecialtiesPage() {
  return (
    <div className="font-sans">
      <SiteHeader />
      <GreenBanner title="Specialties">
        <p className="max-w-2xl text-lg opacity-95">From everyday skin concerns to advanced cosmetic and cancer treatments, our board-certified team offers complete care for your skin, hair and nails.</p>
      </GreenBanner>
      <section className="mx-auto max-w-5xl px-4 py-16">
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {specialties.map((s) => (
            <li key={s.slug}>
              <Link to="/specialties/$slug" params={{ slug: s.slug }} className="flex items-center justify-between rounded-xl border bg-background p-5 font-semibold transition hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-relief">
                {s.name}<ChevronRight className="h-5 w-5 text-primary" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <SiteFooter />
    </div>
  );
}
