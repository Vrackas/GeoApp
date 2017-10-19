(function () {
    "use strict";

    angular
        .module('app')
        .controller('Workers_list', WorkersList);

    WorkersList.$inject = ['$rootScope', 'workerList', '$stateParams', 'factoryMap', '$state', 'UserService'];

    function WorkersList($rootScope, workerList, $stateParams, factoryMap, $state , UserService) {
        var vm = this;
        vm.list = workerList;

        vm.chooseUser = chooseUser;
        vm.SendId = SendId;
        vm.SendProfileId = SendProfileId;
        // vm.Test = Test;

        function chooseUser(item) {
            factoryMap.setCurrentUser(item);
            $state.go('menu_operator.geolocation');
        }

        function SendId (id){
            $state.go('chat_user',{user_id: id.id, senderName: id.username, roomId: id.room_id});
        }

        function SendProfileId(profileId) {
            $state.go('profile_for_list',{id: profileId.id});
        }
        // vm.selectCourier = function (courier) {
        //     console.log(courier);
        //     $rootScope.selectedCourier = courier;
        // }
        // function Test() {
        //    chatFirebase.Test1();
        // }
        // Test();
    }
})();

