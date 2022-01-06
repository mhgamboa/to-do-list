# Order

Just a future reference whenever I build REST APIs in the future

1. Backend
   1. npm init -y
      1. `npm i dotenv express mongoose express-async-errors`
      2. `npm i nodemon -D`
      3. scripts: {"devstart": nodemon app.js}
   2. app.js
      1. create server.
      2. `require('express-async-errors')` (Very top of file)
      3. `app.use(express.json()) ` `require('dotenv').config()` const start = async ()=>{await ConnectDB}
      4. . require all security features (rate-limiter)
   3. .env port and URI
   4. Create root/db/connect.js -> import to app.js
   5. Set up routes
      1. Design route tree - What are all the possible requests the user can make? Decide which route should handle each request
      2. import routers into app.js to handle routes -> app.use("/api/v1/auth", authRouter); (Do for all routes)
      3. set up routes folder & files root/routes/auth.js
   6. root/models -> Design the Schemas/document layout. What will each document look like?
   7. Controllers
      1. `npm i http-status-codes jsonwebtoken bcryptjs`
      2. Create user Auth/User controllers first for registration and login
         1. Hash passwords with bcrypt. `UserSchema.pre('save', async function () {const salt await bcrypt.genSalt(10); this.password = await bcrypt.hash(this.password, salt)})`
         2. Add `UserSchema.methods.createJWT` -> Implement into both Register and login controllers
         3. Create JWT middleware to properly parse the tokens -> `app.use("/api/v1/auth", require("./routes/authentication"));`
      3. In each route file:
         1. create fully functioning controllers for each route
         2. After creating functionality, try to break your code by sending bad requests that won't work
   8. Implement security features
      1. `npm i helmet cors xss-clean express-rate-limit`
      2. `app.set("trust proxy", 1);`
      3. `app.use(rateLimiter({`
         1. `windowMs: 15 * 60 * 1000, // 15 minutes`
         2. `max: 100, // limit each IP to 100 requests per windowMs`
         3. `}));`
      4. `app.use(express.json());`
      5. `app.use(helmet());`
      6. `app.use(cors());`
      7. `app.use(xss());`
2. Frontend
   1. In root -> `npx create-react-app app-name`
   2. `npm i concurrently`
   3. package.json:
      1. `"scripts": {"client": "cd client && npm start"}` to run client
      2. `"dev": "concurrently --kill-others -n 'server,client' -c 'yellow,blue' \"npm run server\" \"npm run client\""` to run client and server at the same time
   4. `cd client`
      1. `npm i react-router-dom` -> [Follow Documentation on Setup](https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app)
      2. `npm i react-bootstrap` or whatever library you want
      3. update package.json: `"proxy": "https://localhost:xxxx/"`
   5. Design component tree. Build basic structure
   6. Create Front end design for each component
   7. Use Axios to login to backend where needed
3. Deploy

```
// to serve production build. This goes in your server app.js
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
```
