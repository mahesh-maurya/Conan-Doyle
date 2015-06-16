// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','wu.masonry'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
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
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
.state('user-login', {
      url: "/user-login",
          templateUrl: "templates/user-login.html",
          controller: 'UserloginCtrl'
    })
  .state('user-signup', {
      url: "/user-signup",
     
          templateUrl: "templates/user-signup.html",
          controller: 'UsersignupCtrl'
     
    })
     .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html",
                    controller: 'HomeCtrl'
                }
            }
        })
    .state('app.contact', {
            url: "/contact",
            views: {
                'menuContent': {
                    templateUrl: "templates/contact.html",
                    controller: 'ContactCtrl'
                }
            }
        })
    .state('app.setting', {
            url: "/setting",
            views: {
                'menuContent': {
                    templateUrl: "templates/setting.html",
                    controller: 'SettingCtrl'
                }
            }
        })
      .state('app.gallery', {
            url: "/gallery",
            views: {
                'menuContent': {
                    templateUrl: "templates/gallery.html",
                    controller: 'GalleryCtrl'
                }
            }
        })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/user-login');
})

.filter('inSlicesOf', ['$rootScope',
         function ($rootScope) {
            makeSlices = function (items, count) {
                if (!count)
                    count = 3;

                if (!angular.isArray(items) && !angular.isString(items)) return items;

                var array = [];
                for (var i = 0; i < items.length; i++) {
                    var chunkIndex = parseInt(i / count, 10);
                    var isFirst = (i % count === 0);
                    if (isFirst)
                        array[chunkIndex] = [];
                    array[chunkIndex].push(items[i]);
                }

                if (angular.equals($rootScope.arrayinSliceOf, array))
                    return $rootScope.arrayinSliceOf;
                else
                    $rootScope.arrayinSliceOf = array;

                return array;
            };

            return makeSlices;
         }]);