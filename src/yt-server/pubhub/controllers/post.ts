import type { Request, Response } from "express";
import isUploadvideoResponse from "../../../utils/isUploadvideoResponse.ts";
import isVideoUpdated from "../../../utils/isVideoUpdated.ts";
import { Client } from "discord.js";
import type { IFishClient } from "../../../interfaces/fishClient.ts";

export function receiveYoutubeResponse(client: Client) {
    return async function (request: Request, response: Response) {
        const { body } = request;

        if (!isUploadvideoResponse(body)) {
            respond(response);
            return;
        };

        /* const t = await isVideoUpdated(body.feed.entry[0]!["yt:videoid"][0]!)
        console.log(t)
        if (t) {
            respond(response);
            return;
        }; */

        (client as IFishClient).emit("videoUpload", body);
        respond(response);
    }

    function respond(res: Response) {
        res.status(204).send("ok")
    }
}