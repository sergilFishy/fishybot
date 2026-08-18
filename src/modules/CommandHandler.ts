import { Collection } from "discord.js";
import * as commands from '../commands/index.ts';
import type { IFishClient } from "../interfaces/fishClient.js";

export default function (client: IFishClient) {
    client.commands = new Collection();
    const parsedCommands = Object.values(commands);
    parsedCommands.forEach(command => {
        if ((!command.data || !command.execute)) return;

        client.commands.set(command.data.name, command);
    })
}