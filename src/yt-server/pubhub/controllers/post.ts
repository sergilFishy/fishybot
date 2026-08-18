import type { Request, Response } from "express";
import isUploadvideoResponse from "../../../utils/isUploadvideoResponse.ts";
import isVideoUpdated from "../../../utils/isVideoUpdated.ts";
import { Client } from "discord.js";

export function receiveYoutubeResponse(client: Client) {
    return async function (request: Request, response: Response) {
        const { body } = request;

        if (!isUploadvideoResponse(body)) {
            respond(response);
            return;
        };
        if (await isVideoUpdated(body.feed.entry[0]!["yt:videoid"][0]!)) {
            respond(response);
            return;
        };
    }

    function respond(res: Response) {
        res.status(204).send("ok")
    }
}