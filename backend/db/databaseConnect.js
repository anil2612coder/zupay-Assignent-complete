import mongoose from "mongoose";

 const connectToMongodb = async ()=>{
    try {
      await  mongoose.connect(process.env.MONGODB_URL)
      console.log("connnect to mongodb")
    } catch (error) {
        console.log(`Error in connecting to mongodb ${error.message}`)
    }
}

export default connectToMongodb;