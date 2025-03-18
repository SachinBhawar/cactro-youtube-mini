import React from "react";

const VideoPlayer = ({ videoUrl }) => {
    if (!videoUrl) return <p>Please provide a YouTube video link.</p>;

    // Extract video ID from the URL
    const videoId = videoUrl.split("v=")[1]?.split("&")[0] || videoUrl.split("/").pop();
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-container">
            <iframe
                width="100%"
                height="250px"
                src={embedUrl}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};
export default VideoPlayer;
