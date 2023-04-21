import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import './db/mongo.js';
import { routes } from './network/routers.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
// app.use('/', routes);
routes(app);

app.use(bodyParser.json({ type: "application/*+json" })); // parse various different custom JSON types as JSON
app.use(bodyParser.raw({ type: "application/vnd.custom-type" })); // parse some custom thing into a Buffer
app.use(bodyParser.text({ type: "text/html" })); // parse an HTML body into a string

const hostname = "localhost";

app.set("port", 3000);

// Init Server
app.listen(app.get("port"), error => {
  if (error) {
    console.error("Server failed to start");
  } else {
    console.log(`El servidor se está ejecutando en http://${hostname}:3000/`);
  }
});
