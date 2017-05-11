'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
$scope.phones = [
{'name': 'Nexus', 'desc': 'string 1.', 'status': true},

{'name': 'Galaxy S8', 'desc': 'Lorem ipsum .', 'status': false},

{'name': 'Iphone 7', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'status': true}
];


//Filters
var date = new Date();
$scope.today = date;

$scope.sortField = undefined;
$scope.reverse = false;

$scope.sort = function(fieldName) {
    if($scope.sortField === fieldName) {
        $scope.reverse = !$scope.reverse;
    } else {
        $scope.sortField = fieldName;
            $scope.reverse = false;
    }
}

});

