angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope) {})
.controller('HomeCtrl', function($scope) {})
.controller('UserloginCtrl', function($scope, $stateParams) {})
.controller('ContactCtrl', function($scope, $stateParams) {

$scope.tab = 'form-set';
       $scope.classa = 'map-active';
        $scope.classb = '';
    
     $scope.tabchange = function(tab, a) {
          
            $scope.tab = tab;
            if (a == 1) {
                $scope.classa = "map-active";
                $scope.classb = '';
               
            }  else {
                $scope.classa = '';
                $scope.classb = "map-active";
                
            }
        };
})
.controller('SettingCtrl', function($scope, $stateParams) {})
.controller('GalleryCtrl', function($scope, $stateParams) {})
.controller('UsersignupCtrl', function($scope, $stateParams) {});
