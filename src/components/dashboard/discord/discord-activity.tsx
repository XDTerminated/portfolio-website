"use client";

import { useLanyard } from "@/hooks/use-lanyard";
import { Skeleton } from "@/components/ui/skeleton";

export function DiscordActivity() {
    const { data } = useLanyard();

    return (
        <>
            {!data ? (
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-10 w-28 md:w-[14rem]" />
                    </div>
                    <Skeleton className="h-8 w-full" />
                </div>
            ) : (
                <>
                    {data.data ? (
                        <>
                            {/* Display no activities */}
                            <div className="flex flex-grow flex-col gap-2">{!data || !data.data || !data.data.activities || data.data.activities.length === 0 ? <div>No activities</div> : data.data.activities.map((activity, index) => <div key={index}>{activity.name}</div>)}</div>
                        </>
                    ) : (
                        <div className="flex gap-2">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <Skeleton className="h-10 w-28 md:w-[14rem]" />
                        </div>
                    )}
                </>
            )}
        </>
    );
}
