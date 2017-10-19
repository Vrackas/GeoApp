(function () {
    "use strict";

    angular
        .module('app')
        .controller('Courier_list_add', CourierListAdd);

    CourierListAdd.$inject = ['$rootScope', 'allList', '$stateParams', 'UserService', '$scope'];

    function CourierListAdd($rootScope, allList, $stateParams, UserService, $scope) {

        var vm = this;
        console.log(allList);
        vm.allList = allList;

        vm.addCourier = function (id) {
            return UserService.getAddCourier({id: id}).then(function (res) {
                console.log(res);
                return res;
            });
        };
        vm.test = function (id) {
            console.log({id: id});
        };
        // vm.selectCourier = function (courier) {
        //     console.log(courier);
        //     $rootScope.selectedCourier = courier;
        // }
    }
})();