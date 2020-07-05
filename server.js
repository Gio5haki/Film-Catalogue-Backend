const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const movieRouter = require("./routerComponents/route");


const app = express();
app.use(cors());
const port = 8080;


app.use(cors());
app.use(bodyParser.urlencoded());
app.use("/movie", movieRouter);


app.listen(port, () => {
    console.log("Server is up and running");
})