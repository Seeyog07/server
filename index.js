const express = require('express');
const app = express();
const multer = require('multer');
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With,Content-Type,Accept,Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
    next();
})


const db = require('./models');

//Routers
const postRouter = require('./route/Posts')
app.use("/posts",postRouter);                               
const commentsRouter = require('./route/Comments')
app.use("/comments",commentsRouter);
const usersRouter = require('./route/Users')
app.use("/auth",usersRouter);
const likesRouter = require('./route/Likes')
app.use("/likes",likesRouter);
const indexRouter = require('./route/index')
app.use("/user",indexRouter); 

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3001,() => {
        console.log("Server runs on port 3001");
    });
})
.catch((err) => {
    console.log(err);
})
