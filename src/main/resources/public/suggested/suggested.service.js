/**
 * Created by colecrawford on 11/28/16.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .service('suggestedService', suggestedService);

    suggestedService.$inject = ['$http', '$cookies'];

    function suggestedService($http, $cookies) {

        var token = $cookies.get('userObj');
        if(token != null)
            token = token.substring(10, token.length - 2);

        var exports = {
            getUserInfo: getUserInfo,
            getPodcasts: getPodcasts
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

        function getPodcasts() {

            // The login request
            var searchRequest = {
                method: 'GET',
                url: 'https://podsurfer-4.herokuapp.com/api/podcast/',
            }

            return $http(searchRequest);
        }
    }
})();