/**
 * A set of functions called "actions" for `unsunscribe`
 */

export default {
  unsubscribe: async (ctx: any) => {
    const { bootcampId, userId } = ctx.request.body;
    const { user } = ctx.state;
    console.log(user);
    try {
      const bootcamp = await strapi.entityService.findOne("api::bootcamp.bootcamp",  bootcampId, {
        populate: ["entrants"]
      })
      const entrant = bootcamp.entrants.find((entrant) => entrant.id === userId);
      if (entrant) {
        await strapi.entityService.update("api::bootcamp.bootcamp", bootcampId, {
            data: {
              Iscrizioni: bootcamp.Iscrizioni - 1,
              entrants: {
                disconnect: [{id: userId}],
              }
            }
          })
        return ctx.send({ message: `You have been unsubscribed from ${bootcamp.Title}` });
      }
      return ctx.badRequest(`You are not subscribed to ${bootcamp.Title}`);
    } catch (err) {
      return ctx.badRequest(err);
    }
  }
};
