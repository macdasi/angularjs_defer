'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test1App
 */
var app = angular.module('test1App');

app.controller('MainCtrl',  ['$scope','srv1' ,function ($scope,srv1) {

  $scope.started = false;
  $scope.sum =  0;

  $scope.start = function(begin){
    if(begin){

      srv1.start();
      $scope.started = true;
    }
    else{

      srv1.stop();
      $scope.started = false;
    }
  };


  var promise = srv1.notify('Robin Hood');
  promise.then(function(greeting) {
    alert('Success: ' + greeting);
  }, function(reason) {
    alert('Failed: ' + reason);
  }, function(update) {
    $scope.sum = update;
  });


  }]);
