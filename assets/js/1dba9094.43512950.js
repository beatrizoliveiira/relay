/*! For license information please see 1dba9094.43512950.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[65217],{62579:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(94184),r=n.n(a),i=n(67294),l=function(e){var t,n=r()("container",e.className,{darkBackground:"dark"===e.background,highlightBackground:"highlight"===e.background,lightBackground:"light"===e.background,paddingAll:e.padding.indexOf("all")>=0,paddingBottom:e.padding.indexOf("bottom")>=0,paddingLeft:e.padding.indexOf("left")>=0,paddingRight:e.padding.indexOf("right")>=0,paddingTop:e.padding.indexOf("top")>=0});return t=e.wrapper?i.createElement("div",{className:"wrapper"},e.children):e.children,i.createElement("div",{className:n,id:e.id},t)};l.defaultProps={background:null,padding:[],wrapper:!0};const o=l},37264:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(62579),r=n(52263),i=n(16561),l=n(67294),o=function(){var e=(0,r.default)().siteConfig.customFields.users.map((function(e){return l.createElement("a",{href:e.infoLink,key:e.caption},l.createElement("img",{src:e.image,title:e.caption}))}));return l.createElement("div",{className:"mainContainer"},l.createElement(a.Z,{padding:["bottom","top"]},l.createElement("div",{className:"showcaseSection"},l.createElement("div",{className:"prose"},l.createElement("h1",null,"Who's Using Relay?"),l.createElement("p",null,"Relay is used by many folks")),l.createElement("div",{className:"logos"},e),l.createElement("p",null,"Are you using this project?"),l.createElement("a",{href:"https://github.com/facebook/relay/edit/master/website/docusaurus.config.js",className:"button"},"Add your project"))))};const s=function(e){return l.createElement(i.Z,null,l.createElement(o,e))}},94184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var o in n)a.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);