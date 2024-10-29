import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nikki:iloveyoumorethenyou@cluster0.1i7q8.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log("DB Connected"))
        .catch((error) => console.log("Connection error:", error));
}
