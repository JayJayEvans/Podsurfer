/**
 *Created by Sneaky Teem
 * Update History:
 *
 */

(function() {
    'use strict';

    angular
        .module('app')
        .controller('podcastController', podcastController);

    podcastController.$inject = ['$http', '$stateParams', 'getPodcastWithId', 'podcastReviewService', 'podcastFavoriteService'];

    function podcastController($http, $stateParams, getPodcastWithId, podcastReviewService, podcastFavoriteService) {
            
      var vm = this;

      // Grab the State Parameter podcastId
      // (from the app.route.js that will load in the URL)
      vm.podcastId = $stateParams.podcastId;
      vm.podcastObj = [];
      vm.reviews = [];
            
      vm.favoriteStatus = false;
      vm.userFavoritesArray = [];

      // Get podcast function requires a podcast id to grab from Credera API
      vm.getPodcast = function getPodcast(podcastId) {
        
        // PODCAST DATA ==========================================================
        
        // Podcast Success Scenario
        var podcastSuccess = function(response) {
          // Grab the podcast object
          vm.podcastObj = response.data;
          console.log('Got podcast id num: ' + podcastId);  
          //console.log(vm.name + ' ' + vm.release + ' ' + vm.description);        
        };
  
        // Podcast Error Scenario
        var podcastError = function(response) {
          document.getElementById("podcast-fail").innerHTML = 'Failed to get podcast';
          console.log(response.data);
        };
        
        
        // REVIEW DATA ===========================================================
        
        // Review Success Scenario
        var reviewSuccess = function(response) {
          // Grab the podcast object
          vm.reviews = response.data;
          //console.log('Got podcast id num: ' + podcastId);  
          //console.log(vm.name + ' ' + vm.release + ' ' + vm.description);        
        };
  
        // Review Error Scenario
        var reviewError = function(response) {
          document.getElementById("review-fail").innerHTML = 'Failed to get podcast';
          console.log(response.data);
        };
        
        
        // FAVORITE DATA =========================================================
        
        // Favorite Success Scenario
        var favoriteSuccess = function(response) {
          
          // Save the user
          var user = response.data;
          
          // ALSO SAVE FAVORITES ARRAY
          vm.userFavoritesArray = user.bookmarks;
        
          // Loop through bookmark array (favorites)
          var arrayLength = user.bookmarks.length;
          
          for(var i = 0; i < arrayLength; i++) {            
            // If the podcast id occurs in their favorites, set the status as being
            // favorited
            if(user.bookmarks[i] == podcastId) {
              vm.favoriteStatus = true;
              break;
            }
          }
           
          console.log('GOT USER FAVORITE STATUS: ' + vm.favoriteStatus);
           
           
          if (vm.favoriteStatus === true) {
            // SHOW HEART FILLED
            setHeartActive('favorite-button-fill', 'favorite-button-border');
          }
          else {
            // SHOW HEART EMPTY
            setHeartInactive('favorite-button-fill', 'favorite-button-border');
          }         
        };
  
        // Favorite Error Scenario
        var favoriteError = function(response) {
          vm.favoriteStatus = false;
          console.log('Failed to get favorite ststus so set heart to not filled');
          setHeartInactive('favorite-button-fill', 'favorite-button-border');
          console.log(response.data);
        };
        
  
        getPodcastWithId.apiCall(podcastId).then(podcastSuccess, podcastError); 
        podcastReviewService.getReviews(podcastId).then(reviewSuccess, reviewError);
        podcastFavoriteService.getUser(podcastId).then(favoriteSuccess, favoriteError);
        
        return;
      };
      
      
      
      vm.addReview = function addReview(reviewName, reviewRating, reviewBody, reviewSpoilers) {
        
        var success = function(response) {
          console.log('Review Written!');
           
          // Close Review Form
          toggleVisibility('reviewForm');
                    
          // Refresh podcast page with new review
          vm.getPodcast(vm.podcastId);        
        };
  
        // Review Error Scenario
        var error = function(response) {
          console.log('Review create failed');
          document.getElementById('review-create-fail').innerHTML = response.data;
          console.log(response.data);
        };
        
        podcastReviewService.createReview(vm.podcastId, reviewName, reviewRating, reviewBody, reviewSpoilers).then(success, error);
        
        return;       
      };
      
      
      vm.toggleFavoriteStatus = function toggleFavoriteStatus() {
        
        // Sucess Scenario
        var success = function(response) {
          
          // Sucessfully toggle the favorite status
          if(vm.favoriteStatus === false) {
            vm.favoriteStatus = true;
            setHeartActive('favorite-button-fill', 'favorite-button-border');
          }
          else {
            vm.favoriteStatus = false;
             setHeartInactive('favorite-button-fill', 'favorite-button-border');
          }       
        };
  
        // Error Scenario
        var error = function(response) {
          console.log("Unsucessfull favorite toggle.");
          location.reload(true);
          location.href = '#/login';
        };
        
        
        // CURRENT ARRAY FOR FAVORITES IS vm.userFavoritesArray
        
        if (vm.favoriteStatus === false) {
          podcastFavoriteService.addFavorite(vm.podcastId, vm.userFavoritesArray).then(success, error);
        }
        else {
          podcastFavoriteService.removeFavorite(vm.podcastId, vm.userFavoritesArray).then(success, error);
        }
        
        return;       
      };
      
      
      // Invoke the getPodcast function upon page load
      vm.getPodcast(vm.podcastId);
    }

})();