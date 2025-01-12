import mongoose from "mongoose";

const connectDB = async ()=>{


    mongoose.connection.on('conected', ()=>console.log("Database Connected"))


    await mongoose.connect(`${process.env.MONGODB_URI}/Authentication-system`)
}

export default connectDB;