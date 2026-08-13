import type { Client, Collection } from "discord.js";
import type { ICommand } from "./command.js";

export interface IFishClient extends Client {
    commands: Collection<string, ICommand>,
}

