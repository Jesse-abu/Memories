import mongoose from 'mongoose';
import pMsg from "../models/pMessage.js";


export const getPosts = async (req, res) => {

    try { 
        const posMessage = await pMsg.find();

        res.status(200).json(posMessage);

    } catch (error) {
        res.status(404).json({ message : 'error' })
    }
}

export const createPost = async (req, res) => {
    const postbody = req.body;
    const posMessage = new pMsg(postbody)
    try {
        await posMessage.save()
        
        res.status(200).json(newpost)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await pMsg.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await pMsg.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await pMsg.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await pMsg.findById(id);

    const updatedPost = await pMsg.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}
