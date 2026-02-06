const express = require("express");
const router = require("./routes");
const dbConexion = require("./config/mongoose");

require("dotenv").config();

dbConexion();
const app = express();
const APP_PORT = process.env.APP_PORT;

app.use(express.json());
//app.use(express.urlencoded({extended: true}));
app.use("/api", router);

app.get("/", (req, res) =>{
    res.send("Hello world!")
})

app.listen(APP_PORT, ()=>{
    console.log(`server running on port ${APP_PORT}`);
})