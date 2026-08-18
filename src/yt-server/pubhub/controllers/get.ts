import type { Request, Response } from "express";

export function getChallenge() {
    return function (request: Request, response: Response): void {
        const challenge = request.query["hub.challenge"];
        response.status(202).send(challenge);
    }
}
