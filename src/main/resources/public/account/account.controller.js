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
        document.getElementById("acc_id").innerHTML = 'ID: ' + response.data._id;
        $cookies.putObject('userId',response.data._id);
        document.getElementById("accName").innerHTML = 'Name: ' + response.data.name;
        document.getElementById("accEmail").innerHTML = 'Email: ' + response.data.email;
        document.getElementById("accBookMarks").innerHTML = 'Booked: ' + response.data.bookmarks;

      };

      var error = function(response) {
        console.error('Failed');
        console.error($cookies.get('userObj'))
        location.href = '#/login';
        alert('You must be signed in to view your profile');
      };

      return myAccount.fetchUser().then(success, error);
    }
  }

})();