;(function () {
    'use string';

    angular
        .module('app')
        .controller('Profile', Profile);

    Profile.$inject = ['$localStorage', '$scope', 'userInfo', '$rootScope'];

    function Profile($localStorage, $scope, userInfo, $rootScope) {
        var vm =this;
        vm.userInfo = userInfo;

        $scope.clearStorage = function () {
            delete $localStorage.auth_key;
        }

    }
})();
