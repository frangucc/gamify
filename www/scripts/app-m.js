
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'starter.services', 'starter.directives', 'starter.filters', 'starter.config'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "/www/templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "/www/templates/search.html"
        }
      }
    })
    .state('app.team', {
      url: "/team",
      views: {
        'menuContent' :{
          templateUrl: "/www/templates/team.html"
        }
      }
    })
    .state('app.tasker', {
      url: "/tasker",
      views: {
        'menuContent' :{
          templateUrl: "/www/templates/tasker.html"
        }
      }
    })
    .state('app.jobs', {
      url: "/jobs",
      views: {
        'menuContent' :{
          templateUrl: "/www/templates/jobs.html"
        }
      }
    })

    .state('app.messages', {
      url: "/messages",
      views: {
        'menuContent' :{
          templateUrl: "/www/templates/messages.html",
          controller: "MessagesCtrl"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "/templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.about', {
      url: "/about",
      views: {
          'menuContent' :{
              templateUrl: "/www/templates/about.html"
              //controller: 'AboutCtrl'
          }
      }
    })
    .state('app.signin', {
      url: "/signin",
      views: {
          'menuContent' :{
              templateUrl: "/www/templates/signin.html",
              controller: 'LoginCtrl'
          }
      }
    })
    .state('app.signup', {
        url: "/signup",
        views: {
          'menuContent' :{
              templateUrl: "/www/templates/signup.html"
              //controller: 'AboutCtrl'
          }
        }
    })
    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "/www/templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/about');
})

.run(['$firebaseSimpleLogin', 'FIREBASE_URI', '$rootScope', function ($firebaseSimpleLogin, FIREBASE_URI, $rootScope) {
    $rootScope.loginObj = $firebaseSimpleLogin(new Firebase(FIREBASE_URI));
}]);

