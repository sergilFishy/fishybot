import type { IUploadVideoResponseBody } from "../interfaces/youtubePubHubResponseBody.js";

export default function (body: any): body is IUploadVideoResponseBody {
    if ((body as IUploadVideoResponseBody)?.feed?.title) return true;
    return false;
}