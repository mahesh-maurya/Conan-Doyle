var abc = 0;
angular.module('starter.controllers', [])
    .controller('AppCtrl', function($scope, $ionicScrollDelegate) {


        //****** Code For changing header color on scrolling ******


        $scope.navClass = 'bar-stable';

        var maindele = $ionicScrollDelegate;
        abc = maindele;

        $scope.mainscrolling = function() {

            var topscroll = maindele.getScrollPosition().top;
            var oncomblack = 600.0;
            var coloropacity = topscroll / oncomblack;
            $(".navClass ion-header-bar").css("background", "-webkit-gradient(linear, left top, left bottom, color-             stop(0%,rgba(64, 62, 93," + coloropacity + ")), color-stop(100%,rgba(255,255,255,0.00)))");

        };

        //    ****** End ******

    })

.controller('ArticlesCtrl', function($scope) {

    //    * * * * * * Code For Show More texts * * * * * *

    $scope.showDetails = "dontshow";
    $scope.moredetails = "Read More";
    $scope.showmore = function() {
        var newheight = $(".moretext").height();
        console.log(newheight);
        console.log("show more clicked");
        if ($scope.showDetails == "showmore") {
            $scope.showDetails = "dontshow";
            $(".addanimation").height(0);
            $scope.moredetails = "Read More";
        } else {
            $scope.showDetails = "showmore";
            $(".addanimation").height(newheight);
            $scope.moredetails = "Hide";
        }

    };


    //    * * * * * * End * * * * * *


    //    ****** More Text Json Format data ******


    $scope.moretext = [{
        more: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam aliquet ultrices dignissim. Donec pretium et dui ut imperdiet. Aliquam et urna non neque tempor vehicula at quis justo. Ut eleifend odio justo, et finibus mi aliquet vitae. Etiam euismod dapibus arcu nec pellentesque. Suspendisse faucibus velit ornare, tincidunt massa in, ullamcorper lectus. Quisque semper venenatis nulla, at auctor libero pharetra ultrices. Duis ut enim egestas, varius lorem ac, sodales sapien."

    }];


    //    ****** End ******

})
    .controller('HomeCtrl', function($scope, $ionicScrollDelegate, $window) {

        //****** Code For changing header color on scrolling ******


        $scope.navClass = 'bar-stable';
        angular.element($window).bind(
            "scroll", function() {
                console.log(window.pageYOffset);
                if (window.pageYOffset > 0) {
                    $scope.navClass = 'bar-stables';
                } else {
                    $scope.navClass = 'bar-stable';
                }
                $scope.$apply();
            });

        //    ****** End ******

        //        ***** tabchange ****

        $scope.tab = 'popular';
        $scope.classa = 'active';
        $scope.classb = '';
        $scope.classc = '';
        $scope.tabchange = function(tab, a) {
            //        console.log(tab);
            $scope.tab = tab;
            if (a == 1) {
                $ionicScrollDelegate.scrollTop();
                $scope.classa = "active";
                $scope.classb = '';
                $scope.classc = '';
            } else if (a == 2) {
                $ionicScrollDelegate.scrollTop();
                $scope.classa = '';
                $scope.classb = "active";
                $scope.classc = '';
            } else {
                $ionicScrollDelegate.scrollTop();
                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "active";
            }
        };


        //            ******** end *******


        //    ****** Home Page Images Tab Json Format Data *******

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

        //    ******* End ******

    })


.controller('UserloginCtrl', function($scope, $stateParams) {})


.controller('FaqCtrl', function($scope, $stateParams) {

    //    ****** More Text Json Format data ******


    $scope.showDetails = "dontshow";
    $scope.moredetails = "Read More";
    $scope.showmores = function(index) {
        console.log(index);
        var newheight = $(".animationfaq" + index).height();
        console.log(newheight);
        $(".faqhead").height(0);
        $(".faqhead" + index).height(newheight + 10);

    };


    //    ****** End ******



    //    ****** FAQ Json Format data ******


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

    //    ****** End ******


})
    .controller('AboutCtrl', function($scope, $stateParams, $window, $ionicScrollDelegate) {


        //    ****** About Content Json Format data ******

        $scope.abouthead = [{
            content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."

        }];
        $scope.content = [{
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a massa sit amet justo pretium condimentum. Integer sed lectus sit amet leo dictum ullamcorper nec in tellus. Quisque vitae venenatis eros, vitae venenatis eros. Maecenas nec leo non tortor dignissim fermentum sed aliquet ligula."

        }];
        $scope.moretext = [{
            more: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam aliquet ultrices dignissim. Donec pretium et dui ut imperdiet. Aliquam et urna non neque tempor vehicula at quis justo. Ut eleifend odio justo, et finibus mi aliquet vitae. Etiam euismod dapibus arcu nec pellentesque. Suspendisse faucibus velit ornare, tincidunt massa in, ullamcorper lectus. Quisque semper venenatis nulla, at auctor libero pharetra ultrices. Duis ut enim egestas, varius lorem ac, sodales sapien."

        }];

        //    ****** End ******


        //    ****** More Text Json Format data ******


        $scope.showDetails = "dontshow";
        $scope.moredetails = "Read More";
        $scope.showmore = function() {
            var newheight = $(".moretext").height();
            console.log(newheight);
            console.log("show more clicked");
            if ($scope.showDetails == "showmore") {
                $scope.showDetails = "dontshow";
                $(".addanimation").height(0);
                $scope.moredetails = "Read More";
            } else {
                $scope.showDetails = "showmore";
                $(".addanimation").height(newheight);
                $scope.moredetails = "Hide";
            }

        };

        //***** End ******


    })
    .controller('ContactCtrl', function($scope, $stateParams) {

        //        ***** tabchange ****

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

        //    ****** End ******

    })


.controller('SettingCtrl', function($scope, $stateParams) {})


.controller('GallerycategoryCtrl', function($scope, $stateParams, $ionicModal, $ionicSlideBoxDelegate) {
    
    //    ****** Gallery Images Json Format data ******

    $scope.fashion = [{
        imgpath: "img/gallery/fashion/fashion1.jpg"
    }, {
        imgpath: "img/gallery/fashion/fashion2.jpg"
    }, {
        imgpath: "img/gallery/fashion/fashion3.jpg"
    }, {
        imgpath: "img/gallery/fashion/fashion4.jpg"
    }, {
        imgpath: "img/gallery/fashion/fashion5.jpg"
    }];

    $scope.art = [{
        imgpath: "img/gallery/art/art1.jpg"
    }, {
        imgpath: "img/gallery/art/art2.jpg"
    }, {
        imgpath: "img/gallery/art/art3.jpg"
    }, {
        imgpath: "img/gallery/art/art4.jpg"
    }];

    $scope.travel = [{
        imgpath: "img/gallery/travel/travel1.jpg"
    }, {
        imgpath: "img/gallery/travel/travel2.jpg"
    }, {
        imgpath: "img/gallery/travel/travel3.jpg"
    }];

    $scope.people = [{
        imgpath: "img/gallery/people/people1.jpg"
    }, {
        imgpath: "img/gallery/people/people2.jpg"
    }, {
        imgpath: "img/gallery/people/people3.jpg"
    }, {
        imgpath: "img/gallery/people/people4.jpg"
    }];

    $scope.nature = [{
        imgpath: "img/gallery/nature/nature1.jpg"
    }, {
        imgpath: "img/gallery/nature/nature2.jpg"
    }, {
        imgpath: "img/gallery/nature/nature3.jpg"
    }, {
        imgpath: "img/gallery/nature/nature4.jpg"
    }, {
        imgpath: "img/gallery/nature/nature5.jpg"
    }];

    $scope.business = [{
        imgpath: "img/gallery/business/business1.jpg"
    }, {
        imgpath: "img/gallery/business/business2.jpg"
    }, {
        imgpath: "img/gallery/business/business3.jpg"
    }];
    
    $scope.miscellaneous = [{
        imgpath: "img/gallery/business/business1.jpg"
    }, {
        imgpath: "img/gallery/business/business2.jpg"
    }, {
        imgpath: "img/gallery/business/business3.jpg"
    }];
    
//    ****** End ******
    
    
//    ****** Code For Calling Images ******
    
    var tobesplit = [];

    $scope.titletext = $stateParams.id;
    switch ($stateParams.id) {
        case "Art":
            tobesplit = $scope.art;
            break;
        case "Travel":
            tobesplit = $scope.travel;
            break;
        case "Fashion":
            tobesplit = $scope.fashion;
            break;
        case "Business":
            tobesplit = $scope.business;
            break;
        case "Nature":
            tobesplit = $scope.nature;
            break;
        case "People":
            tobesplit = $scope.people;
            break;
        case "Miscellaneous":
            tobesplit = $scope.miscellaneous;
            break;

    }
    
    
    $scope.innergallery = tobesplit;
    $scope.newgallery = splitarray(tobesplit, 2);
    
//    ****** End *******
    
//    ****** Code For Open Image In popup ******

    $ionicModal.fromTemplateUrl('templates/galleryimages.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;

        $scope.modal.show();
        console.log($ionicSlideBoxDelegate.slide(0));
        $ionicSlideBoxDelegate.update();
        $scope.modal.hide();
    });


    $scope.firstslide = false;
    $scope.openModal = function(index) {
        console.log(index);
        $scope.firstslide = true;
        $scope.modal.show();
        setTimeout(function() {
            $ionicSlideBoxDelegate.slide(index);
        }, 100);

    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    
//    ****** End *******

})
    .controller('GalleryCtrl', function($scope, $stateParams) {
    
    //    ****** Code For Calling Images Json Format ******
    
    
        $scope.gallery = [{
            id: 1,
            imagename: "People",
            imgpath: "img/gallery/images.jpg"
        }, {
            id: 2,
            imagename: "Travel",
            imgpath: "img/gallery/people1.jpg"
        }, {
            id: 3,
            imagename: "Nature",
            imgpath: "img/gallery/nature6.jpg"
        }, {
            id: 4,
            imagename: "Art",
            imgpath: "img/gallery/nature2.jpg"
        }, {
            id: 5,
            imagename: "Miscellaneous",
            imgpath: "img/gallery/people2.jpg"
        }, {
            id: 6,
            imagename: "Fashion",
            imgpath: "img/gallery/people3.jpg"
        }, {
            id: 7,
            imagename: "Business",
            imgpath: "img/gallery/nature5.jpg"
        }];

//     ****** End ******
    
    
        $scope.gallerynew = splitarray($scope.gallery, 2);
    
    })


    .controller('UsersignupCtrl', function($scope, $stateParams) {});