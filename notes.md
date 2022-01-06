# Notes

Just simple notes/takeways from the project

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

## Heroku Steps

[Relevant article](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

1. `cd my-app`
2. Use a [Procfile](https://devcenter.heroku.com/articles/procfile) to explicitly declare what command should be executed to start your app
   - It must exist in the root of your app
   - It has no file extension
   - Syntax is `<process type>: <command>`. Example: `web: npm start`
   - The `web` process type is how you recieve external HTTP traffic
3. `heroku create unique-app-name` -> creates heroku app
4. `git push heroku main` -> deploys heroku app
5. `heroku ps:scale web=1` -> Ensures at leasont one instance of app is running
6. `heroku open` -> opens deployed app in browser
7. `heroku logs --tail` -> view running stream of logs. `control+c` to stop streaming the logs
8.
