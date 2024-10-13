import { SiteConfig } from "@/types";
import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
    name: "XDTerminated",
    author: "Sayam Gupta",
    description: "Welcome to my personal website built with Next.js.",
    url: env.NEXT_PUBLIC_APP_URL,
    ogImage: `${env.NEXT_PUBLIC_APP_URL}/images/og-image.jpg`, // Custom Open Graph image
    links: {
        github: "https://github.com/XDTerminated",
        linkedin: "https://www.linkedin.com/in/sayam-g/",
        leetcode: "https://leetcode.com/u/Hackez/",
    },
};
