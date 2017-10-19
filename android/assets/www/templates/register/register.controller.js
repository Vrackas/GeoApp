/**
 * Controller for register page
 */
(function () {
    "use strict";

    angular
        .module('app')
        .controller('Register', Register);

    Register.$inject = ['$state'];

    function Register($state) {

        var vm = this;
        vm.signup = signup;
        vm.data = {};

        /**
         * Function for validation signup data
         * and send data to server
         */
        function signup() {

        }
    }
})();
