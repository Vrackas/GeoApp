;(function () {
    'use strict';

    angular
        .module('app.user', [])
        .service('UserService', [
            'http',
            'url',
            function (http, url) {
                return {
                    SendUsername: SendUsername,
                    SendLocation: SendLocation,
                    SendAutologin: SendAutologin,
                    getCurriersList: getCurriersList,
                    getCourierListAll:  getCourierListAll,
                    getAllLocation: getAllLocation,
                    getUserInfo: getUserInfo,
                    getProfileInfo: getProfileInfo,
                    getAddCourier: getAddCourier,
                    getDeleteCourier: getDeleteCourier,
                    getRoom: getRoom,
                    getWorkerList: getWorkerList
                };
                function SendUsername(data) {
                    return http.post(url.user.GetUsername, data)
                        .then(function (res) {
                            return res;
                        });
                }

                function SendLocation(data) {
                    return http.post(url.user.GetLocation, data)
                        .then(function (res) {
                            return res;

                        });
                }

                function SendAutologin(data) {
                    return http.get(url.user.GetAutologin, data)
                        .then(function (res) {
                            return res;

                        });
                }

                function getCurriersList(data) {
                    return http.get(url.user.GetCourierList, data)
                    .then(function (res) {
                        return res;
                    });
                }
                function getCourierListAll (data) {
                    return http.get(url.user.GetCourierListAll, data)
                        .then(function (res) {
                            return res;
                        });
                }
                function getAllLocation (data) {
                    return http.get(url.user.GetAllLocation, data)
                        .then(function (res) {
                            return res;
                        });
                }
                function getUserInfo (data) {
                    return http.get(url.user.GetUserInfo, data)
                        .then(function (res) {
                            return res;
                        });
                }
                function getProfileInfo (data) {
                    return http.get(url.user.GetProfileInfo, data)
                        .then(function (res) {
                            return res;
                        });
                }
                function getAddCourier (data) {
                    return http.get(url.user.GetAddCourier, data)
                        .then(function (res) {
                            return res;
                        });
                }
                function getDeleteCourier (data) {
                    return http.get(url.user.GetDeleteCourier, data)
                        .then(function (res) {
                            return res;
                        });
                }
                function getRoom(data) {
                    return http.get(url.user.GetOneChatCourier, data)
                        .then(function (res) {
                            console.log(res);
                            return res;
                        });
                }
                function getWorkerList(data) {
                    return http.get(url.user.GetWorkerList, data)
                        .then(function (res) {
                            console.log(res);
                            return res;
                        });
                }
            }

        ]);
})();