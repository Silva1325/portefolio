import { withBasePath } from "@/lib/basePath";

export const profile = {
  firstName: "Miguel",
  lastName: "Silva",
  role: "Software Engineer",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/miguel-silva-068974186/" },
  { label: "Github", href: "https://github.com/silva1325" },
];

export const contactLinks = [
  { label: "Mail", href: "mailto:miguelsilva2001511@gmail.com" },
  { label: "Phone", href: "tel:+351911037312" },
];

export const info = {
  lead: "I'm a software engineer living in Porto.",
  paragraphs: [
    "My background is in computer engineering, driven by the thrill of writing code on a computer and immediately holding it in my hand to use in daily life. That spark led me to build scalable cross-platform mobile apps, explore machine learning model development, and dive into data systems.",
    "I'm currently sharpening my focus toward cybersecurity, taking my experience with mobile ecosystems and machine learning to build more resilient digital products. Whether designing intuitive scrolling interfaces or securing the architecture behind them, I bring the same care to how software feels, performs, and stays protected.",
  ],
};

export type CVEntry = {
  title: string;
  subtitle: string;
  date: string;
};

export const education: CVEntry[] = [
  {
    title: "ISEP — Instituto Superior de Engenharia do Porto",
    subtitle: "Postgraduate Program in Information Security, Cybersecurity and Privacy",
    date: "2026 – Present",
  },
  {
    title: "ESTG — Politécnico do Porto",
    subtitle: "Computer Engineering and Computer Science",
    date: "2019 – 2023",
  },
];

export const employment: CVEntry[] = [
  {
    title: "m.Doc GmbH",
    subtitle: "Flutter Developer",
    date: "Oct 2023 – Present",
  },
  {
    title: "CGI",
    subtitle: "Mobile Developer",
    date: "Jul 2022 – Sep 2023",
  },
  {
    title: "CGI",
    subtitle: "Software Engineering Intern",
    date: "Apr 2022 – Jul 2022",
  },
];

export const project = {
  title: "Scheduling Platform",
  subtitle: "Building appointment booking experience for Golpe de Estado.",
  description: [
    "Golpe de Estado is a barbershop client running on a white-label Flutter application I built for appointment booking and worker schedule management, backed by Supabase with OneSignal handling push notifications.",
    "As the developer, I built the app so it could support multiple branded deployments from a single codebase. Each client gets their own logo and color scheme without a separate build.",
    "Reach out for additional details.",
  ],
  meta: [
    { label: "Role", values: ["Product Designer", "Full-Stack Developer"] },
    { label: "Platform", values: ["Android", "iOS"] },
    { label: "Tech Stack", values: ["Flutter", "Supabase", "OneSignal"] },
    { label: "Client", values: ["Golpe de Estado"] },
  ],
};

export type ProcessStep = {
  title: string;
  subtitle: string;
  body: string;
};

export const processOfDevelopment: ProcessStep[] = [
  {
    title: "Research",
    subtitle: "Understanding how the shop actually worked",
    body: "Started by mapping Golpe de Estado's real booking and scheduling workflow, so the app matched how the shop actually worked instead of a generic template.",
  },
  {
    title: "System Design",
    subtitle: "A schema and architecture built for growth",
    body: "Modeled appointments, shops, and staff schedules in a normalized Postgres schema on Supabase, and structured the app around a single white-label Flutter codebase so each client gets their own branding without a separate build.",
  },
  {
    title: "Implementation",
    subtitle: "From wireframes to a working app",
    body: "Built out every screen from the Figma designs in Flutter, wiring up Supabase for data and OneSignal for push notifications, keeping design and development in sync throughout.",
  },
  {
    title: "Testing",
    subtitle: "Caught regressions before they shipped",
    body: "Covered the app with manual, unit, and integration tests, so changes could be shipped with confidence.",
  },
  {
    title: "Deployment",
    subtitle: "Shipped to real shops, not a demo",
    body: "Rolled the app out to Golpe de Estado's staff and clients, configuring each white-label build and publishing releases through the app stores.",
  },
  {
    title: "Maintenance",
    subtitle: "Keeping it running as the shop grows",
    body: "Monitoring crash reports and Supabase usage, shipping fixes and small improvements as new needs come in from the shop.",
  },
];

export const projectHighlights = {
  mobile: {
    caption:
      "Clients can browse nearby shops, view professionals, and book appointments in just a few taps. Every screen was designed mobile-first, covering the full booking flow from login to confirmation. Both light and dark themes are fully supported, matching the user's system preference.",
    screens: [
      {
        src: withBasePath("/images/project/phone-1-login.webp"),
        darkSrc: withBasePath("/images/project/phone-1-login-dark.webp"),
        width: 440,
        height: 907,
      },
      {
        src: withBasePath("/images/project/phone-2-shops.webp"),
        darkSrc: withBasePath("/images/project/phone-2-shops-dark.webp"),
        width: 440,
        height: 907,
      },
      {
        src: withBasePath("/images/project/phone-3-professional.webp"),
        darkSrc: withBasePath("/images/project/phone-3-professional-dark.webp"),
        width: 440,
        height: 907,
      },
      {
        src: withBasePath("/images/project/phone-4-details.webp"),
        darkSrc: withBasePath("/images/project/phone-4-details-dark.webp"),
        width: 440,
        height: 907,
      },
    ],
  },
  dashboard: {
    caption:
      "Shop owners had no way to see how their business was performing or manage staff schedules without checking multiple spreadsheets. I built a tablet dashboard that gives staff a live view of their daily schedule and lets owners track revenue, bookings, and top services at a glance.",
    image: {
      src: withBasePath("/images/project/ipad-schedule-light.webp"),
      width: 1564,
      height: 1234,
    },
    darkImage: {
      src: withBasePath("/images/project/ipad-schedule-dark.webp"),
      width: 1564,
      height: 1234,
    },
  },
};

export const technicalSkills: { category: string; items: string }[] = [
  {
    category: "Languages",
    items: "Java, Kotlin, Dart, Swift, Python, JavaScript, C++, SQL, HTML/CSS, Tailwind CSS",
  },
  {
    category: "Frameworks",
    items: "Flutter, Angular, Android, iOS, Scikit-learn",
  },
  {
    category: "Machine Learning",
    items: "Data preprocessing, feature engineering, classification & regression models, clustering, PCA, NLP",
  },
  {
    category: "Tools",
    items: "Git, GitLab, CI/CD, Gradle, Xcode, Android Studio, Firebase, Supabase, MongoDB",
  },
  {
    category: "Idioms",
    items: "Portuguese (Native), English (C2)",
  },
];
