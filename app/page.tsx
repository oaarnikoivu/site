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
import Image from "next/image";

export default function Home() {
  return (
    <Card className="max-w-[800px] bg-transparent border-none">
      <CardHeader>
        <CardTitle>
          <Image
            src="https://avatars.githubusercontent.com/u/22493428?v=4"
            alt="profile"
            width={100}
            height={100}
            className="mb-2 grayscale invert contrast-200 -ml-6"
          />
          Oliver Aarnikoivu
        </CardTitle>
        <CardDescription className="text-xs md:text-sm">
          I&apos;m a Software Engineer at Next Gate Tech in Luxembourg, focusing
          on product development and design. My work combines web development,
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
            className="text-xs md:text-sm"
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
