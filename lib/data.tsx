import GitHubLogo from "@/components/icons/github-logo";
import LinkedInLogo from "@/components/icons/linkedin-logo";
import NGTLogo from "@/components/icons/ngt-logo";
import SoundCloudIcon from "@/components/icons/soundcloud-icon";
import TwitterLogo from "@/components/icons/twitter-logo";
import Image from "next/image";
import { Experience, Social } from "./types";

export const experienceItems: Experience[] = [
  {
    icon: <NGTLogo className="size-5" />,
    company: "Next Gate Tech",
    title: "Software Engineer",
    date: "Jul 2022 - Present",
    linkTo: "https://www.nextgatetech.com",
  },
  {
    icon: (
      <Image
        src="https://media.licdn.com/dms/image/v2/C4D0BAQHorNmdgYsSVg/company-logo_200_200/company-logo_200_200/0/1630576624609/motions_logo?e=2147483647&v=beta&t=IgtBv6NsMijuWDaunE-maumaAWprUdhcKeTFhQLpEvk"
        alt="Motion-S"
        width={20}
        height={20}
        className="rounded-full"
      />
    ),
    company: "Motion-S",
    title: "Data Scientist",
    date: "Oct 2021 - Jul 2022",
    linkTo: "https://www.linkedin.com/company/motion%C2%B7s",
  },
  {
    icon: (
      <Image
        src="https://www.siliconluxembourg.lu/wp-content/uploads/2020/01/Talkwalker-Logo_Cloud_Blue-300x224.png"
        alt="Talkwalker"
        width={20}
        height={20}
        className="rounded-full"
      />
    ),
    company: "Talkwalker (Hootsuite)",
    title: "Software Engineer Intern",
    date: "May 2019 - Sep 2019",
    linkTo: "https://www.talkwalker.com/",
  },
];

export const educationItems: Experience[] = [
  {
    icon: (
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCAE0c_7W4J6GlVqUZmRY6-mMs46mhrD4qg&s"
        alt="University of Edinburgh"
        width={20}
        height={20}
        className="rounded-full"
      />
    ),
    company: "University of Edinburgh",
    title: "MSc Artificial Intelligence",
    date: "Sep 2020 - Sep 2021",
    linkTo: "https://postgraduate.degrees.ed.ac.uk/?id=107&r=site/view",
  },
  {
    icon: (
      <Image
        src="https://cdn.movember.com/uploads/network-profile/e3be00bfb29ff971744f43021ef9aab7-5fa9287cc6351-hero.jpg"
        alt="Robert Gordon University"
        width={20}
        height={20}
        className="rounded-full"
      />
    ),
    company: "Robert Gordon University",
    title: "BSc Computer Science",
    date: "Sep 2016 - Sep 2020",
    linkTo: "https://www.rgu.ac.uk/study/courses/446-bsc-hons-computer-science",
  },
];

export const socialItems: Social[] = [
  {
    icon: <GitHubLogo className="size-4.5" />,
    name: "GitHub",
    linkTo: "https://www.github.com/oaarnikoivu",
  },
  {
    icon: <TwitterLogo className="size-4.5" />,
    name: "Twitter",
    linkTo: "https://x.com/aarn_io",
  },
  {
    icon: <LinkedInLogo className="size-4.5" />,
    name: "LinkedIn",
    linkTo: "https://www.linkedin.com/in/oaarnikoivu/",
  },
  {
    icon: <SoundCloudIcon className="size-4.5" />,
    name: "SoundCloud",
    linkTo: "https://www.soundcloud.com/oliverantonmusic",
  },
];
