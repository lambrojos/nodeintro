'use strict';

angular.module('handlingNinja')
  .service('Ninja',function($resource){
    var Ninja = $resource('http://localhost:8080/api/ninja/:_id',{_id: '@_id'});
    return Ninja;
  });
