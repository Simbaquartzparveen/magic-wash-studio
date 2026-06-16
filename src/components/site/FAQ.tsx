import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How long does a wash take?", a: "Express takes ~15 minutes. Premium ~45 minutes. Full Showroom detailing can take 3-5 hours depending on your car's condition." },
  { q: "Do you really come to my home?", a: "Yes — we bring water, power and all equipment in our mobile unit. We service homes, offices, malls and parking lots." },
  { q: "Is it safe for my paint?", a: "We use pH-neutral foam, microfiber mitts and grit guards. Our trained detailers follow the 2-bucket method to prevent swirls." },
  { q: "How long does ceramic coating last?", a: "Our 9H ceramic coating lasts 2 years with a maintenance wash every 3 months. We offer a written warranty." },
  { q: "What about water usage?", a: "We use less than 2 litres per wash with our steam + foam system — that's 100x less than a traditional wash." },
  { q: "Can I cancel?", a: "Yes, free cancellation up to 2 hours before your slot. After that we charge a small visit fee." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-aqua">FAQ</p>
          <h2 className="text-4xl font-black sm:text-5xl">
            Things you might <span className="text-gradient-aqua">be wondering</span>
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <motion.button
              key={f.q}
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card flex w-full flex-col rounded-2xl p-6 text-left transition-colors hover:bg-secondary/30"
            >
              <div className="flex w-full items-center justify-between gap-4">
                <span className="font-semibold">{f.q}</span>
                <Plus className={`h-5 w-5 shrink-0 text-aqua transition-transform ${open === i ? "rotate-45" : ""}`} />
              </div>
              {open === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 text-sm text-muted-foreground"
                >
                  {f.a}
                </motion.p>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
