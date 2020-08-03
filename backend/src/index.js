require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const lastmiddleware = require("./middlewares/LastMiddleware");
const routenotfound = require("./middlewares/RouteNotFound");

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(routenotfound);
app.use(lastmiddleware);
module.exports = app;
