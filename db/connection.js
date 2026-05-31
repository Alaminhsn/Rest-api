const mongoose = require("mongoose");

const uri = "mongodb+srv://alamin:12345@rest-api.cdnmu0n.mongodb.net/rest-api";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
        return conn;
    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;