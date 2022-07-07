"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _vueRouter=require("vue-router");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var r,o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e){Object.prototype.hasOwnProperty.call(e,i)&&((r=n?Object.getOwnPropertyDescriptor(e,i):null)&&(r.get||r.set)?Object.defineProperty(o,i,r):o[i]=e[i])}return o.default=e,t&&t.set(e,o),o}var routes=[{path:"/",name:"home",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("../views/HomeView.vue"))})}},{path:"/invest-section",name:"InvestSection",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("../views/InvestSection.vue"))})}},{path:"/about-section",name:"AboutSection",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("../views/AboutSection.vue"))})}},{path:"/portfolio-section",name:"PortfolioSection",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("../views/PortfolioSection.vue"))})}},{path:"/service-section",name:"ServiceSection",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("../views/ServiceSection.vue"))})}},{path:"/contact-section",name:"ContactSection",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("../views/ContactSection.vue"))})}},{path:"/blog-section",name:"BlogSection",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("../views/BlogSection.vue"))})}}],router=(0,_vueRouter.createRouter)({history:(0,_vueRouter.createWebHashHistory)(),routes:routes}),_default=router;exports.default=router;