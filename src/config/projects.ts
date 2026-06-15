export type Project = {
  name: string
  tagline: string
  description: string
  award: string
  hackathon: string
  year: string
  tech: string[]
  link: string
  github: string
  image: string
}

// Award-winning hackathon projects, pulled from
// https://devpost.com/gupta-sayam2006
export const projects: Project[] = [
  {
    name: "Scribble Showdown",
    tagline: "Bring your drawings to life and battle against friends.",
    description:
      "A mixed-reality game where creatures you sketch in a web app turn into 3D models in VR, gain AI-driven personalities and voices, and fight in turn-based elemental battles.",
    award: "Best Overall · 1st Place",
    hackathon: "TigerVerse",
    year: "2026",
    tech: ["Unity", "React", "Astro", "Photon Fusion", "Meshy.ai", "ElevenLabs", "Groq"],
    link: "https://devpost.com/software/scribble-showdown",
    github: "https://github.com/XDTerminated/tigerverse-2026",
    image: "/projects/scribble-showdown.png",
  },
  {
    name: "Hold the Line",
    tagline: "A VR financial-literacy simulator.",
    description:
      "Manage a checking account, student loans, and investments in real time while juggling bills, groceries, and live AI voice calls from family — practice adulting before it's real.",
    award: "2nd Place · Security Benefit Award",
    hackathon: "HackKU",
    year: "2026",
    tech: ["Unity", "C#", "OpenXR", "Quest 3", "Groq", "ElevenLabs", "Whisper", "Postgres"],
    link: "https://devpost.com/software/hold-the-line-yoitlx",
    github: "https://github.com/XDTerminated/hold-the-line-hackku-2026",
    image: "/projects/hold-the-line.png",
  },
  {
    name: "Synaptically",
    tagline: "Practice real-world social interactions in VR.",
    description:
      "Combines VR, biometric sensing, and AI so users rehearse high-stakes conversations with NPCs that adapt to their live stress levels and speech patterns.",
    award: "1st Place · OpenBCI & Meta XR Tracks",
    hackathon: "Immerse The Bay · Stanford",
    year: "2025",
    tech: ["Unity", "C#", "OpenBCI Galea", "Varjo Aero", "Groq", "ElevenLabs"],
    link: "https://devpost.com/software/immerse-the-bay-2025-alvin-sayam-matthew-jason",
    github: "https://github.com/XDTerminated/synaptically-immerse-the-bay-2025",
    image: "/projects/synaptically.jpg",
  },
  {
    name: "PomoPatch",
    tagline: "Your mind grows better when focus and rest happen together.",
    description:
      "A Pomodoro timer fused with a cozy gardening game — grow plants during focus sessions and tend your garden on breaks, inspired by the calm of Stardew Valley.",
    award: "Top Team · Code-Agnostic",
    hackathon: "WashU Hackathon",
    year: "2025",
    tech: ["React", "TypeScript", "FastAPI", "Tauri", "PostgreSQL", "Clerk"],
    link: "https://devpost.com/software/pomopatch",
    github: "https://github.com/XDTerminated/pomopatch-hackwashu-2025",
    image: "/projects/pomopatch.gif",
  },
  {
    name: "WhiteLIES",
    tagline: "Question everyone. Trust only one.",
    description:
      "A voice-driven social-deduction game set in space — interrogate NPCs from different planets to figure out who can actually repair your damaged ship before time runs out.",
    award: "Best Use of Solana · Best Domain Name",
    hackathon: "TigerHacks",
    year: "2025",
    tech: ["React", "TypeScript", "Python", "ElevenLabs", "NeonDB", "Solana"],
    link: "https://devpost.com/software/whitelies",
    github: "https://github.com/XDTerminated/white-lies-tigerhacks-2025",
    image: "/projects/whitelies.png",
  },
  {
    name: "Lumina",
    tagline: "Helping immigrants navigate the U.S. legal system.",
    description:
      "A community-powered platform that connects immigrants with real, anonymized case outcomes and an AI assistant that answers questions in plain language with citations.",
    award: "Best Use of ElevenLabs",
    hackathon: "Midwest Blockathon",
    year: "2025",
    tech: ["Next.js", "TypeScript", "Hono", "PostgreSQL", "Groq", "Solidity", "Base"],
    link: "https://devpost.com/software/lumina-4nx2ca",
    github: "https://github.com/XDTerminated/lumina-midwest-blockathon-2026",
    image: "/projects/lumina.png",
  },
  {
    name: "Petalverse",
    tagline: "Turn your living room into a blooming VR garden.",
    description:
      "Scan your room in VR and watch it fill with vibrant flowers you water to earn money — a full mixed-reality gardening experience on the Meta Quest 3.",
    award: "3rd Place",
    hackathon: "TigerVerse",
    year: "2025",
    tech: ["Unity", "C#", "Meta Quest 3", "Meta XR SDK"],
    link: "https://devpost.com/software/petalverse",
    github: "https://github.com/XDTerminated/petalverse-tigerverse-2025",
    image: "/projects/petalverse.png",
  },
]
