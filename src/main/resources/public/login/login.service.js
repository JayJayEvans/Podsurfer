(function() {
  'use strict';

  angular
    .module('app')
    .service('loginWithCredentials', loginWithCredentials);
    
  loginWithCredentials.$inject = ['$http'];
  
  function loginWithCredentials($http) {
    
    var exports = {
      checkCredentials: checkCredentials
    };

    return exports;
    
    function checkCredentials(userEmail, userPassword) {
      // The login request
      var loginRequest = {
        method: 'POST',
        url: 'https://podsurfer-4.herokuapp.com/auth/local/',
        data: {
          email: userEmail,
          password: userPassword
          //Tims email: timarterbury@gmail.com
          //Tims password: lolZ254@
        }
      }
      return $http(loginRequest);
    }
  }
})();