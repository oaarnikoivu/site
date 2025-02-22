import { experienceItems } from "@/lib/data";
import { CommandGroup } from "../ui/command";
import ExperienceItem from "./experience-item";

export default function ExperienceGroup() {
  return (
    <CommandGroup heading="Experience">
      {experienceItems.map((item) => (
        <ExperienceItem
          key={item.company}
          icon={item.icon}
          company={item.company}
          title={item.title}
          date={item.date}
          linkTo={item.linkTo}
        />
      ))}
    </CommandGroup>
  );
}
