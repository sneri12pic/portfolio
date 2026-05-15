import { skillGroups } from "@/data/skills";
import { TechTag } from "@/components/TechTag";

export function SkillsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <section
          key={group.title}
          className="rounded-2xl border border-petal bg-white/82 p-6 shadow-card"
        >
          <h3 className="font-display text-xl font-semibold text-charcoal">
            {group.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <TechTag key={skill} label={skill} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
