export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl",
        "shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
        "transition duration-300 hover:-translate-y-1 hover:border-white/20",
        "hover:shadow-[0_26px_80px_rgba(0,0,0,0.65)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}