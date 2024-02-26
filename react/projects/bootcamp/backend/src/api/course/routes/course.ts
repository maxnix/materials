/**
 * course router
 */

import { factories } from '@strapi/strapi';
const defaultRouter = factories.createCoreRouter('api::course.course');

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
    path: "/courses/unsubscribe",
    handler: "api::course.course.unsubscribe",
  },
];

export default customRouter(defaultRouter, myExtraRoutes);
