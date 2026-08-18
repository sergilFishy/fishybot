import { Client, GatewayIntentBits } from "discord.js";
import CommandHandler from "./modules/CommandHandler.ts";
import type { IFishClient } from "./interfaces/fishClient.js";
import eventHandler from "./modules/eventHandler.ts";

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

CommandHandler(client as IFishClient);
eventHandler(client);
await client.login(process.env.BOT_TOKEN);
