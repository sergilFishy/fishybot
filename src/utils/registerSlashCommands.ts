import * as commands from '../commands/index.ts'
import { REST, Routes, type RESTPostAPIChatInputApplicationCommandsJSONBody } from 'discord.js';

const parsedcommands = Object.values(commands);
const body: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];

parsedcommands.forEach((command, index) => {
    if (!command.data || !command.execute) {
        console.log(`the command ${Object.keys(commands).at(index)} is missing either a data property or an execute property.`);
        return;
    }

    body.push(command.data.toJSON());
});

const rest = new REST().setToken(process.env.BOT_TOKEN);

try {
    console.log(`Started refreshing ${body.length} application (/) commands.`);
    const data = await rest.put(Routes.applicationCommands(process.env.BOT_CLIENT_ID), {
        body
    })

    console.log(`successfully reloaded ${body.length} application (/) commands`)
} catch (error) {
    //LOGGER
    console.log(error);
}