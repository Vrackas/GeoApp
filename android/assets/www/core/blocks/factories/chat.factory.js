;(function () {
    'use strict';

    angular
        .module('factory.chat', [])
        .factory('factoryChat', factoryChat);

    factoryChat.$inject = [];

    function factoryChat() {
        return {
            firebaseApp: null
        };
    }
})();