'use strict';

/**
 * proker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::proker.proker');
