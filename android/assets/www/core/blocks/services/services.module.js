/**
 * Module for connect services
 */
;(function () {
  'use strict';
  angular
    .module('services.module', [
        // 'model.user',
        'services.geo',
        'app.user',
        'services.chat_firebase',
        'services.chat'

    ])
})();

