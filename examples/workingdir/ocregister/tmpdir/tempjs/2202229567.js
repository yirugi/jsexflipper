(function(){var Yf=function(a,b){return(a=a.o.filter(function(c){return c.Mc===b.Mc}).map(function(c){return c.Al}))&&a.length?a[0]:OBR._jsc.rb(b)},Zf=function(a,b){a.prototype=(0,OBR._jsc.ze)(b.prototype);a.prototype.constructor=a;if(OBR._jsc.Ee)(0,OBR._jsc.Ee)(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c]},$f=function(a){try{var b=JSON.parse(OBR.c.U(OBR._jsc.G.Xd,null));b&&(b.wl=b.wl.filter(function(c){return c.fx!==
+a}),b.wl&&(b.wl.length?OBR.c.ya(OBR._jsc.G.Xd,JSON.stringify(b)):OBR.c.Tc(OBR._jsc.G.Xd)))}catch(c){OBR.logger.log("failed to delete Local Storage for skeleton")}},ag=function(a){var b=document.createElement("div");b.innerHTML=a;return b.firstChild},bg=function(a,b){b=void 0===b?!1:b;if(a=O.A(a))return b?OBR.c.L(a).querySelector(".ob-cards"):a.parentNode},cg=function(a,b,c){a=void 0===a?!1:a;var e=document.createDocumentFragment();c.forEach(function(d){return e.appendChild(d)});(a=bg(b,a))&&a.appendChild(e)},
dg=function(a,b,c){var e=!0,d=1.1*b;c.forEach(function(f){f.style.opacity=0;a.appendChild(f);a.scrollHeight<=d?f.style.opacity=1:(e=!1,f.parentNode.removeChild(f))});return e},eg=function(a,b){a&&a.appendChild(b)},fg=function(a){var b=a&&a.G();b=".ob_sf_loader, "+(b?"."+b:"")+".ob-chunks-loader";if(a&&(a=a.A(),(a=Array.from(a&&a.parentNode&&a.parentNode.querySelectorAll(b)))&&a.length&&null!==a[0].parentNode)){for(b=0;b<a.length;b++){var c=a[b];c.parentNode.removeChild(c)}return}(b=document.querySelector(b))&&
null!==b.parentNode&&b.parentNode.removeChild(b)},gg=function(a){(a=O.ra(void 0===a?0:a))&&(a=a.A())&&a.style.removeProperty("visibility")},ig=function(){this.className="ob-smartfeed-adjoker";this.adInfo={};this.logger=hg},jg=function(){return ag('<div class="ob-no-joker-card"></div>')},kg=function(a){var b=a.adInfo,c=b.cardIdx,e=b.fatherCardIdx,d=b.adPath,f=b.adId,g=b.adWidth,k=b.adHeight,m=b.adStyle;a.Ab=new OBR.Ab(O.ra(e));b=O.createElement("script",null,null,{src:"//securepubads.g.doubleclick.net/tag/js/gpt.js"});
var n=O.createElement("script",null,null,{type:"text/javascript"});n.appendChild(document.createTextNode("\n        window.googletag = window.googletag || {cmd: []};\n        window.googletag.cmd.push(function () {\n            var slot = window.googletag.defineSlot('"+d+"/"+g+"x"+k+"', ["+g+", "+k+"], '"+f+"');\n            if(slot) {slot.addService(googletag.pubads())}\n            window.googletag.pubads().enableSingleRequest();\n            window.googletag.pubads().collapseEmptyDivs();\n            window.googletag.pubads().setTargeting('publisher_id', []).setTargeting('variant_id', []).setTargeting('feed_id', []);\n            window.googletag.pubads().addEventListener('slotRenderEnded', (event) => {\n              var customEvent = new CustomEvent('onOBGptLoadedEvent', {detail: event});\n              document.dispatchEvent(customEvent);\n            })\n            window.googletag.enableServices();\n        });\n    "));
try{var h=O.createElement("div",f,"display:none;"+m,{"class":a.className,"data-card-idx":c,"data-feed-father-idx":e});c="window.googletag.cmd.push(function() { window.googletag.display('"+f+"')});";document.head.appendChild(b);document.head.appendChild(n);var l=O.createElement("script",null,null,{type:"text/javascript"});l.appendChild(document.createTextNode(c));h.appendChild(l);a.Ab.Vo();document.addEventListener("onOBGptLoadedEvent",function(p){(p.detail||{empty:!0}).empty?(a.Ab.Qo(),a.logger.error("createGPT failed - got an empty ad (event.detail.empty === true); check the ad settings"),
h.style.display="none"):(h.style="display:block; "+m,a.Ab.Wo())});return h}catch(p){a.logger.error(p),a.Ab.Ro()}},lg=function(a){var b=a.adInfo,c=b.cardIdx,e=b.fatherCardIdx,d=b.adPath,f=b.adData,g=b.adWidth,k=b.adHeight,m=b.adContainerWidth;b=b.adContainerHeight;a.Ab=new OBR.Ab(O.ra(e));try{var n={"class":a.className,"data-card-idx":c,"data-feed-father-idx":e};(c=m||b?(m?"width:"+m+"px;":"")+(b?"height:"+b+"px;":"")+"display:none;":null)&&(n.style=c);var h=O.createElement("div",null,null,n),l=O.createElement("script",
null,null,{src:"//securepubads.g.doubleclick.net/static/glade.js",async:"true"}),p=O.createElement("div",null,"display: none;",{"data-glade":"","data-ad-unit-path":d,"data-json":f||"",width:g,height:k});h.appendChild(p);h.appendChild(l);a.Ab.Vo();p.addEventListener("gladeAdFetched",function(r){(r.detail||{empty:!0}).empty?(a.Ab.Qo(),a.logger.error("createDFPAd failed - got an empty ad (event.detail.empty === true); check the ad settings"),p.style.display="none",h.style.display="none"):(p.style.display=
"block",h.style.display="block",a.Ab.Wo())});return h}catch(r){a.logger.error(r),a.Ab.Ro()}},mg=function(a){var b=window.addEventListener?"addEventListener":"attachEvent";(0,window[b])("attachEvent"===b?"onmessage":"message",function(c){var e=c.message?"message":"data",d=c[e].message||c[e];"ob-pb-ad-loaded"===d?a.style.display="block":"ob-pb-ad-after-render"===d&&(a.style.height=c[e].data+"px")},!1)},ng=function(){},og=function(){},pg=function(){},ug=function(a,b){var c=P.La(),e=a.ca(),d=e.cardIdx,
f=O.ra(b);if(f)switch(e.Ja){case "widget":var g=O.Y(),k=g.Fb;g=g.os;e=a.ca();a=e.Ka;var m=e.O;e=e.html;var n=f.Pb(),h=f.bc(),l=f.ac(),p=f.Ib(),r=f.ic();f=[];h&&f.push("data-ob-installation-type="+h);p&&f.push("data-ob-user-id="+p);l&&f.push("data-ob-app-ver="+l);n&&f.push("data-ob-installation-key="+n);r&&f.push("data-click-url="+r);n=e&&e.includes("ob-gnr-layout");return ag('<div class="OUTBRAIN" data-src="'+c+'" data-widget-id="'+a+'" data-card-idx="'+d+'" data-feed-father-idx="'+b+'"\n                            data-ob-mark="true" data-browser="'+
k+'" data-os="'+g+'" data-dynload data-idx="'+m+'" id="outbrain_widget_'+m+'" '+f.join(" ")+">"+(n?"":e)+"</div>");case "joker":c=a.ca().Wh;try{g="string"===typeof c?JSON.parse(c):c,m=qg[g.type](g,d,b),m.jokerProps=g,k=m}catch(t){k=null}return k;case "adJoker":return c=a.ca(),rg.create({adInfo:{cardIdx:d,fatherCardIdx:b,adType:c.adType,adId:c.adId,adWidth:c.adWidth,adHeight:c.adHeight,adPath:c.adPath,adData:c.adData,adClient:c.adClient,adSlot:c.adSlot,adContainerWidth:c.adContainerWidth,adContainerHeight:c.adContainerHeight,
adStyle:c.adStyle}});case "placeholderJoker":return c=a.ca().tc,sg.create({cardIdx:d,fatherCardIdx:b,XG:c});case "passback":return d=a.ca().YC,tg.create(d,b)}},vg=function(){},xg=function(a){var b=wg.find(function(c){return c.feedIdx===+a});return!(!b||!b.isSkeleton)},Ag=function(a,b){var c=OBR._jsc.sb();c=null!==c?c:{fb:{},wl:[]};var e={n:a.widgetName,r:0<a.height?a.height/a.width:0,fx:+b};a=c.wl.filter(function(d){return d.n===e.n&&0!==d.r}).map(function(d){var f=d.m?d.m+1:1,g=d.r,k=e.r;return{n:d.n,
m:f,r:f?1===f?(g+k)/2:((f-1)*g+k)/f:k,fx:+b}})[0];c.fb.r=yg(c,e);a=zg(c,a,e);try{OBR.c.ya(OBR._jsc.G.Xd,JSON.stringify(a))}catch(d){OBR.logger.log("failed to set Local Storage for skeleton")}},yg=function(a,b){return a.wl&&a.wl.length?a.wl.reduce(function(c,e){return c+e.r},0)/a.wl.length:b.r},zg=function(a,b,c){a=Object.assign({},a);if(b&&b.n)return a.wl=a.wl.map(function(e){return e.n===b.n?b:e}),a;c&&c.r&&a.wl.push(c);return a},Bg=function(){this.b={};this.v=Promise.resolve();this.g=null;this.o=
!1},Q=function(a){return Math.min.apply(Math,OBR._jsc.C(Object.keys(a.b)))},Cg=function(a,b){var c=P;c.b[a].jh=[];try{c.b[a].jh=JSON.parse(b).filter(function(e){return"widget"===e.type})}catch(e){}},Dg=function(a){var b=P,c=b.b[a].Zn,e=b.b[a].jh.splice(0,b.b[a].ih);b.b[a].jh.push.apply(b.b[a].jh,OBR._jsc.C(e.filter(function(d){return!c.find(function(f){return f.id===d.id})})));return e},Eg=function(a){P.v=a;O.QE(a)},Fg=function(a,b,c){var e=P;c=c.cardIdx;var d=e.b[b].tf;e.b[b]=Object.assign(e.b[b],
{lc:c?c:0,Xc:a,tf:c?OBR._jsc.C(d).concat([c]):d})},Gg=function(a){var b=P;if(a)return b.b[a].lc},Hg=function(a,b){var c=P;c.b[a].tf=c.b[a].tf.filter(function(e){return e!=b})},Ig=function(a){return P.b[a]||{}},Jg=function(a){var b=P;a=void 0===a?Q(b):a;return b.b[a].Yo},Kg=function(a){var b=P;a=void 0===a?Q(b):a;b.b[a].Yo=!1},Lg=function(a,b,c){var e=P;c=void 0===c?Q(e):c;e.b[c].Lo[a]=b},Mg=function(a,b){var c=P;b=void 0===b?Q(c):b;c.b[b].li=a},Ng=function(a,b){var c=P;b=void 0===b?Q(c):b;return c.b[b].Lo[a]},
Og=function(a){var b=P;a=void 0===a?Q(b):a;return b.b[a].Mo},Pg=function(a){var b=P;a=void 0===a?Q(b):a;b.b[a].De=!0},Qg=function(a){var b=P;a=void 0===a?Q(b):a;return b.b[a].De},Rg=function(a,b){var c=P;a=void 0===a?Q(c):a;c.b[a].Pr=b},Sg=function(a){var b=P;a=void 0===a?Q(b):a;return b.b[a].pG},Tg=function(a,b){P.b[a].la.el=b},Ug=function(a){this.b=a},Vg=function(a,b,c){var e=O;this.K=e;this.b=this.K.Y().tC+"/Multivac/api/get?";this.j=e.ra(a);this.ob=a;this.lc=b;this.JB=c;this.g=this.j.La()},Wg=
function(a,b,c){try{var e=(new URLSearchParams(window.location.search)).get(b);e&&(c=e)}catch(d){}c&&T(a,b,c);return a},T=function(a,b,c){Xg(a,b&&"undefined"!==typeof c&&null!=c&&""!==c?b+"="+c:"")},Xg=function(a,b){if(b){var c=a.b;c.endsWith("&")||c.endsWith("?")?a.b+=b:a.b+="&"+b}},Zg=function(a,b){var c=O.Xy();a=void 0===a?0:a;b=void 0===b?0:b;var e=O.ra(a),d=b;c=void 0===c?0:c;var f=a;var g=P;f=void 0===f?Q(g):f;f=g.b[f].li;if(f)var k=(new Ug(f)).Pj();else{a=new Vg(a,d,c);a.g&&a.g.startsWith("http")||
hg.error("could not get permalink url");T(a,"url",a.K.Pc(a.g));T(a,"settings",!0);T(a,"recs",!0);d=a.j.G();T(a,"widgetJSId",a.K.Y().Ob&&a.K.Y().Ob[d]?a.K.Y().Ob[d]:d);a.K.Y().Ob&&a.K.Y().Ob[d]&&T(a,"contextRule",!1);T(a,"key",a.j.Pb()?a.j.Pb():a.K.Y().Or);T(a,"version",a.K.Y().ver);T(a,"apv",a.K.Y().lf);T(a,"sig",a.K.Y().Rm);T(a,"format",a.j.up());T(a,"rand",a.K.pz());(d=a.K.U(OBR._jsc.G.Kg))&&T(a,"lsd",a.K.Pc(d));(d=a.K.U(OBR._jsc.G.zj))&&T(a,"lsdt",a.K.Pc(d));(d=OBR.af.Km)&&T(a,"odlsd",d);d=a.K.Y().dg;
null!==d&&T(a,"pubInState",d);d=a.K.U(OBR._jsc.G.Kg);(c=OBR.ni.get())?c===d&&(c=0):c=-1;T(a,"pdobuid",a.K.Pc(c));(d=a.K.Y().ji)&&T(a,"osLang",d);a=Wg(a,"obAbtest",a.K.S("obAbtest",""));(d=!0===a.K.Y().Fi||!0===a.j.Ch()||null!==a.K.Y().Ob)&&T(a,"testMode",d);T(a,"videoId",a.j.Mk());d=a.j.Kb()||a.K.Y().hk||"";T(a,"extid",d);c=OBR._jsc.z(OBR._jsc.Na(a.j));d=c.next().value;c=c.next().value;T(a,d,c);(!0===a.j.Cq()||a.K.Y().Hl)&&T(a,"rtbEnabled",!0);d=a.j.Bh();T(a,"seid",d);a.K.Y().uo.includes("true")&&
T(a,"descriptionDisplayEnabled",!0);a.K.Y().Eq.includes("true")&&T(a,"isRtbDescriptionEnabled",!0);T(a,"va",!0===a.j.Mq()?!0:null);T(a,"et",!0===a.j.qp()?!0:null);(d=a.K.Y().op())&&T(a,"contxtKV",a.K.Pc(d));T(a,"cnsnt",a.K.Ff().vc);T(a,"cmpStat",a.K.Ff().Wc?1:0);T(a,"cnsntv2",a.K.Ff().wc);d=a.ob;c=P;d=void 0===d?Q(c):d;(d=c.b[d].Wj?{consentString:c.b[d].Wj,consentVersion:c.b[d].jo}:null)&&(1===d.consentVersion?T(a,"cnsnt",d.consentString):T(a,"cnsntv2",d.consentString));T(a,"ccpa",a.j.wk()||a.K.Ff().uc);
T(a,"ccpaStat",a.K.Ff().bl?1:0);T(a,"num",null!==a.j.xh()?a.j.xh():null);a.j.hl()||(d=a.j.Kp(),null!==d&&"string"===typeof d&&0<d.length?T(a,"srcUrl",a.K.Pc(d)):0<a.K.Y().Ci.length&&T(a,"srcUrl",a.K.Y().Ci));d=a.K.Y().fm;T(a,"scrW",d.w);T(a,"scrH",d.h);d=a.K.Y();Xg(a,""!==d.qg?"t="+d.qg:"t");(d=a.K.Y().ik)&&T(a,"xp",a.K.Pc(d));d=a.K.Gz();T(a,"winW",d.width);T(a,"winH",d.height);T(a,"adblck",OBR.f.eh.Dh()||!0===a.K.Sf()?"true":"false");T(a,"abwl",a.K.Kh());(d="https://"===a.K.Y().ja)&&T(a,"secured",
d);T(a,"feedIdx",a.ob);T(a,"lastIdx",a.JB);T(a,"lastCardIdx",a.lc);a.K.Y().vr.includes("true")&&T(a,"obDraft",!0);a.K.Y().po.includes("true")&&T(a,"crDraft",!0);(d=a.K.Ad(a.ob))&&T(a,"fAB",d);(d=a.K.Ck(a.ob))&&T(a,"layeredTestInfo",d);OBR.f.lq&&T(a,"wrDebug","true");T(a,"app_ver",a.j.ac());T(a,"api_user_id",a.j.Ib());T(a,"installationType",a.j.bc());a.K.Y().Ed&&T(a,"iframe","true");(d=a.K.Y().ad)&&T(a,"lscntx",d);a.K.S("obFakeRtb",!1)&&(T(a,"fakeRec","RTB-CriteoUS"),T(a,"fakeRecSize","4"));d=a.K.Py();
!0!==a.K.Y().Fi&&!0!==a.j.Ch()&&((c=d.vf||d.lm)?T(a,"clss",c):d.Ie&&(T(a,"clid",d.Ie),T(a,"fdu",d.hh)));a=Wg(a,"forceCards",a.K.S("forceCards",null));(d=a.K.S("obRecsAbtestVars",null))&&T(a,"obRecsAbtestVars",d);d=a.K.Y().um;null!==d&&T(a,"skipContextValidation",d);a.K.Y().Ai&&T(a,"skipRecsFilters","true");if(d=a.K.Y().ph)T(a,"forceAd",d),T(a,"settingLevel","SOURCE");(d=a.K.Y().sk)&&T(a,"forceOcAd",d);d=a.ob;c=P;d=void 0===d?Q(c):d;(d=c.b[d].Pr)&&T(a,"pcer",a.K.Pc(d));T(a,"dpr",a.K.Y().yo||0);d=P.ke(a.ob);
T(a,"cw",d);d=a.j.Oq();c=a.j.$a("display",null);d&&c&&T(a,"fd",c.width+"x"+c.height);a.K.Y().bi||T(a,"wdr-natlaz",!1);(d=OBR._jsc.Ne.b)&&T(a,"pmtseg",d);a.K.Y().vm&&T(a,"wdr-ads-data","true");(d=OBR._jsc.ob())&&Xg(a,d);a=Wg(a,"forceDemand",a.K.Y().fp);(d=a.K.Y().Li||null)&&T(a,"trace_name",d);T(a,"darkMode",a.j.se());a:{if(a.j.se()){d=a.j.me();if((c=a.j.th())&&!0===c){T(a,"wdr-dark-mode","ob-dark-mode");k=a;break a}if(d)try{k=(new window.URLSearchParams(d)).get("wdr-dark-mode"),T(a,"wdr-dark-mode",
k)}catch(m){}}k=a}(a=k.K.Y().Gl)&&T(k,"ob_internal_id",a);(a=OBR.c.zt(k.j.yh()||OBR.f.Xr))&&T(k,"pubImpId",a);OBR.f.di&&T(k,"dicbo",OBR.f.di);OBR._jsc.Ue&&T(k,"id5",OBR._jsc.Ue.st);OBR._jsc.Ue&&T(k,"id5type",OBR._jsc.Ue.Vq);T(k,"activeTab",!document.hidden);(a=k.j.dz())&&T(k,"nextSFBatch",encodeURIComponent(a));OBR.f.mq&&T(k,"lsl","1");k.K.Y().Ar&&T(k,"wdr-lr","1");(a=k.K.Y().am)&&T(k,"ref",a);OBR.f.ii&&T(k,"ogn",OBR.f.ii);k=k.Pj()}return Yg(e,k,b)},Yg=function(a,b,c){var e=parseInt(performance.now());
OBR.Ia.dC(a.G(),a.Z(),e);return new Promise(function(d,f){var g=document.createElement("script");g.src=b;g.onerror=function(){f({name:"multivac",message:"multivac call failed"});OBR.c.gg(g)};OBR.extern.returnedVacData=function(k){k.Gj={ea:a.G(),O:c,timestamp:e};OBR.Ia.jC(a.G(),a.Z(),e);var m=OBR._jsc.Qe.b.stop().getTime();a.EE(m);d(k);OBR.c.gg(g)};document.body.appendChild(g);OBR._jsc.Qe.b.start()})},eh=function(a){this.response=a;this.b=a.cards.map(function(b){switch(b.cardType){case "widget":return new $g(b);
case "joker":return new ah(b);case "adJoker":return new bh(b);case "followJoker":return new ah(b);case "placeholderJoker":return new ch(b);case "passback":return new dh(b);default:hg.error('card type "'+b.cardType+'" is not supported')}})},$g=function(a){this.b=a},ch=function(a){this.b=a},dh=function(a){this.b=a},ah=function(a){this.b=a},bh=function(a){this.b=a},fh=function(a,b){this.ob=a;this.v=b;this.b=OBR._jsc.zb(OBR._jsc.ub);this.g=OBR._jsc.sb();this.o=P.b[a].ih;this.Fc=O.ra(a)},gh=function(a){return Array(Math.min(a.o,
3)).fill(Math.round(100*a.g.fb.r)/100)},hh=function(a,b){return a.g?a.g.wl.filter(function(c){return 0!==+c.r}).map(function(c){if(b.find(function(e){return e.id===c.n}))return Math.min(Math.round(100*+c.r)/100,1)}).filter(function(c){return c}):null},ih=function(a){if(a.o&&a.g&&Array.isArray(a.g.wl)&&a.g.wl.length&&a.g.fb.r)return"local-storage";var b=a.Fc.G();return a.b&&a.b.some(function(c){return c.includes(b)})?"cheetah":"none"},kh=function(a){a.Fc.Im()||$f(a.ob);switch(ih(a)){case "local-storage":if("2"===
P.ne(a.ob))a=gh(a);else{var b=Dg(a.ob);a=b.length?(b=hh(a,b))?b:gh(a):null}return a;case "cheetah":return jh(a);case "none":return null;default:return null}},jh=function(a){OBR._jsc.ub.remove(a.Fc,!0);var b=a.b.find(function(c){return c.includes(a.Fc.G())});if(!b)return null;b=OBR._jsc.z(b);b.next();b=b.next().value;return a.v?Array(1).fill(b):Array(a.o).fill(b)},lh=function(){},nh=function(a,b){var c=b.Fc,e=void 0===b.rq?!1:b.rq,d=void 0===b.jk?!1:b.jk;b=c.Z();if(c.A()){var f=c.A();a.Yc=1===f.children.length&&
0===f.children[0].children.length;P.b[b]={Yo:!0,Zo:!1,lc:0,tf:[0],Lo:{jk:!1,bH:!1,ep:!1},Mo:null,li:null,De:!1,Th:!1,Kr:null,Pr:0,Wj:null,jo:2,ih:null,Nn:!0,lo:null,Sh:!1,la:{el:!1}};f=c.i("feedWrapperMargins","");var g="";f&&(g=".ob-smartfeed-wrapper.feedIdx-"+c.O+" {margin:"+f+";}");c.i("hideHeaders",!1)&&O.da(".ob-smartfeed-wrapper .OUTBRAIN:not(:first-child) .ob-widget-header {display:none;} "+g);O.da(".ob-smartfeed-wrapper .OUTBRAIN:not(:first-child) .ob_what {display:none;} .ob-smartfeed-joker {margin-bottom: 20px; padding-bottom: 4px; padding-top: 0; background-color: #fff;} "+
g);if(f=c.ic()){g=c.Z();var k=P;g=void 0===g?Q(k):g;k.b[g].Mo=f;O.Qg(c)}Lg("followTopic",e);Lg("feedManualChunkFetch",d,b);Lg("feedLayout","odb_dynamic_feed"===c.i("recMode"),b);!0===c.i("lazyLoadFirstCycle",!1)?(e=c.A(),d=c.i("lazyLoadFirstCycleMargin",250)+"px",a={callback:a.bh.bind(a),callbackParams:[c],element:e,rootMargin:d,threshold:[0],unobserve:!0},(new OBR.IntersectionObserver(a)).observe()):a.bh(c);mh.Me(c,b)}else hg.Ue("Container for widgetId="+c.G()+" doesn't exist on the DOM. Feed cannot be created.")},
oh=function(a,b){var c=P.b[b].la;c.el||((new OBR.H(a,function(e){return e.Wt})).I.Kt.F(),Tg(b,Object.assign(c,{el:!0})))},rh=function(a,b){var c=Ig(b),e=c.lc,d=c.Xc;c.Sh||!1===d||(Hg(b,-1),eg(ph(b),OBR._jsc.rb()),c=P.v.then(function(){return Zg(b,e)}),Eg(c),P.b[b].Sh=!0,c.then(function(f){P.b[b].Sh=!1;a.dd(f)}).catch(function(f){P.b[b].Sh=!1;qh(f,b)}))},sh=function(a,b){OBR.f.ei&&a&&(a.style.outline="3px dashed "+b)},th=function(a){return!a||0===a.length||a.map(function(b){return O.ra(b.ca().O)}).every(function(b){return!b.Ma()})},
uh=function(a){Fg(!0,a,{cardIdx:parseInt(Gg(a))+parseInt(P.b[a].ih)})},vh=function(a,b){a&&a.length&&(a=a[a.length-1].ca().O,a=O.ra(a).s("pcer",0),Rg(b,a))},wh=function(a){a.filter(function(b){b=O.ra(b.ca().O);return b.Zc()&&!b.Oh()}).forEach(function(b){var c=O.A(b.ca().O);b=b.ca().Ka;if(c&&!c.shadowRoot){var e=b.includes("REEL");b=c.querySelector(".ob-widget");e&&(e=document.createElement("div"),e.appendChild(b),b=e);b&&c.attachShadow&&(c.attachShadow({mode:"open"}),c.shadowRoot.appendChild(b))}})},
xh=function(a,b){a.filter(function(c){return c.ca().tc}).map(function(c){try{var e=c.ca().cardIdx,d=c.ca().tc.split(".").reduce(function(g,k){return g[k]},window),f=ph(b).querySelector("div[data-card-idx='"+e+"']");d&&f&&setTimeout(d.bind(null,f),0)}catch(g){hg.error("fail to run card callback, card Json: "+c.ca()+" error: "+g)}})},ph=function(a){var b=Ng("feedLayout",a);return bg(a,b)},yh=function(a,b,c){a.forEach(function(e){var d=e.ca().O;e=O.Lx(e,P.La(),b,Og(b));e.Ps(c);O.ly(e,d);O.bg(e);O.He(e);
O.Wz(e);O.zw(d);mh.Me(e,b)})},zh=function(a){if(OBR.f.ei){var b=OBR.c.rz();a.forEach(function(c){return c.style.boxShadow="-2px 4px 10px 2px "+b})}},qh=function(a,b){OBR.error(a);hg.error("failed on Multivac response on feedIdx:"+b+". Reason: "+a.toString());fg();Eg(Promise.resolve())},Ah=function(a,b){var c=OBR.od.gu;c&&!P.o&&(document.querySelector(".ob-smartfeed-follow-joker")?(a=O.ra(b),(b=a.i("recReasonType"))&&c.Xo(a,b),P.o=!0):a.forEach(function(e){var d=e.ca().O;e=OBR.c.A(d);d=O.ra(d);e&&
OBR.c.L(e).querySelector(".ob-follow-status")&&((e=d.i("recReasonType"))&&!P.o&&c.Xo(d,e),P.o=!0)}))},Ch=function(a){var b=Bh;a=void 0===a?Q(P):a;if(O.ra(a)){if(Ng("feedManualChunkFetch",a))return rh(b,a),!0;hg.Ue("externalChunkLoad called but feed is not set for external chunk fetching");return!1}hg.Ue("externalChunkLoad called but feedIdx="+a+" not found");return!1},Dh=function(a,b,c){var e=Ig(c).lc;c=O.ra(c);var d=parseInt(performance.now());b.Gj={ea:c.G(),O:e,timestamp:d};a.dd(b)},Eh=function(a,
b){return a.filter(function(c,e){return b[e].style.opacity})},Fh=function(a){return a.filter(function(b){return b.style.opacity})},Gh=function(a,b,c,e){var d=1.1*a,f=bg(b,Ng("feedLayout",b)),g=null;O.da(".ob-feed-"+b+"-max-height {max-height: "+d+"px; overflow: hidden;}");OBR.c.ka(f,"ob-feed-"+b+"-max-height");dg(f,a,e)||(g={Om:Eh(c,e),Xc:!1,Hw:Fh(e)});OBR.c.sa(f,"ob-feed-"+b+"-max-height");return g},Hh=function(a){this.b=[];this.g=this.o.bind(this);this.g();this.tc=a},Ih=function(){},Jh=function(a,
b,c){b.cards=b.cards.slice(c?c.length:0);b&&b.cards&&(a=P.b[void 0===a?0:a])&&(a.Kr=b)},Kh=function(a,b,c,e,d){var f=[];if(null===a)return c;var g=Ng("feedLayout",b);c=OBR._jsc.z(c);for(var k=c.next();!k.done;k=c.next()){k=k.value;var m=g,n=b;m=void 0===m?!1:m;var h=document.createDocumentFragment();h.appendChild(k);(m=bg(n,m))&&m.appendChild(h);h=a;m=e;n=O.A(b).parentNode;var l=h.getBoundingClientRect(),p=n.getBoundingClientRect();if((m&&"copy-article-height"===m?h.clientHeight-n.clientHeight:l.bottom-
p.bottom)<-1*d){k.parentNode.removeChild(k);break}f.push(k)}return f},Lh=function(a,b){var c=[],e=a.filter(function(d){return"widget"===d.ca().Ja});b.forEach(function(d){return e.forEach(function(f){var g=d.attributes["data-card-idx"].value,k=f.ca().cardIdx;if(g===k)return c.push(f)})});return c},Mh=function(){this.o=!1;this.da()},Nh=function(a,b,c){function e(){l&&r||!t||(clearTimeout(t),t=null)}function d(){l&&r&&!t&&(t=setTimeout(function(){document.removeEventListener("visibilitychange",m);t=
null;u=c;f()},h))}function f(){u&&!p&&("desktop"===OBR.f.Fe&&(n.removeEventListener("mouseenter",k),n.removeEventListener("mouseleave",g)),u(),u=null)}function g(){p=!1;f()}function k(){p=!0}function m(){r=!document.hidden;e();d()}var n=a.b,h=Sg(b),l=!1,p=!1,r=!0,t=null,u;document.addEventListener("visibilitychange",m);"desktop"===OBR.f.Fe&&(n.addEventListener("mouseenter",k),n.addEventListener("mouseleave",g));(new IntersectionObserver(function(w){w=OBR._jsc.z(w).next().value;var v=w.intersectionRatio;
l=w.isIntersecting&&.5<=v;e();d()},{threshold:[0,.25,.5,.75,1]})).observe(n)},Oh=function(a,b){return new Promise(function(c){if(!a.g)return Nh(a,b,c);var e=a.g,d=a.b;d.addEventListener("animationend",function(){Nh(a,b,c)},{once:!0,passive:!0});e.addEventListener("animationend",function(){e.style.vI="hidden";setTimeout(function(){e.style.display="none";d.style.display="block";d.classList.add("ob-feed-refresh-show")},1E3)},{once:!0,passive:!0});e.classList.add("ob-feed-refresh-hide")})};
OBR.Ab||function(){function a(b){this.j=b;this.H=new OBR.H(this.j,function(c){return c.Rt});this.g={}}a.prototype.Vo=function(){OBR.logger.log("[DFP Data] glade DFP ad requested");this.b({event:this.H.I.Mu,data:this.g})};a.prototype.Wo=function(){OBR.logger.log("[DFP Data] glade DFP ad served");this.b({event:this.H.I.Tu,data:this.g})};a.prototype.Qo=function(){OBR.logger.log("[DFP Data] glade DFP got empty ad");this.b({event:this.H.I.EMPTY,data:this.g})};a.prototype.Ro=function(){OBR.logger.log("[DFP Data] glade DFP got error");
this.b({event:this.H.Ut,data:this.g})};a.prototype.b=function(b){b.event.F(b.data)};return OBR.Ab=a}();var hg={Ue:function(a){OBR.logger.log("[WARNING] "+a)},error:function(a){OBR.logger.log("[ERROR] "+a)},log:function(a){OBR.logger.log(a)}};var Ph=OBR.od?OBR.od.hu:{},Qh=new OBR.ub,O={Lx:function(a,b,c,e){var d=a.ca();a=d.O;var f=d.jD;b=OBR.Td.Zj({permalink:b,widgetId:d.Ka,feedFatherIdx:c,idx:a,clickTrackerUrl:e});b.setData(f);b.Es(c);b.Ss();return OBR.D[a]=b},ly:function(a,b){OBR.controller.Uo(a,b)},Cf:function(a,b){Qh.F("afterRender",[b],!1,a)},Wz:function(a){OBR.controller.Rk(a)},Xn:function(a){OBR.controller.sw(a)},zw:function(a){OBR.controller.rc(a)},bg:function(a){OBR.controller.bg(a)},He:function(a){OBR.controller.He(a)},createElement:function(a,
b,c,e){return OBR.c.createElement(a,b,c,e)},da:function(a){OBR.c.da(a)},A:function(a){return OBR.c.A(a)},Ad:function(a){if(a=OBR.D[a])return a.s("abTestVal",null)},Ck:function(a){return(a=OBR.D[a])?a.s("layeredTestInfo",null):null},S:function(a,b){return OBR.c.S(a,b)},ke:function(a){if(a=OBR.D[a])return a.ke()},ra:function(a){return OBR.D[a]},Pc:function(a){return OBR.c.xa(a)},Qg:function(a){return OBR.controller.Qg(a)},U:function(a){return OBR.c.U(a,null)},jH:function(){return OBR.controller},pz:function(){return OBR.c.rand()},
Y:function(){return OBR.f},Py:function(){return OBR.Oa},Ff:function(){return OBR.fa},Gz:function(){return OBR.ha.Na},Sf:function(){return"true"===OBR.Cb.Sf()},Kh:function(){return"true"===OBR.Cb.Kh()},QE:function(a){OBR.wb.lh=a},fi:function(a,b,c){c=void 0===c?{}:c;var e=a&&a.getAttribute("id")?[a.getAttribute("id").substr(16)]:[];(new OBR.IntersectionObserver(Object.assign({element:a,callback:b,threshold:[0],unobserve:!0,callbackParams:e},c))).observe()},Xy:function(){return OBR.D.length-1},R:function(a,
b){OBR.l.R(a,b)},nA:function(a){if(!OBR.qk){var b=ag('<div class="ob-intr-toast" />');if(a=bg(a,!1))a.appendChild(b),OBR.qk=new Ph}}};ig.prototype.create=function(a){this.adInfo=a=a.adInfo;if(a.adType)switch(a.adType.toLowerCase()){case "gpt":return kg(this);case "dfp":return lg(this);case "adsense":a:{try{var b=this.adInfo,c=b.cardIdx,e=b.adClient,d=b.adSlot,f="ad-unit-/"+c,g=O.createElement("div",f,null,{"data-card-idx":c,"data-feed-father-idx":b.fatherCardIdx}),k=O.createElement("script",null,null,{src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",async:"true"}),m=O.createElement("ins",null,"display:inline-block;width:100%;height:200px",
{"class":this.className+" adsbygoogle","data-ad-client":e,"data-ad-slot":d}),n=O.createElement("script",null,null,null);n.innerText="googletag.cmd.push(function() {googletag.display('"+f+"');})";g.appendChild(k);g.appendChild(m);g.appendChild(n);var h=g;break a}catch(t){this.logger.error(t)}h=void 0}return h;case "gptframe":case "pb":a:{k=this.adInfo;h=k.cardIdx;b=k.fatherCardIdx;c=k.adId;e=k.adPath;d=k.adType;g=k.adWidth;k=k.adHeight;n=O.ra(b);m=n.s("abTestVal");n=n.s("pid");try{var l="thirdPartyType="+
d+"&thirdPartyId="+c+"&adPath="+e+"&width="+g+"&height="+k+"&refferer="+window.location.host+"&pubId="+n+"&abTestVal="+m+"&feedIdx="+b,p=O.createElement("div",null,"position: relative; height: 120vw; margin: auto; max-width: 640px; max-height: 499px; display: none",{"class":this.className,"data-card-idx":h,"data-feed-father-idx":b}),r=O.createElement("iframe",null,"position: absolute; top: 0; left : 0; height: 100%; width: 100%; border: 0;",{src:OBR.f.ja+"widgets.outbrain.com/nanoWidget/externals/ob3rdPFrame/ob3rdPFrame.htm?"+
l});mg(p);p.appendChild(r);f=p;break a}catch(t){this.logger.error(t)}f=void 0}return f;default:return a?this.logger.error("adJoker type is of unknown type: "+a.adType):this.logger.error("adJoker information object is "+a),jg()}this.logger.Ue("adJoker could not be created "+a);return jg()};var rg=new ig;ng.prototype.create=function(a){var b=a.cardIdx;a=a.fatherCardIdx;try{return O.createElement("div",null,null,{"class":"ob-smartfeed-joker","data-card-idx":b,"data-feed-father-idx":a,"data-joker-placeholder":""})}catch(c){return hg.error("joker placeholder failed. error: "+c),ag('<div class="ob-no-joker-card"></div>')}};var sg=new ng;og.prototype.create=function(a){var b=a.Wh;a=O.createElement("div",null,null,{"class":"ob-smartfeed-joker","data-card-idx":a.cardIdx,"data-feed-father-idx":a.fatherCardIdx});b=b.selector;var c=document.querySelector(b);if(null!==c)return c.parentNode.removeChild(c),c.style.display="block",a.appendChild(c),a;hg.error("joker failed - '"+b+"'");return ag('<div class="ob-no-joker-card"></div>')};var Rh=new og;var qg={joker:function(a,b,c){if(!a)hg.error("JokerCard failed - '"+a.selector+"'");else if(a&&a.selector){var e=document.querySelector(a.selector);e?e.style.display="none":hg.error("JokerCard failed joker selector was not found on page - selector: '"+a.selector+"'")}return Rh.create({cardIdx:b,fatherCardIdx:c,Wh:a})},adJoker:function(a,b,c){return rg.create({adInfo:{cardIdx:b,fatherCardIdx:c,adType:a.adType,adId:a.adId,adWidth:a.adWidth,adHeight:a.adHeight,adPath:a.adPath,adData:a.adData,adClient:a.adClient,
adSlot:a.adSlot,adContainerWidth:a.adContainerWidth,adContainerHeight:a.adContainerHeight,adStyle:a.adStyle}})},placeholderJoker:function(a,b,c){return sg.create({cardIdx:b,fatherCardIdx:c})}};pg.prototype.create=function(a,b){try{a:{var c=O.ra(b);try{if(c){var e=c.i("passbackTagSize","300x250").split("x");break a}}catch(n){}e=[300,250]}var d=OBR._jsc.z(e),f=d.next().value,g=d.next().value,k=bg(b,!1),m=document.createElement("iframe");m.style.height=g+"px";m.style.width=f+"px";m.style.border="0";k.parentNode.insertBefore(m,k.nextSibling);k.style.display="none";m.contentWindow.document.open();m.contentWindow.document.write('\n      <style> body {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}</style>\n      <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js">\x3c/script>\n      <div id="gpt-passback">\n        <script>\n          window.googletag = window.googletag || {cmd: []};\n          googletag.cmd.push(function() {\n              googletag.defineSlot(\''+
a+"', ["+f+", "+g+"], 'gpt-passback')\n                .addService(googletag.pubads());\n              googletag.enableServices();\n              googletag.display('gpt-passback');\n          });\n        \x3c/script>\n      </div>");m.contentWindow.document.close()}catch(n){OBR.logger.log(n)}return ag('<div class="passback-tag"></div>')};var tg=new pg;var wg=[];vg.prototype.B=function(a,b){b=parseInt(b,10);this.kc=a.kc();a.Im()&&a.kb()&&wg.push({feedIdx:b,isSkeleton:!0});a=1*OBR.c.U("debug-widget-stats-sample",1E5);this.v=1>Math.floor(Math.random()*a)};
vg.prototype.Me=function(a,b){try{if(this.B(a,b),this.kc){var c=xg(b);var e={};if(c||this.v){var d=a.A(),f=window.getComputedStyle(d),g=d.offsetWidth,k=d.offsetHeight;var m=g+parseInt(f.marginLeft,10)+parseInt(f.marginRight,10);var n=k+parseInt(f.marginTop,10)+parseInt(f.marginBottom,10);var h=window.OB_releaseVer;d=OBR;var l=d.monitorData,p=d.env;e.name="obm-WidgetDimensions";e.version=h;e.env=p||1;var r={widgetName:a.G(),widgetId:a.s("wnid",a.G()),screenWidth:window.innerWidth,screenHeight:window.innerHeight,
width:g,height:k,outerWidth:m,outerHeight:n,platform:a.s("readerPlatform","desktop"),feedVersion:a.s("feedVersion")||"1"};e.url=location.href;e.agent=navigator.userAgent.toLowerCase();l&&(e.sId=l.sourceId,e.dId=l.docId,e.pId=l.pubId);var t={em:e,Io:r}}else t={em:e,Io:{}};a=t;var u=a.em,w=a.Io;if(this.v){var v=OBR.f.Pm+"/WidgetErrorMonitor/api/report";u.extra=JSON.stringify(w);OBR.Za.get(v,u)}c&&Ag(w,b)}}catch(y){OBR.error({name:"SetSkeletonError",message:"Could not set skeleton values",e:y})}};
var mh=new vg;OBR._jsc.x=Bg.prototype;OBR._jsc.x.mm=function(a,b){this.b[a].hy=b};OBR._jsc.x.ne=function(a){return this.b[a].hy};OBR._jsc.x.La=function(){return this.g};OBR._jsc.x.yi=function(a){this.g=a};OBR._jsc.x.Th=function(a){a=void 0===a?Q(this):a;return this.b[a].Th};OBR._jsc.x.ke=function(a){a=void 0===a?Q(this):a;return this.b[a].lo};var P=new Bg;Ug.prototype.Pj=function(){return this.b};Vg.prototype.Pj=function(){return this.b};eh.prototype.ca=function(){var a=this.b.filter(function(b){return"widget"===b.ca().Ja});return{Om:a,ob:this.response.feedIdx,Xc:this.response.hasMore,Vg:this.b,pl:this.b[this.b.length-1],Iw:[a[0],a[a.length-1]],li:this.response.nextFeedURL}};$g.prototype.ca=function(){return{Ja:this.b.cardType,jD:this.b,html:this.b.response.html,Ka:this.b.response.request.widgetJsId,O:this.b.response.request.idx,cardIdx:this.b.response.request.fCard}};
ch.prototype.ca=function(){return{Ja:this.b.cardType,Wh:this.b.response,cardIdx:this.b.fCard,tc:this.b.response.callback}};dh.prototype.ca=function(){return{Ja:this.b.cardType,YC:this.b.passbackCode}};ah.prototype.ca=function(){return{Ja:this.b.cardType,Wh:this.b.response,cardIdx:this.b.fCard}};
bh.prototype.ca=function(){return{Ja:this.b.cardType,adId:this.b.response.adId,adWidth:this.b.response.adWidth,adHeight:this.b.response.adHeight,adPath:this.b.response.adPath,adData:this.b.response.adData,adClient:this.b.response.adClient,adSlot:this.b.response.adSlot,adType:this.b.response.adType,adContainerWidth:this.b.response.adContainerWidth,adContainerHeight:this.b.response.adContainerHeight,cardIdx:this.b.fCard,adStyle:this.b.response.adStyle}};OBR._jsc.x=lh.prototype;
OBR._jsc.x.bh=function(a){var b=a.Z(),c=O.ra(b),e=b,d=P;e=void 0===e?Q(d):e;if(!d.b[e].Zo){e=b;d=P;e=void 0===e?Q(d):e;d.b[e].Zo=!0;(a.je()||a.le()||a.oe())&&Mg(a.ma("nextFeedUrl"),b);a=c.i("feedLoadChunkSize",0);P.b[b].ih=a?1*a:null;Cg(b,c.i("feedContent","[]"));a=c.i("feedCardsRunningOnce","[]");e=P;e.b[b].Zn=[];try{e.b[b].Zn=JSON.parse(a)}catch(f){}P.mm(b,c.s("feedVersion","1"));a=c.i("intersectionObserverTriggerMargin","0");P.b[b].zA=a;P.yi(c.La());Rg(b,c.s("pcer",0));a=b;e=O.ke(b);d=P;a=void 0===
a?Q(d):a;d.b[a].lo=void 0===e?null:e;a=b;e=c.sh();c=c.zk();d=P;a=void 0===a?Q(d):a;!e||OBR.fa.vc||OBR.fa.wc||(d.b[a].Wj=e,"1"!==c&&1!==c)||(d.b[a].jo=1);O.Y().Qq||this.yd(b,0);Ng("followTopic",b)&&O.nA(b)}};
OBR._jsc.x.yd=function(a,b,c){c=void 0===c?null:c;var e=void 0===e?!0:e;var d=Ig(a),f=d.lc,g=d.Xc;d=O.ra(a);try{var k=OBR.f.Tn&&OBR.f.Tn.feedIdx===parseInt(a)}catch(m){k=!1}k?oh(d,a):(k=0===b&&d.Hf(),!1===g?(hg.Ue("fetchNextStream was triggered with hasMore=false. aborting..."),sh(c,"grey")):!e||-1<P.b[a].tf.indexOf(b)?(O.Xn(a),sh(c,"green"),c=d.G(),OBR.Ia.jr(c,f),Hg(a,b),b=this.tp(a,c),c=ph(a),eg(c,b),k?Dh(this,d.Hf(),a):(d=P.v.then(function(){return Zg(a,f)}),Eg(d),d.then(this.dd.bind(this)).catch(function(m){return qh(m,
a)}))):(hg.log("fetchNextStream was triggered but chunk is not observered. aborting..."),sh(c,"red")))};OBR._jsc.x.tp=function(a,b){a={sf:kh(new fh(a,!1)),Mc:b};b=OBR._jsc.ub;try{if(a.sf){b.g=OBR._jsc.sb();var c=b.g?OBR._jsc.rb(a):Yf(b,a)}else c=OBR._jsc.rb()}catch(e){c=OBR._jsc.rb(a)}return c};
OBR._jsc.x.dd=function(a){var b=this,c=a.Gj;OBR.Ia.it(c.ea,c.O,c.timestamp);var e=(new eh(a)).ca();a=e.Vg;var d=e.ob,f=e.Iw,g=e.li,k=OBR._jsc.z([O.ra(d),!Ng("feedManualChunkFetch",d),Ng("feedLayout",d)]),m=k.next().value,n=k.next().value;k=k.next().value;var h=e.Om,l=e.pl;e=JSON.parse(e.Xc);fg(m);gg(d);g&&Mg(g,d);if(a&&0!==a.length){var p=OBR._jsc.z(["2"===P.ne(d),m.My()]);g=p.next().value;var r=p.next().value;p=this.ah(a,d);if(g&&r){if(g=Gh(r,d,h,p))h=g.Om,l=h.slice(-1)[0],e=g.Xc,p=g.Hw}else cg(k,
d,p);zh(p);yh(h,d,m.Ny());this.rc(a,h,d);vh(h,d);Fg(e,d,l.ca());n&&e&&f.forEach(function(t){return t&&b.fi(d,t.ca())});Jg(d)?(Kg(d),OBR.Ia.kr(c.ea,c.O,c.timestamp)):OBR.Ia.lr(c.ea,c.O,c.timestamp);k&&(P.b[d].Nn&&th(h)?e||(O.ra(d).A().style.display="none"):P.b[d].Nn=!1);return{ob:d,pl:l}}e&&(uh(d),this.yd(d,Gg(d)))};OBR._jsc.x.rc=function(a,b,c){this.Cf(b);wh(b);Ng("followTopic")&&Ah(b,c);xh(a,c)};
OBR._jsc.x.Cf=function(a){a.map(function(b){b=b.ca().O;return O.ra(b)}).forEach(function(b){O.Cf(b,b.Z())})};OBR._jsc.x.fi=function(a,b){var c=this,e=Ig(a).lc,d=P.b[a].zA,f=O.A(b.O);sh(f,"yellow");O.fi(f,function(){return c.yd(a,e,f)},{rootMargin:d+"px 0px"})};OBR._jsc.x.ah=function(a,b){return a.map(function(c){return ug(c,b)},this)};var Bh=new lh;Hh.prototype.observe=function(a){this.b.some(function(b){return b.za===a})||this.b.push({za:a,size:{height:a.clientHeight,width:a.clientWidth}})};Hh.prototype.unobserve=function(a){this.b=this.b.filter(function(b){return b.za!==a})};Hh.prototype.disconnect=function(){this.b=[]};
Hh.prototype.o=function(){var a=this.b.filter(function(b){var c=b.za.clientHeight,e=b.za.clientWidth;if(b.size.height!==c||b.size.width!==e)return b.size.height=c,b.size.width=e,!0}).map(function(b){return b.za});0<a.length&&this.tc(a);window.requestAnimationFrame(this.g)};var Sh=!!window.ResizeObserver;Zf(Ih,lh);
Ih.prototype.dd=function(a){var b=this,c=new eh(a),e=c.ca(),d=e.Vg,f=e.ob;e=a.Gj;OBR.Ia.it(e.ea,e.O,e.timestamp);var g=O.ra(f);fg(g);gg(f);c=JSON.parse(c.ca().Xc);if(d&&0!==d.length){var k=[],m=[],n=!Ng("feedManualChunkFetch",f);m=g.i("sideElementFeedLimiter",null);k=g.i("sideElementLimiterOffset",0);var h=g.i("SideElementFeedLimiterFlow",null);g=document.querySelector(m);m=this.ah(d,f);h=Kh(g,f,m,h,k);var l=Lh(d,h);zh(h);yh(l,f);this.rc(d,l,f);h.length<m.length?(l&&l.length&&(k=l[l.length-1],Fg(c,
f,k.ca())),Jh(f,a,h),!c||P.Th(f)||Qg(f)||(this.De(g,f),Pg(f))):(k=l[l.length-1],m=[l[0].ca(),k.ca()],Fg(c,f,k.ca()),n&&c&&m.forEach(function(p){return b.fi(f,p)}));Jg(f)?(Kg(f),OBR.Ia.kr(e.ea,e.O,e.timestamp)):OBR.Ia.lr(e.ea,e.O,e.timestamp)}else c&&(uh(f),this.yd(f,Gg(f)))};
Ih.prototype.De=function(a,b){var c=this;try{var e=a.offsetHeight,d=OBR.wd(function(g){var k=b,m=P;k=void 0===k?Q(m):k;m.b[k].Th=!0;g=OBR._jsc.z(g);for(k=g.next();!k.done;k=g.next())k=k.value,(k.offsetHeight||k.contentRect.height)>1.1*e&&(f.unobserve(a),k=b,m=P,m=k?m.b[k].Kr:void 0,m?c.dd(m):c.yd(k,Gg(k),null))},500),f=Sh?new window.ResizeObserver(d):new Hh(d);f.observe(a)}catch(g){OBR.logger.log(g)}};Ih.prototype.tp=function(a,b){a={sf:kh(new fh(a,!0)),Mc:b};return OBR._jsc.rb(a)};var Th=new Ih;Zf(Mh,lh);OBR._jsc.x=Mh.prototype;OBR._jsc.x.da=function(){OBR.c.da("\n      @keyframes ob-feed-refresh-fadeIn {\n        from { opacity: 0; }\n          to { opacity: 1; }\n      }\n\n      @keyframes ob-feed-refresh-fadeOut {\n          from { opacity: 1; }\n            to { opacity: 0; }\n      }\n\n      .ob-feed-refresh-hidden {\n        opacity: 0;\n        display: none;\n      }\n\n      .ob-feed-refresh-show {\n        animation: ob-feed-refresh-fadeIn 0.75s ease-in-out forwards;\n      }\n\n      .ob-feed-refresh-hide {\n        animation: ob-feed-refresh-fadeOut 0.4s ease-in-out forwards;\n      }\n    ")};
OBR._jsc.x.yd=function(a,b){var c=Ig(a),e=c.lc,d=O.ra(a);b=0===b&&d.Hf();!1===c.Xc?hg.Ue("fetchNextStream was triggered with hasMore=false. aborting..."):(!this.o&&0<e&&(d.SE(),this.o=!0),O.Xn(a),OBR.Ia.jr(d.G(),e),b?Dh(this,d.Hf(),a):(c=P.v.then(function(){return Zg(a,e)}),Eg(c),c.then(this.dd.bind(this)).catch(function(f){return qh(f,a)})))};
OBR._jsc.x.dd=function(a){var b=this;try{var c=lh.prototype.dd.call(this,a),e=c.ob,d=Ig(e).lc,f=c.pl.ca().O,g=O.ra(f);g.Ma()&&Oh(this,e).then(function(){var k=g.$a("display",null);k&&k.html&&b.yd(e,d)})}catch(k){}};OBR._jsc.x.bh=function(a){var b=a.Z(),c=a.i("widgetRefreshCycleTime",15),e=P;b=void 0===b?Q(e):b;e.b[b].pG=1E3*c;lh.prototype.bh.call(this,a)};
OBR._jsc.x.ah=function(a,b){a=lh.prototype.ah.call(this,a,b);b=OBR._jsc.z(a).next().value;this.b&&(this.g=this.b,b.classList.add("ob-feed-refresh-hidden"));this.b=b;return a};var Uh=new Mh;OBR.og={init:function(a){var b=a.Fc.i("sideElementFeedLimiter",null);a.Fc.Oq()?nh(Uh,a):b&&document.querySelector(b)?nh(Th,a):nh(Bh,a)},externalChunkLoad:function(a){return Ch(a)},si:function(a,b){return Dh(Bh,a,b)}};OBR.l.W(OBR.l.u.gf);}).call(window);
