'use strict';

/**
 * intro-header service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::intro-header.intro-header');
