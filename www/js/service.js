
var adminurl = "http://www.wohlig.co.in/LightSaberBackend/index.php/json/";
var post = [];

var myservices = angular.module('myservices', []);

myservices.factory('MyServices', function($http) {

    var returnval = {};

    returnval.getPosts = function(callback) {
//        return $http.get("http://wohlig.co.in/tumblr/?url=http://api.tumblr.com/v2/blog/holyartsandcraftsbatman.tumblr.com/posts").success(callback);
        return $http.get("http://wohlig.co.in/tumblr/?url=http://api.tumblr.com/v2/blog/jagrutiworld.tumblr.com/posts").success(callback);
    };
    
    returnval.postDetail = function(post) {
        $.jStorage.set("detail",post);
//        if($.jStorage.get("detail")){callback;}
    };
    
    returnval.getPostDetail = function() {
        return $.jStorage.get("detail");
    };
    
    return returnval;
});