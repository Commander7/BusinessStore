import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log("MongoDb is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MongoDB_URL || "", {
            dbName: "Businessstore"
        })
        isConnected= true;
        console.log("MongoDB is connected");
    } catch (err) {
        console.log(err);
    }
}