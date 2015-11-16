'use strict';

angular.module('handlingNinja')
    .factory('mySocket', function (socketFactory) {

        console.log(io);
        var myIoSocket = io.connect('http://127.0.0.1:3000');

        var mySocket = socketFactory({
            ioSocket: myIoSocket
        });

        return mySocket;
    });
