import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { siteConfig } from "@/config/site";

export function SocialMediaIcons() {
    return (
        <div className="flex">
            <a target="_blank" href={siteConfig.links.github} rel="noopener noreferrer" aria-label="Github" className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground">
                <FaGithub />
            </a>
            <a target="_blank" href={siteConfig.links.linkedin} rel="noopener noreferrer" aria-label="Linkedin" className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground">
                <FaLinkedin />
            </a>
            <a target="_blank" href={siteConfig.links.leetcode} rel="noopener noreferrer" aria-label="Leetcode" className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground">
                <SiLeetcode />
            </a>
        </div>
    );
}
