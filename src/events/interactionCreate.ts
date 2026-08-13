import { Events, type Client } from "discord.js";
import handleSlashCommands from "../utils/handleSlashCommands.ts";

export default function (client: Client) {
    client.on(Events.InteractionCreate, interaction => handleSlashCommands(interaction, client));
}