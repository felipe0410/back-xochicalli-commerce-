const { onRequest } = require('firebase-functions/v2/https');
import express from 'express';
import { PORT } from "./config.js";
import indexRoutes from "./routes/payment.routes";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(indexRoutes);
console.log("Server on port", PORT);

app.get('/',((req,res)=>res.send('hello')))

exports.app = onRequest(app);
exports.widgets = onRequest(app);
