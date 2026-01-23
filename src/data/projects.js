// data for portfolio projects
export const PROJECTS = [
  {
    title: "AI Algorithms",
    subtitle: "Python",
    category: "Engineering",
    thumbnailSrc: new URL("../assets/images/ai_algorithms.png", import.meta.url)
      .href,
    slug: "ai-algorithms",
    link: "https://github.com/johannazhang/AI-Algorithms",
  },
  {
    title: "Metromate",
    subtitle: "UI/UX case study",
    category: "Design",
    thumbnailSrc: new URL("../assets/images/metromate.png", import.meta.url)
      .href,
    slug: "metromate",
  },
  {
    title: "Giftify",
    subtitle: "UI/UX case study",
    category: "Design",
    thumbnailSrc: new URL("../assets/images/giftify.png", import.meta.url).href,
    slug: "giftify",
  },
  {
    title: "johannazhang.ca",
    subtitle: "React",
    category: "Engineering",
    thumbnailSrc: new URL("../assets/images/website.png", import.meta.url).href,
    projectImages: [
      new URL("../assets/images/desktop.png", import.meta.url).href,
    ],
    slug: "johannazhang",
    link: "https://github.com/johannazhang/portfolio",
  },
  {
    title: "Text Adventure",
    subtitle: "Shell Script",
    category: "Engineering",
    thumbnailSrc: new URL("../assets/images/advent.png", import.meta.url).href,
    slug: "text-adventure",
    link: "https://github.com/johannazhang/Text-Adventure",
  },
  {
    title: "UTERN",
    subtitle: "Logo",
    category: "Design",
    thumbnailSrc: new URL("../assets/images/utern.png", import.meta.url).href,
    slug: "utern",
  },
  {
    title: "Paramedic Chiefs of Canada",
    subtitle: "Logo",
    category: "Design",
    thumbnailSrc: new URL("../assets/images/paramedics.png", import.meta.url)
      .href,
    projectImages: [
      new URL("../assets/images/paramedics.png", import.meta.url).href,
      new URL("../assets/images/paramedics_branding.png", import.meta.url).href,
    ],
    slug: "paramedic-chiefs-of-canada",
  },
  {
    title: "Alice Maze Solver",
    subtitle: "Python",
    category: "Engineering",
    thumbnailSrc: new URL("../assets/images/alice_maze.png", import.meta.url)
      .href,
    slug: "alice-maze-solver",
    link: "https://github.com/johannazhang/Alice-Maze-Solver",
  },
  {
    title: "Centipede",
    subtitle: "Assembly Language",
    category: "Engineering",
    thumbnailSrc: new URL("../assets/images/centipede.png", import.meta.url)
      .href,
    projectImages: [
      new URL("../assets/images/centipede_game.png", import.meta.url).href,
    ],
    slug: "centipede",
    link: "https://github.com/johannazhang/Centipede-Game",
  },
];
