type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-rose">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-7 text-warm-gray sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}
