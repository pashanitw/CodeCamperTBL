(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'products';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('app').controller(controllerId,
        ['common', 'datacontext', products]);

    function products(common, datacontext) {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        // Bindable properties and functions are placed on vm.
        vm.activate = activate;
        vm.products = [];
        vm.title = 'Products';

        activate();

        function activate() {
            common.activateController([getProducts()], controllerId)
                .then(function () { log('Activated Products View'); });
        }

        function getProducts() {
            return datacontext.getProductPartials().then(function (data) {
                return vm.products = data;
            });
        }

        //#region Internal Methods        

        //#endregion
    }
})();
