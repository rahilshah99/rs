require('dotenv').config()


const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const cors = require("cors");

//My Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const stateRoutes = require("./routes/state");
const cityRoutes = require("./routes/city");
const categoryRoutes = require("./routes/category");
const feedbackRoutes = require("./routes/feedback");

//Db Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });
//Middlewares
app.use(bodyparser.json());
app.use(cookieparser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", stateRoutes);
app.use("/api", cityRoutes);
app.use("/api", categoryRoutes);
app.use("/api", feedbackRoutes);

//Port
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
