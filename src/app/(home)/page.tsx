import { projects } from "@/config/projects"
import { siteConfig } from "@/config/site"
import { HeadingText } from "@/components/common/heading-text"
import { ProjectCard } from "@/components/projects/project-card"

export default function Home() {
  return (
    <main className="flex animate-in fade-in flex-col gap-5 duration-700 motion-reduce:animate-none">
      <HeadingText subtext="Award-winning projects I've built at hackathons.">
        Projects
      </HeadingText>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={siteConfig.links.devpost}
        className="inline-block font-mono text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
      >
        See more on Devpost →
      </a>
    </main>
  )
}
