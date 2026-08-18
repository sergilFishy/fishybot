export interface IUploadVideoResponseBody {
    feed: {
        "$": {
            "xmlns:yt": string,
            "xmlns": string
        },
        link: {
            "$": {
                rel: string,
                "href": string
            }
        }[]

        title: string[],
        updated: string,
        entry: {
            id: string[],
            "yt:videoid": string[],
            "yt:channelid": string[],
            title: string[],
            link: {
                "$": {
                    rel: string,
                    href: string
                }
            }[]
            author: {
                name: string[],
                uri: string[]
            }[]
            published: string[]
            updated: string[]
        }[]
    }
}

export interface IDeleteVideoResponseBody {
    feed: {
        "$": {
            "xmlns:at": string,
            "xmlns": string
        }

        "at:deleted-entry": {
            "$": {
                ref: string,
                when: string
            },
            link: {
                "$": {
                    href: string
                }
            }[]

            "at:by": {
                name: string[]
                uri: string[]
            }[]
        }[]
    }
}