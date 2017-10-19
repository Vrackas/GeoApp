;(function () {

    'use strict';

    angular.module('app')
        .controller('GeolocationController', GeolocationController);
    GeolocationController.$inject = ['$geolocation', 'factoryMap', 'markerList'];
    /**
     *
     * @param NgMap
     * @param $geolocation
     * @constructor
     */
    function GeolocationController($geolocation, factoryMap, markerList) {
        var vm = this;

        factoryMap.getMap(markerList);

        /**
         *
         * @param center
         */

    }
})();