var adminurl = "http://www.wohlig.co.in/LightSaberBackend/index.php/json/";
var post = [];
var WORDPRESS_URL = "https://public-api.wordpress.com/rest/v1.1/";

var myservices = angular.module('myservices', []);

myservices.factory('MyServices', function($http) {

    var returnval = {};

    returnval.getPosts = function(callback) {
        //        return $http.get("http://wohlig.co.in/tumblr/?url=http://api.tumblr.com/v2/blog/holyartsandcraftsbatman.tumblr.com/posts").success(callback);
        //        return $http.get("http://wohlig.co.in/tumblr/?url=http://api.tumblr.com/v2/blog/humoristics.tumblr.com/posts").success(callback);
        return $http.get("http://wohlig.co.in/tumblr/?url=http://api.tumblr.com/v2/blog/wohligtechnology.tumblr.com/posts").success(callback);
        //        return $http.get("http://wohlig.co.in/tumblr/?url=http://api.tumblr.com/v2/blog/jamiewignall.tumblr.com/posts").success(callback);
    };

    returnval.getFlickrGallary = function(callback) {
        return $http.get("https://api.flickr.com/services/rest/?&method=flickr.galleries.getList&api_key=477a6eb655b448de7fffcb16ae4455b2&user_id=133690617@N02&format=json&nojsoncallback=1").success(callback);
    };

    returnval.getFlickrGallaryPhotos = function(id, callback) {
        return $http.get("https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&api_key=477a6eb655b448de7fffcb16ae4455b2&gallery_id=" + id + "&format=json&nojsoncallback=1").success(callback);
    };

    returnval.getWordpressPosts = function(callback) {
        var getdata = function(data, status) {
            return $http.get(data.meta.links.posts + "?page=100").success(callback);
        }
        $http.get(WORDPRESS_URL + "sites/koreanindo.net").success(getdata);
    };
    returnval.getSiteComment = function(callback) {
        var getdata = function(data, status) {
            return $http.get(data.meta.links.comments).success(callback);
        }
        $http.get(WORDPRESS_URL + "sites/koreanindo.net").success(getdata);
    };

    returnval.getWordpressPostsById = function(callback) {
        $http.get($.jStorage.get('detail')).success(callback);
    };

    returnval.getFreshlyPressed = function(callback) {
        $http.get(WORDPRESS_URL + "freshly-pressed/?number=20").success(callback);
    };

    returnval.postDetail = function(post) {
        $.jStorage.set("detail", post);
    };

    returnval.getPostDetail = function() {
        return $.jStorage.get("detail");
    };

    return returnval;
});