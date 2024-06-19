const express = require("express");
const notFoundMiddleWare = require("./middlewares/not-found");
const app = express();


const port = 8000;

app.use(notFoundMiddleWare);
app.listen(port, () => console.log("server is running in port ", port));
