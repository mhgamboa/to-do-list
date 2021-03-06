require("dotenv").config();
require("express-async-errors");
const path = require("path");

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// swagger
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

// express, connectDB and port
const express = require("express");

const app = express();
const port = process.env.PORT || 8090;
const connectDB = require("./db/connect");

console.log(port);
// middleware
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// Serve production build
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Serve swagger documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// routes
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/items", require("./middleware/auth"), require("./routes/items"));

// more middleware after routes
app.use(require("./middleware/not-found")); // 404 middleware

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
