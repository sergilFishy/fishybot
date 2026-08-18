import type { HubMode, VerifyMode } from "../types/youtubePubHubRequestTypes.js";

export default async function (callbackUrl: string, channelId: string, verifyMode: VerifyMode, hubMode: HubMode) {
    const params = new URLSearchParams();
    params.append("hub.callback", callbackUrl);
    params.append("hub.mode", hubMode);
    params.append("hub.topic", `https://www.youtube.com/xml/feeds/videos.xml?channel_id=${channelId}`);
    params.append("hub.verify", verifyMode);

    await request(params);
}

async function request(params: URLSearchParams) {
    try {
        const data = await fetch("https://pubsubhubbub.appspot.com/subscribe", {
            body: params,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            method: "POST"
        });

        if (!(data.ok)) {
            throw new Error("unknow error");
        }
    } catch (error) {
        console.log("retrying");
        setTimeout(() => request(params), 3000);
    }
} 