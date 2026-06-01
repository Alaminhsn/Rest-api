const express = require("express");
require("dotenv").config();

const app = express();
const connectDB = require("./db/connection")

const  PORT = process.env.PORT  ||  3000;
 
const products_routes = require("./routes/products");

app.get("/", (req, res ) => {
    res.send("Hi i am server");
});

app.use("/api/products",products_routes);

const handle = async() =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} is running in the localhost`);
        });
    }
    catch(error){
        console.error(error);
    }
};

handle();