import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://nikki:iloveyoumorethenyou@cluster0.1i7q8.mongodb.net//food-del').then(()=>console.log("DB Connected"));
   
}
