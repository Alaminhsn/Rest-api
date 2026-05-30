const express = require("express");

const app = express();

const  PORT = process.env.PORT  ||  5000;
 
app.get("/", (req, res ) => {
    res.send("Hi i am server");
});

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