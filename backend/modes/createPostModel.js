import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true,
    },
},{timestamps:true})

const post = mongoose.model("Post", postSchema)
export default post