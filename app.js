require("express-async-errors");

const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8090;
const connectDB = require("./db/connect");

// middleware
app.use(express.json());

// routes
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/items", require("./routes/items"));

// start app
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, (req, res) => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
