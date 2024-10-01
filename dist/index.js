"use strict";var d=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var s=d(function(g,v){
var i=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),q=require('@stdlib/assert-is-function/dist'),u=require('@stdlib/symbol-iterator/dist'),x=require('@stdlib/stats-incr-maxabs/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function o(n){var r,t,a;if(!m(n))throw new TypeError(p('1KF3w',n));return a=x(),r={},i(r,"next",f),i(r,"return",c),u&&q(n[u])&&i(r,u,l),r;function f(){var e;return t?{done:!0}:(e=n.next(),e.done?(t=!0,e):(typeof e.value=="number"?e=a(e.value):e=a(NaN),{value:e,done:!1}))}function c(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return o(n[u]())}}v.exports=o
});var y=s();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
