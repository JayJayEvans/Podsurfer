//Add podcast form controller


(function(){
    'use strict'

    angular
        .module('app')
        .controller('addpodcastController', addpodcastController);

    addpodcastController.$inject = ['addService', '$cookies'];

    function addpodcastController(addService, $cookies){
    //alert('Our site uses cookies ;)');
    var vm = this;
    vm.title = 'Upload';
    //vm.token = "";


        vm.addpodcast = function addpodcast(name, link, release, producer, length, description) {

        // Add Success Scenario
        var success = function(response){
            console.log('Added a New Podcast!');
            $cookies.putObject('podID',response._id);
            vm.successful = true;
            //vm.token = "true"
        };

        // Add Error Scenariovar
        var error = function(response){
            vm.successful = false;
            //vm.token = "false";
            //console.log
            document.getElementById("upload-fail").innerHTML = 'Failed to login';
            console.error('Failed to Create a New Podcast or authorization failure!');
        };

        //console.log(vm);
        return addService.addP(name, link, release, producer, length, description).then(success, error);

    }

}
})();