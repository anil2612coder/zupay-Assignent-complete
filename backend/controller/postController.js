import Post from "../modes/createPostModel.js";



// create one post
export const postBlog = async (req,res)=>{
    try {
        const {title, discription, author} = req.body

        const newPost =  new Post({title,discription,author})
        await newPost.save();
        console.log(newPost)
        res.status(201).json({
            
            title:newPost.title,
            discription:newPost.discription,
            author:newPost.author
         })
        
    } catch (error) {
        console.log("Error in create Post Blog controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}

//  get all post
export const getAllBlogs = async (req,res)=>{
    try {
        

        const allBlogs = await Post.find({}).sort({ createdAt: -1 })
        console.log(allBlogs)
        res.status(201).json(allBlogs)
        
    } catch (error) {
        console.log("Error in get all  Blog controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}


// get one post
export const deleteOnePost = async (req,res)=>{
    try {
        const {id} = req.params

        const onePost = await Post.deleteOne({_id:id})
       
        console.log(onePost)
        res.status(201).json(onePost)
        
    } catch (error) {
        console.log("Error in delete one  Blog controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}


//find one post
export const getOneBlog = async (req,res)=>{
    try {
        const {id} = req.params

        const onePost = await Post.find({_id:id})
        ;
        console.log(onePost)
        res.status(201).json(onePost)
        
    } catch (error) {
        console.log("Error in get one  Blog controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}
//update post
export const updateOneBlog = async (req,res)=>{
    try {
        const {id} = req.params
        const data = req.body;

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            data,
            { new: true, runValidators: true }
          );
        
        console.log(updatedPost)
        res.status(201).json(updatedPost)
        
    } catch (error) {
        console.log("Error in update one  Blog controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}