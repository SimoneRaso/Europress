const express = require("express");
var cors = require('cors');
const app = express();
const PORT =  3001;

app.use(express.json());
app.use(cors())

const db = require('./models');

//Routers
const requestRouter = require('./routes/Requests');
app.use("/requests",requestRouter);
const projectRouter = require('./routes/Projects');
app.use("/projects",projectRouter);
const usersRouter = require('./routes/Users');
app.use("/auth",usersRouter);

db.sequelize.sync().then((req) => {
    app.listen(PORT,()=>{
        console.log("Server is running on port",PORT,"...");
    })
});


