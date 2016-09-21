(function() {
  'use strict';

    angular.module('app')
      .controller('accountController', accountController);

    accountController.$inject = [];
    function accountController() {
      var vm = this;
      vm.message = 'User Account';
    }
})();
