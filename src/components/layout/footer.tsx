import { siteConfig } from "@/config/site";

export default function Footer() {
    return (
        <footer className="mt-auto flex items-center justify-between gap-2 pt-16 font-mono text-xs text-muted-foreground">
            <a
                target="_blank"
                href={siteConfig.links.github}
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
            >
                © {new Date().getFullYear()} Sayam Gupta
            </a>
            <span>v1.0.0</span>
        </footer>
    );
}
