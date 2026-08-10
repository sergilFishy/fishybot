import type { Client } from "discord.js";

export default function (client: Client) {
    console.log(`hewwo I'm ${client.user?.username} and im ready`);
}