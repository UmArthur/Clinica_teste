import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteLayout";

export const Route = createFileRoute("/patients")({
  head: () => ({
    meta: [
      { title: "Patients | Dermatology Clinic, P. A." },
      { name: "description", content: "Patient portal and patient reviews." },
    ],
  }),
  component: Patients,
});

function Patients() {
  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="bg-[#359C76] text-primary-foreground">
        <div className="mx-auto max-w-[958px] px-6 py-16 text-center">
          <h1 className="font-display text-5xl font-bold md:text-6xl">Patients</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg">
            At Dermatology Clinic, P.A., our patients trust us with their skin health, and their satisfaction drives our commitment to excellence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 text-center">
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div className="elfsight-app-6f537400-6cc3-4dab-9db4-dd6f190e522c" data-elfsight-app-lazy></div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default Patients;
