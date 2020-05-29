const express = require('express');
const racesRoutes = require("./races/racesRoute");
const server = express();
server.use('/races', racesRoutes); 

server.use("/", (req,  res) => {
    res.status(200).send("hello from express");
})
server.listen(8000, () => {
    console.log("magic happening on port 8000");
});