import { Events, type Client } from "discord.js";

export default function (client: Client) {
    client.on(Events.GuildCreate, guild => guild);
}