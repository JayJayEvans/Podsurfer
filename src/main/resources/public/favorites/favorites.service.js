/**
 * Created by Jason on 11/28/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .service('favoritesService', favoritesService);

    favoritesService.$inject = ['$http', '$cookies'];

    function favoritesService($http, $cookies) {
      
        var token = $cookies.get('userObj');
        if (token != null)
            token = token.substring(10, token.length - 2);

        var exports = {
            getUserInfo: getUserInfo,
            getPodcastInfo: getPodcastInfo
        };

        return exports;


        function getUserInfo() {

            var apiRequest = {
                method: 'GET',
                url: 'https://podsurfer-4.herokuapp.com/api/user/me',
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }

            return $http(apiRequest);
        }
        
        
        function getPodcastInfo(podcastId) {

            var apiRequest = {
                method: 'GET',
                url: 'https://podsurfer-4.herokuapp.com/api/podcast/' + podcastId,
            }

            return $http(apiRequest);
        }
    }
})();