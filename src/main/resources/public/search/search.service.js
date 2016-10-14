/**
 * Created by Jason on 10/14/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .service('searchPodcasts', searchPodcasts);

    searchPodcasts.$inject = ['$http'];

    function searchPodcasts($http) {

        var exports = {
            fetchPodcasts: fetchPodcasts
        };

        return exports;

        function fetchPodcasts( ) {
            // The login request
            var searchRequest = {
                method: 'GET',
                url: 'https://podsurfer-#.herokuapp.com/api/podcast/',
                data: {
                    _id: userEmail,
                    password: userPassword
                    //Tims email: timarterbury@gmail.com
                    //Tims password: lolZ254@
                }
            }
            return $http(loginRequest);
        }
    }
})();