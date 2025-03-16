import React, { useState, useEffect } from "react";
import Video from "./components/Video.jsx";

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(`http://localhost:5000/`);
                const res = await response.json();

                setVideos(res.data);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="container mx-auto p-5">
            <h2 className="text-2xl font-bold mb-5">YouTube Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {videos.map((video) => (
                    <Video video={video} key={video.title} />
                ))}
            </div>
        </div>
    );
};

export default VideoList;
