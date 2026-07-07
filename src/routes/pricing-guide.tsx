import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const FACTORS = [
  { title: "Vehicle size", body: "Hatchbacks and sedans price lower than SUVs, utes and 7-seaters — more panels, more glass, more interior surface to clean." },
  { title: "Condition", body: "Heavily soiled paint, pet hair, mould or spilled coffee needs extra hours. Expect a 20–40% add-on for cars that haven't been detailed in 12+ months." },
  { title: "Service level", body: "An express wash is a quick refresh. Paint correction and ceramic coating are multi-hour, multi-day jobs with premium consumables." },
  { title: "Location", body: "Doorstep mobile service is included across Auckland, Wellington and Christchurch. Rural or remote addresses may carry a small travel fee." },
  { title: "Add-ons", body: "Leather conditioning, engine bay steam, headlight restoration and pet-hair removal are priced per vehicle after a quick photo quote." },
];

const PACKAGES = [
  {
    name: "Express Wash",
    price: "NZ$39",
    time: "~15 min",
    ideal: "Weekly maintenance wash",
    includes: ["pH-neutral foam bath", "Wheels & tyres", "Windows in & out", "Quick interior vacuum"],
  },
  {
    name: "Premium Detail",
    price: "NZ$99",
    time: "~45 min",
    ideal: "Monthly deep clean",
    includes: ["Everything in Express", "Two-bucket hand wash", "Interior wipe-down & dashboard dressing", "Tyre shine & sealant spray"],
  },
  {
    name: "Showroom Detail",
    price: "NZ$249+",
    time: "3–5 hrs",
    ideal: "Pre-sale or annual reset",
    includes: ["Clay bar decontamination", "Machine polish / paint correction", "Full interior shampoo & steam", "Optional 9H ceramic coating add-on"],
  },
];

export const Route = createFileRoute("/pricing-guide")({
  head: () => ({
    meta: [
      { title: "Car Detailing Cost NZ — Steam Clean Pricing Guide" },
      { name: "description", content: "How much does car detailing cost in New Zealand? Full price guide for mobile car wash, interior detailing and ceramic coating from Steam Clean — Auckland, Wellington & Christchurch." },
      { property: "og:title", content: "Car Detailing Cost NZ — Steam Clean Pricing Guide" },
      { property: "og:description", content: "Transparent pricing for mobile car wash, detailing and ceramic coating in NZ. What each package includes and what drives the cost." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://car-washnz.lovable.app/pricing-guide" },
    ],
    links: [{ rel: "canonical", href: "https://car-washnz.lovable.app/pricing-guide" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Car Detailing Cost NZ — Steam Clean Pricing Guide",
          about: "Mobile car wash and detailing pricing in New Zealand",
          author: { "@type": "Organization", name: "Steam Clean" },
        }),
      },
    ],
  }),
  component: PricingGuide,
});

function PricingGuide() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      <section className="relative pt-40 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold"
          >
            Pricing Guide · New Zealand
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-4xl font-black leading-tight md:text-6xl"
          >
            How much does car detailing cost in NZ?
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A transparent breakdown of what mobile car wash and detailing actually costs in
            Auckland, Wellington and Christchurch — and what you get inside each Steam Clean
            package.
          </p>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold">Package pricing at a glance</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((p) => (
              <div key={p.name} className="glass-card rounded-2xl p-6">
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-3xl font-black text-gradient-aqua">{p.price}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {p.time} · {p.ideal}
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.includes.map((i) => (
                    <li key={i} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl font-bold">What drives the price</h2>
          <p className="mt-3 text-muted-foreground">
            Five factors decide the final quote for any car detailing job.
          </p>
          <div className="mt-8 space-y-6">
            {FACTORS.map((f, i) => (
              <div key={f.title} className="glass-card rounded-2xl p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-gold">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl font-bold">Ceramic coating — is it worth it?</h2>
          <p className="mt-4 text-muted-foreground">
            A 9H ceramic coating from Steam Clean starts at <strong>NZ$599</strong> for a sedan and
            includes machine polish, decontamination and a 2-year written warranty. It repels water,
            resists UV fade and cuts your wash time in half — most owners recover the cost in
            saved washes and higher resale value within 18 months.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold">Get an exact quote in 60 seconds</h2>
          <p className="mt-3 text-muted-foreground">
            Tell us your car and postcode — we'll confirm pricing and a doorstep slot the same day.
          </p>
          <a
            href="/#book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-aqua px-7 py-3.5 font-semibold text-primary-foreground glow-aqua transition-transform hover:scale-[1.02]"
          >
            Book your wash <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
