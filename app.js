require("express-async-errors");

const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8090;
const connectDB = require("./db/connect");

// middleware
app.use(express.json());

// routes
const authRouter = require("./routes/auth");
const itemsRouter = require("./routes/items");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/items", itemsRouter);
app.get("/", (req, res) => {
  console.log(req);
  res.send("root");
  res.end();
});

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
