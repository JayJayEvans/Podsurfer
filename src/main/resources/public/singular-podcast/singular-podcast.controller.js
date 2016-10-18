/**
 *Created by Hank Harrison on 10/18/2016
 * Update History:
 *
 */

(function() {
    'use strict';

    angular
        .module('app')
        .controller('singularPodcastController', singularPodcastController);

    singularPodcastController.$inject = ['$http', 'singularPodcastService'];

    function singularPodcastController($http, singularPodcastService) {
        var vm = this;
        var temp;


         singularPodcastService.getFunc().then(function(response){
             vm.hold = response;
         },
             function(reason){
                 console.log('Failed call');
                 vm.hold = [];
             });

    }

    })();