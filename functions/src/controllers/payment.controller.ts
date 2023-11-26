import Stripe from "stripe";
import { STRIPE_PRIVATE_KEY } from "../config";

const stripe = new Stripe(STRIPE_PRIVATE_KEY, { apiVersion: '2022-11-15' });

export const createSession = async (req: any, res: any) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product_data: {
              name: "Laptop",
            },
            currency: "usd",
            unit_amount: 2000,
          },
          quantity: 3,
        },
        {
          price_data: {
            product_data: {
              name: "TV",
            },
            currency: "usd",
            unit_amount: 2000,
          },
          quantity: 2,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });
    console.log(session);
    return res.json({ url: session.url });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
