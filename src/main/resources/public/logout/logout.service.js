/**
 * Created by Jason on 10/16/2016.
 */
 /*
(function() {
    'use strict';

    angular
        .module('app')
        .service('logMeOut', logMeOut);

    logMeOut.$inject = ['$http', '$cookies'];

    function logMeOut($http, $cookies) {
        var value = $cookies.get('userObj');
        if(value != null)
            value = value.substring(10, value.length - 2);

        var exports = {
            logOut: logOut
        };

        return exports;

        function logOut() {
            var logoutRequest = {
                method: 'GET',
                url: 'https://podsurfer-4.herokuapp.com/api/user/me',
                headers: {

                    Authorization: 'Bearer ' + value
                }
            }
            return $http(logoutRequest);
        }
    }
})();
*/