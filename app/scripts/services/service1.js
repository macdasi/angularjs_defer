/**
 * Created by Bitusi on 09/03/2015.
 */
angular.module('test1App')
  .service('service1', function ($q) {

    var deferred = $q.defer();
    var timer = 0,index = 0;



   // setTimeout(function() {
     // if (okToGreet(name)) {
      //  deferred.resolve('Hello, ' + name + '!');
      //} else {
      //  deferred.reject('Greeting ' + name + ' is not allowed.');
     // }
//    }, 2000);

    this.update = function(){
      index ++;
      deferred.notify(index);
    };

    this.start = function(){
      var self = this;
      timer = setInterval(function(){
        self.update();
        console.log('updtae from service');
      },1000);
    };

    this.stop = function(){
      clearInterval(timer);
    };

    this.notify = function(name){
      return deferred.promise;
    };


  });
