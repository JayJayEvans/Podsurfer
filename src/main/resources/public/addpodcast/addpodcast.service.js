(function(){
    'use strict'

    angular
        .module('app')
        .service('addPodcastService', addPodcastService);

    addPodcastService.$inject = ['$http', '$cookies'];

    function addPodcastService($http, $cookies){
        
        // Grab User Login Token
        var token = $cookies.get('userObj');
        if(token != null)
            token = token.substring(10, token.length - 2);

        // Export Function names
        var exports = {
            addP:addP,
            editP:editP
        };
        return exports;


        function addP(nameIn, linkIn, releaseIn, producerIn, lengthIn, descriptionIn, episodesIn, tagsIn, imageURLIn){

            console.log(nameIn + " " + linkIn + " " + releaseIn + " " + producerIn + " " + lengthIn + " " + descriptionIn + " " + episodesIn + " " + tagsIn + " " + imageURLIn);
            //console.log(episodesIn);
            //console.log(tagsIn);

            var APIRequest = {
                method: 'POST',
                url: 'https://podsurfer-4.herokuapp.com/api/podcast',
                headers:
                {
                    Authorization: 'Bearer ' + token
                },
                data: {
                    name : nameIn,
                    link : linkIn,
                    release : releaseIn,
                    producer : producerIn,
                    length : lengthIn,
                    description : descriptionIn,
                    episodes: episodesIn,
                    tags: tagsIn,
                    imageURL : imageURLIn
                }
            }
            return $http(APIRequest);
        }

        function editP(nameIn, linkIn, releaseIn, producerIn, lengthIn, episodesIn, tagsIn, descriptionIn, idIn){

            //console.log(nameIn + " " + linkIn + " " + releaseIn + " " + producerIn + " " + lengthIn + " " + descriptionIn);

            var editRequest = {
                method: 'PUT',
                url: 'https://podsurfer-4.herokuapp.com/api/podcast/' + idIn,
                headers:
                {
                    Authorization: 'Bearer ' + token
                },
                data: {
                    name : nameIn,
                    link : linkIn,
                    release : releaseIn,
                    producer : producerIn,
                    length : lengthIn,
                    episodes: episodesIn,
                    tags: tagsIn,
                    description : descriptionIn


                }
            }
            return $http(editRequest);
        }





    }

})();