import welcome from "../modules/welcome.ts";
import { Events, type Client } from "discord.js";

export default function (client: Client) {
    client.on(Events.ClientReady, welcome);
}