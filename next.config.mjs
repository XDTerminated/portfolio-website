/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.scdn.co",
                port: "",
                pathname: "/image/**",
            },
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "dcdn.dstn.to",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
