export function SectionEyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-700 ${className}`}
    >
      {children}
    </span>
  );
}
