angular.module('starter.controllers', [])
    .controller('AppCtrl', function($scope) {})
    .controller('ArticlesCtrl', function($scope) {
    
       $scope.showDetails = "dontshow";
        $scope.moredetails = "Read More";
        $scope.showmore = function() {
            console.log("show more clicked");
            if ($scope.showDetails == "showmore") {
                $scope.showDetails = "dontshow";
                $scope.moredetails = "Read More";
            } else {
                $scope.showDetails = "showmore";
                $scope.moredetails = "Hide";
            }

        };
  $scope.moretext = [{
            more: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam aliquet ultrices dignissim. Donec pretium et dui ut imperdiet. Aliquam et urna non neque tempor vehicula at quis justo. Ut eleifend odio justo, et finibus mi aliquet vitae. Etiam euismod dapibus arcu nec pellentesque. Suspendisse faucibus velit ornare, tincidunt massa in, ullamcorper lectus. Quisque semper venenatis nulla, at auctor libero pharetra ultrices. Duis ut enim egestas, varius lorem ac, sodales sapien."

        }];

})
    .controller('HomeCtrl', function($scope) {
    
         //        ***** tabchange ****

        $scope.tab = 'popular';
        $scope.classa = 'active';
        $scope.classb = '';
        $scope.classc = '';
        $scope.tabchange = function(tab, a) {
            //        console.log(tab);
            $scope.tab = tab;
            if (a == 1) {
                $scope.classa = "active";
                $scope.classb = '';
                $scope.classc = '';
            } else if (a == 2) {
                $scope.classa = '';
                $scope.classb = "active";
                $scope.classc = '';
            } else {
                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "active";
            }
        };


        //            ******** end *******
 $scope.populars = [{
            imagename: "Lower Kintaganban River",
            imgpath: "img/blog/work/work-popular.png"
        }, {
            imagename: "fringilla blandit ligula",
            imgpath: "img/blog/travel/travel-popular.png"
        }, {
            imagename: "Nulla hendrerit ",
            imgpath: "img/blog/fashion/fashion-popular.png"
        }, {
            imagename: "Lorem ipsum dolor",
            imgpath: "img/blog/art/art-popular.png"
        }, {
            imagename: "Fusce nisl nisl",
            imgpath: "img/blog/food/food-popular.png"
        }, {
            imagename: "Nam aliquet",
            imgpath: "img/blog/business/business-popular.png"
        }, {
            imagename: "suscipit sit amet ",
            imgpath: "img/blog/nature/nature-popular.png"
        }, {
            imagename: "Donec quis",
            imgpath: "img/blog/sports/sports-popular.png"
        }, {
            imagename: "Etiam euismod",
            imgpath: "img/blog/Miscellaneous/misc-popular.png"
        }];
 $scope.latests = [{
            imagename: "Lower Kintaganban River",
            imgpath: "img/blog/work/work-latest.png"
        }, {
            imagename: "fringilla blandit ligula",
            imgpath: "img/blog/travel/travel-latest.png"
        }, {
            imagename: "Nulla hendrerit ",
            imgpath: "img/blog/fashion/fashion-latest.png"
        }, {
            imagename: "Lorem ipsum dolor",
            imgpath: "img/blog/art/art-latest.png"
        }, {
            imagename: "Fusce nisl nisl",
            imgpath: "img/blog/food/food-latest.png"
        }, {
            imagename: "suscipit sit amet ",
            imgpath: "img/blog/nature/nature-latest.png"
        }, {
            imagename: "Donec quis",
            imgpath: "img/blog/sports/sports-latest.png"
        }, {
            imagename: "Etiam euismod",
            imgpath: "img/blog/Miscellaneous/misc-latest.png"
        }];
$scope.featureds = [{
            imagename: "Lower Kintaganban River",
            imgpath: "img/blog/work/work-featured.png"
        }, {
            imagename: "fringilla blandit ligula",
            imgpath: "img/blog/travel/travel-featured.png"
        }, {
            imagename: "Nulla hendrerit ",
            imgpath: "img/blog/fashion/fashion-featured.png"
        }, {
            imagename: "Lorem ipsum dolor",
            imgpath: "img/blog/art/art-featured.png"
        }, {
            imagename: "Fusce nisl nisl",
            imgpath: "img/blog/food/food-featured.png"
        }, {
            imagename: "suscipit sit amet ",
            imgpath: "img/blog/nature/nature-featured.png"
        }, {
            imagename: "Donec quis",
            imgpath: "img/blog/sports/sports-featured.png"
        }, {
            imagename: "Etiam euismod",
            imgpath: "img/blog/Miscellaneous/misc-featured.png"
        }];


})
    .controller('UserloginCtrl', function($scope, $stateParams) {})
    .controller('FaqCtrl', function($scope, $stateParams) {


        $scope.showDetails = "dontshow";
        $scope.moredetails = "Read More";
        $scope.showmores = function(index) {
            console.log(index)
            $scope.ind = index;
            console.log("show more clicked");
            if ($scope.showDetails == "showmores") {
                $scope.showDetails = "dontshow";
                $scope.moredetails = "Read More";
            } else {
                $scope.showDetails = "showmores";
                $scope.moredetails = "Hide";
            }

        };
        $scope.faq = [{
            id: 0,
            qsn: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry ? ",
            ans: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid."
        }, {
            id: 1,
            qsn: "Nulla nisi dolor, tempus non urna id, volutpat tempus massa ? ",
            ans: "Praesent aliquet orci vel varius egestas. Suspendisse commodo massa ligula, eu lobortis sem ultricies convallis."
        }, {
            id: 2,
            qsn: "Phasellus pulvinar sollicitudin nisi, at commodo augue molestie at.?  ",
            ans: "Nam tempor fringilla posuere. Donec lacinia sed odio ac interdum"
        }, {
            id: 3,
            qsn: "Nullam pharetra vehicula suscipit ? ",
            ans: "Nunc lacinia justo non libero sollicitudin imperdiet."
        }, {
            id: 4,
            qsn: "Morbi placerat lectus ac neque cursus, molestie pulvinar ipsum posuere? ",
            ans: " In vitae ultricies mi, sit amet pharetra ex. Suspendisse condimentum pulvinar erat sed venenatis."
        }];



    })
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
            if ($scope.showDetails == "showmore") {
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