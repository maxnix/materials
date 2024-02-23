/**
 * A set of functions called "actions" for `stripe`
 */

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
        const checkoutSession = await stripe.checkout.sessions.retrieve(
          session.id,
          {
            expand: ["line_items"],
          }
        );
        const listItem = checkoutSession.line_items.data[0];
        const productId = listItem.price.product;
        const userMail = checkoutSession.customer_details.email;
        try {
          const user = await strapi.db.query("plugin::users-permissions.user").findOne({
            where: { email: userMail },
            select: ["id"],
          });
          const product = await strapi.db.query("api::bootcamp.bootcamp").findOne({
            where: {
              Product: {
                product_id: productId,
              },
            },
            populate: ["Product", "entrants"],
          });
          await strapi.entityService.update("api::bootcamp.bootcamp", product.id, {
            data: {
              Iscrizioni: product.Iscrizioni + 1,
              entrants: {
                connect: [{id: user.id}],
              }
            }
          })
        } catch (error:any) {
          
          console.error(error?.details?.errors);
        }

        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  },
};
