(function () {
    "use strict";
    
    angular
        .module('app')
        .controller('Password_recovery', Password_recovery);

    Password_recovery.$inject = ['$state'];
    
    function Password_recovery($state) {
        
        var vm=this;
        vm.recovery = recovery;
        vm.data = {};
        
        function recovery() {
            
        }
    }
    
})