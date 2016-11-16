(function() {
  'use strict';

  angular
    .module('app')
    .service('podcastReviewService', podcastReviewService);
    
  podcastReviewService.$inject = ['$http', '$cookies'];
  
  function podcastReviewService($http, $cookies) {
    
    var userToken = $cookies.get('userObj');
    if(userToken != null)
            userToken = userToken.substring(10, userToken.length - 2);
    
    var exports = {
      getReviews: getReviews,
      createReview: createReview
    };

    return exports;
    
    function getReviews(podcastId) {
      // The reviews request
      var apiRequest = {
        method: 'GET',
        url: 'https://podsurfer-4.herokuapp.com/api/review/' + podcastId,
      }
      return $http(apiRequest);
    }
    
    
    function createReview(podcastId, reviewName, reviewRating, reviewBody, reviewSpoilers) {
      
      var apiRequest = {
        method: 'POST',
        url: 'https://podsurfer-4.herokuapp.com/api/review/',
        headers: {
          Authorization: 'Bearer ' + userToken
        },
        data: {
          podcast: podcastId,
          name: reviewName,
          rating: reviewRating,
          review: reviewBody,
          spoilers: reviewSpoilers        
        }
      }
      return $http(apiRequest);
    }
    
    
  }
})();