import ExperienceItem from "@/components/experience-item";
import GitHubLogo from "@/components/github-logo";
import LinkedInLogo from "@/components/linkedin-logo";
import NGTLogo from "@/components/ngt-logo";
import SocialItem from "@/components/social-item";
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
          defaultValue={"-"}
        >
          <CommandInput
            placeholder="Search..."
            autoFocus
            className="text-xs md:text-sm"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Experience">
              <ExperienceItem
                icon={<NGTLogo className="size-5" />}
                company="Next Gate Tech"
                title="Software Engineer"
                date="Jul 2022 - Present"
                linkTo="https://www.nextgatetech.com"
              />
              <ExperienceItem
                icon={
                  <Image
                    src="https://media.licdn.com/dms/image/v2/C4D0BAQHorNmdgYsSVg/company-logo_200_200/company-logo_200_200/0/1630576624609/motions_logo?e=2147483647&v=beta&t=IgtBv6NsMijuWDaunE-maumaAWprUdhcKeTFhQLpEvk"
                    alt="Motion-S"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                }
                company="Motion-S"
                title="Data Scientist"
                date="Oct 2021 - Jul 2022"
                linkTo="https://www.linkedin.com/company/motion%C2%B7s"
              />
              <ExperienceItem
                icon={
                  <Image
                    src="https://www.siliconluxembourg.lu/wp-content/uploads/2020/01/Talkwalker-Logo_Cloud_Blue-300x224.png"
                    alt="Talkwalker"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                }
                company="Talkwalker (Hootsuite)"
                title="Software Engineer Intern"
                date="May 2019 - Sep 2019"
                linkTo="https://www.talkwalker.com/"
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
                    className="rounded-full"
                  />
                }
                company="University of Edinburgh"
                title="MSc Artificial Intelligence"
                date="Sep 2020 - Sep 2021"
                linkTo="https://postgraduate.degrees.ed.ac.uk/?id=107&r=site/view"
              />
              <ExperienceItem
                icon={
                  <Image
                    src="https://cdn.movember.com/uploads/network-profile/e3be00bfb29ff971744f43021ef9aab7-5fa9287cc6351-hero.jpg"
                    alt="Robert Gordon University"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                }
                company="Robert Gordon University"
                title="BSc Computer Science"
                date="Sep 2016 - Sep 2020"
                linkTo="https://www.rgu.ac.uk/study/courses/446-bsc-hons-computer-science"
              />
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Social">
              <SocialItem
                icon={<GitHubLogo className="size-4.5" />}
                name="GitHub"
                linkTo="https://www.github.com/oaarnikoivu"
              />
              <SocialItem
                icon={<TwitterLogo className="size-4.5" />}
                name="Twitter"
                linkTo="https://x.com/aarn_io"
              />
              <SocialItem
                icon={<LinkedInLogo className="size-4.5" />}
                name="LinkedIn"
                linkTo="https://www.linkedin.com/in/oaarnikoivu/"
              />
              <SocialItem
                icon={<SoundCloudIcon className="size-4.5" />}
                name="SoundCloud"
                linkTo="https://www.soundcloud.com/oliverantonmusic"
              />
            </CommandGroup>
          </CommandList>
        </Command>
      </CardContent>
    </Card>
  );
}
