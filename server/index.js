const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const todosRouter = require("./routes/todos.route");
//env
require("dotenv").config();
const port = process.env.LOCAL_PORT;
const uri = process.env.DB_URI;

const app = express();

//middle wares
app.use(cors());
app.use(express.json());
app.use("/api/todos", todosRouter);

//connection to db
mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log("listing on port ", port);
    });
  })
  .catch((e) => {
    console.log(e);
  });
