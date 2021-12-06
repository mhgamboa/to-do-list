require("express-async-errors");

const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8090;
const connectDB = require("./db/connect");

// middleware
app.use(express.json());

// start app

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3001, (req, res) => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
})();
