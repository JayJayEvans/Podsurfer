(function() {
  'use strict';

    angular.module('app')
      .controller('favoritesController', favoritesController);

    favoritesController.$inject = ['favoritesService'];
    function favoritesController(favoritesService) {
     
      var vm = this;
      vm.title = 'Favorites';
      
      vm.podcasts = [];

      vm.favorites = function favorites() {

        var success = function(response) {
          
          var podcastIds = response.data.bookmarks;
          
          var arrayLength = podcastIds.length;
          
          // For every podcastId, get its corresponding podcast data and
          // save it in the array
          for(var i = 0; i < arrayLength; i++) {
            
            var podSuccess = function(response) {
              // Sucessfully grabbed podcast
              vm.podcasts.push(response.data);
            };
            
            var podError = function(response) {
              // Failed to get podcast
              console.log("Could not grab a podcast in the users bookmarks");
              console.log(response.data);
            };
            
            favoritesService.getPodcastInfo(podcastIds[i]).then(podSuccess, podError);
          }
        };

        var error = function(response) {

          console.error('Failed to get user data');
          console.error($cookies.get('userObj'))

          // Redirect to login
          //location.href = '#/login';
          //alert('You must be signed in to view your profile');
        };
        
        favoritesService.getUserInfo().then(success, error);
        
        return;
      };
      
      vm.favorites();
    }
})();
