import { configDotenv } from "dotenv";
import axios from "axios";
import { google } from "googleapis";
import path from "path";

configDotenv({ path: "../../../.env" });

configDotenv();

const apiKey = process.env.API_KEY ;
const channelId = process.env.CHANNEL_ID ;

export const getAllVideoDetailsRepo = async () => {
    try {
        let nextPageToken = "";
        let allVideos = [];

        while (true) {
            const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&key=${apiKey}&maxResults=50&pageToken=${nextPageToken}`;

            const searchResponse = await axios.get(searchUrl);
            const searchData = searchResponse.data;

            const videoIds = searchData.items.map((item) => item.id.videoId).join(",");

            if (videoIds) {
                const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${apiKey}`;
                const videosResponse = await axios.get(videosUrl);
                const videosData = videosResponse.data;

                videosData.items.forEach((video) => {
                    const snippet = video.snippet;
                    const statistics = video.statistics || {};

                    allVideos.push({
                        videoId: video.id,
                        Title: snippet.title,
                        Description: snippet.description,
                        "Published At": snippet.publishedAt,
                        Views: statistics.viewCount ? parseInt(statistics.viewCount) : 0,
                        Likes: statistics.likeCount ? parseInt(statistics.likeCount) : 0,
                        "Comments Count": statistics.commentCount ? parseInt(statistics.commentCount) : 0,
                        Thumbnail: snippet.thumbnails.high.url,
                    });
                });
            }

            nextPageToken = searchData.nextPageToken || "";
            if (!nextPageToken) {
                break;
            }
        }

        return allVideos;
    } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        return [];
    }
};
