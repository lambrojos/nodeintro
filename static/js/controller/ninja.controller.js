'use strict';

angular.module('handlingNinja')
    .controller('NinjaCtrl', function($scope, Ninja, _ /*, mySocket*/){

        // LISTEN TO SOCKET.IO EVENTS
        // ==========================A
        /*
        mySocket.on('connected',function(data){
            console.info(data);
        });

        mySocket.on('created', function(ninja){
            $scope.ninjas.push(new Ninja(ninja));
        });

        mySocket.on('deleted', function(ninja){
            _.remove($scope.ninjas, {_id: ninja._id});
        });

        mySocket.on('changed', function(ninja){
            var id = _.findIndex($scope.ninjas, {_id: ninja._id});
            $scope.ninjas[id] = new Ninja(ninja);
        });
        */
        // CRUD FUNCTIONS
        // ==========================

      $scope.ninjas = [];

      $scope.detail = null;

      $scope.loadNinja = function(){
        $scope.ninjas = Ninja.query();
      };

      $scope.newNinja = {name: null, age: null};

      $scope.createNinja = function(){
        var ninja = new Ninja($scope.newNinja);

        ninja.$save().then(function(res){
          $scope.newNinja = {name: null, age: null};
          $scope.ninjas.push(new Ninja(ninja));
        });
      };

      $scope.getNinja = function(_id){
          Ninja.get({_id: _id}).$promise.then(function(ninja){

            if(!ninja){
              throw new Error('Ninja not found! Where is he hiding?');
            }
            $scope.ninja = ninja;
            $scope.detail = true;
          });
      };

      $scope.updateNinja = function(){
        $scope.ninja.$save().then(function(res){

          $scope.detail = null;
          $scope.loadNinja();
        });
      };

      $scope.deleteNinja = function(ninja){
        ninja.$remove();
        _.remove($scope.ninjas, {_id: ninja._id});
      };

      $scope.loadNinja();
    });
