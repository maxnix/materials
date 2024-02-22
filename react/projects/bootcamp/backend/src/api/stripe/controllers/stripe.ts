/**
 * A set of functions called "actions" for `stripe`
 */

import Stripe from "stripe";

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
};
