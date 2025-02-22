import { educationItems } from "@/lib/data";
import { CommandGroup } from "../ui/command";
import ExperienceItem from "./experience-item";

export default function EducationGroup() {
  return (
    <CommandGroup heading="Education">
      {educationItems.map((item) => (
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
