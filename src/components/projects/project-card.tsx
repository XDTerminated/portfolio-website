import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Project } from "@/config/projects"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  index: number
}

const GRADIENTS = [
  "from-violet-500/40 via-fuchsia-500/15",
  "from-sky-500/40 via-cyan-500/15",
  "from-emerald-500/40 via-teal-500/15",
  "from-amber-500/40 via-orange-500/15",
  "from-rose-500/40 via-pink-500/15",
  "from-indigo-500/40 via-blue-500/15",
  "from-lime-500/40 via-green-500/15",
]

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = GRADIENTS[index % GRADIENTS.length]

  return (
    <Link
      target="_blank"
      href={project.github}
      rel="noopener noreferrer"
      aria-label={`${project.name} on GitHub`}
      style={{ animationDelay: `${index * 70}ms` }}
      className="group relative h-full animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-500 motion-reduce:animate-none"
    >
      <div className="flex h-full flex-col rounded-[18px] border border-border/60 bg-muted/20 p-2 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-zinc-700 group-hover:bg-muted/40 group-hover:shadow-xl group-hover:shadow-black/30">
        {/* Visual block: real thumbnail over a gradient fallback */}
        <div className="relative aspect-video w-full overflow-hidden rounded-[12px] bg-zinc-950">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br to-transparent",
              gradient
            )}
          />
          <span className="absolute inset-0 flex items-center justify-center font-display text-6xl font-bold text-white/20">
            {initials(project.name)}
          </span>

          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />
          <span className="absolute right-2 top-2 z-10 rounded-full border border-white/10 bg-black/40 px-2 py-0.5 font-mono text-[10px] text-white/90 backdrop-blur">
            {project.year}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2 p-3">
          <div className="space-y-0.5">
            <h3 className="flex items-center gap-1 font-semibold leading-tight text-foreground">
              {project.name}
              <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
            </h3>
            <p className="font-mono text-xs text-muted-foreground">
              {project.hackathon}
            </p>
          </div>

          <div className="text-xs font-medium text-emerald-500 dark:text-emerald-400">
            {project.award}
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
