import { HeadingText } from "@/components/common/heading-text"
import { ProjectsSkeleton } from "@/components/loaders/projects-skeleton"

export default function Loading() {
  return (
    <main className="flex flex-col gap-5">
      <HeadingText subtext="Award-winning projects I've built at hackathons.">
        Projects
      </HeadingText>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ProjectsSkeleton />
      </div>
    </main>
  )
}
