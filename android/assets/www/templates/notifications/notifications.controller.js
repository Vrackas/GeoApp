;(function () {
    'use string';

    angular
        .module('app')
        .controller('Notifications', Notifications);

    Notifications.$inject = ['$ionicPush'];

    function Notifications($ionicPush) {
        var vm =this;

        $scope.$on('cloud:push:notification', function(event, data) {
            var msg = data.message;
            alert(msg.title + ': ' + msg.text);
        });

    }
})();