/**
 * Created by Jason on 10/14/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .service('grabPodcasts', grabPodcasts);

    grabPodcasts.$inject = ['$http'];

    function grabPodcasts($http) {

        var exports = {
            getPodcasts: getPodcasts
        };

        return exports;

        function getPodcasts( ) {
            
            // The login request
            var searchRequest = {
                method: 'GET',
                url: 'https://podsurfer-4.herokuapp.com/api/podcast/',
            }
            
            return $http(searchRequest);
        }
    }
})();