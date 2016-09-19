(function() {
  'use strict';

    angular.module('app')
      .controller('suggestedController', suggestedController);

    suggestedController.$inject = [];
    function suggestedController() {
      var vm = this;
      vm.message = 'Suggested Podcasts';
    }
})();
