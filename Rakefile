require 'yui/compressor'

task :build do
  compressor = YUI::CssCompressor.new
  css        = compressor.compress(File.read('./twitter.css'))
  result     = DATA.gsub('${CSS}', css.inspect)
  File.open('twitter.user.js', 'w+') {|f| f.write result }
end

task :default => :build

DATA = %{
// ==UserScript==
// @name        Twitter User Style
// @namespace   https://github.com/maccman/twitter-user-style
// @version     0.1
// @match       *://twitter.com/*
// ==/UserScript==

(function(){

var style       = document.createElement('style');
style.type      = 'text/css';
style.innerHTML = ${CSS};

var head = document.getElementsByTagName('head')[0];
(head || document.body).appendChild(style);

})();}