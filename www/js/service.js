
var post = [];

var myservices = angular.module('myservices', []);

myservices.factory('MyServices', function($http,TUBMLR_API_URL,FLICKR_API_URL,FLICKR_GALLERY_API_URL) {

    var returnval = {};

    returnval.getPosts = function(callback) {
        return $http.get(TUBMLR_API_URL+"posts").success(callback);
    };
    
    returnval.getFlickrGallary = function(callback) {
        return $http.get(FLICKR_API_URL).success(callback);
    };
    
    returnval.getFlickrGallaryPhotos = function(id, callback) {
        return $http.get(FLICKR_GALLERY_API_URL+"gallery_id="+id+"&format=json&nojsoncallback=1").success(callback);
    };
    
    
    returnval.postDetail = function(post) {
        $.jStorage.set("detail",post);
    };
    
    returnval.getPostDetail = function() {
        return $.jStorage.get("detail");
    };
    
    return returnval;
});