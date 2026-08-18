import type { BaseInteraction, Interaction, SlashCommandBuilder } from "discord.js";

export interface ICommand {
    data: SlashCommandBuilder,
    async execute: (interaction: BaseInteraction) => Promise<void>,
}