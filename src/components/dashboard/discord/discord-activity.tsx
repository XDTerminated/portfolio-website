"use client";

import * as React from "react";
import { useLanyard } from "@/hooks/use-lanyard";
import { Activity } from "@/types";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";

import { DiscordActivityCard } from "./discord-activity-card";

export function DiscordActivity() {
    const { data, isLoading } = useLanyard();

    // Handle loading state
    if (isLoading) {
        return (
            <div className="flex flex-col gap-4">
                {/* Skeleton for one activity card - simplified as status is removed */}
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <Skeleton className="h-[90px] w-[90px] rounded" />
                        <div className="flex flex-col gap-1">
                            <Skeleton className="h-5 w-32" />
                            <Skeleton className="h-4 w-48" />
                            <Skeleton className="h-4 w-40" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Handle error or no data state
    if (!data?.data) {
        return (
            <div className="flex flex-col gap-4">
                <Alert className="border-none bg-muted">
                    <AlertDescription>Could not load activity data.</AlertDescription>
                </Alert>
            </div>
        );
    }

    const { activities } = data.data;
    const customStatus = activities.find((activity: Activity) => activity.type === 4);
    const otherActivities = activities.filter((activity: Activity) => activity.type !== 4);

    // Filter out Spotify activity if Spotify data exists, to avoid duplication if SpotifyCard is used separately
    const nonSpotifyActivities = otherActivities.filter((activity) => !(activity.name === "Spotify" && data.data.spotify));

    return (
        <div className="flex flex-col gap-4">
            {/* DiscordStatus removed */}

            {/* Display Custom Status if available */}
            {customStatus && customStatus.state && <p className="text-sm text-muted-foreground">{customStatus.state}</p>}

            {/* Display other non-Spotify activities */}
            {nonSpotifyActivities.length > 0 ? (
                nonSpotifyActivities.map((activity: Activity, index: number) => (
                    <DiscordActivityCard
                        key={`activity-${activity.id || index}`}
                        activity={activity}
                        data={data} // Pass the full response here
                    />
                ))
            ) : customStatus ? null : ( // If no other activities and no custom status, show message
                <Alert className="border-none bg-muted">
                    <AlertDescription>No current activities.</AlertDescription>
                </Alert>
            )}
        </div>
    );
}
