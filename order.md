1. npm init -y
   1. npm i dotenv express concurrently mongoose express-async-errors
   2. npm i nodemon -D
   3. scripts: {"devstart": nodemon app.js}
2. app.js
   1. create server.
   2. `require('express-async-errors')` (Very top of file)
   3. `app.use(express.json) ` `require('dotenv').config()`
   4. . require all security features (rate-limiter)
3. .env port and URI
4. root/db/connect.js -> import to app.js
