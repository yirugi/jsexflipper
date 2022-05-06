(window._vfP=window._vfP||[]).push([[5],{524:function(e,t,n){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FocusTrap=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(5)),i={install:function(e){e.component("focus-trap",o.default)}};"undefined"!=typeof window&&window.Vue&&window.Vue.component("focus-trap",o.default),t.default=i,t.FocusTrap=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2);t.default={props:{active:{type:Boolean,default:!0},paused:{type:Boolean,default:!1},initialFocus:{default:void 0},deactivateOnEsc:{type:Boolean,default:!0},deactivateOnOutsideClick:{type:Boolean,default:!1},returnFocusOnDeactivate:{type:Boolean,default:!0},allowOutsideClick:{type:Function,default:null},focusOnActivate:{type:Boolean,default:!0}},data:function(){return{focusTrap:null}},computed:{elementFocus:function(){return!1!==this.focusOnActivate&&this.initialFocus}},mounted:function(){this.initFocusTrap()},beforeDestroy:function(){this.focusTrap.deactivate()},methods:{initFocusTrap:function(){this.setFocusTrap(),this.active&&this.focusTrap.activate(),this.paused&&this.focusTrap.pause()},setFocusTrap:function(){this.$set(this,"focusTrap",(0,o.createFocusTrap)(this.$el,{onActivate:this.onActivate,onDeactivate:this.onDeactivate,initialFocus:this.elementFocus,escapeDeactivates:this.deactivateOnEsc,clickOutsideDeactivates:this.deactivateOnOutsideClick,returnFocusOnDeactivate:this.returnFocusOnDeactivate,allowOutsideClick:this.allowOutsideClick}))},onActivate:function(){this.$emit("activated")},onDeactivate:function(){this.$emit("deactivated")}},watch:{active:function(e,t){t&&!e?this.focusTrap.deactivate():!t&&e&&this.focusTrap.activate()},paused:function(e,t){t&&!e?this.focusTrap.unpause():!t&&e&&this.focusTrap.pause()}}}},function(e,t,n){
/*!
	* focus-trap 6.7.3
	* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
	*/
"use strict";function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),s=function(){var e=[];return{activateTrap:function(t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var o=e.indexOf(t);-1===o||e.splice(o,1),e.push(t)},deactivateTrap:function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}}}(),u=function(e){return setTimeout(e,0)},c=function(e,t){var n=-1;return e.every((function(e,o){return!t(e)||(n=o,!1)})),n},l=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e?e.apply(void 0,n):e},f=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target};t.createFocusTrap=function(e,t){var n,o=(null==t?void 0:t.document)||document,r=i({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),d={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},p=function(e,t,n){return e&&void 0!==e[t]?e[t]:r[n||t]},v=function(e){return!(!e||!d.containers.some((function(t){return t.contains(e)})))},h=function(e){var t=r[e];if("function"==typeof t){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];t=t.apply(void 0,i)}if(!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=t;if("string"==typeof t&&!(s=o.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return s},m=function(){var e=h("initialFocus");if(!1===e)return!1;if(void 0===e)if(v(o.activeElement))e=o.activeElement;else{var t=d.tabbableGroups[0];e=t&&t.firstTabbableNode||h("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},b=function(){if(d.tabbableGroups=d.containers.map((function(e){var t=a.tabbable(e),n=a.focusable(e);if(t.length>0)return{container:e,firstTabbableNode:t[0],lastTabbableNode:t[t.length-1],nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=n.findIndex((function(t){return t===e}));return t?n.slice(o+1).find((function(e){return a.isTabbable(e)})):n.slice(0,o).reverse().find((function(e){return a.isTabbable(e)}))}}})).filter((function(e){return!!e})),d.tabbableGroups.length<=0&&!h("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},y=function e(t){if(!1!==t&&t!==o.activeElement){if(!t||!t.focus)return void e(m());t.focus({preventScroll:!!r.preventScroll}),d.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()}},g=function(e){var t=h("setReturnFocus",e);return t||!1!==t&&e},w=function(e){var t=f(e);if(!v(t))return l(r.clickOutsideDeactivates,e)?void n.deactivate({returnFocus:r.returnFocusOnDeactivate&&!a.isFocusable(t)}):void(l(r.allowOutsideClick,e)||e.preventDefault())},E=function(e){var t=f(e),n=v(t);n||t instanceof Document?n&&(d.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),y(d.mostRecentlyFocusedNode||m()))},T=function(e){return function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==l(r.escapeDeactivates,e)?(e.preventDefault(),void n.deactivate()):function(e){return"Tab"===e.key||9===e.keyCode}(e)?void function(e){var t=f(e);b();var n=null;if(d.tabbableGroups.length>0){var o=c(d.tabbableGroups,(function(e){return e.container.contains(t)})),i=o>=0?d.tabbableGroups[o]:void 0;if(o<0)n=e.shiftKey?d.tabbableGroups[d.tabbableGroups.length-1].lastTabbableNode:d.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var r=c(d.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(r<0&&(i.container===t||a.isFocusable(t)&&!a.isTabbable(t)&&!i.nextTabbableNode(t,!1))&&(r=o),r>=0){var s=0===r?d.tabbableGroups.length-1:r-1;n=d.tabbableGroups[s].lastTabbableNode}}else{var u=c(d.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(u<0&&(i.container===t||a.isFocusable(t)&&!a.isTabbable(t)&&!i.nextTabbableNode(t))&&(u=o),u>=0){var l=u===d.tabbableGroups.length-1?0:u+1;n=d.tabbableGroups[l].firstTabbableNode}}}else n=h("fallbackFocus");n&&(e.preventDefault(),y(n))}(e):void 0},_=function(e){if(!l(r.clickOutsideDeactivates,e)){var t=f(e);v(t)||l(r.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())}},O=function(){if(d.active)return s.activateTrap(n),d.delayInitialFocusTimer=r.delayInitialFocus?u((function(){y(m())})):y(m()),o.addEventListener("focusin",E,!0),o.addEventListener("mousedown",w,{capture:!0,passive:!1}),o.addEventListener("touchstart",w,{capture:!0,passive:!1}),o.addEventListener("click",_,{capture:!0,passive:!1}),o.addEventListener("keydown",T,{capture:!0,passive:!1}),n},k=function(){if(d.active)return o.removeEventListener("focusin",E,!0),o.removeEventListener("mousedown",w,!0),o.removeEventListener("touchstart",w,!0),o.removeEventListener("click",_,!0),o.removeEventListener("keydown",T,!0),n};return(n={activate:function(e){if(d.active)return this;var t=p(e,"onActivate"),n=p(e,"onPostActivate"),i=p(e,"checkCanFocusTrap");i||b(),d.active=!0,d.paused=!1,d.nodeFocusedBeforeActivation=o.activeElement,t&&t();var r=function(){i&&b(),O(),n&&n()};return i?(i(d.containers.concat()).then(r,r),this):(r(),this)},deactivate:function(e){if(!d.active)return this;clearTimeout(d.delayInitialFocusTimer),d.delayInitialFocusTimer=void 0,k(),d.active=!1,d.paused=!1,s.deactivateTrap(n);var t=p(e,"onDeactivate"),o=p(e,"onPostDeactivate"),i=p(e,"checkCanReturnFocus");t&&t();var r=p(e,"returnFocus","returnFocusOnDeactivate"),a=function(){u((function(){r&&y(g(d.nodeFocusedBeforeActivation)),o&&o()}))};return r&&i?(i(g(d.nodeFocusedBeforeActivation)).then(a,a),this):(a(),this)},pause:function(){return d.paused||!d.active||(d.paused=!0,k()),this},unpause:function(){return d.paused&&d.active?(d.paused=!1,b(),O(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return d.containers=t.map((function(e){return"string"==typeof e?o.querySelector(e):e})),d.active&&b(),this}}).updateContainerElements(e),n}},function(e,t){
/*!
	* tabbable 5.2.1
	* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
	*/
"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=n.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,r=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&i.call(e,o)&&r.unshift(e),r.filter(n)},a=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},s=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},u=function(e){return"INPUT"===e.tagName},c=function(e){return function(e){return u(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var i=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!i||i===e}(e)},l=function(e,t){return!(t.disabled||function(e){return u(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=i.call(e,"details>summary:first-of-type")?e.parentElement:e;if(i.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var o=e.getBoundingClientRect(),r=o.width,a=o.height;return 0===r&&0===a}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(u(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},f=function(e,t){return!(!l(e,t)||c(t)||a(t)<0)},d=n.concat("iframe").join(",");t.focusable=function(e,t){return r(e,(t=t||{}).includeContainer,l.bind(null,t))},t.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==i.call(e,d)&&l(t,e)},t.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==i.call(e,o)&&f(t,e)},t.tabbable=function(e,t){var n=[],o=[];return r(e,(t=t||{}).includeContainer,f.bind(null,t)).forEach((function(e,t){var i=a(e);0===i?n.push(e):o.push({documentOrder:t,tabIndex:i,node:e})})),o.sort(s).map((function(e){return e.node})).concat(n)}},function(e,t){e.exports=" <div> <slot></slot> </div> "},function(e,t,n){var o,i,r={};o=n(1),i=n(4),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(a.template=i),a.computed||(a.computed={}),Object.keys(r).forEach((function(e){var t=r[e];a.computed[e]=function(){return t}}))}])},547:function(e,t,n){!function(t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var i,r=!1,a=void 0!==t;a&&t.getComputedStyle?(i=n.createElement("div"),["","-webkit-","-moz-","-ms-"].some((function(e){try{i.style.position=e+"sticky"}catch(e){}return""!=i.style.position}))&&(r=!0)):r=!0;var s=!1,u="undefined"!=typeof ShadowRoot,c={top:null,left:null},l=[];function f(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}function d(e){return parseFloat(e)||0}function p(e){for(var t=0;e;)t+=e.offsetTop,e=e.offsetParent;return t}var v=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!(t instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(l.some((function(e){return e._node===t})))throw new Error("Stickyfill is already applied to this node");this._node=t,this._stickyMode=null,this._active=!1,l.push(this),this.refresh()}return o(e,[{key:"refresh",value:function(){if(!r&&!this._removed){this._active&&this._deactivate();var e=this._node,o=getComputedStyle(e),i={position:o.position,top:o.top,display:o.display,marginTop:o.marginTop,marginBottom:o.marginBottom,marginLeft:o.marginLeft,marginRight:o.marginRight,cssFloat:o.cssFloat};if(!isNaN(parseFloat(i.top))&&"table-cell"!=i.display&&"none"!=i.display){this._active=!0;var a=e.style.position;"sticky"!=o.position&&"-webkit-sticky"!=o.position||(e.style.position="static");var s=e.parentNode,c=u&&s instanceof ShadowRoot?s.host:s,l=e.getBoundingClientRect(),v=c.getBoundingClientRect(),h=getComputedStyle(c);this._parent={node:c,styles:{position:c.style.position},offsetHeight:c.offsetHeight},this._offsetToWindow={left:l.left,right:n.documentElement.clientWidth-l.right},this._offsetToParent={top:l.top-v.top-d(h.borderTopWidth),left:l.left-v.left-d(h.borderLeftWidth),right:-l.right+v.right-d(h.borderRightWidth)},this._styles={position:a,top:e.style.top,bottom:e.style.bottom,left:e.style.left,right:e.style.right,width:e.style.width,marginTop:e.style.marginTop,marginLeft:e.style.marginLeft,marginRight:e.style.marginRight};var m=d(i.top);this._limits={start:l.top+t.pageYOffset-m,end:v.top+t.pageYOffset+c.offsetHeight-d(h.borderBottomWidth)-e.offsetHeight-m-d(i.marginBottom)};var b=h.position;"absolute"!=b&&"relative"!=b&&(c.style.position="relative"),this._recalcPosition();var y=this._clone={};y.node=n.createElement("div"),f(y.node.style,{width:l.right-l.left+"px",height:l.bottom-l.top+"px",marginTop:i.marginTop,marginBottom:i.marginBottom,marginLeft:i.marginLeft,marginRight:i.marginRight,cssFloat:i.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),s.insertBefore(y.node,e),y.docOffsetTop=p(y.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var e=c.top<=this._limits.start?"start":c.top>=this._limits.end?"end":"middle";if(this._stickyMode!=e){switch(e){case"start":f(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":f(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":f(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=e}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(p(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var e=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,f(this._node.style,this._styles),delete this._styles,l.some((function(t){return t!==e&&t._parent&&t._parent.node===e._parent.node}))||f(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var e=this;this._deactivate(),l.some((function(t,n){if(t._node===e._node)return l.splice(n,1),!0})),this._removed=!0}}]),e}(),h={stickies:l,Sticky:v,forceSticky:function(){r=!1,m(),this.refreshAll()},addOne:function(e){if(!(e instanceof HTMLElement)){if(!e.length||!e[0])return;e=e[0]}for(var t=0;t<l.length;t++)if(l[t]._node===e)return l[t];return new v(e)},add:function(e){if(e instanceof HTMLElement&&(e=[e]),e.length){for(var t=[],n=function(n){var o=e[n];return o instanceof HTMLElement?l.some((function(e){if(e._node===o)return t.push(e),!0}))?"continue":void t.push(new v(o)):(t.push(void 0),"continue")},o=0;o<e.length;o++)n(o);return t}},refreshAll:function(){l.forEach((function(e){return e.refresh()}))},removeOne:function(e){if(!(e instanceof HTMLElement)){if(!e.length||!e[0])return;e=e[0]}l.some((function(t){if(t._node===e)return t.remove(),!0}))},remove:function(e){if(e instanceof HTMLElement&&(e=[e]),e.length)for(var t=function(t){var n=e[t];l.some((function(e){if(e._node===n)return e.remove(),!0}))},n=0;n<e.length;n++)t(n)},removeAll:function(){for(;l.length;)l[0].remove()}};function m(){if(!s){s=!0,r(),t.addEventListener("scroll",r),t.addEventListener("resize",h.refreshAll),t.addEventListener("orientationchange",h.refreshAll);var e=void 0,o=void 0,i=void 0;"hidden"in n?(o="hidden",i="visibilitychange"):"webkitHidden"in n&&(o="webkitHidden",i="webkitvisibilitychange"),i?(n[o]||a(),n.addEventListener(i,(function(){n[o]?clearInterval(e):a()}))):a()}function r(){t.pageXOffset!=c.left?(c.top=t.pageYOffset,c.left=t.pageXOffset,h.refreshAll()):t.pageYOffset!=c.top&&(c.top=t.pageYOffset,c.left=t.pageXOffset,l.forEach((function(e){return e._recalcPosition()})))}function a(){e=setInterval((function(){l.forEach((function(e){return e._fastCheck()}))}),500)}}r||m(),e.exports?e.exports=h:a&&(t.Stickyfill=h)}(window,document)},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(29);var o=function(){},i=function(e){return"$".concat(e,"_inListener")},r=function(e){return"$".concat(e,"_outListener")},a=function(e){return"$".concat(e,"_tid")},s=function(e){var t=e.inEvent,n=e.outEvent,s=e.activeClass,u=e.defaultCallback,c=void 0===u?o:u,l=e.outTimeout,f=void 0===l?50:l;return{inserted:function(e,o){var u=o.name,l=o.value,d=void 0===l?c:l,p=o.arg,v=void 0===p?s:p;e[i(u)]=function(){clearTimeout(e[a(u)]),e.classList.add(v),d(!0)},e.addEventListener(t,e[i(u)],{passive:!0}),e[r(u)]=function(){clearTimeout(e[a(u)]),e[a(u)]=setTimeout((function(){e.classList.remove(v),d(!1)}),f)},e.addEventListener(n,e[r(u)],{passive:!0})},unbind:function(e,o){var s=o.name;clearTimeout(e[a(s)]),delete e[a(s)],e.removeEventListener(t,e[i(s)]),delete e[i(s)],e.removeEventListener(n,e[r(s)]),delete e[r(s)]}}}},588:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));n(204);var o="((https?://)|(www\\.))\\S+\\.\\S+[^.,!\\s]",i=new RegExp(o),r=new RegExp(o,"g")},589:function(e,t,n){var o,i,r;
/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/i=[e,t],void 0===(r="function"==typeof(o=function(e,t){"use strict";var n,o,i="function"==typeof Map?new Map:(n=[],o=[],{has:function(e){return n.indexOf(e)>-1},get:function(e){return o[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),o.push(t))},delete:function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),o.splice(t,1))}}),r=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){r=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function a(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!i.has(e)){var t,n=null,o=null,a=null,s=function(){e.clientWidth!==o&&f()},u=function(t){window.removeEventListener("resize",s,!1),e.removeEventListener("input",f,!1),e.removeEventListener("keyup",f,!1),e.removeEventListener("autosize:destroy",u,!1),e.removeEventListener("autosize:update",f,!1),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),i.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",u,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",f,!1),window.addEventListener("resize",s,!1),e.addEventListener("input",f,!1),e.addEventListener("autosize:update",f,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",i.set(e,{destroy:u,update:f}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),n="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(n)&&(n=0),f()}function c(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function l(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),i=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+n+"px",o=e.clientWidth,t.forEach((function(e){e.node.scrollTop=e.scrollTop})),i&&(document.documentElement.scrollTop=i)}}function f(){l();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),o="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(o<t?"hidden"===n.overflowY&&(c("scroll"),l(),o="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(c("hidden"),l(),o="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),a!==o){a=o;var i=r("autosize:resized");try{e.dispatchEvent(i)}catch(e){}}}}function s(e){var t=i.get(e);t&&t.destroy()}function u(e){var t=i.get(e);t&&t.update()}var c=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((c=function(e){return e}).destroy=function(e){return e},c.update=function(e){return e}):((c=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return a(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],s),e},c.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],u),e}),t.default=c,e.exports=t.default})?o.apply(t,i):o)||(e.exports=r)},720:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));n(204);function o(e){return new RegExp("^http[s]{0,1}://","i").test(e)}function i(e){return"".concat("http://").concat(e)}}}]);
//# sourceMappingURL=vendors~chat_js~comments_js~liveblog_js.77e8d90df0b78201eadc.js.map