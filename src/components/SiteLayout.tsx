import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

export const btn = "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-relief transition hover:brightness-110 hover:-translate-y-0.5";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const item = "block rounded-md px-3 py-3 text-lg font-semibold hover:bg-secondary hover:text-primary";
  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="rounded-md p-2 text-primary hover:bg-secondary">
            <Menu className="h-7 w-7" />
          </button>
          <Link to="/" className="font-display text-2xl font-bold text-primary md:text-3xl">Dermatology Clinic, P. A.</Link>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 flex" onClick={() => setOpen(false)}>
          <nav className="h-full w-72 bg-background p-6 shadow-relief animate-in slide-in-from-left" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="mb-6 p-2 text-primary"><X /></button>
            <ul className="space-y-1" onClick={() => setOpen(false)}>
              <li><Link to="/specialties" className={item}>Specialties</Link></li>
              <li><Link to="/locations" className={item}>Locations</Link></li>
              <li><a href="/patients" className={item}>Patients</a></li>
              <li><Link to="/faq" className={item}>FAQ</Link></li>
              <li><Link to="/about-us" className={item}>About Us</Link></li>
            </ul>
          </nav>
          <div className="flex-1 bg-foreground/40" />
        </div>
      )}
    </>
  );
}

export function GreenBanner({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex min-h-[284px] max-w-[958px] flex-col items-center justify-center gap-4 px-6 py-14 text-center">
        <h1 className="font-display text-4xl font-bold md:text-5xl">{title}</h1>
        {children}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-bold">The Dermatology Clinic, P.A.</h3>
          <ul className="mt-4 space-y-2 opacity-90">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/specialties/$slug" params={{ slug: "medical-dermatology" }}>Medical Dermatology</Link></li>
            <li><Link to="/specialties/$slug" params={{ slug: "cosmetic-dermatology" }}>Cosmetic Dermatology</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-wide">Locations</h4>
          <p className="mt-4 opacity-90">1410 N Woodlawn, Suite E<br />Derby, Kansas 67037</p>
          <a href="/locations" className="mt-2 inline-block font-semibold underline">Get Directions</a>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-wide">Hours</h4>
          <ul className="mt-4 space-y-1 text-sm opacity-90">
            <li>Monday – Friday: 8:00 AM – 5:00 PM</li><li>Saturday: Closed</li><li>Sunday: Closed</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-wide">Contact Us</h4>
          <p className="mt-4 opacity-90">(316) 247-6451<br />info@dermatologyclinic.com</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm opacity-90 md:flex-row md:justify-between">
          <nav className="flex flex-wrap gap-x-4 gap-y-1">
            {["Privacy Policy", "Do Not Share My Information", "Conditions of Use", "Notice and Take Down Policy", "Website Accessibility Policy"].map((t) => <a key={t} href="#" className="hover:underline">{t}</a>)}
          </nav>
          <p>© 2026 The content on this website is owned by us and our licensors. Do not copy any content (including images) without our consent.</p>
        </div>
      </div>
    </footer>
  );
}

// Mobile FAB Button - will be rendered in pages
export function MobileFAB() {
  return (
    <a 
      href="tel:+13162476451" 
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-relief transition hover:brightness-110 hover:-translate-y-0.5"
    >
      (316) 247-6451
    </a>
  );
}
