!function(){return function e(n,t,r){function o(d,a){if(!t[d]){if(!n[d]){var u="function"==typeof require&&require;if(!a&&u)return u(d,!0);if(i)return i(d,!0);var c=new Error("Cannot find module '"+d+"'");throw c.code="MODULE_NOT_FOUND",c}var f=t[d]={exports:{}};n[d][0].call(f.exports,function(e){var t=n[d][1][e];return o(t||e)},f,f.exports,e,n,t,r)}return t[d].exports}for(var i="function"==typeof require&&require,d=0;d<r.length;d++)o(r[d]);return o}}()({1:[function(e,n,t){(function(e){"use strict";function n(e){chrome.runtime.sendMessage({method:"addScript",data:"js/"+e+".js"})}function t(){var e=document.createElement("script");e.src=chrome.runtime.getURL("js/baidu.js"),document.body.appendChild(e)}void 0!==e.browser&&(e.chrome=e.browser),window.addEventListener("message",function(e){"yunData"===e.data.type&&(window.yunData=e.data.data,window.location.href.includes("/disk/home")?n("home"):n("share"))}),"complete"===document.readyState?t():window.addEventListener("load",t)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);