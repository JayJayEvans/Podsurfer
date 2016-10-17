/**
 * Created by Jason on 10/16/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .service('logMeOut', logMeOut);

    logMeOut.$inject = ['$http'];

    function logMeOut($http) {

        var exports = {
            logOut: logOut
        };

        return exports;

        function logOut() {
            var logoutRequest = {
                method: 'GET',
                url: 'https://podsurfer-4.herokuapp.com/api/user/me',

            }
            return $http(logoutRequest);
        }
    }
})();