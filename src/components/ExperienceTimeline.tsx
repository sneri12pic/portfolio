import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <div className="grid gap-5">
      {experience.map((item) => (
        <article
          key={`${item.company}-${item.role}`}
          className="rounded-2xl border border-petal bg-white/82 p-6 shadow-card"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold text-charcoal">
                {item.role}
              </h3>
              <p className="mt-1 font-semibold text-clay">{item.company}</p>
            </div>
            <p className="rounded-full bg-cream px-3 py-1 text-sm font-semibold text-warm-gray">
              {item.period}
            </p>
          </div>
          <p className="mt-4 text-sm leading-6 text-warm-gray">{item.description}</p>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-warm-gray">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-rose" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
