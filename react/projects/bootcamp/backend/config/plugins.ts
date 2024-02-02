export default ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "hpv4learning@gmail.com",
        defaultReplyTo: "hpv4learning@gmail.com",
      },
    },
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
      // email: {
      //   config: {
      //     provider: "nodemailer",
      //     providerOptions: {
      //       host: env("SMTP_HOST"),
      //       port: env("SMTP_PORT"),
      //       auth: {
      //         user: env("SMTP_USERNAME"),
      //         pass: env("SMTP_PASSWORD"),
      //       },
      //       pool: true,
      //       logger: true,
      //       debug: true,
      //       maxConnections: 10000,
      //     },

      //     settings: {
      //       defaultFrom: env("DEFAULT_EMAIL"),
      //       defaultReplyTo: env("DEFAULT_EMAIL"),
      //     },
      //   },
      // },
    },
  },
  // ...
});
