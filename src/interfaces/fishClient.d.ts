import type { Client, Collection } from "discord.js";
import type { ICommand } from "./command.js";
import type { CustomClientEvents } from "./customClientEvents.js";

export interface IFishClient extends Client {
    commands: Collection<string, ICommand>,
    public on<Event extends keyof CustomClientEvents>(event: Event, listener: (...args: CustomClientEvents[Event]) => void)
    public emit<Event extends keyof CustomClientEvents>(event: Event, ...args: CustomClientEvents[Event]);
}

