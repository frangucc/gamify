
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'UserApp', 'firebase', 'starter.controllers', 'starter.services', 'starter.directives', 'starter.filters', 'starter.config'])


.run(function($ionicPlatform, user) {
  // Initiate the user service with your UserApp App Id
  // https://help.userapp.io/customer/portal/articles/1322336-how-do-i-find-my-app-id-
  user.init({ appId: '5392677a81696' });

  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


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
      templateUrl: "/templates/menu.html",
      controller: 'AppCtrl',
      data: {
        public: true
      }
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "/templates/search.html"
        }
      }
    })
    .state('app.team', {
      url: "/team",
      views: {
        'menuContent' :{
          templateUrl: "/templates/team.html"
        }
      }
    })
    .state('app.tasker', {
      url: "/tasker",
      views: {
        'menuContent' :{
          templateUrl: "/templates/tasker.html"
        }
      }
    })
    .state('app.jobs', {
      url: "/jobs",
      views: {
        'menuContent' :{
          templateUrl: "/templates/jobs.html"
        }
      }
    })

    .state('app.messages', {
      url: "/messages",
      views: {
        'menuContent' :{
          templateUrl: "/templates/messages.html",
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
              templateUrl: "/templates/about.html"
              //controller: 'AboutCtrl'
          }
      }
    })
    // the login with facebook route
    .state('app.login-facebook', {
      url: '/login-facebook',
      views: {
        'menuContent' : {
          templateUrl: "/templates/signin.html",
          controller: 'LoginCtrl'
        }
      },
      data: {
        login: true
      }
    })


    // the login route
    .state('app.login', {
      url: '/login',
      views: {
        'menuContent' : {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      },
      data: {
        public: true
      }
    })

    // the signup route
    .state('app.signup', {
      url: '/signup',
      views: {
        'menuContent' : {
          templateUrl: 'templates/signup.html',
          controller: 'LoginCtrl'
        }
      },
      data: {
        public: true
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "/templates/playlist.html",
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

