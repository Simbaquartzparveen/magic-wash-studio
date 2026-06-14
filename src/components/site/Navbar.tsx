import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Droplets, Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
  { href: "#book", label: "Book" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top announcement strip */}
      <div className="fixed inset-x-0 top-0 z-[60] border-b border-white/[0.04] bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-1.5 text-[11px]">
          <p className="font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <span className="text-aqua">●</span> Now serving Mumbai · Pune · Bangalore
          </p>
          <a
            href="tel:+918000000000"
            className="hidden items-center gap-1.5 font-mono uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            <Phone className="h-3 w-3" /> +91 80000 00000
          </a>
        </div>
      </div>

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-7 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-white/[0.05] bg-background/70 backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <a href="#" className="group flex items-center gap-2.5">
            <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-aqua">
              <Droplets className="h-4 w-4 text-primary-foreground" />
              <div className="absolute inset-0 rounded-xl bg-gradient-aqua opacity-50 blur-md transition-opacity group-hover:opacity-80" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[1.05rem] font-semibold tracking-tight">
                Aqua<span className="text-aqua">drive</span>
              </span>
              <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                Premium Detail Co.
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-secondary/30 p-1 backdrop-blur md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-1.5 text-[13px] font-medium text-muted-foreground transition-all hover:bg-white/[0.04] hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#book"
            className="group hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[13px] font-semibold text-background transition-all hover:bg-aqua hover:text-primary-foreground md:inline-flex"
          >
            Book Now
            <span className="grid h-5 w-5 place-items-center rounded-full bg-background/15 transition-transform group-hover:translate-x-0.5">→</span>
          </a>

          <button
            className="rounded-lg p-2 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="glass-card border-t md:hidden">
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-aqua px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </motion.header>
    </>
  );
}
