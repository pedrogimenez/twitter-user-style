
// ==UserScript==
// @name        Twitter User Style
// @namespace   https://github.com/maccman/twitter-user-style
// @version     0.1
// @match       *://twitter.com/*
// ==/UserScript==

(function(){

var style       = document.createElement('style');
style.type      = 'text/css';
style.innerHTML = ".site-footer,.trends,.wtf-module.has-content,.enhanced-media-thumbnails,.mini-profile,.chev-right,.module[data-component-term^=\"profile_tweetbox\"],.bird-topbar-etched{display:none!important}.content-main{float:none;margin:0 auto}.wrapper{width:520px}.global-nav .container{width:550px}.global-nav #global-actions li span.text{display:none}#global-actions.nav i{margin-right:0}.nav .nav-new{margin-left:-12px}.global-nav .form-search{width:170px}.global-nav .search-input{width:110px}.global-nav .search-input.focus{width:130px}.push-loader{right:20px;left:auto}.dashboard{position:absolute;left:-210px;width:200px}.module{border:none}.module .list-link{border-top:none;-webkit-transition:all .1s linear;-moz-transition:all .1s linear}.module{-webkit-box-shadow:0 -1px 0 rgba(0,0,0,.2);-moz-box-shadow:0 -1px 0 rgba(0,0,0,.2);box-shadow:0 1px 0 rgba(0,0,0,.2)}.module .list-link{background-color:rgba(255,255,255,.5);color:#333;text-shadow:0 1px 0 rgba(255,255,255,.3);-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.module:hover .list-link{background-color:rgba(255,255,255,.7)}.module .list-link:hover,.module .active .list-link{color:#111}.module .list-link:hover,.module .active .list-link{background-color:rgba(255,255,255,.9)}.wrapper.black .module{-webkit-box-shadow:0 1px 0 rgba(255,255,255,.1);-moz-box-shadow:0 1px 0 rgba(255,255,255,.1);box-shadow:0 1px 0 rgba(255,255,255,.1),inset 0 0 5px rgba(0,0,0,.3)}.wrapper.black .module .list-link{background-color:rgba(0,0,0,.3);color:#ccc;text-shadow:0 1px 0 rgba(0,0,0,.5);-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.wrapper.black .module:hover .list-link{background-color:rgba(0,0,0,.5)}.wrapper.black .module .list-link:hover,.wrapper.black .module .active .list-link{color:#eee}.wrapper.black .module .list-link:hover,.wrapper.black .module .active .list-link{background-color:rgba(0,0,0,.7)}.signup-call-out .holding input[type=text],.signup-call-out .holding input[type=password]{width:160px}.signup-call-out input[type=submit]{width:170px}.profile-card.profile-header .bio{font-family:Georgia,serif;font-style:italic}";

document.head.appendChild(style);

})();