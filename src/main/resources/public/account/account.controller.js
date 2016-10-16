(function() {
  'use strict';

  angular
      .module('app')
      .controller('accountController',accountController);

  accountController.$inject = ['myAccount', '$cookies'];

  function accountController( myAccount, $cookies) {
    var vm = this;
    vm.title = 'Account';

    vm.account = function account() {

      var success = function(response) {
        document.getElementById("accName").innerHTML = 'Name: ' + response.data.name;
        document.getElementById("accEmail").innerHTML = 'Email: ' + response.data.email;

      };

      var error = function(response) {
        console.error('Failed');
      };

      return myAccount.fetchUser().then(success, error);
    }
  }

})();