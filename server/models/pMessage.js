import mongoose from 'mongoose';

const postInfo = mongoose.Schema(
    {
        title: String,
        message: String,
        creator: String,
        tags: [String],
        selectedFile: String,
        likeCount: {
            type: Number,
            default: 0,
        },
        createdAt: {
            type: Date,
            default: new Date(),
        },
    
    })


const pMsg = mongoose.model('PostMessage', postInfo)

export default pMsg;