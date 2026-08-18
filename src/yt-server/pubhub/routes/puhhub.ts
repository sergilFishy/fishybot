import express, { Router } from 'express';
import { getChallenge } from '../controllers/get.ts';
import { receiveYoutubeResponse } from '../controllers/post.ts';
import type { Client } from 'discord.js';

export default function routes(client: Client) {
    const routes: Router = express.Router();
    routes.route("/pubhub").get(getChallenge()).post(receiveYoutubeResponse(client));
    return routes;
}