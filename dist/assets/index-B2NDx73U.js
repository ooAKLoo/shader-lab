(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const r of f.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerPolicy&&(f.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?f.credentials="include":s.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(s){if(s.ep)return;s.ep=!0;const f=o(s);fetch(s.href,f)}})();function C1(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Xu={exports:{}},po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function n2(){if(mp)return po;mp=1;var c=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(l,s,f){var r=null;if(f!==void 0&&(r=""+f),s.key!==void 0&&(r=""+s.key),"key"in s){f={};for(var m in s)m!=="key"&&(f[m]=s[m])}else f=s;return s=f.ref,{$$typeof:c,type:l,key:r,ref:s!==void 0?s:null,props:f}}return po.Fragment=a,po.jsx=o,po.jsxs=o,po}var pp;function a2(){return pp||(pp=1,Xu.exports=n2()),Xu.exports}var h=a2(),Pu={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function l2(){if(vp)return fe;vp=1;var c=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),r=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),w=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=w&&N[w]||N["@@iterator"],typeof N=="function"?N:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,A={};function D(N,P,te){this.props=N,this.context=P,this.refs=A,this.updater=te||C}D.prototype.isReactComponent={},D.prototype.setState=function(N,P){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,P,"setState")},D.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function H(){}H.prototype=D.prototype;function E(N,P,te){this.props=N,this.context=P,this.refs=A,this.updater=te||C}var G=E.prototype=new H;G.constructor=E,_(G,D.prototype),G.isPureReactComponent=!0;var O=Array.isArray;function Y(){}var M={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function z(N,P,te){var ee=te.ref;return{$$typeof:c,type:N,key:P,ref:ee!==void 0?ee:null,props:te}}function B(N,P){return z(N.type,P,N.props)}function Z(N){return typeof N=="object"&&N!==null&&N.$$typeof===c}function W(N){var P={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(te){return P[te]})}var $=/\/+/g;function ne(N,P){return typeof N=="object"&&N!==null&&N.key!=null?W(""+N.key):P.toString(36)}function ae(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(Y,Y):(N.status="pending",N.then(function(P){N.status==="pending"&&(N.status="fulfilled",N.value=P)},function(P){N.status==="pending"&&(N.status="rejected",N.reason=P)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function k(N,P,te,ee,le){var oe=typeof N;(oe==="undefined"||oe==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(oe){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case c:case a:ve=!0;break;case p:return ve=N._init,k(ve(N._payload),P,te,ee,le)}}if(ve)return le=le(N),ve=ee===""?"."+ne(N,0):ee,O(le)?(te="",ve!=null&&(te=ve.replace($,"$&/")+"/"),k(le,P,te,"",function(st){return st})):le!=null&&(Z(le)&&(le=B(le,te+(le.key==null||N&&N.key===le.key?"":(""+le.key).replace($,"$&/")+"/")+ve)),P.push(le)),1;ve=0;var Ae=ee===""?".":ee+":";if(O(N))for(var Me=0;Me<N.length;Me++)ee=N[Me],oe=Ae+ne(ee,Me),ve+=k(ee,P,te,oe,le);else if(Me=S(N),typeof Me=="function")for(N=Me.call(N),Me=0;!(ee=N.next()).done;)ee=ee.value,oe=Ae+ne(ee,Me++),ve+=k(ee,P,te,oe,le);else if(oe==="object"){if(typeof N.then=="function")return k(ae(N),P,te,ee,le);throw P=String(N),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return ve}function J(N,P,te){if(N==null)return N;var ee=[],le=0;return k(N,ee,"","",function(oe){return P.call(te,oe,le++)}),ee}function ie(N){if(N._status===-1){var P=N._result;P=P(),P.then(function(te){(N._status===0||N._status===-1)&&(N._status=1,N._result=te)},function(te){(N._status===0||N._status===-1)&&(N._status=2,N._result=te)}),N._status===-1&&(N._status=0,N._result=P)}if(N._status===1)return N._result.default;throw N._result}var de=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ge={map:J,forEach:function(N,P,te){J(N,function(){P.apply(this,arguments)},te)},count:function(N){var P=0;return J(N,function(){P++}),P},toArray:function(N){return J(N,function(P){return P})||[]},only:function(N){if(!Z(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return fe.Activity=y,fe.Children=ge,fe.Component=D,fe.Fragment=o,fe.Profiler=s,fe.PureComponent=E,fe.StrictMode=l,fe.Suspense=g,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,fe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return M.H.useMemoCache(N)}},fe.cache=function(N){return function(){return N.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(N,P,te){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ee=_({},N.props),le=N.key;if(P!=null)for(oe in P.key!==void 0&&(le=""+P.key),P)!U.call(P,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&P.ref===void 0||(ee[oe]=P[oe]);var oe=arguments.length-2;if(oe===1)ee.children=te;else if(1<oe){for(var ve=Array(oe),Ae=0;Ae<oe;Ae++)ve[Ae]=arguments[Ae+2];ee.children=ve}return z(N.type,le,ee)},fe.createContext=function(N){return N={$$typeof:r,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:f,_context:N},N},fe.createElement=function(N,P,te){var ee,le={},oe=null;if(P!=null)for(ee in P.key!==void 0&&(oe=""+P.key),P)U.call(P,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(le[ee]=P[ee]);var ve=arguments.length-2;if(ve===1)le.children=te;else if(1<ve){for(var Ae=Array(ve),Me=0;Me<ve;Me++)Ae[Me]=arguments[Me+2];le.children=Ae}if(N&&N.defaultProps)for(ee in ve=N.defaultProps,ve)le[ee]===void 0&&(le[ee]=ve[ee]);return z(N,oe,le)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(N){return{$$typeof:m,render:N}},fe.isValidElement=Z,fe.lazy=function(N){return{$$typeof:p,_payload:{_status:-1,_result:N},_init:ie}},fe.memo=function(N,P){return{$$typeof:v,type:N,compare:P===void 0?null:P}},fe.startTransition=function(N){var P=M.T,te={};M.T=te;try{var ee=N(),le=M.S;le!==null&&le(te,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(Y,de)}catch(oe){de(oe)}finally{P!==null&&te.types!==null&&(P.types=te.types),M.T=P}},fe.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},fe.use=function(N){return M.H.use(N)},fe.useActionState=function(N,P,te){return M.H.useActionState(N,P,te)},fe.useCallback=function(N,P){return M.H.useCallback(N,P)},fe.useContext=function(N){return M.H.useContext(N)},fe.useDebugValue=function(){},fe.useDeferredValue=function(N,P){return M.H.useDeferredValue(N,P)},fe.useEffect=function(N,P){return M.H.useEffect(N,P)},fe.useEffectEvent=function(N){return M.H.useEffectEvent(N)},fe.useId=function(){return M.H.useId()},fe.useImperativeHandle=function(N,P,te){return M.H.useImperativeHandle(N,P,te)},fe.useInsertionEffect=function(N,P){return M.H.useInsertionEffect(N,P)},fe.useLayoutEffect=function(N,P){return M.H.useLayoutEffect(N,P)},fe.useMemo=function(N,P){return M.H.useMemo(N,P)},fe.useOptimistic=function(N,P){return M.H.useOptimistic(N,P)},fe.useReducer=function(N,P,te){return M.H.useReducer(N,P,te)},fe.useRef=function(N){return M.H.useRef(N)},fe.useState=function(N){return M.H.useState(N)},fe.useSyncExternalStore=function(N,P,te){return M.H.useSyncExternalStore(N,P,te)},fe.useTransition=function(){return M.H.useTransition()},fe.version="19.2.4",fe}var gp;function qf(){return gp||(gp=1,Pu.exports=l2()),Pu.exports}var L=qf();const i2=C1(L);var Qu={exports:{}},vo={},Zu={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function o2(){return xp||(xp=1,(function(c){function a(k,J){var ie=k.length;k.push(J);e:for(;0<ie;){var de=ie-1>>>1,ge=k[de];if(0<s(ge,J))k[de]=J,k[ie]=ge,ie=de;else break e}}function o(k){return k.length===0?null:k[0]}function l(k){if(k.length===0)return null;var J=k[0],ie=k.pop();if(ie!==J){k[0]=ie;e:for(var de=0,ge=k.length,N=ge>>>1;de<N;){var P=2*(de+1)-1,te=k[P],ee=P+1,le=k[ee];if(0>s(te,ie))ee<ge&&0>s(le,te)?(k[de]=le,k[ee]=ie,de=ee):(k[de]=te,k[P]=ie,de=P);else if(ee<ge&&0>s(le,ie))k[de]=le,k[ee]=ie,de=ee;else break e}}return J}function s(k,J){var ie=k.sortIndex-J.sortIndex;return ie!==0?ie:k.id-J.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;c.unstable_now=function(){return f.now()}}else{var r=Date,m=r.now();c.unstable_now=function(){return r.now()-m}}var g=[],v=[],p=1,y=null,w=3,S=!1,C=!1,_=!1,A=!1,D=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function G(k){for(var J=o(v);J!==null;){if(J.callback===null)l(v);else if(J.startTime<=k)l(v),J.sortIndex=J.expirationTime,a(g,J);else break;J=o(v)}}function O(k){if(_=!1,G(k),!C)if(o(g)!==null)C=!0,Y||(Y=!0,W());else{var J=o(v);J!==null&&ae(O,J.startTime-k)}}var Y=!1,M=-1,U=5,z=-1;function B(){return A?!0:!(c.unstable_now()-z<U)}function Z(){if(A=!1,Y){var k=c.unstable_now();z=k;var J=!0;try{e:{C=!1,_&&(_=!1,H(M),M=-1),S=!0;var ie=w;try{t:{for(G(k),y=o(g);y!==null&&!(y.expirationTime>k&&B());){var de=y.callback;if(typeof de=="function"){y.callback=null,w=y.priorityLevel;var ge=de(y.expirationTime<=k);if(k=c.unstable_now(),typeof ge=="function"){y.callback=ge,G(k),J=!0;break t}y===o(g)&&l(g),G(k)}else l(g);y=o(g)}if(y!==null)J=!0;else{var N=o(v);N!==null&&ae(O,N.startTime-k),J=!1}}break e}finally{y=null,w=ie,S=!1}J=void 0}}finally{J?W():Y=!1}}}var W;if(typeof E=="function")W=function(){E(Z)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ne=$.port2;$.port1.onmessage=Z,W=function(){ne.postMessage(null)}}else W=function(){D(Z,0)};function ae(k,J){M=D(function(){k(c.unstable_now())},J)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(k){k.callback=null},c.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<k?Math.floor(1e3/k):5},c.unstable_getCurrentPriorityLevel=function(){return w},c.unstable_next=function(k){switch(w){case 1:case 2:case 3:var J=3;break;default:J=w}var ie=w;w=J;try{return k()}finally{w=ie}},c.unstable_requestPaint=function(){A=!0},c.unstable_runWithPriority=function(k,J){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ie=w;w=k;try{return J()}finally{w=ie}},c.unstable_scheduleCallback=function(k,J,ie){var de=c.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?de+ie:de):ie=de,k){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ie+ge,k={id:p++,callback:J,priorityLevel:k,startTime:ie,expirationTime:ge,sortIndex:-1},ie>de?(k.sortIndex=ie,a(v,k),o(g)===null&&k===o(v)&&(_?(H(M),M=-1):_=!0,ae(O,ie-de))):(k.sortIndex=ge,a(g,k),C||S||(C=!0,Y||(Y=!0,W()))),k},c.unstable_shouldYield=B,c.unstable_wrapCallback=function(k){var J=w;return function(){var ie=w;w=J;try{return k.apply(this,arguments)}finally{w=ie}}}})(Ku)),Ku}var yp;function r2(){return yp||(yp=1,Zu.exports=o2()),Zu.exports}var Iu={exports:{}},gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function s2(){if(bp)return gt;bp=1;var c=qf();function a(g){var v="https://react.dev/errors/"+g;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)v+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+g+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},s=Symbol.for("react.portal");function f(g,v,p){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:y==null?null:""+y,children:g,containerInfo:v,implementation:p}}var r=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,v){if(g==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,gt.createPortal=function(g,v){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(a(299));return f(g,v,null,p)},gt.flushSync=function(g){var v=r.T,p=l.p;try{if(r.T=null,l.p=2,g)return g()}finally{r.T=v,l.p=p,l.d.f()}},gt.preconnect=function(g,v){typeof g=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,l.d.C(g,v))},gt.prefetchDNS=function(g){typeof g=="string"&&l.d.D(g)},gt.preinit=function(g,v){if(typeof g=="string"&&v&&typeof v.as=="string"){var p=v.as,y=m(p,v.crossOrigin),w=typeof v.integrity=="string"?v.integrity:void 0,S=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;p==="style"?l.d.S(g,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:y,integrity:w,fetchPriority:S}):p==="script"&&l.d.X(g,{crossOrigin:y,integrity:w,fetchPriority:S,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},gt.preinitModule=function(g,v){if(typeof g=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var p=m(v.as,v.crossOrigin);l.d.M(g,{crossOrigin:p,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&l.d.M(g)},gt.preload=function(g,v){if(typeof g=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var p=v.as,y=m(p,v.crossOrigin);l.d.L(g,p,{crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},gt.preloadModule=function(g,v){if(typeof g=="string")if(v){var p=m(v.as,v.crossOrigin);l.d.m(g,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:p,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else l.d.m(g)},gt.requestFormReset=function(g){l.d.r(g)},gt.unstable_batchedUpdates=function(g,v){return g(v)},gt.useFormState=function(g,v,p){return r.H.useFormState(g,v,p)},gt.useFormStatus=function(){return r.H.useHostTransitionStatus()},gt.version="19.2.4",gt}var _p;function c2(){if(_p)return Iu.exports;_p=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(a){console.error(a)}}return c(),Iu.exports=s2(),Iu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function u2(){if(Sp)return vo;Sp=1;var c=r2(),a=qf(),o=c2();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function r(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(l(188))}function v(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,i=t;;){var u=n.return;if(u===null)break;var d=u.alternate;if(d===null){if(i=u.return,i!==null){n=i;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===n)return g(u),e;if(d===i)return g(u),t;d=d.sibling}throw Error(l(188))}if(n.return!==i.return)n=u,i=d;else{for(var x=!1,b=u.child;b;){if(b===n){x=!0,n=u,i=d;break}if(b===i){x=!0,i=u,n=d;break}b=b.sibling}if(!x){for(b=d.child;b;){if(b===n){x=!0,n=d,i=u;break}if(b===i){x=!0,i=d,n=u;break}b=b.sibling}if(!x)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,w=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),E=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case D:return"Profiler";case A:return"StrictMode";case O:return"Suspense";case Y:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case E:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case G:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case U:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var ae=Array.isArray,k=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},de=[],ge=-1;function N(e){return{current:e}}function P(e){0>ge||(e.current=de[ge],de[ge]=null,ge--)}function te(e,t){ge++,de[ge]=e.current,e.current=t}var ee=N(null),le=N(null),oe=N(null),ve=N(null);function Ae(e,t){switch(te(oe,t),te(le,e),te(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Bm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Bm(t),e=km(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(ee),te(ee,e)}function Me(){P(ee),P(le),P(oe)}function st(e){e.memoizedState!==null&&te(ve,e);var t=ee.current,n=km(t,e.type);t!==n&&(te(le,e),te(ee,n))}function vt(e){le.current===e&&(P(ee),P(le)),ve.current===e&&(P(ve),uo._currentValue=ie)}var xn,Be;function ke(e){if(xn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xn=t&&t[1]||"",Be=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xn+e+Be}var yn=!1;function St(e,t){if(!e||yn)return"";yn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(X){var V=X}Reflect.construct(e,[],I)}else{try{I.call()}catch(X){V=X}e.call(I.prototype)}}else{try{throw Error()}catch(X){V=X}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(X){if(X&&V&&typeof X.stack=="string")return[X.stack,V.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=i.DetermineComponentFrameRoot(),x=d[0],b=d[1];if(x&&b){var T=x.split(`
`),q=b.split(`
`);for(u=i=0;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;for(;u<q.length&&!q[u].includes("DetermineComponentFrameRoot");)u++;if(i===T.length||u===q.length)for(i=T.length-1,u=q.length-1;1<=i&&0<=u&&T[i]!==q[u];)u--;for(;1<=i&&0<=u;i--,u--)if(T[i]!==q[u]){if(i!==1||u!==1)do if(i--,u--,0>u||T[i]!==q[u]){var Q=`
`+T[i].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=i&&0<=u);break}}}finally{yn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ke(n):""}function dn(e,t){switch(e.tag){case 26:case 27:case 5:return ke(e.type);case 16:return ke("Lazy");case 13:return e.child!==t&&t!==null?ke("Suspense Fallback"):ke("Suspense");case 19:return ke("SuspenseList");case 0:case 15:return St(e.type,!1);case 11:return St(e.type.render,!1);case 1:return St(e.type,!0);case 31:return ke("Activity");default:return""}}function zn(e){try{var t="",n=null;do t+=dn(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var En=Object.prototype.hasOwnProperty,_i=c.unstable_scheduleCallback,Ua=c.unstable_cancelCallback,me=c.unstable_shouldYield,ko=c.unstable_requestPaint,Lt=c.unstable_now,Uv=c.unstable_getCurrentPriorityLevel,pd=c.unstable_ImmediatePriority,vd=c.unstable_UserBlockingPriority,Fo=c.unstable_NormalPriority,Bv=c.unstable_LowPriority,gd=c.unstable_IdlePriority,kv=c.log,Fv=c.unstable_setDisableYieldValue,Si=null,Ut=null;function ta(e){if(typeof kv=="function"&&Fv(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(Si,e)}catch{}}var Bt=Math.clz32?Math.clz32:Gv,Hv=Math.log,qv=Math.LN2;function Gv(e){return e>>>=0,e===0?32:31-(Hv(e)/qv|0)|0}var Ho=256,qo=262144,Go=4194304;function Ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vo(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var u=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~d,i!==0?u=Ba(i):(x&=b,x!==0?u=Ba(x):n||(n=b&~e,n!==0&&(u=Ba(n))))):(b=i&~d,b!==0?u=Ba(b):x!==0?u=Ba(x):n||(n=i&~e,n!==0&&(u=Ba(n)))),u===0?0:t!==0&&t!==u&&(t&d)===0&&(d=u&-u,n=t&-t,d>=n||d===32&&(n&4194048)!==0)?t:u}function wi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xd(){var e=Go;return Go<<=1,(Go&62914560)===0&&(Go=4194304),e}function Ms(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ti(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yv(e,t,n,i,u,d){var x=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,T=e.expirationTimes,q=e.hiddenUpdates;for(n=x&~n;0<n;){var Q=31-Bt(n),I=1<<Q;b[Q]=0,T[Q]=-1;var V=q[Q];if(V!==null)for(q[Q]=null,Q=0;Q<V.length;Q++){var X=V[Q];X!==null&&(X.lane&=-536870913)}n&=~I}i!==0&&yd(e,i,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~t))}function yd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Bt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function bd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Bt(n),u=1<<i;u&t|e[i]&t&&(e[i]|=t),n&=~u}}function _d(e,t){var n=t&-t;return n=(n&42)!==0?1:Os(n),(n&(e.suspendedLanes|t))!==0?0:n}function Os(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ls(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sd(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:rp(e.type))}function wd(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var na=Math.random().toString(36).slice(2),ct="__reactFiber$"+na,wt="__reactProps$"+na,pl="__reactContainer$"+na,Us="__reactEvents$"+na,Xv="__reactListeners$"+na,Pv="__reactHandles$"+na,Td="__reactResources$"+na,Ci="__reactMarker$"+na;function Bs(e){delete e[ct],delete e[wt],delete e[Us],delete e[Xv],delete e[Pv]}function vl(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pl]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xm(e);e!==null;){if(n=e[ct])return n;e=Xm(e)}return t}e=n,n=e.parentNode}return null}function gl(e){if(e=e[ct]||e[pl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ni(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function xl(e){var t=e[Td];return t||(t=e[Td]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function it(e){e[Ci]=!0}var Cd=new Set,Nd={};function ka(e,t){yl(e,t),yl(e+"Capture",t)}function yl(e,t){for(Nd[e]=t,e=0;e<t.length;e++)Cd.add(t[e])}var Qv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ad={},Rd={};function Zv(e){return En.call(Rd,e)?!0:En.call(Ad,e)?!1:Qv.test(e)?Rd[e]=!0:(Ad[e]=!0,!1)}function Yo(e,t,n){if(Zv(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Xo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function jn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kv(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,d=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(x){n=""+x,d.call(this,x)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(x){n=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ks(e){if(!e._valueTracker){var t=zd(e)?"checked":"value";e._valueTracker=Kv(e,t,""+e[t])}}function Ed(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=zd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Iv=/[\n"\\]/g;function $t(e){return e.replace(Iv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fs(e,t,n,i,u,d,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),t!=null?x==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Wt(t)):e.value!==""+Wt(t)&&(e.value=""+Wt(t)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),t!=null?Hs(e,x,Wt(t)):n!=null?Hs(e,x,Wt(n)):i!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Wt(b):e.removeAttribute("name")}function jd(e,t,n,i,u,d,x,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||t!=null)){ks(e);return}n=n!=null?""+Wt(n):"",t=t!=null?""+Wt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??u,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),ks(e)}function Hs(e,t,n){t==="number"&&Po(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bl(e,t,n,i){if(e=e.options,t){t={};for(var u=0;u<n.length;u++)t["$"+n[u]]=!0;for(n=0;n<e.length;n++)u=t.hasOwnProperty("$"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,u=0;u<e.length;u++){if(e[u].value===n){e[u].selected=!0,i&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Dd(e,t,n){if(t!=null&&(t=""+Wt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Wt(n):""}function Md(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(l(92));if(ae(i)){if(1<i.length)throw Error(l(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Wt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),ks(e)}function _l(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Od(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Jv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ld(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var u in t)i=t[u],t.hasOwnProperty(u)&&n[u]!==i&&Od(e,u,i)}else for(var d in t)t.hasOwnProperty(d)&&Od(e,d,t[d])}function qs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return $v.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Dn(){}var Gs=null;function Vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,wl=null;function Ud(e){var t=gl(e);if(t&&(e=t.stateNode)){var n=e[wt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+$t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var u=i[wt]||null;if(!u)throw Error(l(90));Fs(i,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ed(i)}break e;case"textarea":Dd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&bl(e,!!n.multiple,t,!1)}}}var Ys=!1;function Bd(e,t,n){if(Ys)return e(t,n);Ys=!0;try{var i=e(t);return i}finally{if(Ys=!1,(Sl!==null||wl!==null)&&(Or(),Sl&&(t=Sl,e=wl,wl=Sl=null,Ud(t),e)))for(t=0;t<e.length;t++)Ud(e[t])}}function Ai(e,t){var n=e.stateNode;if(n===null)return null;var i=n[wt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xs=!1;if(Mn)try{var Ri={};Object.defineProperty(Ri,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",Ri,Ri),window.removeEventListener("test",Ri,Ri)}catch{Xs=!1}var aa=null,Ps=null,Zo=null;function kd(){if(Zo)return Zo;var e,t=Ps,n=t.length,i,u="value"in aa?aa.value:aa.textContent,d=u.length;for(e=0;e<n&&t[e]===u[e];e++);var x=n-e;for(i=1;i<=x&&t[n-i]===u[d-i];i++);return Zo=u.slice(e,1<i?1-i:void 0)}function Ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function Fd(){return!1}function Tt(e){function t(n,i,u,d,x){this._reactName=n,this._targetInst=u,this.type=i,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Io:Fd,this.isPropagationStopped=Fd,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),t}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=Tt(Fa),zi=y({},Fa,{view:0,detail:0}),eg=Tt(zi),Qs,Zs,Ei,Wo=y({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(Qs=e.screenX-Ei.screenX,Zs=e.screenY-Ei.screenY):Zs=Qs=0,Ei=e),Qs)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),Hd=Tt(Wo),tg=y({},Wo,{dataTransfer:0}),ng=Tt(tg),ag=y({},zi,{relatedTarget:0}),Ks=Tt(ag),lg=y({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),ig=Tt(lg),og=y({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rg=Tt(og),sg=y({},Fa,{data:0}),qd=Tt(sg),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fg[e])?!!t[e]:!1}function Is(){return dg}var hg=y({},zi,{key:function(e){if(e.key){var t=cg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ug[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=Tt(hg),pg=y({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gd=Tt(pg),vg=y({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),gg=Tt(vg),xg=y({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),yg=Tt(xg),bg=y({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_g=Tt(bg),Sg=y({},Fa,{newState:0,oldState:0}),wg=Tt(Sg),Tg=[9,13,27,32],Js=Mn&&"CompositionEvent"in window,ji=null;Mn&&"documentMode"in document&&(ji=document.documentMode);var Cg=Mn&&"TextEvent"in window&&!ji,Vd=Mn&&(!Js||ji&&8<ji&&11>=ji),Yd=" ",Xd=!1;function Pd(e,t){switch(e){case"keyup":return Tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tl=!1;function Ng(e,t){switch(e){case"compositionend":return Qd(t);case"keypress":return t.which!==32?null:(Xd=!0,Yd);case"textInput":return e=t.data,e===Yd&&Xd?null:e;default:return null}}function Ag(e,t){if(Tl)return e==="compositionend"||!Js&&Pd(e,t)?(e=kd(),Zo=Ps=aa=null,Tl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vd&&t.locale!=="ko"?null:t.data;default:return null}}var Rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rg[e.type]:t==="textarea"}function Kd(e,t,n,i){Sl?wl?wl.push(i):wl=[i]:Sl=i,t=qr(t,"onChange"),0<t.length&&(n=new Jo("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Di=null,Mi=null;function zg(e){jm(e,0)}function $o(e){var t=Ni(e);if(Ed(t))return e}function Id(e,t){if(e==="change")return t}var Jd=!1;if(Mn){var Ws;if(Mn){var $s="oninput"in document;if(!$s){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),$s=typeof Wd.oninput=="function"}Ws=$s}else Ws=!1;Jd=Ws&&(!document.documentMode||9<document.documentMode)}function $d(){Di&&(Di.detachEvent("onpropertychange",e0),Mi=Di=null)}function e0(e){if(e.propertyName==="value"&&$o(Mi)){var t=[];Kd(t,Mi,e,Vs(e)),Bd(zg,t)}}function Eg(e,t,n){e==="focusin"?($d(),Di=t,Mi=n,Di.attachEvent("onpropertychange",e0)):e==="focusout"&&$d()}function jg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Mi)}function Dg(e,t){if(e==="click")return $o(t)}function Mg(e,t){if(e==="input"||e==="change")return $o(t)}function Og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Og;function Oi(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var u=n[i];if(!En.call(t,u)||!kt(e[u],t[u]))return!1}return!0}function t0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function n0(e,t){var n=t0(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=t0(n)}}function a0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?a0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function l0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Po(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Po(e.document)}return t}function ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Lg=Mn&&"documentMode"in document&&11>=document.documentMode,Cl=null,tc=null,Li=null,nc=!1;function i0(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nc||Cl==null||Cl!==Po(i)||(i=Cl,"selectionStart"in i&&ec(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Li&&Oi(Li,i)||(Li=i,i=qr(tc,"onSelect"),0<i.length&&(t=new Jo("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Cl)))}function Ha(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nl={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},ac={},o0={};Mn&&(o0=document.createElement("div").style,"AnimationEvent"in window||(delete Nl.animationend.animation,delete Nl.animationiteration.animation,delete Nl.animationstart.animation),"TransitionEvent"in window||delete Nl.transitionend.transition);function qa(e){if(ac[e])return ac[e];if(!Nl[e])return e;var t=Nl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in o0)return ac[e]=t[n];return e}var r0=qa("animationend"),s0=qa("animationiteration"),c0=qa("animationstart"),Ug=qa("transitionrun"),Bg=qa("transitionstart"),kg=qa("transitioncancel"),u0=qa("transitionend"),f0=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function hn(e,t){f0.set(e,t),ka(t,[e])}var er=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},en=[],Al=0,ic=0;function tr(){for(var e=Al,t=ic=Al=0;t<e;){var n=en[t];en[t++]=null;var i=en[t];en[t++]=null;var u=en[t];en[t++]=null;var d=en[t];if(en[t++]=null,i!==null&&u!==null){var x=i.pending;x===null?u.next=u:(u.next=x.next,x.next=u),i.pending=u}d!==0&&d0(n,u,d)}}function nr(e,t,n,i){en[Al++]=e,en[Al++]=t,en[Al++]=n,en[Al++]=i,ic|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function oc(e,t,n,i){return nr(e,t,n,i),ar(e)}function Ga(e,t){return nr(e,null,null,t),ar(e)}function d0(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var u=!1,d=e.return;d!==null;)d.childLanes|=n,i=d.alternate,i!==null&&(i.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&t!==null&&(u=31-Bt(n),e=d.hiddenUpdates,i=e[u],i===null?e[u]=[t]:i.push(t),t.lane=n|536870912),d):null}function ar(e){if(50<ao)throw ao=0,pu=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Rl={};function Fg(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,i){return new Fg(e,t,n,i)}function rc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function On(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function h0(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function lr(e,t,n,i,u,d){var x=0;if(i=e,typeof e=="function")rc(e)&&(x=1);else if(typeof e=="string")x=Yx(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case z:return e=Ft(31,n,t,u),e.elementType=z,e.lanes=d,e;case _:return Va(n.children,u,d,t);case A:x=8,u|=24;break;case D:return e=Ft(12,n,t,u|2),e.elementType=D,e.lanes=d,e;case O:return e=Ft(13,n,t,u),e.elementType=O,e.lanes=d,e;case Y:return e=Ft(19,n,t,u),e.elementType=Y,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case E:x=10;break e;case H:x=9;break e;case G:x=11;break e;case M:x=14;break e;case U:x=16,i=null;break e}x=29,n=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=Ft(x,n,t,u),t.elementType=e,t.type=i,t.lanes=d,t}function Va(e,t,n,i){return e=Ft(7,e,i,t),e.lanes=n,e}function sc(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function m0(e){var t=Ft(18,null,null,0);return t.stateNode=e,t}function cc(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var p0=new WeakMap;function tn(e,t){if(typeof e=="object"&&e!==null){var n=p0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:zn(t)},p0.set(e,t),t)}return{value:e,source:t,stack:zn(t)}}var zl=[],El=0,ir=null,Ui=0,nn=[],an=0,la=null,bn=1,_n="";function Ln(e,t){zl[El++]=Ui,zl[El++]=ir,ir=e,Ui=t}function v0(e,t,n){nn[an++]=bn,nn[an++]=_n,nn[an++]=la,la=e;var i=bn;e=_n;var u=32-Bt(i)-1;i&=~(1<<u),n+=1;var d=32-Bt(t)+u;if(30<d){var x=u-u%5;d=(i&(1<<x)-1).toString(32),i>>=x,u-=x,bn=1<<32-Bt(t)+u|n<<u|i,_n=d+e}else bn=1<<d|n<<u|i,_n=e}function uc(e){e.return!==null&&(Ln(e,1),v0(e,1,0))}function fc(e){for(;e===ir;)ir=zl[--El],zl[El]=null,Ui=zl[--El],zl[El]=null;for(;e===la;)la=nn[--an],nn[an]=null,_n=nn[--an],nn[an]=null,bn=nn[--an],nn[an]=null}function g0(e,t){nn[an++]=bn,nn[an++]=_n,nn[an++]=la,bn=t.id,_n=t.overflow,la=e}var ut=null,Fe=null,Se=!1,ia=null,ln=!1,dc=Error(l(519));function oa(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bi(tn(t,e)),dc}function x0(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ct]=e,t[wt]=i,n){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(n=0;n<io.length;n++)ye(io[n],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),jd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),Md(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Lm(t.textContent,n)?(i.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),i.onScroll!=null&&ye("scroll",t),i.onScrollEnd!=null&&ye("scrollend",t),i.onClick!=null&&(t.onclick=Dn),t=!0):t=!1,t||oa(e,!0)}function y0(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 31:case 13:ln=!1;return;case 27:case 3:ln=!0;return;default:ut=ut.return}}function jl(e){if(e!==ut)return!1;if(!Se)return y0(e),Se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Eu(e.type,e.memoizedProps)),n=!n),n&&Fe&&oa(e),y0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Fe=Ym(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Fe=Ym(e)}else t===27?(t=Fe,ba(e.type)?(e=Lu,Lu=null,Fe=e):Fe=t):Fe=ut?rn(e.stateNode.nextSibling):null;return!0}function Ya(){Fe=ut=null,Se=!1}function hc(){var e=ia;return e!==null&&(Rt===null?Rt=e:Rt.push.apply(Rt,e),ia=null),e}function Bi(e){ia===null?ia=[e]:ia.push(e)}var mc=N(null),Xa=null,Un=null;function ra(e,t,n){te(mc,t._currentValue),t._currentValue=n}function Bn(e){e._currentValue=mc.current,P(mc)}function pc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function vc(e,t,n,i){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var b=d;d=u;for(var T=0;T<t.length;T++)if(b.context===t[T]){d.lanes|=n,b=d.alternate,b!==null&&(b.lanes|=n),pc(d.return,n,e),i||(x=null);break e}d=b.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(l(341));x.lanes|=n,d=x.alternate,d!==null&&(d.lanes|=n),pc(x,n,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Dl(e,t,n,i){e=null;for(var u=t,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(l(387));if(x=x.memoizedProps,x!==null){var b=u.type;kt(u.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(u===ve.current){if(x=u.alternate,x===null)throw Error(l(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(uo):e=[uo])}u=u.return}e!==null&&vc(t,e,n,i),t.flags|=262144}function or(e){for(e=e.firstContext;e!==null;){if(!kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Xa=e,Un=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ft(e){return b0(Xa,e)}function rr(e,t){return Xa===null&&Pa(e),b0(e,t)}function b0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Un===null){if(e===null)throw Error(l(308));Un=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Un=Un.next=t;return n}var Hg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},qg=c.unstable_scheduleCallback,Gg=c.unstable_NormalPriority,$e={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gc(){return{controller:new Hg,data:new Map,refCount:0}}function ki(e){e.refCount--,e.refCount===0&&qg(Gg,function(){e.controller.abort()})}var Fi=null,xc=0,Ml=0,Ol=null;function Vg(e,t){if(Fi===null){var n=Fi=[];xc=0,Ml=_u(),Ol={status:"pending",value:void 0,then:function(i){n.push(i)}}}return xc++,t.then(_0,_0),t}function _0(){if(--xc===0&&Fi!==null){Ol!==null&&(Ol.status="fulfilled");var e=Fi;Fi=null,Ml=0,Ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Yg(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(u){n.push(u)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var u=0;u<n.length;u++)(0,n[u])(t)},function(u){for(i.status="rejected",i.reason=u,u=0;u<n.length;u++)(0,n[u])(void 0)}),i}var S0=k.S;k.S=function(e,t){im=Lt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Vg(e,t),S0!==null&&S0(e,t)};var Qa=N(null);function yc(){var e=Qa.current;return e!==null?e:Oe.pooledCache}function sr(e,t){t===null?te(Qa,Qa.current):te(Qa,t.pool)}function w0(){var e=yc();return e===null?null:{parent:$e._currentValue,pool:e}}var Ll=Error(l(460)),bc=Error(l(474)),cr=Error(l(542)),ur={then:function(){}};function T0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function C0(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Dn,Dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,A0(e),e;default:if(typeof t.status=="string")t.then(Dn,Dn);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=i}},function(i){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,A0(e),e}throw Ka=t,Ll}}function Za(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ka=n,Ll):n}}var Ka=null;function N0(){if(Ka===null)throw Error(l(459));var e=Ka;return Ka=null,e}function A0(e){if(e===Ll||e===cr)throw Error(l(483))}var Ul=null,Hi=0;function fr(e){var t=Hi;return Hi+=1,Ul===null&&(Ul=[]),C0(Ul,e,t)}function qi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function dr(e,t){throw t.$$typeof===w?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function R0(e){function t(j,R){if(e){var F=j.deletions;F===null?(j.deletions=[R],j.flags|=16):F.push(R)}}function n(j,R){if(!e)return null;for(;R!==null;)t(j,R),R=R.sibling;return null}function i(j){for(var R=new Map;j!==null;)j.key!==null?R.set(j.key,j):R.set(j.index,j),j=j.sibling;return R}function u(j,R){return j=On(j,R),j.index=0,j.sibling=null,j}function d(j,R,F){return j.index=F,e?(F=j.alternate,F!==null?(F=F.index,F<R?(j.flags|=67108866,R):F):(j.flags|=67108866,R)):(j.flags|=1048576,R)}function x(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,R,F,K){return R===null||R.tag!==6?(R=sc(F,j.mode,K),R.return=j,R):(R=u(R,F),R.return=j,R)}function T(j,R,F,K){var ce=F.type;return ce===_?Q(j,R,F.props.children,K,F.key):R!==null&&(R.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===U&&Za(ce)===R.type)?(R=u(R,F.props),qi(R,F),R.return=j,R):(R=lr(F.type,F.key,F.props,null,j.mode,K),qi(R,F),R.return=j,R)}function q(j,R,F,K){return R===null||R.tag!==4||R.stateNode.containerInfo!==F.containerInfo||R.stateNode.implementation!==F.implementation?(R=cc(F,j.mode,K),R.return=j,R):(R=u(R,F.children||[]),R.return=j,R)}function Q(j,R,F,K,ce){return R===null||R.tag!==7?(R=Va(F,j.mode,K,ce),R.return=j,R):(R=u(R,F),R.return=j,R)}function I(j,R,F){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=sc(""+R,j.mode,F),R.return=j,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case S:return F=lr(R.type,R.key,R.props,null,j.mode,F),qi(F,R),F.return=j,F;case C:return R=cc(R,j.mode,F),R.return=j,R;case U:return R=Za(R),I(j,R,F)}if(ae(R)||W(R))return R=Va(R,j.mode,F,null),R.return=j,R;if(typeof R.then=="function")return I(j,fr(R),F);if(R.$$typeof===E)return I(j,rr(j,R),F);dr(j,R)}return null}function V(j,R,F,K){var ce=R!==null?R.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return ce!==null?null:b(j,R,""+F,K);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return F.key===ce?T(j,R,F,K):null;case C:return F.key===ce?q(j,R,F,K):null;case U:return F=Za(F),V(j,R,F,K)}if(ae(F)||W(F))return ce!==null?null:Q(j,R,F,K,null);if(typeof F.then=="function")return V(j,R,fr(F),K);if(F.$$typeof===E)return V(j,R,rr(j,F),K);dr(j,F)}return null}function X(j,R,F,K,ce){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return j=j.get(F)||null,b(R,j,""+K,ce);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case S:return j=j.get(K.key===null?F:K.key)||null,T(R,j,K,ce);case C:return j=j.get(K.key===null?F:K.key)||null,q(R,j,K,ce);case U:return K=Za(K),X(j,R,F,K,ce)}if(ae(K)||W(K))return j=j.get(F)||null,Q(R,j,K,ce,null);if(typeof K.then=="function")return X(j,R,F,fr(K),ce);if(K.$$typeof===E)return X(j,R,F,rr(R,K),ce);dr(R,K)}return null}function re(j,R,F,K){for(var ce=null,Te=null,se=R,pe=R=0,_e=null;se!==null&&pe<F.length;pe++){se.index>pe?(_e=se,se=null):_e=se.sibling;var Ce=V(j,se,F[pe],K);if(Ce===null){se===null&&(se=_e);break}e&&se&&Ce.alternate===null&&t(j,se),R=d(Ce,R,pe),Te===null?ce=Ce:Te.sibling=Ce,Te=Ce,se=_e}if(pe===F.length)return n(j,se),Se&&Ln(j,pe),ce;if(se===null){for(;pe<F.length;pe++)se=I(j,F[pe],K),se!==null&&(R=d(se,R,pe),Te===null?ce=se:Te.sibling=se,Te=se);return Se&&Ln(j,pe),ce}for(se=i(se);pe<F.length;pe++)_e=X(se,j,pe,F[pe],K),_e!==null&&(e&&_e.alternate!==null&&se.delete(_e.key===null?pe:_e.key),R=d(_e,R,pe),Te===null?ce=_e:Te.sibling=_e,Te=_e);return e&&se.forEach(function(Ca){return t(j,Ca)}),Se&&Ln(j,pe),ce}function ue(j,R,F,K){if(F==null)throw Error(l(151));for(var ce=null,Te=null,se=R,pe=R=0,_e=null,Ce=F.next();se!==null&&!Ce.done;pe++,Ce=F.next()){se.index>pe?(_e=se,se=null):_e=se.sibling;var Ca=V(j,se,Ce.value,K);if(Ca===null){se===null&&(se=_e);break}e&&se&&Ca.alternate===null&&t(j,se),R=d(Ca,R,pe),Te===null?ce=Ca:Te.sibling=Ca,Te=Ca,se=_e}if(Ce.done)return n(j,se),Se&&Ln(j,pe),ce;if(se===null){for(;!Ce.done;pe++,Ce=F.next())Ce=I(j,Ce.value,K),Ce!==null&&(R=d(Ce,R,pe),Te===null?ce=Ce:Te.sibling=Ce,Te=Ce);return Se&&Ln(j,pe),ce}for(se=i(se);!Ce.done;pe++,Ce=F.next())Ce=X(se,j,pe,Ce.value,K),Ce!==null&&(e&&Ce.alternate!==null&&se.delete(Ce.key===null?pe:Ce.key),R=d(Ce,R,pe),Te===null?ce=Ce:Te.sibling=Ce,Te=Ce);return e&&se.forEach(function(t2){return t(j,t2)}),Se&&Ln(j,pe),ce}function De(j,R,F,K){if(typeof F=="object"&&F!==null&&F.type===_&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case S:e:{for(var ce=F.key;R!==null;){if(R.key===ce){if(ce=F.type,ce===_){if(R.tag===7){n(j,R.sibling),K=u(R,F.props.children),K.return=j,j=K;break e}}else if(R.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===U&&Za(ce)===R.type){n(j,R.sibling),K=u(R,F.props),qi(K,F),K.return=j,j=K;break e}n(j,R);break}else t(j,R);R=R.sibling}F.type===_?(K=Va(F.props.children,j.mode,K,F.key),K.return=j,j=K):(K=lr(F.type,F.key,F.props,null,j.mode,K),qi(K,F),K.return=j,j=K)}return x(j);case C:e:{for(ce=F.key;R!==null;){if(R.key===ce)if(R.tag===4&&R.stateNode.containerInfo===F.containerInfo&&R.stateNode.implementation===F.implementation){n(j,R.sibling),K=u(R,F.children||[]),K.return=j,j=K;break e}else{n(j,R);break}else t(j,R);R=R.sibling}K=cc(F,j.mode,K),K.return=j,j=K}return x(j);case U:return F=Za(F),De(j,R,F,K)}if(ae(F))return re(j,R,F,K);if(W(F)){if(ce=W(F),typeof ce!="function")throw Error(l(150));return F=ce.call(F),ue(j,R,F,K)}if(typeof F.then=="function")return De(j,R,fr(F),K);if(F.$$typeof===E)return De(j,R,rr(j,F),K);dr(j,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,R!==null&&R.tag===6?(n(j,R.sibling),K=u(R,F),K.return=j,j=K):(n(j,R),K=sc(F,j.mode,K),K.return=j,j=K),x(j)):n(j,R)}return function(j,R,F,K){try{Hi=0;var ce=De(j,R,F,K);return Ul=null,ce}catch(se){if(se===Ll||se===cr)throw se;var Te=Ft(29,se,null,j.mode);return Te.lanes=K,Te.return=j,Te}finally{}}}var Ia=R0(!0),z0=R0(!1),sa=!1;function _c(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ua(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ne&2)!==0){var u=i.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),i.pending=t,t=ar(e),d0(e,null,n),t}return nr(e,i,t,n),ar(e)}function Gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,bd(e,n)}}function wc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var u=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var x={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,n=n.next}while(n!==null);d===null?u=d=t:d=d.next=t}else u=d=t;n={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Tc=!1;function Vi(){if(Tc){var e=Ol;if(e!==null)throw e}}function Yi(e,t,n,i){Tc=!1;var u=e.updateQueue;sa=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var T=b,q=T.next;T.next=null,x===null?d=q:x.next=q,x=T;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,b=Q.lastBaseUpdate,b!==x&&(b===null?Q.firstBaseUpdate=q:b.next=q,Q.lastBaseUpdate=T))}if(d!==null){var I=u.baseState;x=0,Q=q=T=null,b=d;do{var V=b.lane&-536870913,X=V!==b.lane;if(X?(be&V)===V:(i&V)===V){V!==0&&V===Ml&&(Tc=!0),Q!==null&&(Q=Q.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var re=e,ue=b;V=t;var De=n;switch(ue.tag){case 1:if(re=ue.payload,typeof re=="function"){I=re.call(De,I,V);break e}I=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ue.payload,V=typeof re=="function"?re.call(De,I,V):re,V==null)break e;I=y({},I,V);break e;case 2:sa=!0}}V=b.callback,V!==null&&(e.flags|=64,X&&(e.flags|=8192),X=u.callbacks,X===null?u.callbacks=[V]:X.push(V))}else X={lane:V,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Q===null?(q=Q=X,T=I):Q=Q.next=X,x|=V;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;X=b,b=X.next,X.next=null,u.lastBaseUpdate=X,u.shared.pending=null}}while(!0);Q===null&&(T=I),u.baseState=T,u.firstBaseUpdate=q,u.lastBaseUpdate=Q,d===null&&(u.shared.lanes=0),pa|=x,e.lanes=x,e.memoizedState=I}}function E0(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function j0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)E0(n[e],t)}var Bl=N(null),hr=N(0);function D0(e,t){e=Pn,te(hr,e),te(Bl,t),Pn=e|t.baseLanes}function Cc(){te(hr,Pn),te(Bl,Bl.current)}function Nc(){Pn=hr.current,P(Bl),P(hr)}var Ht=N(null),on=null;function fa(e){var t=e.alternate;te(Ie,Ie.current&1),te(Ht,e),on===null&&(t===null||Bl.current!==null||t.memoizedState!==null)&&(on=e)}function Ac(e){te(Ie,Ie.current),te(Ht,e),on===null&&(on=e)}function M0(e){e.tag===22?(te(Ie,Ie.current),te(Ht,e),on===null&&(on=e)):da()}function da(){te(Ie,Ie.current),te(Ht,Ht.current)}function qt(e){P(Ht),on===e&&(on=null),P(Ie)}var Ie=N(0);function mr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Mu(n)||Ou(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kn=0,he=null,Ee=null,et=null,pr=!1,kl=!1,Ja=!1,vr=0,Xi=0,Fl=null,Xg=0;function Qe(){throw Error(l(321))}function Rc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function zc(e,t,n,i,u,d){return kn=d,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?vh:Yc,Ja=!1,d=n(i,u),Ja=!1,kl&&(d=L0(t,n,i,u)),O0(e),d}function O0(e){k.H=Zi;var t=Ee!==null&&Ee.next!==null;if(kn=0,et=Ee=he=null,pr=!1,Xi=0,Fl=null,t)throw Error(l(300));e===null||tt||(e=e.dependencies,e!==null&&or(e)&&(tt=!0))}function L0(e,t,n,i){he=e;var u=0;do{if(kl&&(Fl=null),Xi=0,kl=!1,25<=u)throw Error(l(301));if(u+=1,et=Ee=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}k.H=gh,d=t(n,i)}while(kl);return d}function Pg(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?Pi(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(he.flags|=1024),t}function Ec(){var e=vr!==0;return vr=0,e}function jc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Dc(e){if(pr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}pr=!1}kn=0,et=Ee=he=null,kl=!1,Xi=vr=0,Fl=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?he.memoizedState=et=e:et=et.next=e,et}function Je(){if(Ee===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=et===null?he.memoizedState:et.next;if(t!==null)et=t,Ee=e;else{if(e===null)throw he.alternate===null?Error(l(467)):Error(l(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},et===null?he.memoizedState=et=e:et=et.next=e}return et}function gr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pi(e){var t=Xi;return Xi+=1,Fl===null&&(Fl=[]),e=C0(Fl,e,t),t=he,(et===null?t.memoizedState:et.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?vh:Yc),e}function xr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pi(e);if(e.$$typeof===E)return ft(e)}throw Error(l(438,String(e)))}function Mc(e){var t=null,n=he.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=he.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=gr(),he.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=B;return t.index++,n}function Fn(e,t){return typeof t=="function"?t(e):t}function yr(e){var t=Je();return Oc(t,Ee,e)}function Oc(e,t,n){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=n;var u=e.baseQueue,d=i.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}t.baseQueue=u=d,i.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{t=u.next;var b=x=null,T=null,q=t,Q=!1;do{var I=q.lane&-536870913;if(I!==q.lane?(be&I)===I:(kn&I)===I){var V=q.revertLane;if(V===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),I===Ml&&(Q=!0);else if((kn&V)===V){q=q.next,V===Ml&&(Q=!0);continue}else I={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},T===null?(b=T=I,x=d):T=T.next=I,he.lanes|=V,pa|=V;I=q.action,Ja&&n(d,I),d=q.hasEagerState?q.eagerState:n(d,I)}else V={lane:I,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},T===null?(b=T=V,x=d):T=T.next=V,he.lanes|=I,pa|=I;q=q.next}while(q!==null&&q!==t);if(T===null?x=d:T.next=b,!kt(d,e.memoizedState)&&(tt=!0,Q&&(n=Ol,n!==null)))throw n;e.memoizedState=d,e.baseState=x,e.baseQueue=T,i.lastRenderedState=d}return u===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Lc(e){var t=Je(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,u=n.pending,d=t.memoizedState;if(u!==null){n.pending=null;var x=u=u.next;do d=e(d,x.action),x=x.next;while(x!==u);kt(d,t.memoizedState)||(tt=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,i]}function U0(e,t,n){var i=he,u=Je(),d=Se;if(d){if(n===void 0)throw Error(l(407));n=n()}else n=t();var x=!kt((Ee||u).memoizedState,n);if(x&&(u.memoizedState=n,tt=!0),u=u.queue,kc(F0.bind(null,i,u,e),[e]),u.getSnapshot!==t||x||et!==null&&et.memoizedState.tag&1){if(i.flags|=2048,Hl(9,{destroy:void 0},k0.bind(null,i,u,n,t),null),Oe===null)throw Error(l(349));d||(kn&127)!==0||B0(i,t,n)}return n}function B0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t=gr(),he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function k0(e,t,n,i){t.value=n,t.getSnapshot=i,H0(t)&&q0(e)}function F0(e,t,n){return n(function(){H0(t)&&q0(e)})}function H0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function q0(e){var t=Ga(e,2);t!==null&&zt(t,e,2)}function Uc(e){var t=bt();if(typeof e=="function"){var n=e;if(e=n(),Ja){ta(!0);try{n()}finally{ta(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:e},t}function G0(e,t,n,i){return e.baseState=n,Oc(e,Ee,typeof i=="function"?i:Fn)}function Qg(e,t,n,i,u){if(Sr(e))throw Error(l(485));if(e=t.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};k.T!==null?n(!0):d.isTransition=!1,i(d),n=t.pending,n===null?(d.next=t.pending=d,V0(t,d)):(d.next=n.next,t.pending=n.next=d)}}function V0(e,t){var n=t.action,i=t.payload,u=e.state;if(t.isTransition){var d=k.T,x={};k.T=x;try{var b=n(u,i),T=k.S;T!==null&&T(x,b),Y0(e,t,b)}catch(q){Bc(e,t,q)}finally{d!==null&&x.types!==null&&(d.types=x.types),k.T=d}}else try{d=n(u,i),Y0(e,t,d)}catch(q){Bc(e,t,q)}}function Y0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){X0(e,t,i)},function(i){return Bc(e,t,i)}):X0(e,t,n)}function X0(e,t,n){t.status="fulfilled",t.value=n,P0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,V0(e,n)))}function Bc(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,P0(t),t=t.next;while(t!==i)}e.action=null}function P0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Q0(e,t){return t}function Z0(e,t){if(Se){var n=Oe.formState;if(n!==null){e:{var i=he;if(Se){if(Fe){t:{for(var u=Fe,d=ln;u.nodeType!==8;){if(!d){u=null;break t}if(u=rn(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Fe=rn(u.nextSibling),i=u.data==="F!";break e}}oa(i)}i=!1}i&&(t=n[0])}}return n=bt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Q0,lastRenderedState:t},n.queue=i,n=hh.bind(null,he,i),i.dispatch=n,i=Uc(!1),d=Vc.bind(null,he,!1,i.queue),i=bt(),u={state:t,dispatch:null,action:e,pending:null},i.queue=u,n=Qg.bind(null,he,u,d,n),u.dispatch=n,i.memoizedState=e,[t,n,!1]}function K0(e){var t=Je();return I0(t,Ee,e)}function I0(e,t,n){if(t=Oc(e,t,Q0)[0],e=yr(Fn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Pi(t)}catch(x){throw x===Ll?cr:x}else i=t;t=Je();var u=t.queue,d=u.dispatch;return n!==t.memoizedState&&(he.flags|=2048,Hl(9,{destroy:void 0},Zg.bind(null,u,n),null)),[i,d,e]}function Zg(e,t){e.action=t}function J0(e){var t=Je(),n=Ee;if(n!==null)return I0(t,n,e);Je(),t=t.memoizedState,n=Je();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Hl(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=he.updateQueue,t===null&&(t=gr(),he.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function W0(){return Je().memoizedState}function br(e,t,n,i){var u=bt();he.flags|=e,u.memoizedState=Hl(1|t,{destroy:void 0},n,i===void 0?null:i)}function _r(e,t,n,i){var u=Je();i=i===void 0?null:i;var d=u.memoizedState.inst;Ee!==null&&i!==null&&Rc(i,Ee.memoizedState.deps)?u.memoizedState=Hl(t,d,n,i):(he.flags|=e,u.memoizedState=Hl(1|t,d,n,i))}function $0(e,t){br(8390656,8,e,t)}function kc(e,t){_r(2048,8,e,t)}function Kg(e){he.flags|=4;var t=he.updateQueue;if(t===null)t=gr(),he.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function eh(e){var t=Je().memoizedState;return Kg({ref:t,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function th(e,t){return _r(4,2,e,t)}function nh(e,t){return _r(4,4,e,t)}function ah(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lh(e,t,n){n=n!=null?n.concat([e]):null,_r(4,4,ah.bind(null,t,e),n)}function Fc(){}function ih(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Rc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function oh(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Rc(t,i[1]))return i[0];if(i=e(),Ja){ta(!0);try{e()}finally{ta(!1)}}return n.memoizedState=[i,t],i}function Hc(e,t,n){return n===void 0||(kn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=rm(),he.lanes|=e,pa|=e,n)}function rh(e,t,n,i){return kt(n,t)?n:Bl.current!==null?(e=Hc(e,n,i),kt(e,t)||(tt=!0),e):(kn&42)===0||(kn&1073741824)!==0&&(be&261930)===0?(tt=!0,e.memoizedState=n):(e=rm(),he.lanes|=e,pa|=e,t)}function sh(e,t,n,i,u){var d=J.p;J.p=d!==0&&8>d?d:8;var x=k.T,b={};k.T=b,Vc(e,!1,t,n);try{var T=u(),q=k.S;if(q!==null&&q(b,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var Q=Yg(T,i);Qi(e,t,Q,Yt(e))}else Qi(e,t,i,Yt(e))}catch(I){Qi(e,t,{then:function(){},status:"rejected",reason:I},Yt())}finally{J.p=d,x!==null&&b.types!==null&&(x.types=b.types),k.T=x}}function Ig(){}function qc(e,t,n,i){if(e.tag!==5)throw Error(l(476));var u=ch(e).queue;sh(e,u,t,ie,n===null?Ig:function(){return uh(e),n(i)})}function ch(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uh(e){var t=ch(e);t.next===null&&(t=e.alternate.memoizedState),Qi(e,t.next.queue,{},Yt())}function Gc(){return ft(uo)}function fh(){return Je().memoizedState}function dh(){return Je().memoizedState}function Jg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Yt();e=ca(n);var i=ua(t,e,n);i!==null&&(zt(i,t,n),Gi(i,t,n)),t={cache:gc()},e.payload=t;return}t=t.return}}function Wg(e,t,n){var i=Yt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Sr(e)?mh(t,n):(n=oc(e,t,n,i),n!==null&&(zt(n,e,i),ph(n,t,i)))}function hh(e,t,n){var i=Yt();Qi(e,t,n,i)}function Qi(e,t,n,i){var u={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sr(e))mh(t,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var x=t.lastRenderedState,b=d(x,n);if(u.hasEagerState=!0,u.eagerState=b,kt(b,x))return nr(e,t,u,0),Oe===null&&tr(),!1}catch{}finally{}if(n=oc(e,t,u,i),n!==null)return zt(n,e,i),ph(n,t,i),!0}return!1}function Vc(e,t,n,i){if(i={lane:2,revertLane:_u(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Sr(e)){if(t)throw Error(l(479))}else t=oc(e,n,i,2),t!==null&&zt(t,e,2)}function Sr(e){var t=e.alternate;return e===he||t!==null&&t===he}function mh(e,t){kl=pr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ph(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,bd(e,n)}}var Zi={readContext:ft,use:xr,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};Zi.useEffectEvent=Qe;var vh={readContext:ft,use:xr,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:$0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,br(4194308,4,ah.bind(null,t,e),n)},useLayoutEffect:function(e,t){return br(4194308,4,e,t)},useInsertionEffect:function(e,t){br(4,2,e,t)},useMemo:function(e,t){var n=bt();t=t===void 0?null:t;var i=e();if(Ja){ta(!0);try{e()}finally{ta(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=bt();if(n!==void 0){var u=n(t);if(Ja){ta(!0);try{n(t)}finally{ta(!1)}}}else u=t;return i.memoizedState=i.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},i.queue=e,e=e.dispatch=Wg.bind(null,he,e),[i.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Uc(e);var t=e.queue,n=hh.bind(null,he,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Fc,useDeferredValue:function(e,t){var n=bt();return Hc(n,e,t)},useTransition:function(){var e=Uc(!1);return e=sh.bind(null,he,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=he,u=bt();if(Se){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Oe===null)throw Error(l(349));(be&127)!==0||B0(i,t,n)}u.memoizedState=n;var d={value:n,getSnapshot:t};return u.queue=d,$0(F0.bind(null,i,d,e),[e]),i.flags|=2048,Hl(9,{destroy:void 0},k0.bind(null,i,d,n,t),null),n},useId:function(){var e=bt(),t=Oe.identifierPrefix;if(Se){var n=_n,i=bn;n=(i&~(1<<32-Bt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=vr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Xg++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Gc,useFormState:Z0,useActionState:Z0,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vc.bind(null,he,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mc,useCacheRefresh:function(){return bt().memoizedState=Jg.bind(null,he)},useEffectEvent:function(e){var t=bt(),n={impl:e};return t.memoizedState=n,function(){if((Ne&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},Yc={readContext:ft,use:xr,useCallback:ih,useContext:ft,useEffect:kc,useImperativeHandle:lh,useInsertionEffect:th,useLayoutEffect:nh,useMemo:oh,useReducer:yr,useRef:W0,useState:function(){return yr(Fn)},useDebugValue:Fc,useDeferredValue:function(e,t){var n=Je();return rh(n,Ee.memoizedState,e,t)},useTransition:function(){var e=yr(Fn)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Pi(e),t]},useSyncExternalStore:U0,useId:fh,useHostTransitionStatus:Gc,useFormState:K0,useActionState:K0,useOptimistic:function(e,t){var n=Je();return G0(n,Ee,e,t)},useMemoCache:Mc,useCacheRefresh:dh};Yc.useEffectEvent=eh;var gh={readContext:ft,use:xr,useCallback:ih,useContext:ft,useEffect:kc,useImperativeHandle:lh,useInsertionEffect:th,useLayoutEffect:nh,useMemo:oh,useReducer:Lc,useRef:W0,useState:function(){return Lc(Fn)},useDebugValue:Fc,useDeferredValue:function(e,t){var n=Je();return Ee===null?Hc(n,e,t):rh(n,Ee.memoizedState,e,t)},useTransition:function(){var e=Lc(Fn)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Pi(e),t]},useSyncExternalStore:U0,useId:fh,useHostTransitionStatus:Gc,useFormState:J0,useActionState:J0,useOptimistic:function(e,t){var n=Je();return Ee!==null?G0(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Mc,useCacheRefresh:dh};gh.useEffectEvent=eh;function Xc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pc={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Yt(),u=ca(i);u.payload=t,n!=null&&(u.callback=n),t=ua(e,u,i),t!==null&&(zt(t,e,i),Gi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Yt(),u=ca(i);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=ua(e,u,i),t!==null&&(zt(t,e,i),Gi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yt(),i=ca(n);i.tag=2,t!=null&&(i.callback=t),t=ua(e,i,n),t!==null&&(zt(t,e,n),Gi(t,e,n))}};function xh(e,t,n,i,u,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,d,x):t.prototype&&t.prototype.isPureReactComponent?!Oi(n,i)||!Oi(u,d):!0}function yh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Pc.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n}function bh(e){er(e)}function _h(e){console.error(e)}function Sh(e){er(e)}function wr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function wh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qc(e,t,n){return n=ca(n),n.tag=3,n.payload={element:null},n.callback=function(){wr(e,t)},n}function Th(e){return e=ca(e),e.tag=3,e}function Ch(e,t,n,i){var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;e.payload=function(){return u(d)},e.callback=function(){wh(t,n,i)}}var x=n.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){wh(t,n,i),typeof u!="function"&&(va===null?va=new Set([this]):va.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function $g(e,t,n,i,u){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Dl(t,n,u,!0),n=Ht.current,n!==null){switch(n.tag){case 31:case 13:return on===null?Lr():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=u,i===ur?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),xu(e,i,u)),!1;case 22:return n.flags|=65536,i===ur?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),xu(e,i,u)),!1}throw Error(l(435,n.tag))}return xu(e,i,u),Lr(),!1}if(Se)return t=Ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,i!==dc&&(e=Error(l(422),{cause:i}),Bi(tn(e,n)))):(i!==dc&&(t=Error(l(423),{cause:i}),Bi(tn(t,n))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,i=tn(i,n),u=Qc(e.stateNode,i,u),wc(e,u),Ze!==4&&(Ze=2)),!1;var d=Error(l(520),{cause:i});if(d=tn(d,n),no===null?no=[d]:no.push(d),Ze!==4&&(Ze=2),t===null)return!0;i=tn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=u&-u,n.lanes|=e,e=Qc(n.stateNode,i,e),wc(n,e),!1;case 1:if(t=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(va===null||!va.has(d))))return n.flags|=65536,u&=-u,n.lanes|=u,u=Th(u),Ch(u,e,n,i),wc(n,u),!1}n=n.return}while(n!==null);return!1}var Zc=Error(l(461)),tt=!1;function dt(e,t,n,i){t.child=e===null?z0(t,null,n,i):Ia(t,e.child,n,i)}function Nh(e,t,n,i,u){n=n.render;var d=t.ref;if("ref"in i){var x={};for(var b in i)b!=="ref"&&(x[b]=i[b])}else x=i;return Pa(t),i=zc(e,t,n,x,d,u),b=Ec(),e!==null&&!tt?(jc(e,t,u),Hn(e,t,u)):(Se&&b&&uc(t),t.flags|=1,dt(e,t,i,u),t.child)}function Ah(e,t,n,i,u){if(e===null){var d=n.type;return typeof d=="function"&&!rc(d)&&d.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=d,Rh(e,t,d,i,u)):(e=lr(n.type,null,i,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!nu(e,u)){var x=d.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(x,i)&&e.ref===t.ref)return Hn(e,t,u)}return t.flags|=1,e=On(d,i),e.ref=t.ref,e.return=t,t.child=e}function Rh(e,t,n,i,u){if(e!==null){var d=e.memoizedProps;if(Oi(d,i)&&e.ref===t.ref)if(tt=!1,t.pendingProps=i=d,nu(e,u))(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Hn(e,t,u)}return Kc(e,t,n,i,u)}function zh(e,t,n,i){var u=i.children,d=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(d=d!==null?d.baseLanes|n:n,e!==null){for(i=t.child=e.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;i=u&~d}else i=0,t.child=null;return Eh(e,t,d,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&sr(t,d!==null?d.cachePool:null),d!==null?D0(t,d):Cc(),M0(t);else return i=t.lanes=536870912,Eh(e,t,d!==null?d.baseLanes|n:n,n,i)}else d!==null?(sr(t,d.cachePool),D0(t,d),da(),t.memoizedState=null):(e!==null&&sr(t,null),Cc(),da());return dt(e,t,u,n),t.child}function Ki(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Eh(e,t,n,i,u){var d=yc();return d=d===null?null:{parent:$e._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&sr(t,null),Cc(),M0(t),e!==null&&Dl(e,t,i,!0),t.childLanes=u,null}function Tr(e,t){return t=Nr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function jh(e,t,n){return Ia(t,e.child,null,n),e=Tr(t,t.pendingProps),e.flags|=2,qt(t),t.memoizedState=null,e}function ex(e,t,n){var i=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(i.mode==="hidden")return e=Tr(t,i),t.lanes=536870912,Ki(null,e);if(Ac(t),(e=Fe)?(e=Vm(e,ln),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:la!==null?{id:bn,overflow:_n}:null,retryLane:536870912,hydrationErrors:null},n=m0(e),n.return=t,t.child=n,ut=t,Fe=null)):e=null,e===null)throw oa(t);return t.lanes=536870912,null}return Tr(t,i)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(Ac(t),u)if(t.flags&256)t.flags&=-257,t=jh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(tt||Dl(e,t,n,!1),u=(n&e.childLanes)!==0,tt||u){if(i=Oe,i!==null&&(x=_d(i,n),x!==0&&x!==d.retryLane))throw d.retryLane=x,Ga(e,x),zt(i,e,x),Zc;Lr(),t=jh(e,t,n)}else e=d.treeContext,Fe=rn(x.nextSibling),ut=t,Se=!0,ia=null,ln=!1,e!==null&&g0(t,e),t=Tr(t,i),t.flags|=4096;return t}return e=On(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Cr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Kc(e,t,n,i,u){return Pa(t),n=zc(e,t,n,i,void 0,u),i=Ec(),e!==null&&!tt?(jc(e,t,u),Hn(e,t,u)):(Se&&i&&uc(t),t.flags|=1,dt(e,t,n,u),t.child)}function Dh(e,t,n,i,u,d){return Pa(t),t.updateQueue=null,n=L0(t,i,n,u),O0(e),i=Ec(),e!==null&&!tt?(jc(e,t,d),Hn(e,t,d)):(Se&&i&&uc(t),t.flags|=1,dt(e,t,n,d),t.child)}function Mh(e,t,n,i,u){if(Pa(t),t.stateNode===null){var d=Rl,x=n.contextType;typeof x=="object"&&x!==null&&(d=ft(x)),d=new n(i,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Pc,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=i,d.state=t.memoizedState,d.refs={},_c(t),x=n.contextType,d.context=typeof x=="object"&&x!==null?ft(x):Rl,d.state=t.memoizedState,x=n.getDerivedStateFromProps,typeof x=="function"&&(Xc(t,n,x,i),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Pc.enqueueReplaceState(d,d.state,null),Yi(t,i,d,u),Vi(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){d=t.stateNode;var b=t.memoizedProps,T=Wa(n,b);d.props=T;var q=d.context,Q=n.contextType;x=Rl,typeof Q=="object"&&Q!==null&&(x=ft(Q));var I=n.getDerivedStateFromProps;Q=typeof I=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,Q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||q!==x)&&yh(t,d,i,x),sa=!1;var V=t.memoizedState;d.state=V,Yi(t,i,d,u),Vi(),q=t.memoizedState,b||V!==q||sa?(typeof I=="function"&&(Xc(t,n,I,i),q=t.memoizedState),(T=sa||xh(t,n,T,i,V,q,x))?(Q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=q),d.props=i,d.state=q,d.context=x,i=T):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{d=t.stateNode,Sc(e,t),x=t.memoizedProps,Q=Wa(n,x),d.props=Q,I=t.pendingProps,V=d.context,q=n.contextType,T=Rl,typeof q=="object"&&q!==null&&(T=ft(q)),b=n.getDerivedStateFromProps,(q=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==I||V!==T)&&yh(t,d,i,T),sa=!1,V=t.memoizedState,d.state=V,Yi(t,i,d,u),Vi();var X=t.memoizedState;x!==I||V!==X||sa||e!==null&&e.dependencies!==null&&or(e.dependencies)?(typeof b=="function"&&(Xc(t,n,b,i),X=t.memoizedState),(Q=sa||xh(t,n,Q,i,V,X,T)||e!==null&&e.dependencies!==null&&or(e.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,X,T),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,X,T)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=X),d.props=i,d.state=X,d.context=T,i=Q):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),i=!1)}return d=i,Cr(e,t),i=(t.flags&128)!==0,d||i?(d=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&i?(t.child=Ia(t,e.child,null,u),t.child=Ia(t,null,n,u)):dt(e,t,n,u),t.memoizedState=d.state,e=t.child):e=Hn(e,t,u),e}function Oh(e,t,n,i){return Ya(),t.flags|=256,dt(e,t,n,i),t.child}var Ic={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jc(e){return{baseLanes:e,cachePool:w0()}}function Wc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vt),e}function Lh(e,t,n){var i=t.pendingProps,u=!1,d=(t.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),x&&(u=!0,t.flags&=-129),x=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(u?fa(t):da(),(e=Fe)?(e=Vm(e,ln),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:la!==null?{id:bn,overflow:_n}:null,retryLane:536870912,hydrationErrors:null},n=m0(e),n.return=t,t.child=n,ut=t,Fe=null)):e=null,e===null)throw oa(t);return Ou(e)?t.lanes=32:t.lanes=536870912,null}var b=i.children;return i=i.fallback,u?(da(),u=t.mode,b=Nr({mode:"hidden",children:b},u),i=Va(i,u,n,null),b.return=t,i.return=t,b.sibling=i,t.child=b,i=t.child,i.memoizedState=Jc(n),i.childLanes=Wc(e,x,n),t.memoizedState=Ic,Ki(null,i)):(fa(t),$c(t,b))}var T=e.memoizedState;if(T!==null&&(b=T.dehydrated,b!==null)){if(d)t.flags&256?(fa(t),t.flags&=-257,t=eu(e,t,n)):t.memoizedState!==null?(da(),t.child=e.child,t.flags|=128,t=null):(da(),b=i.fallback,u=t.mode,i=Nr({mode:"visible",children:i.children},u),b=Va(b,u,n,null),b.flags|=2,i.return=t,b.return=t,i.sibling=b,t.child=i,Ia(t,e.child,null,n),i=t.child,i.memoizedState=Jc(n),i.childLanes=Wc(e,x,n),t.memoizedState=Ic,t=Ki(null,i));else if(fa(t),Ou(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var q=x.dgst;x=q,i=Error(l(419)),i.stack="",i.digest=x,Bi({value:i,source:null,stack:null}),t=eu(e,t,n)}else if(tt||Dl(e,t,n,!1),x=(n&e.childLanes)!==0,tt||x){if(x=Oe,x!==null&&(i=_d(x,n),i!==0&&i!==T.retryLane))throw T.retryLane=i,Ga(e,i),zt(x,e,i),Zc;Mu(b)||Lr(),t=eu(e,t,n)}else Mu(b)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Fe=rn(b.nextSibling),ut=t,Se=!0,ia=null,ln=!1,e!==null&&g0(t,e),t=$c(t,i.children),t.flags|=4096);return t}return u?(da(),b=i.fallback,u=t.mode,T=e.child,q=T.sibling,i=On(T,{mode:"hidden",children:i.children}),i.subtreeFlags=T.subtreeFlags&65011712,q!==null?b=On(q,b):(b=Va(b,u,n,null),b.flags|=2),b.return=t,i.return=t,i.sibling=b,t.child=i,Ki(null,i),i=t.child,b=e.child.memoizedState,b===null?b=Jc(n):(u=b.cachePool,u!==null?(T=$e._currentValue,u=u.parent!==T?{parent:T,pool:T}:u):u=w0(),b={baseLanes:b.baseLanes|n,cachePool:u}),i.memoizedState=b,i.childLanes=Wc(e,x,n),t.memoizedState=Ic,Ki(e.child,i)):(fa(t),n=e.child,e=n.sibling,n=On(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(x=t.deletions,x===null?(t.deletions=[e],t.flags|=16):x.push(e)),t.child=n,t.memoizedState=null,n)}function $c(e,t){return t=Nr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Nr(e,t){return e=Ft(22,e,null,t),e.lanes=0,e}function eu(e,t,n){return Ia(t,e.child,null,n),e=$c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uh(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),pc(e.return,t,n)}function tu(e,t,n,i,u,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:u,treeForkCount:d}:(x.isBackwards=t,x.rendering=null,x.renderingStartTime=0,x.last=i,x.tail=n,x.tailMode=u,x.treeForkCount=d)}function Bh(e,t,n){var i=t.pendingProps,u=i.revealOrder,d=i.tail;i=i.children;var x=Ie.current,b=(x&2)!==0;if(b?(x=x&1|2,t.flags|=128):x&=1,te(Ie,x),dt(e,t,i,n),i=Se?Ui:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uh(e,n,t);else if(e.tag===19)Uh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(n=t.child,u=null;n!==null;)e=n.alternate,e!==null&&mr(e)===null&&(u=n),n=n.sibling;n=u,n===null?(u=t.child,t.child=null):(u=n.sibling,n.sibling=null),tu(t,!1,u,n,d,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&mr(e)===null){t.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}tu(t,!0,n,null,d,i);break;case"together":tu(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Dl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=On(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=On(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&or(e)))}function tx(e,t,n){switch(t.tag){case 3:Ae(t,t.stateNode.containerInfo),ra(t,$e,e.memoizedState.cache),Ya();break;case 27:case 5:st(t);break;case 4:Ae(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ac(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(fa(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Lh(e,t,n):(fa(t),e=Hn(e,t,n),e!==null?e.sibling:null);fa(t);break;case 19:var u=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Dl(e,t,n,!1),i=(n&t.childLanes)!==0),u){if(i)return Bh(e,t,n);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),te(Ie,Ie.current),i)break;return null;case 22:return t.lanes=0,zh(e,t,n,t.pendingProps);case 24:ra(t,$e,e.memoizedState.cache)}return Hn(e,t,n)}function kh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tt=!0;else{if(!nu(e,n)&&(t.flags&128)===0)return tt=!1,tx(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,Se&&(t.flags&1048576)!==0&&v0(t,Ui,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Za(t.elementType),t.type=e,typeof e=="function")rc(e)?(i=Wa(e,i),t.tag=1,t=Mh(null,t,e,i,n)):(t.tag=0,t=Kc(null,t,e,i,n));else{if(e!=null){var u=e.$$typeof;if(u===G){t.tag=11,t=Nh(null,t,e,i,n);break e}else if(u===M){t.tag=14,t=Ah(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(l(306,t,""))}}return t;case 0:return Kc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,u=Wa(i,t.pendingProps),Mh(e,t,i,u,n);case 3:e:{if(Ae(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var d=t.memoizedState;u=d.element,Sc(e,t),Yi(t,i,null,n);var x=t.memoizedState;if(i=x.cache,ra(t,$e,i),i!==d.cache&&vc(t,[$e],n,!0),Vi(),i=x.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:x.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=Oh(e,t,i,n);break e}else if(i!==u){u=tn(Error(l(424)),t),Bi(u),t=Oh(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Fe=rn(e.firstChild),ut=t,Se=!0,ia=null,ln=!0,n=z0(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ya(),i===u){t=Hn(e,t,n);break e}dt(e,t,i,n)}t=t.child}return t;case 26:return Cr(e,t),e===null?(n=Km(t.type,null,t.pendingProps,null))?t.memoizedState=n:Se||(n=t.type,e=t.pendingProps,i=Gr(oe.current).createElement(n),i[ct]=t,i[wt]=e,ht(i,n,e),it(i),t.stateNode=i):t.memoizedState=Km(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return st(t),e===null&&Se&&(i=t.stateNode=Pm(t.type,t.pendingProps,oe.current),ut=t,ln=!0,u=Fe,ba(t.type)?(Lu=u,Fe=rn(i.firstChild)):Fe=u),dt(e,t,t.pendingProps.children,n),Cr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((u=i=Fe)&&(i=jx(i,t.type,t.pendingProps,ln),i!==null?(t.stateNode=i,ut=t,Fe=rn(i.firstChild),ln=!1,u=!0):u=!1),u||oa(t)),st(t),u=t.type,d=t.pendingProps,x=e!==null?e.memoizedProps:null,i=d.children,Eu(u,d)?i=null:x!==null&&Eu(u,x)&&(t.flags|=32),t.memoizedState!==null&&(u=zc(e,t,Pg,null,null,n),uo._currentValue=u),Cr(e,t),dt(e,t,i,n),t.child;case 6:return e===null&&Se&&((e=n=Fe)&&(n=Dx(n,t.pendingProps,ln),n!==null?(t.stateNode=n,ut=t,Fe=null,e=!0):e=!1),e||oa(t)),null;case 13:return Lh(e,t,n);case 4:return Ae(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ia(t,null,i,n):dt(e,t,i,n),t.child;case 11:return Nh(e,t,t.type,t.pendingProps,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ra(t,t.type,i.value),dt(e,t,i.children,n),t.child;case 9:return u=t.type._context,i=t.pendingProps.children,Pa(t),u=ft(u),i=i(u),t.flags|=1,dt(e,t,i,n),t.child;case 14:return Ah(e,t,t.type,t.pendingProps,n);case 15:return Rh(e,t,t.type,t.pendingProps,n);case 19:return Bh(e,t,n);case 31:return ex(e,t,n);case 22:return zh(e,t,n,t.pendingProps);case 24:return Pa(t),i=ft($e),e===null?(u=yc(),u===null&&(u=Oe,d=gc(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=n),u=d),t.memoizedState={parent:i,cache:u},_c(t),ra(t,$e,u)):((e.lanes&n)!==0&&(Sc(e,t),Yi(t,null,null,n),Vi()),u=e.memoizedState,d=t.memoizedState,u.parent!==i?(u={parent:i,cache:i},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),ra(t,$e,i)):(i=d.cache,ra(t,$e,i),i!==u.cache&&vc(t,[$e],n,!0))),dt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function qn(e){e.flags|=4}function au(e,t,n,i,u){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(fm())e.flags|=8192;else throw Ka=ur,bc}else e.flags&=-16777217}function Fh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ep(t))if(fm())e.flags|=8192;else throw Ka=ur,bc}function Ar(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?xd():536870912,e.lanes|=t,Yl|=t)}function Ii(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var u=e.child;u!==null;)n|=u.lanes|u.childLanes,i|=u.subtreeFlags&65011712,i|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)n|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function nx(e,t,n){var i=t.pendingProps;switch(fc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Bn($e),Me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(jl(t)?qn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,hc())),He(t),null;case 26:var u=t.type,d=t.memoizedState;return e===null?(qn(t),d!==null?(He(t),Fh(t,d)):(He(t),au(t,u,null,i,n))):d?d!==e.memoizedState?(qn(t),He(t),Fh(t,d)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&qn(t),He(t),au(t,u,e,i,n)),null;case 27:if(vt(t),n=oe.current,u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&qn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return He(t),null}e=ee.current,jl(t)?x0(t):(e=Pm(u,i,n),t.stateNode=e,qn(t))}return He(t),null;case 5:if(vt(t),u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&qn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return He(t),null}if(d=ee.current,jl(t))x0(t);else{var x=Gr(oe.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof i.is=="string"?x.createElement("select",{is:i.is}):x.createElement("select"),i.multiple?d.multiple=!0:i.size&&(d.size=i.size);break;default:d=typeof i.is=="string"?x.createElement(u,{is:i.is}):x.createElement(u)}}d[ct]=t,d[wt]=i;e:for(x=t.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===t)break e;for(;x.sibling===null;){if(x.return===null||x.return===t)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}t.stateNode=d;e:switch(ht(d,u,i),u){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&qn(t)}}return He(t),au(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&qn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=oe.current,jl(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,u=ut,u!==null)switch(u.tag){case 27:case 5:i=u.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Lm(e.nodeValue,n)),e||oa(t,!0)}else e=Gr(e).createTextNode(i),e[ct]=t,t.stateNode=e}return He(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=jl(t),n!==null){if(e===null){if(!i)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[ct]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else n=hc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(qt(t),t):(qt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return He(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=jl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[ct]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),u=!1}else u=hc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(qt(t),t):(qt(t),null)}return qt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,u=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(u=i.alternate.memoizedState.cachePool.pool),d=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(d=i.memoizedState.cachePool.pool),d!==u&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ar(t,t.updateQueue),He(t),null);case 4:return Me(),e===null&&Cu(t.stateNode.containerInfo),He(t),null;case 10:return Bn(t.type),He(t),null;case 19:if(P(Ie),i=t.memoizedState,i===null)return He(t),null;if(u=(t.flags&128)!==0,d=i.rendering,d===null)if(u)Ii(i,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=mr(e),d!==null){for(t.flags|=128,Ii(i,!1),e=d.updateQueue,t.updateQueue=e,Ar(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)h0(n,e),n=n.sibling;return te(Ie,Ie.current&1|2),Se&&Ln(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Lt()>Dr&&(t.flags|=128,u=!0,Ii(i,!1),t.lanes=4194304)}else{if(!u)if(e=mr(d),e!==null){if(t.flags|=128,u=!0,e=e.updateQueue,t.updateQueue=e,Ar(t,e),Ii(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!Se)return He(t),null}else 2*Lt()-i.renderingStartTime>Dr&&n!==536870912&&(t.flags|=128,u=!0,Ii(i,!1),t.lanes=4194304);i.isBackwards?(d.sibling=t.child,t.child=d):(e=i.last,e!==null?e.sibling=d:t.child=d,i.last=d)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Lt(),e.sibling=null,n=Ie.current,te(Ie,u?n&1|2:n&1),Se&&Ln(t,i.treeForkCount),e):(He(t),null);case 22:case 23:return qt(t),Nc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&Ar(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&P(Qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bn($e),He(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function ax(e,t){switch(fc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn($e),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return vt(t),null;case 31:if(t.memoizedState!==null){if(qt(t),t.alternate===null)throw Error(l(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Ie),null;case 4:return Me(),null;case 10:return Bn(t.type),null;case 22:case 23:return qt(t),Nc(),e!==null&&P(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bn($e),null;case 25:return null;default:return null}}function Hh(e,t){switch(fc(t),t.tag){case 3:Bn($e),Me();break;case 26:case 27:case 5:vt(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&qt(t);break;case 13:qt(t);break;case 19:P(Ie);break;case 10:Bn(t.type);break;case 22:case 23:qt(t),Nc(),e!==null&&P(Qa);break;case 24:Bn($e)}}function Ji(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var u=i.next;n=u;do{if((n.tag&e)===e){i=void 0;var d=n.create,x=n.inst;i=d(),x.destroy=i}n=n.next}while(n!==u)}}catch(b){ze(t,t.return,b)}}function ha(e,t,n){try{var i=t.updateQueue,u=i!==null?i.lastEffect:null;if(u!==null){var d=u.next;i=d;do{if((i.tag&e)===e){var x=i.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,u=t;var T=n,q=b;try{q()}catch(Q){ze(u,T,Q)}}}i=i.next}while(i!==d)}}catch(Q){ze(t,t.return,Q)}}function qh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{j0(t,n)}catch(i){ze(e,e.return,i)}}}function Gh(e,t,n){n.props=Wa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ze(e,t,i)}}function Wi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(u){ze(e,t,u)}}function Sn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(u){ze(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(u){ze(e,t,u)}else n.current=null}function Vh(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(u){ze(e,e.return,u)}}function lu(e,t,n){try{var i=e.stateNode;Cx(i,e.type,n,t),i[wt]=t}catch(u){ze(e,e.return,u)}}function Yh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ou(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Dn));else if(i!==4&&(i===27&&ba(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ou(e,t,n),e=e.sibling;e!==null;)ou(e,t,n),e=e.sibling}function Rr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ba(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Rr(e,t,n),e=e.sibling;e!==null;)Rr(e,t,n),e=e.sibling}function Xh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);ht(t,i,n),t[ct]=e,t[wt]=n}catch(d){ze(e,e.return,d)}}var Gn=!1,nt=!1,ru=!1,Ph=typeof WeakSet=="function"?WeakSet:Set,ot=null;function lx(e,t){if(e=e.containerInfo,Ru=Kr,e=l0(e),ec(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var u=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var x=0,b=-1,T=-1,q=0,Q=0,I=e,V=null;t:for(;;){for(var X;I!==n||u!==0&&I.nodeType!==3||(b=x+u),I!==d||i!==0&&I.nodeType!==3||(T=x+i),I.nodeType===3&&(x+=I.nodeValue.length),(X=I.firstChild)!==null;)V=I,I=X;for(;;){if(I===e)break t;if(V===n&&++q===u&&(b=x),V===d&&++Q===i&&(T=x),(X=I.nextSibling)!==null)break;I=V,V=I.parentNode}I=X}n=b===-1||T===-1?null:{start:b,end:T}}else n=null}n=n||{start:0,end:0}}else n=null;for(zu={focusedElem:e,selectionRange:n},Kr=!1,ot=t;ot!==null;)if(t=ot,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ot=e;else for(;ot!==null;){switch(t=ot,d=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)u=e[n],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,n=t,u=d.memoizedProps,d=d.memoizedState,i=n.stateNode;try{var re=Wa(n.type,u);e=i.getSnapshotBeforeUpdate(re,d),i.__reactInternalSnapshotBeforeUpdate=e}catch(ue){ze(n,n.return,ue)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Du(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Du(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,ot=e;break}ot=t.return}}function Qh(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Yn(e,n),i&4&&Ji(5,n);break;case 1:if(Yn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(x){ze(n,n.return,x)}else{var u=Wa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(x){ze(n,n.return,x)}}i&64&&qh(n),i&512&&Wi(n,n.return);break;case 3:if(Yn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{j0(e,t)}catch(x){ze(n,n.return,x)}}break;case 27:t===null&&i&4&&Xh(n);case 26:case 5:Yn(e,n),t===null&&i&4&&Vh(n),i&512&&Wi(n,n.return);break;case 12:Yn(e,n);break;case 31:Yn(e,n),i&4&&Ih(e,n);break;case 13:Yn(e,n),i&4&&Jh(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=hx.bind(null,n),Mx(e,n))));break;case 22:if(i=n.memoizedState!==null||Gn,!i){t=t!==null&&t.memoizedState!==null||nt,u=Gn;var d=nt;Gn=i,(nt=t)&&!d?Xn(e,n,(n.subtreeFlags&8772)!==0):Yn(e,n),Gn=u,nt=d}break;case 30:break;default:Yn(e,n)}}function Zh(e){var t=e.alternate;t!==null&&(e.alternate=null,Zh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,Ct=!1;function Vn(e,t,n){for(n=n.child;n!==null;)Kh(e,t,n),n=n.sibling}function Kh(e,t,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Si,n)}catch{}switch(n.tag){case 26:nt||Sn(n,t),Vn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nt||Sn(n,t);var i=Ge,u=Ct;ba(n.type)&&(Ge=n.stateNode,Ct=!1),Vn(e,t,n),ro(n.stateNode),Ge=i,Ct=u;break;case 5:nt||Sn(n,t);case 6:if(i=Ge,u=Ct,Ge=null,Vn(e,t,n),Ge=i,Ct=u,Ge!==null)if(Ct)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(n.stateNode)}catch(d){ze(n,t,d)}else try{Ge.removeChild(n.stateNode)}catch(d){ze(n,t,d)}break;case 18:Ge!==null&&(Ct?(e=Ge,qm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Wl(e)):qm(Ge,n.stateNode));break;case 4:i=Ge,u=Ct,Ge=n.stateNode.containerInfo,Ct=!0,Vn(e,t,n),Ge=i,Ct=u;break;case 0:case 11:case 14:case 15:ha(2,n,t),nt||ha(4,n,t),Vn(e,t,n);break;case 1:nt||(Sn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Gh(n,t,i)),Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:nt=(i=nt)||n.memoizedState!==null,Vn(e,t,n),nt=i;break;default:Vn(e,t,n)}}function Ih(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wl(e)}catch(n){ze(t,t.return,n)}}}function Jh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wl(e)}catch(n){ze(t,t.return,n)}}function ix(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ph),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ph),t;default:throw Error(l(435,e.tag))}}function zr(e,t){var n=ix(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var u=mx.bind(null,e,i);i.then(u,u)}})}function Nt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var u=n[i],d=e,x=t,b=x;e:for(;b!==null;){switch(b.tag){case 27:if(ba(b.type)){Ge=b.stateNode,Ct=!1;break e}break;case 5:Ge=b.stateNode,Ct=!1;break e;case 3:case 4:Ge=b.stateNode.containerInfo,Ct=!0;break e}b=b.return}if(Ge===null)throw Error(l(160));Kh(d,x,u),Ge=null,Ct=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Wh(t,e),t=t.sibling}var mn=null;function Wh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nt(t,e),At(e),i&4&&(ha(3,e,e.return),Ji(3,e),ha(5,e,e.return));break;case 1:Nt(t,e),At(e),i&512&&(nt||n===null||Sn(n,n.return)),i&64&&Gn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var u=mn;if(Nt(t,e),At(e),i&512&&(nt||n===null||Sn(n,n.return)),i&4){var d=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,u=u.ownerDocument||u;t:switch(i){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ci]||d[ct]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(i),u.head.insertBefore(d,u.querySelector("head > title"))),ht(d,i,n),d[ct]=e,it(d),i=d;break e;case"link":var x=Wm("link","href",u).get(i+(n.href||""));if(x){for(var b=0;b<x.length;b++)if(d=x[b],d.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&d.getAttribute("rel")===(n.rel==null?null:n.rel)&&d.getAttribute("title")===(n.title==null?null:n.title)&&d.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){x.splice(b,1);break t}}d=u.createElement(i),ht(d,i,n),u.head.appendChild(d);break;case"meta":if(x=Wm("meta","content",u).get(i+(n.content||""))){for(b=0;b<x.length;b++)if(d=x[b],d.getAttribute("content")===(n.content==null?null:""+n.content)&&d.getAttribute("name")===(n.name==null?null:n.name)&&d.getAttribute("property")===(n.property==null?null:n.property)&&d.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&d.getAttribute("charset")===(n.charSet==null?null:n.charSet)){x.splice(b,1);break t}}d=u.createElement(i),ht(d,i,n),u.head.appendChild(d);break;default:throw Error(l(468,i))}d[ct]=e,it(d),i=d}e.stateNode=i}else $m(u,e.type,e.stateNode);else e.stateNode=Jm(u,i,e.memoizedProps);else d!==i?(d===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):d.count--,i===null?$m(u,e.type,e.stateNode):Jm(u,i,e.memoizedProps)):i===null&&e.stateNode!==null&&lu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Nt(t,e),At(e),i&512&&(nt||n===null||Sn(n,n.return)),n!==null&&i&4&&lu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Nt(t,e),At(e),i&512&&(nt||n===null||Sn(n,n.return)),e.flags&32){u=e.stateNode;try{_l(u,"")}catch(re){ze(e,e.return,re)}}i&4&&e.stateNode!=null&&(u=e.memoizedProps,lu(e,u,n!==null?n.memoizedProps:u)),i&1024&&(ru=!0);break;case 6:if(Nt(t,e),At(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(re){ze(e,e.return,re)}}break;case 3:if(Xr=null,u=mn,mn=Vr(t.containerInfo),Nt(t,e),mn=u,At(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wl(t.containerInfo)}catch(re){ze(e,e.return,re)}ru&&(ru=!1,$h(e));break;case 4:i=mn,mn=Vr(e.stateNode.containerInfo),Nt(t,e),At(e),mn=i;break;case 12:Nt(t,e),At(e);break;case 31:Nt(t,e),At(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,zr(e,i)));break;case 13:Nt(t,e),At(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(jr=Lt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,zr(e,i)));break;case 22:u=e.memoizedState!==null;var T=n!==null&&n.memoizedState!==null,q=Gn,Q=nt;if(Gn=q||u,nt=Q||T,Nt(t,e),nt=Q,Gn=q,At(e),i&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(n===null||T||Gn||nt||$a(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){T=n=t;try{if(d=T.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=T.stateNode;var I=T.memoizedProps.style,V=I!=null&&I.hasOwnProperty("display")?I.display:null;b.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(re){ze(T,T.return,re)}}}else if(t.tag===6){if(n===null){T=t;try{T.stateNode.nodeValue=u?"":T.memoizedProps}catch(re){ze(T,T.return,re)}}}else if(t.tag===18){if(n===null){T=t;try{var X=T.stateNode;u?Gm(X,!0):Gm(T.stateNode,!1)}catch(re){ze(T,T.return,re)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,zr(e,n))));break;case 19:Nt(t,e),At(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,zr(e,i)));break;case 30:break;case 21:break;default:Nt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Yh(i)){n=i;break}i=i.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var u=n.stateNode,d=iu(e);Rr(e,d,u);break;case 5:var x=n.stateNode;n.flags&32&&(_l(x,""),n.flags&=-33);var b=iu(e);Rr(e,b,x);break;case 3:case 4:var T=n.stateNode.containerInfo,q=iu(e);ou(e,q,T);break;default:throw Error(l(161))}}catch(Q){ze(e,e.return,Q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $h(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$h(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qh(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ha(4,t,t.return),$a(t);break;case 1:Sn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Gh(t,t.return,n),$a(t);break;case 27:ro(t.stateNode);case 26:case 5:Sn(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function Xn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,u=e,d=t,x=d.flags;switch(d.tag){case 0:case 11:case 15:Xn(u,d,n),Ji(4,d);break;case 1:if(Xn(u,d,n),i=d,u=i.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(q){ze(i,i.return,q)}if(i=d,u=i.updateQueue,u!==null){var b=i.stateNode;try{var T=u.shared.hiddenCallbacks;if(T!==null)for(u.shared.hiddenCallbacks=null,u=0;u<T.length;u++)E0(T[u],b)}catch(q){ze(i,i.return,q)}}n&&x&64&&qh(d),Wi(d,d.return);break;case 27:Xh(d);case 26:case 5:Xn(u,d,n),n&&i===null&&x&4&&Vh(d),Wi(d,d.return);break;case 12:Xn(u,d,n);break;case 31:Xn(u,d,n),n&&x&4&&Ih(u,d);break;case 13:Xn(u,d,n),n&&x&4&&Jh(u,d);break;case 22:d.memoizedState===null&&Xn(u,d,n),Wi(d,d.return);break;case 30:break;default:Xn(u,d,n)}t=t.sibling}}function su(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ki(n))}function cu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ki(e))}function pn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)em(e,t,n,i),t=t.sibling}function em(e,t,n,i){var u=t.flags;switch(t.tag){case 0:case 11:case 15:pn(e,t,n,i),u&2048&&Ji(9,t);break;case 1:pn(e,t,n,i);break;case 3:pn(e,t,n,i),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ki(e)));break;case 12:if(u&2048){pn(e,t,n,i),e=t.stateNode;try{var d=t.memoizedProps,x=d.id,b=d.onPostCommit;typeof b=="function"&&b(x,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){ze(t,t.return,T)}}else pn(e,t,n,i);break;case 31:pn(e,t,n,i);break;case 13:pn(e,t,n,i);break;case 23:break;case 22:d=t.stateNode,x=t.alternate,t.memoizedState!==null?d._visibility&2?pn(e,t,n,i):$i(e,t):d._visibility&2?pn(e,t,n,i):(d._visibility|=2,ql(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),u&2048&&su(x,t);break;case 24:pn(e,t,n,i),u&2048&&cu(t.alternate,t);break;default:pn(e,t,n,i)}}function ql(e,t,n,i,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var d=e,x=t,b=n,T=i,q=x.flags;switch(x.tag){case 0:case 11:case 15:ql(d,x,b,T,u),Ji(8,x);break;case 23:break;case 22:var Q=x.stateNode;x.memoizedState!==null?Q._visibility&2?ql(d,x,b,T,u):$i(d,x):(Q._visibility|=2,ql(d,x,b,T,u)),u&&q&2048&&su(x.alternate,x);break;case 24:ql(d,x,b,T,u),u&&q&2048&&cu(x.alternate,x);break;default:ql(d,x,b,T,u)}t=t.sibling}}function $i(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,u=i.flags;switch(i.tag){case 22:$i(n,i),u&2048&&su(i.alternate,i);break;case 24:$i(n,i),u&2048&&cu(i.alternate,i);break;default:$i(n,i)}t=t.sibling}}var eo=8192;function Gl(e,t,n){if(e.subtreeFlags&eo)for(e=e.child;e!==null;)tm(e,t,n),e=e.sibling}function tm(e,t,n){switch(e.tag){case 26:Gl(e,t,n),e.flags&eo&&e.memoizedState!==null&&Xx(n,mn,e.memoizedState,e.memoizedProps);break;case 5:Gl(e,t,n);break;case 3:case 4:var i=mn;mn=Vr(e.stateNode.containerInfo),Gl(e,t,n),mn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=eo,eo=16777216,Gl(e,t,n),eo=i):Gl(e,t,n));break;default:Gl(e,t,n)}}function nm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function to(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ot=i,lm(i,e)}nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)am(e),e=e.sibling}function am(e){switch(e.tag){case 0:case 11:case 15:to(e),e.flags&2048&&ha(9,e,e.return);break;case 3:to(e);break;case 12:to(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Er(e)):to(e);break;default:to(e)}}function Er(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ot=i,lm(i,e)}nm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ha(8,t,t.return),Er(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Er(t));break;default:Er(t)}e=e.sibling}}function lm(e,t){for(;ot!==null;){var n=ot;switch(n.tag){case 0:case 11:case 15:ha(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ki(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ot=i;else e:for(n=e;ot!==null;){i=ot;var u=i.sibling,d=i.return;if(Zh(i),i===n){ot=null;break e}if(u!==null){u.return=d,ot=u;break e}ot=d}}}var ox={getCacheForType:function(e){var t=ft($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ft($e).controller.signal}},rx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Oe=null,xe=null,be=0,Re=0,Gt=null,ma=!1,Vl=!1,uu=!1,Pn=0,Ze=0,pa=0,el=0,fu=0,Vt=0,Yl=0,no=null,Rt=null,du=!1,jr=0,im=0,Dr=1/0,Mr=null,va=null,lt=0,ga=null,Xl=null,Qn=0,hu=0,mu=null,om=null,ao=0,pu=null;function Yt(){return(Ne&2)!==0&&be!==0?be&-be:k.T!==null?_u():Sd()}function rm(){if(Vt===0)if((be&536870912)===0||Se){var e=qo;qo<<=1,(qo&3932160)===0&&(qo=262144),Vt=e}else Vt=536870912;return e=Ht.current,e!==null&&(e.flags|=32),Vt}function zt(e,t,n){(e===Oe&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(Pl(e,0),xa(e,be,Vt,!1)),Ti(e,n),((Ne&2)===0||e!==Oe)&&(e===Oe&&((Ne&2)===0&&(el|=n),Ze===4&&xa(e,be,Vt,!1)),wn(e))}function sm(e,t,n){if((Ne&6)!==0)throw Error(l(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||wi(e,t),u=i?ux(e,t):gu(e,t,!0),d=i;do{if(u===0){Vl&&!i&&xa(e,t,0,!1);break}else{if(n=e.current.alternate,d&&!sx(n)){u=gu(e,t,!1),d=!1;continue}if(u===2){if(d=t,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){t=x;e:{var b=e;u=no;var T=b.current.memoizedState.isDehydrated;if(T&&(Pl(b,x).flags|=256),x=gu(b,x,!1),x!==2){if(uu&&!T){b.errorRecoveryDisabledLanes|=d,el|=d,u=4;break e}d=Rt,Rt=u,d!==null&&(Rt===null?Rt=d:Rt.push.apply(Rt,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){Pl(e,0),xa(e,t,0,!0);break}e:{switch(i=e,d=u,d){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:xa(i,t,Vt,!ma);break e;case 2:Rt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(u=jr+300-Lt(),10<u)){if(xa(i,t,Vt,!ma),Vo(i,0,!0)!==0)break e;Qn=t,i.timeoutHandle=Fm(cm.bind(null,i,n,Rt,Mr,du,t,Vt,el,Yl,ma,d,"Throttled",-0,0),u);break e}cm(i,n,Rt,Mr,du,t,Vt,el,Yl,ma,d,null,-0,0)}}break}while(!0);wn(e)}function cm(e,t,n,i,u,d,x,b,T,q,Q,I,V,X){if(e.timeoutHandle=-1,I=t.subtreeFlags,I&8192||(I&16785408)===16785408){I={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Dn},tm(t,d,I);var re=(d&62914560)===d?jr-Lt():(d&4194048)===d?im-Lt():0;if(re=Px(I,re),re!==null){Qn=d,e.cancelPendingCommit=re(gm.bind(null,e,t,d,n,i,u,x,b,T,Q,I,null,V,X)),xa(e,d,x,!q);return}}gm(e,t,d,n,i,u,x,b,T)}function sx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var u=n[i],d=u.getSnapshot;u=u.value;try{if(!kt(d(),u))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xa(e,t,n,i){t&=~fu,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var u=t;0<u;){var d=31-Bt(u),x=1<<d;i[d]=-1,u&=~x}n!==0&&yd(e,n,t)}function Or(){return(Ne&6)===0?(lo(0),!1):!0}function vu(){if(xe!==null){if(Re===0)var e=xe.return;else e=xe,Un=Xa=null,Dc(e),Ul=null,Hi=0,e=xe;for(;e!==null;)Hh(e.alternate,e),e=e.return;xe=null}}function Pl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Rx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qn=0,vu(),Oe=e,xe=n=On(e.current,null),be=t,Re=0,Gt=null,ma=!1,Vl=wi(e,t),uu=!1,Yl=Vt=fu=el=pa=Ze=0,Rt=no=null,du=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var u=31-Bt(i),d=1<<u;t|=e[u],i&=~d}return Pn=t,tr(),n}function um(e,t){he=null,k.H=Zi,t===Ll||t===cr?(t=N0(),Re=3):t===bc?(t=N0(),Re=4):Re=t===Zc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,xe===null&&(Ze=1,wr(e,tn(t,e.current)))}function fm(){var e=Ht.current;return e===null?!0:(be&4194048)===be?on===null:(be&62914560)===be||(be&536870912)!==0?e===on:!1}function dm(){var e=k.H;return k.H=Zi,e===null?Zi:e}function hm(){var e=k.A;return k.A=ox,e}function Lr(){Ze=4,ma||(be&4194048)!==be&&Ht.current!==null||(Vl=!0),(pa&134217727)===0&&(el&134217727)===0||Oe===null||xa(Oe,be,Vt,!1)}function gu(e,t,n){var i=Ne;Ne|=2;var u=dm(),d=hm();(Oe!==e||be!==t)&&(Mr=null,Pl(e,t)),t=!1;var x=Ze;e:do try{if(Re!==0&&xe!==null){var b=xe,T=Gt;switch(Re){case 8:vu(),x=6;break e;case 3:case 2:case 9:case 6:Ht.current===null&&(t=!0);var q=Re;if(Re=0,Gt=null,Ql(e,b,T,q),n&&Vl){x=0;break e}break;default:q=Re,Re=0,Gt=null,Ql(e,b,T,q)}}cx(),x=Ze;break}catch(Q){um(e,Q)}while(!0);return t&&e.shellSuspendCounter++,Un=Xa=null,Ne=i,k.H=u,k.A=d,xe===null&&(Oe=null,be=0,tr()),x}function cx(){for(;xe!==null;)mm(xe)}function ux(e,t){var n=Ne;Ne|=2;var i=dm(),u=hm();Oe!==e||be!==t?(Mr=null,Dr=Lt()+500,Pl(e,t)):Vl=wi(e,t);e:do try{if(Re!==0&&xe!==null){t=xe;var d=Gt;t:switch(Re){case 1:Re=0,Gt=null,Ql(e,t,d,1);break;case 2:case 9:if(T0(d)){Re=0,Gt=null,pm(t);break}t=function(){Re!==2&&Re!==9||Oe!==e||(Re=7),wn(e)},d.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:T0(d)?(Re=0,Gt=null,pm(t)):(Re=0,Gt=null,Ql(e,t,d,7));break;case 5:var x=null;switch(xe.tag){case 26:x=xe.memoizedState;case 5:case 27:var b=xe;if(x?ep(x):b.stateNode.complete){Re=0,Gt=null;var T=b.sibling;if(T!==null)xe=T;else{var q=b.return;q!==null?(xe=q,Ur(q)):xe=null}break t}}Re=0,Gt=null,Ql(e,t,d,5);break;case 6:Re=0,Gt=null,Ql(e,t,d,6);break;case 8:vu(),Ze=6;break e;default:throw Error(l(462))}}fx();break}catch(Q){um(e,Q)}while(!0);return Un=Xa=null,k.H=i,k.A=u,Ne=n,xe!==null?0:(Oe=null,be=0,tr(),Ze)}function fx(){for(;xe!==null&&!me();)mm(xe)}function mm(e){var t=kh(e.alternate,e,Pn);e.memoizedProps=e.pendingProps,t===null?Ur(e):xe=t}function pm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Dh(n,t,t.pendingProps,t.type,void 0,be);break;case 11:t=Dh(n,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:Dc(t);default:Hh(n,t),t=xe=h0(t,Pn),t=kh(n,t,Pn)}e.memoizedProps=e.pendingProps,t===null?Ur(e):xe=t}function Ql(e,t,n,i){Un=Xa=null,Dc(t),Ul=null,Hi=0;var u=t.return;try{if($g(e,u,t,n,be)){Ze=1,wr(e,tn(n,e.current)),xe=null;return}}catch(d){if(u!==null)throw xe=u,d;Ze=1,wr(e,tn(n,e.current)),xe=null;return}t.flags&32768?(Se||i===1?e=!0:Vl||(be&536870912)!==0?e=!1:(ma=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ht.current,i!==null&&i.tag===13&&(i.flags|=16384))),vm(t,e)):Ur(t)}function Ur(e){var t=e;do{if((t.flags&32768)!==0){vm(t,ma);return}e=t.return;var n=nx(t.alternate,t,Pn);if(n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Ze===0&&(Ze=5)}function vm(e,t){do{var n=ax(e.alternate,e);if(n!==null){n.flags&=32767,xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=n}while(e!==null);Ze=6,xe=null}function gm(e,t,n,i,u,d,x,b,T){e.cancelPendingCommit=null;do Br();while(lt!==0);if((Ne&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(d=t.lanes|t.childLanes,d|=ic,Yv(e,n,d,x,b,T),e===Oe&&(xe=Oe=null,be=0),Xl=t,ga=e,Qn=n,hu=d,mu=u,om=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,px(Fo,function(){return Sm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=k.T,k.T=null,u=J.p,J.p=2,x=Ne,Ne|=4;try{lx(e,t,n)}finally{Ne=x,J.p=u,k.T=i}}lt=1,xm(),ym(),bm()}}function xm(){if(lt===1){lt=0;var e=ga,t=Xl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var i=J.p;J.p=2;var u=Ne;Ne|=4;try{Wh(t,e);var d=zu,x=l0(e.containerInfo),b=d.focusedElem,T=d.selectionRange;if(x!==b&&b&&b.ownerDocument&&a0(b.ownerDocument.documentElement,b)){if(T!==null&&ec(b)){var q=T.start,Q=T.end;if(Q===void 0&&(Q=q),"selectionStart"in b)b.selectionStart=q,b.selectionEnd=Math.min(Q,b.value.length);else{var I=b.ownerDocument||document,V=I&&I.defaultView||window;if(V.getSelection){var X=V.getSelection(),re=b.textContent.length,ue=Math.min(T.start,re),De=T.end===void 0?ue:Math.min(T.end,re);!X.extend&&ue>De&&(x=De,De=ue,ue=x);var j=n0(b,ue),R=n0(b,De);if(j&&R&&(X.rangeCount!==1||X.anchorNode!==j.node||X.anchorOffset!==j.offset||X.focusNode!==R.node||X.focusOffset!==R.offset)){var F=I.createRange();F.setStart(j.node,j.offset),X.removeAllRanges(),ue>De?(X.addRange(F),X.extend(R.node,R.offset)):(F.setEnd(R.node,R.offset),X.addRange(F))}}}}for(I=[],X=b;X=X.parentNode;)X.nodeType===1&&I.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<I.length;b++){var K=I[b];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Kr=!!Ru,zu=Ru=null}finally{Ne=u,J.p=i,k.T=n}}e.current=t,lt=2}}function ym(){if(lt===2){lt=0;var e=ga,t=Xl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var i=J.p;J.p=2;var u=Ne;Ne|=4;try{Qh(e,t.alternate,t)}finally{Ne=u,J.p=i,k.T=n}}lt=3}}function bm(){if(lt===4||lt===3){lt=0,ko();var e=ga,t=Xl,n=Qn,i=om;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?lt=5:(lt=0,Xl=ga=null,_m(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(va=null),Ls(n),t=t.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Si,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=k.T,u=J.p,J.p=2,k.T=null;try{for(var d=e.onRecoverableError,x=0;x<i.length;x++){var b=i[x];d(b.value,{componentStack:b.stack})}}finally{k.T=t,J.p=u}}(Qn&3)!==0&&Br(),wn(e),u=e.pendingLanes,(n&261930)!==0&&(u&42)!==0?e===pu?ao++:(ao=0,pu=e):ao=0,lo(0)}}function _m(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ki(t)))}function Br(){return xm(),ym(),bm(),Sm()}function Sm(){if(lt!==5)return!1;var e=ga,t=hu;hu=0;var n=Ls(Qn),i=k.T,u=J.p;try{J.p=32>n?32:n,k.T=null,n=mu,mu=null;var d=ga,x=Qn;if(lt=0,Xl=ga=null,Qn=0,(Ne&6)!==0)throw Error(l(331));var b=Ne;if(Ne|=4,am(d.current),em(d,d.current,x,n),Ne=b,lo(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Si,d)}catch{}return!0}finally{J.p=u,k.T=i,_m(e,t)}}function wm(e,t,n){t=tn(n,t),t=Qc(e.stateNode,t,2),e=ua(e,t,2),e!==null&&(Ti(e,2),wn(e))}function ze(e,t,n){if(e.tag===3)wm(e,e,n);else for(;t!==null;){if(t.tag===3){wm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(va===null||!va.has(i))){e=tn(n,e),n=Th(2),i=ua(t,n,2),i!==null&&(Ch(n,i,t,e),Ti(i,2),wn(i));break}}t=t.return}}function xu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new rx;var u=new Set;i.set(t,u)}else u=i.get(t),u===void 0&&(u=new Set,i.set(t,u));u.has(n)||(uu=!0,u.add(n),e=dx.bind(null,e,t,n),t.then(e,e))}function dx(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Oe===e&&(be&n)===n&&(Ze===4||Ze===3&&(be&62914560)===be&&300>Lt()-jr?(Ne&2)===0&&Pl(e,0):fu|=n,Yl===be&&(Yl=0)),wn(e)}function Tm(e,t){t===0&&(t=xd()),e=Ga(e,t),e!==null&&(Ti(e,t),wn(e))}function hx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tm(e,n)}function mx(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,u=e.memoizedState;u!==null&&(n=u.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),Tm(e,n)}function px(e,t){return _i(e,t)}var kr=null,Zl=null,yu=!1,Fr=!1,bu=!1,ya=0;function wn(e){e!==Zl&&e.next===null&&(Zl===null?kr=Zl=e:Zl=Zl.next=e),Fr=!0,yu||(yu=!0,gx())}function lo(e,t){if(!bu&&Fr){bu=!0;do for(var n=!1,i=kr;i!==null;){if(e!==0){var u=i.pendingLanes;if(u===0)var d=0;else{var x=i.suspendedLanes,b=i.pingedLanes;d=(1<<31-Bt(42|e)+1)-1,d&=u&~(x&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(n=!0,Rm(i,d))}else d=be,d=Vo(i,i===Oe?d:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(d&3)===0||wi(i,d)||(n=!0,Rm(i,d));i=i.next}while(n);bu=!1}}function vx(){Cm()}function Cm(){Fr=yu=!1;var e=0;ya!==0&&Ax()&&(e=ya);for(var t=Lt(),n=null,i=kr;i!==null;){var u=i.next,d=Nm(i,t);d===0?(i.next=null,n===null?kr=u:n.next=u,u===null&&(Zl=n)):(n=i,(e!==0||(d&3)!==0)&&(Fr=!0)),i=u}lt!==0&&lt!==5||lo(e),ya!==0&&(ya=0)}function Nm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-Bt(d),b=1<<x,T=u[x];T===-1?((b&n)===0||(b&i)!==0)&&(u[x]=Vv(b,t)):T<=t&&(e.expiredLanes|=b),d&=~b}if(t=Oe,n=be,n=Vo(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ua(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||wi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ua(i),Ls(n)){case 2:case 8:n=vd;break;case 32:n=Fo;break;case 268435456:n=gd;break;default:n=Fo}return i=Am.bind(null,e),n=_i(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ua(i),e.callbackPriority=2,e.callbackNode=null,2}function Am(e,t){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Br()&&e.callbackNode!==n)return null;var i=be;return i=Vo(e,e===Oe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(sm(e,i,t),Nm(e,Lt()),e.callbackNode!=null&&e.callbackNode===n?Am.bind(null,e):null)}function Rm(e,t){if(Br())return null;sm(e,t,!0)}function gx(){zx(function(){(Ne&6)!==0?_i(pd,vx):Cm()})}function _u(){if(ya===0){var e=Ml;e===0&&(e=Ho,Ho<<=1,(Ho&261888)===0&&(Ho=256)),ya=e}return ya}function zm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function Em(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function xx(e,t,n,i,u){if(t==="submit"&&n&&n.stateNode===u){var d=zm((u[wt]||null).action),x=i.submitter;x&&(t=(t=x[wt]||null)?zm(t.formAction):x.getAttribute("formAction"),t!==null&&(d=t,x=null));var b=new Jo("action","action",null,i,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ya!==0){var T=x?Em(u,x):new FormData(u);qc(n,{pending:!0,data:T,method:u.method,action:d},null,T)}}else typeof d=="function"&&(b.preventDefault(),T=x?Em(u,x):new FormData(u),qc(n,{pending:!0,data:T,method:u.method,action:d},d,T))},currentTarget:u}]})}}for(var Su=0;Su<lc.length;Su++){var wu=lc[Su],yx=wu.toLowerCase(),bx=wu[0].toUpperCase()+wu.slice(1);hn(yx,"on"+bx)}hn(r0,"onAnimationEnd"),hn(s0,"onAnimationIteration"),hn(c0,"onAnimationStart"),hn("dblclick","onDoubleClick"),hn("focusin","onFocus"),hn("focusout","onBlur"),hn(Ug,"onTransitionRun"),hn(Bg,"onTransitionStart"),hn(kg,"onTransitionCancel"),hn(u0,"onTransitionEnd"),yl("onMouseEnter",["mouseout","mouseover"]),yl("onMouseLeave",["mouseout","mouseover"]),yl("onPointerEnter",["pointerout","pointerover"]),yl("onPointerLeave",["pointerout","pointerover"]),ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_x=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function jm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],u=i.event;i=i.listeners;e:{var d=void 0;if(t)for(var x=i.length-1;0<=x;x--){var b=i[x],T=b.instance,q=b.currentTarget;if(b=b.listener,T!==d&&u.isPropagationStopped())break e;d=b,u.currentTarget=q;try{d(u)}catch(Q){er(Q)}u.currentTarget=null,d=T}else for(x=0;x<i.length;x++){if(b=i[x],T=b.instance,q=b.currentTarget,b=b.listener,T!==d&&u.isPropagationStopped())break e;d=b,u.currentTarget=q;try{d(u)}catch(Q){er(Q)}u.currentTarget=null,d=T}}}}function ye(e,t){var n=t[Us];n===void 0&&(n=t[Us]=new Set);var i=e+"__bubble";n.has(i)||(Dm(t,e,2,!1),n.add(i))}function Tu(e,t,n){var i=0;t&&(i|=4),Dm(n,e,i,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function Cu(e){if(!e[Hr]){e[Hr]=!0,Cd.forEach(function(n){n!=="selectionchange"&&(_x.has(n)||Tu(n,!1,e),Tu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,Tu("selectionchange",!1,t))}}function Dm(e,t,n,i){switch(rp(t)){case 2:var u=Kx;break;case 8:u=Ix;break;default:u=Hu}n=u.bind(null,t,n,e),u=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),i?u!==void 0?e.addEventListener(t,n,{capture:!0,passive:u}):e.addEventListener(t,n,!0):u!==void 0?e.addEventListener(t,n,{passive:u}):e.addEventListener(t,n,!1)}function Nu(e,t,n,i,u){var d=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var x=i.tag;if(x===3||x===4){var b=i.stateNode.containerInfo;if(b===u)break;if(x===4)for(x=i.return;x!==null;){var T=x.tag;if((T===3||T===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;b!==null;){if(x=vl(b),x===null)return;if(T=x.tag,T===5||T===6||T===26||T===27){i=d=x;continue e}b=b.parentNode}}i=i.return}Bd(function(){var q=d,Q=Vs(n),I=[];e:{var V=f0.get(e);if(V!==void 0){var X=Jo,re=e;switch(e){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":X=mg;break;case"focusin":re="focus",X=Ks;break;case"focusout":re="blur",X=Ks;break;case"beforeblur":case"afterblur":X=Ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=gg;break;case r0:case s0:case c0:X=ig;break;case u0:X=yg;break;case"scroll":case"scrollend":X=eg;break;case"wheel":X=_g;break;case"copy":case"cut":case"paste":X=rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Gd;break;case"toggle":case"beforetoggle":X=wg}var ue=(t&4)!==0,De=!ue&&(e==="scroll"||e==="scrollend"),j=ue?V!==null?V+"Capture":null:V;ue=[];for(var R=q,F;R!==null;){var K=R;if(F=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||F===null||j===null||(K=Ai(R,j),K!=null&&ue.push(oo(R,K,F))),De)break;R=R.return}0<ue.length&&(V=new X(V,re,null,n,Q),I.push({event:V,listeners:ue}))}}if((t&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",V&&n!==Gs&&(re=n.relatedTarget||n.fromElement)&&(vl(re)||re[pl]))break e;if((X||V)&&(V=Q.window===Q?Q:(V=Q.ownerDocument)?V.defaultView||V.parentWindow:window,X?(re=n.relatedTarget||n.toElement,X=q,re=re?vl(re):null,re!==null&&(De=f(re),ue=re.tag,re!==De||ue!==5&&ue!==27&&ue!==6)&&(re=null)):(X=null,re=q),X!==re)){if(ue=Hd,K="onMouseLeave",j="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(ue=Gd,K="onPointerLeave",j="onPointerEnter",R="pointer"),De=X==null?V:Ni(X),F=re==null?V:Ni(re),V=new ue(K,R+"leave",X,n,Q),V.target=De,V.relatedTarget=F,K=null,vl(Q)===q&&(ue=new ue(j,R+"enter",re,n,Q),ue.target=F,ue.relatedTarget=De,K=ue),De=K,X&&re)t:{for(ue=Sx,j=X,R=re,F=0,K=j;K;K=ue(K))F++;K=0;for(var ce=R;ce;ce=ue(ce))K++;for(;0<F-K;)j=ue(j),F--;for(;0<K-F;)R=ue(R),K--;for(;F--;){if(j===R||R!==null&&j===R.alternate){ue=j;break t}j=ue(j),R=ue(R)}ue=null}else ue=null;X!==null&&Mm(I,V,X,ue,!1),re!==null&&De!==null&&Mm(I,De,re,ue,!0)}}e:{if(V=q?Ni(q):window,X=V.nodeName&&V.nodeName.toLowerCase(),X==="select"||X==="input"&&V.type==="file")var Te=Id;else if(Zd(V))if(Jd)Te=Mg;else{Te=jg;var se=Eg}else X=V.nodeName,!X||X.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?q&&qs(q.elementType)&&(Te=Id):Te=Dg;if(Te&&(Te=Te(e,q))){Kd(I,Te,n,Q);break e}se&&se(e,V,q),e==="focusout"&&q&&V.type==="number"&&q.memoizedProps.value!=null&&Hs(V,"number",V.value)}switch(se=q?Ni(q):window,e){case"focusin":(Zd(se)||se.contentEditable==="true")&&(Cl=se,tc=q,Li=null);break;case"focusout":Li=tc=Cl=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,i0(I,n,Q);break;case"selectionchange":if(Lg)break;case"keydown":case"keyup":i0(I,n,Q)}var pe;if(Js)e:{switch(e){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Tl?Pd(e,n)&&(_e="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_e="onCompositionStart");_e&&(Vd&&n.locale!=="ko"&&(Tl||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Tl&&(pe=kd()):(aa=Q,Ps="value"in aa?aa.value:aa.textContent,Tl=!0)),se=qr(q,_e),0<se.length&&(_e=new qd(_e,e,null,n,Q),I.push({event:_e,listeners:se}),pe?_e.data=pe:(pe=Qd(n),pe!==null&&(_e.data=pe)))),(pe=Cg?Ng(e,n):Ag(e,n))&&(_e=qr(q,"onBeforeInput"),0<_e.length&&(se=new qd("onBeforeInput","beforeinput",null,n,Q),I.push({event:se,listeners:_e}),se.data=pe)),xx(I,e,q,n,Q)}jm(I,t)})}function oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",i=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ai(e,n),u!=null&&i.unshift(oo(e,u,d)),u=Ai(e,t),u!=null&&i.push(oo(e,u,d))),e.tag===3)return i;e=e.return}return[]}function Sx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mm(e,t,n,i,u){for(var d=t._reactName,x=[];n!==null&&n!==i;){var b=n,T=b.alternate,q=b.stateNode;if(b=b.tag,T!==null&&T===i)break;b!==5&&b!==26&&b!==27||q===null||(T=q,u?(q=Ai(n,d),q!=null&&x.unshift(oo(n,q,T))):u||(q=Ai(n,d),q!=null&&x.push(oo(n,q,T)))),n=n.return}x.length!==0&&e.push({event:t,listeners:x})}var wx=/\r\n?/g,Tx=/\u0000|\uFFFD/g;function Om(e){return(typeof e=="string"?e:""+e).replace(wx,`
`).replace(Tx,"")}function Lm(e,t){return t=Om(t),Om(e)===t}function je(e,t,n,i,u,d){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||_l(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&_l(e,""+i);break;case"className":Xo(e,"class",i);break;case"tabIndex":Xo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Xo(e,n,i);break;case"style":Ld(e,i,d);break;case"data":if(t!=="object"){Xo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Qo(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(t!=="input"&&je(e,t,"name",u.name,u,null),je(e,t,"formEncType",u.formEncType,u,null),je(e,t,"formMethod",u.formMethod,u,null),je(e,t,"formTarget",u.formTarget,u,null)):(je(e,t,"encType",u.encType,u,null),je(e,t,"method",u.method,u,null),je(e,t,"target",u.target,u,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Qo(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Dn);break;case"onScroll":i!=null&&ye("scroll",e);break;case"onScrollEnd":i!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Qo(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Yo(e,"popover",i);break;case"xlinkActuate":jn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":jn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":jn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":jn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":jn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":jn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":jn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":jn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":jn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Yo(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Wv.get(n)||n,Yo(e,n,i))}}function Au(e,t,n,i,u,d){switch(n){case"style":Ld(e,i,d);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof i=="string"?_l(e,i):(typeof i=="number"||typeof i=="bigint")&&_l(e,""+i);break;case"onScroll":i!=null&&ye("scroll",e);break;case"onScrollEnd":i!=null&&ye("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(u=n.endsWith("Capture"),t=n.slice(2,u?n.length-7:void 0),d=e[wt]||null,d=d!=null?d[n]:null,typeof d=="function"&&e.removeEventListener(t,d,u),typeof i=="function")){typeof d!="function"&&d!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,u);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Yo(e,n,i)}}}function ht(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var i=!1,u=!1,d;for(d in n)if(n.hasOwnProperty(d)){var x=n[d];if(x!=null)switch(d){case"src":i=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:je(e,t,d,x,n,null)}}u&&je(e,t,"srcSet",n.srcSet,n,null),i&&je(e,t,"src",n.src,n,null);return;case"input":ye("invalid",e);var b=d=x=u=null,T=null,q=null;for(i in n)if(n.hasOwnProperty(i)){var Q=n[i];if(Q!=null)switch(i){case"name":u=Q;break;case"type":x=Q;break;case"checked":T=Q;break;case"defaultChecked":q=Q;break;case"value":d=Q;break;case"defaultValue":b=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(l(137,t));break;default:je(e,t,i,Q,n,null)}}jd(e,d,b,T,q,x,u,!1);return;case"select":ye("invalid",e),i=x=d=null;for(u in n)if(n.hasOwnProperty(u)&&(b=n[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":x=b;break;case"multiple":i=b;default:je(e,t,u,b,n,null)}t=d,n=x,e.multiple=!!i,t!=null?bl(e,!!i,t,!1):n!=null&&bl(e,!!i,n,!0);return;case"textarea":ye("invalid",e),d=u=i=null;for(x in n)if(n.hasOwnProperty(x)&&(b=n[x],b!=null))switch(x){case"value":i=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(l(91));break;default:je(e,t,x,b,n,null)}Md(e,i,u,d);return;case"option":for(T in n)if(n.hasOwnProperty(T)&&(i=n[T],i!=null))switch(T){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:je(e,t,T,i,n,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(i=0;i<io.length;i++)ye(io[i],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in n)if(n.hasOwnProperty(q)&&(i=n[q],i!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:je(e,t,q,i,n,null)}return;default:if(qs(t)){for(Q in n)n.hasOwnProperty(Q)&&(i=n[Q],i!==void 0&&Au(e,t,Q,i,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null&&je(e,t,b,i,n,null))}function Cx(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,b=null,T=null,q=null,Q=null;for(X in n){var I=n[X];if(n.hasOwnProperty(X)&&I!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":T=I;default:i.hasOwnProperty(X)||je(e,t,X,null,i,I)}}for(var V in i){var X=i[V];if(I=n[V],i.hasOwnProperty(V)&&(X!=null||I!=null))switch(V){case"type":d=X;break;case"name":u=X;break;case"checked":q=X;break;case"defaultChecked":Q=X;break;case"value":x=X;break;case"defaultValue":b=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(l(137,t));break;default:X!==I&&je(e,t,V,X,i,I)}}Fs(e,x,b,T,q,Q,d,u);return;case"select":X=x=b=V=null;for(d in n)if(T=n[d],n.hasOwnProperty(d)&&T!=null)switch(d){case"value":break;case"multiple":X=T;default:i.hasOwnProperty(d)||je(e,t,d,null,i,T)}for(u in i)if(d=i[u],T=n[u],i.hasOwnProperty(u)&&(d!=null||T!=null))switch(u){case"value":V=d;break;case"defaultValue":b=d;break;case"multiple":x=d;default:d!==T&&je(e,t,u,d,i,T)}t=b,n=x,i=X,V!=null?bl(e,!!n,V,!1):!!i!=!!n&&(t!=null?bl(e,!!n,t,!0):bl(e,!!n,n?[]:"",!1));return;case"textarea":X=V=null;for(b in n)if(u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:je(e,t,b,null,i,u)}for(x in i)if(u=i[x],d=n[x],i.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":V=u;break;case"defaultValue":X=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(l(91));break;default:u!==d&&je(e,t,x,u,i,d)}Dd(e,V,X);return;case"option":for(var re in n)if(V=n[re],n.hasOwnProperty(re)&&V!=null&&!i.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:je(e,t,re,null,i,V)}for(T in i)if(V=i[T],X=n[T],i.hasOwnProperty(T)&&V!==X&&(V!=null||X!=null))switch(T){case"selected":e.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:je(e,t,T,V,i,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in n)V=n[ue],n.hasOwnProperty(ue)&&V!=null&&!i.hasOwnProperty(ue)&&je(e,t,ue,null,i,V);for(q in i)if(V=i[q],X=n[q],i.hasOwnProperty(q)&&V!==X&&(V!=null||X!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(l(137,t));break;default:je(e,t,q,V,i,X)}return;default:if(qs(t)){for(var De in n)V=n[De],n.hasOwnProperty(De)&&V!==void 0&&!i.hasOwnProperty(De)&&Au(e,t,De,void 0,i,V);for(Q in i)V=i[Q],X=n[Q],!i.hasOwnProperty(Q)||V===X||V===void 0&&X===void 0||Au(e,t,Q,V,i,X);return}}for(var j in n)V=n[j],n.hasOwnProperty(j)&&V!=null&&!i.hasOwnProperty(j)&&je(e,t,j,null,i,V);for(I in i)V=i[I],X=n[I],!i.hasOwnProperty(I)||V===X||V==null&&X==null||je(e,t,I,V,i,X)}function Um(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var u=n[i],d=u.transferSize,x=u.initiatorType,b=u.duration;if(d&&b&&Um(x)){for(x=0,b=u.responseEnd,i+=1;i<n.length;i++){var T=n[i],q=T.startTime;if(q>b)break;var Q=T.transferSize,I=T.initiatorType;Q&&Um(I)&&(T=T.responseEnd,x+=Q*(T<b?1:(b-q)/(T-q)))}if(--i,t+=8*(d+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ru=null,zu=null;function Gr(e){return e.nodeType===9?e:e.ownerDocument}function Bm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function km(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Eu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ju=null;function Ax(){var e=window.event;return e&&e.type==="popstate"?e===ju?!1:(ju=e,!0):(ju=null,!1)}var Fm=typeof setTimeout=="function"?setTimeout:void 0,Rx=typeof clearTimeout=="function"?clearTimeout:void 0,Hm=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hm<"u"?function(e){return Hm.resolve(null).then(e).catch(Ex)}:Fm;function Ex(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function qm(e,t){var n=t,i=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(u),Wl(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ro(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ro(n);for(var d=n.firstChild;d;){var x=d.nextSibling,b=d.nodeName;d[Ci]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=x}}else n==="body"&&ro(e.ownerDocument.body);n=u}while(n);Wl(t)}function Gm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Du(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Du(n),Bs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function jx(e,t,n,i){for(;e.nodeType===1;){var u=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ci])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=rn(e.nextSibling),e===null)break}return null}function Dx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rn(e.nextSibling),e===null))return null;return e}function Vm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=rn(e.nextSibling),e===null))return null;return e}function Mu(e){return e.data==="$?"||e.data==="$~"}function Ou(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mx(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Lu=null;function Ym(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return rn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Xm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Pm(e,t,n){switch(t=Gr(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function ro(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bs(e)}var sn=new Map,Qm=new Set;function Vr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zn=J.d;J.d={f:Ox,r:Lx,D:Ux,C:Bx,L:kx,m:Fx,X:qx,S:Hx,M:Gx};function Ox(){var e=Zn.f(),t=Or();return e||t}function Lx(e){var t=gl(e);t!==null&&t.tag===5&&t.type==="form"?uh(t):Zn.r(e)}var Kl=typeof document>"u"?null:document;function Zm(e,t,n){var i=Kl;if(i&&typeof t=="string"&&t){var u=$t(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof n=="string"&&(u+='[crossorigin="'+n+'"]'),Qm.has(u)||(Qm.add(u),e={rel:e,crossOrigin:n,href:t},i.querySelector(u)===null&&(t=i.createElement("link"),ht(t,"link",e),it(t),i.head.appendChild(t)))}}function Ux(e){Zn.D(e),Zm("dns-prefetch",e,null)}function Bx(e,t){Zn.C(e,t),Zm("preconnect",e,t)}function kx(e,t,n){Zn.L(e,t,n);var i=Kl;if(i&&e&&t){var u='link[rel="preload"][as="'+$t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(u+='[imagesrcset="'+$t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(u+='[imagesizes="'+$t(n.imageSizes)+'"]')):u+='[href="'+$t(e)+'"]';var d=u;switch(t){case"style":d=Il(e);break;case"script":d=Jl(e)}sn.has(d)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),sn.set(d,e),i.querySelector(u)!==null||t==="style"&&i.querySelector(so(d))||t==="script"&&i.querySelector(co(d))||(t=i.createElement("link"),ht(t,"link",e),it(t),i.head.appendChild(t)))}}function Fx(e,t){Zn.m(e,t);var n=Kl;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+$t(i)+'"][href="'+$t(e)+'"]',d=u;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Jl(e)}if(!sn.has(d)&&(e=y({rel:"modulepreload",href:e},t),sn.set(d,e),n.querySelector(u)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(co(d)))return}i=n.createElement("link"),ht(i,"link",e),it(i),n.head.appendChild(i)}}}function Hx(e,t,n){Zn.S(e,t,n);var i=Kl;if(i&&e){var u=xl(i).hoistableStyles,d=Il(e);t=t||"default";var x=u.get(d);if(!x){var b={loading:0,preload:null};if(x=i.querySelector(so(d)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=sn.get(d))&&Uu(e,n);var T=x=i.createElement("link");it(T),ht(T,"link",e),T._p=new Promise(function(q,Q){T.onload=q,T.onerror=Q}),T.addEventListener("load",function(){b.loading|=1}),T.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yr(x,t,i)}x={type:"stylesheet",instance:x,count:1,state:b},u.set(d,x)}}}function qx(e,t){Zn.X(e,t);var n=Kl;if(n&&e){var i=xl(n).hoistableScripts,u=Jl(e),d=i.get(u);d||(d=n.querySelector(co(u)),d||(e=y({src:e,async:!0},t),(t=sn.get(u))&&Bu(e,t),d=n.createElement("script"),it(d),ht(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(u,d))}}function Gx(e,t){Zn.M(e,t);var n=Kl;if(n&&e){var i=xl(n).hoistableScripts,u=Jl(e),d=i.get(u);d||(d=n.querySelector(co(u)),d||(e=y({src:e,async:!0,type:"module"},t),(t=sn.get(u))&&Bu(e,t),d=n.createElement("script"),it(d),ht(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(u,d))}}function Km(e,t,n,i){var u=(u=oe.current)?Vr(u):null;if(!u)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Il(n.href),n=xl(u).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Il(n.href);var d=xl(u).hoistableStyles,x=d.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=u.querySelector(so(e)))&&!d._p&&(x.instance=d,x.state.loading=5),sn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},sn.set(e,n),d||Vx(u,e,n,x.state))),t&&i===null)throw Error(l(528,""));return x}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Jl(n),n=xl(u).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Il(e){return'href="'+$t(e)+'"'}function so(e){return'link[rel="stylesheet"]['+e+"]"}function Im(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Vx(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ht(t,"link",n),it(t),e.head.appendChild(t))}function Jl(e){return'[src="'+$t(e)+'"]'}function co(e){return"script[async]"+e}function Jm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+$t(n.href)+'"]');if(i)return t.instance=i,it(i),i;var u=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),it(i),ht(i,"style",u),Yr(i,n.precedence,e),t.instance=i;case"stylesheet":u=Il(n.href);var d=e.querySelector(so(u));if(d)return t.state.loading|=4,t.instance=d,it(d),d;i=Im(n),(u=sn.get(u))&&Uu(i,u),d=(e.ownerDocument||e).createElement("link"),it(d);var x=d;return x._p=new Promise(function(b,T){x.onload=b,x.onerror=T}),ht(d,"link",i),t.state.loading|=4,Yr(d,n.precedence,e),t.instance=d;case"script":return d=Jl(n.src),(u=e.querySelector(co(d)))?(t.instance=u,it(u),u):(i=n,(u=sn.get(d))&&(i=y({},n),Bu(i,u)),e=e.ownerDocument||e,u=e.createElement("script"),it(u),ht(u,"link",i),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Yr(i,n.precedence,e));return t.instance}function Yr(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=i.length?i[i.length-1]:null,d=u,x=0;x<i.length;x++){var b=i[x];if(b.dataset.precedence===t)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xr=null;function Wm(e,t,n){if(Xr===null){var i=new Map,u=Xr=new Map;u.set(n,i)}else u=Xr,i=u.get(n),i||(i=new Map,u.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),u=0;u<n.length;u++){var d=n[u];if(!(d[Ci]||d[ct]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(t)||"";x=e+x;var b=i.get(x);b?b.push(d):i.set(x,[d])}}return i}function $m(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Yx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ep(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xx(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Il(i.href),d=t.querySelector(so(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Pr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=d,it(d);return}d=t.ownerDocument||t,i=Im(i),(u=sn.get(u))&&Uu(i,u),d=d.createElement("link"),it(d);var x=d;x._p=new Promise(function(b,T){x.onload=b,x.onerror=T}),ht(d,"link",i),n.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Pr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ku=0;function Px(e,t){return e.stylesheets&&e.count===0&&Zr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Zr(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+t);0<e.imgBytes&&ku===0&&(ku=62500*Nx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zr(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>ku?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(u)}}:null}function Pr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qr=null;function Zr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qr=new Map,t.forEach(Qx,e),Qr=null,Pr.call(e))}function Qx(e,t){if(!(t.state.loading&4)){var n=Qr.get(e);if(n)var i=n.get(null);else{n=new Map,Qr.set(e,n);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(n.set(x.dataset.precedence,x),i=x)}i&&n.set(null,i)}u=t.instance,x=u.getAttribute("data-precedence"),d=n.get(x)||i,d===i&&n.set(null,u),n.set(x,u),this.count++,i=Pr.bind(this),u.addEventListener("load",i),u.addEventListener("error",i),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var uo={$$typeof:E,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Zx(e,t,n,i,u,d,x,b,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ms(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ms(0),this.hiddenUpdates=Ms(null),this.identifierPrefix=i,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function tp(e,t,n,i,u,d,x,b,T,q,Q,I){return e=new Zx(e,t,n,x,T,q,Q,I,b),t=1,d===!0&&(t|=24),d=Ft(3,null,null,t),e.current=d,d.stateNode=e,t=gc(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:i,isDehydrated:n,cache:t},_c(d),e}function np(e){return e?(e=Rl,e):Rl}function ap(e,t,n,i,u,d){u=np(u),i.context===null?i.context=u:i.pendingContext=u,i=ca(t),i.payload={element:n},d=d===void 0?null:d,d!==null&&(i.callback=d),n=ua(e,i,t),n!==null&&(zt(n,e,t),Gi(n,e,t))}function lp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fu(e,t){lp(e,t),(e=e.alternate)&&lp(e,t)}function ip(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&zt(t,e,67108864),Fu(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=Yt();t=Os(t);var n=Ga(e,t);n!==null&&zt(n,e,t),Fu(e,t)}}var Kr=!0;function Kx(e,t,n,i){var u=k.T;k.T=null;var d=J.p;try{J.p=2,Hu(e,t,n,i)}finally{J.p=d,k.T=u}}function Ix(e,t,n,i){var u=k.T;k.T=null;var d=J.p;try{J.p=8,Hu(e,t,n,i)}finally{J.p=d,k.T=u}}function Hu(e,t,n,i){if(Kr){var u=qu(i);if(u===null)Nu(e,t,i,Ir,n),sp(e,i);else if(Wx(u,e,t,n,i))i.stopPropagation();else if(sp(e,i),t&4&&-1<Jx.indexOf(e)){for(;u!==null;){var d=gl(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Ba(d.pendingLanes);if(x!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var T=1<<31-Bt(x);b.entanglements[1]|=T,x&=~T}wn(d),(Ne&6)===0&&(Dr=Lt()+500,lo(0))}}break;case 31:case 13:b=Ga(d,2),b!==null&&zt(b,d,2),Or(),Fu(d,2)}if(d=qu(i),d===null&&Nu(e,t,i,Ir,n),d===u)break;u=d}u!==null&&i.stopPropagation()}else Nu(e,t,i,null,n)}}function qu(e){return e=Vs(e),Gu(e)}var Ir=null;function Gu(e){if(Ir=null,e=vl(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=r(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ir=e,null}function rp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Uv()){case pd:return 2;case vd:return 8;case Fo:case Bv:return 32;case gd:return 268435456;default:return 32}default:return 32}}var Vu=!1,_a=null,Sa=null,wa=null,fo=new Map,ho=new Map,Ta=[],Jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sp(e,t){switch(e){case"focusin":case"focusout":_a=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":fo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(t.pointerId)}}function mo(e,t,n,i,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:d,targetContainers:[u]},t!==null&&(t=gl(t),t!==null&&ip(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Wx(e,t,n,i,u){switch(t){case"focusin":return _a=mo(_a,e,t,n,i,u),!0;case"dragenter":return Sa=mo(Sa,e,t,n,i,u),!0;case"mouseover":return wa=mo(wa,e,t,n,i,u),!0;case"pointerover":var d=u.pointerId;return fo.set(d,mo(fo.get(d)||null,e,t,n,i,u)),!0;case"gotpointercapture":return d=u.pointerId,ho.set(d,mo(ho.get(d)||null,e,t,n,i,u)),!0}return!1}function cp(e){var t=vl(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=r(n),t!==null){e.blockedOn=t,wd(e.priority,function(){op(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,wd(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Gs=i,n.target.dispatchEvent(i),Gs=null}else return t=gl(n),t!==null&&ip(t),e.blockedOn=n,!1;t.shift()}return!0}function up(e,t,n){Jr(e)&&n.delete(t)}function $x(){Vu=!1,_a!==null&&Jr(_a)&&(_a=null),Sa!==null&&Jr(Sa)&&(Sa=null),wa!==null&&Jr(wa)&&(wa=null),fo.forEach(up),ho.forEach(up)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Vu||(Vu=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,$x)))}var $r=null;function fp(e){$r!==e&&($r=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){$r===e&&($r=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],u=e[t+2];if(typeof i!="function"){if(Gu(i||n)===null)continue;break}var d=gl(n);d!==null&&(e.splice(t,3),t-=3,qc(d,{pending:!0,data:u,method:n.method,action:i},i,u))}}))}function Wl(e){function t(T){return Wr(T,e)}_a!==null&&Wr(_a,e),Sa!==null&&Wr(Sa,e),wa!==null&&Wr(wa,e),fo.forEach(t),ho.forEach(t);for(var n=0;n<Ta.length;n++){var i=Ta[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ta.length&&(n=Ta[0],n.blockedOn===null);)cp(n),n.blockedOn===null&&Ta.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var u=n[i],d=n[i+1],x=u[wt]||null;if(typeof d=="function")x||fp(n);else if(x){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[wt]||null)b=x.formAction;else if(Gu(u)!==null)continue}else b=x.action;typeof b=="function"?n[i+1]=b:(n.splice(i,3),i-=3),fp(n)}}}function dp(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function Yu(e){this._internalRoot=e}es.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,i=Yt();ap(n,i,e,t,null,null)},es.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ap(e.current,2,null,e,null,null),Or(),t[pl]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ta.length&&t!==0&&t<Ta[n].priority;n++);Ta.splice(n,0,e),n===0&&cp(e)}};var hp=a.version;if(hp!=="19.2.4")throw Error(l(527,hp,"19.2.4"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=v(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var e2={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{Si=ts.inject(e2),Ut=ts}catch{}}return vo.createRoot=function(e,t){if(!s(e))throw Error(l(299));var n=!1,i="",u=bh,d=_h,x=Sh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(x=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,i,null,u,d,x,dp),e[pl]=t.current,Cu(e),new Yu(t)},vo.hydrateRoot=function(e,t,n){if(!s(e))throw Error(l(299));var i=!1,u="",d=bh,x=_h,b=Sh,T=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(x=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(T=n.formState)),t=tp(e,1,!0,t,n??null,i,u,T,d,x,b,dp),t.context=np(null),n=t.current,i=Yt(),i=Os(i),u=ca(i),u.callback=null,ua(n,u,i),n=i,t.current.lanes=n,Ti(t,n),wn(t),e[pl]=t.current,Cu(e),new es(t)},vo.version="19.2.4",vo}var wp;function f2(){if(wp)return Qu.exports;wp=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(a){console.error(a)}}return c(),Qu.exports=u2(),Qu.exports}var d2=f2();const h2=C1(d2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=(...c)=>c.filter((a,o,l)=>!!a&&a.trim()!==""&&l.indexOf(a)===o).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,o,l)=>l?l.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=c=>{const a=p2(c);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=c=>{for(const a in c)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=L.forwardRef(({color:c="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:s="",children:f,iconNode:r,...m},g)=>L.createElement("svg",{ref:g,...v2,width:a,height:a,stroke:c,strokeWidth:l?Number(o)*24/Number(a):o,className:N1("lucide",s),...!f&&!g2(m)&&{"aria-hidden":"true"},...m},[...r.map(([v,p])=>L.createElement(v,p)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=(c,a)=>{const o=L.forwardRef(({className:l,...s},f)=>L.createElement(x2,{ref:f,iconNode:a,className:N1(`lucide-${m2(Tp(c))}`,`lucide-${c}`,l),...s}));return o.displayName=Tp(c),o};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],b2=Ns("info",y2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],S2=Ns("layers",_2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],T2=Ns("palette",w2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],N2=Ns("sparkles",C2),A2=[{id:"shaders",label:"Shaders",icon:S2},{id:"demos",label:"Demos",icon:N2},{id:"playground",label:"Play",icon:T2}],R2=({activeCategory:c,onCategoryChange:a})=>h.jsxs("div",{className:"w-16 flex-shrink-0 flex flex-col items-center h-full py-4 gap-1",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center mb-4",children:h.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 14 14",fill:"none",children:[h.jsx("circle",{cx:"7",cy:"7",r:"3",stroke:"white",strokeWidth:"1.5"}),h.jsx("circle",{cx:"7",cy:"7",r:"6",stroke:"white",strokeWidth:"0.5",opacity:"0.4"})]})}),A2.map(o=>{const l=c===o.id;return h.jsxs("button",{onClick:()=>a(o.id),className:"flex flex-col items-center gap-1 transition-colors ",children:[h.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${l?"bg-neutral-800 text-white":"text-neutral-400 hover:bg-neutral-100"}`,children:h.jsx(o.icon,{size:18})}),h.jsx("span",{className:`text-[8px] uppercase tracking-wide font-medium ${l?"text-neutral-700":"text-neutral-400"}`,children:o.label})]},o.id)}),h.jsx("div",{className:"flex-1"}),h.jsxs("div",{className:"flex flex-col items-center gap-1",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center text-neutral-400 hover:bg-neutral-100 transition-colors cursor-default",children:h.jsx(b2,{size:18})}),h.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),h.jsx("span",{className:"text-[7px] text-neutral-400",children:"GPU"})]})]}),z2=[{id:"vortex",name:"Vortex Portal",description:"Spiral energy field",technique:"FBM + Polar Warp"},{id:"lumina",name:"Lumina Flow",description:"Domain warping fluid",technique:"Multi-layer FBM"},{id:"isometric",name:"Isometric Flow",description:"Dynamic block grid",technique:"DDA Raymarching"},{id:"flowfield",name:"Flow Field",description:"Vector field visualization",technique:"Curl Noise + LIC"},{id:"tunnel",name:"Warp Tunnel",description:"Volumetric wormhole",technique:"Raymarching + FBM"},{id:"aura",name:"Noise Aura",description:"Volumetric nebula",technique:"Vol. Accumulation"},{id:"neon",name:"Neon Noise",description:"Psychedelic color flow",technique:"FBM + Domain Warp"},{id:"fluid",name:"Fluid Flow",description:"Double-warped liquid",technique:"Dual Domain Warp"},{id:"neuro",name:"NeuroFlow",description:"Cyberpunk energy lines",technique:"Simplex + Hue Shift"},{id:"neonwave",name:"Neonwave",description:"Neon terrain flight",technique:"Plane Stacking + FBM"},{id:"neontext",name:"Neon Text",description:"SDF text on sphere",technique:"SDF + Raymarching"},{id:"aurora",name:"Aurora Cloudscape",description:"Volumetric aurora",technique:"Soft Clouds + Waves"},{id:"hypergrid",name:"Hyper Grid",description:"Warp speed grid cells",technique:"Grid March + Rotation"},{id:"jellyfish",name:"Luminescence",description:"Bioluminescent jellyfish",technique:"SDF + Volumetric"},{id:"trainjourney",name:"Train Journey",description:"Parallax mountain train",technique:"FBM + Parallax Layers"},{id:"horizon",name:"Horizon",description:"Parallax mountain scape",technique:"FBM + Depth Parallax"}],E2=({active:c,onSelect:a})=>{const o=L.useRef(null);return L.useEffect(()=>{var l;(l=o.current)==null||l.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[c]),h.jsx("div",{className:"flex gap-1.5 overflow-x-auto scrollbar-hide px-5 py-3 flex-shrink-0",children:z2.map(l=>{const s=c===l.id;return h.jsx("button",{ref:s?o:null,onClick:()=>a(l.id),className:`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${s?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.name},l.id)})})},j2=({guide:c,onClose:a})=>(L.useEffect(()=>{const o=l=>{l.key==="Escape"&&a()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[a]),h.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-6",onClick:a,children:[h.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-sm"}),h.jsxs("div",{className:"relative w-full max-w-[640px] max-h-[85vh] bg-white rounded-3xl flex flex-col overflow-hidden",onClick:o=>o.stopPropagation(),children:[h.jsxs("div",{className:"flex items-center gap-3 px-6 py-4 flex-shrink-0",children:[h.jsxs("div",{className:"flex-1",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-[14px] font-semibold text-neutral-800",children:c.title}),h.jsx("span",{className:"text-[10px] text-neutral-400",children:c.subtitle})]}),h.jsx("p",{className:"text-[11px] text-neutral-500 mt-0.5",children:c.oneLiner})]}),h.jsx("button",{onClick:a,className:"w-7 h-7 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors flex-shrink-0",children:h.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:h.jsx("path",{d:"M2 2L10 10M10 2L2 10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto min-h-0 px-6 pb-6",children:[h.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"What You See"}),h.jsx("p",{className:"text-[11px] text-neutral-600 leading-[1.7]",children:c.whatYouSee})]}),h.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Rendering Pipeline"}),h.jsx("div",{className:"flex flex-col gap-2",children:c.pipeline.map(o=>h.jsx("div",{className:"bg-white rounded-xl p-3",children:h.jsxs("div",{className:"flex items-start gap-2.5",children:[h.jsx("span",{className:"text-[9px] font-semibold text-neutral-300 mt-px flex-shrink-0 w-4",children:o.step}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("div",{className:"text-[10px] font-semibold text-neutral-700 mb-1",children:o.title}),h.jsx("p",{className:"text-[10px] text-neutral-500 leading-[1.6]",children:o.description}),o.glsl&&h.jsx("pre",{className:"mt-2 bg-neutral-50 rounded-lg px-2.5 py-1.5 overflow-x-auto",children:h.jsx("code",{className:"text-[9px] font-mono text-neutral-500 leading-relaxed whitespace-pre",children:o.glsl})})]})]})},o.step))})]}),h.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Core Concepts"}),h.jsx("div",{className:"flex flex-col gap-2",children:c.concepts.map(o=>h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsxs("div",{className:"flex items-center gap-1.5 mb-1.5",children:[h.jsx("span",{className:"text-[10px] font-semibold text-neutral-700",children:o.name}),h.jsx("span",{className:"text-[8px] px-1 py-0.5 rounded bg-neutral-100 text-neutral-400 font-mono",children:o.nameEN})]}),h.jsx("div",{className:"bg-neutral-50 rounded-lg px-2.5 py-2 mb-2",children:h.jsx("p",{className:"text-[10px] text-neutral-600 leading-[1.6] italic",children:o.analogy})}),h.jsx("p",{className:"text-[10px] text-neutral-500 leading-[1.6] mb-1.5",children:o.explanation}),h.jsxs("div",{className:"flex items-start gap-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 flex-shrink-0",children:"Why:"}),h.jsx("span",{className:"text-[9px] text-neutral-500 leading-[1.5]",children:o.whyItMatters})]})]},o.nameEN))})]}),h.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Real-World Applications"}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:c.applications.map(o=>h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[10px] font-semibold text-neutral-700 mb-1",children:o.field}),h.jsx("p",{className:"text-[9px] text-neutral-500 leading-[1.5]",children:o.examples})]},o.field))})]}),h.jsxs("div",{className:"bg-neutral-800 rounded-2xl p-4",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-500 uppercase tracking-wide mb-2",children:"Key Insight"}),h.jsx("p",{className:"text-[11px] text-neutral-300 leading-[1.7]",children:c.keyInsight})]})]})]})]})),Cp={flowfield:{id:"flowfield",title:"Flow Field",subtitle:"向量场可视化",oneLiner:"用噪声生成「风向地图」，再让粒子沿着风向留下轨迹",whatYouSee:"想象气象台的风速图——颜色代表速度快慢（蓝→绿→黄→红），条纹代表风的流动轨迹。每个像素都在问：「这里的风往哪吹？」然后顺着风向往回看，采样噪声留下运动模糊的条纹。多个时间相位叠加，产生连续流动的动画效果。",pipeline:[{step:"01",title:"构建向量场",description:"用 FBM 噪声生成一个「势场」（potential field），然后计算它的旋度（curl）得到无散度的向量场。就像气压图→风向：高压流向低压，旋度确保风不会凭空消失或产生。加上纬向基础流（zonal flow）模拟地球大气环流。",glsl:`vec2 curl = vec2((n3 - n1)/eps, -(n2 - n1)/eps);
vec2 combined = flow * 0.5 + curl * turbulence;`},{step:"02",title:"伪 LIC 平流",description:"LIC（线积分卷积）的简化版：不是真的沿流线积分，而是用两个交替的时间相位模拟。像拍两张长曝光照片，一张刚开始曝光，另一张快结束，然后混合——产生连续流动感且防止轨迹无限拉长。",glsl:`vec2 p1 = p - velocity * phase1 * streakLength;
float streaks = mix(noise1, noise2, blend);`},{step:"03",title:"速度映射色彩",description:"计算向量场的模长（速度），用科学热力图映射颜色：深蓝（静止）→青色（微风）→绿色（温和）→黄色（强劲）→红色（湍流）→白色（极端）。smoothstep 实现平滑过渡，比 linear 插值更自然。",glsl:`float speedNorm = smoothstep(0.0, 2.5, speed);
vec3 baseColor = getHeatmapColor(speedNorm);`},{step:"04",title:"条纹强度调制",description:"低速区域显示平滑色块（云彩般），高速区域显示明显条纹（流动感）。用 speedNorm 控制条纹的混合强度——这让静态区和动态区有层次对比，就像卫星云图中静止的高压带 vs 旋转的台风眼。",glsl:`float streakIntensity = smoothstep(0.1, 0.5, speedNorm);
finalColor = baseColor * (0.7 + 0.6 * streaks * streakIntensity);`},{step:"05",title:"地形遮罩 + 网格叠加",description:"用低频噪声阈值模拟「陆地」，深色遮罩产生地图感。叠加坐标网格线（经纬度风格）增强科学可视化氛围。最后加暗角聚焦视线中心，像真实的雷达屏幕或科研仪表盘。",glsl:`float landMask = smoothstep(0.55, 0.56, landNoise);
finalColor += vec3(0.3) * grid * gridOpacity;`}],concepts:[{name:"向量场",nameEN:"Vector Field",analogy:"想象一张满是小箭头的图——每个位置都有一个箭头表示「这里应该往哪个方向走、走多快」。风速图、洋流图、电场线、磁场线都是向量场。",explanation:"数学上是一个函数 F: ℝ² → ℝ²，输入坐标 (x, y)，输出向量 (vx, vy)。GPU 可以高效并行计算每个像素位置的向量，用颜色或箭头可视化。",whyItMatters:"流体模拟、粒子系统、路径规划的核心数据结构。游戏中的风场影响树叶飘动，气象预报用它预测台风路径，电影 VFX 用它引导烟雾/火焰/魔法粒子流动。"},{name:"旋度场",nameEN:"Curl of a Field",analogy:"旋度描述「旋转倾向」。把小风车放在向量场中——风车转得快说明旋度大。直线吹的风旋度为零，漩涡中心旋度最大。",explanation:"旋度是向量场的导数：curl(F) = (∂Fy/∂x - ∂Fx/∂y)。对势场求旋度能得到无散度的向量场——确保流体不可压缩，质量守恒。",whyItMatters:"物理正确的流体模拟必须满足 ∇·v = 0（不可压缩）。旋度场天然满足这点，避免了求解复杂的 Navier-Stokes 方程，是实时流体效果的捷径。"},{name:"LIC 算法",nameEN:"Line Integral Convolution",analogy:"想象在河里倒一桶白色染料，长曝光拍摄——静水区模糊成圆点，急流区拉成长条纹。LIC 就是「数学版的长曝光摄影」，沿流线卷积纹理产生流动感。",explanation:"沿向量场的流线积分噪声纹理：∫ noise(p(t)) dt。本 shader 用双相位伪 LIC——两个时间相位的噪声混合，避免真正积分的计算成本。",whyItMatters:"NASA、NOAA 等科研机构的标准流场可视化方法。一张静态图就能展示复杂的流动模式，比箭头图更直观、比粒子系统更清晰。"},{name:"科学色彩映射",nameEN:"Scientific Color Map",analogy:"不是「好看的渐变」而是「准确的渐变」。彩虹色在数据可视化中是禁忌（黄绿色亮度太近），科学热力图用感知均匀的色彩序列——每个颜色步进代表相同的数值变化。",explanation:"本 shader 用 6 色梯度：蓝（冷/慢）→青→绿→黄→红（热/快）→白（极端）。smoothstep 实现感知均匀的过渡，避免线性插值的色带伪影。",whyItMatters:"糟糕的配色会误导数据解读。科学可视化领域有专门研究（如 Viridis、Plasma 调色板），确保色盲友好、灰度打印可辨、感知线性。"}],applications:[{field:"气象/海洋",examples:"风速图、洋流可视化、台风路径预测、污染物扩散模拟"},{field:"流体力学",examples:"CFD 仿真结果展示、涡流分析、湍流研究"},{field:"数据可视化",examples:"网络流量、社交网络传播、人群运动、交通流"},{field:"游戏/VFX",examples:"魔法护盾能量流、水流/岩浆表面、粒子引导场"}],keyInsight:"向量场可视化的本质是「让看不见的流动变得可见」。自然界的流动（风、水、热）本身无色透明，我们通过「示踪粒子」（烟、染料）观察它。数字世界中，噪声纹理就是虚拟的示踪剂，LIC 就是虚拟的长曝光相机——用纯数学复现物理世界的观测手段。"},isometric:{id:"isometric",title:"Isometric Flow",subtitle:"动态方块网格",oneLiner:"让摄像机射出无数条光线，每条光线跳着格子找「哪里有方块」",whatYouSee:"想象你站在一个无限大的棋盘上空，棋盘上随机放着一些会浮动的方块。你的视线就像一束激光——从你的眼睛射出，一格一格地跳着往前查看：「这格有方块吗？没有？下一格。有？那就画出来。」每个像素都射出一条这样的光线，最终拼成了你看到的等距视角方块流。",pipeline:[{step:"01",title:"设置摄像机",description:"想象你在用无人机拍摄——先确定无人机的位置（距离 + 角度）和朝向。鼠标控制旋转角度，摄像机围绕原点运动。setup_camera 构建了一套「相机坐标系」，让你能从任意角度发射光线。",glsl:`ro = vec3(
  camDist * cos(rotX) * cos(rotY),
  camDist * sin(rotY),
  camDist * sin(rotX) * cos(rotY)
);`},{step:"02",title:"DDA 射线步进",description:"DDA 是「数字微分分析器」——一种高效的格子跳跃算法。不是慢悠悠一小步一小步走，而是每次直接跳到下一个格子边界。就像走迷宫时只在交叉路口停下判断，而不是每走一厘米都停下来。",glsl:`vec3 sideDist = (sign(rd) * (mapPos - ro)
  + (sign(rd) * 0.5 + 0.5) * size)
  * deltaDist / size;`},{step:"03",title:"程序化方块生成",description:"每个格子用 hash 函数算出一个随机种子，再用波浪函数（sin/cos 组合）决定是否存在方块。波浪在时间和空间中传播，产生动态的出现/消失动画。鼠标附近的扰动让方块对交互作出反应。",glsl:`float wave = sin(cellPos.x * 0.15 + g_time * 0.8)
  * cos(cellPos.z * 0.12 + g_time * 0.6);
float exists = smoothstep(0.8, 1.2, activation);`},{step:"04",title:"AABB 碰撞检测",description:"射线可能穿过这个格子但不一定碰到方块（格子 2.5 单位、方块 1.5 单位）。用 AABB（轴对齐包围盒）算法计算射线与方块的精确交点。这比三角形求交快得多，是体素引擎的标准做法。",glsl:`vec3 tN = min(t1, t2);
vec3 tF = max(t1, t2);
float tNear = max(max(tN.x, tN.y), tN.z);
if (tNear < tFar && tFar > 0.0) hit = true;`},{step:"05",title:"光照 + 雾",description:"用法线（碰撞面的朝向）计算简单的漫反射光照——向上的面更亮（环境光），侧面根据与光源夹角变暗。距离摄像机越远，雾的混合比例越高，产生自然的景深消失效果。",glsl:`float diff = max(dot(normal, sunDir), 0.0);
float fogFactor = smoothstep(fogStart, fogEnd, dist);
color = mix(finalCol, fogColor, fogFactor);`}],concepts:[{name:"DDA 算法",nameEN:"Digital Differential Analyzer",analogy:"你要从家走到学校，可以每走 1 米停下看「我现在在哪个街区」，也可以直接走到下一个街区边界再停下。DDA 是后者——每次跳到下一个「格子边界」，跳过格子内部的所有点。",explanation:"DDA 预计算 deltaDist（光线前进一个格子宽度需要的步进距离），每次选择 x/y/z 三个方向中最近的边界跳过去。这让射线穿越体素网格从 O(n) 优化到 O(格子数)。",whyItMatters:"没有 DDA，体素渲染就是暴力循环——60 次迭代覆盖 150 单位距离（每次 2.5 单位）。DDA 让 Minecraft、体素引擎、医学 CT 扫描实时可行。"},{name:"AABB 碰撞",nameEN:"Axis-Aligned Bounding Box",analogy:"判断一条线是否穿过盒子：把盒子的六个面当作「进入时间 tN」和「离开时间 tF」。如果「进入时间 < 离开时间」且「还没离开就已经到了」，那就是碰撞了。",explanation:"用射线方程 P = O + t*D，算出与盒子三对平行面的交点时间，取最大的进入时间和最小的离开时间。如果 tNear < tFar 且 tFar > 0，射线击中盒子。",whyItMatters:"AABB 只需 6 次除法 + 几次 min/max，比三角形求交快 10 倍。是游戏物理、包围盒层级（BVH）、体素引擎的基础组件。"},{name:"等距投影",nameEN:"Isometric Projection",analogy:"3D → 2D 有两种方法：透视（近大远小、符合人眼）和等距（平行线永不相交、像工程图纸）。等距视角把摄像机拉远 + 缩小 FOV，模拟正交投影效果。",explanation:"真正的等距投影是正交相机，但这里用透视相机 + 大距离（80 单位）+ 小 FOV（zoom = 3.5）来近似。rotX = 45° + rotY = ~30° 产生经典的等轴测游戏视角。",whyItMatters:"《纪念碑谷》《Hades》《文明》等游戏的视觉语言。等距视角保留 3D 信息但去除透视扭曲，既直观又美观，特别适合策略/解谜游戏。"},{name:"程序化生成",nameEN:"Procedural Generation",analogy:"不是美术师一个个放方块，而是写一个规则：「用坐标算 hash，hash > 0.8 的位置放方块」。换个种子，整个世界完全不同，但不需要存储任何数据。",explanation:"hash(cellPos) 产生确定性随机数，sin/cos 波浪函数叠加产生时空动画。每个格子独立计算是否存在，无需全局数组——无限世界只占常数内存。",whyItMatters:"《Minecraft》《无人深空》的核心技术。程序化生成让一个 100MB 游戏包含万亿种星球。GPU 实时生成比 CPU 预生成 + 存储更快。"}],applications:[{field:"游戏",examples:"体素地形引擎、方块建造游戏、等轴测策略游戏、程序化关卡生成"},{field:"数据可视化",examples:"3D 柱状图、城市建筑密度图、实时网络流量可视化"},{field:"建筑/设计",examples:"等轴测工程图、参数化城市景观、可交互的 3D 平面图"},{field:"艺术/装置",examples:"生成艺术、媒体立面、互动展览中的动态几何场"}],keyInsight:"DDA + 程序化生成 = 「无限细节零存储」。传统 3D 渲染需要把模型加载到内存，体素方法只需一个数学函数实时生成。这正是为什么《Minecraft》能有几乎无限的世界——不是存储了所有方块，而是存储了生成规则。"},vortex:{id:"vortex",title:"Vortex Portal",subtitle:"螺旋能量场",oneLiner:"通过极坐标变换 + 噪声函数，让平面像素「旋转」起来",whatYouSee:"屏幕上每一个像素都在问同一个问题：「我离中心多远？我的角度是多少？」然后根据答案去查一张「噪声地图」，找到自己该显示什么颜色。中心附近的像素查的位置旋转得更快，远处的慢一些——于是你看到了一个漩涡。",pipeline:[{step:"01",title:"笛卡尔 → 极坐标",description:"把每个像素从 (x, y) 转换为 (距离, 角度)。就像从「第三排第五个座位」变成「距舞台 8 米、方位角 30°」。这样后续的旋转操作只需要改角度值就行。",glsl:`float r = length(uv);
float angle = atan(uv.y, uv.x);`},{step:"02",title:"螺旋扭曲",description:"离中心越近，角度偏移越大 (1/r)。想象把一叠纸戳一根筷子旋转——中心转得最快、边缘几乎不动。这就产生了漩涡的「吸入感」。",glsl:`float theta = angle + (1.0/(r+0.1)) * twist
  - iTime * rotationSpeed;`},{step:"03",title:"噪声采样",description:"用扭曲后的坐标去查 FBM 噪声。FBM 像叠加多层云彩——第一层是大团的云，第二层加细节纹理，第三层加更细的毛边。5 层叠加后得到丰富的等离子体纹理。",glsl:"float n = fbm(spiralUV + vec2(iTime * 0.1));"},{step:"04",title:"二次域变形",description:"用第一次的噪声结果去扰动坐标，再做一次噪声采样。这是「用噪声扭曲噪声」，让纹理从规律的云彩变成混沌的等离子体。",glsl:"float n2 = fbm(spiralUV + n * 2.0);"},{step:"05",title:"颜色映射 + 后处理",description:"噪声值 0→1 对应两种颜色的渐变混合。中心叠加 1/r² 的辉光，边缘加暗角遮罩。最后用 1-e^(-x) 做色调映射，防止过曝。",glsl:`vec3 col = mix(uColor1, uColor2, n2);
col = 1.0 - exp(-col * 1.5);`}],concepts:[{name:"噪声函数",nameEN:"Simplex Noise",analogy:"像大自然的随机数生成器。普通 random() 是电视雪花——尖锐、无关联。Simplex Noise 是连绵的山丘——平滑、连续，相邻点的值接近。",explanation:"由 Ken Perlin 发明（获奥斯卡技术奖）。它在 N 维空间中生成平滑的伪随机值，同样的输入永远返回同样的输出，但宏观上看起来完全自然。",whyItMatters:"几乎所有程序化视觉效果的基础。没有它，就没有逼真的云、火焰、地形。"},{name:"分形布朗运动",nameEN:"FBM (Fractional Brownian Motion)",analogy:"看一条海岸线：远看是大弯，近看有小湾，再近看还有石块的凹凸。FBM 就是把多个「缩放级别」的噪声叠加，从大轮廓到细节逐层丰富。",explanation:"每一层（octave）频率翻倍、振幅减半。5 层叠加后，同时拥有宏观形态和微观细节。这正是自然界分形结构的数学描述。",whyItMatters:"单层噪声太单调。FBM 赋予纹理「自相似性」——不管放大到哪个尺度都有细节，和真实的云朵、地形一样。"},{name:"极坐标系",nameEN:"Polar Coordinates",analogy:"笛卡尔坐标说「往右 3 步、往上 4 步」，极坐标说「朝 53° 方向走 5 步」。描述旋转和辐射形状时，极坐标天然适配。",explanation:"将 (x, y) 转为 (r, θ)。任何关于中心对称的操作（旋转、径向波纹）在极坐标下只需对 θ 或 r 做简单加减。",whyItMatters:"漩涡效果的核心。没有极坐标转换，要实现「越靠近中心旋转越快」会复杂得多。"},{name:"域变形",nameEN:"Domain Warping",analogy:"想象在一张棋盘格纸上滴一滴水——纸张膨胀变形，直线变成了曲线。域变形就是在「查地图之前先扭曲坐标」，让规则的图案变得有机、流动。",explanation:"不是修改输出的颜色，而是修改「去哪里查颜色」。f(p) → f(p + noise(p))。同一张噪声图，扭曲前是云，扭曲后是等离子体。",whyItMatters:"用最少的代码产生最大的视觉复杂度。一个简单的噪声 + 域变形，就能模拟火焰、烟雾、岩浆。"}],applications:[{field:"游戏特效",examples:"传送门、魔法阵、能量护盾、技能释放光效"},{field:"电影 VFX",examples:"星际穿越虫洞、奇异博士传送门、黑洞吸积盘"},{field:"音乐可视化",examples:"音频驱动的参数让漩涡随节拍律动"},{field:"UI/品牌",examples:"加载动画、Hero Section 背景、产品发布光效"}],keyInsight:"整个漩涡效果只有一个核心技巧：在极坐标下，让内圈的角度偏移量大于外圈。自然界中的漩涡（龙卷风、星系旋臂、水流漩涡）都遵循相同的数学规律。"},lumina:{id:"lumina",title:"Lumina Flow",subtitle:"域变形流体",oneLiner:"三层噪声互相扰动，「用混沌扭曲混沌」产生流体质感",whatYouSee:"你看到的像油画、极光、或大理石纹理的效果，其实是三层域变形的结果。第一层噪声说「往这边偏」，第二层根据偏移后的位置再说「不对，往那边偏」，第三层再偏一次。三次扰动之后，原本规则的噪声图案变成了复杂的流体运动。",pipeline:[{step:"01",title:"基础坐标",description:"将像素坐标归一化为 0→1，再乘以缩放系数 (u_zoom)。就像决定你在看多大范围的地图——zoom 大看细节，zoom 小看全局。",glsl:"vec2 p = uv * u_zoom;"},{step:"02",title:"第一层变形 → q",description:"在基础坐标上做 FBM 噪声采样，得到一个二维偏移向量 q。q 描述了「这个位置应该往哪个方向歪」。",glsl:`q.x = fbm(p + vec2(0.0) + 0.05*t);
q.y = fbm(p + vec2(5.2, 1.3) + 0.05*t);`},{step:"03",title:"第二层变形 → r",description:"用 q 偏移后的坐标再做 FBM 采样，得到 r。这里 u_warpStrength 控制扰动强度——强度高则更混沌，低则更平静。",glsl:"r.x = fbm(p + warp*q + vec2(1.7, 9.2) + 0.15*t);"},{step:"04",title:"最终采样 → f",description:"用 r 偏移后的坐标做最后一次 FBM，得到标量 f。这个 f 值决定了最终的颜色混合权重。三层叠加产生了远超单层噪声的复杂度。",glsl:"float f = fbm(p + u_warpStrength * r);"},{step:"05",title:"三色混合 + 余弦调色板",description:"基于 q 的长度混合 color1↔color2，基于 f 的值混合高光色 color3。再叠加余弦调色板产生虹彩/油膜质感。最终亮度由 f² 调制。",glsl:`color = mix(color, oilPalette, 0.3);
color *= f * f * 2.5 + 0.5;`}],concepts:[{name:"域变形",nameEN:"Domain Warping",analogy:"你要查字典里的「apple」，但有人把字典的页码顺序打乱了。你翻到的不是 apple 所在页，而是某个意外的词。域变形就是在「查颜色地图」之前，先扰动你的查询坐标。",explanation:"数学表达：f(p + g(p))，其中 g(p) 是另一个噪声函数。多层嵌套 f(p + g(p + h(p))) 产生层层递进的复杂度。每多一层，复杂度指数级增长。",whyItMatters:"域变形是 Shadertoy 和电影 VFX 中最常用的技巧之一。Inigo Quilez（Shadertoy 创始人）的经典论文让这个技术广为人知。"},{name:"柏林噪声",nameEN:"Perlin Noise",analogy:"在一张大网格的每个交叉点放一个小箭头（随机方向），然后计算任意点受周围四个箭头影响的「推力」。结果是一张到处平滑过渡的灰度图。",explanation:"1983 年 Ken Perlin 发明，用于电影 TRON。核心是在整数网格点定义随机梯度，然后对中间位置做平滑插值。这里用的是简化版本（基于 fract+sin 的伪随机）。",whyItMatters:"所有程序化纹理的祖先。地形高度图、木纹、大理石、火焰——几乎所有自然纹理都从 Perlin Noise 开始。"},{name:"余弦调色板",nameEN:"Cosine Palette",analogy:"普通渐变是 A→B 的直线。余弦调色板是 A→B→C→D 的平滑波浪。一个简单的公式就能产生彩虹、金属、肌肤等各种色调过渡。",explanation:"公式：color = a + b * cos(2π * (c*t + d))。四个参数控制基调、对比度、色相漂移和相位。Inigo Quilez 经典公式，4 个 vec3 参数定义无限种调色板。",whyItMatters:"用 4 行代码替代手工绘制的渐变贴图。实时可调、参数化、且天然平滑。生成艺术和 Shadertoy 社区的标配工具。"},{name:"分形布朗运动",nameEN:"FBM",analogy:"弹钢琴时同时按下 C2（低音）、C3（中音）、C4（高音）——每高一个八度音量减半。FBM 就是噪声的「和弦」：低频给大形状，高频给小细节，6 层叠出丰富纹理。",explanation:"循环中 st *= 2.0 (频率翻倍)、amplitude *= 0.5 (振幅减半)。6 个 octave 意味着最细的层是最粗层的 1/64 大小、1/64 强度。",whyItMatters:"FBM 的层数直接决定纹理的「分辨率」。太少层太光滑，太多层 GPU 吃不消。6 层是性能与细节的黄金平衡点。"}],applications:[{field:"程序化纹理",examples:"大理石、木纹、岩石、布料——不需要贴图文件，数学函数实时生成"},{field:"流体模拟",examples:"烟雾、墨水扩散、天气云图。域变形能以极低成本近似 Navier-Stokes 方程"},{field:"生成艺术",examples:"NFT 艺术、互动装置、音乐可视化。参数化 = 无限变体"},{field:"影视后期",examples:"过渡转场、背景氛围层、标题序列的有机动态底纹"}],keyInsight:"域变形的本质是「用函数的输出重新定义函数的输入」——这是一种递归思想。正如自然界的复杂性来自简单规则的反复叠加（细胞分裂、河流分支、闪电分叉），三层域变形用最简单的噪声函数就涌现出了极度复杂的流体形态。"},tunnel:{id:"tunnel",title:"Warp Tunnel",subtitle:"虫洞隧道",oneLiner:"128 步光线行军，一步步「走进」噪声构建的扭曲隧道",whatYouSee:"你像坐在一辆飞船里，穿越一条无限深的扭曲隧道。隧道壁上有脉动的纹理，远处有一颗光球沿螺旋路径飘荡，照亮了周围的空间。越靠近隧道壁或光球，画面越亮——这不是「画上去的」，而是 128 次数学查询累积出的体积光效果。",pipeline:[{step:"01",title:"光线发射",description:"从相机向每个像素方向发射一条射线。射线的方向就是归一化后的像素坐标 (u, v)。然后沿射线一步步前进（d += stepSize），每一步都在三维空间中查询「这里有东西吗？」",glsl:"vec3 p = vec3(uv * d, d + t);"},{step:"02",title:"空间扭曲",description:"在每一步的位置上，用旋转矩阵扭曲 XY 平面。扭曲量随 Z 轴深度和时间变化。这让原本笔直的隧道变成了螺旋形——就像拧麻花一样，越往深处拧得越紧。",glsl:`vec4 cv = cos(angle + vec4(0, 33, 11, 0));
p.xy *= mat2(cv.x, cv.y, cv.z, cv.w);`},{step:"03",title:"隧道几何 + 噪声位移",description:"隧道壁是「距 Y=0 平面 ±width 的两个镜像平面」。然后用 6 层噪声（频率 0.8→25.6）扰动这个距离值——噪声让平整的墙壁变成了崎岖的岩洞。噪声的湍流项 (cos(p.yzx)) 让纹理随时间流动。",glsl:`s = uWidth - abs(p.y);
// 6 octaves: a = 0.8, 1.6, 3.2...
s -= abs(dot(sin(p*a), vec3(0.6))) / a;`},{step:"04",title:"自适应步进",description:"每步的前进距离取决于「离最近表面多远」。离墙壁远就大步走（效率高），靠近就小步走（精度高）。同时考虑光球距离，确保不会穿过光球。这是 Sphere Tracing 的核心思想。",glsl:`float stepSize = min(
  0.03 + 0.2*abs(s),  // 噪声墙壁距离
  max(0.5*e, 0.01)    // 光球距离
);`},{step:"05",title:"体积光累积 + 色调映射",description:"每一步累积 1/(步长 + 距离)。这意味着越靠近表面，贡献越大——128 步累积后产生了柔和的体积光效果。光球附近用 color2，远处用 color1。最后用 tanh 压缩亮度到 0→1。",glsl:`float glow = 1.0 / (stepSize + eClamp * 3.0);
col += mix(uColor1, uColor2, orbInfluence) * glow;`}],concepts:[{name:"光线行军",nameEN:"Raymarching",analogy:"想象你在浓雾中拿着手电筒。你不能一眼看到远处，只能一步步往前试探。每一步你问「这里有障碍物吗？离最近的东西多远？」然后安全地往前走那么远。128 步之后，你就「画」出了整个场景。",explanation:"不同于三角形光栅化（告诉 GPU 画哪些三角形），Raymarching 是从相机发射射线，沿射线步进并查询距离场函数。每步步长 = 到最近表面的距离（Sphere Tracing），保证不会穿过物体。",whyItMatters:"Raymarching 能渲染传统光栅化无法高效处理的形状：分形、噪声位移表面、体积效果。ShaderToy 上 90% 的 3D 效果都用这个技术。"},{name:"体积光累积",nameEN:"Volumetric Accumulation",analogy:"在雾天看路灯：灯本身很亮，但周围有一圈柔和的光晕。这是因为雾中的每个微粒都散射了一点光。体积光累积就是模拟这个过程——沿着射线上每个位置都「收集」一点亮度。",explanation:"经典公式：color += brightness / (distance_to_surface)。每步贡献与距离成反比。128 步累积后，表面附近贡献最多（因为步长最小、值最大），远处衰减。这产生了柔和的辉光而非硬边。",whyItMatters:"这是 AE 中「Light Rays」「Glow」等效果的底层原理。理解它就能用 shader 实现几乎所有后期光效，且性能远超基于像素的后处理。"},{name:"噪声位移",nameEN:"Noise Displacement",analogy:"用砂纸打磨一根光滑的水管——表面变得凹凸不平。噪声位移就是用噪声函数「打磨」数学定义的光滑表面。隧道原本是两面平行的墙，加上噪声后变成了岩洞。",explanation:"对距离场函数做 s -= noise(p)。多层叠加（0.8→25.6）从大尺度到小尺度逐层添加粗糙度。湍流项 cos(p.yzx) 让噪声在三个轴向交叉扰动，产生更自然的流动感。",whyItMatters:"几乎所有自然表面（岩石、云、水面）都可以用「简单几何 + 噪声位移」建模。这是程序化建模的基础技巧。"},{name:"Sphere Tracing",nameEN:"Sphere Tracing",analogy:"你在陌生的房间里闭着眼走路。每一步前，你伸出手摸一圈，确认最近的墙在 2 米外。那你就安全地走 2 米。下一步再摸，最近的只有 0.3 米了，就小心地走 0.3 米。这就是 Sphere Tracing——步长 = 安全距离。",explanation:"给定点 p 的距离场值 d（到最近表面的距离），沿射线前进 d 的距离是安全的。这比固定步长高效得多——空旷处大步飞跃，表面附近精确逼近。",whyItMatters:"让 Raymarching 从 O(n) 暴力搜索变成自适应搜索。没有它，128 步只能覆盖很短的距离；有了它，128 步就能看到整个无限隧道。"}],applications:[{field:"游戏/电影 VFX",examples:"虫洞穿越、超空间跳跃、深渊场景、隧道飞行序列"},{field:"动态背景",examples:"网站 Hero Section、直播背景、演示文稿动态底图、屏保"},{field:"AE 等效替代",examples:"CC Light Tunnel、Particular 隧道、Trapcode Form 体积光"},{field:"音乐可视化",examples:"音频驱动 speed/twist/noise，低音 → 隧道宽度脉动"}],keyInsight:"这段代码用 128 次简单的距离查询，从零构建出了一个完整的 3D 隧道场景——没有三角形、没有模型、没有贴图。整个「世界」存在于一个数学函数里。这就是程序化渲染的哲学：用算法描述世界，而非用数据存储世界。"},aura:{id:"aura",title:"Noise Aura",subtitle:"噪声光晕",oneLiner:"去掉隧道几何，只保留体积光累积 + 噪声场 = 浮动星云",whatYouSee:"深色空间中漂浮着一团发光的星云/气体。两颗光球在其中螺旋运动，照亮了周围的噪声云层。没有明确的「物体」——所有的亮度都来自光线穿过噪声密度场时的逐步累积。暗处是稀薄的区域，亮处是噪声密度高的区域。",pipeline:[{step:"01",title:"双光球系统",description:"两颗光球在三维空间中以不同频率的正弦/余弦轨迹螺旋运动。它们是场景的唯一「光源」——没有方向光或环境光，所有照明都来自点光源的距离衰减。",glsl:`float e1 = orb(p, t) - 0.1;
float e2 = orb2(p, t) - 0.1;
float e = min(e1, e2);`},{step:"02",title:"空间旋转",description:"整个噪声场绕 XZ 平面缓慢旋转。这用的是标准 2D 旋转矩阵（不是隧道中的「伪旋转」）。慢速旋转让星云看起来在漂浮和翻转。",glsl:`float ca = cos(angle), sa = sin(angle);
p.xz = vec2(ca*p.x - sa*p.z,
            sa*p.x + ca*p.z);`},{step:"03",title:"体积噪声密度场",description:"5 层噪声叠加构建三维密度场。和隧道的区别是：隧道用噪声修改几何表面，这里噪声本身就是「物质」。减去 0.4 的阈值在密度场中挖出空洞——亮区和暗区交织形成星云形态。",glsl:`for (float a = 1.0; a < 32.0; a *= 2.0)
  s += abs(dot(sin(p * a * uScale),
    vec3(0.6))) / a;
s = s * uDensity - 0.4;`},{step:"04",title:"自适应行军 + 光累积",description:"步长由噪声密度和光球距离共同决定。密度高的区域步长小（更精确地采样），空旷处步长大（跳过空区域）。每步累积 1/(步长 + 光球距离)——同时考虑噪声密度和光照强度。",glsl:`float glow = 1.0 / (stepSize + eClamp * 2.0);
col += mix(uColor1, uColor2, orbMix) * glow;`},{step:"05",title:"色调映射",description:"tanh 将无限范围的累积值压缩到 0→1。brightness 参数在映射前缩放累积值——小值产生暗沉的深空感，大值产生明亮的星云感。",glsl:`col *= uBrightness / 12.0;
vec3 e2x = exp(2.0 * clamp(col, -10., 10.));
col = (e2x - 1.0) / (e2x + 1.0);`}],concepts:[{name:"体积渲染",nameEN:"Volume Rendering",analogy:"X 光片是怎么拍的？X 射线穿过身体，骨头吸收多、肌肉吸收少、空气几乎不吸收。最终胶片上的亮度 = 沿路径的总吸收量。体积渲染完全一样——光线穿过密度场，逐步累积颜色。",explanation:"沿射线离散采样密度场 ρ(p)，每个采样点的贡献 = 密度 × 光照 × 步长。累积所有贡献得到最终颜色。这是医学影像（CT/MRI）和天体物理可视化的核心算法。",whyItMatters:"能渲染没有明确表面的现象：烟雾、云、火焰、星云、光束。传统光栅化无法处理这类半透明、散射的介质。"},{name:"密度场",nameEN:"Density Field",analogy:"想象一瓶没摇匀的果汁——底部浓、上面稀，中间有渐变。密度场就是在三维空间中定义每个点的「浓度」。噪声函数产生的密度场看起来就像自然的云雾。",explanation:"用数学函数 ρ(x,y,z) 定义空间中每个点的密度。这里用多层噪声构建：基础密度 = Σ|sin(p*a)|/a，减去阈值 0.4 创造疏密对比。uDensity 和 uScale 分别控制密度强度和空间频率。",whyItMatters:"密度场是体积渲染的输入。不同的密度场产生完全不同的视觉：平滑噪声 = 云，尖锐噪声 = 烟，周期噪声 = 布料。"},{name:"点光源衰减",nameEN:"Point Light Attenuation",analogy:"站在篝火旁：脸被照得很亮，退后两步亮度就暗了很多，退后十步几乎看不到光。亮度和距离的平方成反比。",explanation:"经典公式：intensity = 1 / (distance² + ε)。ε 防止除以零。这里用 exp(-e*0.25) 的指数衰减做颜色混合——光球附近用暖色，远处用冷色，产生自然的空间深度感。",whyItMatters:"物理正确的光照衰减是让 3D 场景「可信」的关键。没有衰减，场景看起来平坦；加上衰减，空间感立即出现。"},{name:"色调映射",nameEN:"Tone Mapping",analogy:"人眼能看日光下的雪山（极亮）也能看星空（极暗），但显示器只有 0→255 的范围。色调映射就是「压缩动态范围」——把无限亮度映射到屏幕能显示的范围内，同时保留细节。",explanation:"tanh(x) 把 (-∞, +∞) 映射到 (-1, 1)。对于正值，小值几乎线性（保留暗部细节），大值压缩到 1 附近（防止过曝）。这是最简单的 HDR→LDR 转换。",whyItMatters:"体积光累积 128 步后值可能极大。没有色调映射，画面要么全白要么全黑。tanh/Reinhard/ACES 等映射让高动态范围场景在标准屏幕上正确显示。"}],applications:[{field:"动态背景",examples:"网站 Hero、App 启动页、演示文稿——比渐变更有生命力的背景层"},{field:"AE 后期等效",examples:"Particular 星尘、CC Ball Action、Stardust 星云——一个 shader 替代多个插件"},{field:"文字特效",examples:"将噪声光场作为文字的 mask 或背景层，实现「文字从星云中浮现」的效果"},{field:"数据可视化",examples:"用密度场表示三维数据分布（气象、医学影像），光球作为交互探针"}],keyInsight:"Warp Tunnel 和 Noise Aura 共享同一套底层技术（Raymarching + 噪声 + 体积累积），区别仅在于「有没有几何约束」。隧道有明确的墙壁边界，光晕没有。这说明体积渲染的威力：同一个算法框架，改变密度函数的定义，就能从隧道飞行变成星云漂浮。这也是为什么 AE/Nuke 中那么多看似不同的效果（光线、粒子、雾气）其实可以用同一个 shader 范式统一实现。"},neon:{id:"neon",title:"Neon Noise",subtitle:"霓虹噪声",oneLiner:"用噪声扭曲噪声，再用 HSV 色轮映射，产生迷幻色彩流",whatYouSee:"屏幕上流动着类似油彩、极光、或迷幻海报的抽象色彩。没有明确的物体轮廓，只有不断变换的色块和流动的纹理。色彩随时间旋转（色相变化），噪声随时间流动（坐标偏移），整个画面像液态的彩虹。",pipeline:[{step:"01",title:"第一层噪声 → 扰动向量",description:"在基础 UV 坐标上采样 FBM 噪声，得到一个标量值 n1。这个值将用于「扰动」坐标——就像在地图上标记「往东北方向偏移 n1 单位」。时间驱动坐标移动，让噪声图案随时间流动。",glsl:`vec2 movement = vec2(iTime * speed * 0.2, iTime * speed * 0.1);
float n1 = fbm(uv * scale * 3.0 + movement);`},{step:"02",title:"域变形 → 扭曲坐标",description:"用第一层噪声值扰动 UV 坐标：uv' = uv + n1。这让原本规则的坐标网格变得扭曲。warpStrength 控制扭曲幅度——小值产生微妙的涟漪，大值产生剧烈的旋涡。",glsl:"vec2 distortedUV = uv + vec2(n1) * warpStrength;"},{step:"03",title:"第二层噪声 → 颜色基础",description:"在扭曲后的坐标上再做一次 FBM 采样，得到 n2。这是「用噪声扭曲噪声」——第一层定义流动模式，第二层定义颜色图案。双层叠加让纹理从简单的云彩变成复杂的湍流。",glsl:"float n2 = fbm(distortedUV * scale * 6.0 - movement);"},{step:"04",title:"HSV 色彩映射",description:"将 n2 的 0→1 值映射为色相环（H）。hueShift 控制色相起点，n2*0.4 让不同区域显示不同颜色。时间驱动色相旋转（hue += time），产生彩虹轮换效果。饱和度和明度由参数控制。",glsl:`float hue = fract(hueShift + iTime * 0.1 + n2 * 0.4);
vec3 col = hsv2rgb(vec3(hue, saturation, brightness));`},{step:"05",title:"对比度增强",description:"用 smoothstep(0.1, 0.9, col) 压缩中间色调，拉开明暗对比。这让颜色从柔和渐变变成更鲜明的色块分界——类似 Photoshop 的 Curves 调整，把灰蒙蒙的噪声变成霓虹般的纯色。",glsl:"col = smoothstep(0.1, 0.9, col);"}],concepts:[{name:"域变形",nameEN:"Domain Warping",analogy:"想象一张印刷精美的地图，你把它泡在水里——纸张膨胀、收缩，原本的直线街道变成了波浪。域变形就是「在查地图之前先把坐标扭曲」，让规则图案变得有机流动。",explanation:"不修改输出颜色 f(p)，而是修改查询位置：f(p + noise(p))。单层变形产生涟漪，双层嵌套 f(p + noise(p + noise(p))) 产生湍流。这是 Inigo Quilez 2017 年文章让业界广泛采用的技巧。",whyItMatters:"一行代码产生指数级的视觉复杂度。同一张噪声贴图，不扭曲是云彩，扭曲一次是烟雾，扭曲两次是火焰/岩浆/迷幻效果。几乎所有 Shadertoy 热门作品都用这招。"},{name:"HSV 色彩空间",nameEN:"HSV Color Space",analogy:"RGB 像调料配方（多少红+绿+蓝），HSV 像描述颜色（是什么色、多鲜艳、多明亮）。色相（H）是色轮上的角度（红→橙→黄→…→紫），饱和度（S）是纯度（灰→彩），明度（V）是亮度（黑→亮）。",explanation:"色相 H ∈ [0,1] 映射到 360° 色轮，S 和 V ∈ [0,1]。hsv2rgb 将 HSV 转为 RGB 显示。程序化生成色彩时，HSV 比 RGB 直观得多——H 随时间线性增加就产生彩虹循环。",whyItMatters:"动态配色的标配。想让颜色随音乐节拍变化？改 H。想做褪色/灰度转场？降 S。想实现日夜循环？调 V。用 RGB 实现这些需要复杂的插值公式，HSV 只需改一个值。"},{name:"分形布朗运动",nameEN:"FBM (Fractional Brownian Motion)",analogy:"看一幅山水画：远看是山的轮廓（大尺度），近看有树林纹理（中尺度），再近看树皮凹凸（小尺度）。FBM 就是叠加多个频率的噪声——从宏观形态到微观细节。",explanation:"循环中频率 × 2、振幅 × 0.5。4 层迭代意味着最细层是最粗层的 1/8 频率、1/8 振幅。累加后同时拥有大块形状和小细节。这是自相似分形的离散实现。",whyItMatters:"单层噪声太单调（纯云彩），FBM 赋予自然质感（岩石、水波、地形）。层数越多越真实，但 GPU 成本也越高。4 层是实时效果的甜点。"},{name:"对比度增强",nameEN:"Contrast Enhancement",analogy:"相机的对比度滑块：往右拉，暗处更黑、亮处更白，中间调被压缩。smoothstep 像 S 曲线——0.5 附近变化慢（保留渐变），0.1 和 0.9 附近变化快（锐化边缘）。",explanation:"smoothstep(0.1, 0.9, x) 将 [0,1] 映射为陡峭的 S 曲线。输入 0.1→0 输出 0（暗区纯黑），0.5→0.5（保留中间色），0.9→1 输出 1（亮区纯白）。这让柔和的噪声渐变变成鲜明的色块。",whyItMatters:"原始噪声往往灰蒙蒙的，不够「霓虹」。对比度增强让色彩跳出来。这是从「自然纹理」到「艺术效果」的关键一步——Photoshop 后期、电影调色、NFT 艺术都在做同样的事。"}],applications:[{field:"动态背景",examples:"网站 Hero Section、App 启动页、PPT 背景——比渐变更生动，比视频更轻量"},{field:"音乐可视化",examples:"低音 → hueShift、高音 → warpStrength，音频反应式背景"},{field:"NFT 生成艺术",examples:"每个 token ID 作为 seed，生成唯一的色彩流——无限变体、零存储"},{field:"UI 特效",examples:"按钮 hover 背景、加载动画、文字特效底纹、扫光效果"}],keyInsight:"这个 shader 只有 30 行核心代码，却包含了程序化生成的三大支柱：噪声（随机性）、域变形（有机性）、色彩映射（美学性）。改变参数就能从「深海极光」变成「赛博朋克」再变成「迷幻海报」——这正是参数化设计的威力：不是创作一个作品，而是定义一个作品空间。"},fluid:{id:"fluid",title:"Fluid Flow",subtitle:"流体流动",oneLiner:"双层域变形让噪声像液体一样流动、旋转、混合",whatYouSee:"屏幕上流淌着像墨水在水中扩散、或油彩在画布上融合的抽象图案。不同于单层域变形的简单涟漪，这里有更复杂的旋涡、湍流、和层次感——因为使用了「噪声 q 扰动坐标 → 噪声 r 再扰动 → 最终噪声 n」的三层嵌套结构。",pipeline:[{step:"01",title:"第一层域变形 → q 向量场",description:"在基础 UV 上采样两次 FBM，得到二维向量 q = (qx, qy)。这个向量场描述了「第一层的流动方向」。一个采样点用时间偏移，另一个用空间偏移，让两个分量不同步——产生旋转而非纯平移。",glsl:`vec2 q = vec2(
  fbm(uv * scale + time * 0.1),
  fbm(uv * scale + vec2(1.0))
);`},{step:"02",title:"第二层域变形 → r 向量场",description:"用 q 扰动后的坐标再做两次 FBM 采样，得到 r。这是「用流动扰动流动」——第一层定义了大尺度的漩涡，第二层在漩涡内部添加小尺度的细节。时间参数略有不同（0.15 vs 0.1），让两层以不同速率旋转。",glsl:`vec2 r = vec2(
  fbm(uv * scale + q + time * 0.15),
  fbm(uv * scale + q)
);`},{step:"03",title:"最终噪声采样 → n 标量场",description:"在双重扭曲后的坐标上做最后一次 FBM，得到标量 n。这个值包含了三层扰动的累积效果——宏观旋涡 + 中观湍流 + 微观噪声细节。相比单层变形，复杂度呈指数级增长。",glsl:"float n = fbm(uv * scale + r);"},{step:"04",title:"动态 HSV 色彩映射",description:"色相 H 由「时间 + 噪声值」共同决定，产生既流动又混沌的色彩变化。时间驱动整体色轮旋转（彩虹循环），噪声让不同区域偏移不同角度（局部色相变化）。hueSpeed 控制旋转快慢。",glsl:`float hue = fract(time * hueSpeed * 0.05 + n * 0.3);
vec3 col = hsv2rgb(vec3(hue, saturation, brightness * n + 0.2));`},{step:"05",title:"幂律对比度增强",description:"用 pow(col, contrast) 调整伽马曲线。contrast > 1 压缩中间调、拉开明暗对比（高对比度），< 1 则相反（柔和渐变）。最后 × 1.4 提升整体亮度，让色彩更鲜艳。",glsl:`col = pow(col, vec3(contrast));
col *= 1.4;`}],concepts:[{name:"多层域变形",nameEN:"Multi-Layer Domain Warping",analogy:"想象用搅拌棒搅拌一缸油漆：第一次搅拌产生大漩涡，第二次搅拌在漩涡内部产生小涡流。每多搅一次，图案就多一层复杂度。多层域变形就是数学版的「反复搅拌」。",explanation:"单层：f(p + noise(p))；双层：f(p + noise(p + noise(p)))；三层：f(p + noise(p + noise(p + noise(p))))。这里用两层 q 和 r，实际产生三层效果（q 是第一层扰动，r 是第二层，最终 n 是第三层）。",whyItMatters:"这是 Inigo Quilez 2017 年文章中展示的最强大技巧之一。单层变形产生的是「云彩」，双层变形产生「烟雾/墨水」，三层变形产生「火焰/岩浆/流体」。复杂度指数增长，但代码只线性增加。"},{name:"向量场与标量场",nameEN:"Vector Field vs Scalar Field",analogy:"标量场是「温度分布图」——每个位置一个数字（温度值）。向量场是「风速图」——每个位置一个箭头（方向 + 速度）。q 和 r 是向量场（描述流动方向），n 是标量场（描述颜色亮度）。",explanation:"q 和 r 是 vec2（二维向量），用于扰动坐标。n 是 float（标量），用于映射颜色。前者定义「流动的拓扑结构」，后者定义「视觉的最终呈现」。这是流体模拟的经典分离策略。",whyItMatters:"理解向量场 vs 标量场是掌握 shader 编程的分水岭。粒子系统、流体模拟、磁场可视化都基于向量场；颜色、密度、高度都基于标量场。掌握二者的转换就能实现各种复杂效果。"},{name:"时间相位差",nameEN:"Temporal Phase Shift",analogy:"两个时钟，一个快一个慢。快的转一圈时慢的才转大半圈——它们「相位不同步」。这产生了周期性的相对运动，就像行星的「逆行现象」或「莫尔纹」。",explanation:"q 用 time * 0.1，r 用 time * 0.15。两层以不同速率旋转，产生复杂的相对运动。当一层顺时针、另一层逆时针时，交界处产生剪切应力——这就是湍流的视觉化。",whyItMatters:"同步运动看起来机械、僵硬；相位差产生有机感。这是动画中的「次要动作」（secondary action）原理——主要角色停下时，衣服、头发还在摇摆。自然界的复杂运动都源于多层相位差的叠加。"},{name:"幂律对比度",nameEN:"Power-Law Contrast",analogy:"Photoshop 的 Curves 工具：直线是线性映射（无变化），向上凸是提亮暗部（低对比度），向下凹是压暗中间调（高对比度）。pow(x, γ) 就是数学版的 Curves。",explanation:"γ < 1 相当于开根号，拉高暗部（去雾）；γ > 1 相当于平方，压低中间调（增加对比度）。γ = 2.2 是标准的 sRGB 伽马校正。这里用可调的 contrast 参数让用户控制视觉风格。",whyItMatters:"线性颜色空间在人眼看来不自然（太平淡）。几乎所有显示器、照片、电影都使用非线性伽马曲线。理解幂律映射是理解「为什么屏幕上的颜色和代码里的值不一样」的关键。"}],applications:[{field:"UI 背景",examples:"登录页、App 启动屏、PPT 背景——比静态渐变更有生命力，比视频更轻"},{field:"品牌视觉",examples:"产品发布会动态背景、品牌形象视频、社交媒体头图"},{field:"音乐可视化",examples:"低频 → speed、中频 → hueSpeed、高频 → contrast，实时反应音频"},{field:"NFT 生成艺术",examples:"用 token ID 作为随机种子，生成唯一的流体图案，on-chain 存储参数"}],keyInsight:"单层域变形和双层域变形的区别，不是 1 vs 2 的线性差异，而是「简单」与「复杂」的质变跨越。自然界的复杂性（云、水波、岩石纹理）都源于多尺度过程的叠加——大气环流 + 局部气压 + 微观湍流 = 云朵；板块运动 + 地壳断裂 + 矿物结晶 = 大理石纹理。这个 shader 用 20 行代码复现了自然界亿万年的演化规律。"},neuro:{id:"neuro",title:"NeuroFlow",subtitle:"赛博朋克神经流",oneLiner:"用 Simplex 噪声 + 色相旋转 + 动态线条模拟赛博朋克的数据流视觉",whatYouSee:"深色背景上流淌着青色和品红色的抽象数据流，像科幻电影中的「神经网络可视化」或「黑客帝国的数据瀑布」。整个画面由两层域变形产生流动感，再叠加周期性的发光线条——线条沿着噪声场的等高线分布，像电路板上的走线或脑神经元的突触连接。",pipeline:[{step:"01",title:"Simplex Noise 基础",description:"不同于简单的 hash 噪声，Simplex Noise 是 Ken Perlin 2001 年改进的高质量噪声算法。它基于单纯形网格（三角形/四面体）而非方形网格，消除了方向性偏差，梯度更连续。结果是更平滑、更自然的噪声纹理。",glsl:`float snoise(vec2 v) {
  // 单纯形网格计算
  vec2 i = floor(v + dot(v, C.yy));
  // ... 复杂的排列组合
  return 130.0 * dot(m, g);
}`},{step:"02",title:"旋转 FBM",description:"每层 FBM 迭代时，不是简单地缩放坐标，而是用旋转矩阵（rot）扭转 + 平移（shift）。这打破了网格的规律性，让噪声更有机、更流动。5 层叠加后产生从宏观到微观的丰富细节。",glsl:`mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
for (int i = 0; i < 5; i++) {
  v += a * snoise(st);
  st = rot * st * 2.0 + shift;
  a *= 0.5;
}`},{step:"03",title:"双层域变形 q & r",description:"q 向量用两次独立的 FBM（偏移不同种子）构成，定义「第一层流动」。r 向量在 q 扰动后的坐标上再做 FBM，产生「流动中的流动」。complexity 参数控制 q 对 r 的影响强度——高复杂度让图案更混沌。",glsl:`vec2 q = vec2(fbm(st), fbm(st + vec2(1.0)));
float complexFactor = 0.5 + 0.5 * complexity;
vec2 r = vec2(
  fbm(st + q*complexFactor + vec2(1.7,9.2) + t),
  fbm(st + q*complexFactor + vec2(8.3,2.8) + t)
);`},{step:"04",title:"色相旋转映射",description:"不是简单的颜色插值，而是用 RGB → 色相空间旋转 → RGB 的方法。hueShift 用 Rodrigues 旋转公式在 RGB 空间中旋转颜色向量。青色和品红色基调经过旋转后可以平滑过渡到任意色相组合，保持赛博朋克的双色对比风格。",glsl:`vec3 hueShift(vec3 color, float hue) {
  const vec3 k = vec3(0.57735); // 归一化轴
  float cosA = cos(hue);
  return color * cosA + cross(k, color) * sin(hue)
    + k * dot(k, color) * (1.0 - cosA);
}`},{step:"05",title:"动态发光线条",description:"用 sin(f * 频率 + 时间) 在噪声场上生成周期性波纹，smoothstep(0.9, 0.95, ...) 提取波峰形成细线。两组线条（line1 基于 f，line2 基于 r.y）相位不同，产生交织的闪烁效果。线条颜色是基础色 + 额外亮度，形成霓虹灯管的发光感。",glsl:`float line1 = smoothstep(0.9, 0.95, 
  sin(f * 50.0 * complexity + t * 2.0));
color += (col1 + 0.4) * line1 * 0.3 * contrast;`}],concepts:[{name:"Simplex Noise",nameEN:"Simplex Noise",analogy:"Perlin Noise 是在方形网格上插值（想象方格纸），Simplex 是在三角形网格上插值（想象六边形蜂窝）。三角形比方形更「对称」——没有对角线方向和轴向方向的差别，所以噪声更均匀、更自然。",explanation:"2D Simplex 将平面划分为等边三角形网格。每个三角形的三个顶点有随机梯度向量，任意点的噪声值是这三个梯度的加权插值。相比 Perlin 的 4 点插值（方形），Simplex 只需 3 点，计算更快且质量更高。",whyItMatters:"这是现代游戏引擎（Unity、Unreal）默认的噪声算法。Minecraft 的地形生成、《无主之地》的程序化武器纹理都用它。比 Perlin 快 20-30%，且没有方向性伪影。"},{name:"色相旋转",nameEN:"Hue Rotation",analogy:"想象一个色轮（彩虹圆环）。色相旋转就是「转动色轮」——红色转 60° 变黄色，黄色转 60° 变绿色。这比 RGB 插值更自然，因为保留了颜色的「纯度」和「亮度」，只改变「色调」。",explanation:"用 Rodrigues 公式在 RGB 空间中绕 (1,1,1) 轴旋转颜色向量。公式：v' = v*cosθ + (k×v)*sinθ + k(k·v)(1-cosθ)。这等价于 RGB → HSV → 旋转 H → RGB，但避免了显式的色彩空间转换。",whyItMatters:"Instagram/Photoshop 的「色相」滑块就是这个。游戏中的「换肤系统」（同一个模型换不同颜色）、UI 主题色切换都用色相旋转。它保证颜色变化平滑且可预测。"},{name:"等高线提取",nameEN:"Isoline Extraction",analogy:"地形图上的等高线——相同海拔的点连成的曲线。这里用 sin 函数在噪声场上生成周期性波纹，smoothstep 提取波峰，就得到了「噪声等高线」。它自动沿着流动方向弯曲。",explanation:"sin(f * freq) 将标量场 f 映射为周期函数。当 sin 接近 1 时（波峰），smoothstep(0.9, 0.95, sin(...)) 输出接近 1，形成亮线。调整 freq 控制线条密度，调整 smoothstep 范围控制线条粗细。",whyItMatters:"这是科学可视化的经典技巧（等温线、等压线、电场线）。游戏中的「扫描特效」「全息投影」「电磁脉冲」都用这招。比手绘纹理更灵活，且自动适应拓扑结构。"},{name:"加法合成光效",nameEN:"Additive Light Synthesis",analogy:"舞台上的多盏彩色射灯。每盏灯单独很暗，但光束重叠处亮度叠加。赛博朋克的「霓虹灯管」就是这个原理——深色背景 + 加法发光 = 明暗对比强烈的科幻感。",explanation:"不是用 mix() 混合颜色（会变灰），而是用 += 直接累加（会变亮）。线条的亮度 = 基础色 + 发光项。多条线重叠处亮度翻倍，产生「过曝」的霓虹效果。这模拟了真实光源的物理行为。",whyItMatters:"游戏引擎的 Bloom、God Rays、Particle Systems 都基于加法混合。Photoshop 的「线性减淡（添加）」图层模式就是它。理解加法 vs 乘法混合是掌握光效合成的关键。"}],applications:[{field:"品牌视觉",examples:"科技公司官网背景、产品发布会屏幕、游戏 UI 背景"},{field:"音乐可视化",examples:"电子音乐 MV、DJ 演出背景、音频反应式 VJ 素材"},{field:"UI/UX",examples:"加载动画、数据传输效果、「黑客风格」仪表盘背景"},{field:"影视后期",examples:"赛博朋克电影片头、科幻剧集转场、虚拟现实场景"}],keyInsight:"赛博朋克视觉的本质是「高对比度 + 双色互补 + 几何线条」。NeuroFlow 用数学手段完美复现了这个公式：深色背景提供对比度，色相旋转产生青/品红互补色，噪声等高线生成有机的几何线条。这不是「画」出来的赛博朋克，而是「生长」出来的——每一帧都是实时计算的独特图案，永不重复。"},neonwave:{oneLiner:"飞行在霓虹地形波浪之上，体验赛博朋克的无尽之旅。",whatYouSee:"你正在以第一人称视角向前飞行，穿过一片由霓虹色彩构成的起伏地形。地面不是平整的，而是像海浪一样不断起伏，形成连绵的山峰和谷地。颜色从远处的青绿色渐变为近处的紫红色，整个画面充满了 80 年代复古未来主义的氛围。天空是深邃的蓝紫色，远方有柔和的光晕。你的飞行速度可以调节，地形的高度和平滑度也能实时改变，给人一种在赛博空间中漫游的沉浸感。",pipeline:[{step:"1. 生成地形高度场",analogy:"想象用分形布朗运动（FBM）在一张无限画布上绘制地形轮廓。就像堆沙子——先堆大的山丘（低频噪声），再在上面撒小颗粒（高频噪声），叠加 5 次，形成自然的起伏。",code:`float hifbm(vec2 p) {
  float sum = 0.0; float a = 1.0;
  for (int i = 0; i < 5; ++i) {
    sum += a*vnoise(p);  // 累加不同频率的噪声
    a *= 0.5;  // 振幅减半
    p *= 2.0;  // 频率加倍
  }
  return sum;
}
float hiheight(vec2 p) { return hifbm(p) - uHeight; }`,whyHere:"FBM 是程序化地形生成的黄金标准。5 层迭代平衡了细节丰富度和性能——Minecraft 用 6 层，《无人深空》用 8 层。uHeight 参数让你控制整体海拔，改变飞行的相对高度。"},{step:"2. 堆叠 12 层平面",analogy:"把地形切成 12 片平行的薄片，像翻页动画一样逐层渲染。摄像机向前移动时，旧平面从后方消失，新平面从前方出现，制造连续飞行的幻觉。",code:`const int furthest = 12;
for (int i = 1; i <= furthest; ++i) {
  float pz = planeDist*nz + planeDist*float(i);
  float pd = (pz - ro.z)/rd.z;  // 射线与平面相交距离
  vec3 pp = ro + rd*pd;  // 交点位置
  vec4 pcol = plane(ro, rd, pp, npp, vec3(0.0), nz+float(i));
  acol = alphaBlend(pcol, acol);  // Alpha 混合
}`,whyHere:"这是 raymarching 的简化版——不需要迭代求交，直接计算射线与每个平面的精确交点。12 层是视觉流畅度和性能的平衡点——太少会看到层与层之间的跳跃，太多会降低帧率。"},{step:"3. 用 FBM 高度决定可见性",analogy:"在每个平面上，用 FBM 计算该点的高度。如果射线交点低于地形高度，说明这个点在「地下」，应该显示地面颜色；如果高于地形高度，说明在「空中」，透明不显示。smoothstep 让边缘柔和过渡。",code:`float he = hiheight(vec2(p.x, pp.z)*stp);
float d = p.y - he;  // 交点与地形的高度差
float aa = distance(pp, npp)*sqrt(1.0/3.0);  // 抗锯齿阈值
float t = smoothstep(aa * uSmoothness, -aa * uSmoothness, d);`,whyHere:"这是 SDF（Signed Distance Field）渲染的核心。d > 0 表示在地表之上（透明），d < 0 表示在地表之下（不透明）。smoothstep 在边缘 ±aa 范围内过渡，消除了锯齿，让地形看起来平滑。uSmoothness 控制过渡宽度——值越大越柔和。"},{step:"4. HSV 渐变着色",analogy:"根据距离摄像机的远近，用 HSV 色彩空间生成渐变。远处偏青色（色相 0.9），近处偏紫红色（色相 0.6），饱和度和亮度也随距离衰减，营造景深感。",code:`float df = exp(-0.1*(distance(ro, pp)-2.));  // 距离衰减因子
vec3 acol = hsv2rgb(vec3(
  mix(0.9, 0.6, df),  // 色相：远 0.9（青）→ 近 0.6（紫）
  0.9,  // 饱和度固定为 0.9
  mix(1.0, 0.0, df)  // 亮度：远 1.0（亮）→ 近 0.0（暗）
));`,whyHere:"HSV 比 RGB 更适合做渐变——只需改变 H（色相）就能平滑过渡颜色，保持鲜艳度。exp(-0.1*dist) 是物理上的距离雾公式，比线性衰减更自然。这个颜色方案直接致敬了 80 年代的 Synthwave 美学。"},{step:"5. ACES 色调映射 + Gamma 校正",analogy:"ACES 是好莱坞电影工业标准的色调映射算法，能压缩 HDR 的明亮区域，同时保留细节。就像给照片加了电影滤镜——高光不会过曝，暗部不会死黑。Gamma 校正确保颜色在显示器上看起来准确。",code:`// ACES Tonemap
col = max(col, 0.0);
col *= 0.6;  // 降低整体亮度
float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
col = clamp((col*(a*col+b))/(col*(c*col+d)+e), 0.0, 1.0);
// Gamma 校正
col = pow(col, vec3(1.0/2.2));`,whyHere:"ACES 让霓虹色不会「爆掉」——即使 HSV 生成的原始值很高，映射后也保持在合理范围。2.2 是 sRGB 标准的 Gamma 值，所有现代显示器都用这个。没有 Gamma 校正，画面会偏暗偏灰。"}],concepts:[{name:"平面堆叠 Raymarching",nameEN:"Plane-Stacking Raymarching",analogy:"传统 raymarching 像盲人摸象——从摄像机出发，一步步向前试探，直到碰到物体。平面堆叠像解析几何——直接计算射线与每个平面的交点，跳过中间过程。就像知道答案直接写结果，而不是一步步演算。",explanation:"对于平行于 XY 平面的无限大平面，射线与平面的交点可以精确求解：pz = planeDist * n, pd = (pz - ro.z) / rd.z, pp = ro + rd * pd。只需 12 次计算（12 个平面），而传统 raymarching 可能需要 100+ 次迭代。",whyItMatters:"这是「知道答案就不要瞎猜」的典范。适用于所有可以解析求交的几何体（球体、圆柱、平面）。《Tron: Legacy》的数字世界、《黑客帝国》的代码雨都用了类似技巧——预先知道几何结构，避免昂贵的迭代。"},{name:"FBM 分形噪声",nameEN:"Fractal Brownian Motion",analogy:"大自然的纹理（树皮、云彩、山脉）都有「自相似性」——远看是大轮廓，近看是小细节，放大后小细节又有更小的细节。FBM 就是用数学复现这个规律：叠加不同频率的噪声，频率每次翻倍，振幅每次减半。",explanation:"公式：f(p) = Σ(a^i * noise(2^i * p))，其中 a 通常取 0.5。每一项称为一个「八度」（octave）。5 个八度意味着叠加了 5 个频率：1x, 2x, 4x, 8x, 16x。低频控制大轮廓，高频添加细节。",whyItMatters:"这是程序化内容生成（PCG）的基石。《我的世界》的地形、《无人深空》的星球、《上古卷轴》的岩石纹理都基于 FBM。Ken Perlin（Perlin Noise 发明者）凭这项技术获得了奥斯卡技术成就奖。"},{name:"HSV 色彩空间",nameEN:"HSV Color Space",analogy:"RGB 像混颜料——红+绿=黄，不直观。HSV 像调色盘——H（色相）选颜色（红/橙/黄/绿...），S（饱和度）控制鲜艳度（鲜艳↔灰），V（明度）控制亮度（亮↔暗）。调色时更符合人脑思维。",explanation:"H 是 0-360° 的圆环（0°红, 120°绿, 240°蓝）。S 和 V 是 0-1 的比例。转换到 RGB 需要分段函数（6 个扇区），但 GPU 能并行处理。这个 shader 用 HSV 做渐变，因为只需改变 H 值就能平滑过渡颜色。",whyItMatters:"Photoshop/GIMP 的色相滑块、游戏中的装备染色、UI 主题色系统都基于 HSV。理解 HSV 是做视觉设计的关键——比如「保持亮度不变，只改变色相」（换肤）或「保持色相不变，降低饱和度」（失色效果）。"},{name:"指数距离雾",nameEN:"Exponential Distance Fog",analogy:"现实中的雾不是均匀的——近处清晰，远处逐渐模糊，越远越模糊。指数衰减 exp(-k*d) 完美符合这个规律：距离 d 加倍时，能见度不是减半，而是平方级衰减，更真实。",explanation:"公式：visibility = exp(-density * distance)。density 控制雾的浓度——值越大雾越浓。这里用 exp(-0.1*(dist-2.0))，2.0 是偏移量，让近处（<2 单位）不受影响。df 用于调制颜色，让远处的颜色更暗更偏青色。",whyItMatters:"游戏引擎（Unity/Unreal）的「指数高度雾」就是它。比线性雾（mix(near, far, t)）更真实，因为符合光在介质中传播的物理规律（Beer-Lambert 定律）。恐怖游戏用浓雾营造压迫感，开放世界游戏用淡雾隐藏远处的 LOD 切换。"},{name:"ACES 色调映射",nameEN:"ACES Tonemapping",analogy:"HDR 照片的亮度范围远超显示器——太阳可能是黑暗的 10000 倍。色调映射就是「压缩亮度」——保留细节的同时，把 HDR 塞进显示器的 0-1 范围。ACES 是好莱坞标准，让高光不刺眼，暗部有层次。",explanation:"公式：col' = (col*(a*col+b)) / (col*(c*col+d)+e)，其中 a=2.51, b=0.03, c=2.43, d=0.59, e=0.14 是精心调校的系数。这是 S 型曲线——低亮度线性映射，高亮度渐进压缩。比简单的 clamp(col, 0, 1) 保留更多细节。",whyItMatters:"《神秘海域 4》《地平线：零之曙光》等 3A 游戏都用 ACES。它让 CG 画面有「电影感」——高光柔和，色彩饱满。理解色调映射是掌握 HDR 渲染的第一步，也是区分「游戏画面」和「电影级画质」的关键。"}],applications:[{field:"游戏场景",examples:"赛博朋克飞行关卡、科幻竞速游戏背景、VR 飞行体验"},{field:"音乐可视化",examples:"Synthwave 音乐 MV、电子音乐节 VJ 素材、音频反应式背景"},{field:"品牌视觉",examples:"科技公司产品发布会背景、游戏启动画面、元宇宙入口动画"},{field:"艺术创作",examples:"生成艺术作品、NFT 动态背景、数字装置艺术投影"}],keyInsight:"Neonwave 的核心洞察是「空间错觉 = 解析几何 + 分形细节 + 色彩心理学」。平面堆叠用初中几何（直线与平面求交）创造无限空间感，FBM 用高中数列（等比数列求和）生成自然地形，HSV 渐变用色彩理论（冷暖对比）强化景深。这不是暴力计算的 3D 场景，而是巧妙设计的 2.5D 幻觉——用最少的数学，营造最强的沉浸感。80 年代的计算机做不到真 3D，但程序员们用这种技巧在 Apple II 和 Commodore 64 上创造了赛博朋克美学的原型。"},neontext:{oneLiner:"在浩瀚宇宙中，一颗巨型星球表面浮现出发光的「NEON」文字。",whatYouSee:"你正在一片深邃的夜空中飞行，眼前出现一颗巨大的球体，就像月球一样悬浮在远方。但这不是普通的星球——它的表面用明亮的粉紫色霓虹灯勾勒出「NEON」四个字母，每个字母都由线段构成，像是用激光在球面上刻画。文字随着球体的曲率弯曲，具有真实的 3D 透视感。球体本身散发淡淡的紫色光晕，作为底色衬托文字。下方仍然有霓虹地形飞过，但亮度降低，不抢镜。你可以调节文字的发光强度、大小，以及地形的明暗对比。",pipeline:[{step:"1. 射线与球体求交",analogy:"想象你从摄像机向前射出一条光线（射线），它会不会击中那颗巨大的球体？这是解析几何问题——球体方程 (x-cx)²+(y-cy)²+(z-cz)²=r²，射线方程 p=ro+t*rd，联立求解得到交点距离 t。",code:`vec2 raySphere(vec3 ro, vec3 rd, vec4 sph) {
  vec3 oc = ro - sph.xyz;  // 摄像机到球心向量
  float b = dot(oc, rd);
  float c = dot(oc, oc) - sph.w*sph.w;  // sph.w 是半径
  float h = b*b - c;  // 判别式
  if(h < 0.0) return vec2(-1.0);  // 不相交
  h = sqrt(h);
  return vec2(-b - h, -b + h);  // 近交点和远交点
}`,whyHere:"这是计算机图形学第一课的内容。球体是唯一能解析求交的复杂几何体（比多边形简单得多）。返回两个 t 值：近交点（射线进入球体）和远交点（射线离开球体）。这里只用近交点来渲染球体表面。"},{step:"2. 球面坐标映射",analogy:"地球仪上的经纬度——任何一个点都能用（纬度 θ, 经度 φ）表示。这里把 3D 球面坐标转换为 2D 纹理坐标（UV），就像把地球展开成平面地图。文字就「画」在这个 2D 坐标系上。",code:`vec3 toSpherical(vec3 p) {
  float r = length(p);  // 半径（距原点距离）
  float t = acos(p.z/r);  // 纬度角（0 到 π）
  float ph = atan(p.y, p.x);  // 经度角（-π 到 π）
  return vec3(r, t, ph);
}
vec2 sp = toSpherical(-mnor.zxy).yz;  // 取经纬度
sp.x -= PI*0.5;  // 旋转坐标系
sp *= 2.0;  // 缩放文字`,whyHere:"这是纹理映射的数学基础。球面坐标避免了极点的奇异性（比 UV 映射更稳定）。这里用法线方向 mnor 而不是位置，确保文字「贴」在球面上，不会因为球体移动而错位。"},{step:"3. SDF 文字渲染",analogy:"SDF（Signed Distance Field）就是「到最近边缘的距离」。对于字母「E」，屏幕上每个点都计算「我离 E 的笔画最近有多远」。距离小于某个阈值（比如 0.05）就点亮，形成字母形状。",code:`float sdSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p-a, ba = b-a;
  float h = clamp(dot(pa,ba)/dot(ba,ba), 0.0, 1.0);  // 投影比例
  return length(pa - ba*h);  // 点到线段的距离
}
float sdText(vec2 p) {
  float d = 100.0;
  // 字母 N：三条线段（左竖、右竖、对角线）
  vec2 p1 = p - vec2(-0.6, 0.0);
  float n = min(sdSegment(p1, vec2(-0.2,-0.3), vec2(-0.2,0.3)), ...);
  d = min(d, n);
  // ... 类似地绘制 E, O, N
  return smoothstep(w, w*0.8, d);  // 柔和边缘
}`,whyHere:"SDF 是现代字体渲染的黄金标准。传统位图字体放大会模糊，SDF 永远清晰。Valve 在 2007 年的论文让这项技术流行——《传送门 2》《Dota 2》的 UI 字体都用 SDF。这里手绘「NEON」四个字母，虽然代码长，但渲染极快。"},{step:"4. 霓虹发光效果",analogy:"真实的霓虹灯管有两层：内部的灯丝（高亮核心）+ 外部的辉光（柔和光晕）。这里用 SDF 值控制亮度——靠近字母中心亮度高（模拟灯丝），远离中心亮度衰减（模拟辉光）。",code:`float txt = sdText(sp);  // 0-1，1 表示在字母内
vec3 neonCol = vec3(1.0, 0.1, 0.8) * uTextGlow * txt;  // 粉紫色 * 强度
vec3 baseCol = hsv2rgb(vec3(0.75, 0.7, 0.2));  // 球体底色（淡紫）
vec3 col = baseCol + neonCol;  // 叠加发光`,whyHere:"这是加法混合（Additive Blending）的典型应用。不是用 mix() 混合（会变灰），而是用 + 累加（会变亮）。真实霓虹灯的物理原理就是加法——气体发光叠加在管壁反射上。uTextGlow 参数让你控制霓虹强度，从微弱到炫目。"},{step:"5. 地形与球体合成",analogy:"画面是三层合成：最底层是深色天空，中间层是飞行地形（亮度降低，不抢镜），最上层是发光球体。用 Alpha 混合（透明度混合）按从后到前的顺序叠加，就像 Photoshop 的图层系统。",code:`vec4 plane(vec3 ro, vec3 rd, vec3 pp, vec3 npp, vec3 off, float n) {
  // ... 地形渲染（同 Neonwave）
  vec3 acol = hsv2rgb(vec3(mix(0.8, 0.6, df), 0.8,
    mix(0.5, 0.0, df) * uTerrainBrightness));  // 降低亮度
  return vec4(acol, t);
}
vec3 skyColor(vec3 ro, vec3 rd) {
  vec4 mcol = moon(ro, rd);  // 球体颜色 + Alpha
  vec3 col = vec3(0.05, 0.0, 0.1);  // 深色天空
  col = mix(col, mcol.xyz, mcol.w);  // Alpha 混合
  return col;
}`,whyHere:"这是经典的 Alpha 合成公式：col_final = col_back * (1-alpha) + col_front * alpha。mcol.w 是球体的透明度（边缘处为 0，中心处为 1），确保球体边缘柔和过渡。uTerrainBrightness 参数让你压暗地形，突出球体主体。"}],concepts:[{name:"SDF 符号距离场",nameEN:"Signed Distance Field",analogy:"想象你站在一个封闭房间里，SDF 就是「我离最近的墙有多远，方向是哪」。距离为正表示在外面（透明），为负表示在里面（不透明），为零表示在边界上（边缘）。这个「距离地图」包含了形状的全部信息。",explanation:"对于线段 AB，点 P 的 SDF = length(P - closest_point_on_AB)。对于组合形状（如字母 E），SDF = min(所有笔画的 SDF)。SDF 的优势是：1) 可以任意缩放不失真，2) 可以高效地做形状运算（并集/交集/差集），3) 自带抗锯齿（用 smoothstep）。",whyItMatters:"Valve 的 2007 年论文《Improved Alpha-Tested Magnification for Vector Textures and Special Effects》让 SDF 流行。现代游戏（《军团要塞 2》《Dota 2》）和 UI 框架（Flutter、Figma）都用 SDF 渲染文字和图标。它是矢量图形在实时渲染中的最优解。"},{name:"球面坐标系",nameEN:"Spherical Coordinates",analogy:"用（半径 r, 纬度 θ, 经度 φ）描述 3D 空间中的点，就像用「北纬 39°, 东经 116°」定位北京。θ=0 是北极，θ=π 是南极，φ=0 是本初子午线。球面坐标让球体上的计算变简单——纹理映射、旋转、对称性都能直接表达。",explanation:"转换公式：x=r*sin(θ)*cos(φ), y=r*sin(θ)*sin(φ), z=r*cos(θ)。反过来：r=√(x²+y²+z²), θ=acos(z/r), φ=atan(y, x)。这里用球面坐标的 (θ, φ) 作为 2D 纹理坐标，把文字「贴」到球面上，避免了极点的畸变问题。",whyItMatters:"物理学（电磁场、引力场）、天文学（星图投影）、3D 建模（UV 展开）都离不开球面坐标。在 shader 中，它用于全景天空盒、行星渲染、辐射光源。理解球面坐标是掌握 3D 空间变换的关键一步。"},{name:"射线-球体求交",nameEN:"Ray-Sphere Intersection",analogy:"射线是「从一点出发，沿固定方向无限延伸的直线」。球体是「所有离球心距离等于半径的点」。求交就是解方程：(ro + t*rd - center)² = radius²。这是一元二次方程，用求根公式就能精确求解。",explanation:"展开后得到：t² + 2*dot(oc, rd)*t + (dot(oc, oc) - r²) = 0，其中 oc = ro - center。判别式 Δ = b² - 4ac 决定：Δ<0 不相交，Δ=0 相切，Δ>0 两个交点。t₁ = (-b - √Δ)/2 是近交点，t₂ = (-b + √Δ)/2 是远交点。",whyItMatters:"这是光线追踪（Raytracing）的第一课。《玩具总动员》（1995，Pixar 第一部 CG 电影）就用这个算法渲染球形物体。现代 GPU 的硬件光追（RTX）也是基于射线求交，只不过加速结构更复杂。理解这个是学习高级渲染（全局光照、反射折射）的基础。"},{name:"加法混合",nameEN:"Additive Blending",analogy:"舞台上的聚光灯——红灯 + 绿灯 = 黄光，多盏灯重叠处亮度累加。这不同于颜料混合（红+绿=棕），而是光的物理叠加。加法混合让发光物体看起来「真的在发光」，而不是「画了个亮色」。",explanation:"公式：col_final = col_back + col_front。注意没有乘 (1-alpha)，直接累加。这模拟了光子的累积效应。多个发光源重叠时，亮度可以超过 1.0（需要色调映射压缩）。在 GPU 中，用 glBlendFunc(GL_ONE, GL_ONE) 实现。",whyItMatters:"游戏引擎的粒子特效（火焰、爆炸、魔法）、Bloom 后处理、镜头光晕都基于加法混合。Photoshop 的「线性减淡（添加）」图层模式就是它。理解加法 vs 乘法 vs Alpha 混合是做视觉特效的基本功——用错了混合模式，效果天差地别。"},{name:"双层渲染合成",nameEN:"Multi-Pass Compositing",analogy:"动画制作的「赛璐珞叠片」——背景层画天空和地面，前景层画角色，叠在一起拍摄。这里也是：第一遍渲染地形（plane pass），第二遍渲染球体（moon pass），最后用 Alpha 混合合成。",explanation:"先循环 12 次渲染地形平面，用 alphaBlend(pcol, acol) 累积颜色。再调用 moon(ro, rd) 渲染球体，返回 vec4(color, alpha)。最后 skyColor 中用 mix(sky, moon, moon.a) 叠加。这是从后到前（back-to-front）的画家算法（Painter's Algorithm）。",whyItMatters:"这是实时渲染的经典技巧——先渲染不透明物体（深度测试），再渲染半透明物体（Alpha 混合）。延迟渲染（Deferred Rendering）也是类似思想：先渲染几何，再渲染光照，最后合成。理解多遍渲染是优化性能和效果的关键。"}],applications:[{field:"品牌标识",examples:"游戏启动画面、产品发布会片头、品牌宣传片 Logo 动画"},{field:"UI/UX",examples:"加载界面、启动动画、App 引导页、AR 空间标签"},{field:"艺术装置",examples:"博物馆互动展览、音乐节舞台视觉、城市灯光秀投影"},{field:"游戏场景",examples:"科幻游戏任务提示、赛博朋克广告牌、太空探索游戏星球标识"}],keyInsight:"Neon Text 的核心洞察是「3D 幻觉 = 2D 技巧 + 正确的数学映射」。球面看起来是 3D，但实际上用解析几何（射线-球体求交）精确计算交点，避免了昂贵的体积渲染。文字看起来在球面上弯曲，但实际上是 2D SDF（平面几何）投影到球面坐标系（微分几何）。这种「降维攻击」的思想贯穿计算机图形学——用低维精确解代替高维暴力搜索。正是这些数学优雅性，让 80 年代的程序员能在 8MHz CPU 上渲染出星际场景，启发了后来的《精英》《星际争霸》等经典游戏。"},aurora:{oneLiner:"飞行穿越梦幻极光云层，体验大自然最美的光影奇迹。",whatYouSee:"你正在一片深邃的夜空中飞行，周围被柔和的半透明云层环绕。这些云层不是普通的白色，而是绿色到紫色的渐变，像极光一样流动变幻。云层非常稀薄，有强烈的体积感——你能看穿它们，仿佛在雾中穿行。云层随着你的前进缓缓波动，像海浪一样起伏，但又比海浪更轻盈梦幻。颜色会周期性地从翠绿色过渡到深紫色，营造出神秘的氛围。你可以调节云层的飘动速度、颜色变化节奏和透明度，从飘渺仙境到浓郁迷雾任意切换。",pipeline:[{step:"1. 低频噪声生成柔和云层",analogy:"FBM 有两种用法：高频（5 层迭代）生成细腻纹理（如 Neonwave 地形），低频（2 层迭代）生成柔和大块（如云团）。想象用粗毛刷画水彩——只有大块色彩晕染，没有锐利细节，正适合表现飘渺的极光云。",code:`float lofbm(vec2 p) {
  float sum = 0.0; float a = 1.0;
  for (int i = 0; i < 2; ++i) {  // 只迭代 2 次
    sum += a*vnoise(p);
    a *= 0.5; p *= 2.0;
  }
  return sum;
}
float cloudNoise(vec2 p) {
  return lofbm(p * 0.5);  // 再降低频率
}`,whyHere:"云层需要「大气感」——大块飘动，边缘模糊，没有锐利细节。2 层 FBM 是最低配置（再少就失去自然感），0.5 系数进一步降低频率。这比 Neonwave 的 5 层 FBM 快 2.5 倍，适合半透明体积渲染（需要多层叠加）。"},{step:"2. 波动函数模拟云层起伏",analogy:"云层不是静止的平面，而是像海浪一样缓慢起伏。用 sin 函数生成周期性波动——随着 z 坐标（深度）和时间变化，云层高度上下波动，形成「云海翻腾」的动态效果。",code:`float wave = sin(pp.z * 0.2 + iTime * uWaveSpeed) * 1.0;
float he = cloudNoise(vec2(p.x, pp.z)) * 2.0 - 2.0 + wave;`,whyHere:"sin(z*freq + t*speed) 是周期运动的标准公式。freq=0.2 控制波长（值越大波浪越密），speed=uWaveSpeed 控制速度，振幅 1.0 控制高度变化。这个简单的正弦波让静态噪声「活」起来，仿佛云层在呼吸。"},{step:"3. 极度柔和的 Smoothstep",analogy:"Neonwave 的地形边缘锐利（smoothstep 阈值 ±aa），但云层要飘渺，需要极宽的过渡区（±aa ± 1.5）。就像毛玻璃 vs 透明玻璃——毛玻璃的模糊区域很宽，让物体边界完全消失。",code:`float aa = distance(pp, npp) * sqrt(1.0/3.0);
float t = smoothstep(aa + 1.5, -aa - 1.5, d);  // ±1.5 扩大过渡区`,whyHere:"正常 smoothstep(a, b, x) 在 [a, b] 区间内从 0 过渡到 1。这里 [aa+1.5, -aa-1.5] 是很宽的区间（约 3 单位），让云层边缘极度模糊。这是体积渲染的关键——不是渲染「表面」，而是渲染「密度场」，厚度决定不透明度。"},{step:"4. 绿紫渐变 + 周期切换",analogy:"真实的极光颜色随海拔和太阳风强度变化——低层绿色（氧气），高层紫色/红色（氮气）。这里用 sin 函数周期性地在绿色（0,1,0.5）和紫色（0.5,0,1）之间切换，模拟极光的「呼吸」效果。",code:`vec3 colA = vec3(0.0, 1.0, 0.5);  // 绿色
vec3 colB = vec3(0.5, 0.0, 1.0);  // 紫色
float mixFactor = 0.5 + 0.5 * sin(pp.z * 0.1 + iTime + uColorShift);
vec3 col = mix(colA, colB, mixFactor);`,whyHere:"sin 输出 [-1,1]，0.5+0.5*sin 归一化到 [0,1]，用于 mix。mixFactor 随 z（深度）和时间变化，让不同云层显示不同颜色，且颜色沿 z 轴渐变。uColorShift 参数让你「快进」颜色循环，或固定在某个色调。"},{step:"5. 高度衰减 + 半透明叠加",analogy:"云层中心最亮（密度高），边缘最暗（密度低）。用 exp(-k*|d|) 衰减亮度——d 是点到云层中心的距离，越远越暗。最后乘以 0.4 的低透明度，让云层像薄纱一样半透明，能看穿多层。",code:`col *= exp(-0.5 * abs(d));  // 高度差越大越暗
return vec4(col, t * uOpacity);  // t 是形状 mask, uOpacity 控制总透明度`,whyHere:"exp(-k*|d|) 是体积渲染的密度衰减公式——靠近云层中心（d≈0）时 exp(0)=1 全亮，远离中心（|d|大）时 exp(-大数)≈0 全暗。uOpacity=0.4 让云层半透明，12 层云叠加后总透明度约 1-(1-0.4)¹²≈99.99%，既有体积感又不会完全遮挡背景。"}],concepts:[{name:"体积渲染",nameEN:"Volumetric Rendering",analogy:"传统渲染画「表面」（如球体、平面）——要么不透明，要么透明。体积渲染画「介质」（如烟雾、云、水下）——每个点都有「密度」，光线穿过时逐渐衰减。就像在雾中开车，能见度随雾浓度降低。",explanation:"对于半透明云层，透明度 α 不是 0/1 二值，而是由密度场决定：α(p) = density(p) * smoothness。12 层云叠加时，用前向混合（front-to-back）或后向混合（back-to-front）累积颜色。这里用 Alpha 混合：col_final = col_cloud * α + col_back * (1-α)。",whyItMatters:"体积渲染是电影级 VFX 的核心——《阿凡达》的潘多拉丛林雾气、《星际穿越》的黑洞吸积盘、《银翼杀手 2049》的橙色雾霾都用它。游戏中的体积光（God Rays）、水下焦散（Caustics）也基于这个原理。理解体积渲染是区分「平面贴图」和「真实介质」的关键。"},{name:"低频 FBM",nameEN:"Low-Frequency FBM",analogy:"音乐中的「低音」（Bass）和「高音」（Treble）——低音震撼但不刺耳，高音清晰但不厚重。FBM 也是：高频（5+ 层）生成细腻纹理（树皮、岩石），低频（2-3 层）生成柔和大块（云团、水波）。",explanation:"FBM 的频率由迭代次数决定：1 层只有基础频率，5 层叠加了 1x, 2x, 4x, 8x, 16x。这里只用 2 层（1x + 2x），且再乘 0.5 降低频率，得到「大色块，少细节」的效果。公式：f(p) = noise(p*0.5) + 0.5*noise(p*1.0)。",whyItMatters:"不同频率的噪声适合不同场景：低频→云、雾、水面；中频→地形、木纹；高频→岩石、金属锈迹。《我的世界》地形用 6 层（平衡），《无人深空》行星大气用 3 层（性能优先），《荒野大镖客 2》云层用 2 层（写实风格）。选对频率事半功倍。"},{name:"周期性波动",nameEN:"Periodic Wave Motion",analogy:"海浪、呼吸、心跳——自然界的很多运动都是周期性的。sin/cos 函数是描述周期运动的数学语言。sin(ωt + φ) 中，ω 是角频率（快慢），φ 是相位（起点），振幅是高度。",explanation:"这里 wave = sin(z*0.2 + t*speed) 生成空间-时间耦合的波动。z*0.2 让波沿 z 轴分布（空间频率），t*speed 让波随时间传播（时间频率）。两者叠加产生「行波」——波峰从远处向近处推进，像海浪拍岸。",whyItMatters:"周期运动是动画的基础。游戏中的树叶摇曳、水面波纹、角色呼吸都用 sin/cos。理解相位（φ）是关键——多个物体用相同频率但不同相位，就能产生「此起彼伏」的群体动画（如麦浪、鱼群）。物理引擎（Unity/Unreal）的 Spring 组件也基于简谐运动。"},{name:"互补色渐变",nameEN:"Complementary Color Gradients",analogy:"色轮上相对的两个颜色是「互补色」——红/绿、橙/蓝、黄/紫。它们放在一起对比强烈但不刺眼，给人「和谐的冲突感」。极光用绿色（冷色调，神秘）到紫色（暖色调，梦幻）正是这个原理。",explanation:"这里用 RGB 线性插值：mix(vec3(0,1,0.5), vec3(0.5,0,1), t)。t 从 0 到 1 时，颜色从绿色平滑过渡到紫色。比 HSV 渐变简单（不需要色彩空间转换），但在 RGB 空间中，绿↔紫会经过灰色区域（饱和度降低），所以选了稍偏的绿（0,1,0.5）和紫（0.5,0,1）。",whyItMatters:"UI 设计的「配色方案」就基于色轮理论：单色（monochromatic）、类似色（analogous）、互补色（complementary）、三角色（triadic）。游戏中的阵营区分（《魔兽世界》联盟蓝/部落红）、情绪表达（愤怒红/平静蓝）都用互补色。掌握配色是视觉设计的第一课。"},{name:"密度场建模",nameEN:"Density Field Modeling",analogy:"传统 3D 建模用「多边形网格」（polygons）——物体由三角形拼接而成，边界明确。密度场用「浓度分布」（scalar field）——空间中每个点都有一个数值（密度），浓度高的地方「有物质」，浓度低的地方「没物质」。",explanation:"密度场 ρ(x,y,z) 是一个标量函数。渲染时，光线穿过密度场，累积透明度：α = 1 - exp(-Σρ(p_i)*Δs)，其中 Δs 是步长。这里简化为单层采样：α(p) = smoothstep(..., d) * opacity。多层叠加时，用 Alpha 混合累积最终颜色。",whyItMatters:"医学 CT/MRI 扫描、天气预报的云图、流体模拟（烟雾、爆炸）都基于密度场。Blender 的 Volume Shader、Houdini 的 VDB 格式就是密度场。这是「离散几何」到「连续场」的思维跃迁——不再问「这里有没有物体」，而是「这里的物质浓度是多少」。"}],applications:[{field:"自然纪录片",examples:"极光科普视频、天文纪录片背景、自然风光延时摄影"},{field:"冥想/放松",examples:"冥想 App 背景、助眠动画、瑜伽课程视觉引导"},{field:"游戏场景",examples:"奇幻游戏天空、魔法森林迷雾、外星球大气层"},{field:"舞台演出",examples:"音乐会舞台背景、戏剧舞美、沉浸式艺术展览"}],keyInsight:"Aurora Cloudscape 的核心洞察是「少即是多」——用最少的数学（2 层 FBM + 1 个 sin 波）营造最丰富的视觉（飘渺云层 + 流动极光）。这是东方美学的「留白」哲学在算法中的体现：不是堆砌细节，而是用柔和的大块和极宽的过渡营造氛围。低频噪声 + 高透明度 = 体积感，周期波动 + 颜色渐变 = 生命感。这种「做减法」的设计思想，在性能受限的实时渲染中尤为重要——《旷野之息》的草地、《风之旅人》的沙漠都用了类似的「简约而不简单」的技术。"},hypergrid:{id:"hypergrid",title:"Hyper Grid",subtitle:"超空间网格穿越",oneLiner:"在旋转的三维网格中以光速飞行，每个格子随机闪烁发光。",whatYouSee:"你正以极快的速度穿越一个三维空间网格。整个空间被分割成无数立方体格子，大多数格子是空的，但一些格子中漂浮着微小的发光粒子。整个网格在不断旋转——上下左右的方向感不断变化，像是在太空中翻滚。粒子发出蓝色和青色的光芒，光线随距离衰减，形成深邃的空间感。每隔一段时间，格子的分布会突然变化（因为随机种子与整数时间绑定），产生「脉冲」般的闪烁。远处的光逐渐被雾气吞噬，营造无限延伸的幻觉。",pipeline:[{step:"01",title:"网格空间划分",description:"用 floor() 将连续 3D 空间切割成离散的立方体网格。每条射线前进时，计算它会穿过哪个格子（grid_id）以及到达格子边界的距离（grid_d）。就像在一座无限大的仓库中，给每个货架编号——知道你在哪个货架前，就能查询这个货架上有什么。",glsl:`grid_id = (floor(ro + rd * 1e-3) / size + 0.5) * size;
vec3 bz = src + dst;
grid_d = min(bz.x, min(bz.y, bz.z));`},{step:"02",title:"Rodrigues 空间旋转",description:"整个场景绕一个随时间变化的轴旋转。erot 函数用 Rodrigues 旋转公式：将向量分解为平行于轴和垂直于轴的分量，分别保持和旋转。就像把陀螺仪装在太空舱上——舱体绕陀螺轴持续旋转，营造失重翻滚的感觉。",glsl:`vec3 erot(vec3 p, vec3 ax, float t) {
  return mix(dot(ax,p)*ax, p, cos(t)) + cross(ax,p)*sin(t);
}`},{step:"03",title:"随机粒子生成",description:"每个格子用 hash(grid_id + floor(time)) 生成随机数。随机数 > 0 的格子是空的（SDF 返回 0.5，射线快速跳过）；随机数 ≤ 0 的格子包含一个小球体。floor(time) 让随机种子每秒变化一次，产生「脉冲切换」的闪烁效果。",glsl:`float cellRn = hash(grid_id + floor(t));
float h = cellRn > 0.0 ? 0.5 : length(p) - 0.01;`},{step:"04",title:"光晕累积着色",description:"不是画出粒子本身，而是沿射线累积它们的「光晕」——每个粒子贡献一小部分光，距离越近越亮，衰减速率按 exp(e*e*i) 计算。就像夜晚透过雾气看远处的霓虹灯——看不清灯管本身，但能看到弥漫的辉光。多个光源叠加产生丰富的色彩层次。",glsl:`float glowPulse = 0.02 * exp(5.0 * fract(gy + t));
vec3 cellColor = mix(uColor1, uColor2, abs(cellRn));
col += cellColor * (uGlow * 0.025 + glowPulse) / exp(e*e*fi);`},{step:"05",title:"距离雾 + Gamma",description:"用 exp(-0.08*g) 做指数距离雾衰减——射线走得越远，累积颜色越暗，远方自然消失在黑暗中。最后 sqrt(col) 做 Gamma 校正（等价于 pow(col, 0.5)），提亮暗部，让深空中微弱的辉光也能被看见。",glsl:`col *= exp(-0.08 * g);
col = sqrt(max(col, 0.0));`}],concepts:[{name:"网格行进",nameEN:"Grid Marching",analogy:"传统 Raymarching 像盲人拄拐——每步试探一小段，效率低。网格行进像坐地铁——直接跳到下一站（下一个格子边界），中间不停靠。知道了空间被均匀分割，就能精确计算「到下一个格子墙壁的距离」，一步跨过去。",explanation:"对于轴对齐的均匀网格，射线到下一个格子边界的距离可以解析求解：d_axis = (cell_boundary - ray_origin) / ray_direction，取三个轴中最小的 d 即为下一步长。这是 DDA（Digital Differential Analyzer）算法的 3D 版本。",whyItMatters:"Minecraft 的方块选取（光标瞄准哪个方块）就用这个算法。体素引擎（MagicaVoxel、Teardown）的光线追踪核心也是网格行进。它是 SDF Raymarching 的离散版——用网格结构换取确定性步长，避免了步长过小导致的性能问题。"},{name:"Rodrigues 旋转公式",nameEN:"Rodrigues' Rotation Formula",analogy:"想象把一根筷子插在乒乓球上。绕筷子转动时，球上靠近筷子的点几乎不动（平行分量），远离筷子的点转得最多（垂直分量）。Rodrigues 公式就是：保留平行分量不变，把垂直分量旋转指定角度。",explanation:"公式：v' = v*cos(θ) + (k×v)*sin(θ) + k*(k·v)*(1-cos(θ))，其中 k 是单位旋转轴，θ 是旋转角度。第一项是原向量的缩放，第二项是叉积（垂直于 v 和 k 的分量），第三项保留平行于轴的分量。比构造旋转矩阵更直观高效。",whyItMatters:"机器人学（关节旋转）、航天器姿态控制、3D 动画骨骼系统都用这个。Unity 的 Quaternion.AngleAxis() 内部就是 Rodrigues。它只需要一个轴和一个角度，比欧拉角（三个角度）更直观，比四元数（四个分量）更易理解。"},{name:"光晕累积渲染",nameEN:"Glow Accumulation Rendering",analogy:"长曝光摄影——相机快门打开很长时间，沿光线路径上的所有光源都被「累加」到同一张照片上。射线穿过空间时，每经过一个发光点就在最终颜色上「加一笔」。100 个微弱光源累加起来，就形成了丰富的辉光效果。",explanation:"每次迭代计算 contribution = color * intensity / attenuation，然后 col += contribution。intensity 由 glow 参数和脉冲函数（exp(5*fract(...))）控制；attenuation 用 exp(e*e*i) 按距离和迭代次数衰减。这不是物理精确的体积光，而是一种高效的近似。",whyItMatters:"Shadertoy 上大量「宇宙飞行」「粒子云」效果都用这个技巧。它绕过了传统粒子系统的开销（不需要存储/排序粒子），在 fragment shader 中直接计算。游戏中的「上帝光线」（God Rays）、「体积雾光」也是累积思路。"}],applications:[{field:"科幻场景",examples:"超空间跳跃、星际穿越过渡动画、赛博空间入口"},{field:"音乐可视化",examples:"电子音乐 VJ 素材、节拍同步脉冲、DJ 演出视觉背景"},{field:"游戏特效",examples:"传送门特效、量子隧穿过场、数据空间探索"},{field:"品牌视觉",examples:"科技发布会开场动画、AI 产品宣传片、元宇宙概念视频"}],keyInsight:"Hyper Grid 的核心洞察是「离散化 = 效率 + 随机性」。把连续空间切成格子后，两件事变得简单：射线可以精确跳到下一个格子（网格行进），每个格子可以独立随机（hash(id)）。这和真实世界的城市规划一模一样——把混沌的土地切成整齐的街区，每个街区独立开发，宏观上却呈现出有序的城市天际线。离散化不是简化，而是把复杂性从「连续空间的微积分」转化为「离散单元的组合数学」——后者更适合 GPU 的并行架构。"},jellyfish:{id:"jellyfish",title:"Luminescence",subtitle:"生物发光水母",oneLiner:"用数学造出一群会发光、会呼吸、会游泳的水母，漂浮在无限深海中。",whatYouSee:"你看到的是一片漆黑深海中漂浮的发光水母群。每只水母的伞盖透明晶莹，内部有脉动的发光纹路，触手从伞下垂落并随水流摆动。它们以各自不同的节奏缓慢收缩和舒张——就像在呼吸。移动鼠标可以改变观察角度，就像在深潜器中环顾四周。水母的颜色在粉色、蓝色、橙色之间缓慢流转，光晕在透明伞盖内反射折射，营造出梦幻的深海氛围。",pipeline:[{step:"01",title:"空间重复 — 一只变无数只",description:"用 mod 运算将整个 3D 空间切成 6×30×6 的网格，每个格子放一只水母。就像在浴室贴瓷砖——你只需要设计一块瓷砖的花纹，mod 运算会自动重复铺满整面墙。每个格子有唯一 ID（floor(pos/size)），用来生成随机偏移，让每只水母位置略有不同。",glsl:`o.id = floor(pos/size);
o.p = mod(pos, size) - size*0.5;`},{step:"02",title:"SDF 建模 — 用数学雕刻形状",description:"水母不是用三角面片搭建的，而是用数学函数描述的。伞盖 = 球体减去另一个球体（挖空底部）；触手 = 极坐标重复的线条，粗细随高度递减。smooth max（smax）让两个形状的交界柔滑过渡，就像捏黏土时两团泥自然融合。",glsl:`float d1 = sdSphere(p, vec3(0.), 1.);
float d2 = sdSphere(p, vec3(0.,-.5,0.), 1.);
o.d = smax(d1, -d2, .1);  // 柔滑布尔减法`},{step:"03",title:"光线步进 — 从像素发射探测光线",description:"对每个像素，从摄像机发射一条光线，沿光线方向一步步前进。每一步计算当前位置到最近水母表面的距离（SDF 值），用这个距离决定下一步走多远。距离大就大步跳，距离小就小心挪动——像蒙眼走路时用手探测障碍物，手摸到东西就停下。100 步之内命中表面就渲染，否则显示背景。",glsl:`for(float i=0.; i<MAX_STEPS; i++) {
  p = r.o + r.d*d;
  s = map(q.p, q.id);
  if(s.d<HIT_DISTANCE) break;
  d += min(s.d, dC);
}`},{step:"04",title:"体积渲染 — 让伞盖透光发亮",description:"命中水母伞盖后，不是简单涂一个颜色，而是从内部发射 8 条子光线，在球体内部逐层采样发光纹路的密度。密度高的地方亮，密度低的地方暗，叠加后产生半透明的内发光效果。就像把手电筒放在果冻里——光会在内部散射，产生柔和的体积光。",glsl:`for(float i=0.; i<VOLUME_STEPS; i++) {
  float sd = sph(o.uv, camRay.d, vec3(0.), .8+i*.015).x;
  density += VolTex(o.uv, uv, 1.4+i*.03, o.pump);
}
col = mix(col, accent*(density/VOLUME_STEPS), sat(density/VOLUME_STEPS));`},{step:"05",title:"菲涅尔反射 + 脉动动画",description:"水母伞盖边缘比正面更亮（菲涅尔效应）——就像站在湖边，正前方能看到水底，但远处的水面全是反光。脉动动画用 cos(x+cos(x)) 驱动——这不是简单的正弦波，而是「心跳」般的非对称节奏：快速收缩 + 缓慢舒张，模拟真实水母的肌肉运动。",glsl:`float fresnel = sat(1.+dot(camRay.d, n));
float pump = cos(x+cos(x))+sin(2.*x)*.2+sin(4.*x)*.02;`}],concepts:[{name:"有符号距离场",nameEN:"Signed Distance Function (SDF)",analogy:"想象你闭着眼在房间里走路。你伸出手，能感知到「离最近障碍物还有多远」。SDF 就是这个「距离感知器」——空间中每个点都知道自己离最近表面有多远。正值 = 在外面，负值 = 在里面，零 = 刚好在表面上。",explanation:"SDF 是一个标量函数 f(p)：给定空间中任意一点 p，返回该点到最近表面的有符号距离。球体 SDF = length(p) - r；两个 SDF 可以用 min（并集）、max（交集）、-f（反转）组合成复杂形状。smin/smax 是平滑版本，让交界处圆滑过渡。",whyItMatters:"SDF 是现代实时图形的核心技术。Unity 的 VFX Graph、Unreal 的 Nanite 都支持 SDF。字体渲染（TrueType）、物理碰撞检测、3D 打印的切片算法全部基于距离场。它比传统三角网格更适合描述有机形状和布尔运算。"},{name:"空间重复",nameEN:"Domain Repetition",analogy:"一面镜子只能反射你自己；但把两面镜子面对面放，你就看到了无穷个自己。mod 运算就是数学版的「对镜」——它把无限空间折叠到一个有限格子里，GPU 只需要计算一个格子的内容，就自动得到了无穷多份复制。",explanation:"p = mod(p, size) - size/2 将坐标 p 映射到 [-size/2, size/2] 的重复单元内。floor(p/size) 给出当前单元的整数 ID，可用于 hash 生成每个单元的随机参数。这是 O(1) 复杂度的无限复制——无论场景中有多少水母，GPU 的工作量不变。",whyItMatters:"《无人深空》18 万亿颗星球、Minecraft 的无限地形都用了空间重复。没有它，渲染无限场景需要无限内存。它是程序化生成的基石——用有限的规则生成无限的内容。"},{name:"体积渲染",nameEN:"Volumetric Rendering",analogy:"拍 X 光片时，X 射线穿过身体，在不同密度的组织中被不同程度地吸收和散射。体积渲染做的是一模一样的事——让虚拟光线穿过半透明物体，沿途累积颜色和亮度，最终形成「看得到内部结构」的效果。",explanation:"沿光线方向在物体内部均匀采样 N 个点（这里是 8 个），每个点查询发光纹路密度，然后累加。最终颜色 = Σ(density_i * color) / N。采样越多越精细但越慢。这里用球体求交来确定采样起点，避免在空气中浪费计算。",whyItMatters:"医学影像（CT/MRI）、天气预报（云层）、电影特效（烟雾/爆炸）全靠体积渲染。它突破了「表面渲染」的局限——不是所有东西都有清晰的表面，烟雾、云朵、水母伞盖都是半透明的体积。"},{name:"菲涅尔效应",nameEN:"Fresnel Effect",analogy:"站在湖边低头看——脚下的水很透明，能看到水底石头。但看向远处——水面变成了一面镜子，全是天空的倒影。这就是菲涅尔效应：观察角度越「擦边」（掠射），反射越强，透射越弱。",explanation:"fresnel = clamp(1 + dot(viewDir, normal), 0, 1)。当视线垂直于表面时 dot ≈ -1，fresnel ≈ 0（透明）；当视线平行于表面时 dot ≈ 0，fresnel ≈ 1（反射）。这是简化版的 Schlick 近似。水母用它来实现边缘发光——伞盖边缘比中心更亮。",whyItMatters:"几乎所有 3A 游戏都用菲涅尔：水面反射、玻璃折射、角色皮肤的次表面散射、汽车车漆的光泽。没有菲涅尔的材质看起来像塑料——加上菲涅尔立刻变得真实。它是「写实渲染」和「卡通渲染」之间最明显的差异之一。"}],applications:[{field:"海洋纪录片",examples:"深海生物特效、水母群落模拟、海底生态可视化"},{field:"沉浸式艺术",examples:"数字水族馆、互动投影展览、冥想空间视觉设计"},{field:"游戏特效",examples:"水下关卡环境、魔法生物设计、科幻外星生态"},{field:"UI/品牌",examples:"生物科技公司品牌动画、医疗可视化、有机风格加载动画"}],keyInsight:"Luminescence 的核心洞察是「生命感来自不对称节奏」。真实的水母不是匀速收缩的——它快速收缩（推进）然后缓慢舒张（滑行），就像心跳有收缩期和舒张期。cos(x+cos(x)) 这个简单的嵌套公式完美模拟了这种非对称周期运动，比 sin(x) 多了一层「节奏感」。这揭示了程序化动画的本质：不是模拟物理定律，而是捕捉运动的「韵律特征」。同样的思路可以生成走路、呼吸、鸟类飞行——关键不在于精确，而在于「看起来对」。"},trainjourney:{id:"trainjourney",title:"Train Journey",subtitle:"多层视差火车旅程",oneLiner:"用十几层噪声山叠出纵深，加一辆像素小火车穿行其间",whatYouSee:"想象你坐在火车窗边向外看——近处的山飞速后退，远处的山几乎不动。这就是视差滚动（parallax scrolling）的视觉效果。画面中有 14 层 FBM 噪声生成的山脉，每层以不同速度向左滚动，从最近的 1× 到最远的 100×，营造出深邃的空间纵深。画面下方有一辆由矩形和圆形组合的程序化小火车，烟囱冒出 FBM 烟雾，火车下方是铁桥的拱形结构。整个画面覆盖一层暗角和胶片颗粒，像老电影一样温暖。",pipeline:[{step:"01",title:"FBM 地形生成",description:"用分形布朗运动（FBM）生成每一层山脉的高度。像画家用不同粗细的笔触叠加——大的定义山脊轮廓，小的增加岩石细节。8 层 octave 逐次缩小（×0.7），频率翻倍，产生自然的分形质感。",glsl:`float fbm(vec2 x, int detail) {
  float a = 0.0, b = 1.0, t = 0.0;
  for (int i = 0; i < 8; i++) {
    if (i >= detail) break;
    a += b * valueNoise(x);
    t += b; b *= 0.7; x *= 2.0;
  }
  return a / t;
}`},{step:"02",title:"视差层叠加",description:"14 层山脉从前景到天际线依次排列，每层有不同的 midlevel（基线高度）、disp（起伏幅度）和 dist（距离系数）。距离越远的层，UV 滚动速度越慢（t/dist），产生视差深度感。每层还有 2-4 个色阶的轮廓线，模拟山的阴影和受光面。",glsl:`midlevel = 0.5;
disp = 2.3;
dist = 30.0;
uv2 = uv + vec2(t / dist + 20.5, 0.0);
h = (fbm(uv2, 8) - 0.5) * disp;
layer(0.12, vec3(0.41, 0.27, 0.27));
layer(0.08, vec3(0.53, 0.35, 0.32));`},{step:"03",title:"程序化火车",description:"火车由简单的几何图元组合：用 step/box 函数画出车厢、车顶、连接件、机车头、烟囱。车轮是圆形 SDF（distance < radius）。fract(uv*9) 重复 UV 空间生成多节车厢。每个部件用 mix() 按遮罩覆盖到背景上。",glsl:`float wagon = 1.0;
wagon *= 1.0 - step(0.45, uv.x);  // 左侧区域
wagon *= 1.0 - step(0.115, uv.y); // 车厢上边
wagon *= step(0.103, uv.y);        // 车厢下边
wagon *= step(0.05, 1.0 - abs(uv2.x*2.0-1.0)); // 车厢间隔`},{step:"04",title:"烟雾与桥梁",description:"机车烟雾使用 FBM2（衰减 ×0.9，更蓬松）扰动一条从烟囱向左扩散的曲线，sqrt(x) 让烟雾越远越宽，exp(-x*10) 让它快速消散。铁桥用 fract(uv*3) 重复单元格，抛物线 pow(x-0.5,2)*0.15 画出拱形，配合 step/smoothstep 画横梁和竖柱。",glsl:`// 烟雾轮廓
float x = -uv.x + 0.49;
float y = abs(uv.y + h*0.4 - 0.16*sqrt(x) - 0.12)
       - 0.8*x*exp(-x*10.0);
// 桥拱
k *= smoothstep(0.001, 0.003,
  abs(uv2.y - pow(uv2.x-0.5, 2.0)*0.15 - 0.12));`},{step:"05",title:"胶片后处理",description:"最后两层效果赋予画面复古质感：胶片颗粒用 hash 函数生成随机噪点，按 uGrain 比例混入画面；暗角（vignette）用经典公式 16·u·v·(1-u)·(1-v) 计算边缘衰减，四角变暗、中心明亮，模拟老式镜头的光学特征。",glsl:`// 胶片颗粒
col = mix(col, grain, uGrain);
// 暗角
col *= 0.5 + 0.5 * pow(
  16.0*vUv.x*vUv.y*(1.0-vUv.x)*(1.0-vUv.y), 0.2);`}],concepts:[{name:"视差滚动",nameEN:"Parallax Scrolling",analogy:"坐火车看风景——窗边的电线杆飞速后退，远处的山几乎不动。距离越远的物体，视觉移动速度越慢。",explanation:"通过给不同深度的层设置不同的滚动速度（uv.x += t/dist），距离系数 dist 从 1（最近）到 100（最远），产生 2D 画面中的 3D 纵深错觉。这是一种基于运动视差（motion parallax）的深度线索。",whyItMatters:"视差滚动是 2D 游戏和网页设计中最经典的深度营造手法。仅用 UV 偏移就能骗过视觉系统，让平面画面产生立体感。14 层叠加创造出电影级的景深效果。"},{name:"程序化 SDF 组合",nameEN:"Procedural SDF Composition",analogy:"用乐高积木拼火车——每个矩形、圆形都是一块积木，step() 和 box() 是裁切工具，mix() 是胶水。",explanation:"火车的每个部件（车厢、车顶、车轮、烟囱）都由简单的隐式函数定义：box() 判断点是否在矩形内，dot2() < r² 判断是否在圆内，fract(uv*9) 重复生成多节车厢。最终通过 mix() 按各遮罩的 alpha 顺序合成。",whyItMatters:"程序化几何不需要任何贴图资源，仅用数学函数就能生成任意复杂的 2D 图形。这个火车用不到 30 行代码就完成了形状定义，是 Shader 艺术中「以小博大」的典范。"},{name:"胶片后处理",nameEN:"Film Post-Processing",analogy:"给数字照片套上胶片滤镜——颗粒感让画面不再「数码味」，暗角把视线引向中心，像老照片一样温暖亲切。",explanation:"胶片颗粒用 hash 函数在每帧生成随机噪声，以低比例（~10%）混入画面。暗角使用 16uv(1-u)v(1-v) 的对称多项式，在画面四角衰减亮度。两者结合赋予画面模拟（analog）质感。",whyItMatters:"后处理效果是将「技术演示」变为「艺术作品」的最后一步。少量噪声打破了数字渲染的完美感，让画面更有温度。暗角自然引导注意力到画面中心的火车上。"}],applications:[{field:"独立游戏",examples:"横版过关游戏背景、视觉小说场景、像素风开场动画"},{field:"网页设计",examples:"官网首屏视差滚动、产品展示页背景、创意工作室主页"},{field:"动态壁纸",examples:"桌面动态壁纸、手机锁屏动画、数字相框装饰"},{field:"影视片头",examples:"纪录片开场、旅行 Vlog 转场、复古风格 MV 背景"}],keyInsight:"Train Journey 的核心洞察是「深度是速度差的错觉」。人类视觉系统通过物体的相对运动速度来推断距离——这叫运动视差（motion parallax），是我们日常生活中最强的深度线索之一。这个 shader 仅用 14 个不同速度的 2D 层就骗过了大脑的深度感知系统，创造出无限延伸的 3D 空间。同样的原理在电影中叫 multiplane camera（多层摄影机），迪士尼在 1937 年的《白雪公主》中首次使用。从物理层画到数学层，本质都是一个公式：视角速度 = 实际速度 / 距离。理解这个关系，你就掌握了所有 2D-to-3D 深度幻觉的钥匙。"},horizon:{id:"horizon",title:"Horizon",subtitle:"参数化视差山脉背景",oneLiner:"用循环生成任意数量的噪声山脉层，通过深度控制速度差产生无限纵深",whatYouSee:"一片无尽的山脉在缓缓滚动——远处的山几乎静止，近处的山飞速掠过。每座山都是 FBM 噪声生成的独特轮廓，颜色从天空渐变到近景。你可以实时调整层数（4-16层）、深度、起伏剧烈程度、甚至整个色调主题——从日落暖调到极地冰蓝，同一套算法生成完全不同的风景。这就是参数化程序生成的魅力：一个公式，无限风景。",pipeline:[{step:"01",title:"噪声地形函数",description:"FBM（分形布朗运动）是地形生成的核心。8 层 octave 逐层叠加，每层频率翻倍、振幅 ×0.7，就像用不同粗细的画笔叠加——大笔触画山脊，小笔触加岩石纹理。五阶 quintic 插值让过渡丝滑无锯齿。",glsl:`float fbm(vec2 x) {
  float a = 0.0, b = 1.0, t = 0.0;
  for (int i = 0; i < 8; i++) {
    a += b * valueNoise(x);
    t += b; b *= 0.7; x *= 2.0;
  }
  return a / t;
}`},{step:"02",title:"参数化层循环",description:"用一个 for 循环取代硬编码的 14 层。每层根据 nearRatio（0=最远, 1=最近）自动计算滚动速度、基线高度、起伏幅度。远层慢、高、柔和；近层快、低、剧烈。每层有独特的 UV 偏移，确保山脉轮廓互不重复。",glsl:`for (int i = 0; i < 16; i++) {
  if (i >= maxLayers) break;
  float nearRatio = float(i) / max(float(maxLayers)-1.0, 1.0);
  float scrollSpeed = mix(100.0, 1.0, nearRatio*nearRatio) * uDepth;
  float baseline = mix(0.95, -0.1, nearRatio);
}`},{step:"03",title:"深度色彩映射",description:"三色渐变系统：sky(color3) → mid(color2) → near(color1)。远层偏向天空色，近层偏向暖色/深色。分界点在 nearRatio=0.4，保证远景层占据更多的色域空间，视觉上更自然。每层还有 3 个亮度子层模拟山脊受光面。",glsl:`if (nearRatio < 0.4) {
  layerColor = mix(uColor3*0.9, uColor2, nearRatio/0.4);
} else {
  layerColor = mix(uColor2, uColor1, (nearRatio-0.4)/0.6);
}
// 3 sub-layers: ridge → mid → shadow
if (y < surface) col = layerColor;
if (y < surface-0.04) col = layerColor * 0.82;
if (y < surface-0.10) col = layerColor * 0.65;`},{step:"04",title:"天空渐变",description:"天空不是纯色——用 smoothstep 在 y 方向做渐变，底部略暗（0.85×sky color），顶部全亮。这让天空与最远山层自然衔接，避免生硬的色块边界。",glsl:`float skyGrad = smoothstep(0.3, 1.2, uv.y);
vec3 col = mix(uColor3 * 0.85, uColor3, skyGrad);`},{step:"05",title:"后处理：颗粒与暗角",description:"胶片颗粒用每帧变化的 hash 噪声以低比例混入画面，打破数字渲染的「完美感」。暗角使用经典 16uv(1-u)v(1-v) 多项式衰减四角亮度，自然将视线引向画面中心。两个参数独立可调，从零到满。",glsl:`// Grain
col = mix(col, vec3(grain), uGrain);
// Vignette
float vig = pow(16.0*uv.x*uv.y*(1.0-uv.x)*(1.0-uv.y), 0.2);
col *= mix(1.0, 0.5 + 0.5*vig, uVignette);`}],concepts:[{name:"参数化程序生成",nameEN:"Parametric Procedural Generation",analogy:"一个菜谱可以做出无限种菜——同样的步骤，换食材（颜色）、调火候（速度）、改分量（层数），就是完全不同的风味。",explanation:"将硬编码的 14 层替换为参数驱动的循环：层数、深度、色彩都成为 uniform 变量。GPU 在每帧根据当前参数实时计算所有层，无需预烘焙。这是从「固定作品」到「生成系统」的本质跃迁。",whyItMatters:"参数化是程序生成的灵魂。一个参数化的 shader 可以生成无限变体——日落沙漠、极地冰川、午夜幽谷——只需调几个滑块。这正是游戏和影视中 PCG（程序化内容生成）的核心理念。"},{name:"运动视差",nameEN:"Motion Parallax",analogy:"坐车看风景：路边的树飞速后退，远山几乎不动。大脑通过速度差判断远近。",explanation:"每层的滚动速度 = t / dist，dist 从 1（最近）到 100（最远），形成二次曲线分布（nearRatio²）。这模拟了透视投影中「角速度与距离成反比」的物理规律，是 2D 画面中最强的深度线索。",whyItMatters:"运动视差是人类日常感知深度的主要方式之一（仅次于双目视差）。掌握这个原理，你可以在任何 2D 媒介中创造令人信服的 3D 空间感——网页、游戏、动画都适用。"},{name:"FBM 分形地形",nameEN:"FBM Fractal Terrain",analogy:"从太空看地球：大陆板块是最大的起伏，山脉是中等起伏，岩石是小起伏——它们在不同尺度上自相似。",explanation:"FBM 叠加 8 层噪声，每层频率 ×2、振幅 ×0.7。低频层决定山脊走势，高频层添加细节。0.7 的衰减比产生自然的 1/f 噪声特征，这与真实地形的功率谱分布惊人吻合。",whyItMatters:"FBM 是程序化地形生成的基石，从 Minecraft 到 3A 大作的开放世界都在使用。理解频率-振幅关系，你就能生成山脉、云层、海浪——自然界的大部分纹理都是分形的。"}],applications:[{field:"动态壁纸",examples:"桌面/手机动态壁纸、数字相框、LED 墙面装饰"},{field:"游戏背景",examples:"横版游戏远景、主菜单动态背景、加载界面"},{field:"网页设计",examples:"着陆页首屏背景、博客 hero 区域、产品展示动态背景"},{field:"直播/视频",examples:"直播间虚拟背景、视频转场、音乐可视化底图"}],keyInsight:"Horizon 的核心洞察是「参数化 = 从作品到工具的跃迁」。Train Journey 是一幅精心手绘的画——14 层手调颜色、固定的火车和桥梁；Horizon 是一台画画机器——用循环和参数取代硬编码，用三色渐变取代 40+ 个 RGB 值。看似简化，实则升维：一个固定作品只有一种形态，一个参数化系统拥有无限变体。这正是程序化生成（Procedural Generation）的哲学精髓——不要画一棵树，要写一个长树的规则。从游戏世界生成到 AI 辅助设计，参数化思维是通往「用代码创造世界」的第一步。"}},D2={gooey:{oneLiner:"让噪声变成液体，让滚动变成引力",whatYouSee:"屏幕上有 9 列垂直的液滴通道。当你滚动页面时，就像开启了引力——每条通道中的液滴开始下落，形成粘稠的水滴形态。滴落的时机、速度都略有不同，创造出有机的、不可预测的视觉节奏。背景的噪声纹理也随滚动逐渐上涌，像是液体从底部慢慢填满整个画面。",pipeline:[{step:"1. 生成噪声基底",analogy:"想象在白纸上撒盐粒——每个位置的盐粒密度不同，形成有机的灰度分布",code:`// Simplex Noise 生成有机纹理
float shape = snoise(noise_uv);
shape = clamp(.5 + .5 * shape, 0., 1.);`},{step:"2. 创建 9 条液滴通道",analogy:"把画布垂直划分成 9 条车道，每条车道独立运行自己的水滴动画",code:`const int num_col = 9;
for (int i = 0; i < num_col; i++) {
    // 每条通道有独立的随机种子
    float start_time_offset = rand(100. * (float(i) + u_seed));
}`},{step:"3. 计算液滴下落时序",analogy:"每个水滴先慢慢积累（before_drop），到达临界点突然下落，然后快速滑走（after_drop）",code:`// 分段缓动：积累期 → 下落期
float before_drop_t = pow(before_drop_normal, .4) * drop_time;
float after_drop_t = 3. * pow(after_drop_normal, 2.) * (1. - drop_time);`},{step:"4. 绘制液滴形态",analogy:"用圆形画水滴主体（dot），用竖条画拉伸的液体尾巴（bar）",code:`// 圆形水滴
float dot = get_l(dot_uv);
dot = pow(dot, 4.);
// 竖条尾巴
float bar = smoothstep(-.5, 0., bar_uv.x) * (1. - smoothstep(0., .5, bar_uv.x));`},{step:"5. 应用 Gooey 效果",analogy:"用 smoothstep 让边缘平滑融合，创造粘稠的液体感",code:`// Gooey 阈值处理
float gooey = smoothstep(.48, .5, shape);
gooey -= .1 * smoothstep(.5, .6, shape);`}],concepts:[{term:"Simplex Noise",analogy:"*想象自然界的云彩纹理——不是完全随机的噪点，而是有连续性、有结构的随机分布*",explanation:"Simplex Noise 是 Perlin Noise 的改进版，通过梯度插值在任意维度生成平滑连续的随机值。相比随机函数，它的相邻像素值有关联性，形成自然的有机纹理。",whyItMatters:"这是创造「看起来自然」的效果的核心工具。液滴的形态、背景的纹理都依赖它产生有机感，而非机械感。"},{term:"Scroll Progress Mapping",analogy:"*把鼠标滚轮变成时间机器的把手——滚动幅度直接映射到动画进度*",explanation:"通过 u_scroll_progr (0.0 → 1.0) 将页面滚动量映射到着色器参数，控制液滴的下落位置、背景噪声的上涌高度。滚动变成了一种交互式的时间控制器。",whyItMatters:"这打破了动画的线性播放，让用户通过滚动「控制时间」，创造探索式的交互体验。"},{term:"分段缓动函数",analogy:"*水滴不是匀速下落——先慢慢积累（平方缓动），突破临界点后急速坠落（三次缓动）*",explanation:"通过 pow(t, 0.4) 和 pow(t, 2) 创造非线性的时间映射。积累期用低次幂（0.4）让变化更平缓，下落期用高次幂（2-3）让加速度更明显。",whyItMatters:"这是「有生命力」动画的秘诀：自然界的运动很少是匀速的，分段缓动让液滴有重量感、张力感。"},{term:"Smoothstep Gooey",analogy:"*用数学的平滑阶跃函数创造液体的「表面张力」效果*",explanation:"smoothstep(0.48, 0.5, shape) 在阈值附近产生平滑的 0→1 过渡。多个 smoothstep 叠加可以创造类似 SVG 滤镜 feGaussianBlur + feColorMatrix 的粘稠效果。",whyItMatters:"这是在 fragment shader 中高效实现「gooey/液态」视觉风格的关键技巧，无需复杂的后处理。"}],applications:["**加载动画** — 用液滴下落替代传统进度条，传达「内容正在流入」的隐喻","**滚动转场** — 在页面切换时用液体覆盖/揭开效果，创造流畅的过渡","**数据可视化** — 将实时数据流映射为液滴速度/密度，让数字变得有机可感","**品牌动效** — 适合有机/自然/流动特质的品牌，打造独特的视觉记忆点"],keyInsight:"**滚动不只是导航，也是叙事的节奏控制器**。这个 demo 展示了如何用物理隐喻（重力、液体）让抽象的滚动量变得具象可感。关键洞察：自然的动画来自「分段的非线性」而非「全局的匀速」——积累期慢、释放期快，这是真实物理的本质。"},parallax:{oneLiner:"用多层速度差异，在 2D 画布上创造 3D 深度错觉",whatYouSee:"一个梦幻的山谷风景从白天过渡到黑夜。当你滚动时，不同图层以不同速度移动：远处的山峦慢悠悠上升，近处的山丘快速掠过，云朵四散飘走，太阳从地平线升起又沉入夜空。中途有一只鸟飞过，傍晚时分蝙蝠群出现，最后繁星点点闪烁。整个过程流畅连贯，仿佛一次真实的旅程。",pipeline:[{step:"1. 分层定义场景深度",analogy:"把风景画拆成多张透明胶片——最远的山、中景的山、近景的山、云彩、鸟……每层独立",code:`<!-- SVG 中的图层组织 -->
<g id="h1-1"><!-- 最远山丘 --></g>
<g id="h1-3"><!-- 中景山丘 --></g>
<g id="h1-7"><!-- 近景山丘 --></g>`},{step:"2. 用 ScrollTrigger 绑定滚动",analogy:"把滚动条当作时间轴——滚动 0% 是第 0 帧，滚动 100% 是最后一帧",code:`ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: 3  // 滚动与动画的耦合度
});`},{step:"3. 按深度分配速度",analogy:"坐车看窗外：远山像静止，近处的树飞快掠过——这就是视差的本质",code:`// 远山移动慢（speed × 1.7）
scene1.to("#h1-3", { y: 1.7 * speed }, 0);
// 近山移动快（speed × 5）
scene1.to("#h1-7", { y: 5 * speed }, 0);`},{step:"4. 编排多场景过渡",analogy:"像电影分镜——Scene 1 白天→Scene 2 黄昏→Scene 3 夜晚，每个场景有独立的 ScrollTrigger",code:`// Scene 1: 0-45% 滚动
let scene1 = gsap.timeline();
// Scene 2: 15-40% 滚动（有重叠）
let scene2 = gsap.timeline();
// Scene 3: 70-100% 滚动
let scene3 = gsap.timeline();`},{step:"5. 添加细节动画",analogy:"在主叙事之外加彩蛋：鸟飞行时改变朝向、星星闪烁、流星划过",code:`// 鸟的飞行 + 翻转
onEnter: function() {
    gsap.to("#bird", { scaleX: 1, rotation: 0 });
},
onLeave: function() {
    gsap.to("#bird", { scaleX: -1, rotation: -15 });
}`}],concepts:[{term:"视差滚动 (Parallax Scrolling)",analogy:"*坐在火车上看窗外——远处的山移动慢，近处的树飞快掠过，大脑自动推断出深度*",explanation:"通过让不同图层以不同速度响应滚动，模拟真实世界的运动视差效应。近景移动速度是远景的 3-5 倍，创造深度错觉。",whyItMatters:"这是在 2D 屏幕上创造 3D 沉浸感的最经典技巧，广泛应用于游戏、网页、动画中。"},{term:"ScrollTrigger Scrub",analogy:"*把滚动条变成视频播放器的进度条——可以前进、后退、暂停在任意帧*",explanation:"scrub: 3 表示动画与滚动的耦合强度。scrub 值越小，动画响应越即时；scrub 值越大，动画有延迟感和惯性，更流畅但略滞后。",whyItMatters:"这打破了「动画只能自动播放」的限制，让滚动成为交互式的时间控制器。"},{term:"SVG 渐变动画",analogy:"*不只移动图形，还动态修改颜色渐变——让太阳从黄色过渡到橙红，天空从蓝色变为紫色*",explanation:"通过 GSAP 修改 SVG <radialGradient> 的 stop-color 和 offset 属性，实现光照、氛围的平滑过渡。",whyItMatters:"这是创造「时间流逝」感的关键——不只是位置变化，色彩的变化才能传达「白天→黄昏→黑夜」的情感转变。"},{term:"分层时间线 (Layered Timeline)",analogy:"*像 Photoshop 的多个图层一样，每个场景有自己的时间线，可以交叉重叠*",explanation:"每个 gsap.timeline() 是独立的动画序列，通过不同的 ScrollTrigger 区间控制。Scene 1 和 Scene 2 可以部分重叠（15%-40%），创造平滑过渡。",whyItMatters:"这是复杂叙事动画的组织方式——把长动画拆成多个可管理的片段，每个片段独立调试。"}],applications:["**品牌叙事页** — 用滚动讲述品牌故事，每屏一个场景，沉浸式体验","**产品介绍页** — 展示产品从设计到生产的过程，滚动即「时间推进」","**在线绘本/漫画** — 用滚动控制故事推进，结合视差创造立体感","**游戏关卡选择** — 横向滚动的地图，远近山峦移动速度不同，增强探索感"],keyInsight:"**滚动可以是叙事的节奏控制器，而非单纯的内容浏览工具**。这个 demo 的核心洞察是：通过「分层速度差异」创造深度，通过「颜色渐变」传达时间流逝，通过「细节动画」（鸟、蝙蝠、星星）增强生命力。关键是「速度比例」而非绝对速度——远景:中景:近景 ≈ 1:2:4 是黄金比例。"}},M2=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,O2=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform float uSpeed;
  uniform float uDensity;
  uniform float uSuction;

  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float total = 0.0;
    float persistence = 0.5;
    float scale = 1.0;
    for(int i = 0; i < 5; i++) {
        total += snoise(p * scale) * persistence;
        scale *= 2.0;
        persistence *= 0.5;
    }
    return total;
  }

  void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
      float r = length(uv);
      float angle = atan(uv.y, uv.x);

      float twist = 5.0 * uSuction;
      float rotationSpeed = uSpeed * 0.5;
      float theta = angle + (1.0 / (r + 0.1)) * twist - iTime * rotationSpeed;
      float radialOffset = iTime * uSpeed * 0.5;

      vec2 spiralUV = vec2(cos(theta), sin(theta)) * (r - radialOffset) * uDensity;

      float n = fbm(spiralUV + vec2(iTime * 0.1));
      n = n * 0.5 + 0.5;
      float n2 = fbm(spiralUV + n * 2.0);

      vec3 col = mix(uColor1, uColor2, n2);

      float glow = 0.02 / (r * r + 0.001);
      col += glow * uColor1;
      col *= (1.0 + n * 0.5);

      float maskRadius = 0.45;
      float maskSoftness = 0.3;
      float vignette = 1.0 - smoothstep(maskRadius, maskRadius + maskSoftness, r);
      col *= vignette;
      col = 1.0 - exp(-col * 1.5);

      gl_FragColor = vec4(col, 1.0);
  }
`,Np=c=>{const a=parseInt(c.replace("#",""),16),o=(a>>16&255)/255,l=(a>>8&255)/255,s=(a&255)/255;return[o,l,s]},L2=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c);return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(M,U)=>{const z=r.createShader(U);return z?(r.shaderSource(z,M),r.compileShader(z),r.getShaderParameter(z,r.COMPILE_STATUS)?z:(r.deleteShader(z),null)):null},g=m(M2,r.VERTEX_SHADER),v=m(O2,r.FRAGMENT_SHADER);if(!g||!v)return;const p=r.createProgram();if(!p)return;r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),r.useProgram(p);const y=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,y,r.STATIC_DRAW);const S=r.getAttribLocation(p,"position");r.enableVertexAttribArray(S),r.vertexAttribPointer(S,2,r.FLOAT,!1,0,0);const C=r.getUniformLocation(p,"iResolution"),_=r.getUniformLocation(p,"iTime"),A=r.getUniformLocation(p,"uColor1"),D=r.getUniformLocation(p,"uColor2"),H=r.getUniformLocation(p,"uSpeed"),E=r.getUniformLocation(p,"uDensity"),G=r.getUniformLocation(p,"uSuction");let O=!0;const Y=()=>{if(!O)return;const M=f.clientWidth*window.devicePixelRatio,U=f.clientHeight*window.devicePixelRatio;(f.width!==M||f.height!==U)&&(f.width=M,f.height=U,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const z=(Date.now()-l.current)/1e3,B=s.current,Z=Np(B.color1),W=Np(B.color2);r.uniform2f(C,f.width,f.height),r.uniform1f(_,z),r.uniform3f(A,Z[0],Z[1],Z[2]),r.uniform3f(D,W[0],W[1],W[2]),r.uniform1f(H,B.speed),r.uniform1f(E,B.density),r.uniform1f(G,B.suction),r.drawArrays(r.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(Y)};return Y(),()=>{O=!1,cancelAnimationFrame(o.current),r.deleteProgram(p)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},Ap=[{id:"arcane",label:"Arcane",c1:"#8b5cf6",c2:"#06b6d4"},{id:"biohazard",label:"Biohazard",c1:"#4ade80",c2:"#022c22"},{id:"inferno",label:"Inferno",c1:"#f59e0b",c2:"#b91c1c"},{id:"void",label:"The Void",c1:"#ffffff",c2:"#000000"}],Ju=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(1)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),U2=({params:c,onChange:a})=>{const o=Ap.find(l=>l.c1===c.color1&&l.c2===c.color2);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(Ju,{label:"Flow Speed",value:c.speed,min:0,max:5,step:.1,onChange:l=>a({...c,speed:l})}),h.jsx(Ju,{label:"Twist Intensity",value:c.suction,min:0,max:3,step:.1,onChange:l=>a({...c,suction:l})}),h.jsx(Ju,{label:"Noise Density",value:c.density,min:1,max:10,step:.5,onChange:l=>a({...c,density:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Resonance"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:Ap.map(l=>h.jsx("button",{onClick:()=>a({...c,color1:l.c1,color2:l.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(o==null?void 0:o.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.c1}, ${l.c2})`},title:l.label},l.id))}),o&&h.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:o.label})]})]})},B2=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,k2=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float u_speed;
  uniform float u_zoom;
  uniform float u_warpStrength;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform vec3 u_color3;

  float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  #define OCTAVES 6
  float fbm(in vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
    }
    return value;
  }

  vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
    return a + b*cos(6.28318*(c*t+d));
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    uv.x *= iResolution.x / iResolution.y;
    vec2 p = uv * u_zoom;
    float t = iTime * u_speed;

    vec2 q = vec2(0.0);
    q.x = fbm(p + vec2(0.0, 0.0) + 0.05*t);
    q.y = fbm(p + vec2(5.2, 1.3) + 0.05*t);

    vec2 r = vec2(0.0);
    r.x = fbm(p + u_warpStrength*q + vec2(1.7, 9.2) + 0.15*t);
    r.y = fbm(p + u_warpStrength*q + vec2(8.3, 2.8) + 0.126*t);

    float f = fbm(p + u_warpStrength*r);

    vec3 color = mix(u_color1, u_color2, clamp(length(q), 0.0, 1.0));
    vec3 highlight = u_color3;
    float highlightMix = smoothstep(0.2, 0.8, f);
    color = mix(color, highlight, highlightMix);

    vec3 accent = mix(u_color2, u_color3, 0.5) * 1.2;
    color = mix(color, accent, smoothstep(0.0, 1.0, length(r.x) * length(r.y)));

    vec3 oilPalette = palette(
      length(q) + f,
      (u_color1 + u_color2) * 0.5,
      (u_color3 - u_color1) * 0.5,
      vec3(1.0, 1.0, 1.0),
      vec3(0.0, 0.33, 0.67)
    );

    color = mix(color, oilPalette, 0.3);
    color *= f * f * 2.5 + 0.5;

    gl_FragColor = vec4(color, 1.0);
  }
`,Wu=c=>{const a=parseInt(c.slice(1,3),16)/255,o=parseInt(c.slice(3,5),16)/255,l=parseInt(c.slice(5,7),16)/255;return[a,o,l]},F2=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c);return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(U,z)=>{const B=r.createShader(z);return B?(r.shaderSource(B,U),r.compileShader(B),r.getShaderParameter(B,r.COMPILE_STATUS)?B:(r.deleteShader(B),null)):null},g=m(B2,r.VERTEX_SHADER),v=m(k2,r.FRAGMENT_SHADER);if(!g||!v)return;const p=r.createProgram();if(!p)return;r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),r.useProgram(p);const y=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,y,r.STATIC_DRAW);const S=r.getAttribLocation(p,"position");r.enableVertexAttribArray(S),r.vertexAttribPointer(S,2,r.FLOAT,!1,0,0);const C=r.getUniformLocation(p,"iResolution"),_=r.getUniformLocation(p,"iTime"),A=r.getUniformLocation(p,"u_speed"),D=r.getUniformLocation(p,"u_zoom"),H=r.getUniformLocation(p,"u_warpStrength"),E=r.getUniformLocation(p,"u_color1"),G=r.getUniformLocation(p,"u_color2"),O=r.getUniformLocation(p,"u_color3");let Y=!0;const M=()=>{if(!Y)return;const U=f.clientWidth*window.devicePixelRatio,z=f.clientHeight*window.devicePixelRatio;(f.width!==U||f.height!==z)&&(f.width=U,f.height=z,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const B=(Date.now()-l.current)/1e3,Z=s.current,W=Wu(Z.color1),$=Wu(Z.color2),ne=Wu(Z.color3);r.uniform2f(C,f.width,f.height),r.uniform1f(_,B),r.uniform1f(A,Z.speed),r.uniform1f(D,Z.zoom),r.uniform1f(H,Z.warpStrength),r.uniform3f(E,W[0],W[1],W[2]),r.uniform3f(G,$[0],$[1],$[2]),r.uniform3f(O,ne[0],ne[1],ne[2]),r.drawArrays(r.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(M)};return M(),()=>{Y=!1,cancelAnimationFrame(o.current),r.deleteProgram(p)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},Rp=[{id:"ocean",label:"Deep Ocean",c1:"#000d33",c2:"#1a664d",c3:"#ffcc33"},{id:"sunset",label:"Sunset",c1:"#1a0a2e",c2:"#b44d12",c3:"#f5d442"},{id:"aurora",label:"Aurora",c1:"#0a1628",c2:"#2dd4bf",c3:"#a78bfa"},{id:"midnight",label:"Midnight",c1:"#0f172a",c2:"#334155",c3:"#e2e8f0"}],$u=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(s<.1?2:1)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),H2=({params:c,onChange:a})=>{const o=Rp.find(l=>l.c1===c.color1&&l.c2===c.color2&&l.c3===c.color3);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx($u,{label:"Flow Speed",value:c.speed,min:0,max:2,step:.01,onChange:l=>a({...c,speed:l})}),h.jsx($u,{label:"Zoom / Scale",value:c.zoom,min:.5,max:10,step:.1,onChange:l=>a({...c,zoom:l})}),h.jsx($u,{label:"Warp Strength",value:c.warpStrength,min:0,max:8,step:.1,onChange:l=>a({...c,warpStrength:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Theme Presets"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:Rp.map(l=>h.jsx("button",{onClick:()=>a({...c,color1:l.c1,color2:l.c2,color3:l.c3}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(o==null?void 0:o.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.c1}, ${l.c2}, ${l.c3})`},title:l.label},l.id))}),o&&h.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:o.label})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Custom Palette"}),h.jsx("div",{className:"flex flex-col gap-2",children:[{key:"color1",label:"Base"},{key:"color2",label:"Mid"},{key:"color3",label:"Highlight"}].map(({key:l,label:s})=>h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 w-12",children:s}),h.jsxs("div",{className:"flex-1 flex items-center gap-1.5 bg-neutral-50 rounded-lg px-2 py-1",children:[h.jsx("input",{type:"color",value:c[l],onChange:f=>a({...c,[l]:f.target.value}),className:"w-4 h-4 rounded cursor-pointer bg-transparent p-0",style:{border:"none"}}),h.jsx("span",{className:"text-[9px] font-mono text-neutral-500",children:c[l]})]})]},l))})]})]})},q2=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,G2=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform vec2 iMouse;
  uniform float uBlockSize;
  uniform float uSpacing;
  uniform float uTimeSpeed;
  uniform float uMouseInfluence;
  uniform float uFogStart;
  uniform float uFogEnd;
  uniform float uCamDistance;

  #define PI 3.14159
  #define TWO_PI 6.28318
  #define NUM_MARCH_ITERS 60
  #define MAX_DIST 150.0

  float g_time = 0.;
  vec2 g_mouse = vec2(0.);

  float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
  }

  mat2 rot2D(float a) {
      float c = cos(a), s = sin(a);
      return mat2(c, -s, s, c);
  }

  vec3 get_block_info(vec3 cellPos) {
      float h = hash(cellPos.xz * 0.13 + floor(g_time * 0.1));
      float wave = sin(cellPos.x * 0.15 + g_time * 0.8) * cos(cellPos.z * 0.12 + g_time * 0.6);
      float wave2 = sin(cellPos.x * 0.3 - cellPos.z * 0.2 + g_time * 1.2);
      float distToMouse = length(cellPos.xz - g_mouse * 50.0);
      float disturbance = smoothstep(20.0, 0.0, distToMouse) * sin(g_time * 5.0);
      float activation = wave + wave2 * 0.5 + disturbance;
      float exists = smoothstep(0.8, 1.2, activation + h * 0.5);
      float yOffset = sin(g_time * 2.0 + h * 10.0) * 0.2;
      return vec3(exists, h, yOffset);
  }

  vec3 get_block_color(float id, vec3 normal) {
      vec3 baseCol = vec3(0.95, 0.96, 0.98);
      if (id > 0.96) baseCol = vec3(1.0, 0.6, 0.2);
      else if (id > 0.92) baseCol = vec3(0.2, 0.5, 0.9);
      else if (id > 0.85) baseCol = vec3(0.85, 0.85, 0.85);
      float shade = 0.8 + 0.2 * normal.y;
      return baseCol * shade;
  }

  float edge_highlight(vec2 uv) {
      vec2 d = abs(uv - 0.5) * 2.0;
      float border = max(d.x, d.y);
      return smoothstep(0.85, 0.95, border);
  }

  void dda_march(vec3 ro, vec3 rd, out vec4 color) {
      float size = uSpacing;
      vec3 mapPos = floor(ro / size) * size;
      vec3 deltaDist = abs(vec3(length(rd)) / rd) * size;
      vec3 rayStep = sign(rd) * size;
      vec3 sideDist = (sign(rd) * (mapPos - ro) + (sign(rd) * 0.5 + 0.5) * size) * deltaDist / size;
      vec3 mask = vec3(0.0);

      bool hit = false;
      vec3 hitPos = vec3(0.0);
      vec3 normal = vec3(0.0);
      vec3 blockData = vec3(0.0);
      vec2 blockUV = vec2(0.0);

      for (int i = 0; i < NUM_MARCH_ITERS; i++) {
          if (length(mapPos - ro) > MAX_DIST) break;
          blockData = get_block_info(mapPos);

          if (blockData.x > 0.01) {
              vec3 center = mapPos + size * 0.5;
              center.y += blockData.z;
              vec3 halfSize = vec3(uBlockSize * 0.5 * blockData.x);
              vec3 rayLocal = (ro - center);
              vec3 t1 = (-halfSize - rayLocal) / rd;
              vec3 t2 = ( halfSize - rayLocal) / rd;
              vec3 tN = min(t1, t2);
              vec3 tF = max(t1, t2);
              float tNear = max(max(tN.x, tN.y), tN.z);
              float tFar = min(min(tF.x, tF.y), tF.z);

              if (tNear < tFar && tFar > 0.0) {
                  hit = true;
                  hitPos = ro + rd * tNear;
                  vec3 localHit = hitPos - center;
                  vec3 aLocalHit = abs(localHit);
                  if (aLocalHit.x > aLocalHit.y && aLocalHit.x > aLocalHit.z) normal = vec3(sign(localHit.x), 0., 0.);
                  else if (aLocalHit.y > aLocalHit.z) normal = vec3(0., sign(localHit.y), 0.);
                  else normal = vec3(0., 0., sign(localHit.z));
                  if (abs(normal.y) > 0.5) blockUV = localHit.xz / uBlockSize + 0.5;
                  else if (abs(normal.x) > 0.5) blockUV = localHit.zy / uBlockSize + 0.5;
                  else blockUV = localHit.xy / uBlockSize + 0.5;
                  break;
              }
          }
          mask = step(sideDist.xyz, sideDist.yxy) * step(sideDist.xyz, sideDist.zzx);
          sideDist += mask * deltaDist;
          mapPos += mask * rayStep;
      }

      vec3 fogColor = vec3(0.98, 0.98, 0.99);

      if (hit) {
          vec3 sunDir = normalize(vec3(0.5, 0.8, 0.3));
          float diff = max(dot(normal, sunDir), 0.0);
          float amb = 0.6 + 0.4 * normal.y;
          vec3 surfaceCol = get_block_color(blockData.y, normal);
          float edge = edge_highlight(blockUV);
          surfaceCol = mix(surfaceCol, vec3(1.0), edge * 0.5);
          vec3 finalCol = surfaceCol * (diff * 0.7 + amb * 0.6);
          float dist = length(hitPos - ro);
          float fogFactor = smoothstep(uFogStart, uFogEnd, dist);
          color = vec4(mix(finalCol, fogColor, fogFactor), 1.0);
      } else {
          color = vec4(fogColor, 1.0);
      }
  }

  void setup_camera(vec2 uv, vec2 mouse, out vec3 ro, out vec3 rd) {
      float rotX = mouse.x * 1.5 * uMouseInfluence + PI * 0.25;
      float rotY = 0.6 + mouse.y * 0.4 * uMouseInfluence;
      ro = vec3(
          uCamDistance * cos(rotX) * cos(rotY),
          uCamDistance * sin(rotY),
          uCamDistance * sin(rotX) * cos(rotY)
      );
      vec3 ta = vec3(0.0, -10.0, 0.0);
      vec3 cw = normalize(ta - ro);
      vec3 cp = vec3(0.0, 1.0, 0.0);
      vec3 cu = normalize(cross(cw, cp));
      vec3 cv = normalize(cross(cu, cw));
      rd = normalize(uv.x * cu + uv.y * cv + 3.5 * cw);
  }

  void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
      vec2 mouse = iMouse;
      g_mouse = mouse;
      g_time = iTime * uTimeSpeed;
      vec3 ro, rd;
      setup_camera(uv, mouse * 0.2, ro, rd);
      vec4 col;
      dda_march(ro, rd, col);
      col.rgb = pow(col.rgb, vec3(0.4545));
      float vignette = 1.0 - dot(uv, uv) * 0.15;
      col.rgb *= vignette;
      gl_FragColor = col;
  }
`,V2=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c),f=L.useRef({x:.5,y:.5});return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const r=a.current;if(!r)return;const m=g=>{const v=r.getBoundingClientRect();f.current={x:(g.clientX-v.left)/v.width*2-1,y:-((g.clientY-v.top)/v.height*2-1)}};return r.addEventListener("mousemove",m),()=>r.removeEventListener("mousemove",m)},[]),L.useEffect(()=>{const r=a.current;if(!r)return;const m=r.getContext("webgl");if(!m)return;const g=(Z,W)=>{const $=m.createShader(W);return $?(m.shaderSource($,Z),m.compileShader($),m.getShaderParameter($,m.COMPILE_STATUS)?$:(m.deleteShader($),null)):null},v=g(q2,m.VERTEX_SHADER),p=g(G2,m.FRAGMENT_SHADER);if(!v||!p)return;const y=m.createProgram();if(!y)return;m.attachShader(y,v),m.attachShader(y,p),m.linkProgram(y),m.useProgram(y);const w=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,S),m.bufferData(m.ARRAY_BUFFER,w,m.STATIC_DRAW);const C=m.getAttribLocation(y,"position");m.enableVertexAttribArray(C),m.vertexAttribPointer(C,2,m.FLOAT,!1,0,0);const _=m.getUniformLocation(y,"iResolution"),A=m.getUniformLocation(y,"iTime"),D=m.getUniformLocation(y,"iMouse"),H=m.getUniformLocation(y,"uBlockSize"),E=m.getUniformLocation(y,"uSpacing"),G=m.getUniformLocation(y,"uTimeSpeed"),O=m.getUniformLocation(y,"uMouseInfluence"),Y=m.getUniformLocation(y,"uFogStart"),M=m.getUniformLocation(y,"uFogEnd"),U=m.getUniformLocation(y,"uCamDistance");let z=!0;const B=()=>{if(!z)return;const Z=r.clientWidth*window.devicePixelRatio,W=r.clientHeight*window.devicePixelRatio;(r.width!==Z||r.height!==W)&&(r.width=Z,r.height=W,m.viewport(0,0,m.drawingBufferWidth,m.drawingBufferHeight));const $=(Date.now()-l.current)/1e3,ne=s.current;m.uniform2f(_,r.width,r.height),m.uniform1f(A,$),m.uniform2f(D,f.current.x,f.current.y),m.uniform1f(H,ne.blockSize),m.uniform1f(E,ne.spacing),m.uniform1f(G,ne.timeSpeed),m.uniform1f(O,ne.mouseInfluence),m.uniform1f(Y,ne.fogStart),m.uniform1f(M,ne.fogEnd),m.uniform1f(U,ne.camDistance),m.drawArrays(m.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(B)};return B(),()=>{z=!1,cancelAnimationFrame(o.current),m.deleteProgram(y)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},zp=[{id:"default",label:"Default",params:{blockSize:1.5,spacing:2.5,timeSpeed:.8,mouseInfluence:1,fogStart:40,fogEnd:100,camDistance:80}},{id:"dense",label:"Dense Grid",params:{blockSize:1.8,spacing:2.2,timeSpeed:1.2,mouseInfluence:.8,fogStart:30,fogEnd:80,camDistance:70}},{id:"sparse",label:"Sparse Flow",params:{blockSize:1.2,spacing:3.5,timeSpeed:.5,mouseInfluence:1.5,fogStart:50,fogEnd:120,camDistance:100}},{id:"distant",label:"Distant View",params:{blockSize:1.5,spacing:2.5,timeSpeed:.6,mouseInfluence:.5,fogStart:60,fogEnd:150,camDistance:120}}],tl=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(1)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Y2=({params:c,onChange:a})=>{const o=zp.find(l=>l.params.blockSize===c.blockSize&&l.params.spacing===c.spacing&&l.params.timeSpeed===c.timeSpeed&&l.params.camDistance===c.camDistance);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Geometry"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(tl,{label:"Block Size",value:c.blockSize,min:.5,max:3,step:.1,onChange:l=>a({...c,blockSize:l})}),h.jsx(tl,{label:"Grid Spacing",value:c.spacing,min:1.5,max:5,step:.1,onChange:l=>a({...c,spacing:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(tl,{label:"Time Speed",value:c.timeSpeed,min:0,max:2,step:.1,onChange:l=>a({...c,timeSpeed:l})}),h.jsx(tl,{label:"Mouse Influence",value:c.mouseInfluence,min:0,max:2,step:.1,onChange:l=>a({...c,mouseInfluence:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Camera & Atmosphere"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(tl,{label:"Camera Distance",value:c.camDistance,min:50,max:150,step:5,onChange:l=>a({...c,camDistance:l})}),h.jsx(tl,{label:"Fog Start",value:c.fogStart,min:20,max:80,step:5,onChange:l=>a({...c,fogStart:l})}),h.jsx(tl,{label:"Fog End",value:c.fogEnd,min:60,max:180,step:10,onChange:l=>a({...c,fogEnd:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"View Presets"}),h.jsx("div",{className:"flex flex-col gap-1.5",children:zp.map(l=>h.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(o==null?void 0:o.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},X2=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,P2=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uFlowSpeed;
  uniform float uStreakLength;
  uniform float uZoom;
  uniform float uTurbulence;
  uniform float uGridOpacity;

  float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
  }

  float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
      float v = 0.0;
      float amp = 0.5;
      float freq = 1.0;
      for (int i = 0; i < 5; i++) {
          v += amp * noise(p * freq);
          freq *= 2.0;
          amp *= 0.5;
      }
      return v;
  }

  vec2 getFlowField(vec2 p) {
      float t = iTime * uFlowSpeed;
      float zonal = sin(p.y * 3.0 + cos(p.y * 1.5));
      vec2 flow = vec2(zonal, 0.0);
      float eps = 0.05;
      vec2 shift = vec2(t * 0.2, 0.0);
      float n1 = fbm(p * 1.5 + shift);
      float n2 = fbm(p * 1.5 + vec2(eps, 0.0) + shift);
      float n3 = fbm(p * 1.5 + vec2(0.0, eps) + shift);
      vec2 curl = vec2((n3 - n1)/eps, -(n2 - n1)/eps);
      vec2 combined = flow * 0.5 + curl * uTurbulence;
      return combined;
  }

  vec3 getHeatmapColor(float t) {
      vec3 c0 = vec3(0.00, 0.05, 0.20);
      vec3 c1 = vec3(0.00, 0.35, 0.70);
      vec3 c2 = vec3(0.00, 0.70, 0.60);
      vec3 c3 = vec3(0.90, 0.90, 0.20);
      vec3 c4 = vec3(0.90, 0.20, 0.00);
      vec3 c5 = vec3(1.00, 0.95, 0.90);
      float v = clamp(t, 0.0, 1.0);
      vec3 col = c0;
      col = mix(col, c1, smoothstep(0.0, 0.2, v));
      col = mix(col, c2, smoothstep(0.2, 0.4, v));
      col = mix(col, c3, smoothstep(0.4, 0.7, v));
      col = mix(col, c4, smoothstep(0.7, 0.9, v));
      col = mix(col, c5, smoothstep(0.9, 1.0, v));
      return col;
  }

  void main() {
      vec2 uv = gl_FragCoord.xy / iResolution.xy;
      vec2 p = uv * 2.0 - 1.0;
      p.x *= iResolution.x / iResolution.y;
      p *= uZoom;

      vec2 velocity = getFlowField(p);
      float speed = length(velocity);

      float cycleLen = 2.0;
      float timer = iTime * 0.5;
      float phase1 = fract(timer);
      float phase2 = fract(timer + 0.5);

      vec2 p1 = p - velocity * phase1 * uStreakLength;
      vec2 p2 = p - velocity * phase2 * uStreakLength;

      float noise1 = fbm(p1 * 4.0 + vec2(32.4, 9.2));
      float noise2 = fbm(p2 * 4.0 + vec2(51.2, 1.1));

      float blend = abs(2.0 * (0.5 - phase1));
      float streaks = mix(noise1, noise2, blend);
      streaks = smoothstep(0.3, 0.7, streaks);

      float speedNorm = smoothstep(0.0, 2.5, speed);
      vec3 baseColor = getHeatmapColor(speedNorm);

      float streakIntensity = smoothstep(0.1, 0.5, speedNorm);
      vec3 finalColor = baseColor * (0.7 + 0.6 * streaks * streakIntensity);

      float landNoise = fbm(p * 0.8 + vec2(10.0, 10.0));
      float landMask = smoothstep(0.55, 0.56, landNoise);
      finalColor = mix(finalColor, vec3(0.05, 0.08, 0.1), landMask * 0.8);

      vec2 gridUV = fract(p + 0.5);
      float grid = smoothstep(0.02, 0.0, abs(gridUV.x - 0.5)) + smoothstep(0.02, 0.0, abs(gridUV.y - 0.5));
      finalColor += vec3(0.3) * grid * uGridOpacity;

      float vig = 1.0 - length(uv - 0.5) * 0.6;
      finalColor *= vig;

      gl_FragColor = vec4(finalColor, 1.0);
  }
`,Q2=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c);return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(M,U)=>{const z=r.createShader(U);return z?(r.shaderSource(z,M),r.compileShader(z),r.getShaderParameter(z,r.COMPILE_STATUS)?z:(r.deleteShader(z),null)):null},g=m(X2,r.VERTEX_SHADER),v=m(P2,r.FRAGMENT_SHADER);if(!g||!v)return;const p=r.createProgram();if(!p)return;r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),r.useProgram(p);const y=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,y,r.STATIC_DRAW);const S=r.getAttribLocation(p,"position");r.enableVertexAttribArray(S),r.vertexAttribPointer(S,2,r.FLOAT,!1,0,0);const C=r.getUniformLocation(p,"iResolution"),_=r.getUniformLocation(p,"iTime"),A=r.getUniformLocation(p,"uFlowSpeed"),D=r.getUniformLocation(p,"uStreakLength"),H=r.getUniformLocation(p,"uZoom"),E=r.getUniformLocation(p,"uTurbulence"),G=r.getUniformLocation(p,"uGridOpacity");let O=!0;const Y=()=>{if(!O)return;const M=f.clientWidth*window.devicePixelRatio,U=f.clientHeight*window.devicePixelRatio;(f.width!==M||f.height!==U)&&(f.width=M,f.height=U,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const z=(Date.now()-l.current)/1e3,B=s.current;r.uniform2f(C,f.width,f.height),r.uniform1f(_,z),r.uniform1f(A,B.flowSpeed),r.uniform1f(D,B.streakLength),r.uniform1f(H,B.zoom),r.uniform1f(E,B.turbulence),r.uniform1f(G,B.gridOpacity),r.drawArrays(r.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(Y)};return Y(),()=>{O=!1,cancelAnimationFrame(o.current),r.deleteProgram(p)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},Ep=[{id:"calm",label:"Calm Breeze",params:{flowSpeed:.1,streakLength:1,zoom:2.5,turbulence:.8,gridOpacity:.15}},{id:"moderate",label:"Moderate Flow",params:{flowSpeed:.2,streakLength:1.5,zoom:2.5,turbulence:1.2,gridOpacity:.15}},{id:"turbulent",label:"Turbulent Current",params:{flowSpeed:.35,streakLength:2,zoom:2,turbulence:1.8,gridOpacity:.1}},{id:"storm",label:"Storm System",params:{flowSpeed:.5,streakLength:2.5,zoom:1.8,turbulence:2.5,gridOpacity:.05}}],go=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Z2=({params:c,onChange:a})=>{const o=Ep.find(l=>l.params.flowSpeed===c.flowSpeed&&l.params.streakLength===c.streakLength&&l.params.turbulence===c.turbulence);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Flow Dynamics"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(go,{label:"Flow Speed",value:c.flowSpeed,min:0,max:.8,step:.05,onChange:l=>a({...c,flowSpeed:l})}),h.jsx(go,{label:"Turbulence",value:c.turbulence,min:.5,max:3,step:.1,onChange:l=>a({...c,turbulence:l})}),h.jsx(go,{label:"Streak Length",value:c.streakLength,min:.5,max:3,step:.1,onChange:l=>a({...c,streakLength:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"View Settings"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(go,{label:"Zoom",value:c.zoom,min:1,max:4,step:.1,onChange:l=>a({...c,zoom:l})}),h.jsx(go,{label:"Grid Opacity",value:c.gridOpacity,min:0,max:.3,step:.05,onChange:l=>a({...c,gridOpacity:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Flow Presets"}),h.jsx("div",{className:"flex flex-col gap-1.5",children:Ep.map(l=>h.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(o==null?void 0:o.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},K2=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,I2=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uTwist;
  uniform float uNoise;
  uniform float uWidth;
  uniform vec3 uColor1;
  uniform vec3 uColor2;

  float orb(vec3 p, float t) {
    float ot = t * 4.0;
    return length(p - vec3(
      sin(sin(ot * 0.2) + ot * 0.4) * 6.0,
      1.0 + sin(sin(ot * 0.5) + ot * 0.2) * 4.0,
      12.0 + t + cos(ot * 0.3) * 8.0
    ));
  }

  void main() {
    float t = iTime * uSpeed;
    vec2 uv = (2.0 * gl_FragCoord.xy - iResolution.xy) / iResolution.y;

    // Camera sway
    uv += vec2(cos(t * 0.1) * 0.3, cos(t * 0.3) * 0.1);

    float d = 0.0;
    vec3 col = vec3(0.0);

    for (float i = 0.0; i < 128.0; i += 1.0) {
      // Ray position
      vec3 p = vec3(uv * d, d + t);

      // Orb distance
      float e = orb(p, t) - 0.1;

      // Twist space
      float angle = uTwist * (0.1 * t + p.z / 8.0);
      vec4 cv = cos(angle + vec4(0.0, 33.0, 11.0, 0.0));
      p.xy = mat2(cv.x, cv.y, cv.z, cv.w) * p.xy;

      // Mirrored tunnel walls
      float s = uWidth - abs(p.y);

      // Noise octaves (6 iterations: 0.8 → 25.6)
      for (float j = 0.0; j < 6.0; j += 1.0) {
        float a = 0.8 * exp2(j);
        p += cos(0.7 * t + p.yzx) * 0.2;
        s -= abs(dot(sin(0.1 * t + p * a), vec3(0.6))) / a * uNoise;
      }

      // Adaptive march step
      float eClamp = max(0.5 * e, 0.01);
      float stepSize = min(0.03 + 0.2 * abs(s), eClamp);
      d += stepSize;

      // Volumetric glow accumulation
      float glow = 1.0 / (stepSize + eClamp * 3.0);
      float orbInfluence = exp(-e * 0.3);
      col += mix(uColor1, uColor2, orbInfluence) * glow;
    }

    // Tanh tonemapping
    col /= 10.0;
    vec3 e2x = exp(2.0 * clamp(col, -10.0, 10.0));
    col = (e2x - 1.0) / (e2x + 1.0);

    gl_FragColor = vec4(col, 1.0);
  }
`,jp=c=>{const a=parseInt(c.replace("#",""),16),o=(a>>16&255)/255,l=(a>>8&255)/255,s=(a&255)/255;return[o,l,s]},J2=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c);return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(U,z)=>{const B=r.createShader(z);return B?(r.shaderSource(B,U),r.compileShader(B),r.getShaderParameter(B,r.COMPILE_STATUS)?B:(console.error("Shader error:",r.getShaderInfoLog(B)),r.deleteShader(B),null)):null},g=m(K2,r.VERTEX_SHADER),v=m(I2,r.FRAGMENT_SHADER);if(!g||!v)return;const p=r.createProgram();if(!p)return;if(r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),!r.getProgramParameter(p,r.LINK_STATUS)){console.error("Link error:",r.getProgramInfoLog(p));return}r.useProgram(p);const y=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,y,r.STATIC_DRAW);const S=r.getAttribLocation(p,"position");r.enableVertexAttribArray(S),r.vertexAttribPointer(S,2,r.FLOAT,!1,0,0);const C=r.getUniformLocation(p,"iResolution"),_=r.getUniformLocation(p,"iTime"),A=r.getUniformLocation(p,"uSpeed"),D=r.getUniformLocation(p,"uTwist"),H=r.getUniformLocation(p,"uNoise"),E=r.getUniformLocation(p,"uWidth"),G=r.getUniformLocation(p,"uColor1"),O=r.getUniformLocation(p,"uColor2");let Y=!0;const M=()=>{if(!Y)return;const U=f.clientWidth*window.devicePixelRatio,z=f.clientHeight*window.devicePixelRatio;(f.width!==U||f.height!==z)&&(f.width=U,f.height=z,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const B=(Date.now()-l.current)/1e3,Z=s.current,W=jp(Z.color1),$=jp(Z.color2);r.uniform2f(C,f.width,f.height),r.uniform1f(_,B),r.uniform1f(A,Z.speed),r.uniform1f(D,Z.twist),r.uniform1f(H,Z.noise),r.uniform1f(E,Z.width),r.uniform3f(G,W[0],W[1],W[2]),r.uniform3f(O,$[0],$[1],$[2]),r.drawArrays(r.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(M)};return M(),()=>{Y=!1,cancelAnimationFrame(o.current),r.deleteProgram(p)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},Dp=[{id:"cyber",label:"Cyber",c1:"#4f46e5",c2:"#06b6d4"},{id:"inferno",label:"Inferno",c1:"#dc2626",c2:"#f59e0b"},{id:"matrix",label:"Matrix",c1:"#059669",c2:"#d4ff00"},{id:"void",label:"Void",c1:"#a855f7",c2:"#1e1b4b"}],ns=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(s<.1?2:1)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),W2=({params:c,onChange:a})=>{const o=Dp.find(l=>l.c1===c.color1&&l.c2===c.color2);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(ns,{label:"Speed",value:c.speed,min:0,max:2,step:.05,onChange:l=>a({...c,speed:l})}),h.jsx(ns,{label:"Twist",value:c.twist,min:0,max:3,step:.1,onChange:l=>a({...c,twist:l})}),h.jsx(ns,{label:"Noise",value:c.noise,min:0,max:2,step:.1,onChange:l=>a({...c,noise:l})}),h.jsx(ns,{label:"Tunnel Width",value:c.width,min:2,max:8,step:.5,onChange:l=>a({...c,width:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:Dp.map(l=>h.jsx("button",{onClick:()=>a({...c,color1:l.c1,color2:l.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(o==null?void 0:o.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.c1}, ${l.c2})`},title:l.label},l.id))}),o&&h.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:o.label})]})]})},$2=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,ey=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uScale;
  uniform float uDensity;
  uniform float uBrightness;
  uniform vec3 uColor1;
  uniform vec3 uColor2;

  // Orb — spiraling light source
  float orb(vec3 p, float t) {
    float ot = t * 3.0;
    return length(p - vec3(
      sin(ot * 0.3) * 4.0,
      cos(ot * 0.2) * 3.0,
      8.0 + t + sin(ot * 0.15) * 5.0
    ));
  }

  // Second orb for richer lighting
  float orb2(vec3 p, float t) {
    float ot = t * 2.5;
    return length(p - vec3(
      cos(ot * 0.4) * 3.0,
      sin(ot * 0.35) * 2.5,
      6.0 + t + cos(ot * 0.2) * 4.0
    ));
  }

  void main() {
    float t = iTime * uSpeed;
    vec2 uv = (2.0 * gl_FragCoord.xy - iResolution.xy) / iResolution.y;

    // Gentle camera drift
    uv += vec2(sin(t * 0.08) * 0.15, cos(t * 0.12) * 0.1);

    float d = 0.0;
    vec3 col = vec3(0.0);

    for (float i = 0.0; i < 100.0; i += 1.0) {
      // Ray position, moving forward through noise field
      vec3 p = vec3(uv * d, d + t * 0.4);

      // Orb distances
      float e1 = orb(p, t) - 0.1;
      float e2 = orb2(p, t) - 0.1;
      float e = min(e1, e2);

      // Slow space rotation
      float angle = t * 0.08;
      float ca = cos(angle);
      float sa = sin(angle);
      p.xz = vec2(ca * p.x - sa * p.z, sa * p.x + ca * p.z);

      // Volumetric noise density
      float s = 0.0;
      for (float j = 0.0; j < 5.0; j += 1.0) {
        float a = exp2(j);
        p += cos(0.5 * t + p.yzx) * 0.15;
        s += abs(dot(sin(0.12 * t + p * a * uScale), vec3(0.6))) / a;
      }

      // Shape: subtract base threshold to create voids and clouds
      s = s * uDensity - 0.4;

      // Adaptive march step
      float eClamp = max(0.5 * e, 0.01);
      float stepSize = min(0.04 + 0.15 * max(abs(s), 0.01), eClamp);
      d += stepSize;

      // Volumetric glow: accumulate light based on proximity to noise surface
      float glow = 1.0 / (stepSize + eClamp * 2.0);

      // Orb-based color mixing
      float orbMix = exp(-e * 0.25);
      col += mix(uColor1, uColor2, orbMix) * glow;

      if (d > 40.0) break;
    }

    // Tanh tonemapping with brightness control
    col *= uBrightness / 12.0;
    vec3 e2x = exp(2.0 * clamp(col, -10.0, 10.0));
    col = (e2x - 1.0) / (e2x + 1.0);

    gl_FragColor = vec4(col, 1.0);
  }
`,Mp=c=>{const a=parseInt(c.replace("#",""),16),o=(a>>16&255)/255,l=(a>>8&255)/255,s=(a&255)/255;return[o,l,s]},ty=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c);return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(U,z)=>{const B=r.createShader(z);return B?(r.shaderSource(B,U),r.compileShader(B),r.getShaderParameter(B,r.COMPILE_STATUS)?B:(console.error("Shader error:",r.getShaderInfoLog(B)),r.deleteShader(B),null)):null},g=m($2,r.VERTEX_SHADER),v=m(ey,r.FRAGMENT_SHADER);if(!g||!v)return;const p=r.createProgram();if(!p)return;if(r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),!r.getProgramParameter(p,r.LINK_STATUS)){console.error("Link error:",r.getProgramInfoLog(p));return}r.useProgram(p);const y=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,y,r.STATIC_DRAW);const S=r.getAttribLocation(p,"position");r.enableVertexAttribArray(S),r.vertexAttribPointer(S,2,r.FLOAT,!1,0,0);const C=r.getUniformLocation(p,"iResolution"),_=r.getUniformLocation(p,"iTime"),A=r.getUniformLocation(p,"uSpeed"),D=r.getUniformLocation(p,"uScale"),H=r.getUniformLocation(p,"uDensity"),E=r.getUniformLocation(p,"uBrightness"),G=r.getUniformLocation(p,"uColor1"),O=r.getUniformLocation(p,"uColor2");let Y=!0;const M=()=>{if(!Y)return;const U=f.clientWidth*window.devicePixelRatio,z=f.clientHeight*window.devicePixelRatio;(f.width!==U||f.height!==z)&&(f.width=U,f.height=z,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const B=(Date.now()-l.current)/1e3,Z=s.current,W=Mp(Z.color1),$=Mp(Z.color2);r.uniform2f(C,f.width,f.height),r.uniform1f(_,B),r.uniform1f(A,Z.speed),r.uniform1f(D,Z.scale),r.uniform1f(H,Z.density),r.uniform1f(E,Z.brightness),r.uniform3f(G,W[0],W[1],W[2]),r.uniform3f(O,$[0],$[1],$[2]),r.drawArrays(r.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(M)};return M(),()=>{Y=!1,cancelAnimationFrame(o.current),r.deleteProgram(p)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},Op=[{id:"nebula",label:"Nebula",c1:"#3b0764",c2:"#06b6d4"},{id:"solar",label:"Solar",c1:"#7c2d12",c2:"#fbbf24"},{id:"arctic",label:"Arctic",c1:"#0c4a6e",c2:"#e0f2fe"},{id:"phantom",label:"Phantom",c1:"#18181b",c2:"#a78bfa"}],as=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(s<.1?2:1)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),ny=({params:c,onChange:a})=>{const o=Op.find(l=>l.c1===c.color1&&l.c2===c.color2);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(as,{label:"Speed",value:c.speed,min:0,max:1.5,step:.05,onChange:l=>a({...c,speed:l})}),h.jsx(as,{label:"Noise Scale",value:c.scale,min:.3,max:3,step:.1,onChange:l=>a({...c,scale:l})}),h.jsx(as,{label:"Density",value:c.density,min:.2,max:2,step:.1,onChange:l=>a({...c,density:l})}),h.jsx(as,{label:"Brightness",value:c.brightness,min:.3,max:3,step:.1,onChange:l=>a({...c,brightness:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:Op.map(l=>h.jsx("button",{onClick:()=>a({...c,color1:l.c1,color2:l.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(o==null?void 0:o.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.c1}, ${l.c2})`},title:l.label},l.id))}),o&&h.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:o.label})]})]})},ay=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,ly=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uScale;
  uniform float uHueShift;
  uniform float uSaturation;
  uniform float uBrightness;
  uniform float uWarpStrength;

  float hash(vec2 p) {
      p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
      return fract(sin(p.x) * 43758.5453);
  }

  float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
          mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
          u.y
      );
  }

  float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
      }
      return v;
  }

  vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
      vec2 uv = gl_FragCoord.xy / iResolution.xy;

      // Domain Warping
      vec2 movement = vec2(iTime * uSpeed * 0.2, iTime * uSpeed * 0.1);
      float n1 = fbm(uv * uScale * 3.0 + movement);

      vec2 distortedUV = uv + vec2(n1) * uWarpStrength;
      float n2 = fbm(distortedUV * uScale * 6.0 - movement);

      // Neon Color Mapping
      float hue = fract(uHueShift + iTime * 0.1 + n2 * 0.4);
      float sat = uSaturation;
      float val = (0.2 + 0.8 * n2) * uBrightness;

      vec3 col = hsv2rgb(vec3(hue, sat, val));

      // Contrast Enhancement
      col = smoothstep(0.1, 0.9, col);

      gl_FragColor = vec4(col, 1.0);
  }
`,iy=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c);return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(U,z)=>{const B=r.createShader(z);return B?(r.shaderSource(B,U),r.compileShader(B),r.getShaderParameter(B,r.COMPILE_STATUS)?B:(r.deleteShader(B),null)):null},g=m(ay,r.VERTEX_SHADER),v=m(ly,r.FRAGMENT_SHADER);if(!g||!v)return;const p=r.createProgram();if(!p)return;r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),r.useProgram(p);const y=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,y,r.STATIC_DRAW);const S=r.getAttribLocation(p,"position");r.enableVertexAttribArray(S),r.vertexAttribPointer(S,2,r.FLOAT,!1,0,0);const C=r.getUniformLocation(p,"iResolution"),_=r.getUniformLocation(p,"iTime"),A=r.getUniformLocation(p,"uSpeed"),D=r.getUniformLocation(p,"uScale"),H=r.getUniformLocation(p,"uHueShift"),E=r.getUniformLocation(p,"uSaturation"),G=r.getUniformLocation(p,"uBrightness"),O=r.getUniformLocation(p,"uWarpStrength");let Y=!0;const M=()=>{if(!Y)return;const U=f.clientWidth*window.devicePixelRatio,z=f.clientHeight*window.devicePixelRatio;(f.width!==U||f.height!==z)&&(f.width=U,f.height=z,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const B=(Date.now()-l.current)/1e3,Z=s.current;r.uniform2f(C,f.width,f.height),r.uniform1f(_,B),r.uniform1f(A,Z.speed),r.uniform1f(D,Z.scale),r.uniform1f(H,Z.hueShift),r.uniform1f(E,Z.saturation),r.uniform1f(G,Z.brightness),r.uniform1f(O,Z.warpStrength),r.drawArrays(r.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(M)};return M(),()=>{Y=!1,cancelAnimationFrame(o.current),r.deleteProgram(p)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},Lp=[{id:"electric",label:"Electric Blue",params:{speed:1,scale:1,hueShift:.5,saturation:.8,brightness:1,warpStrength:.3}},{id:"plasma",label:"Hot Plasma",params:{speed:1.5,scale:1.2,hueShift:0,saturation:.9,brightness:1.2,warpStrength:.5}},{id:"aurora",label:"Aurora Flow",params:{speed:.6,scale:.8,hueShift:.3,saturation:.7,brightness:.9,warpStrength:.4}},{id:"cyberpunk",label:"Cyberpunk",params:{speed:1.2,scale:1.5,hueShift:.8,saturation:1,brightness:1.1,warpStrength:.6}}],$l=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),oy=({params:c,onChange:a})=>{const o=Lp.find(l=>l.params.speed===c.speed&&l.params.scale===c.scale&&l.params.hueShift===c.hueShift);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx($l,{label:"Speed",value:c.speed,min:0,max:2,step:.1,onChange:l=>a({...c,speed:l})}),h.jsx($l,{label:"Scale",value:c.scale,min:.3,max:2,step:.1,onChange:l=>a({...c,scale:l})}),h.jsx($l,{label:"Warp Strength",value:c.warpStrength,min:0,max:1,step:.05,onChange:l=>a({...c,warpStrength:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx($l,{label:"Hue Shift",value:c.hueShift,min:0,max:1,step:.01,onChange:l=>a({...c,hueShift:l})}),h.jsx($l,{label:"Saturation",value:c.saturation,min:0,max:1,step:.05,onChange:l=>a({...c,saturation:l})}),h.jsx($l,{label:"Brightness",value:c.brightness,min:.3,max:1.5,step:.1,onChange:l=>a({...c,brightness:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Style Presets"}),h.jsx("div",{className:"flex flex-col gap-1.5",children:Lp.map(l=>h.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(o==null?void 0:o.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},ry=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,sy=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uScale;
  uniform float uHueSpeed;
  uniform float uSaturation;
  uniform float uBrightness;
  uniform float uContrast;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.1;
      a *= 0.5;
    }
    return v;
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    // Double Domain Warping
    float t = iTime * uSpeed;
    vec2 q = vec2(
      fbm(uv * uScale + t * 0.1),
      fbm(uv * uScale + vec2(1.0))
    );

    vec2 r = vec2(
      fbm(uv * uScale + q + t * 0.15),
      fbm(uv * uScale + q)
    );

    float n = fbm(uv * uScale + r);

    // Colorize with HSV
    float hue = fract(t * uHueSpeed * 0.05 + n * 0.3);
    vec3 col = hsv2rgb(vec3(hue, uSaturation, uBrightness * n + 0.2));

    // Contrast Enhancement
    col = pow(col, vec3(uContrast));
    col *= 1.4;

    gl_FragColor = vec4(col, 1.0);
  }
`,cy=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c);return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(U,z)=>{const B=r.createShader(z);return B?(r.shaderSource(B,U),r.compileShader(B),r.getShaderParameter(B,r.COMPILE_STATUS)?B:(r.deleteShader(B),null)):null},g=m(ry,r.VERTEX_SHADER),v=m(sy,r.FRAGMENT_SHADER);if(!g||!v)return;const p=r.createProgram();if(!p)return;r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),r.useProgram(p);const y=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,y,r.STATIC_DRAW);const S=r.getAttribLocation(p,"position");r.enableVertexAttribArray(S),r.vertexAttribPointer(S,2,r.FLOAT,!1,0,0);const C=r.getUniformLocation(p,"iResolution"),_=r.getUniformLocation(p,"iTime"),A=r.getUniformLocation(p,"uSpeed"),D=r.getUniformLocation(p,"uScale"),H=r.getUniformLocation(p,"uHueSpeed"),E=r.getUniformLocation(p,"uSaturation"),G=r.getUniformLocation(p,"uBrightness"),O=r.getUniformLocation(p,"uContrast");let Y=!0;const M=()=>{if(!Y)return;const U=f.clientWidth*window.devicePixelRatio,z=f.clientHeight*window.devicePixelRatio;(f.width!==U||f.height!==z)&&(f.width=U,f.height=z,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const B=(Date.now()-l.current)/1e3,Z=s.current;r.uniform2f(C,f.width,f.height),r.uniform1f(_,B),r.uniform1f(A,Z.speed),r.uniform1f(D,Z.scale),r.uniform1f(H,Z.hueSpeed),r.uniform1f(E,Z.saturation),r.uniform1f(G,Z.brightness),r.uniform1f(O,Z.contrast),r.drawArrays(r.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(M)};return M(),()=>{Y=!1,cancelAnimationFrame(o.current),r.deleteProgram(p)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},Up=[{id:"calm",label:"Calm Ocean",params:{speed:.5,scale:1,hueSpeed:.5,saturation:.6,brightness:.8,contrast:1.2}},{id:"vibrant",label:"Vibrant Flow",params:{speed:1,scale:1.2,hueSpeed:1,saturation:.7,brightness:.8,contrast:1.2}},{id:"psychedelic",label:"Psychedelic",params:{speed:1.5,scale:1.5,hueSpeed:2,saturation:.9,brightness:.8,contrast:1.4}},{id:"cosmic",label:"Cosmic Nebula",params:{speed:.8,scale:.8,hueSpeed:.3,saturation:.8,brightness:.7,contrast:1.5}}],ei=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),uy=({params:c,onChange:a})=>{const o=Up.find(l=>l.params.speed===c.speed&&l.params.scale===c.scale&&l.params.hueSpeed===c.hueSpeed);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Flow Dynamics"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(ei,{label:"Speed",value:c.speed,min:0,max:2,step:.1,onChange:l=>a({...c,speed:l})}),h.jsx(ei,{label:"Scale",value:c.scale,min:.3,max:2,step:.1,onChange:l=>a({...c,scale:l})}),h.jsx(ei,{label:"Hue Speed",value:c.hueSpeed,min:0,max:3,step:.1,onChange:l=>a({...c,hueSpeed:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(ei,{label:"Saturation",value:c.saturation,min:0,max:1,step:.05,onChange:l=>a({...c,saturation:l})}),h.jsx(ei,{label:"Brightness",value:c.brightness,min:.3,max:1.2,step:.1,onChange:l=>a({...c,brightness:l})}),h.jsx(ei,{label:"Contrast",value:c.contrast,min:.8,max:2,step:.1,onChange:l=>a({...c,contrast:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Fluid Presets"}),h.jsx("div",{className:"flex flex-col gap-1.5",children:Up.map(l=>h.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(o==null?void 0:o.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},fy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,dy=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uZoom;
  uniform float uColorShift;
  uniform float uComplexity;
  uniform float uContrast;

  // Simplex Noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 5; i++) {
      v += a * snoise(st);
      st = rot * st * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  // Hue rotation
  vec3 hueShift(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
  }

  void main() {
    vec2 st = gl_FragCoord.xy / iResolution.xy;
    st.x *= iResolution.x / iResolution.y;
    st *= uZoom;

    vec3 color = vec3(0.0);

    // Domain warping
    float t = iTime * uSpeed * 0.2;

    vec2 q = vec2(0.);
    q.x = fbm(st + 0.0);
    q.y = fbm(st + vec2(1.0));

    vec2 r = vec2(0.);
    float complexFactor = 0.5 + 0.5 * uComplexity;
    r.x = fbm(st + 1.0*q*complexFactor + vec2(1.7,9.2) + 0.15*t);
    r.y = fbm(st + 1.0*q*complexFactor + vec2(8.3,2.8) + 0.126*t);

    float f = fbm(st + r);

    // Colors
    vec3 baseC = vec3(0.02, 0.02, 0.05);
    vec3 col1 = vec3(0.0, 0.5, 0.6);  // Cyan
    vec3 col2 = vec3(0.6, 0.1, 0.4);  // Magenta

    // Apply Hue Shift
    col1 = hueShift(col1, uColorShift);
    col2 = hueShift(col2, uColorShift + 1.0);

    // Mix colors
    color = mix(vec3(0.01), baseC, clamp(f*f*4.0, 0.0, 1.0));
    color = mix(color, col1, clamp(length(q), 0.0, 1.0));
    color = mix(color, col2, clamp(length(r.x), 0.0, 1.0));

    // Dynamic Lines
    float line1 = smoothstep(0.9, 0.95, sin(f * 50.0 * uComplexity + t * 2.0));
    float line2 = smoothstep(0.95, 0.98, sin(r.y * 30.0 * uComplexity - t * 1.0));

    // Additive light for lines
    color += (col1 + 0.4) * line1 * 0.3 * uContrast;
    color += (col2 + 0.4) * line2 * 0.3 * uContrast;

    // Contrast & Gamma
    float gamma = 1.4 - (uContrast - 1.0) * 0.5;
    color = pow(color, vec3(gamma));
    color *= uContrast;

    gl_FragColor = vec4(color, 1.0);
  }
`,hy=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c);return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(M,U)=>{const z=r.createShader(U);return z?(r.shaderSource(z,M),r.compileShader(z),r.getShaderParameter(z,r.COMPILE_STATUS)?z:(r.deleteShader(z),null)):null},g=m(fy,r.VERTEX_SHADER),v=m(dy,r.FRAGMENT_SHADER);if(!g||!v)return;const p=r.createProgram();if(!p)return;r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),r.useProgram(p);const y=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,y,r.STATIC_DRAW);const S=r.getAttribLocation(p,"position");r.enableVertexAttribArray(S),r.vertexAttribPointer(S,2,r.FLOAT,!1,0,0);const C=r.getUniformLocation(p,"iResolution"),_=r.getUniformLocation(p,"iTime"),A=r.getUniformLocation(p,"uSpeed"),D=r.getUniformLocation(p,"uZoom"),H=r.getUniformLocation(p,"uColorShift"),E=r.getUniformLocation(p,"uComplexity"),G=r.getUniformLocation(p,"uContrast");let O=!0;const Y=()=>{if(!O)return;const M=f.clientWidth*window.devicePixelRatio,U=f.clientHeight*window.devicePixelRatio;(f.width!==M||f.height!==U)&&(f.width=M,f.height=U,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const z=(Date.now()-l.current)/1e3,B=s.current;r.uniform2f(C,f.width,f.height),r.uniform1f(_,z),r.uniform1f(A,B.speed),r.uniform1f(D,B.zoom),r.uniform1f(H,B.colorShift),r.uniform1f(E,B.complexity),r.uniform1f(G,B.contrast),r.drawArrays(r.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(Y)};return Y(),()=>{O=!1,cancelAnimationFrame(o.current),r.deleteProgram(p)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},Bp=[{id:"classic",label:"Classic Cyber",params:{speed:.2,zoom:3,colorShift:0,complexity:1,contrast:1}},{id:"neon",label:"Neon City",params:{speed:.4,zoom:2.5,colorShift:2,complexity:1.2,contrast:1.3}},{id:"matrix",label:"Digital Matrix",params:{speed:.3,zoom:3.5,colorShift:3.5,complexity:.8,contrast:.8}},{id:"synthwave",label:"Synthwave",params:{speed:.15,zoom:2.8,colorShift:5,complexity:1.5,contrast:1.2}}],xo=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),my=({params:c,onChange:a})=>{const o=Bp.find(l=>l.params.speed===c.speed&&l.params.zoom===c.zoom&&l.params.colorShift===c.colorShift);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(xo,{label:"Speed",value:c.speed,min:0,max:1,step:.05,onChange:l=>a({...c,speed:l})}),h.jsx(xo,{label:"Zoom",value:c.zoom,min:1,max:5,step:.1,onChange:l=>a({...c,zoom:l})}),h.jsx(xo,{label:"Complexity",value:c.complexity,min:.3,max:2,step:.1,onChange:l=>a({...c,complexity:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Visual"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(xo,{label:"Color Shift",value:c.colorShift,min:0,max:6.28,step:.1,onChange:l=>a({...c,colorShift:l})}),h.jsx(xo,{label:"Contrast",value:c.contrast,min:.5,max:2,step:.1,onChange:l=>a({...c,contrast:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Cyberpunk Presets"}),h.jsx("div",{className:"flex flex-col gap-1.5",children:Bp.map(l=>h.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(o==null?void 0:o.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},py=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,vy=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uHeight;
  uniform float uSmoothness;
  uniform vec3 uColor1;
  uniform vec3 uColor2;

  #define PI 3.141592654
  #define TAU (2.0*PI)

  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }

  float tanh_approx(float x) {
    float e2x = exp(2.0 * x);
    return (e2x - 1.0) / (e2x + 1.0);
  }

  vec3 tanh_approx(vec3 v) {
    return vec3(tanh_approx(v.x), tanh_approx(v.y), tanh_approx(v.z));
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  vec4 alphaBlend(vec4 back, vec4 front) {
    float w = front.w + back.w*(1.0-front.w);
    vec3 xyz = (front.xyz*front.w + back.xyz*back.w*(1.0-front.w))/w;
    return w > 0.0 ? vec4(xyz, w) : vec4(0.0);
  }

  vec3 alphaBlend(vec3 back, vec4 front) {
    return mix(back, front.xyz, front.w);
  }

  float hash(float co) { return fract(sin(co*12.9898) * 13758.5453); }
  float hash(vec2 p) { float a = dot(p, vec2(127.1, 311.7)); return fract(sin(a)*43758.5453123); }

  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    float a = hash(i + vec2(0.0,0.0));
    float b = hash(i + vec2(1.0,0.0));
    float c = hash(i + vec2(0.0,1.0));
    float d = hash(i + vec2(1.0,1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float hifbm(vec2 p) {
    float sum = 0.0; float a = 1.0;
    for (int i = 0; i < 5; ++i) { sum += a*vnoise(p); a *= 0.5; p *= 2.0; }
    return sum;
  }

  float lofbm(vec2 p) {
    float sum = 0.0; float a = 1.0;
    for (int i = 0; i < 2; ++i) { sum += a*vnoise(p); a *= 0.5; p *= 2.0; }
    return sum;
  }

  vec3 toSpherical(vec3 p) {
    float r = length(p);
    float t = acos(p.z/r);
    float ph = atan(p.y, p.x);
    return vec3(r, t, ph);
  }

  float hiheight(vec2 p) { return hifbm(p) - uHeight; }
  float loheight(vec2 p) { return lofbm(p) - 2.15; }

  vec4 plane(vec3 ro, vec3 rd, vec3 pp, vec3 npp, vec3 off, float n) {
    float h = hash(n);
    vec2 p = (pp-off*2.0*vec3(1.0, 1.0, 0.0)).xy;
    const vec2 stp = vec2(0.5, 0.33);
    float he = hiheight(vec2(p.x, pp.z)*stp);
    float lohe = loheight(vec2(p.x, pp.z)*stp);
    float d = p.y-he;
    float lod = p.y - lohe;
    float aa = distance(pp, npp)*sqrt(1.0/3.0);
    float t = smoothstep(aa * uSmoothness, -aa * uSmoothness, d);
    float df = exp(-0.1*(distance(ro, pp)-2.));
    float hue1 = rgb2hsv(uColor1).x;
    vec3 acol = hsv2rgb(vec3(mix(hue1 + 0.3, hue1, df), 0.9, mix(1.0, 0.0, df)));
    vec3 gcol = hsv2rgb(vec3(hue1, 0.5, tanh_approx(exp(-mix(2.0, 8.0, df)*lod))));
    return vec4(acol + 0.5*gcol, t);
  }

  vec3 skyColor(vec3 ro, vec3 rd) {
    vec3 lpos = 1E6*vec3(0., -0.15, 1.0);
    vec3 ldir = normalize(lpos);
    vec2 sp = toSpherical(rd.xzy).yz;
    float lf = pow(max(dot(ldir, rd), 0.0), 80.0);
    float li = 0.02*mix(1.0, 10.0, lf)/(abs((rd.y+0.055))+0.025);
    float hue1 = rgb2hsv(uColor1).x;
    float hue2 = rgb2hsv(uColor2).x;
    vec3 col = smoothstep(-0.4, 0.0, (sp.x-PI*0.5))*hsv2rgb(vec3(hue1, 0.9, 0.075));
    col += tanh_approx(hsv2rgb(vec3(hue2, 0.8, 1.0))*li);
    return col;
  }

  vec3 color(vec3 ww, vec3 uu, vec3 vv, vec3 ro, vec2 p) {
    float rdd = 2.0;
    vec3 rd = normalize(p.x*uu + p.y*vv + rdd*ww);
    vec3 nrd = normalize((p.x + 2.0/iResolution.y)*uu + (p.y + 2.0/iResolution.y)*vv + rdd*ww);

    const float planeDist = 1.0;
    const int furthest = 12;
    const float maxDist = planeDist*float(furthest);
    float nz = floor(ro.z / planeDist);

    vec3 skyCol = skyColor(ro, rd);
    vec4 acol = vec4(0.0);
    const float cutOff = 0.95;

    for (int i = 1; i <= furthest; ++i) {
      float pz = planeDist*nz + planeDist*float(i);
      float pd = (pz - ro.z)/rd.z;

      if (pd > 0.0 && acol.w < cutOff) {
        vec3 pp = ro + rd*pd;
        vec3 npp = ro + nrd*pd;

        if (pp.y < 5.0) {
          vec4 pcol = plane(ro, rd, pp, npp, vec3(0.0), nz+float(i));
          float fadeIn = smoothstep(maxDist, maxDist*0.5, pd);
          pcol.xyz = mix(skyCol, pcol.xyz, fadeIn);
          pcol = clamp(pcol, 0.0, 1.0);
          acol = alphaBlend(pcol, acol);
        }
      } else {
        break;
      }
    }
    return alphaBlend(skyCol, acol);
  }

  void main() {
    vec2 q = gl_FragCoord.xy / iResolution.xy;
    vec2 p = -1.0 + 2.0 * q;
    p.x *= iResolution.x / iResolution.y;

    float tm = iTime * uSpeed * 0.25;
    vec3 ro = vec3(0.0, 0.0, tm);
    vec3 dro = normalize(vec3(0.0, 0.09, 1.0));
    vec3 ww = normalize(dro);
    vec3 uu = normalize(cross(normalize(vec3(0.0,1.0,0.0)), ww));
    vec3 vv = normalize(cross(ww, uu));

    vec3 col = color(ww, uu, vv, ro, p);

    col *= smoothstep(0.0, 8.0, iTime - abs(q.y));

    // ACES Tonemap
    col = max(col, 0.0);
    col *= 0.6;
    float a = 2.51; float b = 0.03; float c = 2.43; float d = 0.59; float e = 0.14;
    col = clamp((col*(a*col+b))/(col*(c*col+d)+e), 0.0, 1.0);

    // Gamma
    col = pow(col, vec3(1.0/2.2));

    gl_FragColor = vec4(col, 1.0);
  }
`,kp=c=>{if(!c)return[0,0,0];const a=parseInt(c.replace("#",""),16),o=(a>>16&255)/255,l=(a>>8&255)/255,s=(a&255)/255;return[o,l,s]},gy=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c);return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r){console.error("WebGL not supported");return}const m=(Y,M)=>{const U=r.createShader(M);return U?(r.shaderSource(U,Y),r.compileShader(U),r.getShaderParameter(U,r.COMPILE_STATUS)?U:(console.error("Shader compilation error:",r.getShaderInfoLog(U)),r.deleteShader(U),null)):null},g=m(py,r.VERTEX_SHADER),v=m(vy,r.FRAGMENT_SHADER);if(!g||!v)return;const p=r.createProgram();r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),r.useProgram(p);const y=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,y),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),r.STATIC_DRAW);const w=r.getAttribLocation(p,"position");r.enableVertexAttribArray(w),r.vertexAttribPointer(w,2,r.FLOAT,!1,0,0);const S=r.getUniformLocation(p,"iTime"),C=r.getUniformLocation(p,"iResolution"),_=r.getUniformLocation(p,"uSpeed"),A=r.getUniformLocation(p,"uHeight"),D=r.getUniformLocation(p,"uSmoothness"),H=r.getUniformLocation(p,"uColor1"),E=r.getUniformLocation(p,"uColor2");let G=!0;const O=()=>{if(!G)return;const Y=f.clientWidth,M=f.clientHeight;(f.width!==Y||f.height!==M)&&(f.width=Y,f.height=M,r.viewport(0,0,f.width,f.height));const U=s.current,z=(Date.now()-l.current)/1e3,B=kp(U.color1),Z=kp(U.color2);r.uniform1f(S,z),r.uniform2f(C,f.width,f.height),r.uniform1f(_,U.speed),r.uniform1f(A,U.height),r.uniform1f(D,U.smoothness),r.uniform3f(H,B[0],B[1],B[2]),r.uniform3f(E,Z[0],Z[1],Z[2]),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(O)};return O(),()=>{G=!1,cancelAnimationFrame(o.current),r.deleteProgram(p),r.deleteShader(g),r.deleteShader(v)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full"})},Fp=[{id:"cyber",label:"Cyber",c1:"#2266ff",c2:"#9933ff"},{id:"retrowave",label:"Retrowave",c1:"#ff1493",c2:"#ff6600"},{id:"emerald",label:"Emerald",c1:"#00cc66",c2:"#00bbff"},{id:"inferno",label:"Inferno",c1:"#ff3300",c2:"#ffaa00"},{id:"frost",label:"Frost",c1:"#33ccff",c2:"#6666ff"}],Hp=[{id:"calm",label:"Calm Waves",params:{speed:.3,height:2.2,smoothness:1}},{id:"cruise",label:"Night Cruise",params:{speed:.5,height:2,smoothness:1.5}},{id:"rush",label:"Speed Rush",params:{speed:1,height:1.8,smoothness:.8}},{id:"dream",label:"Dream Flight",params:{speed:.2,height:2.5,smoothness:2}}],ef=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),xy=({params:c,onChange:a})=>{const o=Hp.find(s=>s.params.speed===c.speed&&s.params.height===c.height&&s.params.smoothness===c.smoothness),l=Fp.find(s=>s.c1===c.color1&&s.c2===c.color2);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Motion"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(ef,{label:"Speed",value:c.speed,min:0,max:2,step:.1,onChange:s=>a({...c,speed:s})}),h.jsx(ef,{label:"Height",value:c.height,min:1.5,max:3,step:.1,onChange:s=>a({...c,height:s})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Visual"}),h.jsx("div",{className:"flex flex-col gap-3",children:h.jsx(ef,{label:"Smoothness",value:c.smoothness,min:.5,max:3,step:.1,onChange:s=>a({...c,smoothness:s})})})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:Fp.map(s=>h.jsx("button",{onClick:()=>a({...c,color1:s.c1,color2:s.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===s.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${s.c1}, ${s.c2})`},title:s.label},s.id))}),l&&h.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label}),h.jsxs("div",{className:"mt-3 flex gap-3",children:[h.jsxs("div",{className:"flex-1",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Wave"}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[h.jsx("input",{type:"color",value:c.color1,onChange:s=>a({...c,color1:s.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),h.jsx("div",{className:"w-full h-full rounded-lg",style:{background:c.color1}})]}),h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:c.color1})]})]}),h.jsxs("div",{className:"flex-1",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Sky"}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[h.jsx("input",{type:"color",value:c.color2,onChange:s=>a({...c,color2:s.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),h.jsx("div",{className:"w-full h-full rounded-lg",style:{background:c.color2}})]}),h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:c.color2})]})]})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Flight Presets"}),h.jsx("div",{className:"flex flex-col gap-1.5",children:Hp.map(s=>h.jsx("button",{onClick:()=>a({...c,...s.params}),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(o==null?void 0:o.id)===s.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:s.label},s.id))})]})]})},yy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,by=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uTextGlow;
  uniform float uTextScale;
  uniform float uTerrainBrightness;

  #define PI 3.141592654
  #define TAU (2.0*PI)

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  vec4 alphaBlend(vec4 back, vec4 front) {
    float w = front.w + back.w*(1.0-front.w);
    vec3 xyz = (front.xyz*front.w + back.xyz*back.w*(1.0-front.w))/w;
    return w > 0.0 ? vec4(xyz, w) : vec4(0.0);
  }

  vec3 alphaBlend(vec3 back, vec4 front) {
    return mix(back, front.xyz, front.w);
  }

  float tanh_approx(float x) {
    float x2 = x*x;
    return clamp(x*(27.0 + x2)/(27.0+9.0*x2), -1.0, 1.0);
  }

  float hash(float co) { return fract(sin(co*12.9898) * 13758.5453); }
  float hash(vec2 p) { float a = dot(p, vec2(127.1, 311.7)); return fract(sin(a)*43758.5453123); }

  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    float a = hash(i + vec2(0.0,0.0));
    float b = hash(i + vec2(1.0,0.0));
    float c = hash(i + vec2(0.0,1.0));
    float d = hash(i + vec2(1.0,1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float hifbm(vec2 p) {
    float sum = 0.0; float a = 1.0;
    for (int i = 0; i < 5; ++i) { sum += a*vnoise(p); a *= 0.5; p *= 2.0; }
    return sum;
  }

  vec2 raySphere(vec3 ro, vec3 rd, vec4 sph) {
    vec3 oc = ro - sph.xyz;
    float b = dot( oc, rd );
    float c = dot( oc, oc ) - sph.w*sph.w;
    float h = b*b - c;
    if( h<0.0 ) return vec2(-1.0);
    h = sqrt( h );
    return vec2(-b - h, -b + h);
  }

  vec3 toSpherical(vec3 p) {
    float r = length(p);
    float t = acos(p.z/r);
    float ph = atan(p.y, p.x);
    return vec3(r, t, ph);
  }

  float hiheight(vec2 p) { return hifbm(p)-1.8; }

  // Simple SDF for drawing line segments
  float sdSegment( in vec2 p, in vec2 a, in vec2 b ) {
    vec2 pa = p-a, ba = b-a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h );
  }

  // Draw "NEON" text using line segments
  float sdText(vec2 p) {
    p *= uTextScale;
    float d = 100.0;
    float w = 0.05;

    // N
    vec2 p1 = p - vec2(-0.6, 0.0);
    float n = min(sdSegment(p1, vec2(-0.2,-0.3), vec2(-0.2,0.3)), sdSegment(p1, vec2(0.2,-0.3), vec2(0.2,0.3)));
    n = min(n, sdSegment(p1, vec2(-0.2,0.3), vec2(0.2,-0.3)));
    d = min(d, n);

    // E
    vec2 p2 = p - vec2(-0.1, 0.0);
    float e = sdSegment(p2, vec2(-0.2,-0.3), vec2(-0.2,0.3));
    e = min(e, sdSegment(p2, vec2(-0.2,0.3), vec2(0.2,0.3)));
    e = min(e, sdSegment(p2, vec2(-0.2,0.0), vec2(0.1,0.0)));
    e = min(e, sdSegment(p2, vec2(-0.2,-0.3), vec2(0.2,-0.3)));
    d = min(d, e);

    // O
    vec2 p3 = p - vec2(0.4, 0.0);
    float o = abs(length(p3) - 0.25);
    d = min(d, o);

    // N
    vec2 p4 = p - vec2(0.9, 0.0);
    float n2 = min(sdSegment(p4, vec2(-0.2,-0.3), vec2(-0.2,0.3)), sdSegment(p4, vec2(0.2,-0.3), vec2(0.2,0.3)));
    n2 = min(n2, sdSegment(p4, vec2(-0.2,0.3), vec2(0.2,-0.3)));
    d = min(d, n2);

    return smoothstep(w, w*0.8, d);
  }

  vec4 moon(vec3 ro, vec3 rd) {
    vec4 mdim = vec4(1E5*vec3(0., 0.4, 1.0), 20000.0);
    vec2 md = raySphere(ro, rd, mdim);
    vec3 mpos = ro + rd*md.x;
    vec3 mnor = normalize(mpos-mdim.xyz);

    float mf = smoothstep(0.0, 10000.0, md.y - md.x);

    // Map sphere surface to 2D
    vec2 sp = toSpherical(-mnor.zxy).yz;
    sp.x -= PI*0.5;
    sp *= 2.0;

    float txt = sdText(sp);

    // Neon pink/purple glow
    vec3 neonCol = vec3(1.0, 0.1, 0.8) * uTextGlow * txt;
    vec3 baseCol = hsv2rgb(vec3(0.75, 0.7, 0.2));

    vec3 col = baseCol + neonCol;
    return vec4(col, mf);
  }

  vec4 plane(vec3 ro, vec3 rd, vec3 pp, vec3 npp, vec3 off, float n) {
    float h = hash(n);
    vec2 p = (pp-off*2.0*vec3(1.0, 1.0, 0.0)).xy;
    const vec2 stp = vec2(0.5, 0.33);
    float he = hiheight(vec2(p.x, pp.z)*stp);
    float d = p.y-he;
    float aa = distance(pp, npp)*sqrt(1.0/3.0);
    float t = smoothstep(aa, -aa, d);
    float df = exp(-0.1*(distance(ro, pp)-2.));
    vec3 acol = hsv2rgb(vec3(mix(0.8, 0.6, df), 0.8, mix(0.5, 0.0, df) * uTerrainBrightness));
    return vec4(acol, t);
  }

  vec3 skyColor(vec3 ro, vec3 rd) {
    vec4 mcol = moon(ro, rd);
    vec3 col = vec3(0.05, 0.0, 0.1);
    col = mix(col, mcol.xyz, mcol.w);
    return col;
  }

  vec3 color(vec3 ww, vec3 uu, vec3 vv, vec3 ro, vec2 p) {
    float rdd = 2.0;
    vec3 rd = normalize(p.x*uu + p.y*vv + rdd*ww);
    vec3 nrd = normalize((p.x + 2.0/iResolution.y)*uu + (p.y + 2.0/iResolution.y)*vv + rdd*ww);

    const float planeDist = 1.0;
    const int furthest = 12;
    const float maxDist = planeDist*float(furthest);
    float nz = floor(ro.z / planeDist);

    vec3 skyCol = skyColor(ro, rd);
    vec4 acol = vec4(0.0);
    const float cutOff = 0.95;

    for (int i = 1; i <= furthest; ++i) {
      float pz = planeDist*nz + planeDist*float(i);
      float pd = (pz - ro.z)/rd.z;

      if (pd > 0.0 && acol.w < cutOff) {
        vec3 pp = ro + rd*pd;
        vec3 npp = ro + nrd*pd;

        if (pp.y < 5.0) {
          vec4 pcol = plane(ro, rd, pp, npp, vec3(0.0), nz+float(i));
          float fadeIn = smoothstep(maxDist, maxDist*0.5, pd);
          pcol.xyz = mix(skyCol, pcol.xyz, fadeIn);
          pcol = clamp(pcol, 0.0, 1.0);
          acol = alphaBlend(pcol, acol);
        }
      } else {
        break;
      }
    }
    return alphaBlend(skyCol, acol);
  }

  void main() {
    vec2 q = gl_FragCoord.xy / iResolution.xy;
    vec2 p = -1.0 + 2.0 * q;
    p.x *= iResolution.x / iResolution.y;

    float tm = iTime * 0.25;
    vec3 ro = vec3(0.0, 0.0, tm);
    vec3 dro = normalize(vec3(0.0, 0.09, 1.0));
    vec3 ww = normalize(dro);
    vec3 uu = normalize(cross(normalize(vec3(0.0,1.0,0.0)), ww));
    vec3 vv = normalize(cross(ww, uu));

    vec3 col = color(ww, uu, vv, ro, p);

    col *= smoothstep(0.0, 8.0, iTime - abs(q.y));

    // ACES Tonemap
    col = max(col, 0.0);
    col *= 0.6;
    float a = 2.51; float b = 0.03; float c = 2.43; float d = 0.59; float e = 0.14;
    col = clamp((col*(a*col+b))/(col*(c*col+d)+e), 0.0, 1.0);

    // Gamma
    col = pow(col, vec3(1.0/2.2));

    gl_FragColor = vec4(col, 1.0);
  }
`,_y=({params:c})=>{const a=L.useRef(null),o=L.useRef(null),l=L.useRef(null),s=L.useRef(0),f=L.useRef(Date.now());return L.useEffect(()=>{const r=a.current;if(!r)return;const m=r.getContext("webgl");if(!m){console.error("WebGL not supported");return}o.current=m;const g=m.createShader(m.VERTEX_SHADER);m.shaderSource(g,yy),m.compileShader(g);const v=m.createShader(m.FRAGMENT_SHADER);m.shaderSource(v,by),m.compileShader(v),m.getShaderParameter(v,m.COMPILE_STATUS)||console.error("Fragment shader compilation error:",m.getShaderInfoLog(v));const p=m.createProgram();m.attachShader(p,g),m.attachShader(p,v),m.linkProgram(p),m.useProgram(p),l.current=p;const y=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,y),m.bufferData(m.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),m.STATIC_DRAW);const w=m.getAttribLocation(p,"position");m.enableVertexAttribArray(w),m.vertexAttribPointer(w,2,m.FLOAT,!1,0,0);const S=()=>{const _=r.clientWidth,A=r.clientHeight;(r.width!==_||r.height!==A)&&(r.width=_,r.height=A,m.viewport(0,0,r.width,r.height))},C=()=>{if(!o.current||!l.current)return;S();const _=m.getUniformLocation(l.current,"iTime"),A=m.getUniformLocation(l.current,"iResolution"),D=m.getUniformLocation(l.current,"uTextGlow"),H=m.getUniformLocation(l.current,"uTextScale"),E=m.getUniformLocation(l.current,"uTerrainBrightness"),G=(Date.now()-f.current)/1e3;m.uniform1f(_,G),m.uniform2f(A,r.width,r.height),m.uniform1f(D,c.textGlow),m.uniform1f(H,c.textScale),m.uniform1f(E,c.terrainBrightness),m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.TRIANGLE_STRIP,0,4),s.current=requestAnimationFrame(C)};return S(),C(),()=>{cancelAnimationFrame(s.current),m.deleteProgram(p),m.deleteShader(g),m.deleteShader(v)}},[c]),h.jsx("canvas",{ref:a,className:"w-full h-full"})},qp=[{id:"subtle",label:"Subtle Glow",params:{textGlow:3,textScale:1,terrainBrightness:.3}},{id:"vibrant",label:"Vibrant Pop",params:{textGlow:5,textScale:1,terrainBrightness:.5}},{id:"neon",label:"Full Neon",params:{textGlow:8,textScale:1.2,terrainBrightness:.2}},{id:"minimalist",label:"Minimal Mood",params:{textGlow:2,textScale:.8,terrainBrightness:.1}}],tf=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Sy=({params:c,onChange:a})=>{const o=qp.find(l=>l.params.textGlow===c.textGlow&&l.params.textScale===c.textScale&&l.params.terrainBrightness===c.terrainBrightness);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Text"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(tf,{label:"Glow Intensity",value:c.textGlow,min:1,max:10,step:.5,onChange:l=>a({...c,textGlow:l})}),h.jsx(tf,{label:"Scale",value:c.textScale,min:.5,max:2,step:.1,onChange:l=>a({...c,textScale:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Terrain"}),h.jsx("div",{className:"flex flex-col gap-3",children:h.jsx(tf,{label:"Brightness",value:c.terrainBrightness,min:0,max:1,step:.1,onChange:l=>a({...c,terrainBrightness:l})})})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Neon Presets"}),h.jsx("div",{className:"flex flex-col gap-1.5",children:qp.map(l=>h.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(o==null?void 0:o.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},wy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Ty=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uWaveSpeed;
  uniform float uColorShift;
  uniform float uOpacity;

  #define PI 3.141592654
  #define TAU (2.0*PI)

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  vec4 alphaBlend(vec4 back, vec4 front) {
    float w = front.w + back.w*(1.0-front.w);
    vec3 xyz = (front.xyz*front.w + back.xyz*back.w*(1.0-front.w))/w;
    return w > 0.0 ? vec4(xyz, w) : vec4(0.0);
  }

  vec3 alphaBlend(vec3 back, vec4 front) {
    return mix(back, front.xyz, front.w);
  }

  float tanh_approx(float x) {
    float x2 = x*x;
    return clamp(x*(27.0 + x2)/(27.0+9.0*x2), -1.0, 1.0);
  }

  float hash(float co) { return fract(sin(co*12.9898) * 13758.5453); }
  float hash(vec2 p) { float a = dot(p, vec2(127.1, 311.7)); return fract(sin(a)*43758.5453123); }

  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    float a = hash(i + vec2(0.0,0.0));
    float b = hash(i + vec2(1.0,0.0));
    float c = hash(i + vec2(0.0,1.0));
    float d = hash(i + vec2(1.0,1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float lofbm(vec2 p) {
    float sum = 0.0; float a = 1.0;
    for (int i = 0; i < 2; ++i) { sum += a*vnoise(p); a *= 0.5; p *= 2.0; }
    return sum;
  }

  // Softer, lower frequency noise for clouds
  float cloudNoise(vec2 p) {
    return lofbm(p * 0.5);
  }

  vec4 plane(vec3 ro, vec3 rd, vec3 pp, vec3 npp, vec3 off, float n) {
    vec2 p = (pp - off*2.0*vec3(1.0, 1.0, 0.0)).xy;

    // Wavy motion for aurora
    float wave = sin(pp.z * 0.2 + iTime * uWaveSpeed) * 1.0;
    float he = cloudNoise(vec2(p.x, pp.z)) * 2.0 - 2.0 + wave;

    float d = p.y - he;
    float aa = distance(pp, npp) * sqrt(1.0/3.0);

    // Very soft smoothstep for volumetric/cloud feel
    float t = smoothstep(aa + 1.5, -aa - 1.5, d);

    // Aurora Colors: Green to Purple gradient
    vec3 colA = vec3(0.0, 1.0, 0.5); // Green
    vec3 colB = vec3(0.5, 0.0, 1.0); // Purple

    float mixFactor = 0.5 + 0.5 * sin(pp.z * 0.1 + iTime + uColorShift);
    vec3 col = mix(colA, colB, mixFactor);

    // Add luminosity based on height
    col *= exp(-0.5 * abs(d));

    // Semi-transparent with adjustable opacity
    return vec4(col, t * uOpacity);
  }

  vec3 skyColor(vec3 ro, vec3 rd) {
    return vec3(0.0, 0.02, 0.05); // Deep night sky
  }

  vec3 color(vec3 ww, vec3 uu, vec3 vv, vec3 ro, vec2 p) {
    float rdd = 2.0;
    vec3 rd = normalize(p.x*uu + p.y*vv + rdd*ww);
    vec3 nrd = normalize((p.x + 2.0/iResolution.y)*uu + (p.y + 2.0/iResolution.y)*vv + rdd*ww);

    const float planeDist = 1.0;
    const int furthest = 12;
    const float maxDist = planeDist*float(furthest);
    float nz = floor(ro.z / planeDist);

    vec3 skyCol = skyColor(ro, rd);
    vec4 acol = vec4(0.0);
    const float cutOff = 0.95;

    for (int i = 1; i <= furthest; ++i) {
      float pz = planeDist*nz + planeDist*float(i);
      float pd = (pz - ro.z)/rd.z;

      if (pd > 0.0 && acol.w < cutOff) {
        vec3 pp = ro + rd*pd;
        vec3 npp = ro + nrd*pd;

        if (pp.y < 5.0) {
          vec4 pcol = plane(ro, rd, pp, npp, vec3(0.0), nz+float(i));
          float fadeIn = smoothstep(maxDist, maxDist*0.5, pd);
          pcol.xyz = mix(skyCol, pcol.xyz, fadeIn);
          pcol = clamp(pcol, 0.0, 1.0);
          acol = alphaBlend(pcol, acol);
        }
      } else {
        break;
      }
    }
    return alphaBlend(skyCol, acol);
  }

  void main() {
    vec2 q = gl_FragCoord.xy / iResolution.xy;
    vec2 p = -1.0 + 2.0 * q;
    p.x *= iResolution.x / iResolution.y;

    float tm = iTime * 0.25;
    vec3 ro = vec3(0.0, 0.0, tm);
    vec3 dro = normalize(vec3(0.0, 0.09, 1.0));
    vec3 ww = normalize(dro);
    vec3 uu = normalize(cross(normalize(vec3(0.0,1.0,0.0)), ww));
    vec3 vv = normalize(cross(ww, uu));

    vec3 col = color(ww, uu, vv, ro, p);

    col *= smoothstep(0.0, 8.0, iTime - abs(q.y));

    // ACES Tonemap
    col = max(col, 0.0);
    col *= 0.6;
    float a = 2.51; float b = 0.03; float c = 2.43; float d = 0.59; float e = 0.14;
    col = clamp((col*(a*col+b))/(col*(c*col+d)+e), 0.0, 1.0);

    // Gamma
    col = pow(col, vec3(1.0/2.2));

    gl_FragColor = vec4(col, 1.0);
  }
`,Cy=({params:c})=>{const a=L.useRef(null),o=L.useRef(null),l=L.useRef(null),s=L.useRef(0),f=L.useRef(Date.now());return L.useEffect(()=>{const r=a.current;if(!r)return;const m=r.getContext("webgl");if(!m){console.error("WebGL not supported");return}o.current=m;const g=m.createShader(m.VERTEX_SHADER);m.shaderSource(g,wy),m.compileShader(g);const v=m.createShader(m.FRAGMENT_SHADER);m.shaderSource(v,Ty),m.compileShader(v),m.getShaderParameter(v,m.COMPILE_STATUS)||console.error("Fragment shader compilation error:",m.getShaderInfoLog(v));const p=m.createProgram();m.attachShader(p,g),m.attachShader(p,v),m.linkProgram(p),m.useProgram(p),l.current=p;const y=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,y),m.bufferData(m.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),m.STATIC_DRAW);const w=m.getAttribLocation(p,"position");m.enableVertexAttribArray(w),m.vertexAttribPointer(w,2,m.FLOAT,!1,0,0);const S=()=>{const _=r.clientWidth,A=r.clientHeight;(r.width!==_||r.height!==A)&&(r.width=_,r.height=A,m.viewport(0,0,r.width,r.height))},C=()=>{if(!o.current||!l.current)return;S();const _=m.getUniformLocation(l.current,"iTime"),A=m.getUniformLocation(l.current,"iResolution"),D=m.getUniformLocation(l.current,"uWaveSpeed"),H=m.getUniformLocation(l.current,"uColorShift"),E=m.getUniformLocation(l.current,"uOpacity"),G=(Date.now()-f.current)/1e3;m.uniform1f(_,G),m.uniform2f(A,r.width,r.height),m.uniform1f(D,c.waveSpeed),m.uniform1f(H,c.colorShift),m.uniform1f(E,c.opacity),m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.TRIANGLE_STRIP,0,4),s.current=requestAnimationFrame(C)};return S(),C(),()=>{cancelAnimationFrame(s.current),m.deleteProgram(p),m.deleteShader(g),m.deleteShader(v)}},[c]),h.jsx("canvas",{ref:a,className:"w-full h-full"})},Gp=[{id:"gentle",label:"Gentle Drift",params:{waveSpeed:.3,colorShift:0,opacity:.3}},{id:"flow",label:"Flowing Sky",params:{waveSpeed:.5,colorShift:1,opacity:.4}},{id:"ethereal",label:"Ethereal Mist",params:{waveSpeed:.2,colorShift:2,opacity:.25}},{id:"vivid",label:"Vivid Aurora",params:{waveSpeed:.7,colorShift:.5,opacity:.5}}],nf=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Ny=({params:c,onChange:a})=>{const o=Gp.find(l=>l.params.waveSpeed===c.waveSpeed&&l.params.colorShift===c.colorShift&&l.params.opacity===c.opacity);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Motion"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(nf,{label:"Wave Speed",value:c.waveSpeed,min:0,max:1,step:.1,onChange:l=>a({...c,waveSpeed:l})}),h.jsx(nf,{label:"Color Shift",value:c.colorShift,min:0,max:3,step:.1,onChange:l=>a({...c,colorShift:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Visual"}),h.jsx("div",{className:"flex flex-col gap-3",children:h.jsx(nf,{label:"Opacity",value:c.opacity,min:.1,max:.7,step:.05,onChange:l=>a({...c,opacity:l})})})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Aurora Presets"}),h.jsx("div",{className:"flex flex-col gap-1.5",children:Gp.map(l=>h.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(o==null?void 0:o.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},Ay=`#version 300 es
  in vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Ry=`#version 300 es
  precision highp float;
  precision highp int;

  uniform vec3 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uGlow;
  uniform float uGridSize;
  uniform vec3 uColor1;
  uniform vec3 uColor2;

  out vec4 fragColor;

  struct Grid {
    vec3 id;
    float d;
  };
  Grid gr;

  #define FBI floatBitsToInt
  #define FFBI(a) FBI(cos(a))^FBI(a)

  float hash(vec3 uv) {
    int x = FFBI(uv.x);
    int y = FFBI(uv.y);
    int z = FFBI(uv.z);
    return float((x*x+y)*(y*y-x)*(z*z+x)) / 2.14e9;
  }

  void dogrid(vec3 ro, vec3 rd, float size) {
    gr.id = (floor(ro + rd * 1E-3) / size + 0.5) * size;
    vec3 src = -(ro - gr.id) / rd;
    vec3 dst = abs(0.5 * size) / rd;
    vec3 bz = src + dst;
    gr.d = min(bz.x, min(bz.y, bz.z));
  }

  vec3 erot(vec3 p, vec3 ax, float t) {
    return mix(dot(ax, p) * ax, p, cos(t)) + cross(ax, p) * sin(t);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
    vec3 col = vec3(0.0);
    float t = iTime * uSpeed;

    vec3 ro = vec3(0.2, 0.2, -5.0);
    vec3 rt = vec3(0.0);
    vec3 z = normalize(rt - ro);
    vec3 x = normalize(cross(z, vec3(0.0, -1.0, 0.0)));
    vec3 y = cross(z, x);

    vec3 rd = mat3(x, y, z) * normalize(vec3(uv, 2.0 + tanh(hash(vec3(uv, 0.0) + t) * 0.5 + 10.0 * sin(t))));

    float i, e, g;
    float gridlen = 0.0;

    for (i = 0.0, e = 0.01, g = 0.0; i++ < 99.0;) {
      vec3 p = ro + rd * g;
      p = erot(p, normalize(sin(t * 0.33 + vec3(-0.6, 0.4, 0.2))), t * 0.2);
      p.z += t;

      vec3 op = p;
      if (gridlen <= g) {
        dogrid(p, rd, uGridSize);
        gridlen += gr.d;
      }
      p -= gr.id;

      float gy = dot(sin(gr.id * 2.0), cos(gr.id.zxy * 5.0));
      float rn = hash(gr.id + floor(t));
      p.x += sin(rn) * 0.25;

      float h = rn > 0.0 ? 0.5 : length(p) - 0.01 - gy * 0.05 + rn * 0.02;

      g += e = max(0.001 + op.z * 0.000002, abs(h));

      vec3 cellColor = mix(uColor1, uColor2, abs(rn));
      col += cellColor * (uGlow * 0.025 + (0.02 * exp(5.0 * fract(gy + t)))) / exp(e * e * i);
    }

    col *= exp(-0.08 * g);
    fragColor = vec4(sqrt(col), 1.0);
  }
`,Vp=c=>{if(!c)return[0,0,0];const a=parseInt(c.replace("#",""),16),o=(a>>16&255)/255,l=(a>>8&255)/255,s=(a&255)/255;return[o,l,s]},zy=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c);return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl2");if(!r){console.error("WebGL 2.0 not supported");return}const m=(M,U)=>{const z=r.createShader(U);return z?(r.shaderSource(z,M),r.compileShader(z),r.getShaderParameter(z,r.COMPILE_STATUS)?z:(console.error("Shader compilation error:",r.getShaderInfoLog(z)),r.deleteShader(z),null)):null},g=m(Ay,r.VERTEX_SHADER),v=m(Ry,r.FRAGMENT_SHADER);if(!g||!v)return;const p=r.createProgram();if(!p)return;if(r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),!r.getProgramParameter(p,r.LINK_STATUS)){console.error("Program link error:",r.getProgramInfoLog(p));return}r.useProgram(p);const y=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,y,r.STATIC_DRAW);const S=r.getAttribLocation(p,"position");r.enableVertexAttribArray(S),r.vertexAttribPointer(S,2,r.FLOAT,!1,0,0);const C=r.getUniformLocation(p,"iResolution"),_=r.getUniformLocation(p,"iTime"),A=r.getUniformLocation(p,"uSpeed"),D=r.getUniformLocation(p,"uGlow"),H=r.getUniformLocation(p,"uGridSize"),E=r.getUniformLocation(p,"uColor1"),G=r.getUniformLocation(p,"uColor2");let O=!0;const Y=()=>{if(!O)return;const M=f.clientWidth*window.devicePixelRatio,U=f.clientHeight*window.devicePixelRatio;(f.width!==M||f.height!==U)&&(f.width=M,f.height=U,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const z=(Date.now()-l.current)/1e3,B=s.current,Z=Vp(B.color1),W=Vp(B.color2);r.uniform3f(C,f.width,f.height,1),r.uniform1f(_,z),r.uniform1f(A,B.speed),r.uniform1f(D,B.glow),r.uniform1f(H,B.gridSize),r.uniform3f(E,Z[0],Z[1],Z[2]),r.uniform3f(G,W[0],W[1],W[2]),r.drawArrays(r.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(Y)};return Y(),()=>{O=!1,cancelAnimationFrame(o.current),r.deleteProgram(p)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},Yp=[{id:"neon",label:"Neon Blue",c1:"#4040ff",c2:"#40a0ff"},{id:"cyber",label:"Cyber Pink",c1:"#ff40a0",c2:"#a040ff"},{id:"matrix",label:"Matrix",c1:"#00ff66",c2:"#00aa44"},{id:"solar",label:"Solar",c1:"#ff8800",c2:"#ffdd00"},{id:"ice",label:"Ice",c1:"#88ccff",c2:"#ffffff"}],af=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(s<.1?2:1)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Ey=({params:c,onChange:a})=>{const o=Yp.find(l=>l.c1===c.color1&&l.c2===c.color2);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(af,{label:"Speed",value:c.speed,min:0,max:3,step:.1,onChange:l=>a({...c,speed:l})}),h.jsx(af,{label:"Glow",value:c.glow,min:.1,max:3,step:.1,onChange:l=>a({...c,glow:l})}),h.jsx(af,{label:"Grid Size",value:c.gridSize,min:.5,max:3,step:.1,onChange:l=>a({...c,gridSize:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:Yp.map(l=>h.jsx("button",{onClick:()=>a({...c,color1:l.c1,color2:l.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(o==null?void 0:o.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.c1}, ${l.c2})`},title:l.label},l.id))}),o&&h.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:o.label}),h.jsxs("div",{className:"mt-3 flex gap-3",children:[h.jsxs("div",{className:"flex-1",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Primary"}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[h.jsx("input",{type:"color",value:c.color1,onChange:l=>a({...c,color1:l.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),h.jsx("div",{className:"w-full h-full rounded-lg",style:{background:c.color1}})]}),h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:c.color1})]})]}),h.jsxs("div",{className:"flex-1",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Accent"}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[h.jsx("input",{type:"color",value:c.color2,onChange:l=>a({...c,color2:l.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),h.jsx("div",{className:"w-full h-full rounded-lg",style:{background:c.color2}})]}),h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:c.color2})]})]})]})]})]})},jy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Dy=`
  precision highp float;

  uniform vec3 iResolution;
  uniform float iTime;
  uniform vec4 iMouse;
  uniform float uGamma;
  uniform vec3 uAccent1;
  uniform vec3 uAccent2;
  uniform vec3 uBg1;
  uniform vec3 uBg2;

  #define INVERTMOUSE -1.
  #define MAX_STEPS 100.
  #define VOLUME_STEPS 8.
  #define MIN_DISTANCE 0.1
  #define MAX_DISTANCE 100.
  #define HIT_DISTANCE .01

  #define S(x,y,z) smoothstep(x,y,z)
  #define B(x,y,z,w) S(x-z, x+z, w)*S(y+z, y-z, w)
  #define sat(x) clamp(x,0.,1.)
  #define SIN(x) sin(x)*.5+.5

  const vec3 lf=vec3(1., 0., 0.);
  const vec3 up=vec3(0., 1., 0.);
  const vec3 fw=vec3(0., 0., 1.);

  const float halfpi = 1.570796326794896619;
  const float pi = 3.141592653589793238;
  const float twopi = 6.283185307179586;

  vec3 bg;
  vec3 accent;

  float N1( float x ) { return fract(sin(x)*5346.1764); }
  float N2(float x, float y) { return N1(x + y*23414.324); }

  float N3(vec3 p) {
      p  = fract( p*0.3183099+.1 );
      p *= 17.0;
      return fract( p.x*p.y*p.z*(p.x+p.y+p.z) );
  }

  struct ray { vec3 o; vec3 d; };
  struct camera { vec3 p; vec3 forward; vec3 left; vec3 up; vec3 center; vec3 i; ray ray; vec3 lookAt; float zoom; };
  struct de { float d; float m; vec3 uv; float pump; vec3 id; vec3 pos; };
  struct rc { vec3 id; vec3 h; vec3 p; };

  rc Repeat(vec3 pos, vec3 size) {
      rc o;
      o.h = size*.5;
      o.id = floor(pos/size);
      o.p = mod(pos, size)-o.h;
      return o;
  }

  camera cam;

  void CameraSetup(vec2 uv, vec3 position, vec3 lookAt, float zoom) {
      cam.p = position;
      cam.lookAt = lookAt;
      cam.forward = normalize(cam.lookAt-cam.p);
      cam.left = cross(up, cam.forward);
      cam.up = cross(cam.forward, cam.left);
      cam.zoom = zoom;
      cam.center = cam.p+cam.forward*cam.zoom;
      cam.i = cam.center+cam.left*uv.x+cam.up*uv.y;
      cam.ray.o = cam.p;
      cam.ray.d = normalize(cam.i-cam.p);
  }

  vec3 N31(float p) {
     vec3 p3 = fract(vec3(p) * vec3(.1031,.11369,.13787));
     p3 += dot(p3, p3.yzx + 19.19);
     return fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
  }

  float smin( float a, float b, float k ) {
      float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
      return mix( b, a, h ) - k*h*(1.0-h);
  }

  float smax( float a, float b, float k ) {
      float h = clamp( 0.5 + 0.5*(b-a)/k, 0.0, 1.0 );
      return mix( a, b, h ) + k*h*(1.0-h);
  }

  float sdSphere( vec3 p, vec3 pos, float s ) { return (length(p-pos)-s); }

  vec2 pModPolar(inout vec2 p, float repetitions, float fix) {
      float angle = twopi/repetitions;
      float a = atan(p.y, p.x) + angle/2.;
      float r = length(p);
      float c = floor(a/angle);
      a = mod(a,angle) - (angle/2.)*fix;
      p = vec2(cos(a), sin(a))*r;
      return p;
  }

  float Dist( vec2 P, vec2 P0, vec2 P1 ) {
      vec2 v = P1 - P0; vec2 w = P - P0;
      float c1 = dot(w, v); float c2 = dot(v, v);
      if (c1 <= 0. ) return length(P-P0);
      float b = c1 / c2;
      vec2 Pb = P0 + b*v;
      return length(P-Pb);
  }

  vec2 sph(vec3 ro, vec3 rd, vec3 pos, float radius) {
      vec3 oc = pos - ro;
      float l = dot(rd, oc);
      float det = l*l - dot(oc, oc) + radius*radius;
      if (det < 0.0) return vec2(MAX_DISTANCE);
      float d = sqrt(det);
      return vec2(l - d, l + d);
  }

  vec3 background(vec3 r) {
      float x = atan(r.x, r.z);
      float y = pi*0.5-acos(r.y);
      vec3 col = bg*(1.+y);
      float t = iTime;
      float a = sin(r.x);
      float beam = sat(sin(10.*x+a*y*5.+t));
      beam *= sat(sin(7.*x+a*y*3.5-t));
      float beam2 = sat(sin(42.*x+a*y*21.-t));
      beam2 *= sat(sin(34.*x+a*y*17.+t));
      beam += beam2;
      col *= 1.+beam*.05;
      return col;
  }

  float remap(float a, float b, float c, float d, float t) {
      return ((t-a)/(b-a))*(d-c)+c;
  }

  de map( vec3 p, vec3 id ) {
      float t = iTime*2.;
      float N = N3(id);
      de o; o.m = 0.;
      float x = (p.y+N*twopi)*1.+t;
      float r = 1.;
      float pump = cos(x+cos(x))+sin(2.*x)*.2+sin(4.*x)*.02;
      x = t + N*twopi;
      p.y -= (cos(x+cos(x))+sin(2.*x)*.2)*.6;
      p.xz *= 1. + pump*.2;
      float d1 = sdSphere(p, vec3(0., 0., 0.), r);
      float d2 = sdSphere(p, vec3(0., -.5, 0.), r);
      o.d = smax(d1, -d2, .1);
      o.m = 1.;
      if(p.y<.5) {
          float sway = sin(t+p.y+N*twopi)*S(.5, -3., p.y)*N*.3;
          p.x += sway*N; p.z += sway*(1.-N);
          vec3 mp = p;
          mp.xz = pModPolar(mp.xz, 6., 0.);
          float d3 = length(mp.xz-vec2(.2, .1))-remap(.5, -3.5, .1, .01, mp.y);
          if(d3<o.d) o.m=2.;
          d3 += (sin(mp.y*10.)+sin(mp.y*23.))*.03;
          float d32 = length(mp.xz-vec2(.2, .1))-remap(.5, -3.5, .1, .04, mp.y)*.5;
          d3 = min(d3, d32);
          o.d = smin(o.d, d3, .5);
          if( p.y<.2) {
               vec3 op = p;
              op.xz = pModPolar(op.xz, 13., 1.);
              float d4 = length(op.xz-vec2(.85, .0))-remap(.5, -3., .04, .0, op.y);
              if(d4<o.d) o.m=3.;
              o.d = smin(o.d, d4, .15);
          }
      }
      o.pump = pump; o.uv = p; o.d *= .8;
      return o;
  }

  vec3 calcNormal( de o ) {
      vec3 eps = vec3( 0.01, 0.0, 0.0 );
      vec3 nor = vec3(
          map(o.pos+eps.xyy, o.id).d - map(o.pos-eps.xyy, o.id).d,
          map(o.pos+eps.yxy, o.id).d - map(o.pos-eps.yxy, o.id).d,
          map(o.pos+eps.yyx, o.id).d - map(o.pos-eps.yyx, o.id).d );
      return normalize(nor);
  }

  de CastRay(ray r) {
      float d = 0.;
      de o, s;
      float dC = MAX_DISTANCE;
      vec3 p;
      rc q;
      float t = iTime;
      vec3 grid = vec3(6., 30., 6.);
      for(float i=0.; i<MAX_STEPS; i++) {
          p = r.o + r.d*d;
          p.y -= t; p.x += t;
          q = Repeat(p, grid);
          vec3 rC = ((2.*step(0., r.d)-1.)*q.h-q.p)/r.d;
          dC = min(min(rC.x, rC.y), rC.z)+.01;
          float N = N3(q.id);
          q.p += (N31(N)-.5)*grid*vec3(.5, .7, .5);
          if(Dist(q.p.xz, r.d.xz, vec2(0.))<1.1)
              s = map(q.p, q.id);
          else
              s.d = dC;
          if(s.d<HIT_DISTANCE || d>MAX_DISTANCE) break;
          d+=min(s.d, dC);
      }
      if(s.d<HIT_DISTANCE) {
          o.m = s.m; o.d = d; o.id = q.id; o.uv = s.uv; o.pump = s.pump; o.pos = q.p;
      }
      return o;
  }

  float VolTex(vec3 uv, vec3 p, float scale, float pump) {
      p.y *= scale;
      float s2 = 5.*p.x/twopi;
      float id = floor(s2);
      s2 = fract(s2);
      vec2 ep = vec2(s2-.5, p.y-.6);
      float ed = length(ep);
      float e = B(.35, .45, .05, ed);
      float s = SIN(s2*twopi*15. );
      s = s*s; s = s*s;
      s *= S(1.4, -.3, uv.y-cos(s2*twopi)*.2+.3)*S(-.6, -.3, uv.y);
      float t = iTime*5.;
      float mask = SIN(p.x*twopi*2. + t);
      s *= mask*mask*2.;
      return s+e*pump*2.;
  }

  vec4 JellyTex(vec3 p) {
      vec3 s = vec3(atan(p.x, p.z), length(p.xz), p.y);
      float b = .75+sin(s.x*6.)*.25;
      b = mix(1., b, s.y*s.y);
      p.x += sin(s.z*10.)*.1;
      float b2 = cos(s.x*26.) - s.z-.7;
      b2 = S(.1, .6, b2);
      return vec4(b+b2);
  }

  vec3 render( vec2 uv, ray camRay ) {
      bg = background(camRay.d);
      vec3 col = bg;
      de o = CastRay(camRay);
      vec3 L = up;
      if(o.m>0.) {
          vec3 n = calcNormal(o);
          float lambert = sat(dot(n, L));
          vec3 R = reflect(camRay.d, n);
          float fresnel = sat(1.+dot(camRay.d, n));
          vec3 ref = background(R);
          float fade = 0.;
          if(o.m==1.) {
              float density = 0.;
              for(float i=0.; i<VOLUME_STEPS; i++) {
                  float sd = sph(o.uv, camRay.d, vec3(0.), .8+i*.015).x;
                  if(sd!=MAX_DISTANCE) {
                      vec2 intersect = o.uv.xz+camRay.d.xz*sd;
                      vec3 uv = vec3(atan(intersect.x, intersect.y), length(intersect.xy), o.uv.z);
                      density += VolTex(o.uv, uv, 1.4+i*.03, o.pump);
                  }
              }
              vec3 volColor = accent * (density/VOLUME_STEPS);
              vec3 dif = JellyTex(o.uv).rgb * max(.2, lambert);
              col = mix(col, volColor, sat(density/VOLUME_STEPS));
              col = mix(col, dif, .25);
              col += fresnel*ref*sat(dot(up, n));
              fade = max(fade, S(.0, 1., fresnel));
          } else if(o.m==2.) {
              vec3 dif = accent;
              col = mix(bg, dif, fresnel);
              col *= mix(.6, 1., S(0., -1.5, o.uv.y));
              float prop = o.pump+.25;
              prop *= prop*prop;
              col += pow(1.-fresnel, 20.)*dif*prop;
              fade = fresnel;
          } else if(o.m==3.) {
              vec3 dif = accent;
              float d = S(100., 13., o.d);
              col = mix(bg, dif, pow(1.-fresnel, 5.)*d);
          }
          fade = max(fade, S(0., 100., o.d));
          col = mix(col, bg, fade);
      }
      return col;
  }

  void main() {
      float t = iTime*.04;
      vec2 uv = (gl_FragCoord.xy / iResolution.xy) - 0.5;
      uv.y *= iResolution.y/iResolution.x;
      vec2 m = iMouse.xy/iResolution.xy;
      if(iMouse.z <= 0.0) { m = vec2(t*.25, SIN(t*pi)*.5+.5); }

      accent = mix(uAccent1, uAccent2, SIN(t*15.456));
      bg = mix(uBg1, uBg2, SIN(t*7.345231));

      float turn = (.1-m.x)*twopi;
      float s = sin(turn); float c = cos(turn);
      mat3 rotX = mat3(c, 0., s, 0., 1., 0., s, 0., -c);
      float camDist = -.1;
      vec3 lookAt = vec3(0., -1., 0.);
      vec3 camPos = vec3(0., INVERTMOUSE*camDist*cos((m.y)*pi), camDist)*rotX;
      CameraSetup(uv, camPos+lookAt, lookAt, 1.);

      vec3 col = render(uv, cam.ray);
      col = pow(col, vec3(uGamma));
      float d = 1.-dot(uv, uv);
      col *= (d*d*d)+.1;
      gl_FragColor = vec4(col, 1.);
  }
`,ls=c=>{const a=parseInt(c.replace("#",""),16),o=(a>>16&255)/255,l=(a>>8&255)/255,s=(a&255)/255;return[o,l,s]},My=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c),f=L.useRef({x:0,y:0,active:!1});return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const r=a.current;if(!r)return;const m=r.getContext("webgl");if(!m)return;const g=Z=>{const W=r.getBoundingClientRect(),$=window.devicePixelRatio;f.current.x=(Z.clientX-W.left)*$,f.current.y=(W.height-(Z.clientY-W.top))*$,f.current.active=!0},v=()=>{f.current.active=!1};r.addEventListener("mousemove",g),r.addEventListener("mouseleave",v);const p=(Z,W)=>{const $=m.createShader(W);return $?(m.shaderSource($,Z),m.compileShader($),m.getShaderParameter($,m.COMPILE_STATUS)?$:(console.error("Shader error:",m.getShaderInfoLog($)),m.deleteShader($),null)):null},y=p(jy,m.VERTEX_SHADER),w=p(Dy,m.FRAGMENT_SHADER);if(!y||!w)return;const S=m.createProgram();if(!S)return;if(m.attachShader(S,y),m.attachShader(S,w),m.linkProgram(S),!m.getProgramParameter(S,m.LINK_STATUS)){console.error("Link error:",m.getProgramInfoLog(S));return}m.useProgram(S);const C=new Float32Array([-1,-1,1,-1,-1,1,1,1]),_=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,_),m.bufferData(m.ARRAY_BUFFER,C,m.STATIC_DRAW);const A=m.getAttribLocation(S,"position");m.enableVertexAttribArray(A),m.vertexAttribPointer(A,2,m.FLOAT,!1,0,0);const D=m.getUniformLocation(S,"iResolution"),H=m.getUniformLocation(S,"iTime"),E=m.getUniformLocation(S,"iMouse"),G=m.getUniformLocation(S,"uGamma"),O=m.getUniformLocation(S,"uAccent1"),Y=m.getUniformLocation(S,"uAccent2"),M=m.getUniformLocation(S,"uBg1"),U=m.getUniformLocation(S,"uBg2");let z=!0;const B=()=>{if(!z)return;const Z=r.clientWidth*window.devicePixelRatio,W=r.clientHeight*window.devicePixelRatio;(r.width!==Z||r.height!==W)&&(r.width=Z,r.height=W,m.viewport(0,0,m.drawingBufferWidth,m.drawingBufferHeight));const $=(Date.now()-l.current)/1e3,ne=s.current,ae=f.current;m.uniform3f(D,r.width,r.height,1),m.uniform1f(H,$*ne.speed),m.uniform4f(E,ae.x,ae.y,ae.active?1:-1,0),m.uniform1f(G,ne.gamma);const k=ls(ne.accent1),J=ls(ne.accent2),ie=ls(ne.bg1),de=ls(ne.bg2);m.uniform3f(O,k[0],k[1],k[2]),m.uniform3f(Y,J[0],J[1],J[2]),m.uniform3f(M,ie[0],ie[1],ie[2]),m.uniform3f(U,de[0],de[1],de[2]),m.drawArrays(m.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(B)};return B(),()=>{z=!1,cancelAnimationFrame(o.current),r.removeEventListener("mousemove",g),r.removeEventListener("mouseleave",v),m.deleteProgram(S)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},Xp=[{id:"ocean",label:"Ocean",accent1:"#ff1a80",accent2:"#ff801a",bg1:"#1a80ff",bg2:"#1a8099"},{id:"abyss",label:"Abyss",accent1:"#00ffaa",accent2:"#00aaff",bg1:"#1a2d80",bg2:"#0a3366"},{id:"ember",label:"Ember",accent1:"#ff4400",accent2:"#ffcc00",bg1:"#801a28",bg2:"#805020"},{id:"arctic",label:"Arctic",accent1:"#66ccff",accent2:"#eeffff",bg1:"#103d80",bg2:"#1a5570"},{id:"toxic",label:"Toxic",accent1:"#88ff00",accent2:"#ff00aa",bg1:"#1a5530",bg2:"#2a1a66"},{id:"violet",label:"Violet",accent1:"#bb99ff",accent2:"#ff99cc",bg1:"#2a1566",bg2:"#1a2070"}],Pp=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(s<.1?2:1)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Oy=({params:c,onChange:a})=>{const o=Xp.find(l=>l.accent1===c.accent1&&l.bg1===c.bg1);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(Pp,{label:"Speed",value:c.speed,min:.2,max:2,step:.1,onChange:l=>a({...c,speed:l})}),h.jsx(Pp,{label:"Gamma",value:c.gamma,min:1,max:3.5,step:.1,onChange:l=>a({...c,gamma:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Palette"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:Xp.map(l=>h.jsx("button",{onClick:()=>a({...c,accent1:l.accent1,accent2:l.accent2,bg1:l.bg1,bg2:l.bg2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(o==null?void 0:o.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.accent1}, ${l.bg1})`},title:l.label},l.id))}),o&&h.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:o.label})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Interaction"}),h.jsx("div",{className:"text-[9px] text-neutral-500 leading-relaxed",children:"Move mouse over canvas to control camera angle. Leave canvas for auto-animation."})]})]})},Ly=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Uy=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uGrain;
  uniform float uVignette;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float valueNoise(vec2 x) {
    vec2 p = floor(x);
    vec2 f = fract(x);
    vec2 u = f*f*f*(f*(f*6.0-15.0)+10.0);
    float a = hash(p + vec2(0.0, 0.0));
    float b = hash(p + vec2(1.0, 0.0));
    float c = hash(p + vec2(0.0, 1.0));
    float d = hash(p + vec2(1.0, 1.0));
    return a + (b-a)*u.x + (c-a)*u.y + (a-b-c+d)*u.x*u.y;
  }

  float noiseGrain(vec2 uv) {
    return hash(uv + vec2(iTime * 0.1, iTime * 0.1));
  }

  float fbm(vec2 x, int detail) {
    float a = 0.0;
    float b = 1.0;
    float t = 0.0;
    for (int i = 0; i < 8; i++) {
      if (i >= detail) break;
      float n = valueNoise(x);
      a += b * n;
      t += b;
      b *= 0.7;
      x *= 2.0;
    }
    return a / t;
  }

  float fbm2(vec2 x, int detail) {
    float a = 0.0;
    float b = 1.0;
    float t = 0.0;
    for (int i = 0; i < 8; i++) {
      if (i >= detail) break;
      float n = valueNoise(x);
      a += b * n;
      t += b;
      b *= 0.9;
      x *= 2.0;
    }
    return a / t;
  }

  float box(vec2 uv, float x1, float x2, float y1, float y2) {
    return (uv.x > x1 && uv.x < x2 && uv.y > y1 && uv.y < y2) ? 1.0 : 0.0;
  }

  #define dot2(v) dot(v, v)
  #define layer(dh, v)  if (uv.y < h + midlevel - (dh)) return vec4(v, 1.);

  vec4 foreground(vec2 uv, float t) {
    float midlevel;
    float h;
    float disp;
    float dist;
    vec2 uv2;

    uv.y -= 0.2;

    midlevel = -0.1;
    disp = 1.7;
    dist = 1.0;
    uv2 = uv + vec2(t / dist + 40.0, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.12, vec3(0.43, 0.32, 0.31));
    layer(0.08, vec3(0.55, 0.42, 0.41));
    layer(0.04, vec3(0.66, 0.42, 0.40));
    layer(0., vec3(0.77, 0.48, 0.46));

    midlevel = 0.05;
    disp = 1.7;
    dist = 2.0;
    uv2 = uv + vec2(t / dist + 38.0, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.1, vec3(0.95, 0.66, 0.48));
    layer(0.04, vec3(0.98, 0.76, 0.64));
    layer(0., vec3(0.95, 0.80, 0.77));

    return vec4(0.95, 0.80, 0.77, 0.);
  }

  vec4 background(vec2 uv, float t) {
    float midlevel;
    float h;
    float disp;
    float dist;
    vec2 uv2;

    midlevel = 0.3;
    disp = 0.9;
    dist = 10.0;
    uv2 = uv + vec2(t / dist + 32.5, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.14, vec3(0.48, 0.19, 0.20));
    layer(0.1, vec3(0.68, 0.28, 0.19));
    layer(0.07, vec3(0.88, 0.38, 0.24));
    layer(0., vec3(0.95, 0.45, 0.30));

    midlevel = 0.35;
    disp = 1.0;
    dist = 15.0;
    uv2 = uv + vec2(t / dist + 30.0, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.04, vec3(0.98, 0.76, 0.64));
    layer(0., vec3(0.95, 0.80, 0.77));

    midlevel = 0.35;
    disp = 3.5;
    dist = 20.0;
    uv2 = uv + vec2(t / dist + 27.5, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.12, vec3(0.43, 0.32, 0.31));
    layer(0.08, vec3(0.55, 0.42, 0.41));
    layer(0.04, vec3(0.66, 0.42, 0.40));
    layer(0., vec3(0.77, 0.48, 0.46));

    midlevel = 0.45;
    disp = 2.0;
    dist = 25.0;
    uv2 = uv + vec2(t / dist + 23.0, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.04, vec3(0.98, 0.57, 0.36));
    layer(0., vec3(1.0, 0.62, 0.44));

    midlevel = 0.5;
    disp = 2.3;
    dist = 30.0;
    uv2 = uv + vec2(t / dist + 20.5, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.12, vec3(0.41, 0.27, 0.27));
    layer(0.08, vec3(0.53, 0.35, 0.32));
    layer(0.04, vec3(0.80, 0.24, 0.17));
    layer(0., vec3(0.99, 0.29, 0.20));

    midlevel = 0.5;
    disp = 2.5;
    dist = 35.0;
    uv2 = uv + vec2(t / dist + 18.0, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.1, vec3(0.88, 0.38, 0.24));
    layer(0.05, vec3(0.98, 0.42, 0.28));
    layer(0., vec3(1.0, 0.48, 0.35));

    midlevel = 0.6;
    disp = 2.0;
    dist = 40.0;
    uv2 = uv + vec2(t / dist + 18.0, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.1, vec3(0.95, 0.66, 0.48));
    layer(0., vec3(1.0, 0.76, 0.60));

    midlevel = 0.75;
    disp = 3.5;
    dist = 45.0;
    uv2 = uv + vec2(t / dist + 15.5, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.2, vec3(1.0, 0.55, 0.33));
    layer(0.15, vec3(0.98, 0.50, 0.24));
    layer(0.1, vec3(0.90, 0.55, 0.40));
    layer(0., vec3(1.0, 0.62, 0.44));

    midlevel = 0.7;
    disp = 2.7;
    dist = 50.0;
    uv2 = uv + vec2(t / dist + 12.0, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.04, vec3(0.73, 0.36, 0.30));
    layer(0., vec3(0.80, 0.40, 0.34));

    midlevel = 0.8;
    disp = 2.7;
    dist = 60.0;
    uv2 = uv + vec2(t / dist + 9.5, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.1, vec3(0.93, 0.58, 0.35));
    layer(0., vec3(1.0, 0.76, 0.60));

    midlevel = 0.9;
    disp = 3.0;
    dist = 70.0;
    uv2 = uv + vec2(t / dist + 7.0, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.1, vec3(0.56, 0.25, 0.22));
    layer(0.05, vec3(0.60, 0.30, 0.27));
    layer(0., vec3(0.74, 0.35, 0.30));

    midlevel = 1.0;
    disp = 5.0;
    dist = 100.0;
    uv2 = uv + vec2(t / dist + 3.5, 0.0);
    h = (fbm(uv2, 8) - 0.5) * disp;
    layer(0.1, vec3(0.92, 0.85, 0.82));
    layer(0., vec3(1.0, 0.94, 0.91));

    return vec4(0.58, 0.7, 1.0, 1.);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.y;
    float t = iTime * 4.0 * uSpeed;

    vec4 bg = background(uv, t);

    vec4 fg = vec4(0.);
    int n = 5;
    if (uv.y < 0.5) {
      for (int i = 0; i < 5; i++) {
        fg += foreground(uv, t + 4.0 * float(i) / float(n) / 60.0) / float(n);
      }
    }

    vec3 col = bg.rgb;

    // --- Train ---
    float k;
    float midlevel;
    float h;
    float disp;
    float dist;
    vec2 uv2;
    uv.y -= 0.2;

    // Wagons
    uv2 = fract(uv * 9.0);
    float wagon = 1.0;
    wagon *= 1.0 - step(0.45, uv.x);
    wagon *= 1.0 - step(0.115, uv.y);
    wagon *= step(0.103, uv.y);
    wagon *= step(0.05, 1.0 - abs(uv2.x * 2.0 - 1.0));

    float join = 1.0;
    join *= 1.0 - step(0.45, uv.x);
    join *= 1.0 - step(0.11, uv.y);
    join *= step(0.107, uv.y);

    float roof = 1.0;
    roof *= 1.0 - step(0.45, uv.x);
    roof *= 1.0 - step(0.117, uv.y);
    roof *= step(0.11, uv.y);
    roof *= step(0.15, 1.0 - abs(uv2.x * 2.0 - 1.0));

    float loco = box(uv, 0.45, 0.5, 0.103, 0.112);
    float chem1 = box(uv, 0.49, 0.495, 0.103, 0.12);
    float chem2 = box(uv, 0.488, 0.496, 0.12, 0.123);
    float locoRoof = box(uv, 0.443, 0.47, 0.11, 0.117);

    float wheel = 1.0 - step(0.00004, dot2(uv - vec2(0.457, 0.106)));
    wheel += 1.0 - step(0.00002, dot2(uv - vec2(0.487, 0.105)));
    wheel += 1.0 - step(0.00002, dot2(uv - vec2(0.497, 0.105)));

    if (uv.x < 0.45 && uv.y > 0.025 && uv.y < 0.2) {
      wheel += 1.0 - step(0.002, dot2(uv2 - vec2(0.2, 0.95)));
      wheel += 1.0 - step(0.002, dot2(uv2 - vec2(0.8, 0.95)));
    }

    col = mix(col, vec3(0.18, 0.12, 0.15), join);
    col = mix(col, vec3(0.48, 0.19, 0.20), wagon);
    col = mix(col, vec3(0.18, 0.12, 0.15), roof);
    col = mix(col, vec3(0.38, 0.19, 0.20), loco);
    col = mix(col, vec3(0.38, 0.19, 0.20), chem1);
    col = mix(col, vec3(0.18, 0.12, 0.15), locoRoof);
    col = mix(col, vec3(0.18, 0.12, 0.15), chem2 + wheel);

    // Smoke
    dist = 5.0;
    uv2 = uv + vec2(t / dist + 3.5, 0.0);
    uv2.x -= t / dist * 0.2;
    h = fbm2(uv2, 8) - 0.55;

    if (uv.x < 0.49) {
      float x = -uv.x + 0.49;
      float y = abs(uv.y + h * 0.4 - 0.16 * sqrt(x) - 0.12) - 0.8 * x * exp(-x * 10.0);
      if (y < 0.0) col = vec3(1.0, 0.94, 0.91);
      if (y < -0.02) col = vec3(0.92, 0.85, 0.82);
    }

    // Bridge
    dist = 5.0;
    uv2 = uv + vec2(t / dist + 32.5, 0.0);
    uv2.x = fract(uv2.x * 3.0);
    k = 1.0;
    k *= smoothstep(0.001, 0.003, abs(uv2.y - pow(uv2.x - 0.5, 2.0) * 0.15 - 0.12));
    k *= min(step(0.05, 1.0 - abs(uv2.x * 2.0 - 1.0))
          + step(0.17, uv2.y), 1.0);
    k *= min(smoothstep(0.02, 0.05, 1.0 - abs(uv2.x * 2.0 - 1.0))
          + step(0.177, uv2.y), 1.0);
    k *= min(step(0.1, uv2.y)
          + smoothstep(-0.09, -0.085, -uv2.y - 0.001 / (1.0 - abs(uv2.x * 2.0 - 1.0))), 1.0);
    k *= min(smoothstep(0.05, 0.2, 1.0 - abs(fract(uv2.x * 16.0) * 2.0 - 1.0))
          + step(0.12, uv2.y - pow(uv2.x - 0.5, 2.0) * 0.15)
          + step(-0.1, -uv2.y), 1.0);
    col = mix(vec3(0.29, 0.09, 0.08) * smoothstep(-0.08, 0.08, uv.y), col, k);

    col = mix(col, fg.rgb, fg.a);

    // Grain
    vec3 grain = vec3(noiseGrain(uv * 100.0));
    col = mix(col, grain, uGrain);

    // Vignette
    vec2 vUv = gl_FragCoord.xy / iResolution.xy;
    col *= mix(1.0, 0.5 + 0.5 * pow(16.0 * vUv.x * vUv.y * (1.0 - vUv.x) * (1.0 - vUv.y), 0.2), uVignette);

    gl_FragColor = vec4(col, 1.0);
  }
`,By=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c);return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(O,Y)=>{const M=r.createShader(Y);return M?(r.shaderSource(M,O),r.compileShader(M),r.getShaderParameter(M,r.COMPILE_STATUS)?M:(console.error("Shader error:",r.getShaderInfoLog(M)),r.deleteShader(M),null)):null},g=m(Ly,r.VERTEX_SHADER),v=m(Uy,r.FRAGMENT_SHADER);if(!g||!v)return;const p=r.createProgram();if(!p)return;if(r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),!r.getProgramParameter(p,r.LINK_STATUS)){console.error("Link error:",r.getProgramInfoLog(p));return}r.useProgram(p);const y=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,y,r.STATIC_DRAW);const S=r.getAttribLocation(p,"position");r.enableVertexAttribArray(S),r.vertexAttribPointer(S,2,r.FLOAT,!1,0,0);const C=r.getUniformLocation(p,"iResolution"),_=r.getUniformLocation(p,"iTime"),A=r.getUniformLocation(p,"uSpeed"),D=r.getUniformLocation(p,"uGrain"),H=r.getUniformLocation(p,"uVignette");let E=!0;const G=()=>{if(!E)return;const O=f.clientWidth*window.devicePixelRatio,Y=f.clientHeight*window.devicePixelRatio;(f.width!==O||f.height!==Y)&&(f.width=O,f.height=Y,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const M=(Date.now()-l.current)/1e3,U=s.current;r.uniform2f(C,f.width,f.height),r.uniform1f(_,M),r.uniform1f(A,U.speed),r.uniform1f(D,U.grain),r.uniform1f(H,U.vignette),r.drawArrays(r.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(G)};return G(),()=>{E=!1,cancelAnimationFrame(o.current),r.deleteProgram(p)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},lf=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(s<.1?2:1)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),ky=[{id:"slow",label:"Slow",speed:.3},{id:"cruise",label:"Cruise",speed:1},{id:"express",label:"Express",speed:2}],Fy=({params:c,onChange:a})=>h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(lf,{label:"Speed",value:c.speed,min:.1,max:3,step:.1,onChange:o=>a({...c,speed:o})}),h.jsx(lf,{label:"Film Grain",value:c.grain,min:0,max:.4,step:.01,onChange:o=>a({...c,grain:o})}),h.jsx(lf,{label:"Vignette",value:c.vignette,min:0,max:1,step:.1,onChange:o=>a({...c,vignette:o})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Speed Presets"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:ky.map(o=>h.jsx("button",{onClick:()=>a({...c,speed:o.speed}),className:`px-2.5 py-1 rounded-lg text-[9px] font-medium transition-all ${c.speed===o.speed?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:o.label},o.id))})]})]}),Hy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,qy=`
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uLayers;
  uniform float uDepth;
  uniform float uTurbulence;
  uniform float uGrain;
  uniform float uVignette;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float valueNoise(vec2 x) {
    vec2 p = floor(x);
    vec2 f = fract(x);
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
    float a = hash(p);
    float b = hash(p + vec2(1.0, 0.0));
    float c = hash(p + vec2(0.0, 1.0));
    float d = hash(p + vec2(1.0, 1.0));
    return a + (b - a) * u.x + (c - a) * u.y + (a - b - c + d) * u.x * u.y;
  }

  float fbm(vec2 x) {
    float a = 0.0;
    float b = 1.0;
    float t = 0.0;
    for (int i = 0; i < 8; i++) {
      a += b * valueNoise(x);
      t += b;
      b *= 0.7;
      x *= 2.0;
    }
    return a / t;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.y;
    vec2 screenUv = gl_FragCoord.xy / iResolution.xy;
    float t = iTime * uSpeed;

    // Sky gradient
    float skyGrad = smoothstep(0.3, 1.2, uv.y);
    vec3 col = mix(uColor3 * 0.85, uColor3, skyGrad);

    int maxLayers = int(uLayers);

    // Render from farthest (i=0) to nearest (i=maxLayers-1)
    for (int i = 0; i < 16; i++) {
      if (i >= maxLayers) break;

      float nearRatio = float(i) / max(float(maxLayers) - 1.0, 1.0);

      // Parallax: far layers scroll slow, near layers fast
      float scrollSpeed = mix(100.0, 1.0, nearRatio * nearRatio) * uDepth;

      // Vertical baseline: far layers high, near layers low
      float baseline = mix(0.95, -0.1, nearRatio);

      // Displacement: varies with depth for natural look
      float disp = mix(3.5, 1.7, nearRatio) * uTurbulence;

      // Unique offset per layer so each ridge is different
      float offset = float(maxLayers - i) * 3.7 + float(i * i) * 0.3;

      vec2 samplePos = uv + vec2(t / scrollSpeed + offset, 0.0);
      float h = (fbm(samplePos) - 0.5) * disp;

      float surface = h + baseline;
      float adjustedY = uv.y - 0.15;

      // Color: interpolate from far(color3) → mid(color2) → near(color1)
      vec3 layerColor;
      if (nearRatio < 0.4) {
        layerColor = mix(uColor3 * 0.9, uColor2, nearRatio / 0.4);
      } else {
        layerColor = mix(uColor2, uColor1, (nearRatio - 0.4) / 0.6);
      }

      // 3 sub-layers: ridge highlight → mid → shadow base
      if (adjustedY < surface) {
        col = layerColor;
      }
      if (adjustedY < surface - 0.04) {
        col = layerColor * 0.82;
      }
      if (adjustedY < surface - 0.10) {
        col = layerColor * 0.65;
      }
    }

    // Film grain
    float grain = hash(uv * 100.0 + vec2(t * 0.17, t * 0.13));
    col = mix(col, vec3(grain), uGrain);

    // Vignette
    float vig = pow(16.0 * screenUv.x * screenUv.y * (1.0 - screenUv.x) * (1.0 - screenUv.y), 0.2);
    col *= mix(1.0, 0.5 + 0.5 * vig, uVignette);

    gl_FragColor = vec4(col, 1.0);
  }
`,of=c=>{if(!c)return[0,0,0];const a=parseInt(c.replace("#",""),16),o=(a>>16&255)/255,l=(a>>8&255)/255,s=(a&255)/255;return[o,l,s]},Gy=({params:c})=>{const a=L.useRef(null),o=L.useRef(0),l=L.useRef(Date.now()),s=L.useRef(c);return L.useEffect(()=>{s.current=c},[c]),L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(Z,W)=>{const $=r.createShader(W);return $?(r.shaderSource($,Z),r.compileShader($),r.getShaderParameter($,r.COMPILE_STATUS)?$:(console.error("Shader error:",r.getShaderInfoLog($)),r.deleteShader($),null)):null},g=m(Hy,r.VERTEX_SHADER),v=m(qy,r.FRAGMENT_SHADER);if(!g||!v)return;const p=r.createProgram();if(!p)return;if(r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),!r.getProgramParameter(p,r.LINK_STATUS)){console.error("Link error:",r.getProgramInfoLog(p));return}r.useProgram(p);const y=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,y,r.STATIC_DRAW);const S=r.getAttribLocation(p,"position");r.enableVertexAttribArray(S),r.vertexAttribPointer(S,2,r.FLOAT,!1,0,0);const C=r.getUniformLocation(p,"iResolution"),_=r.getUniformLocation(p,"iTime"),A=r.getUniformLocation(p,"uSpeed"),D=r.getUniformLocation(p,"uLayers"),H=r.getUniformLocation(p,"uDepth"),E=r.getUniformLocation(p,"uTurbulence"),G=r.getUniformLocation(p,"uGrain"),O=r.getUniformLocation(p,"uVignette"),Y=r.getUniformLocation(p,"uColor1"),M=r.getUniformLocation(p,"uColor2"),U=r.getUniformLocation(p,"uColor3");let z=!0;const B=()=>{if(!z)return;const Z=f.clientWidth*window.devicePixelRatio,W=f.clientHeight*window.devicePixelRatio;(f.width!==Z||f.height!==W)&&(f.width=Z,f.height=W,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const $=(Date.now()-l.current)/1e3,ne=s.current,ae=of(ne.color1),k=of(ne.color2),J=of(ne.color3);r.uniform2f(C,f.width,f.height),r.uniform1f(_,$),r.uniform1f(A,ne.speed),r.uniform1f(D,ne.layers),r.uniform1f(H,ne.depth),r.uniform1f(E,ne.turbulence),r.uniform1f(G,ne.grain),r.uniform1f(O,ne.vignette),r.uniform3f(Y,ae[0],ae[1],ae[2]),r.uniform3f(M,k[0],k[1],k[2]),r.uniform3f(U,J[0],J[1],J[2]),r.drawArrays(r.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(B)};return B(),()=>{z=!1,cancelAnimationFrame(o.current),r.deleteProgram(p)}},[]),h.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},ti=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(s<.1?2:1)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Qp=[{id:"sunset",label:"Sunset",color1:"#c44b32",color2:"#f0a050",color3:"#9ab4ff"},{id:"arctic",label:"Arctic",color1:"#4a6a8a",color2:"#a0c8e0",color3:"#d8e8f0"},{id:"forest",label:"Forest",color1:"#2a4a2a",color2:"#5a8a4a",color3:"#b0c8a0"},{id:"desert",label:"Desert",color1:"#8a5a30",color2:"#d4a060",color3:"#e8d0a0"},{id:"midnight",label:"Midnight",color1:"#1a1040",color2:"#3a2870",color3:"#1a2040"}],Vy=({params:c,onChange:a})=>{const o=Qp.find(l=>l.color1===c.color1&&l.color2===c.color2&&l.color3===c.color3);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Landscape"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(ti,{label:"Speed",value:c.speed,min:.1,max:3,step:.1,onChange:l=>a({...c,speed:l})}),h.jsx(ti,{label:"Layers",value:c.layers,min:4,max:16,step:1,onChange:l=>a({...c,layers:l})}),h.jsx(ti,{label:"Depth",value:c.depth,min:.3,max:3,step:.1,onChange:l=>a({...c,depth:l})}),h.jsx(ti,{label:"Turbulence",value:c.turbulence,min:.3,max:2.5,step:.1,onChange:l=>a({...c,turbulence:l})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:Qp.map(l=>h.jsx("button",{onClick:()=>a({...c,color1:l.color1,color2:l.color2,color3:l.color3}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(o==null?void 0:o.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(180deg, ${l.color3}, ${l.color2}, ${l.color1})`},title:l.label},l.id))}),o&&h.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:o.label})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Custom Colors"}),h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("input",{type:"color",value:c.color1,onChange:l=>a({...c,color1:l.target.value}),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),h.jsx("span",{className:"text-[9px] text-neutral-500",children:"Near"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("input",{type:"color",value:c.color2,onChange:l=>a({...c,color2:l.target.value}),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),h.jsx("span",{className:"text-[9px] text-neutral-500",children:"Mid"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("input",{type:"color",value:c.color3,onChange:l=>a({...c,color3:l.target.value}),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),h.jsx("span",{className:"text-[9px] text-neutral-500",children:"Sky"})]})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Post Processing"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(ti,{label:"Film Grain",value:c.grain,min:0,max:.3,step:.01,onChange:l=>a({...c,grain:l})}),h.jsx(ti,{label:"Vignette",value:c.vignette,min:0,max:1,step:.1,onChange:l=>a({...c,vignette:l})})]})]})]})},Yy=`
precision mediump float;

varying vec2 vUv;
attribute vec2 a_position;

void main() {
    vUv = a_position;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,Xy=`
precision mediump float;

varying vec2 vUv;
uniform vec2 u_resolution;
uniform float u_scroll_progr;
uniform float u_col_width;
uniform float u_seed;
uniform float u_scale;
uniform float u_time;
uniform float u_speed;
uniform vec3 u_color;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float get_l(vec2 v) {
    return 1. - clamp(0., 1., length(v));
}

float rand(float n) {
    return fract(sin(n) * 43758.5453123);
}

void main() {
    float scale = .001 * u_scale;
    float speed = .001 * u_speed;

    vec2 uv = vUv;
    uv.x *= (scale * u_resolution.x);

    vec2 noise_uv = uv;
    noise_uv *= 5.;
    noise_uv.y *= (.25 * scale * u_resolution.y);
    noise_uv += vec2(0., u_time * 1.5 * speed);
    float shape = 0.;
    shape += snoise(noise_uv);
    shape = clamp(.5 + .5 * shape, 0., 1.);
    shape *= pow(.5 * uv.y + .7 + pow(u_scroll_progr, 2.) + (.4 * u_scroll_progr * (1. - pow(vUv.x - .2, 2.))), 10.);
    shape = clamp(shape, 0., 1.);

    float dots = 0.;
    float bars = 0.;
    float light = 0.;

    const int num_col = 9;
    for (int i = 0; i < num_col; i++) {

        vec2 col_uv = vUv;

        float start_time_offset = rand(100. * (float(i) + u_seed));
        float c_t = fract(u_time * speed + start_time_offset);
        float drop_time = .2 + .6 * rand(10. * (float(i) + u_seed));

        float before_drop_normal = c_t / drop_time;
        float before_drop_t = pow(before_drop_normal, .4) * drop_time;
        float after_drop_normal = max(0., c_t - drop_time) / (1. - drop_time);
        float after_drop_t_dot = 3. * pow(after_drop_normal, 2.) * (1. - drop_time);
        float after_drop_t_bar = pow(after_drop_normal, 2.) * (drop_time);

        float eased_drop_t = step(c_t, drop_time) * before_drop_t;
        eased_drop_t += step(drop_time, c_t) * (drop_time + after_drop_t_dot);

        col_uv.y += (1. + 3. * rand(15. * float(i))) * u_scroll_progr;

        col_uv.x *= (u_resolution.x / u_resolution.y);
        col_uv *= (7. * scale * u_resolution.y);

        col_uv.x += (u_col_width * (.5 * float(num_col) - float(i)));

        vec2 dot_uv = col_uv;
        dot_uv.y += 4. * (eased_drop_t - .5);

        float dot = get_l(dot_uv);
        dot = pow(dot, 4.);

        float drop_grow = step(c_t, drop_time) * pow(before_drop_normal, .4);
        drop_grow += step(drop_time, c_t) * mix(1., .8, clamp(7. * after_drop_normal, 0., 1.));
        dot *= drop_grow;

        dot *= step(.5, drop_time);
        dots += dot;

        vec2 bar_uv = col_uv;
        bar_uv.y += step(c_t, drop_time) * 4. * (before_drop_t - .5);
        bar_uv.y += step(drop_time, c_t) * 4. * (drop_time - after_drop_t_bar - .5);

        float bar = smoothstep(-.5, 0., bar_uv.x) * (1. - smoothstep(0., .5, bar_uv.x));
        bar = pow(bar, 4.);
        light += bar * smoothstep(.0, .1, -bar_uv.x);
        float bar_mask = smoothstep(-.2, .2, bar_uv.y);
        bar *= bar_mask;

        bars += bar;
    }

    shape += bars;
    shape = clamp(shape, 0., 1.);
    shape += dots;

    float gooey = smoothstep(.48, .5, shape);
    gooey -= .1 * smoothstep(.5, .6, shape);
    vec3 color = u_color;
    color.r += .2 * (1. - vUv.y) * (1. - u_scroll_progr);
    color *= gooey;
    color = mix(color, vec3(1.), max(0., 1. - 2. * vUv.y) * light * smoothstep(.1, .7, snoise(.5 * uv)) * (smoothstep(.49, .6, shape) - smoothstep(.6, 1., shape)));

    gl_FragColor = vec4(color, gooey);
}
`,Py=({params:c})=>{const a=L.useRef(null),o=L.useRef(null),l=L.useRef({}),s=L.useRef();return L.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl")||f.getContext("experimental-webgl");if(!r){console.error("WebGL not supported");return}o.current=r;const m=(D,H)=>{const E=r.createShader(D);return E?(r.shaderSource(E,H),r.compileShader(E),r.getShaderParameter(E,r.COMPILE_STATUS)?E:(console.error("Shader compile error:",r.getShaderInfoLog(E)),r.deleteShader(E),null)):null},g=m(r.VERTEX_SHADER,Yy),v=m(r.FRAGMENT_SHADER,Xy);if(!g||!v)return;const p=r.createProgram();if(!p)return;if(r.attachShader(p,g),r.attachShader(p,v),r.linkProgram(p),!r.getProgramParameter(p,r.LINK_STATUS)){console.error("Program link error:",r.getProgramInfoLog(p));return}r.useProgram(p);const y=()=>{const D={},H=r.getProgramParameter(p,r.ACTIVE_UNIFORMS);for(let E=0;E<H;E++){const G=r.getActiveUniform(p,E);G&&(D[G.name]=r.getUniformLocation(p,G.name))}return D};l.current=y();const w=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,S),r.bufferData(r.ARRAY_BUFFER,w,r.STATIC_DRAW);const C=r.getAttribLocation(p,"a_position");r.enableVertexAttribArray(C),r.vertexAttribPointer(C,2,r.FLOAT,!1,0,0),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA);const _=()=>{const D=Math.min(window.devicePixelRatio,2);f.width=f.clientWidth*D,f.height=f.clientHeight*D,r.viewport(0,0,f.width,f.height),l.current.u_resolution&&r.uniform2f(l.current.u_resolution,f.width,f.height)};_(),window.addEventListener("resize",_);const A=()=>{const D=performance.now();l.current.u_time&&r.uniform1f(l.current.u_time,D),r.drawArrays(r.TRIANGLE_STRIP,0,4),s.current=requestAnimationFrame(A)};return A(),()=>{window.removeEventListener("resize",_),s.current&&cancelAnimationFrame(s.current)}},[]),L.useEffect(()=>{const f=o.current;if(!f)return;const r=l.current;r.u_col_width&&f.uniform1f(r.u_col_width,c.colWidth),r.u_speed&&f.uniform1f(r.u_speed,c.speed),r.u_scale&&f.uniform1f(r.u_scale,c.scale),r.u_seed&&f.uniform1f(r.u_seed,c.seed),r.u_color&&f.uniform3f(r.u_color,c.color[0],c.color[1],c.color[2]),r.u_scroll_progr&&f.uniform1f(r.u_scroll_progr,c.scrollProgress)},[c]),h.jsx("canvas",{ref:a,className:"w-full h-full"})},Qy=c=>{const a=parseInt(c.slice(1,3),16)/255,o=parseInt(c.slice(3,5),16)/255,l=parseInt(c.slice(5,7),16)/255;return[a,o,l]},Zy=c=>{const a=Math.round(c[0]*255),o=Math.round(c[1]*255),l=Math.round(c[2]*255);return`#${a.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}`},Ky=({params:c,onChange:a})=>{const o=(l,s)=>{a({...c,[l]:s})};return h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[h.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Scroll Progress"}),h.jsx("span",{className:"text-[10px] text-neutral-400",children:c.scrollProgress.toFixed(2)})]}),h.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:c.scrollProgress,onChange:l=>o("scrollProgress",parseFloat(l.target.value)),className:"w-full"})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[h.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Column Width"}),h.jsx("span",{className:"text-[10px] text-neutral-400",children:c.colWidth.toFixed(2)})]}),h.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.01",value:c.colWidth,onChange:l=>o("colWidth",parseFloat(l.target.value)),className:"w-full"})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[h.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Speed"}),h.jsx("span",{className:"text-[10px] text-neutral-400",children:c.speed.toFixed(2)})]}),h.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:c.speed,onChange:l=>o("speed",parseFloat(l.target.value)),className:"w-full"})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[h.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Scale"}),h.jsx("span",{className:"text-[10px] text-neutral-400",children:c.scale.toFixed(2)})]}),h.jsx("input",{type:"range",min:"0.15",max:"0.35",step:"0.01",value:c.scale,onChange:l=>o("scale",parseFloat(l.target.value)),className:"w-full"})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[h.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Seed"}),h.jsx("span",{className:"text-[10px] text-neutral-400",children:c.seed.toFixed(3)})]}),h.jsx("input",{type:"range",min:"0",max:"1",step:"0.001",value:c.seed,onChange:l=>o("seed",parseFloat(l.target.value)),className:"w-full"})]}),h.jsxs("div",{children:[h.jsx("div",{className:"flex justify-between items-center mb-1.5",children:h.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Color"})}),h.jsx("input",{type:"color",value:Zy(c.color),onChange:l=>o("color",Qy(l.target.value)),className:"w-full h-8 rounded-lg cursor-pointer"})]})]})},Iy=()=>{const c=L.useRef(null),a=L.useRef(null);return L.useEffect(()=>{(async()=>{try{const s=await(await fetch(new URL("/assets/parallax-CPv_KoVe.html",import.meta.url).href)).text(),r=await(await fetch(new URL("/assets/parallax-D_zRWyDI.js",import.meta.url).href)).text(),m=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      overflow-x: hidden;
      background: #fff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .scrollElement {
      height: 5000px;
      position: relative;
    }
    svg.parallax {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
    footer {
      position: fixed;
      bottom: 20px;
      left: 0;
      width: 100%;
      text-align: center;
      color: #666;
      font-size: 12px;
      opacity: 0;
    }
  </style>
</head>
<body>
  <div class="scrollElement">
    ${s}
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
  <script>
    ${r}
  <\/script>
</body>
</html>
        `;if(a.current){const g=a.current;g.srcdoc=m}}catch(l){console.error("Failed to load parallax demo:",l)}})()},[]),h.jsx("div",{ref:c,className:"w-full h-full relative",children:h.jsx("iframe",{ref:a,className:"w-full h-full border-0",title:"Parallax Scroll Animation"})})},Jy=[{id:"gooey",name:"Gooey Overlay",description:"Scroll-driven liquid drops",author:"ksenia-k",url:"https://codepen.io/ksenia-k/pen/NWmMxLg"},{id:"parallax",name:"Parallax Scroll",description:"SVG landscape parallax",author:"isladjan",url:"https://codepen.io/isladjan/pen/abdyPBw"}],Wy=({active:c,onSelect:a})=>h.jsx("div",{className:"px-5 py-3 flex-shrink-0",children:h.jsx("div",{className:"flex gap-2 overflow-x-auto scrollbar-hide",children:Jy.map(o=>h.jsx("button",{onClick:()=>a(o.id),className:`px-3 py-1.5 rounded-full text-[10px] font-medium whitespace-nowrap transition-colors flex-shrink-0 ${c===o.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:o.name},o.id))})}),$y=c=>{const[a,o]=L.useState([]),l=L.useRef(),s=L.useRef({x:0,y:0}),f=L.useRef([]),r=L.useRef(0),m=L.useRef(0),g=L.useCallback((p,y)=>{s.current={x:p,y}},[]),v=L.useCallback(()=>{r.current++;const p={x:s.current.x,y:s.current.y,id:m.current++,angle:r.current*c.rotationSpeed,hue:(c.baseHue+r.current*c.hueSpeed)%360,timestamp:Date.now()};f.current=[p,...f.current].slice(0,c.trailLength),o([...f.current]),l.current=requestAnimationFrame(v)},[c.trailLength,c.rotationSpeed,c.hueSpeed,c.baseHue]);return L.useEffect(()=>(l.current=requestAnimationFrame(v),()=>{l.current&&cancelAnimationFrame(l.current)}),[v]),{trail:a,handleMove:g}},eb=({type:c,text:a,size:o})=>{const l={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};switch(c){case"square":return h.jsx("div",{style:{...l,backgroundColor:"currentColor"}});case"circle":return h.jsx("div",{style:{...l,backgroundColor:"currentColor",borderRadius:"50%"}});case"triangle":return h.jsx("div",{style:{width:0,height:0,borderLeft:`${o/2}px solid transparent`,borderRight:`${o/2}px solid transparent`,borderBottom:`${o}px solid currentColor`}});case"star":return h.jsx("div",{style:{...l,backgroundColor:"currentColor",clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"}});case"text":return h.jsx("div",{style:{...l,fontSize:`${o}px`,whiteSpace:"nowrap",color:"currentColor",fontWeight:"bold"},children:a});default:return null}},tb=({params:c})=>{const a=L.useRef(null),{trail:o,handleMove:l}=$y(c),s=r=>{if(a.current){const m=a.current.getBoundingClientRect();l(r.clientX-m.left,r.clientY-m.top)}},f=r=>{if(a.current){const m=a.current.getBoundingClientRect(),g=r.touches[0];l(g.clientX-m.left,g.clientY-m.top)}};return L.useEffect(()=>{const r=a.current;if(!r)return;const m=g=>g.preventDefault();return r.addEventListener("touchmove",m,{passive:!1}),()=>r.removeEventListener("touchmove",m)},[]),h.jsxs("div",{ref:a,onPointerMove:s,onTouchMove:f,className:"relative w-full h-full bg-neutral-950 overflow-hidden cursor-crosshair touch-none",children:[h.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none",children:h.jsx("h1",{className:"text-[120px] font-black text-white tracking-tighter select-none",children:"ECHO"})}),o.length===0&&h.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:h.jsx("p",{className:"text-neutral-500 text-sm animate-pulse",children:"Move your cursor"})}),o.map((r,m)=>{const g=m/c.trailLength,v=c.scaleDecay?Math.max(.1,1-g):1,p=c.opacityDecay?1-g:1,y=`hsl(${r.hue}, 100%, 50%)`;return h.jsx("div",{className:"absolute top-0 left-0 pointer-events-none will-change-transform",style:{transform:`translate3d(${r.x-c.size/2}px, ${r.y-c.size/2}px, 0) scale(${v}) rotate(${r.angle}deg)`,width:c.size,height:c.size,opacity:p,color:y,mixBlendMode:c.blendMode,zIndex:c.trailLength-m},children:h.jsx(eb,{type:c.shape,text:c.text,size:c.size})},r.id)})]})},nb={trailLength:30,shape:"circle",text:"Echo",size:40,opacityDecay:!0,scaleDecay:!0,rotationSpeed:0,hueSpeed:2,baseHue:280,blendMode:"screen",spread:1,lag:.1},ab=[{value:"normal",label:"Normal"},{value:"screen",label:"Glow"},{value:"difference",label:"Psychedelic"},{value:"exclusion",label:"X-Ray"},{value:"plus-lighter",label:"Neon"}],lb=[{value:"circle",label:"●"},{value:"square",label:"■"},{value:"triangle",label:"▲"},{value:"star",label:"★"},{value:"text",label:"Aa"}],is=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(s>=1?0:1)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Zp=({label:c,value:a,onChange:o})=>h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("button",{onClick:()=>o(!a),className:`relative w-7 h-4 rounded-full transition-colors ${a?"bg-neutral-800":"bg-neutral-300"}`,children:h.jsx("span",{className:`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${a?"translate-x-3":"translate-x-0"}`})})]}),ib=({params:c,onChange:a})=>h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Shape"}),h.jsx("div",{className:"flex gap-1.5",children:lb.map(o=>h.jsx("button",{onClick:()=>a({...c,shape:o.value}),className:`flex-1 h-8 rounded-lg text-sm font-bold transition-all ${c.shape===o.value?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-400 hover:bg-neutral-200"}`,children:o.label},o.value))}),c.shape==="text"&&h.jsx("input",{type:"text",value:c.text,onChange:o=>a({...c,text:o.target.value}),maxLength:10,className:"w-full mt-2 px-2 py-1.5 text-xs bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400",placeholder:"Text content"})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Style"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(is,{label:"Size",value:c.size,min:10,max:200,step:5,onChange:o=>a({...c,size:o})}),h.jsxs("div",{children:[h.jsx("div",{className:"flex items-center justify-between mb-1",children:h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Blend Mode"})}),h.jsx("select",{value:c.blendMode,onChange:o=>a({...c,blendMode:o.target.value}),className:"w-full px-2 py-1.5 text-[9px] bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400",children:ab.map(o=>h.jsx("option",{value:o.value,children:o.label},o.value))})]})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Base Hue"}),h.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-200",style:{backgroundColor:`hsl(${c.baseHue}, 100%, 50%)`}})]}),h.jsx("input",{type:"range",min:0,max:360,step:1,value:c.baseHue,onChange:o=>a({...c,baseHue:parseInt(o.target.value)}),className:"w-full h-1 rounded-full appearance-none cursor-pointer",style:{background:"linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))"}})]}),h.jsx(is,{label:"Rainbow Speed",value:c.hueSpeed,min:0,max:20,step:.5,onChange:o=>a({...c,hueSpeed:o})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Physics"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(is,{label:"Trail Length",value:c.trailLength,min:5,max:200,step:5,onChange:o=>a({...c,trailLength:o})}),h.jsx(is,{label:"Spin Speed",value:c.rotationSpeed,min:-20,max:20,step:1,onChange:o=>a({...c,rotationSpeed:o})}),h.jsx(Zp,{label:"Fade Out",value:c.opacityDecay,onChange:o=>a({...c,opacityDecay:o})}),h.jsx(Zp,{label:"Shrink Trail",value:c.scaleDecay,onChange:o=>a({...c,scaleDecay:o})})]})]})]});function Kn(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function A1(c,a){c.prototype=Object.create(a.prototype),c.prototype.constructor=c,c.__proto__=a}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},hi={duration:.5,overwrite:!1,delay:0},Gf,pt,Ve,un=1e8,Ue=1/un,wf=Math.PI*2,ob=wf/4,rb=0,R1=Math.sqrt,sb=Math.cos,cb=Math.sin,rt=function(a){return typeof a=="string"},Ke=function(a){return typeof a=="function"},$n=function(a){return typeof a=="number"},Vf=function(a){return typeof a>"u"},An=function(a){return typeof a=="object"},Et=function(a){return a!==!1},Yf=function(){return typeof window<"u"},os=function(a){return Ke(a)||rt(a)},z1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},yt=Array.isArray,ub=/random\([^)]+\)/g,fb=/,\s*/g,Kp=/(?:-?\.?\d|\.)+/gi,E1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ii=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,rf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,j1=/[+-]=-?[.\d]+/,db=/[^,'"\[\]\s]+/gi,hb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xe,Tn,Tf,Xf,It={},ps={},D1,M1=function(a){return(ps=mi(a,It))&&Ot},Pf=function(a,o){return console.warn("Invalid property",a,"set to",o,"Missing plugin? gsap.registerPlugin()")},zo=function(a,o){return!o&&console.warn(a)},O1=function(a,o){return a&&(It[a]=o)&&ps&&(ps[a]=o)||It},Eo=function(){return 0},mb={suppressEvents:!0,isStart:!0,kill:!1},fs={suppressEvents:!0,kill:!1},pb={suppressEvents:!0},Qf={},Ea=[],Cf={},L1,Xt={},sf={},Ip=30,ds=[],Zf="",Kf=function(a){var o=a[0],l,s;if(An(o)||Ke(o)||(a=[a]),!(l=(o._gsap||{}).harness)){for(s=ds.length;s--&&!ds[s].targetTest(o););l=ds[s]}for(s=a.length;s--;)a[s]&&(a[s]._gsap||(a[s]._gsap=new iv(a[s],l)))||a.splice(s,1);return a},ol=function(a){return a._gsap||Kf(fn(a))[0]._gsap},U1=function(a,o,l){return(l=a[o])&&Ke(l)?a[o]():Vf(l)&&a.getAttribute&&a.getAttribute(o)||l},jt=function(a,o){return(a=a.split(",")).forEach(o)||a},We=function(a){return Math.round(a*1e5)/1e5||0},Ye=function(a){return Math.round(a*1e7)/1e7||0},ci=function(a,o){var l=o.charAt(0),s=parseFloat(o.substr(2));return a=parseFloat(a),l==="+"?a+s:l==="-"?a-s:l==="*"?a*s:a/s},vb=function(a,o){for(var l=o.length,s=0;a.indexOf(o[s])<0&&++s<l;);return s<l},vs=function(){var a=Ea.length,o=Ea.slice(0),l,s;for(Cf={},Ea.length=0,l=0;l<a;l++)s=o[l],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},If=function(a){return!!(a._initted||a._startAt||a.add)},B1=function(a,o,l,s){Ea.length&&!pt&&vs(),a.render(o,l,!!(pt&&o<0&&If(a))),Ea.length&&!pt&&vs()},k1=function(a){var o=parseFloat(a);return(o||o===0)&&(a+"").match(db).length<2?o:rt(a)?a.trim():a},F1=function(a){return a},Jt=function(a,o){for(var l in o)l in a||(a[l]=o[l]);return a},gb=function(a){return function(o,l){for(var s in l)s in o||s==="duration"&&a||s==="ease"||(o[s]=l[s])}},mi=function(a,o){for(var l in o)a[l]=o[l];return a},Jp=function c(a,o){for(var l in o)l!=="__proto__"&&l!=="constructor"&&l!=="prototype"&&(a[l]=An(o[l])?c(a[l]||(a[l]={}),o[l]):o[l]);return a},gs=function(a,o){var l={},s;for(s in a)s in o||(l[s]=a[s]);return l},wo=function(a){var o=a.parent||Xe,l=a.keyframes?gb(yt(a.keyframes)):Jt;if(Et(a.inherit))for(;o;)l(a,o.vars.defaults),o=o.parent||o._dp;return a},xb=function(a,o){for(var l=a.length,s=l===o.length;s&&l--&&a[l]===o[l];);return l<0},H1=function(a,o,l,s,f){var r=a[s],m;if(f)for(m=o[f];r&&r[f]>m;)r=r._prev;return r?(o._next=r._next,r._next=o):(o._next=a[l],a[l]=o),o._next?o._next._prev=o:a[s]=o,o._prev=r,o.parent=o._dp=a,o},As=function(a,o,l,s){l===void 0&&(l="_first"),s===void 0&&(s="_last");var f=o._prev,r=o._next;f?f._next=r:a[l]===o&&(a[l]=r),r?r._prev=f:a[s]===o&&(a[s]=f),o._next=o._prev=o.parent=null},Da=function(a,o){a.parent&&(!o||a.parent.autoRemoveChildren)&&a.parent.remove&&a.parent.remove(a),a._act=0},rl=function(a,o){if(a&&(!o||o._end>a._dur||o._start<0))for(var l=a;l;)l._dirty=1,l=l.parent;return a},yb=function(a){for(var o=a.parent;o&&o.parent;)o._dirty=1,o.totalDuration(),o=o.parent;return a},Nf=function(a,o,l,s){return a._startAt&&(pt?a._startAt.revert(fs):a.vars.immediateRender&&!a.vars.autoRevert||a._startAt.render(o,!0,s))},bb=function c(a){return!a||a._ts&&c(a.parent)},Wp=function(a){return a._repeat?pi(a._tTime,a=a.duration()+a._rDelay)*a:0},pi=function(a,o){var l=Math.floor(a=Ye(a/o));return a&&l===a?l-1:l},xs=function(a,o){return(a-o._start)*o._ts+(o._ts>=0?0:o._dirty?o.totalDuration():o._tDur)},Rs=function(a){return a._end=Ye(a._start+(a._tDur/Math.abs(a._ts||a._rts||Ue)||0))},zs=function(a,o){var l=a._dp;return l&&l.smoothChildTiming&&a._ts&&(a._start=Ye(l._time-(a._ts>0?o/a._ts:((a._dirty?a.totalDuration():a._tDur)-o)/-a._ts)),Rs(a),l._dirty||rl(l,a)),a},q1=function(a,o){var l;if((o._time||!o._dur&&o._initted||o._start<a._time&&(o._dur||!o.add))&&(l=xs(a.rawTime(),o),(!o._dur||Bo(0,o.totalDuration(),l)-o._tTime>Ue)&&o.render(l,!0)),rl(a,o)._dp&&a._initted&&a._time>=a._dur&&a._ts){if(a._dur<a.duration())for(l=a;l._dp;)l.rawTime()>=0&&l.totalTime(l._tTime),l=l._dp;a._zTime=-Ue}},Cn=function(a,o,l,s){return o.parent&&Da(o),o._start=Ye(($n(l)?l:l||a!==Xe?cn(a,l,o):a._time)+o._delay),o._end=Ye(o._start+(o.totalDuration()/Math.abs(o.timeScale())||0)),H1(a,o,"_first","_last",a._sort?"_start":0),Af(o)||(a._recent=o),s||q1(a,o),a._ts<0&&zs(a,a._tTime),a},G1=function(a,o){return(It.ScrollTrigger||Pf("scrollTrigger",o))&&It.ScrollTrigger.create(o,a)},V1=function(a,o,l,s,f){if(Wf(a,o,f),!a._initted)return 1;if(!l&&a._pt&&!pt&&(a._dur&&a.vars.lazy!==!1||!a._dur&&a.vars.lazy)&&L1!==Pt.frame)return Ea.push(a),a._lazy=[f,s],1},_b=function c(a){var o=a.parent;return o&&o._ts&&o._initted&&!o._lock&&(o.rawTime()<0||c(o))},Af=function(a){var o=a.data;return o==="isFromStart"||o==="isStart"},Sb=function(a,o,l,s){var f=a.ratio,r=o<0||!o&&(!a._start&&_b(a)&&!(!a._initted&&Af(a))||(a._ts<0||a._dp._ts<0)&&!Af(a))?0:1,m=a._rDelay,g=0,v,p,y;if(m&&a._repeat&&(g=Bo(0,a._tDur,o),p=pi(g,m),a._yoyo&&p&1&&(r=1-r),p!==pi(a._tTime,m)&&(f=1-r,a.vars.repeatRefresh&&a._initted&&a.invalidate())),r!==f||pt||s||a._zTime===Ue||!o&&a._zTime){if(!a._initted&&V1(a,o,s,l,g))return;for(y=a._zTime,a._zTime=o||(l?Ue:0),l||(l=o&&!y),a.ratio=r,a._from&&(r=1-r),a._time=0,a._tTime=g,v=a._pt;v;)v.r(r,v.d),v=v._next;o<0&&Nf(a,o,l,!0),a._onUpdate&&!l&&Qt(a,"onUpdate"),g&&a._repeat&&!l&&a.parent&&Qt(a,"onRepeat"),(o>=a._tDur||o<0)&&a.ratio===r&&(r&&Da(a,1),!l&&!pt&&(Qt(a,r?"onComplete":"onReverseComplete",!0),a._prom&&a._prom()))}else a._zTime||(a._zTime=o)},wb=function(a,o,l){var s;if(l>o)for(s=a._first;s&&s._start<=l;){if(s.data==="isPause"&&s._start>o)return s;s=s._next}else for(s=a._last;s&&s._start>=l;){if(s.data==="isPause"&&s._start<o)return s;s=s._prev}},vi=function(a,o,l,s){var f=a._repeat,r=Ye(o)||0,m=a._tTime/a._tDur;return m&&!s&&(a._time*=r/a._dur),a._dur=r,a._tDur=f?f<0?1e10:Ye(r*(f+1)+a._rDelay*f):r,m>0&&!s&&zs(a,a._tTime=a._tDur*m),a.parent&&Rs(a),l||rl(a.parent,a),a},$p=function(a){return a instanceof _t?rl(a):vi(a,a._dur)},Tb={_start:0,endTime:Eo,totalDuration:Eo},cn=function c(a,o,l){var s=a.labels,f=a._recent||Tb,r=a.duration()>=un?f.endTime(!1):a._dur,m,g,v;return rt(o)&&(isNaN(o)||o in s)?(g=o.charAt(0),v=o.substr(-1)==="%",m=o.indexOf("="),g==="<"||g===">"?(m>=0&&(o=o.replace(/=/,"")),(g==="<"?f._start:f.endTime(f._repeat>=0))+(parseFloat(o.substr(1))||0)*(v?(m<0?f:l).totalDuration()/100:1)):m<0?(o in s||(s[o]=r),s[o]):(g=parseFloat(o.charAt(m-1)+o.substr(m+1)),v&&l&&(g=g/100*(yt(l)?l[0]:l).totalDuration()),m>1?c(a,o.substr(0,m-1),l)+g:r+g)):o==null?r:+o},To=function(a,o,l){var s=$n(o[1]),f=(s?2:1)+(a<2?0:1),r=o[f],m,g;if(s&&(r.duration=o[1]),r.parent=l,a){for(m=r,g=l;g&&!("immediateRender"in m);)m=g.vars.defaults||{},g=Et(g.vars.inherit)&&g.parent;r.immediateRender=Et(m.immediateRender),a<2?r.runBackwards=1:r.startAt=o[f-1]}return new at(o[0],r,o[f+1])},La=function(a,o){return a||a===0?o(a):o},Bo=function(a,o,l){return l<a?a:l>o?o:l},xt=function(a,o){return!rt(a)||!(o=hb.exec(a))?"":o[1]},Cb=function(a,o,l){return La(l,function(s){return Bo(a,o,s)})},Rf=[].slice,Y1=function(a,o){return a&&An(a)&&"length"in a&&(!o&&!a.length||a.length-1 in a&&An(a[0]))&&!a.nodeType&&a!==Tn},Nb=function(a,o,l){return l===void 0&&(l=[]),a.forEach(function(s){var f;return rt(s)&&!o||Y1(s,1)?(f=l).push.apply(f,fn(s)):l.push(s)})||l},fn=function(a,o,l){return Ve&&!o&&Ve.selector?Ve.selector(a):rt(a)&&!l&&(Tf||!gi())?Rf.call((o||Xf).querySelectorAll(a),0):yt(a)?Nb(a,l):Y1(a)?Rf.call(a,0):a?[a]:[]},zf=function(a){return a=fn(a)[0]||zo("Invalid scope")||{},function(o){var l=a.current||a.nativeElement||a;return fn(o,l.querySelectorAll?l:l===a?zo("Invalid scope")||Xf.createElement("div"):a)}},X1=function(a){return a.sort(function(){return .5-Math.random()})},P1=function(a){if(Ke(a))return a;var o=An(a)?a:{each:a},l=sl(o.ease),s=o.from||0,f=parseFloat(o.base)||0,r={},m=s>0&&s<1,g=isNaN(s)||m,v=o.axis,p=s,y=s;return rt(s)?p=y={center:.5,edges:.5,end:1}[s]||0:!m&&g&&(p=s[0],y=s[1]),function(w,S,C){var _=(C||o).length,A=r[_],D,H,E,G,O,Y,M,U,z;if(!A){if(z=o.grid==="auto"?0:(o.grid||[1,un])[1],!z){for(M=-un;M<(M=C[z++].getBoundingClientRect().left)&&z<_;);z<_&&z--}for(A=r[_]=[],D=g?Math.min(z,_)*p-.5:s%z,H=z===un?0:g?_*y/z-.5:s/z|0,M=0,U=un,Y=0;Y<_;Y++)E=Y%z-D,G=H-(Y/z|0),A[Y]=O=v?Math.abs(v==="y"?G:E):R1(E*E+G*G),O>M&&(M=O),O<U&&(U=O);s==="random"&&X1(A),A.max=M-U,A.min=U,A.v=_=(parseFloat(o.amount)||parseFloat(o.each)*(z>_?_-1:v?v==="y"?_/z:z:Math.max(z,_/z))||0)*(s==="edges"?-1:1),A.b=_<0?f-_:f,A.u=xt(o.amount||o.each)||0,l=l&&_<0?nv(l):l}return _=(A[w]-A.min)/A.max||0,Ye(A.b+(l?l(_):_)*A.v)+A.u}},Ef=function(a){var o=Math.pow(10,((a+"").split(".")[1]||"").length);return function(l){var s=Ye(Math.round(parseFloat(l)/a)*a*o);return(s-s%1)/o+($n(l)?0:xt(l))}},Q1=function(a,o){var l=yt(a),s,f;return!l&&An(a)&&(s=l=a.radius||un,a.values?(a=fn(a.values),(f=!$n(a[0]))&&(s*=s)):a=Ef(a.increment)),La(o,l?Ke(a)?function(r){return f=a(r),Math.abs(f-r)<=s?f:r}:function(r){for(var m=parseFloat(f?r.x:r),g=parseFloat(f?r.y:0),v=un,p=0,y=a.length,w,S;y--;)f?(w=a[y].x-m,S=a[y].y-g,w=w*w+S*S):w=Math.abs(a[y]-m),w<v&&(v=w,p=y);return p=!s||v<=s?a[p]:r,f||p===r||$n(r)?p:p+xt(r)}:Ef(a))},Z1=function(a,o,l,s){return La(yt(a)?!o:l===!0?!!(l=0):!s,function(){return yt(a)?a[~~(Math.random()*a.length)]:(l=l||1e-5)&&(s=l<1?Math.pow(10,(l+"").length-2):1)&&Math.floor(Math.round((a-l/2+Math.random()*(o-a+l*.99))/l)*l*s)/s})},Ab=function(){for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return function(s){return o.reduce(function(f,r){return r(f)},s)}},Rb=function(a,o){return function(l){return a(parseFloat(l))+(o||xt(l))}},zb=function(a,o,l){return I1(a,o,0,1,l)},K1=function(a,o,l){return La(l,function(s){return a[~~o(s)]})},Eb=function c(a,o,l){var s=o-a;return yt(a)?K1(a,c(0,a.length),o):La(l,function(f){return(s+(f-a)%s)%s+a})},jb=function c(a,o,l){var s=o-a,f=s*2;return yt(a)?K1(a,c(0,a.length-1),o):La(l,function(r){return r=(f+(r-a)%f)%f||0,a+(r>s?f-r:r)})},jo=function(a){return a.replace(ub,function(o){var l=o.indexOf("[")+1,s=o.substring(l||7,l?o.indexOf("]"):o.length-1).split(fb);return Z1(l?s:+s[0],l?0:+s[1],+s[2]||1e-5)})},I1=function(a,o,l,s,f){var r=o-a,m=s-l;return La(f,function(g){return l+((g-a)/r*m||0)})},Db=function c(a,o,l,s){var f=isNaN(a+o)?0:function(S){return(1-S)*a+S*o};if(!f){var r=rt(a),m={},g,v,p,y,w;if(l===!0&&(s=1)&&(l=null),r)a={p:a},o={p:o};else if(yt(a)&&!yt(o)){for(p=[],y=a.length,w=y-2,v=1;v<y;v++)p.push(c(a[v-1],a[v]));y--,f=function(C){C*=y;var _=Math.min(w,~~C);return p[_](C-_)},l=o}else s||(a=mi(yt(a)?[]:{},a));if(!p){for(g in o)Jf.call(m,a,g,"get",o[g]);f=function(C){return td(C,m)||(r?a.p:a)}}}return La(l,f)},e1=function(a,o,l){var s=a.labels,f=un,r,m,g;for(r in s)m=s[r]-o,m<0==!!l&&m&&f>(m=Math.abs(m))&&(g=r,f=m);return g},Qt=function(a,o,l){var s=a.vars,f=s[o],r=Ve,m=a._ctx,g,v,p;if(f)return g=s[o+"Params"],v=s.callbackScope||a,l&&Ea.length&&vs(),m&&(Ve=m),p=g?f.apply(v,g):f.call(v),Ve=r,p},bo=function(a){return Da(a),a.scrollTrigger&&a.scrollTrigger.kill(!!pt),a.progress()<1&&Qt(a,"onInterrupt"),a},oi,J1=[],W1=function(a){if(a)if(a=!a.name&&a.default||a,Yf()||a.headless){var o=a.name,l=Ke(a),s=o&&!l&&a.init?function(){this._props=[]}:a,f={init:Eo,render:td,add:Jf,kill:Zb,modifier:Qb,rawVars:0},r={targetTest:0,get:0,getSetter:ed,aliases:{},register:0};if(gi(),a!==s){if(Xt[o])return;Jt(s,Jt(gs(a,f),r)),mi(s.prototype,mi(f,gs(a,r))),Xt[s.prop=o]=s,a.targetTest&&(ds.push(s),Qf[o]=1),o=(o==="css"?"CSS":o.charAt(0).toUpperCase()+o.substr(1))+"Plugin"}O1(o,s),a.register&&a.register(Ot,s,Dt)}else J1.push(a)},Le=255,_o={aqua:[0,Le,Le],lime:[0,Le,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Le],navy:[0,0,128],white:[Le,Le,Le],olive:[128,128,0],yellow:[Le,Le,0],orange:[Le,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Le,0,0],pink:[Le,192,203],cyan:[0,Le,Le],transparent:[Le,Le,Le,0]},cf=function(a,o,l){return a+=a<0?1:a>1?-1:0,(a*6<1?o+(l-o)*a*6:a<.5?l:a*3<2?o+(l-o)*(2/3-a)*6:o)*Le+.5|0},$1=function(a,o,l){var s=a?$n(a)?[a>>16,a>>8&Le,a&Le]:0:_o.black,f,r,m,g,v,p,y,w,S,C;if(!s){if(a.substr(-1)===","&&(a=a.substr(0,a.length-1)),_o[a])s=_o[a];else if(a.charAt(0)==="#"){if(a.length<6&&(f=a.charAt(1),r=a.charAt(2),m=a.charAt(3),a="#"+f+f+r+r+m+m+(a.length===5?a.charAt(4)+a.charAt(4):"")),a.length===9)return s=parseInt(a.substr(1,6),16),[s>>16,s>>8&Le,s&Le,parseInt(a.substr(7),16)/255];a=parseInt(a.substr(1),16),s=[a>>16,a>>8&Le,a&Le]}else if(a.substr(0,3)==="hsl"){if(s=C=a.match(Kp),!o)g=+s[0]%360/360,v=+s[1]/100,p=+s[2]/100,r=p<=.5?p*(v+1):p+v-p*v,f=p*2-r,s.length>3&&(s[3]*=1),s[0]=cf(g+1/3,f,r),s[1]=cf(g,f,r),s[2]=cf(g-1/3,f,r);else if(~a.indexOf("="))return s=a.match(E1),l&&s.length<4&&(s[3]=1),s}else s=a.match(Kp)||_o.transparent;s=s.map(Number)}return o&&!C&&(f=s[0]/Le,r=s[1]/Le,m=s[2]/Le,y=Math.max(f,r,m),w=Math.min(f,r,m),p=(y+w)/2,y===w?g=v=0:(S=y-w,v=p>.5?S/(2-y-w):S/(y+w),g=y===f?(r-m)/S+(r<m?6:0):y===r?(m-f)/S+2:(f-r)/S+4,g*=60),s[0]=~~(g+.5),s[1]=~~(v*100+.5),s[2]=~~(p*100+.5)),l&&s.length<4&&(s[3]=1),s},ev=function(a){var o=[],l=[],s=-1;return a.split(ja).forEach(function(f){var r=f.match(ii)||[];o.push.apply(o,r),l.push(s+=r.length+1)}),o.c=l,o},t1=function(a,o,l){var s="",f=(a+s).match(ja),r=o?"hsla(":"rgba(",m=0,g,v,p,y;if(!f)return a;if(f=f.map(function(w){return(w=$1(w,o,1))&&r+(o?w[0]+","+w[1]+"%,"+w[2]+"%,"+w[3]:w.join(","))+")"}),l&&(p=ev(a),g=l.c,g.join(s)!==p.c.join(s)))for(v=a.replace(ja,"1").split(ii),y=v.length-1;m<y;m++)s+=v[m]+(~g.indexOf(m)?f.shift()||r+"0,0,0,0)":(p.length?p:f.length?f:l).shift());if(!v)for(v=a.split(ja),y=v.length-1;m<y;m++)s+=v[m]+f[m];return s+v[y]},ja=(function(){var c="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",a;for(a in _o)c+="|"+a+"\\b";return new RegExp(c+")","gi")})(),Mb=/hsl[a]?\(/,tv=function(a){var o=a.join(" "),l;if(ja.lastIndex=0,ja.test(o))return l=Mb.test(o),a[1]=t1(a[1],l),a[0]=t1(a[0],l,ev(a[1])),!0},Do,Pt=(function(){var c=Date.now,a=500,o=33,l=c(),s=l,f=1e3/240,r=f,m=[],g,v,p,y,w,S,C=function _(A){var D=c()-s,H=A===!0,E,G,O,Y;if((D>a||D<0)&&(l+=D-o),s+=D,O=s-l,E=O-r,(E>0||H)&&(Y=++y.frame,w=O-y.time*1e3,y.time=O=O/1e3,r+=E+(E>=f?4:f-E),G=1),H||(g=v(_)),G)for(S=0;S<m.length;S++)m[S](O,w,Y,A)};return y={time:0,frame:0,tick:function(){C(!0)},deltaRatio:function(A){return w/(1e3/(A||60))},wake:function(){D1&&(!Tf&&Yf()&&(Tn=Tf=window,Xf=Tn.document||{},It.gsap=Ot,(Tn.gsapVersions||(Tn.gsapVersions=[])).push(Ot.version),M1(ps||Tn.GreenSockGlobals||!Tn.gsap&&Tn||{}),J1.forEach(W1)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,g&&y.sleep(),v=p||function(A){return setTimeout(A,r-y.time*1e3+1|0)},Do=1,C(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(g),Do=0,v=Eo},lagSmoothing:function(A,D){a=A||1/0,o=Math.min(D||33,a)},fps:function(A){f=1e3/(A||240),r=y.time*1e3+f},add:function(A,D,H){var E=D?function(G,O,Y,M){A(G,O,Y,M),y.remove(E)}:A;return y.remove(A),m[H?"unshift":"push"](E),gi(),E},remove:function(A,D){~(D=m.indexOf(A))&&m.splice(D,1)&&S>=D&&S--},_listeners:m},y})(),gi=function(){return!Do&&Pt.wake()},we={},Ob=/^[\d.\-M][\d.\-,\s]/,Lb=/["']/g,Ub=function(a){for(var o={},l=a.substr(1,a.length-3).split(":"),s=l[0],f=1,r=l.length,m,g,v;f<r;f++)g=l[f],m=f!==r-1?g.lastIndexOf(","):g.length,v=g.substr(0,m),o[s]=isNaN(v)?v.replace(Lb,"").trim():+v,s=g.substr(m+1).trim();return o},Bb=function(a){var o=a.indexOf("(")+1,l=a.indexOf(")"),s=a.indexOf("(",o);return a.substring(o,~s&&s<l?a.indexOf(")",l+1):l)},kb=function(a){var o=(a+"").split("("),l=we[o[0]];return l&&o.length>1&&l.config?l.config.apply(null,~a.indexOf("{")?[Ub(o[1])]:Bb(a).split(",").map(k1)):we._CE&&Ob.test(a)?we._CE("",a):l},nv=function(a){return function(o){return 1-a(1-o)}},av=function c(a,o){for(var l=a._first,s;l;)l instanceof _t?c(l,o):l.vars.yoyoEase&&(!l._yoyo||!l._repeat)&&l._yoyo!==o&&(l.timeline?c(l.timeline,o):(s=l._ease,l._ease=l._yEase,l._yEase=s,l._yoyo=o)),l=l._next},sl=function(a,o){return a&&(Ke(a)?a:we[a]||kb(a))||o},ml=function(a,o,l,s){l===void 0&&(l=function(g){return 1-o(1-g)}),s===void 0&&(s=function(g){return g<.5?o(g*2)/2:1-o((1-g)*2)/2});var f={easeIn:o,easeOut:l,easeInOut:s},r;return jt(a,function(m){we[m]=It[m]=f,we[r=m.toLowerCase()]=l;for(var g in f)we[r+(g==="easeIn"?".in":g==="easeOut"?".out":".inOut")]=we[m+"."+g]=f[g]}),f},lv=function(a){return function(o){return o<.5?(1-a(1-o*2))/2:.5+a((o-.5)*2)/2}},uf=function c(a,o,l){var s=o>=1?o:1,f=(l||(a?.3:.45))/(o<1?o:1),r=f/wf*(Math.asin(1/s)||0),m=function(p){return p===1?1:s*Math.pow(2,-10*p)*cb((p-r)*f)+1},g=a==="out"?m:a==="in"?function(v){return 1-m(1-v)}:lv(m);return f=wf/f,g.config=function(v,p){return c(a,v,p)},g},ff=function c(a,o){o===void 0&&(o=1.70158);var l=function(r){return r?--r*r*((o+1)*r+o)+1:0},s=a==="out"?l:a==="in"?function(f){return 1-l(1-f)}:lv(l);return s.config=function(f){return c(a,f)},s};jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(c,a){var o=a<5?a+1:a;ml(c+",Power"+(o-1),a?function(l){return Math.pow(l,o)}:function(l){return l},function(l){return 1-Math.pow(1-l,o)},function(l){return l<.5?Math.pow(l*2,o)/2:1-Math.pow((1-l)*2,o)/2})});we.Linear.easeNone=we.none=we.Linear.easeIn;ml("Elastic",uf("in"),uf("out"),uf());(function(c,a){var o=1/a,l=2*o,s=2.5*o,f=function(m){return m<o?c*m*m:m<l?c*Math.pow(m-1.5/a,2)+.75:m<s?c*(m-=2.25/a)*m+.9375:c*Math.pow(m-2.625/a,2)+.984375};ml("Bounce",function(r){return 1-f(1-r)},f)})(7.5625,2.75);ml("Expo",function(c){return Math.pow(2,10*(c-1))*c+c*c*c*c*c*c*(1-c)});ml("Circ",function(c){return-(R1(1-c*c)-1)});ml("Sine",function(c){return c===1?1:-sb(c*ob)+1});ml("Back",ff("in"),ff("out"),ff());we.SteppedEase=we.steps=It.SteppedEase={config:function(a,o){a===void 0&&(a=1);var l=1/a,s=a+(o?0:1),f=o?1:0,r=1-Ue;return function(m){return((s*Bo(0,r,m)|0)+f)*l}}};hi.ease=we["quad.out"];jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(c){return Zf+=c+","+c+"Params,"});var iv=function(a,o){this.id=rb++,a._gsap=this,this.target=a,this.harness=o,this.get=o?o.get:U1,this.set=o?o.getSetter:ed},Mo=(function(){function c(o){this.vars=o,this._delay=+o.delay||0,(this._repeat=o.repeat===1/0?-2:o.repeat||0)&&(this._rDelay=o.repeatDelay||0,this._yoyo=!!o.yoyo||!!o.yoyoEase),this._ts=1,vi(this,+o.duration,1,1),this.data=o.data,Ve&&(this._ctx=Ve,Ve.data.push(this)),Do||Pt.wake()}var a=c.prototype;return a.delay=function(l){return l||l===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+l-this._delay),this._delay=l,this):this._delay},a.duration=function(l){return arguments.length?this.totalDuration(this._repeat>0?l+(l+this._rDelay)*this._repeat:l):this.totalDuration()&&this._dur},a.totalDuration=function(l){return arguments.length?(this._dirty=0,vi(this,this._repeat<0?l:(l-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},a.totalTime=function(l,s){if(gi(),!arguments.length)return this._tTime;var f=this._dp;if(f&&f.smoothChildTiming&&this._ts){for(zs(this,l),!f._dp||f.parent||q1(f,this);f&&f.parent;)f.parent._time!==f._start+(f._ts>=0?f._tTime/f._ts:(f.totalDuration()-f._tTime)/-f._ts)&&f.totalTime(f._tTime,!0),f=f.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&l<this._tDur||this._ts<0&&l>0||!this._tDur&&!l)&&Cn(this._dp,this,this._start-this._delay)}return(this._tTime!==l||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ue||!this._initted&&this._dur&&l||!l&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=l),B1(this,l,s)),this},a.time=function(l,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),l+Wp(this))%(this._dur+this._rDelay)||(l?this._dur:0),s):this._time},a.totalProgress=function(l,s){return arguments.length?this.totalTime(this.totalDuration()*l,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},a.progress=function(l,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-l:l)+Wp(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},a.iteration=function(l,s){var f=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(l-1)*f,s):this._repeat?pi(this._tTime,f)+1:1},a.timeScale=function(l,s){if(!arguments.length)return this._rts===-Ue?0:this._rts;if(this._rts===l)return this;var f=this.parent&&this._ts?xs(this.parent._time,this):this._tTime;return this._rts=+l||0,this._ts=this._ps||l===-Ue?0:this._rts,this.totalTime(Bo(-Math.abs(this._delay),this.totalDuration(),f),s!==!1),Rs(this),yb(this)},a.paused=function(l){return arguments.length?(this._ps!==l&&(this._ps=l,l?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(gi(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ue&&(this._tTime-=Ue)))),this):this._ps},a.startTime=function(l){if(arguments.length){this._start=Ye(l);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Cn(s,this,this._start-this._delay),this}return this._start},a.endTime=function(l){return this._start+(Et(l)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},a.rawTime=function(l){var s=this.parent||this._dp;return s?l&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xs(s.rawTime(l),this):this._tTime:this._tTime},a.revert=function(l){l===void 0&&(l=pb);var s=pt;return pt=l,If(this)&&(this.timeline&&this.timeline.revert(l),this.totalTime(-.01,l.suppressEvents)),this.data!=="nested"&&l.kill!==!1&&this.kill(),pt=s,this},a.globalTime=function(l){for(var s=this,f=arguments.length?l:s.rawTime();s;)f=s._start+f/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(l):f},a.repeat=function(l){return arguments.length?(this._repeat=l===1/0?-2:l,$p(this)):this._repeat===-2?1/0:this._repeat},a.repeatDelay=function(l){if(arguments.length){var s=this._time;return this._rDelay=l,$p(this),s?this.time(s):this}return this._rDelay},a.yoyo=function(l){return arguments.length?(this._yoyo=l,this):this._yoyo},a.seek=function(l,s){return this.totalTime(cn(this,l),Et(s))},a.restart=function(l,s){return this.play().totalTime(l?-this._delay:0,Et(s)),this._dur||(this._zTime=-Ue),this},a.play=function(l,s){return l!=null&&this.seek(l,s),this.reversed(!1).paused(!1)},a.reverse=function(l,s){return l!=null&&this.seek(l||this.totalDuration(),s),this.reversed(!0).paused(!1)},a.pause=function(l,s){return l!=null&&this.seek(l,s),this.paused(!0)},a.resume=function(){return this.paused(!1)},a.reversed=function(l){return arguments.length?(!!l!==this.reversed()&&this.timeScale(-this._rts||(l?-Ue:0)),this):this._rts<0},a.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ue,this},a.isActive=function(){var l=this.parent||this._dp,s=this._start,f;return!!(!l||this._ts&&this._initted&&l.isActive()&&(f=l.rawTime(!0))>=s&&f<this.endTime(!0)-Ue)},a.eventCallback=function(l,s,f){var r=this.vars;return arguments.length>1?(s?(r[l]=s,f&&(r[l+"Params"]=f),l==="onUpdate"&&(this._onUpdate=s)):delete r[l],this):r[l]},a.then=function(l){var s=this,f=s._prom;return new Promise(function(r){var m=Ke(l)?l:F1,g=function(){var p=s.then;s.then=null,f&&f(),Ke(m)&&(m=m(s))&&(m.then||m===s)&&(s.then=p),r(m),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?g():s._prom=g})},a.kill=function(){bo(this)},c})();Jt(Mo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ue,_prom:0,_ps:!1,_rts:1});var _t=(function(c){A1(a,c);function a(l,s){var f;return l===void 0&&(l={}),f=c.call(this,l)||this,f.labels={},f.smoothChildTiming=!!l.smoothChildTiming,f.autoRemoveChildren=!!l.autoRemoveChildren,f._sort=Et(l.sortChildren),Xe&&Cn(l.parent||Xe,Kn(f),s),l.reversed&&f.reverse(),l.paused&&f.paused(!0),l.scrollTrigger&&G1(Kn(f),l.scrollTrigger),f}var o=a.prototype;return o.to=function(s,f,r){return To(0,arguments,this),this},o.from=function(s,f,r){return To(1,arguments,this),this},o.fromTo=function(s,f,r,m){return To(2,arguments,this),this},o.set=function(s,f,r){return f.duration=0,f.parent=this,wo(f).repeatDelay||(f.repeat=0),f.immediateRender=!!f.immediateRender,new at(s,f,cn(this,r),1),this},o.call=function(s,f,r){return Cn(this,at.delayedCall(0,s,f),r)},o.staggerTo=function(s,f,r,m,g,v,p){return r.duration=f,r.stagger=r.stagger||m,r.onComplete=v,r.onCompleteParams=p,r.parent=this,new at(s,r,cn(this,g)),this},o.staggerFrom=function(s,f,r,m,g,v,p){return r.runBackwards=1,wo(r).immediateRender=Et(r.immediateRender),this.staggerTo(s,f,r,m,g,v,p)},o.staggerFromTo=function(s,f,r,m,g,v,p,y){return m.startAt=r,wo(m).immediateRender=Et(m.immediateRender),this.staggerTo(s,f,m,g,v,p,y)},o.render=function(s,f,r){var m=this._time,g=this._dirty?this.totalDuration():this._tDur,v=this._dur,p=s<=0?0:Ye(s),y=this._zTime<0!=s<0&&(this._initted||!v),w,S,C,_,A,D,H,E,G,O,Y,M;if(this!==Xe&&p>g&&s>=0&&(p=g),p!==this._tTime||r||y){if(m!==this._time&&v&&(p+=this._time-m,s+=this._time-m),w=p,G=this._start,E=this._ts,D=!E,y&&(v||(m=this._zTime),(s||!f)&&(this._zTime=s)),this._repeat){if(Y=this._yoyo,A=v+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(A*100+s,f,r);if(w=Ye(p%A),p===g?(_=this._repeat,w=v):(O=Ye(p/A),_=~~O,_&&_===O&&(w=v,_--),w>v&&(w=v)),O=pi(this._tTime,A),!m&&this._tTime&&O!==_&&this._tTime-O*A-this._dur<=0&&(O=_),Y&&_&1&&(w=v-w,M=1),_!==O&&!this._lock){var U=Y&&O&1,z=U===(Y&&_&1);if(_<O&&(U=!U),m=U?0:p%v?v:p,this._lock=1,this.render(m||(M?0:Ye(_*A)),f,!v)._lock=0,this._tTime=p,!f&&this.parent&&Qt(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,O=_),m&&m!==this._time||D!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(v=this._dur,g=this._tDur,z&&(this._lock=2,m=U?v:-1e-4,this.render(m,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!D)return this;av(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(H=wb(this,Ye(m),Ye(w)),H&&(p-=w-(w=H._start))),this._tTime=p,this._time=w,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,m=0),!m&&p&&v&&!f&&!O&&(Qt(this,"onStart"),this._tTime!==p))return this;if(w>=m&&s>=0)for(S=this._first;S;){if(C=S._next,(S._act||w>=S._start)&&S._ts&&H!==S){if(S.parent!==this)return this.render(s,f,r);if(S.render(S._ts>0?(w-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(w-S._start)*S._ts,f,r),w!==this._time||!this._ts&&!D){H=0,C&&(p+=this._zTime=-Ue);break}}S=C}else{S=this._last;for(var B=s<0?s:w;S;){if(C=S._prev,(S._act||B<=S._end)&&S._ts&&H!==S){if(S.parent!==this)return this.render(s,f,r);if(S.render(S._ts>0?(B-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(B-S._start)*S._ts,f,r||pt&&If(S)),w!==this._time||!this._ts&&!D){H=0,C&&(p+=this._zTime=B?-Ue:Ue);break}}S=C}}if(H&&!f&&(this.pause(),H.render(w>=m?0:-Ue)._zTime=w>=m?1:-1,this._ts))return this._start=G,Rs(this),this.render(s,f,r);this._onUpdate&&!f&&Qt(this,"onUpdate",!0),(p===g&&this._tTime>=this.totalDuration()||!p&&m)&&(G===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((s||!v)&&(p===g&&this._ts>0||!p&&this._ts<0)&&Da(this,1),!f&&!(s<0&&!m)&&(p||m||!g)&&(Qt(this,p===g&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<g&&this.timeScale()>0)&&this._prom())))}return this},o.add=function(s,f){var r=this;if($n(f)||(f=cn(this,f,s)),!(s instanceof Mo)){if(yt(s))return s.forEach(function(m){return r.add(m,f)}),this;if(rt(s))return this.addLabel(s,f);if(Ke(s))s=at.delayedCall(0,s);else return this}return this!==s?Cn(this,s,f):this},o.getChildren=function(s,f,r,m){s===void 0&&(s=!0),f===void 0&&(f=!0),r===void 0&&(r=!0),m===void 0&&(m=-un);for(var g=[],v=this._first;v;)v._start>=m&&(v instanceof at?f&&g.push(v):(r&&g.push(v),s&&g.push.apply(g,v.getChildren(!0,f,r)))),v=v._next;return g},o.getById=function(s){for(var f=this.getChildren(1,1,1),r=f.length;r--;)if(f[r].vars.id===s)return f[r]},o.remove=function(s){return rt(s)?this.removeLabel(s):Ke(s)?this.killTweensOf(s):(s.parent===this&&As(this,s),s===this._recent&&(this._recent=this._last),rl(this))},o.totalTime=function(s,f){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ye(Pt.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),c.prototype.totalTime.call(this,s,f),this._forcing=0,this):this._tTime},o.addLabel=function(s,f){return this.labels[s]=cn(this,f),this},o.removeLabel=function(s){return delete this.labels[s],this},o.addPause=function(s,f,r){var m=at.delayedCall(0,f||Eo,r);return m.data="isPause",this._hasPause=1,Cn(this,m,cn(this,s))},o.removePause=function(s){var f=this._first;for(s=cn(this,s);f;)f._start===s&&f.data==="isPause"&&Da(f),f=f._next},o.killTweensOf=function(s,f,r){for(var m=this.getTweensOf(s,r),g=m.length;g--;)Aa!==m[g]&&m[g].kill(s,f);return this},o.getTweensOf=function(s,f){for(var r=[],m=fn(s),g=this._first,v=$n(f),p;g;)g instanceof at?vb(g._targets,m)&&(v?(!Aa||g._initted&&g._ts)&&g.globalTime(0)<=f&&g.globalTime(g.totalDuration())>f:!f||g.isActive())&&r.push(g):(p=g.getTweensOf(m,f)).length&&r.push.apply(r,p),g=g._next;return r},o.tweenTo=function(s,f){f=f||{};var r=this,m=cn(r,s),g=f,v=g.startAt,p=g.onStart,y=g.onStartParams,w=g.immediateRender,S,C=at.to(r,Jt({ease:f.ease||"none",lazy:!1,immediateRender:!1,time:m,overwrite:"auto",duration:f.duration||Math.abs((m-(v&&"time"in v?v.time:r._time))/r.timeScale())||Ue,onStart:function(){if(r.pause(),!S){var A=f.duration||Math.abs((m-(v&&"time"in v?v.time:r._time))/r.timeScale());C._dur!==A&&vi(C,A,0,1).render(C._time,!0,!0),S=1}p&&p.apply(C,y||[])}},f));return w?C.render(0):C},o.tweenFromTo=function(s,f,r){return this.tweenTo(f,Jt({startAt:{time:cn(this,s)}},r))},o.recent=function(){return this._recent},o.nextLabel=function(s){return s===void 0&&(s=this._time),e1(this,cn(this,s))},o.previousLabel=function(s){return s===void 0&&(s=this._time),e1(this,cn(this,s),1)},o.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ue)},o.shiftChildren=function(s,f,r){r===void 0&&(r=0);var m=this._first,g=this.labels,v;for(s=Ye(s);m;)m._start>=r&&(m._start+=s,m._end+=s),m=m._next;if(f)for(v in g)g[v]>=r&&(g[v]+=s);return rl(this)},o.invalidate=function(s){var f=this._first;for(this._lock=0;f;)f.invalidate(s),f=f._next;return c.prototype.invalidate.call(this,s)},o.clear=function(s){s===void 0&&(s=!0);for(var f=this._first,r;f;)r=f._next,this.remove(f),f=r;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),rl(this)},o.totalDuration=function(s){var f=0,r=this,m=r._last,g=un,v,p,y;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-s:s));if(r._dirty){for(y=r.parent;m;)v=m._prev,m._dirty&&m.totalDuration(),p=m._start,p>g&&r._sort&&m._ts&&!r._lock?(r._lock=1,Cn(r,m,p-m._delay,1)._lock=0):g=p,p<0&&m._ts&&(f-=p,(!y&&!r._dp||y&&y.smoothChildTiming)&&(r._start+=Ye(p/r._ts),r._time-=p,r._tTime-=p),r.shiftChildren(-p,!1,-1/0),g=0),m._end>f&&m._ts&&(f=m._end),m=v;vi(r,r===Xe&&r._time>f?r._time:f,1,1),r._dirty=0}return r._tDur},a.updateRoot=function(s){if(Xe._ts&&(B1(Xe,xs(s,Xe)),L1=Pt.frame),Pt.frame>=Ip){Ip+=Kt.autoSleep||120;var f=Xe._first;if((!f||!f._ts)&&Kt.autoSleep&&Pt._listeners.length<2){for(;f&&!f._ts;)f=f._next;f||Pt.sleep()}}},a})(Mo);Jt(_t.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fb=function(a,o,l,s,f,r,m){var g=new Dt(this._pt,a,o,0,1,fv,null,f),v=0,p=0,y,w,S,C,_,A,D,H;for(g.b=l,g.e=s,l+="",s+="",(D=~s.indexOf("random("))&&(s=jo(s)),r&&(H=[l,s],r(H,a,o),l=H[0],s=H[1]),w=l.match(rf)||[];y=rf.exec(s);)C=y[0],_=s.substring(v,y.index),S?S=(S+1)%5:_.substr(-5)==="rgba("&&(S=1),C!==w[p++]&&(A=parseFloat(w[p-1])||0,g._pt={_next:g._pt,p:_||p===1?_:",",s:A,c:C.charAt(1)==="="?ci(A,C)-A:parseFloat(C)-A,m:S&&S<4?Math.round:0},v=rf.lastIndex);return g.c=v<s.length?s.substring(v,s.length):"",g.fp=m,(j1.test(s)||D)&&(g.e=0),this._pt=g,g},Jf=function(a,o,l,s,f,r,m,g,v,p){Ke(s)&&(s=s(f||0,a,r));var y=a[o],w=l!=="get"?l:Ke(y)?v?a[o.indexOf("set")||!Ke(a["get"+o.substr(3)])?o:"get"+o.substr(3)](v):a[o]():y,S=Ke(y)?v?Yb:cv:$f,C;if(rt(s)&&(~s.indexOf("random(")&&(s=jo(s)),s.charAt(1)==="="&&(C=ci(w,s)+(xt(w)||0),(C||C===0)&&(s=C))),!p||w!==s||jf)return!isNaN(w*s)&&s!==""?(C=new Dt(this._pt,a,o,+w||0,s-(w||0),typeof y=="boolean"?Pb:uv,0,S),v&&(C.fp=v),m&&C.modifier(m,this,a),this._pt=C):(!y&&!(o in a)&&Pf(o,s),Fb.call(this,a,o,w,s,S,g||Kt.stringFilter,v))},Hb=function(a,o,l,s,f){if(Ke(a)&&(a=Co(a,f,o,l,s)),!An(a)||a.style&&a.nodeType||yt(a)||z1(a))return rt(a)?Co(a,f,o,l,s):a;var r={},m;for(m in a)r[m]=Co(a[m],f,o,l,s);return r},ov=function(a,o,l,s,f,r){var m,g,v,p;if(Xt[a]&&(m=new Xt[a]).init(f,m.rawVars?o[a]:Hb(o[a],s,f,r,l),l,s,r)!==!1&&(l._pt=g=new Dt(l._pt,f,a,0,1,m.render,m,0,m.priority),l!==oi))for(v=l._ptLookup[l._targets.indexOf(f)],p=m._props.length;p--;)v[m._props[p]]=g;return m},Aa,jf,Wf=function c(a,o,l){var s=a.vars,f=s.ease,r=s.startAt,m=s.immediateRender,g=s.lazy,v=s.onUpdate,p=s.runBackwards,y=s.yoyoEase,w=s.keyframes,S=s.autoRevert,C=a._dur,_=a._startAt,A=a._targets,D=a.parent,H=D&&D.data==="nested"?D.vars.targets:A,E=a._overwrite==="auto"&&!Gf,G=a.timeline,O,Y,M,U,z,B,Z,W,$,ne,ae,k,J;if(G&&(!w||!f)&&(f="none"),a._ease=sl(f,hi.ease),a._yEase=y?nv(sl(y===!0?f:y,hi.ease)):0,y&&a._yoyo&&!a._repeat&&(y=a._yEase,a._yEase=a._ease,a._ease=y),a._from=!G&&!!s.runBackwards,!G||w&&!s.stagger){if(W=A[0]?ol(A[0]).harness:0,k=W&&s[W.prop],O=gs(s,Qf),_&&(_._zTime<0&&_.progress(1),o<0&&p&&m&&!S?_.render(-1,!0):_.revert(p&&C?fs:mb),_._lazy=0),r){if(Da(a._startAt=at.set(A,Jt({data:"isStart",overwrite:!1,parent:D,immediateRender:!0,lazy:!_&&Et(g),startAt:null,delay:0,onUpdate:v&&function(){return Qt(a,"onUpdate")},stagger:0},r))),a._startAt._dp=0,a._startAt._sat=a,o<0&&(pt||!m&&!S)&&a._startAt.revert(fs),m&&C&&o<=0&&l<=0){o&&(a._zTime=o);return}}else if(p&&C&&!_){if(o&&(m=!1),M=Jt({overwrite:!1,data:"isFromStart",lazy:m&&!_&&Et(g),immediateRender:m,stagger:0,parent:D},O),k&&(M[W.prop]=k),Da(a._startAt=at.set(A,M)),a._startAt._dp=0,a._startAt._sat=a,o<0&&(pt?a._startAt.revert(fs):a._startAt.render(-1,!0)),a._zTime=o,!m)c(a._startAt,Ue,Ue);else if(!o)return}for(a._pt=a._ptCache=0,g=C&&Et(g)||g&&!C,Y=0;Y<A.length;Y++){if(z=A[Y],Z=z._gsap||Kf(A)[Y]._gsap,a._ptLookup[Y]=ne={},Cf[Z.id]&&Ea.length&&vs(),ae=H===A?Y:H.indexOf(z),W&&($=new W).init(z,k||O,a,ae,H)!==!1&&(a._pt=U=new Dt(a._pt,z,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(ie){ne[ie]=U}),$.priority&&(B=1)),!W||k)for(M in O)Xt[M]&&($=ov(M,O,a,ae,z,H))?$.priority&&(B=1):ne[M]=U=Jf.call(a,z,M,"get",O[M],ae,H,0,s.stringFilter);a._op&&a._op[Y]&&a.kill(z,a._op[Y]),E&&a._pt&&(Aa=a,Xe.killTweensOf(z,ne,a.globalTime(o)),J=!a.parent,Aa=0),a._pt&&g&&(Cf[Z.id]=1)}B&&dv(a),a._onInit&&a._onInit(a)}a._onUpdate=v,a._initted=(!a._op||a._pt)&&!J,w&&o<=0&&G.render(un,!0,!0)},qb=function(a,o,l,s,f,r,m,g){var v=(a._pt&&a._ptCache||(a._ptCache={}))[o],p,y,w,S;if(!v)for(v=a._ptCache[o]=[],w=a._ptLookup,S=a._targets.length;S--;){if(p=w[S][o],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==o&&p.fp!==o;)p=p._next;if(!p)return jf=1,a.vars[o]="+=0",Wf(a,m),jf=0,g?zo(o+" not eligible for reset"):1;v.push(p)}for(S=v.length;S--;)y=v[S],p=y._pt||y,p.s=(s||s===0)&&!f?s:p.s+(s||0)+r*p.c,p.c=l-p.s,y.e&&(y.e=We(l)+xt(y.e)),y.b&&(y.b=p.s+xt(y.b))},Gb=function(a,o){var l=a[0]?ol(a[0]).harness:0,s=l&&l.aliases,f,r,m,g;if(!s)return o;f=mi({},o);for(r in s)if(r in f)for(g=s[r].split(","),m=g.length;m--;)f[g[m]]=f[r];return f},Vb=function(a,o,l,s){var f=o.ease||s||"power1.inOut",r,m;if(yt(o))m=l[a]||(l[a]=[]),o.forEach(function(g,v){return m.push({t:v/(o.length-1)*100,v:g,e:f})});else for(r in o)m=l[r]||(l[r]=[]),r==="ease"||m.push({t:parseFloat(a),v:o[r],e:f})},Co=function(a,o,l,s,f){return Ke(a)?a.call(o,l,s,f):rt(a)&&~a.indexOf("random(")?jo(a):a},rv=Zf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",sv={};jt(rv+",id,stagger,delay,duration,paused,scrollTrigger",function(c){return sv[c]=1});var at=(function(c){A1(a,c);function a(l,s,f,r){var m;typeof s=="number"&&(f.duration=s,s=f,f=null),m=c.call(this,r?s:wo(s))||this;var g=m.vars,v=g.duration,p=g.delay,y=g.immediateRender,w=g.stagger,S=g.overwrite,C=g.keyframes,_=g.defaults,A=g.scrollTrigger,D=g.yoyoEase,H=s.parent||Xe,E=(yt(l)||z1(l)?$n(l[0]):"length"in s)?[l]:fn(l),G,O,Y,M,U,z,B,Z;if(m._targets=E.length?Kf(E):zo("GSAP target "+l+" not found. https://gsap.com",!Kt.nullTargetWarn)||[],m._ptLookup=[],m._overwrite=S,C||w||os(v)||os(p)){if(s=m.vars,G=m.timeline=new _t({data:"nested",defaults:_||{},targets:H&&H.data==="nested"?H.vars.targets:E}),G.kill(),G.parent=G._dp=Kn(m),G._start=0,w||os(v)||os(p)){if(M=E.length,B=w&&P1(w),An(w))for(U in w)~rv.indexOf(U)&&(Z||(Z={}),Z[U]=w[U]);for(O=0;O<M;O++)Y=gs(s,sv),Y.stagger=0,D&&(Y.yoyoEase=D),Z&&mi(Y,Z),z=E[O],Y.duration=+Co(v,Kn(m),O,z,E),Y.delay=(+Co(p,Kn(m),O,z,E)||0)-m._delay,!w&&M===1&&Y.delay&&(m._delay=p=Y.delay,m._start+=p,Y.delay=0),G.to(z,Y,B?B(O,z,E):0),G._ease=we.none;G.duration()?v=p=0:m.timeline=0}else if(C){wo(Jt(G.vars.defaults,{ease:"none"})),G._ease=sl(C.ease||s.ease||"none");var W=0,$,ne,ae;if(yt(C))C.forEach(function(k){return G.to(E,k,">")}),G.duration();else{Y={};for(U in C)U==="ease"||U==="easeEach"||Vb(U,C[U],Y,C.easeEach);for(U in Y)for($=Y[U].sort(function(k,J){return k.t-J.t}),W=0,O=0;O<$.length;O++)ne=$[O],ae={ease:ne.e,duration:(ne.t-(O?$[O-1].t:0))/100*v},ae[U]=ne.v,G.to(E,ae,W),W+=ae.duration;G.duration()<v&&G.to({},{duration:v-G.duration()})}}v||m.duration(v=G.duration())}else m.timeline=0;return S===!0&&!Gf&&(Aa=Kn(m),Xe.killTweensOf(E),Aa=0),Cn(H,Kn(m),f),s.reversed&&m.reverse(),s.paused&&m.paused(!0),(y||!v&&!C&&m._start===Ye(H._time)&&Et(y)&&bb(Kn(m))&&H.data!=="nested")&&(m._tTime=-Ue,m.render(Math.max(0,-p)||0)),A&&G1(Kn(m),A),m}var o=a.prototype;return o.render=function(s,f,r){var m=this._time,g=this._tDur,v=this._dur,p=s<0,y=s>g-Ue&&!p?g:s<Ue?0:s,w,S,C,_,A,D,H,E,G;if(!v)Sb(this,s,f,r);else if(y!==this._tTime||!s||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(w=y,E=this.timeline,this._repeat){if(_=v+this._rDelay,this._repeat<-1&&p)return this.totalTime(_*100+s,f,r);if(w=Ye(y%_),y===g?(C=this._repeat,w=v):(A=Ye(y/_),C=~~A,C&&C===A?(w=v,C--):w>v&&(w=v)),D=this._yoyo&&C&1,D&&(G=this._yEase,w=v-w),A=pi(this._tTime,_),w===m&&!r&&this._initted&&C===A)return this._tTime=y,this;C!==A&&(E&&this._yEase&&av(E,D),this.vars.repeatRefresh&&!D&&!this._lock&&w!==_&&this._initted&&(this._lock=r=1,this.render(Ye(_*C),!0).invalidate()._lock=0))}if(!this._initted){if(V1(this,p?s:w,r,f,y))return this._tTime=0,this;if(m!==this._time&&!(r&&this.vars.repeatRefresh&&C!==A))return this;if(v!==this._dur)return this.render(s,f,r)}if(this._tTime=y,this._time=w,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=H=(G||this._ease)(w/v),this._from&&(this.ratio=H=1-H),!m&&y&&!f&&!A&&(Qt(this,"onStart"),this._tTime!==y))return this;for(S=this._pt;S;)S.r(H,S.d),S=S._next;E&&E.render(s<0?s:E._dur*E._ease(w/this._dur),f,r)||this._startAt&&(this._zTime=s),this._onUpdate&&!f&&(p&&Nf(this,s,f,r),Qt(this,"onUpdate")),this._repeat&&C!==A&&this.vars.onRepeat&&!f&&this.parent&&Qt(this,"onRepeat"),(y===this._tDur||!y)&&this._tTime===y&&(p&&!this._onUpdate&&Nf(this,s,!0,!0),(s||!v)&&(y===this._tDur&&this._ts>0||!y&&this._ts<0)&&Da(this,1),!f&&!(p&&!m)&&(y||m||D)&&(Qt(this,y===g?"onComplete":"onReverseComplete",!0),this._prom&&!(y<g&&this.timeScale()>0)&&this._prom()))}return this},o.targets=function(){return this._targets},o.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),c.prototype.invalidate.call(this,s)},o.resetTo=function(s,f,r,m,g){Do||Pt.wake(),this._ts||this.play();var v=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Wf(this,v),p=this._ease(v/this._dur),qb(this,s,f,r,m,p,v,g)?this.resetTo(s,f,r,m,1):(zs(this,0),this.parent||H1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},o.kill=function(s,f){if(f===void 0&&(f="all"),!s&&(!f||f==="all"))return this._lazy=this._pt=0,this.parent?bo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pt),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(s,f,Aa&&Aa.vars.overwrite!==!0)._first||bo(this),this.parent&&r!==this.timeline.totalDuration()&&vi(this,this._dur*this.timeline._tDur/r,0,1),this}var m=this._targets,g=s?fn(s):m,v=this._ptLookup,p=this._pt,y,w,S,C,_,A,D;if((!f||f==="all")&&xb(m,g))return f==="all"&&(this._pt=0),bo(this);for(y=this._op=this._op||[],f!=="all"&&(rt(f)&&(_={},jt(f,function(H){return _[H]=1}),f=_),f=Gb(m,f)),D=m.length;D--;)if(~g.indexOf(m[D])){w=v[D],f==="all"?(y[D]=f,C=w,S={}):(S=y[D]=y[D]||{},C=f);for(_ in C)A=w&&w[_],A&&((!("kill"in A.d)||A.d.kill(_)===!0)&&As(this,A,"_pt"),delete w[_]),S!=="all"&&(S[_]=1)}return this._initted&&!this._pt&&p&&bo(this),this},a.to=function(s,f){return new a(s,f,arguments[2])},a.from=function(s,f){return To(1,arguments)},a.delayedCall=function(s,f,r,m){return new a(f,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:f,onReverseComplete:f,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:m})},a.fromTo=function(s,f,r){return To(2,arguments)},a.set=function(s,f){return f.duration=0,f.repeatDelay||(f.repeat=0),new a(s,f)},a.killTweensOf=function(s,f,r){return Xe.killTweensOf(s,f,r)},a})(Mo);Jt(at.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});jt("staggerTo,staggerFrom,staggerFromTo",function(c){at[c]=function(){var a=new _t,o=Rf.call(arguments,0);return o.splice(c==="staggerFromTo"?5:4,0,0),a[c].apply(a,o)}});var $f=function(a,o,l){return a[o]=l},cv=function(a,o,l){return a[o](l)},Yb=function(a,o,l,s){return a[o](s.fp,l)},Xb=function(a,o,l){return a.setAttribute(o,l)},ed=function(a,o){return Ke(a[o])?cv:Vf(a[o])&&a.setAttribute?Xb:$f},uv=function(a,o){return o.set(o.t,o.p,Math.round((o.s+o.c*a)*1e6)/1e6,o)},Pb=function(a,o){return o.set(o.t,o.p,!!(o.s+o.c*a),o)},fv=function(a,o){var l=o._pt,s="";if(!a&&o.b)s=o.b;else if(a===1&&o.e)s=o.e;else{for(;l;)s=l.p+(l.m?l.m(l.s+l.c*a):Math.round((l.s+l.c*a)*1e4)/1e4)+s,l=l._next;s+=o.c}o.set(o.t,o.p,s,o)},td=function(a,o){for(var l=o._pt;l;)l.r(a,l.d),l=l._next},Qb=function(a,o,l,s){for(var f=this._pt,r;f;)r=f._next,f.p===s&&f.modifier(a,o,l),f=r},Zb=function(a){for(var o=this._pt,l,s;o;)s=o._next,o.p===a&&!o.op||o.op===a?As(this,o,"_pt"):o.dep||(l=1),o=s;return!l},Kb=function(a,o,l,s){s.mSet(a,o,s.m.call(s.tween,l,s.mt),s)},dv=function(a){for(var o=a._pt,l,s,f,r;o;){for(l=o._next,s=f;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:r)?o._prev._next=o:f=o,(o._next=s)?s._prev=o:r=o,o=l}a._pt=f},Dt=(function(){function c(o,l,s,f,r,m,g,v,p){this.t=l,this.s=f,this.c=r,this.p=s,this.r=m||uv,this.d=g||this,this.set=v||$f,this.pr=p||0,this._next=o,o&&(o._prev=this)}var a=c.prototype;return a.modifier=function(l,s,f){this.mSet=this.mSet||this.set,this.set=Kb,this.m=l,this.mt=f,this.tween=s},c})();jt(Zf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(c){return Qf[c]=1});It.TweenMax=It.TweenLite=at;It.TimelineLite=It.TimelineMax=_t;Xe=new _t({sortChildren:!1,defaults:hi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kt.stringFilter=tv;var cl=[],hs={},Ib=[],n1=0,Jb=0,df=function(a){return(hs[a]||Ib).map(function(o){return o()})},Df=function(){var a=Date.now(),o=[];a-n1>2&&(df("matchMediaInit"),cl.forEach(function(l){var s=l.queries,f=l.conditions,r,m,g,v;for(m in s)r=Tn.matchMedia(s[m]).matches,r&&(g=1),r!==f[m]&&(f[m]=r,v=1);v&&(l.revert(),g&&o.push(l))}),df("matchMediaRevert"),o.forEach(function(l){return l.onMatch(l,function(s){return l.add(null,s)})}),n1=a,df("matchMedia"))},hv=(function(){function c(o,l){this.selector=l&&zf(l),this.data=[],this._r=[],this.isReverted=!1,this.id=Jb++,o&&this.add(o)}var a=c.prototype;return a.add=function(l,s,f){Ke(l)&&(f=s,s=l,l=Ke);var r=this,m=function(){var v=Ve,p=r.selector,y;return v&&v!==r&&v.data.push(r),f&&(r.selector=zf(f)),Ve=r,y=s.apply(r,arguments),Ke(y)&&r._r.push(y),Ve=v,r.selector=p,r.isReverted=!1,y};return r.last=m,l===Ke?m(r,function(g){return r.add(null,g)}):l?r[l]=m:m},a.ignore=function(l){var s=Ve;Ve=null,l(this),Ve=s},a.getTweens=function(){var l=[];return this.data.forEach(function(s){return s instanceof c?l.push.apply(l,s.getTweens()):s instanceof at&&!(s.parent&&s.parent.data==="nested")&&l.push(s)}),l},a.clear=function(){this._r.length=this.data.length=0},a.kill=function(l,s){var f=this;if(l?(function(){for(var m=f.getTweens(),g=f.data.length,v;g--;)v=f.data[g],v.data==="isFlip"&&(v.revert(),v.getChildren(!0,!0,!1).forEach(function(p){return m.splice(m.indexOf(p),1)}));for(m.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,y){return y.g-p.g||-1/0}).forEach(function(p){return p.t.revert(l)}),g=f.data.length;g--;)v=f.data[g],v instanceof _t?v.data!=="nested"&&(v.scrollTrigger&&v.scrollTrigger.revert(),v.kill()):!(v instanceof at)&&v.revert&&v.revert(l);f._r.forEach(function(p){return p(l,f)}),f.isReverted=!0})():this.data.forEach(function(m){return m.kill&&m.kill()}),this.clear(),s)for(var r=cl.length;r--;)cl[r].id===this.id&&cl.splice(r,1)},a.revert=function(l){this.kill(l||{})},c})(),Wb=(function(){function c(o){this.contexts=[],this.scope=o,Ve&&Ve.data.push(this)}var a=c.prototype;return a.add=function(l,s,f){An(l)||(l={matches:l});var r=new hv(0,f||this.scope),m=r.conditions={},g,v,p;Ve&&!r.selector&&(r.selector=Ve.selector),this.contexts.push(r),s=r.add("onMatch",s),r.queries=l;for(v in l)v==="all"?p=1:(g=Tn.matchMedia(l[v]),g&&(cl.indexOf(r)<0&&cl.push(r),(m[v]=g.matches)&&(p=1),g.addListener?g.addListener(Df):g.addEventListener("change",Df)));return p&&s(r,function(y){return r.add(null,y)}),this},a.revert=function(l){this.kill(l||{})},a.kill=function(l){this.contexts.forEach(function(s){return s.kill(l,!0)})},c})(),ys={registerPlugin:function(){for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];o.forEach(function(s){return W1(s)})},timeline:function(a){return new _t(a)},getTweensOf:function(a,o){return Xe.getTweensOf(a,o)},getProperty:function(a,o,l,s){rt(a)&&(a=fn(a)[0]);var f=ol(a||{}).get,r=l?F1:k1;return l==="native"&&(l=""),a&&(o?r((Xt[o]&&Xt[o].get||f)(a,o,l,s)):function(m,g,v){return r((Xt[m]&&Xt[m].get||f)(a,m,g,v))})},quickSetter:function(a,o,l){if(a=fn(a),a.length>1){var s=a.map(function(p){return Ot.quickSetter(p,o,l)}),f=s.length;return function(p){for(var y=f;y--;)s[y](p)}}a=a[0]||{};var r=Xt[o],m=ol(a),g=m.harness&&(m.harness.aliases||{})[o]||o,v=r?function(p){var y=new r;oi._pt=0,y.init(a,l?p+l:p,oi,0,[a]),y.render(1,y),oi._pt&&td(1,oi)}:m.set(a,g);return r?v:function(p){return v(a,g,l?p+l:p,m,1)}},quickTo:function(a,o,l){var s,f=Ot.to(a,Jt((s={},s[o]="+=0.1",s.paused=!0,s.stagger=0,s),l||{})),r=function(g,v,p){return f.resetTo(o,g,v,p)};return r.tween=f,r},isTweening:function(a){return Xe.getTweensOf(a,!0).length>0},defaults:function(a){return a&&a.ease&&(a.ease=sl(a.ease,hi.ease)),Jp(hi,a||{})},config:function(a){return Jp(Kt,a||{})},registerEffect:function(a){var o=a.name,l=a.effect,s=a.plugins,f=a.defaults,r=a.extendTimeline;(s||"").split(",").forEach(function(m){return m&&!Xt[m]&&!It[m]&&zo(o+" effect requires "+m+" plugin.")}),sf[o]=function(m,g,v){return l(fn(m),Jt(g||{},f),v)},r&&(_t.prototype[o]=function(m,g,v){return this.add(sf[o](m,An(g)?g:(v=g)&&{},this),v)})},registerEase:function(a,o){we[a]=sl(o)},parseEase:function(a,o){return arguments.length?sl(a,o):we},getById:function(a){return Xe.getById(a)},exportRoot:function(a,o){a===void 0&&(a={});var l=new _t(a),s,f;for(l.smoothChildTiming=Et(a.smoothChildTiming),Xe.remove(l),l._dp=0,l._time=l._tTime=Xe._time,s=Xe._first;s;)f=s._next,(o||!(!s._dur&&s instanceof at&&s.vars.onComplete===s._targets[0]))&&Cn(l,s,s._start-s._delay),s=f;return Cn(Xe,l,0),l},context:function(a,o){return a?new hv(a,o):Ve},matchMedia:function(a){return new Wb(a)},matchMediaRefresh:function(){return cl.forEach(function(a){var o=a.conditions,l,s;for(s in o)o[s]&&(o[s]=!1,l=1);l&&a.revert()})||Df()},addEventListener:function(a,o){var l=hs[a]||(hs[a]=[]);~l.indexOf(o)||l.push(o)},removeEventListener:function(a,o){var l=hs[a],s=l&&l.indexOf(o);s>=0&&l.splice(s,1)},utils:{wrap:Eb,wrapYoyo:jb,distribute:P1,random:Z1,snap:Q1,normalize:zb,getUnit:xt,clamp:Cb,splitColor:$1,toArray:fn,selector:zf,mapRange:I1,pipe:Ab,unitize:Rb,interpolate:Db,shuffle:X1},install:M1,effects:sf,ticker:Pt,updateRoot:_t.updateRoot,plugins:Xt,globalTimeline:Xe,core:{PropTween:Dt,globals:O1,Tween:at,Timeline:_t,Animation:Mo,getCache:ol,_removeLinkedListItem:As,reverting:function(){return pt},context:function(a){return a&&Ve&&(Ve.data.push(a),a._ctx=Ve),Ve},suppressOverwrites:function(a){return Gf=a}}};jt("to,from,fromTo,delayedCall,set,killTweensOf",function(c){return ys[c]=at[c]});Pt.add(_t.updateRoot);oi=ys.to({},{duration:0});var $b=function(a,o){for(var l=a._pt;l&&l.p!==o&&l.op!==o&&l.fp!==o;)l=l._next;return l},e3=function(a,o){var l=a._targets,s,f,r;for(s in o)for(f=l.length;f--;)r=a._ptLookup[f][s],r&&(r=r.d)&&(r._pt&&(r=$b(r,s)),r&&r.modifier&&r.modifier(o[s],a,l[f],s))},hf=function(a,o){return{name:a,headless:1,rawVars:1,init:function(s,f,r){r._onInit=function(m){var g,v;if(rt(f)&&(g={},jt(f,function(p){return g[p]=1}),f=g),o){g={};for(v in f)g[v]=o(f[v]);f=g}e3(m,f)}}}},Ot=ys.registerPlugin({name:"attr",init:function(a,o,l,s,f){var r,m,g;this.tween=l;for(r in o)g=a.getAttribute(r)||"",m=this.add(a,"setAttribute",(g||0)+"",o[r],s,f,0,0,r),m.op=r,m.b=g,this._props.push(r)},render:function(a,o){for(var l=o._pt;l;)pt?l.set(l.t,l.p,l.b,l):l.r(a,l.d),l=l._next}},{name:"endArray",headless:1,init:function(a,o){for(var l=o.length;l--;)this.add(a,l,a[l]||0,o[l],0,0,0,0,0,1)}},hf("roundProps",Ef),hf("modifiers"),hf("snap",Q1))||ys;at.version=_t.version=Ot.version="3.14.2";D1=1;Yf()&&gi();we.Power0;we.Power1;we.Power2;we.Power3;we.Power4;we.Linear;we.Quad;we.Cubic;we.Quart;we.Quint;we.Strong;we.Elastic;we.Back;we.SteppedEase;we.Bounce;we.Sine;we.Expo;we.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var a1,Ra,ui,nd,il,l1,ad,t3=function(){return typeof window<"u"},ea={},ll=180/Math.PI,fi=Math.PI/180,ni=Math.atan2,i1=1e8,ld=/([A-Z])/g,n3=/(left|right|width|margin|padding|x)/i,a3=/[\s,\(]\S/,Nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mf=function(a,o){return o.set(o.t,o.p,Math.round((o.s+o.c*a)*1e4)/1e4+o.u,o)},l3=function(a,o){return o.set(o.t,o.p,a===1?o.e:Math.round((o.s+o.c*a)*1e4)/1e4+o.u,o)},i3=function(a,o){return o.set(o.t,o.p,a?Math.round((o.s+o.c*a)*1e4)/1e4+o.u:o.b,o)},o3=function(a,o){return o.set(o.t,o.p,a===1?o.e:a?Math.round((o.s+o.c*a)*1e4)/1e4+o.u:o.b,o)},r3=function(a,o){var l=o.s+o.c*a;o.set(o.t,o.p,~~(l+(l<0?-.5:.5))+o.u,o)},mv=function(a,o){return o.set(o.t,o.p,a?o.e:o.b,o)},pv=function(a,o){return o.set(o.t,o.p,a!==1?o.b:o.e,o)},s3=function(a,o,l){return a.style[o]=l},c3=function(a,o,l){return a.style.setProperty(o,l)},u3=function(a,o,l){return a._gsap[o]=l},f3=function(a,o,l){return a._gsap.scaleX=a._gsap.scaleY=l},d3=function(a,o,l,s,f){var r=a._gsap;r.scaleX=r.scaleY=l,r.renderTransform(f,r)},h3=function(a,o,l,s,f){var r=a._gsap;r[o]=l,r.renderTransform(f,r)},Pe="transform",Mt=Pe+"Origin",m3=function c(a,o){var l=this,s=this.target,f=s.style,r=s._gsap;if(a in ea&&f){if(this.tfm=this.tfm||{},a!=="transform")a=Nn[a]||a,~a.indexOf(",")?a.split(",").forEach(function(m){return l.tfm[m]=In(s,m)}):this.tfm[a]=r.x?r[a]:In(s,a),a===Mt&&(this.tfm.zOrigin=r.zOrigin);else return Nn.transform.split(",").forEach(function(m){return c.call(l,m,o)});if(this.props.indexOf(Pe)>=0)return;r.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Mt,o,"")),a=Pe}(f||o)&&this.props.push(a,o,f[a])},vv=function(a){a.translate&&(a.removeProperty("translate"),a.removeProperty("scale"),a.removeProperty("rotate"))},p3=function(){var a=this.props,o=this.target,l=o.style,s=o._gsap,f,r;for(f=0;f<a.length;f+=3)a[f+1]?a[f+1]===2?o[a[f]](a[f+2]):o[a[f]]=a[f+2]:a[f+2]?l[a[f]]=a[f+2]:l.removeProperty(a[f].substr(0,2)==="--"?a[f]:a[f].replace(ld,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)s[r]=this.tfm[r];s.svg&&(s.renderTransform(),o.setAttribute("data-svg-origin",this.svgo||"")),f=ad(),(!f||!f.isStart)&&!l[Pe]&&(vv(l),s.zOrigin&&l[Mt]&&(l[Mt]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},gv=function(a,o){var l={target:a,props:[],revert:p3,save:m3};return a._gsap||Ot.core.getCache(a),o&&a.style&&a.nodeType&&o.split(",").forEach(function(s){return l.save(s)}),l},xv,Of=function(a,o){var l=Ra.createElementNS?Ra.createElementNS((o||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),a):Ra.createElement(a);return l&&l.style?l:Ra.createElement(a)},Zt=function c(a,o,l){var s=getComputedStyle(a);return s[o]||s.getPropertyValue(o.replace(ld,"-$1").toLowerCase())||s.getPropertyValue(o)||!l&&c(a,xi(o)||o,1)||""},o1="O,Moz,ms,Ms,Webkit".split(","),xi=function(a,o,l){var s=o||il,f=s.style,r=5;if(a in f&&!l)return a;for(a=a.charAt(0).toUpperCase()+a.substr(1);r--&&!(o1[r]+a in f););return r<0?null:(r===3?"ms":r>=0?o1[r]:"")+a},Lf=function(){t3()&&window.document&&(a1=window,Ra=a1.document,ui=Ra.documentElement,il=Of("div")||{style:{}},Of("div"),Pe=xi(Pe),Mt=Pe+"Origin",il.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xv=!!xi("perspective"),ad=Ot.core.reverting,nd=1)},r1=function(a){var o=a.ownerSVGElement,l=Of("svg",o&&o.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=a.cloneNode(!0),f;s.style.display="block",l.appendChild(s),ui.appendChild(l);try{f=s.getBBox()}catch{}return l.removeChild(s),ui.removeChild(l),f},s1=function(a,o){for(var l=o.length;l--;)if(a.hasAttribute(o[l]))return a.getAttribute(o[l])},yv=function(a){var o,l;try{o=a.getBBox()}catch{o=r1(a),l=1}return o&&(o.width||o.height)||l||(o=r1(a)),o&&!o.width&&!o.x&&!o.y?{x:+s1(a,["x","cx","x1"])||0,y:+s1(a,["y","cy","y1"])||0,width:0,height:0}:o},bv=function(a){return!!(a.getCTM&&(!a.parentNode||a.ownerSVGElement)&&yv(a))},Ma=function(a,o){if(o){var l=a.style,s;o in ea&&o!==Mt&&(o=Pe),l.removeProperty?(s=o.substr(0,2),(s==="ms"||o.substr(0,6)==="webkit")&&(o="-"+o),l.removeProperty(s==="--"?o:o.replace(ld,"-$1").toLowerCase())):l.removeAttribute(o)}},za=function(a,o,l,s,f,r){var m=new Dt(a._pt,o,l,0,1,r?pv:mv);return a._pt=m,m.b=s,m.e=f,a._props.push(l),m},c1={deg:1,rad:1,turn:1},v3={grid:1,flex:1},Oa=function c(a,o,l,s){var f=parseFloat(l)||0,r=(l+"").trim().substr((f+"").length)||"px",m=il.style,g=n3.test(o),v=a.tagName.toLowerCase()==="svg",p=(v?"client":"offset")+(g?"Width":"Height"),y=100,w=s==="px",S=s==="%",C,_,A,D;if(s===r||!f||c1[s]||c1[r])return f;if(r!=="px"&&!w&&(f=c(a,o,l,"px")),D=a.getCTM&&bv(a),(S||r==="%")&&(ea[o]||~o.indexOf("adius")))return C=D?a.getBBox()[g?"width":"height"]:a[p],We(S?f/C*y:f/100*C);if(m[g?"width":"height"]=y+(w?r:s),_=s!=="rem"&&~o.indexOf("adius")||s==="em"&&a.appendChild&&!v?a:a.parentNode,D&&(_=(a.ownerSVGElement||{}).parentNode),(!_||_===Ra||!_.appendChild)&&(_=Ra.body),A=_._gsap,A&&S&&A.width&&g&&A.time===Pt.time&&!A.uncache)return We(f/A.width*y);if(S&&(o==="height"||o==="width")){var H=a.style[o];a.style[o]=y+s,C=a[p],H?a.style[o]=H:Ma(a,o)}else(S||r==="%")&&!v3[Zt(_,"display")]&&(m.position=Zt(a,"position")),_===a&&(m.position="static"),_.appendChild(il),C=il[p],_.removeChild(il),m.position="absolute";return g&&S&&(A=ol(_),A.time=Pt.time,A.width=_[p]),We(w?C*f/y:C&&f?y/C*f:0)},In=function(a,o,l,s){var f;return nd||Lf(),o in Nn&&o!=="transform"&&(o=Nn[o],~o.indexOf(",")&&(o=o.split(",")[0])),ea[o]&&o!=="transform"?(f=Lo(a,s),f=o!=="transformOrigin"?f[o]:f.svg?f.origin:_s(Zt(a,Mt))+" "+f.zOrigin+"px"):(f=a.style[o],(!f||f==="auto"||s||~(f+"").indexOf("calc("))&&(f=bs[o]&&bs[o](a,o,l)||Zt(a,o)||U1(a,o)||(o==="opacity"?1:0))),l&&!~(f+"").trim().indexOf(" ")?Oa(a,o,f,l)+l:f},g3=function(a,o,l,s){if(!l||l==="none"){var f=xi(o,a,1),r=f&&Zt(a,f,1);r&&r!==l?(o=f,l=r):o==="borderColor"&&(l=Zt(a,"borderTopColor"))}var m=new Dt(this._pt,a.style,o,0,1,fv),g=0,v=0,p,y,w,S,C,_,A,D,H,E,G,O;if(m.b=l,m.e=s,l+="",s+="",s.substring(0,6)==="var(--"&&(s=Zt(a,s.substring(4,s.indexOf(")")))),s==="auto"&&(_=a.style[o],a.style[o]=s,s=Zt(a,o)||s,_?a.style[o]=_:Ma(a,o)),p=[l,s],tv(p),l=p[0],s=p[1],w=l.match(ii)||[],O=s.match(ii)||[],O.length){for(;y=ii.exec(s);)A=y[0],H=s.substring(g,y.index),C?C=(C+1)%5:(H.substr(-5)==="rgba("||H.substr(-5)==="hsla(")&&(C=1),A!==(_=w[v++]||"")&&(S=parseFloat(_)||0,G=_.substr((S+"").length),A.charAt(1)==="="&&(A=ci(S,A)+G),D=parseFloat(A),E=A.substr((D+"").length),g=ii.lastIndex-E.length,E||(E=E||Kt.units[o]||G,g===s.length&&(s+=E,m.e+=E)),G!==E&&(S=Oa(a,o,_,E)||0),m._pt={_next:m._pt,p:H||v===1?H:",",s:S,c:D-S,m:C&&C<4||o==="zIndex"?Math.round:0});m.c=g<s.length?s.substring(g,s.length):""}else m.r=o==="display"&&s==="none"?pv:mv;return j1.test(s)&&(m.e=0),this._pt=m,m},u1={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},x3=function(a){var o=a.split(" "),l=o[0],s=o[1]||"50%";return(l==="top"||l==="bottom"||s==="left"||s==="right")&&(a=l,l=s,s=a),o[0]=u1[l]||l,o[1]=u1[s]||s,o.join(" ")},y3=function(a,o){if(o.tween&&o.tween._time===o.tween._dur){var l=o.t,s=l.style,f=o.u,r=l._gsap,m,g,v;if(f==="all"||f===!0)s.cssText="",g=1;else for(f=f.split(","),v=f.length;--v>-1;)m=f[v],ea[m]&&(g=1,m=m==="transformOrigin"?Mt:Pe),Ma(l,m);g&&(Ma(l,Pe),r&&(r.svg&&l.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Lo(l,1),r.uncache=1,vv(s)))}},bs={clearProps:function(a,o,l,s,f){if(f.data!=="isFromStart"){var r=a._pt=new Dt(a._pt,o,l,0,0,y3);return r.u=s,r.pr=-10,r.tween=f,a._props.push(l),1}}},Oo=[1,0,0,1,0,0],_v={},Sv=function(a){return a==="matrix(1, 0, 0, 1, 0, 0)"||a==="none"||!a},f1=function(a){var o=Zt(a,Pe);return Sv(o)?Oo:o.substr(7).match(E1).map(We)},id=function(a,o){var l=a._gsap||ol(a),s=a.style,f=f1(a),r,m,g,v;return l.svg&&a.getAttribute("transform")?(g=a.transform.baseVal.consolidate().matrix,f=[g.a,g.b,g.c,g.d,g.e,g.f],f.join(",")==="1,0,0,1,0,0"?Oo:f):(f===Oo&&!a.offsetParent&&a!==ui&&!l.svg&&(g=s.display,s.display="block",r=a.parentNode,(!r||!a.offsetParent&&!a.getBoundingClientRect().width)&&(v=1,m=a.nextElementSibling,ui.appendChild(a)),f=f1(a),g?s.display=g:Ma(a,"display"),v&&(m?r.insertBefore(a,m):r?r.appendChild(a):ui.removeChild(a))),o&&f.length>6?[f[0],f[1],f[4],f[5],f[12],f[13]]:f)},Uf=function(a,o,l,s,f,r){var m=a._gsap,g=f||id(a,!0),v=m.xOrigin||0,p=m.yOrigin||0,y=m.xOffset||0,w=m.yOffset||0,S=g[0],C=g[1],_=g[2],A=g[3],D=g[4],H=g[5],E=o.split(" "),G=parseFloat(E[0])||0,O=parseFloat(E[1])||0,Y,M,U,z;l?g!==Oo&&(M=S*A-C*_)&&(U=G*(A/M)+O*(-_/M)+(_*H-A*D)/M,z=G*(-C/M)+O*(S/M)-(S*H-C*D)/M,G=U,O=z):(Y=yv(a),G=Y.x+(~E[0].indexOf("%")?G/100*Y.width:G),O=Y.y+(~(E[1]||E[0]).indexOf("%")?O/100*Y.height:O)),s||s!==!1&&m.smooth?(D=G-v,H=O-p,m.xOffset=y+(D*S+H*_)-D,m.yOffset=w+(D*C+H*A)-H):m.xOffset=m.yOffset=0,m.xOrigin=G,m.yOrigin=O,m.smooth=!!s,m.origin=o,m.originIsAbsolute=!!l,a.style[Mt]="0px 0px",r&&(za(r,m,"xOrigin",v,G),za(r,m,"yOrigin",p,O),za(r,m,"xOffset",y,m.xOffset),za(r,m,"yOffset",w,m.yOffset)),a.setAttribute("data-svg-origin",G+" "+O)},Lo=function(a,o){var l=a._gsap||new iv(a);if("x"in l&&!o&&!l.uncache)return l;var s=a.style,f=l.scaleX<0,r="px",m="deg",g=getComputedStyle(a),v=Zt(a,Mt)||"0",p,y,w,S,C,_,A,D,H,E,G,O,Y,M,U,z,B,Z,W,$,ne,ae,k,J,ie,de,ge,N,P,te,ee,le;return p=y=w=_=A=D=H=E=G=0,S=C=1,l.svg=!!(a.getCTM&&bv(a)),g.translate&&((g.translate!=="none"||g.scale!=="none"||g.rotate!=="none")&&(s[Pe]=(g.translate!=="none"?"translate3d("+(g.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(g.rotate!=="none"?"rotate("+g.rotate+") ":"")+(g.scale!=="none"?"scale("+g.scale.split(" ").join(",")+") ":"")+(g[Pe]!=="none"?g[Pe]:"")),s.scale=s.rotate=s.translate="none"),M=id(a,l.svg),l.svg&&(l.uncache?(ie=a.getBBox(),v=l.xOrigin-ie.x+"px "+(l.yOrigin-ie.y)+"px",J=""):J=!o&&a.getAttribute("data-svg-origin"),Uf(a,J||v,!!J||l.originIsAbsolute,l.smooth!==!1,M)),O=l.xOrigin||0,Y=l.yOrigin||0,M!==Oo&&(Z=M[0],W=M[1],$=M[2],ne=M[3],p=ae=M[4],y=k=M[5],M.length===6?(S=Math.sqrt(Z*Z+W*W),C=Math.sqrt(ne*ne+$*$),_=Z||W?ni(W,Z)*ll:0,H=$||ne?ni($,ne)*ll+_:0,H&&(C*=Math.abs(Math.cos(H*fi))),l.svg&&(p-=O-(O*Z+Y*$),y-=Y-(O*W+Y*ne))):(le=M[6],te=M[7],ge=M[8],N=M[9],P=M[10],ee=M[11],p=M[12],y=M[13],w=M[14],U=ni(le,P),A=U*ll,U&&(z=Math.cos(-U),B=Math.sin(-U),J=ae*z+ge*B,ie=k*z+N*B,de=le*z+P*B,ge=ae*-B+ge*z,N=k*-B+N*z,P=le*-B+P*z,ee=te*-B+ee*z,ae=J,k=ie,le=de),U=ni(-$,P),D=U*ll,U&&(z=Math.cos(-U),B=Math.sin(-U),J=Z*z-ge*B,ie=W*z-N*B,de=$*z-P*B,ee=ne*B+ee*z,Z=J,W=ie,$=de),U=ni(W,Z),_=U*ll,U&&(z=Math.cos(U),B=Math.sin(U),J=Z*z+W*B,ie=ae*z+k*B,W=W*z-Z*B,k=k*z-ae*B,Z=J,ae=ie),A&&Math.abs(A)+Math.abs(_)>359.9&&(A=_=0,D=180-D),S=We(Math.sqrt(Z*Z+W*W+$*$)),C=We(Math.sqrt(k*k+le*le)),U=ni(ae,k),H=Math.abs(U)>2e-4?U*ll:0,G=ee?1/(ee<0?-ee:ee):0),l.svg&&(J=a.getAttribute("transform"),l.forceCSS=a.setAttribute("transform","")||!Sv(Zt(a,Pe)),J&&a.setAttribute("transform",J))),Math.abs(H)>90&&Math.abs(H)<270&&(f?(S*=-1,H+=_<=0?180:-180,_+=_<=0?180:-180):(C*=-1,H+=H<=0?180:-180)),o=o||l.uncache,l.x=p-((l.xPercent=p&&(!o&&l.xPercent||(Math.round(a.offsetWidth/2)===Math.round(-p)?-50:0)))?a.offsetWidth*l.xPercent/100:0)+r,l.y=y-((l.yPercent=y&&(!o&&l.yPercent||(Math.round(a.offsetHeight/2)===Math.round(-y)?-50:0)))?a.offsetHeight*l.yPercent/100:0)+r,l.z=w+r,l.scaleX=We(S),l.scaleY=We(C),l.rotation=We(_)+m,l.rotationX=We(A)+m,l.rotationY=We(D)+m,l.skewX=H+m,l.skewY=E+m,l.transformPerspective=G+r,(l.zOrigin=parseFloat(v.split(" ")[2])||!o&&l.zOrigin||0)&&(s[Mt]=_s(v)),l.xOffset=l.yOffset=0,l.force3D=Kt.force3D,l.renderTransform=l.svg?_3:xv?wv:b3,l.uncache=0,l},_s=function(a){return(a=a.split(" "))[0]+" "+a[1]},mf=function(a,o,l){var s=xt(o);return We(parseFloat(o)+parseFloat(Oa(a,"x",l+"px",s)))+s},b3=function(a,o){o.z="0px",o.rotationY=o.rotationX="0deg",o.force3D=0,wv(a,o)},nl="0deg",yo="0px",al=") ",wv=function(a,o){var l=o||this,s=l.xPercent,f=l.yPercent,r=l.x,m=l.y,g=l.z,v=l.rotation,p=l.rotationY,y=l.rotationX,w=l.skewX,S=l.skewY,C=l.scaleX,_=l.scaleY,A=l.transformPerspective,D=l.force3D,H=l.target,E=l.zOrigin,G="",O=D==="auto"&&a&&a!==1||D===!0;if(E&&(y!==nl||p!==nl)){var Y=parseFloat(p)*fi,M=Math.sin(Y),U=Math.cos(Y),z;Y=parseFloat(y)*fi,z=Math.cos(Y),r=mf(H,r,M*z*-E),m=mf(H,m,-Math.sin(Y)*-E),g=mf(H,g,U*z*-E+E)}A!==yo&&(G+="perspective("+A+al),(s||f)&&(G+="translate("+s+"%, "+f+"%) "),(O||r!==yo||m!==yo||g!==yo)&&(G+=g!==yo||O?"translate3d("+r+", "+m+", "+g+") ":"translate("+r+", "+m+al),v!==nl&&(G+="rotate("+v+al),p!==nl&&(G+="rotateY("+p+al),y!==nl&&(G+="rotateX("+y+al),(w!==nl||S!==nl)&&(G+="skew("+w+", "+S+al),(C!==1||_!==1)&&(G+="scale("+C+", "+_+al),H.style[Pe]=G||"translate(0, 0)"},_3=function(a,o){var l=o||this,s=l.xPercent,f=l.yPercent,r=l.x,m=l.y,g=l.rotation,v=l.skewX,p=l.skewY,y=l.scaleX,w=l.scaleY,S=l.target,C=l.xOrigin,_=l.yOrigin,A=l.xOffset,D=l.yOffset,H=l.forceCSS,E=parseFloat(r),G=parseFloat(m),O,Y,M,U,z;g=parseFloat(g),v=parseFloat(v),p=parseFloat(p),p&&(p=parseFloat(p),v+=p,g+=p),g||v?(g*=fi,v*=fi,O=Math.cos(g)*y,Y=Math.sin(g)*y,M=Math.sin(g-v)*-w,U=Math.cos(g-v)*w,v&&(p*=fi,z=Math.tan(v-p),z=Math.sqrt(1+z*z),M*=z,U*=z,p&&(z=Math.tan(p),z=Math.sqrt(1+z*z),O*=z,Y*=z)),O=We(O),Y=We(Y),M=We(M),U=We(U)):(O=y,U=w,Y=M=0),(E&&!~(r+"").indexOf("px")||G&&!~(m+"").indexOf("px"))&&(E=Oa(S,"x",r,"px"),G=Oa(S,"y",m,"px")),(C||_||A||D)&&(E=We(E+C-(C*O+_*M)+A),G=We(G+_-(C*Y+_*U)+D)),(s||f)&&(z=S.getBBox(),E=We(E+s/100*z.width),G=We(G+f/100*z.height)),z="matrix("+O+","+Y+","+M+","+U+","+E+","+G+")",S.setAttribute("transform",z),H&&(S.style[Pe]=z)},S3=function(a,o,l,s,f){var r=360,m=rt(f),g=parseFloat(f)*(m&&~f.indexOf("rad")?ll:1),v=g-s,p=s+v+"deg",y,w;return m&&(y=f.split("_")[1],y==="short"&&(v%=r,v!==v%(r/2)&&(v+=v<0?r:-r)),y==="cw"&&v<0?v=(v+r*i1)%r-~~(v/r)*r:y==="ccw"&&v>0&&(v=(v-r*i1)%r-~~(v/r)*r)),a._pt=w=new Dt(a._pt,o,l,s,v,l3),w.e=p,w.u="deg",a._props.push(l),w},d1=function(a,o){for(var l in o)a[l]=o[l];return a},w3=function(a,o,l){var s=d1({},l._gsap),f="perspective,force3D,transformOrigin,svgOrigin",r=l.style,m,g,v,p,y,w,S,C;s.svg?(v=l.getAttribute("transform"),l.setAttribute("transform",""),r[Pe]=o,m=Lo(l,1),Ma(l,Pe),l.setAttribute("transform",v)):(v=getComputedStyle(l)[Pe],r[Pe]=o,m=Lo(l,1),r[Pe]=v);for(g in ea)v=s[g],p=m[g],v!==p&&f.indexOf(g)<0&&(S=xt(v),C=xt(p),y=S!==C?Oa(l,g,v,C):parseFloat(v),w=parseFloat(p),a._pt=new Dt(a._pt,m,g,y,w-y,Mf),a._pt.u=C||0,a._props.push(g));d1(m,s)};jt("padding,margin,Width,Radius",function(c,a){var o="Top",l="Right",s="Bottom",f="Left",r=(a<3?[o,l,s,f]:[o+f,o+l,s+l,s+f]).map(function(m){return a<2?c+m:"border"+m+c});bs[a>1?"border"+c:c]=function(m,g,v,p,y){var w,S;if(arguments.length<4)return w=r.map(function(C){return In(m,C,v)}),S=w.join(" "),S.split(w[0]).length===5?w[0]:S;w=(p+"").split(" "),S={},r.forEach(function(C,_){return S[C]=w[_]=w[_]||w[(_-1)/2|0]}),m.init(g,S,y)}});var Tv={name:"css",register:Lf,targetTest:function(a){return a.style&&a.nodeType},init:function(a,o,l,s,f){var r=this._props,m=a.style,g=l.vars.startAt,v,p,y,w,S,C,_,A,D,H,E,G,O,Y,M,U,z;nd||Lf(),this.styles=this.styles||gv(a),U=this.styles.props,this.tween=l;for(_ in o)if(_!=="autoRound"&&(p=o[_],!(Xt[_]&&ov(_,o,l,s,a,f)))){if(S=typeof p,C=bs[_],S==="function"&&(p=p.call(l,s,a,f),S=typeof p),S==="string"&&~p.indexOf("random(")&&(p=jo(p)),C)C(this,a,_,p,l)&&(M=1);else if(_.substr(0,2)==="--")v=(getComputedStyle(a).getPropertyValue(_)+"").trim(),p+="",ja.lastIndex=0,ja.test(v)||(A=xt(v),D=xt(p),D?A!==D&&(v=Oa(a,_,v,D)+D):A&&(p+=A)),this.add(m,"setProperty",v,p,s,f,0,0,_),r.push(_),U.push(_,0,m[_]);else if(S!=="undefined"){if(g&&_ in g?(v=typeof g[_]=="function"?g[_].call(l,s,a,f):g[_],rt(v)&&~v.indexOf("random(")&&(v=jo(v)),xt(v+"")||v==="auto"||(v+=Kt.units[_]||xt(In(a,_))||""),(v+"").charAt(1)==="="&&(v=In(a,_))):v=In(a,_),w=parseFloat(v),H=S==="string"&&p.charAt(1)==="="&&p.substr(0,2),H&&(p=p.substr(2)),y=parseFloat(p),_ in Nn&&(_==="autoAlpha"&&(w===1&&In(a,"visibility")==="hidden"&&y&&(w=0),U.push("visibility",0,m.visibility),za(this,m,"visibility",w?"inherit":"hidden",y?"inherit":"hidden",!y)),_!=="scale"&&_!=="transform"&&(_=Nn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in ea,E){if(this.styles.save(_),z=p,S==="string"&&p.substring(0,6)==="var(--"){if(p=Zt(a,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var B=a.style.perspective;a.style.perspective=p,p=Zt(a,"perspective"),B?a.style.perspective=B:Ma(a,"perspective")}y=parseFloat(p)}if(G||(O=a._gsap,O.renderTransform&&!o.parseTransform||Lo(a,o.parseTransform),Y=o.smoothOrigin!==!1&&O.smooth,G=this._pt=new Dt(this._pt,m,Pe,0,1,O.renderTransform,O,0,-1),G.dep=1),_==="scale")this._pt=new Dt(this._pt,O,"scaleY",O.scaleY,(H?ci(O.scaleY,H+y):y)-O.scaleY||0,Mf),this._pt.u=0,r.push("scaleY",_),_+="X";else if(_==="transformOrigin"){U.push(Mt,0,m[Mt]),p=x3(p),O.svg?Uf(a,p,0,Y,0,this):(D=parseFloat(p.split(" ")[2])||0,D!==O.zOrigin&&za(this,O,"zOrigin",O.zOrigin,D),za(this,m,_,_s(v),_s(p)));continue}else if(_==="svgOrigin"){Uf(a,p,1,Y,0,this);continue}else if(_ in _v){S3(this,O,_,w,H?ci(w,H+p):p);continue}else if(_==="smoothOrigin"){za(this,O,"smooth",O.smooth,p);continue}else if(_==="force3D"){O[_]=p;continue}else if(_==="transform"){w3(this,p,a);continue}}else _ in m||(_=xi(_)||_);if(E||(y||y===0)&&(w||w===0)&&!a3.test(p)&&_ in m)A=(v+"").substr((w+"").length),y||(y=0),D=xt(p)||(_ in Kt.units?Kt.units[_]:A),A!==D&&(w=Oa(a,_,v,D)),this._pt=new Dt(this._pt,E?O:m,_,w,(H?ci(w,H+y):y)-w,!E&&(D==="px"||_==="zIndex")&&o.autoRound!==!1?r3:Mf),this._pt.u=D||0,E&&z!==p?(this._pt.b=v,this._pt.e=z,this._pt.r=o3):A!==D&&D!=="%"&&(this._pt.b=v,this._pt.r=i3);else if(_ in m)g3.call(this,a,_,v,H?H+p:p);else if(_ in a)this.add(a,_,v||a[_],H?H+p:p,s,f);else if(_!=="parseTransform"){Pf(_,p);continue}E||(_ in m?U.push(_,0,m[_]):typeof a[_]=="function"?U.push(_,2,a[_]()):U.push(_,1,v||a[_])),r.push(_)}}M&&dv(this)},render:function(a,o){if(o.tween._time||!ad())for(var l=o._pt;l;)l.r(a,l.d),l=l._next;else o.styles.revert()},get:In,aliases:Nn,getSetter:function(a,o,l){var s=Nn[o];return s&&s.indexOf(",")<0&&(o=s),o in ea&&o!==Mt&&(a._gsap.x||In(a,"x"))?l&&l1===l?o==="scale"?f3:u3:(l1=l||{})&&(o==="scale"?d3:h3):a.style&&!Vf(a.style[o])?s3:~o.indexOf("-")?c3:ed(a,o)},core:{_removeProperty:Ma,_getMatrix:id}};Ot.utils.checkPrefix=xi;Ot.core.getStyleSaver=gv;(function(c,a,o,l){var s=jt(c+","+a+","+o,function(f){ea[f]=1});jt(a,function(f){Kt.units[f]="deg",_v[f]=1}),Nn[s[13]]=c+","+a,jt(l,function(f){var r=f.split(":");Nn[r[1]]=s[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(c){Kt.units[c]="px"});Ot.registerPlugin(Tv);var ul=Ot.registerPlugin(Tv)||Ot;ul.core.Tween;const T3=({params:c})=>{const a=L.useRef(null),o=L.useRef(null),l=L.useRef(null),s=L.useRef(null),f=L.useRef(null);return L.useEffect(()=>{const r=g=>{const v=g.clientX,p=g.clientY;o.current&&ul.set(o.current,{x:v,y:p});const y=[l.current,s.current,f.current].filter(Boolean);y.length>0&&ul.to(y,{x:v,y:p,stagger:-c.stagger})},m=a.current;if(m)return m.addEventListener("mousemove",r),()=>m.removeEventListener("mousemove",r)},[c.stagger]),h.jsxs("div",{ref:a,className:"relative w-full h-full overflow-hidden",style:{cursor:"none"},children:[h.jsxs("div",{className:"absolute inset-0",style:{backgroundColor:c.bgColor},children:[h.jsx("div",{ref:l,className:"absolute rounded-full will-change-transform",style:{backgroundColor:c.shape1Color,width:c.shape1Size,height:c.shape1Size,marginLeft:-c.shape1Size/2,marginTop:-c.shape1Size/2}}),h.jsx("div",{ref:s,className:"absolute rounded-full will-change-transform",style:{backgroundColor:c.shape2Color,width:c.shape2Size,height:c.shape2Size,marginLeft:-c.shape2Size/2,marginTop:-c.shape2Size/2}}),h.jsx("div",{ref:f,className:"absolute rounded-full will-change-transform",style:{backgroundColor:c.shape3Color,width:c.shape3Size,height:c.shape3Size,marginLeft:-c.shape3Size/2,marginTop:-c.shape3Size/2}})]}),h.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white",style:{mixBlendMode:"screen"},children:h.jsx("h1",{className:"font-black text-center m-0 select-none",style:{color:"#000",fontSize:`${c.fontSize}px`,lineHeight:1.2},children:c.text})}),h.jsx("div",{ref:o,className:"fixed rounded-full will-change-transform pointer-events-none select-none z-[10000]",style:{backgroundColor:c.bgColor,width:c.cursorSize,height:c.cursorSize,marginLeft:-c.cursorSize/2,marginTop:-c.cursorSize/2}})]})},C3={text:"Hello there!",bgColor:"#2128bd",shape1Color:"#005ffe",shape1Size:650,shape2Color:"#ffe5e3",shape2Size:440,shape3Color:"#ffcc57",shape3Size:270,cursorSize:20,stagger:.1,fontSize:120},h1=[{id:"original",label:"Original",bg:"#2128bd",shape1:"#005ffe",shape2:"#ffe5e3",shape3:"#ffcc57"},{id:"sunset",label:"Sunset",bg:"#1a0033",shape1:"#ff3366",shape2:"#ff9933",shape3:"#ffcc00"},{id:"ocean",label:"Ocean",bg:"#001a33",shape1:"#0066cc",shape2:"#00ccff",shape3:"#66ffcc"},{id:"forest",label:"Forest",bg:"#1a3300",shape1:"#336600",shape2:"#66cc33",shape3:"#ccff66"}],ai=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(s>=1?0:1)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),rs=({label:c,value:a,onChange:o})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("div",{className:"w-4 h-4 rounded border border-neutral-200",style:{backgroundColor:a}})]}),h.jsx("input",{type:"color",value:a,onChange:l=>o(l.target.value),className:"w-full h-7 bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer"})]}),N3=({params:c,onChange:a})=>{const o=h1.find(s=>s.bg===c.bgColor&&s.shape1===c.shape1Color&&s.shape2===c.shape2Color&&s.shape3===c.shape3Color),l=s=>{a({...c,bgColor:s.bg,shape1Color:s.shape1,shape2Color:s.shape2,shape3Color:s.shape3})};return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Text Content"}),h.jsx("input",{type:"text",value:c.text,onChange:s=>a({...c,text:s.target.value}),maxLength:30,className:"w-full px-2 py-1.5 text-xs bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400",placeholder:"Enter text"})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Presets"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:h1.map(s=>h.jsx("button",{onClick:()=>l(s),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(o==null?void 0:o.id)===s.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${s.shape1}, ${s.shape2}, ${s.shape3})`},title:s.label},s.id))}),o&&h.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:o.label})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Custom Colors"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(rs,{label:"Background",value:c.bgColor,onChange:s=>a({...c,bgColor:s})}),h.jsx(rs,{label:"Shape 1",value:c.shape1Color,onChange:s=>a({...c,shape1Color:s})}),h.jsx(rs,{label:"Shape 2",value:c.shape2Color,onChange:s=>a({...c,shape2Color:s})}),h.jsx(rs,{label:"Shape 3",value:c.shape3Color,onChange:s=>a({...c,shape3Color:s})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Shape Sizes"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(ai,{label:"Shape 1 Size",value:c.shape1Size,min:200,max:1e3,step:10,onChange:s=>a({...c,shape1Size:s})}),h.jsx(ai,{label:"Shape 2 Size",value:c.shape2Size,min:150,max:800,step:10,onChange:s=>a({...c,shape2Size:s})}),h.jsx(ai,{label:"Shape 3 Size",value:c.shape3Size,min:100,max:600,step:10,onChange:s=>a({...c,shape3Size:s})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(ai,{label:"Stagger",value:c.stagger,min:0,max:.5,step:.01,onChange:s=>a({...c,stagger:s})}),h.jsx(ai,{label:"Cursor Size",value:c.cursorSize,min:10,max:50,step:1,onChange:s=>a({...c,cursorSize:s})}),h.jsx(ai,{label:"Font Size",value:c.fontSize,min:40,max:200,step:5,onChange:s=>a({...c,fontSize:s})})]})]})]})},A3=`<div id="home-animation-wrapper" style="opacity: 0">
  
  <div class="slides">
    <div class="slide" count="0" data-1="WE ARE" data-2="thinkers" data-3="+Doers"></div>
    <div class="slide" count="1" data-1="WE ARE" data-2="optimists" data-3="+realists"></div>
    <div class="slide" count="2" data-1="WE ARE" data-2="willing" data-3="+able"></div>
  </div>
  
  <svg version="1.1" id="home-animation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="2371.2px" height="841.1px" viewBox="0 0 2371.2 841.1"  xml:space="preserve">
	<!-- <defs>
		<filter id="text-filter" filterUnits="userSpaceOnUse" x="-273" y="-353.2" width="3011.9" height="1453">
			<feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
		</filter>
	</defs>-->

	<!-- TEXTS -->
	<mask maskUnits="userSpaceOnUse" x="-273" y="-353.2" width="3011.9" height="1453" id="bubbles-1">
		<g id="svg-texts" >
			<text transform="matrix(1 0 0 1 62.9893 251.1275)" style="fill:#FFFFFF; font-family:'Source Sans Pro';font-weight: 900; font-size:379.144px;">WE ARE</text>
			<text transform="matrix(1 0 0 1 62.9893 544.8433)" style="fill:#FFFFFF; font-family:'Source Sans Pro';font-weight: 900; font-size:379.144px;">WE ARE</text>
			<text transform="matrix(1 0 0 1 62.9893 838.5591)" style="fill:#FFFFFF; font-family:'Source Sans Pro';font-weight: 900; font-size:379.144px;">WE ARE</text>
		</g>
	</mask>

	<!-- BUBBLES -->
	<g id="bubbles" style="mask:url(#bubbles-1);">
    <path d="M1915.1-195.3c-87.9,90.4-16.3,268,122.9,331.9S2339,73.2,2365.6,15.3
			c26.6-57.8-59-269.3-108-291.9C2208.5-299.1,2068.2-352.9,1915.1-195.3z"/>
		<path d="M1933.8,671.4c90.4,87.9,268,16.3,331.9-122.9s-63.4-301.1-121.3-327.6
			c-57.8-26.6-15.9,174-91.5,266.5C1982.4,573.6,1776.2,518.2,1933.8,671.4z"/>
		<path d="M1258.7-42c70.5-34.1-46.1-157.7-140.5-170.6
			C1024-225.4,918.9-146,884.9-93.2C836.2-17.5,895.4,45,928.6,49.5S1167.6,2,1258.7-42z"/>
		<path d="M-189.2-4.9c-113.8,54.3-108.3,245.6,0,353.9s304.4,45,349.4,0
			s38.1-273.1,0-311.2S9.1-99.5-189.2-4.9z"/>
    <path d="M1503.8,882.5c42.1-118.8-97.1-250.3-250.3-250.3s-247,183.4-247,247
			s166.1,220.1,220.1,220.1C1280.5,1099.3,1430.4,1089.6,1503.8,882.5z"/>
		<path d="M1124.8,102.8C1006,60.8,874.5,199.9,874.5,353.1s183.4,247,247,247
			c63.6,0-58.2-164.8-28.2-280.3C1121.4,212,1331.9,176.2,1124.8,102.8z"/>
    <path d="M1695.5,1061.4c101.8,74.3,189.1-184.9,135.9-328.6
			c-53.2-143.7-245.5-232.8-346.2-241.1c-144.5-11.9-188.4,119.6-169.7,170.2C1334.3,712.5,1564,965.3,1695.5,1061.4z"/>
		<path d="M1570.8,113.5c-78.3,1.5-24,162.6,56.4,213.6s209,22.8,261.9-11
			c75.9-48.5,48.2-130,19.9-148C1880.7,150.2,1672,111.6,1570.8,113.5z"/>
		<path d="M1751.5,747c-78.3,1.5-24,162.6,56.4,213.6c80.3,51.1,209,22.8,261.9-11
			c75.9-48.5,48.2-130,19.9-148C2061.4,783.7,1852.8,745.1,1751.5,747z"/>
		<path d="M410.4,530.7c-113.8,54.3-108.3,245.6,0,353.9s304.4,45,349.4,0
			c45-45,38.1-273.1,0-311.2C721.6,535.3,608.7,436.1,410.4,530.7z"/>
		<path d="M518-226.9c-113.8,54.3-108.3,245.6,0,353.9s304.4,45,349.4,0
			c45-45,38.1-273.1,0-311.2C829.2-222.3,716.3-321.5,518-226.9z"/>
		<path d="M234.7,592.4c54.3,113.8,245.6,108.3,353.9,0s45-304.4,0-349.4
			s-75.3,157.7-178.3,218.1C314.2,517.6,140.1,394.1,234.7,592.4z"/>
		<path d="M510.5,282.4c15.7,125,224.6,72.7,332.9-35.6s78.8-147.2,33.8-192.3
			s-109.1,0.6-212.1,61C569,172.1,493.7,148.7,510.5,282.4z"/>
		<path d="M150.3,414.5c-125,15.7-72.7,224.6,35.6,332.9s147.2,78.8,192.3,33.8
			s-0.6-109.1-61-212.1C260.6,472.9,284,397.7,150.3,414.5z"/>
		<path d="M531.6,326.2c105-69.6-94-116.5-247.2-116.5s-317.3,24.4-360,115.9
			C-136.9,457-28.8,543.8,25.1,543.8S395.8,416.2,531.6,326.2z"/>
		<path d="M685,456.6c105-69.6-94-116.5-247.2-116.5c-153.2,0-317.3,24.4-360,115.9
			c-61.3,131.4,46.8,218.2,100.7,218.2S549.2,546.6,685,456.6z"/>
		<path d="M1142.7,463.6c105-69.6-94-116.5-247.2-116.5s-317.3,24.4-360,115.9
			c-61.3,131.4,46.8,218.2,100.7,218.2C690.1,681.3,1006.9,553.6,1142.7,463.6z"/>
		<path d="M374.8,360.6c69.6,105,241.5-107.8,241.5-261s-149.4-303.5-241-346.3
			c-131.4-61.3-218.2,46.8-218.2,100.7S284.8,224.8,374.8,360.6z"/>
		<path d="M-17.6,985.6c69.6,105,241.5-107.8,241.5-261S74.5,421.1-17,378.4
			c-131.4-61.3-218.2,46.8-218.2,100.7S-107.6,849.8-17.6,985.6z"/>
		<path d="M87.9-56.7C13.9-82.5,9,87.4,66.6,163.2s188.1,93.9,249.4,80.6
			c88-19.1,90.3-105.2,70-131.9C365.7,85.3,183.5-23.4,87.9-56.7z"/>
		<path d="M130.4,627.6c-74-25.8-78.9,144.1-21.3,219.9s188.1,93.9,249.4,80.6
			c88-19.1,90.3-105.2,70-131.9C408.2,769.6,225.9,660.9,130.4,627.6z"/>
		<path d="M1846.9,225.4c42.1-118.8-97.1-250.3-250.3-250.3s-247,183.4-247,247
			s166.1,220.1,220.1,220.1C1623.6,442.3,1773.5,432.6,1846.9,225.4z"/>
		<path d="M1044.2,270.7c42.1-118.8-97.1-250.3-250.3-250.3s-247,183.4-247,247
			S713,487.6,766.9,487.6C820.9,487.6,970.8,477.9,1044.2,270.7z"/>

		<path d="M1148.9,517c-99.5-77.3-210.2,107.4-210.2,260.5s48.4,159.8,112.1,159.8
			s76.8-77.5,106.8-193.1C1185.6,636.4,1255.4,599.8,1148.9,517z"/>
		<path d="M1310.3,169c77.3-99.5-107.4-210.2-260.5-210.2S889.9,7.2,889.9,70.8
			s77.5,76.8,193.1,106.8C1190.9,205.7,1227.6,275.4,1310.3,169z"/>
		<path d="M1103.1,501.1c-25,123.5,148.8,15.9,257.1-92.4S1567.3,167,1532.8,72.1
			C1483.3-64.2,1345.5-49.1,1307.4-11S1135.4,341.4,1103.1,501.1z"/>
		<path d="M902.4,517.3c-25,123.5,148.8,15.9,257.1-92.4s207.1-241.6,172.6-336.6
			C1282.6-48,1144.8-32.9,1106.7,5.2C1068.5,43.3,934.8,357.6,902.4,517.3z"/>
		<path d="M675.4,977.7c-25,123.5,148.8,15.9,257.1-92.4
			c108.3-108.3,207.1-241.6,172.6-336.6c-49.5-136.2-187.3-121.2-225.5-83.1C841.6,503.8,707.8,818,675.4,977.7z"/>
		<path d="M1189.6,365.8c-123.5-25-94.6,247,13.8,355.3s320.3,109,415.2,74.4
			c136.2-49.5,121.2-187.3,83.1-225.5C1663.6,531.9,1349.3,398.2,1189.6,365.8z"/>
		<path d="M1178.3-351.1c-123.5-25-94.6,247,13.8,355.3s320.3,109,415.2,74.4
			c136.2-49.5,121.2-187.3,83.1-225.5S1338-318.8,1178.3-351.1z"/>
		<path d="M1687.6,458c70.5-34.1-46.1-157.7-140.5-170.6
			c-94.3-12.8-199.4,66.6-233.4,119.4c-48.7,75.7,10.5,138.2,43.7,142.8C1390.7,554.1,1596.5,502.1,1687.6,458z"/>
		<path d="M1328.9,258.3c-87.9,90.4-16.3,268,122.9,331.9s301.1-63.4,327.6-121.3
			c26.6-57.8-59-269.3-108-291.9S1482.1,100.8,1328.9,258.3z"/>
		<path d="M2077.1,552.5c-87.9,90.4-16.3,268,122.9,331.9
			c139.2,64,301.1-63.4,327.6-121.3c26.6-57.8-59-269.3-108-291.9C2370.6,448.7,2230.3,394.9,2077.1,552.5z"/>

		<path d="M2084.8,284.9c58.1,111.8,235.9-9.7,299.8-148.9
			c64-139.2,22.8-165.4-35.1-192c-57.8-26.6-102.1,38.4-177.7,130.8C2101.4,161.1,2022.7,165.3,2084.8,284.9z"/>
		<path d="M1792.8,533.8c-111.8,58.1,9.7,235.9,148.9,299.8s165.4,22.8,192-35.1
			s-38.4-102.1-130.8-177.7C1916.6,550.3,1912.5,471.6,1792.8,533.8z"/>
		<path d="M2119.8,318.6c74.3-101.8-128.6-76.6-272.2-23.5s-289.1,133-297.4,233.7
			c-11.9,144.5,119.6,188.4,170.2,169.7C1770.9,679.8,2023.7,450.1,2119.8,318.6z"/>
		<path d="M2308.9,387.7c74.3-101.8-128.6-76.6-272.2-23.5s-289.1,133-297.4,233.7
			c-11.9,144.5,119.6,188.4,170.2,169.7C1960,748.9,2212.8,519.3,2308.9,387.7z"/>
		<path d="M2722.5,146.8c74.3-101.8-128.6-76.6-272.2-23.5
			c-143.7,53.2-289.1,133-297.4,233.7c-11.9,144.5,119.6,188.4,170.2,169.7C2373.6,508,2626.4,278.3,2722.5,146.8z"/>
		<path d="M1984.7,405.3c101.8,74.3,189.1-184.9,135.9-328.6S1875.1-156,1774.4-164.3
			C1630-176.2,1586.1-44.8,1604.8,5.8C1623.5,56.4,1853.1,309.2,1984.7,405.3z"/>

	</g>
</svg>

</div>`,R3=`

var TextSlider = function(){
  this.container = $('#home-animation-wrapper');
  this.currentSlide = 1;
  this.slidesLength = this.container.find('.slide').length - 1; // To start at 0
  this.content = { text1: '', text2: '', text3: ''};
  
  this.allowChange = true;
  
  this.init();
};

TextSlider.prototype = {
  
  init: function(){
    console.log('init');
    
    this.bind();

    this.initSvg();
    
  },
  
  bind: function(){
    console.log('bind');

    var self = this;
    
    // Bind interval
    var timerDuration = 5000,
        timer = setInterval(function(){
          self.resetSlide();
        }, timerDuration);

    // Bind restart on click with next slide
    this.container.on('click', function(){
      
      // Do not allow to change slide until last transition is complete
      if(!self.allowChange){ return; }
      self.allowChange = false;
      setTimeout(function(){
        self.allowChange = true;
      }, 2000);
      
      self.resetSlide();
      
      clearInterval(timer);
      timer = setInterval(function(){
          self.resetSlide();
        }, timerDuration);

      
    });
    

  },
  
  initSvg: function(){
    console.log('initSvg');
    
    this.bubblesRandomColors();
    this.setTexts();
    this.bubblesMovement();
    
    // Trigger First slide
    this.triggerSlide();
  },
  
  setTexts: function(){
    console.log('setTexts');
    
    var texts = this.container.find('#svg-texts');
    
    // Get texts
    this.content.text1 = this.container.find('.slide[count="'+this.currentSlide+'"]').attr('data-1');
    this.content.text2 = this.container.find('.slide[count="'+this.currentSlide+'"]').attr('data-2');
    this.content.text3 = this.container.find('.slide[count="'+this.currentSlide+'"]').attr('data-3');
    
    // UpperCase Texts
    this.content.text1 = this.content.text1.toUpperCase();
    this.content.text2 = this.content.text2.toUpperCase();
    this.content.text3 = this.content.text3.toUpperCase();
    
    // Append Texts
    texts.find('text:nth-child(1)').html(this.content.text1);
    texts.find('text:nth-child(2)').html(this.content.text2);
    texts.find('text:nth-child(3)').html(this.content.text3);
  },
  
  bubblesRandomColors: function(){
    console.log('bubblesRandomColors');
    
    var bubblesGroup = this.container.find('#bubbles'),
        // colors = ['#03ee93','#ff0700','#ffe700','#5306de'];
        colors = ['#f5a147','#51cad8','#112b39'];
    
    bubblesGroup.find('path').each(function(){
      var rand = getRand(0,colors.length);
      TweenMax.set(this, { fill: colors[rand], scale: 0, transformOrigin: 'center' });
    })    
  },
  
  triggerSlide: function(){
    console.log('triggerSlide');
    
    // Container loads invisible, needs this to be shown on the first iteration
    TweenMax.set(this.container, { autoAlpha: 1 });

    var bubbles =  this.container.find('#bubbles path');
    bubbles.each(function(){
      var rotateRand = getRand(-30,30);
      TweenMax.to(this,1.5, { scale: 1.2, rotation: rotateRand, ease: Power2.easeInOut});
    })
  },
  
  resetSlide: function(){
    console.log('hideSlide');

    var self = this;
    
    this.currentSlide++;
    if(this.currentSlide > this.slidesLength){ this.currentSlide = 0; };
    
    var bubbles = this.container.find('#bubbles path');
    TweenMax.to(bubbles,1.5, { scale: 0, ease: Power2.easeInOut, onComplete: triggerContinue });
    
    // Workaround gsap onComplete
    function triggerContinue(){
      self.initSvg();
    }
  },
  
  // non used function (performance) (remove the 'return' to enable)
  bubblesMovement: function(){
    
    return; // Yup, this one
    
    var bubbles = this.container.find('#bubbles path'),
        count = 500;
    
    bubbles.each(function(index){
      if(index > count ) { return; }
      $(this).attr('data-rand', getRand(15, 25) );
    });
    
    this.container.on('mousemove', function(e){
      bubbles.each(function(){
        if(!$(this).attr('data-rand')){ return; };
        
        var rand = $(this).attr('data-rand'),
            cy = e.pageY,
            cx = e.pageX,
            py = Math.round($(this).offset().top),
            px = Math.round($(this).offset().left),
            x = Math.round(-(cx + px) / rand),
            y = Math.round(-(cy + py) / rand);

        TweenMax.to($(this), 0.2, { x: x, y: y, transformOrigin: 'center' });
      });
    })
  }
}

function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

window.LLOS = window.LLOS || {};
if($('#home-animation-wrapper').length){
  window.LLOS.TextSlider = new TextSlider();
}`,z3=()=>{const c=L.useRef(null);return L.useEffect(()=>{if(!c.current)return;const a=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,900" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      overflow: hidden;
      background: #112b39;
      font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    #home-animation-wrapper {
      width: 100%;
      height: 100vh;
      position: relative;
      float: left;
      cursor: pointer;
    }
    #home-animation-wrapper svg {
      width: 100%;
      max-height: 90%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .slides {
      display: none;
    }
  </style>
</head>
<body>
  ${A3}
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
  <script>
    window.TweenMax = gsap;
    window.Power2 = gsap.Power2;
    ${R3}
  <\/script>
</body>
</html>
    `;c.current.srcdoc=a},[]),h.jsx("div",{className:"w-full h-full relative bg-[#112b39]",children:h.jsx("iframe",{ref:c,className:"w-full h-full border-0",title:"Text Mask Animation"})})},E3=()=>h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"text-center py-8",children:[h.jsx("div",{className:"text-[11px] text-neutral-500 mb-2",children:"Interactive Demo"}),h.jsxs("div",{className:"text-[9px] text-neutral-400 leading-relaxed",children:["Click anywhere to change the text",h.jsx("br",{}),"Auto-transitions every 5 seconds"]})]}),h.jsxs("div",{className:"border-t border-neutral-200 pt-4",children:[h.jsx("div",{className:"text-[10px] text-neutral-500 mb-2",children:"About"}),h.jsx("div",{className:"text-[9px] text-neutral-400 leading-relaxed",children:"This demo uses SVG masks to create a bubble reveal effect. The colorful bubbles act as a mask layer, revealing the text underneath as they scale and animate."})]}),h.jsxs("div",{className:"border-t border-neutral-200 pt-4",children:[h.jsx("div",{className:"text-[10px] text-neutral-500 mb-2",children:"Technique"}),h.jsxs("div",{className:"text-[9px] text-neutral-400 leading-relaxed",children:["• SVG ",h.jsx("code",{className:"bg-neutral-200 px-1 rounded",children:"<mask>"})," element",h.jsx("br",{}),"• GSAP for smooth animations",h.jsx("br",{}),"• Random colors & rotations",h.jsx("br",{}),"• Timed slide transitions"]})]})]}),j3={},D3=[{id:"echotrace",name:"EchoTrace",description:"Psychedelic motion trail"},{id:"spotlight",name:"Spotlight",description:"Cursor spotlight effect"},{id:"textmask",name:"Text Mask",description:"SVG mask bubble reveal"},{id:"flip",name:"FLIP",description:"GSAP Flip layout animation"}],M3=({active:c,onSelect:a})=>{const o=L.useRef(null);return L.useEffect(()=>{var l;(l=o.current)==null||l.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[c]),h.jsx("div",{className:"flex gap-1.5 overflow-x-auto scrollbar-hide px-5 py-3 flex-shrink-0",children:D3.map(l=>{const s=c===l.id;return h.jsx("button",{ref:s?o:null,onClick:()=>a(l.id),className:`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${s?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.name},l.id)})})};/*!
 * matrix 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jn,fl,od,Es,So,ms,Ss,No,vn="transform",Bf=vn+"Origin",Cv,rd=function(a){var o=a.ownerDocument||a;for(!(vn in a.style)&&("msTransform"in a.style)&&(vn="msTransform",Bf=vn+"Origin");o.parentNode&&(o=o.parentNode););if(fl=window,Ss=new dl,o){Jn=o,od=o.documentElement,Es=o.body,No=Jn.createElementNS("http://www.w3.org/2000/svg","g"),No.style.transform="none";var l=o.createElement("div"),s=o.createElement("div"),f=o&&(o.body||o.firstElementChild);f&&f.appendChild&&(f.appendChild(l),l.appendChild(s),l.style.position="static",l.style.transform="translate3d(0,0,1px)",Cv=s.offsetParent!==l,f.removeChild(l))}return o},O3=function(a){for(var o,l;a&&a!==Es;)l=a._gsap,l&&l.uncache&&l.get(a,"x"),l&&!l.scaleX&&!l.scaleY&&l.renderTransform&&(l.scaleX=l.scaleY=1e-4,l.renderTransform(1,l),o?o.push(l):o=[l]),a=a.parentNode;return o},Nv=[],Av=[],sd=function(){return fl.pageYOffset||Jn.scrollTop||od.scrollTop||Es.scrollTop||0},cd=function(){return fl.pageXOffset||Jn.scrollLeft||od.scrollLeft||Es.scrollLeft||0},ud=function(a){return a.ownerSVGElement||((a.tagName+"").toLowerCase()==="svg"?a:null)},L3=function c(a){if(fl.getComputedStyle(a).position==="fixed")return!0;if(a=a.parentNode,a&&a.nodeType===1)return c(a)},pf=function c(a,o){if(a.parentNode&&(Jn||rd(a))){var l=ud(a),s=l?l.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",f=l?o?"rect":"g":"div",r=o!==2?0:100,m=o===3?100:0,g={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},v=Jn.createElementNS?Jn.createElementNS(s.replace(/^https/,"http"),f):Jn.createElement(f);return o&&(l?(ms||(ms=c(a)),v.setAttribute("width",.01),v.setAttribute("height",.01),v.setAttribute("transform","translate("+r+","+m+")"),v.setAttribute("fill","transparent"),ms.appendChild(v)):(So||(So=c(a),Object.assign(So.style,g)),Object.assign(v.style,g,{width:"0.1px",height:"0.1px",top:m+"px",left:r+"px"}),So.appendChild(v))),v}throw"Need document and parent."},U3=function(a){for(var o=new dl,l=0;l<a.numberOfItems;l++)o.multiply(a.getItem(l).matrix);return o},Rv=function(a){var o=a.getCTM(),l;return o||(l=a.style[vn],a.style[vn]="none",a.appendChild(No),o=No.getCTM(),a.removeChild(No),l?a.style[vn]=l:a.style.removeProperty(vn.replace(/([A-Z])/g,"-$1").toLowerCase())),o||Ss.clone()},B3=function(a,o){var l=ud(a),s=a===l,f=l?Nv:Av,r=a.parentNode,m=r&&!l&&r.shadowRoot&&r.shadowRoot.appendChild?r.shadowRoot:r,g,v,p,y,w,S;if(a===fl)return a;if(f.length||f.push(pf(a,1),pf(a,2),pf(a,3)),g=l?ms:So,l)s?(p=Rv(a),y=-p.e/p.a,w=-p.f/p.d,v=Ss):a.getBBox?(p=a.getBBox(),v=a.transform?a.transform.baseVal:{},v=v.numberOfItems?v.numberOfItems>1?U3(v):v.getItem(0).matrix:Ss,y=v.a*p.x+v.c*p.y,w=v.b*p.x+v.d*p.y):(v=new dl,y=w=0),o&&a.tagName.toLowerCase()==="g"&&(y=w=0),(s||!a.getBoundingClientRect().width?l:r).appendChild(g),g.setAttribute("transform","matrix("+v.a+","+v.b+","+v.c+","+v.d+","+(v.e+y)+","+(v.f+w)+")");else{if(y=w=0,Cv)for(v=a.offsetParent,p=a;p&&(p=p.parentNode)&&p!==v&&p.parentNode;)(fl.getComputedStyle(p)[vn]+"").length>4&&(y=p.offsetLeft,w=p.offsetTop,p=0);if(S=fl.getComputedStyle(a),S.position!=="absolute"&&S.position!=="fixed")for(v=a.offsetParent;r&&r!==v;)y+=r.scrollLeft||0,w+=r.scrollTop||0,r=r.parentNode;p=g.style,p.top=a.offsetTop-w+"px",p.left=a.offsetLeft-y+"px",p[vn]=S[vn],p[Bf]=S[Bf],p.position=S.position==="fixed"?"fixed":"absolute",m.appendChild(g)}return g},vf=function(a,o,l,s,f,r,m){return a.a=o,a.b=l,a.c=s,a.d=f,a.e=r,a.f=m,a},dl=(function(){function c(o,l,s,f,r,m){o===void 0&&(o=1),l===void 0&&(l=0),s===void 0&&(s=0),f===void 0&&(f=1),r===void 0&&(r=0),m===void 0&&(m=0),vf(this,o,l,s,f,r,m)}var a=c.prototype;return a.inverse=function(){var l=this.a,s=this.b,f=this.c,r=this.d,m=this.e,g=this.f,v=l*r-s*f||1e-10;return vf(this,r/v,-s/v,-f/v,l/v,(f*g-r*m)/v,-(l*g-s*m)/v)},a.multiply=function(l){var s=this.a,f=this.b,r=this.c,m=this.d,g=this.e,v=this.f,p=l.a,y=l.c,w=l.b,S=l.d,C=l.e,_=l.f;return vf(this,p*s+w*r,p*f+w*m,y*s+S*r,y*f+S*m,g+C*s+_*r,v+C*f+_*m)},a.clone=function(){return new c(this.a,this.b,this.c,this.d,this.e,this.f)},a.equals=function(l){var s=this.a,f=this.b,r=this.c,m=this.d,g=this.e,v=this.f;return s===l.a&&f===l.b&&r===l.c&&m===l.d&&g===l.e&&v===l.f},a.apply=function(l,s){s===void 0&&(s={});var f=l.x,r=l.y,m=this.a,g=this.b,v=this.c,p=this.d,y=this.e,w=this.f;return s.x=f*m+r*v+y||0,s.y=f*g+r*p+w||0,s},c})();function Rn(c,a,o,l){if(!c||!c.parentNode||(Jn||rd(c)).documentElement===c)return new dl;var s=O3(c),f=ud(c),r=f?Nv:Av,m=B3(c,o),g=r[0].getBoundingClientRect(),v=r[1].getBoundingClientRect(),p=r[2].getBoundingClientRect(),y=m.parentNode,w=!l&&L3(c),S=new dl((v.left-g.left)/100,(v.top-g.top)/100,(p.left-g.left)/100,(p.top-g.top)/100,g.left+(w?0:cd()),g.top+(w?0:sd()));if(y.removeChild(m),s)for(g=s.length;g--;)v=s[g],v.scaleX=v.scaleY=0,v.renderTransform(1,v);return a?S.inverse():S}/*!
 * Flip 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var k3=1,yi,mt,qe,Ao,Na,Wn,kf,m1=function(a,o){return a.actions.forEach(function(l){return l.vars[o]&&l.vars[o](l)})},Ff={},p1=180/Math.PI,F3=Math.PI/180,ws={},v1={},js={},fd=function(a){return typeof a=="string"?a.split(" ").join("").split(","):a},H3=fd("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),Ds=fd("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),Ro=function(a){return yi(a)[0]||console.warn("Element not found:",a)},ri=function(a){return Math.round(a*1e4)/1e4||0},gf=function(a,o,l){return a.forEach(function(s){return s.classList[l](o)})},g1={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},zv={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},Ev=function(a){return a.replace(/([A-Z])/g,"-$1").toLowerCase()},si=function(a,o){var l={},s;for(s in a)o[s]||(l[s]=a[s]);return l},dd={},jv=function(a){var o=dd[a]=fd(a);return js[a]=o.concat(Ds),o},q3=function(a){var o=a._gsap||mt.core.getCache(a);return o.gmCache===mt.ticker.frame?o.gMatrix:(o.gmCache=mt.ticker.frame,o.gMatrix=Rn(a,!0,!1,!0))},G3=function c(a,o,l){l===void 0&&(l=0);for(var s=a.parentNode,f=1e3*Math.pow(10,l)*(o?-1:1),r=o?-f*900:0;a;)r+=f,a=a.previousSibling;return s?r+c(s,o,l+1):r},Ts=function(a,o,l){return a.forEach(function(s){return s.d=G3(l?s.element:s.t,o)}),a.sort(function(s,f){return s.d-f.d}),a},Uo=function(a,o){for(var l=a.element.style,s=a.css=a.css||[],f=o.length,r,m;f--;)r=o[f],m=l[r]||l.getPropertyValue(r),s.push(m?r:v1[r]||(v1[r]=Ev(r)),m);return l},Cs=function(a){var o=a.css,l=a.element.style,s=0;for(a.cache.uncache=1;s<o.length;s+=2)o[s+1]?l[o[s]]=o[s+1]:l.removeProperty(o[s]);!o[o.indexOf("transform")+1]&&l.translate&&(l.removeProperty("translate"),l.removeProperty("scale"),l.removeProperty("rotate"))},x1=function(a,o){a.forEach(function(l){return l.a.cache.uncache=1}),o||a.finalStates.forEach(Cs)},xf="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),hd=function(a,o,l){var s=a.element,f=a.width,r=a.height,m=a.uncache,g=a.getProp,v=s.style,p=4,y,w,S;if(typeof o!="object"&&(o=a),qe&&l!==1)return qe._abs.push({t:s,b:a,a,sd:0}),qe._final.push(function(){return(a.cache.uncache=1)&&Cs(a)}),s;for(w=g("display")==="none",(!a.isVisible||w)&&(w&&(Uo(a,["display"]).display=o.display),a.matrix=o.matrix,a.width=f=a.width||o.width,a.height=r=a.height||o.height),Uo(a,xf),S=window.getComputedStyle(s);p--;)v[xf[p]]=S[xf[p]];if(v.gridArea="1 / 1 / 1 / 1",v.transition="none",v.position="absolute",v.width=f+"px",v.height=r+"px",v.top||(v.top="0px"),v.left||(v.left="0px"),m)y=new hl(s);else if(y=si(a,ws),y.position="absolute",a.simple){var C=s.getBoundingClientRect();y.matrix=new dl(1,0,0,1,C.left+cd(),C.top+sd())}else y.matrix=Rn(s,!1,!1,!0);return y=di(y,a,!0),a.x=Wn(y.x,.01),a.y=Wn(y.y,.01),s},y1=function(a,o){return o!==!0&&(o=yi(o),a=a.filter(function(l){if(o.indexOf((l.sd<0?l.b:l.a).element)!==-1)return!0;l.t._gsap.renderTransform(1),l.b.isVisible&&(l.t.style.width=l.b.width+"px",l.t.style.height=l.b.height+"px")})),a},Dv=function(a){return Ts(a,!0).forEach(function(o){return(o.a.isVisible||o.b.isVisible)&&hd(o.sd<0?o.b:o.a,o.b,1)})},V3=function(a,o){return o&&a.idLookup[Hf(o).id]||a.elementStates[0]},Hf=function(a,o,l,s){return a instanceof hl?a:a instanceof gn?V3(a,s):new hl(typeof a=="string"?Ro(a)||console.warn(a+" not found"):a,o,l)},Y3=function(a,o){for(var l=mt.getProperty(a.element,null,"native"),s=a.props={},f=o.length;f--;)s[o[f]]=(l(o[f])+"").trim();return s.zIndex&&(s.zIndex=parseFloat(s.zIndex)||0),a},Mv=function(a,o){var l=a.style||a,s;for(s in o)l[s]=o[s]},X3=function(a){var o=a.getAttribute("data-flip-id");return o||a.setAttribute("data-flip-id",o="auto-"+k3++),o},Ov=function(a){return a.map(function(o){return o.element})},b1=function(a,o,l){return a&&o.length&&l.add(a(Ov(o),l,new gn(o,0,!0)),0)},di=function(a,o,l,s,f,r){var m=a.element,g=a.cache,v=a.parent,p=a.x,y=a.y,w=o.width,S=o.height,C=o.scaleX,_=o.scaleY,A=o.rotation,D=o.bounds,H=r&&kf&&kf(m,"transform,width,height"),E=a,G=o.matrix,O=G.e,Y=G.f,M=a.bounds.width!==D.width||a.bounds.height!==D.height||a.scaleX!==C||a.scaleY!==_||a.rotation!==A,U=!M&&a.simple&&o.simple&&!f,z,B,Z,W,$,ne,ae;return U||!v?(C=_=1,A=z=0):($=q3(v),ne=$.clone().multiply(o.ctm?o.matrix.clone().multiply(o.ctm):o.matrix),A=ri(Math.atan2(ne.b,ne.a)*p1),z=ri(Math.atan2(ne.c,ne.d)*p1+A)%360,C=Math.sqrt(Math.pow(ne.a,2)+Math.pow(ne.b,2)),_=Math.sqrt(Math.pow(ne.c,2)+Math.pow(ne.d,2))*Math.cos(z*F3),f&&(f=yi(f)[0],W=mt.getProperty(f),ae=f.getBBox&&typeof f.getBBox=="function"&&f.getBBox(),E={scaleX:W("scaleX"),scaleY:W("scaleY"),width:ae?ae.width:Math.ceil(parseFloat(W("width","px"))),height:ae?ae.height:parseFloat(W("height","px"))}),g.rotation=A+"deg",g.skewX=z+"deg"),l?(C*=w===E.width||!E.width?1:w/E.width,_*=S===E.height||!E.height?1:S/E.height,g.scaleX=C,g.scaleY=_):(w=Wn(w*C/E.scaleX,0),S=Wn(S*_/E.scaleY,0),m.style.width=w+"px",m.style.height=S+"px"),s&&Mv(m,o.props),U||!v?(p+=O-a.matrix.e,y+=Y-a.matrix.f):M||v!==o.parent?(g.x=p+"px",g.y=y+"px",g.renderTransform(1,g),ne=Rn(f||m,!1,!1,!0),B=$.apply({x:ne.e,y:ne.f}),Z=$.apply({x:O,y:Y}),p+=Z.x-B.x,y+=Z.y-B.y):($.e=$.f=0,Z=$.apply({x:O-a.matrix.e,y:Y-a.matrix.f}),p+=Z.x,y+=Z.y),p=Wn(p,.02),y=Wn(y,.02),r&&!(r instanceof hl)?H&&H.revert():(g.x=p+"px",g.y=y+"px",g.renderTransform(1,g)),r&&(r.x=p,r.y=y,r.rotation=A,r.skewX=z,l?(r.scaleX=C,r.scaleY=_):(r.width=w,r.height=S)),r||g},yf=function(a,o){return a instanceof gn?a:new gn(a,o)},Lv=function(a,o,l){var s=a.idLookup[l],f=a.alt[l];return f.isVisible&&(!(o.getElementState(f.element)||f).isVisible||!s.isVisible)?f:s},bf=[],_f="width,height,overflowX,overflowY".split(","),ss,_1=function(a){if(a!==ss){var o=Na.style,l=Na.clientWidth===window.outerWidth,s=Na.clientHeight===window.outerHeight,f=4;if(a&&(l||s)){for(;f--;)bf[f]=o[_f[f]];l&&(o.width=Na.clientWidth+"px",o.overflowY="hidden"),s&&(o.height=Na.clientHeight+"px",o.overflowX="hidden"),ss=a}else if(ss){for(;f--;)bf[f]?o[_f[f]]=bf[f]:o.removeProperty(Ev(_f[f]));ss=a}}},S1=function(a,o){for(var l=0;l<a.length;l+=3)mt.set(a[l],{clearProps:!0}),a[l].setAttribute("style",a[l+o]),a[l]._gsap.gmCache=-1},Sf=function(a,o,l,s){a instanceof gn&&o instanceof gn||console.warn("Not a valid state object."),l=l||{};var f=l,r=f.clearProps,m=f.onEnter,g=f.onLeave,v=f.absolute,p=f.absoluteOnLeave,y=f.custom,w=f.delay,S=f.paused,C=f.repeat,_=f.repeatDelay,A=f.yoyo,D=f.toggleClass,H=f.nested,E=f.zIndex,G=f.scale,O=f.fade,Y=f.stagger,M=f.spin,U=f.prune,z=("props"in l?l:a).props,B=si(l,g1),Z=mt.timeline({delay:w,paused:S,repeat:C,repeatDelay:_,yoyo:A,data:"isFlip"}),W=B,$=[],ne=[],ae=[],k=[],J=M===!0?1:M||0,ie=typeof M=="function"?M:function(){return J},de=a.interrupted||o.interrupted,ge=Z[s!==1?"to":"from"],N,P,te,ee,le,oe,ve,Ae,Me,st,vt,xn,Be,ke;for(P in o.idLookup)vt=o.alt[P]?Lv(o,a,P):o.idLookup[P],le=vt.element,st=a.idLookup[P],a.alt[P]&&le===st.element&&(a.alt[P].isVisible||!vt.isVisible)&&(st=a.alt[P]),st?(oe={t:le,b:st,a:vt,sd:st.element===le?0:vt.isVisible?1:-1},ae.push(oe),oe.sd&&(oe.sd<0&&(oe.b=vt,oe.a=st),de&&Uo(oe.b,z?js[z]:Ds),O&&ae.push(oe.swap={t:st.element,b:oe.b,a:oe.a,sd:-oe.sd,swap:oe})),le._flip=st.element._flip=qe?qe.timeline:Z):vt.isVisible&&(ae.push({t:le,b:si(vt,{isVisible:1}),a:vt,sd:0,entering:1}),le._flip=qe?qe.timeline:Z);if(z&&(dd[z]||jv(z)).forEach(function(dn){return B[dn]=function(zn){return ae[zn].a.props[dn]}}),ae.finalStates=Me=[],xn=function(){Ts(ae),_1(!0);var zn=[];for(ee=0;ee<ae.length;ee++)oe=ae[ee],Be=oe.a,ke=oe.b,U&&!Be.isDifferent(ke)&&!oe.entering?ae.splice(ee--,1):(le=oe.t,H&&!(oe.sd<0)&&ee&&(Be=oe.a=Be.clone({matrix:Rn(le,!1,!1,!0)})),ke.isVisible&&Be.isVisible?(oe.sd<0?(H&&S1(zn,1),ve=new hl(le,z,a.simple),di(ve,Be,G,0,0,ve),ve.matrix=Rn(le,!1,!1,!0),ve.bounds=le.getBoundingClientRect(),ve.css=oe.b.css,oe.a=Be=ve,O&&(le.style.opacity=de?ke.opacity:Be.opacity),Y&&k.push(le),H&&(S1(zn,2),zn.push(le,le.getAttribute("style")))):oe.sd>0&&O&&(le.style.opacity=de?Be.opacity-ke.opacity:"0"),di(Be,ke,G,z),H&&oe.sd<0&&zn.push(le.getAttribute("style"))):ke.isVisible!==Be.isVisible&&(ke.isVisible?Be.isVisible||(ke.css=Be.css,ne.push(ke),ae.splice(ee--,1),v&&H&&di(Be,ke,G,z)):(Be.isVisible&&$.push(Be),ae.splice(ee--,1))),G||(le.style.maxWidth=Math.max(Be.width,ke.width)+"px",le.style.maxHeight=Math.max(Be.height,ke.height)+"px",le.style.minWidth=Math.min(Be.width,ke.width)+"px",le.style.minHeight=Math.min(Be.height,ke.height)+"px"),H&&D&&le.classList.add(D)),Me.push(Be);var En;if(D&&(En=Me.map(function(me){return me.element}),H&&En.forEach(function(me){return me.classList.remove(D)})),_1(!1),G?(B.scaleX=function(me){return ae[me].a.scaleX},B.scaleY=function(me){return ae[me].a.scaleY}):(B.width=function(me){return ae[me].a.width+"px"},B.height=function(me){return ae[me].a.height+"px"},B.autoRound=l.autoRound||!1),B.x=function(me){return ae[me].a.x+"px"},B.y=function(me){return ae[me].a.y+"px"},B.rotation=function(me){return ae[me].a.rotation+(M?ie(me,Ae[me],Ae)*360:0)},B.skewX=function(me){return ae[me].a.skewX},Ae=ae.map(function(me){return me.t}),(E||E===0)&&(B.modifiers={zIndex:function(){return E}},B.zIndex=E,B.immediateRender=l.immediateRender!==!1),O&&(B.opacity=function(me){return ae[me].sd<0?0:ae[me].sd>0?ae[me].a.opacity:"+=0"}),k.length){Y=mt.utils.distribute(Y);var _i=Ae.slice(k.length);B.stagger=function(me,ko){return Y(~k.indexOf(ko)?Ae.indexOf(ae[me].swap.t):me,ko,_i)}}if(H3.forEach(function(me){return l[me]&&Z.eventCallback(me,l[me],l[me+"Params"])}),y&&Ae.length){W=si(B,g1),"scale"in y&&(y.scaleX=y.scaleY=y.scale,delete y.scale);for(P in y)N=si(y[P],zv),N[P]=B[P],!("duration"in N)&&"duration"in B&&(N.duration=B.duration),N.stagger=B.stagger,ge.call(Z,Ae,N,0),delete W[P]}(Ae.length||ne.length||$.length)&&(D&&Z.add(function(){return gf(En,D,Z._zTime<0?"remove":"add")},0)&&!S&&gf(En,D,"add"),Ae.length&&ge.call(Z,Ae,W,0)),b1(m,$,Z),b1(g,ne,Z);var Ua=qe&&qe.timeline;Ua&&(Ua.add(Z,0),qe._final.push(function(){return x1(ae,!r)})),te=Z.duration(),Z.call(function(){var me=Z.time()>=te;me&&!Ua&&x1(ae,!r),D&&gf(En,D,me?"remove":"add")})},p&&(v=ae.filter(function(dn){return!dn.sd&&!dn.a.isVisible&&dn.b.isVisible}).map(function(dn){return dn.a.element})),qe){var yn;v&&(yn=qe._abs).push.apply(yn,y1(ae,v)),qe._run.push(xn)}else v&&Dv(y1(ae,v)),xn();var St=qe?qe.timeline:Z;return St.revert=function(){return md(St,1,1)},St},P3=function c(a){a.vars.onInterrupt&&a.vars.onInterrupt.apply(a,a.vars.onInterruptParams||[]),a.getChildren(!0,!1,!0).forEach(c)},md=function(a,o,l){if(a&&a.progress()<1&&(!a.paused()||l))return o&&(P3(a),o<2&&a.progress(1),a.kill()),!0},cs=function(a){for(var o=a.idLookup={},l=a.alt={},s=a.elementStates,f=s.length,r;f--;)r=s[f],o[r.id]?l[r.id]=r:o[r.id]=r},gn=(function(){function c(o,l,s){if(this.props=l&&l.props,this.simple=!!(l&&l.simple),s)this.targets=Ov(o),this.elementStates=o,cs(this);else{this.targets=yi(o);var f=l&&(l.kill===!1||l.batch&&!l.kill);qe&&!f&&qe._kill.push(this),this.update(f||!!qe)}}var a=c.prototype;return a.update=function(l){var s=this;return this.elementStates=this.targets.map(function(f){return new hl(f,s.props,s.simple)}),cs(this),this.interrupt(l),this.recordInlineStyles(),this},a.clear=function(){return this.targets.length=this.elementStates.length=0,cs(this),this},a.fit=function(l,s,f){for(var r=Ts(this.elementStates.slice(0),!1,!0),m=(l||this).idLookup,g=0,v,p;g<r.length;g++)v=r[g],f&&(v.matrix=Rn(v.element,!1,!1,!0)),p=m[v.id],p&&di(v,p,s,!0,0,v),v.matrix=Rn(v.element,!1,!1,!0);return this},a.getProperty=function(l,s){var f=this.getElementState(l)||ws;return(s in f?f:f.props||ws)[s]},a.add=function(l){for(var s=l.targets.length,f=this.idLookup,r=this.alt,m,g,v;s--;)g=l.elementStates[s],v=f[g.id],v&&(g.element===v.element||r[g.id]&&r[g.id].element===g.element)?(m=this.elementStates.indexOf(g.element===v.element?v:r[g.id]),this.targets.splice(m,1,l.targets[s]),this.elementStates.splice(m,1,g)):(this.targets.push(l.targets[s]),this.elementStates.push(g));return l.interrupted&&(this.interrupted=!0),l.simple||(this.simple=!1),cs(this),this},a.compare=function(l){var s=l.idLookup,f=this.idLookup,r=[],m=[],g=[],v=[],p=[],y=l.alt,w=this.alt,S=function(U,z,B){return(U.isVisible!==z.isVisible?U.isVisible?g:v:U.isVisible?m:r).push(B)&&p.push(B)},C=function(U,z,B){return p.indexOf(B)<0&&S(U,z,B)},_,A,D,H,E,G,O,Y;for(D in s)E=y[D],G=w[D],_=E?Lv(l,this,D):s[D],H=_.element,A=f[D],G?(Y=A.isVisible||!G.isVisible&&H===A.element?A:G,O=E&&!_.isVisible&&!E.isVisible&&Y.element===E.element?E:_,O.isVisible&&Y.isVisible&&O.element!==Y.element?((O.isDifferent(Y)?m:r).push(O.element,Y.element),p.push(O.element,Y.element)):S(O,Y,O.element),E&&O.element===E.element&&(E=s[D]),C(O.element!==A.element&&E?E:O,A,A.element),C(E&&E.element===G.element?E:O,G,G.element),E&&C(E,G.element===E.element?G:A,E.element)):(A?A.isDifferent(_)?S(_,A,H):r.push(H):g.push(H),E&&C(E,A,E.element));for(D in f)s[D]||(v.push(f[D].element),w[D]&&v.push(w[D].element));return{changed:m,unchanged:r,enter:g,leave:v}},a.recordInlineStyles=function(){for(var l=js[this.props]||Ds,s=this.elementStates.length;s--;)Uo(this.elementStates[s],l)},a.interrupt=function(l){var s=this,f=[];this.targets.forEach(function(r){var m=r._flip,g=md(m,l?0:1);l&&g&&f.indexOf(m)<0&&m.add(function(){return s.updateVisibility()}),g&&f.push(m)}),!l&&f.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!f.length)},a.updateVisibility=function(){this.elementStates.forEach(function(l){var s=l.element.getBoundingClientRect();l.isVisible=!!(s.width||s.height||s.top||s.left),l.uncache=1})},a.getElementState=function(l){return this.elementStates[this.targets.indexOf(Ro(l))]},a.makeAbsolute=function(){return Ts(this.elementStates.slice(0),!0,!0).map(hd)},c})(),hl=(function(){function c(o,l,s){o instanceof c?Object.assign(this,o,l||{}):(this.element=o,this.update(l,s))}var a=c.prototype;return a.isDifferent=function(l){var s=this.bounds,f=l.bounds;return s.top!==f.top||s.left!==f.left||s.width!==f.width||s.height!==f.height||!this.matrix.equals(l.matrix)||this.opacity!==l.opacity||this.props&&l.props&&JSON.stringify(this.props)!==JSON.stringify(l.props)},a.clone=function(l){return new c(this,l)},a.update=function(l,s){var f=this,r=f.element,m=mt.getProperty(r),g=mt.core.getCache(r),v=r.getBoundingClientRect(),p=r.getBBox&&typeof r.getBBox=="function"&&r.nodeName.toLowerCase()!=="svg"&&r.getBBox(),y=s?new dl(1,0,0,1,v.left+cd(),v.top+sd()):Rn(r,!1,!1,!0);g.uncache=1,f.getProp=m,f.element=r,f.id=X3(r),f.matrix=y,f.cache=g,f.bounds=v,f.isVisible=!!(v.width||v.height||v.left||v.top),f.display=m("display"),f.position=m("position"),f.parent=r.parentNode,f.x=m("x","px"),f.y=m("y","px"),f.scaleX=g.scaleX,f.scaleY=g.scaleY,f.rotation=m("rotation"),f.skewX=m("skewX"),f.opacity=m("opacity"),f.width=p?p.width:Wn(m("width","px"),.04),f.height=p?p.height:Wn(m("height","px"),.04),l&&Y3(f,dd[l]||jv(l)),f.ctm=r.getCTM&&r.nodeName.toLowerCase()==="svg"&&Rv(r).inverse(),f.simple=s||ri(y.a)===1&&!ri(y.b)&&!ri(y.c)&&ri(y.d)===1,f.uncache=0},c})(),Q3=(function(){function c(o,l){this.vars=o,this.batch=l,this.states=[],this.timeline=l.timeline}var a=c.prototype;return a.getStateById=function(l){for(var s=this.states.length;s--;)if(this.states[s].idLookup[l])return this.states[s]},a.kill=function(){this.batch.remove(this)},c})(),Z3=(function(){function c(o){this.id=o,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new gn,this.timeline=mt.timeline()}var a=c.prototype;return a.add=function(l){var s=this.actions.filter(function(f){return f.vars===l});return s.length?s[0]:(s=new Q3(typeof l=="function"?{animate:l}:l,this),this.actions.push(s),s)},a.remove=function(l){var s=this.actions.indexOf(l);return s>=0&&this.actions.splice(s,1),this},a.getState=function(l){var s=this,f=qe,r=Ao;return qe=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(m){m.vars.getState&&(m.states.length=0,Ao=m,m.state=m.vars.getState(m)),l&&m.states.forEach(function(g){return s.state.add(g)})}),Ao=r,qe=f,this.killConflicts(),this},a.animate=function(){var l=this,s=qe,f=this.timeline,r=this.actions.length,m,g;for(qe=this,f.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(v){v.vars.animate&&v.vars.animate(v);var p=v.vars.onEnter,y=v.vars.onLeave,w=v.targets,S,C;w&&w.length&&(p||y)&&(S=new gn,v.states.forEach(function(_){return S.add(_)}),C=S.compare(bi.getState(w)),C.enter.length&&p&&p(C.enter),C.leave.length&&y&&y(C.leave))}),Dv(this._abs),this._run.forEach(function(v){return v()}),g=f.duration(),m=this._final.slice(0),f.add(function(){g<=f.time()&&(m.forEach(function(v){return v()}),m1(l,"onComplete"))}),qe=s;r--;)this.actions[r].vars.once&&this.actions[r].kill();return m1(this,"onStart"),f.restart(),this},a.loadState=function(l){l||(l=function(){return 0});var s=[];return this.actions.forEach(function(f){if(f.vars.loadState){var r,m=function g(v){v&&(f.targets=v),r=s.indexOf(g),~r&&(s.splice(r,1),s.length||l())};s.push(m),f.vars.loadState(m)}}),s.length||l(),this},a.setState=function(){return this.actions.forEach(function(l){return l.targets=l.vars.setState&&l.vars.setState(l)}),this},a.killConflicts=function(l){return this.state.interrupt(l),this._kill.forEach(function(s){return s.interrupt(l)}),this},a.run=function(l,s){var f=this;return this!==qe&&(l||this.getState(s),this.loadState(function(){f._killed||(f.setState(),f.animate())})),this},a.clear=function(l){this.state.clear(),l||(this.actions.length=0)},a.getStateById=function(l){for(var s=this.actions.length,f;s--;)if(f=this.actions[s].getStateById(l),f)return f;return this.state.idLookup[l]&&this.state},a.kill=function(){this._killed=1,this.clear(),delete Ff[this.id]},c})(),bi=(function(){function c(){}return c.getState=function(o,l){var s=yf(o,l);return Ao&&Ao.states.push(s),l&&l.batch&&c.batch(l.batch).state.add(s),s},c.from=function(o,l){return l=l||{},"clearProps"in l||(l.clearProps=!0),Sf(o,yf(l.targets||o.targets,{props:l.props||o.props,simple:l.simple,kill:!!l.kill}),l,-1)},c.to=function(o,l){return Sf(o,yf(l.targets||o.targets,{props:l.props||o.props,simple:l.simple,kill:!!l.kill}),l,1)},c.fromTo=function(o,l,s){return Sf(o,l,s)},c.fit=function(o,l,s){var f=s?si(s,zv):{},r=s||f,m=r.absolute,g=r.scale,v=r.getVars,p=r.props,y=r.runBackwards,w=r.onComplete,S=r.simple,C=s&&s.fitChild&&Ro(s.fitChild),_=Hf(l,p,S,o),A=Hf(o,0,S,_),D=p?js[p]:Ds,H=mt.context();return p&&Mv(f,_.props),Uo(A,D),y&&("immediateRender"in f||(f.immediateRender=!0),f.onComplete=function(){Cs(A),w&&w.apply(this,arguments)}),m&&hd(A,_),f=di(A,_,g||C,!f.duration&&p,C,f.duration||v?f:0),typeof s=="object"&&"zIndex"in s&&(f.zIndex=s.zIndex),H&&!v&&H.add(function(){return function(){return Cs(A)}}),v?f:f.duration?mt.to(A.element,f):null},c.makeAbsolute=function(o,l){return(o instanceof gn?o:new gn(o,l)).makeAbsolute()},c.batch=function(o){return o||(o="default"),Ff[o]||(Ff[o]=new Z3(o))},c.killFlipsOf=function(o,l){(o instanceof gn?o.targets:yi(o)).forEach(function(s){return s&&md(s._flip,l!==!1?1:2)})},c.isFlipping=function(o){var l=c.getByTarget(o);return!!l&&l.isActive()},c.getByTarget=function(o){return(Ro(o)||ws)._flip},c.getElementState=function(o,l){return new hl(Ro(o),l)},c.convertCoordinates=function(o,l,s){var f=Rn(l,!0,!0).multiply(Rn(o));return s?f.apply(s):f},c.register=function(o){if(Na=typeof document<"u"&&document.body,Na){mt=o,rd(Na),yi=mt.utils.toArray,kf=mt.core.getStyleSaver;var l=mt.utils.snap(.1);Wn=function(f,r){return l(parseFloat(f)+r)}}},c})();bi.version="3.14.2";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(bi);ul.registerPlugin(bi);const K3=({params:c})=>{const a=L.useRef(null),[o,l]=L.useState("final"),s=L.useRef(null),f=["final","plain","columns","grid"],r=()=>{var w;const m=(w=a.current)==null?void 0:w.querySelectorAll(".letter, .for-text, .gsap-text");if(!m)return;const g=bi.getState(m,{props:"color,backgroundColor",simple:!0}),p=(f.indexOf(o)+1)%f.length,y=f[p];l(y),setTimeout(()=>{bi.from(g,{absolute:!0,stagger:c.stagger,duration:c.duration,ease:"power2.inOut",spin:c.spinOnFinal&&y==="final",simple:!0,onEnter:(S,C)=>ul.fromTo(S,{opacity:0},{opacity:1,delay:C.duration()-.1}),onLeave:S=>ul.to(S,{opacity:0})})},0)};return L.useEffect(()=>{if(c.autoPlay){const m=o==="final"?3.5:c.interval;s.current=ul.delayedCall(m,r)}return()=>{var m;(m=s.current)==null||m.kill()}},[o,c.autoPlay,c.interval,c.stagger,c.duration]),h.jsxs("div",{ref:a,className:`relative w-full h-full flex overflow-hidden container-${o}`,style:{backgroundColor:c.bgColor,containerType:"size"},children:[h.jsxs("div",{className:`w-full h-full flex justify-center items-center ${o==="grid"||o==="columns"?"flex-wrap content-stretch items-stretch":""}`,children:[h.jsx("div",{className:"letter text-center flex items-center justify-center",style:{backgroundColor:o==="plain"?"transparent":c.colorF,color:o==="plain"?c.textColor:"#000",fontSize:`${c.fontSize}cqmax`,fontWeight:400,padding:o==="plain"?0:"2px 6px",flexBasis:o==="grid"?"50%":o==="columns"?"25%":"auto"},children:"F"}),h.jsx("div",{className:"letter text-center flex items-center justify-center",style:{backgroundColor:o==="plain"?"transparent":c.colorL,color:o==="plain"?c.textColor:"#000",fontSize:`${c.fontSize}cqmax`,fontWeight:400,padding:o==="plain"?0:"2px 6px",flexBasis:o==="grid"?"50%":o==="columns"?"25%":"auto"},children:"L"}),h.jsx("div",{className:"letter text-center flex items-center justify-center",style:{backgroundColor:o==="plain"?"transparent":c.colorI,color:o==="plain"?c.textColor:"#000",fontSize:`${c.fontSize}cqmax`,fontWeight:400,padding:o==="plain"?0:"2px 6px",flexBasis:o==="grid"?"50%":o==="columns"?"25%":"auto"},children:"I"}),h.jsx("div",{className:"letter text-center flex items-center justify-center",style:{backgroundColor:o==="plain"?"transparent":c.colorP,color:o==="plain"?c.textColor:"#000",fontSize:`${c.fontSize}cqmax`,fontWeight:400,padding:o==="plain"?0:"2px 6px",flexBasis:o==="grid"?"50%":o==="columns"?"25%":"auto"},children:"P"}),h.jsx("div",{className:"for-text",style:{fontSize:`${c.fontSize/2}cqmax`,color:c.textColor,padding:`2px ${c.fontSize*.16}cqmax`,fontWeight:300,display:o==="final"?"block":"none"},children:"for"}),h.jsx("div",{className:"gsap-text",style:{fontSize:`${c.fontSize/2}cqmax`,color:c.textColor,padding:"2px 0",fontWeight:600,display:o==="final"?"block":"none"},children:"GSAP"})]}),!c.autoPlay&&h.jsx("button",{onClick:r,className:"absolute bottom-5 right-5 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-colors",children:"Next Layout"})]})},I3={stagger:.07,duration:.7,autoPlay:!0,interval:1.5,spinOnFinal:!0,colorF:"#88ce02",colorL:"#f178b6",colorI:"#7dc8eb",colorP:"#0ae448",textColor:"#ffffff",bgColor:"#1a1a1a",fontSize:10},w1=[{id:"original",label:"Original",colors:{colorF:"#88ce02",colorL:"#f178b6",colorI:"#7dc8eb",colorP:"#0ae448"}},{id:"sunset",label:"Sunset",colors:{colorF:"#ff6b6b",colorL:"#feca57",colorI:"#ff9ff3",colorP:"#ee5a6f"}},{id:"ocean",label:"Ocean",colors:{colorF:"#00d2ff",colorL:"#3a7bd5",colorI:"#2196f3",colorP:"#00bcd4"}},{id:"forest",label:"Forest",colors:{colorF:"#56ab2f",colorL:"#a8e063",colorI:"#38ef7d",colorP:"#11998e"}}],us=({label:c,value:a,min:o,max:l,step:s,onChange:f})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(s>=1?0:2)})]}),h.jsx("input",{type:"range",min:o,max:l,step:s,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),li=({label:c,value:a,onChange:o})=>h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("div",{className:"w-4 h-4 rounded border border-neutral-200",style:{backgroundColor:a}})]}),h.jsx("input",{type:"color",value:a,onChange:l=>o(l.target.value),className:"w-full h-7 bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer"})]}),T1=({label:c,value:a,onChange:o})=>h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:c}),h.jsx("button",{onClick:()=>o(!a),className:`relative w-7 h-4 rounded-full transition-colors ${a?"bg-neutral-800":"bg-neutral-300"}`,children:h.jsx("span",{className:`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${a?"translate-x-3":"translate-x-0"}`})})]}),J3=({params:c,onChange:a})=>{const o=s=>{a({...c,...s.colors})},l=w1.find(s=>s.colors.colorF===c.colorF&&s.colors.colorL===c.colorL&&s.colors.colorI===c.colorI&&s.colors.colorP===c.colorP);return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Presets"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:w1.map(s=>h.jsx("button",{onClick:()=>o(s),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===s.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${s.colors.colorF}, ${s.colors.colorL}, ${s.colors.colorI}, ${s.colors.colorP})`},title:s.label},s.id))}),l&&h.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Letter Colors"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(li,{label:"F Color",value:c.colorF,onChange:s=>a({...c,colorF:s})}),h.jsx(li,{label:"L Color",value:c.colorL,onChange:s=>a({...c,colorL:s})}),h.jsx(li,{label:"I Color",value:c.colorI,onChange:s=>a({...c,colorI:s})}),h.jsx(li,{label:"P Color",value:c.colorP,onChange:s=>a({...c,colorP:s})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Background & Text"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(li,{label:"Background",value:c.bgColor,onChange:s=>a({...c,bgColor:s})}),h.jsx(li,{label:"Text Color",value:c.textColor,onChange:s=>a({...c,textColor:s})}),h.jsx(us,{label:"Font Size",value:c.fontSize,min:5,max:20,step:.5,onChange:s=>a({...c,fontSize:s})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[h.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx(us,{label:"Duration",value:c.duration,min:.3,max:2,step:.1,onChange:s=>a({...c,duration:s})}),h.jsx(us,{label:"Stagger",value:c.stagger,min:0,max:.3,step:.01,onChange:s=>a({...c,stagger:s})}),h.jsx(us,{label:"Interval",value:c.interval,min:.5,max:5,step:.1,onChange:s=>a({...c,interval:s})}),h.jsx(T1,{label:"Auto Play",value:c.autoPlay,onChange:s=>a({...c,autoPlay:s})}),h.jsx(T1,{label:"Spin on Final",value:c.spinOnFinal,onChange:s=>a({...c,spinOnFinal:s})})]})]})]})},W3={color1:"#8b5cf6",color2:"#06b6d4",speed:0,density:1,suction:0},$3={speed:.2,zoom:3,warpStrength:4,color1:"#000d33",color2:"#1a664d",color3:"#ffcc33"},e_={blockSize:1.5,spacing:2.5,timeSpeed:.8,mouseInfluence:1,fogStart:40,fogEnd:100,camDistance:80},t_={flowSpeed:.2,streakLength:1.5,zoom:2.5,turbulence:1.2,gridOpacity:.15},n_={speed:.5,twist:1,noise:1,width:4,color1:"#4f46e5",color2:"#06b6d4"},a_={speed:.3,scale:1,density:1,brightness:1,color1:"#3b0764",color2:"#06b6d4"},l_={speed:1,scale:1,hueShift:0,saturation:.7,brightness:1,warpStrength:.3},i_={speed:1,scale:1.2,hueSpeed:1,saturation:.7,brightness:.8,contrast:1.2},o_={speed:.2,zoom:3,colorShift:0,complexity:1,contrast:1},r_={speed:.5,height:2,smoothness:1,color1:"#2266ff",color2:"#9933ff"},s_={textGlow:5,textScale:1,terrainBrightness:.5},c_={waveSpeed:.5,colorShift:1,opacity:.4},u_={speed:1,glow:1,gridSize:1,color1:"#4040ff",color2:"#40a0ff"},f_={speed:1,gamma:2,accent1:"#ff1a80",accent2:"#ff801a",bg1:"#1a80ff",bg2:"#1a8099"},d_={speed:1,grain:.1,vignette:.5},h_={speed:1,layers:12,depth:1,turbulence:1,grain:.05,vignette:.5,color1:"#c44b32",color2:"#f0a050",color3:"#9ab4ff"},m_={scrollProgress:0,colWidth:.7,speed:.2,scale:.25,seed:.231,color:[.235,.635,.062]},p_={vortex:{name:"Vortex Portal",technique:"Simplex Noise + FBM + Polar Domain Warping"},lumina:{name:"Lumina Flow",technique:"Perlin Noise + Multi-Layer Domain Warping"},isometric:{name:"Isometric Flow",technique:"DDA Raymarching + AABB Collision + Procedural Animation"},flowfield:{name:"Flow Field",technique:"Curl Noise + Pseudo-LIC Advection + Procedural Heatmap"},tunnel:{name:"Warp Tunnel",technique:"Volumetric Raymarching + FBM Noise Displacement"},aura:{name:"Noise Aura",technique:"Volumetric Light Accumulation + Multi-Orb Lighting"},neon:{name:"Neon Noise",technique:"FBM + Domain Warping + HSV Color Mapping"},fluid:{name:"Fluid Flow",technique:"Double Domain Warping + FBM + HSV Gradients"},neuro:{name:"NeuroFlow",technique:"Simplex Noise + Hue Rotation + Dynamic Lines"},neonwave:{name:"Neonwave",technique:"3D Plane Stacking + FBM Terrain + HSV Gradients",credit:{author:"mrange",url:"https://www.shadertoy.com/view/7dyyRy",date:"2022-06-12"}},neontext:{name:"Neon Text",technique:"Sphere Raymarching + SDF Text + Neon Glow"},aurora:{name:"Aurora Cloudscape",technique:"Volumetric Clouds + Wave Motion + Color Gradients"},hypergrid:{name:"Hyper Grid",technique:"Grid Marching + Rodrigues Rotation + Glow Accumulation",credit:{author:"totetmatt",url:"https://www.shadertoy.com/view/lcjGWV",date:"2024-01-07"}},jellyfish:{name:"Luminescence",technique:"SDF Raymarching + Space Repetition + Volumetric Rendering",credit:{author:"BigWings",url:"https://www.shadertoy.com/view/MlKcDD",date:"2017-05-23"}},trainjourney:{name:"Train Journey",technique:"Multi-Layer Parallax + FBM Terrain + Procedural SDF",credit:{author:"mdb",url:"https://www.shadertoy.com/view/Ndc3zl",date:"2021-08-31"}},horizon:{name:"Horizon",technique:"Parametric Parallax + FBM Terrain + Depth Color Gradient"}},v_=()=>{const[c,a]=L.useState("shaders"),[o,l]=L.useState("vortex"),[s,f]=L.useState("gooey"),[r,m]=L.useState("echotrace"),[g,v]=L.useState(W3),[p,y]=L.useState($3),[w,S]=L.useState(e_),[C,_]=L.useState(t_),[A,D]=L.useState(n_),[H,E]=L.useState(a_),[G,O]=L.useState(l_),[Y,M]=L.useState(i_),[U,z]=L.useState(o_),[B,Z]=L.useState(r_),[W,$]=L.useState(s_),[ne,ae]=L.useState(c_),[k,J]=L.useState(u_),[ie,de]=L.useState(f_),[ge,N]=L.useState(d_),[P,te]=L.useState(h_),[ee,le]=L.useState(m_),[oe,ve]=L.useState(nb),[Ae,Me]=L.useState(C3),[st,vt]=L.useState(j3),[xn,Be]=L.useState(I3),[ke,yn]=L.useState(!1),St=p_[o];return h.jsxs("div",{className:"h-screen bg-[#f8f8f8] flex p-3 gap-3",children:[h.jsx(R2,{activeCategory:c,onCategoryChange:a}),h.jsx("div",{className:"flex-1 bg-white rounded-3xl flex flex-col overflow-hidden",children:c==="shaders"?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 flex-shrink-0",children:[h.jsx("span",{className:"text-[13px] font-medium text-neutral-700",children:St.name}),h.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400",children:St.technique}),St.credit&&h.jsxs("a",{href:St.credit.url,target:"_blank",rel:"noopener noreferrer",className:"text-[8px] text-neutral-400 hover:text-neutral-600 transition-colors",children:["by ",St.credit.author," · ",St.credit.date]}),h.jsx("div",{className:"flex-1"}),h.jsx("button",{onClick:()=>yn(!0),className:"w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors",children:h.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[h.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.2"}),h.jsx("path",{d:"M4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.17 7 5.5 6.5 5.75C6.25 5.88 6 6.08 6 6.4V6.75",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round"}),h.jsx("circle",{cx:"6",cy:"8.25",r:"0.5",fill:"currentColor"})]})})]}),h.jsxs("div",{className:"flex-1 flex min-h-0 px-5 gap-4",children:[h.jsx("div",{className:"flex-[3] flex flex-col min-h-0",children:h.jsxs("div",{className:"bg-neutral-100 rounded-2xl flex-1 overflow-hidden",children:[o==="vortex"&&h.jsx(L2,{params:g}),o==="lumina"&&h.jsx(F2,{params:p}),o==="isometric"&&h.jsx(V2,{params:w}),o==="flowfield"&&h.jsx(Q2,{params:C}),o==="tunnel"&&h.jsx(J2,{params:A}),o==="aura"&&h.jsx(ty,{params:H}),o==="neon"&&h.jsx(iy,{params:G}),o==="fluid"&&h.jsx(cy,{params:Y}),o==="neuro"&&h.jsx(hy,{params:U}),o==="neonwave"&&h.jsx(gy,{params:B}),o==="neontext"&&h.jsx(_y,{params:W}),o==="aurora"&&h.jsx(Cy,{params:ne}),o==="hypergrid"&&h.jsx(zy,{params:k}),o==="jellyfish"&&h.jsx(My,{params:ie}),o==="trainjourney"&&h.jsx(By,{params:ge}),o==="horizon"&&h.jsx(Gy,{params:P})]})}),h.jsx("div",{className:"flex-[2] flex flex-col min-h-0",children:h.jsx("div",{className:"h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden",children:h.jsxs("div",{className:"p-3 overflow-y-auto flex-1 min-h-0",children:[o==="vortex"&&h.jsx(U2,{params:g,onChange:v}),o==="lumina"&&h.jsx(H2,{params:p,onChange:y}),o==="isometric"&&h.jsx(Y2,{params:w,onChange:S}),o==="flowfield"&&h.jsx(Z2,{params:C,onChange:_}),o==="tunnel"&&h.jsx(W2,{params:A,onChange:D}),o==="aura"&&h.jsx(ny,{params:H,onChange:E}),o==="neon"&&h.jsx(oy,{params:G,onChange:O}),o==="fluid"&&h.jsx(uy,{params:Y,onChange:M}),o==="neuro"&&h.jsx(my,{params:U,onChange:z}),o==="neonwave"&&h.jsx(xy,{params:B,onChange:Z}),o==="neontext"&&h.jsx(Sy,{params:W,onChange:$}),o==="aurora"&&h.jsx(Ny,{params:ne,onChange:ae}),o==="hypergrid"&&h.jsx(Ey,{params:k,onChange:J}),o==="jellyfish"&&h.jsx(Oy,{params:ie,onChange:de}),o==="trainjourney"&&h.jsx(Fy,{params:ge,onChange:N}),o==="horizon"&&h.jsx(Vy,{params:P,onChange:te})]})})})]}),h.jsx(E2,{active:o,onSelect:l})]}):c==="demos"?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 flex-shrink-0",children:[h.jsx("span",{className:"text-[13px] font-medium text-neutral-700",children:s==="gooey"?"Gooey Overlay":"Parallax Scroll"}),h.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400",children:s==="gooey"?"Simplex Noise + Scroll-Driven Animation":"SVG + GSAP ScrollTrigger"}),h.jsx("div",{className:"flex-1"}),h.jsxs("a",{href:s==="gooey"?"https://codepen.io/ksenia-k/pen/NWmMxLg":"https://codepen.io/isladjan/pen/abdyPBw",target:"_blank",rel:"noopener noreferrer",className:"text-[8px] text-neutral-400 hover:text-neutral-600 transition-colors",children:["by ",s==="gooey"?"ksenia-k":"isladjan"," · CodePen"]}),h.jsx("button",{onClick:()=>yn(!0),className:"w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors",children:h.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[h.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.2"}),h.jsx("path",{d:"M4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.17 7 5.5 6.5 5.75C6.25 5.88 6 6.08 6 6.4V6.75",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round"}),h.jsx("circle",{cx:"6",cy:"8.25",r:"0.5",fill:"currentColor"})]})})]}),h.jsx("div",{className:"flex-1 flex min-h-0 px-5 gap-4",children:s==="gooey"?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"flex-[3] flex flex-col min-h-0",children:h.jsx("div",{className:"bg-[#fff0e5] rounded-2xl flex-1 overflow-hidden",children:h.jsx(Py,{params:ee})})}),h.jsx("div",{className:"flex-[2] flex flex-col min-h-0",children:h.jsx("div",{className:"h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden",children:h.jsx("div",{className:"p-3 overflow-y-auto flex-1 min-h-0",children:h.jsx(Ky,{params:ee,onChange:le})})})})]}):h.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:h.jsx("div",{className:"bg-white rounded-2xl flex-1 overflow-hidden",children:h.jsx(Iy,{})})})}),h.jsx(Wy,{active:s,onSelect:f})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 flex-shrink-0",children:[h.jsx("span",{className:"text-[13px] font-medium text-neutral-700",children:r==="echotrace"?"EchoTrace":r==="spotlight"?"Spotlight":r==="textmask"?"Text Mask":"FLIP"}),h.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400",children:r==="echotrace"?"Psychedelic Motion Trail":r==="spotlight"?"CSS Screen Blend Mode + GSAP":r==="textmask"?"SVG Mask + GSAP Bubble Reveal":"GSAP Flip Layout Animation"}),h.jsx("div",{className:"flex-1"})]}),h.jsxs("div",{className:"flex-1 flex min-h-0 px-5 gap-4",children:[h.jsx("div",{className:"flex-[3] flex flex-col min-h-0",children:h.jsxs("div",{className:`rounded-2xl flex-1 overflow-hidden ${r==="echotrace"?"bg-neutral-950":r==="textmask"?"bg-[#112b39]":"bg-white"}`,children:[r==="echotrace"&&h.jsx(tb,{params:oe}),r==="spotlight"&&h.jsx(T3,{params:Ae}),r==="textmask"&&h.jsx(z3,{}),r==="flip"&&h.jsx(K3,{params:xn})]})}),h.jsx("div",{className:"flex-[2] flex flex-col min-h-0",children:h.jsx("div",{className:"h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden",children:h.jsxs("div",{className:"p-3 overflow-y-auto flex-1 min-h-0",children:[r==="echotrace"&&h.jsx(ib,{params:oe,onChange:ve}),r==="spotlight"&&h.jsx(N3,{params:Ae,onChange:Me}),r==="textmask"&&h.jsx(E3,{params:st,onChange:vt}),r==="flip"&&h.jsx(J3,{params:xn,onChange:Be})]})})})]}),h.jsx(M3,{active:r,onSelect:m})]})}),ke&&h.jsx(j2,{guide:c==="shaders"?Cp[o]:c==="demos"?D2[s]:Cp[o],onClose:()=>yn(!1)})]})};h2.createRoot(document.getElementById("root")).render(h.jsx(i2.StrictMode,{children:h.jsx(v_,{})}));
