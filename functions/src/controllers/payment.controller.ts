import Stripe from "stripe";
import { STRIPE_PRIVATE_KEY } from "../config";

const stripe = new Stripe(STRIPE_PRIVATE_KEY, { apiVersion: "2022-11-15" });

export const createSession = async (req: any, res: any) => {
  console.log('req::>', req.body)
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body,
      mode: "payment",
      success_url: "https://xochicallicommerce.com/successPayment",
      cancel_url: "https://xochicallicommerce.com/cart",
    });
    return res.json({ url: session.url });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
