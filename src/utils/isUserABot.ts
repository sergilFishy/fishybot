import type { User } from "discord.js";

export default function (user: User): boolean {
    return user.bot;
}