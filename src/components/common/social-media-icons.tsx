import { FaGithub, FaLinkedin, FaRegFileLines } from "react-icons/fa6";
import { SiChessdotcom, SiDevpost, SiLeetcode } from "react-icons/si";

import { siteConfig } from "@/config/site";

const socials = [
    { href: siteConfig.links.github, label: "GitHub", Icon: FaGithub },
    { href: siteConfig.links.linkedin, label: "LinkedIn", Icon: FaLinkedin },
    { href: siteConfig.links.devpost, label: "Devpost", Icon: SiDevpost },
    { href: siteConfig.links.leetcode, label: "LeetCode", Icon: SiLeetcode },
    { href: siteConfig.links.chess, label: "Chess.com", Icon: SiChessdotcom },
    { href: siteConfig.links.resume, label: "Résumé", Icon: FaRegFileLines },
];

export function SocialMediaIcons() {
    return (
        <div className="flex items-center gap-1">
            {socials.map(({ href, label, Icon }) => (
                <a
                    key={label}
                    target="_blank"
                    href={href}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-md p-2 text-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                    <Icon />
                </a>
            ))}
        </div>
    );
}
