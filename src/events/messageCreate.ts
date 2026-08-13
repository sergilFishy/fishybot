import { Events, type Client } from "discord.js";
import readMessage from "../utils/readMessage.ts";

export default function (client: Client) {
    client.on(Events.MessageCreate, readMessage);
}