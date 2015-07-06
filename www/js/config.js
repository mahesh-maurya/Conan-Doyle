//FOR TUMBLR INTEGRATION 
var Tumblr_UserName = "wohligtechnology.tumblr.com";

//FOR FLICKR INTEGRATION
var Api_Key = "477a6eb655b448de7fffcb16ae4455b2";
var User_Key = "133690617@N02";


angular.module('starter.config', [])
    .constant('TUBMLR_API_URL', 'http://wohlig.co.in/tumblr/?url=http://api.tumblr.com/v2/blog/' + Tumblr_UserName + '/')
    .constant('FLICKR_API_URL', 'https://api.flickr.com/services/rest/?&method=flickr.galleries.getList&api_key='+Api_Key+'&user_id='+User_Key+'&format=json&nojsoncallback=1')
    .constant('FLICKR_GALLERY_API_URL', 'https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&api_key='+Api_Key+'&')

;