import { MessagePayload, type Message, type OmitPartialGroupDMChannel } from "discord.js";
import isUserABot from "../utils/isUserABot.ts";

export default async function (message: OmitPartialGroupDMChannel<Message>) {
    if (isUserABot(message.author)) return;

    const channel = await message.guild?.channels.fetch(message.channelId);
    const botReply = new MessagePayload(message, {
        content: `guild: ${message.guild?.name}, channel name: ${channel?.name}, message: ${message.content}`
    });
    await message.channel.send(botReply);
} 