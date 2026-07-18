"use strict";var d=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var s=d(function(g,v){
var i=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),q=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/symbol-iterator/dist'),x=require('@stdlib/stats-incr-maxabs/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function o(n){var r,u,a;if(!m(n))throw new TypeError(p('1KF3w',n));return a=x(),r={},i(r,"next",f),i(r,"return",c),t&&q(n[t])&&i(r,t,l),r;function f(){var e;return u?{done:!0}:(e=n.next(),e.done?(u=!0,e):(typeof e.value=="number"?e=a(e.value):e=a(NaN),{value:e,done:!1}))}function c(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return o(n[t]())}}v.exports=o
});var y=s();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
