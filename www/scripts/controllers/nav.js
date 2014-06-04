'use strict';

app.controller('NavCtrl', function($scope, $location, Post, Auth){
  $scope.post = { url: 'http://', title: '' };

  $scope.submitPost = function() {
    Post.create($scope.post).then(function(response){
      $location.path('/posts/' + response.name());
      $scope.post = { url: 'http://', title: '' };
    });
  };

  $scope.logout = function() {
    Auth.logout();
  };

});