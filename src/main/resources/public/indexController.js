/**
 * Created by Jason on 11/28/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('indexController',indexController);

    indexController.$inject = ['indexService', '$cookies'];


    function indexController(indexService, $cookies) {
        var vm = this;
        vm.title = 'Index';
        vm.showHide = 'true';

        vm.index = function index() {

            var success = function(response) {

               //change de button
                vm.showHide = true;

               // $cookies.putObject('userId',response.data._id);

            }

            var error = function(response) {
                vm.showHide = false;

            }
            return indexService.getUserInfo().then(success, error);

        };








        // When the page loads, automatically invoke this function
        vm.index();
    }

})();