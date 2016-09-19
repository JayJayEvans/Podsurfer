(function() {
  'use strict';

    angular.module('app')
      .controller('favoritesController', favoritesController);

    favoritesController.$inject = [];
    function favoritesController() {
      var vm = this;
      vm.message = 'Favorite Podcasts';
    }
})();
