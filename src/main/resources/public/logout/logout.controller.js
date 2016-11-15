/**
 * Created by Jason on 10/16/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('logoutController',logoutController);

    logoutController.$inject = ['$cookies'];

    function logoutController($cookies) {

        var vm = this;
        vm.title = 'logout';
        
        
        vm.logout = function logout() {
          
          // If the user token cookie exists, remove it
          if($cookies.get('userObj') != null) {            
            
            $cookies.remove('userObj');          
            // Redirect to home page
            location.href = '#';
          }
          else { // Else, alert that the user has not logged in
            alert("You're not logged in");
          }
        };
        
        /*
        vm.logout = function logout() {

            var success = function(response) {
                
                if($cookies.get('userObj') != null){
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
        */


    }

})();
