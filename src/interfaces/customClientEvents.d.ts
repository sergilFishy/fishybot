import type { IUploadVideoResponseBody } from "./youtubePubHubResponseBody.js";

export interface CustomClientEvents {
    videoUpload: [body: IUploadVideoResponseBody]
}