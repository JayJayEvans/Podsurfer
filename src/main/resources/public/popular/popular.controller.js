(function() {
  'use strict';

    angular.module('app')
      .controller('popularController', popularController);

    popularController.$inject = [];
    function popularController() {
      var vm = this;
      vm.message = 'Unpopular Podcasts';
    }
})();
