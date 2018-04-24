'use strict';

/**
 * Institution.js controller
 *
 * @description: A set of functions called "actions" for managing `Institution`.
 */

module.exports = {

  /**
   * Retrieve institution records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.institution.fetchAll(ctx.query);
  },

  /**
   * Retrieve a institution record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.institution.fetch(ctx.params);
  },

  /**
   * Create a/an institution record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.institution.add(ctx.request.body);
  },

  /**
   * Update a/an institution record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.institution.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an institution record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.institution.remove(ctx.params);
  }
};
