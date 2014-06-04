angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('MessagesCtrl', function($scope, $ionicPopup, MessagesService, $q, $timeout, $location) {
    $scope.newMessage = { message: "", sender: "" };
    $scope.messages = MessagesService.getMessages();
    $scope.user = {};

    $scope.loginObj.$getCurrentUser().then(function (user) {
        if(user === null) {
            $location.path('/app/signin');
        }
    });

    $scope.sendMessage = function () {
        if($scope.newMessage.message.length > 0) {
            $scope.newMessage.sender = $scope.loginObj.user.email;
            MessagesService.addMessage(angular.copy($scope.newMessage));
            $scope.newMessage = { message: "", sender: "" };
        } else if ($scope.loginObj.user === null) {
            $ionicPopup.alert({
                title: 'Failed to send',
                template: 'Please sign in to send messages.'
            }).then(function () {
                $location.path('/app/signin');
            });
        } else {
            $ionicPopup.alert({
                title: 'Failed to send',
                template: 'No message entered to send.'
            });
        }
    };

    $scope.doRefresh = function () {
        var defer = $q.defer();
        $timeout(function () {
            defer.resolve();
        }, 3000);

        return defer.promise.finally(function () {
            $scope.$broadcast('scroll.refreshComplete');
            $ionicPopup.alert({
               title: "That did nothing! Was just an example!"
            });
        });
    };

    $scope.removeMessage = function (id) {
        MessagesService.removeMessage(id);
    };

    $scope.$on("$firebaseSimpleLogin:logout", function(e) {
        // Could do handle of logout here to redirect
    });
})

.controller('LoginCtrl', function ($scope, $location, $ionicPopup, $ionicLoading, LoginService) {
    $scope.userDetails = {};

    $scope.performLogin = function () {
        $ionicLoading.show({
            template: 'signing in...'
        });
        LoginService.loginWithEmail($scope.userDetails.email, $scope.userDetails.password).then(function () {
            if($scope.loginObj.user !== null) {
                $location.path('/app/messages');
            } else {
                var error = $scope.loginError;
                switch(error.code) {
                    case 'INVALID_EMAIL':
                    case 'INVALID_PASSWORD':
                    default:
                        $ionicPopup.alert({
                            title: 'Login error.',
                            template: 'Failed to login email or password was incorrect.'
                        });
                }
            }
            $ionicLoading.hide();
        });
    };

    $scope.performLoginGit = function () {
        LoginService.loginWithGitHub().then(function () {
            console.log($scope.loginObj.user);
        });
    }

    $scope.showInvalid = function () {
        $ionicPopup.alert({
            title: 'Invalid login.',
            template: 'Invalid email or password, please try again.'
        });
    };
});
