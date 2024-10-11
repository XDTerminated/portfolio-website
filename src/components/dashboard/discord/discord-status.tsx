import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { BsDiscord } from "react-icons/bs";

interface DiscordApiResponse {
    data: {
        discord_status: Status;
        discord_user: {
            id: string;
            avatar: string;
        };
    };
}

type Status = "online" | "offline" | "idle" | "dnd";

export function DiscordStatus(data: DiscordApiResponse) {
    const status = (status: Status) => {
        const statusMap: Record<Status, { text: string; color: string }> = {
            online: { text: "Online", color: "#3ba55c" },
            offline: { text: "Offline", color: "gray" },
            idle: { text: "Idle", color: "#FAA61A" },
            dnd: { text: "Do Not Disturb", color: "#F04747" },
        };

        return statusMap[status] || { text: "Offline", color: "gray" };
    };

    const statusInfo = status(data.data.discord_status);

    return (
        <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex gap-2">
                <div className="flex items-center justify-center">
                    <Avatar>
                        <AvatarImage src={`https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}`} />
                    </Avatar>
                </div>
                <div>
                    <div className="text-lg font-bold">{data.data.discord_user.id}</div>
                    <p className="text-xs text-muted-foreground">Discord User</p>
                </div>
            </div>
            <div className="flex items-center gap-2" style={{ color: statusInfo.color }}>
                <BsDiscord />
                <span className="text-sm">{statusInfo.text}</span>
            </div>
        </div>
    );
}
