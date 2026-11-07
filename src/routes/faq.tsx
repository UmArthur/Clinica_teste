import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteLayout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Dermatology Clinic, P. A." },
      { name: "description", content: "Frequently asked questions about our dermatology clinic services." },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="bg-[#359C76] text-primary-foreground">
        <div className="mx-auto max-w-[958px] px-6 py-16 text-center">
          <h1 className="font-display text-5xl font-bold md:text-6xl">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-4">
          <div className="rounded-2xl bg-background p-6 shadow-relief cursor-pointer" onClick={() => {
            const element = document.querySelector('.answer-1');
            element.classList.toggle('hidden');
          }}>
            <h2 className="font-display text-xl font-bold text-primary mb-2">1. How do I schedule an appointment at your dermatology clinic?</h2>
            <div className="answer-1 hidden text-muted-foreground leading-relaxed">
              Book by phone, online through our contact form, or walk in during office hours. New patients are always welcome.
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 shadow-relief cursor-pointer" onClick={() => {
            const element = document.querySelector('.answer-2');
            element.classList.toggle('hidden');
          }}>
            <h2 className="font-display text-xl font-bold text-primary mb-2">2. What should I bring to my first dermatology visit?</h2>
            <div className="answer-2 hidden text-muted-foreground leading-relaxed">
              Bring a photo ID, insurance card, a list of current medications, and any previous skin biopsy or pathology reports.
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 shadow-relief cursor-pointer" onClick={() => {
            const element = document.querySelector('.answer-3');
            element.classList.toggle('hidden');
          }}>
            <h2 className="font-display text-xl font-bold text-primary mb-2">3. Do you accept my insurance?</h2>
            <div className="answer-3 hidden text-muted-foreground leading-relaxed">
              We accept Medicare and most major insurance plans and file your claims. Co-pays are due at the visit. Questions? Our Billing Department can help.
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 shadow-relief cursor-pointer" onClick={() => {
            const element = document.querySelector('.answer-4');
            element.classList.toggle('hidden');
          }}>
            <h2 className="font-display text-xl font-bold text-primary mb-2">4. How often should I get a skin cancer screening?</h2>
            <div className="answer-4 hidden text-muted-foreground leading-relaxed">
              Most adults should get a full-body skin exam once a year. Visit more often if you have a history of skin cancer or many moles.
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 shadow-relief cursor-pointer" onClick={() => {
            const element = document.querySelector('.answer-5');
            element.classList.toggle('hidden');
          }}>
            <h2 className="font-display text-xl font-bold text-primary mb-2">5. How do I know if a mole is dangerous?</h2>
            <div className="answer-5 hidden text-muted-foreground leading-relaxed">
              Use the ABCDE rule: Asymmetry, Border irregularity, Color changes, Diameter over 6 mm, and Evolving shape. Book an exam if you notice any of these.
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 shadow-relief cursor-pointer" onClick={() => {
            const element = document.querySelector('.answer-6');
            element.classList.toggle('hidden');
          }}>
            <h2 className="font-display text-xl font-bold text-primary mb-2">6. How can I protect my skin from Kansas sun and weather?</h2>
            <div className="answer-6 hidden text-muted-foreground leading-relaxed">
              Use SPF 30+ broad-spectrum sunscreen daily, reapply every two hours outdoors, and moisturize in dry, windy Kansas winters.
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 shadow-relief cursor-pointer" onClick={() => {
            const element = document.querySelector('.answer-7');
            element.classList.toggle('hidden');
          }}>
            <h2 className="font-display text-xl font-bold text-primary mb-2">7. What treatments do you offer for acne?</h2>
            <div className="answer-7 hidden text-muted-foreground leading-relaxed">
              We offer prescription creams, oral medications, chemical peels, and in-office treatments for teens and adults to clear skin and reduce scarring.
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 shadow-relief cursor-pointer" onClick={() => {
            const element = document.querySelector('.answer-8');
            element.classList.toggle('hidden');
          }}>
            <h2 className="font-display text-xl font-bold text-primary mb-2">8. What is Mohs surgery, and do you offer it?</h2>
            <div className="answer-8 hidden text-muted-foreground leading-relaxed">
              Mohs surgery removes skin cancer layer by layer, sparing healthy tissue, with very high cure rates. Ask us if it is right for you.
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 shadow-relief cursor-pointer" onClick={() => {
            const element = document.querySelector('.answer-9');
            element.classList.toggle('hidden');
          }}>
            <h2 className="font-display text-xl font-bold text-primary mb-2">9. Do you treat eczema, psoriasis, and rosacea?</h2>
            <div className="answer-9 hidden text-muted-foreground leading-relaxed">
              Yes. We create customized treatment plans for eczema, psoriasis, and rosacea, including topical therapies, light therapy, and advanced medications.
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 shadow-relief cursor-pointer" onClick={() => {
            const element = document.querySelector('.answer-10');
            element.classList.toggle('hidden');
          }}>
            <h2 className="font-display text-xl font-bold text-primary mb-2">10. What should I do after a skin biopsy or minor skin surgery?</h2>
            <div className="answer-10 hidden text-muted-foreground leading-relaxed">
              Keep the area clean and covered, avoid heavy exercise and soaking in water for a few days, and call us if you see redness, swelling, or discharge.
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 shadow-relief cursor-pointer" onClick={() => {
            const element = document.querySelector('.answer-11');
            element.classList.toggle('hidden');
          }}>
            <h2 className="font-display text-xl font-bold text-primary mb-2">11. What payment methods do you accept?</h2>
            <div className="answer-11 hidden text-muted-foreground leading-relaxed">
              We accept MasterCard, VISA, American Express, Discover, personal checks, and cash. Co-pays and cosmetic procedures are due at the time of service.
            </div>
          </div>

          <div className="rounded-2xl bg-background p-6 shadow-relief cursor-pointer" onClick={() => {
            const element = document.querySelector('.answer-12');
            element.classList.toggle('hidden');
          }}>
            <h2 className="font-display text-xl font-bold text-primary mb-2">12. Do I need a referral to see a dermatologist?</h2>
            <div className="answer-12 hidden text-muted-foreground leading-relaxed">
              It depends on your plan. Some insurers require a referral, and it is the patient's responsibility to get one. Check with your insurer before booking.
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default FAQ;