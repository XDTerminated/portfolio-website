import { SiteConfig } from "@/types";

import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
    name: "XDTerminated",
    author: "redpangilinan",
    description: "My personal website built in Nextjs.",
    url: env.NEXT_PUBLIC_APP_URL,
    ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.png`,
    links: {
        github: "https://github.com/XDTerminated",
        linkedin: "https://www.linkedin.com/in/sayam-g/",
        leetcode: "https://leetcode.com/u/Hackez/",
    },
};
