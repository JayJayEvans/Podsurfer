/**
 *Created by Hank Harrison on 10/18/2016
 * Update History:
 *
 */

(function() {
    'use strict';

    angular
        .module('app')
        .controller('podcastController', podcastController);

    podcastController.$inject = ['$http', '$stateParams', 'getPodcastWithId'];

    function podcastController($http, $stateParams, getPodcastWithId) {
            
      var vm = this;
      //vm.title = 'Single Podcast';
      
      // Grab the State Parameter (from the app.route.js that will load the URL)
      vm.podcastId = $stateParams.podcastId;
      //console.log(vm.podcastId);
      
      
      vm.name = '';
      vm.link = '';
      vm.release = '';
      vm.producer = '';
      vm.length = '';
      vm.description = '';
      vm.imageUrl = '';
      
      
      //var temp;

      // Get podcast function requires a podcast id to grab
      vm.getPodcast = function getPodcast(podcastId) {
        
        // Success Scenario
        var success = function(response) {
          
          vm.name = response.data.name;
          vm.link = response.data.link;
          vm.release = response.data.release;
          vm.length = response.data.length;
          vm.description = response.data.description;
          vm.imageUrl = response.data.imageUrl;
          
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
      
      vm.getPodcast(vm.podcastId);
      
    }

})();