"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

import { DiscordActivity } from "./discord-activity";

export function DiscordCard() {
    return (
        <Card className="w-full">
            <CardContent className="flex flex-col gap-4 pt-6">
                <DiscordActivity />
            </CardContent>
        </Card>
    );
}
