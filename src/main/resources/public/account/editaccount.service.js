/**
 * Created by Jason on 10/26/2016.
 */
 /*
(function() {
    'use strict';

    angular
        .module('app')
        .service('myeditAccount', myeditAccount);

    myeditAccount.$inject = ['$http', '$cookies'];

    function myeditAccount($http, $cookies) {
        var value = $cookies.get('userObj');
        if(value != null)
            value = value.substring(10, value.length - 2);

        var exports = {
            fetcheditUser: fetcheditUser
        };

        return exports;


        function fetcheditUser(namer, interestsr, bookmarksr) {
            var userRequest = {
                method: 'PUT',
                url: 'https://podsurfer-4.herokuapp.com/api/user/',
                headers: {

                    Authorization: 'Bearer ' + value
                },
                data : {
                    name: namer
                    //interests: interestsr,
                    //bookmarks: bookmarksr
                }

            }
            return $http(userRequest);
        }
    }
})();*/