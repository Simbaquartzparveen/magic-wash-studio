import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=24+Customs+Street+West,Auckland+CBD+1010,NZ&t=&z=15&ie=UTF8&iwloc=&output=embed";
const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=24+Customs+Street+West,Auckland+CBD+1010,NZ";

const contactCards = [
  {
    icon: MapPin,
    label: "Address",
    value: "24 Customs Street West",
    sub: "Auckland CBD 1010",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+64 21 234 5678",
    href: "tel:+64212345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hi@aquadrive.co.nz",
    href: "mailto:hi@aquadrive.co.nz",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat: 7am – 7pm",
    sub: "Sun: 9am – 4pm",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 section-border">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="font-display text-4xl font-black sm:text-5xl">
            Find us in <span className="text-gradient-aqua">Auckland</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Drop by our studio or book a mobile visit — we cover Auckland, Wellington & Christchurch.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card overflow-hidden rounded-3xl lg:col-span-3"
          >
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <iframe
                title="AquaDrive Auckland Location"
                src={MAPS_EMBED_URL}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              const Wrapper = card.href ? motion.a : motion.div;
              return (
                <Wrapper
                  key={card.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                  href={card.href}
                  className="glass-card flex items-start gap-4 rounded-2xl p-5 transition-colors hover:bg-secondary/30"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-aqua">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {card.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {card.value}
                    </p>
                    {card.sub && (
                      <p className="text-xs text-muted-foreground">{card.sub}</p>
                    )}
                  </div>
                </Wrapper>
              );
            })}

            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-aqua px-6 py-3 text-sm font-semibold text-primary-foreground glow-aqua transition-transform hover:scale-[1.03]"
            >
              <Navigation className="h-4 w-4" />
              Get directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
