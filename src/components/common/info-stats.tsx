import Link from "next/link"

type Row = {
  label: string
  value: React.ReactNode
}

const rows: Row[] = [
  {
    label: "Currently",
    value: (
      <Link
        href="https://www.mst.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-zinc-700 underline-offset-4 transition-colors hover:decoration-zinc-400"
      >
        Studying CS @ Missouri S&amp;T
      </Link>
    ),
  },
  { label: "Location", value: "Missouri, USA" },
  { label: "Focus", value: "Full-stack & XR" },
  { label: "Hackathons", value: "7× winner" },
]

export function InfoStats() {
  return (
    <ul className="flex flex-col gap-2.5 text-sm">
      {rows.map((row) => (
        <li key={row.label} className="flex items-baseline gap-3">
          <span className="w-24 shrink-0 text-muted-foreground">
            {row.label}
          </span>
          <span className="flex flex-1 items-center text-foreground">
            {row.value}
          </span>
        </li>
      ))}
    </ul>
  )
}
