(function() {
    'use strict';

    angular.module('app')
        .controller('searchController', searchController);

    searchController.$inject = ['searchService'];
    
    function searchController(searchService) {
        
        var vm = this;
        vm.message = 'Search For Podcasts';
        
        // Our array of podcasts
        vm.podcasts = [];
        
        vm.search = function search() {
        
          // Success Scenario
          var success = function(response) {
            
              vm.podcasts = response.data;
              console.log('Retreived Podcasts');
              console.log(vm.podcasts);
          };
        
          // Error Scenario
          var error = function(response) {
              console.log('Failed to retreive podcasts');
              console.log(response.data);
          };
  
          return searchService.getPodcasts().then(success, error); 
          
        };
    }
})();
