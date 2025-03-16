import { getAllVideoDetailsRepo } from "../Repository/Repository.js";

export const getAllVideoDetails = async (req, res) => {
    try {
        const result = await getAllVideoDetailsRepo();
        return res.status(200).json({
            success: true,
            data: result,
            error: null,
            message: "Data of all videos fetched successfully.",
        });
    } catch (error) {
        console.error(error);
        return res.status(error.code).json({
            success: false,
            data: null,
            error: error.message,
            message: "Error Occured while fetching videos.",
        });
    }
};

export const getVideoDetails = async (req, res) => {
    const videoId = req.params.videoId;
    try {
        const result = await getAllVideoDetailsRepo();
        return res.status(200).json({
            success: true,
            data: result,
            error: null,
            message: "Video details fetched successfully.",
        });
    } catch (error) {
        // console.error(error);
        return res.status(error.code).json({
            success: false,
            data: null,
            error: error.message,
            message: "Error Occured while fetching details of the video.",
        });
    }
};

export const commentOnVideo = async (req, res) => {
    const comment = req.body.comment;
    try {
    } catch (error) {}
};

export const ChangeVideoTitle = async (req, res) => {
    const videoId = req.params.videoId;
    try {
    } catch (error) {}
};

export const deleteCommentOnVideo = async (req, res) => {
    const videoId = req.params.videoId;
    try {
    } catch (error) {}
};
