import Link from "next/link"

import { ModeToggle } from "../mode-toggle"

export default function Navbar() {
  return (
    <nav className="flex select-none items-center justify-end gap-4">
      <ul className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
        <li>
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
        </li>
      </ul>
      <ModeToggle />
    </nav>
  )
}
