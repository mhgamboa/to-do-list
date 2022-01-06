# To Do List

This is my first MERN stack api with complete REST api. You can view the project live at [mgamboa-to-do.herokuapp.com](https://mgamboa-to-do.herokuapp.com/). I was mainly focusing on the backend functionality, so the frontend will not be very polished.

## App Explanation

A very simple to-do app.

- You can create a new user by clicking "Register" on the navbar and filling out & submitting the form. This will create a new user in MongoDB Atlas.
  - **No password is directly saved in the DB** - passwords are only stored after being hashed by bcrypt.
- Upon signing in a [Json Webtoken](https://www.npmjs.com/package/jsonwebtoken) (JWT) is signed and sent to the client's browser where it is stored in the local storage.
  - Once logged in users can perform simple CRUD operations on their to-do items, which is verified through the JWT. The UI should be pretty intuitive.
- The web app connects to the DB using the [Mongoose](https://www.npmjs.com/package/mongoose) ODM.
- Deployed with [Heroku](https://heroku.com/). The `heroku-postbuild` script builds the client side after installing the client dependencies. The build is then served with Express.

## Documentation

- You can view the documentation at [mgamboa-to-do.herokuapp.com/api-docs](https://mgamboa-to-do.herokuapp.com/api-docs).
