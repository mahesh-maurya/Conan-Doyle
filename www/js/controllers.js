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

            } else {
                $scope.classa = '';
                $scope.classb = "map-active";

            }
        };
    })
    .controller('SettingCtrl', function($scope, $stateParams) {})
    .controller('GalleryCtrl', function($scope, $stateParams) {
        $scope.gallery = [{
            imagename: "People",
            imgpath: "img/gallery/images.jpg"
        }, {
            imagename: "People",
            imgpath: "img/gallery/people1.jpg"
        },{
            imagename: "Nature",
            imgpath: "img/gallery/nature1.jpg"
        },{
            imagename: "Nature",
            imgpath: "img/gallery/nature2.jpg"
        },{
            imagename: "People",
            imgpath: "img/gallery/people2.jpg"
        },{
            imagename: "Nature",
            imgpath: "img/gallery/nature3.jpg"
        },{
            imagename: "People",
            imgpath: "img/gallery/people3.jpg"
        },{
            imagename: "people",
            imgpath: "img/gallery/people4.jpg"
        },{
            imagename: "Nature",
            imgpath: "img/gallery/nature4.jpg"
        },{
            imagename: "People",
            imgpath: "img/gallery/nature6.jpg"
        },{
            imagename: "People",
            imgpath: "img/gallery/nature5.jpg"
        },{
            imagename: "Nature",
            imgpath: "img/gallery/nature7.jpg"
        },{
            imagename: "People",
            imgpath: "img/gallery/nature8.jpg"
        },{
            imagename: "Nature",
            imgpath: "img/gallery/nature9.jpg"
        }];
//        $scope.gallery=partitionarray($scope.gallery,3);
   
    })
    .controller('UsersignupCtrl', function($scope, $stateParams) {});