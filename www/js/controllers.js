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
            imgpath: "img/blog/work/work-popular.jpg"
        }, {
            imagename: "fringilla blandit ligula",
            imgpath: "img/blog/travel/travel-popular.jpg"
        }, {
            imagename: "Nulla hendrerit ",
            imgpath: "img/blog/fashion/fashion-popular.jpg"
        }, {
            imagename: "Lorem ipsum dolor",
            imgpath: "img/blog/art/art-popular.jpg"
        }, {
            imagename: "Fusce nisl nisl",
            imgpath: "img/blog/food/food-popular.jpg"
        }, {
            imagename: "Nam aliquejpg",
            imgpath: "img/blog/business/business-popular.jpg"
        }, {
            imagename: "suscipit sit amet ",
            imgpath: "img/blog/nature/nature-popular.jpg"
        }, {
            imagename: "Donec quis",
            imgpath: "img/blog/sports/sports-popular.jpg"
        }, {
            imagename: "Etiam euismod",
            imgpath: "img/blog/Miscellaneous/misc-popular.jpg"
        }];
 $scope.latests = [{
            imagename: "Lower Kintaganban River",
            imgpath: "img/blog/work/work-latest.jpg"
        }, {
            imagename: "fringilla blandit ligula",
            imgpath: "img/blog/travel/travel-latest.jpg"
        }, {
            imagename: "Nulla hendrerit ",
            imgpath: "img/blog/fashion/fashion-latest.jpg"
        }, {
            imagename: "Lorem ipsum dolor",
            imgpath: "img/blog/art/art-latest.jpg"
        }, {
            imagename: "Fusce nisl nisl",
            imgpath: "img/blog/food/food-latest.jpg"
        }, {
            imagename: "suscipit sit amet ",
            imgpath: "img/blog/nature/nature-latest.jpg"
        }, {
            imagename: "Donec quis",
            imgpath: "img/blog/sports/sports-latest.jpg"
        }, {
            imagename: "Etiam euismod",
            imgpath: "img/blog/Miscellaneous/misc-latest.jpg"
        }];
$scope.featureds = [{
            imagename: "Lower Kintaganban River",
            imgpath: "img/blog/work/work-featured.jpg"
        }, {
            imagename: "fringilla blandit ligula",
            imgpath: "img/blog/travel/travel-featured.jpg"
        }, {
            imagename: "Nulla hendrerit ",
            imgpath: "img/blog/fashion/fashion-featured.jpg"
        }, {
            imagename: "Lorem ipsum dolor",
            imgpath: "img/blog/art/art-featured.jpg"
        }, {
            imagename: "Fusce nisl nisl",
            imgpath: "img/blog/food/food-featured.jpg"
        }, {
            imagename: "suscipit sit amet ",
            imgpath: "img/blog/nature/nature-featured.jpg"
        }, {
            imagename: "Donec quis",
            imgpath: "img/blog/sports/sports-featured.jpg"
        }, {
            imagename: "Etiam euismod",
            imgpath: "img/blog/Miscellaneous/misc-featured.jpg"
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
    .controller('GallerycategoryCtrl', function($scope, $stateParams) {
$scope.gallery = [{
            imagename: "People",
            imgpath: "img/gallery/images.jpg"
        }, {
            imagename: "Travel",
            imgpath: "img/gallery/people1.jpg"
        }, {
            imagename: "Nature",
            imgpath: "img/gallery/nature6.jpg"
        }, {
            imagename: "Art",
            imgpath: "img/gallery/nature2.jpg"
        }, {
            imagename: "Miscellaneous",
            imgpath: "img/gallery/people2.jpg"
        }, {
            imagename: "Fashion",
            imgpath: "img/gallery/people3.jpg"
        }, {
            imagename: "Busniess",
            imgpath: "img/gallery/nature5.jpg"
        }];
})
    .controller('GalleryCtrl', function($scope, $stateParams) {
        $scope.gallery = [{
            imagename: "People",
            imgpath: "img/gallery/images.jpg"
        }, {
            imagename: "Travel",
            imgpath: "img/gallery/people1.jpg"
        }, {
            imagename: "Nature",
            imgpath: "img/gallery/nature6.jpg"
        }, {
            imagename: "Art",
            imgpath: "img/gallery/nature2.jpg"
        }, {
            imagename: "Miscellaneous",
            imgpath: "img/gallery/people2.jpg"
        }, {
            imagename: "Fashion",
            imgpath: "img/gallery/people3.jpg"
        }, {
            imagename: "Busniess",
            imgpath: "img/gallery/nature5.jpg"
        }];


    })
    .controller('UsersignupCtrl', function($scope, $stateParams) {});