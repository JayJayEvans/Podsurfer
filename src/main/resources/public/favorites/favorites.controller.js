(function() {
  'use strict';

    angular.module('app')
      .controller('favoritesController', favoritesController);

    favoritesController.$inject = ['favService'];
    function favoritesController(favService) {
      var vm = this;
      vm.title = 'favorites';
      vm.interests = [];

      // Our array of podcasts
      vm.podcasts = [];

      vm.fav = function fav() {


        var success = function(response) {
          vm.interests = response.data.interests;

        }

        var error = function(response) {

          console.error('Failed to get interests');
          console.error($cookies.get('userObj'))

          // Redirect to login
          //location.href = '#/login';
          //alert('You must be signed in to view your profile');
        }
        return favService.getUserInfo().then(success, error);

      };


    }
})();
