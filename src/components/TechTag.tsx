export function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full border border-petal bg-cream px-3 py-1 text-xs font-semibold text-clay">
      {label}
    </span>
  );
}
