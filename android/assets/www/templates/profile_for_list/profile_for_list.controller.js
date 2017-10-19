;(function () {
    'use string';

    angular
        .module('app')
        .controller('ProfileForList', ProfileForList);

    ProfileForList.$inject = [ '$scope', 'UserService', '$rootScope', '$stateParams', 'profileInfo'];

    function ProfileForList( $scope, UserService, $rootScope, $stateParams, profileInfo) {
        var vm = this;
        vm.ProfileInfo = ProfileInfo;
        vm.profileInfo = profileInfo;
        vm.id={
            id: $stateParams.id
        };
        // vm.ProfileInfo();

        function ProfileInfo(UserService) {
             UserService.getUserInfo(id).then(function (res) {
                vm.profileInfo = res;
                return res;
            });
        }
    }
})();