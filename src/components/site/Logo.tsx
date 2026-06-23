export function Logo({ className }: { className?: string }) {
  return <img src="/steam-clean-logo.png" alt="Steam Clean" className={`object-contain ${className ?? ""}`} />;
}
