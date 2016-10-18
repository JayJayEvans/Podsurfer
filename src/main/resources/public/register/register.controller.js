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
                $cookies.putObject('newUser',response.data);
                var value = $cookies.getObject('newUser');

                console.log(value);
            };

            // Register Error Scenario
            var error = function(response) {
                console.error('Failed to Register User');
                console.log(response.data);
            };

            return registerUser.sendRegister(name, email, password).then(success, error);
        }
    }

})();
