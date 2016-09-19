(function() {
    'use strict';

    angular.module('app')
        .controller('searchController', favoritesController);

    searchController.$inject = [];
    function searchController() {
        var vm = this;
        vm.message = 'Search bar';
    }
})();
