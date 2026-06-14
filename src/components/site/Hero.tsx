import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import { Scene3D } from "./Scene3D";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // mouse-tracking 3D tilt for the hero card
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 15 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 20);
    rotateX.set(-py * 20);
  };
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-gradient-hero pt-36 noise">
      {/* 3D WebGL scene background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <Scene3D />
      </div>

      {/* animated grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.82 0.18 210 / 0.18) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.18 210 / 0.18) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at center, black 25%, transparent 70%)",
        }}
      />

      {/* glow accents */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-aqua/10 blur-[120px]" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1.5 text-[11px] backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-aqua" />
              </span>
              <span className="font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Booking open · 60 min ETA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[3.25rem] font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[5.25rem]"
            >
              The detail
              <br />
              your car has been
              <br />
              <span className="italic text-gradient-aqua">waiting for.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-7 max-w-md text-[15px] leading-relaxed text-muted-foreground"
            >
              Touchless wash, ceramic coating, and concours-level interior detailing — performed
              by certified technicians, delivered at your doorstep.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#book"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[13px] font-semibold text-background transition-all hover:bg-aqua hover:text-primary-foreground hover:shadow-[0_0_40px_-5px_var(--aqua-glow)]"
              >
                Book a wash
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#packages"
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-6 py-3 text-[13px] font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/[0.06]"
              >
                View packages
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/[0.06] pt-6"
            >
              <div>
                <div className="font-display text-2xl font-medium tracking-tight">12K+</div>
                <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Cars detailed</div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-display text-2xl font-medium tracking-tight">4.9</span>
                  <Star className="h-3.5 w-3.5 fill-aqua text-aqua" />
                </div>
                <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Avg rating</div>
              </div>
              <div>
                <div className="font-display text-2xl font-medium tracking-tight">45<span className="text-muted-foreground text-base">min</span></div>
                <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Turnaround</div>
              </div>
            </motion.div>

          </div>

          {/* 3D Hero image with mouse-tilt */}
          <motion.div
            style={{ y, scale }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="perspective-1000 relative"
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="animate-float-3d relative"
            >
              <div className="absolute -inset-6 rounded-3xl bg-gradient-aqua opacity-30 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border glass-card">
                <img
                  src={heroCar}
                  alt="Luxury car being washed with cinematic blue lighting"
                  width={1600}
                  height={1100}
                  className="h-full w-full object-cover"
                />
                {/* shine sweep */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="animate-drift absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </div>

              {/* floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="glass-card absolute -left-4 top-10 rounded-2xl p-4 shadow-card"
              >
                <p className="text-xs text-muted-foreground">Eco wash</p>
                <p className="text-lg font-bold">2L water only</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="glass-card absolute -right-4 bottom-10 rounded-2xl p-4 shadow-card"
              >
                <p className="text-xs text-muted-foreground">Avg time</p>
                <p className="text-lg font-bold text-gradient-aqua">45 min</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
