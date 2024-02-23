/**
 * A set of functions called "actions" for `stripe`
 */

import { EntityService } from "@strapi/strapi";
import Stripe from "stripe";
const unparsed = Symbol.for("unparsedBody");

type Context = {
  request: {
    href: string;
  };
};
const stripe = new Stripe(process.env.STRIPE_SK);
export default {
  retrieveChargesByCustomerMail: async (ctx: Context) => {
    const url = new URL(ctx.request.href);
    const email = url.searchParams.get("email");
    try {
      const charges = await stripe.charges.list({
        limit: 10,
      });
      return charges.data.filter(
        (charge) => charge.billing_details.email === email
      );
    } catch (err) {
      return err;
    }
  },
  listenToWebhook: async (ctx: any) => {
    const unparsedBody = ctx.request.body[unparsed];
    const signature = ctx.request.headers["stripe-signature"];
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        unparsedBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      return ctx.badRequest(`Webhook Error: ${err.message}`);
    }
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        console.log("Session", session);
            const checkoutSession = await stripe.checkout.sessions.retrieve(session.id, {
            expand: ["line_items"],
          });
          const listItem = checkoutSession.line_items.data[0];
          const productId = listItem.price.product;
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  },
};
