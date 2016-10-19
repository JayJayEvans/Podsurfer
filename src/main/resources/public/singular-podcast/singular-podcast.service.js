/**
 *Created by Hank Harrison on 10/18/2016
 * Update History:
 *
 */
/*
(function(){
    'use strict';

    angular
        .module('app')
        .service('singularPodcastService', singularPodcastService);

    singularPodcastService.$inject = ['$http'];

    function singularPodcastService($http){
        var exports = {
            getFunc: getFunc
        };


        function getFunc(){
            //return $http.jsonp("https://podsurfer-4.herokuapp.com/api/podcast");

            var getRequest = {
                method: 'GET',
                url : 'https://podsurfer-4.herokuapp.com/api/podcast',
                //headers?
            }
            return $http(getFunc);
        }
        return exports;
    }
})();*/