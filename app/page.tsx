import EducationGroup from "@/components/experience/education-group";
import ExperienceGroup from "@/components/experience/experience-group";
import SocialGroup from "@/components/social/social-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export default function Home() {
  return (
    <Card className="max-w-[800px] border-none bg-transparent">
      <CardHeader>
        <CardTitle>Oliver Aarnikoivu</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Software Engineer at Next Gate Tech. Based in Luxembourg. Focused on
          product development and design. My work combines web development,
          human-computer interaction, and artificial intelligence to build
          effective software solutions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Command
          className="bg-transparent focus:ring-0 focus:outline-0"
          defaultValue="-"
        >
          <CommandInput
            placeholder="Search..."
            autoFocus
            className="text-xs uppercase md:text-sm"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <ExperienceGroup />
            <CommandSeparator />
            <EducationGroup />
            <CommandSeparator />
            <SocialGroup />
          </CommandList>
        </Command>
      </CardContent>
    </Card>
  );
}
