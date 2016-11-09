(function() {
    'use strict';

    angular.module('app')
        .controller('searchController', searchController);

    searchController.$inject = ['grabPodcasts'];
    
    function searchController(grabPodcasts) {
        
        var vm = this;
        vm.message = 'Search For Podcasts';
        
        // Our array of podcasts
        vm.podcasts = [];
        
        
        // Success Scenario
        var success = function(response) {
          
            console.log('Retreived Podcasts');

            
    
            //console.log(value);
        };
      
        // Error Scenario
        var error = function(response) {
            console.log('Failed to retreive podcasts');
            console.log(response.data);
            
        };


        return grabPodcasts.getPodcasts().then(success, error); 
    }
})();
