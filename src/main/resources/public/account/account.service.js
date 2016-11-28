/**
 * Created by Jason on 10/15/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .service('accountService', accountService);

    accountService.$inject = ['$http', '$cookies'];

    function accountService($http, $cookies) {
        
        var token = $cookies.get('userObj');
        if(token != null)
            token = token.substring(10, token.length - 2);

        var exports = {
            getUserInfo: getUserInfo,
            putInterest: putInterest,
            killInterest: killInterest
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
        
        function putInterest(interest,stolen) {
          var arr = stolen;
            arr.push(interest);
          var apiRequest = {
            method: 'PUT',
            url: 'https://podsurfer-4.herokuapp.com/api/user/',
            headers: {
              Authorization: 'Bearer ' + token
            },

            data: {
              interests: arr
            }


          }
          
          return $http(apiRequest);
          
          
        }


        function killInterest(interest,stolen) {
            var arr = stolen;
            var index = arr.indexOf(interest);    // <-- Not supported in <IE9
            if (index !== -1) {
                arr.splice(index, 1);
            }
            var apiRequest = {
                method: 'PUT',
                url: 'https://podsurfer-4.herokuapp.com/api/user/',
                headers: {
                    Authorization: 'Bearer ' + token
                },

                data: {
                    interests: arr
                }


            }

            return $http(apiRequest);


        }


        
        
    }
})();