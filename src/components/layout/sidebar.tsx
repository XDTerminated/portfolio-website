import Link from "next/link"

import { siteConfig } from "@/config/site"
import { SocialMediaIcons } from "@/components/common/social-media-icons"
import { InfoStats } from "@/components/common/info-stats"
import { Introduction } from "@/components/introduction"

export function Sidebar() {
  return (
    <aside className="flex animate-in fade-in slide-in-from-bottom-2 flex-col gap-6 duration-700 motion-reduce:animate-none md:sticky md:top-14 md:h-fit md:w-2/5 md:self-start lg:w-[38%]">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <Link href="/">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
            {siteConfig.name}
          </h1>
        </Link>
        <SocialMediaIcons />
      </div>

      <Introduction />

      <InfoStats />

      <p className="pt-2 font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name} · v1.0.0
      </p>
    </aside>
  )
}
