const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
const http = require('http').createServer(app);

const port = process.env.PORT || "8000";

const usersRouter = require("./routers/users");

//  App Configuration
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

// Routes Definitions
app.use("/api/users", usersRouter);

// Server Activation
http.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});