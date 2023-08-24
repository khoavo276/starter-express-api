const express = require("express");
const app = express();

const proxy = require("html2canvas-proxy");
// var express = require("express");

// const app = express();
app.use("/", proxy());

// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo!')
// })
app.listen(process.env.PORT || 3000);
