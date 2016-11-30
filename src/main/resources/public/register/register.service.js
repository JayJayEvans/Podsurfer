/**
 * Created by Jason on 10/14/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .service('registerUser', registerUser);

    registerUser.$inject = ['$http'];

    function registerUser($http) {

        var exports = {
           sendRegister : sendRegister
        };

        return exports;

        function sendRegister(userName, userEmail, userPassword) {
            // The register request
            var registerRequest = {
                method: 'POST',
                url: 'https://podsurfer-4.herokuapp.com/api/user',
                data: {
                    name: userName,
                    email: userEmail,
                    password: userPassword

                }
            }
            return $http(registerRequest);
        }
    }
})(); //need to store token from returned registration in a cookie to persist login