(function(){
    'use strict'

    angular
        .module('app')
        .service('addService', addService);

    addService.$inject = ['$http', '$cookies'];

    function addService($http, $cookies){

        var addPodcast = function(nameIn, linkIn, releaseIn, producerIn, lengthIn, descriptionIn, tagIn, header]){
            method: 'POST'
            url: 'https://podsurfer-4.herokuapp.com/api/podcast/',
                headers: {

                Authorization: 'Bearer ' + value
            }

        }

        return $http(addPodcast);


    }

})();