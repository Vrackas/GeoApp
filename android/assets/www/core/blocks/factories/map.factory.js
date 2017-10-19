;(function () {
    'use strict';

    angular
        .module('factory.map', [])
        .factory('factoryMap', function (NgMap, servicesGeo, $sce) {
            return {
                setCurrentUser: setCurrentUser,
                getCurrentUser: getCurrentUser,
                getMap: getMap
            };

            var currentUser = {};

            function getMap(list) {
                var marker, infowindow, center;

                NgMap.getMap().then(function (map) {

                    center = currentUser ?
                        {
                            lat: parseFloat(currentUser.lat),
                            lng: parseFloat(currentUser.lng)
                        } :
                        {
                            lat: parseFloat(servicesGeo.userLocation.lat),
                            lng: parseFloat(servicesGeo.userLocation.lng)
                        };

                    map.setCenter(center);

                    list.map(function (item) {
                        marker = new google.maps.Marker({
                            position: {
                                lat: parseFloat(item.lat),
                                lng: parseFloat(item.lng)
                            },
                            title: item.username,
                            map: map
                        });

                        setInfoWindowForMarker(item.username, item.email, item.phone, item.card, item.role, marker);
                    });

                    function setInfoWindowForMarker(username, email, phone, card, role, m) {
                        infowindow = new google.maps.InfoWindow({
                            content: '<div id="content"><div></div>' + username + '</div><br><div>Email: ' + email + '</div><br><div>Phone: ' + phone + '</div><br><div>Card Number: ' + card + '</div><br></div>'
                            // <div>Your Status: ' + if(role == 6){'Worker'}if(role == 4){'Courier'} + '</div>
                        });

                        createMarkerListener(m, infowindow);
                    }

                    function createMarkerListener(m, infowindow) {
                        m.addListener('click', function () {
                            infowindow.open(map, m);
                        });
                    }


                    console.log(servicesGeo.userLocation, list);
                    // function (UserService) {
                    //     return UserService.getCurriersList().then(function (res) {
                    //         return res;
                    //
                    //     });
                });
            }

            function setCurrentUser(data) {
                currentUser = data;
            }

            function getCurrentUser() {
                return currentUser;
            }
        });
})();