(function() {
  'use strict';

  angular
    .module('app')
    .controller('loginController', loginController);

  loginController.$inject = ['loginWithCredentials'];
  
  function loginController(loginWithCredentials) {
    
    var vm = this;
    vm.title = 'Login';
    
    // Login Function takes the email and password entered in the HTML inputs
    vm.login = function login(email, password) {
      
      // Login Success Scenario
      var success = function(response) {
        console.log('Logged In User!');
        console.log(response.data);
      };
      
      // Login Error Scenario
      var error = function(response) {
        console.error('Failed to login');
        console.log(response.data);
      };
      
      return loginWithCredentials.checkCredentials(email, password).then(success, error); 
    }
  }

})();
