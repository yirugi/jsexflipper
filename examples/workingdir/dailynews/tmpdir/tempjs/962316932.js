(window._vfP=window._vfP||[]).push([[152,153],{381:function(n,t,e){"use strict";e.r(t);var r,i=e(2),u=e(26),c=e(90),o=e(40);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var f,s=(a(r={},i.sb,(function(n,t){(n[t]||[]).pop()})),a(r,i.a,Object(c.a)(u.default,(function(n,t){return!t.some((function(t){return t.thread_uuid===n.thread_uuid}))}))),a(r,i.C,Object(o.e)(u.default)),a(r,i.bd,(function(n,t){var e=t.uuid,r=t.mode,i=n[e];i[i.length-1].mode=r})),r),d=e(0);function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var _=(l(f={},d.a,(function(n){return function(t){var e=n[t]||[];return e[e.length-1]||{}}})),l(f,d.Mb,(function(n){return function(t){return Boolean(n[t])}})),f),b=e(3);var p,E,v,O=(p={},E=b.a,v=function(n,t){var e=t.thread_uuid,r=t.offset_top,u=t.mode,c=n.getters[d.S](e),o=n.getters[d.W](e);r=n.getters[d.a](o).offset_top||r;var a={key:o,items:[{parent_thread_uuid:c.thread_uuid,content_container_uuid:o,thread_uuid:e,offset_top:r,mode:u}]};n.commit(i.a,a)},E in p?Object.defineProperty(p,E,{value:v,enumerable:!0,configurable:!0,writable:!0}):p[E]=v,p);e.d(t,"REPLY_THREAD_MODES",(function(){return m})),e.d(t,"replyThreads",(function(){return N}));var m={MENTION:"mention",REPLY_PARENT:"reply",REPLIES:"replies"},D=function(){return{}},N=function(){return{state:D,mutations:s,getters:_,actions:O}}},477:function(n,t,e){"use strict";e.r(t);e(17),e(8),e(7),e(4),e(80),e(39),e(42);var r,i=e(2),u=e(70),c=e(40),o=e(700),a=e(300),f=e(26);function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var d,l=(s(r={},i.ec,Object(c.h)(f.default,a.c)),s(r,i.Ac,(function(n,t){delete t.item.actions,Object(c.h)(f.default,a.c)(n,t)})),s(r,i.Bb,Object(c.e)(f.default)),s(r,i.bb,(function(n,t){n[t].isNew=!1})),s(r,i.ab,(function(n,t){n[t].isNew=!0})),s(r,i.db,(function(n,t){n[t].read=!1})),s(r,i.cb,(function(n,t){n[t].read=!0})),s(r,i.jc,(function(n,t){var e=t.content_uuid,r=t.place;n[e].place=r})),s(r,i.fc,(function(n,t){var e=t.content_uuid,r=t.animation;n[e].animation=Object.values(a.a).includes(r)?r:a.a.NONE})),s(r,i.X,(function(n,t){n[t].is_picked=!0})),s(r,i.Y,(function(n,t){n[t].is_picked=!1})),s(r,i.Uc,(function(n,t){n[t].state_reasons.push(u.d.CONTENT_MARKED_AS_SPAM)})),s(r,i.Z,(function(n,t){n[t].state=u.c.VISIBLE,n[t].simplified_state=u.c.VISIBLE,n[t].state_reasons=n[t].state_reasons.filter((function(n){return n!==u.d.CONTENT_DISABLED&&n!==u.d.CONTENT_MARKED_AS_SPAM&&n!==u.d.CONTENT_AWAITING_MODERATION}))})),s(r,i.W,(function(n,t){n[t].simplified_state=u.c.DISABLED,n[t].state_reasons.push(u.d.CONTENT_DISABLED)})),s(r,i.rb,(function(n,t){n[t].is_pinned=!0,n[t].date_pinned=Date.now()})),s(r,i.ad,(function(n,t){n[t].is_pinned=!1,n[t].date_pinned=void 0})),s(r,i.ic,(function(n,t){var e=t.content_uuid,r=t.simplified_state;n[e].simplified_state=r,n[e].state_reasons.push(u.d.CONTENT_DELETED)})),s(r,i.Vb,(function(n){Object.values(n).forEach((function(n){n.actions=[]}))})),s(r,i.hb,Object(o.b)("total_likes")),s(r,i.V,Object(o.a)("total_likes")),s(r,i.fb,Object(o.b)("total_dislikes")),s(r,i.U,Object(o.a)("total_dislikes")),s(r,i.j,(function(n,t){n[t].actions=n[t].actions.concat("flag")})),s(r,i.H,(function(n,t){n[t].total_flags=0,n[t].actions=n[t].actions.filter((function(n){return"flag"!==n}))})),s(r,i.m,(function(n,t){n[t].actions=n[t].actions.concat("like")})),s(r,i.k,(function(n,t){n[t].actions=n[t].actions.concat("flag"),n[t].total_flags+=1})),s(r,i.gb,Object(o.b)("total_flags")),s(r,i.f,(function(n,t){n[t].actions=n[t].actions.concat("dislike")})),s(r,i.Nb,(function(n,t){n[t].actions=n[t].actions.filter((function(n){return"like"!==n}))})),s(r,i.Cb,(function(n,t){n[t].actions=n[t].actions.filter((function(n){return"dislike"!==n}))})),s(r,i.o,(function(n,t){var e=t.parent_uuid,r=t.child_uuid;n[e].reply_uuids.push(r),n[r].parent_uuid=e})),s(r,i.Rb,(function(n,t){var e=t.parent_uuid,r=t.child_uuid;n[e].reply_uuids=n[e].reply_uuids.filter((function(n){return n!==r})),n[r].parent_uuid=""})),s(r,i.ib,(function(n,t){n[t].total_replies+=1,n[t].total_direct_replies+=1})),r),_=(e(41),e(148),e(0)),b=e(14),p=e(62);function E(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var v,O,m=function(n,t){return Boolean(n)&&Object(b.H)(t)},D=(E(d={},_.S,(function(n){return function(t){return n[t]}})),E(d,_.R,(function(n,t){return function(e){return Object.values(n).filter((function(n){return n.thread_uuid===e})).filter((function(n){var e=n.content_uuid;return t[_.Qb](e)}))}})),E(d,_.Q,(function(n,t){return function(e){return Object.values(n).filter((function(n){return n.parent_uuid===e})).filter((function(n){var e=n.content_uuid;return t[_.Qb](e)}))}})),E(d,_.fb,(function(n,t){return function(e){return n[e].reply_uuids.filter(t[_.Qb]).map(t[_.S]).filter((function(n){return!n.state_reasons.includes(u.d.ACTOR_GHOST_BANNED)})).sort((function(n,t){return n.time-t.time}))}})),E(d,_.w,(function(n,t){return function(e){var r=n[e],i=t[_.hd](r),u=t[_.kb];return Boolean(r)&&function(n){return!n.social_id&&Boolean(n.content)}(r)&&i&&i.uuid===u}})),E(d,_.v,(function(n,t){return function(e){var r=n[e];return m(r,t[_.ib])&&r.simplified_state!==u.c.VISIBLE}})),E(d,_.s,(function(n,t){return function(e){var r=n[e];return m(r,t[_.ib])&&!r.state_reasons.includes(u.d.CONTENT_DISABLED)}})),E(d,_.x,(function(n,t){return function(e){var r=n[e];return m(r,t[_.ib])&&!r.is_pinned&&r.parent_uuid===r.content_container_uuid}})),E(d,_.A,(function(n,t){return function(e){var r=n[e];return m(r,t[_.ib])&&r.is_pinned&&r.parent_uuid===r.content_container_uuid}})),E(d,_.r,(function(n,t){return function(e){var r=n[e];return m(r,t[_.ib])&&r.total_flags>0}})),E(d,_.t,(function(n,t){return function(e){var r=n[e];return m(r,t[_.ib])&&!r.is_picked}})),E(d,_.u,(function(n,t){return function(e){var r=n[e];return m(r,t[_.ib])&&r.is_picked}})),E(d,_.z,(function(n,t){return function(e){var r=n[e];return m(r,t[_.ib])&&!r.state_reasons.includes(u.d.CONTENT_MARKED_AS_SPAM)}})),E(d,_.B,(function(n,t){return function(e){var r=n[e];return m(r,t[_.ib])&&r.state_reasons.includes(u.d.CONTENT_MARKED_AS_SPAM)}})),E(d,_.y,(function(n,t){return function(e){var r=n[e];return t[_.w](e)&&!r.state_reasons.includes(u.d.CONTENT_DELETED)}})),E(d,_.cb,(function(n){return function(t){return n[t].actions.some((function(n){return"like"===n}))}})),E(d,_.ab,(function(n){return function(t){return n[t].actions.some((function(n){return"dislike"===n}))}})),E(d,_.bb,(function(n){return function(t){return n[t].actions.some((function(n){return"flag"===n}))}})),E(d,_.Z,(function(n){return function(t,e){return n[t].actor_uuid===e}})),E(d,_.Y,(function(n,t){return function(n){return t[_.Z](n,t[_.kb])}})),E(d,_.db,(function(n){return function(t){return n[t].is_pinned}})),E(d,_.eb,(function(n){return function(t){return!n[t].is_pinned}})),E(d,_.Qb,(function(n,t){return function(e){var r=n[e];if(!r)return!1;if(Object(b.H)(t[_.ib]))return!0;var i=t[_.Pb];if(Object(p.c)(i)&&i(r.content_container_uuid))return t[_.Ub](r);if(!r.state_reasons.includes(u.d.CONTENT_DELETED)&&t[_.Y](r.content_uuid))return!0;var c=t[_.kd](r.actor_uuid),o=r.simplified_state===u.c.DISABLED,a=0===r.total_replies||0===t[_.Q](r.content_uuid).length;return!(c&&a||o)&&!r.state_reasons.includes(u.d.CONTENT_AWAITING_MODERATION)}})),E(d,_.Ob,(function(n){return function(t){return n[t].isNew}})),E(d,_.X,(function(n){return function(t,e){return n[t].reply_uuids.includes(e)}})),E(d,_.W,(function(n){return function(t){return n[t].content_container_uuid}})),E(d,_.Zc,(function(n){return function(t){return Object.values(n).filter((function(n){var e=n.content_container_uuid,r=n.content_uuid;return e===t&&D[_.Qb](r)})).length}})),d),N=(e(46),e(11),e(22),e(16),e(10),e(3)),j=e(13),A=e(179);function y(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function T(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function h(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?T(Object(e),!0).forEach((function(t){I(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):T(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function I(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var P=h(h({},(y(v={},j.i,(function(n,t){var e=n.state,r=n.getters,i=n.dispatch;if(!e[t.content_uuid])return Promise.resolve();var u=r[_.S](t.content_uuid);return u&&t.payload&&(!u.date_edited&&t.payload.date_edited||u.date_edited<t.payload.date_edited)&&(t.payload.content=u.content,t.payload.is_edited=u.is_edited,t.payload.date_edited=u.date_edited),r[_.Rb](t.actor_uuid)?i(N.gc,t):i(N.jc,t)})),y(v,N.gc,(function(n,t){var e=n.commit,r=t.action,u=t.content_uuid,c=t.payload;switch(r){case A.a.FLAGGED:case A.a.FLAGS_CLEARED:case A.a.PICKED:case A.a.UNPICKED:case A.a.PINNED:case A.a.UNPINNED:case A.a.SPAM:case A.a.DISABLED:case A.a.VISIBLE:e(i.Ac,{key:u,item:c})}})),y(v,N.jc,(function(n,t){var e=n.commit,r=t.action,u=t.content_uuid,c=t.payload;switch(r){case A.a.LIKED:e(i.hb,u);break;case A.a.UNLIKED:e(i.V,u);break;case A.a.DISLIKED:e(i.fb,u);break;case A.a.UNDISLIKED:e(i.U,u);break;case A.a.FLAGGED:case A.a.PICKED:case A.a.UNPICKED:case A.a.PINNED:case A.a.UNPINNED:case A.a.DELETED:case A.a.SPAM:case A.a.DISABLED:case A.a.VISIBLE:e(i.Ac,{key:u,item:c});break;case A.a.FLAGS_CLEARED:e(i.Ac,{key:u,item:c}),e(i.H,u)}})),v)),{},(I(O={},N.Hc,(function(n,t){var e=n.commit,r=Object(a.d)(t),u=r.post;return r.media.forEach((function(n){e(i.uc,n)})),e(i.ec,{key:u.content_uuid,item:u}),Promise.resolve(u)})),I(O,N.Gc,(function(n,t){for(var e=n.dispatch,r=t.content_container_uuid,i=t.contents,u=[],c=function(n){var t=i[n];t.media=t.media||[],t.content_container_uuid=t.content_container_uuid||r,u.push(e(N.Hc,t).then((function(){return t.content_uuid}))),t.origin===a.b.USER&&e(N.zb,t.content_uuid)},o=0;o<i.length;o++)c(o);return Promise.all(u)})),I(O,N.ic,(function(n){(0,n.commit)(i.Vb)})),O)),g=e(381);e.d(t,"storeModule",(function(){return S}));var S=function(){return{mutations:l,getters:D,actions:P,state:a.e,modules:{replyThreads:Object(g.replyThreads)()}}}},700:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return i}));var r=function(n){return function(t,e){t[e][n]++}},i=function(n){return function(t,e){t[e][n]--}}}}]);
//# sourceMappingURL=content-module-js.a1987da0167e425e43ee.js.map