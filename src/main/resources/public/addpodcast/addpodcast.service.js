(function(){
    'use strict'

    angular
        .module('app')
        .service('addService', addService);

    addService.$inject = ['$http', '$cookies'];

    function addService($http, $cookies){
        var token = $cookies.get('userObj');
        // console.log(token);
        if(token != null)
            token = token.substring(10, token.length - 2);


        var exports = {
            addP:addP
        };
        return exports;

        function addP(nameIn, linkIn, releaseIn, producerIn, lengthIn, descriptionIn){

            //console.log(nameIn + " " + linkIn + " " + releaseIn + " " + producerIn + " " + lengthIn + " " + descriptionIn);

            var addRequest = {
                method: 'POST',
                url: 'https://podsurfer-4.herokuapp.com/api/podcast',
                headers:
                {
                    Authorization: 'Bearer ' + token
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