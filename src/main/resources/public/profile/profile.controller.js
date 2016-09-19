(function() {
  'use strict';

    angular.module('app')
      .controller('profileController', profileController);

    profileController.$inject = [];
    function profileController() {
      var vm = this;
      vm.message = 'Your Profile';
    }
})();
