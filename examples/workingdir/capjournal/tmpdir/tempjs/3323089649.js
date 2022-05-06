window.__tnt||(window.__tnt={}),__tnt.notify=function(){var t=function(i){return new t.lib.init(i)},i=function(t){try{return new URL(t),!0}catch(t){return!1}};return t.lib=t.prototype={init:function(t){return t||(t={}),this.options={},this.options.title=t.title,this.options.message=t.message,this.options.url=t.url,this.options.image=t.image,this.options.utm=t.utm,this.options.duration=t.duration||6e3,this.options.selector=t.selector,this.options.callback=t.callback||function(){},this.options.gravity="top"==t.gravity?"top":"bottom",this.options.position="left"==t.position?"left":"right",this.options.classes=t.classes||"",this},buildNotification:function(){if(!this.options)throw"Notify is not initialized";if(!this.options.title)throw"Notification title is not defined";!this.options.url&&i(this.options.title)&&(this.options.url=this.options.title);var t=document.createElement("div");if(t.classList.add("tnt-notification"),t.classList.add("on"),t.classList.add(this.options.position),t.classList.add(this.options.gravity),this.options.url){var o=document.createElement("a");o.href=this.options.url,o.target="_blank",this.options.utm&&(o.href+="?",Object.keys(this.options.utm).forEach(function(t,i){0!=i&&(o.href+="&"),o.href+=t+"="+this.options.utm[t]}.bind(this))),t.appendChild(o)}if(this.options.image){var n=document.createElement("img");n.src=this.options.image,t.appendChild(n)}var e=document.createElement("h4");if(e.appendChild(document.createTextNode(this.options.title)),t.appendChild(e),this.options.message){var s=document.createElement("p");s.appendChild(document.createTextNode(this.options.message)),t.appendChild(s)}var a=document.createElement("div");return a.classList.add("tnt-notification-dismiss"),a.innerHTML='<i class="fas tnt-times"></i>',a.addEventListener("click",function(t){t.stopPropagation(),this.dismissNotification(t.target.closest(".tnt-notification")),window.clearTimeout(t.target.closest(".tnt-notification").timeOutValue)}.bind(this)),t.appendChild(a),t},showNotification:function(){var i=this.buildNotification();if(void 0===this.options.selector?rootElement=document.body:rootElement=document.getElementById(this.options.selector),!rootElement)throw"Root element is not defined";return rootElement.insertBefore(i,rootElement.firstChild),t.reposition(),i.timeOutValue=window.setTimeout(function(){this.removeNotification(i)}.bind(this),this.options.duration),this},dismissNotification:function(i){i.classList.remove("on"),window.setTimeout(function(){i.parentNode.removeChild(i),this.options.callback.call(i),t.reposition()}.bind(this),400)},removeNotification:function(i){i.classList.remove("on"),window.setTimeout(function(){i.parentNode.removeChild(i),this.options.callback.call(i);var o=new CustomEvent("notification-popup-removed",{detail:{note:{title:this.options.title,message:this.options.message,url:this.options.url,image:this.options.image}}});document.dispatchEvent(o),t.reposition()}.bind(this),400)}},t.reposition=function(){for(var t,i={top:15,bottom:15},o={top:15,bottom:15},n={top:15,bottom:15},e=document.getElementsByClassName("tnt-notification"),s=0;s<e.length;s++){t=e[s].classList.contains("top")?"top":"bottom";var a=e[s].offsetHeight;(window.innerWidth>0?window.innerWidth:screen.width)<=360?(e[s].style[t]=n[t]+"px",n[t]+=a+15):e[s].classList.contains("left")?(e[s].style[t]=i[t]+"px",i[t]+=a+15):(e[s].style[t]=o[t]+"px",o[t]+=a+15)}},t.lib.init.prototype=t.lib,t}();
//# sourceMappingURL=tnt.notify.a814fe612f2dcba9061edc229aeaf90b.js.map