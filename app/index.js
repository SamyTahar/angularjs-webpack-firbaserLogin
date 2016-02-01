var angular = require('angular');
require('angularfire');
var firebase  = require('firebase');


angular.module('app',['firebase'])
    .controller('myLoginCtrl', function($scope, $firebaseObject){

            var ref = new Firebase("https://tripfriendizer.firebaseio.com/");

        $scope.messages = $firebaseObject(ref);

});
