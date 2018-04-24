'use strict';

/**
 * Batch.js controller
 *
 * @description: A set of functions called "actions" for managing `Batch`.
 */

module.exports = {

  /**
   * Retrieve batch records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.batch.fetchAll(ctx.query);
  },

  /**
   * Retrieve a batch record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.batch.fetch(ctx.params);
  },

  /**
   * Create a/an batch record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.batch.add(ctx.request.body);
  },

  /**
   * Update a/an batch record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.batch.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an batch record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.batch.remove(ctx.params);
  }
};
