/**
 * Created by Jason on 10/15/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .service('myAccount', myAccount);

    myAccount.$inject = ['$http', '$cookies'];

    function myAccount($http, $cookies) {
        var value = $cookies.get('userObj');
        if(value != null)
            value = value.substring(10, value.length - 2);

        var exports = {
            fetchUser: fetchUser
        };

        return exports;


        function fetchUser() {
          
          var userRequest = {
            method: 'GET',
            url: 'https://podsurfer-4.herokuapp.com/api/user/me',
            headers: {
              Authorization: 'Bearer ' + value
            }
          }
          
          return $http(userRequest);
        }
    }
})();