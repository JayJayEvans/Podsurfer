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

    podcastController.$inject = ['$http', '$stateParams', 'getPodcastWithId', 'podcastReviewService'];

    function podcastController($http, $stateParams, getPodcastWithId, podcastReviewService) {
            
      var vm = this;

      // Grab the State Parameter podcastId
      // (from the app.route.js that will load in the URL)
      vm.podcastId = $stateParams.podcastId;
      vm.podcastObj = [];
      vm.reviews = [];
            

      // Get podcast function requires a podcast id to grab from Credera API
      vm.getPodcast = function getPodcast(podcastId) {
        
        // PODCAST DATA
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
        
        
        // REVIEW DATA
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
    
  
        getPodcastWithId.apiCall(podcastId).then(podcastSuccess, podcastError); 
        podcastReviewService.getReviews(podcastId).then(reviewSuccess, reviewError);
        
        return;
        //return getPodcastWithId.apiCall(podcastId).then(success, error); 
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
      }
      
      
      // Invoke the getPodcast function upon page load
      vm.getPodcast(vm.podcastId);
    }

})();