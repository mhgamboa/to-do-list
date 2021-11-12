# to-do-list

- I made this as a mern stack app, but can't deploy it as of now. I'm attempting to do it as EJS as well. Perhaps I will attempt NextJS afterwards

## Mern Attempt

- Trying to make my first fullstack project. WISH ME LUCK.

### Takeaways

- The [MongoClient](https://mongodb.github.io/node-mongodb-native/4.1/classes/MongoClient.html) is a class instantiated from `mongodb.MongoClient`. It is what you use to intereact with your Mongo Database in anyway
- You can connect your MongeClient to your cluster with `MongoClient.connect()`, which returns a promise. [Connect](https://mongodb.github.io/node-mongodb-native/4.1/classes/MongoClient.html#connect) simply connects your app to your cluster. Example:

```
const client = new MongoClient(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  const database = client.db("dbName");
  const collection = database.collection("collectionName");

  client.close();
});
```

- When your done with your connection you'll want to run `client.close()` to close the connection
- `app.use(express.json())` Parses the data sent in a post request

**MAKING REQUESTS FROM FRONTEND TO BACKEND**

- In `client`folder run `npm i axios`
- create a file `src/http-common.js`. Put the following code in this file:

```
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000", //Put whatever your server port number is
  header: {
    "Content-type": "application/json",
  },
});
```

- create a file `src/services/toDo.js`. Put the following code in this file:

```
import http from "../http-common.js";

class toDoDataService {
  getItems() {
    return http.get("/get/Route");
  }

  delteItems() {
    return http.delete("/delete/Route");
  }
}

export default new toDoDataService();
```

- In app.js put in the following code:

```
import ToDoService from "./services/toDo";
...
const [list, updateList] = useState([]);

const retrieveToDos = () => {
  ToDoService.getItems().then((response) => {
    updateList(response.data);
  }).catch(err => console.error(err));
};
```

## John Smilga

Here are the list of all requests we want to make:

1.  Get all tasks `app.get("/api/v1/tasks")`
2.  Create new task `app.get("/api/v1/tasks")`
3.  Get single task `app.get("/api/v1/tasks/:id")`
4.  Update single task `app.get("/api/v1/tasks/:id")`
5.  Delete single gask `app.get("/api/v1/tasks/:id")`

- The **routes folder** routes all of the requests. **This is imported into app.js**
- The **controllers folder** is the logic where routes send the requests to. **This is not imported into app.js**

- Use `put()` when you want to **update the entirety** of a document
- Use `patch()` when you want to **update part** of a document

- When you route to a path with a semi colone (Like `router.route("/:foo")`), the request object may contain anything in place of "foo". The content of foo will be available within the request object as a parameter with **req.params**.foo

- I am creating a REST api by creating all of these routes and controllers.
  > "[A Rest API] combines http verbs, route paths and our resources (the data). It is a pattern, not a list of hard rules"
- **REST apis send/recieve data in json format** by convention

- In mongoose the model is a wrapper for the schema. The schema defines the structure for the document. The model provides an interface to the database - the model allows us to CRUD data in the database
