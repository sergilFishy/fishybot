import { Client, GatewayIntentBits, Events } from "discord.js";
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
})

client.on(Events.ClientReady, (_client) => {
    console.log("hewwo")
});

client.on(Events.MessageCreate, async message => {
    const channel = await message.guild?.channels.fetch(message.channelId);
    console.log(`guild: ${message.guild?.name}, channel: ${channel?.name}, message: ${message.content}`)
});

client.login(process.env.BOT_TOKEN);