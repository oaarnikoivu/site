import GitHubLogo from "@/components/github-logo";
import NGTLogo from "@/components/ngt-logo";
import SoundCloudIcon from "@/components/soundcloud-icon";
import TwitterLogo from "@/components/twitter-logo";
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
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Image from "next/image";

function ExperienceItem({
  icon,
  company,
  title,
  date,
}: {
  icon: React.ReactNode;
  company: string;
  title: string;
  date: string;
}) {
  const searchValue = company + " " + title;

  return (
    <CommandItem
      value={searchValue}
      className="justify-between transition-colors"
    >
      <div className="flex items-center gap-2">
        {icon}
        <div className="flex flex-col gap-1">
          <div className="text-muted-foreground text-xs">{company}</div>
          <span className="font-medium">{title}</span>
        </div>
      </div>
      <span className="text-muted-foreground text-xs">{date}</span>
    </CommandItem>
  );
}

function SocialItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <CommandItem value={name}>
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-medium">{name}</span>
      </div>
    </CommandItem>
  );
}

export default function Home() {
  return (
    <Card className="max-w-[800px] bg-transparent border-none">
      <CardHeader>
        <CardTitle>Oliver Aarnikoivu</CardTitle>
        <CardDescription className="text-justify">
          I'm a Software Engineer at Next Gate Tech in Luxembourg, with a strong
          focus on product design. My interests lie in web development,
          human-computer interaction, and artificial intelligence.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Command className="bg-transparent focus:ring-0 focus:outline-0">
          <CommandInput placeholder="Search..." autoFocus />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Experience">
              <ExperienceItem
                icon={<NGTLogo className="size-5 grayscale invert" />}
                company="Next Gate Tech"
                title="Software Engineer"
                date="Jun 2022 - Present"
              />
              <ExperienceItem
                icon={
                  <Image
                    src="https://media.licdn.com/dms/image/v2/C4D0BAQHorNmdgYsSVg/company-logo_200_200/company-logo_200_200/0/1630576624609/motions_logo?e=2147483647&v=beta&t=IgtBv6NsMijuWDaunE-maumaAWprUdhcKeTFhQLpEvk"
                    alt="Motion-S"
                    width={20}
                    height={20}
                    className="grayscale invert"
                  />
                }
                company="Motion-S"
                title="Data Scientist"
                date="Oct 2021 - Jul 2022"
              />
              <ExperienceItem
                icon={
                  <Image
                    src="https://www.siliconluxembourg.lu/wp-content/uploads/2020/01/Talkwalker-Logo_Cloud_Blue-300x224.png"
                    alt="Talkwalker"
                    width={20}
                    height={20}
                    className="grayscale invert"
                  />
                }
                company="Talkwalker (Hootsuite)"
                title="Software Engineer Intern"
                date="May 2019 - Sep 2019"
              />
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Education">
              <ExperienceItem
                icon={
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCAE0c_7W4J6GlVqUZmRY6-mMs46mhrD4qg&s"
                    alt="University of Edinburgh"
                    width={20}
                    height={20}
                    className="grayscale invert"
                  />
                }
                company="University of Edinburgh"
                title="MSc Artificial Intelligence"
                date="Sep 2020 - Sep 2021"
              />
              <ExperienceItem
                icon={
                  <Image
                    src="https://cdn.movember.com/uploads/network-profile/e3be00bfb29ff971744f43021ef9aab7-5fa9287cc6351-hero.jpg"
                    alt="Robert Gordon University"
                    width={20}
                    height={20}
                    className="grayscale invert"
                  />
                }
                company="Robert Gordon University"
                title="BSc Computer Science"
                date="Sep 2016 - Sep 2020"
              />
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Social">
              <SocialItem
                icon={<GitHubLogo className="size-5" />}
                name="GitHub"
              />
              <SocialItem
                icon={<TwitterLogo className="size-5" />}
                name="Twitter"
              />
              <SocialItem
                icon={<SoundCloudIcon className="size-5" />}
                name="SoundCloud"
              />
            </CommandGroup>
          </CommandList>
        </Command>
      </CardContent>
    </Card>
  );
}
