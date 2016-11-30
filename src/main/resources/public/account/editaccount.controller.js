/**
 * Created by Jason on 10/26/2016.
 */
 /*
(function() {
    'use strict';

    angular
        .module('app')
        .controller('editaccountController',editaccountController);

    editaccountController.$inject = ['myeditAccount', '$cookies'];

    function editaccountController( myeditAccount, $cookies) {
        var vm = this;
        vm.title = 'EditAccount';

        vm.editaccount = function editaccount(name, interests, bookmarks) {
            var success = function(response) {
                document.getElementById("acc_id").innerHTML = 'ID: ' + response.data._id;
                $cookies.putObject('userId',response.data._id);
                document.getElementById("accName").innerHTML = 'Name: ' + response.data.name;
                document.getElementById("accEmail").innerHTML = 'Email: ' + response.data.email;
                document.getElementById("accBookMarks").innerHTML = 'Booked: ' + response.data.bookmarks;
                document.getElementById("accInt").innerHTML = 'Interests: ' + response.data.interests;

            };

            var error = function(response) {
                console.error('Failed');
                console.error($cookies.get('userObj'))
                location.href = '#/login';
                alert('You must be signed in to view your profile');
            };

            return myeditAccount.fetcheditUser(name,interests,bookmarks).then(success, error);
        }
    }

})();
*/