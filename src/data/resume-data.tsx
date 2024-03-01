import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "CHIH-YUAN CHAO(Jeff)",
  initials: "Jeff",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/%E5%8F%B0%E5%8C%97%E5%B8%82",
  about:
    "Focused on creating user-friendly development and products, building teams based on mutual trust. Proficient in React.js and Next.js.",
  summary: "",
  personalWebsiteUrl: "https://github.com/oneraner",
  contact: {
    email: "oneraner@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/oneraner",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jeffchao0823/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Fo Guang University",
      degree: "Master of Arts in Economics",
      start: "2011/9",
      end: "2012/6",
    },
  ],
  work: [
    {
      company: "Shoalter Technology Ltd ",
      link: "https://www.shoalter.com/",
      badges: [""],
      title: "Senior Programmer",
      logo: "",
      start: "2023/10",
      end: "now",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="list-disc">
            Led a team of four to successfully complete a webview integration
            with a third-party app under tight deadlines.
          </li>
          <li className="list-disc">
            Establishing and maintaining project tests.Assisting team members in
            clarifying requirements and issue resolution.
          </li>
        </ul>
      ),
    },
    {
      company: "Shoalter Technology Ltd ",
      link: "https://www.shoalter.com/",
      badges: [""],
      title: "Programmer II",
      logo: "",
      start: "2021/8",
      end: "2023/9",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="list-disc">
            Implemented a shared component architecture in Turborepo, rewrote
            the profile form and SMS features, reducing the loading time of the
            profile form at least three seconds.
          </li>
          <li className="list-disc">
            Led the chat room project, integrating WebSocket and collaborating
            with 3 team members to develop it to the production environment.
          </li>
          <li className="list-disc">
            Implemented React Testing Library for unit testing, increasing
            coverage from 0% to 45% and ongoing improvement.
          </li>
          <li className="list-disc">
            Optimized website performance, reducing CPU load peaks by 50% and
            significantly improving delays of several seconds.
          </li>
          <li className="list-disc">
            Mentored multiple team members, assisting in code reviews and
            integration into team workflow.
          </li>
          <li className="list-disc">
            Technical sharing on topics such as Drag and Drop, Unit-testing, and
            more.
          </li>
        </ul>
      ),
    },
    {
      company: "CloudWare Technology Ltd",
      link: "",
      badges: [],
      title: "React Developer",
      logo: "",
      start: "2020/12",
      end: "2021/7",
      description: (
        <ul className="flex flex-col gap-2">
          <li className="list-disc">
            Optimized to resolve blocking issues due to excessive API requests.
          </li>
          <li className="list-disc">Integrated Google reCAPTCHA Enterprise.</li>
        </ul>
      ),
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Zustand",
    "Redux",
    "RESTful API",
    "GraphQL",
    "TailwindCSS",
    "Jest",
    "Testing-library",
    "Cypress",
  ],
  projects: [
    {
      title: "Blog",
      techStack: ["Next.js", "MDX", "TailwindCSS"],
      description: "A blog to record learning experiences and various sharing.",
      logo: "",
      link: {
        label: "blog",
        href: "https://blog-oneraner.vercel.app/",
      },
    },
    {
      title: "Chat",
      techStack: ["TypeScript", "TailwindCSS", "Recoil"],
      description: "It uses WebSockets to implement a chat room project.",
      logo: "",
      link: {
        label: "chat",
        href: "https://metawall-dusky.vercel.app/",
      },
    },
    {
      title: "Short",
      techStack: ["Vite", "React", "GSAP"],
      description:
        "This is try Drag & Drop and Short project, only android & mobile web.",
      logo: "",
      link: {
        label: "short",
        href: "https://short-dun.vercel.app/",
      },
    },
  ],
} as const;
