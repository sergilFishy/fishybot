import { type Client } from "discord.js";
import type { IFishClient } from "../interfaces/fishClient.js";

export default function (client: Client) {
  (client as IFishClient).on("videoUpload", async body => {
    const guild = await client.guilds.fetch("1534659078394089644");
    const channel = await guild.channels.fetch("1534659078952058973");
    const videoUrl = body.feed.entry[0]?.link[0]?.$.href!;
    const youtubeName = body.feed.entry[0]?.author[0]?.name[0]!;
    /* const video = await fetchVideo(body.feed.entry[0]!["yt:videoid"][0]!);
    
    const youtubeChannelUrl = body.feed.entry[0]!.author[0]!.uri[0]!;
    const thumbnailUrl = video!.items![0]!.snippet.thumbnails.maxres.url;

    const embed: APIEmbed = {
        color: Colors.DarkPurple,
        title: youtubeName,
        url: youtubeChannelUrl,
        author: {
            name: "testingname",
        },
        thumbnail: {
            url: thumbnailUrl
        }
    }
*/
    if (!channel?.isSendable()) return;
    channel.send(`
            hey! ${youtubeName} uploaded a new video!!!
${videoUrl}
            `)
  })
}

/* {
  "feed": {
    "$": {
      "xmlns:yt": "http://www.youtube.com/xml/schemas/2015",
      "xmlns": "http://www.w3.org/2005/Atom"
    },
    "link": [
      {
        "$": {
          "rel": "hub",
          "href": "https://pubsubhubbub.appspot.com"
        }
      },
      {
        "$": {
          "rel": "self",
          "href": "https://www.youtube.com/xml/feeds/videos.xml?channel_id=UCBbUZIH-3a2Gbw8gGCr-lDw"
        }
      }
    ],
    "title": [
      "YouTube video feed"
    ],
    "updated": [
      "2026-08-17T02:50:06.702569597+00:00"
    ],
    "entry": [
      {
        "id": [
          "yt:video:DAkcPKAfwZw"
        ],
        "yt:videoid": [
          "DAkcPKAfwZw"
        ],
        "yt:channelid": [
          "UCBbUZIH-3a2Gbw8gGCr-lDw"
        ],
        "title": [
          "ww"
        ],
        "link": [
          {
            "$": {
              "rel": "alternate",
              "href": "https://www.youtube.com/shorts/DAkcPKAfwZw"
            }
          }
        ],
        "author": [
          {
            "name": [
              "sergil"
            ],
            "uri": [
              "https://www.youtube.com/channel/UCBbUZIH-3a2Gbw8gGCr-lDw"
            ]
          }
        ],
        "published": [
          "2026-08-17T02:50:02+00:00"
        ],
        "updated": [
          "2026-08-17T02:50:06.702569597+00:00"
        ]
      }
    ]
  }
} */