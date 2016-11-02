/**
 *Created by Hank Harrison on 10/18/2016
 * Update History:
 *
 */

(function() {
    'use strict';

    angular
        .module('app')
        .controller('singularPodcastController', singularPodcastController);

    singularPodcastController.$inject = ['$http', 'getPodcastWithId'];

    function singularPodcastController($http, getPodcastWithId) {
      var vm = this;
      vm.title = 'Single Podcast';
      
      vm.name = '';
      vm.link = '';
      vm.release = '';
      vm.producer = '';
      vm.length = '';
      vm.description = '';
      
      
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
          
          console.log('Got podcast id num: ' + podcastId);          
        };
  
        // Error Scenario
        var error = function(response) {
          document.getElementById("podcast-fail").innerHTML = 'Failed to get podcast';
          console.log(response.data);
        };
  
        return getPodcastWithId.apiCall(podcastId).then(success, error); 
      }
      
    }

})();