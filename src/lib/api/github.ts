import wretch from "wretch";
import { env } from "@/env.mjs";

const apiUrl = env.GH_API_URL;

// Instantiate and configure wretch
const api = wretch(apiUrl).errorType("json");

// Fetch my pinned repository
export const getRepo = async () => {
    try {
        const response = await api.get("/?username=xdterminated").json();
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
        return { error: "Failed fetching data" };
    }
};
