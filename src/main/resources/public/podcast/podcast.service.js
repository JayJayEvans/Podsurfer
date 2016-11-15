(function() {
  'use strict';

  angular
    .module('app')
    .service('getPodcastWithId', getPodcastWithId);
    
  getPodcastWithId.$inject = ['$http'];
  
  function getPodcastWithId($http) {
    
    var exports = {
      apiCall: apiCall
    };

    return exports;
    
    function apiCall(podcastId) {
      // The podcast request
      var getPodcastRequest = {
        method: 'GET',
        url: 'https://podsurfer-4.herokuapp.com/api/podcast/' + podcastId,
      }
      return $http(getPodcastRequest);
    }
  }
})();