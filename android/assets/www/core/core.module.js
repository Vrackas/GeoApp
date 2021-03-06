/**
 * Module for connect all core modules
 */
(function () {
    'use strict';
    angular
        .module('app.core', [
            /*
             * Angular modules
             */
            'ngStorage',
            'ngMaterial',
            'ngCordova',
            'ngAria',
            'ngMap',
            'angularMoment',
            'ui.mask',
            'toastr',

            /*
             * Our reusable cross app code modules
             */

            /*
             * 3rd Party modules
             */
            'ionic.closePopup',
            'ionic'
        ])
})();
