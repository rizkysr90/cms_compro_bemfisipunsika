'use strict';

/**
 * bph service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bph.bph');
