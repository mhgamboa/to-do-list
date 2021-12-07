1. npm init -y
   1. `npm i dotenv express concurrently mongoose express-async-errors`
   2. `npm i nodemon -D`
   3. scripts: {"devstart": nodemon app.js}
2. app.js
   1. create server.
   2. `require('express-async-errors')` (Very top of file)
   3. `app.use(express.json) ` `require('dotenv').config()`
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
   2. Create placeholder functions in controllers folder and import them into routes.
   3. Add functionality to controllers one by one, ensuring they connect to the database
      1. Hash passwords with bcrypt. `UserSchema.pre('save', async function () {const salt await bcrypt.genSalt(10); this.password = await bcrypt.hash(this.password, salt)})`
      2. Sign JWT with auth controller/register model
