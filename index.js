const express = require("express");

const app = express();

const  PORT = process.env.PORT  ||  3000;
 
const products_routes = require("./routes/products");

app.get("/", (req, res ) => {
    res.send("Hi i am server");
});

app.use("/api/products",products_routes);

const handle = async() =>{
    try{
        app.listen(PORT,()=>{
            console.log(`${PORT} is running in the localhost`);
        });
    }
    catch(error){
        console.log("Error");
    }
};

handle();