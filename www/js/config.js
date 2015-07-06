//FOR WORDPRESS INTEGRATION 
var Wordpress_UserName = "humoristics.worpress.com";

//FOR FLICKR INTEGRATION
var Api_Key = "477a6eb655b448de7fffcb16ae4455b2";
var User_Key = "133690617@N02";


angular.module('starter.config', [])
    .constant('WORDPRESS_API_URL', 'https://public-api.wordpress.com/rest/v1.1/')
    .constant('FLICKR_API_URL', 'https://api.flickr.com/services/rest/?&method=flickr.galleries.getList&api_key='+Api_Key+'&user_id='+User_Key+'&format=json&nojsoncallback=1')
    .constant('FLICKR_GALLERY_API_URL', 'https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&api_key='+Api_Key+'&')

;