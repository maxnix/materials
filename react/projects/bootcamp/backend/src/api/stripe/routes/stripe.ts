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
  ],
};
