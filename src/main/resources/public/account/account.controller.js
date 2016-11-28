(function() {
  'use strict';

  angular
      .module('app')
      .controller('accountController',accountController);

  accountController.$inject = ['accountService', '$cookies'];

  function accountController(accountService, $cookies) {
    var vm = this;
    vm.title = 'Account';
    
    vm._id = '';
    vm.name = '';
    vm.email = '';
    vm.interests = [];
    vm.bookmarks = [];
    var stolen = vm.interests;
    vm.account = function account() {

      var success = function(response) {
        
        vm._id = response.data._id;
        vm.name = response.data.name;
        vm.email = response.data.email;
        vm.interests = response.data.interests;
        vm.bookmarks = response.data.bookmarks;
        document.getElementById("myAnchor").innerHTML = vm.name + " Profile";
        stolen = vm.interests;
        $cookies.putObject('userId',response.data._id);

      }

      var error = function(response) {

        console.error('Failed');
        console.error($cookies.get('userObj'))
        
        // Redirect to login

        document.getElementById("myAnchor").innerHTML = "User Is Not Logged In";
        //location.href = '#/login';
        //alert('You must be signed in to view your profile');
      }
      return accountService.getUserInfo().then(success, error);

    };
    
    vm.addInterest = function addInterest(interest) {
      
      var success = function(response) {
          console.log('Interest added!');
           
          // Close Review Form
          toggleVisibility('interestForm');
                    
          // Refresh podcast page with new review
          vm.account();        
        };
  
        // Review Error Scenario
        var error = function(response) {
          console.log('Interest add failed');
          document.getElementById('interest-add-fail').innerHTML = response.data;
          console.log(response.data);
        };
        
        accountService.putInterest(interest,stolen).then(success, error);
        
        return;       

      
      
    };





    vm.removeInterest = function removeInterest(interest) {

      var success = function(response) {
        console.log('Interest removed!');

        // Close Review Form
        toggleVisibility('removalForm');

        // Refresh podcast page with new review
        vm.account();
      };

      // Review Error Scenario
      var error = function(response) {
        console.log('Interest removal failed');
        document.getElementById('interest-remove-fail').innerHTML = response.data;
        console.log(response.data);
      };

      accountService.killInterest(interest,stolen).then(success, error);

      return;



    };




    
    
    // When the page loads, automatically invoke this function
    vm.account();
  }

})();