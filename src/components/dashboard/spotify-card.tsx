"use client";

import { useLanyard } from "@/hooks/use-lanyard";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert } from "@/components/ui/alert";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { FaSpotify } from "react-icons/fa";

export function SpotifyCard() {
    const { data, isLoading } = useLanyard();
    const activity = data?.data?.activities.find((activity: any) => activity.name === "Spotify");
    const trackId = data?.data?.spotify?.track_id;

    if (isLoading) {
        return (
            <div className="w-full">
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-8 w-full" />
                </div>
            </div>
        );
    }

    if (!activity) {
        return (
            <Alert className="flex items-center justify-start gap-4 border-none">
                <div>
                    <FaSpotify className="h-12 w-12 text-[#1ED760]" />
                </div>
                <div>No activity</div>
            </Alert>
        );
    }

    return (
        <Alert className="flex flex-col items-center gap-3 border-none text-center sm:flex-row sm:p-0 sm:text-left">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <FaSpotify className="h-12 w-12 text-[#1ED760]" />
                    </TooltipTrigger>
                    <TooltipContent>Listening to Spotify</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
                <div className="flex flex-col">
                    <div>{activity.name}</div>
                    <div>{activity.details}</div>
                </div>
            </div>
        </Alert>
    );
}
