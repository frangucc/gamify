'use strict';
angular.module('Pals.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Let Us Bro Somewhere', id: 1 },
    { title: 'Let Us Have a Lan Party', id: 2 },
    { title: 'Dyno Fishing', id: 3 },
    { title: 'Edward Norton', id: 4 },
    { title: 'Tatoo Brothers', id: 5 },
    { title: 'Tandem Mountain Biking', id: 6 }
  ];
})

.controller('WebCtrl', function($scope) {
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
