/**
 * bootcamp router
 */

import { factories } from '@strapi/strapi';

const defaultRouter = factories.createCoreRouter('api::bootcamp.bootcamp');

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = extraRoutes.concat(innerRouter.routes)
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: "POST",
    path: "/bootcamps/unsubscribe",
    handler: "api::bootcamp.bootcamp.unsubscribe",
  },
];

export default customRouter(defaultRouter, myExtraRoutes);
