;(function () {
    'use strict';
    angular
        .module('services.geo',[])
        .service('servicesGeo', function ($geolocation, UserService, $rootScope) {
            var vm = this;

            $geolocation.getCurrentPosition({
            }).then(function (position) {
                vm.myPosition = position;

                vm.userLocation = {
                    lat: vm.myPosition.coords.latitude,
                    lng: vm.myPosition.coords.longitude
            };
            });
            vm.SendGeolocation = function (myPosition) {
                console.log(vm.userLocation);
                UserService.SendLocation(vm.userLocation)
                    .then(function (res) {
                        vm.locationLog = res;
                        console.log(vm.locationLog);
                    });
            };
        })
})();