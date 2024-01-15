const express = require("express");
const body = require("body-parser");

const loginRouter = require("./routes/login");
const messageRouter = require("./routes/message");

const app = express();

app.use(body.urlencoded({ extended: false }));

app.use(loginRouter);
app.use(messageRouter);


app.listen(3300);