/*! vue-adfit-component v.1.0.0 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-adfit-component",[],e):"object"==typeof exports?exports["vue-adfit-component"]=e():t["vue-adfit-component"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";function o(){return"function"==typeof window.adfit?Promise.resolve():Object(r.a)("//t1.daumcdn.net/adfit/static/ad.min.js")}var r=n(4),i=n(5);e.a={props:{adUnit:{type:String,required:!0},adTest:{type:String,required:!1,default:"N"},adStyle:{type:String,required:!1,default:"display: none"},adClass:{type:String,required:!1,default:"adfit_ad_area"}},mounted:function(){var t=this;o().then(function(){var e=Object(i.a)();window["adfit-"+e+"-onload"]=function(n){t.$emit("ad-loaded",n),window["adfit-"+e+"-onload"]=null},t.$el.setAttribute("data-ad-onload","adfit-"+e+"-onload"),window["adfit-"+e+"-onfail"]=function(n){t.$emit("ad-failed",n),window["adfit-"+e+"-onfail"]=null},t.$el.setAttribute("data-ad-onfail","adfit-"+e+"-onfail");try{window.adfit.render(t.$el)}catch(t){throw t}})},beforeDestroy:function(){try{window.adfit.destroy(this.adUnit)}catch(t){throw t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r={install:function(t){t.component("adfit-banner",o.a)}};o.a.install=r.install,e.default={Banner:o.a}},function(t,e,n){"use strict";var o=n(0),r=n(6),i=n(3),a=i(o.a,r.a,!1,null,null,null);e.a=a.exports},function(t,e){t.exports=function(t,e,n,o,r,i){var a,d=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,d=t.default);var s="function"==typeof d?d.options:d;e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),r&&(s._scopeId=r);var f;if(i?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},s._ssrRegister=f):o&&(f=o),f){var c=s.functional,l=c?s.render:s.beforeCreate;c?(s._injectStyles=f,s.render=function(t,e){return f.call(e),l(t,e)}):s.beforeCreate=l?[].concat(l,f):[f]}return{esModule:a,exports:d,options:s}}},function(t,e,n){"use strict";function o(t){return new Promise(function(e,n){var o=document.createElement("script");o.async=!0,o.onload=function(){document.head.removeChild(o),e()},o.onerror=function(){document.head.removeChild(o),n()},o.src=t,document.head.appendChild(o)})}e.a=o},function(t,e,n){"use strict";e.a=function(){return Math.random().toString(36).substr(2,9)}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("ins",{class:t.adClass,style:t.adStyle,attrs:{"data-ad-test":t.adTest,"data-ad-unit":t.adUnit}})},r=[],i={render:o,staticRenderFns:r};e.a=i}])});
//# sourceMappingURL=vue-adfit-component.dist.js.map