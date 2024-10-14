import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Hackez",
  author: "Sayam Gupta",
  description: "My personal website built in Nextjs.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    github: "https://github.com/XDTerminated",
    linkedin: "https://www.linkedin.com/in/sayam-g/",
    leetcode: "https://leetcode.com/u/Hackez/",
    chess: "https://www.chess.com/member/xd_terminated"
  },
}
