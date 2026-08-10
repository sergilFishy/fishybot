import { Events, type Client } from "discord.js";
import readMessage from "../modules/readMessage.ts";

export default function (client: Client) {
    client.on(Events.MessageCreate, readMessage);
}