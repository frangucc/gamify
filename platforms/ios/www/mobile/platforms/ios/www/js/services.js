'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('starter.services', []).
  value('version', '0.1')

    .factory('MessagesService', ['$firebase', 'FIREBASE_URI', function ($firebase, FIREBASE_URI) {
        var ref = new Firebase(FIREBASE_URI);
        var messages = $firebase(ref);

//            {id: 1, message: "hello world!", sender: "Me"},
//            {id: 2, message: "hello world", sender: "You"},
//            {id: 3, message: "world!", sender: "Me"},
//            {id: 4, message: "hello world!", sender: "Me"},
//            {id: 5, message: "hello!", sender: "You"},
//            {id: 6, message: "hello world!", sender: "Me"}

        var getMessages = function() {
            return messages;
        };

        var addMessage = function (message) {
            messages.$add(message);
        };

        var removeMessage = function (id) {
            messages.$remove(id);
        };

        return {
            getMessages: getMessages,
            addMessage: addMessage,
            removeMessage: removeMessage
        }
    }])

    .factory('LoginService', ['$rootScope', function ($rootScope) {
        var loginWithEmail = function (email, password) {
            return $rootScope.loginObj.$login('password', {
                email: email,
                password: password
            }).then(function (user) {
                $rootScope.loginObj.user = user;
            }, function (error) {
                $rootScope.loginError = error;
            });
        };

        var loginWithGitHub = function () {
            return $rootScope.loginObj.$login('github', {
                preferRedirect: false
            }).then(function (user) {
                $rootScope.loginObj.user = user;
            }, function (error) {
                $rootScope.loginError = error;
            });
        };

        return {
            loginWithEmail: loginWithEmail,
            loginWithGitHub: loginWithGitHub
        }
    }]);
