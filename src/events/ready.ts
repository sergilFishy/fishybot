import youtubeVideoListener from "../modules/youtubeVideoListener.ts";
import pubHubRequest from "../utils/pubHubRequest.ts";
import welcome from "../utils/welcome.ts";
import { Events, type Client } from "discord.js";

export default function (client: Client) {
    client.on(Events.ClientReady, welcome);
    client.on(Events.ClientReady, client => youtubeVideoListener(() => {
        console.log(`server listening on port ${process.env.PORT}`);
        pubHubRequest(process.env.CALLBACK_URL, "UCBbUZIH-3a2Gbw8gGCr-lDw", "async", "subscribe");
        pubHubRequest(process.env.CALLBACK_URL, "UCttXbg9f39NioF7YlPDeYPw", "async", "subscribe");
    }, client))
}