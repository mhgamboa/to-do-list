const express = require("express");
const tasks = require("./routes/tasks");
const app = express();

const uri = process.env.URI;
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.send("Task Manger");
});

app.listen(port, () =>
  console.log(`Server is listening on port ${port} (http://localhost:8000/)`)
);
