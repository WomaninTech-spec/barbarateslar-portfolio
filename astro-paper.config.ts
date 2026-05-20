import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://womanintech-spec.github.io/barbarateslar-portfolio/",
    title: "Barbara Teslar — Platform Engineering Manager IA",
    description:
      "Platform Engineering Manager spécialisée dans l'IA. Je pilote des équipes et des plateformes où humains et agents IA collaborent pour accélérer la delivery.",
    author: "Barbara Teslar",
    profile: "https://github.com/WomaninTech-spec",
    ogImage: "default-og.jpg",
    lang: "fr",
    timezone: "Europe/Paris",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/WomaninTech-spec",
      linkTitle: "Mon GitHub",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/barbarateslar/?locale=en",
      linkTitle: "Mon LinkedIn",
    },
    {
      name: "mail",
      url: "mailto:barbarat.tecg@gmail.com",
      linkTitle: "Me contacter",
    },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});