import * as React from "react";
import { DiscordApiContent, DiscordApiResponse } from "@/types";
import useWebSocket, { ReadyState } from "react-use-websocket";

import { env } from "@/lib/utils";

interface MessageData {
    op: number;
    t: string;
    d: DiscordApiContent;
}

export const useLanyard = () => {
    const [data, setData] = React.useState<DiscordApiResponse | null>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const userId = env.NEXT_PUBLIC_DISCORD_ID;
    const socketUrl = "wss://api.lanyard.rest/socket";

    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
        onOpen: () => {
            initMessage();
        },
        shouldReconnect: () => true,
    });

    const initMessage = React.useCallback(() => {
        sendMessage(JSON.stringify({ op: 2, d: { subscribe_to_ids: [userId] } }));
    }, [sendMessage, userId]);

    const handleEvent = React.useCallback(
        (messageData: MessageData) => {
            const eventData = messageData.d;
            switch (messageData.t) {
                case "INIT_STATE":
                    setData({ data: eventData && eventData[userId] });
                    setIsLoading(false);
                    break;
                case "PRESENCE_UPDATE":
                    setData({ data: eventData });
                    setIsLoading(false);
                    break;
                default:
                    break;
            }
        },
        [userId]
    );

    React.useEffect(() => {
        if (readyState === ReadyState.OPEN) {
            initMessage();
        }
    }, [readyState, initMessage]);

    React.useEffect(() => {
        if (lastMessage) {
            const messageData: MessageData = JSON.parse(lastMessage.data);
            handleEvent(messageData);
        }
    }, [lastMessage, handleEvent]);

    return { data, isLoading, readyState };
};
