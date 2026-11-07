import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Stethoscope, FileText, MapPin, LogIn, Search } from "lucide-react";
import banner from "@/assets/banner.jpg";
import procedure from "@/assets/procedure.jpg";
import { SiteHeader, SiteFooter, btn } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dermatology Clinic, P. A. | Medical & Cosmetic Dermatology" },
      { name: "description", content: "Award-recognized dermatology clinic offering medical and cosmetic dermatology across two regions." },
      { property: "og:title", content: "Dermatology Clinic, P. A." },
      { property: "og:description", content: "Expert medical and cosmetic dermatology for a healthier tomorrow." },
    ],
  }),
  component: Index,
});

const card = "flex flex-col items-center gap-2 rounded-xl border bg-background p-4 text-center text-sm font-semibold transition hover:border-primary hover:text-primary hover:shadow-relief";

function Index() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="relative mx-auto aspect-[958/284] min-h-[320px] w-full max-w-[958px] overflow-hidden md:mt-6 md:rounded-xl">
        <img src={banner} alt="Clinic treatment room" width={958} height={284} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative flex h-full flex-col items-center justify-center gap-5 px-6 text-center text-primary-foreground">
          <p className="max-w-2xl font-display text-2xl font-semibold leading-snug md:text-3xl">
            We are Dermatology Clinic, P. A. — recognized by the State Board of Medical Excellence as one of the highest-rated dermatology clinics in the state, proudly serving two regions.
          </p>
          <Link to="/specialties" className="rounded-full bg-background px-7 py-3 font-semibold text-primary shadow-relief transition hover:-translate-y-0.5">Specialties</Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/find-a-doctor", search: { q, location } });
          }}
          className="space-y-4 rounded-2xl border bg-background p-8 shadow-relief"
        >
          <label className="block font-display text-2xl font-bold">What are you looking for?</label>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Doctor, specialty or treatment" className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
          <label className="block font-semibold">Enter a city or zip code</label>
          <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Wichita or 67037" className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
          <button type="submit" className={btn + " w-full"}><Search className="h-4 w-4" />Search</button>
        </form>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Link to="/find-a-doctor" className={card}><Stethoscope className="h-6 w-6 text-primary" />Find a doctor</Link>
          <a href="#" className={card}><FileText className="h-6 w-6 text-primary" />Patient forms</a>
          <a href="/locations" className={card}><MapPin className="h-6 w-6 text-primary" />Find a location</a>
          <a href="#" className={card}><LogIn className="h-6 w-6 text-primary" />Access your Patient Portal</a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 text-center">
        <img src={procedure} alt="Aesthetic facial procedure" loading="lazy" width={1600} height={912} className="w-full rounded-2xl object-cover shadow-relief" />
        <h2 className="mt-10 font-display text-4xl font-bold text-primary">We want to give you a healthier tomorrow.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          From skin cancer screenings to advanced cosmetic treatments, our board-certified dermatologists combine the latest technology with genuinely personal care. Shorter wait times, clear treatment plans, and results you can see — so you can feel confident in your skin, every single day.
        </p>
        <Link to="/about-us" className={btn + " mt-8"}>About Dermatology Clinic, P. A.</Link>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-background p-12 text-center shadow-relief">
          <h2 className="font-display text-4xl font-bold">Our Specialties</h2>
          <Link to="/specialties" className={btn}>Our Specialties</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
