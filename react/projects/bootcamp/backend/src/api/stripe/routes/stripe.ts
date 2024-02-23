export default {
  routes: [
    {
      method: "GET",
      path: "/stripe/getcharges",
      handler: "stripe.retrieveChargesByCustomerMail",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/stripe/webhook",
      handler: "stripe.listenToWebhook",
      config: {
        policies: [],
      },
    },
  ],
};
