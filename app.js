import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";


//const DB_CONNECTION_STRING = "mongodb+srv://dg-cs5610:cs5610-07@dg-cs5610.hogizcq.mongodb.net/?retryWrites=true&w=majority";
//mongoose.connect(DB_CONNECTION_STRING);

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(express.json());
app.use(cors());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);