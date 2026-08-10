import { Client, GatewayIntentBits } from "discord.js";
import * as myEvents from "./events/index.ts"
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});
const events = Object.values(myEvents);

await client.login(process.env.BOT_TOKEN);
events.forEach(event => event.default(client));