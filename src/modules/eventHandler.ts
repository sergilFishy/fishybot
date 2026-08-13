import type { Client } from 'discord.js';
import * as events from '../events/index.ts'

export default function(client: Client) {
    const parsedEvents = Object.values(events);
    parsedEvents.forEach(event => event.default(client));
}