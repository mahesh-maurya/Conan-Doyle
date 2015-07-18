//FOR TUMBLR INTEGRATION 
var Tumblr_UserName = "worstcats.tumblr.com";

//FOR FLICKR INTEGRATION
var Api_Key = "3e67f6179c11014cc027c6a944d7d9fb";
var User_Key = "132717193@N04";

angular.module('starter.config', [])
    .constant('TUBMLR_API_URL', 'http://wohlig.co.in/tumblr/?url=http://api.tumblr.com/v2/blog/' + Tumblr_UserName + '/')
    .constant('FLICKR_API_URL', 'https://api.flickr.com/services/rest/?&method=flickr.galleries.getList&api_key='+Api_Key+'&user_id='+User_Key+'&format=json&nojsoncallback=1')
    .constant('FLICKR_GALLERY_API_URL', 'https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&api_key='+Api_Key+'&')

;