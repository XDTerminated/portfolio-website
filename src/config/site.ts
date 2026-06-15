import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Sayam Gupta",
  author: "Sayam Gupta",
  description:
    "Sayam Gupta — software developer and student at Missouri S&T who builds award-winning VR, mixed-reality, and full-stack projects at hackathons.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    github: "https://github.com/XDTerminated",
    linkedin: "https://www.linkedin.com/in/sayam-g/",
    leetcode: "https://leetcode.com/u/Hackez/",
    chess: "https://www.chess.com/member/xd_terminated",
    devpost: "https://devpost.com/gupta-sayam2006",
    resume: "/Sayam_Resume.pdf",
  },
}
