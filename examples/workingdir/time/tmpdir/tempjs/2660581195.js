!function(){function a(t){var c="string"==typeof t.data,a={};if((a=c&&function(a){try{return JSON.parse(a)&&a}catch(a){return}}(t.data)?JSON.parse(t.data):t.data).__cmpCall){var o=a.__cmpCall;window.__cmp(o.command,o.parameter,function(a,e){var n={__cmpReturn:{returnValue:a,success:e,callId:o.callId,command:o.command}};t.source.postMessage(c?JSON.stringify(n):n,"*")})}}!function a(){if(!window.frames.__cmpLocator)if(document.body){var e=document.body,n=document.createElement("iframe");n.style="display:none",n.name="__cmpLocator",e.appendChild(n)}else setTimeout(a,5)}(),"function"!=typeof __cmp&&(window.__cmp=function(){var a=arguments;if(__cmp.a=__cmp.a||[],!a.length)return __cmp.a;"ping"===a[0]?a[2]({gdprAppliesGlobally:!1,cmpLoaded:!1},!0):__cmp.a.push([].slice.apply(a))},__cmp.msgHandler=a,window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent("onmessage",a))}();