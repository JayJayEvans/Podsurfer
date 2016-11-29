(function() {
  'use strict';

  angular
    .module('app')
    .service('podcastFavoriteService', podcastFavoriteService);
    
  podcastFavoriteService.$inject = ['$http', '$cookies'];
  
  function podcastFavoriteService($http, $cookies) {
    
    var userToken = $cookies.get('userObj');
    if(userToken != null)
      userToken = userToken.substring(10, userToken.length - 2);
    
    var exports = {
      getUser: getUser,
      addFavorite: addFavorite,
      removeFavorite: removeFavorite
    };

    return exports;
    
    
    function getUser() {
      
      // Get user info
      var apiRequest = {
        method: 'GET',
        url: 'https://podsurfer-4.herokuapp.com/api/user/me',
        headers: {
          Authorization: 'Bearer ' + userToken
        }
      }
        
      return $http(apiRequest);
      //return $http(apiRequest);      
    }    
    
    
    function addFavorite(podcastId, favoritesArray) {
      
      favoritesArray.push(podcastId);
      var apiRequest = {
        method: 'PUT',
        url: 'https://podsurfer-4.herokuapp.com/api/user/',
        headers: {
          Authorization: 'Bearer ' + userToken
        },
        data: {
          bookmarks: favoritesArray
        }
      }
        
      return $http(apiRequest);
      //return $http(apiRequest);      
    }    


    function removeFavorite(podcastId, favoritesArray) {
      
      // Remove spot in array with the favorite
      var indexOfFavorite = favoritesArray.indexOf(podcastId);
      if (indexOfFavorite > -1) {
        favoritesArray.splice(indexOfFavorite, 1);
      }
      
      var apiRequest = {
        method: 'PUT',
        url: 'https://podsurfer-4.herokuapp.com/api/user/',
        headers: {
          Authorization: 'Bearer ' + userToken
        },
        data: {
          bookmarks: favoritesArray
        }
      }
        
      return $http(apiRequest);
      //return $http(apiRequest);      
    }  

    
  }
})();