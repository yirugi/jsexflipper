(function a(a,c){function d(a){var b=h.xb.Math.pow,c=h.xb.Math.random;a=(0,h.xb.Math.max)(4,a);return((1+c())*b(16,a)|0).toString(16).substring(0,
a)}function f(a){return function(b){return a(b)}}function k(a,b){if(!a||"string"!==typeof b||!a[b]||a==n)return!1;if("string"===typeof a.nodeName&&("OBJECT"===a.nodeName||"EMBED"===a.nodeName)){var c=document&&document.body&&document.body[b];if(c&&c!==a[b])return c}return!1}var n;n="object"===typeof b&&b&&b.a&&b.a.d&&b.a.d()?b.a.d():(new Function("return this.window;"))();var h;c[a]=c[a]||{zs:!1,zr:0,yf:{},h:0,m:0,i:{},xa:{},xb:c,xc:{},xyds:{}};h=c[a];var m={},r=function(){var a=!1;try{var b=Object.defineProperty({},
"passive",{get:function(){a=!0}});n.addEventListener("test",null,b);n.removeEventListener("test",null,b)}catch(c){}return a}();h.xc.dowg=function(a,b){h&&(h.xyds||(h.xyds={}),h&&h.xyds&&(h.xyds[b]?h.xyds[b].push(a):h.xyds[b]=[a]))};h.xc.hsxk=function(){h.dcsx&&h.dcsx.dcwn();"undefined"!==typeof a&&a&&h.xc.esde(a);var a;h.xc.exde(h.xc.hsxk,1E3)};h.xc.esde=function(a){n&&n.clearTimeout&&n.clearTimeout(a)};h.xc.ynds=function(a,b,c,e){var d,g,n=!1;"touchstart"===b&&r&&(n={passive:!0});e?m[b+e]?c=m[b+
e]:(c=f(c),m[b+e]=c):c=f(c);if(a.addEventListener)e="addEventListener",d="";else if(a.attachEvent)e="attachEvent",d="on";else return!1;if(g=k(a,e))try{g.call(a,d+b,c,n)}catch(h){a[e](d+b,c,n)}else if(a&&e&&a[e])try{a[e](d+b,c,n)}catch(h){return!1}};h.xc.engn=function(a,b,c,e){var d,f=b+e,g;if(!a)return delete m[f],!1;c=!1!==e?m[f]:c;if(a.removeEventListener)e="removeEventListener",d="";else if(a.detachEvent)e="detachEvent",d="on";else return delete m[f],!1;if(g=k(a,e))try{g.call(a,d+b,c,!1)}catch(n){a[e](d+
b,c,!1)}else try{a[e](d+b,c,!1)}catch(n){}delete m[f]};h.xc.exde=function(a,b){a=f(a);var c;n&&n.setTimeout&&(c=n.setTimeout(a,b));return c};h.xc.exae=function(a,b,c){return function(){b.apply(c||null,a.concat(a.slice.call(arguments)))}};h.xc.uxin=function(){return d(4)+"-"+d(4)+"-"+d(4)+"-"+d(4)};h.xc.twer=function(a,b){h&&(h.yf||(h.yf={}),h&&h.yf&&(h.yf[b]?h.yf[b].push(a):h.yf[b]=[a]))}})('MoatSuperV26',window)