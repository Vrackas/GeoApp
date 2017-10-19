(function () {
    'use strict';
    angular
        .module('app')
        .config(mainConfig);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicLoadingConfig', '$ionicConfigProvider', '$mdGestureProvider'];

    /**
     * Function for configurate angular app
     */
    function mainConfig($stateProvider, $urlRouterProvider, $ionicLoadingConfig,$ionicConfigProvider,$mdGestureProvider) {

        // $ionicConfigProvider.views.maxCache(0);
        // $ionicConfigProvider.backButton.text('');
        // $ionicConfigProvider.views.swipeBackEnabled(false);
        $mdGestureProvider.skipClickHijack();

        $urlRouterProvider.otherwise('/login');
        /**
         * Configuring ionic loader
         */
        angular.extend($ionicLoadingConfig, {
            noBackdrop: true
        });


//            $ionicCloudProvider.init({
//                "core":{
//                    "app_id":"abb405b0"
//                },
//                "push": {
//                    "sender_id": "441975417143",
//                    "pluginConfig": {
//                        "android": {
//                            "iconColor": "#343434"
//                        }
//                    }
//                }
//            }) ;

        /**
         * Configuring state provider
         */
        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login/login.html',
                controller: 'Login',
                controllerAs: 'vm'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'templates/register/register.html',
                controller: 'Register',
                controllerAs: 'vm'
            })
            .state('password_recovery', {
                url: '/password_recovery',
                templateUrl: 'templates/password_recovery/password_recovery.html',
                controller: 'Password_recovery',
                controllerAs: 'vm'
            })
            .state('menu_courier', {
                url: '/menu_courier',
                templateUrl: 'templates/menu_courier/menu_courier.html',
                controller: 'Menu_courier',
                controllerAs: 'vm'
            })
            .state('menu_operator', {
                url: '/menu_operator',
                templateUrl: 'templates/menu_operator/menu_operator.html',
                controller: 'Menu_operator'
                // controllerAs: 'vm'
            })
            .state('courier_contact', {
                url: '/courier_contact',
                templateUrl: 'templates/courier_contact/courier_contact.html',
                controller: 'Courier_contact',
                controllerAs: 'vm'
            })
            .state('menu_operator.couriers_list', {
                url: '/couriers_list',
                templateUrl: 'templates/couriers_list/couriers_list.html',
                controller: 'Couriers_list as vm',
                resolve: {
                    list: function (UserService) {
                        return UserService.getCurriersList().then(function (res) {
                            return res;
                        });
                    }
                }
            })
            .state('menu_operator.workers_list', {
                url: '/workers_list',
                templateUrl: 'templates/workers_list/workers_list.html',
                controller: 'Workers_list as vm',
                resolve: {
                    workerList: function (UserService) {
                        return UserService.getWorkerList().then(function (res) {
                            return res;
                        });
                    }
                }
            })
            .state('menu_operator.geolocation', {
                url: '/geolocation',
                templateUrl: 'templates/geolocation/geolocation.html',
                controller: 'GeolocationController',
                controllerAs: 'vm',
                resolve: {
                    markerList: function (UserService) {
                        return UserService.getAllLocation().then(function (res) {
                            return res;
                        });
                    }
                }
            })
            .state('chat_user', {
                url: '/chat_user/?user_id&senderName&roomId&numberPhone',
                templateUrl: 'templates/chat_user/chat_user.html',
                controller: 'Chat_user as vm',
                resolve: {
                    // getMessages: [
                    //     'chat',
                    //     '$stateParams',
                    //     'chatFirebase',
                    //     function (chat) {
                    //         return chat.getRoom()
                    //             .then(function (res) {
                    //                 return res;
                    //             })
                    //     }],
                    // comments: ['chatFirebase', '$stateParams',
                    //     function (chatFirebase, $stateParams) {
                    //         chatFirebase.updateComment($stateParams);
                    //     }]
                }
                //controllerAs: 'vm'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'templates/profile/profile.html',
                controller: 'Profile as vm',
                //controllerAs: 'vm'
                resolve: {
                    userInfo: function (UserService) {
                        return UserService.getUserInfo().then(function (res) {
                            return res;
                            // console.log(res);

                        });
                    }
                }

            })
            .state('profile_for_list', {
                url: '/profile_for_list/?id',
                templateUrl: 'templates/profile_for_list/profile_for_list.html',
                controller: 'ProfileForList as vm',
                //controllerAs: 'vm'
                resolve: {
                    profileInfo: function (UserService, $stateParams) {
                        return UserService.getProfileInfo($stateParams).then(function (res) {
                            return res;
                            // console.log(res);

                        });
                    }
                }


            })
            .state('courier_list_add', {
                url: '/courier_list_add',
                templateUrl: 'templates/courier_list_add/courier_list_add.html',
                controller: 'Courier_list_add as vm',
                resolve: {
                    allList: function (UserService) {
                        return UserService.getCourierListAll().then(function (res) {
                            return res;

                        });
                    }
                }
            })
            .state('courier_list_delete', {
                url: '/courier_list_delete',
                templateUrl: 'templates/courier_list_delete/courier_list_delete.html',
                controller: 'Courier_list_delete as vm',
                resolve: {
                    deleteList: function (UserService) {
                        return UserService.getCurriersList().then(function (res) {
                            return res;

                        });
                    }
                }
            })
            .state('notifications', {
                url: '/notifications',
                templateUrl: 'templates/notifications/notifications.html',
                controller: 'Notifications as vm',
                // controllerAs: 'vm'
            })

        ;

    }

})();

