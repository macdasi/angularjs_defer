'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test1App
 */
var app = angular.module('test1App');

app.controller('MainCtrl',  ['$scope','factory1' ,'service1',function ($scope,factory1,service1) {

  $scope.started = false;
  $scope.sum =  0;

  $scope.start = function(begin){
    if(begin){

     // factory1.start();
      service1.start();
      $scope.started = true;
    }
    else{

    //  factory1.stop();
      service1.stop();
      $scope.started = false;
    }
  };

  var promise = service1.notify('Robin Hood');
  promise.then(function(greeting) {
    alert('Success: ' + greeting);
  }, function(reason) {
    alert('Failed: ' + reason);
  }, function(update) {
    $scope.sum = update;
  });

 // var promise = factory1.notify('Robin Hood');
 // promise.then(function(greeting) {
 //   alert('Success: ' + greeting);
 // }, function(reason) {
  //  alert('Failed: ' + reason);
 // }, function(update) {
   // $scope.sum = update;
 // });


  }]);
