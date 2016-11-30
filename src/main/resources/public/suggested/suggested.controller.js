(function() {
  'use strict';

  angular
      .module('app')
      .controller('suggestedController',suggestedController);

  suggestedController.$inject = ['suggestedService', '$cookies'];

  function suggestedController(suggestedService, $cookies) {
    var vm = this;
    vm.title = 'Suggested';

    vm._id = '';
    vm.name = '';
    vm.email = '';
    vm.interests = [];
    vm.bookmarks = [];
    vm.podcasts = [];
    var stolen = vm.interests;

    vm.suggested = function suggested() {

      var userInfoSuccess = function(response) {


        vm._id = response.data._id;
        vm.name = response.data.name;
        vm.email = response.data.email;
        vm.interests = response.data.interests;
        vm.bookmarks = response.data.bookmarks;

        // $cookies.putObject('userId',response.data._id);

        //JSON.stringify(vm.interests);

      }

      var userInfoError = function(response) {

        console.error('Failed');
        console.error($cookies.get('userObj'))

        // Redirect to login
        //alert('You must be signed in to view your profile');
      }

      // Success Scenario
      var podcastSuccess = function(response) {

        vm.podcasts = response.data;
        console.log('Retreived Podcasts');
        console.log(vm.podcasts);
      }

      // Error Scenario
      var podcastError = function(response) {
        console.log('Failed to retreive podcasts');
        console.log(response.data);
      }

      suggestedService.getUserInfo().then(userInfoSuccess, userInfoError);
      suggestedService.getPodcasts().then(podcastSuccess, podcastError);

      return;
    };

    // When the page loads, automatically invoke this function
    vm.suggested();
  }

})();