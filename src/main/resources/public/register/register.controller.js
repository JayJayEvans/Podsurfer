/**
 * Created by Jason on 10/14/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('registerController',registerController);

    registerController.$inject = ['registerUser', '$cookies'];

    function registerController(registerUser, $cookies) {
        var vm = this;
        vm.title = 'Register';

        vm.register = function register(name, email, password) {

            // Register Success Scenario
            var success = function(response) {
                console.log('Registered User!');
                $cookies.putObject('userObj', response.data);
                /*
                var token = $cookies.getObject('userObj');
                console.log(token);
                */
                
                // After saving cookie, redirect page to account page
                location.reload();
                location.href = '#/account';
            };

            // Register Error Scenario
            var error = function(response) {
                document.getElementById("register-fail").innerHTML = response.data.message;
                document.getElementById("register-fail-password").innerHTML = "Password must have 8 total characters, numbers, uppercase & lowercase letters, and a special character.";
                console.error('Failed to Register User');
                console.log(response.data);
            };

            return registerUser.sendRegister(name, email, password).then(success, error);
        };
    }

})();
