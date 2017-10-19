(function () {
    "use strict";

    angular
        .module('app')
        .controller('Courier_list_delete', CourierListDelete);

    CourierListDelete.$inject = ['$rootScope', 'deleteList', '$stateParams', 'UserService', '$scope'];

    function CourierListDelete($rootScope, deleteList, $stateParams, UserService, $scope) {

        var vm = this;
        console.log(deleteList);
        vm.deleteList = deleteList;

        vm.deleteCourier = function (id) {
            vm.idDelete ={
            id: id
            };

            return UserService.getDeleteCourier(vm.idDelete).then(function (res) {
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