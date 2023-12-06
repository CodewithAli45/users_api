# users_system_server

Project initiation  - "npm init -y"
    above will create "package.json" file which contains the dependencies and project handling command
    following are the dependencies used
        -nodemon ("for automatic running of project whenever there is change in the project")
        -express ("library of nodejs to create the server and smooth handling of the operations such CRUD operation from database")
        -mongoose ("a mongodb method to connect server and mongodb database and to create schema for the project")
        -bcrypt ("to hash the password before storing in the database for security reason")
        -jsonwebtoken ("after logged in we generate a token which will help in giving permission to perform routes")
        -cors ("it is cross origin resource service means it needed when client make request")
        -dotenv ("hiding private data from public")

Folder Structure
    config
        -app.js (to create server using express.js and run all routes)
        -db.js (to connected mongodb database using mongoose)
    index.js (main file and entry point of the project, inside it server will run)
    models
        -userModel.js (it contains schema of the users i.e. fullname, email, password, confirmpassword, phone, address)
    controllers
        -userController.js (it contains the controller function such register, login, logout, getusers)
    middleware
        isLoggedIn.js (to check if the user is logged in or not after verifying token)
    routes
        -userRoute.js (it contains all the routes of the api)
    utils 
        generateToken.js (generate token when user login)
        verifyToken.js (verify token for user authorization)
