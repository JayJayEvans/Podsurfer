<<<<<<< HEAD
=======
/**
 *Created by Hank Harrison on 10/18/2016
 * Update History:
 *
 */
/*
>>>>>>> ff5d5cbc4f0bced999a7edfd501de867c604dc8c
(function(){
    'use strict';

    angular
        .module('app')
        .service('returnPodcasts', returnPodcasts);

    returnPodcasts.$inject = ['$http'];

    function returnPodcasts($http){

        var exports = {
            getFunc: getFunc
        };

        function getFunc(){
            //return $http.jsonp("https://podsurfer-4.herokuapp.com/api/podcast");

            var getRequest = {
                method: 'GET',
                url : 'https://podsurfer-4.herokuapp.com/api/podcast',

            }
            return $http(getRequest);
        }
        return exports;
    }
})();*/