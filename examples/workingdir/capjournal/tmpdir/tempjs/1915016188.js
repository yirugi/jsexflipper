window.__tnt||(window.__tnt={}),window.__tnt.user||(__tnt.user={}),window.__tnt.subscription||(__tnt.subscription={}),window.__tnt.subscription.access||(__tnt.subscription.access={}),window.__tnt.subscription.access.previousTab||(__tnt.subscription.access.previousTab=[]),__tnt.subscription.access.showTab=function(e,t,s,a){var r=document.getElementById(t),i=document.getElementById(s),n=null,o=null,c="modal-dialog",d=null;r&&(n=r.querySelector(".modal-content.active"),o=r.querySelector(".modal-dialog")),void 0===a&&(a=!1),e&&(d=e.querySelector(".tab-back"),o&&o.setAttribute("class",c),n&&(n.classList.add("hide"),n.classList.remove("active"),a||__tnt.subscription.access.previousTab.push(n)),e.getAttribute("data-active-class")&&(c="modal-dialog "+e.getAttribute("data-active-class")),o&&o.setAttribute("class",c),i&&(i.querySelectorAll(".panel-default").length<=2&&"modal-offers-tab"==e.id?r.classList.add("modal-small"):r.classList.remove("modal-small")),__tnt.subscription.access.previousTab.length&&d?d.classList.remove("hide"):d&&d.classList.add("hide"),e.classList.remove("hide"),e.classList.add("active"))},__tnt.subscription.handleCart=function(e,t,s){if(e){var a=sessionStorage.getItem("__tnt.service.rate"),r=e.price/100,i=e.name,n=e.id,o=e.service_name;if(null==a&&a!=n);else{var c=sessionStorage.getItem("__tnt.service.rate.price"),d=sessionStorage.getItem("__tnt.service.rate.name");if(window.dataLayer){dataLayer.push({ecommerce:{remove:{products:[{name:d,id:t,price:c/100,brand:s,category:"subscription",variant:d}]}},event:"tncms.event.trigger",tncms:{event:{trigger:{action:"removeFromCart",category:"subscription",label:"user selected an alternate rate"}}}});try{window.sessionStorage&&(sessionStorage.removeItem("__tnt.service.name"),sessionStorage.removeItem("__tnt.service.rate"),sessionStorage.removeItem("__tnt.service.rate.name"),sessionStorage.removeItem("__tnt.service.rate.price"))}catch(e){}}}if(n!=sessionStorage.getItem("__tnt.service.rate")){window.dataLayer&&dataLayer.push({ecommerce:{currencyCode:"USD",add:{products:[{name:o,id:t,price:r,brand:s,category:"subscription",variant:i,quantity:1}]}},event:"tncms.event.trigger",tncms:{event:{trigger:{action:"addToCart",category:"subscription",label:"user added a rate"}}}});try{window.sessionStorage&&(sessionStorage.setItem("__tnt.service.name",o),sessionStorage.setItem("__tnt.service.rate",n),sessionStorage.setItem("__tnt.service.rate.name",i),sessionStorage.setItem("__tnt.service.rate.price",r))}catch(e){}}}};
//# sourceMappingURL=tnt.access.user.modal.74696fd3bd1a983d88459a7e6df0312d.js.map