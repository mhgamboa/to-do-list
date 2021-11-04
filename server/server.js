const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

// Setup
require("dotenv").config();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// Required Middleware
const app = express();
app.use(cors());
app.use(express.json()); // Parses the data sent in a post request

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set Up Server
app.listen(port, () => {
  console.log(
    `Server is listening on port ${port}... (http://localhost:${port})`
  );
});

// Route Basic Route
app
  .route("/")
  .get((req, res) => {
    console.log("Get request received");

    (async () => {
      try {
        await client.connect();
        const collection = client.db("ToDo").collection("list");
        const result = await collection.find({}).toArray();
        items = result.map((item) => item.name);

        res.send(items);
      } catch (e) {
        console.error(e);
      } finally {
        await client.close();
      }
    })();
  })
  .post((req, res) => {
    console.log("Post request received");
    console.log("Req body being sent: ", req.body.name);
    res.send("Post");

    (async () => {
      try {
        await client.connect();
        const collection = client.db("ToDo").collection("list");
        await collection.insertOne({ name: req.body.name });
      } catch (e) {
        console.error(e);
      } finally {
        await client.close();
      }
    })();
  })
  .delete((req, res) => {
    console.log("Delete Req recieved");
    console.log(req.body.name);

    (async () => {
      try {
        await client.connect();
        const collection = client.db("ToDo").collection("list");
        const result = await collection.deleteOne({ name: req.body.name });
        console.log(result);

        res.send("Delete");
      } catch (e) {
        console.error(e);
      } finally {
        await client.close();
      }
    })();
  });
