import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { SiteHeader, SiteFooter, GreenBanner, btn } from "@/components/SiteLayout";
import { specialties, specialtyName, clinic } from "@/lib/specialties";

type Search = { specialty?: string | undefined; location?: string | undefined; q?: string | undefined };

export const Route = createFileRoute("/find-a-doctor")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    specialty: typeof s["specialty"] === "string" ? (s["specialty"] as string) : undefined,
    location: typeof s["location"] === "string" ? (s["location"] as string) : undefined,
    q: typeof s["q"] === "string" ? (s["q"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Find a Doctor | Dermatology Clinic, P. A." },
      { name: "description", content: "Find a board-certified dermatologist by specialty and location." },
      { property: "og:title", content: "Find a Doctor | Dermatology Clinic, P. A." },
      { property: "og:description", content: "Find a board-certified dermatologist by specialty and location." },
    ],
  }),
  component: FindDoctor,
});

function FindDoctor() {
  const search = Route.useSearch();
  const fromQ = search.q
    ? specialties.find((s) => s.name.toLowerCase().includes(search.q!.toLowerCase()))?.slug
    : undefined;
  const [specialty, setSpecialty] = useState(search.specialty ?? fromQ ?? "");
  const [location, setLocation] = useState(search.location ?? "");
  const [submitted, setSubmitted] = useState(false);
  const [chosen, setChosen] = useState("");
  const resultRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (submitted && chosen) resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [submitted, chosen]);

  const showClinic = submitted && chosen !== "";

  return (
    <div className="font-sans">
      <SiteHeader />
      <GreenBanner title="Dermatology Clinic, P. A." />
      <section className="mx-auto -mt-16 max-w-3xl px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setChosen(specialty);
            setSubmitted(true);
          }}
          className="space-y-4 rounded-2xl border bg-background p-8 shadow-relief"
        >
          <label className="block font-semibold" htmlFor="sp">Specialties</label>
          <select id="sp" value={specialty} onChange={(e) => setSpecialty(e.target.value)} className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring">
            <option value="">All specialties</option>
            {specialties.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
          </select>
          <label className="block font-semibold" htmlFor="loc">Enter a location</label>
          <input id="loc" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City or zip code" className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
          <button type="submit" className={btn + " w-full"}>Apply</button>
          {submitted && !showClinic && (
            <p className="text-center text-sm text-muted-foreground">
              Select a specialty in the list above, then click Apply.
            </p>
          )}
        </form>
      </section>

      {showClinic && (
        <section ref={resultRef} className="mx-auto max-w-5xl px-4 py-14">
          <article className="rounded-2xl border bg-background p-8 text-center shadow-relief">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{specialtyName(chosen)}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary">{clinic.name}</h2>
            <p className="mt-3 flex flex-wrap items-center justify-center gap-2 font-semibold">
              <MapPin className="h-5 w-5 text-primary" />
              {clinic.address} &middot; {clinic.city}
            </p>
            <a href={`tel:${clinic.phone}`} className={btn + " mt-6"}>
              <Phone className="h-5 w-5" />
              {clinic.phone}
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Call the clinic to schedule your {specialtyName(chosen)} visit.
            </p>
          </article>
        </section>
      )}
      <div className="h-16" />
      <SiteFooter />
    </div>
  );
}
