const express = require("express");
const notFoundMiddleWare = require("./middlewares/not-found");
const authController = require("./controllers/authController");
const app = express();


app.use("/register",authController)

app.use(notFoundMiddleWare);

const port = 8000;
app.listen(port, () => console.log("server is running in port ", port));
