"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["projects-splash-dialog"],{59753:(e,t,n)=>{function r(){if(!(this instanceof r))return new r;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}n.d(t,{f:()=>L,S:()=>I,on:()=>q});var o,i=window.document.documentElement,s=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;r.prototype.matchesSelector=function(e,t){return s.call(e,t)},r.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},r.prototype.indexes=[];var c=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(c))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var a=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(a))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var l=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(l))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),r.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},o="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var u=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function f(e,t){var n,r,o,i,s,c,a=(e=e.slice(0).concat(e.default)).length,l=t,f=[];do if(u.exec(""),(o=u.exec(l))&&(l=o[3],o[2]||!l)){for(n=0;n<a;n++)if(s=(c=e[n]).selector(o[1])){for(r=f.length,i=!1;r--;)if(f[r].index===c&&f[r].key===s){i=!0;break}i||f.push({index:c,key:s});break}}while(o)return f}function d(e,t){var n,r,o;for(n=0,r=e.length;n<r;n++)if(o=e[n],t.isPrototypeOf(o))return o}function h(e,t){return e.id-t.id}r.prototype.logDefaultIndexUsed=function(){},r.prototype.add=function(e,t){var n,r,i,s,c,a,l,u,h=this.activeIndexes,p=this.selectors,v=this.selectorObjects;if("string"==typeof e){for(r=0,v[(n={id:this.uid++,selector:e,data:t}).id]=n,l=f(this.indexes,e);r<l.length;r++)s=(u=l[r]).key,(c=d(h,i=u.index))||((c=Object.create(i)).map=new o,h.push(c)),i===this.indexes.default&&this.logDefaultIndexUsed(n),(a=c.map.get(s))||(a=[],c.map.set(s,a)),a.push(n);this.size++,p.push(e)}},r.prototype.remove=function(e,t){if("string"==typeof e){var n,r,o,i,s,c,a,l,u=this.activeIndexes,d=this.selectors=[],h=this.selectorObjects,p={},v=1==arguments.length;for(o=0,n=f(this.indexes,e);o<n.length;o++)for(r=n[o],i=u.length;i--;)if(c=u[i],r.index.isPrototypeOf(c)){if(a=c.map.get(r.key))for(s=a.length;s--;)(l=a[s]).selector===e&&(v||l.data===t)&&(a.splice(s,1),p[l.id]=!0);break}for(o in p)delete h[o],this.size--;for(o in h)d.push(h[o].selector)}},r.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,n,r,o,i,s,c,a,l={},u=[],f=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,r=f.length;t<r;t++)for(n=0,i=f[t],o=(s=this.matches(i)).length;n<o;n++)l[(a=s[n]).id]?c=l[a.id]:(c={id:a.id,selector:a.selector,data:a.data,elements:[]},l[a.id]=c,u.push(c)),c.elements.push(i);return u.sort(h)},r.prototype.matches=function(e){if(!e)return[];var t,n,r,o,i,s,c,a,l,u,f,d=this.activeIndexes,p={},v=[];for(t=0,o=d.length;t<o;t++)if(a=(c=d[t]).element(e)){for(n=0,i=a.length;n<i;n++)if(l=c.map.get(a[n]))for(r=0,s=l.length;r<s;r++)!p[f=(u=l[r]).id]&&this.matchesSelector(e,u.selector)&&(p[f]=!0,v.push(u))}return v.sort(h)};var p={},v={},g=new WeakMap,m=new WeakMap,y=new WeakMap,b=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function k(e,t,n){var r=e[t];return e[t]=function(){return n.apply(e,arguments),r.apply(e,arguments)},e}function w(e,t,n){var r=[],o=t;do{if(1!==o.nodeType)break;var i=e.matches(o);if(i.length){var s={node:o,observers:i};n?r.unshift(s):r.push(s)}}while(o=o.parentElement)return r}function x(){g.set(this,!0)}function S(){g.set(this,!0),m.set(this,!0)}function E(){return y.get(this)||null}function j(e,t){b&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t||b.get})}function F(e){try{return e.eventPhase,!0}catch(e){return!1}}function O(e){if(F(e)){var t=(1===e.eventPhase?v:p)[e.type];if(t){var n=w(t,e.target,1===e.eventPhase);if(n.length){k(e,"stopPropagation",x),k(e,"stopImmediatePropagation",S),j(e,E);for(var r=0,o=n.length;r<o&&!g.get(e);r++){var i=n[r];y.set(e,i.node);for(var s=0,c=i.observers.length;s<c&&!m.get(e);s++)i.observers[s].data.call(i.node,e)}y.delete(e),j(e)}}}}function q(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=!!o.capture,s=i?v:p,c=s[e];c||(c=new r,s[e]=c,document.addEventListener(e,O,i)),c.add(t,n)}function I(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=!!r.capture,i=o?v:p,s=i[e];s&&(s.remove(t,n),s.size||(delete i[e],document.removeEventListener(e,O,o)))}function L(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n}))}},1744:(e,t,n)=>{var r=n(59753);let o=document.querySelector("dialog.js-splash-dialog");function i(e){o&&("Escape"===e.key||"Esc"===e.key?(o.querySelector("button").click(),e.stopPropagation()):"Tab"===e.key&&l(e))}function s(e){let{target:t}=e;t instanceof Node&&!o.contains(t)&&o.querySelector("button").click()}function c(e){return e.tabIndex>=0&&!e.disabled&&a(e)}function a(e){return!e.hidden&&(!e.type||"hidden"!==e.type)&&(e.offsetWidth>0||e.offsetHeight>0)}function l(e){if(!o)return;e.preventDefault();let t=Array.from(o.querySelectorAll("a, button")).filter(c);if(0===t.length)return;let n=e.shiftKey?-1:1,r=o.getRootNode(),i=o.contains(r.activeElement)?r.activeElement:null,s=-1===n?-1:0;if(i instanceof HTMLElement){let e=t.indexOf(i);-1!==e&&(s=e+n)}s<0?s=t.length-1:s%=t.length,t[s].focus()}o&&document.addEventListener("keydown",i),o&&document.addEventListener("click",s),window.addEventListener("load",function(){o?.querySelector("a")?.focus()}),(0,r.on)("click",".js-dismiss-splash-dialog",function(){o&&document.removeEventListener("keydown",i),o&&document.removeEventListener("click",s)}),(0,r.on)("click",".js-dismiss-splash-dialog-link",function(){o?.querySelector("button")?.click()})}},e=>{var t=e(e.s=1744)}]);
//# sourceMappingURL=projects-splash-dialog-0c292872cd82.js.map