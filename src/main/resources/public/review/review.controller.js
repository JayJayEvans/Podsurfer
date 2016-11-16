/**
 *Created by Sneaky Teem
 * Update History:
 *
 */
/*
(function() {
    'use strict';

    angular
        .module('app')
        .controller('reviewController', reviewController);

    podcastController.$inject = ['$http', '$stateParams', 'reviewService'];

    function podcastController($http, $stateParams, reviewService) {
            
      var vm = this;

      // Grab the State Parameter podcastId
      // (from the app.route.js that will load in the URL)
      vm.reviewId = $stateParams.reviewId;
      vm.reviewObj = [];
            

      // Get review function requires a review id to grab from Credera API
      vm.getPodcast = function getPodcast(podcastId) {
        
        // Success Scenario
        var success = function(response) {
          // Grab the podcast object
          vm.podcastObj = response.data;
          console.log('Got podcast id num: ' + podcastId);  
          //console.log(vm.name + ' ' + vm.release + ' ' + vm.description);        
        };
  
        // Error Scenario
        var error = function(response) {
          document.getElementById("podcast-fail").innerHTML = 'Failed to get podcast';
          console.log(response.data);
        };
  
        return getPodcastWithId.apiCall(podcastId).then(success, error); 
      };
      
      // Invoke the getPodcast function upon page load
      vm.getPodcast(vm.podcastId);
    }

})();*.