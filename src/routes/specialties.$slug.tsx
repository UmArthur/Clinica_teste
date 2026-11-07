import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, GreenBanner } from "@/components/SiteLayout";
import { specialties } from "@/lib/specialties";

export const Route = createFileRoute("/specialties/$slug")({
  loader: ({ params }) => {
    const s = specialties.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.name} | Dermatology Clinic, P. A.` : "Specialty | Dermatology Clinic, P. A.";
    const desc = loaderData?.description ?? "Dermatology specialty.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: SpecialtyPage,
});

function SpecialtyPage() {
  const s = Route.useLoaderData();
  return (
    <div className="font-sans">
      <SiteHeader />
      <GreenBanner title={s.name}>
        <p className="max-w-2xl text-lg opacity-95">{s.description}</p>
        <Link to="/find-a-doctor" search={{ specialty: s.slug }} className="mt-2 rounded-full bg-background px-7 py-3 font-semibold text-primary shadow-relief transition hover:-translate-y-0.5">
          Find a doctor
        </Link>
      </GreenBanner>
      <div className="py-10 text-center">
        <Link to="/specialties" className="font-semibold text-primary hover:underline">← All specialties</Link>
      </div>
      <SiteFooter />
    </div>
  );
}
