window.__tnt||(window.__tnt={}),__tnt.user||(__tnt.user={}),__tnt.user.vkSignup=null,__tnt.user.vkSetup=!1,__tnt.subscription||(__tnt.subscription={}),__tnt.subscription.access||(__tnt.subscription.access={}),__tnt.subscription.access.refererUrl||(window.__tnt.subscription.access.refererUrl=!1),__tnt.subscription.access.displayReceipt||(window.__tnt.subscription.access.displayReceipt=!1),__tnt.user.updateLoggedIn=function(){if(TNCMS.User.isLoggedIn()){__tnt.user.update();var e=(document.getElementById("asset-content"),document.getElementById("user-modal-tab-login-success"),document.getElementById("user-modal-tab-signup-success"),document.getElementById("user-modal-tab-purchase"),null),t=TNCMS.User.getScreenName(),s=new URLSearchParams(document.location.search);e&&(e.hasAttribute("data-email-verification")||(requireEmailVerification=!1)),__tnt.subscription.access.checkedAccess&&TNCMS.Access.revalidateAccess(function(e){var s=(document.getElementById("user-modal-toggle-login"),document.getElementById("user-modal-toggle-signup"),document.getElementById("modal-offers-tab")),o=document.getElementById("user-modal-tab-signup-success"),c=document.getElementById("access-offers-modal");if(__tnt.subscription.a.push(function(e){__tnt.user.loginSuccess=!0}),__tnt.subscription.a.push(function(e){var t=document.getElementById("asset-content"),n=null;if(!e.required&&(t&&(n=t.querySelectorAll(".subscriber-hide,.subscriber-remove,.subscriber-only")),n&&n.length))for(var s=0;s<n.length;s++)n[s].hidden=!1;t&&(t.hidden=!1)}),__tnt.subscription.a.push(function(e){var n=o.querySelector(".username");if(__tnt.user.purchasedAccess);else if(__tnt.user.firstLogin&&o)n&&t&&(n.innerText=" "+t),__tnt.subscription.access.showTab(o,"access-offers-modal","access-methods");else if(__tnt.user.manualLogin){var s=document.createElement("div");s.id="login-success-notification",s.classList.add("notification"),s.classList.add("alert"),s.classList.add("alert-dismissable"),s.classList.add("alert-success"),s.classList.add("hidden-print"),s.setAttribute("data-message","user logged in"),s.innerHTML='<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> <strong><i class="fas tnt-check"></i>&nbsp; Thank you, '+t+"</strong> you are now logged in.",s.addEventListener("click",function(e){document.getElementById("login-success-notification").remove()}),document.body.appendChild(s),$(c).find(".modal").modal("hide")}}),e.required){for(n=0;n<__tnt.subscription.a.length;n++)"function"==typeof __tnt.subscription.d[n]&&__tnt.subscription.d[n](e);__tnt.subscription.access.showTab(s,"access-offers-modal","access-methods")}else for(i=0;i<__tnt.subscription.a.length;i++)"function"==typeof __tnt.subscription.a[i]&&__tnt.subscription.a[i](e)},function(e){console.log("Failed to revalidate")})}s.has("referer_url")&&!__tnt.subscription.access.displayReceipt&&(document.location=s.get("referer_url"))},document.addEventListener("DOMContentLoaded",function(e){var t=document.getElementById("access-offers-modal"),n=(document.getElementById("user-modal-toggle-login"),document.getElementById("user-modal-toggle-signup"),document.getElementById("modal-offers-tab")),s=document.getElementById("user-modal-tab-login"),o=document.getElementById("user-modal-tab-signup"),c=document.getElementById("user-modal-tab-signup-success"),a=document.getElementById("user-modal-tab-purchase-success"),r=document.getElementById("offers-modal-user-links"),i=document.getElementById("user-modal-tab-forgot"),d=document.getElementById("forgot-username"),u=document.getElementById("tn-vk-modal-forgot"),l=null,m=document.getElementById("tn-vk-modal-instant-login"),g=null,f=document.getElementById("user-modal-tab-instant-login"),p=(document.getElementById("access-methods"),document.getElementById("eedition-wrapper")),_=(document.getElementById("logout"),document.getElementById("access-modal-login-form")),b=document.getElementById("user-register-form");document.getElementById("thirdPartyLogin");if(t){document.getElementById("user-modal-signup-toggle").addEventListener("click",function(e){b.dispatchEvent(tntSignup),__tnt.subscription.access.showTab(o,"access-offers-modal","access-methods")}),document.getElementById("user-modal-login-toggle").addEventListener("click",function(e){__tnt.subscription.access.showTab(s,"access-offers-modal","access-methods")}),r&&r.querySelector("a.login-toggle")&&r.querySelector("a.login-toggle").addEventListener("click",function(e){e.preventDefault(),__tnt.subscription.access.showTab(s,"access-offers-modal","access-methods")}),document.getElementById("open-modal-forgot").addEventListener("click",function(e){e.preventDefault(),u.querySelector("iframe")?grecaptcha.reset(l):l=grecaptcha.render(u,{sitekey:"6LdvF8kSAAAAAHtjCXotWkt5byjdinh-RPyWTH5J"}),d&&window.sessionStorage&&(d.value=sessionStorage.getItem("forgotAccount")),__tnt.subscription.access.showTab(i,"access-offers-modal","access-methods")}),document.getElementById("open-modal-instant-login").addEventListener("click",function(e){e.preventDefault(),m.querySelector("iframe")?grecaptcha.reset(g):g=grecaptcha.render(m,{sitekey:"6LdvF8kSAAAAAHtjCXotWkt5byjdinh-RPyWTH5J"}),__tnt.subscription.access.showTab(f,"access-offers-modal","access-methods")});var h=t.querySelectorAll(".tab-back");if(h&&Array.from(h).forEach(function(e){e.addEventListener("click",function(e){var t=n;__tnt.subscription.access.previousTab.length&&(t=__tnt.subscription.access.previousTab[__tnt.subscription.access.previousTab.length-1],__tnt.subscription.access.previousTab.pop(),__tnt.subscription.access.showTab(t,"access-offers-modal","access-methods",!0))})}),p&&c){var y=c.querySelector('.modal-footer a[data-dismiss="modal"]'),v=c.querySelector('.modal-header button[data-dismiss="modal"]'),E=a.querySelector('.modal-footer a[data-dismiss="modal"]'),I=a.querySelector('.modal-header button[data-dismiss="modal"]');y.addEventListener("click",function(){location.reload()}),v.addEventListener("click",function(){location.reload()}),E.addEventListener("click",function(){location.reload()}),I.addEventListener("click",function(){location.reload()})}}r&&r.querySelector(".user-modal-open")&&r.querySelector(".user-modal-open").addEventListener("click",function(e){e.preventDefault()}),_&&_.addEventListener("submit",function(e){e.preventDefault();var t=document.getElementById("access-modal-login-form"),n=null;if(t){var s=new FormData,n=t.querySelector(".critical-error"),o="";s.set("username",t.elements.username.value),s.set("password",t.elements.password.value);try{t.elements.remember_me&&(t.elements.remember_me.checked&&(o=1),s.set("remember_me",o))}catch(e){}fetch("/tncms/auth/login",{method:"POST",body:s,headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(e){if(n&&n.classList.add("hide"),!e.ok)throw new Error("Login failure - "+e.statusText);__tnt.user.manualLogin=!0}).catch(function(e){console.log(e),n&&n.classList.remove("hide")}).finally(function(){p&&location.reload(),__tnt.user.updateLoggedIn()})}}),b&&(b.addEventListener("tnt-signup",function(){if(signupVkLoad&&__tnt.user.vkSetup&&grecaptcha)grecaptcha.reset(__tnt.user.vkSignup);else if(signupVkLoad&&grecaptcha){__tnt.user.vkSetup=!0;var e=document.getElementById("tn-vk-modal-signup");e&&(__tnt.user.vkSignup=grecaptcha.render(e,{sitekey:"6LdvF8kSAAAAAHtjCXotWkt5byjdinh-RPyWTH5J"}))}}),b.addEventListener("submit",function(e){e.preventDefault();var n=document.getElementById("user-register-form");if(n){var s=new FormData;s.set("screen_name",n.elements.screen_name.value),s.set("email",n.elements.email.value),s.set("password",n.elements.password.value),s.set("password_verify",n.elements.password_verify.value),s.set("g-recaptcha-response",n.elements["g-recaptcha-response"].value),fetch("/tncms/auth/signup",{method:"POST",body:s,headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(e){if(!e.ok)throw new Error("Signup failure - "+e.statusText);var n=t.querySelector(".modal-content.active"),s=!0;n.hasAttribute("data-email-verification")||(s=!1),s?__tnt.user.updateLoggedIn(c):(__tnt.user.firstLogin=!0,__tnt.user.updateLoggedIn())}).catch(function(e){console.log(e)}).finally(function(){})}}))});
//# sourceMappingURL=tnt.access.user.modal.wall.3733a292afe5d277ceb3f7c22b5c0958.js.map