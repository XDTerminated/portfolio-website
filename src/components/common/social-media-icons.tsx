import { FaGithub, FaLinkedin } from "react-icons/fa";

import { siteConfig } from "@/config/site";
import { SiChessdotcom, SiLeetcode } from "react-icons/si";

export function SocialMediaIcons() {
    return (
        <div className="flex">
            <a target="_blank" href={siteConfig.links.github} rel="noopener noreferrer" aria-label="Github" className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground">
                <FaGithub />
            </a>
            <a target="_blank" href={siteConfig.links.linkedin} rel="noopener noreferrer" aria-label="Linkedin" className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground">
                <FaLinkedin />
            </a>
            <a target="_blank" href={siteConfig.links.leetcode} rel="noopener noreferrer" aria-label="Linkedin" className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground">
                <SiLeetcode />
            </a>
            <a target="_blank" href={siteConfig.links.chess} rel="noopener noreferrer" aria-label="Linkedin" className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground">
                <SiChessdotcom />
            </a>
        </div>
    );
}
