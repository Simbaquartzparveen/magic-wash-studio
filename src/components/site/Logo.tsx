import logoAsset from "@/assets/steam-clean-logo.png.asset.json";

export function Logo({ className }: { className?: string }) {
  return <img src={logoAsset.url} alt="Steam Clean" className={`object-contain ${className ?? ""}`} />;
}
