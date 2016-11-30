//Add podcast form controller


(function(){
    'use strict'

    angular
        .module('app')
        .controller('addpodcastController', addpodcastController);

    addpodcastController.$inject = ['addPodcastService', '$cookies'];

    function addpodcastController(addPodcastService, $cookies){
          
      var vm = this;
      vm.title = 'Upload a Podcast';

      vm.addpodcast = function addpodcast(name, link, release, producer, length, description, episodes, tags, imageURL) {

        // Add Success Scenario
        var success = function(response){
            console.log('Added a New Podcast!');
            $cookies.putObject('podID',response._id);
        };

        // Add Error Scenario
        var error = function(response){
            document.getElementById("upload-fail").innerHTML = 'Failed to login';
            console.error('Failed to Create a New Podcast or authorization failure!');
        };

        //var episodes = (vm.episodes ? vm.episodes.split(",") : []);
        //var tags = (vm.tags ? vm.tags.split(",") : []);

        //console.log(vm);
        //console.log(episodes);
        //console.log(tags);
        
        // Add http or https if necessary to external link
        if (link.substring(0, 7) != "http://" && link.substring(0, 8) != "https://") {
            if(link.substring(0, 7) != "http://") {
                link = "http://" + link;
            }
            else {
                link = "https://" + link;
            }
        }
        
        // Add http or https if necessary to imageURL
        if (imageURL.substring(0, 7) != "http://" && imageURL.substring(0, 8) != "https://") {
            if(imageURL.substring(0, 7) != "http://") {
                imageURL = "http://" + imageURL;
            }
            else {
                imageURL = "https://" + imageURL;
            }
        }

        
        return addPodcastService.addP(name, link, release, producer, length, description, episodes, tags, imageURL).then(success, error);

    }

        vm.editpodcast = function editpodcast(name, link, release, producer, length, episodes, tags, description, id) {

            // Add Success Scenario
            var success = function(response){
                console.log('Edited a Podcast!');
                $cookies.putObject('podID',response._id);
                //vm.token = "true"
            };

            // Add Error Scenario
            var error = function(response){
                //vm.token = "false";
                //console.log
                document.getElementById("edit-fail").innerHTML = 'Failed to login';
                console.error('Failed to Edit a Podcast or authorization failure!');
            };

            var episodes = (vm.episodes ? vm.episodes.split(",") : []);
            var tags = (vm.tags ? vm.tags.split(",") : []);

            //console.log(vm);
            console.log(episodes);
            console.log(tags);
            return addPodcastService.editP(name, link, release, producer, length, episodes, tags, description, id).then(success, error);

        }

}
})();