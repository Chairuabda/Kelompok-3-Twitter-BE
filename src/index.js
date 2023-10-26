const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const path = require("path")
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
})

const PORT = process.env.PORT || 8000;

const app = new express();

app.use(parser.json());
app.use(
    cors({
        origin: [
            process.env.WHITELISTED_DOMAIN &&
            process.env.WHITELISTED_DOMAIN.split(" ")
        ],
    })
);
const twitterRouter = require("./Routes/twitterRoute");

app.use("/api/twitter", twitterRouter);

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})