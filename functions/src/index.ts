const {onRequest} = require("firebase-functions/v2/https");
const {setGlobalOptions} = require("firebase-functions/v2");
import express from "express";
import {PORT} from "./config.js";
import indexRoutes from "./routes/payment.routes";
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(indexRoutes);
setGlobalOptions({maxInstances: 10});
console.log("Server on port", PORT);


exports.app = onRequest(app);
