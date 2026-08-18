import { MessageFlags, type BaseInteraction, type Client } from "discord.js";
import type { IFishClient } from "../interfaces/fishClient.js";

export default async function (interaction: BaseInteraction, client: Client) {
    if (!interaction.isChatInputCommand()) return;
    const command = (client as IFishClient).commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.log(error);
        const content = 'There was an error while executing this command!'
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                flags: MessageFlags.Ephemeral,
                content
            })
        } else {
            await interaction.reply({
                content,
                flags: MessageFlags.Ephemeral
            })
        }
    }
}