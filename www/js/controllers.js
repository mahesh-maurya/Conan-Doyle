angular.module('starter.controllers', [])
    .controller('AppCtrl', function($scope) {})
    .controller('HomeCtrl', function($scope) {})
    .controller('UserloginCtrl', function($scope, $stateParams) {})
    .controller('FaqCtrl', function($scope, $stateParams) {})
    .controller('AboutCtrl', function($scope, $stateParams) {
    
          $scope.abouthead = [{
            content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
           
        }];
     $scope.content = [{
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a massa sit amet justo pretium condimentum. Integer sed lectus sit amet leo dictum ullamcorper nec in tellus. Quisque vitae venenatis eros, vitae venenatis eros. Maecenas nec leo non tortor dignissim fermentum sed aliquet ligula."
           
        }];
     $scope.moretext = [{
            more: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam aliquet ultrices dignissim. Donec pretium et dui ut imperdiet. Aliquam et urna non neque tempor vehicula at quis justo. Ut eleifend odio justo, et finibus mi aliquet vitae. Etiam euismod dapibus arcu nec pellentesque. Suspendisse faucibus velit ornare, tincidunt massa in, ullamcorper lectus. Quisque semper venenatis nulla, at auctor libero pharetra ultrices. Duis ut enim egestas, varius lorem ac, sodales sapien."
           
        }];
       
        $scope.showDetails = "dontshow";
        $scope.moredetails = "Read More";
        $scope.showmore = function() {
            console.log("show more clicked");
            if ($scope.showDetails=="showmore") {
                $scope.showDetails = "dontshow";
                $scope.moredetails = "Read More";
            } else {
                $scope.showDetails = "showmore";
                $scope.moredetails = "Hide";
            }

        };
    })
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
        }, {
            imagename: "Nature",
            imgpath: "img/gallery/nature1.jpg"
        }, {
            imagename: "Nature",
            imgpath: "img/gallery/nature2.jpg"
        }, {
            imagename: "People",
            imgpath: "img/gallery/people2.jpg"
        }, {
            imagename: "Nature",
            imgpath: "img/gallery/nature3.jpg"
        }, {
            imagename: "People",
            imgpath: "img/gallery/people3.jpg"
        }, {
            imagename: "people",
            imgpath: "img/gallery/people4.jpg"
        }, {
            imagename: "Nature",
            imgpath: "img/gallery/nature4.jpg"
        }, {
            imagename: "People",
            imgpath: "img/gallery/nature6.jpg"
        }, {
            imagename: "People",
            imgpath: "img/gallery/nature5.jpg"
        }, {
            imagename: "Nature",
            imgpath: "img/gallery/nature7.jpg"
        }, {
            imagename: "People",
            imgpath: "img/gallery/nature8.jpg"
        }, {
            imagename: "Nature",
            imgpath: "img/gallery/nature9.jpg"
        }];
       

    })
    .controller('UsersignupCtrl', function($scope, $stateParams) {});