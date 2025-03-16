import React from "react";

const Video = ({ video }) => {
    return (
        <div key={video.videoId} className="bg-white shadow-lg rounded-lg p-4">
            <img src={video.Thumbnail} alt={video.Title} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{video.Title}</h3>
            <p className="text-gray-600 text-sm">
                Published: {new Date(video["Published At"]).toDateString()}
            </p>
            <p className="text-gray-800 mt-2 text-sm">{video.Description.slice(0, 80)}...</p>
            <div className="mt-2 text-gray-700 text-sm">
                <p>👀 {video.Views} Views</p>
                <p>👍 {video.Likes} Likes</p>
                <p>💬 {video["Comments Count"]} Comments</p>
            </div>
            <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-blue-500 font-semibold"
            >
                Watch Video →
            </a>
        </div>
    );
};

export default Video;
