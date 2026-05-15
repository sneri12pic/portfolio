export function AvailabilityCard() {
  return (
    <aside className="rounded-2xl border border-petal bg-white/82 p-5 shadow-card">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose">
        Availability
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-charcoal">
        Based in Edinburgh, open to UK roles
      </h2>
      {/* TODO: Verify right-to-work wording before publishing. */}
      <p className="mt-3 text-sm leading-6 text-warm-gray">
        Available for graduate and junior software engineering roles across the UK.
        Right-to-work details are available on request and summarised in my CV.
      </p>
    </aside>
  );
}
