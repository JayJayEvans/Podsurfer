/**
 * Created by Jason on 10/16/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('logoutController',logoutController);

    logoutController.$inject = ['logMeOut', '$cookies'];

    function logoutController(logMeOut, $cookies) {

        var vm = this;
        vm.title = 'logout';
        // Login Function takes the email and password entered in the HTML inputs
        vm.logout = function logout() {

            var success = function(response) {
                var value = $cookies.get('userObj');
                if(value != null){
                    $cookies.remove('userObj');
                    
                    // Redirect to home page
                    location.href = '#';
                    //location.reload();
                }

            };

            var error = function(response) {
                alert('You\'re not logged in');
            };


            return logMeOut.logOut().then(success, error);
        }


    }

})();
