import mongoose from 'mongoose'

const connectDB = () => {
    mongoose.connect("mongodb+srv://raviguptaji97:ravi12345@cluster0.fhkj1jg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
        console.log("Connected to database");
    }).catch(() => {
        console.log("Error in connecting database");
    });
}

export default connectDB;
