import {config} from "dotenv";
config();

export const PORT = 5000;

export const STRIPE_PRIVATE_KEY:any = process.env.STRIPE_PRIVATE_KEY;
