import React, { useState, useEffect } from "react";
import Video from "./components/Video";

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(`https://cactro-youtube-mini.onrender.com`);
                const res = await response.json();
                setVideos(res.data);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="container mx-auto p-5 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">YouTube Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {videos.map((video) => (
                    <Video video={video} key={video.videoId} />
                ))}
            </div>
        </div>
    );
};

export default VideoList;
