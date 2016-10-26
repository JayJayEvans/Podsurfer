(function(){
    'use strict'

    angular
        .module('app')
        .service('addService', addService);

    addService.$inject = ['$http', '$cookies'];

    function addService($http, $cookies){
        var value = $cookies.get('userObj');
        if(value != null)
            value = value.substring(10, value.length - 2);


        var exports = {
            addP:addP
        };
        return exports;

        function addP(nameIn, linkIn, releaseIn, producerIn, lengthIn, descriptionIn){


            var addRequest = {
                method: 'POST',
                url: 'https://podsurfer-4.herokuapp.com/api/podcast',
                headers:
                {
                    Authorization: 'Bearer ' + value
                },
                data: {
                    name : nameIn,
                    link : linkIn,
                    release : releaseIn,
                    producer : producerIn,
                    length : lengthIn,
                    description : descriptionIn


                }
            }
            return $http(addRequest);
        }




    }

})();