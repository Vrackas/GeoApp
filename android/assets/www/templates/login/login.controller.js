/**
 * Controller for login page
 */
;(function () {
    "use strict";

    angular
        .module('app')
        .controller('Login', Login);

    Login.$inject = ['$rootScope', '$state', 'UserService', '$scope', '$localStorage', '$ionicPlatform', 'toastr'];

    function Login($rootScope, $state, UserService, $scope, $localStorage, $ionicPlatform, toastr) {


        var vm = this;

        // vm.SendLogin = SendLogin;

       $scope.user = {
            phone: "",
            password: ""

        };


        $scope.SendLogin =function (user) {
        console.log($scope.user);
            UserService.SendUsername($scope.user)
                .then(function (res) {

                // Worker Log In

                if (res.user[0].role == 6) {
//                    toastr.info('You logged in as a worker. Please use the Worker App', 'Information');

                                            $localStorage.auth_key = res.user[0].auth_key;
                                            $state.go('menu_operator.couriers_list');

                  $localStorage.username = res.user[0].username;
                  $localStorage.id = res.user[0].id;

                  $rootScope.role = res.user[0].role;
                  $rootScope.user = res.user[0];

                  $rootScope.userLog = res;

                                             $ionicPlatform.ready(function () {
                                                            FCMPlugin.getToken(function (token) {
                                                                    alert('Token: ' + token);
                                                                    console.log('Token: ' + token);
                                                                },
                                                                function (err) {
                                                                    alert('error retrieving token: ' + token);
                                                                    console.log('error retrieving token: ' + err);
                                                                }
                                                            );
                                                            FCMPlugin.onNotification(function (data) {
                                                                    if (data.wasTapped) {
                                                                        alert("Tapped: " + JSON.stringify(data));
                                                                    } else {
                                                                        alert("Not tapped: " + JSON.stringify(data));
                                                                    }
                                                                },
                                                                function (msg) {
                                                                    alert('onNotification callback successfully registered: ' + msg);
                                                                    console.log('onNotification callback successfully registered: ' + msg);
                                                                },
                                                                function (err) {
                                                                    alert('Error registering onNotification callback: ' + err);
                                                                    console.log('Error registering onNotification callback: ' + err);
                                                                }
                                                            )
                                                        });

                }

                 // Courier Log In

                if (res.user[0].role == 4){
                toastr.info('You logged in as a courier. Please use the Courier App', 'Information');
//                $localStorage.auth_key = res.user[0].auth_key;
//                 $state.go('menu_operator.workers_list');
//
//
//                  $localStorage.username = res.user[0].username;
//                  $localStorage.id = res.user[0].id;
//
//                  $rootScope.role = res.user[0].role;
//                  $rootScope.user = res.user[0];
//
//                  $rootScope.userLog = res;
//
//                                         $ionicPlatform.ready(function () {
//                                                        FCMPlugin.getToken(function (token) {
//                                                                alert('Token: ' + token);
//                                                                console.log('Token: ' + token);
//                                                            },
//                                                            function (err) {
//                                                                alert('error retrieving token: ' + token);
//                                                                console.log('error retrieving token: ' + err);
//                                                            }
//                                                        );
//                                                        FCMPlugin.onNotification(function (data) {
//                                                                if (data.wasTapped) {
//                                                                    alert("Tapped: " + JSON.stringify(data));
//                                                                } else {
//                                                                    alert("Not tapped: " + JSON.stringify(data));
//                                                                }
//                                                            },
//                                                            function (msg) {
//                                                                alert('onNotification callback successfully registered: ' + msg);
//                                                                console.log('onNotification callback successfully registered: ' + msg);
//                                                            },
//                                                            function (err) {
//                                                                alert('Error registering onNotification callback: ' + err);
//                                                                console.log('Error registering onNotification callback: ' + err);
//                                                            }
//                                                        )
//                                                    });
//
//

                                    }





                })
        };
    }
})();
