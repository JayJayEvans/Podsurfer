(function() {
    'use strict';

    angular
        .module('app')
        .controller('singularPodcastController', singularPodcastController);

    singularPodcastController.$inject = ['$http', 'returnPodcasts'];

    function singularPodcastController($http, returnPodcasts) {
        var vm = this;
        vm.title = 'Return Podcasts';
        var temp;

        ////
        vm.returnPodcast = function returnPodcast() {

            returnPodcasts.getFunc().then(function (response) {
                    vm.hold = response;
                },
                function (reason) {
                    console.log('Failed call');
                    vm.hold = [];
                });

            return returnPodcasts.getFunc();

        }
    }

    })();