import express from "express";
import xmlparser from "express-xml-bodyparser";
import routes from "../yt-server/pubhub/routes/puhhub.ts";
import type { Client } from "discord.js";

export default async function (callback: () => void, client: Client) {
    const app = express();
    app.use(xmlparser())
    app.use("/", routes(client));
    app.listen(process.env.PORT, callback);
}