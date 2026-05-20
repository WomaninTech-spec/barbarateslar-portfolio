import rawConfig from "@/astro-paper.config";
import type { ResolvedAstroPaperConfig } from "@/types/config";

const config: ResolvedAstroPaperConfig = {
  site: {
    url: rawConfig.site.url,
    title: rawConfig.site.title,
    description: rawConfig.site.description,
    author: rawConfig.site.author,
    profile: rawConfig.site.profile,
    googleVerification: rawConfig.site.googleVerification,
    ogImage: rawConfig.site.ogImage ?? "default-og.jpg",
    lang: rawConfig.site.lang ?? "en",
    timezone: rawConfig.site.timezone ?? "UTC",
    dir: rawConfig.site.dir ?? "ltr",
  },
  posts: {
    perPage: rawConfig.posts?.perPage ?? 4,
    perIndex: rawConfig.posts?.perIndex ?? 4,
    scheduledPostMargin: rawConfig.posts?.scheduledPostMargin ?? 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: rawConfig.features?.lightAndDarkMode ?? true,
    dynamicOgImage: rawConfig.features?.dynamicOgImage ?? true,
    showArchives: rawConfig.features?.showArchives ?? true,
    showBackButton: rawConfig.features?.showBackButton ?? true,
    editPost: rawConfig.features?.editPost ?? { enabled: false },
    search: rawConfig.features?.search ?? "pagefind",
  },
  socials: rawConfig.socials ?? [],
  shareLinks: rawConfig.shareLinks ?? [],
};

export default config;
