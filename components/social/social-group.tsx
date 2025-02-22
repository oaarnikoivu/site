import { socialItems } from "@/lib/data";
import { CommandGroup } from "../ui/command";
import SocialItem from "./social-item";

export default function SocialGroup() {
  return (
    <CommandGroup heading="Social">
      {socialItems.map((item) => (
        <SocialItem
          key={item.name}
          icon={item.icon}
          name={item.name}
          linkTo={item.linkTo}
        />
      ))}
    </CommandGroup>
  );
}
