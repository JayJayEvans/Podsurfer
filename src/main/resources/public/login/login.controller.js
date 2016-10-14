(function() {
  'use strict';

angular
    .module('app')
    .controller('loginController',loginController);

  loginController.$inject = ['loginWithCredentials', '$cookies'];

  function loginController(loginWithCredentials, $cookies) {
    $cookies.NameOfMyCookie = "Testinging cookie";
    alert($cookies.NameOfMyCookie);
    var vm = this;
    vm.title = 'Login';
    
    // Login Function takes the email and password entered in the HTML inputs
    vm.login = function login(email, password) {
      
      // Login Success Scenario
      var success = function(response) {
        console.log('Logged In User!');
        console.log(response.data);
        $cookies.put('userObj', response);
        var value = $cookies.get('userOb');
        //console.log(value);
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
