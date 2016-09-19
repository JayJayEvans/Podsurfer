(function() {
    'use strict';

    angular.module('app')
        .controller('searchController', searchController);

    searchController.$inject = [];
    function searchController() {
        var vm = this;
        vm.message = 'Search bar';
    }
})();
