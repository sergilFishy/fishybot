import fetchVideo from "./fetchVideo.ts";

export default async function(videoId: string): Promise<boolean> {
    const video = await fetchVideo(videoId);
    if (Number(video.pageInfo.totalResults) <= 0) return false;
    return true;
}