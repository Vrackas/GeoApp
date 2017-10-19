// ;(function () {
//     'use strict';
//
//
//     angular
//         .module('app')
//         .controller('Geolocation', ['$geolocation', '$scope', 'UserService','ngMap', '$rootScope', '$timeout',
//             function ($geolocation, $scope, UserService,ngMap,
//                       $rootScope, $timeout) {
//             // $scope.Maps();
//             // $interval.
//             $geolocation.getCurrentPosition({
//                 timeout: 60000
//
//             }).then(function (position) {
//                 $scope.myPosition = position;
//                 debugger
//                 console.log($scope.myPosition);
//
//                 $scope.userLocation = {
//                     latitude: $scope.myPosition.coords.latitude,
//                     longitude: $scope.myPosition.coords.longitude
//
//                 };
// // var center
//                 // $scope.Maps();
//
//
//                 // console.log($localStorage.auth_key)
//
//
//
//
//
//             // $scope.userLocation = {
//             //     latitude: $scope.myPosition.coords.latitude,
//             //     longitude: $scope.myPosition.coords.longitude
//             //
//             // };
//             $scope.SendGeolocation = function (myPosition) {
//                 // console.log($scope.myPosition);
//                 UserService.SendLocation($scope.userLocation)
//                     .then(function (res) {
//                         $rootScope.locationLog = res;
//                         // console.log($rootScope.locationLog);
//
//                     });
//             };
//             // $scope.Maps = function (userLocation) {
//             //
//             //
//             //     $scope.map;
//             //     $scope.markers = [];
//             //     $scope.markerId = 1;
//             //
//             //     //Map initialization
//             //     $timeout(function () {
//             //
//             //         // var latlng = new google.maps.LatLng(49.586210099999995, 34.546974899999995);
//             //         // console.log($scope.userLocation);
//             //
//             //         var latlng = new google.maps.LatLng($scope.userLocation.latitude, $scope.userLocation.longitude);
//             //         var myOptions = {
//             //             zoom: 18,
//             //             center: latlng,
//             //             mapTypeId: google.maps.MapTypeId.ROADMAP
//             //         };
//             //         var markers = new google.maps.Marker({
//             //             position: latlng,
//             //             map: $scope.map
//             //             // title:'123'
//             //         });
//             //         $scope.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
//             //
//             //     }, 100);
//             // }
//             // // $scope.SendGeolocation();
//             // $scope.Maps();
//
//             NgMap.getMap().then(function (map) {
//                 debugger
//                 google.maps.event.trigger(map, "resize");
//                 console.log('markers', map.markers);
//                 console.log('shapes', map.shapes);
//             });
//
//
//
//
//         }]);
// })();

;(function () {
    'use strict';
    angular.module('app')
        .controller('Geolocation',Geolocation);

    Geolocation.$inject=['ngMap'];

    function Geolocation(ngMap) {
        var vm = this;
        // NgMap.getMap().then(function (map) {
        //         debugger
        //         // google.maps.event.trigger(map, "resize");
        //         // console.log('markers', map.markers);
        //         // console.log('shapes', map.shapes);
        //     });
    }
})();