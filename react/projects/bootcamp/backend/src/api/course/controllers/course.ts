/**
 * course controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::course.course', ({strapi}) => ({
    unsubscribe: async (ctx: any) => {
    const { courseId, userId } = ctx.request.body;
    try {
      const course = await strapi.entityService.findOne("api::course.course",  courseId, {
        populate: ["students"]
      })
      const student = course.students.find((student) => student.id === userId);
      if (student) {
        await strapi.entityService.update("api::course.course", courseId, {
            data: {
              students: {
                disconnect: [{id: userId}],
              }
            }
          })
        return ctx.send({ message: `You have been unsubscribed from ${course.Title}` });
      }
      return ctx.badRequest(`You are not subscribed to ${course.Title}`);
    } catch (err) {
      return ctx.badRequest(err);
    }
  }
}));
