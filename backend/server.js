import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectToMongodb from "./db/databaseConnect.js"
const app = express()

import { deleteOnePost, getAllBlogs, getOneBlog, postBlog, updateOneBlog } from "./controller/postController.js"

dotenv.config()
const port = process.env.PORT || 5000


connectToMongodb()
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/posts",postBlog)
app.get("/posts",getAllBlogs) 
app.get("/posts/:id",getOneBlog) 
app.delete("/posts/:id",deleteOnePost) 
app.put("/posts/:id",updateOneBlog) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
