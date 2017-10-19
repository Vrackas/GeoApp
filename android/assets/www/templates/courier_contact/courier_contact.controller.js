(function () {
    "use strict";

    angular
        .module('app')
        .controller('Courier_contact', CourierContact);

    CourierContact.$inject = ['$scope', '$rootScope', '$state'];

    function CourierContact($scope, $rootScope, $state) {

        var vm = this;

        console.log($rootScope.selectedCourier.name);
        console.log($rootScope.selectedCourier.phone);

        $scope.courier = $rootScope.selectedCourier;
        $scope.model = {
            sendMoney: false,
            moneyToSend: 0.0
        }
    }
})();
