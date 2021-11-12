const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
const uri = process.env.MONGO_URI;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.send("Task Manger");
});

// Server/DB Connection

const start = async () => {
  try {
    await connectDB(uri);
    app.listen(port, () =>
      console.log(
        `Server is listening on port ${port} (http://localhost:8000/)`
      )
    );
  } catch (err) {
    console.error(err);
  }
};

start();
