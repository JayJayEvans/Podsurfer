//Add podcast form controller


(function(){
    'use strict'

    angular
        .module('app')
        .controller('addController', addController);

    addController.$inject = ['addService', '$cookies'];

    function (addController, $cookies){
    //alert('Our site uses cookies ;)');
    var vm = this;
    vm.title = 'Add';
    vm.token = "";

    function AddPodcast(){

        // Add Success Scenario
        var success = function(response){
            console.log('Added a New Podcast!');
            vm.successful = true;
            vm.token = "true"
        };

        // Add Error Scenariovar
        error = function(response){
            vm.successful = false;
            vm.token = "false";
            //console.log
            console.error('Failed to Create a New Podcast!');
        };

        //console.log(vm);
        return addService.addPodcast(vm.name, vm.link, vm.release, vm.producer, vm.length, vm.description, vm.tag, $cookies.get('token')).then(success, error);

    }

}
})();