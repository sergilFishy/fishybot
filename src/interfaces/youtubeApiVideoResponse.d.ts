export interface IVideoResponsebody {
    kind: string,
    etag: string,
    items: ?{
        kind: string,
        etag: string,
        id: string,
        snippet: {
            publishedAt: string,
            channelId: string,
            title: string,
            desciption: string,
            thumbnails: {
                default: thumbnail,
                medium: thumbnail,
                high: thumbnail,
                standard: thumbnail,
                maxres: thumbnail
            }
        },
        channeltitle: string,
        categoryId: string,
        liveBroadcastContent: string,
        defaultLanguage: string,
        localized: {
            title: string,
            description: string
        }
    }[],
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    }
}

type thumbnail = {
    url: string,
    width: number,
    height: number
}                                       