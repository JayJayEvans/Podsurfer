(function() {
  'use strict';

  angular
      .module('app')
      .controller('accountController',accountController);

  accountController.$inject = ['myAccount', '$cookies'];

  function accountController(myAccount, $cookies) {
    var vm = this;
    vm.title = 'Account';
    
    vm._id = '';
    vm.name = '';
    vm.email = '';
    vm.interests = [];
    vm.bookmarks = [];

    vm.account = function account() {
      var success = function(response) {
        
        vm._id = response.data._id;
        vm.name = response.data.name;
        vm.email = response.data.email;
        vm.interests = response.data.interests;
        vm.bookmarks = response.data.bookmarks;
        
        $cookies.putObject('userId',response.data._id);

      };

      var error = function(response) {
        console.error('Failed');
        console.error($cookies.get('userObj'))
        
        // Redirect to login
        location.href = '#/login';
        alert('You must be signed in to view your profile');
      };

      return myAccount.fetchUser().then(success, error);
    };
    
    // When the page loads, automatically invoke this function
    vm.account();
  }

})();