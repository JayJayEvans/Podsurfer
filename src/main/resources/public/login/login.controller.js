(function() {
  'use strict';

  angular
    .module('app')
    .controller('loginController',loginController);

  loginController.$inject = ['loginWithCredentials', '$cookies'];

  function loginController(loginWithCredentials, $cookies) {
    //alert('Our Site Uses cookies ;)');
    var vm = this;
    vm.title = 'Login';

    // Login Function takes the email and password entered in the HTML inputs
    vm.login = function login(email, password) {
      
      // Login Success Scenario
      var success = function(response) {
        console.log('Logged In User!');
        $cookies.putObject('userObj',response.data);
        var value = $cookies.getObject('userObj');
        
        // After saving cookie, redirect page to account page
        
        location.reload();
        location.href = '#/account';
        
        //console.log(value);
      };
      
      // Login Error Scenario
      var error = function(response) {
        document.getElementById("login-fail").innerHTML = 'Failed to login';
        console.log(response.data);
      };

      return loginWithCredentials.checkCredentials(email, password).then(success, error); 
    };


  }

})();
