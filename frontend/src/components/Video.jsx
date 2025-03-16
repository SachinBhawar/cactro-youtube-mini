import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const Video = ({ video }) => {
    const [comments, setComments] = useState(video.comments || []);
    const [newComment, setNewComment] = useState("");

    const addComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    const deleteComment = (index) => {
        setComments(comments.filter((_, i) => i !== index));
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            {/* <img src={video.Thumbnail} alt={video.Title} className="w-full h-40 object-cover rounded" /> */}
            <VideoPlayer videoUrl={`https://www.youtube.com/embed/${video.videoId}`} />
            <h3 className="text-lg font-semibold mt-2 text-gray-900">{video.Title}</h3>
            <p className="text-gray-600 text-sm">
                Published: {new Date(video["Published At"]).toDateString()}
            </p>
            <p className="text-gray-800 mt-2 text-sm">{video.Description.slice(0, 80)}...</p>
            <div className="mt-2 text-gray-700 text-sm">
                <p>👀 {video.Views} Views</p>
                <p>👍 {video.Likes} Likes</p>
                <p>💬 {comments.length} Comments</p>
            </div>

            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full p-2 border rounded"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                    className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    onClick={addComment}
                >
                    Add Comment
                </button>
            </div>
            <ul className="mt-3">
                {comments.map((comment, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center bg-gray-100 p-2 rounded mt-2"
                    >
                        <span>{comment}</span>
                        <button
                            className="text-red-500 hover:text-red-700 hover:cursor-pointer"
                            onClick={() => deleteComment(index)}
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Video;
