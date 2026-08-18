import type { IVideoResponsebody } from "../interfaces/youtubeApiVideoResponse.js";

export default async function (videoId: string): Promise<IVideoResponsebody> {
    const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.YT_API_KEY}&part=snippet`)
    const video = await data.json();

    return video as IVideoResponsebody;
}