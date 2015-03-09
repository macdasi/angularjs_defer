/**
 * Created by Bitusi on 09/03/2015.
 */
angular.module('test1App')
  .factory('srv1', function ($q) {
    var self = this;
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

    var start = function(){

      timer = setInterval(function(){
        self.update();
        console.log('updtae');
      },1000);
    };

    var stop = function(){
      clearInterval(timer);
    };

    var notify = function(name){
      return deferred.promise;
    };

    return {
      start :start ,
      stop : stop ,
      notify : notify
    }

  });
