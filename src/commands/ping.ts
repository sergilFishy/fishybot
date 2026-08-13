import { SlashCommandBuilder } from "discord.js"
import type { ICommand } from "../interfaces/command.js"

export const ping: ICommand = {
    data: new SlashCommandBuilder().setName("ping").setDescription("replies with pong"),
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;
        await interaction.reply("pong");
    }
}
