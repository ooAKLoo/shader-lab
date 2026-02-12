(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const r of f.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function fx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var yf={exports:{}},Dr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function O2(){if(Xh)return Dr;Xh=1;var o=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(l,c,f){var r=null;if(f!==void 0&&(r=""+f),c.key!==void 0&&(r=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:o,type:l,key:r,ref:c!==void 0?c:null,props:f}}return Dr.Fragment=a,Dr.jsx=i,Dr.jsxs=i,Dr}var Zh;function F2(){return Zh||(Zh=1,yf.exports=O2()),yf.exports}var u=F2(),Sf={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function G2(){if(Wh)return xe;Wh=1;var o=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),r=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),w=Symbol.iterator;function _(B){return B===null||typeof B!="object"?null:(B=w&&B[w]||B["@@iterator"],typeof B=="function"?B:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function j(B,Y,ae){this.props=B,this.context=Y,this.refs=T,this.updater=ae||N}j.prototype.isReactComponent={},j.prototype.setState=function(B,Y){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Y,"setState")},j.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function C(){}C.prototype=j.prototype;function A(B,Y,ae){this.props=B,this.context=Y,this.refs=T,this.updater=ae||N}var k=A.prototype=new C;k.constructor=A,S(k,j.prototype),k.isPureReactComponent=!0;var G=Array.isArray;function L(){}var M={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(B,Y,ae){var ee=ae.ref;return{$$typeof:o,type:B,key:Y,ref:ee!==void 0?ee:null,props:ae}}function F(B,Y){return D(B.type,Y,B.props)}function V(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function $(B){var Y={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(ae){return Y[ae]})}var Q=/\/+/g;function te(B,Y){return typeof B=="object"&&B!==null&&B.key!=null?$(""+B.key):Y.toString(36)}function le(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(L,L):(B.status="pending",B.then(function(Y){B.status==="pending"&&(B.status="fulfilled",B.value=Y)},function(Y){B.status==="pending"&&(B.status="rejected",B.reason=Y)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function U(B,Y,ae,ee,ne){var ie=typeof B;(ie==="undefined"||ie==="boolean")&&(B=null);var oe=!1;if(B===null)oe=!0;else switch(ie){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(B.$$typeof){case o:case a:oe=!0;break;case g:return oe=B._init,U(oe(B._payload),Y,ae,ee,ne)}}if(oe)return ne=ne(B),oe=ee===""?"."+te(B,0):ee,G(ne)?(ae="",oe!=null&&(ae=oe.replace(Q,"$&/")+"/"),U(ne,Y,ae,"",function(pe){return pe})):ne!=null&&(V(ne)&&(ne=F(ne,ae+(ne.key==null||B&&B.key===ne.key?"":(""+ne.key).replace(Q,"$&/")+"/")+oe)),Y.push(ne)),1;oe=0;var ve=ee===""?".":ee+":";if(G(B))for(var Re=0;Re<B.length;Re++)ee=B[Re],ie=ve+te(ee,Re),oe+=U(ee,Y,ae,ie,ne);else if(Re=_(B),typeof Re=="function")for(B=Re.call(B),Re=0;!(ee=B.next()).done;)ee=ee.value,ie=ve+te(ee,Re++),oe+=U(ee,Y,ae,ie,ne);else if(ie==="object"){if(typeof B.then=="function")return U(le(B),Y,ae,ee,ne);throw Y=String(B),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return oe}function W(B,Y,ae){if(B==null)return B;var ee=[],ne=0;return U(B,ee,"","",function(ie){return Y.call(ae,ie,ne++)}),ee}function re(B){if(B._status===-1){var Y=B._result;Y=Y(),Y.then(function(ae){(B._status===0||B._status===-1)&&(B._status=1,B._result=ae)},function(ae){(B._status===0||B._status===-1)&&(B._status=2,B._result=ae)}),B._status===-1&&(B._status=0,B._result=Y)}if(B._status===1)return B._result.default;throw B._result}var ce=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},me={map:W,forEach:function(B,Y,ae){W(B,function(){Y.apply(this,arguments)},ae)},count:function(B){var Y=0;return W(B,function(){Y++}),Y},toArray:function(B){return W(B,function(Y){return Y})||[]},only:function(B){if(!V(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return xe.Activity=b,xe.Children=me,xe.Component=j,xe.Fragment=i,xe.Profiler=c,xe.PureComponent=A,xe.StrictMode=l,xe.Suspense=x,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,xe.__COMPILER_RUNTIME={__proto__:null,c:function(B){return M.H.useMemoCache(B)}},xe.cache=function(B){return function(){return B.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(B,Y,ae){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var ee=S({},B.props),ne=B.key;if(Y!=null)for(ie in Y.key!==void 0&&(ne=""+Y.key),Y)!E.call(Y,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Y.ref===void 0||(ee[ie]=Y[ie]);var ie=arguments.length-2;if(ie===1)ee.children=ae;else if(1<ie){for(var oe=Array(ie),ve=0;ve<ie;ve++)oe[ve]=arguments[ve+2];ee.children=oe}return D(B.type,ne,ee)},xe.createContext=function(B){return B={$$typeof:r,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:f,_context:B},B},xe.createElement=function(B,Y,ae){var ee,ne={},ie=null;if(Y!=null)for(ee in Y.key!==void 0&&(ie=""+Y.key),Y)E.call(Y,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(ne[ee]=Y[ee]);var oe=arguments.length-2;if(oe===1)ne.children=ae;else if(1<oe){for(var ve=Array(oe),Re=0;Re<oe;Re++)ve[Re]=arguments[Re+2];ne.children=ve}if(B&&B.defaultProps)for(ee in oe=B.defaultProps,oe)ne[ee]===void 0&&(ne[ee]=oe[ee]);return D(B,ie,ne)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(B){return{$$typeof:m,render:B}},xe.isValidElement=V,xe.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:re}},xe.memo=function(B,Y){return{$$typeof:h,type:B,compare:Y===void 0?null:Y}},xe.startTransition=function(B){var Y=M.T,ae={};M.T=ae;try{var ee=B(),ne=M.S;ne!==null&&ne(ae,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(L,ce)}catch(ie){ce(ie)}finally{Y!==null&&ae.types!==null&&(Y.types=ae.types),M.T=Y}},xe.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},xe.use=function(B){return M.H.use(B)},xe.useActionState=function(B,Y,ae){return M.H.useActionState(B,Y,ae)},xe.useCallback=function(B,Y){return M.H.useCallback(B,Y)},xe.useContext=function(B){return M.H.useContext(B)},xe.useDebugValue=function(){},xe.useDeferredValue=function(B,Y){return M.H.useDeferredValue(B,Y)},xe.useEffect=function(B,Y){return M.H.useEffect(B,Y)},xe.useEffectEvent=function(B){return M.H.useEffectEvent(B)},xe.useId=function(){return M.H.useId()},xe.useImperativeHandle=function(B,Y,ae){return M.H.useImperativeHandle(B,Y,ae)},xe.useInsertionEffect=function(B,Y){return M.H.useInsertionEffect(B,Y)},xe.useLayoutEffect=function(B,Y){return M.H.useLayoutEffect(B,Y)},xe.useMemo=function(B,Y){return M.H.useMemo(B,Y)},xe.useOptimistic=function(B,Y){return M.H.useOptimistic(B,Y)},xe.useReducer=function(B,Y,ae){return M.H.useReducer(B,Y,ae)},xe.useRef=function(B){return M.H.useRef(B)},xe.useState=function(B){return M.H.useState(B)},xe.useSyncExternalStore=function(B,Y,ae){return M.H.useSyncExternalStore(B,Y,ae)},xe.useTransition=function(){return M.H.useTransition()},xe.version="19.2.4",xe}var Kh;function wd(){return Kh||(Kh=1,Sf.exports=G2()),Sf.exports}var R=wd();const dx=fx(R);var _f={exports:{}},zr={},wf={exports:{}},Cf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function I2(){return Qh||(Qh=1,(function(o){function a(U,W){var re=U.length;U.push(W);e:for(;0<re;){var ce=re-1>>>1,me=U[ce];if(0<c(me,W))U[ce]=W,U[re]=me,re=ce;else break e}}function i(U){return U.length===0?null:U[0]}function l(U){if(U.length===0)return null;var W=U[0],re=U.pop();if(re!==W){U[0]=re;e:for(var ce=0,me=U.length,B=me>>>1;ce<B;){var Y=2*(ce+1)-1,ae=U[Y],ee=Y+1,ne=U[ee];if(0>c(ae,re))ee<me&&0>c(ne,ae)?(U[ce]=ne,U[ee]=re,ce=ee):(U[ce]=ae,U[Y]=re,ce=Y);else if(ee<me&&0>c(ne,re))U[ce]=ne,U[ee]=re,ce=ee;else break e}}return W}function c(U,W){var re=U.sortIndex-W.sortIndex;return re!==0?re:U.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var r=Date,m=r.now();o.unstable_now=function(){return r.now()-m}}var x=[],h=[],g=1,b=null,w=3,_=!1,N=!1,S=!1,T=!1,j=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function k(U){for(var W=i(h);W!==null;){if(W.callback===null)l(h);else if(W.startTime<=U)l(h),W.sortIndex=W.expirationTime,a(x,W);else break;W=i(h)}}function G(U){if(S=!1,k(U),!N)if(i(x)!==null)N=!0,L||(L=!0,$());else{var W=i(h);W!==null&&le(G,W.startTime-U)}}var L=!1,M=-1,E=5,D=-1;function F(){return T?!0:!(o.unstable_now()-D<E)}function V(){if(T=!1,L){var U=o.unstable_now();D=U;var W=!0;try{e:{N=!1,S&&(S=!1,C(M),M=-1),_=!0;var re=w;try{t:{for(k(U),b=i(x);b!==null&&!(b.expirationTime>U&&F());){var ce=b.callback;if(typeof ce=="function"){b.callback=null,w=b.priorityLevel;var me=ce(b.expirationTime<=U);if(U=o.unstable_now(),typeof me=="function"){b.callback=me,k(U),W=!0;break t}b===i(x)&&l(x),k(U)}else l(x);b=i(x)}if(b!==null)W=!0;else{var B=i(h);B!==null&&le(G,B.startTime-U),W=!1}}break e}finally{b=null,w=re,_=!1}W=void 0}}finally{W?$():L=!1}}}var $;if(typeof A=="function")$=function(){A(V)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,te=Q.port2;Q.port1.onmessage=V,$=function(){te.postMessage(null)}}else $=function(){j(V,0)};function le(U,W){M=j(function(){U(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return w},o.unstable_next=function(U){switch(w){case 1:case 2:case 3:var W=3;break;default:W=w}var re=w;w=W;try{return U()}finally{w=re}},o.unstable_requestPaint=function(){T=!0},o.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var re=w;w=U;try{return W()}finally{w=re}},o.unstable_scheduleCallback=function(U,W,re){var ce=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ce+re:ce):re=ce,U){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=re+me,U={id:g++,callback:W,priorityLevel:U,startTime:re,expirationTime:me,sortIndex:-1},re>ce?(U.sortIndex=re,a(h,U),i(x)===null&&U===i(h)&&(S?(C(M),M=-1):S=!0,le(G,re-ce))):(U.sortIndex=me,a(x,U),N||_||(N=!0,L||(L=!0,$()))),U},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(U){var W=w;return function(){var re=w;w=W;try{return U.apply(this,arguments)}finally{w=re}}}})(Cf)),Cf}var Jh;function U2(){return Jh||(Jh=1,wf.exports=I2()),wf.exports}var Af={exports:{}},wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function H2(){if($h)return wt;$h=1;var o=wd();function a(x){var h="https://react.dev/errors/"+x;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+x+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(x,h,g){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:x,containerInfo:h,implementation:g}}var r=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,h){if(x==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,wt.createPortal=function(x,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(a(299));return f(x,h,null,g)},wt.flushSync=function(x){var h=r.T,g=l.p;try{if(r.T=null,l.p=2,x)return x()}finally{r.T=h,l.p=g,l.d.f()}},wt.preconnect=function(x,h){typeof x=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,l.d.C(x,h))},wt.prefetchDNS=function(x){typeof x=="string"&&l.d.D(x)},wt.preinit=function(x,h){if(typeof x=="string"&&h&&typeof h.as=="string"){var g=h.as,b=m(g,h.crossOrigin),w=typeof h.integrity=="string"?h.integrity:void 0,_=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?l.d.S(x,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:_}):g==="script"&&l.d.X(x,{crossOrigin:b,integrity:w,fetchPriority:_,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},wt.preinitModule=function(x,h){if(typeof x=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=m(h.as,h.crossOrigin);l.d.M(x,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&l.d.M(x)},wt.preload=function(x,h){if(typeof x=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,b=m(g,h.crossOrigin);l.d.L(x,g,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},wt.preloadModule=function(x,h){if(typeof x=="string")if(h){var g=m(h.as,h.crossOrigin);l.d.m(x,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else l.d.m(x)},wt.requestFormReset=function(x){l.d.r(x)},wt.unstable_batchedUpdates=function(x,h){return x(h)},wt.useFormState=function(x,h,g){return r.H.useFormState(x,h,g)},wt.useFormStatus=function(){return r.H.useHostTransitionStatus()},wt.version="19.2.4",wt}var eg;function mx(){if(eg)return Af.exports;eg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),Af.exports=H2(),Af.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function P2(){if(tg)return zr;tg=1;var o=U2(),a=wd(),i=mx();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function r(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(l(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,s=t;;){var d=n.return;if(d===null)break;var p=d.alternate;if(p===null){if(s=d.return,s!==null){n=s;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===n)return x(d),e;if(p===s)return x(d),t;p=p.sibling}throw Error(l(188))}if(n.return!==s.return)n=d,s=p;else{for(var v=!1,y=d.child;y;){if(y===n){v=!0,n=d,s=p;break}if(y===s){v=!0,s=d,n=p;break}y=y.sibling}if(!v){for(y=p.child;y;){if(y===n){v=!0,n=p,s=d;break}if(y===s){v=!0,s=p,n=d;break}y=y.sibling}if(!v)throw Error(l(189))}}if(n.alternate!==s)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,w=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),A=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case j:return"Profiler";case T:return"StrictMode";case G:return"Suspense";case L:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case A:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case E:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}var le=Array.isArray,U=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},ce=[],me=-1;function B(e){return{current:e}}function Y(e){0>me||(e.current=ce[me],ce[me]=null,me--)}function ae(e,t){me++,ce[me]=e.current,e.current=t}var ee=B(null),ne=B(null),ie=B(null),oe=B(null);function ve(e,t){switch(ae(ie,t),ae(ne,e),ae(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gh(t),e=xh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(ee),ae(ee,e)}function Re(){Y(ee),Y(ne),Y(ie)}function pe(e){e.memoizedState!==null&&ae(oe,e);var t=ee.current,n=xh(t,e.type);t!==n&&(ae(ne,e),ae(ee,n))}function qe(e){ne.current===e&&(Y(ee),Y(ne)),oe.current===e&&(Y(oe),Tr._currentValue=re)}var ct,Te;function Ee(e){if(ct===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ct=t&&t[1]||"",Te=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ct+e+Te}var Ut=!1;function Na(e,t){if(!e||Ut)return"";Ut=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(X){var q=X}Reflect.construct(e,[],J)}else{try{J.call()}catch(X){q=X}e.call(J.prototype)}}else{try{throw Error()}catch(X){q=X}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(X){if(X&&q&&typeof X.stack=="string")return[X.stack,q.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=s.DetermineComponentFrameRoot(),v=p[0],y=p[1];if(v&&y){var z=v.split(`
`),P=y.split(`
`);for(d=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;d<P.length&&!P[d].includes("DetermineComponentFrameRoot");)d++;if(s===z.length||d===P.length)for(s=z.length-1,d=P.length-1;1<=s&&0<=d&&z[s]!==P[d];)d--;for(;1<=s&&0<=d;s--,d--)if(z[s]!==P[d]){if(s!==1||d!==1)do if(s--,d--,0>d||z[s]!==P[d]){var Z=`
`+z[s].replace(" at new "," at ");return e.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",e.displayName)),Z}while(1<=s&&0<=d);break}}}finally{Ut=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ee(n):""}function Ht(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee("Lazy");case 13:return e.child!==t&&t!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Na(e.type,!1);case 11:return Na(e.type.render,!1);case 1:return Na(e.type,!0);case 31:return Ee("Activity");default:return""}}function he(e){try{var t="",n=null;do t+=Ht(e,n),n=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var xa=Object.prototype.hasOwnProperty,fn=o.unstable_scheduleCallback,Oa=o.unstable_cancelCallback,ge=o.unstable_shouldYield,Tl=o.unstable_requestPaint,yt=o.unstable_now,ac=o.unstable_getCurrentPriorityLevel,Gi=o.unstable_ImmediatePriority,lo=o.unstable_UserBlockingPriority,Xn=o.unstable_NormalPriority,nc=o.unstable_LowPriority,Ii=o.unstable_IdlePriority,lc=o.log,io=o.unstable_setDisableYieldValue,Zn=null,St=null;function Ra(e){if(typeof lc=="function"&&io(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(Zn,e)}catch{}}var _t=Math.clz32?Math.clz32:Wn,ic=Math.log,rc=Math.LN2;function Wn(e){return e>>>=0,e===0?32:31-(ic(e)/rc|0)|0}var va=256,ro=262144,oo=4194304;function Kn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function so(e,t,n){var s=e.pendingLanes;if(s===0)return 0;var d=0,p=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var y=s&134217727;return y!==0?(s=y&~p,s!==0?d=Kn(s):(v&=y,v!==0?d=Kn(v):n||(n=y&~e,n!==0&&(d=Kn(n))))):(y=s&~p,y!==0?d=Kn(y):v!==0?d=Kn(v):n||(n=s&~e,n!==0&&(d=Kn(n)))),d===0?0:t!==0&&t!==d&&(t&p)===0&&(p=d&-d,n=t&-t,p>=n||p===32&&(n&4194048)!==0)?t:d}function Ui(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function C1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(){var e=oo;return oo<<=1,(oo&62914560)===0&&(oo=4194304),e}function oc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function A1(e,t,n,s,d,p){var v=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,z=e.expirationTimes,P=e.hiddenUpdates;for(n=v&~n;0<n;){var Z=31-_t(n),J=1<<Z;y[Z]=0,z[Z]=-1;var q=P[Z];if(q!==null)for(P[Z]=null,Z=0;Z<q.length;Z++){var X=q[Z];X!==null&&(X.lane&=-536870913)}n&=~J}s!==0&&Jd(e,s,0),p!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=p&~(v&~t))}function Jd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-_t(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|n&261930}function $d(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-_t(n),d=1<<s;d&t|e[s]&t&&(e[s]|=t),n&=~d}}function e0(e,t){var n=t&-t;return n=(n&42)!==0?1:sc(n),(n&(e.suspendedLanes|t))!==0?0:n}function sc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function t0(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:Ih(e.type))}function a0(e,t){var n=W.p;try{return W.p=e,t()}finally{W.p=n}}var dn=Math.random().toString(36).slice(2),mt="__reactFiber$"+dn,jt="__reactProps$"+dn,jl="__reactContainer$"+dn,uc="__reactEvents$"+dn,N1="__reactListeners$"+dn,R1="__reactHandles$"+dn,n0="__reactResources$"+dn,Pi="__reactMarker$"+dn;function fc(e){delete e[mt],delete e[jt],delete e[uc],delete e[N1],delete e[R1]}function Ml(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jl]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ch(e);e!==null;){if(n=e[mt])return n;e=Ch(e)}return t}e=n,n=e.parentNode}return null}function El(e){if(e=e[mt]||e[jl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function qi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Dl(e){var t=e[n0];return t||(t=e[n0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[Pi]=!0}var l0=new Set,i0={};function Qn(e,t){zl(e,t),zl(e+"Capture",t)}function zl(e,t){for(i0[e]=t,e=0;e<t.length;e++)l0.add(t[e])}var T1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),r0={},o0={};function j1(e){return xa.call(o0,e)?!0:xa.call(r0,e)?!1:T1.test(e)?o0[e]=!0:(r0[e]=!0,!1)}function co(e,t,n){if(j1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function uo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Fa(e,t,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+s)}}function na(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function s0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function M1(e,t,n){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,p=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(v){n=""+v,p.call(this,v)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return n},setValue:function(v){n=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dc(e){if(!e._valueTracker){var t=s0(e)?"checked":"value";e._valueTracker=M1(e,t,""+e[t])}}function c0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=s0(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var E1=/[\n"\\]/g;function la(e){return e.replace(E1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function mc(e,t,n,s,d,p,v,y){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),t!=null?v==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+na(t)):e.value!==""+na(t)&&(e.value=""+na(t)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),t!=null?pc(e,v,na(t)):n!=null?pc(e,v,na(n)):s!=null&&e.removeAttribute("value"),d==null&&p!=null&&(e.defaultChecked=!!p),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+na(y):e.removeAttribute("name")}function u0(e,t,n,s,d,p,v,y){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),t!=null||n!=null){if(!(p!=="submit"&&p!=="reset"||t!=null)){dc(e);return}n=n!=null?""+na(n):"",t=t!=null?""+na(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}s=s??d,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=y?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),dc(e)}function pc(e,t,n){t==="number"&&fo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function kl(e,t,n,s){if(e=e.options,t){t={};for(var d=0;d<n.length;d++)t["$"+n[d]]=!0;for(n=0;n<e.length;n++)d=t.hasOwnProperty("$"+e[n].value),e[n].selected!==d&&(e[n].selected=d),d&&s&&(e[n].defaultSelected=!0)}else{for(n=""+na(n),t=null,d=0;d<e.length;d++){if(e[d].value===n){e[d].selected=!0,s&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function f0(e,t,n){if(t!=null&&(t=""+na(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+na(n):""}function d0(e,t,n,s){if(t==null){if(s!=null){if(n!=null)throw Error(l(92));if(le(s)){if(1<s.length)throw Error(l(93));s=s[0]}n=s}n==null&&(n=""),t=n}n=na(t),e.defaultValue=n,s=e.textContent,s===n&&s!==""&&s!==null&&(e.value=s),dc(e)}function Ll(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var D1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function m0(e,t,n){var s=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,n):typeof n!="number"||n===0||D1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function p0(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var d in t)s=t[d],t.hasOwnProperty(d)&&n[d]!==s&&m0(e,d,s)}else for(var p in t)t.hasOwnProperty(p)&&m0(e,p,t[p])}function hc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),k1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mo(e){return k1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ga(){}var gc=null;function xc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Ol=null;function h0(e){var t=El(e);if(t&&(e=t.stateNode)){var n=e[jt]||null;e:switch(e=t.stateNode,t.type){case"input":if(mc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+la(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var d=s[jt]||null;if(!d)throw Error(l(90));mc(s,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<n.length;t++)s=n[t],s.form===e.form&&c0(s)}break e;case"textarea":f0(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&kl(e,!!n.multiple,t,!1)}}}var vc=!1;function g0(e,t,n){if(vc)return e(t,n);vc=!0;try{var s=e(t);return s}finally{if(vc=!1,(Bl!==null||Ol!==null)&&(es(),Bl&&(t=Bl,e=Ol,Ol=Bl=null,h0(t),e)))for(t=0;t<e.length;t++)h0(e[t])}}function Vi(e,t){var n=e.stateNode;if(n===null)return null;var s=n[jt]||null;if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bc=!1;if(Ia)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){bc=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{bc=!1}var mn=null,yc=null,po=null;function x0(){if(po)return po;var e,t=yc,n=t.length,s,d="value"in mn?mn.value:mn.textContent,p=d.length;for(e=0;e<n&&t[e]===d[e];e++);var v=n-e;for(s=1;s<=v&&t[n-s]===d[p-s];s++);return po=d.slice(e,1<s?1-s:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function v0(){return!1}function Mt(e){function t(n,s,d,p,v){this._reactName=n,this._targetInst=d,this.type=s,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(p):p[y]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?go:v0,this.isPropagationStopped=v0,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xo=Mt(Jn),Xi=b({},Jn,{view:0,detail:0}),L1=Mt(Xi),Sc,_c,Zi,vo=b({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zi&&(Zi&&e.type==="mousemove"?(Sc=e.screenX-Zi.screenX,_c=e.screenY-Zi.screenY):_c=Sc=0,Zi=e),Sc)},movementY:function(e){return"movementY"in e?e.movementY:_c}}),b0=Mt(vo),B1=b({},vo,{dataTransfer:0}),O1=Mt(B1),F1=b({},Xi,{relatedTarget:0}),wc=Mt(F1),G1=b({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),I1=Mt(G1),U1=b({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H1=Mt(U1),P1=b({},Jn,{data:0}),y0=Mt(P1),q1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Y1[e])?!!t[e]:!1}function Cc(){return X1}var Z1=b({},Xi,{key:function(e){if(e.key){var t=q1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W1=Mt(Z1),K1=b({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S0=Mt(K1),Q1=b({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),J1=Mt(Q1),$1=b({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ev=Mt($1),tv=b({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),av=Mt(tv),nv=b({},Jn,{newState:0,oldState:0}),lv=Mt(nv),iv=[9,13,27,32],Ac=Ia&&"CompositionEvent"in window,Wi=null;Ia&&"documentMode"in document&&(Wi=document.documentMode);var rv=Ia&&"TextEvent"in window&&!Wi,_0=Ia&&(!Ac||Wi&&8<Wi&&11>=Wi),w0=" ",C0=!1;function A0(e,t){switch(e){case"keyup":return iv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fl=!1;function ov(e,t){switch(e){case"compositionend":return N0(t);case"keypress":return t.which!==32?null:(C0=!0,w0);case"textInput":return e=t.data,e===w0&&C0?null:e;default:return null}}function sv(e,t){if(Fl)return e==="compositionend"||!Ac&&A0(e,t)?(e=x0(),po=yc=mn=null,Fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _0&&t.locale!=="ko"?null:t.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function R0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cv[e.type]:t==="textarea"}function T0(e,t,n,s){Bl?Ol?Ol.push(s):Ol=[s]:Bl=s,t=os(t,"onChange"),0<t.length&&(n=new xo("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Ki=null,Qi=null;function uv(e){uh(e,0)}function bo(e){var t=qi(e);if(c0(t))return e}function j0(e,t){if(e==="change")return t}var M0=!1;if(Ia){var Nc;if(Ia){var Rc="oninput"in document;if(!Rc){var E0=document.createElement("div");E0.setAttribute("oninput","return;"),Rc=typeof E0.oninput=="function"}Nc=Rc}else Nc=!1;M0=Nc&&(!document.documentMode||9<document.documentMode)}function D0(){Ki&&(Ki.detachEvent("onpropertychange",z0),Qi=Ki=null)}function z0(e){if(e.propertyName==="value"&&bo(Qi)){var t=[];T0(t,Qi,e,xc(e)),g0(uv,t)}}function fv(e,t,n){e==="focusin"?(D0(),Ki=t,Qi=n,Ki.attachEvent("onpropertychange",z0)):e==="focusout"&&D0()}function dv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo(Qi)}function mv(e,t){if(e==="click")return bo(t)}function pv(e,t){if(e==="input"||e==="change")return bo(t)}function hv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:hv;function Ji(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var d=n[s];if(!xa.call(t,d)||!Pt(e[d],t[d]))return!1}return!0}function k0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function L0(e,t){var n=k0(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=k0(n)}}function B0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?B0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function O0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=fo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fo(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var gv=Ia&&"documentMode"in document&&11>=document.documentMode,Gl=null,jc=null,$i=null,Mc=!1;function F0(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mc||Gl==null||Gl!==fo(s)||(s=Gl,"selectionStart"in s&&Tc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),$i&&Ji($i,s)||($i=s,s=os(jc,"onSelect"),0<s.length&&(t=new xo("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Gl)))}function $n(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Il={animationend:$n("Animation","AnimationEnd"),animationiteration:$n("Animation","AnimationIteration"),animationstart:$n("Animation","AnimationStart"),transitionrun:$n("Transition","TransitionRun"),transitionstart:$n("Transition","TransitionStart"),transitioncancel:$n("Transition","TransitionCancel"),transitionend:$n("Transition","TransitionEnd")},Ec={},G0={};Ia&&(G0=document.createElement("div").style,"AnimationEvent"in window||(delete Il.animationend.animation,delete Il.animationiteration.animation,delete Il.animationstart.animation),"TransitionEvent"in window||delete Il.transitionend.transition);function el(e){if(Ec[e])return Ec[e];if(!Il[e])return e;var t=Il[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in G0)return Ec[e]=t[n];return e}var I0=el("animationend"),U0=el("animationiteration"),H0=el("animationstart"),xv=el("transitionrun"),vv=el("transitionstart"),bv=el("transitioncancel"),P0=el("transitionend"),q0=new Map,Dc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dc.push("scrollEnd");function ba(e,t){q0.set(e,t),Qn(t,[e])}var yo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ia=[],Ul=0,zc=0;function So(){for(var e=Ul,t=zc=Ul=0;t<e;){var n=ia[t];ia[t++]=null;var s=ia[t];ia[t++]=null;var d=ia[t];ia[t++]=null;var p=ia[t];if(ia[t++]=null,s!==null&&d!==null){var v=s.pending;v===null?d.next=d:(d.next=v.next,v.next=d),s.pending=d}p!==0&&V0(n,d,p)}}function _o(e,t,n,s){ia[Ul++]=e,ia[Ul++]=t,ia[Ul++]=n,ia[Ul++]=s,zc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function kc(e,t,n,s){return _o(e,t,n,s),wo(e)}function tl(e,t){return _o(e,null,null,t),wo(e)}function V0(e,t,n){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n);for(var d=!1,p=e.return;p!==null;)p.childLanes|=n,s=p.alternate,s!==null&&(s.childLanes|=n),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(d=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,d&&t!==null&&(d=31-_t(n),e=p.hiddenUpdates,s=e[d],s===null?e[d]=[t]:s.push(t),t.lane=n|536870912),p):null}function wo(e){if(50<Sr)throw Sr=0,Pu=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hl={};function yv(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,s){return new yv(e,t,n,s)}function Lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ua(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Y0(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Co(e,t,n,s,d,p){var v=0;if(s=e,typeof e=="function")Lc(e)&&(v=1);else if(typeof e=="string")v=A2(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=qt(31,n,t,d),e.elementType=D,e.lanes=p,e;case S:return al(n.children,d,p,t);case T:v=8,d|=24;break;case j:return e=qt(12,n,t,d|2),e.elementType=j,e.lanes=p,e;case G:return e=qt(13,n,t,d),e.elementType=G,e.lanes=p,e;case L:return e=qt(19,n,t,d),e.elementType=L,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:v=10;break e;case C:v=9;break e;case k:v=11;break e;case M:v=14;break e;case E:v=16,s=null;break e}v=29,n=Error(l(130,e===null?"null":typeof e,"")),s=null}return t=qt(v,n,t,d),t.elementType=e,t.type=s,t.lanes=p,t}function al(e,t,n,s){return e=qt(7,e,s,t),e.lanes=n,e}function Bc(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function X0(e){var t=qt(18,null,null,0);return t.stateNode=e,t}function Oc(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Z0=new WeakMap;function ra(e,t){if(typeof e=="object"&&e!==null){var n=Z0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:he(t)},Z0.set(e,t),t)}return{value:e,source:t,stack:he(t)}}var Pl=[],ql=0,Ao=null,er=0,oa=[],sa=0,pn=null,Ta=1,ja="";function Ha(e,t){Pl[ql++]=er,Pl[ql++]=Ao,Ao=e,er=t}function W0(e,t,n){oa[sa++]=Ta,oa[sa++]=ja,oa[sa++]=pn,pn=e;var s=Ta;e=ja;var d=32-_t(s)-1;s&=~(1<<d),n+=1;var p=32-_t(t)+d;if(30<p){var v=d-d%5;p=(s&(1<<v)-1).toString(32),s>>=v,d-=v,Ta=1<<32-_t(t)+d|n<<d|s,ja=p+e}else Ta=1<<p|n<<d|s,ja=e}function Fc(e){e.return!==null&&(Ha(e,1),W0(e,1,0))}function Gc(e){for(;e===Ao;)Ao=Pl[--ql],Pl[ql]=null,er=Pl[--ql],Pl[ql]=null;for(;e===pn;)pn=oa[--sa],oa[sa]=null,ja=oa[--sa],oa[sa]=null,Ta=oa[--sa],oa[sa]=null}function K0(e,t){oa[sa++]=Ta,oa[sa++]=ja,oa[sa++]=pn,Ta=t.id,ja=t.overflow,pn=e}var pt=null,Ue=null,Ae=!1,hn=null,ca=!1,Ic=Error(l(519));function gn(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tr(ra(t,e)),Ic}function Q0(e){var t=e.stateNode,n=e.type,s=e.memoizedProps;switch(t[mt]=e,t[jt]=s,n){case"dialog":_e("cancel",t),_e("close",t);break;case"iframe":case"object":case"embed":_e("load",t);break;case"video":case"audio":for(n=0;n<wr.length;n++)_e(wr[n],t);break;case"source":_e("error",t);break;case"img":case"image":case"link":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"input":_e("invalid",t),u0(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_e("invalid",t);break;case"textarea":_e("invalid",t),d0(t,s.value,s.defaultValue,s.children)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||s.suppressHydrationWarning===!0||ph(t.textContent,n)?(s.popover!=null&&(_e("beforetoggle",t),_e("toggle",t)),s.onScroll!=null&&_e("scroll",t),s.onScrollEnd!=null&&_e("scrollend",t),s.onClick!=null&&(t.onclick=Ga),t=!0):t=!1,t||gn(e,!0)}function J0(e){for(pt=e.return;pt;)switch(pt.tag){case 5:case 31:case 13:ca=!1;return;case 27:case 3:ca=!0;return;default:pt=pt.return}}function Vl(e){if(e!==pt)return!1;if(!Ae)return J0(e),Ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||lf(e.type,e.memoizedProps)),n=!n),n&&Ue&&gn(e),J0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ue=wh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ue=wh(e)}else t===27?(t=Ue,Mn(e.type)?(e=uf,uf=null,Ue=e):Ue=t):Ue=pt?fa(e.stateNode.nextSibling):null;return!0}function nl(){Ue=pt=null,Ae=!1}function Uc(){var e=hn;return e!==null&&(kt===null?kt=e:kt.push.apply(kt,e),hn=null),e}function tr(e){hn===null?hn=[e]:hn.push(e)}var Hc=B(null),ll=null,Pa=null;function xn(e,t,n){ae(Hc,t._currentValue),t._currentValue=n}function qa(e){e._currentValue=Hc.current,Y(Hc)}function Pc(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function qc(e,t,n,s){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var p=d.dependencies;if(p!==null){var v=d.child;p=p.firstContext;e:for(;p!==null;){var y=p;p=d;for(var z=0;z<t.length;z++)if(y.context===t[z]){p.lanes|=n,y=p.alternate,y!==null&&(y.lanes|=n),Pc(p.return,n,e),s||(v=null);break e}p=y.next}}else if(d.tag===18){if(v=d.return,v===null)throw Error(l(341));v.lanes|=n,p=v.alternate,p!==null&&(p.lanes|=n),Pc(v,n,e),v=null}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===e){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}}function Yl(e,t,n,s){e=null;for(var d=t,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var v=d.alternate;if(v===null)throw Error(l(387));if(v=v.memoizedProps,v!==null){var y=d.type;Pt(d.pendingProps.value,v.value)||(e!==null?e.push(y):e=[y])}}else if(d===oe.current){if(v=d.alternate,v===null)throw Error(l(387));v.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Tr):e=[Tr])}d=d.return}e!==null&&qc(t,e,n,s),t.flags|=262144}function No(e){for(e=e.firstContext;e!==null;){if(!Pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function il(e){ll=e,Pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return $0(ll,e)}function Ro(e,t){return ll===null&&il(e),$0(e,t)}function $0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Pa===null){if(e===null)throw Error(l(308));Pa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Pa=Pa.next=t;return n}var Sv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},_v=o.unstable_scheduleCallback,wv=o.unstable_NormalPriority,nt={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vc(){return{controller:new Sv,data:new Map,refCount:0}}function ar(e){e.refCount--,e.refCount===0&&_v(wv,function(){e.controller.abort()})}var nr=null,Yc=0,Xl=0,Zl=null;function Cv(e,t){if(nr===null){var n=nr=[];Yc=0,Xl=Wu(),Zl={status:"pending",value:void 0,then:function(s){n.push(s)}}}return Yc++,t.then(em,em),t}function em(){if(--Yc===0&&nr!==null){Zl!==null&&(Zl.status="fulfilled");var e=nr;nr=null,Xl=0,Zl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Av(e,t){var n=[],s={status:"pending",value:null,reason:null,then:function(d){n.push(d)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var d=0;d<n.length;d++)(0,n[d])(t)},function(d){for(s.status="rejected",s.reason=d,d=0;d<n.length;d++)(0,n[d])(void 0)}),s}var tm=U.S;U.S=function(e,t){Fp=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Cv(e,t),tm!==null&&tm(e,t)};var rl=B(null);function Xc(){var e=rl.current;return e!==null?e:Fe.pooledCache}function To(e,t){t===null?ae(rl,rl.current):ae(rl,t.pool)}function am(){var e=Xc();return e===null?null:{parent:nt._currentValue,pool:e}}var Wl=Error(l(460)),Zc=Error(l(474)),jo=Error(l(542)),Mo={then:function(){}};function nm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lm(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ga,Ga),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,rm(e),e;default:if(typeof t.status=="string")t.then(Ga,Ga);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=s}},function(s){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,rm(e),e}throw sl=t,Wl}}function ol(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(sl=n,Wl):n}}var sl=null;function im(){if(sl===null)throw Error(l(459));var e=sl;return sl=null,e}function rm(e){if(e===Wl||e===jo)throw Error(l(483))}var Kl=null,lr=0;function Eo(e){var t=lr;return lr+=1,Kl===null&&(Kl=[]),lm(Kl,e,t)}function ir(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Do(e,t){throw t.$$typeof===w?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function om(e){function t(I,O){if(e){var H=I.deletions;H===null?(I.deletions=[O],I.flags|=16):H.push(O)}}function n(I,O){if(!e)return null;for(;O!==null;)t(I,O),O=O.sibling;return null}function s(I){for(var O=new Map;I!==null;)I.key!==null?O.set(I.key,I):O.set(I.index,I),I=I.sibling;return O}function d(I,O){return I=Ua(I,O),I.index=0,I.sibling=null,I}function p(I,O,H){return I.index=H,e?(H=I.alternate,H!==null?(H=H.index,H<O?(I.flags|=67108866,O):H):(I.flags|=67108866,O)):(I.flags|=1048576,O)}function v(I){return e&&I.alternate===null&&(I.flags|=67108866),I}function y(I,O,H,K){return O===null||O.tag!==6?(O=Bc(H,I.mode,K),O.return=I,O):(O=d(O,H),O.return=I,O)}function z(I,O,H,K){var fe=H.type;return fe===S?Z(I,O,H.props.children,K,H.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===E&&ol(fe)===O.type)?(O=d(O,H.props),ir(O,H),O.return=I,O):(O=Co(H.type,H.key,H.props,null,I.mode,K),ir(O,H),O.return=I,O)}function P(I,O,H,K){return O===null||O.tag!==4||O.stateNode.containerInfo!==H.containerInfo||O.stateNode.implementation!==H.implementation?(O=Oc(H,I.mode,K),O.return=I,O):(O=d(O,H.children||[]),O.return=I,O)}function Z(I,O,H,K,fe){return O===null||O.tag!==7?(O=al(H,I.mode,K,fe),O.return=I,O):(O=d(O,H),O.return=I,O)}function J(I,O,H){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Bc(""+O,I.mode,H),O.return=I,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case _:return H=Co(O.type,O.key,O.props,null,I.mode,H),ir(H,O),H.return=I,H;case N:return O=Oc(O,I.mode,H),O.return=I,O;case E:return O=ol(O),J(I,O,H)}if(le(O)||$(O))return O=al(O,I.mode,H,null),O.return=I,O;if(typeof O.then=="function")return J(I,Eo(O),H);if(O.$$typeof===A)return J(I,Ro(I,O),H);Do(I,O)}return null}function q(I,O,H,K){var fe=O!==null?O.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return fe!==null?null:y(I,O,""+H,K);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case _:return H.key===fe?z(I,O,H,K):null;case N:return H.key===fe?P(I,O,H,K):null;case E:return H=ol(H),q(I,O,H,K)}if(le(H)||$(H))return fe!==null?null:Z(I,O,H,K,null);if(typeof H.then=="function")return q(I,O,Eo(H),K);if(H.$$typeof===A)return q(I,O,Ro(I,H),K);Do(I,H)}return null}function X(I,O,H,K,fe){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return I=I.get(H)||null,y(O,I,""+K,fe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case _:return I=I.get(K.key===null?H:K.key)||null,z(O,I,K,fe);case N:return I=I.get(K.key===null?H:K.key)||null,P(O,I,K,fe);case E:return K=ol(K),X(I,O,H,K,fe)}if(le(K)||$(K))return I=I.get(H)||null,Z(O,I,K,fe,null);if(typeof K.then=="function")return X(I,O,H,Eo(K),fe);if(K.$$typeof===A)return X(I,O,H,Ro(O,K),fe);Do(O,K)}return null}function se(I,O,H,K){for(var fe=null,je=null,ue=O,ye=O=0,Ce=null;ue!==null&&ye<H.length;ye++){ue.index>ye?(Ce=ue,ue=null):Ce=ue.sibling;var Me=q(I,ue,H[ye],K);if(Me===null){ue===null&&(ue=Ce);break}e&&ue&&Me.alternate===null&&t(I,ue),O=p(Me,O,ye),je===null?fe=Me:je.sibling=Me,je=Me,ue=Ce}if(ye===H.length)return n(I,ue),Ae&&Ha(I,ye),fe;if(ue===null){for(;ye<H.length;ye++)ue=J(I,H[ye],K),ue!==null&&(O=p(ue,O,ye),je===null?fe=ue:je.sibling=ue,je=ue);return Ae&&Ha(I,ye),fe}for(ue=s(ue);ye<H.length;ye++)Ce=X(ue,I,ye,H[ye],K),Ce!==null&&(e&&Ce.alternate!==null&&ue.delete(Ce.key===null?ye:Ce.key),O=p(Ce,O,ye),je===null?fe=Ce:je.sibling=Ce,je=Ce);return e&&ue.forEach(function(Ln){return t(I,Ln)}),Ae&&Ha(I,ye),fe}function de(I,O,H,K){if(H==null)throw Error(l(151));for(var fe=null,je=null,ue=O,ye=O=0,Ce=null,Me=H.next();ue!==null&&!Me.done;ye++,Me=H.next()){ue.index>ye?(Ce=ue,ue=null):Ce=ue.sibling;var Ln=q(I,ue,Me.value,K);if(Ln===null){ue===null&&(ue=Ce);break}e&&ue&&Ln.alternate===null&&t(I,ue),O=p(Ln,O,ye),je===null?fe=Ln:je.sibling=Ln,je=Ln,ue=Ce}if(Me.done)return n(I,ue),Ae&&Ha(I,ye),fe;if(ue===null){for(;!Me.done;ye++,Me=H.next())Me=J(I,Me.value,K),Me!==null&&(O=p(Me,O,ye),je===null?fe=Me:je.sibling=Me,je=Me);return Ae&&Ha(I,ye),fe}for(ue=s(ue);!Me.done;ye++,Me=H.next())Me=X(ue,I,ye,Me.value,K),Me!==null&&(e&&Me.alternate!==null&&ue.delete(Me.key===null?ye:Me.key),O=p(Me,O,ye),je===null?fe=Me:je.sibling=Me,je=Me);return e&&ue.forEach(function(B2){return t(I,B2)}),Ae&&Ha(I,ye),fe}function Oe(I,O,H,K){if(typeof H=="object"&&H!==null&&H.type===S&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case _:e:{for(var fe=H.key;O!==null;){if(O.key===fe){if(fe=H.type,fe===S){if(O.tag===7){n(I,O.sibling),K=d(O,H.props.children),K.return=I,I=K;break e}}else if(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===E&&ol(fe)===O.type){n(I,O.sibling),K=d(O,H.props),ir(K,H),K.return=I,I=K;break e}n(I,O);break}else t(I,O);O=O.sibling}H.type===S?(K=al(H.props.children,I.mode,K,H.key),K.return=I,I=K):(K=Co(H.type,H.key,H.props,null,I.mode,K),ir(K,H),K.return=I,I=K)}return v(I);case N:e:{for(fe=H.key;O!==null;){if(O.key===fe)if(O.tag===4&&O.stateNode.containerInfo===H.containerInfo&&O.stateNode.implementation===H.implementation){n(I,O.sibling),K=d(O,H.children||[]),K.return=I,I=K;break e}else{n(I,O);break}else t(I,O);O=O.sibling}K=Oc(H,I.mode,K),K.return=I,I=K}return v(I);case E:return H=ol(H),Oe(I,O,H,K)}if(le(H))return se(I,O,H,K);if($(H)){if(fe=$(H),typeof fe!="function")throw Error(l(150));return H=fe.call(H),de(I,O,H,K)}if(typeof H.then=="function")return Oe(I,O,Eo(H),K);if(H.$$typeof===A)return Oe(I,O,Ro(I,H),K);Do(I,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,O!==null&&O.tag===6?(n(I,O.sibling),K=d(O,H),K.return=I,I=K):(n(I,O),K=Bc(H,I.mode,K),K.return=I,I=K),v(I)):n(I,O)}return function(I,O,H,K){try{lr=0;var fe=Oe(I,O,H,K);return Kl=null,fe}catch(ue){if(ue===Wl||ue===jo)throw ue;var je=qt(29,ue,null,I.mode);return je.lanes=K,je.return=I,je}finally{}}}var cl=om(!0),sm=om(!1),vn=!1;function Wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yn(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var d=s.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),s.pending=t,t=wo(e),V0(e,null,n),t}return _o(e,s,t,n),wo(e)}function rr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,$d(e,n)}}function Qc(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var d=null,p=null;if(n=n.firstBaseUpdate,n!==null){do{var v={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};p===null?d=p=v:p=p.next=v,n=n.next}while(n!==null);p===null?d=p=t:p=p.next=t}else d=p=t;n={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:s.shared,callbacks:s.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Jc=!1;function or(){if(Jc){var e=Zl;if(e!==null)throw e}}function sr(e,t,n,s){Jc=!1;var d=e.updateQueue;vn=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,y=d.shared.pending;if(y!==null){d.shared.pending=null;var z=y,P=z.next;z.next=null,v===null?p=P:v.next=P,v=z;var Z=e.alternate;Z!==null&&(Z=Z.updateQueue,y=Z.lastBaseUpdate,y!==v&&(y===null?Z.firstBaseUpdate=P:y.next=P,Z.lastBaseUpdate=z))}if(p!==null){var J=d.baseState;v=0,Z=P=z=null,y=p;do{var q=y.lane&-536870913,X=q!==y.lane;if(X?(we&q)===q:(s&q)===q){q!==0&&q===Xl&&(Jc=!0),Z!==null&&(Z=Z.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var se=e,de=y;q=t;var Oe=n;switch(de.tag){case 1:if(se=de.payload,typeof se=="function"){J=se.call(Oe,J,q);break e}J=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=de.payload,q=typeof se=="function"?se.call(Oe,J,q):se,q==null)break e;J=b({},J,q);break e;case 2:vn=!0}}q=y.callback,q!==null&&(e.flags|=64,X&&(e.flags|=8192),X=d.callbacks,X===null?d.callbacks=[q]:X.push(q))}else X={lane:q,tag:y.tag,payload:y.payload,callback:y.callback,next:null},Z===null?(P=Z=X,z=J):Z=Z.next=X,v|=q;if(y=y.next,y===null){if(y=d.shared.pending,y===null)break;X=y,y=X.next,X.next=null,d.lastBaseUpdate=X,d.shared.pending=null}}while(!0);Z===null&&(z=J),d.baseState=z,d.firstBaseUpdate=P,d.lastBaseUpdate=Z,p===null&&(d.shared.lanes=0),An|=v,e.lanes=v,e.memoizedState=J}}function cm(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function um(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)cm(n[e],t)}var Ql=B(null),zo=B(0);function fm(e,t){e=$a,ae(zo,e),ae(Ql,t),$a=e|t.baseLanes}function $c(){ae(zo,$a),ae(Ql,Ql.current)}function eu(){$a=zo.current,Y(Ql),Y(zo)}var Vt=B(null),ua=null;function Sn(e){var t=e.alternate;ae(et,et.current&1),ae(Vt,e),ua===null&&(t===null||Ql.current!==null||t.memoizedState!==null)&&(ua=e)}function tu(e){ae(et,et.current),ae(Vt,e),ua===null&&(ua=e)}function dm(e){e.tag===22?(ae(et,et.current),ae(Vt,e),ua===null&&(ua=e)):_n()}function _n(){ae(et,et.current),ae(Vt,Vt.current)}function Yt(e){Y(Vt),ua===e&&(ua=null),Y(et)}var et=B(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sf(n)||cf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Va=0,be=null,Le=null,lt=null,Lo=!1,Jl=!1,ul=!1,Bo=0,cr=0,$l=null,Nv=0;function Qe(){throw Error(l(321))}function au(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pt(e[n],t[n]))return!1;return!0}function nu(e,t,n,s,d,p){return Va=p,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?Wm:vu,ul=!1,p=n(s,d),ul=!1,Jl&&(p=pm(t,n,s,d)),mm(e),p}function mm(e){U.H=dr;var t=Le!==null&&Le.next!==null;if(Va=0,lt=Le=be=null,Lo=!1,cr=0,$l=null,t)throw Error(l(300));e===null||it||(e=e.dependencies,e!==null&&No(e)&&(it=!0))}function pm(e,t,n,s){be=e;var d=0;do{if(Jl&&($l=null),cr=0,Jl=!1,25<=d)throw Error(l(301));if(d+=1,lt=Le=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}U.H=Km,p=t(n,s)}while(Jl);return p}function Rv(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?ur(t):t,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(be.flags|=1024),t}function lu(){var e=Bo!==0;return Bo=0,e}function iu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ru(e){if(Lo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Lo=!1}Va=0,lt=Le=be=null,Jl=!1,cr=Bo=0,$l=null}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?be.memoizedState=lt=e:lt=lt.next=e,lt}function tt(){if(Le===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=lt===null?be.memoizedState:lt.next;if(t!==null)lt=t,Le=e;else{if(e===null)throw be.alternate===null?Error(l(467)):Error(l(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},lt===null?be.memoizedState=lt=e:lt=lt.next=e}return lt}function Oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ur(e){var t=cr;return cr+=1,$l===null&&($l=[]),e=lm($l,e,t),t=be,(lt===null?t.memoizedState:lt.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?Wm:vu),e}function Fo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ur(e);if(e.$$typeof===A)return ht(e)}throw Error(l(438,String(e)))}function ou(e){var t=null,n=be.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var s=be.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Oo(),be.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),s=0;s<e;s++)n[s]=F;return t.index++,n}function Ya(e,t){return typeof t=="function"?t(e):t}function Go(e){var t=tt();return su(t,Le,e)}function su(e,t,n){var s=e.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=n;var d=e.baseQueue,p=s.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}t.baseQueue=d=p,s.pending=null}if(p=e.baseState,d===null)e.memoizedState=p;else{t=d.next;var y=v=null,z=null,P=t,Z=!1;do{var J=P.lane&-536870913;if(J!==P.lane?(we&J)===J:(Va&J)===J){var q=P.revertLane;if(q===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),J===Xl&&(Z=!0);else if((Va&q)===q){P=P.next,q===Xl&&(Z=!0);continue}else J={lane:0,revertLane:P.revertLane,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},z===null?(y=z=J,v=p):z=z.next=J,be.lanes|=q,An|=q;J=P.action,ul&&n(p,J),p=P.hasEagerState?P.eagerState:n(p,J)}else q={lane:J,revertLane:P.revertLane,gesture:P.gesture,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},z===null?(y=z=q,v=p):z=z.next=q,be.lanes|=J,An|=J;P=P.next}while(P!==null&&P!==t);if(z===null?v=p:z.next=y,!Pt(p,e.memoizedState)&&(it=!0,Z&&(n=Zl,n!==null)))throw n;e.memoizedState=p,e.baseState=v,e.baseQueue=z,s.lastRenderedState=p}return d===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function cu(e){var t=tt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var s=n.dispatch,d=n.pending,p=t.memoizedState;if(d!==null){n.pending=null;var v=d=d.next;do p=e(p,v.action),v=v.next;while(v!==d);Pt(p,t.memoizedState)||(it=!0),t.memoizedState=p,t.baseQueue===null&&(t.baseState=p),n.lastRenderedState=p}return[p,s]}function hm(e,t,n){var s=be,d=tt(),p=Ae;if(p){if(n===void 0)throw Error(l(407));n=n()}else n=t();var v=!Pt((Le||d).memoizedState,n);if(v&&(d.memoizedState=n,it=!0),d=d.queue,du(vm.bind(null,s,d,e),[e]),d.getSnapshot!==t||v||lt!==null&&lt.memoizedState.tag&1){if(s.flags|=2048,ei(9,{destroy:void 0},xm.bind(null,s,d,n,t),null),Fe===null)throw Error(l(349));p||(Va&127)!==0||gm(s,t,n)}return n}function gm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t=Oo(),be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xm(e,t,n,s){t.value=n,t.getSnapshot=s,bm(t)&&ym(e)}function vm(e,t,n){return n(function(){bm(t)&&ym(e)})}function bm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pt(e,n)}catch{return!0}}function ym(e){var t=tl(e,2);t!==null&&Lt(t,e,2)}function uu(e){var t=Rt();if(typeof e=="function"){var n=e;if(e=n(),ul){Ra(!0);try{n()}finally{Ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:e},t}function Sm(e,t,n,s){return e.baseState=n,su(e,Le,typeof s=="function"?s:Ya)}function Tv(e,t,n,s,d){if(Ho(e))throw Error(l(485));if(e=t.action,e!==null){var p={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){p.listeners.push(v)}};U.T!==null?n(!0):p.isTransition=!1,s(p),n=t.pending,n===null?(p.next=t.pending=p,_m(t,p)):(p.next=n.next,t.pending=n.next=p)}}function _m(e,t){var n=t.action,s=t.payload,d=e.state;if(t.isTransition){var p=U.T,v={};U.T=v;try{var y=n(d,s),z=U.S;z!==null&&z(v,y),wm(e,t,y)}catch(P){fu(e,t,P)}finally{p!==null&&v.types!==null&&(p.types=v.types),U.T=p}}else try{p=n(d,s),wm(e,t,p)}catch(P){fu(e,t,P)}}function wm(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){Cm(e,t,s)},function(s){return fu(e,t,s)}):Cm(e,t,n)}function Cm(e,t,n){t.status="fulfilled",t.value=n,Am(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_m(e,n)))}function fu(e,t,n){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=n,Am(t),t=t.next;while(t!==s)}e.action=null}function Am(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Nm(e,t){return t}function Rm(e,t){if(Ae){var n=Fe.formState;if(n!==null){e:{var s=be;if(Ae){if(Ue){t:{for(var d=Ue,p=ca;d.nodeType!==8;){if(!p){d=null;break t}if(d=fa(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){Ue=fa(d.nextSibling),s=d.data==="F!";break e}}gn(s)}s=!1}s&&(t=n[0])}}return n=Rt(),n.memoizedState=n.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:t},n.queue=s,n=Ym.bind(null,be,s),s.dispatch=n,s=uu(!1),p=xu.bind(null,be,!1,s.queue),s=Rt(),d={state:t,dispatch:null,action:e,pending:null},s.queue=d,n=Tv.bind(null,be,d,p,n),d.dispatch=n,s.memoizedState=e,[t,n,!1]}function Tm(e){var t=tt();return jm(t,Le,e)}function jm(e,t,n){if(t=su(e,t,Nm)[0],e=Go(Ya)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=ur(t)}catch(v){throw v===Wl?jo:v}else s=t;t=tt();var d=t.queue,p=d.dispatch;return n!==t.memoizedState&&(be.flags|=2048,ei(9,{destroy:void 0},jv.bind(null,d,n),null)),[s,p,e]}function jv(e,t){e.action=t}function Mm(e){var t=tt(),n=Le;if(n!==null)return jm(t,n,e);tt(),t=t.memoizedState,n=tt();var s=n.queue.dispatch;return n.memoizedState=e,[t,s,!1]}function ei(e,t,n,s){return e={tag:e,create:n,deps:s,inst:t,next:null},t=be.updateQueue,t===null&&(t=Oo(),be.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e),e}function Em(){return tt().memoizedState}function Io(e,t,n,s){var d=Rt();be.flags|=e,d.memoizedState=ei(1|t,{destroy:void 0},n,s===void 0?null:s)}function Uo(e,t,n,s){var d=tt();s=s===void 0?null:s;var p=d.memoizedState.inst;Le!==null&&s!==null&&au(s,Le.memoizedState.deps)?d.memoizedState=ei(t,p,n,s):(be.flags|=e,d.memoizedState=ei(1|t,p,n,s))}function Dm(e,t){Io(8390656,8,e,t)}function du(e,t){Uo(2048,8,e,t)}function Mv(e){be.flags|=4;var t=be.updateQueue;if(t===null)t=Oo(),be.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function zm(e){var t=tt().memoizedState;return Mv({ref:t,nextImpl:e}),function(){if((De&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function km(e,t){return Uo(4,2,e,t)}function Lm(e,t){return Uo(4,4,e,t)}function Bm(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Om(e,t,n){n=n!=null?n.concat([e]):null,Uo(4,4,Bm.bind(null,t,e),n)}function mu(){}function Fm(e,t){var n=tt();t=t===void 0?null:t;var s=n.memoizedState;return t!==null&&au(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Gm(e,t){var n=tt();t=t===void 0?null:t;var s=n.memoizedState;if(t!==null&&au(t,s[1]))return s[0];if(s=e(),ul){Ra(!0);try{e()}finally{Ra(!1)}}return n.memoizedState=[s,t],s}function pu(e,t,n){return n===void 0||(Va&1073741824)!==0&&(we&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Ip(),be.lanes|=e,An|=e,n)}function Im(e,t,n,s){return Pt(n,t)?n:Ql.current!==null?(e=pu(e,n,s),Pt(e,t)||(it=!0),e):(Va&42)===0||(Va&1073741824)!==0&&(we&261930)===0?(it=!0,e.memoizedState=n):(e=Ip(),be.lanes|=e,An|=e,t)}function Um(e,t,n,s,d){var p=W.p;W.p=p!==0&&8>p?p:8;var v=U.T,y={};U.T=y,xu(e,!1,t,n);try{var z=d(),P=U.S;if(P!==null&&P(y,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var Z=Av(z,s);fr(e,t,Z,Wt(e))}else fr(e,t,s,Wt(e))}catch(J){fr(e,t,{then:function(){},status:"rejected",reason:J},Wt())}finally{W.p=p,v!==null&&y.types!==null&&(v.types=y.types),U.T=v}}function Ev(){}function hu(e,t,n,s){if(e.tag!==5)throw Error(l(476));var d=Hm(e).queue;Um(e,d,t,re,n===null?Ev:function(){return Pm(e),n(s)})}function Hm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:re},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Pm(e){var t=Hm(e);t.next===null&&(t=e.alternate.memoizedState),fr(e,t.next.queue,{},Wt())}function gu(){return ht(Tr)}function qm(){return tt().memoizedState}function Vm(){return tt().memoizedState}function Dv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Wt();e=bn(n);var s=yn(t,e,n);s!==null&&(Lt(s,t,n),rr(s,t,n)),t={cache:Vc()},e.payload=t;return}t=t.return}}function zv(e,t,n){var s=Wt();n={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ho(e)?Xm(t,n):(n=kc(e,t,n,s),n!==null&&(Lt(n,e,s),Zm(n,t,s)))}function Ym(e,t,n){var s=Wt();fr(e,t,n,s)}function fr(e,t,n,s){var d={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ho(e))Xm(t,d);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=t.lastRenderedReducer,p!==null))try{var v=t.lastRenderedState,y=p(v,n);if(d.hasEagerState=!0,d.eagerState=y,Pt(y,v))return _o(e,t,d,0),Fe===null&&So(),!1}catch{}finally{}if(n=kc(e,t,d,s),n!==null)return Lt(n,e,s),Zm(n,t,s),!0}return!1}function xu(e,t,n,s){if(s={lane:2,revertLane:Wu(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ho(e)){if(t)throw Error(l(479))}else t=kc(e,n,s,2),t!==null&&Lt(t,e,2)}function Ho(e){var t=e.alternate;return e===be||t!==null&&t===be}function Xm(e,t){Jl=Lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zm(e,t,n){if((n&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,$d(e,n)}}var dr={readContext:ht,use:Fo,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};dr.useEffectEvent=Qe;var Wm={readContext:ht,use:Fo,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Dm,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Io(4194308,4,Bm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Io(4194308,4,e,t)},useInsertionEffect:function(e,t){Io(4,2,e,t)},useMemo:function(e,t){var n=Rt();t=t===void 0?null:t;var s=e();if(ul){Ra(!0);try{e()}finally{Ra(!1)}}return n.memoizedState=[s,t],s},useReducer:function(e,t,n){var s=Rt();if(n!==void 0){var d=n(t);if(ul){Ra(!0);try{n(t)}finally{Ra(!1)}}}else d=t;return s.memoizedState=s.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},s.queue=e,e=e.dispatch=zv.bind(null,be,e),[s.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:function(e){e=uu(e);var t=e.queue,n=Ym.bind(null,be,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:mu,useDeferredValue:function(e,t){var n=Rt();return pu(n,e,t)},useTransition:function(){var e=uu(!1);return e=Um.bind(null,be,e.queue,!0,!1),Rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var s=be,d=Rt();if(Ae){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Fe===null)throw Error(l(349));(we&127)!==0||gm(s,t,n)}d.memoizedState=n;var p={value:n,getSnapshot:t};return d.queue=p,Dm(vm.bind(null,s,p,e),[e]),s.flags|=2048,ei(9,{destroy:void 0},xm.bind(null,s,p,n,t),null),n},useId:function(){var e=Rt(),t=Fe.identifierPrefix;if(Ae){var n=ja,s=Ta;n=(s&~(1<<32-_t(s)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Bo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Nv++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:gu,useFormState:Rm,useActionState:Rm,useOptimistic:function(e){var t=Rt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=xu.bind(null,be,!0,n),n.dispatch=t,[e,t]},useMemoCache:ou,useCacheRefresh:function(){return Rt().memoizedState=Dv.bind(null,be)},useEffectEvent:function(e){var t=Rt(),n={impl:e};return t.memoizedState=n,function(){if((De&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},vu={readContext:ht,use:Fo,useCallback:Fm,useContext:ht,useEffect:du,useImperativeHandle:Om,useInsertionEffect:km,useLayoutEffect:Lm,useMemo:Gm,useReducer:Go,useRef:Em,useState:function(){return Go(Ya)},useDebugValue:mu,useDeferredValue:function(e,t){var n=tt();return Im(n,Le.memoizedState,e,t)},useTransition:function(){var e=Go(Ya)[0],t=tt().memoizedState;return[typeof e=="boolean"?e:ur(e),t]},useSyncExternalStore:hm,useId:qm,useHostTransitionStatus:gu,useFormState:Tm,useActionState:Tm,useOptimistic:function(e,t){var n=tt();return Sm(n,Le,e,t)},useMemoCache:ou,useCacheRefresh:Vm};vu.useEffectEvent=zm;var Km={readContext:ht,use:Fo,useCallback:Fm,useContext:ht,useEffect:du,useImperativeHandle:Om,useInsertionEffect:km,useLayoutEffect:Lm,useMemo:Gm,useReducer:cu,useRef:Em,useState:function(){return cu(Ya)},useDebugValue:mu,useDeferredValue:function(e,t){var n=tt();return Le===null?pu(n,e,t):Im(n,Le.memoizedState,e,t)},useTransition:function(){var e=cu(Ya)[0],t=tt().memoizedState;return[typeof e=="boolean"?e:ur(e),t]},useSyncExternalStore:hm,useId:qm,useHostTransitionStatus:gu,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,t){var n=tt();return Le!==null?Sm(n,Le,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ou,useCacheRefresh:Vm};Km.useEffectEvent=zm;function bu(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yu={enqueueSetState:function(e,t,n){e=e._reactInternals;var s=Wt(),d=bn(s);d.payload=t,n!=null&&(d.callback=n),t=yn(e,d,s),t!==null&&(Lt(t,e,s),rr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=Wt(),d=bn(s);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=yn(e,d,s),t!==null&&(Lt(t,e,s),rr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Wt(),s=bn(n);s.tag=2,t!=null&&(s.callback=t),t=yn(e,s,n),t!==null&&(Lt(t,e,n),rr(t,e,n))}};function Qm(e,t,n,s,d,p,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,p,v):t.prototype&&t.prototype.isPureReactComponent?!Ji(n,s)||!Ji(d,p):!0}function Jm(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&yu.enqueueReplaceState(t,t.state,null)}function fl(e,t){var n=t;if("ref"in t){n={};for(var s in t)s!=="ref"&&(n[s]=t[s])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var d in e)n[d]===void 0&&(n[d]=e[d])}return n}function $m(e){yo(e)}function ep(e){console.error(e)}function tp(e){yo(e)}function Po(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function ap(e,t,n){try{var s=e.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Su(e,t,n){return n=bn(n),n.tag=3,n.payload={element:null},n.callback=function(){Po(e,t)},n}function np(e){return e=bn(e),e.tag=3,e}function lp(e,t,n,s){var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var p=s.value;e.payload=function(){return d(p)},e.callback=function(){ap(t,n,s)}}var v=n.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){ap(t,n,s),typeof d!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var y=s.stack;this.componentDidCatch(s.value,{componentStack:y!==null?y:""})})}function kv(e,t,n,s,d){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=n.alternate,t!==null&&Yl(t,n,d,!0),n=Vt.current,n!==null){switch(n.tag){case 31:case 13:return ua===null?ts():n.alternate===null&&Je===0&&(Je=3),n.flags&=-257,n.flags|=65536,n.lanes=d,s===Mo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([s]):t.add(s),Yu(e,s,d)),!1;case 22:return n.flags|=65536,s===Mo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([s]):n.add(s)),Yu(e,s,d)),!1}throw Error(l(435,n.tag))}return Yu(e,s,d),ts(),!1}if(Ae)return t=Vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,s!==Ic&&(e=Error(l(422),{cause:s}),tr(ra(e,n)))):(s!==Ic&&(t=Error(l(423),{cause:s}),tr(ra(t,n))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,s=ra(s,n),d=Su(e.stateNode,s,d),Qc(e,d),Je!==4&&(Je=2)),!1;var p=Error(l(520),{cause:s});if(p=ra(p,n),yr===null?yr=[p]:yr.push(p),Je!==4&&(Je=2),t===null)return!0;s=ra(s,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=d&-d,n.lanes|=e,e=Su(n.stateNode,s,e),Qc(n,e),!1;case 1:if(t=n.type,p=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Nn===null||!Nn.has(p))))return n.flags|=65536,d&=-d,n.lanes|=d,d=np(d),lp(d,e,n,s),Qc(n,d),!1}n=n.return}while(n!==null);return!1}var _u=Error(l(461)),it=!1;function gt(e,t,n,s){t.child=e===null?sm(t,null,n,s):cl(t,e.child,n,s)}function ip(e,t,n,s,d){n=n.render;var p=t.ref;if("ref"in s){var v={};for(var y in s)y!=="ref"&&(v[y]=s[y])}else v=s;return il(t),s=nu(e,t,n,v,p,d),y=lu(),e!==null&&!it?(iu(e,t,d),Xa(e,t,d)):(Ae&&y&&Fc(t),t.flags|=1,gt(e,t,s,d),t.child)}function rp(e,t,n,s,d){if(e===null){var p=n.type;return typeof p=="function"&&!Lc(p)&&p.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=p,op(e,t,p,s,d)):(e=Co(n.type,null,s,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(p=e.child,!Mu(e,d)){var v=p.memoizedProps;if(n=n.compare,n=n!==null?n:Ji,n(v,s)&&e.ref===t.ref)return Xa(e,t,d)}return t.flags|=1,e=Ua(p,s),e.ref=t.ref,e.return=t,t.child=e}function op(e,t,n,s,d){if(e!==null){var p=e.memoizedProps;if(Ji(p,s)&&e.ref===t.ref)if(it=!1,t.pendingProps=s=p,Mu(e,d))(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,Xa(e,t,d)}return wu(e,t,n,s,d)}function sp(e,t,n,s){var d=s.children,p=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(p=p!==null?p.baseLanes|n:n,e!==null){for(s=t.child=e.child,d=0;s!==null;)d=d|s.lanes|s.childLanes,s=s.sibling;s=d&~p}else s=0,t.child=null;return cp(e,t,p,n,s)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&To(t,p!==null?p.cachePool:null),p!==null?fm(t,p):$c(),dm(t);else return s=t.lanes=536870912,cp(e,t,p!==null?p.baseLanes|n:n,n,s)}else p!==null?(To(t,p.cachePool),fm(t,p),_n(),t.memoizedState=null):(e!==null&&To(t,null),$c(),_n());return gt(e,t,d,n),t.child}function mr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cp(e,t,n,s,d){var p=Xc();return p=p===null?null:{parent:nt._currentValue,pool:p},t.memoizedState={baseLanes:n,cachePool:p},e!==null&&To(t,null),$c(),dm(t),e!==null&&Yl(e,t,s,!0),t.childLanes=d,null}function qo(e,t){return t=Yo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function up(e,t,n){return cl(t,e.child,null,n),e=qo(t,t.pendingProps),e.flags|=2,Yt(t),t.memoizedState=null,e}function Lv(e,t,n){var s=t.pendingProps,d=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ae){if(s.mode==="hidden")return e=qo(t,s),t.lanes=536870912,mr(null,e);if(tu(t),(e=Ue)?(e=_h(e,ca),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:pn!==null?{id:Ta,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},n=X0(e),n.return=t,t.child=n,pt=t,Ue=null)):e=null,e===null)throw gn(t);return t.lanes=536870912,null}return qo(t,s)}var p=e.memoizedState;if(p!==null){var v=p.dehydrated;if(tu(t),d)if(t.flags&256)t.flags&=-257,t=up(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(it||Yl(e,t,n,!1),d=(n&e.childLanes)!==0,it||d){if(s=Fe,s!==null&&(v=e0(s,n),v!==0&&v!==p.retryLane))throw p.retryLane=v,tl(e,v),Lt(s,e,v),_u;ts(),t=up(e,t,n)}else e=p.treeContext,Ue=fa(v.nextSibling),pt=t,Ae=!0,hn=null,ca=!1,e!==null&&K0(t,e),t=qo(t,s),t.flags|=4096;return t}return e=Ua(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Vo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function wu(e,t,n,s,d){return il(t),n=nu(e,t,n,s,void 0,d),s=lu(),e!==null&&!it?(iu(e,t,d),Xa(e,t,d)):(Ae&&s&&Fc(t),t.flags|=1,gt(e,t,n,d),t.child)}function fp(e,t,n,s,d,p){return il(t),t.updateQueue=null,n=pm(t,s,n,d),mm(e),s=lu(),e!==null&&!it?(iu(e,t,p),Xa(e,t,p)):(Ae&&s&&Fc(t),t.flags|=1,gt(e,t,n,p),t.child)}function dp(e,t,n,s,d){if(il(t),t.stateNode===null){var p=Hl,v=n.contextType;typeof v=="object"&&v!==null&&(p=ht(v)),p=new n(s,p),t.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=yu,t.stateNode=p,p._reactInternals=t,p=t.stateNode,p.props=s,p.state=t.memoizedState,p.refs={},Wc(t),v=n.contextType,p.context=typeof v=="object"&&v!==null?ht(v):Hl,p.state=t.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(bu(t,n,v,s),p.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(v=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),v!==p.state&&yu.enqueueReplaceState(p,p.state,null),sr(t,s,p,d),or(),p.state=t.memoizedState),typeof p.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){p=t.stateNode;var y=t.memoizedProps,z=fl(n,y);p.props=z;var P=p.context,Z=n.contextType;v=Hl,typeof Z=="object"&&Z!==null&&(v=ht(Z));var J=n.getDerivedStateFromProps;Z=typeof J=="function"||typeof p.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,Z||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y||P!==v)&&Jm(t,p,s,v),vn=!1;var q=t.memoizedState;p.state=q,sr(t,s,p,d),or(),P=t.memoizedState,y||q!==P||vn?(typeof J=="function"&&(bu(t,n,J,s),P=t.memoizedState),(z=vn||Qm(t,n,z,s,q,P,v))?(Z||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=P),p.props=s,p.state=P,p.context=v,s=z):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{p=t.stateNode,Kc(e,t),v=t.memoizedProps,Z=fl(n,v),p.props=Z,J=t.pendingProps,q=p.context,P=n.contextType,z=Hl,typeof P=="object"&&P!==null&&(z=ht(P)),y=n.getDerivedStateFromProps,(P=typeof y=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==J||q!==z)&&Jm(t,p,s,z),vn=!1,q=t.memoizedState,p.state=q,sr(t,s,p,d),or();var X=t.memoizedState;v!==J||q!==X||vn||e!==null&&e.dependencies!==null&&No(e.dependencies)?(typeof y=="function"&&(bu(t,n,y,s),X=t.memoizedState),(Z=vn||Qm(t,n,Z,s,q,X,z)||e!==null&&e.dependencies!==null&&No(e.dependencies))?(P||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(s,X,z),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(s,X,z)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||v===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=X),p.props=s,p.state=X,p.context=z,s=Z):(typeof p.componentDidUpdate!="function"||v===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),s=!1)}return p=s,Vo(e,t),s=(t.flags&128)!==0,p||s?(p=t.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:p.render(),t.flags|=1,e!==null&&s?(t.child=cl(t,e.child,null,d),t.child=cl(t,null,n,d)):gt(e,t,n,d),t.memoizedState=p.state,e=t.child):e=Xa(e,t,d),e}function mp(e,t,n,s){return nl(),t.flags|=256,gt(e,t,n,s),t.child}var Cu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Au(e){return{baseLanes:e,cachePool:am()}}function Nu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Zt),e}function pp(e,t,n){var s=t.pendingProps,d=!1,p=(t.flags&128)!==0,v;if((v=p)||(v=e!==null&&e.memoizedState===null?!1:(et.current&2)!==0),v&&(d=!0,t.flags&=-129),v=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ae){if(d?Sn(t):_n(),(e=Ue)?(e=_h(e,ca),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:pn!==null?{id:Ta,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},n=X0(e),n.return=t,t.child=n,pt=t,Ue=null)):e=null,e===null)throw gn(t);return cf(e)?t.lanes=32:t.lanes=536870912,null}var y=s.children;return s=s.fallback,d?(_n(),d=t.mode,y=Yo({mode:"hidden",children:y},d),s=al(s,d,n,null),y.return=t,s.return=t,y.sibling=s,t.child=y,s=t.child,s.memoizedState=Au(n),s.childLanes=Nu(e,v,n),t.memoizedState=Cu,mr(null,s)):(Sn(t),Ru(t,y))}var z=e.memoizedState;if(z!==null&&(y=z.dehydrated,y!==null)){if(p)t.flags&256?(Sn(t),t.flags&=-257,t=Tu(e,t,n)):t.memoizedState!==null?(_n(),t.child=e.child,t.flags|=128,t=null):(_n(),y=s.fallback,d=t.mode,s=Yo({mode:"visible",children:s.children},d),y=al(y,d,n,null),y.flags|=2,s.return=t,y.return=t,s.sibling=y,t.child=s,cl(t,e.child,null,n),s=t.child,s.memoizedState=Au(n),s.childLanes=Nu(e,v,n),t.memoizedState=Cu,t=mr(null,s));else if(Sn(t),cf(y)){if(v=y.nextSibling&&y.nextSibling.dataset,v)var P=v.dgst;v=P,s=Error(l(419)),s.stack="",s.digest=v,tr({value:s,source:null,stack:null}),t=Tu(e,t,n)}else if(it||Yl(e,t,n,!1),v=(n&e.childLanes)!==0,it||v){if(v=Fe,v!==null&&(s=e0(v,n),s!==0&&s!==z.retryLane))throw z.retryLane=s,tl(e,s),Lt(v,e,s),_u;sf(y)||ts(),t=Tu(e,t,n)}else sf(y)?(t.flags|=192,t.child=e.child,t=null):(e=z.treeContext,Ue=fa(y.nextSibling),pt=t,Ae=!0,hn=null,ca=!1,e!==null&&K0(t,e),t=Ru(t,s.children),t.flags|=4096);return t}return d?(_n(),y=s.fallback,d=t.mode,z=e.child,P=z.sibling,s=Ua(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,P!==null?y=Ua(P,y):(y=al(y,d,n,null),y.flags|=2),y.return=t,s.return=t,s.sibling=y,t.child=s,mr(null,s),s=t.child,y=e.child.memoizedState,y===null?y=Au(n):(d=y.cachePool,d!==null?(z=nt._currentValue,d=d.parent!==z?{parent:z,pool:z}:d):d=am(),y={baseLanes:y.baseLanes|n,cachePool:d}),s.memoizedState=y,s.childLanes=Nu(e,v,n),t.memoizedState=Cu,mr(e.child,s)):(Sn(t),n=e.child,e=n.sibling,n=Ua(n,{mode:"visible",children:s.children}),n.return=t,n.sibling=null,e!==null&&(v=t.deletions,v===null?(t.deletions=[e],t.flags|=16):v.push(e)),t.child=n,t.memoizedState=null,n)}function Ru(e,t){return t=Yo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yo(e,t){return e=qt(22,e,null,t),e.lanes=0,e}function Tu(e,t,n){return cl(t,e.child,null,n),e=Ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Pc(e.return,t,n)}function ju(e,t,n,s,d,p){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:d,treeForkCount:p}:(v.isBackwards=t,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=n,v.tailMode=d,v.treeForkCount=p)}function gp(e,t,n){var s=t.pendingProps,d=s.revealOrder,p=s.tail;s=s.children;var v=et.current,y=(v&2)!==0;if(y?(v=v&1|2,t.flags|=128):v&=1,ae(et,v),gt(e,t,s,n),s=Ae?er:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hp(e,n,t);else if(e.tag===19)hp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(n=t.child,d=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(d=n),n=n.sibling;n=d,n===null?(d=t.child,t.child=null):(d=n.sibling,n.sibling=null),ju(t,!1,d,n,p,s);break;case"backwards":case"unstable_legacy-backwards":for(n=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&ko(e)===null){t.child=d;break}e=d.sibling,d.sibling=n,n=d,d=e}ju(t,!0,n,null,p,s);break;case"together":ju(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function Xa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Yl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Ua(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ua(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&No(e)))}function Bv(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),xn(t,nt,e.memoizedState.cache),nl();break;case 27:case 5:pe(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:xn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,tu(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Sn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?pp(e,t,n):(Sn(t),e=Xa(e,t,n),e!==null?e.sibling:null);Sn(t);break;case 19:var d=(e.flags&128)!==0;if(s=(n&t.childLanes)!==0,s||(Yl(e,t,n,!1),s=(n&t.childLanes)!==0),d){if(s)return gp(e,t,n);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ae(et,et.current),s)break;return null;case 22:return t.lanes=0,sp(e,t,n,t.pendingProps);case 24:xn(t,nt,e.memoizedState.cache)}return Xa(e,t,n)}function xp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)it=!0;else{if(!Mu(e,n)&&(t.flags&128)===0)return it=!1,Bv(e,t,n);it=(e.flags&131072)!==0}else it=!1,Ae&&(t.flags&1048576)!==0&&W0(t,er,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=ol(t.elementType),t.type=e,typeof e=="function")Lc(e)?(s=fl(e,s),t.tag=1,t=dp(null,t,e,s,n)):(t.tag=0,t=wu(null,t,e,s,n));else{if(e!=null){var d=e.$$typeof;if(d===k){t.tag=11,t=ip(null,t,e,s,n);break e}else if(d===M){t.tag=14,t=rp(null,t,e,s,n);break e}}throw t=te(e)||e,Error(l(306,t,""))}}return t;case 0:return wu(e,t,t.type,t.pendingProps,n);case 1:return s=t.type,d=fl(s,t.pendingProps),dp(e,t,s,d,n);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(l(387));s=t.pendingProps;var p=t.memoizedState;d=p.element,Kc(e,t),sr(t,s,null,n);var v=t.memoizedState;if(s=v.cache,xn(t,nt,s),s!==p.cache&&qc(t,[nt],n,!0),or(),s=v.element,p.isDehydrated)if(p={element:s,isDehydrated:!1,cache:v.cache},t.updateQueue.baseState=p,t.memoizedState=p,t.flags&256){t=mp(e,t,s,n);break e}else if(s!==d){d=ra(Error(l(424)),t),tr(d),t=mp(e,t,s,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=fa(e.firstChild),pt=t,Ae=!0,hn=null,ca=!0,n=sm(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(nl(),s===d){t=Xa(e,t,n);break e}gt(e,t,s,n)}t=t.child}return t;case 26:return Vo(e,t),e===null?(n=Th(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ae||(n=t.type,e=t.pendingProps,s=ss(ie.current).createElement(n),s[mt]=t,s[jt]=e,xt(s,n,e),ut(s),t.stateNode=s):t.memoizedState=Th(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pe(t),e===null&&Ae&&(s=t.stateNode=Ah(t.type,t.pendingProps,ie.current),pt=t,ca=!0,d=Ue,Mn(t.type)?(uf=d,Ue=fa(s.firstChild)):Ue=d),gt(e,t,t.pendingProps.children,n),Vo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ae&&((d=s=Ue)&&(s=d2(s,t.type,t.pendingProps,ca),s!==null?(t.stateNode=s,pt=t,Ue=fa(s.firstChild),ca=!1,d=!0):d=!1),d||gn(t)),pe(t),d=t.type,p=t.pendingProps,v=e!==null?e.memoizedProps:null,s=p.children,lf(d,p)?s=null:v!==null&&lf(d,v)&&(t.flags|=32),t.memoizedState!==null&&(d=nu(e,t,Rv,null,null,n),Tr._currentValue=d),Vo(e,t),gt(e,t,s,n),t.child;case 6:return e===null&&Ae&&((e=n=Ue)&&(n=m2(n,t.pendingProps,ca),n!==null?(t.stateNode=n,pt=t,Ue=null,e=!0):e=!1),e||gn(t)),null;case 13:return pp(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=cl(t,null,s,n):gt(e,t,s,n),t.child;case 11:return ip(e,t,t.type,t.pendingProps,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:return s=t.pendingProps,xn(t,t.type,s.value),gt(e,t,s.children,n),t.child;case 9:return d=t.type._context,s=t.pendingProps.children,il(t),d=ht(d),s=s(d),t.flags|=1,gt(e,t,s,n),t.child;case 14:return rp(e,t,t.type,t.pendingProps,n);case 15:return op(e,t,t.type,t.pendingProps,n);case 19:return gp(e,t,n);case 31:return Lv(e,t,n);case 22:return sp(e,t,n,t.pendingProps);case 24:return il(t),s=ht(nt),e===null?(d=Xc(),d===null&&(d=Fe,p=Vc(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=n),d=p),t.memoizedState={parent:s,cache:d},Wc(t),xn(t,nt,d)):((e.lanes&n)!==0&&(Kc(e,t),sr(t,null,null,n),or()),d=e.memoizedState,p=t.memoizedState,d.parent!==s?(d={parent:s,cache:s},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),xn(t,nt,s)):(s=p.cache,xn(t,nt,s),s!==d.cache&&qc(t,[nt],n,!0))),gt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Za(e){e.flags|=4}function Eu(e,t,n,s,d){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(qp())e.flags|=8192;else throw sl=Mo,Zc}else e.flags&=-16777217}function vp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zh(t))if(qp())e.flags|=8192;else throw sl=Mo,Zc}function Xo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Qd():536870912,e.lanes|=t,li|=t)}function pr(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var d=e.child;d!==null;)n|=d.lanes|d.childLanes,s|=d.subtreeFlags&65011712,s|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)n|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Ov(e,t,n){var s=t.pendingProps;switch(Gc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),qa(nt),Re(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Vl(t)?Za(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Uc())),He(t),null;case 26:var d=t.type,p=t.memoizedState;return e===null?(Za(t),p!==null?(He(t),vp(t,p)):(He(t),Eu(t,d,null,s,n))):p?p!==e.memoizedState?(Za(t),He(t),vp(t,p)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&Za(t),He(t),Eu(t,d,e,s,n)),null;case 27:if(qe(t),n=ie.current,d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Za(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return He(t),null}e=ee.current,Vl(t)?Q0(t):(e=Ah(d,s,n),t.stateNode=e,Za(t))}return He(t),null;case 5:if(qe(t),d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Za(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return He(t),null}if(p=ee.current,Vl(t))Q0(t);else{var v=ss(ie.current);switch(p){case 1:p=v.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:p=v.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":p=v.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":p=v.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":p=v.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?p.multiple=!0:s.size&&(p.size=s.size);break;default:p=typeof s.is=="string"?v.createElement(d,{is:s.is}):v.createElement(d)}}p[mt]=t,p[jt]=s;e:for(v=t.child;v!==null;){if(v.tag===5||v.tag===6)p.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break e;for(;v.sibling===null;){if(v.return===null||v.return===t)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}t.stateNode=p;e:switch(xt(p,d,s),d){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Za(t)}}return He(t),Eu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&Za(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(l(166));if(e=ie.current,Vl(t)){if(e=t.stateNode,n=t.memoizedProps,s=null,d=pt,d!==null)switch(d.tag){case 27:case 5:s=d.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||ph(e.nodeValue,n)),e||gn(t,!0)}else e=ss(e).createTextNode(s),e[mt]=t,t.stateNode=e}return He(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(s=Vl(t),n!==null){if(e===null){if(!s)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[mt]=t}else nl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else n=Uc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Yt(t),t):(Yt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return He(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Vl(t),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(l(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(l(317));d[mt]=t}else nl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),d=!1}else d=Uc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(Yt(t),t):(Yt(t),null)}return Yt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=s!==null,e=e!==null&&e.memoizedState!==null,n&&(s=t.child,d=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(d=s.alternate.memoizedState.cachePool.pool),p=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(p=s.memoizedState.cachePool.pool),p!==d&&(s.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Xo(t,t.updateQueue),He(t),null);case 4:return Re(),e===null&&$u(t.stateNode.containerInfo),He(t),null;case 10:return qa(t.type),He(t),null;case 19:if(Y(et),s=t.memoizedState,s===null)return He(t),null;if(d=(t.flags&128)!==0,p=s.rendering,p===null)if(d)pr(s,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=ko(e),p!==null){for(t.flags|=128,pr(s,!1),e=p.updateQueue,t.updateQueue=e,Xo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Y0(n,e),n=n.sibling;return ae(et,et.current&1|2),Ae&&Ha(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&yt()>Jo&&(t.flags|=128,d=!0,pr(s,!1),t.lanes=4194304)}else{if(!d)if(e=ko(p),e!==null){if(t.flags|=128,d=!0,e=e.updateQueue,t.updateQueue=e,Xo(t,e),pr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!p.alternate&&!Ae)return He(t),null}else 2*yt()-s.renderingStartTime>Jo&&n!==536870912&&(t.flags|=128,d=!0,pr(s,!1),t.lanes=4194304);s.isBackwards?(p.sibling=t.child,t.child=p):(e=s.last,e!==null?e.sibling=p:t.child=p,s.last=p)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=et.current,ae(et,d?n&1|2:n&1),Ae&&Ha(t,s.treeForkCount),e):(He(t),null);case 22:case 23:return Yt(t),eu(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&Xo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==n&&(t.flags|=2048),e!==null&&Y(rl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qa(nt),He(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Fv(e,t){switch(Gc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qa(nt),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qe(t),null;case 31:if(t.memoizedState!==null){if(Yt(t),t.alternate===null)throw Error(l(340));nl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));nl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(et),null;case 4:return Re(),null;case 10:return qa(t.type),null;case 22:case 23:return Yt(t),eu(),e!==null&&Y(rl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qa(nt),null;case 25:return null;default:return null}}function bp(e,t){switch(Gc(t),t.tag){case 3:qa(nt),Re();break;case 26:case 27:case 5:qe(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&Yt(t);break;case 13:Yt(t);break;case 19:Y(et);break;case 10:qa(t.type);break;case 22:case 23:Yt(t),eu(),e!==null&&Y(rl);break;case 24:qa(nt)}}function hr(e,t){try{var n=t.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var d=s.next;n=d;do{if((n.tag&e)===e){s=void 0;var p=n.create,v=n.inst;s=p(),v.destroy=s}n=n.next}while(n!==d)}}catch(y){ke(t,t.return,y)}}function wn(e,t,n){try{var s=t.updateQueue,d=s!==null?s.lastEffect:null;if(d!==null){var p=d.next;s=p;do{if((s.tag&e)===e){var v=s.inst,y=v.destroy;if(y!==void 0){v.destroy=void 0,d=t;var z=n,P=y;try{P()}catch(Z){ke(d,z,Z)}}}s=s.next}while(s!==p)}}catch(Z){ke(t,t.return,Z)}}function yp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{um(t,n)}catch(s){ke(e,e.return,s)}}}function Sp(e,t,n){n.props=fl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(s){ke(e,t,s)}}function gr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof n=="function"?e.refCleanup=n(s):n.current=s}}catch(d){ke(e,t,d)}}function Ma(e,t){var n=e.ref,s=e.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(d){ke(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(d){ke(e,t,d)}else n.current=null}function _p(e){var t=e.type,n=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break e;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(d){ke(e,e.return,d)}}function Du(e,t,n){try{var s=e.stateNode;r2(s,e.type,n,t),s[jt]=t}catch(d){ke(e,e.return,d)}}function wp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Mn(e.type)||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Mn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ga));else if(s!==4&&(s===27&&Mn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ku(e,t,n),e=e.sibling;e!==null;)ku(e,t,n),e=e.sibling}function Zo(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(s===27&&Mn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zo(e,t,n),e=e.sibling;e!==null;)Zo(e,t,n),e=e.sibling}function Cp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var s=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);xt(t,s,n),t[mt]=e,t[jt]=n}catch(p){ke(e,e.return,p)}}var Wa=!1,rt=!1,Lu=!1,Ap=typeof WeakSet=="function"?WeakSet:Set,ft=null;function Gv(e,t){if(e=e.containerInfo,af=hs,e=O0(e),Tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var d=s.anchorOffset,p=s.focusNode;s=s.focusOffset;try{n.nodeType,p.nodeType}catch{n=null;break e}var v=0,y=-1,z=-1,P=0,Z=0,J=e,q=null;t:for(;;){for(var X;J!==n||d!==0&&J.nodeType!==3||(y=v+d),J!==p||s!==0&&J.nodeType!==3||(z=v+s),J.nodeType===3&&(v+=J.nodeValue.length),(X=J.firstChild)!==null;)q=J,J=X;for(;;){if(J===e)break t;if(q===n&&++P===d&&(y=v),q===p&&++Z===s&&(z=v),(X=J.nextSibling)!==null)break;J=q,q=J.parentNode}J=X}n=y===-1||z===-1?null:{start:y,end:z}}else n=null}n=n||{start:0,end:0}}else n=null;for(nf={focusedElem:e,selectionRange:n},hs=!1,ft=t;ft!==null;)if(t=ft,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ft=e;else for(;ft!==null;){switch(t=ft,p=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)d=e[n],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,n=t,d=p.memoizedProps,p=p.memoizedState,s=n.stateNode;try{var se=fl(n.type,d);e=s.getSnapshotBeforeUpdate(se,p),s.__reactInternalSnapshotBeforeUpdate=e}catch(de){ke(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)of(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":of(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,ft=e;break}ft=t.return}}function Np(e,t,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:Qa(e,n),s&4&&hr(5,n);break;case 1:if(Qa(e,n),s&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(v){ke(n,n.return,v)}else{var d=fl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ke(n,n.return,v)}}s&64&&yp(n),s&512&&gr(n,n.return);break;case 3:if(Qa(e,n),s&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{um(e,t)}catch(v){ke(n,n.return,v)}}break;case 27:t===null&&s&4&&Cp(n);case 26:case 5:Qa(e,n),t===null&&s&4&&_p(n),s&512&&gr(n,n.return);break;case 12:Qa(e,n);break;case 31:Qa(e,n),s&4&&jp(e,n);break;case 13:Qa(e,n),s&4&&Mp(e,n),s&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zv.bind(null,n),p2(e,n))));break;case 22:if(s=n.memoizedState!==null||Wa,!s){t=t!==null&&t.memoizedState!==null||rt,d=Wa;var p=rt;Wa=s,(rt=t)&&!p?Ja(e,n,(n.subtreeFlags&8772)!==0):Qa(e,n),Wa=d,rt=p}break;case 30:break;default:Qa(e,n)}}function Rp(e){var t=e.alternate;t!==null&&(e.alternate=null,Rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,Et=!1;function Ka(e,t,n){for(n=n.child;n!==null;)Tp(e,t,n),n=n.sibling}function Tp(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Zn,n)}catch{}switch(n.tag){case 26:rt||Ma(n,t),Ka(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:rt||Ma(n,t);var s=Ve,d=Et;Mn(n.type)&&(Ve=n.stateNode,Et=!1),Ka(e,t,n),Ar(n.stateNode),Ve=s,Et=d;break;case 5:rt||Ma(n,t);case 6:if(s=Ve,d=Et,Ve=null,Ka(e,t,n),Ve=s,Et=d,Ve!==null)if(Et)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(n.stateNode)}catch(p){ke(n,t,p)}else try{Ve.removeChild(n.stateNode)}catch(p){ke(n,t,p)}break;case 18:Ve!==null&&(Et?(e=Ve,yh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),di(e)):yh(Ve,n.stateNode));break;case 4:s=Ve,d=Et,Ve=n.stateNode.containerInfo,Et=!0,Ka(e,t,n),Ve=s,Et=d;break;case 0:case 11:case 14:case 15:wn(2,n,t),rt||wn(4,n,t),Ka(e,t,n);break;case 1:rt||(Ma(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"&&Sp(n,t,s)),Ka(e,t,n);break;case 21:Ka(e,t,n);break;case 22:rt=(s=rt)||n.memoizedState!==null,Ka(e,t,n),rt=s;break;default:Ka(e,t,n)}}function jp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{di(e)}catch(n){ke(t,t.return,n)}}}function Mp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{di(e)}catch(n){ke(t,t.return,n)}}function Iv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ap),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ap),t;default:throw Error(l(435,e.tag))}}function Wo(e,t){var n=Iv(e);t.forEach(function(s){if(!n.has(s)){n.add(s);var d=Wv.bind(null,e,s);s.then(d,d)}})}function Dt(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var d=n[s],p=e,v=t,y=v;e:for(;y!==null;){switch(y.tag){case 27:if(Mn(y.type)){Ve=y.stateNode,Et=!1;break e}break;case 5:Ve=y.stateNode,Et=!1;break e;case 3:case 4:Ve=y.stateNode.containerInfo,Et=!0;break e}y=y.return}if(Ve===null)throw Error(l(160));Tp(p,v,d),Ve=null,Et=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ep(t,e),t=t.sibling}var ya=null;function Ep(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dt(t,e),zt(e),s&4&&(wn(3,e,e.return),hr(3,e),wn(5,e,e.return));break;case 1:Dt(t,e),zt(e),s&512&&(rt||n===null||Ma(n,n.return)),s&64&&Wa&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var d=ya;if(Dt(t,e),zt(e),s&512&&(rt||n===null||Ma(n,n.return)),s&4){var p=n!==null?n.memoizedState:null;if(s=e.memoizedState,n===null)if(s===null)if(e.stateNode===null){e:{s=e.type,n=e.memoizedProps,d=d.ownerDocument||d;t:switch(s){case"title":p=d.getElementsByTagName("title")[0],(!p||p[Pi]||p[mt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(s),d.head.insertBefore(p,d.querySelector("head > title"))),xt(p,s,n),p[mt]=e,ut(p),s=p;break e;case"link":var v=Eh("link","href",d).get(s+(n.href||""));if(v){for(var y=0;y<v.length;y++)if(p=v[y],p.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&p.getAttribute("rel")===(n.rel==null?null:n.rel)&&p.getAttribute("title")===(n.title==null?null:n.title)&&p.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){v.splice(y,1);break t}}p=d.createElement(s),xt(p,s,n),d.head.appendChild(p);break;case"meta":if(v=Eh("meta","content",d).get(s+(n.content||""))){for(y=0;y<v.length;y++)if(p=v[y],p.getAttribute("content")===(n.content==null?null:""+n.content)&&p.getAttribute("name")===(n.name==null?null:n.name)&&p.getAttribute("property")===(n.property==null?null:n.property)&&p.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&p.getAttribute("charset")===(n.charSet==null?null:n.charSet)){v.splice(y,1);break t}}p=d.createElement(s),xt(p,s,n),d.head.appendChild(p);break;default:throw Error(l(468,s))}p[mt]=e,ut(p),s=p}e.stateNode=s}else Dh(d,e.type,e.stateNode);else e.stateNode=Mh(d,s,e.memoizedProps);else p!==s?(p===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):p.count--,s===null?Dh(d,e.type,e.stateNode):Mh(d,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Du(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dt(t,e),zt(e),s&512&&(rt||n===null||Ma(n,n.return)),n!==null&&s&4&&Du(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dt(t,e),zt(e),s&512&&(rt||n===null||Ma(n,n.return)),e.flags&32){d=e.stateNode;try{Ll(d,"")}catch(se){ke(e,e.return,se)}}s&4&&e.stateNode!=null&&(d=e.memoizedProps,Du(e,d,n!==null?n.memoizedProps:d)),s&1024&&(Lu=!0);break;case 6:if(Dt(t,e),zt(e),s&4){if(e.stateNode===null)throw Error(l(162));s=e.memoizedProps,n=e.stateNode;try{n.nodeValue=s}catch(se){ke(e,e.return,se)}}break;case 3:if(fs=null,d=ya,ya=cs(t.containerInfo),Dt(t,e),ya=d,zt(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(se){ke(e,e.return,se)}Lu&&(Lu=!1,Dp(e));break;case 4:s=ya,ya=cs(e.stateNode.containerInfo),Dt(t,e),zt(e),ya=s;break;case 12:Dt(t,e),zt(e);break;case 31:Dt(t,e),zt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Wo(e,s)));break;case 13:Dt(t,e),zt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Qo=yt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Wo(e,s)));break;case 22:d=e.memoizedState!==null;var z=n!==null&&n.memoizedState!==null,P=Wa,Z=rt;if(Wa=P||d,rt=Z||z,Dt(t,e),rt=Z,Wa=P,zt(e),s&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(n===null||z||Wa||rt||dl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){z=n=t;try{if(p=z.stateNode,d)v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{y=z.stateNode;var J=z.memoizedProps.style,q=J!=null&&J.hasOwnProperty("display")?J.display:null;y.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(se){ke(z,z.return,se)}}}else if(t.tag===6){if(n===null){z=t;try{z.stateNode.nodeValue=d?"":z.memoizedProps}catch(se){ke(z,z.return,se)}}}else if(t.tag===18){if(n===null){z=t;try{var X=z.stateNode;d?Sh(X,!0):Sh(z.stateNode,!1)}catch(se){ke(z,z.return,se)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,Wo(e,n))));break;case 19:Dt(t,e),zt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Wo(e,s)));break;case 30:break;case 21:break;default:Dt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{for(var n,s=e.return;s!==null;){if(wp(s)){n=s;break}s=s.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var d=n.stateNode,p=zu(e);Zo(e,p,d);break;case 5:var v=n.stateNode;n.flags&32&&(Ll(v,""),n.flags&=-33);var y=zu(e);Zo(e,y,v);break;case 3:case 4:var z=n.stateNode.containerInfo,P=zu(e);ku(e,P,z);break;default:throw Error(l(161))}}catch(Z){ke(e,e.return,Z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Dp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Np(e,t.alternate,t),t=t.sibling}function dl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:wn(4,t,t.return),dl(t);break;case 1:Ma(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Sp(t,t.return,n),dl(t);break;case 27:Ar(t.stateNode);case 26:case 5:Ma(t,t.return),dl(t);break;case 22:t.memoizedState===null&&dl(t);break;case 30:dl(t);break;default:dl(t)}e=e.sibling}}function Ja(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,d=e,p=t,v=p.flags;switch(p.tag){case 0:case 11:case 15:Ja(d,p,n),hr(4,p);break;case 1:if(Ja(d,p,n),s=p,d=s.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(P){ke(s,s.return,P)}if(s=p,d=s.updateQueue,d!==null){var y=s.stateNode;try{var z=d.shared.hiddenCallbacks;if(z!==null)for(d.shared.hiddenCallbacks=null,d=0;d<z.length;d++)cm(z[d],y)}catch(P){ke(s,s.return,P)}}n&&v&64&&yp(p),gr(p,p.return);break;case 27:Cp(p);case 26:case 5:Ja(d,p,n),n&&s===null&&v&4&&_p(p),gr(p,p.return);break;case 12:Ja(d,p,n);break;case 31:Ja(d,p,n),n&&v&4&&jp(d,p);break;case 13:Ja(d,p,n),n&&v&4&&Mp(d,p);break;case 22:p.memoizedState===null&&Ja(d,p,n),gr(p,p.return);break;case 30:break;default:Ja(d,p,n)}t=t.sibling}}function Bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ar(n))}function Ou(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ar(e))}function Sa(e,t,n,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zp(e,t,n,s),t=t.sibling}function zp(e,t,n,s){var d=t.flags;switch(t.tag){case 0:case 11:case 15:Sa(e,t,n,s),d&2048&&hr(9,t);break;case 1:Sa(e,t,n,s);break;case 3:Sa(e,t,n,s),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ar(e)));break;case 12:if(d&2048){Sa(e,t,n,s),e=t.stateNode;try{var p=t.memoizedProps,v=p.id,y=p.onPostCommit;typeof y=="function"&&y(v,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){ke(t,t.return,z)}}else Sa(e,t,n,s);break;case 31:Sa(e,t,n,s);break;case 13:Sa(e,t,n,s);break;case 23:break;case 22:p=t.stateNode,v=t.alternate,t.memoizedState!==null?p._visibility&2?Sa(e,t,n,s):xr(e,t):p._visibility&2?Sa(e,t,n,s):(p._visibility|=2,ti(e,t,n,s,(t.subtreeFlags&10256)!==0||!1)),d&2048&&Bu(v,t);break;case 24:Sa(e,t,n,s),d&2048&&Ou(t.alternate,t);break;default:Sa(e,t,n,s)}}function ti(e,t,n,s,d){for(d=d&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var p=e,v=t,y=n,z=s,P=v.flags;switch(v.tag){case 0:case 11:case 15:ti(p,v,y,z,d),hr(8,v);break;case 23:break;case 22:var Z=v.stateNode;v.memoizedState!==null?Z._visibility&2?ti(p,v,y,z,d):xr(p,v):(Z._visibility|=2,ti(p,v,y,z,d)),d&&P&2048&&Bu(v.alternate,v);break;case 24:ti(p,v,y,z,d),d&&P&2048&&Ou(v.alternate,v);break;default:ti(p,v,y,z,d)}t=t.sibling}}function xr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,s=t,d=s.flags;switch(s.tag){case 22:xr(n,s),d&2048&&Bu(s.alternate,s);break;case 24:xr(n,s),d&2048&&Ou(s.alternate,s);break;default:xr(n,s)}t=t.sibling}}var vr=8192;function ai(e,t,n){if(e.subtreeFlags&vr)for(e=e.child;e!==null;)kp(e,t,n),e=e.sibling}function kp(e,t,n){switch(e.tag){case 26:ai(e,t,n),e.flags&vr&&e.memoizedState!==null&&N2(n,ya,e.memoizedState,e.memoizedProps);break;case 5:ai(e,t,n);break;case 3:case 4:var s=ya;ya=cs(e.stateNode.containerInfo),ai(e,t,n),ya=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=vr,vr=16777216,ai(e,t,n),vr=s):ai(e,t,n));break;default:ai(e,t,n)}}function Lp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function br(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];ft=s,Op(s,e)}Lp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bp(e),e=e.sibling}function Bp(e){switch(e.tag){case 0:case 11:case 15:br(e),e.flags&2048&&wn(9,e,e.return);break;case 3:br(e);break;case 12:br(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ko(e)):br(e);break;default:br(e)}}function Ko(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];ft=s,Op(s,e)}Lp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wn(8,t,t.return),Ko(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ko(t));break;default:Ko(t)}e=e.sibling}}function Op(e,t){for(;ft!==null;){var n=ft;switch(n.tag){case 0:case 11:case 15:wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ar(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,ft=s;else e:for(n=e;ft!==null;){s=ft;var d=s.sibling,p=s.return;if(Rp(s),s===n){ft=null;break e}if(d!==null){d.return=p,ft=d;break e}ft=p}}}var Uv={getCacheForType:function(e){var t=ht(nt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ht(nt).controller.signal}},Hv=typeof WeakMap=="function"?WeakMap:Map,De=0,Fe=null,Se=null,we=0,ze=0,Xt=null,Cn=!1,ni=!1,Fu=!1,$a=0,Je=0,An=0,ml=0,Gu=0,Zt=0,li=0,yr=null,kt=null,Iu=!1,Qo=0,Fp=0,Jo=1/0,$o=null,Nn=null,st=0,Rn=null,ii=null,en=0,Uu=0,Hu=null,Gp=null,Sr=0,Pu=null;function Wt(){return(De&2)!==0&&we!==0?we&-we:U.T!==null?Wu():t0()}function Ip(){if(Zt===0)if((we&536870912)===0||Ae){var e=ro;ro<<=1,(ro&3932160)===0&&(ro=262144),Zt=e}else Zt=536870912;return e=Vt.current,e!==null&&(e.flags|=32),Zt}function Lt(e,t,n){(e===Fe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(ri(e,0),Tn(e,we,Zt,!1)),Hi(e,n),((De&2)===0||e!==Fe)&&(e===Fe&&((De&2)===0&&(ml|=n),Je===4&&Tn(e,we,Zt,!1)),Ea(e))}function Up(e,t,n){if((De&6)!==0)throw Error(l(327));var s=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ui(e,t),d=s?Vv(e,t):Vu(e,t,!0),p=s;do{if(d===0){ni&&!s&&Tn(e,t,0,!1);break}else{if(n=e.current.alternate,p&&!Pv(n)){d=Vu(e,t,!1),p=!1;continue}if(d===2){if(p=t,e.errorRecoveryDisabledLanes&p)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){t=v;e:{var y=e;d=yr;var z=y.current.memoizedState.isDehydrated;if(z&&(ri(y,v).flags|=256),v=Vu(y,v,!1),v!==2){if(Fu&&!z){y.errorRecoveryDisabledLanes|=p,ml|=p,d=4;break e}p=kt,kt=d,p!==null&&(kt===null?kt=p:kt.push.apply(kt,p))}d=v}if(p=!1,d!==2)continue}}if(d===1){ri(e,0),Tn(e,t,0,!0);break}e:{switch(s=e,p=d,p){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Tn(s,t,Zt,!Cn);break e;case 2:kt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(d=Qo+300-yt(),10<d)){if(Tn(s,t,Zt,!Cn),so(s,0,!0)!==0)break e;en=t,s.timeoutHandle=vh(Hp.bind(null,s,n,kt,$o,Iu,t,Zt,ml,li,Cn,p,"Throttled",-0,0),d);break e}Hp(s,n,kt,$o,Iu,t,Zt,ml,li,Cn,p,null,-0,0)}}break}while(!0);Ea(e)}function Hp(e,t,n,s,d,p,v,y,z,P,Z,J,q,X){if(e.timeoutHandle=-1,J=t.subtreeFlags,J&8192||(J&16785408)===16785408){J={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ga},kp(t,p,J);var se=(p&62914560)===p?Qo-yt():(p&4194048)===p?Fp-yt():0;if(se=R2(J,se),se!==null){en=p,e.cancelPendingCommit=se(Kp.bind(null,e,t,p,n,s,d,v,y,z,Z,J,null,q,X)),Tn(e,p,v,!P);return}}Kp(e,t,p,n,s,d,v,y,z)}function Pv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var d=n[s],p=d.getSnapshot;d=d.value;try{if(!Pt(p(),d))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t,n,s){t&=~Gu,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var d=t;0<d;){var p=31-_t(d),v=1<<p;s[p]=-1,d&=~v}n!==0&&Jd(e,n,t)}function es(){return(De&6)===0?(_r(0),!1):!0}function qu(){if(Se!==null){if(ze===0)var e=Se.return;else e=Se,Pa=ll=null,ru(e),Kl=null,lr=0,e=Se;for(;e!==null;)bp(e.alternate,e),e=e.return;Se=null}}function ri(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,c2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),en=0,qu(),Fe=e,Se=n=Ua(e.current,null),we=t,ze=0,Xt=null,Cn=!1,ni=Ui(e,t),Fu=!1,li=Zt=Gu=ml=An=Je=0,kt=yr=null,Iu=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var d=31-_t(s),p=1<<d;t|=e[d],s&=~p}return $a=t,So(),n}function Pp(e,t){be=null,U.H=dr,t===Wl||t===jo?(t=im(),ze=3):t===Zc?(t=im(),ze=4):ze=t===_u?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Xt=t,Se===null&&(Je=1,Po(e,ra(t,e.current)))}function qp(){var e=Vt.current;return e===null?!0:(we&4194048)===we?ua===null:(we&62914560)===we||(we&536870912)!==0?e===ua:!1}function Vp(){var e=U.H;return U.H=dr,e===null?dr:e}function Yp(){var e=U.A;return U.A=Uv,e}function ts(){Je=4,Cn||(we&4194048)!==we&&Vt.current!==null||(ni=!0),(An&134217727)===0&&(ml&134217727)===0||Fe===null||Tn(Fe,we,Zt,!1)}function Vu(e,t,n){var s=De;De|=2;var d=Vp(),p=Yp();(Fe!==e||we!==t)&&($o=null,ri(e,t)),t=!1;var v=Je;e:do try{if(ze!==0&&Se!==null){var y=Se,z=Xt;switch(ze){case 8:qu(),v=6;break e;case 3:case 2:case 9:case 6:Vt.current===null&&(t=!0);var P=ze;if(ze=0,Xt=null,oi(e,y,z,P),n&&ni){v=0;break e}break;default:P=ze,ze=0,Xt=null,oi(e,y,z,P)}}qv(),v=Je;break}catch(Z){Pp(e,Z)}while(!0);return t&&e.shellSuspendCounter++,Pa=ll=null,De=s,U.H=d,U.A=p,Se===null&&(Fe=null,we=0,So()),v}function qv(){for(;Se!==null;)Xp(Se)}function Vv(e,t){var n=De;De|=2;var s=Vp(),d=Yp();Fe!==e||we!==t?($o=null,Jo=yt()+500,ri(e,t)):ni=Ui(e,t);e:do try{if(ze!==0&&Se!==null){t=Se;var p=Xt;t:switch(ze){case 1:ze=0,Xt=null,oi(e,t,p,1);break;case 2:case 9:if(nm(p)){ze=0,Xt=null,Zp(t);break}t=function(){ze!==2&&ze!==9||Fe!==e||(ze=7),Ea(e)},p.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:nm(p)?(ze=0,Xt=null,Zp(t)):(ze=0,Xt=null,oi(e,t,p,7));break;case 5:var v=null;switch(Se.tag){case 26:v=Se.memoizedState;case 5:case 27:var y=Se;if(v?zh(v):y.stateNode.complete){ze=0,Xt=null;var z=y.sibling;if(z!==null)Se=z;else{var P=y.return;P!==null?(Se=P,as(P)):Se=null}break t}}ze=0,Xt=null,oi(e,t,p,5);break;case 6:ze=0,Xt=null,oi(e,t,p,6);break;case 8:qu(),Je=6;break e;default:throw Error(l(462))}}Yv();break}catch(Z){Pp(e,Z)}while(!0);return Pa=ll=null,U.H=s,U.A=d,De=n,Se!==null?0:(Fe=null,we=0,So(),Je)}function Yv(){for(;Se!==null&&!ge();)Xp(Se)}function Xp(e){var t=xp(e.alternate,e,$a);e.memoizedProps=e.pendingProps,t===null?as(e):Se=t}function Zp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=fp(n,t,t.pendingProps,t.type,void 0,we);break;case 11:t=fp(n,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:ru(t);default:bp(n,t),t=Se=Y0(t,$a),t=xp(n,t,$a)}e.memoizedProps=e.pendingProps,t===null?as(e):Se=t}function oi(e,t,n,s){Pa=ll=null,ru(t),Kl=null,lr=0;var d=t.return;try{if(kv(e,d,t,n,we)){Je=1,Po(e,ra(n,e.current)),Se=null;return}}catch(p){if(d!==null)throw Se=d,p;Je=1,Po(e,ra(n,e.current)),Se=null;return}t.flags&32768?(Ae||s===1?e=!0:ni||(we&536870912)!==0?e=!1:(Cn=e=!0,(s===2||s===9||s===3||s===6)&&(s=Vt.current,s!==null&&s.tag===13&&(s.flags|=16384))),Wp(t,e)):as(t)}function as(e){var t=e;do{if((t.flags&32768)!==0){Wp(t,Cn);return}e=t.return;var n=Ov(t.alternate,t,$a);if(n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Je===0&&(Je=5)}function Wp(e,t){do{var n=Fv(e.alternate,e);if(n!==null){n.flags&=32767,Se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Se=e;return}Se=e=n}while(e!==null);Je=6,Se=null}function Kp(e,t,n,s,d,p,v,y,z){e.cancelPendingCommit=null;do ns();while(st!==0);if((De&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(p=t.lanes|t.childLanes,p|=zc,A1(e,n,p,v,y,z),e===Fe&&(Se=Fe=null,we=0),ii=t,Rn=e,en=n,Uu=p,Hu=d,Gp=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Kv(Xn,function(){return th(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,d=W.p,W.p=2,v=De,De|=4;try{Gv(e,t,n)}finally{De=v,W.p=d,U.T=s}}st=1,Qp(),Jp(),$p()}}function Qp(){if(st===1){st=0;var e=Rn,t=ii,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=U.T,U.T=null;var s=W.p;W.p=2;var d=De;De|=4;try{Ep(t,e);var p=nf,v=O0(e.containerInfo),y=p.focusedElem,z=p.selectionRange;if(v!==y&&y&&y.ownerDocument&&B0(y.ownerDocument.documentElement,y)){if(z!==null&&Tc(y)){var P=z.start,Z=z.end;if(Z===void 0&&(Z=P),"selectionStart"in y)y.selectionStart=P,y.selectionEnd=Math.min(Z,y.value.length);else{var J=y.ownerDocument||document,q=J&&J.defaultView||window;if(q.getSelection){var X=q.getSelection(),se=y.textContent.length,de=Math.min(z.start,se),Oe=z.end===void 0?de:Math.min(z.end,se);!X.extend&&de>Oe&&(v=Oe,Oe=de,de=v);var I=L0(y,de),O=L0(y,Oe);if(I&&O&&(X.rangeCount!==1||X.anchorNode!==I.node||X.anchorOffset!==I.offset||X.focusNode!==O.node||X.focusOffset!==O.offset)){var H=J.createRange();H.setStart(I.node,I.offset),X.removeAllRanges(),de>Oe?(X.addRange(H),X.extend(O.node,O.offset)):(H.setEnd(O.node,O.offset),X.addRange(H))}}}}for(J=[],X=y;X=X.parentNode;)X.nodeType===1&&J.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<J.length;y++){var K=J[y];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}hs=!!af,nf=af=null}finally{De=d,W.p=s,U.T=n}}e.current=t,st=2}}function Jp(){if(st===2){st=0;var e=Rn,t=ii,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=U.T,U.T=null;var s=W.p;W.p=2;var d=De;De|=4;try{Np(e,t.alternate,t)}finally{De=d,W.p=s,U.T=n}}st=3}}function $p(){if(st===4||st===3){st=0,Tl();var e=Rn,t=ii,n=en,s=Gp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?st=5:(st=0,ii=Rn=null,eh(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(Nn=null),cc(n),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Zn,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=U.T,d=W.p,W.p=2,U.T=null;try{for(var p=e.onRecoverableError,v=0;v<s.length;v++){var y=s[v];p(y.value,{componentStack:y.stack})}}finally{U.T=t,W.p=d}}(en&3)!==0&&ns(),Ea(e),d=e.pendingLanes,(n&261930)!==0&&(d&42)!==0?e===Pu?Sr++:(Sr=0,Pu=e):Sr=0,_r(0)}}function eh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ar(t)))}function ns(){return Qp(),Jp(),$p(),th()}function th(){if(st!==5)return!1;var e=Rn,t=Uu;Uu=0;var n=cc(en),s=U.T,d=W.p;try{W.p=32>n?32:n,U.T=null,n=Hu,Hu=null;var p=Rn,v=en;if(st=0,ii=Rn=null,en=0,(De&6)!==0)throw Error(l(331));var y=De;if(De|=4,Bp(p.current),zp(p,p.current,v,n),De=y,_r(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Zn,p)}catch{}return!0}finally{W.p=d,U.T=s,eh(e,t)}}function ah(e,t,n){t=ra(n,t),t=Su(e.stateNode,t,2),e=yn(e,t,2),e!==null&&(Hi(e,2),Ea(e))}function ke(e,t,n){if(e.tag===3)ah(e,e,n);else for(;t!==null;){if(t.tag===3){ah(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Nn===null||!Nn.has(s))){e=ra(n,e),n=np(2),s=yn(t,n,2),s!==null&&(lp(n,s,t,e),Hi(s,2),Ea(s));break}}t=t.return}}function Yu(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Hv;var d=new Set;s.set(t,d)}else d=s.get(t),d===void 0&&(d=new Set,s.set(t,d));d.has(n)||(Fu=!0,d.add(n),e=Xv.bind(null,e,t,n),t.then(e,e))}function Xv(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fe===e&&(we&n)===n&&(Je===4||Je===3&&(we&62914560)===we&&300>yt()-Qo?(De&2)===0&&ri(e,0):Gu|=n,li===we&&(li=0)),Ea(e)}function nh(e,t){t===0&&(t=Qd()),e=tl(e,t),e!==null&&(Hi(e,t),Ea(e))}function Zv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nh(e,n)}function Wv(e,t){var n=0;switch(e.tag){case 31:case 13:var s=e.stateNode,d=e.memoizedState;d!==null&&(n=d.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(t),nh(e,n)}function Kv(e,t){return fn(e,t)}var ls=null,si=null,Xu=!1,is=!1,Zu=!1,jn=0;function Ea(e){e!==si&&e.next===null&&(si===null?ls=si=e:si=si.next=e),is=!0,Xu||(Xu=!0,Jv())}function _r(e,t){if(!Zu&&is){Zu=!0;do for(var n=!1,s=ls;s!==null;){if(e!==0){var d=s.pendingLanes;if(d===0)var p=0;else{var v=s.suspendedLanes,y=s.pingedLanes;p=(1<<31-_t(42|e)+1)-1,p&=d&~(v&~y),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(n=!0,oh(s,p))}else p=we,p=so(s,s===Fe?p:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(p&3)===0||Ui(s,p)||(n=!0,oh(s,p));s=s.next}while(n);Zu=!1}}function Qv(){lh()}function lh(){is=Xu=!1;var e=0;jn!==0&&s2()&&(e=jn);for(var t=yt(),n=null,s=ls;s!==null;){var d=s.next,p=ih(s,t);p===0?(s.next=null,n===null?ls=d:n.next=d,d===null&&(si=n)):(n=s,(e!==0||(p&3)!==0)&&(is=!0)),s=d}st!==0&&st!==5||_r(e),jn!==0&&(jn=0)}function ih(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,d=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var v=31-_t(p),y=1<<v,z=d[v];z===-1?((y&n)===0||(y&s)!==0)&&(d[v]=C1(y,t)):z<=t&&(e.expiredLanes|=y),p&=~y}if(t=Fe,n=we,n=so(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Oa(s),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ui(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(s!==null&&Oa(s),cc(n)){case 2:case 8:n=lo;break;case 32:n=Xn;break;case 268435456:n=Ii;break;default:n=Xn}return s=rh.bind(null,e),n=fn(n,s),e.callbackPriority=t,e.callbackNode=n,t}return s!==null&&s!==null&&Oa(s),e.callbackPriority=2,e.callbackNode=null,2}function rh(e,t){if(st!==0&&st!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ns()&&e.callbackNode!==n)return null;var s=we;return s=so(e,e===Fe?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Up(e,s,t),ih(e,yt()),e.callbackNode!=null&&e.callbackNode===n?rh.bind(null,e):null)}function oh(e,t){if(ns())return null;Up(e,t,!0)}function Jv(){u2(function(){(De&6)!==0?fn(Gi,Qv):lh()})}function Wu(){if(jn===0){var e=Xl;e===0&&(e=va,va<<=1,(va&261888)===0&&(va=256)),jn=e}return jn}function sh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mo(""+e)}function ch(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function $v(e,t,n,s,d){if(t==="submit"&&n&&n.stateNode===d){var p=sh((d[jt]||null).action),v=s.submitter;v&&(t=(t=v[jt]||null)?sh(t.formAction):v.getAttribute("formAction"),t!==null&&(p=t,v=null));var y=new xo("action","action",null,s,d);e.push({event:y,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(jn!==0){var z=v?ch(d,v):new FormData(d);hu(n,{pending:!0,data:z,method:d.method,action:p},null,z)}}else typeof p=="function"&&(y.preventDefault(),z=v?ch(d,v):new FormData(d),hu(n,{pending:!0,data:z,method:d.method,action:p},p,z))},currentTarget:d}]})}}for(var Ku=0;Ku<Dc.length;Ku++){var Qu=Dc[Ku],e2=Qu.toLowerCase(),t2=Qu[0].toUpperCase()+Qu.slice(1);ba(e2,"on"+t2)}ba(I0,"onAnimationEnd"),ba(U0,"onAnimationIteration"),ba(H0,"onAnimationStart"),ba("dblclick","onDoubleClick"),ba("focusin","onFocus"),ba("focusout","onBlur"),ba(xv,"onTransitionRun"),ba(vv,"onTransitionStart"),ba(bv,"onTransitionCancel"),ba(P0,"onTransitionEnd"),zl("onMouseEnter",["mouseout","mouseover"]),zl("onMouseLeave",["mouseout","mouseover"]),zl("onPointerEnter",["pointerout","pointerover"]),zl("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wr));function uh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],d=s.event;s=s.listeners;e:{var p=void 0;if(t)for(var v=s.length-1;0<=v;v--){var y=s[v],z=y.instance,P=y.currentTarget;if(y=y.listener,z!==p&&d.isPropagationStopped())break e;p=y,d.currentTarget=P;try{p(d)}catch(Z){yo(Z)}d.currentTarget=null,p=z}else for(v=0;v<s.length;v++){if(y=s[v],z=y.instance,P=y.currentTarget,y=y.listener,z!==p&&d.isPropagationStopped())break e;p=y,d.currentTarget=P;try{p(d)}catch(Z){yo(Z)}d.currentTarget=null,p=z}}}}function _e(e,t){var n=t[uc];n===void 0&&(n=t[uc]=new Set);var s=e+"__bubble";n.has(s)||(fh(t,e,2,!1),n.add(s))}function Ju(e,t,n){var s=0;t&&(s|=4),fh(n,e,s,t)}var rs="_reactListening"+Math.random().toString(36).slice(2);function $u(e){if(!e[rs]){e[rs]=!0,l0.forEach(function(n){n!=="selectionchange"&&(a2.has(n)||Ju(n,!1,e),Ju(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rs]||(t[rs]=!0,Ju("selectionchange",!1,t))}}function fh(e,t,n,s){switch(Ih(t)){case 2:var d=M2;break;case 8:d=E2;break;default:d=hf}n=d.bind(null,t,n,e),d=void 0,!bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),s?d!==void 0?e.addEventListener(t,n,{capture:!0,passive:d}):e.addEventListener(t,n,!0):d!==void 0?e.addEventListener(t,n,{passive:d}):e.addEventListener(t,n,!1)}function ef(e,t,n,s,d){var p=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var y=s.stateNode.containerInfo;if(y===d)break;if(v===4)for(v=s.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===d)return;v=v.return}for(;y!==null;){if(v=Ml(y),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){s=p=v;continue e}y=y.parentNode}}s=s.return}g0(function(){var P=p,Z=xc(n),J=[];e:{var q=q0.get(e);if(q!==void 0){var X=xo,se=e;switch(e){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":X=W1;break;case"focusin":se="focus",X=wc;break;case"focusout":se="blur",X=wc;break;case"beforeblur":case"afterblur":X=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=b0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=O1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=J1;break;case I0:case U0:case H0:X=I1;break;case P0:X=ev;break;case"scroll":case"scrollend":X=L1;break;case"wheel":X=av;break;case"copy":case"cut":case"paste":X=H1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=S0;break;case"toggle":case"beforetoggle":X=lv}var de=(t&4)!==0,Oe=!de&&(e==="scroll"||e==="scrollend"),I=de?q!==null?q+"Capture":null:q;de=[];for(var O=P,H;O!==null;){var K=O;if(H=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||H===null||I===null||(K=Vi(O,I),K!=null&&de.push(Cr(O,K,H))),Oe)break;O=O.return}0<de.length&&(q=new X(q,se,null,n,Z),J.push({event:q,listeners:de}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",q&&n!==gc&&(se=n.relatedTarget||n.fromElement)&&(Ml(se)||se[jl]))break e;if((X||q)&&(q=Z.window===Z?Z:(q=Z.ownerDocument)?q.defaultView||q.parentWindow:window,X?(se=n.relatedTarget||n.toElement,X=P,se=se?Ml(se):null,se!==null&&(Oe=f(se),de=se.tag,se!==Oe||de!==5&&de!==27&&de!==6)&&(se=null)):(X=null,se=P),X!==se)){if(de=b0,K="onMouseLeave",I="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(de=S0,K="onPointerLeave",I="onPointerEnter",O="pointer"),Oe=X==null?q:qi(X),H=se==null?q:qi(se),q=new de(K,O+"leave",X,n,Z),q.target=Oe,q.relatedTarget=H,K=null,Ml(Z)===P&&(de=new de(I,O+"enter",se,n,Z),de.target=H,de.relatedTarget=Oe,K=de),Oe=K,X&&se)t:{for(de=n2,I=X,O=se,H=0,K=I;K;K=de(K))H++;K=0;for(var fe=O;fe;fe=de(fe))K++;for(;0<H-K;)I=de(I),H--;for(;0<K-H;)O=de(O),K--;for(;H--;){if(I===O||O!==null&&I===O.alternate){de=I;break t}I=de(I),O=de(O)}de=null}else de=null;X!==null&&dh(J,q,X,de,!1),se!==null&&Oe!==null&&dh(J,Oe,se,de,!0)}}e:{if(q=P?qi(P):window,X=q.nodeName&&q.nodeName.toLowerCase(),X==="select"||X==="input"&&q.type==="file")var je=j0;else if(R0(q))if(M0)je=pv;else{je=dv;var ue=fv}else X=q.nodeName,!X||X.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?P&&hc(P.elementType)&&(je=j0):je=mv;if(je&&(je=je(e,P))){T0(J,je,n,Z);break e}ue&&ue(e,q,P),e==="focusout"&&P&&q.type==="number"&&P.memoizedProps.value!=null&&pc(q,"number",q.value)}switch(ue=P?qi(P):window,e){case"focusin":(R0(ue)||ue.contentEditable==="true")&&(Gl=ue,jc=P,$i=null);break;case"focusout":$i=jc=Gl=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,F0(J,n,Z);break;case"selectionchange":if(gv)break;case"keydown":case"keyup":F0(J,n,Z)}var ye;if(Ac)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Fl?A0(e,n)&&(Ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ce="onCompositionStart");Ce&&(_0&&n.locale!=="ko"&&(Fl||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Fl&&(ye=x0()):(mn=Z,yc="value"in mn?mn.value:mn.textContent,Fl=!0)),ue=os(P,Ce),0<ue.length&&(Ce=new y0(Ce,e,null,n,Z),J.push({event:Ce,listeners:ue}),ye?Ce.data=ye:(ye=N0(n),ye!==null&&(Ce.data=ye)))),(ye=rv?ov(e,n):sv(e,n))&&(Ce=os(P,"onBeforeInput"),0<Ce.length&&(ue=new y0("onBeforeInput","beforeinput",null,n,Z),J.push({event:ue,listeners:Ce}),ue.data=ye)),$v(J,e,P,n,Z)}uh(J,t)})}function Cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function os(e,t){for(var n=t+"Capture",s=[];e!==null;){var d=e,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=Vi(e,n),d!=null&&s.unshift(Cr(e,d,p)),d=Vi(e,t),d!=null&&s.push(Cr(e,d,p))),e.tag===3)return s;e=e.return}return[]}function n2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dh(e,t,n,s,d){for(var p=t._reactName,v=[];n!==null&&n!==s;){var y=n,z=y.alternate,P=y.stateNode;if(y=y.tag,z!==null&&z===s)break;y!==5&&y!==26&&y!==27||P===null||(z=P,d?(P=Vi(n,p),P!=null&&v.unshift(Cr(n,P,z))):d||(P=Vi(n,p),P!=null&&v.push(Cr(n,P,z)))),n=n.return}v.length!==0&&e.push({event:t,listeners:v})}var l2=/\r\n?/g,i2=/\u0000|\uFFFD/g;function mh(e){return(typeof e=="string"?e:""+e).replace(l2,`
`).replace(i2,"")}function ph(e,t){return t=mh(t),mh(e)===t}function Be(e,t,n,s,d,p){switch(n){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||Ll(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&Ll(e,""+s);break;case"className":uo(e,"class",s);break;case"tabIndex":uo(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":uo(e,n,s);break;case"style":p0(e,s,p);break;case"data":if(t!=="object"){uo(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=mo(""+s),e.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(n==="formAction"?(t!=="input"&&Be(e,t,"name",d.name,d,null),Be(e,t,"formEncType",d.formEncType,d,null),Be(e,t,"formMethod",d.formMethod,d,null),Be(e,t,"formTarget",d.formTarget,d,null)):(Be(e,t,"encType",d.encType,d,null),Be(e,t,"method",d.method,d,null),Be(e,t,"target",d.target,d,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=mo(""+s),e.setAttribute(n,s);break;case"onClick":s!=null&&(e.onclick=Ga);break;case"onScroll":s!=null&&_e("scroll",e);break;case"onScrollEnd":s!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(n=s.__html,n!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}n=mo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""+s):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":s===!0?e.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,s):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(n,s):e.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(n):e.setAttribute(n,s);break;case"popover":_e("beforetoggle",e),_e("toggle",e),co(e,"popover",s);break;case"xlinkActuate":Fa(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Fa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Fa(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Fa(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Fa(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Fa(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":co(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=z1.get(n)||n,co(e,n,s))}}function tf(e,t,n,s,d,p){switch(n){case"style":p0(e,s,p);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(n=s.__html,n!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof s=="string"?Ll(e,s):(typeof s=="number"||typeof s=="bigint")&&Ll(e,""+s);break;case"onScroll":s!=null&&_e("scroll",e);break;case"onScrollEnd":s!=null&&_e("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!i0.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(d=n.endsWith("Capture"),t=n.slice(2,d?n.length-7:void 0),p=e[jt]||null,p=p!=null?p[n]:null,typeof p=="function"&&e.removeEventListener(t,p,d),typeof s=="function")){typeof p!="function"&&p!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,s,d);break e}n in e?e[n]=s:s===!0?e.setAttribute(n,""):co(e,n,s)}}}function xt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var s=!1,d=!1,p;for(p in n)if(n.hasOwnProperty(p)){var v=n[p];if(v!=null)switch(p){case"src":s=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Be(e,t,p,v,n,null)}}d&&Be(e,t,"srcSet",n.srcSet,n,null),s&&Be(e,t,"src",n.src,n,null);return;case"input":_e("invalid",e);var y=p=v=d=null,z=null,P=null;for(s in n)if(n.hasOwnProperty(s)){var Z=n[s];if(Z!=null)switch(s){case"name":d=Z;break;case"type":v=Z;break;case"checked":z=Z;break;case"defaultChecked":P=Z;break;case"value":p=Z;break;case"defaultValue":y=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(l(137,t));break;default:Be(e,t,s,Z,n,null)}}u0(e,p,y,z,P,v,d,!1);return;case"select":_e("invalid",e),s=v=p=null;for(d in n)if(n.hasOwnProperty(d)&&(y=n[d],y!=null))switch(d){case"value":p=y;break;case"defaultValue":v=y;break;case"multiple":s=y;default:Be(e,t,d,y,n,null)}t=p,n=v,e.multiple=!!s,t!=null?kl(e,!!s,t,!1):n!=null&&kl(e,!!s,n,!0);return;case"textarea":_e("invalid",e),p=d=s=null;for(v in n)if(n.hasOwnProperty(v)&&(y=n[v],y!=null))switch(v){case"value":s=y;break;case"defaultValue":d=y;break;case"children":p=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(l(91));break;default:Be(e,t,v,y,n,null)}d0(e,s,d,p);return;case"option":for(z in n)if(n.hasOwnProperty(z)&&(s=n[z],s!=null))switch(z){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Be(e,t,z,s,n,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(s=0;s<wr.length;s++)_e(wr[s],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in n)if(n.hasOwnProperty(P)&&(s=n[P],s!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Be(e,t,P,s,n,null)}return;default:if(hc(t)){for(Z in n)n.hasOwnProperty(Z)&&(s=n[Z],s!==void 0&&tf(e,t,Z,s,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(s=n[y],s!=null&&Be(e,t,y,s,n,null))}function r2(e,t,n,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,v=null,y=null,z=null,P=null,Z=null;for(X in n){var J=n[X];if(n.hasOwnProperty(X)&&J!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":z=J;default:s.hasOwnProperty(X)||Be(e,t,X,null,s,J)}}for(var q in s){var X=s[q];if(J=n[q],s.hasOwnProperty(q)&&(X!=null||J!=null))switch(q){case"type":p=X;break;case"name":d=X;break;case"checked":P=X;break;case"defaultChecked":Z=X;break;case"value":v=X;break;case"defaultValue":y=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(l(137,t));break;default:X!==J&&Be(e,t,q,X,s,J)}}mc(e,v,y,z,P,Z,p,d);return;case"select":X=v=y=q=null;for(p in n)if(z=n[p],n.hasOwnProperty(p)&&z!=null)switch(p){case"value":break;case"multiple":X=z;default:s.hasOwnProperty(p)||Be(e,t,p,null,s,z)}for(d in s)if(p=s[d],z=n[d],s.hasOwnProperty(d)&&(p!=null||z!=null))switch(d){case"value":q=p;break;case"defaultValue":y=p;break;case"multiple":v=p;default:p!==z&&Be(e,t,d,p,s,z)}t=y,n=v,s=X,q!=null?kl(e,!!n,q,!1):!!s!=!!n&&(t!=null?kl(e,!!n,t,!0):kl(e,!!n,n?[]:"",!1));return;case"textarea":X=q=null;for(y in n)if(d=n[y],n.hasOwnProperty(y)&&d!=null&&!s.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Be(e,t,y,null,s,d)}for(v in s)if(d=s[v],p=n[v],s.hasOwnProperty(v)&&(d!=null||p!=null))switch(v){case"value":q=d;break;case"defaultValue":X=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(l(91));break;default:d!==p&&Be(e,t,v,d,s,p)}f0(e,q,X);return;case"option":for(var se in n)if(q=n[se],n.hasOwnProperty(se)&&q!=null&&!s.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Be(e,t,se,null,s,q)}for(z in s)if(q=s[z],X=n[z],s.hasOwnProperty(z)&&q!==X&&(q!=null||X!=null))switch(z){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Be(e,t,z,q,s,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)q=n[de],n.hasOwnProperty(de)&&q!=null&&!s.hasOwnProperty(de)&&Be(e,t,de,null,s,q);for(P in s)if(q=s[P],X=n[P],s.hasOwnProperty(P)&&q!==X&&(q!=null||X!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(l(137,t));break;default:Be(e,t,P,q,s,X)}return;default:if(hc(t)){for(var Oe in n)q=n[Oe],n.hasOwnProperty(Oe)&&q!==void 0&&!s.hasOwnProperty(Oe)&&tf(e,t,Oe,void 0,s,q);for(Z in s)q=s[Z],X=n[Z],!s.hasOwnProperty(Z)||q===X||q===void 0&&X===void 0||tf(e,t,Z,q,s,X);return}}for(var I in n)q=n[I],n.hasOwnProperty(I)&&q!=null&&!s.hasOwnProperty(I)&&Be(e,t,I,null,s,q);for(J in s)q=s[J],X=n[J],!s.hasOwnProperty(J)||q===X||q==null&&X==null||Be(e,t,J,q,s,X)}function hh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function o2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),s=0;s<n.length;s++){var d=n[s],p=d.transferSize,v=d.initiatorType,y=d.duration;if(p&&y&&hh(v)){for(v=0,y=d.responseEnd,s+=1;s<n.length;s++){var z=n[s],P=z.startTime;if(P>y)break;var Z=z.transferSize,J=z.initiatorType;Z&&hh(J)&&(z=z.responseEnd,v+=Z*(z<y?1:(y-P)/(z-P)))}if(--s,t+=8*(p+v)/(d.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var af=null,nf=null;function ss(e){return e.nodeType===9?e:e.ownerDocument}function gh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rf=null;function s2(){var e=window.event;return e&&e.type==="popstate"?e===rf?!1:(rf=e,!0):(rf=null,!1)}var vh=typeof setTimeout=="function"?setTimeout:void 0,c2=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,u2=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(e){return bh.resolve(null).then(e).catch(f2)}:vh;function f2(e){setTimeout(function(){throw e})}function Mn(e){return e==="head"}function yh(e,t){var n=t,s=0;do{var d=n.nextSibling;if(e.removeChild(n),d&&d.nodeType===8)if(n=d.data,n==="/$"||n==="/&"){if(s===0){e.removeChild(d),di(t);return}s--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")s++;else if(n==="html")Ar(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ar(n);for(var p=n.firstChild;p;){var v=p.nextSibling,y=p.nodeName;p[Pi]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&p.rel.toLowerCase()==="stylesheet"||n.removeChild(p),p=v}}else n==="body"&&Ar(e.ownerDocument.body);n=d}while(n);di(t)}function Sh(e,t){var n=e;e=0;do{var s=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=s}while(n)}function of(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":of(n),fc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function d2(e,t,n,s){for(;e.nodeType===1;){var d=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Pi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=fa(e.nextSibling),e===null)break}return null}function m2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fa(e.nextSibling),e===null))return null;return e}function _h(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=fa(e.nextSibling),e===null))return null;return e}function sf(e){return e.data==="$?"||e.data==="$~"}function cf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function p2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var s=function(){t(),n.removeEventListener("DOMContentLoaded",s)};n.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function fa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var uf=null;function wh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return fa(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ah(e,t,n){switch(t=ss(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Ar(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fc(e)}var da=new Map,Nh=new Set;function cs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var tn=W.d;W.d={f:h2,r:g2,D:x2,C:v2,L:b2,m:y2,X:_2,S:S2,M:w2};function h2(){var e=tn.f(),t=es();return e||t}function g2(e){var t=El(e);t!==null&&t.tag===5&&t.type==="form"?Pm(t):tn.r(e)}var ci=typeof document>"u"?null:document;function Rh(e,t,n){var s=ci;if(s&&typeof t=="string"&&t){var d=la(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof n=="string"&&(d+='[crossorigin="'+n+'"]'),Nh.has(d)||(Nh.add(d),e={rel:e,crossOrigin:n,href:t},s.querySelector(d)===null&&(t=s.createElement("link"),xt(t,"link",e),ut(t),s.head.appendChild(t)))}}function x2(e){tn.D(e),Rh("dns-prefetch",e,null)}function v2(e,t){tn.C(e,t),Rh("preconnect",e,t)}function b2(e,t,n){tn.L(e,t,n);var s=ci;if(s&&e&&t){var d='link[rel="preload"][as="'+la(t)+'"]';t==="image"&&n&&n.imageSrcSet?(d+='[imagesrcset="'+la(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(d+='[imagesizes="'+la(n.imageSizes)+'"]')):d+='[href="'+la(e)+'"]';var p=d;switch(t){case"style":p=ui(e);break;case"script":p=fi(e)}da.has(p)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),da.set(p,e),s.querySelector(d)!==null||t==="style"&&s.querySelector(Nr(p))||t==="script"&&s.querySelector(Rr(p))||(t=s.createElement("link"),xt(t,"link",e),ut(t),s.head.appendChild(t)))}}function y2(e,t){tn.m(e,t);var n=ci;if(n&&e){var s=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+la(s)+'"][href="'+la(e)+'"]',p=d;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=fi(e)}if(!da.has(p)&&(e=b({rel:"modulepreload",href:e},t),da.set(p,e),n.querySelector(d)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Rr(p)))return}s=n.createElement("link"),xt(s,"link",e),ut(s),n.head.appendChild(s)}}}function S2(e,t,n){tn.S(e,t,n);var s=ci;if(s&&e){var d=Dl(s).hoistableStyles,p=ui(e);t=t||"default";var v=d.get(p);if(!v){var y={loading:0,preload:null};if(v=s.querySelector(Nr(p)))y.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=da.get(p))&&ff(e,n);var z=v=s.createElement("link");ut(z),xt(z,"link",e),z._p=new Promise(function(P,Z){z.onload=P,z.onerror=Z}),z.addEventListener("load",function(){y.loading|=1}),z.addEventListener("error",function(){y.loading|=2}),y.loading|=4,us(v,t,s)}v={type:"stylesheet",instance:v,count:1,state:y},d.set(p,v)}}}function _2(e,t){tn.X(e,t);var n=ci;if(n&&e){var s=Dl(n).hoistableScripts,d=fi(e),p=s.get(d);p||(p=n.querySelector(Rr(d)),p||(e=b({src:e,async:!0},t),(t=da.get(d))&&df(e,t),p=n.createElement("script"),ut(p),xt(p,"link",e),n.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},s.set(d,p))}}function w2(e,t){tn.M(e,t);var n=ci;if(n&&e){var s=Dl(n).hoistableScripts,d=fi(e),p=s.get(d);p||(p=n.querySelector(Rr(d)),p||(e=b({src:e,async:!0,type:"module"},t),(t=da.get(d))&&df(e,t),p=n.createElement("script"),ut(p),xt(p,"link",e),n.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},s.set(d,p))}}function Th(e,t,n,s){var d=(d=ie.current)?cs(d):null;if(!d)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ui(n.href),n=Dl(d).hoistableStyles,s=n.get(t),s||(s={type:"style",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ui(n.href);var p=Dl(d).hoistableStyles,v=p.get(e);if(v||(d=d.ownerDocument||d,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,v),(p=d.querySelector(Nr(e)))&&!p._p&&(v.instance=p,v.state.loading=5),da.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},da.set(e,n),p||C2(d,e,n,v.state))),t&&s===null)throw Error(l(528,""));return v}if(t&&s!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=fi(n),n=Dl(d).hoistableScripts,s=n.get(t),s||(s={type:"script",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function ui(e){return'href="'+la(e)+'"'}function Nr(e){return'link[rel="stylesheet"]['+e+"]"}function jh(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function C2(e,t,n,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),xt(t,"link",n),ut(t),e.head.appendChild(t))}function fi(e){return'[src="'+la(e)+'"]'}function Rr(e){return"script[async]"+e}function Mh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+la(n.href)+'"]');if(s)return t.instance=s,ut(s),s;var d=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),ut(s),xt(s,"style",d),us(s,n.precedence,e),t.instance=s;case"stylesheet":d=ui(n.href);var p=e.querySelector(Nr(d));if(p)return t.state.loading|=4,t.instance=p,ut(p),p;s=jh(n),(d=da.get(d))&&ff(s,d),p=(e.ownerDocument||e).createElement("link"),ut(p);var v=p;return v._p=new Promise(function(y,z){v.onload=y,v.onerror=z}),xt(p,"link",s),t.state.loading|=4,us(p,n.precedence,e),t.instance=p;case"script":return p=fi(n.src),(d=e.querySelector(Rr(p)))?(t.instance=d,ut(d),d):(s=n,(d=da.get(p))&&(s=b({},n),df(s,d)),e=e.ownerDocument||e,d=e.createElement("script"),ut(d),xt(d,"link",s),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,us(s,n.precedence,e));return t.instance}function us(e,t,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=s.length?s[s.length-1]:null,p=d,v=0;v<s.length;v++){var y=s[v];if(y.dataset.precedence===t)p=y;else if(p!==d)break}p?p.parentNode.insertBefore(e,p.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ff(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function df(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var fs=null;function Eh(e,t,n){if(fs===null){var s=new Map,d=fs=new Map;d.set(n,s)}else d=fs,s=d.get(n),s||(s=new Map,d.set(n,s));if(s.has(e))return s;for(s.set(e,null),n=n.getElementsByTagName(e),d=0;d<n.length;d++){var p=n[d];if(!(p[Pi]||p[mt]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var v=p.getAttribute(t)||"";v=e+v;var y=s.get(v);y?y.push(p):s.set(v,[p])}}return s}function Dh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function A2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function N2(e,t,n,s){if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var d=ui(s.href),p=t.querySelector(Nr(d));if(p){t=p._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ds.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=p,ut(p);return}p=t.ownerDocument||t,s=jh(s),(d=da.get(d))&&ff(s,d),p=p.createElement("link"),ut(p);var v=p;v._p=new Promise(function(y,z){v.onload=y,v.onerror=z}),xt(p,"link",s),n.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ds.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var mf=0;function R2(e,t){return e.stylesheets&&e.count===0&&ps(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var s=setTimeout(function(){if(e.stylesheets&&ps(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+t);0<e.imgBytes&&mf===0&&(mf=62500*o2());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ps(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>mf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(d)}}:null}function ds(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ps(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ms=null;function ps(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ms=new Map,t.forEach(T2,e),ms=null,ds.call(e))}function T2(e,t){if(!(t.state.loading&4)){var n=ms.get(e);if(n)var s=n.get(null);else{n=new Map,ms.set(e,n);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var v=d[p];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(n.set(v.dataset.precedence,v),s=v)}s&&n.set(null,s)}d=t.instance,v=d.getAttribute("data-precedence"),p=n.get(v)||s,p===s&&n.set(null,d),n.set(v,d),this.count++,s=ds.bind(this),d.addEventListener("load",s),d.addEventListener("error",s),p?p.parentNode.insertBefore(d,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var Tr={$$typeof:A,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function j2(e,t,n,s,d,p,v,y,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.hiddenUpdates=oc(null),this.identifierPrefix=s,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function kh(e,t,n,s,d,p,v,y,z,P,Z,J){return e=new j2(e,t,n,v,z,P,Z,J,y),t=1,p===!0&&(t|=24),p=qt(3,null,null,t),e.current=p,p.stateNode=e,t=Vc(),t.refCount++,e.pooledCache=t,t.refCount++,p.memoizedState={element:s,isDehydrated:n,cache:t},Wc(p),e}function Lh(e){return e?(e=Hl,e):Hl}function Bh(e,t,n,s,d,p){d=Lh(d),s.context===null?s.context=d:s.pendingContext=d,s=bn(t),s.payload={element:n},p=p===void 0?null:p,p!==null&&(s.callback=p),n=yn(e,s,t),n!==null&&(Lt(n,e,t),rr(n,e,t))}function Oh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pf(e,t){Oh(e,t),(e=e.alternate)&&Oh(e,t)}function Fh(e){if(e.tag===13||e.tag===31){var t=tl(e,67108864);t!==null&&Lt(t,e,67108864),pf(e,67108864)}}function Gh(e){if(e.tag===13||e.tag===31){var t=Wt();t=sc(t);var n=tl(e,t);n!==null&&Lt(n,e,t),pf(e,t)}}var hs=!0;function M2(e,t,n,s){var d=U.T;U.T=null;var p=W.p;try{W.p=2,hf(e,t,n,s)}finally{W.p=p,U.T=d}}function E2(e,t,n,s){var d=U.T;U.T=null;var p=W.p;try{W.p=8,hf(e,t,n,s)}finally{W.p=p,U.T=d}}function hf(e,t,n,s){if(hs){var d=gf(s);if(d===null)ef(e,t,s,gs,n),Uh(e,s);else if(z2(d,e,t,n,s))s.stopPropagation();else if(Uh(e,s),t&4&&-1<D2.indexOf(e)){for(;d!==null;){var p=El(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var v=Kn(p.pendingLanes);if(v!==0){var y=p;for(y.pendingLanes|=2,y.entangledLanes|=2;v;){var z=1<<31-_t(v);y.entanglements[1]|=z,v&=~z}Ea(p),(De&6)===0&&(Jo=yt()+500,_r(0))}}break;case 31:case 13:y=tl(p,2),y!==null&&Lt(y,p,2),es(),pf(p,2)}if(p=gf(s),p===null&&ef(e,t,s,gs,n),p===d)break;d=p}d!==null&&s.stopPropagation()}else ef(e,t,s,null,n)}}function gf(e){return e=xc(e),xf(e)}var gs=null;function xf(e){if(gs=null,e=Ml(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=r(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gs=e,null}function Ih(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ac()){case Gi:return 2;case lo:return 8;case Xn:case nc:return 32;case Ii:return 268435456;default:return 32}default:return 32}}var vf=!1,En=null,Dn=null,zn=null,jr=new Map,Mr=new Map,kn=[],D2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Uh(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function Er(e,t,n,s,d,p){return e===null||e.nativeEvent!==p?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:p,targetContainers:[d]},t!==null&&(t=El(t),t!==null&&Fh(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function z2(e,t,n,s,d){switch(t){case"focusin":return En=Er(En,e,t,n,s,d),!0;case"dragenter":return Dn=Er(Dn,e,t,n,s,d),!0;case"mouseover":return zn=Er(zn,e,t,n,s,d),!0;case"pointerover":var p=d.pointerId;return jr.set(p,Er(jr.get(p)||null,e,t,n,s,d)),!0;case"gotpointercapture":return p=d.pointerId,Mr.set(p,Er(Mr.get(p)||null,e,t,n,s,d)),!0}return!1}function Hh(e){var t=Ml(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=r(n),t!==null){e.blockedOn=t,a0(e.priority,function(){Gh(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,a0(e.priority,function(){Gh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gf(e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);gc=s,n.target.dispatchEvent(s),gc=null}else return t=El(n),t!==null&&Fh(t),e.blockedOn=n,!1;t.shift()}return!0}function Ph(e,t,n){xs(e)&&n.delete(t)}function k2(){vf=!1,En!==null&&xs(En)&&(En=null),Dn!==null&&xs(Dn)&&(Dn=null),zn!==null&&xs(zn)&&(zn=null),jr.forEach(Ph),Mr.forEach(Ph)}function vs(e,t){e.blockedOn===t&&(e.blockedOn=null,vf||(vf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,k2)))}var bs=null;function qh(e){bs!==e&&(bs=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){bs===e&&(bs=null);for(var t=0;t<e.length;t+=3){var n=e[t],s=e[t+1],d=e[t+2];if(typeof s!="function"){if(xf(s||n)===null)continue;break}var p=El(n);p!==null&&(e.splice(t,3),t-=3,hu(p,{pending:!0,data:d,method:n.method,action:s},s,d))}}))}function di(e){function t(z){return vs(z,e)}En!==null&&vs(En,e),Dn!==null&&vs(Dn,e),zn!==null&&vs(zn,e),jr.forEach(t),Mr.forEach(t);for(var n=0;n<kn.length;n++){var s=kn[n];s.blockedOn===e&&(s.blockedOn=null)}for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)Hh(n),n.blockedOn===null&&kn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var d=n[s],p=n[s+1],v=d[jt]||null;if(typeof p=="function")v||qh(n);else if(v){var y=null;if(p&&p.hasAttribute("formAction")){if(d=p,v=p[jt]||null)y=v.formAction;else if(xf(d)!==null)continue}else y=v.action;typeof y=="function"?n[s+1]=y:(n.splice(s,3),s-=3),qh(n)}}}function Vh(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(v){return d=v})},focusReset:"manual",scroll:"manual"})}function t(){d!==null&&(d(),d=null),s||setTimeout(n,20)}function n(){if(!s&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),d!==null&&(d(),d=null)}}}function bf(e){this._internalRoot=e}ys.prototype.render=bf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,s=Wt();Bh(n,s,e,t,null,null)},ys.prototype.unmount=bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bh(e.current,2,null,e,null,null),es(),t[jl]=null}};function ys(e){this._internalRoot=e}ys.prototype.unstable_scheduleHydration=function(e){if(e){var t=t0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kn.length&&t!==0&&t<kn[n].priority;n++);kn.splice(n,0,e),n===0&&Hh(e)}};var Yh=a.version;if(Yh!=="19.2.4")throw Error(l(527,Yh,"19.2.4"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=h(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var L2={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{Zn=Ss.inject(L2),St=Ss}catch{}}return zr.createRoot=function(e,t){if(!c(e))throw Error(l(299));var n=!1,s="",d=$m,p=ep,v=tp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(p=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError)),t=kh(e,1,!1,null,null,n,s,null,d,p,v,Vh),e[jl]=t.current,$u(e),new bf(t)},zr.hydrateRoot=function(e,t,n){if(!c(e))throw Error(l(299));var s=!1,d="",p=$m,v=ep,y=tp,z=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onUncaughtError!==void 0&&(p=n.onUncaughtError),n.onCaughtError!==void 0&&(v=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(z=n.formState)),t=kh(e,1,!0,t,n??null,s,d,z,p,v,y,Vh),t.context=Lh(null),n=t.current,s=Wt(),s=sc(s),d=bn(s),d.callback=null,yn(n,d,s),n=s,t.current.lanes=n,Hi(t,n),Ea(t),e[jl]=t.current,$u(e),new ys(t)},zr.version="19.2.4",zr}var ag;function q2(){if(ag)return _f.exports;ag=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),_f.exports=P2(),_f.exports}var V2=q2();const Y2=fx(V2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=(...o)=>o.filter((a,i,l)=>!!a&&a.trim()!==""&&l.indexOf(a)===i).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,i,l)=>l?l.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=o=>{const a=Z2(o);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=o=>{for(const a in o)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=R.forwardRef(({color:o="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:c="",children:f,iconNode:r,...m},x)=>R.createElement("svg",{ref:x,...W2,width:a,height:a,stroke:o,strokeWidth:l?Number(i)*24/Number(a):i,className:px("lucide",c),...!f&&!K2(m)&&{"aria-hidden":"true"},...m},[...r.map(([h,g])=>R.createElement(h,g)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=(o,a)=>{const i=R.forwardRef(({className:l,...c},f)=>R.createElement(Q2,{ref:f,iconNode:a,className:px(`lucide-${X2(ng(o))}`,`lucide-${o}`,l),...c}));return i.displayName=ng(o),i};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],$2=ao("atom",J2);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],tb=ao("info",eb);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],nb=ao("layers",ab);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],ib=ao("palette",lb);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ob=ao("sparkles",rb),sb=[{id:"shaders",label:"Shaders",icon:nb},{id:"demos",label:"Demos",icon:ob},{id:"playground",label:"Play",icon:ib},{id:"particle",label:"Particle",icon:$2}],cb=({activeCategory:o,onCategoryChange:a})=>u.jsxs("div",{className:"w-16 flex-shrink-0 flex flex-col items-center h-full py-4 gap-1",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center mb-4",children:u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 14 14",fill:"none",children:[u.jsx("circle",{cx:"7",cy:"7",r:"3",stroke:"white",strokeWidth:"1.5"}),u.jsx("circle",{cx:"7",cy:"7",r:"6",stroke:"white",strokeWidth:"0.5",opacity:"0.4"})]})}),sb.map(i=>{const l=o===i.id;return u.jsxs("button",{onClick:()=>a(i.id),className:"flex flex-col items-center gap-1 transition-colors ",children:[u.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${l?"bg-neutral-800 text-white":"text-neutral-400 hover:bg-neutral-100"}`,children:u.jsx(i.icon,{size:18})}),u.jsx("span",{className:`text-[8px] uppercase tracking-wide font-medium ${l?"text-neutral-700":"text-neutral-400"}`,children:i.label})]},i.id)}),u.jsx("div",{className:"flex-1"}),u.jsxs("div",{className:"flex flex-col items-center gap-1",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center text-neutral-400 hover:bg-neutral-100 transition-colors cursor-default",children:u.jsx(tb,{size:18})}),u.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),u.jsx("span",{className:"text-[7px] text-neutral-400",children:"GPU"})]})]}),ub=[{id:"vortex",name:"Vortex Portal",description:"Spiral energy field",technique:"FBM + Polar Warp"},{id:"lumina",name:"Lumina Flow",description:"Domain warping fluid",technique:"Multi-layer FBM"},{id:"isometric",name:"Isometric Flow",description:"Dynamic block grid",technique:"DDA Raymarching"},{id:"flowfield",name:"Flow Field",description:"Vector field visualization",technique:"Curl Noise + LIC"},{id:"tunnel",name:"Warp Tunnel",description:"Volumetric wormhole",technique:"Raymarching + FBM"},{id:"aura",name:"Noise Aura",description:"Volumetric nebula",technique:"Vol. Accumulation"},{id:"neon",name:"Neon Noise",description:"Psychedelic color flow",technique:"FBM + Domain Warp"},{id:"fluid",name:"Fluid Flow",description:"Double-warped liquid",technique:"Dual Domain Warp"},{id:"neuro",name:"NeuroFlow",description:"Cyberpunk energy lines",technique:"Simplex + Hue Shift"},{id:"neonwave",name:"Neonwave",description:"Neon terrain flight",technique:"Plane Stacking + FBM"},{id:"neontext",name:"Neon Text",description:"SDF text on sphere",technique:"SDF + Raymarching"},{id:"aurora",name:"Aurora Cloudscape",description:"Volumetric aurora",technique:"Soft Clouds + Waves"},{id:"hypergrid",name:"Hyper Grid",description:"Warp speed grid cells",technique:"Grid March + Rotation"},{id:"jellyfish",name:"Luminescence",description:"Bioluminescent jellyfish",technique:"SDF + Volumetric"},{id:"trainjourney",name:"Train Journey",description:"Parallax mountain train",technique:"FBM + Parallax Layers"},{id:"horizon",name:"Horizon",description:"Parallax mountain scape",technique:"FBM + Depth Parallax"}],fb=({active:o,onSelect:a})=>{const i=R.useRef(null);return R.useEffect(()=>{var l;(l=i.current)==null||l.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]),u.jsx("div",{className:"flex gap-1.5 overflow-x-auto scrollbar-hide px-5 py-3 flex-shrink-0",children:ub.map(l=>{const c=o===l.id;return u.jsx("button",{ref:c?i:null,onClick:()=>a(l.id),className:`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${c?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.name},l.id)})})},db=({guide:o,onClose:a})=>(R.useEffect(()=>{const i=l=>{l.key==="Escape"&&a()};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[a]),u.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-6",onClick:a,children:[u.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-sm"}),u.jsxs("div",{className:"relative w-full max-w-[640px] max-h-[85vh] bg-white rounded-3xl flex flex-col overflow-hidden",onClick:i=>i.stopPropagation(),children:[u.jsxs("div",{className:"flex items-center gap-3 px-6 py-4 flex-shrink-0",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[14px] font-semibold text-neutral-800",children:o.title}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:o.subtitle})]}),u.jsx("p",{className:"text-[11px] text-neutral-500 mt-0.5",children:o.oneLiner})]}),u.jsx("button",{onClick:a,className:"w-7 h-7 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors flex-shrink-0",children:u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:u.jsx("path",{d:"M2 2L10 10M10 2L2 10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto min-h-0 px-6 pb-6",children:[u.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"What You See"}),u.jsx("p",{className:"text-[11px] text-neutral-600 leading-[1.7]",children:o.whatYouSee})]}),u.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Rendering Pipeline"}),u.jsx("div",{className:"flex flex-col gap-2",children:o.pipeline.map(i=>u.jsx("div",{className:"bg-white rounded-xl p-3",children:u.jsxs("div",{className:"flex items-start gap-2.5",children:[u.jsx("span",{className:"text-[9px] font-semibold text-neutral-300 mt-px flex-shrink-0 w-4",children:i.step}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("div",{className:"text-[10px] font-semibold text-neutral-700 mb-1",children:i.title}),u.jsx("p",{className:"text-[10px] text-neutral-500 leading-[1.6]",children:i.description}),i.glsl&&u.jsx("pre",{className:"mt-2 bg-neutral-50 rounded-lg px-2.5 py-1.5 overflow-x-auto",children:u.jsx("code",{className:"text-[9px] font-mono text-neutral-500 leading-relaxed whitespace-pre",children:i.glsl})})]})]})},i.step))})]}),u.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Core Concepts"}),u.jsx("div",{className:"flex flex-col gap-2",children:o.concepts.map(i=>u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsxs("div",{className:"flex items-center gap-1.5 mb-1.5",children:[u.jsx("span",{className:"text-[10px] font-semibold text-neutral-700",children:i.name}),u.jsx("span",{className:"text-[8px] px-1 py-0.5 rounded bg-neutral-100 text-neutral-400 font-mono",children:i.nameEN})]}),u.jsx("div",{className:"bg-neutral-50 rounded-lg px-2.5 py-2 mb-2",children:u.jsx("p",{className:"text-[10px] text-neutral-600 leading-[1.6] italic",children:i.analogy})}),u.jsx("p",{className:"text-[10px] text-neutral-500 leading-[1.6] mb-1.5",children:i.explanation}),u.jsxs("div",{className:"flex items-start gap-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 flex-shrink-0",children:"Why:"}),u.jsx("span",{className:"text-[9px] text-neutral-500 leading-[1.5]",children:i.whyItMatters})]})]},i.nameEN))})]}),u.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Real-World Applications"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:o.applications.map(i=>u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[10px] font-semibold text-neutral-700 mb-1",children:i.field}),u.jsx("p",{className:"text-[9px] text-neutral-500 leading-[1.5]",children:i.examples})]},i.field))})]}),u.jsxs("div",{className:"bg-neutral-800 rounded-2xl p-4",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-500 uppercase tracking-wide mb-2",children:"Key Insight"}),u.jsx("p",{className:"text-[11px] text-neutral-300 leading-[1.7]",children:o.keyInsight})]})]})]})]})),mb={flowfield:{id:"flowfield",title:"Flow Field",subtitle:"向量场可视化",oneLiner:"用噪声生成「风向地图」，再让粒子沿着风向留下轨迹",whatYouSee:"想象气象台的风速图——颜色代表速度快慢（蓝→绿→黄→红），条纹代表风的流动轨迹。每个像素都在问：「这里的风往哪吹？」然后顺着风向往回看，采样噪声留下运动模糊的条纹。多个时间相位叠加，产生连续流动的动画效果。",pipeline:[{step:"01",title:"构建向量场",description:"用 FBM 噪声生成一个「势场」（potential field），然后计算它的旋度（curl）得到无散度的向量场。就像气压图→风向：高压流向低压，旋度确保风不会凭空消失或产生。加上纬向基础流（zonal flow）模拟地球大气环流。",glsl:`vec2 curl = vec2((n3 - n1)/eps, -(n2 - n1)/eps);
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
col *= mix(1.0, 0.5 + 0.5*vig, uVignette);`}],concepts:[{name:"参数化程序生成",nameEN:"Parametric Procedural Generation",analogy:"一个菜谱可以做出无限种菜——同样的步骤，换食材（颜色）、调火候（速度）、改分量（层数），就是完全不同的风味。",explanation:"将硬编码的 14 层替换为参数驱动的循环：层数、深度、色彩都成为 uniform 变量。GPU 在每帧根据当前参数实时计算所有层，无需预烘焙。这是从「固定作品」到「生成系统」的本质跃迁。",whyItMatters:"参数化是程序生成的灵魂。一个参数化的 shader 可以生成无限变体——日落沙漠、极地冰川、午夜幽谷——只需调几个滑块。这正是游戏和影视中 PCG（程序化内容生成）的核心理念。"},{name:"运动视差",nameEN:"Motion Parallax",analogy:"坐车看风景：路边的树飞速后退，远山几乎不动。大脑通过速度差判断远近。",explanation:"每层的滚动速度 = t / dist，dist 从 1（最近）到 100（最远），形成二次曲线分布（nearRatio²）。这模拟了透视投影中「角速度与距离成反比」的物理规律，是 2D 画面中最强的深度线索。",whyItMatters:"运动视差是人类日常感知深度的主要方式之一（仅次于双目视差）。掌握这个原理，你可以在任何 2D 媒介中创造令人信服的 3D 空间感——网页、游戏、动画都适用。"},{name:"FBM 分形地形",nameEN:"FBM Fractal Terrain",analogy:"从太空看地球：大陆板块是最大的起伏，山脉是中等起伏，岩石是小起伏——它们在不同尺度上自相似。",explanation:"FBM 叠加 8 层噪声，每层频率 ×2、振幅 ×0.7。低频层决定山脊走势，高频层添加细节。0.7 的衰减比产生自然的 1/f 噪声特征，这与真实地形的功率谱分布惊人吻合。",whyItMatters:"FBM 是程序化地形生成的基石，从 Minecraft 到 3A 大作的开放世界都在使用。理解频率-振幅关系，你就能生成山脉、云层、海浪——自然界的大部分纹理都是分形的。"}],applications:[{field:"动态壁纸",examples:"桌面/手机动态壁纸、数字相框、LED 墙面装饰"},{field:"游戏背景",examples:"横版游戏远景、主菜单动态背景、加载界面"},{field:"网页设计",examples:"着陆页首屏背景、博客 hero 区域、产品展示动态背景"},{field:"直播/视频",examples:"直播间虚拟背景、视频转场、音乐可视化底图"}],keyInsight:"Horizon 的核心洞察是「参数化 = 从作品到工具的跃迁」。Train Journey 是一幅精心手绘的画——14 层手调颜色、固定的火车和桥梁；Horizon 是一台画画机器——用循环和参数取代硬编码，用三色渐变取代 40+ 个 RGB 值。看似简化，实则升维：一个固定作品只有一种形态，一个参数化系统拥有无限变体。这正是程序化生成（Procedural Generation）的哲学精髓——不要画一棵树，要写一个长树的规则。从游戏世界生成到 AI 辅助设计，参数化思维是通往「用代码创造世界」的第一步。"}},pb={gooey:{id:"gooey",title:"Gooey Overlay",subtitle:"滚动驱动液态形变",oneLiner:"基于 Simplex Noise 的滚动驱动液态形变动画——让噪声变成液体，让滚动变成引力",whatYouSee:"屏幕上有 9 列垂直的液滴通道。当你滚动页面时，就像开启了引力——每条通道中的液滴开始下落，形成粘稠的水滴形态。你看到的液态变形效果叫 **Gooey Effect / Metaball Effect**。滴落的时机、速度都略有不同，创造出有机的、不可预测的视觉节奏。背景的噪声纹理也随滚动逐渐上涌，像是液体从底部慢慢填满整个画面。",pipeline:[{step:"01",title:"生成噪声基底 (Simplex Noise)",description:"用 Simplex Noise 生成有机纹理——不是完全随机的噪点，而是有连续性、有结构的灰度分布。就像在白纸上撒盐粒，每个位置的盐粒密度不同，形成自然的纹理基底。",glsl:`// Simplex Noise 生成有机纹理
float shape = snoise(noise_uv);
shape = clamp(.5 + .5 * shape, 0., 1.);`},{step:"02",title:"创建 9 条液滴通道 (Column Layout)",description:"把画布垂直划分成 9 条独立的「车道」，每条车道用自己的随机种子运行独立的水滴动画。各通道的相位偏移产生参差不齐的视觉节奏。",glsl:`const int num_col = 9;
for (int i = 0; i < num_col; i++) {
    // 每条通道有独立的随机种子
    float start_time_offset = rand(100. * (float(i) + u_seed));
}`},{step:"03",title:"计算液滴下落时序 (Segmented Easing)",description:"液滴的运动分为两个阶段：积累期（before_drop）缓慢蓄力，到达临界点后突然下落（after_drop）急速坠落。这种分段缓动（Segmented Easing）让水滴具有重量感和张力感。",glsl:`// 分段缓动：积累期 → 下落期
float before_drop_t = pow(before_drop_normal, .4) * drop_time;
float after_drop_t = 3. * pow(after_drop_normal, 2.) * (1. - drop_time);`},{step:"04",title:"绘制液滴形态 (SDF Composition)",description:"用 SDF（有符号距离场）组合两种基本形状：圆形画水滴主体（dot），竖条画拉伸的液体尾巴（bar）。两者叠加产生有机的液滴轮廓。",glsl:`// 圆形水滴
float dot = get_l(dot_uv);
dot = pow(dot, 4.);
// 竖条尾巴
float bar = smoothstep(-.5, 0., bar_uv.x)
          * (1. - smoothstep(0., .5, bar_uv.x));`},{step:"05",title:"应用 Gooey 效果 (Threshold Blending)",description:"用 smoothstep 对噪声形状做阈值处理——在 0.48~0.5 范围内产生平滑的 0→1 过渡，创造液体的「表面张力」效果。多层 smoothstep 叠加实现 Gooey/Metaball 特有的粘稠融合感。",glsl:`// Gooey 阈值处理
float gooey = smoothstep(.48, .5, shape);
gooey -= .1 * smoothstep(.5, .6, shape);`}],concepts:[{name:"Simplex 噪声",nameEN:"Simplex Noise",analogy:"想象自然界的云彩纹理——不是完全随机的噪点，而是有连续性、有结构的随机分布",explanation:"Simplex Noise 是 Perlin Noise 的改进版，通过梯度插值在任意维度生成平滑连续的随机值。相邻像素值有关联性，形成自然的有机纹理。它是创造「看起来自然」的效果的核心工具。",whyItMatters:"知道 Simplex Noise 这个词后，你就能对 AI 说「用 Simplex Noise 生成有机纹理作为液态动画的基底」——而不是说「那种自然的随机花纹」。"},{name:"滚动进度映射",nameEN:"Scroll Progress Mapping",analogy:"把鼠标滚轮变成时间机器的把手——滚动幅度直接映射到动画进度 0→1",explanation:"通过 u_scroll_progr (0.0 → 1.0) 将页面滚动量映射到着色器参数，控制液滴下落位置、背景噪声上涌高度。这种模式叫 Scroll-Driven Animation，CSS 新规范中也引入了 scroll-timeline。",whyItMatters:"知道 Scroll Progress Mapping 后，你就能对 AI 说「用 scroll progress 0-1 驱动 shader 的 uniform 参数」——精确描述滚动与动画的绑定关系。"},{name:"分段缓动函数",nameEN:"Segmented Easing",analogy:"水滴不是匀速下落——先慢慢积累（低次幂缓动），突破临界点后急速坠落（高次幂缓动）",explanation:"通过 pow(t, 0.4) 和 pow(t, 2) 创造非线性的时间映射。积累期用低次幂让变化平缓，下落期用高次幂让加速度显著。这是「有生命力」动画的秘诀——自然界的运动很少是匀速的。",whyItMatters:"知道 Segmented Easing 后，你就能对 AI 说「用分段缓动：前半段 ease-out（积累），后半段 ease-in（释放），模拟水滴下落」——比说「先慢后快」精确得多。"},{name:"Gooey / Metaball 效果",nameEN:"Gooey / Metaball Effect",analogy:"用数学的平滑阶跃函数创造液体的「表面张力」——让两个靠近的形状像水银一样融合",explanation:"smoothstep(0.48, 0.5, shape) 在阈值附近产生平滑的 0→1 过渡。在 CSS/SVG 领域，同样的效果可以用 feGaussianBlur + feColorMatrix 滤镜实现。在 shader 中用 smoothstep 更高效。",whyItMatters:"知道 Gooey Effect / Metaball 后，你就能对 AI 说「我想要 Gooey Effect，两个形状靠近时融合成一体」——AI 就知道该用 blur + contrast 或 smoothstep threshold。"}],applications:[{field:"加载动画",examples:"用液滴下落替代传统进度条，传达「内容正在流入」的隐喻"},{field:"滚动转场",examples:"页面切换时用液体覆盖/揭开效果，创造流畅的过渡"},{field:"数据可视化",examples:"将实时数据流映射为液滴速度/密度，让数字变得有机可感"},{field:"品牌动效",examples:"适合有机/自然/流动特质的品牌，打造独特的视觉记忆点"}],keyInsight:"**滚动不只是导航，也是叙事的节奏控制器**。这个 demo 展示了如何用物理隐喻（重力、液体）让抽象的滚动量变得具象可感。核心术语链：**Scroll-Driven Animation**（滚动驱动）→ **Simplex Noise**（有机纹理）→ **Segmented Easing**（分段缓动）→ **Gooey/Metaball**（液态融合）。掌握这四个词，你就能精准描述这一整类效果。"},parallax:{id:"parallax",title:"Parallax Scroll",subtitle:"多层视差滚动叙事",oneLiner:"基于 GSAP ScrollTrigger 的多层视差滚动动画——用分层速度差异在 2D 画布上创造 3D 深度错觉",whatYouSee:"一个梦幻的山谷风景从白天过渡到黑夜。当你滚动时，不同图层以不同速度移动——这就是 **Parallax Scrolling（视差滚动）**。远处的山峦慢悠悠上升，近处的山丘快速掠过，云朵四散飘走，太阳从地平线升起又沉入夜空。中途有鸟飞过，傍晚蝙蝠群出现，最后繁星闪烁。整个过程由 **ScrollTrigger** 的 scrub 模式驱动，滚动即时间。",pipeline:[{step:"01",title:"分层定义场景深度 (Layer Separation)",description:"把风景画拆成多张透明图层——最远的山、中景的山、近景的山、云彩、鸟……每层是 SVG 中的独立 <g> 元素。图层数量和深度分配决定了视差的层次感。",glsl:`<!-- SVG 中的图层组织 -->
<g id="h1-1"><!-- 最远山丘 --></g>
<g id="h1-3"><!-- 中景山丘 --></g>
<g id="h1-7"><!-- 近景山丘 --></g>`},{step:"02",title:"绑定滚动时间轴 (ScrollTrigger Binding)",description:"用 GSAP ScrollTrigger 把滚动条变成时间轴控制器。scrub: 3 表示动画以 3 秒的平滑延迟跟随滚动——值越大惯性越强，越流畅但响应越慢。start/end 定义触发区间。",glsl:`ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: 3  // 滚动与动画的耦合度
});`},{step:"03",title:"按深度分配速度 (Depth-Speed Mapping)",description:"视差的核心：远景移动慢，近景移动快。速度比例约为 远景:中景:近景 ≈ 1:2:4。就像坐车看窗外——远山几乎静止，近处的树飞快掠过，大脑自动推断出深度。",glsl:`// 远山移动慢（speed × 1.7）
scene1.to("#h1-3", { y: 1.7 * speed }, 0);
// 近山移动快（speed × 5）
scene1.to("#h1-7", { y: 5 * speed }, 0);`},{step:"04",title:"编排多场景过渡 (Multi-Scene Choreography)",description:"像电影分镜一样拆分叙事——Scene 1 白天 → Scene 2 黄昏 → Scene 3 夜晚。每个场景有独立的 gsap.timeline() 和 ScrollTrigger 区间，区间可部分重叠实现平滑过渡。",glsl:`// Scene 1: 0-45% 滚动
let scene1 = gsap.timeline();
// Scene 2: 15-40% 滚动（有重叠）
let scene2 = gsap.timeline();
// Scene 3: 70-100% 滚动
let scene3 = gsap.timeline();`},{step:"05",title:"添加细节动画 (Detail Animation)",description:"在主叙事之外添加微动画：鸟飞行时改变朝向（scaleX 翻转）、星星闪烁（opacity 脉冲）、SVG 渐变色随滚动过渡（白天蓝→黄昏橙→夜晚紫）。这些细节增强生命力。",glsl:`// 鸟的飞行 + 翻转
onEnter: function() {
    gsap.to("#bird", { scaleX: 1, rotation: 0 });
},
onLeave: function() {
    gsap.to("#bird", { scaleX: -1, rotation: -15 });
}`}],concepts:[{name:"视差滚动",nameEN:"Parallax Scrolling",analogy:"坐在火车上看窗外——远处的山移动慢，近处的树飞快掠过，大脑自动推断出深度",explanation:"通过让不同图层以不同速度响应滚动，模拟真实世界的运动视差效应（Motion Parallax）。近景移动速度是远景的 3-5 倍即可创造可信的深度错觉。这是 2D 屏幕上创造 3D 沉浸感的最经典技巧。",whyItMatters:"知道 Parallax Scrolling 后，你就能对 AI 说「做一个 5 层视差滚动，速度比例 1:1.5:2:3:5，scrub 模式」——而不是说「那种有立体感的滚动效果」。"},{name:"ScrollTrigger Scrub",nameEN:"GSAP ScrollTrigger scrub",analogy:"把滚动条变成视频播放器的进度条——可以前进、后退、暂停在任意帧",explanation:"scrub 参数将滚动位置映射到动画进度。scrub: true 表示即时跟随，scrub: 3 表示以 3 秒的平滑过渡跟随。这是 Scroll-Driven Animation 的核心机制，CSS 新规范的 scroll-timeline 也是同一概念。",whyItMatters:"知道 ScrollTrigger scrub 后，你就能对 AI 说「用 ScrollTrigger 的 scrub: 2 绑定 timeline，trigger 从 top top 到 bottom bottom」——精确控制滚动与动画的耦合。"},{name:"SVG 渐变动画",nameEN:"SVG Gradient Animation",analogy:"不只移动图形，还动态修改颜色渐变——让太阳从黄色过渡到橙红，天空从蓝色变为紫色",explanation:"通过 GSAP tween SVG <radialGradient> 的 stop-color 和 offset 属性，实现光照、氛围的平滑过渡。SVG 渐变属性可以像任何 CSS 属性一样被动画化。",whyItMatters:"知道 SVG Gradient Animation 后，你就能对 AI 说「用 GSAP 动画 SVG radialGradient 的 stop-color，从 #FFD700 渐变到 #FF4500」——精准描述颜色过渡需求。"},{name:"分层时间线",nameEN:"Layered Timeline",analogy:"像 Premiere 的多轨道时间线——每个场景是一条轨道，可以交叉重叠、独立调试",explanation:"每个 gsap.timeline() 是独立的动画序列，通过不同的 ScrollTrigger 区间控制。Scene 1(0-45%) 和 Scene 2(15-40%) 可以重叠，创造自然的场景过渡而非硬切。",whyItMatters:"知道 Layered Timeline 后，你就能对 AI 说「创建 3 条 gsap.timeline，分别绑定 ScrollTrigger 的不同区间，Scene 1 和 2 重叠 20%」——这是组织复杂叙事动画的标准模式。"}],applications:[{field:"品牌叙事页",examples:"用滚动讲述品牌故事，每屏一个场景，沉浸式体验"},{field:"产品介绍页",examples:"展示产品从设计到生产的过程，滚动即「时间推进」"},{field:"在线绘本/漫画",examples:"用滚动控制故事推进，结合视差创造立体感"},{field:"游戏关卡选择",examples:"横向滚动的地图，远近山峦移动速度不同，增强探索感"}],keyInsight:"**滚动可以是叙事的节奏控制器，而非单纯的内容浏览工具**。核心术语链：**Parallax Scrolling**（分层速度差 → 深度错觉）→ **ScrollTrigger scrub**（滚动 → 时间轴映射）→ **Layered Timeline**（多场景编排）→ **SVG Gradient Animation**（色彩 → 情绪过渡）。记住黄金比例：远景:中景:近景 ≈ 1:2:4，这是可信视差的起点。"},frosted:{id:"frosted",title:"Frosted Glass",subtitle:"CSS 毛玻璃卡片",oneLiner:"基于 CSS backdrop-filter 的毛玻璃卡片预览效果——纯 CSS 实现 Glassmorphism 设计风格",whatYouSee:"三张卡片并排展示，每张卡片底部覆盖着一层「磨砂玻璃」——你可以透过玻璃隐约看到背景图片，但图片被模糊化了，同时饱和度和亮度也有微调。这种效果叫 **Glassmorphism**，也叫 **Frosted Glass Effect**。当鼠标悬停时，卡片整体放大，背景图片有微妙的缩放视差，弹性缓动让动画富有质感。",pipeline:[{step:"01",title:"构建卡片层叠结构 (Layered Card)",description:"三层结构：底层是全覆盖的背景图片（absolute + object-fit: cover），中层是 ::after 伪元素（承载毛玻璃效果），顶层是文字内容（z-index: 2）。卡片用 CSS Grid 的 align-content: end 让内容贴底。",glsl:`<div class="previewCard">
  <img class="backdrop" />  <!-- 底层：全覆盖背景图 -->
  <!-- ::after 伪元素 -->    <!-- 中层：毛玻璃层 -->
  <div class="content">     <!-- 顶层：文字内容 z-index:2 -->
    <div class="category">Instant</div>
    <div class="title">Soul Shatter</div>
    <div class="description">...</div>
  </div>
</div>`},{step:"02",title:"::after 伪元素承载毛玻璃 (backdrop-filter)",description:"关键：毛玻璃效果不是在内容区域上，而是用 ::after 伪元素覆盖整张卡片。inset: 0 + border-radius: inherit 让伪元素完全贴合卡片的圆角边界（注意：不要用负 inset，backdrop-filter 在某些浏览器中不会被 overflow: hidden 正确裁切，会导致直角露出）。backdrop-filter 三件套：blur 模糊、saturate 增饱和、brightness 降亮度。",glsl:`.previewCard::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit; /* 贴合父级圆角 */
  z-index: 1;
  pointer-events: none;
  backdrop-filter:
    blur(1.5rem)
    saturate(1.5)
    brightness(0.85);
}`},{step:"03",title:"mask-image 控制磨砂范围 (Gradient Mask)",description:"核心技巧：用 mask-image 渐变遮罩控制「哪里磨砂、哪里清晰」。顶部 transparent → 40% 处 0.1 不透明 → 55% 处 0.5 → 75% 处完全不透明。效果是：卡片上半部分清晰展示原图，下半部分逐渐磨砂，底部完全模糊。",glsl:`.previewCard::after {
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,        /* 顶部：完全清晰 */
    rgba(0,0,0,0.1) 40%,  /* 开始微微磨砂 */
    rgba(0,0,0,0.5) 55%,  /* 明显磨砂 */
    black 75%              /* 底部：完全磨砂 */
  );
}`},{step:"04",title:"白色渐变叠加层 (Subtle Overlay)",description:"::after 伪元素同时叠加一层微妙的白色渐变：从顶部完全透明到底部 20% 白色。这给磨砂区域增加了「雾气感」，让文字区域的对比度更好，同时不破坏整体暗色调。",glsl:`.previewCard::after {
  background: linear-gradient(
    to bottom,
    rgba(255,255,255, 0) 0%,
    rgba(255,255,255, 0.2) 100%
  );
}`},{step:"05",title:"Hover 多层缩放 (Layered Scale)",description:"悬停时三层动画同时触发：卡片 scale(1.05)、背景图 scale(1.1)、箭头 SVG scale(1.5)。不同缩放比例产生微妙的层次差异。transition 时长也不同：卡片 250ms、图片 500ms（更柔和），创造错落感。",glsl:`.previewCard:hover { transform: scale(1.05); }
.previewCard:hover img { transform: scale(1.1); }
.previewCard:hover svg { transform: scale(1.5); }
/* 卡片 250ms / 图片 500ms ease-in-out */`}],concepts:[{name:"backdrop-filter",nameEN:"CSS backdrop-filter",analogy:"filter 模糊自己，backdrop-filter 模糊身后——一个是自己戴墨镜，一个是窗户变成磨砂玻璃",explanation:"CSS backdrop-filter 对元素背后的区域应用图形效果（blur、saturate、brightness 等），不影响元素自身内容。这是实现 Glassmorphism 的核心属性，浏览器实时合成背景内容并应用滤镜。所有现代浏览器均已支持。",whyItMatters:"知道 backdrop-filter 后，你就能对 AI 说「给这个卡片加 backdrop-filter: blur(12px) saturate(1.6) 的毛玻璃效果」——而不是模糊地说「让背景变模糊」。"},{name:"Glassmorphism",nameEN:"Glassmorphism Design Style",analogy:"iOS 控制中心、macOS 菜单栏的半透明模糊效果——这种设计风格有个专业名字",explanation:"Glassmorphism 是一种 UI 设计风格，核心特征：半透明背景 + 背景模糊 + 微妙边框 + 阴影。源自 Apple 的 Design Language，后成为 Web 设计趋势。关键参数：background rgba 透明度 5-15%、blur 8-20px、border 1px rgba 白色 10-20%。",whyItMatters:"知道 Glassmorphism 后，你就能对 AI 说「做一个 Glassmorphism 风格的卡片，blur 12px，背景透明度 8%，白色微光边框」——精准描述设计需求。"},{name:"mask-image 渐变遮罩",nameEN:"CSS mask-image",analogy:"给元素套一个渐变的「能见度罩」——黑色区域完全可见，透明区域完全隐藏",explanation:"CSS mask-image 用图像或渐变控制元素的可见区域。linear-gradient(to bottom, transparent, black) 让顶部渐隐、底部完全显示。支持与 mask-composite 组合实现复杂遮罩。",whyItMatters:"知道 mask-image 后，你就能对 AI 说「用 mask-image: linear-gradient 做一个顶部 20% 渐隐的遮罩」——而不是说「让边缘慢慢消失」。"},{name:"cubic-bezier 弹性缓动",nameEN:"Cubic Bezier Easing",analogy:"不是匀速变化，而是像弹簧——开始慢、中间快、结尾有微妙的回弹感",explanation:"cubic-bezier(0.23, 1, 0.32, 1) 的 P2 y 值大于 1，产生微妙的「过冲」效果。常见预设：ease-out(0, 0, 0.58, 1)、ease-in-out(0.42, 0, 0.58, 1)。自定义缓动让动画有物理质感。",whyItMatters:"知道 cubic-bezier 后，你就能对 AI 说「hover transition 用 cubic-bezier(0.23, 1, 0.32, 1) 弹性缓动，duration 0.5s」——精确控制动画节奏。"}],applications:[{field:"卡片式布局",examples:"产品展示、作品集、新闻摘要等场景的 hover 预览卡片"},{field:"模态弹窗 / 对话框",examples:"用毛玻璃背景替代纯黑遮罩，保持上下文感"},{field:"导航栏 / 侧边栏",examples:"固定定位的导航用毛玻璃效果，既不遮挡内容又有层次感"},{field:"数据仪表盘",examples:"浮动面板用 Glassmorphism 风格，让多层信息共存而不混乱"}],keyInsight:"**毛玻璃效果的本质是「有限透明」——不完全遮挡，也不完全暴露**。核心术语链：**backdrop-filter**（模糊背后内容）→ **Glassmorphism**（设计风格名称）→ **mask-image**（渐变遮罩柔化边缘）→ **cubic-bezier**（弹性缓动增加质感）。记住三件套公式：`backdrop-filter: blur()` + `background: rgba(低透明度)` + `border: rgba(白色微光)` = Glassmorphism。"},videotext:{id:"videotext",title:"Video Text",subtitle:"SVG 滤镜视频文字填充",oneLiner:"基于 SVG feComponentTransfer 的视频填充文字效果——文字内部播放视频，同时保持可选择、可复制、可无障碍访问",whatYouSee:"屏幕上有四个区块，每个区块中硕大的「VIDEO TEXT」字样内部正在播放雪山视频。文字周围被纯色或图案背景包围，但文字部分是「镂空」的——你透过文字的轮廓看到背后的视频。最神奇的是：这些文字是真实的 DOM 文本，你可以选中、复制它们。这种效果叫 **Video Text Fill / Text Knockout Effect**，核心技术是 **SVG feComponentTransfer 滤镜**反转 alpha 通道。",pipeline:[{step:"01",title:"定义 SVG Alpha 反转滤镜 (feComponentTransfer)",description:"创建一个 SVG filter，用 feFuncA 的 table 映射反转 alpha 通道：alpha=1（文字像素）→ 映射为 0（透明），alpha<0.9（背景像素）→ 映射为 1（不透明）。效果：文字变透明，周围变不透明——刚好和正常渲染相反。",glsl:`<filter id='extract' x='0' y='0' width='1' height='1'>
  <feComponentTransfer>
    <!-- alpha 1→0, alpha 0→10(clamped to 1) -->
    <feFuncA type='table' tableValues='10 0'/>
  </feComponentTransfer>
</filter>`},{step:"02",title:"CSS Grid 层叠视频与文字 (Grid Stacking)",description:"用 CSS Grid 的 grid-area: 1/1 让 video 和 text-box 完美重叠在同一个网格单元中。视频在底层全宽展示，文字层覆盖在上方。这种堆叠方式比 position: absolute 更灵活，尺寸自动同步。",glsl:`.video-text-container, .text-box { display: grid }
:is(.video-text-container, .text-box) > * {
  grid-area: 1/ 1  /* 所有子元素堆叠在同一格 */
}`},{step:"03",title:"应用滤镜实现文字镂空 (Filter Application)",description:"给 .text-box 应用 filter: url(#extract)，SVG 滤镜将文字像素的 alpha 设为 0（透明），让视频从文字形状中透出来。同时叠加 drop-shadow 做边缘柔化和立体阴影。注意：背景色的 alpha 必须低于 0.9，否则也会被滤镜反转。",glsl:`.text-box {
  --c: light-dark(#a9d6e5, #00171f);
  color: var(--c);
  filter: url(#extract)     /* alpha 反转 */
    drop-shadow(0 0 2px var(--c))  /* 边缘柔化 */
    drop-shadow(2px 2px 4px #020202); /* 立体阴影 */
  background: rgb(from var(--c) r g b/ .8); /* alpha < .9! */
}`},{step:"04",title:"背景图 + background-clip: text 变体 (Text Fill Variations)",description:"进阶变体：用 background-clip: text 让背景图案/渐变填充文字内部，再用 ::after 伪元素承载同一背景（不裁切）作为文字周围的底色。多层背景还可以用 background-blend-mode: hard-light 混合，创造丰富的视觉层次。",glsl:`.back-img {
  color: #0000;  /* 文字透明，让 background-clip 生效 */
  background: var(--back);
  background-clip: text;  /* 背景只在文字内显示 */

  &::after {
    background: inherit;
    background-clip: border-box;  /* 伪元素不裁切 */
    opacity: .8;  /* 保持 alpha < .9 */
  }
}`},{step:"05",title:"视频自动播放与可见性控制 (Autoplay + IntersectionObserver)",description:"用 CSS 变量 --auto 标记自动播放状态，结合 JS 检测浏览器是否允许自动播放。如果被阻止，动态创建 play/pause 按钮。IntersectionObserver 监听视频可见性，离开视口时自动暂停以节省资源。还通过 prefers-reduced-motion 媒体查询尊重用户偏好。",glsl:`// 检测自动播放权限
let promise = video.play();
promise.catch(err => { /* 创建手动播放按钮 */ });

// 可见性控制
new IntersectionObserver((entries) => {
  let inview = Math.ceil(entry.intersectionRatio);
  if(+vid.dataset.auto) vid[['play','pause'][inview]]();
});`}],concepts:[{name:"feComponentTransfer",nameEN:"SVG feComponentTransfer Filter",analogy:"像 Photoshop 的「反相」——但只反转透明度通道，文字变透明、背景变不透明",explanation:"SVG 滤镜原语 feComponentTransfer 允许对 RGBA 四个通道分别做映射变换。feFuncA type='table' tableValues='10 0' 将 alpha 值做线性插值反转：0→10（clamp 到 1），1→0。这是实现 Text Knockout 的关键，比 mix-blend-mode 方案更可控、文字保持可选。",whyItMatters:"知道 feComponentTransfer 后，你就能对 AI 说「用 SVG feComponentTransfer 反转 alpha 通道实现 text knockout」——而不是说「让文字变成透明的，能看到后面的视频」。"},{name:"background-clip: text",nameEN:"CSS background-clip: text",analogy:"把背景图案用文字形状做饼干模具「切割」——只在文字轮廓内显示背景",explanation:"CSS background-clip: text 将元素背景裁切到文字前景区域。配合 color: transparent 使用，可以让任意背景（图片、渐变、视频截图）填充文字。这是 CSS 原生的 Text Fill 方案，但不能直接填充动态视频——需要配合本 demo 的滤镜方案。",whyItMatters:"知道 background-clip: text 后，你就能对 AI 说「用 background-clip: text + 渐变背景做文字填充效果」——精准描述文字内显示图案的需求。"},{name:"容器查询单位",nameEN:"Container Query Units (cqw)",analogy:"vw 相对于视口宽度，cqw 相对于容器宽度——让文字大小跟随容器而非窗口缩放",explanation:"CSS Container Query Units（cqw, cqh 等）让尺寸相对于最近的 container-type: inline-size 祖先。font-size: 30cqw 意味着文字宽度始终是容器的 30%，无论容器在页面中多大。比 vw 更灵活，是组件级响应式设计的基础。",whyItMatters:"知道 cqw 后，你就能对 AI 说「文字大小用 clamp(2rem, 30cqw, 25rem) 配合 container-type: inline-size」——实现容器级别的响应式排版。"},{name:"CSS Grid 层叠",nameEN:"CSS Grid Stacking",analogy:"所有子元素放在同一个格子里，像叠卡片一样——比 position: absolute 更优雅的重叠方案",explanation:"通过 display: grid 配合 grid-area: 1/1 让多个子元素重叠在同一网格区域。相比 absolute 定位，Grid Stacking 不脱离文档流、自动参与尺寸计算、更易维护。是现代 CSS 中实现元素重叠的推荐方式。",whyItMatters:"知道 CSS Grid Stacking 后，你就能对 AI 说「用 grid-area: 1/1 做元素层叠，替代 absolute 定位」——这是更现代、更健壮的重叠方案。"}],applications:[{field:"品牌首页 Hero",examples:"用视频填充品牌名称，创造沉浸式的第一印象"},{field:"数据可视化标题",examples:"用实时数据流动画填充标题文字，暗示「动态数据」的概念"},{field:"交互式海报",examples:"文字内显示用户摄像头画面或交互式 Canvas，创造参与感"},{field:"无障碍视觉设计",examples:"视觉效果震撼的同时文字保持可选、可复制、屏幕阅读器可读"}],keyInsight:"**视觉效果和语义可访问性不是对立的**。这个 demo 证明：文字可以同时是「视觉容器」（显示视频）和「语义文本」（可选择、可复制、可被屏幕阅读器读取）。核心术语链：**feComponentTransfer**（alpha 通道反转 → text knockout）→ **Grid Stacking**（grid-area: 1/1 → 元素层叠）→ **background-clip: text**（背景裁切 → 文字填充）→ **Container Query Units**（cqw → 容器响应式排版）。关键洞察：SVG 滤镜操作的是渲染层，不影响 DOM 层——所以文字「看起来」是视频，「本质上」仍是真实文本。"}},hb={flip:{id:"flip",title:"FLIP",subtitle:"布局过渡动画",oneLiner:"基于 FLIP（First-Last-Invert-Play）技术的布局状态切换动画——让 CSS 布局变化拥有 60fps 的流畅过渡",whatYouSee:'四个彩色字母 F、L、I、P 在不同布局间平滑切换：先是水平排列拼成 "FLIP for GSAP"（Final 布局），然后变为无背景的纯文字（Plain），接着四列等宽排列（Columns），最后变成 2×2 网格（Grid）。每次布局切换时，字母从旧位置滑动到新位置，"for" 和 "GSAP" 文字在 Final 状态淡入、离开时淡出。切到 Final 时字母还会旋转一圈。这种效果在前端叫 **Layout Animation（布局动画）**。',pipeline:[{step:"01",title:"捕获初始状态 (First)",description:"在任何布局变化发生之前，用 Flip.getState() 快照所有元素的当前位置、尺寸、颜色。这一步对应 FLIP 中的 F（First）——记录「动画起点在哪」。",glsl:`// 捕获所有参与动画的元素状态
const state = Flip.getState(
  ".letter, .for, .gsap",
  { props: "color,backgroundColor", simple: true }
);`},{step:"02",title:"切换到目标布局 (Last)",description:"直接修改 DOM——移除旧布局 class、添加新布局 class。CSS 立即生效，元素瞬间跳到最终位置。这一步对应 L（Last）——浏览器已经算好了「终点在哪」。",glsl:`// 同步切换 CSS class（无动画，瞬间生效）
container.classList.remove(layouts[curLayout]);
curLayout = (curLayout + 1) % layouts.length;
container.classList.add(layouts[curLayout]);`},{step:"03",title:"反转 + 播放 (Invert & Play)",description:"Flip.from() 自动计算新旧位置的差值，用 CSS transform 把元素「拉回」旧位置，然后动画移除 transform——视觉上元素从旧位置平滑滑到新位置。这就是 I（Invert）和 P（Play）。",glsl:`Flip.from(state, {
  absolute: true,      // 动画期间用 position:absolute 避免布局抖动
  stagger: 0.07,       // 每个元素延迟 70ms 依次启动
  duration: 0.7,       // 动画时长 700ms
  ease: "power2.inOut", // 缓入缓出
  spin: curLayout === 0, // Final 布局时额外旋转 360°
  simple: true,        // 只追踪 transform（性能优化）
});`},{step:"04",title:"元素进出场动画 (Enter/Leave)",description:'"for" 和 "GSAP" 只在 Final 布局显示。Flip 插件通过 onEnter/onLeave 回调检测哪些元素新出现或消失，自动为它们添加淡入/淡出动画。',glsl:`// 新出现的元素：延迟到主动画快结束时淡入
onEnter: (elements, animation) =>
  gsap.fromTo(elements,
    { opacity: 0 },
    { opacity: 1, delay: animation.duration() - 0.1 }
  ),
// 消失的元素：直接淡出
onLeave: (elements) =>
  gsap.to(elements, { opacity: 0 })`},{step:"05",title:"循环调度 (Auto-play Timer)",description:"用 gsap.delayedCall 实现自动轮播。Final 布局停留 3.5 秒（展示完整标题），其他布局停留 1.5 秒。每次动画结束后递归调用下一轮。",glsl:`// Final 布局多停一会，其他布局快速切换
gsap.delayedCall(
  curLayout === 0 ? 3.5 : 1.5,
  nextState
);`}],concepts:[{name:"FLIP 技术",nameEN:"First-Last-Invert-Play",analogy:"想象拍一张「旧位置」的照片和一张「新位置」的照片，然后让 PS 自动生成中间的补间帧——FLIP 就是这个过程的实时版本",explanation:"FLIP 是 Paul Lewis 提出的高性能布局动画模式：先记录初始状态（First），让浏览器计算最终状态（Last），用 transform 反转差值（Invert），再动画播放（Play）。因为只动画 transform 和 opacity，完全跳过 layout/paint 阶段，性能极佳。",whyItMatters:"知道 FLIP 这个词后，你就能对 AI 说「我需要一个 FLIP layout animation，在网格和列表视图间切换」——而不是模糊地说「让元素滑过去」。"},{name:"布局动画",nameEN:"Layout Animation",analogy:"普通 CSS transition 只能动画 width/height/top/left（触发重排，性能差）。Layout Animation 的巧妙之处是：布局变化瞬间完成，动画全靠 transform 补间",explanation:"Layout Animation 指的是在不同 CSS 布局状态（grid、flexbox、absolute 等）之间平滑过渡。直接 transition 布局属性会触发昂贵的 reflow。FLIP 通过「先跳到终点，再用 transform 动画回来」绕开了这个性能瓶颈。",whyItMatters:"知道这个术语后，你就能对 AI 说「实现一个 layout animation，从 flex 水平排列切换到 CSS Grid 2×2」——AI 就知道用 FLIP 或 View Transitions API。"},{name:"交错动画",nameEN:"Stagger Animation",analogy:"多米诺骨牌效应——不是所有元素同时动，而是依次延迟启动，产生波浪般的视觉节奏",explanation:"stagger: 0.07 表示每个元素比前一个延迟 70ms 启动动画。GSAP 的 stagger 支持数值、对象（from/each/grid）、甚至函数，可以控制波浪方向和形状。",whyItMatters:"知道 stagger 这个词后，你就能对 AI 说「给列表项加 stagger 入场动画，from center 向两边扩散，each 50ms」——比说「一个一个出现」精确得多。"},{name:"绝对定位动画",nameEN:"Absolute Positioning in Animation",analogy:"把元素暂时「抬」出文档流，在空中自由移动，到达目的地后再「放回」文档流",explanation:"Flip.from 的 absolute: true 在动画期间将元素设为 position: absolute，防止它们在移动过程中推挤其他元素导致布局跳动。动画结束后自动恢复原始定位方式。",whyItMatters:"知道这个技巧后，你就能对 AI 说「动画期间需要 absolute positioning 防止 layout thrashing」——这是流畅布局动画的关键细节。"}],applications:[{field:"视图切换",examples:"列表视图 ↔ 网格视图、卡片展开/收起、相册缩略图 → 大图浏览"},{field:"筛选/排序动画",examples:"Isotope/Masonry 风格的筛选动画、表格排序时行的平滑移动、标签拖拽重排"},{field:"共享元素过渡",examples:"页面间的 Shared Element Transition、导航栏 active indicator 滑动、Tab 切换内容过渡"},{field:"状态反馈",examples:"购物车添加商品飞入动画、待办事项完成后滑入「已完成」区、拖拽排序松手后归位"}],keyInsight:"**布局动画的本质是「欺骗视觉」**：浏览器瞬间完成布局计算（毫秒级），然后用 transform 动画「回放」这个变化过程（数百毫秒）。FLIP 的核心洞察是：与其让浏览器在动画每一帧都重新计算布局（昂贵），不如只计算一次终态，然后用 GPU 加速的 transform 补间（廉价）。记住这个模式：**先到达终点，再演出过程**。"},echotrace:{id:"echotrace",title:"EchoTrace",subtitle:"迷幻运动拖尾",oneLiner:"基于 Canvas 2D 逐帧合成的 Motion Trail（运动拖尾）效果——用半透明覆盖实现时间的「残影」",whatYouSee:"移动鼠标时，光标位置不断产生彩色光斑，形成一条流光溢彩的轨迹。旧的光斑不会立刻消失，而是像余晖一样逐渐褪去——这就是 **Motion Trail（运动拖尾）** 效果。颜色沿 HSL 色轮连续变化，产生迷幻的彩虹渐变。整个效果基于 Canvas 2D 的逐帧半透明覆盖，不需要追踪历史坐标数组。",pipeline:[{step:"01",title:"帧循环 (Animation Loop)",description:"用 requestAnimationFrame 驱动 60fps 的渲染循环。每一帧执行两个操作：先画一层半透明背景（制造褪色效果），再在鼠标位置画一个新光斑。",glsl:`function animate() {
  // 半透明覆盖 → 旧内容逐渐褪色
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, w, h);
  // 画新光斑
  drawSpot(mouseX, mouseY);
  requestAnimationFrame(animate);
}`},{step:"02",title:"褪色机制 (Fade Overlay)",description:"每帧用 rgba(0,0,0,0.05) 覆盖整个画布。alpha=0.05 意味着每帧只覆盖 5% 的不透明度——旧内容经过约 20 帧（~333ms）才完全消失。这个 alpha 值直接控制拖尾长度。",glsl:"// alpha 越小 → 拖尾越长（褪色越慢）\n// alpha 越大 → 拖尾越短（褪色越快）\nctx.fillStyle = `rgba(0, 0, 0, ${fadeAlpha})`;\nctx.fillRect(0, 0, canvas.width, canvas.height);"},{step:"03",title:"光斑绘制 (Spot Drawing)",description:"在鼠标位置用径向渐变绘制发光圆形。中心不透明、边缘透明，产生柔和的光晕效果。用 Canvas 的 globalCompositeOperation 控制混合模式。",glsl:"const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);\ngradient.addColorStop(0, `hsla(${hue}, 100%, 60%, 1)`);\ngradient.addColorStop(1, `hsla(${hue}, 100%, 60%, 0)`);\nctx.fillStyle = gradient;\nctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);"},{step:"04",title:"色轮漫游 (Hue Rotation)",description:"每帧递增 hue 值（0→360 循环），光斑颜色沿 HSL 色轮连续变化。不需要复杂的颜色插值——HSL 的 H 通道天然就是环形的。",glsl:"// HSL 的 H 通道是 0-360 的环形\nhue = (hue + hueSpeed) % 360;\n// 直接用在 CSS 颜色字符串中\n`hsla(${hue}, 100%, 60%, 1)`"},{step:"05",title:"轨迹系统 (Trail Points)",description:"维护一个固定长度的坐标数组，每帧推入当前鼠标位置并移除最旧的点。从旧到新依次绘制，半径和透明度递减，形成从粗到细、从亮到暗的渐变拖尾。",glsl:`// 固定长度队列：新进旧出
trail.push({ x: mouseX, y: mouseY });
if (trail.length > maxLength) trail.shift();
// 从旧到新绘制，越新越大越亮
trail.forEach((point, i) => {
  const ratio = i / trail.length;
  drawSpot(point.x, point.y, ratio * maxRadius);
});`}],concepts:[{name:"运动拖尾",nameEN:"Motion Trail",analogy:"长曝光照片中的车灯轨迹——物体移动过，但光在时间中留下了残影",explanation:"Motion Trail 通过保留历史帧的部分信息（而非完全清除）来可视化运动路径。在 Canvas 中，最经典的实现是每帧覆盖半透明背景而非 clearRect，让旧内容自然衰减。",whyItMatters:"知道 Motion Trail 这个词后，你就能对 AI 说「我需要鼠标跟随的 motion trail 效果，fade duration 500ms」——而不是说「鼠标后面拖着一条彩色的尾巴」。"},{name:"HSL 色彩空间",nameEN:"HSL Color Space",analogy:"想象一个色彩转盘——H 是转盘角度（色相），S 是颜色纯度，L 是明暗。要做彩虹渐变，只需转动 H",explanation:"HSL（Hue-Saturation-Lightness）将颜色分解为人类直觉的三个维度。H 通道 0-360° 对应红→橙→黄→绿→青→蓝→紫→红的色环。连续递增 H 值就能自动产生平滑的彩虹过渡，这在 RGB 空间中需要复杂的插值。",whyItMatters:"知道 HSL 后，你就能对 AI 说「用 HSL 色轮做 hue rotation 动画，每秒转 60 度」——比描述「颜色从红变到蓝再变回红」简洁得多。"},{name:"帧合成",nameEN:"Frame Compositing",analogy:"不是每帧擦掉重画，而是在旧画面上叠一层半透明「薄膜」——旧内容透过薄膜还能看到，但逐渐变淡",explanation:"Canvas 默认每帧 clearRect 清空画布。Motion Trail 的核心技巧是用 fillRect + 低 alpha 覆盖替代清空，让之前帧的内容以指数衰减的方式保留。alpha 值控制衰减速度：0.02（慢褪色/长尾）到 0.2（快褪色/短尾）。",whyItMatters:"知道 frame compositing 后，你就能对 AI 说「用半透明覆盖做 frame compositing，alpha 0.05，实现 motion trail」——这是一个通用模式。"},{name:"requestAnimationFrame",nameEN:"requestAnimationFrame (rAF)",analogy:"告诉浏览器「下次你要刷新屏幕之前叫我一声」——保证动画和屏幕刷新率同步",explanation:"rAF 是浏览器提供的帧同步 API，在每次屏幕重绘前触发回调。比 setInterval 更高效：标签页不可见时自动暂停、自动匹配显示器刷新率（60/120/144Hz）、与浏览器渲染管线同步避免撕裂。",whyItMatters:"知道 rAF 后，你就能对 AI 说「用 rAF 驱动 canvas 动画循环，不要用 setInterval」——这是所有 Canvas/WebGL 动画的标准起点。"}],applications:[{field:"光标效果",examples:"自定义光标拖尾、画板笔刷预览、游戏中技能释放的粒子轨迹"},{field:"数据可视化",examples:"实时股价走势的荧光屏效果、传感器数据流的余辉显示、心电图/示波器模拟"},{field:"音乐可视化",examples:"音频频谱的残影效果、节拍驱动的粒子拖尾、VJ 表演的实时视觉"},{field:"互动装置",examples:"体感互动展览的人体轮廓拖尾、AR 滤镜的运动追踪特效、创意编程艺术"}],keyInsight:"**Motion Trail 的本质是用空间展示时间**。正常情况下，画布每帧清空重画，你只看到「此刻」。半透明覆盖让过去的帧「泄漏」到当前，把时间维度压缩到了二维画面上。这和长曝光摄影、运动模糊、示波器余辉是同一个原理——**不完全遗忘，就是记忆**。"},spotlight:{id:"spotlight",title:"Spotlight",subtitle:"光标聚光灯",oneLiner:"基于 CSS mix-blend-mode: screen 和径向渐变的光标追踪聚光灯——用混合模式「点亮」暗色背景",whatYouSee:"深色背景上，鼠标附近有一圈柔和的光晕跟随移动，就像手电筒照在墙上。光照区域的内容被「点亮」——颜色变亮、细节显现。移开后又恢复暗色。这个效果叫 **Spotlight Effect（聚光灯效果）**，核心是 CSS 的 **mix-blend-mode: screen**（滤色混合模式）。",pipeline:[{step:"01",title:"创建光源层 (Light Layer)",description:"在内容层上方叠一个全屏的「光源层」。用 CSS radial-gradient 创建一个从亮到暗的径向渐变圆——这就是「手电筒」的光斑。",glsl:`.spotlight-layer {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle 300px at var(--x) var(--y),
    rgba(255,255,255,0.8) 0%,
    rgba(0,0,0,1) 100%
  );
}`},{step:"02",title:"应用滤色混合 (Screen Blend)",description:"给光源层设置 mix-blend-mode: screen。Screen 模式的数学公式是 1-(1-A)×(1-B)：白色区域让底层完全显示（1），黑色区域让底层完全变黑（0）。效果就是「光斑区域亮，其余区域暗」。",glsl:`.spotlight-layer {
  mix-blend-mode: screen;
  /* screen: 白色→透明, 黑色→遮挡 */
  /* 类似 Photoshop 的「滤色」图层模式 */
}`},{step:"03",title:"光标追踪 (Pointer Tracking)",description:"监听 mousemove 事件，用 GSAP 的 quickTo 将鼠标坐标平滑映射到 CSS 自定义属性 --x、--y。quickTo 自带弹性插值，让光斑跟随有惯性而非生硬。",glsl:`// GSAP quickTo：高性能的值追踪器
const xTo = gsap.quickTo(".spotlight", "--x", {
  duration: 0.3, ease: "power3"
});
document.addEventListener("mousemove", (e) => {
  xTo(e.clientX + "px");
  yTo(e.clientY + "px");
});`},{step:"04",title:"渐变参数化 (Gradient Sizing)",description:"radial-gradient 的尺寸和衰减曲线决定光斑的「硬度」。小半径 + 急衰减 = 手电筒聚焦，大半径 + 缓衰减 = 环境光效果。通过控制面板实时调整。",glsl:`/* 硬聚光灯 */
radial-gradient(circle 150px at ..., white 0%, black 60%)
/* 柔和环境光 */
radial-gradient(circle 500px at ..., white 0%, black 100%)`},{step:"05",title:"内容交互 (Content Reveal)",description:"底层内容可以是文字、图片或任何 DOM 元素。Spotlight 层不修改底层内容，纯粹通过混合模式叠加——这意味着可以用在任何现有页面上，零侵入。",glsl:`<!-- 底层：正常内容 -->
<div class="content">
  <h1>隐藏的标题</h1>
  <p>只有光照到才能看清</p>
</div>
<!-- 上层：spotlight 遮罩 -->
<div class="spotlight-layer"></div>`}],concepts:[{name:"滤色混合模式",nameEN:"mix-blend-mode: screen",analogy:"两台投影仪照在同一面墙上——光叠加只会更亮，不会更暗。白色全亮，黑色不改变",explanation:"Screen 模式公式：Result = 1 - (1-A) × (1-B)。白色(1)让结果为 1（全亮），黑色(0)让结果等于另一层。这是 CSS 的 16 种混合模式之一，直接在 GPU 上计算，性能极佳。",whyItMatters:"知道 mix-blend-mode: screen 后，你就能对 AI 说「用 screen blend mode 做聚光灯效果」——而不是说「那种鼠标移过去就变亮的效果」。"},{name:"GSAP quickTo",nameEN:"GSAP quickTo",analogy:"像一只追着激光笔的猫——不是瞬移到目标位置，而是带着惯性、有弹性地追过去",explanation:"quickTo 创建一个可复用的值插值器。每次调用只传入目标值，GSAP 自动从当前值平滑过渡。比每次创建新 tween 高效 10 倍以上，专为高频事件（mousemove、scroll）设计。",whyItMatters:"知道 quickTo 后，你就能对 AI 说「用 gsap.quickTo 做鼠标跟随，duration 0.3」——这是 GSAP 中处理 pointer tracking 的最佳实践。"},{name:"CSS 自定义属性动画",nameEN:"CSS Custom Property Animation",analogy:"把 CSS 变量当成遥控器的旋钮——JS 转动旋钮，CSS 实时响应",explanation:"通过 JS 修改 --x、--y 等 CSS 自定义属性，radial-gradient 引用这些属性实时更新。这种 JS 控制 + CSS 渲染的模式避免了直接操作 DOM 样式的开销。",whyItMatters:"知道这个模式后，你就能对 AI 说「用 CSS custom properties 传递坐标给 radial-gradient」——这是连接 JS 逻辑和 CSS 视觉的标准桥梁。"},{name:"径向渐变",nameEN:"radial-gradient",analogy:"在画布上放一盏灯——中心最亮，向外逐渐变暗，衰减曲线决定了光的「软硬」",explanation:"CSS radial-gradient 创建从中心向外辐射的颜色过渡。通过控制 circle 的尺寸、color stop 的位置和渐变的缓急，可以精确模拟各种光照效果。支持 at <position> 语法动态定位中心点。",whyItMatters:"知道 radial-gradient 的参数化控制后，你就能对 AI 说「radial-gradient circle 300px，从白到黑，60% 处 color stop」——精确描述你想要的光斑形态。"}],applications:[{field:"内容揭示",examples:"隐藏信息揭示、暗色主题的焦点引导、游戏中的迷雾/战争迷雾效果"},{field:"产品展示",examples:"产品细节放大镜、暗色背景下的特性高亮、探照灯式的互动 showcase"},{field:"教学/引导",examples:"用户引导的聚光灯步骤、代码审查的焦点高亮、幻灯片的注意力引导"},{field:"艺术/创意",examples:"互动艺术装置、创意 portfolio 的探索式浏览、密室逃脱类网页游戏"}],keyInsight:"**Spotlight 的本质是「不改变内容，只改变感知」**。底层 DOM 原封不动，仅通过一个混合模式图层就改变了用户看到的一切。这是 CSS 混合模式的威力——它在 GPU 上实时计算像素级的颜色数学，零 DOM 操作、零重排、零重绘。记住：**最好的视觉效果是叠加出来的，不是改出来的**。"},textmask:{id:"textmask",title:"Text Mask",subtitle:"SVG 文字遮罩",oneLiner:"基于 SVG <mask> 和 GSAP 气泡扩张动画的文字揭示效果——用遮罩形状控制文字的可见区域",whatYouSee:"点击画面时，一个圆形从点击位置向外扩张，圆形覆盖区域内显示大号文字，圆形外依然是背景色。多次点击会产生多个「气泡」，气泡重叠区域文字更加清晰。这个效果叫 **SVG Mask Reveal（遮罩揭示）**，核心是 SVG 的 **<mask>** 元素配合 GSAP 动画。",pipeline:[{step:"01",title:"创建文字层 (Text Layer)",description:"用 SVG <text> 元素创建大号文字，但初始时被 <mask> 完全遮挡——白色区域可见，黑色区域隐藏。初始 mask 为全黑 = 文字完全不可见。",glsl:`<svg>
  <mask id="revealMask">
    <!-- 初始全黑 = 文字完全隐藏 -->
    <rect width="100%" height="100%" fill="black"/>
    <!-- 白色圆形 = 文字可见区域 -->
    <circle class="bubble" cx="..." cy="..." r="0" fill="white"/>
  </mask>
  <text mask="url(#revealMask)">CREATIVE</text>
</svg>`},{step:"02",title:"监听点击事件 (Click Handler)",description:"每次点击在 SVG mask 中动态创建一个新的 <circle> 元素，圆心在点击位置、半径为 0。这个白色圆就是即将扩张的「气泡」。",glsl:`document.addEventListener("click", (e) => {
  const circle = document.createElementNS(svgNS, "circle");
  circle.setAttribute("cx", e.clientX);
  circle.setAttribute("cy", e.clientY);
  circle.setAttribute("r", "0");
  circle.setAttribute("fill", "white");
  mask.appendChild(circle);
});`},{step:"03",title:"气泡扩张动画 (Bubble Expand)",description:"用 GSAP 将圆的半径从 0 动画到足以覆盖整个画面的大小。ease 选择 power2.out 模拟气泡快速膨胀后减速的物理感。",glsl:`gsap.to(circle, {
  attr: { r: maxRadius },  // 扩张到覆盖全屏
  duration: 1.2,
  ease: "power2.out",       // 快速膨胀 → 缓慢收尾
});`},{step:"04",title:"遮罩合成 (Mask Compositing)",description:"SVG mask 的工作原理：白色(255)=完全可见，黑色(0)=完全隐藏，灰色=半透明。多个白色圆形重叠时取最亮值（类似 lighten blend），所以多个气泡的可见区域会自然合并。",glsl:`<!-- mask 中多个白色圆形自动合并 -->
<mask id="revealMask">
  <rect fill="black"/>         <!-- 基底：全黑 -->
  <circle r="200" fill="white"/> <!-- 气泡 1 -->
  <circle r="150" fill="white"/> <!-- 气泡 2 -->
  <!-- 重叠区域：依然是白色，文字可见 -->
</mask>`},{step:"05",title:"重置与交互循环",description:"可选：在所有气泡扩张完成后，反向动画缩小所有圆形，文字重新隐藏，等待下一轮点击。或者累积所有气泡，让文字逐步「被发现」。",glsl:`// 反向收缩：所有气泡同时缩回
gsap.to(".bubble", {
  attr: { r: 0 },
  duration: 0.8,
  stagger: 0.05,
  ease: "power2.in",
  onComplete: () => mask.innerHTML = '<rect fill="black"/>'
});`}],concepts:[{name:"SVG 遮罩",nameEN:"SVG <mask>",analogy:"把一张黑白照片当作「窗帘」——白色的地方能看穿，黑色的地方被挡住，灰色的地方是半透明的",explanation:"SVG <mask> 元素定义一个亮度遮罩：被遮罩元素的每个像素的可见度 = mask 对应位置的亮度值。与 clip-path（硬边缘裁切）不同，mask 支持灰度渐变，可以实现羽化、半透明等软边缘效果。",whyItMatters:"知道 SVG mask 后，你就能对 AI 说「用 SVG mask 做 reveal animation，mask 形状从圆形扩张」——而不是说「那种文字慢慢出现的效果」。"},{name:"遮罩揭示",nameEN:"Mask Reveal Animation",analogy:"擦去雾气的玻璃窗——手指划过的地方变透明，能看到窗外的风景",explanation:"Mask Reveal 是一种过渡动画模式：通过动画改变 mask 的形状/大小/位置，逐步揭示被遮挡的内容。常见形状有圆形扩张、矩形擦除、路径描边。核心优势是可以从任意位置、任意形状开始揭示。",whyItMatters:"知道 mask reveal 后，你就能对 AI 说「做一个 circular mask reveal，从点击位置展开，duration 1.2s」——这是页面过渡和内容揭示的经典模式。"},{name:"SVG 命名空间",nameEN:"SVG Namespace (createElementNS)",analogy:"SVG 元素住在自己的「国度」——创建 SVG 元素必须带上「护照」（命名空间 URI），否则浏览器不认",explanation:"动态创建 SVG 元素必须用 document.createElementNS('http://www.w3.org/2000/svg', tagName)，而非 createElement。这是因为 SVG 和 HTML 是不同的 XML 命名空间，浏览器需要知道元素属于哪个规范来正确解析。",whyItMatters:"知道 createElementNS 后，你就不会在动态创建 SVG 元素时踩坑。对 AI 说「用 createElementNS 在 SVG mask 中动态添加 circle」——避免常见的命名空间错误。"},{name:"GSAP attr 插件",nameEN:"GSAP attr:{} Tween",analogy:"GSAP 不仅能动画 CSS 属性，还能直接动画 HTML/SVG 属性——比如圆的半径 r、矩形的宽度 width",explanation:"gsap.to(el, { attr: { r: 200 } }) 直接 tween SVG 属性值。这比操作 CSS 的 transform: scale 更直观——直接改变形状的几何参数。GSAP 自动处理类型转换和单位。",whyItMatters:"知道 GSAP 的 attr 动画后，你就能对 AI 说「用 gsap.to 动画 SVG circle 的 r 属性从 0 到 maxRadius」——直接描述动画目标。"}],applications:[{field:"页面过渡",examples:"圆形扩张的页面切换（Material Design）、墨水扩散转场、揭幕式内容加载"},{field:"互动叙事",examples:"擦雾效果的悬疑游戏、刮刮卡/抽奖互动、探索式地图揭示"},{field:"视觉设计",examples:"文字海报的创意排版、品牌 Logo 揭示动画、视差遮罩分层效果"},{field:"教学演示",examples:"逐步揭示的教程步骤、答案遮罩（点击揭示）、解剖图的分层展示"}],keyInsight:"**遮罩是最优雅的「显示/隐藏」工具**。相比 opacity（全局透明度）和 clip-path（硬边缘裁切），mask 提供了像素级的精细控制——每个像素可以有不同的可见度。更重要的是，mask 是「声明式」的：你描述「什么区域可见」，浏览器负责渲染。这意味着你可以用任意形状（圆、路径、渐变、甚至图片）作为遮罩，创造无限的揭示效果。"},framers:{id:"framers",title:"Framers",subtitle:"逐字交错入场动画",oneLiner:"基于 Splitting.js 和 CSS @keyframes 的逐字符交错入场动画——用 CSS 变量驱动每个字母的独立时序",whatYouSee:"一个单词的首字母先从右侧滑入并旋转，然后其余字母依次从下方弹起、带有轻微回弹。每个字母的入场时间略有不同，形成瀑布般的 **Stagger Animation（交错动画）** 效果。整个动画纯 CSS 驱动，Splitting.js 只负责把文字拆成独立的 `<span>` 字符元素。这种效果叫 **Character Animation / Text Splitting Animation**。",pipeline:[{step:"01",title:"文字拆分 (Text Splitting)",description:'Splitting.js 将 `<div>framers</div>` 拆分为每个字符一个 `<span class="char">`，并自动注入 CSS 变量 --char-index（当前字符索引）和 --char-total（总字符数）。这些变量是后续逐字动画的关键。',glsl:`<!-- Splitting.js 输出结果 -->
<div data-splitting class="splitting">
  <span class="char" style="--char-index:0; --char-total:7">
    <span>::before → "f"</span>
  </span>
  <span class="char" style="--char-index:1; --char-total:7">
    ...
  </span>
</div>`},{step:"02",title:"首字母特殊动画 (First Char)",description:"首字母用独立的 @keyframes：先从右侧偏移 `.75ch × 字符总数` 的距离、从底部 200% 处滑入，经过两次回弹（-10%、7%）后落到原位。同时有独立的旋转动画——从半圈开始，经过反向摆动后归零。",glsl:`@keyframes first-char-transform {
  0%   { transform: translateX(calc(.75ch * var(--char-total)))
                    translateY(200%); }
  40%  { transform: translateX(...) translateY(-10%); }
  60%  { transform: translateX(...) translateY(7%); }
  100% { transform: none; }
}`},{step:"03",title:"逐字交错延迟 (Stagger Delay)",description:"核心技巧：animation-delay 用 CSS calc() 根据 --char-index 计算。delay = duration + 0.05s × (total - index)——index 越大（越靠后的字母），延迟越短。效果是最后一个字母先动，倒序入场，和首字母的特殊动画形成呼应。",glsl:`.char {
  animation-delay: calc(
    var(--duration) +
    .05s * (var(--char-total) - var(--char-index))
  );
  /* 例：7个字符，index=1 → delay = 0.5s + 0.05s × 6 = 0.8s */
  /* index=6 → delay = 0.5s + 0.05s × 1 = 0.55s */
}`},{step:"04",title:"嵌套变换分离 (Nested Transforms)",description:"关键技巧：位移（translateY）和旋转（rotate）分别在不同层级执行。.char 本身做 translateY 弹跳，.char::before 做 rotate 旋转。这样两个变换互不干扰，可以各自有不同的时序和缓动——这就是 **Nested Transforms（嵌套变换）**。",glsl:`.splitting .char {
  visibility: hidden; /* 隐藏原始字符 */
}
.splitting .char::before {
  visibility: visible; /* 只显示伪元素 */
  animation: inherit;  /* 继承父级动画 */
  animation-name: char-rotate; /* 覆盖为旋转动画 */
}`},{step:"05",title:"弹性缓动 (Bounce Easing)",description:"cubic-bezier(.5, 0, .5, 1) 提供对称的缓入缓出。@keyframes 中通过多个关键帧手动构造回弹效果：translateY 从 50%→-6%→1%→0%，超过目标值再回来，模拟弹性碰撞。这比 CSS 内置的 ease 更有「物理感」。",glsl:`@keyframes char-transform {
  0%  { opacity: 0; transform: translateY(50%); }
  70% { transform: translateY(-6%); } /* 冲过目标 */
  90% { transform: translateY(1%);  } /* 微回弹 */
  to  { transform: translateY(0%);  } /* 落定 */
}`}],concepts:[{name:"文字拆分",nameEN:"Text Splitting (Splitting.js)",analogy:"把一个单词拆成一盒散装字母积木——每个字母都能独立移动、旋转、变色",explanation:"Splitting.js 是一个零依赖的 DOM 拆分库。它将文本节点拆分为字符（char）、单词（word）或行（line），每个片段包裹在带有 CSS 变量的 <span> 中。--char-index 和 --char-total 是实现逐字动画的关键——纯 CSS 就能完成交错时序。",whyItMatters:"知道 Splitting.js / Text Splitting 后，你就能对 AI 说「用 Splitting.js 拆分文字，每个字符用 --char-index 做 stagger delay」——精确描述文字动画的技术方案。"},{name:"CSS 变量驱动动画",nameEN:"CSS Custom Properties in Animation",analogy:"CSS 变量就像每个字母身上的编号牌——动画公式根据编号计算每个字母的专属时序",explanation:"通过 calc(var(--duration) + .05s * var(--char-index)) 这样的表达式，一条 CSS 规则就能为所有字符生成不同的 animation-delay。这是声明式动画的精髓：不需要 JS 循环，CSS 自己根据变量值计算。",whyItMatters:"知道这个模式后，你就能对 AI 说「用 CSS 变量 --index 和 calc() 做声明式的 stagger delay」——比手动在 JS 中设置每个元素的 delay 更优雅。"},{name:"嵌套变换",nameEN:"Nested Transforms",analogy:"一个人站在旋转木马上跳舞——旋转木马的运动和人的舞蹈互不干扰、各自独立",explanation:"CSS transform 是不可加的：一个元素只能有一个 transform 属性，多个变换会互相覆盖。Nested Transforms 的解决方案是：外层元素做 translate，内层元素（或 ::before 伪元素）做 rotate，两者在各自的层级独立动画。",whyItMatters:"知道 Nested Transforms 后，你就能对 AI 说「用嵌套元素分离 translate 和 rotate 动画，各自独立时序」——解决 CSS 单一 transform 属性的限制。"},{name:"交错动画",nameEN:"Stagger Animation",analogy:"多米诺骨牌——不是所有字母同时出现，而是依次延迟，形成波浪般的入场节奏",explanation:"Stagger 是指一组元素以固定间隔依次启动同一动画。间隔时间（如 50ms）× 元素数量 = 总展开时长。可以正序、倒序、从中间向两边展开。CSS 中用 --index × delay 实现，JS 动画库中通常有专门的 stagger 参数。",whyItMatters:"知道 stagger 后，你就能对 AI 说「字符入场用 50ms 的 stagger delay，倒序排列」——比说「一个个出来，最后一个先」精确得多。"}],applications:[{field:"品牌动画",examples:"Logo 入场动画、品牌名称逐字展开、Slogan 打字机效果"},{field:"页面过渡",examples:"英雄区标题入场、页面切换时标题逐字淡入、导航项交错出现"},{field:"交互反馈",examples:"按钮点击后文字重组动画、表单验证消息逐字出现、Toast 通知入场"},{field:"创意排版",examples:"诗歌/歌词逐词展示、互动故事的渐进叙事、数据数字滚动计数器"}],keyInsight:"**逐字动画的核心是「拆分 + 索引 + 公式」**。Splitting.js 负责拆分并注入索引变量，CSS calc() 负责根据索引计算时序，@keyframes 负责定义运动曲线。三者配合，一条 CSS 规则就能驱动任意数量的字符动画。核心术语链：**Text Splitting**（文字拆分）→ **--char-index**（CSS 变量索引）→ **Stagger Delay**（交错延迟）→ **Nested Transforms**（嵌套变换分离）。记住：**变量是声明式动画的引擎——有了索引，一切皆可计算**。"},squares:{id:"squares",title:"Squares",subtitle:"正态分布生成艺术",oneLiner:"基于正态分布和多段渐变色映射的 Canvas 2D 生成艺术——用统计学分布创造有机的视觉密度",whatYouSee:"画布上散布着数千个半透明的彩色方块，中心区域密集、边缘稀疏，形成自然的密度渐变。颜色从顶部的深蓝逐渐过渡到中部的天蓝、金黄，再到底部的橙红和暗红——像一幅抽象的日落风景。每个方块的颜色都有微妙的随机偏移，让画面充满有机的质感。这种效果叫 **Generative Art（生成艺术）**，核心是 **Normal Distribution（正态分布）** 控制空间密度。",pipeline:[{step:"01",title:"正态分布采样 (Box-Muller Transform)",description:"用 Box-Muller 变换将均匀分布的 Math.random() 转换为正态分布（高斯分布）。mean 设为画布中心，stddev 控制扩散程度。结果：中心区域采样密度高、边缘稀疏，形成自然的「聚集效应」。",glsl:`// Box-Muller 变换：均匀分布 → 正态分布
function normalRandom(mean, stddev) {
  const u1 = Math.random();
  const u2 = Math.random();
  const z = Math.sqrt(-2 * Math.log(u1))
          * Math.cos(2 * Math.PI * u2);
  return mean + z * stddev;
}`},{step:"02",title:"多段渐变色映射 (Gradient Color Mapping)",description:"定义 7 个色标（color stops），将 y 坐标 [0,1] 映射到深蓝→靛蓝→天蓝→金黄→橙色→红色→暗红的渐变。通过 gamma 幂函数偏移 p = pow(y/h, 1.6)，让暖色调（底部）占据更大的色域范围。",glsl:`const stops = [
  { p: 0.0,  color: { r:15,  g:25,  b:60  } },  // 深蓝
  { p: 0.25, color: { r:40,  g:70,  b:140 } },  // 靛蓝
  { p: 0.45, color: { r:90,  g:160, b:200 } },  // 天蓝
  { p: 0.6,  color: { r:255, g:220, b:150 } },  // 金黄
  { p: 0.75, color: { r:255, g:140, b:60  } },  // 橙色
  { p: 0.9,  color: { r:220, g:70,  b:40  } },  // 红色
  { p: 1.0,  color: { r:120, g:30,  b:60  } },  // 暗红
];`},{step:"03",title:"颜色扰动 (Color Perturbation)",description:"对每个方块的颜色做 ±30 的随机偏移。同一位置的方块颜色不完全相同，产生「油画笔触」般的有机质感。扰动量太小则画面呆板，太大则色彩混乱——30 是让结构可辨又不失细节的平衡点。",glsl:`function perturbColor(color, amount) {
  return {
    r: clamp(color.r + random(-amount, amount), 0, 255),
    g: clamp(color.g + random(-amount, amount), 0, 255),
    b: clamp(color.b + random(-amount, amount), 0, 255),
  };
}`},{step:"04",title:"半透明叠加 (Alpha Compositing)",description:"每个方块的 opacity 设为 0.3。7500 个半透明方块叠加后，中心区域（密度高）颜色更饱和、更不透明，边缘（密度低）颜色更淡——这种「密度→饱和度」的自然映射是正态分布的视觉魅力所在。",glsl:"ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.3)`;\nctx.fillRect(x, y, w, h);\n// 7500 次叠加后：\n// 中心区域 ≈ 密集叠加 → 颜色饱满\n// 边缘区域 ≈ 稀疏叠加 → 颜色淡薄"},{step:"05",title:"尺寸随机化 (Size Distribution)",description:"方块的宽高也用正态分布采样：均值 50px、标准差 20px。大多数方块大小相近（聚集在 30-70px），偶尔出现特别大或特别小的方块，打破均匀感。位置 + 颜色 + 尺寸三个维度的随机性叠加，创造出丰富而非混乱的视觉层次。",glsl:`const w = normalRandom(50, 20);  // 均值50, 标准差20
const h = normalRandom(50, 20);
// 68% 的方块在 30-70px
// 95% 的方块在 10-90px
// 极少数超大/超小 → 视觉"惊喜"`}],concepts:[{name:"正态分布",nameEN:"Normal / Gaussian Distribution",analogy:"人群自然聚集的规律——大多数人站在中心附近，越往边缘人越少，形成钟形曲线",explanation:"正态分布（高斯分布）是自然界最常见的概率分布，用均值 μ 和标准差 σ 描述。68% 的值落在 μ±σ 内，95% 落在 μ±2σ 内。在 Canvas 中通过 Box-Muller 变换从 Math.random() 生成。它是生成艺术中创造「自然聚集感」的核心工具。",whyItMatters:"知道正态分布后，你就能对 AI 说「用正态分布采样位置，mean 在画布中心，stddev 为宽度的 1/4」——精确控制粒子的聚散效果。"},{name:"Box-Muller 变换",nameEN:"Box-Muller Transform",analogy:"把「掷骰子」（均匀分布）变成「扔飞镖」（中心密、边缘疏）的数学魔法",explanation:"Box-Muller 变换将两个独立的 [0,1] 均匀分布随机数转换为标准正态分布。公式：z = √(-2·ln(u₁)) · cos(2π·u₂)。这是在浏览器中生成正态分布随机数的最简单方法，因为 JavaScript 只提供均匀分布的 Math.random()。",whyItMatters:"知道 Box-Muller 后，你就能对 AI 说「用 Box-Muller 变换生成正态分布随机数」——而不是用一堆 Math.random() 相加来近似。"},{name:"多段颜色渐变",nameEN:"Multi-Stop Color Gradient",analogy:"调色板上的多个颜色锚点——在锚点之间做线性插值，就能生成任意位置的颜色",explanation:"定义若干 { position, color } 色标，对任意 t∈[0,1] 找到左右两个最近的色标并做 RGB 线性插值。这和 CSS linear-gradient 的原理一致。通过 pow(t, gamma) 做非线性映射可以偏移色域分布。",whyItMatters:"知道 multi-stop gradient 后，你就能对 AI 说「做一个 7 段色标的渐变映射，gamma 1.6 偏移向暖色调」——精确控制生成艺术的色彩空间。"},{name:"生成艺术",nameEN:"Generative Art",analogy:"艺术家不画每一笔，而是设计「规则」——让算法在规则内自由创作，每次运行结果不同",explanation:"Generative Art 是指由算法或规则系统生成的艺术作品。核心思想是：艺术家定义参数空间（分布、颜色、形状规则），程序在空间中采样生成作品。每次运行的随机种子不同，作品就不同——但风格一致。",whyItMatters:"知道 Generative Art 这个术语后，你就能搜索 Processing、p5.js、Canvas generative art 等资源，进入一个完整的创意编程社区。"}],applications:[{field:"数据艺术",examples:"将真实数据（气温、股价、人口）映射为颜色和密度，让数据变成可感知的视觉作品"},{field:"动态壁纸",examples:"每次加载生成不同的抽象画面，作为网站背景或桌面壁纸"},{field:"NFT / 数字收藏",examples:"链上存储生成参数，每个 token 对应唯一的视觉输出（Art Blocks 模式）"},{field:"品牌视觉系统",examples:"用品牌色生成渐变色标，为每张名片/海报生成独一无二的抽象背景"}],keyInsight:"**生成艺术的本质是「约束下的自由」**。正态分布提供了结构（中心聚集），随机扰动提供了变化（每次不同），多段渐变提供了氛围（色彩情绪）。三者叠加：有序 + 无序 = 有机。核心术语链：**Normal Distribution**（控制空间密度）→ **Box-Muller Transform**（生成正态随机数）→ **Multi-Stop Gradient**（颜色映射）→ **Alpha Compositing**（密度→饱和度的自然转化）。记住：**最好的生成艺术来自简单规则的叠加，而非复杂规则的堆砌**。"}},gb={fission:{id:"fission",title:"Fission",subtitle:"粒子分裂聚合系统",oneLiner:"基于 Canvas 2D + requestAnimationFrame 的粒子动画系统——用 lerp 插值驱动粒子的放大、分裂、散开、聚合、缩小全生命周期",whatYouSee:"一个发光圆点在屏幕中央出现并缓慢放大，然后突然「分裂」成多个小圆点，沿圆形均匀散开。散开后，所有粒子又被「吸引」回中心聚合为一个，缩小消失后重新开始。整个过程流畅自然，带有惯性缓动。这种效果叫 **Particle System（粒子系统）**，核心是每帧用 **Lerp（线性插值）** 让当前值趋近目标值，天然产生缓动效果。",pipeline:[{step:"01",title:"粒子数据模型 (Particle Data Model)",description:"每个粒子是一个对象，包含当前状态（x, y, radius）和目标状态（targetX, targetY, targetRadius）。动画不直接设置位置，而是设置「目标」——粒子自己会慢慢靠过去。这种「目标驱动」的模型让所有动画效果都归结为修改 target 值。",glsl:`interface Particle {
  x: number;  y: number;  radius: number;
  targetX: number;  targetY: number;  targetRadius: number;
}
// 动画 = 修改 target → lerp 自动补间`},{step:"02",title:"帧循环 + Lerp 缓动 (Animation Loop)",description:"每帧用 lerp 让当前值趋近目标值。lerp(a, b, t) = a + (b-a) * t，t 值越大越快。用 1 - pow(0.001, dt) 作为 t，让缓动与帧率无关——无论 60fps 还是 144fps，视觉速度一致。",glsl:`function update(dt) {
  const t = 1 - Math.pow(0.001, dt * speed);
  for (const p of particles) {
    p.x = lerp(p.x, p.targetX, t);
    p.y = lerp(p.y, p.targetY, t);
    p.radius = lerp(p.radius, p.targetRadius, t);
  }
}`},{step:"03",title:"分裂逻辑 (Split)",description:"分裂 = 一个粒子变多个。在原位置生成 N 个新粒子，每个粒子的 targetX/Y 设为圆形均匀分布的点。角度 = i × 2π/N，距离 = scatterRadius。粒子自动从中心 lerp 到目标位置，视觉上就是「爆开」。",glsl:`for (let i = 0; i < count; i++) {
  const angle = (i * 2 * Math.PI) / count;
  newParticles.push({
    x: center.x, y: center.y,  // 从中心出发
    targetX: center.x + Math.cos(angle) * radius,
    targetY: center.y + Math.sin(angle) * radius,
    targetRadius: parentSize * 0.45,
  });
}`},{step:"04",title:"聚合逻辑 (Gather)",description:"聚合 = 多个粒子归一。把所有粒子的 targetX/Y 都设为中心点，lerp 自动让它们汇聚。当所有粒子距中心小于阈值时，替换为一个大粒子。",glsl:`// 聚合：所有粒子目标 → 中心
for (const p of particles) {
  p.targetX = centerX;
  p.targetY = centerY;
}
// 到达后合并为一个
if (allNearCenter) {
  particles = [{ x: centerX, y: centerY,
    targetRadius: fullSize }];
}`},{step:"05",title:"发光渲染 (Glow Rendering)",description:"每个粒子用两层径向渐变绘制：外层大半径 + 低透明度 = 光晕，内层小半径 + 高透明度 = 核心。配合 globalCompositeOperation: 'lighter' 实现叠加发光——粒子重叠处更亮。半透明覆盖（trail alpha）制造运动残影。",glsl:`ctx.globalCompositeOperation = "lighter";
// 外层光晕
const outerGrad = ctx.createRadialGradient(...);
outerGrad.addColorStop(0, "rgba(r,g,b, 0.35)");
outerGrad.addColorStop(1, "rgba(r,g,b, 0)");
// 内层核心
const coreGrad = ctx.createRadialGradient(...);
coreGrad.addColorStop(0, "rgba(255,255,255, 0.95)");
coreGrad.addColorStop(1, "rgba(r,g,b, 0)");`}],concepts:[{name:"粒子系统",nameEN:"Particle System",analogy:"一群听指挥的萤火虫——每只萤火虫有自己的位置和大小，但统一响应「散开」「集合」的命令",explanation:"Particle System 是计算机图形学中的经典模式：维护一个粒子数组，每个粒子有独立的状态（位置、大小、速度、生命周期等）。每帧更新所有粒子的状态并渲染。粒子系统可以模拟火焰、烟雾、爆炸、雨雪等自然现象。",whyItMatters:"知道 Particle System 后，你就能对 AI 说「做一个粒子系统，支持 spawn、split、merge 三种行为」——而不是说「那种圆点分开又合起来的效果」。"},{name:"线性插值",nameEN:"Lerp (Linear Interpolation)",analogy:"橡皮筋效应——离目标越远拉力越大、移动越快，越接近目标速度越慢，天然产生缓动",explanation:"lerp(a, b, t) = a + (b-a) × t。每帧对粒子位置做 lerp，t 值决定「靠近速度」。这比手动设计缓动曲线简单得多，且效果自然。t 值用 1-pow(0.001, dt) 计算可保证帧率无关性。lerp 是游戏开发和动效中最常用的基础函数。",whyItMatters:"知道 lerp 后，你就能对 AI 说「用 lerp 做帧率无关的指数衰减缓动，每帧 t = 1-pow(0.001, dt)」——这是实现流畅跟随动画的标准方法。"},{name:"圆形均匀分布",nameEN:"Circular Uniform Distribution",analogy:"圆桌上等距摆放的餐具——N 个物品围成一圈，每个之间的角度间隔恰好是 360°/N",explanation:"将 N 个粒子均匀分布在圆周上：第 i 个粒子的角度 = i × 2π/N，坐标 = (center + cos(θ)×r, center + sin(θ)×r)。这是分裂动画中计算目标位置的标准方法，确保视觉上的对称美感。",whyItMatters:"知道圆形均匀分布后，你就能对 AI 说「分裂时用 circular distribution 计算 N 个目标位置」——精确描述粒子散开的几何布局。"},{name:"叠加发光",nameEN:"Additive Blending (Lighter)",analogy:"两束手电筒光照在同一点——光只会叠加变亮，不会变暗，重叠处最亮",explanation:"Canvas 的 globalCompositeOperation: 'lighter' 启用加法混合模式。新绘制的像素颜色与已有颜色直接相加（而非替换）。配合径向渐变的发光粒子，重叠区域自然变亮，产生真实的光照叠加效果。",whyItMatters:"知道 additive blending 后，你就能对 AI 说「用 lighter composite operation 做粒子的 additive glow 效果」——这是实现发光粒子的标准技术。"}],applications:[{field:"加载动画",examples:"应用启动时的 Logo 粒子汇聚、数据加载中的呼吸光点、页面过渡的粒子爆散"},{field:"数据可视化",examples:"节点合并/拆分的力导向图动画、集群分析的视觉反馈、层级结构的展开/折叠"},{field:"游戏特效",examples:"技能释放的能量球分裂、道具收集的粒子汇聚、爆炸碎片的扩散与消散"},{field:"交互反馈",examples:"按钮点击的粒子爆发、拖拽节点的粒子跟随、状态切换时的元素拆合动画"}],keyInsight:"**粒子分裂/聚合的本质是「目标驱动 + 插值补间」**。不需要复杂的物理模拟或缓动函数——只需为每个粒子设定 target 值，然后每帧做 lerp。分裂 = 生成多个粒子 + 设置不同 target；聚合 = 所有粒子 target 设为同一点。核心术语链：**Particle System**（数据结构）→ **Lerp**（补间引擎）→ **Circular Distribution**（分裂几何）→ **Additive Blending**（发光渲染）。记住：**最优雅的动画系统是声明式的——你描述「去哪里」，系统自动决定「怎么去」**。"},metaball:{id:"metaball",title:"Metaball",subtitle:"CSS Gooey 液态粒子融合",oneLiner:"基于 CSS Gooey Filter（blur + contrast）+ DOM 渲染的粒子动画系统——用 lerp 插值驱动粒子分裂聚合，blur 模糊叠加 + contrast 裁切实现液态融合效果",whatYouSee:"一个白色圆点在黑色背景中央出现并缓慢放大，然后「分裂」成多个小圆点，沿圆形均匀散开。关键视觉：粒子靠近时会像液滴一样**黏连融合**，拉远后又自然分离——这就是 **Gooey Effect / Metaball Effect（粘稠效果）**。聚合时所有粒子汇聚回中心融为一体，缩小消失后重新开始。融合效果的核心是 CSS `filter: blur() contrast()`——blur 让边缘扩散重叠，contrast 把灰色区域裁切回纯色，重叠区域恰好存活形成平滑连接。",pipeline:[{step:"01",title:"粒子数据模型 (Particle Data Model)",description:"与 Fission 共享相同的粒子数据模型：每个粒子包含当前状态和目标状态。区别在于渲染方式——这里用 DOM 元素而非 Canvas。",glsl:`interface Particle {
  id: number;
  x: number;  y: number;  radius: number;
  targetX: number;  targetY: number;  targetRadius: number;
}
// React state 驱动渲染：setRenderParticles([...particles])`},{step:"02",title:"帧循环 + Lerp 缓动 (Animation Loop)",description:"同样使用 requestAnimationFrame + lerp 缓动。每帧更新粒子位置后，通过 React setState 触发 DOM 重渲染。相比 Canvas 方案，DOM 方案更简单但粒子数量受限。",glsl:`function update(dt) {
  const t = 1 - Math.pow(0.001, dt * speed);
  for (const p of particles) {
    p.x = lerp(p.x, p.targetX, t);
    p.y = lerp(p.y, p.targetY, t);
    p.radius = lerp(p.radius, p.targetRadius, t);
  }
  setRenderParticles([...particles]); // 触发 DOM 更新
}`},{step:"03",title:"相态机 (Phase State Machine)",description:"动画循环通过状态机管理：idle → grow → split → scatter → gather → shrink → idle。每个相态有独立的持续时间和初始化逻辑。split 时生成多个粒子设置圆形分布目标，gather 时所有目标回归中心。",glsl:`const PHASE_ORDER = ["idle","grow","split","scatter","gather","shrink"];
function nextPhase() {
  const idx = PHASE_ORDER.indexOf(phase);
  startPhase(PHASE_ORDER[(idx + 1) % PHASE_ORDER.length]);
}`},{step:"04",title:"DOM 粒子渲染 (DOM Particle Rendering)",description:"每个粒子渲染为一个绝对定位的圆形 div（border-radius: 50%）。位置通过 left/top 控制，大小通过 width/height 控制。React 通过 key={id} 追踪每个粒子 DOM 节点。",glsl:`{renderParticles.map((p) => (
  <div key={p.id} style={{
    position: "absolute",
    left: p.x, top: p.y,
    width: p.radius * 2, height: p.radius * 2,
    borderRadius: "50%",
    background: color,
    transform: "translate(-50%, -50%)",
  }} />
))}`},{step:"05",title:"Gooey 融合渲染 (CSS Gooey Filter)",description:"核心技巧：容器设置黑色背景 + `filter: blur(Npx) contrast(M)`。blur 让白色圆形的边缘向外扩散为灰色渐变；contrast 把灰色裁切回黑/白——只有两个粒子重叠处的灰度足够高，能在 contrast 裁切中存活，形成平滑的液态连接桥。这就是 **CSS Metaball** 的原理。",glsl:`// 容器：黑底 + gooey 滤镜
<div style={{
  filter: \`blur(\${blur}px) contrast(\${contrast})\`,
  background: "#000",
}}>
  {/* 每个粒子：白色圆形 div */}
  <div style={{
    width: d, height: d,
    borderRadius: "50%",
    background: color,  // 默认 #fff
    transform: "translate(-50%, -50%)",
  }} />
</div>`}],concepts:[{name:"粘稠效果",nameEN:"Gooey / Metaball Effect",analogy:"两滴水银靠近时会自动融合成一滴——不需要额外代码，CSS 滤镜组合自然产生这种液态黏连",explanation:"Gooey Effect 的核心是 `filter: blur(N) contrast(M)` 的组合。blur 让每个元素边缘向外扩散为灰色渐变；contrast 将灰色区域二值化裁切回黑/白。当两个模糊圆重叠时，重叠区的灰度值足以在 contrast 中存活，形成平滑的连接桥。这个技巧也叫 CSS Metaball，因为效果与经典 Metaball 算法一致——用隐式场函数的等值面来融合几何体。",whyItMatters:"知道 Gooey / Metaball Effect 后，你就能对 AI 说「用 CSS blur + contrast 做 gooey metaball 融合效果」——这是纯 CSS 实现液态动画最优雅的方法。"},{name:"高斯模糊",nameEN:"Gaussian Blur (CSS filter: blur)",analogy:"透过毛玻璃看世界——每个像素向四周「扩散」，边界变得柔和模糊",explanation:"CSS `filter: blur(Npx)` 对元素应用高斯模糊。模糊半径 N 决定扩散范围。在 Gooey 效果中，blur 的作用是让纯色圆形的边缘产生灰色渐变区域——这是后续 contrast 裁切的前提。blur 值越大，粒子「融合距离」越远。",whyItMatters:"知道 blur 在 gooey 中的角色后，你就能精确调参：blur 控制「多远开始融合」，contrast 控制「融合边缘多锐利」。"},{name:"对比度裁切",nameEN:"Contrast Clipping",analogy:"把灰度照片的亮度拉到极端——灰色全变黑或全变白，只留下纯黑和纯白",explanation:"CSS `filter: contrast(M)` 增强对比度。当 M 值很大（如 20）时，接近中间值的灰色会被「裁切」为纯黑或纯白。在 Gooey 效果中，这把 blur 产生的灰色渐变裁切回硬边缘——但两个 blur 区域重叠处的灰度值更高，能在裁切中存活，形成融合桥。",whyItMatters:"知道 contrast clipping 后，你就能对 AI 说「用高 contrast 值做 threshold 二值化裁切」——这在很多 CSS 特效中都有应用。"},{name:"线性插值",nameEN:"Lerp (Linear Interpolation)",analogy:"橡皮筋效应——离目标越远拉力越大、移动越快，越接近目标速度越慢，天然产生缓动",explanation:"lerp(a, b, t) = a + (b-a) × t。每帧对粒子位置做 lerp，t 值决定「靠近速度」。与 Fission 相同的动画引擎，区别仅在渲染层。",whyItMatters:"lerp 是实现流畅跟随动画的标准方法，与渲染技术无关——Canvas、DOM、WebGL 都可以用同一套 lerp 动画系统。"}],applications:[{field:"液态 UI 动效",examples:"导航菜单的液态切换、按钮悬停的粘稠变形、下拉菜单的弹性展开"},{field:"加载动画",examples:"液态 Loading 指示器、数据同步的水滴脉冲、进度条的流体填充"},{field:"品牌动画",examples:"Logo 液态变形、启动屏的 Metaball 汇聚、品牌色的流体过渡"},{field:"交互反馈",examples:"拖拽时的液态连接线、多选时节点的粘连合并、状态切换的流体形变"}],keyInsight:"**CSS Gooey/Metaball 的本质是「模糊 + 裁切 = 隐式融合」**。blur 创建灰色渐变场，contrast 做阈值裁切——重叠区域的灰度值存活下来就形成融合。这与 3D 图形学中的 Metaball 算法原理相同（隐式场函数 + 等值面提取），但用纯 CSS 两行代码就实现了。核心术语链：**Gaussian Blur**（模糊扩散）→ **Contrast Clipping**（阈值裁切）→ **Metaball / Gooey**（液态融合）→ **Lerp**（补间驱动）。记住：**blur + contrast 是 CSS 中的「万能融合器」——任何靠近的元素都会自动产生液态连接**。"},sdfmorph:{id:"sdfmorph",title:"SDF Morph",subtitle:"SDF 形状变形与液态融合",oneLiner:"基于 WebGL Fragment Shader 的 SDF（Signed Distance Field）形状变形系统——6 种几何图元通过 smooth minimum 液态融合，配合 BPM 节拍驱动和多种缓动曲线实现电影级形态动画",whatYouSee:"一个发光的几何形状（圆形、方形、三角形、星形、六边形、环形）在深色背景上不断变换形态。变形过程不是简单的淡入淡出，而是像**液态金属**一样流动——形状边缘像水银般融合拉伸，中间过渡态呈现有机的 **Metaball 融合效果**。整个动画节奏跟随 BPM 节拍，配合旋转和呼吸缩放，加上描边发光和扫描线后处理，呈现出电影级的视觉质感。",pipeline:[{step:"01",title:"SDF 图元库 (Signed Distance Functions)",description:"每种形状用一个数学函数定义：输入一个 2D 点坐标，输出该点到形状边缘的**有符号距离**——负值在内部，正值在外部，零值在边缘上。SDF 的优势：可以精确计算边缘、做平滑混合、生成描边和发光。",glsl:`float sdCircle(vec2 p, float r) {
  return length(p) - r;  // 到圆心距离 - 半径
}
float sdBox(vec2 p, vec2 b) {
  vec2 d = abs(p) - b;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
// + Triangle, Star, Hexagon, Ring`},{step:"02",title:"液态变形 (Morph with Smooth Minimum)",description:"两个 SDF 之间的变形不是简单的 mix(d1, d2, t)。关键在于 **smin（smooth minimum）**——它让两个距离场在靠近时产生平滑融合，而非硬边界。再加上 morphBloat（膨胀）让变形中间态更饱满，liquidMidBoost 增强中间态的融合程度。",glsl:`float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);
  return mix(b, a, h) - k*h*(1.0-h);  // 平滑混合
}
float morphSDF(float d1, float d2, float t) {
  float e = applyEase(t);
  float m = mix(d1, d2, e);      // 基础线性混合
  m -= sin(e*PI) * morphBloat;   // 中间膨胀
  float liquid = smin(d1, d2, k); // 液态融合
  m = mix(m, liquid, liquidMix);  // 混入液态
}`},{step:"03",title:"BPM 节拍驱动 (Beat-Synced Timeline)",description:"动画时间线由 BPM（每分钟节拍数）驱动。每 2 拍完成一次形状变形。通过 floor(beats/2) 确定当前形状对和 fract(beats/2) 确定变形进度。形状序列可自定义（如 Circle→Box→Tri→Star→Circle），循环播放。",glsl:`float beats = time * (bpm / 60.0);
float segF = floor(beats / 2.0);  // 当前段索引
float t = fract(beats / 2.0);     // 段内进度 0→1
int sid0 = sequence[idx0];  // 源形状
int sid1 = sequence[idx1];  // 目标形状`},{step:"04",title:"缓动曲线 (Easing Functions)",description:"6 种缓动函数控制变形的「手感」：Linear（匀速）、Smooth（平滑启停）、Cubic InOut（立方缓入缓出）、Back Out（回弹）、Elastic Out（弹性）、Expo InOut（指数）。缓动函数将线性的 t 映射为非线性的 eased_t，让变形节奏更有表现力。",glsl:`float ease_cubicInOut(float t) {
  return t < 0.5
    ? 4.0*t*t*t
    : 1.0 - pow(-2.0*t+2.0, 3.0)*0.5;
}
float ease_elasticOut(float t) {
  return pow(2.0, -10.0*t)
    * sin((t*10.0 - 0.75) * (2.0*PI/3.0)) + 1.0;
}`},{step:"05",title:"渲染与后处理 (Shading & Post)",description:"SDF 值用于生成多层视觉效果：aaStep(d) 做抗锯齿填充、exp(-k*|d|) 做边缘高光和外发光、smoothstep 做描边。颜色在两个 ink color 之间随时间振荡。最后加 vignette 暗角、scanline 扫描线、film grain 胶片噪点做电影感后处理。",glsl:`float fill = aaStep(d);          // 抗锯齿填充
float stroke = smoothstep(w, 0.0, abs(d)); // 描边
float glow = exp(-9.0 * max(d, 0.0));      // 外发光
vec3 ink = mix(inkA, inkB, oscillation);
col += ink * fill * fillStrength;
col += ink * glow * glowStrength;
// + vignette + scanline + grain`}],concepts:[{name:"有符号距离场",nameEN:"SDF (Signed Distance Field)",analogy:"在地图上标注「距海岸线 X 公里」——每个点都知道自己离边界多远，负值表示在海里，正值表示在陆地上",explanation:"SDF 是一个函数 f(p)→float，对空间中任意一点返回到最近表面的有符号距离。负值在形状内部，正值在外部，零值恰好在边缘。SDF 的优势在于可以精确做布尔运算（union/intersection/subtraction）、平滑混合（smooth min）、生成描边（|d| < width）和发光（exp(-k*d)）。",whyItMatters:"知道 SDF 后，你就能对 AI 说「用 SDF 做形状渲染，支持 smooth union 和 edge glow」——这是 Shader 中表达几何形状最灵活的方式。"},{name:"平滑最小值",nameEN:"Smooth Minimum (smin)",analogy:"两团橡皮泥靠近时不是硬碰硬，而是柔软地融合在一起——smin 就是数学版的橡皮泥融合",explanation:"smin(a, b, k) 是 min(a, b) 的平滑版本。参数 k 控制融合半径：k=0 退化为硬 min，k 越大融合越圆润。在 SDF 变形中，smin 让两个形状的距离场在靠近时产生光滑的 Metaball 式连接，而非突兀的切换。这是 Inigo Quilez 提出的经典技巧。",whyItMatters:"知道 smooth minimum 后，你就能对 AI 说「用 smin 做两个 SDF 的液态融合，k 值控制融合柔软度」——这是实现有机形态动画的关键函数。"},{name:"缓动函数",nameEN:"Easing Functions",analogy:"开车时的加速减速——匀速开很无聊，先慢后快再慢下来才自然，弹性缓动就像弹簧一样过冲回弹",explanation:"Easing 将线性的 t∈[0,1] 映射为非线性曲线。常用类型：Smooth (Hermite)、Cubic (三次方)、Back (过冲)、Elastic (弹性)、Expo (指数)。每种给变形不同的「手感」。在动画系统中，easing 是时间轴和视觉效果之间的「翻译层」。",whyItMatters:"知道 easing 后，你就能对 AI 说「用 cubic-in-out 缓动做形状变形，或 elastic-out 做弹性回弹」——精确控制动画的节奏感。"},{name:"BPM 节拍同步",nameEN:"BPM-Synced Animation",analogy:"跟着音乐节拍跳舞——每 2 拍变一个动作，动作的快慢跟节拍同步",explanation:"用 BPM（Beats Per Minute）作为动画时钟：beats = time × (bpm/60)。每 N 拍完成一个动画单元（如形状变形）。通过 floor/fract 分解为「第几段」和「段内进度」。这让动画自动与音乐节奏同步，改变 BPM 即改变所有动画速度。",whyItMatters:"知道 BPM 同步后，你就能对 AI 说「做一个 BPM-driven 的动画系统，每 2 拍完成一次 morph transition」——这是音乐可视化和 MV 特效的基础。"}],applications:[{field:"音乐可视化",examples:"MV 特效中的形状变换、DJ 现场的实时视觉、音频频谱驱动的 SDF 变形"},{field:"品牌动画",examples:"Logo 形态变换（如 Google I/O、Apple 发布会）、品牌 Loading 动画、App 启动屏"},{field:"UI 微交互",examples:"图标状态切换的形态变形（播放↔暂停）、Tab 切换的液态过渡、按钮 hover 的有机形变"},{field:"生成艺术",examples:"参数化几何动画、NFT 生成艺术、互动装置中的实时形态演化"}],keyInsight:"**SDF 变形的本质是「距离场插值 + 隐式融合」**。SDF 把几何形状编码为连续的距离场函数，变形只需在两个距离场之间插值。smooth minimum 在插值中引入额外的融合项，让过渡态呈现液态的有机质感。核心术语链：**SDF**（几何编码）→ **Smooth Minimum**（液态融合）→ **Easing**（时间映射）→ **BPM Sync**（节拍驱动）→ **Post-Processing**（电影质感）。记住：**SDF 是 Shader 世界的「万能几何语言」——任何形状都是一个函数，任何变形都是函数之间的插值**。"},lettermorph:{id:"lettermorph",title:"Letter Morph",subtitle:"26 字母 SDF 液态变形",oneLiner:"基于 WebGL Fragment Shader 的 26 字母（A-Z）SDF 变形系统——每个字母用线段骨架 + 圆弧构建 SDF，通过 smooth minimum 液态融合实现字母间的有机形态过渡",whatYouSee:"深色背景上，一个发光的英文字母不断变换：A 液化流动变成 B，B 融化重塑为 C……26 个字母循环变形。变形过程不是简单的淡入淡出，而是笔画像**液态金属**一样拉伸、融合、重组——竖线弯曲成弧线，横线收缩后在新位置展开。这种效果的核心是 **Stroke SDF**（骨架距离场）+ **Smooth Minimum**（液态融合）。",pipeline:[{step:"01",title:"字母骨架 SDF (Glyph Skeleton SDF)",description:"每个字母用基础图元组合定义：直线段用 sdSegment（到线段的最近距离），弧线用 sdRingStroke（环形描边）+ 空间裁切。所有图元取 min 得到「骨架距离」，再减去 STROKE_W 得到描边 SDF。26 个字母 = 26 组图元组合，通过 if-else 分支选择。",glsl:`float sdSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p-a, ba = b-a;
  float h = clamp(dot(pa,ba)/dot(ba,ba), 0.0, 1.0);
  return length(pa - ba*h);
}
// 字母 A = 两条斜线 + 一条横线
d = min(d, sdSegment(p, vec2(L,B), vec2(0,T)));
d = min(d, sdSegment(p, vec2(R,B), vec2(0,T)));
d = min(d, sdSegment(p, vec2(-0.2,M), vec2(0.2,M)));
return d - STROKE_W;  // 骨架 → 描边`},{step:"02",title:"液态变形 (Smooth Min Morphing)",description:"两个字母 SDF 之间的变形使用与 SDF Morph 相同的技术：基础 mix 插值 + smooth minimum 液态融合 + mid-bloat 膨胀。easeInOutCubic 控制变形节奏。关键区别：字母的笔画结构比几何图元复杂，smin 让不同笔画在过渡时自然「黏连」而非突兀切换。",glsl:`float morphSDF(float d1, float d2, float t) {
  float e = easeInOutCubic(t);
  float m = mix(d1, d2, e);     // 基础插值
  m -= sin(e*PI) * BLOAT;       // 中间膨胀
  float liq = smin(d1, d2, k);  // 液态融合
  m = mix(m, liq, liquidMix*mid);
}`},{step:"03",title:"时间线驱动 (A→Z Timeline)",description:"时间除以 letterDuration 得到连续进度，floor 取整确定当前字母对（c0, c1），fract 取小数作为变形进度 t。mod(seg, 26) 让 A-Z 循环。呼吸缩放 + 缓动让动画节奏更自然。",glsl:`float tt = uTime / letterDuration;
float seg = floor(tt);
float t = fract(tt);
int c0 = int(mod(seg, 26.0));  // 源字母
int c1 = int(mod(seg+1.0, 26.0)); // 目标字母`},{step:"04",title:"渲染与后处理 (Shading & Post)",description:"SDF 值生成三层效果：aaFill（抗锯齿填充）、edge（边缘高光）、glow（外发光）。flow 函数让颜色随空间和时间流动。ink 颜色在两个色调之间振荡。最后加 scanline + grain 做复古质感。",glsl:`float fill = aaFill(d);            // 抗锯齿填充
float edge = exp(-edgeSharp*abs(d)); // 边缘高光
float glow = exp(-glowSharp*max(d,0.0)); // 外发光
vec3 ink = mix(inkA, inkB, oscillation);
// + scanline + film grain`}],concepts:[{name:"骨架距离场",nameEN:"Stroke SDF (Skeleton + Offset)",analogy:"用铅笔画一条线，然后用固定粗细的马克笔沿着铅笔线描一遍——铅笔线是骨架，马克笔的宽度就是 offset",explanation:"Stroke SDF 的构建方式：先计算到骨架（线段、弧线等）的最近距离 d，再做 d - width 得到有宽度的描边。这种方法比直接定义填充形状更灵活——改变 width 就改变笔画粗细，骨架结构不变。",whyItMatters:"知道 Stroke SDF 后，你就能对 AI 说「用 sdSegment 骨架 + offset 构建字母的 SDF 描边」——这是 GPU 上渲染矢量字体最高效的方式。"},{name:"线段距离函数",nameEN:"sdSegment (Point-to-Segment Distance)",analogy:"站在马路旁边，你到马路的最近距离——如果你在马路范围内就是垂直距离，超出端点就是到端点的距离",explanation:"sdSegment(p, a, b) 计算点 p 到线段 ab 的最近距离。核心是将 p 投影到 ab 方向上，clamp 到 [0,1] 范围内限制在线段上。这是构建字母骨架的基本单元——每个笔画就是一条线段。",whyItMatters:"sdSegment 是 SDF 字体渲染的「原子操作」——知道它后，你能用线段组合构建任何字母或图形的骨架。"},{name:"平滑最小值",nameEN:"Smooth Minimum (smin)",analogy:"两团橡皮泥靠近时柔软地融合在一起——smin 是数学版的橡皮泥融合",explanation:"smin(a, b, k) 是 min(a, b) 的平滑版本，k 控制融合半径。在字母变形中，不同笔画的 SDF 通过 smin 融合，让过渡态的笔画自然「黏连」——比如 A 的斜线变成 B 的竖线时，中间态会出现液态的连接桥。",whyItMatters:"知道 smin 后，你就能对 AI 说「用 smooth minimum 做字母 SDF 之间的液态 morph」——k 值控制融合的「粘稠度」。"},{name:"抗锯齿边缘",nameEN:"Analytical Anti-Aliasing (fwidth + smoothstep)",analogy:"照片放大后边缘有锯齿——fwidth 自动检测像素大小，用 smoothstep 做恰好一个像素宽的模糊，既不太锐也不太糊",explanation:"aaFill(d) = smoothstep(0, fwidth(d), -d)。fwidth(d) 返回 d 在屏幕空间的变化率（≈一个像素对应的 SDF 距离变化）。用它做 smoothstep 的过渡宽度，可以在任意缩放下保持恰好 1 像素的抗锯齿边缘。",whyItMatters:"知道 fwidth 抗锯齿后，你就能对 AI 说「用 fwidth + smoothstep 做 SDF 的屏幕空间抗锯齿」——这是 GPU SDF 渲染的标准技巧。"}],applications:[{field:"字体动画",examples:"品牌 Logo 的字母变形动画、MV 歌词的液态过渡、倒计时数字的有机变形"},{field:"创意编码",examples:"生成艺术中的字母演化、互动装置的文字变形、Shader 编程教学演示"},{field:"UI 微交互",examples:"搜索框的字母 morph 提示、状态码的数字液态切换、导航文字的过渡动画"},{field:"数据可视化",examples:"数值变化的数字 morph、分类标签的文字过渡、时间轴标记的动态变形"}],keyInsight:"**字母 SDF 变形的本质是「骨架编码 + 距离场插值 + 液态融合」**。每个字母被分解为线段和弧线的骨架，通过统一的 SDF 距离场表示。变形只需在两个距离场之间插值——smooth minimum 让不同笔画在过渡时自然黏连，产生液态的有机质感。核心术语链：**sdSegment**（线段距离）→ **Stroke SDF**（骨架描边）→ **Smooth Minimum**（液态融合）→ **fwidth AA**（抗锯齿渲染）。记住：**任何矢量图形都可以用 SDF 骨架编码，任何变形都是距离场之间的插值——字母只是最直观的应用场景**。"},liquidfill:{id:"liquidfill",title:"Liquid Fill",subtitle:"Gooey 液态填充动画",oneLiner:"基于 CSS Gooey Filter（blur + contrast）+ SVG Path 极坐标谐波变形的液态填充动画——用 Catmull-Rom 曲线生成有机 blob 轮廓，配合溅射粒子实现液态扩散与吸收效果",whatYouSee:"一个有机形态的白色 blob 在黑色背景中央出现，形状不断轻微蠕动。blob 迅速膨胀的同时，多个小圆点像**水花**一样从 blob 表面向外飞溅——在 CSS Gooey 滤镜的作用下，这些飞溅粒子看起来像从 blob 上甩出的水滴。随后粒子减速、被「吸」回 blob 体内（融合效果由 blur + contrast 自动产生），blob 继续膨胀直至充满整个画面，最后收缩回中心，循环往复。切换形状预设时，blob 轮廓在 blob/star/organic/flower 之间**平滑变形**——这是 **Harmonic Morphing（谐波变形）** 的效果。",pipeline:[{step:"01",title:"极坐标谐波轮廓 (Polar Harmonic Outline)",description:"blob 的轮廓由极坐标方程生成：r(θ) = baseRadius + Σ amplitude_i × sin(freq_i × θ + phase_i + time)。每组谐波参数（频率、振幅、相位）决定轮廓形态——低频大振幅产生 blob，高频大振幅产生 star，混合频率产生 organic。time 参数让形状自然蠕动。",glsl:`function generateBlobPath(cx, cy, radius, harmonics, time) {
  for (let i = 0; i < numPoints; i++) {
    const θ = (i / numPoints) * 2π;
    let r = radius;
    for (const h of harmonics) {
      r += radius * h.amp * sin(h.freq * θ + h.phase + time);
    }
    points.push([cx + r*cos(θ), cy + r*sin(θ)]);
  }
}`},{step:"02",title:"Catmull-Rom → SVG 贝塞尔路径 (Smooth Path)",description:"将 N 个极坐标采样点转换为平滑的 SVG 闭合曲线。使用 Catmull-Rom 插值算法：对每段 P0-P1-P2-P3，计算两个控制点 CP1 = P1 + (P2-P0)/6、CP2 = P2 - (P3-P1)/6，生成三阶贝塞尔曲线。闭合路径首尾相连，形成无缝的有机轮廓。",glsl:"// Catmull-Rom → Cubic Bézier 控制点\nconst cp1x = p1.x + (p2.x - p0.x) / 6;\nconst cp1y = p1.y + (p2.y - p0.y) / 6;\nconst cp2x = p2.x - (p3.x - p1.x) / 6;\nconst cp2y = p2.y - (p3.y - p1.y) / 6;\nd += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;"},{step:"03",title:"谐波变形 (Harmonic Morphing)",description:"切换形状预设时，对两组谐波参数做线性插值：每个谐波的 freq、amp、phase 从当前值平滑过渡到目标值。长度不同时，短的一方用零振幅补齐。这让轮廓在 blob↔star↔organic↔flower 之间自然变形，无需关键帧动画。",glsl:`function interpolateHarmonics(from, to, t) {
  return from.map((f, i) => ({
    freq: lerp(f.freq, to[i].freq, t),
    amp:  lerp(f.amp,  to[i].amp,  t),
    phase: lerp(f.phase, to[i].phase, t),
  }));
}`},{step:"04",title:"溅射粒子 + 吸收 (Splash & Absorb)",description:"膨胀阶段在 blob 边缘生成多个小圆点 div，初始位置在 blob 表面，target 位置在更远处——lerp 让它们「飞溅」出去。吸收阶段把所有粒子 target 设回中心——lerp 让它们减速回归。CSS Gooey 滤镜自动让粒子与 blob 产生液态融合效果。",glsl:`// splash: 粒子从 blob 边缘飞出
for (let i = 0; i < count; i++) {
  const angle = (i / count) * 2π;
  particles.push({
    x: cx + cos(angle) * edgeDist,
    targetX: cx + cos(angle) * edgeDist * (1 + force),
  });
}
// absorb: 所有 target → 中心
for (const p of particles) {
  p.targetX = centerX;
  p.targetY = centerY;
}`},{step:"05",title:"CSS Gooey 液态渲染 (Gooey Filter)",description:"容器设黑色背景 + filter: blur(N) contrast(M)。SVG blob 和 splash 粒子都是白色——blur 让它们的边缘产生灰色渐变，contrast 把灰色裁切回黑/白。当粒子靠近 blob 时，两者的灰色区域重叠，在 contrast 裁切中存活形成液态连接桥。这就是整个「液态」视觉的来源。",glsl:`<div style={{
  filter: \`blur(\${blur}px) contrast(\${contrast})\`,
  background: "#000",
}}>
  <svg><path d={blobPath} fill={color} /></svg>
  {splashParticles.map(p => (
    <div style={{
      borderRadius: "50%",
      background: color,
    }} />
  ))}
</div>`}],concepts:[{name:"极坐标谐波",nameEN:"Polar Harmonics",analogy:"在旋转的圆上叠加多个不同频率的波纹——低频波让圆变成 blob，高频波让圆长出尖角",explanation:"极坐标谐波用 r(θ) = R + Σ A_i × sin(f_i × θ + φ_i) 定义封闭曲线。每个谐波分量的频率 f 决定「波的个数」（f=5 → 5 个尖角），振幅 A 决定变形程度，相位 φ 控制旋转偏移。多个谐波叠加产生复杂的有机形态。这是 Procedural Shape Generation（程序化形状生成）的基础技术。",whyItMatters:"知道 Polar Harmonics 后，你就能对 AI 说「用极坐标谐波叠加生成有机 blob 轮廓，5 次谐波做星形，混合谐波做不规则形态」——精确描述任何有机形状。"},{name:"Catmull-Rom 样条",nameEN:"Catmull-Rom Spline",analogy:"穿过每个钉子的柔软铁丝——曲线经过所有控制点，且在每个点处平滑过渡",explanation:"Catmull-Rom 是一种插值样条：给定 N 个点，曲线精确经过每个点且保证 C1 连续（切线连续）。它可以无损转换为三阶贝塞尔曲线（SVG 的 C 命令），转换公式简单：CP1 = P1 + (P2-P0)/6, CP2 = P2 - (P3-P1)/6。这是将离散采样点转为平滑 SVG 路径的标准方法。",whyItMatters:"知道 Catmull-Rom 后，你就能对 AI 说「用 Catmull-Rom 插值把采样点转为平滑 SVG cubic Bézier 路径」——这比手动调控制点高效得多。"},{name:"粘稠效果",nameEN:"Gooey / Metaball Effect",analogy:"两滴水银靠近时自动融合成一滴——CSS blur + contrast 滤镜组合自然产生这种液态黏连",explanation:"Gooey Effect 的核心是 filter: blur(N) contrast(M)。blur 让元素边缘扩散为灰色渐变，contrast 将灰色二值化裁切回纯色/纯黑。当两个模糊元素重叠时，重叠区灰度值在 contrast 裁切中存活，形成平滑连接桥。在 Liquid Fill 中，SVG blob 和 splash 粒子共享同一个 Gooey 滤镜容器，自动产生液态融合。",whyItMatters:"知道 Gooey Effect 后，你就能对 AI 说「用 CSS blur + contrast 做 gooey metaball 融合，让 SVG 路径和 DOM 粒子自动液态连接」——这是纯 CSS 实现液态动画最优雅的方法。"},{name:"相态机动画",nameEN:"Phase State Machine Animation",analogy:"一段舞蹈编排——每个动作（idle→expand→splash→absorb→fill→shrink）有固定时长，按顺序循环执行",explanation:"将动画分解为有限个「相态」，每个相态有独立的初始化逻辑和持续时间。状态机按顺序推进，每次切换相态时重置目标值。这种模式让复杂的多阶段动画变得可维护——每个相态只需关心「设置正确的 target」，lerp 引擎自动完成过渡。",whyItMatters:"知道 Phase State Machine 后，你就能对 AI 说「用状态机管理动画阶段，每个 phase 设独立的 target 和 duration」——这是构建循环多阶段动画的标准模式。"}],applications:[{field:"页面过渡动画",examples:"全屏液态展开的路由切换、Landing Page 的 blob 背景填充、品牌色液态覆盖过渡"},{field:"加载与启动",examples:"App 启动时的液态 Logo 展开、数据加载的 blob 脉冲填充、骨架屏的液态揭示"},{field:"交互反馈",examples:"按钮点击的液态扩散、拖拽释放的水花溅射、状态切换的 blob 形变"},{field:"创意着陆页",examples:"产品展示的有机形态背景、艺术网站的 blob 遮罩动画、互动广告的液态填充效果"}],keyInsight:"**液态填充的本质是「极坐标谐波 + Catmull-Rom 平滑 + Gooey 融合 + 状态机驱动」**。用谐波叠加在极坐标系中生成有机轮廓，Catmull-Rom 将采样点转为平滑 SVG 路径，CSS blur + contrast 让 blob 与粒子自动产生液态融合。整个动画由状态机管理——每个相态只需设置目标值，lerp 引擎自动补间。核心术语链：**Polar Harmonics**（形状生成）→ **Catmull-Rom Spline**（路径平滑）→ **Gooey Filter**（液态融合）→ **Phase State Machine**（动画编排）。记住：**极坐标谐波是程序化形状的万能语言——改变频率和振幅就能从 blob 变成 star、flower、organic，谐波插值让任意形态之间的变形浑然天成**。"},gooeyfx:{id:"gooeyfx",title:"Gooey FX",subtitle:"SVG Gooey 音频频谱可视化",oneLiner:"基于 SVG Filter（feGaussianBlur + feColorMatrix）的粘稠频谱可视化——多个竖条通过 Gooey 滤镜融合为有机的液态脉冲体，灵感来自 Codrops Creative Gooey Effects 的 Music Visualizer",whatYouSee:"深色背景底部，一排竖条（模拟音频频谱）不断随机地上下脉动。关键视觉：相邻竖条高度接近时，它们会**自动融合成一个有机的液态 blob**——高的竖条像粘稠的岩浆一样向上涌起，回落时与相邻竖条粘连。底部有一条「地板」将所有竖条底部连成一体。这就是 **SVG Gooey Filter** 的效果——feGaussianBlur 模糊所有竖条的 alpha 通道，feColorMatrix 做阈值裁切把重叠区域保留为粘稠连接。Spectrum 模式模拟音频频谱，Wave 模式是正弦波流过竖条，Pulse 模式从中心向两侧脉冲。",pipeline:[{step:"01",title:"SVG Gooey 滤镜 (SVG Filter Pipeline)",description:"滤镜由两步（或三步）组成：feGaussianBlur 模糊所有元素的 alpha 通道，产生扩散的渐变区域；feColorMatrix 用 alpha 行 `0 0 0 {threshold} -{offset}` 做阈值裁切，把渐变二值化回硬边缘——只有相邻竖条重叠处的 alpha 存活，形成粘稠连接。可选第三步 feComposite atop 叠回原图保持清晰边缘（Crisp 模式）。默认不加 feComposite，让竖条完全融合成有机 blob（与原版 Music Visualizer 的 goo-no-comp 一致）。",glsl:`<!-- 默认：全融合（无 feComposite）-->
<filter id="goo-fx">
  <feGaussianBlur in="SourceGraphic"
    stdDeviation="10" result="blur" />
  <feColorMatrix in="blur" mode="matrix"
    values="1 0 0 0 0  0 1 0 0 0
            0 0 1 0 0  0 0 0 20 -9"
    result="goo" />
</filter>
<!-- Crisp 模式：加 feComposite atop 保持锐利边缘 -->`},{step:"02",title:"竖条数据模型 (Bar State Model)",description:"每个竖条维护 current（当前高度比例 0-1）和 target（目标高度比例）。Spectrum 模式中，每个竖条还有 rising（是否上升中）和 cooldown（下次变化前的等待时间）。动画引擎每帧用 lerp 让 current 趋近 target，上升和下落使用不同的 lerp 速度——上升快、下落慢，模拟重力感。",glsl:`interface BarState {
  current: number;  // 当前高度比例 0-1
  target: number;   // 目标高度比例
  rising: boolean;  // 是否在上升
  cooldown: number; // 下次随机变化的冷却
}
// 上升快 (lerp factor 大), 下落慢 (factor 小)
const f = rising ? riseLerp : fallLerp;
bar.current += (bar.target - bar.current) * f;`},{step:"03",title:"三种动画模式 (Animation Modes)",description:"Spectrum：每个竖条独立随机设定目标高度，到达后切换方向（高→低→高），随机冷却延迟制造错落感。Wave：竖条高度由两个正弦波叠加驱动（h = sin(i×2π/N + t×2) + sin(i×2π/N×1.6 + t×3.3)），形成流动的波浪。Pulse：高度由距中心的距离和时间决定（h = sin(t×3 - dist×4)），形成从中心向两侧传播的脉冲波。",glsl:`// Spectrum: 随机目标 + 涨落切换
if (near(current, target)) {
  target = rising ? randomLow : randomHigh;
  rising = !rising;
}

// Wave: 双频正弦叠加
target = 0.08 + sin(t*2 + phase)*0.45
             + sin(t*3.3 + phase*1.6)*0.35;

// Pulse: 中心外扩波
target = 0.08 + max(0, sin(t*3 - dist*4))*0.85;`},{step:"04",title:"Lerp 帧循环 (Animation Loop)",description:"requestAnimationFrame 驱动的帧循环。每帧计算 dt（帧间隔，clamp 到 0.05 防止跳帧），更新所有竖条的 current 值（lerp 趋近 target），然后将高度比例转换为像素值（ratio × containerHeight × 0.65）写入 React state 触发渲染。ensureBars() 在循环中动态响应 barCount 变化。",glsl:`function update(dt) {
  s.time += dt * speed;
  ensureBars();  // 动态调整竖条数量
  for (const bar of bars) {
    const f = 1 - Math.pow(0.01, dt * speed * k);
    bar.current += (bar.target - bar.current) * f;
  }
  const maxH = containerHeight * 0.65;
  setBarPixelHeights(bars.map(b => b.current * maxH));
}`},{step:"05",title:"DOM 渲染 + Floor 连接 (Render Structure)",description:"所有竖条渲染为 flex 容器中的 div（宽度固定，高度由动画驱动），底部对齐向上生长。一个同色「Floor」div 铺在最底部，与竖条底部重叠，通过 Gooey 滤镜将所有竖条底部融合为连续的粘稠基座。整个容器应用 filter: url(#goo-fx)。SVG filter 定义放在隐藏的 <svg> 中，useId() 生成唯一 ID。",glsl:`<div style={{ filter: \`url(#\${filterId})\` }}>
  {/* Floor: 底部同色条，连接所有竖条底部 */}
  <div style={{
    position: "absolute", bottom: 0,
    width: "100%", height: 25, background: color
  }} />
  {/* Bars: flex 底部对齐，向上生长 */}
  <div style={{ display: "flex", alignItems: "flex-end" }}>
    {barHeights.map((h, i) => (
      <div style={{ width: barWidth, height: h,
        background: color }} />
    ))}
  </div>
</div>`}],concepts:[{name:"SVG 粘稠滤镜",nameEN:"SVG Gooey Filter (feGaussianBlur + feColorMatrix)",analogy:"把所有竖条的影子模糊后用阈值裁切——重叠的影子形成粘稠连接，就像岩浆在相邻柱子之间拉丝",explanation:"SVG Gooey Filter 的核心是 feGaussianBlur + feColorMatrix。blur 对 alpha 通道做高斯模糊，让每个元素边缘产生渐变扩散。feColorMatrix 的 alpha 行 `0 0 0 M -N`（如 `0 0 0 20 -9`）做阈值裁切：alpha × 20 - 9，低 alpha 被裁为 0，高 alpha 保留。相邻竖条的模糊区域重叠时，alpha 值叠加超过阈值，形成粘稠连接桥。与 CSS blur+contrast 不同，SVG 方案可选加 feComposite atop 保持元素清晰边缘。",whyItMatters:"知道 SVG Gooey Filter 后，你就能对 AI 说「用 feGaussianBlur + feColorMatrix 做 SVG gooey 滤镜，threshold 控制融合强度」——这是实现粘稠液态效果最灵活的方法，支持任意背景色。"},{name:"Alpha 通道裁切",nameEN:"Alpha Channel Thresholding (feColorMatrix)",analogy:"把一张模糊的灰度照片的亮度拉到极端——接近黑的全变纯黑，接近白的全变纯白，得到清晰的剪影",explanation:"feColorMatrix 的 alpha 行 `0 0 0 M -N` 对 alpha 通道做线性变换：newAlpha = oldAlpha × M - N。M 值越大裁切越锐利，N 控制偏移阈值。高 M（如 20）配合适中 N（如 9），将模糊产生的低 alpha 渐变裁切回硬边缘，同时保留相邻元素重叠区的高 alpha——这就是粘稠连接桥的来源。",whyItMatters:"知道 alpha thresholding 后，你就能精确调参：threshold 控制「连接桥的锐利度」，offset 控制「多近才开始融合」。对 AI 说「feColorMatrix alpha 行用 threshold 20 offset 9」即可精确描述效果。"},{name:"Floor 融合",nameEN:"Floor Element (Gooey Base Connection)",analogy:"所有柱子插在同一块黏土上——柱子底部天然通过黏土相连，看起来像从同一个有机体中长出来的",explanation:"在所有竖条底部放置一个同色的宽条（Floor），与竖条底部重叠。经过 Gooey 滤镜后，Floor 和所有竖条底部的 alpha 重叠区域自动融合，形成一个连续的有机基座。这个技巧让独立的竖条看起来像从同一个液态体中涌出的柱子。",whyItMatters:"知道 Floor 融合后，你就能对 AI 说「在元素底部加同色 floor div，通过 gooey 滤镜实现基座融合效果」——这是 Codrops Music Visualizer 的关键视觉技巧。"},{name:"目标驱动动画",nameEN:"Target-Driven Animation (Lerp)",analogy:"橡皮筋效应——设定目标位置后，当前值像被橡皮筋拉着一样自然趋近，离目标越远移动越快",explanation:"每个竖条维护 current 和 target 两个值。每帧用 lerp 让 current 趋近 target：current += (target - current) × factor。上升用较大 factor（快速响应），下落用较小 factor（慢速衰减），模拟重力感。到达目标后切换方向——这种「目标驱动 + 涨落切换」的模式让随机动画依然流畅自然。",whyItMatters:"知道目标驱动动画后，你就能对 AI 说「每个元素维护 current/target，用 lerp 补间，rising/falling 用不同 factor」——这是实现有机感随机动画的标准模式。"}],applications:[{field:"音频可视化",examples:"音乐播放器的频谱动画、DJ 软件的实时可视化、Podcast App 的声波展示"},{field:"数据可视化",examples:"实时数据柱状图的液态过渡、仪表盘指标的有机脉冲、股票行情的粘稠走势"},{field:"加载与反馈",examples:"语音识别中的粘稠波形指示器、文件上传的液态进度条、系统活动的有机脉搏"},{field:"创意着陆页",examples:"音乐网站的液态频谱背景、产品页的粘稠装饰动画、互动广告的有机 UI 元素"}],keyInsight:"**SVG Gooey 频谱的本质是「竖条 + 模糊 + 阈值裁切 = 有机液态体」**。独立的竖条经过 feGaussianBlur 模糊后，相邻竖条的 alpha 区域重叠；feColorMatrix 阈值裁切保留重叠区域，形成粘稠连接桥。底部 Floor 元素将所有竖条基座融合为一体。核心术语链：**feGaussianBlur**（alpha 扩散）→ **feColorMatrix**（alpha 阈值裁切）→ **Floor Element**（基座融合）→ **Target-Driven Lerp**（目标驱动动画）。记住：**Gooey 滤镜的魔力在于「相邻元素自动融合」——你只需让元素靠近，滤镜自动产生液态连接，这让任何排列的 DOM 元素都能变成有机的液态体**。"},eyetrack:{id:"eyetrack",title:"Eye Track",subtitle:"光标跟踪眼球动画",oneLiner:"基于 DOM + requestAnimationFrame 的光标跟踪眼球系统——用 Lerp 插值驱动瞳孔平滑跟随鼠标，配合 CSS scaleY 实现自然眨眼效果",whatYouSee:"一张彩色卡片上有两只白色椭圆形眼睛，每只眼睛中有一个黑色瞳孔。当你移动鼠标时，两个瞳孔会**平滑地跟随**光标方向转动——瞳孔的运动有轻微的惯性延迟，像真眼球一样自然。每隔几秒，眼睛会**自然眨一下**——一层与卡片同色的「眼皮」从上方快速闭合再张开。这种效果叫 **Cursor Tracking / Gaze Following**（光标跟踪/注视跟随），核心是 **getBoundingClientRect** 计算眼睛位置 + **Lerp** 平滑跟随。",pipeline:[{step:"01",title:"坐标系建立 (Coordinate System)",description:"每只眼睛通过 getBoundingClientRect() 获取屏幕坐标，计算眼睛中心点 (cx, cy)。鼠标位置 (clientX, clientY) 减去眼睛中心得到方向向量 (dx, dy)。两只眼睛各自独立计算——因此瞳孔会微微「对眼」看向同一个目标。",glsl:`const r = eye.getBoundingClientRect();
const cx = r.left + r.width / 2;
const cy = r.top + r.height / 2;
const dx = target.x - cx;  // 鼠标相对于眼睛中心的偏移
const dy = target.y - cy;`},{step:"02",title:"运动范围限制 (Clamped Movement)",description:"瞳孔不能超出眼白范围。用 clamp 函数将偏移量限制在 maxX = eyeWidth × 0.18、maxY = eyeHeight × 0.10 的椭圆范围内。sensitivity 系数控制鼠标距离到瞳孔偏移的映射比例——值越大瞳孔反应越灵敏。",glsl:`const maxX = r.width * 0.18;
const maxY = r.height * 0.10;
const tx = clamp(dx * sensitivity, -maxX, maxX);
const ty = clamp(dy * sensitivity, -maxY, maxY);`},{step:"03",title:"Lerp 平滑跟随 (Smooth Following)",description:"瞳孔不直接跳到目标位置，而是每帧用 lerp 逐渐靠近。smoothing 系数控制跟随速度：0.12 时有明显的惯性延迟（像真眼球），0.5 时几乎即时响应。每帧 current += (target - current) × smoothing，这是最简形式的指数衰减缓动。",glsl:`// 每帧：当前值向目标值靠近
state.currentX += (tx - state.currentX) * smoothing;
state.currentY += (ty - state.currentY) * smoothing;

pupil.style.transform =
  \`translate(calc(-50% + \${state.currentX}px),
             calc(-50% + \${state.currentY}px))\`;`},{step:"04",title:"眨眼动画 (Blink Animation)",description:"眨眼用一个与卡片同色的「眼皮」div 覆盖在眼睛上方。平时 scaleY(0) 完全隐藏，眨眼时 scaleY(1) 展开覆盖整个眼睛。transformOrigin 设为顶部（50% 0%），让眼皮从上往下「闭合」。setInterval 控制眨眼间隔，setTimeout 控制眨眼持续时间（约 200ms）。",glsl:`// 眼皮样式
{
  position: "absolute",
  inset: -2,
  background: cardColor,  // 与卡片同色 = 视觉上的眼皮
  transformOrigin: "50% 0%",
  transform: blinkPhase ? "scaleY(1)" : "scaleY(0)",
  transition: "transform 0.08s ease-in-out",
}
// 定时眨眼
setInterval(() => {
  setBlinkPhase(true);
  setTimeout(() => setBlinkPhase(false), 200);
}, blinkInterval * 1000);`},{step:"05",title:"DOM 渲染结构 (DOM Render Structure)",description:"整体结构：外层容器（深色背景）→ 卡片 div（圆角 + 彩色背景）→ 眼睛容器（flex 水平排列）→ 每只眼睛（白色椭圆 overflow:hidden）→ 瞳孔（黑色椭圆 absolute 定位）+ 眼皮（同色遮罩）。通过 useRef 直接操控瞳孔 DOM 的 transform，避免 React 重渲染开销。",glsl:`<div className="card" style={{ background: cardColor }}>
  <div className="eyes" style={{ gap: eyeGap }}>
    {[0, 1].map(i => (
      <div className="eye" ref={eyeRef}
        style={{ width: eyeWidth, height: eyeHeight }}>
        <div className="pupil" ref={pupilRef}
          style={{ width: pupilSize }} />
        <div className="eyelid"
          style={{ background: cardColor }} />
      </div>
    ))}
  </div>
</div>`}],concepts:[{name:"光标跟踪",nameEN:"Cursor Tracking / Gaze Following",analogy:"猫头鹰盯着猎物——不管猎物跑到哪里，头和眼睛总是朝向目标方向",explanation:"Cursor Tracking 是一种常见的交互模式：UI 元素（眼球、指针、光标）实时跟随鼠标位置。核心步骤：监听 mousemove 获取光标坐标 → 计算目标偏移 → 限制在合理范围内 → 平滑插值到目标位置。这种模式广泛用于交互式角色、视差效果、磁性按钮等。",whyItMatters:"知道 Cursor Tracking 后，你就能对 AI 说「做一个 gaze following 效果，用 getBoundingClientRect 计算元素中心，clamp 限制移动范围」——精确描述眼球跟随交互。"},{name:"线性插值",nameEN:"Lerp (Linear Interpolation)",analogy:"橡皮筋效应——离目标越远拉力越大、移动越快，越接近目标速度越慢，天然产生惯性延迟",explanation:"current += (target - current) × factor 是 lerp 的最简形式。factor 值越小惯性越大（0.05 = 很黏），越大响应越快（0.5 = 近乎即时）。这种每帧递进式的 lerp 本质是指数衰减——距离每帧缩减为 (1-factor) 倍，理论上永远不会精确到达目标但视觉上无限接近。",whyItMatters:"知道 lerp smoothing 后，你就能对 AI 说「用 lerp factor 0.12 做指数衰减的平滑跟随，factor 越小惯性越大」——这是实现「有质感的跟随动画」的标准方法。"},{name:"椭圆范围限制",nameEN:"Elliptical Clamping",analogy:"鱼缸里的鱼——可以自由游动但永远不会超出鱼缸边界",explanation:"瞳孔的运动范围是一个椭圆（水平方向可移动更多、垂直方向更少），通过分别 clamp X 和 Y 方向实现近似椭圆约束。maxX = eyeWidth × ratio 和 maxY = eyeHeight × ratio 的不同比例让瞳孔在水平方向有更大的活动空间——符合真实眼球的运动规律。",whyItMatters:"知道 elliptical clamping 后，你就能对 AI 说「用分轴 clamp 约束元素在椭圆范围内运动」——这比圆形约束更自然，常用于眼球和摇杆模拟。"},{name:"CSS 变形遮罩",nameEN:"CSS Transform Masking (scaleY Blink)",analogy:"百叶窗——从顶部拉下遮帘覆盖窗户，再拉回去恢复透明",explanation:"用一个与背景同色的 div 作为「眼皮」，通过 scaleY(0→1→0) 实现开闭动画。transformOrigin 设为顶部让缩放从上往下展开。overflow:hidden 确保眼皮不会超出眼白边界。这种技巧不需要 clip-path 或 mask——只需一个同色遮罩层 + transform 即可模拟任何「开合」效果。",whyItMatters:"知道 transform masking 后，你就能对 AI 说「用 scaleY + transformOrigin 做单方向的遮罩开合动画」——这是纯 CSS 实现眨眼、窗帘、百叶窗效果的最简方法。"}],applications:[{field:"交互式角色",examples:"网站吉祥物的眼球跟随、虚拟助手的注视反馈、游戏 NPC 的视线追踪"},{field:"趣味 UI",examples:"404 页面的卡通眼球、表单输入时的角色注视、密码输入时的「遮眼」动画"},{field:"视差交互",examples:"鼠标驱动的多层视差效果、产品展示的 3D 倾斜跟随、磁性按钮的吸附动效"},{field:"教育与创意",examples:"儿童教育 App 的互动角色、创意 Landing Page 的动态装饰、互动贺卡"}],keyInsight:"**光标跟踪眼球的本质是「坐标映射 + 范围限制 + 平滑插值」**。getBoundingClientRect 建立元素本地坐标系，clamp 限制瞳孔在椭圆范围内运动，lerp 提供惯性感的平滑跟随。眨眼只是一个同色遮罩层的 scaleY 开合。核心术语链：**Cursor Tracking**（交互模式）→ **getBoundingClientRect**（坐标获取）→ **Elliptical Clamping**（范围限制）→ **Lerp Smoothing**（惯性跟随）→ **Transform Masking**（眨眼遮罩）。记住：**最有温度的 UI 是「有眼神」的 UI——一双跟随鼠标的眼睛能让整个页面从静态变成活的**。"},liquidtrans:{id:"liquidtrans",title:"Liquid Transition",subtitle:"液态大理石转场效果",oneLiner:"基于 WebGL + Simplex Noise + 双层 Domain Warping 的液态颜料流动效果——用噪声场扭曲坐标空间，将平面像素映射为浓稠油漆般的有机流动色带",whatYouSee:"你看到的画面像是三种浓稠油漆（蓝、粉、黄）被倒在一起后缓慢搅拌——色带沿弧线流动、互相推挤，但始终保持鲜明的边界而不混为一色。这种效果在业界被称为 **Liquid Transition** 或 **Marble Texture**，核心技术是 **Domain Warping**（域扭曲）：用一层噪声去扭曲另一层噪声的坐标，产生有机的流体感。",pipeline:[{step:"01",title:"Simplex Noise 生成基础噪声场",description:"Simplex Noise 是一种连续随机函数，输入坐标 (x, y, z) 输出 [-1, 1] 的平滑值。与 Perlin Noise 类似但更高效。我们用 3D Simplex Noise（第三维是时间），让噪声场随时间平滑演化，产生流动感。",glsl:`float snoise(vec3 v) {
  // Simplex 3D: 将空间分割为四面体网格
  // 对每个点计算其所在四面体的4个顶点贡献
  // 返回 [-1, 1] 的平滑连续值
}`},{step:"02",title:"FBM 叠加多层细节 (Fractal Brownian Motion)",description:"单层噪声太「光滑」，缺少细节。FBM 叠加多个频率递增、振幅递减的噪声层：低频给出大的流动趋势，高频添加细碎的「颜料纹理」。turbulence 参数控制叠加层数——越多越细腻但越重。",glsl:`float fbm(vec3 p) {
  float val = 0.0, amp = 0.5, freq = 1.0;
  for (int i = 0; i < 5; i++) {
    val += amp * snoise(p * freq);
    freq *= 2.0;  // 频率翻倍
    amp *= 0.5;   // 振幅减半
  }
  return val;
}`},{step:"03",title:"双层 Domain Warping (域扭曲)",description:"这是液态效果的灵魂。第一层：用 fbm 生成两个偏移值 (dx, dy)，将原始坐标扭曲为 p' = p + swirl * (dx, dy)。第二层：再对 p' 做同样的事，得到 p''。两层扭曲叠加就像先搅拌一次再搅拌一次——产生复杂的漩涡和分支。",glsl:`// 第一层扭曲
float w1 = fbm(vec3(p * 0.8, t * 0.7));
float w2 = fbm(vec3(p * 0.8 + 5.2, t * 0.7));
vec2 warped = p + vec2(w1, w2) * swirl;

// 第二层扭曲
float w3 = fbm(vec3(warped * 0.6, t * 0.5));
float w4 = fbm(vec3(warped * 0.6 + 3.7, t * 0.5));
vec2 finalP = warped + vec2(w3, w4) * swirl * 0.5;`},{step:"04",title:"噪声值 → 三色带映射 (Color Banding)",description:"在扭曲后的坐标上再取一次 fbm，得到最终噪声值 n ∈ [0, 1]。将 [0, 1] 划分为三个区间，每个区间对应一种颜色。用 smoothstep 在区间边界创建平滑过渡——edgeSoftness 控制过渡宽度，小值产生锐利边界（像油漆），大值产生柔和渐变。",glsl:`float n = fbm(vec3(finalP * 0.7, t * 0.3));
n = n * 0.5 + 0.5;  // 归一化到 [0, 1]

// 三个平滑色带
float band1 = smoothstep(0.0, 0.333+edge, n)
            * (1.0 - smoothstep(0.333-edge, 0.667, n));
float band2 = smoothstep(0.333-edge, 0.667+edge, n)
            * (1.0 - smoothstep(0.667-edge, 1.0, n));
float band3 = smoothstep(0.667-edge, 1.0, n);

vec3 color = c1*band1 + c2*band2 + c3*band3;`},{step:"05",title:"细节纹理叠加 (Detail Noise)",description:"在最终颜色上叠加一层高频低振幅噪声，模拟颜料表面的微观纹理变化——让画面不会太「数字感」。这一步振幅很小（约 0.08），只添加微妙的颗粒质感。",glsl:`float detail = snoise(vec3(finalP * 3.0, t * 0.2)) * 0.08;
color += detail;`}],concepts:[{name:"域扭曲",nameEN:"Domain Warping",analogy:"*想象你在一张印有条纹的橡皮膜上涂了一层油，然后用手指在不同位置推拉——条纹被扭曲成有机的曲线*",explanation:"Domain Warping 是将一个噪声函数的输出作为另一个噪声函数的坐标偏移，f(p + g(p))。这打破了噪声的「自相似性」，产生涡旋、分支等自然界常见的复杂图案。在 Inigo Quilez 的经典文章中被系统阐述，是 Shader Art 的核心技法。",whyItMatters:"知道 Domain Warping 后，你就能对 AI 说：「我要一个 Domain Warping 液态效果，用两层嵌套 FBM 做坐标扭曲，swirl 强度设为 3.0」"},{name:"分形布朗运动",nameEN:"Fractal Brownian Motion (FBM)",analogy:"*就像远看一座山只有轮廓，走近才看到岩石、再走近看到石头上的裂纹——每个尺度都有细节*",explanation:"FBM 将多层噪声以「频率翻倍、振幅减半」的规律叠加。低频层决定大的流动趋势（像大的油漆色块），高频层添加小的细节（像颜料边缘的不规则凹凸）。层数越多计算越重，turbulence 参数控制这个平衡。",whyItMatters:"知道 FBM 后，你就能对 AI 说：「用 5 层 FBM 叠加生成有细节的液态噪声，turbulence 参数控制叠加层数」"},{name:"平滑阶梯",nameEN:"Smoothstep Color Banding",analogy:"*像调色盘上两种颜料交界处的自然过渡带——不是一刀切的，而是有一个柔和的混合区域*",explanation:"smoothstep(edge0, edge1, x) 在 [edge0, edge1] 区间从 0 平滑过渡到 1，用三次多项式（Hermite 插值）消除线性混合的突兀感。在液态效果中，它决定颜色之间是锐利的油漆边界还是柔和的渐变。edgeSoftness 控制 edge0 到 edge1 的宽度。",whyItMatters:"知道 Smoothstep Banding 后，你就能对 AI 说：「用 smoothstep 在三个颜色之间做平滑过渡，edgeSoftness 设 0.3」"},{name:"单纯形噪声",nameEN:"Simplex Noise",analogy:"*想象一个蜂巢网格（三角形/四面体），每个格点上放一个随机倾斜的「小山丘」，它们平滑地连接在一起*",explanation:"Simplex Noise 由 Ken Perlin 在 2001 年发明，是 Perlin Noise 的改进版。它使用单纯形（三角形/四面体）而非正方形/立方体网格，计算复杂度从 O(2^n) 降为 O(n^2)，且没有 Perlin Noise 的方向偏差。在 WebGL Shader 中几乎是程序化纹理的标配。",whyItMatters:"知道 Simplex Noise 后，你就能对 AI 说：「用 3D Simplex Noise（第三维做时间动画）生成程序化流动纹理」"}],applications:[{field:"网页转场",examples:"Awwwards 获奖网站的液态页面过渡、WebGL 图片切换特效、Hero Section 的流体背景"},{field:"品牌视觉",examples:"产品 Landing Page 的大理石纹背景、App 启动画面、品牌宣传视频的液态转场"},{field:"数据可视化",examples:"热力图的流体动画、状态变化的液态过渡、音乐可视化的频谱流动"},{field:"游戏 & 创意编码",examples:"Shader Art 生成艺术、游戏地图的程序化地形纹理、粒子系统的颜色场驱动"}],keyInsight:"**液态转场的本质是「噪声 + 扭曲 + 色带映射」三步链**。Simplex Noise 提供随机但连续的数值场；Domain Warping 将这个场「搅拌」出漩涡和分支；Smoothstep Banding 将连续数值切分为离散色带。核心术语链：**Simplex Noise**（基础随机场）→ **FBM**（多尺度细节）→ **Domain Warping**（有机扭曲）→ **Smoothstep Banding**（色带分离）。记住：**你看到的每一帧「油画」都不是真正的流体模拟——它只是一个被反复扭曲的噪声场在不同阈值处的切片，这种「用简单函数欺骗视觉」的思路是 Shader Art 的精髓**。"},dotgrid:{id:"dotgrid",title:"Dot Grid",subtitle:"点阵扩散与网格变形动画",oneLiner:"基于 Canvas 2D + Staggered Easing 的点阵扩散→网格变形动画——从中心向外扩散的点阵，每个圆点原地「伸展」为十字臂最终拼合成完整网格线",whatYouSee:"屏幕中央开始，大量圆点像涟漪一样**从中心向四周扩散**，排列成均匀的点阵（Dot Grid）。扩散完成后，每个圆点**原地变形**——圆形「身体」逐渐缩小，同时向上下左右伸出四条细线（十字臂），相邻点的臂彼此衔接，最终所有圆点融合为一张完整的**网格线**。这种效果的核心是 **Staggered Animation**（交错动画）——离中心越远的点启动越晚，形成波纹状的传播感；以及 **Shape Morphing**（形状变形）——同一个粒子从圆形连续变形为十字形。",pipeline:[{step:"01",title:"网格布局计算 (Grid Layout)",description:"根据画布尺寸和 gridSize 参数计算网格的行列数、起始偏移。行列数取 ceil(尺寸/gridSize)+2 保证边缘覆盖，偏移量让网格相对画布居中对齐。所有后续渲染都基于这个布局。",glsl:`const cols = Math.ceil(width / gridSize) + 2;
const rows = Math.ceil(height / gridSize) + 2;
const offsetX = ((width % gridSize) - gridSize) / 2;
const offsetY = ((height % gridSize) - gridSize) / 2;
// 每个点的位置: (offsetX + c * gridSize, offsetY + r * gridSize)`},{step:"02",title:"中心扩散动画 (Staggered Spread)",description:"所有圆点从画布中心出发，向各自的网格目标位置飞去。核心技巧：每个点根据「离中心的距离」计算一个延迟量 staggerDelay = dist/maxDist × stagger。全局进度 globalT 经 easeInOutQuart 缓动后，减去延迟量得到每个点的本地进度 localT。结果：中心的点先到达，边缘的点后到达，形成涟漪般的扩散波。",glsl:`const globalT = easeInOutQuart(progress);
// 每个点的距离决定启动延迟
const staggerDelay = (dist / maxDist) * stagger;
const localT = clamp((globalT - staggerDelay) / (1 - staggerDelay));
const easedT = easeOutQuint(localT);
// 从中心插值到目标位置
const x = cx + dx * easedT;
const y = cy + dy * easedT;`},{step:"03",title:"圆点→十字臂变形 (Dot-to-Cross Morphing)",description:"所有圆点**同步**变形为十字形——与扩散阶段的交错延迟不同，变形阶段所有粒子共享同一个 morphT，产生「整体形变」的视觉效果。圆点半径按 dotRadius × (1 - morphT × 0.85) 缩小；同时四条臂从 0 生长到 gridSize/2（恰好与相邻点的臂衔接）；臂的粗细从 dotRadius 渐变为 1px。整个过程是同一个粒子的连续形变，不创建新元素。",glsl:`// 全局同步变形——无 stagger
const morphT = easeOutQuint(easeInOutCubic(progress));
// 圆点缩小
const dotRadius = baseRadius * (1 - morphT * 0.85);
// 臂生长（到 gridSize/2 刚好接上邻居）
const armLength = (gridSize / 2) * morphT;
// 臂变细
const armThickness = baseRadius * (1 - morphT) + 1 * morphT;`},{step:"04",title:"网格线定型 (Grid Settle)",description:"变形完成后，所有点的臂完全衔接，画面变为完整的横竖网格线。此阶段直接绘制全屏水平线和垂直线，1px 线宽，无需逐点计算——这是最终静态态，保持短暂后循环回扩散阶段。",glsl:`// 水平线
for (let r = 0; r < rows; r++) {
  ctx.moveTo(0, offsetY + r * gridSize);
  ctx.lineTo(width, offsetY + r * gridSize);
}
// 垂直线
for (let c = 0; c < cols; c++) {
  ctx.moveTo(offsetX + c * gridSize, 0);
  ctx.lineTo(offsetX + c * gridSize, height);
}`},{step:"05",title:"循环与帧驱动 (Animation Loop)",description:"requestAnimationFrame 驱动的帧循环。维护 phase（0=扩散, 1=变形, 2=定型）和 accumulatedTime。每帧累加 dt × speed，当累计时间超过当前阶段时长时切换到下一阶段，phase 2 结束后回到 phase 0 循环。speed 参数作为时间倍率控制全局速度。",glsl:`const tick = (ts) => {
  const dt = (ts - lastTimestamp) * speed;
  accumulatedTime += dt;
  if (accumulatedTime >= durations[phase]) {
    phase = (phase + 1) % 3;  // 0→1→2→0 循环
    accumulatedTime = 0;
  }
  const progress = accumulatedTime / durations[phase];
  renderFrame(ctx, w, h, phase, progress, params);
  requestAnimationFrame(tick);
};`}],concepts:[{name:"交错动画",nameEN:"Staggered Animation",analogy:"往池塘里扔一颗石子——水波从落点向外一圈一圈扩散，远处的涟漪比近处的晚到达",explanation:"Staggered Animation 是让多个元素按照某种规则（距离、索引、随机）依次启动动画，而非同时开始。核心公式：localT = (globalT - delay) / (1 - delay)，delay 由元素与锚点（如中心）的距离决定。delay 越大元素启动越晚，视觉上形成传播波。这是 Motion Design 中最常用的编排手法之一。",whyItMatters:"知道 Staggered Animation 后，你就能对 AI 说「用 stagger delay 按距中心距离编排动画，形成涟漪扩散效果」——而不是说「那种一个一个冒出来的效果」。"},{name:"缓动函数",nameEN:"Easing Functions",analogy:"汽车的油门和刹车——不是匀速从 A 到 B，而是先加速再减速，动作有「呼吸感」",explanation:"缓动函数将线性的 [0,1] 时间映射为非线性的进度值。easeInOutQuart（四次方）让动画「慢-快-慢」，适合整体进度；easeOutQuint（五次方出）让动画快速启动后缓慢停下，适合单个粒子到位；easeInOutCubic（三次方）提供中等力度的缓动，适合变形过程。不同阶段选择不同缓动函数是动效精细调控的关键。",whyItMatters:"知道 easing functions 后，你就能对 AI 说「扩散阶段用 easeInOutQuart，落位用 easeOutQuint，变形用 easeInOutCubic」——精确控制每个阶段的运动节奏。"},{name:"形状变形",nameEN:"Shape Morphing",analogy:"一块橡皮泥被慢慢捏成另一个形状——始终是同一块材料，只是外形在连续变化",explanation:"Shape Morphing 是让一个图形连续变形为另一个图形。本效果中每个圆点 morph 为十字形：圆的半径缩小（消失）的同时线段长度增长（出现），中间过程是「有核心的短十字」。关键是所有几何参数（半径、臂长、线粗）都由同一个 morphT ∈ [0,1] 驱动，保证变形的连贯性。",whyItMatters:"知道 Shape Morphing 后，你就能对 AI 说「做 circle-to-cross 的 shape morphing，用单一参数 t 同时驱动半径缩小和臂长增长」——精确描述粒子的形变过程。"},{name:"Canvas 2D 即时模式渲染",nameEN:"Canvas 2D Immediate Mode Rendering",analogy:"在白板上画画——每次先擦干净再重新画一帧，画什么完全由代码控制",explanation:"Canvas 2D 的 API（arc、moveTo、lineTo、stroke、fill）是即时模式——没有保留的场景图，每帧必须重新绘制所有内容。clearRect 清空画布后，逐点计算位置和形状并绘制。这种模式适合大量简单几何体的动画（如数百个圆点），因为没有 DOM 节点的创建销毁开销。",whyItMatters:"知道 Canvas 2D immediate mode 后，你就能对 AI 说「用 Canvas 2D 即时模式渲染网格动画，每帧 clearRect + 逐点绘制」——这是处理大量粒子的最高效方案。"}],applications:[{field:"页面加载与启动",examples:"网站首屏的网格揭示动画、App 启动画面的点阵扩散、背景网格的渐进出现"},{field:"数据可视化",examples:"散点图到热力图的 morphing 过渡、网格布局的展开动画、矩阵数据的波纹填充"},{field:"UI 过渡",examples:"网格布局视图的出场动画、卡片列表的交错入场、瀑布流的涟漪加载"},{field:"创意背景",examples:"科技感的动态网格背景、交互式点阵装饰、品牌 Landing Page 的呼吸网格"}],keyInsight:"**点阵→网格变形的本质是「交错编排 + 单粒子形变」**。数百个圆点不是各做各的动画——它们共享一个全局进度条，每个点根据「离中心的距离」获得不同的延迟偏移，形成涟漪般的传播波。形变阶段，每个圆点用同一个 morphT 参数同时驱动半径缩小和臂长增长，实现 circle→cross 的连续变形。核心术语链：**Staggered Animation**（交错编排）→ **Easing Functions**（缓动曲线）→ **Shape Morphing**（形状变形）→ **Canvas 2D Immediate Mode**（即时渲染）。记住：**最自然的群体动画不是「同时开始」而是「依次启动」——一个简单的距离延迟就能把机械的全体运动变成有机的传播波浪**。"}},xb=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,vb=`
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
`,lg=o=>{const a=parseInt(o.replace("#",""),16),i=(a>>16&255)/255,l=(a>>8&255)/255,c=(a&255)/255;return[i,l,c]},bb=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(M,E)=>{const D=r.createShader(E);return D?(r.shaderSource(D,M),r.compileShader(D),r.getShaderParameter(D,r.COMPILE_STATUS)?D:(r.deleteShader(D),null)):null},x=m(xb,r.VERTEX_SHADER),h=m(vb,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(!g)return;r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"iResolution"),S=r.getUniformLocation(g,"iTime"),T=r.getUniformLocation(g,"uColor1"),j=r.getUniformLocation(g,"uColor2"),C=r.getUniformLocation(g,"uSpeed"),A=r.getUniformLocation(g,"uDensity"),k=r.getUniformLocation(g,"uSuction");let G=!0;const L=()=>{if(!G)return;const M=f.clientWidth*window.devicePixelRatio,E=f.clientHeight*window.devicePixelRatio;(f.width!==M||f.height!==E)&&(f.width=M,f.height=E,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const D=(Date.now()-l.current)/1e3,F=c.current,V=lg(F.color1),$=lg(F.color2);r.uniform2f(N,f.width,f.height),r.uniform1f(S,D),r.uniform3f(T,V[0],V[1],V[2]),r.uniform3f(j,$[0],$[1],$[2]),r.uniform1f(C,F.speed),r.uniform1f(A,F.density),r.uniform1f(k,F.suction),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(L)};return L(),()=>{G=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},ig=[{id:"arcane",label:"Arcane",c1:"#8b5cf6",c2:"#06b6d4"},{id:"biohazard",label:"Biohazard",c1:"#4ade80",c2:"#022c22"},{id:"inferno",label:"Inferno",c1:"#f59e0b",c2:"#b91c1c"},{id:"void",label:"The Void",c1:"#ffffff",c2:"#000000"}],Nf=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(1)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),yb=({params:o,onChange:a})=>{const i=ig.find(l=>l.c1===o.color1&&l.c2===o.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Nf,{label:"Flow Speed",value:o.speed,min:0,max:5,step:.1,onChange:l=>a({...o,speed:l})}),u.jsx(Nf,{label:"Twist Intensity",value:o.suction,min:0,max:3,step:.1,onChange:l=>a({...o,suction:l})}),u.jsx(Nf,{label:"Noise Density",value:o.density,min:1,max:10,step:.5,onChange:l=>a({...o,density:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Resonance"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:ig.map(l=>u.jsx("button",{onClick:()=>a({...o,color1:l.c1,color2:l.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(i==null?void 0:i.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.c1}, ${l.c2})`},title:l.label},l.id))}),i&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:i.label})]})]})},Sb=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,_b=`
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
`,Rf=o=>{const a=parseInt(o.slice(1,3),16)/255,i=parseInt(o.slice(3,5),16)/255,l=parseInt(o.slice(5,7),16)/255;return[a,i,l]},wb=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(E,D)=>{const F=r.createShader(D);return F?(r.shaderSource(F,E),r.compileShader(F),r.getShaderParameter(F,r.COMPILE_STATUS)?F:(r.deleteShader(F),null)):null},x=m(Sb,r.VERTEX_SHADER),h=m(_b,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(!g)return;r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"iResolution"),S=r.getUniformLocation(g,"iTime"),T=r.getUniformLocation(g,"u_speed"),j=r.getUniformLocation(g,"u_zoom"),C=r.getUniformLocation(g,"u_warpStrength"),A=r.getUniformLocation(g,"u_color1"),k=r.getUniformLocation(g,"u_color2"),G=r.getUniformLocation(g,"u_color3");let L=!0;const M=()=>{if(!L)return;const E=f.clientWidth*window.devicePixelRatio,D=f.clientHeight*window.devicePixelRatio;(f.width!==E||f.height!==D)&&(f.width=E,f.height=D,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const F=(Date.now()-l.current)/1e3,V=c.current,$=Rf(V.color1),Q=Rf(V.color2),te=Rf(V.color3);r.uniform2f(N,f.width,f.height),r.uniform1f(S,F),r.uniform1f(T,V.speed),r.uniform1f(j,V.zoom),r.uniform1f(C,V.warpStrength),r.uniform3f(A,$[0],$[1],$[2]),r.uniform3f(k,Q[0],Q[1],Q[2]),r.uniform3f(G,te[0],te[1],te[2]),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(M)};return M(),()=>{L=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},rg=[{id:"ocean",label:"Deep Ocean",c1:"#000d33",c2:"#1a664d",c3:"#ffcc33"},{id:"sunset",label:"Sunset",c1:"#1a0a2e",c2:"#b44d12",c3:"#f5d442"},{id:"aurora",label:"Aurora",c1:"#0a1628",c2:"#2dd4bf",c3:"#a78bfa"},{id:"midnight",label:"Midnight",c1:"#0f172a",c2:"#334155",c3:"#e2e8f0"}],Tf=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(c<.1?2:1)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Cb=({params:o,onChange:a})=>{const i=rg.find(l=>l.c1===o.color1&&l.c2===o.color2&&l.c3===o.color3);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Tf,{label:"Flow Speed",value:o.speed,min:0,max:2,step:.01,onChange:l=>a({...o,speed:l})}),u.jsx(Tf,{label:"Zoom / Scale",value:o.zoom,min:.5,max:10,step:.1,onChange:l=>a({...o,zoom:l})}),u.jsx(Tf,{label:"Warp Strength",value:o.warpStrength,min:0,max:8,step:.1,onChange:l=>a({...o,warpStrength:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Theme Presets"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:rg.map(l=>u.jsx("button",{onClick:()=>a({...o,color1:l.c1,color2:l.c2,color3:l.c3}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(i==null?void 0:i.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.c1}, ${l.c2}, ${l.c3})`},title:l.label},l.id))}),i&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:i.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Custom Palette"}),u.jsx("div",{className:"flex flex-col gap-2",children:[{key:"color1",label:"Base"},{key:"color2",label:"Mid"},{key:"color3",label:"Highlight"}].map(({key:l,label:c})=>u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 w-12",children:c}),u.jsxs("div",{className:"flex-1 flex items-center gap-1.5 bg-neutral-50 rounded-lg px-2 py-1",children:[u.jsx("input",{type:"color",value:o[l],onChange:f=>a({...o,[l]:f.target.value}),className:"w-4 h-4 rounded cursor-pointer bg-transparent p-0",style:{border:"none"}}),u.jsx("span",{className:"text-[9px] font-mono text-neutral-500",children:o[l]})]})]},l))})]})]})},Ab=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Nb=`
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
`,Rb=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o),f=R.useRef({x:.5,y:.5});return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const r=a.current;if(!r)return;const m=x=>{const h=r.getBoundingClientRect();f.current={x:(x.clientX-h.left)/h.width*2-1,y:-((x.clientY-h.top)/h.height*2-1)}};return r.addEventListener("mousemove",m),()=>r.removeEventListener("mousemove",m)},[]),R.useEffect(()=>{const r=a.current;if(!r)return;const m=r.getContext("webgl");if(!m)return;const x=(V,$)=>{const Q=m.createShader($);return Q?(m.shaderSource(Q,V),m.compileShader(Q),m.getShaderParameter(Q,m.COMPILE_STATUS)?Q:(m.deleteShader(Q),null)):null},h=x(Ab,m.VERTEX_SHADER),g=x(Nb,m.FRAGMENT_SHADER);if(!h||!g)return;const b=m.createProgram();if(!b)return;m.attachShader(b,h),m.attachShader(b,g),m.linkProgram(b),m.useProgram(b);const w=new Float32Array([-1,-1,1,-1,-1,1,1,1]),_=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,_),m.bufferData(m.ARRAY_BUFFER,w,m.STATIC_DRAW);const N=m.getAttribLocation(b,"position");m.enableVertexAttribArray(N),m.vertexAttribPointer(N,2,m.FLOAT,!1,0,0);const S=m.getUniformLocation(b,"iResolution"),T=m.getUniformLocation(b,"iTime"),j=m.getUniformLocation(b,"iMouse"),C=m.getUniformLocation(b,"uBlockSize"),A=m.getUniformLocation(b,"uSpacing"),k=m.getUniformLocation(b,"uTimeSpeed"),G=m.getUniformLocation(b,"uMouseInfluence"),L=m.getUniformLocation(b,"uFogStart"),M=m.getUniformLocation(b,"uFogEnd"),E=m.getUniformLocation(b,"uCamDistance");let D=!0;const F=()=>{if(!D)return;const V=r.clientWidth*window.devicePixelRatio,$=r.clientHeight*window.devicePixelRatio;(r.width!==V||r.height!==$)&&(r.width=V,r.height=$,m.viewport(0,0,m.drawingBufferWidth,m.drawingBufferHeight));const Q=(Date.now()-l.current)/1e3,te=c.current;m.uniform2f(S,r.width,r.height),m.uniform1f(T,Q),m.uniform2f(j,f.current.x,f.current.y),m.uniform1f(C,te.blockSize),m.uniform1f(A,te.spacing),m.uniform1f(k,te.timeSpeed),m.uniform1f(G,te.mouseInfluence),m.uniform1f(L,te.fogStart),m.uniform1f(M,te.fogEnd),m.uniform1f(E,te.camDistance),m.drawArrays(m.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(F)};return F(),()=>{D=!1,cancelAnimationFrame(i.current),m.deleteProgram(b)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},og=[{id:"default",label:"Default",params:{blockSize:1.5,spacing:2.5,timeSpeed:.8,mouseInfluence:1,fogStart:40,fogEnd:100,camDistance:80}},{id:"dense",label:"Dense Grid",params:{blockSize:1.8,spacing:2.2,timeSpeed:1.2,mouseInfluence:.8,fogStart:30,fogEnd:80,camDistance:70}},{id:"sparse",label:"Sparse Flow",params:{blockSize:1.2,spacing:3.5,timeSpeed:.5,mouseInfluence:1.5,fogStart:50,fogEnd:120,camDistance:100}},{id:"distant",label:"Distant View",params:{blockSize:1.5,spacing:2.5,timeSpeed:.6,mouseInfluence:.5,fogStart:60,fogEnd:150,camDistance:120}}],pl=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(1)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Tb=({params:o,onChange:a})=>{const i=og.find(l=>l.params.blockSize===o.blockSize&&l.params.spacing===o.spacing&&l.params.timeSpeed===o.timeSpeed&&l.params.camDistance===o.camDistance);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Geometry"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(pl,{label:"Block Size",value:o.blockSize,min:.5,max:3,step:.1,onChange:l=>a({...o,blockSize:l})}),u.jsx(pl,{label:"Grid Spacing",value:o.spacing,min:1.5,max:5,step:.1,onChange:l=>a({...o,spacing:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(pl,{label:"Time Speed",value:o.timeSpeed,min:0,max:2,step:.1,onChange:l=>a({...o,timeSpeed:l})}),u.jsx(pl,{label:"Mouse Influence",value:o.mouseInfluence,min:0,max:2,step:.1,onChange:l=>a({...o,mouseInfluence:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Camera & Atmosphere"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(pl,{label:"Camera Distance",value:o.camDistance,min:50,max:150,step:5,onChange:l=>a({...o,camDistance:l})}),u.jsx(pl,{label:"Fog Start",value:o.fogStart,min:20,max:80,step:5,onChange:l=>a({...o,fogStart:l})}),u.jsx(pl,{label:"Fog End",value:o.fogEnd,min:60,max:180,step:10,onChange:l=>a({...o,fogEnd:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"View Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:og.map(l=>u.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(i==null?void 0:i.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},jb=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Mb=`
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
`,Eb=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(M,E)=>{const D=r.createShader(E);return D?(r.shaderSource(D,M),r.compileShader(D),r.getShaderParameter(D,r.COMPILE_STATUS)?D:(r.deleteShader(D),null)):null},x=m(jb,r.VERTEX_SHADER),h=m(Mb,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(!g)return;r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"iResolution"),S=r.getUniformLocation(g,"iTime"),T=r.getUniformLocation(g,"uFlowSpeed"),j=r.getUniformLocation(g,"uStreakLength"),C=r.getUniformLocation(g,"uZoom"),A=r.getUniformLocation(g,"uTurbulence"),k=r.getUniformLocation(g,"uGridOpacity");let G=!0;const L=()=>{if(!G)return;const M=f.clientWidth*window.devicePixelRatio,E=f.clientHeight*window.devicePixelRatio;(f.width!==M||f.height!==E)&&(f.width=M,f.height=E,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const D=(Date.now()-l.current)/1e3,F=c.current;r.uniform2f(N,f.width,f.height),r.uniform1f(S,D),r.uniform1f(T,F.flowSpeed),r.uniform1f(j,F.streakLength),r.uniform1f(C,F.zoom),r.uniform1f(A,F.turbulence),r.uniform1f(k,F.gridOpacity),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(L)};return L(),()=>{G=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},sg=[{id:"calm",label:"Calm Breeze",params:{flowSpeed:.1,streakLength:1,zoom:2.5,turbulence:.8,gridOpacity:.15}},{id:"moderate",label:"Moderate Flow",params:{flowSpeed:.2,streakLength:1.5,zoom:2.5,turbulence:1.2,gridOpacity:.15}},{id:"turbulent",label:"Turbulent Current",params:{flowSpeed:.35,streakLength:2,zoom:2,turbulence:1.8,gridOpacity:.1}},{id:"storm",label:"Storm System",params:{flowSpeed:.5,streakLength:2.5,zoom:1.8,turbulence:2.5,gridOpacity:.05}}],kr=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Db=({params:o,onChange:a})=>{const i=sg.find(l=>l.params.flowSpeed===o.flowSpeed&&l.params.streakLength===o.streakLength&&l.params.turbulence===o.turbulence);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Flow Dynamics"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(kr,{label:"Flow Speed",value:o.flowSpeed,min:0,max:.8,step:.05,onChange:l=>a({...o,flowSpeed:l})}),u.jsx(kr,{label:"Turbulence",value:o.turbulence,min:.5,max:3,step:.1,onChange:l=>a({...o,turbulence:l})}),u.jsx(kr,{label:"Streak Length",value:o.streakLength,min:.5,max:3,step:.1,onChange:l=>a({...o,streakLength:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"View Settings"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(kr,{label:"Zoom",value:o.zoom,min:1,max:4,step:.1,onChange:l=>a({...o,zoom:l})}),u.jsx(kr,{label:"Grid Opacity",value:o.gridOpacity,min:0,max:.3,step:.05,onChange:l=>a({...o,gridOpacity:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Flow Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:sg.map(l=>u.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(i==null?void 0:i.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},zb=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,kb=`
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
`,cg=o=>{const a=parseInt(o.replace("#",""),16),i=(a>>16&255)/255,l=(a>>8&255)/255,c=(a&255)/255;return[i,l,c]},Lb=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(E,D)=>{const F=r.createShader(D);return F?(r.shaderSource(F,E),r.compileShader(F),r.getShaderParameter(F,r.COMPILE_STATUS)?F:(console.error("Shader error:",r.getShaderInfoLog(F)),r.deleteShader(F),null)):null},x=m(zb,r.VERTEX_SHADER),h=m(kb,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(!g)return;if(r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),!r.getProgramParameter(g,r.LINK_STATUS)){console.error("Link error:",r.getProgramInfoLog(g));return}r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"iResolution"),S=r.getUniformLocation(g,"iTime"),T=r.getUniformLocation(g,"uSpeed"),j=r.getUniformLocation(g,"uTwist"),C=r.getUniformLocation(g,"uNoise"),A=r.getUniformLocation(g,"uWidth"),k=r.getUniformLocation(g,"uColor1"),G=r.getUniformLocation(g,"uColor2");let L=!0;const M=()=>{if(!L)return;const E=f.clientWidth*window.devicePixelRatio,D=f.clientHeight*window.devicePixelRatio;(f.width!==E||f.height!==D)&&(f.width=E,f.height=D,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const F=(Date.now()-l.current)/1e3,V=c.current,$=cg(V.color1),Q=cg(V.color2);r.uniform2f(N,f.width,f.height),r.uniform1f(S,F),r.uniform1f(T,V.speed),r.uniform1f(j,V.twist),r.uniform1f(C,V.noise),r.uniform1f(A,V.width),r.uniform3f(k,$[0],$[1],$[2]),r.uniform3f(G,Q[0],Q[1],Q[2]),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(M)};return M(),()=>{L=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},ug=[{id:"cyber",label:"Cyber",c1:"#4f46e5",c2:"#06b6d4"},{id:"inferno",label:"Inferno",c1:"#dc2626",c2:"#f59e0b"},{id:"matrix",label:"Matrix",c1:"#059669",c2:"#d4ff00"},{id:"void",label:"Void",c1:"#a855f7",c2:"#1e1b4b"}],_s=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(c<.1?2:1)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Bb=({params:o,onChange:a})=>{const i=ug.find(l=>l.c1===o.color1&&l.c2===o.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(_s,{label:"Speed",value:o.speed,min:0,max:2,step:.05,onChange:l=>a({...o,speed:l})}),u.jsx(_s,{label:"Twist",value:o.twist,min:0,max:3,step:.1,onChange:l=>a({...o,twist:l})}),u.jsx(_s,{label:"Noise",value:o.noise,min:0,max:2,step:.1,onChange:l=>a({...o,noise:l})}),u.jsx(_s,{label:"Tunnel Width",value:o.width,min:2,max:8,step:.5,onChange:l=>a({...o,width:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:ug.map(l=>u.jsx("button",{onClick:()=>a({...o,color1:l.c1,color2:l.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(i==null?void 0:i.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.c1}, ${l.c2})`},title:l.label},l.id))}),i&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:i.label})]})]})},Ob=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Fb=`
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
`,fg=o=>{const a=parseInt(o.replace("#",""),16),i=(a>>16&255)/255,l=(a>>8&255)/255,c=(a&255)/255;return[i,l,c]},Gb=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(E,D)=>{const F=r.createShader(D);return F?(r.shaderSource(F,E),r.compileShader(F),r.getShaderParameter(F,r.COMPILE_STATUS)?F:(console.error("Shader error:",r.getShaderInfoLog(F)),r.deleteShader(F),null)):null},x=m(Ob,r.VERTEX_SHADER),h=m(Fb,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(!g)return;if(r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),!r.getProgramParameter(g,r.LINK_STATUS)){console.error("Link error:",r.getProgramInfoLog(g));return}r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"iResolution"),S=r.getUniformLocation(g,"iTime"),T=r.getUniformLocation(g,"uSpeed"),j=r.getUniformLocation(g,"uScale"),C=r.getUniformLocation(g,"uDensity"),A=r.getUniformLocation(g,"uBrightness"),k=r.getUniformLocation(g,"uColor1"),G=r.getUniformLocation(g,"uColor2");let L=!0;const M=()=>{if(!L)return;const E=f.clientWidth*window.devicePixelRatio,D=f.clientHeight*window.devicePixelRatio;(f.width!==E||f.height!==D)&&(f.width=E,f.height=D,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const F=(Date.now()-l.current)/1e3,V=c.current,$=fg(V.color1),Q=fg(V.color2);r.uniform2f(N,f.width,f.height),r.uniform1f(S,F),r.uniform1f(T,V.speed),r.uniform1f(j,V.scale),r.uniform1f(C,V.density),r.uniform1f(A,V.brightness),r.uniform3f(k,$[0],$[1],$[2]),r.uniform3f(G,Q[0],Q[1],Q[2]),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(M)};return M(),()=>{L=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},dg=[{id:"nebula",label:"Nebula",c1:"#3b0764",c2:"#06b6d4"},{id:"solar",label:"Solar",c1:"#7c2d12",c2:"#fbbf24"},{id:"arctic",label:"Arctic",c1:"#0c4a6e",c2:"#e0f2fe"},{id:"phantom",label:"Phantom",c1:"#18181b",c2:"#a78bfa"}],ws=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(c<.1?2:1)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Ib=({params:o,onChange:a})=>{const i=dg.find(l=>l.c1===o.color1&&l.c2===o.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(ws,{label:"Speed",value:o.speed,min:0,max:1.5,step:.05,onChange:l=>a({...o,speed:l})}),u.jsx(ws,{label:"Noise Scale",value:o.scale,min:.3,max:3,step:.1,onChange:l=>a({...o,scale:l})}),u.jsx(ws,{label:"Density",value:o.density,min:.2,max:2,step:.1,onChange:l=>a({...o,density:l})}),u.jsx(ws,{label:"Brightness",value:o.brightness,min:.3,max:3,step:.1,onChange:l=>a({...o,brightness:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:dg.map(l=>u.jsx("button",{onClick:()=>a({...o,color1:l.c1,color2:l.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(i==null?void 0:i.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.c1}, ${l.c2})`},title:l.label},l.id))}),i&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:i.label})]})]})},Ub=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Hb=`
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
`,Pb=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(E,D)=>{const F=r.createShader(D);return F?(r.shaderSource(F,E),r.compileShader(F),r.getShaderParameter(F,r.COMPILE_STATUS)?F:(r.deleteShader(F),null)):null},x=m(Ub,r.VERTEX_SHADER),h=m(Hb,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(!g)return;r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"iResolution"),S=r.getUniformLocation(g,"iTime"),T=r.getUniformLocation(g,"uSpeed"),j=r.getUniformLocation(g,"uScale"),C=r.getUniformLocation(g,"uHueShift"),A=r.getUniformLocation(g,"uSaturation"),k=r.getUniformLocation(g,"uBrightness"),G=r.getUniformLocation(g,"uWarpStrength");let L=!0;const M=()=>{if(!L)return;const E=f.clientWidth*window.devicePixelRatio,D=f.clientHeight*window.devicePixelRatio;(f.width!==E||f.height!==D)&&(f.width=E,f.height=D,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const F=(Date.now()-l.current)/1e3,V=c.current;r.uniform2f(N,f.width,f.height),r.uniform1f(S,F),r.uniform1f(T,V.speed),r.uniform1f(j,V.scale),r.uniform1f(C,V.hueShift),r.uniform1f(A,V.saturation),r.uniform1f(k,V.brightness),r.uniform1f(G,V.warpStrength),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(M)};return M(),()=>{L=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},mg=[{id:"electric",label:"Electric Blue",params:{speed:1,scale:1,hueShift:.5,saturation:.8,brightness:1,warpStrength:.3}},{id:"plasma",label:"Hot Plasma",params:{speed:1.5,scale:1.2,hueShift:0,saturation:.9,brightness:1.2,warpStrength:.5}},{id:"aurora",label:"Aurora Flow",params:{speed:.6,scale:.8,hueShift:.3,saturation:.7,brightness:.9,warpStrength:.4}},{id:"cyberpunk",label:"Cyberpunk",params:{speed:1.2,scale:1.5,hueShift:.8,saturation:1,brightness:1.1,warpStrength:.6}}],mi=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),qb=({params:o,onChange:a})=>{const i=mg.find(l=>l.params.speed===o.speed&&l.params.scale===o.scale&&l.params.hueShift===o.hueShift);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(mi,{label:"Speed",value:o.speed,min:0,max:2,step:.1,onChange:l=>a({...o,speed:l})}),u.jsx(mi,{label:"Scale",value:o.scale,min:.3,max:2,step:.1,onChange:l=>a({...o,scale:l})}),u.jsx(mi,{label:"Warp Strength",value:o.warpStrength,min:0,max:1,step:.05,onChange:l=>a({...o,warpStrength:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(mi,{label:"Hue Shift",value:o.hueShift,min:0,max:1,step:.01,onChange:l=>a({...o,hueShift:l})}),u.jsx(mi,{label:"Saturation",value:o.saturation,min:0,max:1,step:.05,onChange:l=>a({...o,saturation:l})}),u.jsx(mi,{label:"Brightness",value:o.brightness,min:.3,max:1.5,step:.1,onChange:l=>a({...o,brightness:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Style Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:mg.map(l=>u.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(i==null?void 0:i.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},Vb=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Yb=`
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
`,Xb=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(E,D)=>{const F=r.createShader(D);return F?(r.shaderSource(F,E),r.compileShader(F),r.getShaderParameter(F,r.COMPILE_STATUS)?F:(r.deleteShader(F),null)):null},x=m(Vb,r.VERTEX_SHADER),h=m(Yb,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(!g)return;r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"iResolution"),S=r.getUniformLocation(g,"iTime"),T=r.getUniformLocation(g,"uSpeed"),j=r.getUniformLocation(g,"uScale"),C=r.getUniformLocation(g,"uHueSpeed"),A=r.getUniformLocation(g,"uSaturation"),k=r.getUniformLocation(g,"uBrightness"),G=r.getUniformLocation(g,"uContrast");let L=!0;const M=()=>{if(!L)return;const E=f.clientWidth*window.devicePixelRatio,D=f.clientHeight*window.devicePixelRatio;(f.width!==E||f.height!==D)&&(f.width=E,f.height=D,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const F=(Date.now()-l.current)/1e3,V=c.current;r.uniform2f(N,f.width,f.height),r.uniform1f(S,F),r.uniform1f(T,V.speed),r.uniform1f(j,V.scale),r.uniform1f(C,V.hueSpeed),r.uniform1f(A,V.saturation),r.uniform1f(k,V.brightness),r.uniform1f(G,V.contrast),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(M)};return M(),()=>{L=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},pg=[{id:"calm",label:"Calm Ocean",params:{speed:.5,scale:1,hueSpeed:.5,saturation:.6,brightness:.8,contrast:1.2}},{id:"vibrant",label:"Vibrant Flow",params:{speed:1,scale:1.2,hueSpeed:1,saturation:.7,brightness:.8,contrast:1.2}},{id:"psychedelic",label:"Psychedelic",params:{speed:1.5,scale:1.5,hueSpeed:2,saturation:.9,brightness:.8,contrast:1.4}},{id:"cosmic",label:"Cosmic Nebula",params:{speed:.8,scale:.8,hueSpeed:.3,saturation:.8,brightness:.7,contrast:1.5}}],pi=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Zb=({params:o,onChange:a})=>{const i=pg.find(l=>l.params.speed===o.speed&&l.params.scale===o.scale&&l.params.hueSpeed===o.hueSpeed);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Flow Dynamics"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(pi,{label:"Speed",value:o.speed,min:0,max:2,step:.1,onChange:l=>a({...o,speed:l})}),u.jsx(pi,{label:"Scale",value:o.scale,min:.3,max:2,step:.1,onChange:l=>a({...o,scale:l})}),u.jsx(pi,{label:"Hue Speed",value:o.hueSpeed,min:0,max:3,step:.1,onChange:l=>a({...o,hueSpeed:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(pi,{label:"Saturation",value:o.saturation,min:0,max:1,step:.05,onChange:l=>a({...o,saturation:l})}),u.jsx(pi,{label:"Brightness",value:o.brightness,min:.3,max:1.2,step:.1,onChange:l=>a({...o,brightness:l})}),u.jsx(pi,{label:"Contrast",value:o.contrast,min:.8,max:2,step:.1,onChange:l=>a({...o,contrast:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Fluid Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:pg.map(l=>u.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(i==null?void 0:i.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},Wb=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Kb=`
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
`,Qb=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(M,E)=>{const D=r.createShader(E);return D?(r.shaderSource(D,M),r.compileShader(D),r.getShaderParameter(D,r.COMPILE_STATUS)?D:(r.deleteShader(D),null)):null},x=m(Wb,r.VERTEX_SHADER),h=m(Kb,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(!g)return;r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"iResolution"),S=r.getUniformLocation(g,"iTime"),T=r.getUniformLocation(g,"uSpeed"),j=r.getUniformLocation(g,"uZoom"),C=r.getUniformLocation(g,"uColorShift"),A=r.getUniformLocation(g,"uComplexity"),k=r.getUniformLocation(g,"uContrast");let G=!0;const L=()=>{if(!G)return;const M=f.clientWidth*window.devicePixelRatio,E=f.clientHeight*window.devicePixelRatio;(f.width!==M||f.height!==E)&&(f.width=M,f.height=E,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const D=(Date.now()-l.current)/1e3,F=c.current;r.uniform2f(N,f.width,f.height),r.uniform1f(S,D),r.uniform1f(T,F.speed),r.uniform1f(j,F.zoom),r.uniform1f(C,F.colorShift),r.uniform1f(A,F.complexity),r.uniform1f(k,F.contrast),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(L)};return L(),()=>{G=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},hg=[{id:"classic",label:"Classic Cyber",params:{speed:.2,zoom:3,colorShift:0,complexity:1,contrast:1}},{id:"neon",label:"Neon City",params:{speed:.4,zoom:2.5,colorShift:2,complexity:1.2,contrast:1.3}},{id:"matrix",label:"Digital Matrix",params:{speed:.3,zoom:3.5,colorShift:3.5,complexity:.8,contrast:.8}},{id:"synthwave",label:"Synthwave",params:{speed:.15,zoom:2.8,colorShift:5,complexity:1.5,contrast:1.2}}],Lr=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Jb=({params:o,onChange:a})=>{const i=hg.find(l=>l.params.speed===o.speed&&l.params.zoom===o.zoom&&l.params.colorShift===o.colorShift);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Lr,{label:"Speed",value:o.speed,min:0,max:1,step:.05,onChange:l=>a({...o,speed:l})}),u.jsx(Lr,{label:"Zoom",value:o.zoom,min:1,max:5,step:.1,onChange:l=>a({...o,zoom:l})}),u.jsx(Lr,{label:"Complexity",value:o.complexity,min:.3,max:2,step:.1,onChange:l=>a({...o,complexity:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Visual"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Lr,{label:"Color Shift",value:o.colorShift,min:0,max:6.28,step:.1,onChange:l=>a({...o,colorShift:l})}),u.jsx(Lr,{label:"Contrast",value:o.contrast,min:.5,max:2,step:.1,onChange:l=>a({...o,contrast:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Cyberpunk Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:hg.map(l=>u.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(i==null?void 0:i.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},$b=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,ey=`
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
`,gg=o=>{if(!o)return[0,0,0];const a=parseInt(o.replace("#",""),16),i=(a>>16&255)/255,l=(a>>8&255)/255,c=(a&255)/255;return[i,l,c]},ty=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r){console.error("WebGL not supported");return}const m=(L,M)=>{const E=r.createShader(M);return E?(r.shaderSource(E,L),r.compileShader(E),r.getShaderParameter(E,r.COMPILE_STATUS)?E:(console.error("Shader compilation error:",r.getShaderInfoLog(E)),r.deleteShader(E),null)):null},x=m($b,r.VERTEX_SHADER),h=m(ey,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),r.useProgram(g);const b=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,b),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),r.STATIC_DRAW);const w=r.getAttribLocation(g,"position");r.enableVertexAttribArray(w),r.vertexAttribPointer(w,2,r.FLOAT,!1,0,0);const _=r.getUniformLocation(g,"iTime"),N=r.getUniformLocation(g,"iResolution"),S=r.getUniformLocation(g,"uSpeed"),T=r.getUniformLocation(g,"uHeight"),j=r.getUniformLocation(g,"uSmoothness"),C=r.getUniformLocation(g,"uColor1"),A=r.getUniformLocation(g,"uColor2");let k=!0;const G=()=>{if(!k)return;const L=f.clientWidth,M=f.clientHeight;(f.width!==L||f.height!==M)&&(f.width=L,f.height=M,r.viewport(0,0,f.width,f.height));const E=c.current,D=(Date.now()-l.current)/1e3,F=gg(E.color1),V=gg(E.color2);r.uniform1f(_,D),r.uniform2f(N,f.width,f.height),r.uniform1f(S,E.speed),r.uniform1f(T,E.height),r.uniform1f(j,E.smoothness),r.uniform3f(C,F[0],F[1],F[2]),r.uniform3f(A,V[0],V[1],V[2]),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(G)};return G(),()=>{k=!1,cancelAnimationFrame(i.current),r.deleteProgram(g),r.deleteShader(x),r.deleteShader(h)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full"})},xg=[{id:"cyber",label:"Cyber",c1:"#2266ff",c2:"#9933ff"},{id:"retrowave",label:"Retrowave",c1:"#ff1493",c2:"#ff6600"},{id:"emerald",label:"Emerald",c1:"#00cc66",c2:"#00bbff"},{id:"inferno",label:"Inferno",c1:"#ff3300",c2:"#ffaa00"},{id:"frost",label:"Frost",c1:"#33ccff",c2:"#6666ff"}],vg=[{id:"calm",label:"Calm Waves",params:{speed:.3,height:2.2,smoothness:1}},{id:"cruise",label:"Night Cruise",params:{speed:.5,height:2,smoothness:1.5}},{id:"rush",label:"Speed Rush",params:{speed:1,height:1.8,smoothness:.8}},{id:"dream",label:"Dream Flight",params:{speed:.2,height:2.5,smoothness:2}}],jf=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),ay=({params:o,onChange:a})=>{const i=vg.find(c=>c.params.speed===o.speed&&c.params.height===o.height&&c.params.smoothness===o.smoothness),l=xg.find(c=>c.c1===o.color1&&c.c2===o.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Motion"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(jf,{label:"Speed",value:o.speed,min:0,max:2,step:.1,onChange:c=>a({...o,speed:c})}),u.jsx(jf,{label:"Height",value:o.height,min:1.5,max:3,step:.1,onChange:c=>a({...o,height:c})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Visual"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(jf,{label:"Smoothness",value:o.smoothness,min:.5,max:3,step:.1,onChange:c=>a({...o,smoothness:c})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:xg.map(c=>u.jsx("button",{onClick:()=>a({...o,color1:c.c1,color2:c.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===c.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${c.c1}, ${c.c2})`},title:c.label},c.id))}),l&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label}),u.jsxs("div",{className:"mt-3 flex gap-3",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Wave"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[u.jsx("input",{type:"color",value:o.color1,onChange:c=>a({...o,color1:c.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),u.jsx("div",{className:"w-full h-full rounded-lg",style:{background:o.color1}})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:o.color1})]})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Sky"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[u.jsx("input",{type:"color",value:o.color2,onChange:c=>a({...o,color2:c.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),u.jsx("div",{className:"w-full h-full rounded-lg",style:{background:o.color2}})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:o.color2})]})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Flight Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:vg.map(c=>u.jsx("button",{onClick:()=>a({...o,...c.params}),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(i==null?void 0:i.id)===c.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:c.label},c.id))})]})]})},ny=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,ly=`
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
`,iy=({params:o})=>{const a=R.useRef(null),i=R.useRef(null),l=R.useRef(null),c=R.useRef(0),f=R.useRef(Date.now());return R.useEffect(()=>{const r=a.current;if(!r)return;const m=r.getContext("webgl");if(!m){console.error("WebGL not supported");return}i.current=m;const x=m.createShader(m.VERTEX_SHADER);m.shaderSource(x,ny),m.compileShader(x);const h=m.createShader(m.FRAGMENT_SHADER);m.shaderSource(h,ly),m.compileShader(h),m.getShaderParameter(h,m.COMPILE_STATUS)||console.error("Fragment shader compilation error:",m.getShaderInfoLog(h));const g=m.createProgram();m.attachShader(g,x),m.attachShader(g,h),m.linkProgram(g),m.useProgram(g),l.current=g;const b=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,b),m.bufferData(m.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),m.STATIC_DRAW);const w=m.getAttribLocation(g,"position");m.enableVertexAttribArray(w),m.vertexAttribPointer(w,2,m.FLOAT,!1,0,0);const _=()=>{const S=r.clientWidth,T=r.clientHeight;(r.width!==S||r.height!==T)&&(r.width=S,r.height=T,m.viewport(0,0,r.width,r.height))},N=()=>{if(!i.current||!l.current)return;_();const S=m.getUniformLocation(l.current,"iTime"),T=m.getUniformLocation(l.current,"iResolution"),j=m.getUniformLocation(l.current,"uTextGlow"),C=m.getUniformLocation(l.current,"uTextScale"),A=m.getUniformLocation(l.current,"uTerrainBrightness"),k=(Date.now()-f.current)/1e3;m.uniform1f(S,k),m.uniform2f(T,r.width,r.height),m.uniform1f(j,o.textGlow),m.uniform1f(C,o.textScale),m.uniform1f(A,o.terrainBrightness),m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.TRIANGLE_STRIP,0,4),c.current=requestAnimationFrame(N)};return _(),N(),()=>{cancelAnimationFrame(c.current),m.deleteProgram(g),m.deleteShader(x),m.deleteShader(h)}},[o]),u.jsx("canvas",{ref:a,className:"w-full h-full"})},bg=[{id:"subtle",label:"Subtle Glow",params:{textGlow:3,textScale:1,terrainBrightness:.3}},{id:"vibrant",label:"Vibrant Pop",params:{textGlow:5,textScale:1,terrainBrightness:.5}},{id:"neon",label:"Full Neon",params:{textGlow:8,textScale:1.2,terrainBrightness:.2}},{id:"minimalist",label:"Minimal Mood",params:{textGlow:2,textScale:.8,terrainBrightness:.1}}],Mf=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),ry=({params:o,onChange:a})=>{const i=bg.find(l=>l.params.textGlow===o.textGlow&&l.params.textScale===o.textScale&&l.params.terrainBrightness===o.terrainBrightness);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Text"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Mf,{label:"Glow Intensity",value:o.textGlow,min:1,max:10,step:.5,onChange:l=>a({...o,textGlow:l})}),u.jsx(Mf,{label:"Scale",value:o.textScale,min:.5,max:2,step:.1,onChange:l=>a({...o,textScale:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Terrain"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(Mf,{label:"Brightness",value:o.terrainBrightness,min:0,max:1,step:.1,onChange:l=>a({...o,terrainBrightness:l})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Neon Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:bg.map(l=>u.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(i==null?void 0:i.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},oy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,sy=`
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
`,cy=({params:o})=>{const a=R.useRef(null),i=R.useRef(null),l=R.useRef(null),c=R.useRef(0),f=R.useRef(Date.now());return R.useEffect(()=>{const r=a.current;if(!r)return;const m=r.getContext("webgl");if(!m){console.error("WebGL not supported");return}i.current=m;const x=m.createShader(m.VERTEX_SHADER);m.shaderSource(x,oy),m.compileShader(x);const h=m.createShader(m.FRAGMENT_SHADER);m.shaderSource(h,sy),m.compileShader(h),m.getShaderParameter(h,m.COMPILE_STATUS)||console.error("Fragment shader compilation error:",m.getShaderInfoLog(h));const g=m.createProgram();m.attachShader(g,x),m.attachShader(g,h),m.linkProgram(g),m.useProgram(g),l.current=g;const b=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,b),m.bufferData(m.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),m.STATIC_DRAW);const w=m.getAttribLocation(g,"position");m.enableVertexAttribArray(w),m.vertexAttribPointer(w,2,m.FLOAT,!1,0,0);const _=()=>{const S=r.clientWidth,T=r.clientHeight;(r.width!==S||r.height!==T)&&(r.width=S,r.height=T,m.viewport(0,0,r.width,r.height))},N=()=>{if(!i.current||!l.current)return;_();const S=m.getUniformLocation(l.current,"iTime"),T=m.getUniformLocation(l.current,"iResolution"),j=m.getUniformLocation(l.current,"uWaveSpeed"),C=m.getUniformLocation(l.current,"uColorShift"),A=m.getUniformLocation(l.current,"uOpacity"),k=(Date.now()-f.current)/1e3;m.uniform1f(S,k),m.uniform2f(T,r.width,r.height),m.uniform1f(j,o.waveSpeed),m.uniform1f(C,o.colorShift),m.uniform1f(A,o.opacity),m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.TRIANGLE_STRIP,0,4),c.current=requestAnimationFrame(N)};return _(),N(),()=>{cancelAnimationFrame(c.current),m.deleteProgram(g),m.deleteShader(x),m.deleteShader(h)}},[o]),u.jsx("canvas",{ref:a,className:"w-full h-full"})},yg=[{id:"gentle",label:"Gentle Drift",params:{waveSpeed:.3,colorShift:0,opacity:.3}},{id:"flow",label:"Flowing Sky",params:{waveSpeed:.5,colorShift:1,opacity:.4}},{id:"ethereal",label:"Ethereal Mist",params:{waveSpeed:.2,colorShift:2,opacity:.25}},{id:"vivid",label:"Vivid Aurora",params:{waveSpeed:.7,colorShift:.5,opacity:.5}}],Ef=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),uy=({params:o,onChange:a})=>{const i=yg.find(l=>l.params.waveSpeed===o.waveSpeed&&l.params.colorShift===o.colorShift&&l.params.opacity===o.opacity);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Motion"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ef,{label:"Wave Speed",value:o.waveSpeed,min:0,max:1,step:.1,onChange:l=>a({...o,waveSpeed:l})}),u.jsx(Ef,{label:"Color Shift",value:o.colorShift,min:0,max:3,step:.1,onChange:l=>a({...o,colorShift:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Visual"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(Ef,{label:"Opacity",value:o.opacity,min:.1,max:.7,step:.05,onChange:l=>a({...o,opacity:l})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Aurora Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:yg.map(l=>u.jsx("button",{onClick:()=>a(l.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(i==null?void 0:i.id)===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]})},fy=`#version 300 es
  in vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,dy=`#version 300 es
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
`,Sg=o=>{if(!o)return[0,0,0];const a=parseInt(o.replace("#",""),16),i=(a>>16&255)/255,l=(a>>8&255)/255,c=(a&255)/255;return[i,l,c]},my=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl2");if(!r){console.error("WebGL 2.0 not supported");return}const m=(M,E)=>{const D=r.createShader(E);return D?(r.shaderSource(D,M),r.compileShader(D),r.getShaderParameter(D,r.COMPILE_STATUS)?D:(console.error("Shader compilation error:",r.getShaderInfoLog(D)),r.deleteShader(D),null)):null},x=m(fy,r.VERTEX_SHADER),h=m(dy,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(!g)return;if(r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),!r.getProgramParameter(g,r.LINK_STATUS)){console.error("Program link error:",r.getProgramInfoLog(g));return}r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"iResolution"),S=r.getUniformLocation(g,"iTime"),T=r.getUniformLocation(g,"uSpeed"),j=r.getUniformLocation(g,"uGlow"),C=r.getUniformLocation(g,"uGridSize"),A=r.getUniformLocation(g,"uColor1"),k=r.getUniformLocation(g,"uColor2");let G=!0;const L=()=>{if(!G)return;const M=f.clientWidth*window.devicePixelRatio,E=f.clientHeight*window.devicePixelRatio;(f.width!==M||f.height!==E)&&(f.width=M,f.height=E,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const D=(Date.now()-l.current)/1e3,F=c.current,V=Sg(F.color1),$=Sg(F.color2);r.uniform3f(N,f.width,f.height,1),r.uniform1f(S,D),r.uniform1f(T,F.speed),r.uniform1f(j,F.glow),r.uniform1f(C,F.gridSize),r.uniform3f(A,V[0],V[1],V[2]),r.uniform3f(k,$[0],$[1],$[2]),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(L)};return L(),()=>{G=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},_g=[{id:"neon",label:"Neon Blue",c1:"#4040ff",c2:"#40a0ff"},{id:"cyber",label:"Cyber Pink",c1:"#ff40a0",c2:"#a040ff"},{id:"matrix",label:"Matrix",c1:"#00ff66",c2:"#00aa44"},{id:"solar",label:"Solar",c1:"#ff8800",c2:"#ffdd00"},{id:"ice",label:"Ice",c1:"#88ccff",c2:"#ffffff"}],Df=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(c<.1?2:1)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),py=({params:o,onChange:a})=>{const i=_g.find(l=>l.c1===o.color1&&l.c2===o.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Df,{label:"Speed",value:o.speed,min:0,max:3,step:.1,onChange:l=>a({...o,speed:l})}),u.jsx(Df,{label:"Glow",value:o.glow,min:.1,max:3,step:.1,onChange:l=>a({...o,glow:l})}),u.jsx(Df,{label:"Grid Size",value:o.gridSize,min:.5,max:3,step:.1,onChange:l=>a({...o,gridSize:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:_g.map(l=>u.jsx("button",{onClick:()=>a({...o,color1:l.c1,color2:l.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(i==null?void 0:i.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.c1}, ${l.c2})`},title:l.label},l.id))}),i&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:i.label}),u.jsxs("div",{className:"mt-3 flex gap-3",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Primary"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[u.jsx("input",{type:"color",value:o.color1,onChange:l=>a({...o,color1:l.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),u.jsx("div",{className:"w-full h-full rounded-lg",style:{background:o.color1}})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:o.color1})]})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Accent"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[u.jsx("input",{type:"color",value:o.color2,onChange:l=>a({...o,color2:l.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),u.jsx("div",{className:"w-full h-full rounded-lg",style:{background:o.color2}})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:o.color2})]})]})]})]})]})},hy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,gy=`
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
`,Cs=o=>{const a=parseInt(o.replace("#",""),16),i=(a>>16&255)/255,l=(a>>8&255)/255,c=(a&255)/255;return[i,l,c]},xy=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o),f=R.useRef({x:0,y:0,active:!1});return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const r=a.current;if(!r)return;const m=r.getContext("webgl");if(!m)return;const x=V=>{const $=r.getBoundingClientRect(),Q=window.devicePixelRatio;f.current.x=(V.clientX-$.left)*Q,f.current.y=($.height-(V.clientY-$.top))*Q,f.current.active=!0},h=()=>{f.current.active=!1};r.addEventListener("mousemove",x),r.addEventListener("mouseleave",h);const g=(V,$)=>{const Q=m.createShader($);return Q?(m.shaderSource(Q,V),m.compileShader(Q),m.getShaderParameter(Q,m.COMPILE_STATUS)?Q:(console.error("Shader error:",m.getShaderInfoLog(Q)),m.deleteShader(Q),null)):null},b=g(hy,m.VERTEX_SHADER),w=g(gy,m.FRAGMENT_SHADER);if(!b||!w)return;const _=m.createProgram();if(!_)return;if(m.attachShader(_,b),m.attachShader(_,w),m.linkProgram(_),!m.getProgramParameter(_,m.LINK_STATUS)){console.error("Link error:",m.getProgramInfoLog(_));return}m.useProgram(_);const N=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,S),m.bufferData(m.ARRAY_BUFFER,N,m.STATIC_DRAW);const T=m.getAttribLocation(_,"position");m.enableVertexAttribArray(T),m.vertexAttribPointer(T,2,m.FLOAT,!1,0,0);const j=m.getUniformLocation(_,"iResolution"),C=m.getUniformLocation(_,"iTime"),A=m.getUniformLocation(_,"iMouse"),k=m.getUniformLocation(_,"uGamma"),G=m.getUniformLocation(_,"uAccent1"),L=m.getUniformLocation(_,"uAccent2"),M=m.getUniformLocation(_,"uBg1"),E=m.getUniformLocation(_,"uBg2");let D=!0;const F=()=>{if(!D)return;const V=r.clientWidth*window.devicePixelRatio,$=r.clientHeight*window.devicePixelRatio;(r.width!==V||r.height!==$)&&(r.width=V,r.height=$,m.viewport(0,0,m.drawingBufferWidth,m.drawingBufferHeight));const Q=(Date.now()-l.current)/1e3,te=c.current,le=f.current;m.uniform3f(j,r.width,r.height,1),m.uniform1f(C,Q*te.speed),m.uniform4f(A,le.x,le.y,le.active?1:-1,0),m.uniform1f(k,te.gamma);const U=Cs(te.accent1),W=Cs(te.accent2),re=Cs(te.bg1),ce=Cs(te.bg2);m.uniform3f(G,U[0],U[1],U[2]),m.uniform3f(L,W[0],W[1],W[2]),m.uniform3f(M,re[0],re[1],re[2]),m.uniform3f(E,ce[0],ce[1],ce[2]),m.drawArrays(m.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(F)};return F(),()=>{D=!1,cancelAnimationFrame(i.current),r.removeEventListener("mousemove",x),r.removeEventListener("mouseleave",h),m.deleteProgram(_)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},wg=[{id:"ocean",label:"Ocean",accent1:"#ff1a80",accent2:"#ff801a",bg1:"#1a80ff",bg2:"#1a8099"},{id:"abyss",label:"Abyss",accent1:"#00ffaa",accent2:"#00aaff",bg1:"#1a2d80",bg2:"#0a3366"},{id:"ember",label:"Ember",accent1:"#ff4400",accent2:"#ffcc00",bg1:"#801a28",bg2:"#805020"},{id:"arctic",label:"Arctic",accent1:"#66ccff",accent2:"#eeffff",bg1:"#103d80",bg2:"#1a5570"},{id:"toxic",label:"Toxic",accent1:"#88ff00",accent2:"#ff00aa",bg1:"#1a5530",bg2:"#2a1a66"},{id:"violet",label:"Violet",accent1:"#bb99ff",accent2:"#ff99cc",bg1:"#2a1566",bg2:"#1a2070"}],Cg=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(c<.1?2:1)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),vy=({params:o,onChange:a})=>{const i=wg.find(l=>l.accent1===o.accent1&&l.bg1===o.bg1);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Cg,{label:"Speed",value:o.speed,min:.2,max:2,step:.1,onChange:l=>a({...o,speed:l})}),u.jsx(Cg,{label:"Gamma",value:o.gamma,min:1,max:3.5,step:.1,onChange:l=>a({...o,gamma:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Palette"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:wg.map(l=>u.jsx("button",{onClick:()=>a({...o,accent1:l.accent1,accent2:l.accent2,bg1:l.bg1,bg2:l.bg2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(i==null?void 0:i.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.accent1}, ${l.bg1})`},title:l.label},l.id))}),i&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:i.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Interaction"}),u.jsx("div",{className:"text-[9px] text-neutral-500 leading-relaxed",children:"Move mouse over canvas to control camera angle. Leave canvas for auto-animation."})]})]})},by=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,yy=`
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
`,Sy=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(G,L)=>{const M=r.createShader(L);return M?(r.shaderSource(M,G),r.compileShader(M),r.getShaderParameter(M,r.COMPILE_STATUS)?M:(console.error("Shader error:",r.getShaderInfoLog(M)),r.deleteShader(M),null)):null},x=m(by,r.VERTEX_SHADER),h=m(yy,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(!g)return;if(r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),!r.getProgramParameter(g,r.LINK_STATUS)){console.error("Link error:",r.getProgramInfoLog(g));return}r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"iResolution"),S=r.getUniformLocation(g,"iTime"),T=r.getUniformLocation(g,"uSpeed"),j=r.getUniformLocation(g,"uGrain"),C=r.getUniformLocation(g,"uVignette");let A=!0;const k=()=>{if(!A)return;const G=f.clientWidth*window.devicePixelRatio,L=f.clientHeight*window.devicePixelRatio;(f.width!==G||f.height!==L)&&(f.width=G,f.height=L,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const M=(Date.now()-l.current)/1e3,E=c.current;r.uniform2f(N,f.width,f.height),r.uniform1f(S,M),r.uniform1f(T,E.speed),r.uniform1f(j,E.grain),r.uniform1f(C,E.vignette),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(k)};return k(),()=>{A=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},zf=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(c<.1?2:1)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),_y=[{id:"slow",label:"Slow",speed:.3},{id:"cruise",label:"Cruise",speed:1},{id:"express",label:"Express",speed:2}],wy=({params:o,onChange:a})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(zf,{label:"Speed",value:o.speed,min:.1,max:3,step:.1,onChange:i=>a({...o,speed:i})}),u.jsx(zf,{label:"Film Grain",value:o.grain,min:0,max:.4,step:.01,onChange:i=>a({...o,grain:i})}),u.jsx(zf,{label:"Vignette",value:o.vignette,min:0,max:1,step:.1,onChange:i=>a({...o,vignette:i})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Speed Presets"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:_y.map(i=>u.jsx("button",{onClick:()=>a({...o,speed:i.speed}),className:`px-2.5 py-1 rounded-lg text-[9px] font-medium transition-all ${o.speed===i.speed?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:i.label},i.id))})]})]}),Cy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Ay=`
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
`,kf=o=>{if(!o)return[0,0,0];const a=parseInt(o.replace("#",""),16),i=(a>>16&255)/255,l=(a>>8&255)/255,c=(a&255)/255;return[i,l,c]},Ny=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;const m=(V,$)=>{const Q=r.createShader($);return Q?(r.shaderSource(Q,V),r.compileShader(Q),r.getShaderParameter(Q,r.COMPILE_STATUS)?Q:(console.error("Shader error:",r.getShaderInfoLog(Q)),r.deleteShader(Q),null)):null},x=m(Cy,r.VERTEX_SHADER),h=m(Ay,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(!g)return;if(r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),!r.getProgramParameter(g,r.LINK_STATUS)){console.error("Link error:",r.getProgramInfoLog(g));return}r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"iResolution"),S=r.getUniformLocation(g,"iTime"),T=r.getUniformLocation(g,"uSpeed"),j=r.getUniformLocation(g,"uLayers"),C=r.getUniformLocation(g,"uDepth"),A=r.getUniformLocation(g,"uTurbulence"),k=r.getUniformLocation(g,"uGrain"),G=r.getUniformLocation(g,"uVignette"),L=r.getUniformLocation(g,"uColor1"),M=r.getUniformLocation(g,"uColor2"),E=r.getUniformLocation(g,"uColor3");let D=!0;const F=()=>{if(!D)return;const V=f.clientWidth*window.devicePixelRatio,$=f.clientHeight*window.devicePixelRatio;(f.width!==V||f.height!==$)&&(f.width=V,f.height=$,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const Q=(Date.now()-l.current)/1e3,te=c.current,le=kf(te.color1),U=kf(te.color2),W=kf(te.color3);r.uniform2f(N,f.width,f.height),r.uniform1f(S,Q),r.uniform1f(T,te.speed),r.uniform1f(j,te.layers),r.uniform1f(C,te.depth),r.uniform1f(A,te.turbulence),r.uniform1f(k,te.grain),r.uniform1f(G,te.vignette),r.uniform3f(L,le[0],le[1],le[2]),r.uniform3f(M,U[0],U[1],U[2]),r.uniform3f(E,W[0],W[1],W[2]),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(F)};return F(),()=>{D=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block rounded-2xl"})},hi=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(c<.1?2:1)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Ag=[{id:"sunset",label:"Sunset",color1:"#c44b32",color2:"#f0a050",color3:"#9ab4ff"},{id:"arctic",label:"Arctic",color1:"#4a6a8a",color2:"#a0c8e0",color3:"#d8e8f0"},{id:"forest",label:"Forest",color1:"#2a4a2a",color2:"#5a8a4a",color3:"#b0c8a0"},{id:"desert",label:"Desert",color1:"#8a5a30",color2:"#d4a060",color3:"#e8d0a0"},{id:"midnight",label:"Midnight",color1:"#1a1040",color2:"#3a2870",color3:"#1a2040"}],Ry=({params:o,onChange:a})=>{const i=Ag.find(l=>l.color1===o.color1&&l.color2===o.color2&&l.color3===o.color3);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Landscape"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(hi,{label:"Speed",value:o.speed,min:.1,max:3,step:.1,onChange:l=>a({...o,speed:l})}),u.jsx(hi,{label:"Layers",value:o.layers,min:4,max:16,step:1,onChange:l=>a({...o,layers:l})}),u.jsx(hi,{label:"Depth",value:o.depth,min:.3,max:3,step:.1,onChange:l=>a({...o,depth:l})}),u.jsx(hi,{label:"Turbulence",value:o.turbulence,min:.3,max:2.5,step:.1,onChange:l=>a({...o,turbulence:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:Ag.map(l=>u.jsx("button",{onClick:()=>a({...o,color1:l.color1,color2:l.color2,color3:l.color3}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(i==null?void 0:i.id)===l.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(180deg, ${l.color3}, ${l.color2}, ${l.color1})`},title:l.label},l.id))}),i&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:i.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Custom Colors"}),u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:o.color1,onChange:l=>a({...o,color1:l.target.value}),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Near"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:o.color2,onChange:l=>a({...o,color2:l.target.value}),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Mid"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:o.color3,onChange:l=>a({...o,color3:l.target.value}),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Sky"})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Post Processing"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(hi,{label:"Film Grain",value:o.grain,min:0,max:.3,step:.01,onChange:l=>a({...o,grain:l})}),u.jsx(hi,{label:"Vignette",value:o.vignette,min:0,max:1,step:.1,onChange:l=>a({...o,vignette:l})})]})]})]})},Ty=`
precision mediump float;

varying vec2 vUv;
attribute vec2 a_position;

void main() {
    vUv = a_position;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,jy=`
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
`,My=({params:o})=>{const a=R.useRef(null),i=R.useRef(null),l=R.useRef({}),c=R.useRef();return R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl")||f.getContext("experimental-webgl");if(!r){console.error("WebGL not supported");return}i.current=r;const m=(j,C)=>{const A=r.createShader(j);return A?(r.shaderSource(A,C),r.compileShader(A),r.getShaderParameter(A,r.COMPILE_STATUS)?A:(console.error("Shader compile error:",r.getShaderInfoLog(A)),r.deleteShader(A),null)):null},x=m(r.VERTEX_SHADER,Ty),h=m(r.FRAGMENT_SHADER,jy);if(!x||!h)return;const g=r.createProgram();if(!g)return;if(r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),!r.getProgramParameter(g,r.LINK_STATUS)){console.error("Program link error:",r.getProgramInfoLog(g));return}r.useProgram(g);const b=()=>{const j={},C=r.getProgramParameter(g,r.ACTIVE_UNIFORMS);for(let A=0;A<C;A++){const k=r.getActiveUniform(g,A);k&&(j[k.name]=r.getUniformLocation(g,k.name))}return j};l.current=b();const w=new Float32Array([-1,-1,1,-1,-1,1,1,1]),_=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,_),r.bufferData(r.ARRAY_BUFFER,w,r.STATIC_DRAW);const N=r.getAttribLocation(g,"a_position");r.enableVertexAttribArray(N),r.vertexAttribPointer(N,2,r.FLOAT,!1,0,0),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA);const S=()=>{const j=Math.min(window.devicePixelRatio,2);f.width=f.clientWidth*j,f.height=f.clientHeight*j,r.viewport(0,0,f.width,f.height),l.current.u_resolution&&r.uniform2f(l.current.u_resolution,f.width,f.height)};S(),window.addEventListener("resize",S);const T=()=>{const j=performance.now();l.current.u_time&&r.uniform1f(l.current.u_time,j),r.drawArrays(r.TRIANGLE_STRIP,0,4),c.current=requestAnimationFrame(T)};return T(),()=>{window.removeEventListener("resize",S),c.current&&cancelAnimationFrame(c.current)}},[]),R.useEffect(()=>{const f=i.current;if(!f)return;const r=l.current;r.u_col_width&&f.uniform1f(r.u_col_width,o.colWidth),r.u_speed&&f.uniform1f(r.u_speed,o.speed),r.u_scale&&f.uniform1f(r.u_scale,o.scale),r.u_seed&&f.uniform1f(r.u_seed,o.seed),r.u_color&&f.uniform3f(r.u_color,o.color[0],o.color[1],o.color[2]),r.u_scroll_progr&&f.uniform1f(r.u_scroll_progr,o.scrollProgress)},[o]),u.jsx("canvas",{ref:a,className:"w-full h-full"})},Ey=o=>{const a=parseInt(o.slice(1,3),16)/255,i=parseInt(o.slice(3,5),16)/255,l=parseInt(o.slice(5,7),16)/255;return[a,i,l]},Dy=o=>{const a=Math.round(o[0]*255),i=Math.round(o[1]*255),l=Math.round(o[2]*255);return`#${a.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}`},zy=({params:o,onChange:a})=>{const i=(l,c)=>{a({...o,[l]:c})};return u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Scroll Progress"}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:o.scrollProgress.toFixed(2)})]}),u.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:o.scrollProgress,onChange:l=>i("scrollProgress",parseFloat(l.target.value)),className:"w-full"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Column Width"}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:o.colWidth.toFixed(2)})]}),u.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.01",value:o.colWidth,onChange:l=>i("colWidth",parseFloat(l.target.value)),className:"w-full"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Speed"}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:o.speed.toFixed(2)})]}),u.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:o.speed,onChange:l=>i("speed",parseFloat(l.target.value)),className:"w-full"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Scale"}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:o.scale.toFixed(2)})]}),u.jsx("input",{type:"range",min:"0.15",max:"0.35",step:"0.01",value:o.scale,onChange:l=>i("scale",parseFloat(l.target.value)),className:"w-full"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Seed"}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:o.seed.toFixed(3)})]}),u.jsx("input",{type:"range",min:"0",max:"1",step:"0.001",value:o.seed,onChange:l=>i("seed",parseFloat(l.target.value)),className:"w-full"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"flex justify-between items-center mb-1.5",children:u.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Color"})}),u.jsx("input",{type:"color",value:Dy(o.color),onChange:l=>i("color",Ey(l.target.value)),className:"w-full h-8 rounded-lg cursor-pointer"})]})]})},ky=()=>{const o=R.useRef(null),a=R.useRef(null);return R.useEffect(()=>{(async()=>{try{const c=await(await fetch(new URL("/assets/parallax-CPv_KoVe.html",import.meta.url).href)).text(),r=await(await fetch(new URL("/assets/parallax-D_zRWyDI.js",import.meta.url).href)).text(),m=`
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
    ${c}
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
  <script>
    ${r}
  <\/script>
</body>
</html>
        `;if(a.current){const x=a.current;x.srcdoc=m}}catch(l){console.error("Failed to load parallax demo:",l)}})()},[]),u.jsx("div",{ref:o,className:"w-full h-full relative",children:u.jsx("iframe",{ref:a,className:"w-full h-full border-0",title:"Parallax Scroll Animation"})})},Ye="frosted-glass-demo",Ly='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>',By=[{category:"Instant",title:"Soul Shatter",description:"Each opponent sacrifices a creature or planeswalker with the greatest mana value among creatures and planeswalkers they control.",image:"https://cards.scryfall.io/art_crop/front/a/b/abdd053f-87ea-4cc8-b3df-a0c69c798d57.jpg?1678736299"},{category:"Instant",title:"Finishing Blow",description:"Destroy target creature or planeswalker.",image:"https://cards.scryfall.io/art_crop/front/2/b/2b85a552-2119-4d9c-b7c1-c09c2d9f2f38.jpg?1594736130"},{category:"Creature",title:"Essence Channeler",description:"As long as you've lost life this turn, this creature has flying and vigilance.",image:"https://cards.scryfall.io/art_crop/front/b/b/bbd5c86a-0991-4322-a0a2-48424c4be2af.jpg?1721427902"}],Oy=`
.${Ye} {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 10px;
  overflow: hidden;
}

.${Ye}__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.${Ye}__card {
  --gutter: 1.5rem;
  --brightness: 0.85;
  --saturation: 1.5;
  --frostRadius: 1.5rem;

  padding: var(--gutter);
  border-radius: var(--gutter);
  aspect-ratio: 4 / 3;
  width: 100%;
  max-width: 32rem;
  display: grid;
  justify-content: start;
  align-content: end;
  position: relative;
  background: #333;
  overflow: hidden;
  cursor: pointer;
  transition: transform 250ms ease-in-out;
}
.${Ye}__card img {
  transition: transform 500ms ease-in-out;
}
.${Ye}__card svg {
  transition: transform 250ms ease-in-out;
}
.${Ye}__card:hover {
  transform: scale(1.05);
}
.${Ye}__card:hover img {
  transform: scale(1.1);
}
.${Ye}__card:hover svg {
  transform: scale(1.5);
}

.${Ye}__card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  z-index: 1;
  pointer-events: none;
  backdrop-filter: blur(var(--frostRadius)) saturate(var(--saturation)) brightness(var(--brightness));
  -webkit-backdrop-filter: blur(var(--frostRadius)) saturate(var(--saturation)) brightness(var(--brightness));
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.5) 55%,
    black 75%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.5) 55%,
    black 75%
  );
}

.${Ye}__backdrop {
  position: absolute;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  width: 100%;
  height: 100%;
}

.${Ye}__content {
  position: relative;
  z-index: 2;
  display: grid;
  bottom: 0;
  justify-content: start;
  align-content: end;
  gap: 0.5rem;
}

.${Ye}__title {
  font-size: 1.7rem;
}

.${Ye}__category {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1rem;
  opacity: 0.45;
}

.${Ye}__desc {
  font-size: 1.3rem;
  line-height: 1.35;
  display: grid;
  grid-template-columns: 1fr auto;
  place-content: start;
  gap: 0.5rem;
}
.${Ye}__desc p {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.${Ye}__desc span {
  transform: translateY(-0.1rem);
  font-size: 4rem;
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
}
`,Fy=()=>{const o=R.useRef(null);return R.useEffect(()=>{const a=document.createElement("style");return a.textContent=Oy,document.head.appendChild(a),o.current=a,()=>{a.remove()}},[]),u.jsx("div",{className:Ye,children:u.jsx("article",{className:`${Ye}__cards`,children:By.map((a,i)=>u.jsxs("div",{className:`${Ye}__card`,children:[u.jsx("img",{className:`${Ye}__backdrop`,src:a.image,alt:a.title}),u.jsxs("div",{className:`${Ye}__content`,children:[u.jsx("div",{className:`${Ye}__category`,children:a.category}),u.jsx("div",{className:`${Ye}__title`,children:a.title}),u.jsxs("div",{className:`${Ye}__desc`,children:[u.jsx("p",{children:a.description}),u.jsx("span",{dangerouslySetInnerHTML:{__html:Ly}})]})]})]},i))})})},Gy=()=>{const o=R.useRef(null),a=R.useRef(null);return R.useEffect(()=>{(async()=>{try{const c=await(await fetch(new URL("/assets/videotext-Bqmj0-bG.html",import.meta.url).href)).text(),r=await(await fetch(new URL("data:text/css;base64,QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEA5MDAmZGlzcGxheT1zd2FwJyk7Cgo6cm9vdCB7IGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyayB9CgpzdmdbYXJpYS1oaWRkZW49J3RydWUnXVtoZWlnaHQ9JzAnXSB7IHBvc2l0aW9uOiBmaXhlZCB9CgoudmlkZW8tdGV4dC1jb250YWluZXIsIC50ZXh0LWJveCB7IGRpc3BsYXk6IGdyaWQgfQo6aXMoLnZpZGVvLXRleHQtY29udGFpbmVyLCAudGV4dC1ib3gpID4gKiB7IGdyaWQtYXJlYTogMS8gMSB9CgoudmlkZW8tdGV4dC1jb250YWluZXIgewogIGNvbnRhaW5lci10eXBlOiBpbmxpbmUtc2l6ZTsKICBwYWRkaW5nOiAuMjVyZW07CiAgYmFja2dyb3VuZDogbGlnaHQtZGFyaygjMzMzLCAjY2NjKSBjb250ZW50LWJveDsKCiAgdmlkZW8gewogICAgLS1hdXRvOiAxOwogICAgd2lkdGg6IDEwMCU7CiAgICBhc3BlY3QtcmF0aW86IDE2LyA5CiAgfQoKICAucGxheS1jdHJsIHsKICAgIC0taG92OiAwOwogICAgcGxhY2Utc2VsZjogZW5kIHN0YXJ0OwogICAgei1pbmRleDogMjsKICAgIG1hcmdpbjogLjc1ZW07CiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoZnJvbSBjdXJyZW50Y29sb3IgciBnIGIvIC41KTsKICAgIHBhZGRpbmc6IC4yNWVtOwogICAgd2lkdGg6IDRlbTsKICAgIGJvcmRlci1yYWRpdXM6IC4zNzVlbTsKICAgIG9wYWNpdHk6IGNhbGMoMSAtICgxIC0gdmFyKC0taG92KSkqLjM3NSk7CiAgICBiYWNrZ3JvdW5kOiBub25lOwogICAgZm9udDogY2xhbXAoLjYyNWVtLCA0Y3F3LCAxLjM3NWVtKSBzYW5zLXNlcmlmOwogICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsKICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1czsKICAgIGN1cnNvcjogcG9pbnRlcjsKCiAgICAmOmlzKDpob3ZlciwgOmZvY3VzKSB7IC0taG92OiAxIH0KCiAgICAmOmZvY3VzLXZpc2libGUgewogICAgICBvdXRsaW5lOiBkb3R0ZWQgMXB4OwogICAgICBvdXRsaW5lLW9mZnNldDogLTVweAogICAgfQogIH0KfQoKLnRleHQtYm94IHsgbWFyZ2luOiAtLjI1cmVtIH0KCi50ZXh0LWNvbnRlbnQgewogIGRpc3BsYXk6IGdyaWQ7CiAgcGxhY2UtY29udGVudDogY2VudGVyOwogIHotaW5kZXg6IDE7CiAgZm9udDogOTAwIGNsYW1wKDJyZW0sIDMwY3F3LCAyNXJlbSkvIDEuMDM1Y2FwIHJ1YmlrLCBzYW5zLXNlcmlmOwogIGxldHRlci1zcGFjaW5nOiAtLjAyZW07CiAgdGV4dC1hbGlnbjogY2VudGVyOwogIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CgogICY6OnNlbGVjdGlvbiB7CiAgICBjb2xvcjogbGlnaHQtZGFyaygjMDMwNDVlLCAjOThmNWUxKTsKICAgIGJhY2tncm91bmQ6IHJnYihmcm9tIGN1cnJlbnRjb2xvciByIGcgYi8gLjMpOwogICAgdGV4dC1zaGFkb3c6IDAgMCAxcHgsIDAgMCAycHgKICB9Cn0KCkBtZWRpYSBub3QgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSkgewogIC52aWRlby10ZXh0LWNvbnRhaW5lciB7IGNsaXAtcGF0aDogaW5zZXQoMXB4IHJvdW5kIC4zNzVlbSkgfQoKICAudGV4dC1ib3ggewogICAgLS1jOiBsaWdodC1kYXJrKCNhOWQ2ZTUsICMwMDE3MWYpOwogICAgY29sb3I6IHZhcigtLWMpOwogICAgZmlsdGVyOiB1cmwoI2V4dHJhY3QpCiAgICAgIGRyb3Atc2hhZG93KDAgMCAycHggdmFyKC0tYykpCiAgICAgIGRyb3Atc2hhZG93KDJweCAycHggNHB4ICMwMjAyMDIpOwoKICAgICY6bm90KC5iYWNrLWltZyk6bm90KDpoYXMoPiAudGV4dC1jb250ZXh0KSkgewogICAgICBiYWNrZ3JvdW5kOiByZ2IoZnJvbSB2YXIoLS1jKSByIGcgYi8gLjgpOwogICAgfQogIH0KCiAgLmJhY2staW1nIHsKICAgIC0tYmFjazogY29uaWMtZ3JhZGllbnQoZnJvbSA5MGRlZyBhdCAxcHggMXB4LAogICAgICAgICAgdmFyKC0tYykgMjUlLCBncmV5IDAlKQogICAgICAgIC0uNXB4IC0uNXB4LyAzcmVtIDNyZW0gcm91bmQ7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICBjb2xvcjogIzAwMDA7CiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrKTsKICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDsKCiAgICAmOjphZnRlciB7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgaW5zZXQ6IDA7CiAgICAgIG9wYWNpdHk6IC44OwogICAgICB6LWluZGV4OiAtMTsKICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDsKICAgICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94OwogICAgICBjb250ZW50OiAnJwogICAgfQogIH0KCiAgLmJhY2staW1nLS1tdWx0aSB7CiAgICAtLWJhY2s6CiAgICAgIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsCiAgICAgICAgICBsaWdodC1kYXJrKCNhOWQ2ZTUsICMwMjNlN2QpLAogICAgICAgICAgbGlnaHQtZGFyaygjYWJjNGZmLCAjMzM0MTVjKSksCiAgICAgIHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ1NDI2NzI4NjMyNy0yMTYxYzA0NjA1Y2U/dz02NDApCiAgICAgICAgNTAlLyBjb3ZlciwKICAgICAgbGlnaHQtZGFyaygjZGVkZWRlLCAjOTk5KTsKCiAgICAmOjphZnRlciB7IGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodCB9CiAgfQoKICAudGV4dC1jb250ZXh0IHsKICAgIC0tYmFjazogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLAogICAgICBsaWdodC1kYXJrKCNhOWQ2ZTUsICMwMDI4NTUpLCBsaWdodC1kYXJrKCNhYmM0ZmYsICMzMzQxNWMpKTsKCiAgICBvcGFjaXR5OiAuODsKICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2spCiAgfQp9CgpAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1kYXRhOiByZWR1Y2UpLAogIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHsKICAgIC52aWRlby10ZXh0LWNvbnRhaW5lciB2aWRlbyB7IC0tYXV0bzogMCB9Cn0KCmJvZHkgewogIGRpc3BsYXk6IGdyaWQ7CiAgZ3JpZC1nYXA6IDJlbTsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6CiAgICByZXBlYXQoYXV0by1maXQsIG1pbm1heChtaW4oMTAwJSwgNDByZW0pLCAxZnIpKTsKICBwbGFjZS1jb250ZW50OiBjZW50ZXI7CiAgcGFkZGluZzogMmVtIGNhbGMoLjVlbSArIHNpZ24oMTAwdncgLSAyMGVtKSo2dncpOwogIGJhY2tncm91bmQ6IGxpZ2h0LWRhcmsoIzg5YzJkOSwgIzMzNDE1Yyk7CiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDVweCAjMDAwOSkKfQoKLnRleHQtY29udGV4dCB7CiAgZGlzcGxheTogZ3JpZDsKICBwbGFjZS1pdGVtczogZW5kOwogIHBhZGRpbmc6IC41ZW07CiAgZm9udC1zaXplOiBjbGFtcCguNzVlbSwgOHZ3LCAyLjI1ZW0pCn0K",import.meta.url).href)).text(),x=await(await fetch(new URL("data:text/javascript;base64,Y29uc3QgRk4gPSBbJ3BsYXknLCAncGF1c2UnXQoKZnVuY3Rpb24gZ2V0VXBzdHJlYW0oX2VsLCBjbHMpIHsKICBpZihfZWwgPT09IGRvY3VtZW50LmJvZHkpIHJldHVybiBudWxsOwogIGlmKF9lbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkgcmV0dXJuIF9lbDsKICByZXR1cm4gZ2V0VXBzdHJlYW0oX2VsLnBhcmVudE5vZGUsIGNscykKfQoKZnVuY3Rpb24gdXBkYXRlKF9idG4sIGJpdCA9IDApIHsKICBfYnRuLnRleHRDb250ZW50ID0gRk5bX2J0bi5kYXRhc2V0LmFjdGlvbiA9IGJpdF0KfQoKZnVuY3Rpb24gbWFudWFsKF92aWQpIHsKICBsZXQgX2NvbnQgPSBnZXRVcHN0cmVhbShfdmlkLCAndmlkZW8tdGV4dC1jb250YWluZXInKSwKICAgICAgX2J0biA9IG51bGw7CgogIF92aWQuZGF0YXNldC5hdXRvID0gMDsKICBfdmlkLnBhdXNlKCk7CgogIGlmKF9jb250KSB7CiAgICBsZXQgX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOwoKICAgIF9idG4uY2xhc3NMaXN0LmFkZCgncGxheS1jdHJsJyk7CiAgICB1cGRhdGUoX2J0bik7CiAgICBfY29udC5hcHBlbmRDaGlsZChfYnRuKTsKCiAgICByZXR1cm4gX2J0bgogIH0KfQoKYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGUgPT4gewogIGNvbnN0IF9WSURTID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvJyldOwoKICBfVklEUy5mb3JFYWNoKChfdmlkLCBpKSA9PiB7CiAgICBsZXQgX2J0biA9IG51bGw7CgogICAgaWYoK2dldENvbXB1dGVkU3R5bGUoX3ZpZCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1hdXRvJykpIHsKICAgICAgbGV0IHByb21pc2UgPSBfdmlkLnBsYXkoKTsKCiAgICAgIGlmKHByb21pc2UgIT09IHVuZGVmaW5lZCkKICAgICAgICBwcm9taXNlLnRoZW4oXyA9PiB7IF92aWQuZGF0YXNldC5hdXRvID0gMSB9KQogICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHsgX2J0biA9IG1hbnVhbChfdmlkKSB9KQogICAgfQogICAgZWxzZSBfYnRuID0gbWFudWFsKF92aWQpOwoKICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4gewogICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7CiAgICAgICAgbGV0IGludmlldyA9IE1hdGguY2VpbChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyk7CiAgICAgICAgaWYoK192aWQuZGF0YXNldC5hdXRvKSBfdmlkW0ZOW2ludmlld11dKCk7CiAgICAgICAgZWxzZSB7CiAgICAgICAgICBpZighaW52aWV3ICYmIF9idG4gJiYgK19idG4uZGF0YXNldC5hY3Rpb24pIHsKICAgICAgICAgICAgX3ZpZC5wYXVzZSgpOwogICAgICAgICAgICB1cGRhdGUoX2J0bikKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0pOwogICAgfSk7CgogICAgb2JzZXJ2ZXIub2JzZXJ2ZShfdmlkKTsKICB9KTsKCiAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHsKICAgIGxldCBfdCA9IGUudGFyZ2V0OwoKICAgIGlmKF90LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicpIHsKICAgICAgbGV0IGJpdCA9ICtfdC5kYXRhc2V0LmFjdGlvbiwKICAgICAgICAgIF9jb250ID0gZ2V0VXBzdHJlYW0oX3QsICd2aWRlby10ZXh0LWNvbnRhaW5lcicpLAogICAgICAgICAgX3ZpZCA9IG51bGw7CgogICAgICBpZihfY29udCkgX3ZpZCA9IF9jb250LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7CgogICAgICBpZihfdmlkKSB7CiAgICAgICAgdXBkYXRlKF90LCAxIC0gYml0KTsKICAgICAgICBfdmlkW0ZOW2JpdF1dKCkKICAgICAgfQogICAgfQogIH0pCn0pCg==",import.meta.url).href)).text(),h=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    ${r}
  </style>
</head>
<body>
  ${c}
  <script>
    ${x}
  <\/script>
</body>
</html>
        `;a.current&&(a.current.srcdoc=h)}catch(l){console.error("Failed to load videotext demo:",l)}})()},[]),u.jsx("div",{ref:o,className:"w-full h-full relative",children:u.jsx("iframe",{ref:a,className:"w-full h-full border-0",title:"Video Text Wrapping",allow:"autoplay"})})},Iy=[{id:"gooey",name:"Gooey Overlay",description:"Scroll-driven liquid drops",author:"ksenia-k",url:"https://codepen.io/ksenia-k/pen/NWmMxLg"},{id:"parallax",name:"Parallax Scroll",description:"SVG landscape parallax",author:"isladjan",url:"https://codepen.io/isladjan/pen/abdyPBw"},{id:"frosted",name:"Frosted Glass",description:"CSS backdrop-filter cards",author:"lessthanthree",url:"https://codepen.io/lessthanthree/pen/LENwGyZ"},{id:"videotext",name:"Video Text",description:"SVG filter video text fill",author:"thebabydino",url:"https://codepen.io/thebabydino/pen/RNBwBYe"}],Uy=({active:o,onSelect:a})=>u.jsx("div",{className:"px-5 py-3 flex-shrink-0",children:u.jsx("div",{className:"flex gap-2 overflow-x-auto scrollbar-hide",children:Iy.map(i=>u.jsx("button",{onClick:()=>a(i.id),className:`px-3 py-1.5 rounded-full text-[10px] font-medium whitespace-nowrap transition-colors flex-shrink-0 ${o===i.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:i.name},i.id))})}),Hy=o=>{const[a,i]=R.useState([]),l=R.useRef(),c=R.useRef({x:0,y:0}),f=R.useRef([]),r=R.useRef(0),m=R.useRef(0),x=R.useCallback((g,b)=>{c.current={x:g,y:b}},[]),h=R.useCallback(()=>{r.current++;const g={x:c.current.x,y:c.current.y,id:m.current++,angle:r.current*o.rotationSpeed,hue:(o.baseHue+r.current*o.hueSpeed)%360,timestamp:Date.now()};f.current=[g,...f.current].slice(0,o.trailLength),i([...f.current]),l.current=requestAnimationFrame(h)},[o.trailLength,o.rotationSpeed,o.hueSpeed,o.baseHue]);return R.useEffect(()=>(l.current=requestAnimationFrame(h),()=>{l.current&&cancelAnimationFrame(l.current)}),[h]),{trail:a,handleMove:x}},Py=({type:o,text:a,size:i})=>{const l={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};switch(o){case"square":return u.jsx("div",{style:{...l,backgroundColor:"currentColor"}});case"circle":return u.jsx("div",{style:{...l,backgroundColor:"currentColor",borderRadius:"50%"}});case"triangle":return u.jsx("div",{style:{width:0,height:0,borderLeft:`${i/2}px solid transparent`,borderRight:`${i/2}px solid transparent`,borderBottom:`${i}px solid currentColor`}});case"star":return u.jsx("div",{style:{...l,backgroundColor:"currentColor",clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"}});case"text":return u.jsx("div",{style:{...l,fontSize:`${i}px`,whiteSpace:"nowrap",color:"currentColor",fontWeight:"bold"},children:a});default:return null}},qy=({params:o})=>{const a=R.useRef(null),{trail:i,handleMove:l}=Hy(o),c=r=>{if(a.current){const m=a.current.getBoundingClientRect();l(r.clientX-m.left,r.clientY-m.top)}},f=r=>{if(a.current){const m=a.current.getBoundingClientRect(),x=r.touches[0];l(x.clientX-m.left,x.clientY-m.top)}};return R.useEffect(()=>{const r=a.current;if(!r)return;const m=x=>x.preventDefault();return r.addEventListener("touchmove",m,{passive:!1}),()=>r.removeEventListener("touchmove",m)},[]),u.jsxs("div",{ref:a,onPointerMove:c,onTouchMove:f,className:"relative w-full h-full bg-neutral-950 overflow-hidden cursor-crosshair touch-none",children:[u.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none",children:u.jsx("h1",{className:"text-[120px] font-black text-white tracking-tighter select-none",children:"ECHO"})}),i.length===0&&u.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:u.jsx("p",{className:"text-neutral-500 text-sm animate-pulse",children:"Move your cursor"})}),i.map((r,m)=>{const x=m/o.trailLength,h=o.scaleDecay?Math.max(.1,1-x):1,g=o.opacityDecay?1-x:1,b=`hsl(${r.hue}, 100%, 50%)`;return u.jsx("div",{className:"absolute top-0 left-0 pointer-events-none will-change-transform",style:{transform:`translate3d(${r.x-o.size/2}px, ${r.y-o.size/2}px, 0) scale(${h}) rotate(${r.angle}deg)`,width:o.size,height:o.size,opacity:g,color:b,mixBlendMode:o.blendMode,zIndex:o.trailLength-m},children:u.jsx(Py,{type:o.shape,text:o.text,size:o.size})},r.id)})]})},Vy={trailLength:30,shape:"circle",text:"Echo",size:40,opacityDecay:!0,scaleDecay:!0,rotationSpeed:0,hueSpeed:2,baseHue:280,blendMode:"screen",spread:1,lag:.1},Yy=[{value:"normal",label:"Normal"},{value:"screen",label:"Glow"},{value:"difference",label:"Psychedelic"},{value:"exclusion",label:"X-Ray"},{value:"plus-lighter",label:"Neon"}],Xy=[{value:"circle",label:"●"},{value:"square",label:"■"},{value:"triangle",label:"▲"},{value:"star",label:"★"},{value:"text",label:"Aa"}],As=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(c>=1?0:1)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Ng=({label:o,value:a,onChange:i})=>u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("button",{onClick:()=>i(!a),className:`relative w-7 h-4 rounded-full transition-colors ${a?"bg-neutral-800":"bg-neutral-300"}`,children:u.jsx("span",{className:`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${a?"translate-x-3":"translate-x-0"}`})})]}),Zy=({params:o,onChange:a})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Shape"}),u.jsx("div",{className:"flex gap-1.5",children:Xy.map(i=>u.jsx("button",{onClick:()=>a({...o,shape:i.value}),className:`flex-1 h-8 rounded-lg text-sm font-bold transition-all ${o.shape===i.value?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-400 hover:bg-neutral-200"}`,children:i.label},i.value))}),o.shape==="text"&&u.jsx("input",{type:"text",value:o.text,onChange:i=>a({...o,text:i.target.value}),maxLength:10,className:"w-full mt-2 px-2 py-1.5 text-xs bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400",placeholder:"Text content"})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Style"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(As,{label:"Size",value:o.size,min:10,max:200,step:5,onChange:i=>a({...o,size:i})}),u.jsxs("div",{children:[u.jsx("div",{className:"flex items-center justify-between mb-1",children:u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Blend Mode"})}),u.jsx("select",{value:o.blendMode,onChange:i=>a({...o,blendMode:i.target.value}),className:"w-full px-2 py-1.5 text-[9px] bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400",children:Yy.map(i=>u.jsx("option",{value:i.value,children:i.label},i.value))})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Base Hue"}),u.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-200",style:{backgroundColor:`hsl(${o.baseHue}, 100%, 50%)`}})]}),u.jsx("input",{type:"range",min:0,max:360,step:1,value:o.baseHue,onChange:i=>a({...o,baseHue:parseInt(i.target.value)}),className:"w-full h-1 rounded-full appearance-none cursor-pointer",style:{background:"linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))"}})]}),u.jsx(As,{label:"Rainbow Speed",value:o.hueSpeed,min:0,max:20,step:.5,onChange:i=>a({...o,hueSpeed:i})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Physics"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(As,{label:"Trail Length",value:o.trailLength,min:5,max:200,step:5,onChange:i=>a({...o,trailLength:i})}),u.jsx(As,{label:"Spin Speed",value:o.rotationSpeed,min:-20,max:20,step:1,onChange:i=>a({...o,rotationSpeed:i})}),u.jsx(Ng,{label:"Fade Out",value:o.opacityDecay,onChange:i=>a({...o,opacityDecay:i})}),u.jsx(Ng,{label:"Shrink Trail",value:o.scaleDecay,onChange:i=>a({...o,scaleDecay:i})})]})]})]});function ln(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function hx(o,a){o.prototype=Object.create(a.prototype),o.prototype.constructor=o,o.__proto__=a}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ea={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ei={duration:.5,overwrite:!1,delay:0},Cd,bt,Xe,pa=1e8,Ie=1/pa,id=Math.PI*2,Wy=id/4,Ky=0,gx=Math.sqrt,Qy=Math.cos,Jy=Math.sin,dt=function(a){return typeof a=="string"},$e=function(a){return typeof a=="function"},cn=function(a){return typeof a=="number"},Ad=function(a){return typeof a>"u"},La=function(a){return typeof a=="object"},Bt=function(a){return a!==!1},Nd=function(){return typeof window<"u"},Ns=function(a){return $e(a)||dt(a)},xx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nt=Array.isArray,$y=/random\([^)]+\)/g,eS=/,\s*/g,Rg=/(?:-?\.?\d|\.)+/gi,vx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_i=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bx=/[+-]=-?[.\d]+/,tS=/[^,'"\[\]\s]+/gi,aS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,We,Da,rd,Rd,ta={},Gs={},yx,Sx=function(a){return(Gs=Di(a,ta))&&It},Td=function(a,i){return console.warn("Invalid property",a,"set to",i,"Missing plugin? gsap.registerPlugin()")},Zr=function(a,i){return!i&&console.warn(a)},_x=function(a,i){return a&&(ta[a]=i)&&Gs&&(Gs[a]=i)||ta},Wr=function(){return 0},nS={suppressEvents:!0,isStart:!0,kill:!1},Ls={suppressEvents:!0,kill:!1},lS={suppressEvents:!0},jd={},Un=[],od={},wx,Kt={},Bf={},Tg=30,Bs=[],Md="",Ed=function(a){var i=a[0],l,c;if(La(i)||$e(i)||(a=[a]),!(l=(i._gsap||{}).harness)){for(c=Bs.length;c--&&!Bs[c].targetTest(i););l=Bs[c]}for(c=a.length;c--;)a[c]&&(a[c]._gsap||(a[c]._gsap=new Xx(a[c],l)))||a.splice(c,1);return a},yl=function(a){return a._gsap||Ed(ha(a))[0]._gsap},Cx=function(a,i,l){return(l=a[i])&&$e(l)?a[i]():Ad(l)&&a.getAttribute&&a.getAttribute(i)||l},Ot=function(a,i){return(a=a.split(",")).forEach(i)||a},at=function(a){return Math.round(a*1e5)/1e5||0},Ze=function(a){return Math.round(a*1e7)/1e7||0},Ni=function(a,i){var l=i.charAt(0),c=parseFloat(i.substr(2));return a=parseFloat(a),l==="+"?a+c:l==="-"?a-c:l==="*"?a*c:a/c},iS=function(a,i){for(var l=i.length,c=0;a.indexOf(i[c])<0&&++c<l;);return c<l},Is=function(){var a=Un.length,i=Un.slice(0),l,c;for(od={},Un.length=0,l=0;l<a;l++)c=i[l],c&&c._lazy&&(c.render(c._lazy[0],c._lazy[1],!0)._lazy=0)},Dd=function(a){return!!(a._initted||a._startAt||a.add)},Ax=function(a,i,l,c){Un.length&&!bt&&Is(),a.render(i,l,!!(bt&&i<0&&Dd(a))),Un.length&&!bt&&Is()},Nx=function(a){var i=parseFloat(a);return(i||i===0)&&(a+"").match(tS).length<2?i:dt(a)?a.trim():a},Rx=function(a){return a},aa=function(a,i){for(var l in i)l in a||(a[l]=i[l]);return a},rS=function(a){return function(i,l){for(var c in l)c in i||c==="duration"&&a||c==="ease"||(i[c]=l[c])}},Di=function(a,i){for(var l in i)a[l]=i[l];return a},jg=function o(a,i){for(var l in i)l!=="__proto__"&&l!=="constructor"&&l!=="prototype"&&(a[l]=La(i[l])?o(a[l]||(a[l]={}),i[l]):i[l]);return a},Us=function(a,i){var l={},c;for(c in a)c in i||(l[c]=a[c]);return l},Hr=function(a){var i=a.parent||We,l=a.keyframes?rS(Nt(a.keyframes)):aa;if(Bt(a.inherit))for(;i;)l(a,i.vars.defaults),i=i.parent||i._dp;return a},oS=function(a,i){for(var l=a.length,c=l===i.length;c&&l--&&a[l]===i[l];);return l<0},Tx=function(a,i,l,c,f){var r=a[c],m;if(f)for(m=i[f];r&&r[f]>m;)r=r._prev;return r?(i._next=r._next,r._next=i):(i._next=a[l],a[l]=i),i._next?i._next._prev=i:a[c]=i,i._prev=r,i.parent=i._dp=a,i},Ks=function(a,i,l,c){l===void 0&&(l="_first"),c===void 0&&(c="_last");var f=i._prev,r=i._next;f?f._next=r:a[l]===i&&(a[l]=r),r?r._prev=f:a[c]===i&&(a[c]=f),i._next=i._prev=i.parent=null},Pn=function(a,i){a.parent&&(!i||a.parent.autoRemoveChildren)&&a.parent.remove&&a.parent.remove(a),a._act=0},Sl=function(a,i){if(a&&(!i||i._end>a._dur||i._start<0))for(var l=a;l;)l._dirty=1,l=l.parent;return a},sS=function(a){for(var i=a.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return a},sd=function(a,i,l,c){return a._startAt&&(bt?a._startAt.revert(Ls):a.vars.immediateRender&&!a.vars.autoRevert||a._startAt.render(i,!0,c))},cS=function o(a){return!a||a._ts&&o(a.parent)},Mg=function(a){return a._repeat?zi(a._tTime,a=a.duration()+a._rDelay)*a:0},zi=function(a,i){var l=Math.floor(a=Ze(a/i));return a&&l===a?l-1:l},Hs=function(a,i){return(a-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},Qs=function(a){return a._end=Ze(a._start+(a._tDur/Math.abs(a._ts||a._rts||Ie)||0))},Js=function(a,i){var l=a._dp;return l&&l.smoothChildTiming&&a._ts&&(a._start=Ze(l._time-(a._ts>0?i/a._ts:((a._dirty?a.totalDuration():a._tDur)-i)/-a._ts)),Qs(a),l._dirty||Sl(l,a)),a},jx=function(a,i){var l;if((i._time||!i._dur&&i._initted||i._start<a._time&&(i._dur||!i.add))&&(l=Hs(a.rawTime(),i),(!i._dur||no(0,i.totalDuration(),l)-i._tTime>Ie)&&i.render(l,!0)),Sl(a,i)._dp&&a._initted&&a._time>=a._dur&&a._ts){if(a._dur<a.duration())for(l=a;l._dp;)l.rawTime()>=0&&l.totalTime(l._tTime),l=l._dp;a._zTime=-Ie}},za=function(a,i,l,c){return i.parent&&Pn(i),i._start=Ze((cn(l)?l:l||a!==We?ma(a,l,i):a._time)+i._delay),i._end=Ze(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),Tx(a,i,"_first","_last",a._sort?"_start":0),cd(i)||(a._recent=i),c||jx(a,i),a._ts<0&&Js(a,a._tTime),a},Mx=function(a,i){return(ta.ScrollTrigger||Td("scrollTrigger",i))&&ta.ScrollTrigger.create(i,a)},Ex=function(a,i,l,c,f){if(kd(a,i,f),!a._initted)return 1;if(!l&&a._pt&&!bt&&(a._dur&&a.vars.lazy!==!1||!a._dur&&a.vars.lazy)&&wx!==Qt.frame)return Un.push(a),a._lazy=[f,c],1},uS=function o(a){var i=a.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||o(i))},cd=function(a){var i=a.data;return i==="isFromStart"||i==="isStart"},fS=function(a,i,l,c){var f=a.ratio,r=i<0||!i&&(!a._start&&uS(a)&&!(!a._initted&&cd(a))||(a._ts<0||a._dp._ts<0)&&!cd(a))?0:1,m=a._rDelay,x=0,h,g,b;if(m&&a._repeat&&(x=no(0,a._tDur,i),g=zi(x,m),a._yoyo&&g&1&&(r=1-r),g!==zi(a._tTime,m)&&(f=1-r,a.vars.repeatRefresh&&a._initted&&a.invalidate())),r!==f||bt||c||a._zTime===Ie||!i&&a._zTime){if(!a._initted&&Ex(a,i,c,l,x))return;for(b=a._zTime,a._zTime=i||(l?Ie:0),l||(l=i&&!b),a.ratio=r,a._from&&(r=1-r),a._time=0,a._tTime=x,h=a._pt;h;)h.r(r,h.d),h=h._next;i<0&&sd(a,i,l,!0),a._onUpdate&&!l&&Jt(a,"onUpdate"),x&&a._repeat&&!l&&a.parent&&Jt(a,"onRepeat"),(i>=a._tDur||i<0)&&a.ratio===r&&(r&&Pn(a,1),!l&&!bt&&(Jt(a,r?"onComplete":"onReverseComplete",!0),a._prom&&a._prom()))}else a._zTime||(a._zTime=i)},dS=function(a,i,l){var c;if(l>i)for(c=a._first;c&&c._start<=l;){if(c.data==="isPause"&&c._start>i)return c;c=c._next}else for(c=a._last;c&&c._start>=l;){if(c.data==="isPause"&&c._start<i)return c;c=c._prev}},ki=function(a,i,l,c){var f=a._repeat,r=Ze(i)||0,m=a._tTime/a._tDur;return m&&!c&&(a._time*=r/a._dur),a._dur=r,a._tDur=f?f<0?1e10:Ze(r*(f+1)+a._rDelay*f):r,m>0&&!c&&Js(a,a._tTime=a._tDur*m),a.parent&&Qs(a),l||Sl(a.parent,a),a},Eg=function(a){return a instanceof Tt?Sl(a):ki(a,a._dur)},mS={_start:0,endTime:Wr,totalDuration:Wr},ma=function o(a,i,l){var c=a.labels,f=a._recent||mS,r=a.duration()>=pa?f.endTime(!1):a._dur,m,x,h;return dt(i)&&(isNaN(i)||i in c)?(x=i.charAt(0),h=i.substr(-1)==="%",m=i.indexOf("="),x==="<"||x===">"?(m>=0&&(i=i.replace(/=/,"")),(x==="<"?f._start:f.endTime(f._repeat>=0))+(parseFloat(i.substr(1))||0)*(h?(m<0?f:l).totalDuration()/100:1)):m<0?(i in c||(c[i]=r),c[i]):(x=parseFloat(i.charAt(m-1)+i.substr(m+1)),h&&l&&(x=x/100*(Nt(l)?l[0]:l).totalDuration()),m>1?o(a,i.substr(0,m-1),l)+x:r+x)):i==null?r:+i},Pr=function(a,i,l){var c=cn(i[1]),f=(c?2:1)+(a<2?0:1),r=i[f],m,x;if(c&&(r.duration=i[1]),r.parent=l,a){for(m=r,x=l;x&&!("immediateRender"in m);)m=x.vars.defaults||{},x=Bt(x.vars.inherit)&&x.parent;r.immediateRender=Bt(m.immediateRender),a<2?r.runBackwards=1:r.startAt=i[f-1]}return new ot(i[0],r,i[f+1])},Yn=function(a,i){return a||a===0?i(a):i},no=function(a,i,l){return l<a?a:l>i?i:l},At=function(a,i){return!dt(a)||!(i=aS.exec(a))?"":i[1]},pS=function(a,i,l){return Yn(l,function(c){return no(a,i,c)})},ud=[].slice,Dx=function(a,i){return a&&La(a)&&"length"in a&&(!i&&!a.length||a.length-1 in a&&La(a[0]))&&!a.nodeType&&a!==Da},hS=function(a,i,l){return l===void 0&&(l=[]),a.forEach(function(c){var f;return dt(c)&&!i||Dx(c,1)?(f=l).push.apply(f,ha(c)):l.push(c)})||l},ha=function(a,i,l){return Xe&&!i&&Xe.selector?Xe.selector(a):dt(a)&&!l&&(rd||!Li())?ud.call((i||Rd).querySelectorAll(a),0):Nt(a)?hS(a,l):Dx(a)?ud.call(a,0):a?[a]:[]},fd=function(a){return a=ha(a)[0]||Zr("Invalid scope")||{},function(i){var l=a.current||a.nativeElement||a;return ha(i,l.querySelectorAll?l:l===a?Zr("Invalid scope")||Rd.createElement("div"):a)}},zx=function(a){return a.sort(function(){return .5-Math.random()})},kx=function(a){if($e(a))return a;var i=La(a)?a:{each:a},l=_l(i.ease),c=i.from||0,f=parseFloat(i.base)||0,r={},m=c>0&&c<1,x=isNaN(c)||m,h=i.axis,g=c,b=c;return dt(c)?g=b={center:.5,edges:.5,end:1}[c]||0:!m&&x&&(g=c[0],b=c[1]),function(w,_,N){var S=(N||i).length,T=r[S],j,C,A,k,G,L,M,E,D;if(!T){if(D=i.grid==="auto"?0:(i.grid||[1,pa])[1],!D){for(M=-pa;M<(M=N[D++].getBoundingClientRect().left)&&D<S;);D<S&&D--}for(T=r[S]=[],j=x?Math.min(D,S)*g-.5:c%D,C=D===pa?0:x?S*b/D-.5:c/D|0,M=0,E=pa,L=0;L<S;L++)A=L%D-j,k=C-(L/D|0),T[L]=G=h?Math.abs(h==="y"?k:A):gx(A*A+k*k),G>M&&(M=G),G<E&&(E=G);c==="random"&&zx(T),T.max=M-E,T.min=E,T.v=S=(parseFloat(i.amount)||parseFloat(i.each)*(D>S?S-1:h?h==="y"?S/D:D:Math.max(D,S/D))||0)*(c==="edges"?-1:1),T.b=S<0?f-S:f,T.u=At(i.amount||i.each)||0,l=l&&S<0?qx(l):l}return S=(T[w]-T.min)/T.max||0,Ze(T.b+(l?l(S):S)*T.v)+T.u}},dd=function(a){var i=Math.pow(10,((a+"").split(".")[1]||"").length);return function(l){var c=Ze(Math.round(parseFloat(l)/a)*a*i);return(c-c%1)/i+(cn(l)?0:At(l))}},Lx=function(a,i){var l=Nt(a),c,f;return!l&&La(a)&&(c=l=a.radius||pa,a.values?(a=ha(a.values),(f=!cn(a[0]))&&(c*=c)):a=dd(a.increment)),Yn(i,l?$e(a)?function(r){return f=a(r),Math.abs(f-r)<=c?f:r}:function(r){for(var m=parseFloat(f?r.x:r),x=parseFloat(f?r.y:0),h=pa,g=0,b=a.length,w,_;b--;)f?(w=a[b].x-m,_=a[b].y-x,w=w*w+_*_):w=Math.abs(a[b]-m),w<h&&(h=w,g=b);return g=!c||h<=c?a[g]:r,f||g===r||cn(r)?g:g+At(r)}:dd(a))},Bx=function(a,i,l,c){return Yn(Nt(a)?!i:l===!0?!!(l=0):!c,function(){return Nt(a)?a[~~(Math.random()*a.length)]:(l=l||1e-5)&&(c=l<1?Math.pow(10,(l+"").length-2):1)&&Math.floor(Math.round((a-l/2+Math.random()*(i-a+l*.99))/l)*l*c)/c})},gS=function(){for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return function(c){return i.reduce(function(f,r){return r(f)},c)}},xS=function(a,i){return function(l){return a(parseFloat(l))+(i||At(l))}},vS=function(a,i,l){return Fx(a,i,0,1,l)},Ox=function(a,i,l){return Yn(l,function(c){return a[~~i(c)]})},bS=function o(a,i,l){var c=i-a;return Nt(a)?Ox(a,o(0,a.length),i):Yn(l,function(f){return(c+(f-a)%c)%c+a})},yS=function o(a,i,l){var c=i-a,f=c*2;return Nt(a)?Ox(a,o(0,a.length-1),i):Yn(l,function(r){return r=(f+(r-a)%f)%f||0,a+(r>c?f-r:r)})},Kr=function(a){return a.replace($y,function(i){var l=i.indexOf("[")+1,c=i.substring(l||7,l?i.indexOf("]"):i.length-1).split(eS);return Bx(l?c:+c[0],l?0:+c[1],+c[2]||1e-5)})},Fx=function(a,i,l,c,f){var r=i-a,m=c-l;return Yn(f,function(x){return l+((x-a)/r*m||0)})},SS=function o(a,i,l,c){var f=isNaN(a+i)?0:function(_){return(1-_)*a+_*i};if(!f){var r=dt(a),m={},x,h,g,b,w;if(l===!0&&(c=1)&&(l=null),r)a={p:a},i={p:i};else if(Nt(a)&&!Nt(i)){for(g=[],b=a.length,w=b-2,h=1;h<b;h++)g.push(o(a[h-1],a[h]));b--,f=function(N){N*=b;var S=Math.min(w,~~N);return g[S](N-S)},l=i}else c||(a=Di(Nt(a)?[]:{},a));if(!g){for(x in i)zd.call(m,a,x,"get",i[x]);f=function(N){return Od(N,m)||(r?a.p:a)}}}return Yn(l,f)},Dg=function(a,i,l){var c=a.labels,f=pa,r,m,x;for(r in c)m=c[r]-i,m<0==!!l&&m&&f>(m=Math.abs(m))&&(x=r,f=m);return x},Jt=function(a,i,l){var c=a.vars,f=c[i],r=Xe,m=a._ctx,x,h,g;if(f)return x=c[i+"Params"],h=c.callbackScope||a,l&&Un.length&&Is(),m&&(Xe=m),g=x?f.apply(h,x):f.call(h),Xe=r,g},Gr=function(a){return Pn(a),a.scrollTrigger&&a.scrollTrigger.kill(!!bt),a.progress()<1&&Jt(a,"onInterrupt"),a},wi,Gx=[],Ix=function(a){if(a)if(a=!a.name&&a.default||a,Nd()||a.headless){var i=a.name,l=$e(a),c=i&&!l&&a.init?function(){this._props=[]}:a,f={init:Wr,render:Od,add:zd,kill:OS,modifier:BS,rawVars:0},r={targetTest:0,get:0,getSetter:Bd,aliases:{},register:0};if(Li(),a!==c){if(Kt[i])return;aa(c,aa(Us(a,f),r)),Di(c.prototype,Di(f,Us(a,r))),Kt[c.prop=i]=c,a.targetTest&&(Bs.push(c),jd[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}_x(i,c),a.register&&a.register(It,c,Ft)}else Gx.push(a)},Ge=255,Ir={aqua:[0,Ge,Ge],lime:[0,Ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ge],navy:[0,0,128],white:[Ge,Ge,Ge],olive:[128,128,0],yellow:[Ge,Ge,0],orange:[Ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ge,0,0],pink:[Ge,192,203],cyan:[0,Ge,Ge],transparent:[Ge,Ge,Ge,0]},Of=function(a,i,l){return a+=a<0?1:a>1?-1:0,(a*6<1?i+(l-i)*a*6:a<.5?l:a*3<2?i+(l-i)*(2/3-a)*6:i)*Ge+.5|0},Ux=function(a,i,l){var c=a?cn(a)?[a>>16,a>>8&Ge,a&Ge]:0:Ir.black,f,r,m,x,h,g,b,w,_,N;if(!c){if(a.substr(-1)===","&&(a=a.substr(0,a.length-1)),Ir[a])c=Ir[a];else if(a.charAt(0)==="#"){if(a.length<6&&(f=a.charAt(1),r=a.charAt(2),m=a.charAt(3),a="#"+f+f+r+r+m+m+(a.length===5?a.charAt(4)+a.charAt(4):"")),a.length===9)return c=parseInt(a.substr(1,6),16),[c>>16,c>>8&Ge,c&Ge,parseInt(a.substr(7),16)/255];a=parseInt(a.substr(1),16),c=[a>>16,a>>8&Ge,a&Ge]}else if(a.substr(0,3)==="hsl"){if(c=N=a.match(Rg),!i)x=+c[0]%360/360,h=+c[1]/100,g=+c[2]/100,r=g<=.5?g*(h+1):g+h-g*h,f=g*2-r,c.length>3&&(c[3]*=1),c[0]=Of(x+1/3,f,r),c[1]=Of(x,f,r),c[2]=Of(x-1/3,f,r);else if(~a.indexOf("="))return c=a.match(vx),l&&c.length<4&&(c[3]=1),c}else c=a.match(Rg)||Ir.transparent;c=c.map(Number)}return i&&!N&&(f=c[0]/Ge,r=c[1]/Ge,m=c[2]/Ge,b=Math.max(f,r,m),w=Math.min(f,r,m),g=(b+w)/2,b===w?x=h=0:(_=b-w,h=g>.5?_/(2-b-w):_/(b+w),x=b===f?(r-m)/_+(r<m?6:0):b===r?(m-f)/_+2:(f-r)/_+4,x*=60),c[0]=~~(x+.5),c[1]=~~(h*100+.5),c[2]=~~(g*100+.5)),l&&c.length<4&&(c[3]=1),c},Hx=function(a){var i=[],l=[],c=-1;return a.split(Hn).forEach(function(f){var r=f.match(_i)||[];i.push.apply(i,r),l.push(c+=r.length+1)}),i.c=l,i},zg=function(a,i,l){var c="",f=(a+c).match(Hn),r=i?"hsla(":"rgba(",m=0,x,h,g,b;if(!f)return a;if(f=f.map(function(w){return(w=Ux(w,i,1))&&r+(i?w[0]+","+w[1]+"%,"+w[2]+"%,"+w[3]:w.join(","))+")"}),l&&(g=Hx(a),x=l.c,x.join(c)!==g.c.join(c)))for(h=a.replace(Hn,"1").split(_i),b=h.length-1;m<b;m++)c+=h[m]+(~x.indexOf(m)?f.shift()||r+"0,0,0,0)":(g.length?g:f.length?f:l).shift());if(!h)for(h=a.split(Hn),b=h.length-1;m<b;m++)c+=h[m]+f[m];return c+h[b]},Hn=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",a;for(a in Ir)o+="|"+a+"\\b";return new RegExp(o+")","gi")})(),_S=/hsl[a]?\(/,Px=function(a){var i=a.join(" "),l;if(Hn.lastIndex=0,Hn.test(i))return l=_S.test(i),a[1]=zg(a[1],l),a[0]=zg(a[0],l,Hx(a[1])),!0},Qr,Qt=(function(){var o=Date.now,a=500,i=33,l=o(),c=l,f=1e3/240,r=f,m=[],x,h,g,b,w,_,N=function S(T){var j=o()-c,C=T===!0,A,k,G,L;if((j>a||j<0)&&(l+=j-i),c+=j,G=c-l,A=G-r,(A>0||C)&&(L=++b.frame,w=G-b.time*1e3,b.time=G=G/1e3,r+=A+(A>=f?4:f-A),k=1),C||(x=h(S)),k)for(_=0;_<m.length;_++)m[_](G,w,L,T)};return b={time:0,frame:0,tick:function(){N(!0)},deltaRatio:function(T){return w/(1e3/(T||60))},wake:function(){yx&&(!rd&&Nd()&&(Da=rd=window,Rd=Da.document||{},ta.gsap=It,(Da.gsapVersions||(Da.gsapVersions=[])).push(It.version),Sx(Gs||Da.GreenSockGlobals||!Da.gsap&&Da||{}),Gx.forEach(Ix)),g=typeof requestAnimationFrame<"u"&&requestAnimationFrame,x&&b.sleep(),h=g||function(T){return setTimeout(T,r-b.time*1e3+1|0)},Qr=1,N(2))},sleep:function(){(g?cancelAnimationFrame:clearTimeout)(x),Qr=0,h=Wr},lagSmoothing:function(T,j){a=T||1/0,i=Math.min(j||33,a)},fps:function(T){f=1e3/(T||240),r=b.time*1e3+f},add:function(T,j,C){var A=j?function(k,G,L,M){T(k,G,L,M),b.remove(A)}:T;return b.remove(T),m[C?"unshift":"push"](A),Li(),A},remove:function(T,j){~(j=m.indexOf(T))&&m.splice(j,1)&&_>=j&&_--},_listeners:m},b})(),Li=function(){return!Qr&&Qt.wake()},Ne={},wS=/^[\d.\-M][\d.\-,\s]/,CS=/["']/g,AS=function(a){for(var i={},l=a.substr(1,a.length-3).split(":"),c=l[0],f=1,r=l.length,m,x,h;f<r;f++)x=l[f],m=f!==r-1?x.lastIndexOf(","):x.length,h=x.substr(0,m),i[c]=isNaN(h)?h.replace(CS,"").trim():+h,c=x.substr(m+1).trim();return i},NS=function(a){var i=a.indexOf("(")+1,l=a.indexOf(")"),c=a.indexOf("(",i);return a.substring(i,~c&&c<l?a.indexOf(")",l+1):l)},RS=function(a){var i=(a+"").split("("),l=Ne[i[0]];return l&&i.length>1&&l.config?l.config.apply(null,~a.indexOf("{")?[AS(i[1])]:NS(a).split(",").map(Nx)):Ne._CE&&wS.test(a)?Ne._CE("",a):l},qx=function(a){return function(i){return 1-a(1-i)}},Vx=function o(a,i){for(var l=a._first,c;l;)l instanceof Tt?o(l,i):l.vars.yoyoEase&&(!l._yoyo||!l._repeat)&&l._yoyo!==i&&(l.timeline?o(l.timeline,i):(c=l._ease,l._ease=l._yEase,l._yEase=c,l._yoyo=i)),l=l._next},_l=function(a,i){return a&&($e(a)?a:Ne[a]||RS(a))||i},Rl=function(a,i,l,c){l===void 0&&(l=function(x){return 1-i(1-x)}),c===void 0&&(c=function(x){return x<.5?i(x*2)/2:1-i((1-x)*2)/2});var f={easeIn:i,easeOut:l,easeInOut:c},r;return Ot(a,function(m){Ne[m]=ta[m]=f,Ne[r=m.toLowerCase()]=l;for(var x in f)Ne[r+(x==="easeIn"?".in":x==="easeOut"?".out":".inOut")]=Ne[m+"."+x]=f[x]}),f},Yx=function(a){return function(i){return i<.5?(1-a(1-i*2))/2:.5+a((i-.5)*2)/2}},Ff=function o(a,i,l){var c=i>=1?i:1,f=(l||(a?.3:.45))/(i<1?i:1),r=f/id*(Math.asin(1/c)||0),m=function(g){return g===1?1:c*Math.pow(2,-10*g)*Jy((g-r)*f)+1},x=a==="out"?m:a==="in"?function(h){return 1-m(1-h)}:Yx(m);return f=id/f,x.config=function(h,g){return o(a,h,g)},x},Gf=function o(a,i){i===void 0&&(i=1.70158);var l=function(r){return r?--r*r*((i+1)*r+i)+1:0},c=a==="out"?l:a==="in"?function(f){return 1-l(1-f)}:Yx(l);return c.config=function(f){return o(a,f)},c};Ot("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,a){var i=a<5?a+1:a;Rl(o+",Power"+(i-1),a?function(l){return Math.pow(l,i)}:function(l){return l},function(l){return 1-Math.pow(1-l,i)},function(l){return l<.5?Math.pow(l*2,i)/2:1-Math.pow((1-l)*2,i)/2})});Ne.Linear.easeNone=Ne.none=Ne.Linear.easeIn;Rl("Elastic",Ff("in"),Ff("out"),Ff());(function(o,a){var i=1/a,l=2*i,c=2.5*i,f=function(m){return m<i?o*m*m:m<l?o*Math.pow(m-1.5/a,2)+.75:m<c?o*(m-=2.25/a)*m+.9375:o*Math.pow(m-2.625/a,2)+.984375};Rl("Bounce",function(r){return 1-f(1-r)},f)})(7.5625,2.75);Rl("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Rl("Circ",function(o){return-(gx(1-o*o)-1)});Rl("Sine",function(o){return o===1?1:-Qy(o*Wy)+1});Rl("Back",Gf("in"),Gf("out"),Gf());Ne.SteppedEase=Ne.steps=ta.SteppedEase={config:function(a,i){a===void 0&&(a=1);var l=1/a,c=a+(i?0:1),f=i?1:0,r=1-Ie;return function(m){return((c*no(0,r,m)|0)+f)*l}}};Ei.ease=Ne["quad.out"];Ot("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Md+=o+","+o+"Params,"});var Xx=function(a,i){this.id=Ky++,a._gsap=this,this.target=a,this.harness=i,this.get=i?i.get:Cx,this.set=i?i.getSetter:Bd},Jr=(function(){function o(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,ki(this,+i.duration,1,1),this.data=i.data,Xe&&(this._ctx=Xe,Xe.data.push(this)),Qr||Qt.wake()}var a=o.prototype;return a.delay=function(l){return l||l===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+l-this._delay),this._delay=l,this):this._delay},a.duration=function(l){return arguments.length?this.totalDuration(this._repeat>0?l+(l+this._rDelay)*this._repeat:l):this.totalDuration()&&this._dur},a.totalDuration=function(l){return arguments.length?(this._dirty=0,ki(this,this._repeat<0?l:(l-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},a.totalTime=function(l,c){if(Li(),!arguments.length)return this._tTime;var f=this._dp;if(f&&f.smoothChildTiming&&this._ts){for(Js(this,l),!f._dp||f.parent||jx(f,this);f&&f.parent;)f.parent._time!==f._start+(f._ts>=0?f._tTime/f._ts:(f.totalDuration()-f._tTime)/-f._ts)&&f.totalTime(f._tTime,!0),f=f.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&l<this._tDur||this._ts<0&&l>0||!this._tDur&&!l)&&za(this._dp,this,this._start-this._delay)}return(this._tTime!==l||!this._dur&&!c||this._initted&&Math.abs(this._zTime)===Ie||!this._initted&&this._dur&&l||!l&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=l),Ax(this,l,c)),this},a.time=function(l,c){return arguments.length?this.totalTime(Math.min(this.totalDuration(),l+Mg(this))%(this._dur+this._rDelay)||(l?this._dur:0),c):this._time},a.totalProgress=function(l,c){return arguments.length?this.totalTime(this.totalDuration()*l,c):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},a.progress=function(l,c){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-l:l)+Mg(this),c):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},a.iteration=function(l,c){var f=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(l-1)*f,c):this._repeat?zi(this._tTime,f)+1:1},a.timeScale=function(l,c){if(!arguments.length)return this._rts===-Ie?0:this._rts;if(this._rts===l)return this;var f=this.parent&&this._ts?Hs(this.parent._time,this):this._tTime;return this._rts=+l||0,this._ts=this._ps||l===-Ie?0:this._rts,this.totalTime(no(-Math.abs(this._delay),this.totalDuration(),f),c!==!1),Qs(this),sS(this)},a.paused=function(l){return arguments.length?(this._ps!==l&&(this._ps=l,l?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Li(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ie&&(this._tTime-=Ie)))),this):this._ps},a.startTime=function(l){if(arguments.length){this._start=Ze(l);var c=this.parent||this._dp;return c&&(c._sort||!this.parent)&&za(c,this,this._start-this._delay),this}return this._start},a.endTime=function(l){return this._start+(Bt(l)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},a.rawTime=function(l){var c=this.parent||this._dp;return c?l&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Hs(c.rawTime(l),this):this._tTime:this._tTime},a.revert=function(l){l===void 0&&(l=lS);var c=bt;return bt=l,Dd(this)&&(this.timeline&&this.timeline.revert(l),this.totalTime(-.01,l.suppressEvents)),this.data!=="nested"&&l.kill!==!1&&this.kill(),bt=c,this},a.globalTime=function(l){for(var c=this,f=arguments.length?l:c.rawTime();c;)f=c._start+f/(Math.abs(c._ts)||1),c=c._dp;return!this.parent&&this._sat?this._sat.globalTime(l):f},a.repeat=function(l){return arguments.length?(this._repeat=l===1/0?-2:l,Eg(this)):this._repeat===-2?1/0:this._repeat},a.repeatDelay=function(l){if(arguments.length){var c=this._time;return this._rDelay=l,Eg(this),c?this.time(c):this}return this._rDelay},a.yoyo=function(l){return arguments.length?(this._yoyo=l,this):this._yoyo},a.seek=function(l,c){return this.totalTime(ma(this,l),Bt(c))},a.restart=function(l,c){return this.play().totalTime(l?-this._delay:0,Bt(c)),this._dur||(this._zTime=-Ie),this},a.play=function(l,c){return l!=null&&this.seek(l,c),this.reversed(!1).paused(!1)},a.reverse=function(l,c){return l!=null&&this.seek(l||this.totalDuration(),c),this.reversed(!0).paused(!1)},a.pause=function(l,c){return l!=null&&this.seek(l,c),this.paused(!0)},a.resume=function(){return this.paused(!1)},a.reversed=function(l){return arguments.length?(!!l!==this.reversed()&&this.timeScale(-this._rts||(l?-Ie:0)),this):this._rts<0},a.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ie,this},a.isActive=function(){var l=this.parent||this._dp,c=this._start,f;return!!(!l||this._ts&&this._initted&&l.isActive()&&(f=l.rawTime(!0))>=c&&f<this.endTime(!0)-Ie)},a.eventCallback=function(l,c,f){var r=this.vars;return arguments.length>1?(c?(r[l]=c,f&&(r[l+"Params"]=f),l==="onUpdate"&&(this._onUpdate=c)):delete r[l],this):r[l]},a.then=function(l){var c=this,f=c._prom;return new Promise(function(r){var m=$e(l)?l:Rx,x=function(){var g=c.then;c.then=null,f&&f(),$e(m)&&(m=m(c))&&(m.then||m===c)&&(c.then=g),r(m),c.then=g};c._initted&&c.totalProgress()===1&&c._ts>=0||!c._tTime&&c._ts<0?x():c._prom=x})},a.kill=function(){Gr(this)},o})();aa(Jr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ie,_prom:0,_ps:!1,_rts:1});var Tt=(function(o){hx(a,o);function a(l,c){var f;return l===void 0&&(l={}),f=o.call(this,l)||this,f.labels={},f.smoothChildTiming=!!l.smoothChildTiming,f.autoRemoveChildren=!!l.autoRemoveChildren,f._sort=Bt(l.sortChildren),We&&za(l.parent||We,ln(f),c),l.reversed&&f.reverse(),l.paused&&f.paused(!0),l.scrollTrigger&&Mx(ln(f),l.scrollTrigger),f}var i=a.prototype;return i.to=function(c,f,r){return Pr(0,arguments,this),this},i.from=function(c,f,r){return Pr(1,arguments,this),this},i.fromTo=function(c,f,r,m){return Pr(2,arguments,this),this},i.set=function(c,f,r){return f.duration=0,f.parent=this,Hr(f).repeatDelay||(f.repeat=0),f.immediateRender=!!f.immediateRender,new ot(c,f,ma(this,r),1),this},i.call=function(c,f,r){return za(this,ot.delayedCall(0,c,f),r)},i.staggerTo=function(c,f,r,m,x,h,g){return r.duration=f,r.stagger=r.stagger||m,r.onComplete=h,r.onCompleteParams=g,r.parent=this,new ot(c,r,ma(this,x)),this},i.staggerFrom=function(c,f,r,m,x,h,g){return r.runBackwards=1,Hr(r).immediateRender=Bt(r.immediateRender),this.staggerTo(c,f,r,m,x,h,g)},i.staggerFromTo=function(c,f,r,m,x,h,g,b){return m.startAt=r,Hr(m).immediateRender=Bt(m.immediateRender),this.staggerTo(c,f,m,x,h,g,b)},i.render=function(c,f,r){var m=this._time,x=this._dirty?this.totalDuration():this._tDur,h=this._dur,g=c<=0?0:Ze(c),b=this._zTime<0!=c<0&&(this._initted||!h),w,_,N,S,T,j,C,A,k,G,L,M;if(this!==We&&g>x&&c>=0&&(g=x),g!==this._tTime||r||b){if(m!==this._time&&h&&(g+=this._time-m,c+=this._time-m),w=g,k=this._start,A=this._ts,j=!A,b&&(h||(m=this._zTime),(c||!f)&&(this._zTime=c)),this._repeat){if(L=this._yoyo,T=h+this._rDelay,this._repeat<-1&&c<0)return this.totalTime(T*100+c,f,r);if(w=Ze(g%T),g===x?(S=this._repeat,w=h):(G=Ze(g/T),S=~~G,S&&S===G&&(w=h,S--),w>h&&(w=h)),G=zi(this._tTime,T),!m&&this._tTime&&G!==S&&this._tTime-G*T-this._dur<=0&&(G=S),L&&S&1&&(w=h-w,M=1),S!==G&&!this._lock){var E=L&&G&1,D=E===(L&&S&1);if(S<G&&(E=!E),m=E?0:g%h?h:g,this._lock=1,this.render(m||(M?0:Ze(S*T)),f,!h)._lock=0,this._tTime=g,!f&&this.parent&&Jt(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,G=S),m&&m!==this._time||j!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,x=this._tDur,D&&(this._lock=2,m=E?h:-1e-4,this.render(m,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!j)return this;Vx(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(C=dS(this,Ze(m),Ze(w)),C&&(g-=w-(w=C._start))),this._tTime=g,this._time=w,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=c,m=0),!m&&g&&h&&!f&&!G&&(Jt(this,"onStart"),this._tTime!==g))return this;if(w>=m&&c>=0)for(_=this._first;_;){if(N=_._next,(_._act||w>=_._start)&&_._ts&&C!==_){if(_.parent!==this)return this.render(c,f,r);if(_.render(_._ts>0?(w-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(w-_._start)*_._ts,f,r),w!==this._time||!this._ts&&!j){C=0,N&&(g+=this._zTime=-Ie);break}}_=N}else{_=this._last;for(var F=c<0?c:w;_;){if(N=_._prev,(_._act||F<=_._end)&&_._ts&&C!==_){if(_.parent!==this)return this.render(c,f,r);if(_.render(_._ts>0?(F-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(F-_._start)*_._ts,f,r||bt&&Dd(_)),w!==this._time||!this._ts&&!j){C=0,N&&(g+=this._zTime=F?-Ie:Ie);break}}_=N}}if(C&&!f&&(this.pause(),C.render(w>=m?0:-Ie)._zTime=w>=m?1:-1,this._ts))return this._start=k,Qs(this),this.render(c,f,r);this._onUpdate&&!f&&Jt(this,"onUpdate",!0),(g===x&&this._tTime>=this.totalDuration()||!g&&m)&&(k===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((c||!h)&&(g===x&&this._ts>0||!g&&this._ts<0)&&Pn(this,1),!f&&!(c<0&&!m)&&(g||m||!x)&&(Jt(this,g===x&&c>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<x&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(c,f){var r=this;if(cn(f)||(f=ma(this,f,c)),!(c instanceof Jr)){if(Nt(c))return c.forEach(function(m){return r.add(m,f)}),this;if(dt(c))return this.addLabel(c,f);if($e(c))c=ot.delayedCall(0,c);else return this}return this!==c?za(this,c,f):this},i.getChildren=function(c,f,r,m){c===void 0&&(c=!0),f===void 0&&(f=!0),r===void 0&&(r=!0),m===void 0&&(m=-pa);for(var x=[],h=this._first;h;)h._start>=m&&(h instanceof ot?f&&x.push(h):(r&&x.push(h),c&&x.push.apply(x,h.getChildren(!0,f,r)))),h=h._next;return x},i.getById=function(c){for(var f=this.getChildren(1,1,1),r=f.length;r--;)if(f[r].vars.id===c)return f[r]},i.remove=function(c){return dt(c)?this.removeLabel(c):$e(c)?this.killTweensOf(c):(c.parent===this&&Ks(this,c),c===this._recent&&(this._recent=this._last),Sl(this))},i.totalTime=function(c,f){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ze(Qt.time-(this._ts>0?c/this._ts:(this.totalDuration()-c)/-this._ts))),o.prototype.totalTime.call(this,c,f),this._forcing=0,this):this._tTime},i.addLabel=function(c,f){return this.labels[c]=ma(this,f),this},i.removeLabel=function(c){return delete this.labels[c],this},i.addPause=function(c,f,r){var m=ot.delayedCall(0,f||Wr,r);return m.data="isPause",this._hasPause=1,za(this,m,ma(this,c))},i.removePause=function(c){var f=this._first;for(c=ma(this,c);f;)f._start===c&&f.data==="isPause"&&Pn(f),f=f._next},i.killTweensOf=function(c,f,r){for(var m=this.getTweensOf(c,r),x=m.length;x--;)Fn!==m[x]&&m[x].kill(c,f);return this},i.getTweensOf=function(c,f){for(var r=[],m=ha(c),x=this._first,h=cn(f),g;x;)x instanceof ot?iS(x._targets,m)&&(h?(!Fn||x._initted&&x._ts)&&x.globalTime(0)<=f&&x.globalTime(x.totalDuration())>f:!f||x.isActive())&&r.push(x):(g=x.getTweensOf(m,f)).length&&r.push.apply(r,g),x=x._next;return r},i.tweenTo=function(c,f){f=f||{};var r=this,m=ma(r,c),x=f,h=x.startAt,g=x.onStart,b=x.onStartParams,w=x.immediateRender,_,N=ot.to(r,aa({ease:f.ease||"none",lazy:!1,immediateRender:!1,time:m,overwrite:"auto",duration:f.duration||Math.abs((m-(h&&"time"in h?h.time:r._time))/r.timeScale())||Ie,onStart:function(){if(r.pause(),!_){var T=f.duration||Math.abs((m-(h&&"time"in h?h.time:r._time))/r.timeScale());N._dur!==T&&ki(N,T,0,1).render(N._time,!0,!0),_=1}g&&g.apply(N,b||[])}},f));return w?N.render(0):N},i.tweenFromTo=function(c,f,r){return this.tweenTo(f,aa({startAt:{time:ma(this,c)}},r))},i.recent=function(){return this._recent},i.nextLabel=function(c){return c===void 0&&(c=this._time),Dg(this,ma(this,c))},i.previousLabel=function(c){return c===void 0&&(c=this._time),Dg(this,ma(this,c),1)},i.currentLabel=function(c){return arguments.length?this.seek(c,!0):this.previousLabel(this._time+Ie)},i.shiftChildren=function(c,f,r){r===void 0&&(r=0);var m=this._first,x=this.labels,h;for(c=Ze(c);m;)m._start>=r&&(m._start+=c,m._end+=c),m=m._next;if(f)for(h in x)x[h]>=r&&(x[h]+=c);return Sl(this)},i.invalidate=function(c){var f=this._first;for(this._lock=0;f;)f.invalidate(c),f=f._next;return o.prototype.invalidate.call(this,c)},i.clear=function(c){c===void 0&&(c=!0);for(var f=this._first,r;f;)r=f._next,this.remove(f),f=r;return this._dp&&(this._time=this._tTime=this._pTime=0),c&&(this.labels={}),Sl(this)},i.totalDuration=function(c){var f=0,r=this,m=r._last,x=pa,h,g,b;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-c:c));if(r._dirty){for(b=r.parent;m;)h=m._prev,m._dirty&&m.totalDuration(),g=m._start,g>x&&r._sort&&m._ts&&!r._lock?(r._lock=1,za(r,m,g-m._delay,1)._lock=0):x=g,g<0&&m._ts&&(f-=g,(!b&&!r._dp||b&&b.smoothChildTiming)&&(r._start+=Ze(g/r._ts),r._time-=g,r._tTime-=g),r.shiftChildren(-g,!1,-1/0),x=0),m._end>f&&m._ts&&(f=m._end),m=h;ki(r,r===We&&r._time>f?r._time:f,1,1),r._dirty=0}return r._tDur},a.updateRoot=function(c){if(We._ts&&(Ax(We,Hs(c,We)),wx=Qt.frame),Qt.frame>=Tg){Tg+=ea.autoSleep||120;var f=We._first;if((!f||!f._ts)&&ea.autoSleep&&Qt._listeners.length<2){for(;f&&!f._ts;)f=f._next;f||Qt.sleep()}}},a})(Jr);aa(Tt.prototype,{_lock:0,_hasPause:0,_forcing:0});var TS=function(a,i,l,c,f,r,m){var x=new Ft(this._pt,a,i,0,1,$x,null,f),h=0,g=0,b,w,_,N,S,T,j,C;for(x.b=l,x.e=c,l+="",c+="",(j=~c.indexOf("random("))&&(c=Kr(c)),r&&(C=[l,c],r(C,a,i),l=C[0],c=C[1]),w=l.match(Lf)||[];b=Lf.exec(c);)N=b[0],S=c.substring(h,b.index),_?_=(_+1)%5:S.substr(-5)==="rgba("&&(_=1),N!==w[g++]&&(T=parseFloat(w[g-1])||0,x._pt={_next:x._pt,p:S||g===1?S:",",s:T,c:N.charAt(1)==="="?Ni(T,N)-T:parseFloat(N)-T,m:_&&_<4?Math.round:0},h=Lf.lastIndex);return x.c=h<c.length?c.substring(h,c.length):"",x.fp=m,(bx.test(c)||j)&&(x.e=0),this._pt=x,x},zd=function(a,i,l,c,f,r,m,x,h,g){$e(c)&&(c=c(f||0,a,r));var b=a[i],w=l!=="get"?l:$e(b)?h?a[i.indexOf("set")||!$e(a["get"+i.substr(3)])?i:"get"+i.substr(3)](h):a[i]():b,_=$e(b)?h?zS:Qx:Ld,N;if(dt(c)&&(~c.indexOf("random(")&&(c=Kr(c)),c.charAt(1)==="="&&(N=Ni(w,c)+(At(w)||0),(N||N===0)&&(c=N))),!g||w!==c||md)return!isNaN(w*c)&&c!==""?(N=new Ft(this._pt,a,i,+w||0,c-(w||0),typeof b=="boolean"?LS:Jx,0,_),h&&(N.fp=h),m&&N.modifier(m,this,a),this._pt=N):(!b&&!(i in a)&&Td(i,c),TS.call(this,a,i,w,c,_,x||ea.stringFilter,h))},jS=function(a,i,l,c,f){if($e(a)&&(a=qr(a,f,i,l,c)),!La(a)||a.style&&a.nodeType||Nt(a)||xx(a))return dt(a)?qr(a,f,i,l,c):a;var r={},m;for(m in a)r[m]=qr(a[m],f,i,l,c);return r},Zx=function(a,i,l,c,f,r){var m,x,h,g;if(Kt[a]&&(m=new Kt[a]).init(f,m.rawVars?i[a]:jS(i[a],c,f,r,l),l,c,r)!==!1&&(l._pt=x=new Ft(l._pt,f,a,0,1,m.render,m,0,m.priority),l!==wi))for(h=l._ptLookup[l._targets.indexOf(f)],g=m._props.length;g--;)h[m._props[g]]=x;return m},Fn,md,kd=function o(a,i,l){var c=a.vars,f=c.ease,r=c.startAt,m=c.immediateRender,x=c.lazy,h=c.onUpdate,g=c.runBackwards,b=c.yoyoEase,w=c.keyframes,_=c.autoRevert,N=a._dur,S=a._startAt,T=a._targets,j=a.parent,C=j&&j.data==="nested"?j.vars.targets:T,A=a._overwrite==="auto"&&!Cd,k=a.timeline,G,L,M,E,D,F,V,$,Q,te,le,U,W;if(k&&(!w||!f)&&(f="none"),a._ease=_l(f,Ei.ease),a._yEase=b?qx(_l(b===!0?f:b,Ei.ease)):0,b&&a._yoyo&&!a._repeat&&(b=a._yEase,a._yEase=a._ease,a._ease=b),a._from=!k&&!!c.runBackwards,!k||w&&!c.stagger){if($=T[0]?yl(T[0]).harness:0,U=$&&c[$.prop],G=Us(c,jd),S&&(S._zTime<0&&S.progress(1),i<0&&g&&m&&!_?S.render(-1,!0):S.revert(g&&N?Ls:nS),S._lazy=0),r){if(Pn(a._startAt=ot.set(T,aa({data:"isStart",overwrite:!1,parent:j,immediateRender:!0,lazy:!S&&Bt(x),startAt:null,delay:0,onUpdate:h&&function(){return Jt(a,"onUpdate")},stagger:0},r))),a._startAt._dp=0,a._startAt._sat=a,i<0&&(bt||!m&&!_)&&a._startAt.revert(Ls),m&&N&&i<=0&&l<=0){i&&(a._zTime=i);return}}else if(g&&N&&!S){if(i&&(m=!1),M=aa({overwrite:!1,data:"isFromStart",lazy:m&&!S&&Bt(x),immediateRender:m,stagger:0,parent:j},G),U&&(M[$.prop]=U),Pn(a._startAt=ot.set(T,M)),a._startAt._dp=0,a._startAt._sat=a,i<0&&(bt?a._startAt.revert(Ls):a._startAt.render(-1,!0)),a._zTime=i,!m)o(a._startAt,Ie,Ie);else if(!i)return}for(a._pt=a._ptCache=0,x=N&&Bt(x)||x&&!N,L=0;L<T.length;L++){if(D=T[L],V=D._gsap||Ed(T)[L]._gsap,a._ptLookup[L]=te={},od[V.id]&&Un.length&&Is(),le=C===T?L:C.indexOf(D),$&&(Q=new $).init(D,U||G,a,le,C)!==!1&&(a._pt=E=new Ft(a._pt,D,Q.name,0,1,Q.render,Q,0,Q.priority),Q._props.forEach(function(re){te[re]=E}),Q.priority&&(F=1)),!$||U)for(M in G)Kt[M]&&(Q=Zx(M,G,a,le,D,C))?Q.priority&&(F=1):te[M]=E=zd.call(a,D,M,"get",G[M],le,C,0,c.stringFilter);a._op&&a._op[L]&&a.kill(D,a._op[L]),A&&a._pt&&(Fn=a,We.killTweensOf(D,te,a.globalTime(i)),W=!a.parent,Fn=0),a._pt&&x&&(od[V.id]=1)}F&&e1(a),a._onInit&&a._onInit(a)}a._onUpdate=h,a._initted=(!a._op||a._pt)&&!W,w&&i<=0&&k.render(pa,!0,!0)},MS=function(a,i,l,c,f,r,m,x){var h=(a._pt&&a._ptCache||(a._ptCache={}))[i],g,b,w,_;if(!h)for(h=a._ptCache[i]=[],w=a._ptLookup,_=a._targets.length;_--;){if(g=w[_][i],g&&g.d&&g.d._pt)for(g=g.d._pt;g&&g.p!==i&&g.fp!==i;)g=g._next;if(!g)return md=1,a.vars[i]="+=0",kd(a,m),md=0,x?Zr(i+" not eligible for reset"):1;h.push(g)}for(_=h.length;_--;)b=h[_],g=b._pt||b,g.s=(c||c===0)&&!f?c:g.s+(c||0)+r*g.c,g.c=l-g.s,b.e&&(b.e=at(l)+At(b.e)),b.b&&(b.b=g.s+At(b.b))},ES=function(a,i){var l=a[0]?yl(a[0]).harness:0,c=l&&l.aliases,f,r,m,x;if(!c)return i;f=Di({},i);for(r in c)if(r in f)for(x=c[r].split(","),m=x.length;m--;)f[x[m]]=f[r];return f},DS=function(a,i,l,c){var f=i.ease||c||"power1.inOut",r,m;if(Nt(i))m=l[a]||(l[a]=[]),i.forEach(function(x,h){return m.push({t:h/(i.length-1)*100,v:x,e:f})});else for(r in i)m=l[r]||(l[r]=[]),r==="ease"||m.push({t:parseFloat(a),v:i[r],e:f})},qr=function(a,i,l,c,f){return $e(a)?a.call(i,l,c,f):dt(a)&&~a.indexOf("random(")?Kr(a):a},Wx=Md+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Kx={};Ot(Wx+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Kx[o]=1});var ot=(function(o){hx(a,o);function a(l,c,f,r){var m;typeof c=="number"&&(f.duration=c,c=f,f=null),m=o.call(this,r?c:Hr(c))||this;var x=m.vars,h=x.duration,g=x.delay,b=x.immediateRender,w=x.stagger,_=x.overwrite,N=x.keyframes,S=x.defaults,T=x.scrollTrigger,j=x.yoyoEase,C=c.parent||We,A=(Nt(l)||xx(l)?cn(l[0]):"length"in c)?[l]:ha(l),k,G,L,M,E,D,F,V;if(m._targets=A.length?Ed(A):Zr("GSAP target "+l+" not found. https://gsap.com",!ea.nullTargetWarn)||[],m._ptLookup=[],m._overwrite=_,N||w||Ns(h)||Ns(g)){if(c=m.vars,k=m.timeline=new Tt({data:"nested",defaults:S||{},targets:C&&C.data==="nested"?C.vars.targets:A}),k.kill(),k.parent=k._dp=ln(m),k._start=0,w||Ns(h)||Ns(g)){if(M=A.length,F=w&&kx(w),La(w))for(E in w)~Wx.indexOf(E)&&(V||(V={}),V[E]=w[E]);for(G=0;G<M;G++)L=Us(c,Kx),L.stagger=0,j&&(L.yoyoEase=j),V&&Di(L,V),D=A[G],L.duration=+qr(h,ln(m),G,D,A),L.delay=(+qr(g,ln(m),G,D,A)||0)-m._delay,!w&&M===1&&L.delay&&(m._delay=g=L.delay,m._start+=g,L.delay=0),k.to(D,L,F?F(G,D,A):0),k._ease=Ne.none;k.duration()?h=g=0:m.timeline=0}else if(N){Hr(aa(k.vars.defaults,{ease:"none"})),k._ease=_l(N.ease||c.ease||"none");var $=0,Q,te,le;if(Nt(N))N.forEach(function(U){return k.to(A,U,">")}),k.duration();else{L={};for(E in N)E==="ease"||E==="easeEach"||DS(E,N[E],L,N.easeEach);for(E in L)for(Q=L[E].sort(function(U,W){return U.t-W.t}),$=0,G=0;G<Q.length;G++)te=Q[G],le={ease:te.e,duration:(te.t-(G?Q[G-1].t:0))/100*h},le[E]=te.v,k.to(A,le,$),$+=le.duration;k.duration()<h&&k.to({},{duration:h-k.duration()})}}h||m.duration(h=k.duration())}else m.timeline=0;return _===!0&&!Cd&&(Fn=ln(m),We.killTweensOf(A),Fn=0),za(C,ln(m),f),c.reversed&&m.reverse(),c.paused&&m.paused(!0),(b||!h&&!N&&m._start===Ze(C._time)&&Bt(b)&&cS(ln(m))&&C.data!=="nested")&&(m._tTime=-Ie,m.render(Math.max(0,-g)||0)),T&&Mx(ln(m),T),m}var i=a.prototype;return i.render=function(c,f,r){var m=this._time,x=this._tDur,h=this._dur,g=c<0,b=c>x-Ie&&!g?x:c<Ie?0:c,w,_,N,S,T,j,C,A,k;if(!h)fS(this,c,f,r);else if(b!==this._tTime||!c||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g||this._lazy){if(w=b,A=this.timeline,this._repeat){if(S=h+this._rDelay,this._repeat<-1&&g)return this.totalTime(S*100+c,f,r);if(w=Ze(b%S),b===x?(N=this._repeat,w=h):(T=Ze(b/S),N=~~T,N&&N===T?(w=h,N--):w>h&&(w=h)),j=this._yoyo&&N&1,j&&(k=this._yEase,w=h-w),T=zi(this._tTime,S),w===m&&!r&&this._initted&&N===T)return this._tTime=b,this;N!==T&&(A&&this._yEase&&Vx(A,j),this.vars.repeatRefresh&&!j&&!this._lock&&w!==S&&this._initted&&(this._lock=r=1,this.render(Ze(S*N),!0).invalidate()._lock=0))}if(!this._initted){if(Ex(this,g?c:w,r,f,b))return this._tTime=0,this;if(m!==this._time&&!(r&&this.vars.repeatRefresh&&N!==T))return this;if(h!==this._dur)return this.render(c,f,r)}if(this._tTime=b,this._time=w,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=C=(k||this._ease)(w/h),this._from&&(this.ratio=C=1-C),!m&&b&&!f&&!T&&(Jt(this,"onStart"),this._tTime!==b))return this;for(_=this._pt;_;)_.r(C,_.d),_=_._next;A&&A.render(c<0?c:A._dur*A._ease(w/this._dur),f,r)||this._startAt&&(this._zTime=c),this._onUpdate&&!f&&(g&&sd(this,c,f,r),Jt(this,"onUpdate")),this._repeat&&N!==T&&this.vars.onRepeat&&!f&&this.parent&&Jt(this,"onRepeat"),(b===this._tDur||!b)&&this._tTime===b&&(g&&!this._onUpdate&&sd(this,c,!0,!0),(c||!h)&&(b===this._tDur&&this._ts>0||!b&&this._ts<0)&&Pn(this,1),!f&&!(g&&!m)&&(b||m||j)&&(Jt(this,b===x?"onComplete":"onReverseComplete",!0),this._prom&&!(b<x&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(c){return(!c||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(c),o.prototype.invalidate.call(this,c)},i.resetTo=function(c,f,r,m,x){Qr||Qt.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),g;return this._initted||kd(this,h),g=this._ease(h/this._dur),MS(this,c,f,r,m,g,h,x)?this.resetTo(c,f,r,m,1):(Js(this,0),this.parent||Tx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(c,f){if(f===void 0&&(f="all"),!c&&(!f||f==="all"))return this._lazy=this._pt=0,this.parent?Gr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!bt),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(c,f,Fn&&Fn.vars.overwrite!==!0)._first||Gr(this),this.parent&&r!==this.timeline.totalDuration()&&ki(this,this._dur*this.timeline._tDur/r,0,1),this}var m=this._targets,x=c?ha(c):m,h=this._ptLookup,g=this._pt,b,w,_,N,S,T,j;if((!f||f==="all")&&oS(m,x))return f==="all"&&(this._pt=0),Gr(this);for(b=this._op=this._op||[],f!=="all"&&(dt(f)&&(S={},Ot(f,function(C){return S[C]=1}),f=S),f=ES(m,f)),j=m.length;j--;)if(~x.indexOf(m[j])){w=h[j],f==="all"?(b[j]=f,N=w,_={}):(_=b[j]=b[j]||{},N=f);for(S in N)T=w&&w[S],T&&((!("kill"in T.d)||T.d.kill(S)===!0)&&Ks(this,T,"_pt"),delete w[S]),_!=="all"&&(_[S]=1)}return this._initted&&!this._pt&&g&&Gr(this),this},a.to=function(c,f){return new a(c,f,arguments[2])},a.from=function(c,f){return Pr(1,arguments)},a.delayedCall=function(c,f,r,m){return new a(f,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:c,onComplete:f,onReverseComplete:f,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:m})},a.fromTo=function(c,f,r){return Pr(2,arguments)},a.set=function(c,f){return f.duration=0,f.repeatDelay||(f.repeat=0),new a(c,f)},a.killTweensOf=function(c,f,r){return We.killTweensOf(c,f,r)},a})(Jr);aa(ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ot("staggerTo,staggerFrom,staggerFromTo",function(o){ot[o]=function(){var a=new Tt,i=ud.call(arguments,0);return i.splice(o==="staggerFromTo"?5:4,0,0),a[o].apply(a,i)}});var Ld=function(a,i,l){return a[i]=l},Qx=function(a,i,l){return a[i](l)},zS=function(a,i,l,c){return a[i](c.fp,l)},kS=function(a,i,l){return a.setAttribute(i,l)},Bd=function(a,i){return $e(a[i])?Qx:Ad(a[i])&&a.setAttribute?kS:Ld},Jx=function(a,i){return i.set(i.t,i.p,Math.round((i.s+i.c*a)*1e6)/1e6,i)},LS=function(a,i){return i.set(i.t,i.p,!!(i.s+i.c*a),i)},$x=function(a,i){var l=i._pt,c="";if(!a&&i.b)c=i.b;else if(a===1&&i.e)c=i.e;else{for(;l;)c=l.p+(l.m?l.m(l.s+l.c*a):Math.round((l.s+l.c*a)*1e4)/1e4)+c,l=l._next;c+=i.c}i.set(i.t,i.p,c,i)},Od=function(a,i){for(var l=i._pt;l;)l.r(a,l.d),l=l._next},BS=function(a,i,l,c){for(var f=this._pt,r;f;)r=f._next,f.p===c&&f.modifier(a,i,l),f=r},OS=function(a){for(var i=this._pt,l,c;i;)c=i._next,i.p===a&&!i.op||i.op===a?Ks(this,i,"_pt"):i.dep||(l=1),i=c;return!l},FS=function(a,i,l,c){c.mSet(a,i,c.m.call(c.tween,l,c.mt),c)},e1=function(a){for(var i=a._pt,l,c,f,r;i;){for(l=i._next,c=f;c&&c.pr>i.pr;)c=c._next;(i._prev=c?c._prev:r)?i._prev._next=i:f=i,(i._next=c)?c._prev=i:r=i,i=l}a._pt=f},Ft=(function(){function o(i,l,c,f,r,m,x,h,g){this.t=l,this.s=f,this.c=r,this.p=c,this.r=m||Jx,this.d=x||this,this.set=h||Ld,this.pr=g||0,this._next=i,i&&(i._prev=this)}var a=o.prototype;return a.modifier=function(l,c,f){this.mSet=this.mSet||this.set,this.set=FS,this.m=l,this.mt=f,this.tween=c},o})();Ot(Md+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return jd[o]=1});ta.TweenMax=ta.TweenLite=ot;ta.TimelineLite=ta.TimelineMax=Tt;We=new Tt({sortChildren:!1,defaults:Ei,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ea.stringFilter=Px;var wl=[],Os={},GS=[],kg=0,IS=0,If=function(a){return(Os[a]||GS).map(function(i){return i()})},pd=function(){var a=Date.now(),i=[];a-kg>2&&(If("matchMediaInit"),wl.forEach(function(l){var c=l.queries,f=l.conditions,r,m,x,h;for(m in c)r=Da.matchMedia(c[m]).matches,r&&(x=1),r!==f[m]&&(f[m]=r,h=1);h&&(l.revert(),x&&i.push(l))}),If("matchMediaRevert"),i.forEach(function(l){return l.onMatch(l,function(c){return l.add(null,c)})}),kg=a,If("matchMedia"))},t1=(function(){function o(i,l){this.selector=l&&fd(l),this.data=[],this._r=[],this.isReverted=!1,this.id=IS++,i&&this.add(i)}var a=o.prototype;return a.add=function(l,c,f){$e(l)&&(f=c,c=l,l=$e);var r=this,m=function(){var h=Xe,g=r.selector,b;return h&&h!==r&&h.data.push(r),f&&(r.selector=fd(f)),Xe=r,b=c.apply(r,arguments),$e(b)&&r._r.push(b),Xe=h,r.selector=g,r.isReverted=!1,b};return r.last=m,l===$e?m(r,function(x){return r.add(null,x)}):l?r[l]=m:m},a.ignore=function(l){var c=Xe;Xe=null,l(this),Xe=c},a.getTweens=function(){var l=[];return this.data.forEach(function(c){return c instanceof o?l.push.apply(l,c.getTweens()):c instanceof ot&&!(c.parent&&c.parent.data==="nested")&&l.push(c)}),l},a.clear=function(){this._r.length=this.data.length=0},a.kill=function(l,c){var f=this;if(l?(function(){for(var m=f.getTweens(),x=f.data.length,h;x--;)h=f.data[x],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(g){return m.splice(m.indexOf(g),1)}));for(m.map(function(g){return{g:g._dur||g._delay||g._sat&&!g._sat.vars.immediateRender?g.globalTime(0):-1/0,t:g}}).sort(function(g,b){return b.g-g.g||-1/0}).forEach(function(g){return g.t.revert(l)}),x=f.data.length;x--;)h=f.data[x],h instanceof Tt?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof ot)&&h.revert&&h.revert(l);f._r.forEach(function(g){return g(l,f)}),f.isReverted=!0})():this.data.forEach(function(m){return m.kill&&m.kill()}),this.clear(),c)for(var r=wl.length;r--;)wl[r].id===this.id&&wl.splice(r,1)},a.revert=function(l){this.kill(l||{})},o})(),US=(function(){function o(i){this.contexts=[],this.scope=i,Xe&&Xe.data.push(this)}var a=o.prototype;return a.add=function(l,c,f){La(l)||(l={matches:l});var r=new t1(0,f||this.scope),m=r.conditions={},x,h,g;Xe&&!r.selector&&(r.selector=Xe.selector),this.contexts.push(r),c=r.add("onMatch",c),r.queries=l;for(h in l)h==="all"?g=1:(x=Da.matchMedia(l[h]),x&&(wl.indexOf(r)<0&&wl.push(r),(m[h]=x.matches)&&(g=1),x.addListener?x.addListener(pd):x.addEventListener("change",pd)));return g&&c(r,function(b){return r.add(null,b)}),this},a.revert=function(l){this.kill(l||{})},a.kill=function(l){this.contexts.forEach(function(c){return c.kill(l,!0)})},o})(),Ps={registerPlugin:function(){for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];i.forEach(function(c){return Ix(c)})},timeline:function(a){return new Tt(a)},getTweensOf:function(a,i){return We.getTweensOf(a,i)},getProperty:function(a,i,l,c){dt(a)&&(a=ha(a)[0]);var f=yl(a||{}).get,r=l?Rx:Nx;return l==="native"&&(l=""),a&&(i?r((Kt[i]&&Kt[i].get||f)(a,i,l,c)):function(m,x,h){return r((Kt[m]&&Kt[m].get||f)(a,m,x,h))})},quickSetter:function(a,i,l){if(a=ha(a),a.length>1){var c=a.map(function(g){return It.quickSetter(g,i,l)}),f=c.length;return function(g){for(var b=f;b--;)c[b](g)}}a=a[0]||{};var r=Kt[i],m=yl(a),x=m.harness&&(m.harness.aliases||{})[i]||i,h=r?function(g){var b=new r;wi._pt=0,b.init(a,l?g+l:g,wi,0,[a]),b.render(1,b),wi._pt&&Od(1,wi)}:m.set(a,x);return r?h:function(g){return h(a,x,l?g+l:g,m,1)}},quickTo:function(a,i,l){var c,f=It.to(a,aa((c={},c[i]="+=0.1",c.paused=!0,c.stagger=0,c),l||{})),r=function(x,h,g){return f.resetTo(i,x,h,g)};return r.tween=f,r},isTweening:function(a){return We.getTweensOf(a,!0).length>0},defaults:function(a){return a&&a.ease&&(a.ease=_l(a.ease,Ei.ease)),jg(Ei,a||{})},config:function(a){return jg(ea,a||{})},registerEffect:function(a){var i=a.name,l=a.effect,c=a.plugins,f=a.defaults,r=a.extendTimeline;(c||"").split(",").forEach(function(m){return m&&!Kt[m]&&!ta[m]&&Zr(i+" effect requires "+m+" plugin.")}),Bf[i]=function(m,x,h){return l(ha(m),aa(x||{},f),h)},r&&(Tt.prototype[i]=function(m,x,h){return this.add(Bf[i](m,La(x)?x:(h=x)&&{},this),h)})},registerEase:function(a,i){Ne[a]=_l(i)},parseEase:function(a,i){return arguments.length?_l(a,i):Ne},getById:function(a){return We.getById(a)},exportRoot:function(a,i){a===void 0&&(a={});var l=new Tt(a),c,f;for(l.smoothChildTiming=Bt(a.smoothChildTiming),We.remove(l),l._dp=0,l._time=l._tTime=We._time,c=We._first;c;)f=c._next,(i||!(!c._dur&&c instanceof ot&&c.vars.onComplete===c._targets[0]))&&za(l,c,c._start-c._delay),c=f;return za(We,l,0),l},context:function(a,i){return a?new t1(a,i):Xe},matchMedia:function(a){return new US(a)},matchMediaRefresh:function(){return wl.forEach(function(a){var i=a.conditions,l,c;for(c in i)i[c]&&(i[c]=!1,l=1);l&&a.revert()})||pd()},addEventListener:function(a,i){var l=Os[a]||(Os[a]=[]);~l.indexOf(i)||l.push(i)},removeEventListener:function(a,i){var l=Os[a],c=l&&l.indexOf(i);c>=0&&l.splice(c,1)},utils:{wrap:bS,wrapYoyo:yS,distribute:kx,random:Bx,snap:Lx,normalize:vS,getUnit:At,clamp:pS,splitColor:Ux,toArray:ha,selector:fd,mapRange:Fx,pipe:gS,unitize:xS,interpolate:SS,shuffle:zx},install:Sx,effects:Bf,ticker:Qt,updateRoot:Tt.updateRoot,plugins:Kt,globalTimeline:We,core:{PropTween:Ft,globals:_x,Tween:ot,Timeline:Tt,Animation:Jr,getCache:yl,_removeLinkedListItem:Ks,reverting:function(){return bt},context:function(a){return a&&Xe&&(Xe.data.push(a),a._ctx=Xe),Xe},suppressOverwrites:function(a){return Cd=a}}};Ot("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ps[o]=ot[o]});Qt.add(Tt.updateRoot);wi=Ps.to({},{duration:0});var HS=function(a,i){for(var l=a._pt;l&&l.p!==i&&l.op!==i&&l.fp!==i;)l=l._next;return l},PS=function(a,i){var l=a._targets,c,f,r;for(c in i)for(f=l.length;f--;)r=a._ptLookup[f][c],r&&(r=r.d)&&(r._pt&&(r=HS(r,c)),r&&r.modifier&&r.modifier(i[c],a,l[f],c))},Uf=function(a,i){return{name:a,headless:1,rawVars:1,init:function(c,f,r){r._onInit=function(m){var x,h;if(dt(f)&&(x={},Ot(f,function(g){return x[g]=1}),f=x),i){x={};for(h in f)x[h]=i(f[h]);f=x}PS(m,f)}}}},It=Ps.registerPlugin({name:"attr",init:function(a,i,l,c,f){var r,m,x;this.tween=l;for(r in i)x=a.getAttribute(r)||"",m=this.add(a,"setAttribute",(x||0)+"",i[r],c,f,0,0,r),m.op=r,m.b=x,this._props.push(r)},render:function(a,i){for(var l=i._pt;l;)bt?l.set(l.t,l.p,l.b,l):l.r(a,l.d),l=l._next}},{name:"endArray",headless:1,init:function(a,i){for(var l=i.length;l--;)this.add(a,l,a[l]||0,i[l],0,0,0,0,0,1)}},Uf("roundProps",dd),Uf("modifiers"),Uf("snap",Lx))||Ps;ot.version=Tt.version=It.version="3.14.2";yx=1;Nd()&&Li();Ne.Power0;Ne.Power1;Ne.Power2;Ne.Power3;Ne.Power4;Ne.Linear;Ne.Quad;Ne.Cubic;Ne.Quart;Ne.Quint;Ne.Strong;Ne.Elastic;Ne.Back;Ne.SteppedEase;Ne.Bounce;Ne.Sine;Ne.Expo;Ne.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Lg,Gn,Ri,Fd,bl,Bg,Gd,qS=function(){return typeof window<"u"},un={},vl=180/Math.PI,Ti=Math.PI/180,gi=Math.atan2,Og=1e8,Id=/([A-Z])/g,VS=/(left|right|width|margin|padding|x)/i,YS=/[\s,\(]\S/,ka={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hd=function(a,i){return i.set(i.t,i.p,Math.round((i.s+i.c*a)*1e4)/1e4+i.u,i)},XS=function(a,i){return i.set(i.t,i.p,a===1?i.e:Math.round((i.s+i.c*a)*1e4)/1e4+i.u,i)},ZS=function(a,i){return i.set(i.t,i.p,a?Math.round((i.s+i.c*a)*1e4)/1e4+i.u:i.b,i)},WS=function(a,i){return i.set(i.t,i.p,a===1?i.e:a?Math.round((i.s+i.c*a)*1e4)/1e4+i.u:i.b,i)},KS=function(a,i){var l=i.s+i.c*a;i.set(i.t,i.p,~~(l+(l<0?-.5:.5))+i.u,i)},a1=function(a,i){return i.set(i.t,i.p,a?i.e:i.b,i)},n1=function(a,i){return i.set(i.t,i.p,a!==1?i.b:i.e,i)},QS=function(a,i,l){return a.style[i]=l},JS=function(a,i,l){return a.style.setProperty(i,l)},$S=function(a,i,l){return a._gsap[i]=l},e3=function(a,i,l){return a._gsap.scaleX=a._gsap.scaleY=l},t3=function(a,i,l,c,f){var r=a._gsap;r.scaleX=r.scaleY=l,r.renderTransform(f,r)},a3=function(a,i,l,c,f){var r=a._gsap;r[i]=l,r.renderTransform(f,r)},Ke="transform",Gt=Ke+"Origin",n3=function o(a,i){var l=this,c=this.target,f=c.style,r=c._gsap;if(a in un&&f){if(this.tfm=this.tfm||{},a!=="transform")a=ka[a]||a,~a.indexOf(",")?a.split(",").forEach(function(m){return l.tfm[m]=rn(c,m)}):this.tfm[a]=r.x?r[a]:rn(c,a),a===Gt&&(this.tfm.zOrigin=r.zOrigin);else return ka.transform.split(",").forEach(function(m){return o.call(l,m,i)});if(this.props.indexOf(Ke)>=0)return;r.svg&&(this.svgo=c.getAttribute("data-svg-origin"),this.props.push(Gt,i,"")),a=Ke}(f||i)&&this.props.push(a,i,f[a])},l1=function(a){a.translate&&(a.removeProperty("translate"),a.removeProperty("scale"),a.removeProperty("rotate"))},l3=function(){var a=this.props,i=this.target,l=i.style,c=i._gsap,f,r;for(f=0;f<a.length;f+=3)a[f+1]?a[f+1]===2?i[a[f]](a[f+2]):i[a[f]]=a[f+2]:a[f+2]?l[a[f]]=a[f+2]:l.removeProperty(a[f].substr(0,2)==="--"?a[f]:a[f].replace(Id,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)c[r]=this.tfm[r];c.svg&&(c.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),f=Gd(),(!f||!f.isStart)&&!l[Ke]&&(l1(l),c.zOrigin&&l[Gt]&&(l[Gt]+=" "+c.zOrigin+"px",c.zOrigin=0,c.renderTransform()),c.uncache=1)}},i1=function(a,i){var l={target:a,props:[],revert:l3,save:n3};return a._gsap||It.core.getCache(a),i&&a.style&&a.nodeType&&i.split(",").forEach(function(c){return l.save(c)}),l},r1,gd=function(a,i){var l=Gn.createElementNS?Gn.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),a):Gn.createElement(a);return l&&l.style?l:Gn.createElement(a)},$t=function o(a,i,l){var c=getComputedStyle(a);return c[i]||c.getPropertyValue(i.replace(Id,"-$1").toLowerCase())||c.getPropertyValue(i)||!l&&o(a,Bi(i)||i,1)||""},Fg="O,Moz,ms,Ms,Webkit".split(","),Bi=function(a,i,l){var c=i||bl,f=c.style,r=5;if(a in f&&!l)return a;for(a=a.charAt(0).toUpperCase()+a.substr(1);r--&&!(Fg[r]+a in f););return r<0?null:(r===3?"ms":r>=0?Fg[r]:"")+a},xd=function(){qS()&&window.document&&(Lg=window,Gn=Lg.document,Ri=Gn.documentElement,bl=gd("div")||{style:{}},gd("div"),Ke=Bi(Ke),Gt=Ke+"Origin",bl.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",r1=!!Bi("perspective"),Gd=It.core.reverting,Fd=1)},Gg=function(a){var i=a.ownerSVGElement,l=gd("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),c=a.cloneNode(!0),f;c.style.display="block",l.appendChild(c),Ri.appendChild(l);try{f=c.getBBox()}catch{}return l.removeChild(c),Ri.removeChild(l),f},Ig=function(a,i){for(var l=i.length;l--;)if(a.hasAttribute(i[l]))return a.getAttribute(i[l])},o1=function(a){var i,l;try{i=a.getBBox()}catch{i=Gg(a),l=1}return i&&(i.width||i.height)||l||(i=Gg(a)),i&&!i.width&&!i.x&&!i.y?{x:+Ig(a,["x","cx","x1"])||0,y:+Ig(a,["y","cy","y1"])||0,width:0,height:0}:i},s1=function(a){return!!(a.getCTM&&(!a.parentNode||a.ownerSVGElement)&&o1(a))},qn=function(a,i){if(i){var l=a.style,c;i in un&&i!==Gt&&(i=Ke),l.removeProperty?(c=i.substr(0,2),(c==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),l.removeProperty(c==="--"?i:i.replace(Id,"-$1").toLowerCase())):l.removeAttribute(i)}},In=function(a,i,l,c,f,r){var m=new Ft(a._pt,i,l,0,1,r?n1:a1);return a._pt=m,m.b=c,m.e=f,a._props.push(l),m},Ug={deg:1,rad:1,turn:1},i3={grid:1,flex:1},Vn=function o(a,i,l,c){var f=parseFloat(l)||0,r=(l+"").trim().substr((f+"").length)||"px",m=bl.style,x=VS.test(i),h=a.tagName.toLowerCase()==="svg",g=(h?"client":"offset")+(x?"Width":"Height"),b=100,w=c==="px",_=c==="%",N,S,T,j;if(c===r||!f||Ug[c]||Ug[r])return f;if(r!=="px"&&!w&&(f=o(a,i,l,"px")),j=a.getCTM&&s1(a),(_||r==="%")&&(un[i]||~i.indexOf("adius")))return N=j?a.getBBox()[x?"width":"height"]:a[g],at(_?f/N*b:f/100*N);if(m[x?"width":"height"]=b+(w?r:c),S=c!=="rem"&&~i.indexOf("adius")||c==="em"&&a.appendChild&&!h?a:a.parentNode,j&&(S=(a.ownerSVGElement||{}).parentNode),(!S||S===Gn||!S.appendChild)&&(S=Gn.body),T=S._gsap,T&&_&&T.width&&x&&T.time===Qt.time&&!T.uncache)return at(f/T.width*b);if(_&&(i==="height"||i==="width")){var C=a.style[i];a.style[i]=b+c,N=a[g],C?a.style[i]=C:qn(a,i)}else(_||r==="%")&&!i3[$t(S,"display")]&&(m.position=$t(a,"position")),S===a&&(m.position="static"),S.appendChild(bl),N=bl[g],S.removeChild(bl),m.position="absolute";return x&&_&&(T=yl(S),T.time=Qt.time,T.width=S[g]),at(w?N*f/b:N&&f?b/N*f:0)},rn=function(a,i,l,c){var f;return Fd||xd(),i in ka&&i!=="transform"&&(i=ka[i],~i.indexOf(",")&&(i=i.split(",")[0])),un[i]&&i!=="transform"?(f=eo(a,c),f=i!=="transformOrigin"?f[i]:f.svg?f.origin:Vs($t(a,Gt))+" "+f.zOrigin+"px"):(f=a.style[i],(!f||f==="auto"||c||~(f+"").indexOf("calc("))&&(f=qs[i]&&qs[i](a,i,l)||$t(a,i)||Cx(a,i)||(i==="opacity"?1:0))),l&&!~(f+"").trim().indexOf(" ")?Vn(a,i,f,l)+l:f},r3=function(a,i,l,c){if(!l||l==="none"){var f=Bi(i,a,1),r=f&&$t(a,f,1);r&&r!==l?(i=f,l=r):i==="borderColor"&&(l=$t(a,"borderTopColor"))}var m=new Ft(this._pt,a.style,i,0,1,$x),x=0,h=0,g,b,w,_,N,S,T,j,C,A,k,G;if(m.b=l,m.e=c,l+="",c+="",c.substring(0,6)==="var(--"&&(c=$t(a,c.substring(4,c.indexOf(")")))),c==="auto"&&(S=a.style[i],a.style[i]=c,c=$t(a,i)||c,S?a.style[i]=S:qn(a,i)),g=[l,c],Px(g),l=g[0],c=g[1],w=l.match(_i)||[],G=c.match(_i)||[],G.length){for(;b=_i.exec(c);)T=b[0],C=c.substring(x,b.index),N?N=(N+1)%5:(C.substr(-5)==="rgba("||C.substr(-5)==="hsla(")&&(N=1),T!==(S=w[h++]||"")&&(_=parseFloat(S)||0,k=S.substr((_+"").length),T.charAt(1)==="="&&(T=Ni(_,T)+k),j=parseFloat(T),A=T.substr((j+"").length),x=_i.lastIndex-A.length,A||(A=A||ea.units[i]||k,x===c.length&&(c+=A,m.e+=A)),k!==A&&(_=Vn(a,i,S,A)||0),m._pt={_next:m._pt,p:C||h===1?C:",",s:_,c:j-_,m:N&&N<4||i==="zIndex"?Math.round:0});m.c=x<c.length?c.substring(x,c.length):""}else m.r=i==="display"&&c==="none"?n1:a1;return bx.test(c)&&(m.e=0),this._pt=m,m},Hg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},o3=function(a){var i=a.split(" "),l=i[0],c=i[1]||"50%";return(l==="top"||l==="bottom"||c==="left"||c==="right")&&(a=l,l=c,c=a),i[0]=Hg[l]||l,i[1]=Hg[c]||c,i.join(" ")},s3=function(a,i){if(i.tween&&i.tween._time===i.tween._dur){var l=i.t,c=l.style,f=i.u,r=l._gsap,m,x,h;if(f==="all"||f===!0)c.cssText="",x=1;else for(f=f.split(","),h=f.length;--h>-1;)m=f[h],un[m]&&(x=1,m=m==="transformOrigin"?Gt:Ke),qn(l,m);x&&(qn(l,Ke),r&&(r.svg&&l.removeAttribute("transform"),c.scale=c.rotate=c.translate="none",eo(l,1),r.uncache=1,l1(c)))}},qs={clearProps:function(a,i,l,c,f){if(f.data!=="isFromStart"){var r=a._pt=new Ft(a._pt,i,l,0,0,s3);return r.u=c,r.pr=-10,r.tween=f,a._props.push(l),1}}},$r=[1,0,0,1,0,0],c1={},u1=function(a){return a==="matrix(1, 0, 0, 1, 0, 0)"||a==="none"||!a},Pg=function(a){var i=$t(a,Ke);return u1(i)?$r:i.substr(7).match(vx).map(at)},Ud=function(a,i){var l=a._gsap||yl(a),c=a.style,f=Pg(a),r,m,x,h;return l.svg&&a.getAttribute("transform")?(x=a.transform.baseVal.consolidate().matrix,f=[x.a,x.b,x.c,x.d,x.e,x.f],f.join(",")==="1,0,0,1,0,0"?$r:f):(f===$r&&!a.offsetParent&&a!==Ri&&!l.svg&&(x=c.display,c.display="block",r=a.parentNode,(!r||!a.offsetParent&&!a.getBoundingClientRect().width)&&(h=1,m=a.nextElementSibling,Ri.appendChild(a)),f=Pg(a),x?c.display=x:qn(a,"display"),h&&(m?r.insertBefore(a,m):r?r.appendChild(a):Ri.removeChild(a))),i&&f.length>6?[f[0],f[1],f[4],f[5],f[12],f[13]]:f)},vd=function(a,i,l,c,f,r){var m=a._gsap,x=f||Ud(a,!0),h=m.xOrigin||0,g=m.yOrigin||0,b=m.xOffset||0,w=m.yOffset||0,_=x[0],N=x[1],S=x[2],T=x[3],j=x[4],C=x[5],A=i.split(" "),k=parseFloat(A[0])||0,G=parseFloat(A[1])||0,L,M,E,D;l?x!==$r&&(M=_*T-N*S)&&(E=k*(T/M)+G*(-S/M)+(S*C-T*j)/M,D=k*(-N/M)+G*(_/M)-(_*C-N*j)/M,k=E,G=D):(L=o1(a),k=L.x+(~A[0].indexOf("%")?k/100*L.width:k),G=L.y+(~(A[1]||A[0]).indexOf("%")?G/100*L.height:G)),c||c!==!1&&m.smooth?(j=k-h,C=G-g,m.xOffset=b+(j*_+C*S)-j,m.yOffset=w+(j*N+C*T)-C):m.xOffset=m.yOffset=0,m.xOrigin=k,m.yOrigin=G,m.smooth=!!c,m.origin=i,m.originIsAbsolute=!!l,a.style[Gt]="0px 0px",r&&(In(r,m,"xOrigin",h,k),In(r,m,"yOrigin",g,G),In(r,m,"xOffset",b,m.xOffset),In(r,m,"yOffset",w,m.yOffset)),a.setAttribute("data-svg-origin",k+" "+G)},eo=function(a,i){var l=a._gsap||new Xx(a);if("x"in l&&!i&&!l.uncache)return l;var c=a.style,f=l.scaleX<0,r="px",m="deg",x=getComputedStyle(a),h=$t(a,Gt)||"0",g,b,w,_,N,S,T,j,C,A,k,G,L,M,E,D,F,V,$,Q,te,le,U,W,re,ce,me,B,Y,ae,ee,ne;return g=b=w=S=T=j=C=A=k=0,_=N=1,l.svg=!!(a.getCTM&&s1(a)),x.translate&&((x.translate!=="none"||x.scale!=="none"||x.rotate!=="none")&&(c[Ke]=(x.translate!=="none"?"translate3d("+(x.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(x.rotate!=="none"?"rotate("+x.rotate+") ":"")+(x.scale!=="none"?"scale("+x.scale.split(" ").join(",")+") ":"")+(x[Ke]!=="none"?x[Ke]:"")),c.scale=c.rotate=c.translate="none"),M=Ud(a,l.svg),l.svg&&(l.uncache?(re=a.getBBox(),h=l.xOrigin-re.x+"px "+(l.yOrigin-re.y)+"px",W=""):W=!i&&a.getAttribute("data-svg-origin"),vd(a,W||h,!!W||l.originIsAbsolute,l.smooth!==!1,M)),G=l.xOrigin||0,L=l.yOrigin||0,M!==$r&&(V=M[0],$=M[1],Q=M[2],te=M[3],g=le=M[4],b=U=M[5],M.length===6?(_=Math.sqrt(V*V+$*$),N=Math.sqrt(te*te+Q*Q),S=V||$?gi($,V)*vl:0,C=Q||te?gi(Q,te)*vl+S:0,C&&(N*=Math.abs(Math.cos(C*Ti))),l.svg&&(g-=G-(G*V+L*Q),b-=L-(G*$+L*te))):(ne=M[6],ae=M[7],me=M[8],B=M[9],Y=M[10],ee=M[11],g=M[12],b=M[13],w=M[14],E=gi(ne,Y),T=E*vl,E&&(D=Math.cos(-E),F=Math.sin(-E),W=le*D+me*F,re=U*D+B*F,ce=ne*D+Y*F,me=le*-F+me*D,B=U*-F+B*D,Y=ne*-F+Y*D,ee=ae*-F+ee*D,le=W,U=re,ne=ce),E=gi(-Q,Y),j=E*vl,E&&(D=Math.cos(-E),F=Math.sin(-E),W=V*D-me*F,re=$*D-B*F,ce=Q*D-Y*F,ee=te*F+ee*D,V=W,$=re,Q=ce),E=gi($,V),S=E*vl,E&&(D=Math.cos(E),F=Math.sin(E),W=V*D+$*F,re=le*D+U*F,$=$*D-V*F,U=U*D-le*F,V=W,le=re),T&&Math.abs(T)+Math.abs(S)>359.9&&(T=S=0,j=180-j),_=at(Math.sqrt(V*V+$*$+Q*Q)),N=at(Math.sqrt(U*U+ne*ne)),E=gi(le,U),C=Math.abs(E)>2e-4?E*vl:0,k=ee?1/(ee<0?-ee:ee):0),l.svg&&(W=a.getAttribute("transform"),l.forceCSS=a.setAttribute("transform","")||!u1($t(a,Ke)),W&&a.setAttribute("transform",W))),Math.abs(C)>90&&Math.abs(C)<270&&(f?(_*=-1,C+=S<=0?180:-180,S+=S<=0?180:-180):(N*=-1,C+=C<=0?180:-180)),i=i||l.uncache,l.x=g-((l.xPercent=g&&(!i&&l.xPercent||(Math.round(a.offsetWidth/2)===Math.round(-g)?-50:0)))?a.offsetWidth*l.xPercent/100:0)+r,l.y=b-((l.yPercent=b&&(!i&&l.yPercent||(Math.round(a.offsetHeight/2)===Math.round(-b)?-50:0)))?a.offsetHeight*l.yPercent/100:0)+r,l.z=w+r,l.scaleX=at(_),l.scaleY=at(N),l.rotation=at(S)+m,l.rotationX=at(T)+m,l.rotationY=at(j)+m,l.skewX=C+m,l.skewY=A+m,l.transformPerspective=k+r,(l.zOrigin=parseFloat(h.split(" ")[2])||!i&&l.zOrigin||0)&&(c[Gt]=Vs(h)),l.xOffset=l.yOffset=0,l.force3D=ea.force3D,l.renderTransform=l.svg?u3:r1?f1:c3,l.uncache=0,l},Vs=function(a){return(a=a.split(" "))[0]+" "+a[1]},Hf=function(a,i,l){var c=At(i);return at(parseFloat(i)+parseFloat(Vn(a,"x",l+"px",c)))+c},c3=function(a,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,f1(a,i)},hl="0deg",Br="0px",gl=") ",f1=function(a,i){var l=i||this,c=l.xPercent,f=l.yPercent,r=l.x,m=l.y,x=l.z,h=l.rotation,g=l.rotationY,b=l.rotationX,w=l.skewX,_=l.skewY,N=l.scaleX,S=l.scaleY,T=l.transformPerspective,j=l.force3D,C=l.target,A=l.zOrigin,k="",G=j==="auto"&&a&&a!==1||j===!0;if(A&&(b!==hl||g!==hl)){var L=parseFloat(g)*Ti,M=Math.sin(L),E=Math.cos(L),D;L=parseFloat(b)*Ti,D=Math.cos(L),r=Hf(C,r,M*D*-A),m=Hf(C,m,-Math.sin(L)*-A),x=Hf(C,x,E*D*-A+A)}T!==Br&&(k+="perspective("+T+gl),(c||f)&&(k+="translate("+c+"%, "+f+"%) "),(G||r!==Br||m!==Br||x!==Br)&&(k+=x!==Br||G?"translate3d("+r+", "+m+", "+x+") ":"translate("+r+", "+m+gl),h!==hl&&(k+="rotate("+h+gl),g!==hl&&(k+="rotateY("+g+gl),b!==hl&&(k+="rotateX("+b+gl),(w!==hl||_!==hl)&&(k+="skew("+w+", "+_+gl),(N!==1||S!==1)&&(k+="scale("+N+", "+S+gl),C.style[Ke]=k||"translate(0, 0)"},u3=function(a,i){var l=i||this,c=l.xPercent,f=l.yPercent,r=l.x,m=l.y,x=l.rotation,h=l.skewX,g=l.skewY,b=l.scaleX,w=l.scaleY,_=l.target,N=l.xOrigin,S=l.yOrigin,T=l.xOffset,j=l.yOffset,C=l.forceCSS,A=parseFloat(r),k=parseFloat(m),G,L,M,E,D;x=parseFloat(x),h=parseFloat(h),g=parseFloat(g),g&&(g=parseFloat(g),h+=g,x+=g),x||h?(x*=Ti,h*=Ti,G=Math.cos(x)*b,L=Math.sin(x)*b,M=Math.sin(x-h)*-w,E=Math.cos(x-h)*w,h&&(g*=Ti,D=Math.tan(h-g),D=Math.sqrt(1+D*D),M*=D,E*=D,g&&(D=Math.tan(g),D=Math.sqrt(1+D*D),G*=D,L*=D)),G=at(G),L=at(L),M=at(M),E=at(E)):(G=b,E=w,L=M=0),(A&&!~(r+"").indexOf("px")||k&&!~(m+"").indexOf("px"))&&(A=Vn(_,"x",r,"px"),k=Vn(_,"y",m,"px")),(N||S||T||j)&&(A=at(A+N-(N*G+S*M)+T),k=at(k+S-(N*L+S*E)+j)),(c||f)&&(D=_.getBBox(),A=at(A+c/100*D.width),k=at(k+f/100*D.height)),D="matrix("+G+","+L+","+M+","+E+","+A+","+k+")",_.setAttribute("transform",D),C&&(_.style[Ke]=D)},f3=function(a,i,l,c,f){var r=360,m=dt(f),x=parseFloat(f)*(m&&~f.indexOf("rad")?vl:1),h=x-c,g=c+h+"deg",b,w;return m&&(b=f.split("_")[1],b==="short"&&(h%=r,h!==h%(r/2)&&(h+=h<0?r:-r)),b==="cw"&&h<0?h=(h+r*Og)%r-~~(h/r)*r:b==="ccw"&&h>0&&(h=(h-r*Og)%r-~~(h/r)*r)),a._pt=w=new Ft(a._pt,i,l,c,h,XS),w.e=g,w.u="deg",a._props.push(l),w},qg=function(a,i){for(var l in i)a[l]=i[l];return a},d3=function(a,i,l){var c=qg({},l._gsap),f="perspective,force3D,transformOrigin,svgOrigin",r=l.style,m,x,h,g,b,w,_,N;c.svg?(h=l.getAttribute("transform"),l.setAttribute("transform",""),r[Ke]=i,m=eo(l,1),qn(l,Ke),l.setAttribute("transform",h)):(h=getComputedStyle(l)[Ke],r[Ke]=i,m=eo(l,1),r[Ke]=h);for(x in un)h=c[x],g=m[x],h!==g&&f.indexOf(x)<0&&(_=At(h),N=At(g),b=_!==N?Vn(l,x,h,N):parseFloat(h),w=parseFloat(g),a._pt=new Ft(a._pt,m,x,b,w-b,hd),a._pt.u=N||0,a._props.push(x));qg(m,c)};Ot("padding,margin,Width,Radius",function(o,a){var i="Top",l="Right",c="Bottom",f="Left",r=(a<3?[i,l,c,f]:[i+f,i+l,c+l,c+f]).map(function(m){return a<2?o+m:"border"+m+o});qs[a>1?"border"+o:o]=function(m,x,h,g,b){var w,_;if(arguments.length<4)return w=r.map(function(N){return rn(m,N,h)}),_=w.join(" "),_.split(w[0]).length===5?w[0]:_;w=(g+"").split(" "),_={},r.forEach(function(N,S){return _[N]=w[S]=w[S]||w[(S-1)/2|0]}),m.init(x,_,b)}});var d1={name:"css",register:xd,targetTest:function(a){return a.style&&a.nodeType},init:function(a,i,l,c,f){var r=this._props,m=a.style,x=l.vars.startAt,h,g,b,w,_,N,S,T,j,C,A,k,G,L,M,E,D;Fd||xd(),this.styles=this.styles||i1(a),E=this.styles.props,this.tween=l;for(S in i)if(S!=="autoRound"&&(g=i[S],!(Kt[S]&&Zx(S,i,l,c,a,f)))){if(_=typeof g,N=qs[S],_==="function"&&(g=g.call(l,c,a,f),_=typeof g),_==="string"&&~g.indexOf("random(")&&(g=Kr(g)),N)N(this,a,S,g,l)&&(M=1);else if(S.substr(0,2)==="--")h=(getComputedStyle(a).getPropertyValue(S)+"").trim(),g+="",Hn.lastIndex=0,Hn.test(h)||(T=At(h),j=At(g),j?T!==j&&(h=Vn(a,S,h,j)+j):T&&(g+=T)),this.add(m,"setProperty",h,g,c,f,0,0,S),r.push(S),E.push(S,0,m[S]);else if(_!=="undefined"){if(x&&S in x?(h=typeof x[S]=="function"?x[S].call(l,c,a,f):x[S],dt(h)&&~h.indexOf("random(")&&(h=Kr(h)),At(h+"")||h==="auto"||(h+=ea.units[S]||At(rn(a,S))||""),(h+"").charAt(1)==="="&&(h=rn(a,S))):h=rn(a,S),w=parseFloat(h),C=_==="string"&&g.charAt(1)==="="&&g.substr(0,2),C&&(g=g.substr(2)),b=parseFloat(g),S in ka&&(S==="autoAlpha"&&(w===1&&rn(a,"visibility")==="hidden"&&b&&(w=0),E.push("visibility",0,m.visibility),In(this,m,"visibility",w?"inherit":"hidden",b?"inherit":"hidden",!b)),S!=="scale"&&S!=="transform"&&(S=ka[S],~S.indexOf(",")&&(S=S.split(",")[0]))),A=S in un,A){if(this.styles.save(S),D=g,_==="string"&&g.substring(0,6)==="var(--"){if(g=$t(a,g.substring(4,g.indexOf(")"))),g.substring(0,5)==="calc("){var F=a.style.perspective;a.style.perspective=g,g=$t(a,"perspective"),F?a.style.perspective=F:qn(a,"perspective")}b=parseFloat(g)}if(k||(G=a._gsap,G.renderTransform&&!i.parseTransform||eo(a,i.parseTransform),L=i.smoothOrigin!==!1&&G.smooth,k=this._pt=new Ft(this._pt,m,Ke,0,1,G.renderTransform,G,0,-1),k.dep=1),S==="scale")this._pt=new Ft(this._pt,G,"scaleY",G.scaleY,(C?Ni(G.scaleY,C+b):b)-G.scaleY||0,hd),this._pt.u=0,r.push("scaleY",S),S+="X";else if(S==="transformOrigin"){E.push(Gt,0,m[Gt]),g=o3(g),G.svg?vd(a,g,0,L,0,this):(j=parseFloat(g.split(" ")[2])||0,j!==G.zOrigin&&In(this,G,"zOrigin",G.zOrigin,j),In(this,m,S,Vs(h),Vs(g)));continue}else if(S==="svgOrigin"){vd(a,g,1,L,0,this);continue}else if(S in c1){f3(this,G,S,w,C?Ni(w,C+g):g);continue}else if(S==="smoothOrigin"){In(this,G,"smooth",G.smooth,g);continue}else if(S==="force3D"){G[S]=g;continue}else if(S==="transform"){d3(this,g,a);continue}}else S in m||(S=Bi(S)||S);if(A||(b||b===0)&&(w||w===0)&&!YS.test(g)&&S in m)T=(h+"").substr((w+"").length),b||(b=0),j=At(g)||(S in ea.units?ea.units[S]:T),T!==j&&(w=Vn(a,S,h,j)),this._pt=new Ft(this._pt,A?G:m,S,w,(C?Ni(w,C+b):b)-w,!A&&(j==="px"||S==="zIndex")&&i.autoRound!==!1?KS:hd),this._pt.u=j||0,A&&D!==g?(this._pt.b=h,this._pt.e=D,this._pt.r=WS):T!==j&&j!=="%"&&(this._pt.b=h,this._pt.r=ZS);else if(S in m)r3.call(this,a,S,h,C?C+g:g);else if(S in a)this.add(a,S,h||a[S],C?C+g:g,c,f);else if(S!=="parseTransform"){Td(S,g);continue}A||(S in m?E.push(S,0,m[S]):typeof a[S]=="function"?E.push(S,2,a[S]()):E.push(S,1,h||a[S])),r.push(S)}}M&&e1(this)},render:function(a,i){if(i.tween._time||!Gd())for(var l=i._pt;l;)l.r(a,l.d),l=l._next;else i.styles.revert()},get:rn,aliases:ka,getSetter:function(a,i,l){var c=ka[i];return c&&c.indexOf(",")<0&&(i=c),i in un&&i!==Gt&&(a._gsap.x||rn(a,"x"))?l&&Bg===l?i==="scale"?e3:$S:(Bg=l||{})&&(i==="scale"?t3:a3):a.style&&!Ad(a.style[i])?QS:~i.indexOf("-")?JS:Bd(a,i)},core:{_removeProperty:qn,_getMatrix:Ud}};It.utils.checkPrefix=Bi;It.core.getStyleSaver=i1;(function(o,a,i,l){var c=Ot(o+","+a+","+i,function(f){un[f]=1});Ot(a,function(f){ea.units[f]="deg",c1[f]=1}),ka[c[13]]=o+","+a,Ot(l,function(f){var r=f.split(":");ka[r[1]]=c[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ot("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ea.units[o]="px"});It.registerPlugin(d1);var ga=It.registerPlugin(d1)||It;ga.core.Tween;const m3=({params:o})=>{const a=R.useRef(null),i=R.useRef(null),l=R.useRef(null),c=R.useRef(null),f=R.useRef(null);return R.useEffect(()=>{const r=x=>{const h=x.clientX,g=x.clientY;i.current&&ga.set(i.current,{x:h,y:g});const b=[l.current,c.current,f.current].filter(Boolean);b.length>0&&ga.to(b,{x:h,y:g,stagger:-o.stagger})},m=a.current;if(m)return m.addEventListener("mousemove",r),()=>m.removeEventListener("mousemove",r)},[o.stagger]),u.jsxs("div",{ref:a,className:"relative w-full h-full overflow-hidden",style:{cursor:"none"},children:[u.jsxs("div",{className:"absolute inset-0",style:{backgroundColor:o.bgColor},children:[u.jsx("div",{ref:l,className:"absolute rounded-full will-change-transform",style:{backgroundColor:o.shape1Color,width:o.shape1Size,height:o.shape1Size,marginLeft:-o.shape1Size/2,marginTop:-o.shape1Size/2}}),u.jsx("div",{ref:c,className:"absolute rounded-full will-change-transform",style:{backgroundColor:o.shape2Color,width:o.shape2Size,height:o.shape2Size,marginLeft:-o.shape2Size/2,marginTop:-o.shape2Size/2}}),u.jsx("div",{ref:f,className:"absolute rounded-full will-change-transform",style:{backgroundColor:o.shape3Color,width:o.shape3Size,height:o.shape3Size,marginLeft:-o.shape3Size/2,marginTop:-o.shape3Size/2}})]}),u.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white",style:{mixBlendMode:"screen"},children:u.jsx("h1",{className:"font-black text-center m-0 select-none",style:{color:"#000",fontSize:`${o.fontSize}px`,lineHeight:1.2},children:o.text})}),u.jsx("div",{ref:i,className:"fixed rounded-full will-change-transform pointer-events-none select-none z-[10000]",style:{backgroundColor:o.bgColor,width:o.cursorSize,height:o.cursorSize,marginLeft:-o.cursorSize/2,marginTop:-o.cursorSize/2}})]})},p3={text:"Hello there!",bgColor:"#2128bd",shape1Color:"#005ffe",shape1Size:650,shape2Color:"#ffe5e3",shape2Size:440,shape3Color:"#ffcc57",shape3Size:270,cursorSize:20,stagger:.1,fontSize:120},Vg=[{id:"original",label:"Original",bg:"#2128bd",shape1:"#005ffe",shape2:"#ffe5e3",shape3:"#ffcc57"},{id:"sunset",label:"Sunset",bg:"#1a0033",shape1:"#ff3366",shape2:"#ff9933",shape3:"#ffcc00"},{id:"ocean",label:"Ocean",bg:"#001a33",shape1:"#0066cc",shape2:"#00ccff",shape3:"#66ffcc"},{id:"forest",label:"Forest",bg:"#1a3300",shape1:"#336600",shape2:"#66cc33",shape3:"#ccff66"}],xi=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(c>=1?0:1)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Rs=({label:o,value:a,onChange:i})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("div",{className:"w-4 h-4 rounded border border-neutral-200",style:{backgroundColor:a}})]}),u.jsx("input",{type:"color",value:a,onChange:l=>i(l.target.value),className:"w-full h-7 bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer"})]}),h3=({params:o,onChange:a})=>{const i=Vg.find(c=>c.bg===o.bgColor&&c.shape1===o.shape1Color&&c.shape2===o.shape2Color&&c.shape3===o.shape3Color),l=c=>{a({...o,bgColor:c.bg,shape1Color:c.shape1,shape2Color:c.shape2,shape3Color:c.shape3})};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Text Content"}),u.jsx("input",{type:"text",value:o.text,onChange:c=>a({...o,text:c.target.value}),maxLength:30,className:"w-full px-2 py-1.5 text-xs bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400",placeholder:"Enter text"})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Presets"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:Vg.map(c=>u.jsx("button",{onClick:()=>l(c),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(i==null?void 0:i.id)===c.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${c.shape1}, ${c.shape2}, ${c.shape3})`},title:c.label},c.id))}),i&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:i.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Custom Colors"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Rs,{label:"Background",value:o.bgColor,onChange:c=>a({...o,bgColor:c})}),u.jsx(Rs,{label:"Shape 1",value:o.shape1Color,onChange:c=>a({...o,shape1Color:c})}),u.jsx(Rs,{label:"Shape 2",value:o.shape2Color,onChange:c=>a({...o,shape2Color:c})}),u.jsx(Rs,{label:"Shape 3",value:o.shape3Color,onChange:c=>a({...o,shape3Color:c})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Shape Sizes"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(xi,{label:"Shape 1 Size",value:o.shape1Size,min:200,max:1e3,step:10,onChange:c=>a({...o,shape1Size:c})}),u.jsx(xi,{label:"Shape 2 Size",value:o.shape2Size,min:150,max:800,step:10,onChange:c=>a({...o,shape2Size:c})}),u.jsx(xi,{label:"Shape 3 Size",value:o.shape3Size,min:100,max:600,step:10,onChange:c=>a({...o,shape3Size:c})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(xi,{label:"Stagger",value:o.stagger,min:0,max:.5,step:.01,onChange:c=>a({...o,stagger:c})}),u.jsx(xi,{label:"Cursor Size",value:o.cursorSize,min:10,max:50,step:1,onChange:c=>a({...o,cursorSize:c})}),u.jsx(xi,{label:"Font Size",value:o.fontSize,min:40,max:200,step:5,onChange:c=>a({...o,fontSize:c})})]})]})]})},g3=["M1915.1-195.3c-87.9,90.4-16.3,268,122.9,331.9S2339,73.2,2365.6,15.3c26.6-57.8-59-269.3-108-291.9C2208.5-299.1,2068.2-352.9,1915.1-195.3z","M1933.8,671.4c90.4,87.9,268,16.3,331.9-122.9s-63.4-301.1-121.3-327.6c-57.8-26.6-15.9,174-91.5,266.5C1982.4,573.6,1776.2,518.2,1933.8,671.4z","M1258.7-42c70.5-34.1-46.1-157.7-140.5-170.6C1024-225.4,918.9-146,884.9-93.2C836.2-17.5,895.4,45,928.6,49.5S1167.6,2,1258.7-42z","M-189.2-4.9c-113.8,54.3-108.3,245.6,0,353.9s304.4,45,349.4,0s38.1-273.1,0-311.2S9.1-99.5-189.2-4.9z","M1503.8,882.5c42.1-118.8-97.1-250.3-250.3-250.3s-247,183.4-247,247s166.1,220.1,220.1,220.1C1280.5,1099.3,1430.4,1089.6,1503.8,882.5z","M1124.8,102.8C1006,60.8,874.5,199.9,874.5,353.1s183.4,247,247,247c63.6,0-58.2-164.8-28.2-280.3C1121.4,212,1331.9,176.2,1124.8,102.8z","M1695.5,1061.4c101.8,74.3,189.1-184.9,135.9-328.6c-53.2-143.7-245.5-232.8-346.2-241.1c-144.5-11.9-188.4,119.6-169.7,170.2C1334.3,712.5,1564,965.3,1695.5,1061.4z","M1570.8,113.5c-78.3,1.5-24,162.6,56.4,213.6s209,22.8,261.9-11c75.9-48.5,48.2-130,19.9-148C1880.7,150.2,1672,111.6,1570.8,113.5z","M1751.5,747c-78.3,1.5-24,162.6,56.4,213.6c80.3,51.1,209,22.8,261.9-11c75.9-48.5,48.2-130,19.9-148C2061.4,783.7,1852.8,745.1,1751.5,747z","M410.4,530.7c-113.8,54.3-108.3,245.6,0,353.9s304.4,45,349.4,0c45-45,38.1-273.1,0-311.2C721.6,535.3,608.7,436.1,410.4,530.7z","M518-226.9c-113.8,54.3-108.3,245.6,0,353.9s304.4,45,349.4,0c45-45,38.1-273.1,0-311.2C829.2-222.3,716.3-321.5,518-226.9z","M234.7,592.4c54.3,113.8,245.6,108.3,353.9,0s45-304.4,0-349.4s-75.3,157.7-178.3,218.1C314.2,517.6,140.1,394.1,234.7,592.4z","M510.5,282.4c15.7,125,224.6,72.7,332.9-35.6s78.8-147.2,33.8-192.3s-109.1,0.6-212.1,61C569,172.1,493.7,148.7,510.5,282.4z","M150.3,414.5c-125,15.7-72.7,224.6,35.6,332.9s147.2,78.8,192.3,33.8s-0.6-109.1-61-212.1C260.6,472.9,284,397.7,150.3,414.5z","M531.6,326.2c105-69.6-94-116.5-247.2-116.5s-317.3,24.4-360,115.9C-136.9,457-28.8,543.8,25.1,543.8S395.8,416.2,531.6,326.2z","M685,456.6c105-69.6-94-116.5-247.2-116.5c-153.2,0-317.3,24.4-360,115.9c-61.3,131.4,46.8,218.2,100.7,218.2S549.2,546.6,685,456.6z","M1142.7,463.6c105-69.6-94-116.5-247.2-116.5s-317.3,24.4-360,115.9c-61.3,131.4,46.8,218.2,100.7,218.2C690.1,681.3,1006.9,553.6,1142.7,463.6z","M374.8,360.6c69.6,105,241.5-107.8,241.5-261s-149.4-303.5-241-346.3c-131.4-61.3-218.2,46.8-218.2,100.7S284.8,224.8,374.8,360.6z","M-17.6,985.6c69.6,105,241.5-107.8,241.5-261S74.5,421.1-17,378.4c-131.4-61.3-218.2,46.8-218.2,100.7S-107.6,849.8-17.6,985.6z","M87.9-56.7C13.9-82.5,9,87.4,66.6,163.2s188.1,93.9,249.4,80.6c88-19.1,90.3-105.2,70-131.9C365.7,85.3,183.5-23.4,87.9-56.7z","M130.4,627.6c-74-25.8-78.9,144.1-21.3,219.9s188.1,93.9,249.4,80.6c88-19.1,90.3-105.2,70-131.9C408.2,769.6,225.9,660.9,130.4,627.6z","M1846.9,225.4c42.1-118.8-97.1-250.3-250.3-250.3s-247,183.4-247,247s166.1,220.1,220.1,220.1C1623.6,442.3,1773.5,432.6,1846.9,225.4z","M1044.2,270.7c42.1-118.8-97.1-250.3-250.3-250.3s-247,183.4-247,247S713,487.6,766.9,487.6C820.9,487.6,970.8,477.9,1044.2,270.7z","M1148.9,517c-99.5-77.3-210.2,107.4-210.2,260.5s48.4,159.8,112.1,159.8s76.8-77.5,106.8-193.1C1185.6,636.4,1255.4,599.8,1148.9,517z","M1310.3,169c77.3-99.5-107.4-210.2-260.5-210.2S889.9,7.2,889.9,70.8s77.5,76.8,193.1,106.8C1190.9,205.7,1227.6,275.4,1310.3,169z","M1103.1,501.1c-25,123.5,148.8,15.9,257.1-92.4S1567.3,167,1532.8,72.1C1483.3-64.2,1345.5-49.1,1307.4-11S1135.4,341.4,1103.1,501.1z","M902.4,517.3c-25,123.5,148.8,15.9,257.1-92.4s207.1-241.6,172.6-336.6C1282.6-48,1144.8-32.9,1106.7,5.2C1068.5,43.3,934.8,357.6,902.4,517.3z","M675.4,977.7c-25,123.5,148.8,15.9,257.1-92.4c108.3-108.3,207.1-241.6,172.6-336.6c-49.5-136.2-187.3-121.2-225.5-83.1C841.6,503.8,707.8,818,675.4,977.7z","M1189.6,365.8c-123.5-25-94.6,247,13.8,355.3s320.3,109,415.2,74.4c136.2-49.5,121.2-187.3,83.1-225.5C1663.6,531.9,1349.3,398.2,1189.6,365.8z","M1178.3-351.1c-123.5-25-94.6,247,13.8,355.3s320.3,109,415.2,74.4c136.2-49.5,121.2-187.3,83.1-225.5S1338-318.8,1178.3-351.1z","M1687.6,458c70.5-34.1-46.1-157.7-140.5-170.6c-94.3-12.8-199.4,66.6-233.4,119.4c-48.7,75.7,10.5,138.2,43.7,142.8C1390.7,554.1,1596.5,502.1,1687.6,458z","M1328.9,258.3c-87.9,90.4-16.3,268,122.9,331.9s301.1-63.4,327.6-121.3c26.6-57.8-59-269.3-108-291.9S1482.1,100.8,1328.9,258.3z","M2077.1,552.5c-87.9,90.4-16.3,268,122.9,331.9c139.2,64,301.1-63.4,327.6-121.3c26.6-57.8-59-269.3-108-291.9C2370.6,448.7,2230.3,394.9,2077.1,552.5z","M2084.8,284.9c58.1,111.8,235.9-9.7,299.8-148.9c64-139.2,22.8-165.4-35.1-192c-57.8-26.6-102.1,38.4-177.7,130.8C2101.4,161.1,2022.7,165.3,2084.8,284.9z","M1792.8,533.8c-111.8,58.1,9.7,235.9,148.9,299.8s165.4,22.8,192-35.1s-38.4-102.1-130.8-177.7C1916.6,550.3,1912.5,471.6,1792.8,533.8z","M2119.8,318.6c74.3-101.8-128.6-76.6-272.2-23.5s-289.1,133-297.4,233.7c-11.9,144.5,119.6,188.4,170.2,169.7C1770.9,679.8,2023.7,450.1,2119.8,318.6z","M2308.9,387.7c74.3-101.8-128.6-76.6-272.2-23.5s-289.1,133-297.4,233.7c-11.9,144.5,119.6,188.4,170.2,169.7C1960,748.9,2212.8,519.3,2308.9,387.7z","M2722.5,146.8c74.3-101.8-128.6-76.6-272.2-23.5c-143.7,53.2-289.1,133-297.4,233.7c-11.9,144.5,119.6,188.4,170.2,169.7C2373.6,508,2626.4,278.3,2722.5,146.8z","M1984.7,405.3c101.8,74.3,189.1-184.9,135.9-328.6S1875.1-156,1774.4-164.3C1630-176.2,1586.1-44.8,1604.8,5.8C1623.5,56.4,1853.1,309.2,1984.7,405.3z"];function Yg(o,a){return Math.floor(Math.random()*(Math.floor(a)-Math.ceil(o)))+Math.ceil(o)}const x3=({params:o})=>{const a=R.useRef(null),i=R.useRef([]),l=R.useRef([]),c=R.useRef(1),f=R.useRef(!0),r=R.useRef(),m=R.useRef(o);m.current=o;const x=R.useCallback(()=>{const N=m.current.slides,S=N[c.current%N.length],T=S.line1.toUpperCase(),j=S.line2.toUpperCase(),C=S.line3.toUpperCase();l.current.forEach((A,k)=>{A&&(A.textContent=[T,j,C][k])})},[]),h=R.useCallback(()=>{const{color1:N,color2:S,color3:T}=m.current,j=[N,S,T];i.current.forEach(C=>{if(!C)return;const A=j[Yg(0,j.length)];ga.set(C,{attr:{fill:A},scale:0,transformOrigin:"center"})})},[]),g=R.useCallback(()=>{a.current&&ga.set(a.current,{autoAlpha:1});const{duration:N}=m.current;i.current.forEach(S=>{S&&ga.to(S,{scale:1.2,rotation:Yg(-30,30),duration:N,ease:"power2.inOut"})})},[]),b=R.useCallback(()=>{h(),x(),g()},[h,x,g]),w=R.useCallback(()=>{c.current=(c.current+1)%m.current.slides.length;const N=i.current.filter(Boolean),{duration:S}=m.current;ga.to(N,{scale:0,duration:S,ease:"power2.inOut",onComplete:()=>b()})},[b]),_=R.useCallback(()=>{f.current&&(f.current=!1,setTimeout(()=>{f.current=!0},2e3),w(),clearInterval(r.current),m.current.autoPlay&&(r.current=setInterval(w,m.current.interval*1e3)))},[w]);return R.useEffect(()=>{b()},[b]),R.useEffect(()=>(clearInterval(r.current),o.autoPlay&&(r.current=setInterval(w,o.interval*1e3)),()=>clearInterval(r.current)),[o.autoPlay,o.interval,w]),u.jsx("div",{ref:a,onClick:_,className:"w-full h-full flex items-center justify-center overflow-hidden cursor-pointer",style:{opacity:0},children:u.jsxs("svg",{viewBox:"0 0 2371.2 841.1",className:"w-full shrink-0",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("mask",{maskUnits:"userSpaceOnUse",x:"-273",y:"-353.2",width:"3011.9",height:"1453",id:"textmask-bubbles-mask",children:u.jsxs("g",{children:[u.jsx("text",{ref:N=>{l.current[0]=N},transform:"matrix(1 0 0 1 62.9893 251.1275)",style:{fill:"#fff",fontFamily:"'Source Sans Pro', sans-serif",fontWeight:900,fontSize:"379.144px"},children:"WE ARE"}),u.jsx("text",{ref:N=>{l.current[1]=N},transform:"matrix(1 0 0 1 62.9893 544.8433)",style:{fill:"#fff",fontFamily:"'Source Sans Pro', sans-serif",fontWeight:900,fontSize:"379.144px"},children:"WE ARE"}),u.jsx("text",{ref:N=>{l.current[2]=N},transform:"matrix(1 0 0 1 62.9893 838.5591)",style:{fill:"#fff",fontFamily:"'Source Sans Pro', sans-serif",fontWeight:900,fontSize:"379.144px"},children:"WE ARE"})]})}),u.jsx("g",{style:{mask:"url(#textmask-bubbles-mask)"},children:g3.map((N,S)=>u.jsx("path",{ref:T=>{i.current[S]=T},d:N},S))})]})})},v3={slides:[{line1:"WE ARE",line2:"thinkers",line3:"+Doers"},{line1:"WE ARE",line2:"optimists",line3:"+realists"},{line1:"WE ARE",line2:"willing",line3:"+able"}],duration:1.5,interval:5,autoPlay:!0,color1:"#f5a147",color2:"#51cad8",color3:"#2a5e6e",bgColor:"#112b39"},Xg=[{id:"original",label:"Original",colors:{color1:"#f5a147",color2:"#51cad8",color3:"#2a5e6e"}},{id:"sunset",label:"Sunset",colors:{color1:"#ff6b6b",color2:"#feca57",color3:"#ee5a6f"}},{id:"ocean",label:"Ocean",colors:{color1:"#00d2ff",color2:"#3a7bd5",color3:"#0077b6"}},{id:"forest",label:"Forest",colors:{color1:"#56ab2f",color2:"#a8e063",color3:"#11998e"}},{id:"neon",label:"Neon",colors:{color1:"#f72585",color2:"#7209b7",color3:"#4cc9f0"}}],Zg=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(c>=1?0:1)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Ts=({label:o,value:a,onChange:i})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("div",{className:"w-4 h-4 rounded border border-neutral-200",style:{backgroundColor:a}})]}),u.jsx("input",{type:"color",value:a,onChange:l=>i(l.target.value),className:"w-full h-7 bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer"})]}),b3=({label:o,value:a,onChange:i})=>u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("button",{onClick:()=>i(!a),className:`relative w-7 h-4 rounded-full transition-colors ${a?"bg-neutral-800":"bg-neutral-300"}`,children:u.jsx("span",{className:`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${a?"translate-x-3":"translate-x-0"}`})})]}),y3=({params:o,onChange:a})=>{const i=Xg.find(f=>f.colors.color1===o.color1&&f.colors.color2===o.color2&&f.colors.color3===o.color3),l=f=>{a({...o,...f.colors})},c=(f,r,m)=>{const x=o.slides.map((h,g)=>g===f?{...h,[r]:m}:h);a({...o,slides:x})};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Text Slides"}),u.jsx("div",{className:"flex flex-col gap-3",children:o.slides.map((f,r)=>u.jsxs("div",{className:"bg-neutral-50 rounded-lg p-2",children:[u.jsxs("div",{className:"text-[8px] font-medium text-neutral-400 mb-1.5",children:["Slide ",r+1]}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("input",{type:"text",value:f.line1,onChange:m=>c(r,"line1",m.target.value),maxLength:20,className:"w-full px-2 py-1 text-[9px] bg-white border border-neutral-200 rounded focus:outline-none focus:border-neutral-400",placeholder:"Line 1"}),u.jsx("input",{type:"text",value:f.line2,onChange:m=>c(r,"line2",m.target.value),maxLength:20,className:"w-full px-2 py-1 text-[9px] bg-white border border-neutral-200 rounded focus:outline-none focus:border-neutral-400",placeholder:"Line 2"}),u.jsx("input",{type:"text",value:f.line3,onChange:m=>c(r,"line3",m.target.value),maxLength:20,className:"w-full px-2 py-1 text-[9px] bg-white border border-neutral-200 rounded focus:outline-none focus:border-neutral-400",placeholder:"Line 3"})]})]},r))})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Presets"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:Xg.map(f=>u.jsx("button",{onClick:()=>l(f),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(i==null?void 0:i.id)===f.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${f.colors.color1}, ${f.colors.color2}, ${f.colors.color3})`},title:f.label},f.id))}),i&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:i.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Background"}),u.jsx(Ts,{label:"BG Color",value:o.bgColor,onChange:f=>a({...o,bgColor:f})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Bubble Colors"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ts,{label:"Color 1",value:o.color1,onChange:f=>a({...o,color1:f})}),u.jsx(Ts,{label:"Color 2",value:o.color2,onChange:f=>a({...o,color2:f})}),u.jsx(Ts,{label:"Color 3",value:o.color3,onChange:f=>a({...o,color3:f})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Zg,{label:"Duration",value:o.duration,min:.5,max:3,step:.1,onChange:f=>a({...o,duration:f})}),u.jsx(Zg,{label:"Interval",value:o.interval,min:2,max:10,step:.5,onChange:f=>a({...o,interval:f})}),u.jsx(b3,{label:"Auto Play",value:o.autoPlay,onChange:f=>a({...o,autoPlay:f})})]})]})]})},S3=[{id:"echotrace",name:"EchoTrace",description:"Psychedelic motion trail"},{id:"spotlight",name:"Spotlight",description:"Cursor spotlight effect"},{id:"textmask",name:"Text Mask",description:"SVG mask bubble reveal"},{id:"flip",name:"FLIP",description:"GSAP Flip layout animation"},{id:"framers",name:"Framers",description:"Splitting.js stagger text animation"},{id:"squares",name:"Squares",description:"Generative normal-distributed art"}],_3=({active:o,onSelect:a})=>{const i=R.useRef(null);return R.useEffect(()=>{var l;(l=i.current)==null||l.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]),u.jsx("div",{className:"flex gap-1.5 overflow-x-auto scrollbar-hide px-5 py-3 flex-shrink-0",children:S3.map(l=>{const c=o===l.id;return u.jsx("button",{ref:c?i:null,onClick:()=>a(l.id),className:`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${c?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.name},l.id)})})};var w3=mx();/*!
 * matrix 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var on,Cl,Hd,$s,Ur,Fs,Ys,Vr,Ca="transform",bd=Ca+"Origin",m1,Pd=function(a){var i=a.ownerDocument||a;for(!(Ca in a.style)&&("msTransform"in a.style)&&(Ca="msTransform",bd=Ca+"Origin");i.parentNode&&(i=i.parentNode););if(Cl=window,Ys=new Al,i){on=i,Hd=i.documentElement,$s=i.body,Vr=on.createElementNS("http://www.w3.org/2000/svg","g"),Vr.style.transform="none";var l=i.createElement("div"),c=i.createElement("div"),f=i&&(i.body||i.firstElementChild);f&&f.appendChild&&(f.appendChild(l),l.appendChild(c),l.style.position="static",l.style.transform="translate3d(0,0,1px)",m1=c.offsetParent!==l,f.removeChild(l))}return i},C3=function(a){for(var i,l;a&&a!==$s;)l=a._gsap,l&&l.uncache&&l.get(a,"x"),l&&!l.scaleX&&!l.scaleY&&l.renderTransform&&(l.scaleX=l.scaleY=1e-4,l.renderTransform(1,l),i?i.push(l):i=[l]),a=a.parentNode;return i},p1=[],h1=[],qd=function(){return Cl.pageYOffset||on.scrollTop||Hd.scrollTop||$s.scrollTop||0},Vd=function(){return Cl.pageXOffset||on.scrollLeft||Hd.scrollLeft||$s.scrollLeft||0},Yd=function(a){return a.ownerSVGElement||((a.tagName+"").toLowerCase()==="svg"?a:null)},A3=function o(a){if(Cl.getComputedStyle(a).position==="fixed")return!0;if(a=a.parentNode,a&&a.nodeType===1)return o(a)},Pf=function o(a,i){if(a.parentNode&&(on||Pd(a))){var l=Yd(a),c=l?l.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",f=l?i?"rect":"g":"div",r=i!==2?0:100,m=i===3?100:0,x={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},h=on.createElementNS?on.createElementNS(c.replace(/^https/,"http"),f):on.createElement(f);return i&&(l?(Fs||(Fs=o(a)),h.setAttribute("width",.01),h.setAttribute("height",.01),h.setAttribute("transform","translate("+r+","+m+")"),h.setAttribute("fill","transparent"),Fs.appendChild(h)):(Ur||(Ur=o(a),Object.assign(Ur.style,x)),Object.assign(h.style,x,{width:"0.1px",height:"0.1px",top:m+"px",left:r+"px"}),Ur.appendChild(h))),h}throw"Need document and parent."},N3=function(a){for(var i=new Al,l=0;l<a.numberOfItems;l++)i.multiply(a.getItem(l).matrix);return i},g1=function(a){var i=a.getCTM(),l;return i||(l=a.style[Ca],a.style[Ca]="none",a.appendChild(Vr),i=Vr.getCTM(),a.removeChild(Vr),l?a.style[Ca]=l:a.style.removeProperty(Ca.replace(/([A-Z])/g,"-$1").toLowerCase())),i||Ys.clone()},R3=function(a,i){var l=Yd(a),c=a===l,f=l?p1:h1,r=a.parentNode,m=r&&!l&&r.shadowRoot&&r.shadowRoot.appendChild?r.shadowRoot:r,x,h,g,b,w,_;if(a===Cl)return a;if(f.length||f.push(Pf(a,1),Pf(a,2),Pf(a,3)),x=l?Fs:Ur,l)c?(g=g1(a),b=-g.e/g.a,w=-g.f/g.d,h=Ys):a.getBBox?(g=a.getBBox(),h=a.transform?a.transform.baseVal:{},h=h.numberOfItems?h.numberOfItems>1?N3(h):h.getItem(0).matrix:Ys,b=h.a*g.x+h.c*g.y,w=h.b*g.x+h.d*g.y):(h=new Al,b=w=0),i&&a.tagName.toLowerCase()==="g"&&(b=w=0),(c||!a.getBoundingClientRect().width?l:r).appendChild(x),x.setAttribute("transform","matrix("+h.a+","+h.b+","+h.c+","+h.d+","+(h.e+b)+","+(h.f+w)+")");else{if(b=w=0,m1)for(h=a.offsetParent,g=a;g&&(g=g.parentNode)&&g!==h&&g.parentNode;)(Cl.getComputedStyle(g)[Ca]+"").length>4&&(b=g.offsetLeft,w=g.offsetTop,g=0);if(_=Cl.getComputedStyle(a),_.position!=="absolute"&&_.position!=="fixed")for(h=a.offsetParent;r&&r!==h;)b+=r.scrollLeft||0,w+=r.scrollTop||0,r=r.parentNode;g=x.style,g.top=a.offsetTop-w+"px",g.left=a.offsetLeft-b+"px",g[Ca]=_[Ca],g[bd]=_[bd],g.position=_.position==="fixed"?"fixed":"absolute",m.appendChild(x)}return x},qf=function(a,i,l,c,f,r,m){return a.a=i,a.b=l,a.c=c,a.d=f,a.e=r,a.f=m,a},Al=(function(){function o(i,l,c,f,r,m){i===void 0&&(i=1),l===void 0&&(l=0),c===void 0&&(c=0),f===void 0&&(f=1),r===void 0&&(r=0),m===void 0&&(m=0),qf(this,i,l,c,f,r,m)}var a=o.prototype;return a.inverse=function(){var l=this.a,c=this.b,f=this.c,r=this.d,m=this.e,x=this.f,h=l*r-c*f||1e-10;return qf(this,r/h,-c/h,-f/h,l/h,(f*x-r*m)/h,-(l*x-c*m)/h)},a.multiply=function(l){var c=this.a,f=this.b,r=this.c,m=this.d,x=this.e,h=this.f,g=l.a,b=l.c,w=l.b,_=l.d,N=l.e,S=l.f;return qf(this,g*c+w*r,g*f+w*m,b*c+_*r,b*f+_*m,x+N*c+S*r,h+N*f+S*m)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.equals=function(l){var c=this.a,f=this.b,r=this.c,m=this.d,x=this.e,h=this.f;return c===l.a&&f===l.b&&r===l.c&&m===l.d&&x===l.e&&h===l.f},a.apply=function(l,c){c===void 0&&(c={});var f=l.x,r=l.y,m=this.a,x=this.b,h=this.c,g=this.d,b=this.e,w=this.f;return c.x=f*m+r*h+b||0,c.y=f*x+r*g+w||0,c},o})();function Ba(o,a,i,l){if(!o||!o.parentNode||(on||Pd(o)).documentElement===o)return new Al;var c=C3(o),f=Yd(o),r=f?p1:h1,m=R3(o,i),x=r[0].getBoundingClientRect(),h=r[1].getBoundingClientRect(),g=r[2].getBoundingClientRect(),b=m.parentNode,w=!l&&A3(o),_=new Al((h.left-x.left)/100,(h.top-x.top)/100,(g.left-x.left)/100,(g.top-x.top)/100,x.left+(w?0:Vd()),x.top+(w?0:qd()));if(b.removeChild(m),c)for(x=c.length;x--;)h=c[x],h.scaleX=h.scaleY=0,h.renderTransform(1,h);return a?_.inverse():_}/*!
 * Flip 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var T3=1,Oi,vt,Pe,Yr,On,sn,yd,Wg=function(a,i){return a.actions.forEach(function(l){return l.vars[i]&&l.vars[i](l)})},Sd={},Kg=180/Math.PI,j3=Math.PI/180,Xs={},Qg={},ec={},Xd=function(a){return typeof a=="string"?a.split(" ").join("").split(","):a},M3=Xd("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),tc=Xd("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),Xr=function(a){return Oi(a)[0]||console.warn("Element not found:",a)},Ci=function(a){return Math.round(a*1e4)/1e4||0},Vf=function(a,i,l){return a.forEach(function(c){return c.classList[l](i)})},Jg={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},x1={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},v1=function(a){return a.replace(/([A-Z])/g,"-$1").toLowerCase()},Ai=function(a,i){var l={},c;for(c in a)i[c]||(l[c]=a[c]);return l},Zd={},b1=function(a){var i=Zd[a]=Xd(a);return ec[a]=i.concat(tc),i},E3=function(a){var i=a._gsap||vt.core.getCache(a);return i.gmCache===vt.ticker.frame?i.gMatrix:(i.gmCache=vt.ticker.frame,i.gMatrix=Ba(a,!0,!1,!0))},D3=function o(a,i,l){l===void 0&&(l=0);for(var c=a.parentNode,f=1e3*Math.pow(10,l)*(i?-1:1),r=i?-f*900:0;a;)r+=f,a=a.previousSibling;return c?r+o(c,i,l+1):r},Zs=function(a,i,l){return a.forEach(function(c){return c.d=D3(l?c.element:c.t,i)}),a.sort(function(c,f){return c.d-f.d}),a},to=function(a,i){for(var l=a.element.style,c=a.css=a.css||[],f=i.length,r,m;f--;)r=i[f],m=l[r]||l.getPropertyValue(r),c.push(m?r:Qg[r]||(Qg[r]=v1(r)),m);return l},Ws=function(a){var i=a.css,l=a.element.style,c=0;for(a.cache.uncache=1;c<i.length;c+=2)i[c+1]?l[i[c]]=i[c+1]:l.removeProperty(i[c]);!i[i.indexOf("transform")+1]&&l.translate&&(l.removeProperty("translate"),l.removeProperty("scale"),l.removeProperty("rotate"))},$g=function(a,i){a.forEach(function(l){return l.a.cache.uncache=1}),i||a.finalStates.forEach(Ws)},Yf="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),Wd=function(a,i,l){var c=a.element,f=a.width,r=a.height,m=a.uncache,x=a.getProp,h=c.style,g=4,b,w,_;if(typeof i!="object"&&(i=a),Pe&&l!==1)return Pe._abs.push({t:c,b:a,a,sd:0}),Pe._final.push(function(){return(a.cache.uncache=1)&&Ws(a)}),c;for(w=x("display")==="none",(!a.isVisible||w)&&(w&&(to(a,["display"]).display=i.display),a.matrix=i.matrix,a.width=f=a.width||i.width,a.height=r=a.height||i.height),to(a,Yf),_=window.getComputedStyle(c);g--;)h[Yf[g]]=_[Yf[g]];if(h.gridArea="1 / 1 / 1 / 1",h.transition="none",h.position="absolute",h.width=f+"px",h.height=r+"px",h.top||(h.top="0px"),h.left||(h.left="0px"),m)b=new Nl(c);else if(b=Ai(a,Xs),b.position="absolute",a.simple){var N=c.getBoundingClientRect();b.matrix=new Al(1,0,0,1,N.left+Vd(),N.top+qd())}else b.matrix=Ba(c,!1,!1,!0);return b=ji(b,a,!0),a.x=sn(b.x,.01),a.y=sn(b.y,.01),c},ex=function(a,i){return i!==!0&&(i=Oi(i),a=a.filter(function(l){if(i.indexOf((l.sd<0?l.b:l.a).element)!==-1)return!0;l.t._gsap.renderTransform(1),l.b.isVisible&&(l.t.style.width=l.b.width+"px",l.t.style.height=l.b.height+"px")})),a},y1=function(a){return Zs(a,!0).forEach(function(i){return(i.a.isVisible||i.b.isVisible)&&Wd(i.sd<0?i.b:i.a,i.b,1)})},z3=function(a,i){return i&&a.idLookup[_d(i).id]||a.elementStates[0]},_d=function(a,i,l,c){return a instanceof Nl?a:a instanceof Aa?z3(a,c):new Nl(typeof a=="string"?Xr(a)||console.warn(a+" not found"):a,i,l)},k3=function(a,i){for(var l=vt.getProperty(a.element,null,"native"),c=a.props={},f=i.length;f--;)c[i[f]]=(l(i[f])+"").trim();return c.zIndex&&(c.zIndex=parseFloat(c.zIndex)||0),a},S1=function(a,i){var l=a.style||a,c;for(c in i)l[c]=i[c]},L3=function(a){var i=a.getAttribute("data-flip-id");return i||a.setAttribute("data-flip-id",i="auto-"+T3++),i},_1=function(a){return a.map(function(i){return i.element})},tx=function(a,i,l){return a&&i.length&&l.add(a(_1(i),l,new Aa(i,0,!0)),0)},ji=function(a,i,l,c,f,r){var m=a.element,x=a.cache,h=a.parent,g=a.x,b=a.y,w=i.width,_=i.height,N=i.scaleX,S=i.scaleY,T=i.rotation,j=i.bounds,C=r&&yd&&yd(m,"transform,width,height"),A=a,k=i.matrix,G=k.e,L=k.f,M=a.bounds.width!==j.width||a.bounds.height!==j.height||a.scaleX!==N||a.scaleY!==S||a.rotation!==T,E=!M&&a.simple&&i.simple&&!f,D,F,V,$,Q,te,le;return E||!h?(N=S=1,T=D=0):(Q=E3(h),te=Q.clone().multiply(i.ctm?i.matrix.clone().multiply(i.ctm):i.matrix),T=Ci(Math.atan2(te.b,te.a)*Kg),D=Ci(Math.atan2(te.c,te.d)*Kg+T)%360,N=Math.sqrt(Math.pow(te.a,2)+Math.pow(te.b,2)),S=Math.sqrt(Math.pow(te.c,2)+Math.pow(te.d,2))*Math.cos(D*j3),f&&(f=Oi(f)[0],$=vt.getProperty(f),le=f.getBBox&&typeof f.getBBox=="function"&&f.getBBox(),A={scaleX:$("scaleX"),scaleY:$("scaleY"),width:le?le.width:Math.ceil(parseFloat($("width","px"))),height:le?le.height:parseFloat($("height","px"))}),x.rotation=T+"deg",x.skewX=D+"deg"),l?(N*=w===A.width||!A.width?1:w/A.width,S*=_===A.height||!A.height?1:_/A.height,x.scaleX=N,x.scaleY=S):(w=sn(w*N/A.scaleX,0),_=sn(_*S/A.scaleY,0),m.style.width=w+"px",m.style.height=_+"px"),c&&S1(m,i.props),E||!h?(g+=G-a.matrix.e,b+=L-a.matrix.f):M||h!==i.parent?(x.x=g+"px",x.y=b+"px",x.renderTransform(1,x),te=Ba(f||m,!1,!1,!0),F=Q.apply({x:te.e,y:te.f}),V=Q.apply({x:G,y:L}),g+=V.x-F.x,b+=V.y-F.y):(Q.e=Q.f=0,V=Q.apply({x:G-a.matrix.e,y:L-a.matrix.f}),g+=V.x,b+=V.y),g=sn(g,.02),b=sn(b,.02),r&&!(r instanceof Nl)?C&&C.revert():(x.x=g+"px",x.y=b+"px",x.renderTransform(1,x)),r&&(r.x=g,r.y=b,r.rotation=T,r.skewX=D,l?(r.scaleX=N,r.scaleY=S):(r.width=w,r.height=_)),r||x},Xf=function(a,i){return a instanceof Aa?a:new Aa(a,i)},w1=function(a,i,l){var c=a.idLookup[l],f=a.alt[l];return f.isVisible&&(!(i.getElementState(f.element)||f).isVisible||!c.isVisible)?f:c},Zf=[],Wf="width,height,overflowX,overflowY".split(","),js,ax=function(a){if(a!==js){var i=On.style,l=On.clientWidth===window.outerWidth,c=On.clientHeight===window.outerHeight,f=4;if(a&&(l||c)){for(;f--;)Zf[f]=i[Wf[f]];l&&(i.width=On.clientWidth+"px",i.overflowY="hidden"),c&&(i.height=On.clientHeight+"px",i.overflowX="hidden"),js=a}else if(js){for(;f--;)Zf[f]?i[Wf[f]]=Zf[f]:i.removeProperty(v1(Wf[f]));js=a}}},nx=function(a,i){for(var l=0;l<a.length;l+=3)vt.set(a[l],{clearProps:!0}),a[l].setAttribute("style",a[l+i]),a[l]._gsap.gmCache=-1},Kf=function(a,i,l,c){a instanceof Aa&&i instanceof Aa||console.warn("Not a valid state object."),l=l||{};var f=l,r=f.clearProps,m=f.onEnter,x=f.onLeave,h=f.absolute,g=f.absoluteOnLeave,b=f.custom,w=f.delay,_=f.paused,N=f.repeat,S=f.repeatDelay,T=f.yoyo,j=f.toggleClass,C=f.nested,A=f.zIndex,k=f.scale,G=f.fade,L=f.stagger,M=f.spin,E=f.prune,D=("props"in l?l:a).props,F=Ai(l,Jg),V=vt.timeline({delay:w,paused:_,repeat:N,repeatDelay:S,yoyo:T,data:"isFlip"}),$=F,Q=[],te=[],le=[],U=[],W=M===!0?1:M||0,re=typeof M=="function"?M:function(){return W},ce=a.interrupted||i.interrupted,me=V[c!==1?"to":"from"],B,Y,ae,ee,ne,ie,oe,ve,Re,pe,qe,ct,Te,Ee;for(Y in i.idLookup)qe=i.alt[Y]?w1(i,a,Y):i.idLookup[Y],ne=qe.element,pe=a.idLookup[Y],a.alt[Y]&&ne===pe.element&&(a.alt[Y].isVisible||!qe.isVisible)&&(pe=a.alt[Y]),pe?(ie={t:ne,b:pe,a:qe,sd:pe.element===ne?0:qe.isVisible?1:-1},le.push(ie),ie.sd&&(ie.sd<0&&(ie.b=qe,ie.a=pe),ce&&to(ie.b,D?ec[D]:tc),G&&le.push(ie.swap={t:pe.element,b:ie.b,a:ie.a,sd:-ie.sd,swap:ie})),ne._flip=pe.element._flip=Pe?Pe.timeline:V):qe.isVisible&&(le.push({t:ne,b:Ai(qe,{isVisible:1}),a:qe,sd:0,entering:1}),ne._flip=Pe?Pe.timeline:V);if(D&&(Zd[D]||b1(D)).forEach(function(Ht){return F[Ht]=function(he){return le[he].a.props[Ht]}}),le.finalStates=Re=[],ct=function(){Zs(le),ax(!0);var he=[];for(ee=0;ee<le.length;ee++)ie=le[ee],Te=ie.a,Ee=ie.b,E&&!Te.isDifferent(Ee)&&!ie.entering?le.splice(ee--,1):(ne=ie.t,C&&!(ie.sd<0)&&ee&&(Te=ie.a=Te.clone({matrix:Ba(ne,!1,!1,!0)})),Ee.isVisible&&Te.isVisible?(ie.sd<0?(C&&nx(he,1),oe=new Nl(ne,D,a.simple),ji(oe,Te,k,0,0,oe),oe.matrix=Ba(ne,!1,!1,!0),oe.bounds=ne.getBoundingClientRect(),oe.css=ie.b.css,ie.a=Te=oe,G&&(ne.style.opacity=ce?Ee.opacity:Te.opacity),L&&U.push(ne),C&&(nx(he,2),he.push(ne,ne.getAttribute("style")))):ie.sd>0&&G&&(ne.style.opacity=ce?Te.opacity-Ee.opacity:"0"),ji(Te,Ee,k,D),C&&ie.sd<0&&he.push(ne.getAttribute("style"))):Ee.isVisible!==Te.isVisible&&(Ee.isVisible?Te.isVisible||(Ee.css=Te.css,te.push(Ee),le.splice(ee--,1),h&&C&&ji(Te,Ee,k,D)):(Te.isVisible&&Q.push(Te),le.splice(ee--,1))),k||(ne.style.maxWidth=Math.max(Te.width,Ee.width)+"px",ne.style.maxHeight=Math.max(Te.height,Ee.height)+"px",ne.style.minWidth=Math.min(Te.width,Ee.width)+"px",ne.style.minHeight=Math.min(Te.height,Ee.height)+"px"),C&&j&&ne.classList.add(j)),Re.push(Te);var xa;if(j&&(xa=Re.map(function(ge){return ge.element}),C&&xa.forEach(function(ge){return ge.classList.remove(j)})),ax(!1),k?(F.scaleX=function(ge){return le[ge].a.scaleX},F.scaleY=function(ge){return le[ge].a.scaleY}):(F.width=function(ge){return le[ge].a.width+"px"},F.height=function(ge){return le[ge].a.height+"px"},F.autoRound=l.autoRound||!1),F.x=function(ge){return le[ge].a.x+"px"},F.y=function(ge){return le[ge].a.y+"px"},F.rotation=function(ge){return le[ge].a.rotation+(M?re(ge,ve[ge],ve)*360:0)},F.skewX=function(ge){return le[ge].a.skewX},ve=le.map(function(ge){return ge.t}),(A||A===0)&&(F.modifiers={zIndex:function(){return A}},F.zIndex=A,F.immediateRender=l.immediateRender!==!1),G&&(F.opacity=function(ge){return le[ge].sd<0?0:le[ge].sd>0?le[ge].a.opacity:"+=0"}),U.length){L=vt.utils.distribute(L);var fn=ve.slice(U.length);F.stagger=function(ge,Tl){return L(~U.indexOf(Tl)?ve.indexOf(le[ge].swap.t):ge,Tl,fn)}}if(M3.forEach(function(ge){return l[ge]&&V.eventCallback(ge,l[ge],l[ge+"Params"])}),b&&ve.length){$=Ai(F,Jg),"scale"in b&&(b.scaleX=b.scaleY=b.scale,delete b.scale);for(Y in b)B=Ai(b[Y],x1),B[Y]=F[Y],!("duration"in B)&&"duration"in F&&(B.duration=F.duration),B.stagger=F.stagger,me.call(V,ve,B,0),delete $[Y]}(ve.length||te.length||Q.length)&&(j&&V.add(function(){return Vf(xa,j,V._zTime<0?"remove":"add")},0)&&!_&&Vf(xa,j,"add"),ve.length&&me.call(V,ve,$,0)),tx(m,Q,V),tx(x,te,V);var Oa=Pe&&Pe.timeline;Oa&&(Oa.add(V,0),Pe._final.push(function(){return $g(le,!r)})),ae=V.duration(),V.call(function(){var ge=V.time()>=ae;ge&&!Oa&&$g(le,!r),j&&Vf(xa,j,ge?"remove":"add")})},g&&(h=le.filter(function(Ht){return!Ht.sd&&!Ht.a.isVisible&&Ht.b.isVisible}).map(function(Ht){return Ht.a.element})),Pe){var Ut;h&&(Ut=Pe._abs).push.apply(Ut,ex(le,h)),Pe._run.push(ct)}else h&&y1(ex(le,h)),ct();var Na=Pe?Pe.timeline:V;return Na.revert=function(){return Kd(Na,1,1)},Na},B3=function o(a){a.vars.onInterrupt&&a.vars.onInterrupt.apply(a,a.vars.onInterruptParams||[]),a.getChildren(!0,!1,!0).forEach(o)},Kd=function(a,i,l){if(a&&a.progress()<1&&(!a.paused()||l))return i&&(B3(a),i<2&&a.progress(1),a.kill()),!0},Ms=function(a){for(var i=a.idLookup={},l=a.alt={},c=a.elementStates,f=c.length,r;f--;)r=c[f],i[r.id]?l[r.id]=r:i[r.id]=r},Aa=(function(){function o(i,l,c){if(this.props=l&&l.props,this.simple=!!(l&&l.simple),c)this.targets=_1(i),this.elementStates=i,Ms(this);else{this.targets=Oi(i);var f=l&&(l.kill===!1||l.batch&&!l.kill);Pe&&!f&&Pe._kill.push(this),this.update(f||!!Pe)}}var a=o.prototype;return a.update=function(l){var c=this;return this.elementStates=this.targets.map(function(f){return new Nl(f,c.props,c.simple)}),Ms(this),this.interrupt(l),this.recordInlineStyles(),this},a.clear=function(){return this.targets.length=this.elementStates.length=0,Ms(this),this},a.fit=function(l,c,f){for(var r=Zs(this.elementStates.slice(0),!1,!0),m=(l||this).idLookup,x=0,h,g;x<r.length;x++)h=r[x],f&&(h.matrix=Ba(h.element,!1,!1,!0)),g=m[h.id],g&&ji(h,g,c,!0,0,h),h.matrix=Ba(h.element,!1,!1,!0);return this},a.getProperty=function(l,c){var f=this.getElementState(l)||Xs;return(c in f?f:f.props||Xs)[c]},a.add=function(l){for(var c=l.targets.length,f=this.idLookup,r=this.alt,m,x,h;c--;)x=l.elementStates[c],h=f[x.id],h&&(x.element===h.element||r[x.id]&&r[x.id].element===x.element)?(m=this.elementStates.indexOf(x.element===h.element?h:r[x.id]),this.targets.splice(m,1,l.targets[c]),this.elementStates.splice(m,1,x)):(this.targets.push(l.targets[c]),this.elementStates.push(x));return l.interrupted&&(this.interrupted=!0),l.simple||(this.simple=!1),Ms(this),this},a.compare=function(l){var c=l.idLookup,f=this.idLookup,r=[],m=[],x=[],h=[],g=[],b=l.alt,w=this.alt,_=function(E,D,F){return(E.isVisible!==D.isVisible?E.isVisible?x:h:E.isVisible?m:r).push(F)&&g.push(F)},N=function(E,D,F){return g.indexOf(F)<0&&_(E,D,F)},S,T,j,C,A,k,G,L;for(j in c)A=b[j],k=w[j],S=A?w1(l,this,j):c[j],C=S.element,T=f[j],k?(L=T.isVisible||!k.isVisible&&C===T.element?T:k,G=A&&!S.isVisible&&!A.isVisible&&L.element===A.element?A:S,G.isVisible&&L.isVisible&&G.element!==L.element?((G.isDifferent(L)?m:r).push(G.element,L.element),g.push(G.element,L.element)):_(G,L,G.element),A&&G.element===A.element&&(A=c[j]),N(G.element!==T.element&&A?A:G,T,T.element),N(A&&A.element===k.element?A:G,k,k.element),A&&N(A,k.element===A.element?k:T,A.element)):(T?T.isDifferent(S)?_(S,T,C):r.push(C):x.push(C),A&&N(A,T,A.element));for(j in f)c[j]||(h.push(f[j].element),w[j]&&h.push(w[j].element));return{changed:m,unchanged:r,enter:x,leave:h}},a.recordInlineStyles=function(){for(var l=ec[this.props]||tc,c=this.elementStates.length;c--;)to(this.elementStates[c],l)},a.interrupt=function(l){var c=this,f=[];this.targets.forEach(function(r){var m=r._flip,x=Kd(m,l?0:1);l&&x&&f.indexOf(m)<0&&m.add(function(){return c.updateVisibility()}),x&&f.push(m)}),!l&&f.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!f.length)},a.updateVisibility=function(){this.elementStates.forEach(function(l){var c=l.element.getBoundingClientRect();l.isVisible=!!(c.width||c.height||c.top||c.left),l.uncache=1})},a.getElementState=function(l){return this.elementStates[this.targets.indexOf(Xr(l))]},a.makeAbsolute=function(){return Zs(this.elementStates.slice(0),!0,!0).map(Wd)},o})(),Nl=(function(){function o(i,l,c){i instanceof o?Object.assign(this,i,l||{}):(this.element=i,this.update(l,c))}var a=o.prototype;return a.isDifferent=function(l){var c=this.bounds,f=l.bounds;return c.top!==f.top||c.left!==f.left||c.width!==f.width||c.height!==f.height||!this.matrix.equals(l.matrix)||this.opacity!==l.opacity||this.props&&l.props&&JSON.stringify(this.props)!==JSON.stringify(l.props)},a.clone=function(l){return new o(this,l)},a.update=function(l,c){var f=this,r=f.element,m=vt.getProperty(r),x=vt.core.getCache(r),h=r.getBoundingClientRect(),g=r.getBBox&&typeof r.getBBox=="function"&&r.nodeName.toLowerCase()!=="svg"&&r.getBBox(),b=c?new Al(1,0,0,1,h.left+Vd(),h.top+qd()):Ba(r,!1,!1,!0);x.uncache=1,f.getProp=m,f.element=r,f.id=L3(r),f.matrix=b,f.cache=x,f.bounds=h,f.isVisible=!!(h.width||h.height||h.left||h.top),f.display=m("display"),f.position=m("position"),f.parent=r.parentNode,f.x=m("x","px"),f.y=m("y","px"),f.scaleX=x.scaleX,f.scaleY=x.scaleY,f.rotation=m("rotation"),f.skewX=m("skewX"),f.opacity=m("opacity"),f.width=g?g.width:sn(m("width","px"),.04),f.height=g?g.height:sn(m("height","px"),.04),l&&k3(f,Zd[l]||b1(l)),f.ctm=r.getCTM&&r.nodeName.toLowerCase()==="svg"&&g1(r).inverse(),f.simple=c||Ci(b.a)===1&&!Ci(b.b)&&!Ci(b.c)&&Ci(b.d)===1,f.uncache=0},o})(),O3=(function(){function o(i,l){this.vars=i,this.batch=l,this.states=[],this.timeline=l.timeline}var a=o.prototype;return a.getStateById=function(l){for(var c=this.states.length;c--;)if(this.states[c].idLookup[l])return this.states[c]},a.kill=function(){this.batch.remove(this)},o})(),F3=(function(){function o(i){this.id=i,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new Aa,this.timeline=vt.timeline()}var a=o.prototype;return a.add=function(l){var c=this.actions.filter(function(f){return f.vars===l});return c.length?c[0]:(c=new O3(typeof l=="function"?{animate:l}:l,this),this.actions.push(c),c)},a.remove=function(l){var c=this.actions.indexOf(l);return c>=0&&this.actions.splice(c,1),this},a.getState=function(l){var c=this,f=Pe,r=Yr;return Pe=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(m){m.vars.getState&&(m.states.length=0,Yr=m,m.state=m.vars.getState(m)),l&&m.states.forEach(function(x){return c.state.add(x)})}),Yr=r,Pe=f,this.killConflicts(),this},a.animate=function(){var l=this,c=Pe,f=this.timeline,r=this.actions.length,m,x;for(Pe=this,f.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(h){h.vars.animate&&h.vars.animate(h);var g=h.vars.onEnter,b=h.vars.onLeave,w=h.targets,_,N;w&&w.length&&(g||b)&&(_=new Aa,h.states.forEach(function(S){return _.add(S)}),N=_.compare(Fi.getState(w)),N.enter.length&&g&&g(N.enter),N.leave.length&&b&&b(N.leave))}),y1(this._abs),this._run.forEach(function(h){return h()}),x=f.duration(),m=this._final.slice(0),f.add(function(){x<=f.time()&&(m.forEach(function(h){return h()}),Wg(l,"onComplete"))}),Pe=c;r--;)this.actions[r].vars.once&&this.actions[r].kill();return Wg(this,"onStart"),f.restart(),this},a.loadState=function(l){l||(l=function(){return 0});var c=[];return this.actions.forEach(function(f){if(f.vars.loadState){var r,m=function x(h){h&&(f.targets=h),r=c.indexOf(x),~r&&(c.splice(r,1),c.length||l())};c.push(m),f.vars.loadState(m)}}),c.length||l(),this},a.setState=function(){return this.actions.forEach(function(l){return l.targets=l.vars.setState&&l.vars.setState(l)}),this},a.killConflicts=function(l){return this.state.interrupt(l),this._kill.forEach(function(c){return c.interrupt(l)}),this},a.run=function(l,c){var f=this;return this!==Pe&&(l||this.getState(c),this.loadState(function(){f._killed||(f.setState(),f.animate())})),this},a.clear=function(l){this.state.clear(),l||(this.actions.length=0)},a.getStateById=function(l){for(var c=this.actions.length,f;c--;)if(f=this.actions[c].getStateById(l),f)return f;return this.state.idLookup[l]&&this.state},a.kill=function(){this._killed=1,this.clear(),delete Sd[this.id]},o})(),Fi=(function(){function o(){}return o.getState=function(i,l){var c=Xf(i,l);return Yr&&Yr.states.push(c),l&&l.batch&&o.batch(l.batch).state.add(c),c},o.from=function(i,l){return l=l||{},"clearProps"in l||(l.clearProps=!0),Kf(i,Xf(l.targets||i.targets,{props:l.props||i.props,simple:l.simple,kill:!!l.kill}),l,-1)},o.to=function(i,l){return Kf(i,Xf(l.targets||i.targets,{props:l.props||i.props,simple:l.simple,kill:!!l.kill}),l,1)},o.fromTo=function(i,l,c){return Kf(i,l,c)},o.fit=function(i,l,c){var f=c?Ai(c,x1):{},r=c||f,m=r.absolute,x=r.scale,h=r.getVars,g=r.props,b=r.runBackwards,w=r.onComplete,_=r.simple,N=c&&c.fitChild&&Xr(c.fitChild),S=_d(l,g,_,i),T=_d(i,0,_,S),j=g?ec[g]:tc,C=vt.context();return g&&S1(f,S.props),to(T,j),b&&("immediateRender"in f||(f.immediateRender=!0),f.onComplete=function(){Ws(T),w&&w.apply(this,arguments)}),m&&Wd(T,S),f=ji(T,S,x||N,!f.duration&&g,N,f.duration||h?f:0),typeof c=="object"&&"zIndex"in c&&(f.zIndex=c.zIndex),C&&!h&&C.add(function(){return function(){return Ws(T)}}),h?f:f.duration?vt.to(T.element,f):null},o.makeAbsolute=function(i,l){return(i instanceof Aa?i:new Aa(i,l)).makeAbsolute()},o.batch=function(i){return i||(i="default"),Sd[i]||(Sd[i]=new F3(i))},o.killFlipsOf=function(i,l){(i instanceof Aa?i.targets:Oi(i)).forEach(function(c){return c&&Kd(c._flip,l!==!1?1:2)})},o.isFlipping=function(i){var l=o.getByTarget(i);return!!l&&l.isActive()},o.getByTarget=function(i){return(Xr(i)||Xs)._flip},o.getElementState=function(i,l){return new Nl(Xr(i),l)},o.convertCoordinates=function(i,l,c){var f=Ba(l,!0,!0).multiply(Ba(i));return c?f.apply(c):f},o.register=function(i){if(On=typeof document<"u"&&document.body,On){vt=i,Pd(On),Oi=vt.utils.toArray,yd=vt.core.getStyleSaver;var l=vt.utils.snap(.1);sn=function(f,r){return l(parseFloat(f)+r)}}},o})();Fi.version="3.14.2";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(Fi);ga.registerPlugin(Fi);const Qf=["final","plain","columns","grid"],G3=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(null),c=R.useRef(!0),[,f]=dx.useState(0),r=Qf[i.current],m=R.useCallback(()=>{var _;const h=a.current;if(!h)return;const g=h.querySelectorAll(".letter, .for-text, .gsap-text");if(!g.length)return;const b=Fi.getState(g,{props:"color,backgroundColor",simple:!0});i.current=(i.current+1)%Qf.length;const w=Qf[i.current];w3.flushSync(()=>{f(N=>N+1)}),Fi.from(b,{absolute:!0,stagger:o.stagger,duration:o.duration,ease:"power2.inOut",spin:o.spinOnFinal&&w==="final",simple:!0,onEnter:(N,S)=>ga.fromTo(N,{opacity:0},{opacity:1,delay:S.duration()-.1}),onLeave:N=>ga.to(N,{opacity:0})}),(_=l.current)==null||_.kill(),o.autoPlay&&(l.current=ga.delayedCall(w==="final"?3.5:o.interval,m))},[o.stagger,o.duration,o.spinOnFinal,o.autoPlay,o.interval]);R.useEffect(()=>{var h;if((h=l.current)==null||h.kill(),o.autoPlay){const g=c.current?1:r==="final"?3.5:o.interval;c.current=!1,l.current=ga.delayedCall(g,m)}return()=>{var g;(g=l.current)==null||g.kill()}},[o.autoPlay,m]);const x=r==="grid"||r==="columns";return u.jsxs("div",{ref:a,className:`relative w-full h-full flex overflow-hidden justify-center ${x?"flex-wrap content-stretch items-stretch":"items-center"}`,style:{backgroundColor:o.bgColor,containerType:"size"},children:[u.jsx("div",{className:"letter text-center flex items-center justify-center",style:{backgroundColor:r==="plain"?"transparent":o.colorF,color:r==="plain"?o.textColor:"#000",fontSize:`${o.fontSize}cqmax`,fontWeight:400,padding:r==="plain"?0:"2px 6px",flexBasis:r==="grid"?"50%":r==="columns"?"25%":"auto"},children:"F"}),u.jsx("div",{className:"letter text-center flex items-center justify-center",style:{backgroundColor:r==="plain"?"transparent":o.colorL,color:r==="plain"?o.textColor:"#000",fontSize:`${o.fontSize}cqmax`,fontWeight:400,padding:r==="plain"?0:"2px 6px",flexBasis:r==="grid"?"50%":r==="columns"?"25%":"auto"},children:"L"}),u.jsx("div",{className:"letter text-center flex items-center justify-center",style:{backgroundColor:r==="plain"?"transparent":o.colorI,color:r==="plain"?o.textColor:"#000",fontSize:`${o.fontSize}cqmax`,fontWeight:400,padding:r==="plain"?0:"2px 6px",flexBasis:r==="grid"?"50%":r==="columns"?"25%":"auto"},children:"I"}),u.jsx("div",{className:"letter text-center flex items-center justify-center",style:{backgroundColor:r==="plain"?"transparent":o.colorP,color:r==="plain"?o.textColor:"#000",fontSize:`${o.fontSize}cqmax`,fontWeight:400,padding:r==="plain"?0:"2px 6px",flexBasis:r==="grid"?"50%":r==="columns"?"25%":"auto"},children:"P"}),u.jsx("div",{className:"for-text",style:{fontSize:`${o.fontSize/2}cqmax`,color:o.textColor,padding:`2px ${o.fontSize*.16}cqmax`,fontWeight:300,display:r==="final"?"block":"none"},children:"for"}),u.jsx("div",{className:"gsap-text",style:{fontSize:`${o.fontSize/2}cqmax`,color:o.textColor,padding:"2px 0",fontWeight:600,display:r==="final"?"block":"none"},children:"GSAP"}),!o.autoPlay&&u.jsx("button",{onClick:m,className:"absolute bottom-5 right-5 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-colors",children:"Next Layout"})]})},I3={stagger:.07,duration:.7,autoPlay:!0,interval:1.5,spinOnFinal:!0,colorF:"#88ce02",colorL:"#f178b6",colorI:"#7dc8eb",colorP:"#0ae448",textColor:"#ffffff",bgColor:"#1a1a1a",fontSize:10},lx=[{id:"original",label:"Original",colors:{colorF:"#88ce02",colorL:"#f178b6",colorI:"#7dc8eb",colorP:"#0ae448"}},{id:"sunset",label:"Sunset",colors:{colorF:"#ff6b6b",colorL:"#feca57",colorI:"#ff9ff3",colorP:"#ee5a6f"}},{id:"ocean",label:"Ocean",colors:{colorF:"#00d2ff",colorL:"#3a7bd5",colorI:"#2196f3",colorP:"#00bcd4"}},{id:"forest",label:"Forest",colors:{colorF:"#56ab2f",colorL:"#a8e063",colorI:"#38ef7d",colorP:"#11998e"}}],Es=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:a.toFixed(c>=1?0:2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),vi=({label:o,value:a,onChange:i})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("div",{className:"w-4 h-4 rounded border border-neutral-200",style:{backgroundColor:a}})]}),u.jsx("input",{type:"color",value:a,onChange:l=>i(l.target.value),className:"w-full h-7 bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer"})]}),ix=({label:o,value:a,onChange:i})=>u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("button",{onClick:()=>i(!a),className:`relative w-7 h-4 rounded-full transition-colors ${a?"bg-neutral-800":"bg-neutral-300"}`,children:u.jsx("span",{className:`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${a?"translate-x-3":"translate-x-0"}`})})]}),U3=({params:o,onChange:a})=>{const i=c=>{a({...o,...c.colors})},l=lx.find(c=>c.colors.colorF===o.colorF&&c.colors.colorL===o.colorL&&c.colors.colorI===o.colorI&&c.colors.colorP===o.colorP);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Presets"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:lx.map(c=>u.jsx("button",{onClick:()=>i(c),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===c.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${c.colors.colorF}, ${c.colors.colorL}, ${c.colors.colorI}, ${c.colors.colorP})`},title:c.label},c.id))}),l&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Letter Colors"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(vi,{label:"F Color",value:o.colorF,onChange:c=>a({...o,colorF:c})}),u.jsx(vi,{label:"L Color",value:o.colorL,onChange:c=>a({...o,colorL:c})}),u.jsx(vi,{label:"I Color",value:o.colorI,onChange:c=>a({...o,colorI:c})}),u.jsx(vi,{label:"P Color",value:o.colorP,onChange:c=>a({...o,colorP:c})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Background & Text"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(vi,{label:"Background",value:o.bgColor,onChange:c=>a({...o,bgColor:c})}),u.jsx(vi,{label:"Text Color",value:o.textColor,onChange:c=>a({...o,textColor:c})}),u.jsx(Es,{label:"Font Size",value:o.fontSize,min:5,max:20,step:.5,onChange:c=>a({...o,fontSize:c})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Es,{label:"Duration",value:o.duration,min:.3,max:2,step:.1,onChange:c=>a({...o,duration:c})}),u.jsx(Es,{label:"Stagger",value:o.stagger,min:0,max:.3,step:.01,onChange:c=>a({...o,stagger:c})}),u.jsx(Es,{label:"Interval",value:o.interval,min:.5,max:5,step:.1,onChange:c=>a({...o,interval:c})}),u.jsx(ix,{label:"Auto Play",value:o.autoPlay,onChange:c=>a({...o,autoPlay:c})}),u.jsx(ix,{label:"Spin on Final",value:o.spinOnFinal,onChange:c=>a({...o,spinOnFinal:c})})]})]})]})};function H3(o){return`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting.css">
  <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting-cells.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Bevan&display=swap');
    html { height: 100%; display: flex; overflow: hidden; }
    body { margin: auto; }
    html, body {
      background: ${o.bgColor};
      color: ${o.textColor};
      font-family: 'Bevan', sans-serif;
      font-size: 18vw;
    }
    *, *:before, *:after {
      animation-timing-function: cubic-bezier(.5, 0, .5, 1);
    }
    :root {
      --duration: ${o.duration}s;
    }
    .char {
      animation-name: char-transform;
      animation-duration: calc(var(--duration));
      animation-fill-mode: both;
      animation-delay: calc(var(--duration) + .05s * (var(--char-total) - var(--char-index)));
      text-shadow: 0 3vh 4vh rgba(0, 0, 0, 0.03);
    }
    .char:first-child {
      animation-name: first-char-transform;
      animation-duration: calc(var(--duration) * 2);
      animation-delay: 0s;
    }
    @keyframes char-transform {
      0% { opacity: 0; transform: translateY(50%); }
      70% { transform: translateY(-6%); }
      90% { transform: translateY(1%); }
      to { transform: translateY(0%); }
    }
    @keyframes char-rotate {
      0% { transform: rotate(30deg); }
      30% { transform: rotate(-10deg); }
      100% { transform: rotate(0deg); }
    }
    @keyframes first-char-transform {
      0% {
        transform: translateX(calc(.75ch * var(--char-total))) translateY(200%);
      }
      40% {
        transform: translateX(calc(.75ch * var(--char-total))) translateY(-10%);
      }
      60% {
        transform: translateX(calc(.75ch * var(--char-total))) translateY(7%);
      }
      100% {
        transform: none;
      }
    }
    @keyframes first-char-rotate {
      0% { transform: rotate(.5turn); }
      40% { transform: rotate(-.1turn); }
      70% { transform: rotate(.1turn); }
      100% { transform: rotate(0turn); }
    }
    .splitting .char {
      visibility: hidden;
    }
    .splitting .char::before {
      visibility: visible;
      animation: inherit;
      animation-name: char-rotate;
      animation-duration: calc(var(--duration) * 1.1);
    }
    .splitting .char:first-child::before {
      animation-name: first-char-rotate;
      animation-duration: inherit;
    }
    .hint {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: .5em;
      font-size: 12px;
      font-family: monospace;
      text-align: center;
      pointer-events: none;
      opacity: 0.5;
    }
  </style>
</head>
<body>
  <div data-splitting>${o.text}</div>
  <div class="hint">Click to replay</div>
  <script src="https://unpkg.com/splitting/dist/splitting.min.js"><\/script>
  <script>
    Splitting();
    var lr = document.querySelector('[data-splitting]');
    window.addEventListener('click', function() {
      var newone = lr.cloneNode(true);
      lr.parentNode.replaceChild(newone, lr);
      lr = newone;
    });
  <\/script>
</body>
</html>`}const P3=({params:o})=>{const a=R.useRef(null),[i,l]=R.useState(0);return R.useEffect(()=>{a.current&&(a.current.srcdoc=H3(o))},[o,i]),u.jsx("div",{className:"w-full h-full relative",children:u.jsx("iframe",{ref:a,className:"w-full h-full border-0",title:"Framers Logo Animation"},i)})},q3=({label:o,value:a,min:i,max:l,step:c,unit:f="",onChange:r})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsxs("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:[a.toFixed(c>=1?0:c>=.1?1:2),f]})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:m=>r(parseFloat(m.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),rx=({label:o,value:a,onChange:i})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("div",{className:"w-4 h-4 rounded border border-neutral-200",style:{backgroundColor:a}})]}),u.jsx("input",{type:"color",value:a,onChange:l=>i(l.target.value),className:"w-full h-7 bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer"})]}),V3=({params:o,onChange:a})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Text"}),u.jsx("input",{type:"text",value:o.text,onChange:i=>a({...o,text:i.target.value}),maxLength:20,className:"w-full px-2 py-1.5 text-xs bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400",placeholder:"Enter text"})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(q3,{label:"Duration",value:o.duration,min:.1,max:2,step:.1,unit:"s",onChange:i=>a({...o,duration:i})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Colors"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(rx,{label:"Background",value:o.bgColor,onChange:i=>a({...o,bgColor:i})}),u.jsx(rx,{label:"Text",value:o.textColor,onChange:i=>a({...o,textColor:i})})]})]})]}),Y3={duration:.5,bgColor:"#26A959",textColor:"#FFFFFF",text:"framers"},_a=[{p:0,color:{r:15,g:25,b:60}},{p:.25,color:{r:40,g:70,b:140}},{p:.45,color:{r:90,g:160,b:200}},{p:.6,color:{r:255,g:220,b:150}},{p:.75,color:{r:255,g:140,b:60}},{p:.9,color:{r:220,g:70,b:40}},{p:1,color:{r:120,g:30,b:60}}];function Jf(o,a,i){return o+(a-o)*i}function X3(o,a,i){return{r:Jf(o.r,a.r,i),g:Jf(o.g,a.g,i),b:Jf(o.b,a.b,i)}}function Z3(o,a){if(o<0)return _a[0].color;o=Math.min(1,Math.max(0,Math.pow(o,a)));for(let i=0;i<_a.length-1;i++)if(o>=_a[i].p&&o<=_a[i+1].p){const l=(o-_a[i].p)/(_a[i+1].p-_a[i].p);return X3(_a[i].color,_a[i+1].color,l)}return _a[_a.length-1].color}function Ds(o,a){const i=Math.random(),l=Math.random(),c=Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*l);return o+c*a}function $f(o,a,i){return Math.min(i,Math.max(a,o))}function W3(o,a){return{r:$f(o.r+(Math.random()*2-1)*a,0,255),g:$f(o.g+(Math.random()*2-1)*a,0,255),b:$f(o.b+(Math.random()*2-1)*a,0,255)}}const K3=({params:o})=>{const a=R.useRef(null),i=R.useRef(null),l=R.useCallback(()=>{const c=a.current,f=i.current;if(!c||!f)return;const r=f.getBoundingClientRect(),m=window.devicePixelRatio||1,x=r.width,h=r.height;c.width=x*m,c.height=h*m,c.style.width=`${x}px`,c.style.height=`${h}px`;const g=c.getContext("2d");if(!g)return;g.scale(m,m),g.fillStyle="white",g.fillRect(0,0,x,h);const b=x*o.spread,w=h*o.spread;for(let _=0;_<o.count;_++){const N=Ds(x/2,b),S=Ds(h/2,w),T=Ds(o.size,o.sizeVariance),j=Ds(o.size,o.sizeVariance),C=Z3(S/h,o.gammaBias),A=W3(C,o.perturbation);g.fillStyle=`rgba(${A.r|0},${A.g|0},${A.b|0},${o.opacity})`,g.fillRect(N,S,T,j)}},[o]);return R.useEffect(()=>{l()},[l]),R.useEffect(()=>{const c=i.current;if(!c)return;const f=new ResizeObserver(()=>l());return f.observe(c),()=>f.disconnect()},[l]),u.jsx("div",{ref:i,className:"w-full h-full",children:u.jsx("canvas",{ref:a,className:"w-full h-full"})})},xl=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:c>=1?a:a.toFixed(c>=.1?1:2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Q3=({params:o,onChange:a})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Distribution"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(xl,{label:"Count",value:o.count,min:500,max:15e3,step:500,onChange:i=>a({...o,count:i})}),u.jsx(xl,{label:"Spread",value:o.spread,min:.1,max:1,step:.05,onChange:i=>a({...o,spread:i})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Shape"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(xl,{label:"Size",value:o.size,min:10,max:120,step:5,onChange:i=>a({...o,size:i})}),u.jsx(xl,{label:"Size Variance",value:o.sizeVariance,min:0,max:60,step:5,onChange:i=>a({...o,sizeVariance:i})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(xl,{label:"Opacity",value:o.opacity,min:.05,max:1,step:.05,onChange:i=>a({...o,opacity:i})}),u.jsx(xl,{label:"Perturbation",value:o.perturbation,min:0,max:80,step:5,onChange:i=>a({...o,perturbation:i})}),u.jsx(xl,{label:"Gamma Bias",value:o.gammaBias,min:.5,max:3,step:.1,onChange:i=>a({...o,gammaBias:i})})]})]})]}),J3={count:7500,size:50,sizeVariance:20,spread:.5,opacity:.3,perturbation:30,gammaBias:1.6};function ed(o,a,i){return o+(a-o)*i}function $3(o){const a=parseInt(o.slice(1,3),16),i=parseInt(o.slice(3,5),16),l=parseInt(o.slice(5,7),16);return[a,i,l]}const e5=({params:o})=>{const a=R.useRef(null),i=R.useRef(o);return i.current=o,R.useEffect(()=>{const l=a.current;if(!l)return;const c=l.getContext("2d");let f,r=0,m=0,x=0,h=[],g="idle",b=0;function w(){const M=l.getBoundingClientRect(),E=window.devicePixelRatio||1;l.width=M.width*E,l.height=M.height*E,c.setTransform(E,0,0,E,0,0),m=M.width/2,x=M.height/2}function _(M){var D;const E=i.current;switch(g=M,b=0,M){case"idle":{h=[{x:m,y:x,radius:0,targetX:m,targetY:x,targetRadius:0}];break}case"grow":{h.length===0&&(h=[{x:m,y:x,radius:0,targetX:m,targetY:x,targetRadius:0}]),h[0].targetRadius=E.particleSize,h[0].targetX=m,h[0].targetY=x;break}case"split":{const F=E.splitCount,V=h[0],$=[];for(let Q=0;Q<F;Q++){const te=Q*2*Math.PI/F;$.push({x:V.x,y:V.y,radius:V.radius,targetX:m+Math.cos(te)*E.scatterRadius,targetY:x+Math.sin(te)*E.scatterRadius,targetRadius:E.particleSize*.45})}h=$;break}case"scatter":break;case"gather":{for(const F of h)F.targetX=m,F.targetY=x,F.targetRadius=E.particleSize*.45;break}case"shrink":{h=[{x:m,y:x,radius:((D=h[0])==null?void 0:D.radius)||E.particleSize*.45,targetX:m,targetY:x,targetRadius:E.particleSize}];break}}}function N(M){const E=i.current.speed;return{idle:.3,grow:1.2,split:1.5,scatter:.8,gather:1.5,shrink:1}[M]/E}const S=["idle","grow","split","scatter","gather","shrink"];function T(){const M=S.indexOf(g);_(S[(M+1)%S.length])}function j(M){const E=i.current,[D,F,V]=$3(E.color),$=M.radius*E.glowIntensity*2;if($>0){const Q=c.createRadialGradient(M.x,M.y,0,M.x,M.y,$);Q.addColorStop(0,`rgba(${D},${F},${V},0.35)`),Q.addColorStop(.5,`rgba(${D},${F},${V},0.1)`),Q.addColorStop(1,`rgba(${D},${F},${V},0)`),c.beginPath(),c.arc(M.x,M.y,$,0,Math.PI*2),c.fillStyle=Q,c.fill()}if(M.radius>0){const Q=c.createRadialGradient(M.x,M.y,0,M.x,M.y,M.radius);Q.addColorStop(0,"rgba(255,255,255,0.95)"),Q.addColorStop(.4,`rgba(${D},${F},${V},0.8)`),Q.addColorStop(1,`rgba(${D},${F},${V},0)`),c.beginPath(),c.arc(M.x,M.y,M.radius,0,Math.PI*2),c.fillStyle=Q,c.fill()}}function C(M){const E=i.current,D=1-Math.pow(.001,M*E.speed);b+=M;for(const F of h)F.x=ed(F.x,F.targetX,D),F.y=ed(F.y,F.targetY,D),F.radius=ed(F.radius,F.targetRadius,D);b>=N(g)&&(g==="shrink"?(h[0].targetRadius=0,h[0].radius<.5&&T()):T())}function A(){const M=i.current,E=l.getBoundingClientRect();c.fillStyle=`rgba(0,0,0,${M.trailAlpha})`,c.fillRect(0,0,E.width,E.height),c.globalCompositeOperation="lighter";for(const D of h)j(D);c.globalCompositeOperation="source-over"}function k(M){const E=r===0?.016:Math.min((M-r)/1e3,.05);r=M,C(E),A(),f=requestAnimationFrame(k)}w();const G=l.getBoundingClientRect();c.fillStyle="#000",c.fillRect(0,0,G.width,G.height),_("idle");const L=new ResizeObserver(()=>w());return L.observe(l),f=requestAnimationFrame(k),()=>{cancelAnimationFrame(f),L.disconnect()}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block",style:{background:"#000"}})},bi=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:c>=1?a:a.toFixed(c>=.1?1:2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),t5=({params:o,onChange:a})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(bi,{label:"Speed",value:o.speed,min:.3,max:3,step:.1,onChange:i=>a({...o,speed:i})}),u.jsx(bi,{label:"Split Count",value:o.splitCount,min:2,max:8,step:1,onChange:i=>a({...o,splitCount:i})}),u.jsx(bi,{label:"Scatter Radius",value:o.scatterRadius,min:50,max:300,step:10,onChange:i=>a({...o,scatterRadius:i})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Particle"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(bi,{label:"Size",value:o.particleSize,min:15,max:80,step:5,onChange:i=>a({...o,particleSize:i})}),u.jsx(bi,{label:"Trail Alpha",value:o.trailAlpha,min:.02,max:.5,step:.01,onChange:i=>a({...o,trailAlpha:i})}),u.jsx(bi,{label:"Glow Intensity",value:o.glowIntensity,min:.5,max:3,step:.1,onChange:i=>a({...o,glowIntensity:i})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsx("input",{type:"color",value:o.color,onChange:i=>a({...o,color:i.target.value}),className:"w-full h-6 rounded cursor-pointer border-0"})]})]}),a5={splitCount:5,speed:1,particleSize:40,scatterRadius:150,color:"#4fc3f7",trailAlpha:.15,glowIntensity:1.5};function td(o,a,i){return o+(a-o)*i}let Or=0;const n5=({params:o})=>{const a=R.useRef(null),i=R.useRef({particles:[],phase:"idle",phaseTimer:0,centerX:0,centerY:0}),l=R.useRef(o);l.current=o;const[c,f]=R.useState([]),r=R.useCallback(()=>{const m=i.current;return{id:Or++,x:m.centerX,y:m.centerY,radius:0,targetX:m.centerX,targetY:m.centerY,targetRadius:0}},[]);return R.useEffect(()=>{const m=a.current;if(!m)return;let x,h=0;function g(){const C=m.getBoundingClientRect();i.current.centerX=C.width/2,i.current.centerY=C.height/2}function b(C){var G;const A=i.current,k=l.current;switch(A.phase=C,A.phaseTimer=0,C){case"idle":{A.particles=[{id:Or++,x:A.centerX,y:A.centerY,radius:0,targetX:A.centerX,targetY:A.centerY,targetRadius:0}];break}case"grow":{A.particles.length===0&&(A.particles=[{id:Or++,x:A.centerX,y:A.centerY,radius:0,targetX:A.centerX,targetY:A.centerY,targetRadius:0}]);const L=A.particles[0];L.targetRadius=k.particleSize,L.targetX=A.centerX,L.targetY=A.centerY;break}case"split":{const L=k.splitCount,M=A.particles[0],E=[];for(let D=0;D<L;D++){const F=D*2*Math.PI/L,V=k.scatterRadius;E.push({id:Or++,x:M.x,y:M.y,radius:M.radius,targetX:A.centerX+Math.cos(F)*V,targetY:A.centerY+Math.sin(F)*V,targetRadius:k.particleSize*.5})}A.particles=E;break}case"scatter":break;case"gather":{for(const L of A.particles)L.targetX=A.centerX,L.targetY=A.centerY,L.targetRadius=k.particleSize*.5;break}case"shrink":{A.particles=[{id:Or++,x:A.centerX,y:A.centerY,radius:((G=A.particles[0])==null?void 0:G.radius)||k.particleSize*.5,targetX:A.centerX,targetY:A.centerY,targetRadius:k.particleSize}];break}}}function w(C){const A=l.current.speed;return{idle:.3,grow:1.2,split:1.5,scatter:.8,gather:1.5,shrink:1}[C]/A}const _=["idle","grow","split","scatter","gather","shrink"];function N(){const C=i.current,A=_.indexOf(C.phase),k=_[(A+1)%_.length];b(k)}function S(C){const A=i.current,k=l.current,G=1-Math.pow(.001,C*k.speed);A.phaseTimer+=C;for(const L of A.particles)L.x=td(L.x,L.targetX,G),L.y=td(L.y,L.targetY,G),L.radius=td(L.radius,L.targetRadius,G);A.phaseTimer>=w(A.phase)&&(A.phase==="shrink"?(A.particles[0].targetRadius=0,A.particles[0].radius<.5&&N()):N()),f([...A.particles])}function T(C){const A=h===0?.016:Math.min((C-h)/1e3,.05);h=C,S(A),x=requestAnimationFrame(T)}g(),b("idle");const j=new ResizeObserver(()=>g());return j.observe(m),x=requestAnimationFrame(T),()=>{cancelAnimationFrame(x),j.disconnect()}},[r]),u.jsx("div",{ref:a,className:"w-full h-full relative overflow-hidden",children:u.jsx("div",{className:"absolute inset-0",style:{filter:`blur(${o.blur}px) contrast(${o.contrast})`,background:"#000"},children:c.map(m=>{const x=m.radius*2;return u.jsx("div",{style:{position:"absolute",left:m.x,top:m.y,width:x,height:x,borderRadius:"50%",background:o.color,transform:"translate(-50%, -50%)",willChange:"left, top, width, height"}},m.id)})})})},yi=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:c>=1?a:a.toFixed(c>=.1?1:2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),l5=({params:o,onChange:a})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(yi,{label:"Speed",value:o.speed,min:.3,max:3,step:.1,onChange:i=>a({...o,speed:i})}),u.jsx(yi,{label:"Split Count",value:o.splitCount,min:2,max:8,step:1,onChange:i=>a({...o,splitCount:i})}),u.jsx(yi,{label:"Scatter Radius",value:o.scatterRadius,min:50,max:300,step:10,onChange:i=>a({...o,scatterRadius:i})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Particle"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(yi,{label:"Size",value:o.particleSize,min:15,max:80,step:5,onChange:i=>a({...o,particleSize:i})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Gooey Filter"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(yi,{label:"Blur",value:o.blur,min:4,max:30,step:1,onChange:i=>a({...o,blur:i})}),u.jsx(yi,{label:"Contrast",value:o.contrast,min:5,max:40,step:1,onChange:i=>a({...o,contrast:i})}),u.jsxs("div",{children:[u.jsx("div",{className:"flex items-center justify-between mb-1",children:u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Color"})}),u.jsx("input",{type:"color",value:o.color,onChange:i=>a({...o,color:i.target.value}),className:"w-full h-6 rounded cursor-pointer border-0"})]})]})]})]}),i5={splitCount:5,speed:1,particleSize:40,scatterRadius:150,color:"#ffffff",blur:12,contrast:20},r5=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,o5=`
#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform float uTime;
uniform vec2 uResolution;

uniform float uBpm;
uniform float uGlobalSpeed;
uniform int uEaseId;

uniform float uMorphBloat;
uniform float uLiquidMix;
uniform float uLiquidK;
uniform float uLiquidMidBoost;

uniform float uSizeMain;
uniform float uStarInnerRatio;
uniform int uStarPoints;

uniform int uSeq[5];

uniform float uRotBase;
uniform float uRotMorph;
uniform float uScaleBreath;
uniform float uScaleMorph;

uniform float uStrokeWidth;
uniform float uGlowStrength;
uniform float uFillStrength;

uniform vec3 uBgColorA;
uniform vec3 uBgColorB;
uniform vec3 uInkColorA;
uniform vec3 uInkColorB;

uniform float uVignette;
uniform float uGrain;

const float PARAM_BEATS_PER_MORPH = 2.0;
const float PARAM_EDGE_SHARPNESS = 42.0;
const float PARAM_GLOW_SHARPNESS = 9.0;
const float PARAM_EDGE_STRENGTH = 0.35;
const float PARAM_SCANLINE = 0.05;

#define PI 3.14159265359

mat2 rot(float a){
    float c = cos(a), s = sin(a);
    return mat2(c,-s,s,c);
}

float hash12(vec2 p){
    p = fract(p*vec2(123.34, 345.45));
    p += dot(p, p+34.345);
    return fract(p.x*p.y);
}

float aaStep(float d){
    float w = fwidth(d);
    return smoothstep(0.0, w, -d);
}

// --- EASING ---
float ease_linear(float t){ return t; }
float ease_smooth(float t){ return t*t*(3.0-2.0*t); }

float ease_cubicInOut(float t){
    t = clamp(t,0.0,1.0);
    return t < 0.5 ? 4.0*t*t*t : 1.0 - pow(-2.0*t+2.0, 3.0)*0.5;
}

float ease_backOut(float t){
    t = clamp(t,0.0,1.0);
    float c1 = 1.70158;
    float c3 = c1 + 1.0;
    return 1.0 + c3*pow(t-1.0,3.0) + c1*pow(t-1.0,2.0);
}

float ease_elasticOut(float t){
    t = clamp(t,0.0,1.0);
    if(t==0.0) return 0.0;
    if(t==1.0) return 1.0;
    float c4 = (2.0*PI)/3.0;
    return pow(2.0, -10.0*t)*sin((t*10.0 - 0.75)*c4) + 1.0;
}

float ease_expoInOut(float t){
    t = clamp(t,0.0,1.0);
    if(t==0.0) return 0.0;
    if(t==1.0) return 1.0;
    if(t < 0.5) return pow(2.0, 20.0*t - 10.0) * 0.5;
    return (2.0 - pow(2.0, -20.0*t + 10.0)) * 0.5;
}

float applyEase(float t){
    if(uEaseId==0) return ease_linear(t);
    if(uEaseId==1) return ease_smooth(t);
    if(uEaseId==2) return ease_cubicInOut(t);
    if(uEaseId==3) return ease_backOut(t);
    if(uEaseId==4) return ease_elasticOut(t);
    return ease_expoInOut(t);
}

// --- SDFs ---
float sdCircle(vec2 p, float r){
    return length(p) - r;
}

float sdBox(vec2 p, vec2 b){
    vec2 d = abs(p) - b;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

float sdEquiTriangle(vec2 p, float r){
    const float k = 1.7320508075688772;
    p.x = abs(p.x) - r;
    p.y = p.y + r/k;
    if(p.x + k*p.y > 0.0){
        p = vec2(p.x - k*p.y, -k*p.x - p.y) * 0.5;
    }
    p.x -= clamp(p.x, -2.0*r, 0.0);
    return -length(p) * sign(p.y);
}

float sdNgon(vec2 p, int n, float r){
    float a = atan(p.y,p.x);
    float l = length(p);
    float m = float(n);
    float sector = 2.0*PI/m;
    float h = cos(floor(0.5 + a/sector)*sector - a) * l;
    return h - r;
}

float sdStar(vec2 p, float r, int n, float innerRatio){
    float a = atan(p.y,p.x);
    float l = length(p);
    float m = float(n);
    float sector = 2.0*PI/m;
    float h = mod(a + sector*0.5, sector) - sector*0.5;
    float k = abs(cos(h*m*0.5));
    float rr = mix(r*innerRatio, r, k);
    return l - rr;
}

float sdRing(vec2 p, float rOuter, float rInner){
    float d1 = length(p) - rOuter;
    float d2 = length(p) - rInner;
    return max(d1, -d2);
}

// --- MORPHING ---
float smin(float a, float b, float k){
    float h = clamp(0.5 + 0.5*(b - a)/k, 0.0, 1.0);
    return mix(b, a, h) - k*h*(1.0 - h);
}

float morphSDF(float d1, float d2, float t){
    float e = applyEase(t);
    float m = mix(d1, d2, e);
    m -= sin(e*PI) * uMorphBloat;

    float mid = smoothstep(0.10, 0.50, e) * (1.0 - smoothstep(0.50, 0.90, e));
    mid *= uLiquidMidBoost;

    float k = mix(uLiquidK, 0.03, abs(e-0.5)*2.0);
    float liquid = smin(d1, d2, k);

    m = mix(m, liquid, clamp(uLiquidMix*mid, 0.0, 1.0));
    return m;
}

float evalShape(int sid, vec2 p, float baseSize){
    if(sid==0) return sdCircle(p, baseSize);
    if(sid==1) return sdBox(p, vec2(baseSize*0.83));
    if(sid==2) return sdEquiTriangle(p*rot(0.2), baseSize*1.15);
    if(sid==3) return sdStar(p*rot(-0.1), baseSize*1.15, uStarPoints, uStarInnerRatio);
    if(sid==4) return sdNgon(p, 6, baseSize*1.02);
    return sdRing(p, baseSize*1.05, baseSize*0.70);
}

// WebGL1: dynamic array index not allowed, use if-else lookup
int seqAt(int i) {
    if(i==0) return uSeq[0];
    if(i==1) return uSeq[1];
    if(i==2) return uSeq[2];
    if(i==3) return uSeq[3];
    return uSeq[4];
}

// --- STYLING ---
vec3 palette(float t){
    float s = 0.5 + 0.5*sin(uTime*0.5 + t*6.2831);
    return mix(uInkColorA, uInkColorB, s);
}

vec3 shade(vec2 p, float d, float phase01){
    float fill = aaStep(d);
    float stroke = smoothstep(uStrokeWidth, 0.0, abs(d));
    float edgeHi = exp(-PARAM_EDGE_SHARPNESS*abs(d));
    float glow   = exp(-PARAM_GLOW_SHARPNESS*max(d, 0.0));

    float flow = 0.6 + 0.4*sin(8.0*p.x - 6.0*p.y + uTime*2.0);
    flow *= 0.7 + 0.3*sin(uTime*1.1 + phase01*6.2831);

    vec3 ink = palette(phase01);
    vec3 col = vec3(0.0);

    col += ink * fill   * (uFillStrength * (0.70 + 0.30*flow));
    col += ink * stroke * 0.25;
    col += ink * edgeHi * PARAM_EDGE_STRENGTH;
    col += ink * glow   * (uGlowStrength * (0.65 + 0.35*flow));

    return col;
}

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;

    float time = uTime * uGlobalSpeed;
    float beats = time * (uBpm / 60.0);
    float morphUnit = PARAM_BEATS_PER_MORPH;
    float segF = floor(beats / morphUnit);
    float t = fract(beats / morphUnit);

    int idx0 = int(mod(segF, 5.0));
    int idx1 = int(mod(segF + 1.0, 5.0));

    int sid0 = seqAt(idx0);
    int sid1 = seqAt(idx1);

    float tE = applyEase(t);
    float ang = uRotBase
              + uRotMorph * (float(idx0) + tE) * 0.35
              + 0.15*sin(time*0.4);

    vec2 p = uv * rot(-ang);

    float scale = 1.0
                + uScaleBreath * sin(time*0.9)
                + uScaleMorph  * sin(tE*PI)*0.5;
    p *= (1.0/scale);

    float d1 = evalShape(sid0, p, uSizeMain);
    float d2 = evalShape(sid1, p, uSizeMain);

    float d = morphSDF(d1, d2, t);

    // BG
    vec3 bg = mix(uBgColorA, uBgColorB, 0.5 + 0.5*uv.y);
    bg += 0.03*vec3(0.02,0.04,0.08) * (0.5 + 0.5*sin(time*0.7));

    float phase01 = fract(segF / 5.0);
    vec3 col = bg + shade(p, d, phase01);

    // Post
    float vig = smoothstep(1.2, 0.25, length(uv));
    col *= (1.0 - uVignette) + uVignette*vig;

    float scan = 1.0 - PARAM_SCANLINE + PARAM_SCANLINE*(0.5 + 0.5*sin(gl_FragCoord.y*1.6));
    col *= scan;

    float g = hash12(gl_FragCoord.xy + time*60.0) - 0.5;
    col += g * uGrain;

    col = sqrt(max(col, 0.0));
    gl_FragColor = vec4(col, 1.0);
}
`;function zs(o){const a=parseInt(o.replace("#",""),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}const s5=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;r.getExtension("OES_standard_derivatives");const m=(ie,oe)=>{const ve=r.createShader(oe);return r.shaderSource(ve,ie),r.compileShader(ve),r.getShaderParameter(ve,r.COMPILE_STATUS)?ve:(console.error("Shader compile error:",r.getShaderInfoLog(ve)),r.deleteShader(ve),null)},x=m(r5,r.VERTEX_SHADER),h=m(o5,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),!r.getProgramParameter(g,r.LINK_STATUS)){console.error("Program link error:",r.getProgramInfoLog(g));return}r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"uTime"),S=r.getUniformLocation(g,"uResolution"),T=r.getUniformLocation(g,"uBpm"),j=r.getUniformLocation(g,"uGlobalSpeed"),C=r.getUniformLocation(g,"uEaseId"),A=r.getUniformLocation(g,"uMorphBloat"),k=r.getUniformLocation(g,"uLiquidMix"),G=r.getUniformLocation(g,"uLiquidK"),L=r.getUniformLocation(g,"uLiquidMidBoost"),M=r.getUniformLocation(g,"uSizeMain"),E=r.getUniformLocation(g,"uStarInnerRatio"),D=r.getUniformLocation(g,"uStarPoints"),F=Array.from({length:5},(ie,oe)=>r.getUniformLocation(g,`uSeq[${oe}]`)),V=r.getUniformLocation(g,"uRotBase"),$=r.getUniformLocation(g,"uRotMorph"),Q=r.getUniformLocation(g,"uScaleBreath"),te=r.getUniformLocation(g,"uScaleMorph"),le=r.getUniformLocation(g,"uStrokeWidth"),U=r.getUniformLocation(g,"uGlowStrength"),W=r.getUniformLocation(g,"uFillStrength"),re=r.getUniformLocation(g,"uBgColorA"),ce=r.getUniformLocation(g,"uBgColorB"),me=r.getUniformLocation(g,"uInkColorA"),B=r.getUniformLocation(g,"uInkColorB"),Y=r.getUniformLocation(g,"uVignette"),ae=r.getUniformLocation(g,"uGrain");let ee=!0;const ne=()=>{if(!ee)return;const ie=window.devicePixelRatio||1,oe=f.clientWidth*ie,ve=f.clientHeight*ie;(f.width!==oe||f.height!==ve)&&(f.width=oe,f.height=ve,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const Re=(Date.now()-l.current)/1e3,pe=c.current;r.uniform1f(N,Re),r.uniform2f(S,f.width,f.height),r.uniform1f(T,pe.bpm),r.uniform1f(j,pe.globalSpeed),r.uniform1i(C,pe.easeId),r.uniform1f(A,pe.morphBloat),r.uniform1f(k,pe.liquidMix),r.uniform1f(G,pe.liquidK),r.uniform1f(L,pe.liquidMidBoost),r.uniform1f(M,pe.shapeSize),r.uniform1f(E,pe.starInnerRatio),r.uniform1i(D,pe.starPoints);for(let Ut=0;Ut<5;Ut++)r.uniform1i(F[Ut],pe.sequence[Ut]);r.uniform1f(V,pe.rotBase),r.uniform1f($,pe.rotMorph),r.uniform1f(Q,pe.scaleBreath),r.uniform1f(te,pe.scaleMorph),r.uniform1f(le,pe.strokeWidth),r.uniform1f(U,pe.glowStrength),r.uniform1f(W,pe.fillStrength);const qe=zs(pe.bgColorA),ct=zs(pe.bgColorB),Te=zs(pe.inkColorA),Ee=zs(pe.inkColorB);r.uniform3f(re,qe[0],qe[1],qe[2]),r.uniform3f(ce,ct[0],ct[1],ct[2]),r.uniform3f(me,Te[0],Te[1],Te[2]),r.uniform3f(B,Ee[0],Ee[1],Ee[2]),r.uniform1f(Y,pe.vignette),r.uniform1f(ae,pe.grain),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(ne)};return ne(),()=>{ee=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block"})},c5=["Circle","Box","Triangle","Star","Hexagon","Ring"],u5=["Linear","Smooth","Cubic InOut","Back Out","Elastic Out","Expo InOut"],Ct=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:c>=1?a:a.toFixed(c>=.1?1:2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),f5=({params:o,onChange:a})=>{const i=(c,f)=>{a({...o,[c]:f})},l=(c,f)=>{const r=[...o.sequence];r[c]=f,i("sequence",r)};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Timeline"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ct,{label:"BPM",value:o.bpm,min:60,max:180,step:1,onChange:c=>i("bpm",c)}),u.jsx(Ct,{label:"Speed",value:o.globalSpeed,min:0,max:3,step:.01,onChange:c=>i("globalSpeed",c)}),u.jsxs("div",{children:[u.jsx("div",{className:"flex items-center justify-between mb-1",children:u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Easing"})}),u.jsx("select",{value:o.easeId,onChange:c=>i("easeId",parseInt(c.target.value)),className:"w-full text-[10px] px-2 py-1 rounded-lg bg-neutral-100 text-neutral-700 border-0 outline-none cursor-pointer",children:u5.map((c,f)=>u.jsx("option",{value:f,children:c},f))})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Shape Sequence"}),u.jsx("div",{className:"grid grid-cols-5 gap-1 mb-2",children:o.sequence.map((c,f)=>u.jsxs("div",{className:"flex flex-col items-center gap-1",children:[u.jsx("span",{className:"text-[8px] text-neutral-400",children:f+1}),u.jsx("select",{value:c,onChange:r=>l(f,parseInt(r.target.value)),className:"w-full text-[9px] px-1 py-0.5 rounded bg-neutral-100 text-neutral-700 border-0 outline-none cursor-pointer text-center",children:c5.map((r,m)=>u.jsx("option",{value:m,children:r},m))})]},f))})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Morph Physics"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ct,{label:"Liquid Mix",value:o.liquidMix,min:0,max:1,step:.01,onChange:c=>i("liquidMix",c)}),u.jsx(Ct,{label:"Viscosity",value:o.liquidK,min:.01,max:.5,step:.01,onChange:c=>i("liquidK",c)}),u.jsx(Ct,{label:"Bloat",value:o.morphBloat,min:-.5,max:.5,step:.01,onChange:c=>i("morphBloat",c)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Motion"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ct,{label:"Base Rotation",value:o.rotBase,min:0,max:1,step:.01,onChange:c=>i("rotBase",c)}),u.jsx(Ct,{label:"Morph Rotation",value:o.rotMorph,min:0,max:2,step:.01,onChange:c=>i("rotMorph",c)}),u.jsx(Ct,{label:"Breath Scale",value:o.scaleBreath,min:0,max:.2,step:.01,onChange:c=>i("scaleBreath",c)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Style"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ct,{label:"Stroke Width",value:o.strokeWidth,min:.001,max:.1,step:.001,onChange:c=>i("strokeWidth",c)}),u.jsx(Ct,{label:"Glow",value:o.glowStrength,min:0,max:1,step:.01,onChange:c=>i("glowStrength",c)}),u.jsx(Ct,{label:"Fill",value:o.fillStrength,min:0,max:1,step:.01,onChange:c=>i("fillStrength",c)}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-1",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Ink A"}),u.jsx("input",{type:"color",value:o.inkColorA,onChange:c=>i("inkColorA",c.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Ink B"}),u.jsx("input",{type:"color",value:o.inkColorB,onChange:c=>i("inkColorB",c.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Bg A"}),u.jsx("input",{type:"color",value:o.bgColorA,onChange:c=>i("bgColorA",c.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Bg B"}),u.jsx("input",{type:"color",value:o.bgColorB,onChange:c=>i("bgColorB",c.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Shape Geometry"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ct,{label:"Size",value:o.shapeSize,min:.1,max:.8,step:.01,onChange:c=>i("shapeSize",c)}),u.jsx(Ct,{label:"Star Inner Ratio",value:o.starInnerRatio,min:.1,max:.9,step:.01,onChange:c=>i("starInnerRatio",c)}),u.jsx(Ct,{label:"Star Points",value:o.starPoints,min:3,max:10,step:1,onChange:c=>i("starPoints",c)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Post Processing"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ct,{label:"Vignette",value:o.vignette,min:0,max:1,step:.01,onChange:c=>i("vignette",c)}),u.jsx(Ct,{label:"Grain",value:o.grain,min:0,max:.2,step:.01,onChange:c=>i("grain",c)})]})]})]})},d5={bpm:112,globalSpeed:1,easeId:2,morphBloat:.08,liquidMix:.7,liquidK:.18,liquidMidBoost:1,shapeSize:.36,starPoints:5,starInnerRatio:.45,sequence:[0,1,2,3,0],rotBase:.15,rotMorph:.55,scaleBreath:.06,scaleMorph:.08,strokeWidth:.018,glowStrength:.35,fillStrength:.7,bgColorA:"#05060a",bgColorB:"#080f1a",inkColorA:"#1e59f2",inkColorB:"#e640bf",vignette:.35,grain:.03},m5=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,p5=`
#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform float uTime;
uniform vec2 uResolution;

uniform float uLetterDuration;
uniform float uStrokeW;
uniform float uLiquidMix;
uniform float uLiquidK;
uniform float uBloat;
uniform float uGlowSharp;
uniform float uEdgeSharp;
uniform vec3 uInkColorA;
uniform vec3 uInkColorB;
uniform vec3 uBgColorA;
uniform vec3 uBgColorB;
uniform float uVignette;
uniform float uGrain;

#define PI 3.14159265359

// ---------- SDF helpers ----------
float sdSegment(vec2 p, vec2 a, vec2 b){
    vec2 pa = p - a, ba = b - a;
    float h = clamp(dot(pa,ba)/dot(ba,ba), 0.0, 1.0);
    return length(pa - ba*h);
}

float sdRingStroke(vec2 p, float r, float w){
    return abs(length(p) - r) - w;
}

float smin(float a, float b, float k){
    float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);
    return mix(b, a, h) - k*h*(1.0-h);
}

float easeInOutCubic(float t){
    t = clamp(t, 0.0, 1.0);
    return (t < 0.5) ? 4.0*t*t*t : 1.0 - pow(-2.0*t+2.0, 3.0)*0.5;
}

float aaFill(float d){
    float w = fwidth(d);
    return smoothstep(0.0, w, -d);
}

// ---------- Glyph SDF (A-Z) ----------
float sdGlyph(int c, vec2 p){
    float d = 1e5;

    float L = -0.35, R = 0.35;
    float T =  0.45, B = -0.45;
    float M =  0.00;
    float U =  0.22;
    float D = -0.22;
    float XR = 0.22;

    #define ADD(a,b) d = min(d, sdSegment(p, (a), (b)))

    // A
    if(c==0){
        ADD(vec2(L,B), vec2(0.0,T));
        ADD(vec2(R,B), vec2(0.0,T));
        ADD(vec2(-0.20,M), vec2(0.20,M));
    }
    // B
    else if(c==1){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,T),  vec2(XR,T));
        ADD(vec2(XR,T), vec2(XR,M));
        ADD(vec2(XR,M), vec2(L,M));
        ADD(vec2(L,M),  vec2(XR,M));
        ADD(vec2(XR,M), vec2(XR,B));
        ADD(vec2(XR,B), vec2(L,B));
    }
    // C
    else if(c==2){
        float arc = sdRingStroke(p, 0.34, uStrokeW);
        arc = max(arc, p.x - 0.18);
        d = min(d, arc);
    }
    // D
    else if(c==3){
        ADD(vec2(L,B), vec2(L,T));
        float arc = sdRingStroke(p - vec2(L+0.02, 0.0), 0.38, uStrokeW);
        arc = max(arc, -(p.x - (L+0.02)));
        d = min(d, arc);
    }
    // E
    else if(c==4){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,T), vec2(R,T));
        ADD(vec2(L,M), vec2(0.25,M));
        ADD(vec2(L,B), vec2(R,B));
    }
    // F
    else if(c==5){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,T), vec2(R,T));
        ADD(vec2(L,M), vec2(0.22,M));
    }
    // G
    else if(c==6){
        float arc = sdRingStroke(p, 0.34, uStrokeW);
        arc = max(arc, p.x - 0.18);
        d = min(d, arc);
        ADD(vec2(0.02, D), vec2(0.30, D));
        ADD(vec2(0.30, D), vec2(0.30, -0.02));
    }
    // H
    else if(c==7){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(R,B), vec2(R,T));
        ADD(vec2(L,M), vec2(R,M));
    }
    // I
    else if(c==8){
        ADD(vec2(L,T), vec2(R,T));
        ADD(vec2(0.0,B), vec2(0.0,T));
        ADD(vec2(L,B), vec2(R,B));
    }
    // J
    else if(c==9){
        ADD(vec2(L,T), vec2(R,T));
        ADD(vec2(0.18,T), vec2(0.18, B+0.14));
        vec2 pc = p - vec2(0.00, B+0.14);
        float hook = sdRingStroke(pc, 0.23, uStrokeW);
        hook = max(hook, (pc.y));
        hook = max(hook, (pc.x - 0.18));
        d = min(d, hook);
    }
    // K
    else if(c==10){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,M), vec2(R,T));
        ADD(vec2(L,M), vec2(R,B));
    }
    // L
    else if(c==11){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,B), vec2(R,B));
    }
    // M
    else if(c==12){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(R,B), vec2(R,T));
        ADD(vec2(L,T), vec2(0.0, 0.12));
        ADD(vec2(R,T), vec2(0.0, 0.12));
    }
    // N
    else if(c==13){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(R,B), vec2(R,T));
        ADD(vec2(L,T), vec2(R,B));
    }
    // O
    else if(c==14){
        d = min(d, sdRingStroke(p, 0.34, uStrokeW));
    }
    // P
    else if(c==15){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,T), vec2(XR,T));
        ADD(vec2(XR,T), vec2(XR,M));
        ADD(vec2(XR,M), vec2(L,M));
    }
    // Q
    else if(c==16){
        d = min(d, sdRingStroke(p, 0.34, uStrokeW));
        ADD(vec2(0.08,-0.10), vec2(0.34,-0.44));
    }
    // R
    else if(c==17){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,T), vec2(XR,T));
        ADD(vec2(XR,T), vec2(XR,M));
        ADD(vec2(XR,M), vec2(L,M));
        ADD(vec2(0.02,M-0.02), vec2(R,B));
    }
    // S
    else if(c==18){
        float topArc = sdRingStroke(p - vec2(0.00, 0.17), 0.22, uStrokeW);
        topArc = max(topArc, -(p.y - 0.17));
        float botArc = sdRingStroke(p - vec2(0.00,-0.17), 0.22, uStrokeW);
        botArc = max(botArc,  (p.y + 0.17));
        d = min(d, topArc);
        d = min(d, botArc);
        ADD(vec2(-0.22, 0.05), vec2(0.22,-0.05));
    }
    // T
    else if(c==19){
        ADD(vec2(L,T), vec2(R,T));
        ADD(vec2(0.0,B), vec2(0.0,T));
    }
    // U
    else if(c==20){
        float yCut = B + 0.14;
        ADD(vec2(L,T), vec2(L, yCut));
        ADD(vec2(R,T), vec2(R, yCut));
        vec2 pc = p - vec2(0.0, yCut);
        float uArc = sdRingStroke(pc, 0.35, uStrokeW);
        uArc = max(uArc, pc.y);
        d = min(d, uArc);
    }
    // V
    else if(c==21){
        ADD(vec2(L,T), vec2(0.0,B));
        ADD(vec2(R,T), vec2(0.0,B));
    }
    // W
    else if(c==22){
        ADD(vec2(L,T), vec2(-0.18,B));
        ADD(vec2(-0.18,B), vec2(0.0, D));
        ADD(vec2(0.0, D), vec2(0.18,B));
        ADD(vec2(0.18,B), vec2(R,T));
    }
    // X
    else if(c==23){
        ADD(vec2(L,B), vec2(R,T));
        ADD(vec2(L,T), vec2(R,B));
    }
    // Y
    else if(c==24){
        ADD(vec2(L,T), vec2(0.0, 0.05));
        ADD(vec2(R,T), vec2(0.0, 0.05));
        ADD(vec2(0.0, 0.05), vec2(0.0,B));
    }
    // Z
    else {
        ADD(vec2(L,T), vec2(R,T));
        ADD(vec2(R,T), vec2(L,B));
        ADD(vec2(L,B), vec2(R,B));
    }

    #undef ADD

    return d - uStrokeW;
}

// ---------- Morph ----------
float morphSDF(float d1, float d2, float t){
    float e = easeInOutCubic(t);
    float m = mix(d1, d2, e);
    m -= sin(e * PI) * uBloat;

    float mid = smoothstep(0.10, 0.50, e) * (1.0 - smoothstep(0.50, 0.90, e));
    float k   = mix(uLiquidK, 0.03, abs(e-0.5)*2.0);
    float liq = smin(d1, d2, k);

    m = mix(m, liq, clamp(uLiquidMix * mid, 0.0, 1.0));
    return m;
}

// ---------- Shading ----------
vec3 shade(vec2 p, float d, float phase){
    float fill  = aaFill(d);
    float edge  = exp(-uEdgeSharp * abs(d));
    float glow  = exp(-uGlowSharp * max(d, 0.0));

    float flow = 0.6 + 0.4*sin(8.0*p.x - 6.0*p.y + uTime*2.0);
    flow *= 0.7 + 0.3*sin(uTime*1.1 + phase*6.2831);

    vec3 ink = mix(uInkColorA, uInkColorB,
                   0.35 + 0.35*sin(uTime*0.6 + phase*6.2831));

    vec3 col = vec3(0.0);
    col += ink * fill * (0.70 + 0.30*flow);
    col += ink * edge * 0.35;
    col += ink * glow * (0.25 + 0.30*flow);
    return col;
}

void main(){
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;

    // Background
    vec3 bg = mix(uBgColorA, uBgColorB, 0.5 + 0.5*uv.y);
    float vign = smoothstep(1.25, 0.25, length(uv));
    bg *= (1.0 - uVignette) + uVignette * vign;

    // Timeline A->Z
    float tt  = uTime / uLetterDuration;
    float seg = floor(tt);
    float t   = fract(tt);

    int c0 = int(mod(seg, 26.0));
    int c1 = int(mod(seg + 1.0, 26.0));

    vec2 p = uv;
    float e  = easeInOutCubic(t);
    float sc = 1.0 + 0.04*sin(uTime*0.9) + 0.05*sin(e*PI);
    p /= sc;

    float d0 = sdGlyph(c0, p);
    float d1 = sdGlyph(c1, p);
    float d  = morphSDF(d0, d1, t);

    float phase = float(c0) / 26.0;
    vec3 col = bg + shade(p, d, phase);

    // scanline + grain
    float scan  = 0.95 + 0.05*sin(gl_FragCoord.y*1.5);
    float grain = fract(sin(dot(gl_FragCoord.xy + uTime*60.0, vec2(12.9898,78.233))) * 43758.5453);
    col = col*scan + (grain - 0.5) * uGrain;

    col = sqrt(max(col, 0.0));
    gl_FragColor = vec4(col, 1.0);
}
`;function ks(o){const a=parseInt(o.replace("#",""),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}const h5=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const f=a.current;if(!f)return;const r=f.getContext("webgl");if(!r)return;r.getExtension("OES_standard_derivatives");const m=(le,U)=>{const W=r.createShader(U);return r.shaderSource(W,le),r.compileShader(W),r.getShaderParameter(W,r.COMPILE_STATUS)?W:(console.error("Shader compile error:",r.getShaderInfoLog(W)),r.deleteShader(W),null)},x=m(m5,r.VERTEX_SHADER),h=m(p5,r.FRAGMENT_SHADER);if(!x||!h)return;const g=r.createProgram();if(r.attachShader(g,x),r.attachShader(g,h),r.linkProgram(g),!r.getProgramParameter(g,r.LINK_STATUS)){console.error("Program link error:",r.getProgramInfoLog(g));return}r.useProgram(g);const b=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,w),r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);const _=r.getAttribLocation(g,"position");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0);const N=r.getUniformLocation(g,"uTime"),S=r.getUniformLocation(g,"uResolution"),T=r.getUniformLocation(g,"uLetterDuration"),j=r.getUniformLocation(g,"uStrokeW"),C=r.getUniformLocation(g,"uLiquidMix"),A=r.getUniformLocation(g,"uLiquidK"),k=r.getUniformLocation(g,"uBloat"),G=r.getUniformLocation(g,"uGlowSharp"),L=r.getUniformLocation(g,"uEdgeSharp"),M=r.getUniformLocation(g,"uInkColorA"),E=r.getUniformLocation(g,"uInkColorB"),D=r.getUniformLocation(g,"uBgColorA"),F=r.getUniformLocation(g,"uBgColorB"),V=r.getUniformLocation(g,"uVignette"),$=r.getUniformLocation(g,"uGrain");let Q=!0;const te=()=>{if(!Q)return;const le=window.devicePixelRatio||1,U=f.clientWidth*le,W=f.clientHeight*le;(f.width!==U||f.height!==W)&&(f.width=U,f.height=W,r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight));const re=(Date.now()-l.current)/1e3,ce=c.current;r.uniform1f(N,re),r.uniform2f(S,f.width,f.height),r.uniform1f(T,ce.letterDuration),r.uniform1f(j,ce.strokeWidth),r.uniform1f(C,ce.liquidMix),r.uniform1f(A,ce.liquidK),r.uniform1f(k,ce.bloat),r.uniform1f(G,ce.glowSharp),r.uniform1f(L,ce.edgeSharp);const me=ks(ce.inkColorA),B=ks(ce.inkColorB),Y=ks(ce.bgColorA),ae=ks(ce.bgColorB);r.uniform3f(M,me[0],me[1],me[2]),r.uniform3f(E,B[0],B[1],B[2]),r.uniform3f(D,Y[0],Y[1],Y[2]),r.uniform3f(F,ae[0],ae[1],ae[2]),r.uniform1f(V,ce.vignette),r.uniform1f($,ce.grain),r.drawArrays(r.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(te)};return te(),()=>{Q=!1,cancelAnimationFrame(i.current),r.deleteProgram(g)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block"})},an=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:c>=1?a:a.toFixed(c>=.1?1:c>=.01?2:3)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),g5=({params:o,onChange:a})=>{const i=(l,c)=>{a({...o,[l]:c})};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Timeline"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(an,{label:"Letter Duration",value:o.letterDuration,min:.3,max:4,step:.1,onChange:l=>i("letterDuration",l)})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Glyph"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(an,{label:"Stroke Width",value:o.strokeWidth,min:.01,max:.15,step:.005,onChange:l=>i("strokeWidth",l)})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Morph Physics"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(an,{label:"Liquid Mix",value:o.liquidMix,min:0,max:1,step:.01,onChange:l=>i("liquidMix",l)}),u.jsx(an,{label:"Viscosity",value:o.liquidK,min:.01,max:.5,step:.01,onChange:l=>i("liquidK",l)}),u.jsx(an,{label:"Bloat",value:o.bloat,min:-.3,max:.3,step:.01,onChange:l=>i("bloat",l)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Style"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(an,{label:"Glow",value:o.glowSharp,min:2,max:30,step:.5,onChange:l=>i("glowSharp",l)}),u.jsx(an,{label:"Edge",value:o.edgeSharp,min:10,max:80,step:1,onChange:l=>i("edgeSharp",l)}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-1",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Ink A"}),u.jsx("input",{type:"color",value:o.inkColorA,onChange:l=>i("inkColorA",l.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Ink B"}),u.jsx("input",{type:"color",value:o.inkColorB,onChange:l=>i("inkColorB",l.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Bg A"}),u.jsx("input",{type:"color",value:o.bgColorA,onChange:l=>i("bgColorA",l.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Bg B"}),u.jsx("input",{type:"color",value:o.bgColorB,onChange:l=>i("bgColorB",l.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Post Processing"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(an,{label:"Vignette",value:o.vignette,min:0,max:1,step:.01,onChange:l=>i("vignette",l)}),u.jsx(an,{label:"Grain",value:o.grain,min:0,max:.15,step:.01,onChange:l=>i("grain",l)})]})]})]})},x5={letterDuration:1.2,strokeWidth:.055,liquidMix:.7,liquidK:.18,bloat:.08,glowSharp:10,edgeSharp:42,inkColorA:"#1e59f2",inkColorB:"#e640bf",bgColorA:"#05060a",bgColorB:"#080f1a",vignette:.25,grain:.03},v5={blob:[{freq:2,amp:.15,phase:0},{freq:3,amp:.1,phase:1.2}],star:[{freq:5,amp:.3,phase:0},{freq:10,amp:.05,phase:.5}],organic:[{freq:3,amp:.12,phase:0},{freq:5,amp:.08,phase:2.1},{freq:7,amp:.05,phase:.7}],flower:[{freq:6,amp:.2,phase:0},{freq:3,amp:.05,phase:1.5},{freq:12,amp:.03,phase:0}]};function Mi(o,a,i){return o+(a-o)*i}function ad(o,a){const i=v5[o],l=i.map(f=>({...f})),c=Math.max(0,a-i.length);for(let f=0;f<c;f++)l.push({freq:(f+l.length+1)*2+1,amp:.04/(f+1),phase:f*1.618});return l}function ox(o,a,i){const l=Math.max(o.length,a.length),c=[];for(let f=0;f<l;f++){const r=o[f]||{freq:a[f].freq,amp:0,phase:a[f].phase},m=a[f]||{freq:o[f].freq,amp:0,phase:o[f].phase};c.push({freq:Mi(r.freq,m.freq,i),amp:Mi(r.amp,m.amp,i),phase:Mi(r.phase,m.phase,i)})}return c}function b5(o,a,i,l,c,f){const r=[];for(let m=0;m<f;m++){const x=m/f*Math.PI*2;let h=i;for(const g of l)h+=i*g.amp*Math.sin(g.freq*x+g.phase+c);r.push([o+h*Math.cos(x),a+h*Math.sin(x)])}return y5(r)}function y5(o){const a=o.length;if(a<3)return"";let i=`M ${o[0][0].toFixed(1)} ${o[0][1].toFixed(1)}`;for(let l=0;l<a;l++){const c=o[(l-1+a)%a],f=o[l],r=o[(l+1)%a],m=o[(l+2)%a],x=f[0]+(r[0]-c[0])/6,h=f[1]+(r[1]-c[1])/6,g=r[0]-(m[0]-f[0])/6,b=r[1]-(m[1]-f[1])/6;i+=` C ${x.toFixed(1)} ${h.toFixed(1)}, ${g.toFixed(1)} ${b.toFixed(1)}, ${r[0].toFixed(1)} ${r[1].toFixed(1)}`}return i+=" Z",i}let S5=0;const nd=["idle","expand","splash","absorb","fill","shrink"],_5={idle:.3,expand:.8,splash:.4,absorb:.6,fill:.3,shrink:.5},w5=({params:o})=>{const a=R.useRef(null),i=R.useRef({phase:"idle",phaseTimer:0,blobRadius:0,targetRadius:20,time:0,centerX:0,centerY:0,viewportDiag:1e3,splashParticles:[],currentHarmonics:ad("blob",6),targetHarmonics:ad("blob",6),morphProgress:1,lastShape:"blob",lastComplexity:6}),l=R.useRef(o);l.current=o;const[c,f]=R.useState(""),[r,m]=R.useState([]);return R.useEffect(()=>{const x=a.current;if(!x)return;let h,g=0;function b(){const j=x.getBoundingClientRect();i.current.centerX=j.width/2,i.current.centerY=j.height/2,i.current.viewportDiag=Math.sqrt(j.width*j.width+j.height*j.height)/2+50}function w(j){const C=i.current,A=l.current;switch(C.phase=j,C.phaseTimer=0,j){case"idle":C.targetRadius=20,C.splashParticles=[];break;case"expand":C.targetRadius=Math.min(C.centerX,C.centerY)*.3;break;case"splash":{const k=A.particleCount,G=[];for(let L=0;L<k;L++){const M=L/k*Math.PI*2+Math.random()*.3,E=C.blobRadius*.9,D=A.splashForce;G.push({id:S5++,x:C.centerX+Math.cos(M)*E,y:C.centerY+Math.sin(M)*E,targetX:C.centerX+Math.cos(M)*E*(1+D*1.5),targetY:C.centerY+Math.sin(M)*E*(1+D*1.5),radius:8+Math.random()*12})}C.splashParticles=G;break}case"absorb":for(const k of C.splashParticles)k.targetX=C.centerX,k.targetY=C.centerY;break;case"fill":C.targetRadius=C.viewportDiag,C.splashParticles=[];break;case"shrink":C.targetRadius=0;break}}function _(){const j=i.current,C=nd.indexOf(j.phase);w(nd[(C+1)%nd.length])}function N(j){const C=i.current,A=l.current;C.time+=j*A.speed*2,C.phaseTimer+=j;const k=1-Math.pow(.001,j*A.speed*2);C.blobRadius=Mi(C.blobRadius,C.targetRadius,k);const G=1-Math.pow(.001,j*A.speed);for(const E of C.splashParticles)E.x=Mi(E.x,E.targetX,G),E.y=Mi(E.y,E.targetY,G);(A.shape!==C.lastShape||A.complexity!==C.lastComplexity)&&(C.currentHarmonics=C.morphProgress>=1?C.targetHarmonics.map(E=>({...E})):ox(C.currentHarmonics,C.targetHarmonics,C.morphProgress),C.targetHarmonics=ad(A.shape,A.complexity),C.morphProgress=0,C.lastShape=A.shape,C.lastComplexity=A.complexity),C.morphProgress<1&&(C.morphProgress=Math.min(1,C.morphProgress+j*2));const L=C.morphProgress>=1?C.targetHarmonics:ox(C.currentHarmonics,C.targetHarmonics,C.morphProgress);if(C.blobRadius>.5){const E=48+Math.floor(A.complexity*4);f(b5(C.centerX,C.centerY,C.blobRadius,L,C.time,E))}else f("");m([...C.splashParticles]);const M=_5[C.phase]/A.speed;C.phaseTimer>=M&&(C.phase==="shrink"&&C.blobRadius>1||_())}function S(j){const C=g===0?.016:Math.min((j-g)/1e3,.05);g=j,N(C),h=requestAnimationFrame(S)}b(),w("idle");const T=new ResizeObserver(()=>b());return T.observe(x),h=requestAnimationFrame(S),()=>{cancelAnimationFrame(h),T.disconnect()}},[]),u.jsx("div",{ref:a,className:"w-full h-full relative overflow-hidden",children:u.jsxs("div",{className:"absolute inset-0",style:{filter:`blur(${o.blur}px) contrast(${o.contrast})`,background:"#000"},children:[c&&u.jsx("svg",{className:"absolute inset-0 w-full h-full",children:u.jsx("path",{d:c,fill:o.color})}),r.map(x=>u.jsx("div",{style:{position:"absolute",left:x.x,top:x.y,width:x.radius*2,height:x.radius*2,borderRadius:"50%",background:o.color,transform:"translate(-50%, -50%)",willChange:"left, top"}},x.id))]})})},Si=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:c>=1?a:a.toFixed(c>=.1?1:2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),C5=[{value:"blob",label:"Blob"},{value:"star",label:"Star"},{value:"organic",label:"Organic"},{value:"flower",label:"Flower"}],A5=({params:o,onChange:a})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Si,{label:"Speed",value:o.speed,min:.3,max:3,step:.1,onChange:i=>a({...o,speed:i})}),u.jsx(Si,{label:"Splash Force",value:o.splashForce,min:.3,max:2,step:.1,onChange:i=>a({...o,splashForce:i})}),u.jsx(Si,{label:"Particle Count",value:o.particleCount,min:3,max:15,step:1,onChange:i=>a({...o,particleCount:i})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Shape"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5",children:"Preset"}),u.jsx("div",{className:"flex gap-1.5",children:C5.map(i=>u.jsx("button",{onClick:()=>a({...o,shape:i.value}),className:`flex-1 text-[9px] py-1 rounded-lg transition-colors ${o.shape===i.value?"bg-neutral-800 text-white":"bg-neutral-200 text-neutral-500 hover:bg-neutral-300"}`,children:i.label},i.value))})]}),u.jsx(Si,{label:"Complexity",value:o.complexity,min:3,max:12,step:1,onChange:i=>a({...o,complexity:i})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Gooey Filter"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Si,{label:"Blur",value:o.blur,min:8,max:35,step:1,onChange:i=>a({...o,blur:i})}),u.jsx(Si,{label:"Contrast",value:o.contrast,min:10,max:50,step:1,onChange:i=>a({...o,contrast:i})}),u.jsxs("div",{children:[u.jsx("div",{className:"flex items-center justify-between mb-1",children:u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Color"})}),u.jsx("input",{type:"color",value:o.color,onChange:i=>a({...o,color:i.target.value}),className:"w-full h-6 rounded cursor-pointer border-0"})]})]})]})]}),N5={speed:1,shape:"blob",complexity:6,particleCount:8,splashForce:1,blur:15,contrast:20,color:"#ffffff"},R5=({params:o})=>{const a=`goo-fx-${R.useId().replace(/:/g,"")}`,i=R.useRef(null),l=R.useRef({bars:[],time:0,height:400}),c=R.useRef(o);c.current=o;const[f,r]=R.useState([]);R.useEffect(()=>{const h=i.current;if(!h)return;let g,b=0;function w(){l.current.height=h.getBoundingClientRect().height}function _(){const j=c.current.barCount,C=l.current;for(;C.bars.length<j;)C.bars.push({current:.05,target:.15+Math.random()*.75,rising:!0,cooldown:Math.random()*.4});C.bars.length>j&&(C.bars.length=j)}function N(j){const C=l.current,A=c.current;C.time+=j*A.speed,_();const k=C.bars;if(k.length===0)return;if(A.mode==="spectrum")for(const L of k){const M=1-Math.pow(.01,j*A.speed*4),E=1-Math.pow(.01,j*A.speed*2);if(L.current+=(L.target-L.current)*(L.rising?M:E),L.cooldown>0){L.cooldown-=j*A.speed;continue}Math.abs(L.current-L.target)<.03&&(L.rising?(L.rising=!1,L.target=.03+Math.random()*.08,L.cooldown=0):(L.rising=!0,L.target=.2+Math.random()*.8,L.cooldown=Math.random()*.5/A.speed))}else if(A.mode==="wave")for(let L=0;L<k.length;L++){const M=L/k.length*Math.PI*2,E=Math.sin(C.time*2+M)*.5+.5,D=Math.sin(C.time*3.3+M*1.6)*.5+.5;k[L].target=.08+E*.45+D*.35;const F=1-Math.pow(.001,j*A.speed*3);k[L].current+=(k[L].target-k[L].current)*F}else{const L=(k.length-1)/2;for(let M=0;M<k.length;M++){const E=Math.abs(M-L)/Math.max(L,1),D=Math.sin(C.time*3-E*4);k[M].target=.08+Math.max(0,D)*.85;const F=1-Math.pow(.001,j*A.speed*3);k[M].current+=(k[M].target-k[M].current)*F}}const G=C.height*.65;r(k.map(L=>Math.max(L.current*G,2)))}function S(j){const C=b===0?.016:Math.min((j-b)/1e3,.05);b=j,N(C),g=requestAnimationFrame(S)}w(),_();const T=new ResizeObserver(()=>w());return T.observe(h),g=requestAnimationFrame(S),()=>{cancelAnimationFrame(g),T.disconnect()}},[]);const m=Math.floor(o.threshold/2),x=25;return u.jsxs("div",{ref:i,className:"w-full h-full relative overflow-hidden",children:[u.jsx("svg",{className:"absolute w-0 h-0","aria-hidden":"true",children:u.jsx("defs",{children:u.jsxs("filter",{id:a,children:[u.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:o.blur,result:"blur"}),u.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${o.threshold} -${m}`,result:"goo"}),o.crisp&&u.jsx("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]})})}),u.jsxs("div",{className:"absolute inset-0",style:{filter:`url(#${a})`},children:[u.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:x,background:o.color}}),u.jsx("div",{style:{position:"absolute",bottom:x-5,left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"flex-end"},children:f.map((h,g)=>u.jsx("div",{style:{width:o.barWidth,height:h,background:o.color,borderRadius:o.barShape==="pill"?999:o.barShape==="round"?`${o.barWidth/2}px ${o.barWidth/2}px 0 0`:0,willChange:"height"}},g))})]})]})},Fr=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:c>=1?a:a.toFixed(c>=.1?1:2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),T5=[{value:"spectrum",label:"Spectrum"},{value:"wave",label:"Wave"},{value:"pulse",label:"Pulse"}],j5=[{value:"rect",label:"Rect"},{value:"round",label:"Round"},{value:"pill",label:"Pill"}],M5=({params:o,onChange:a})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Mode"}),u.jsx("div",{className:"flex gap-1.5",children:T5.map(i=>u.jsx("button",{onClick:()=>a({...o,mode:i.value}),className:`flex-1 text-[9px] py-1.5 rounded-lg font-medium transition-colors ${o.mode===i.value?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:i.label},i.value))})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Fr,{label:"Speed",value:o.speed,min:.3,max:3,step:.1,onChange:i=>a({...o,speed:i})}),u.jsx(Fr,{label:"Bar Count",value:o.barCount,min:8,max:32,step:1,onChange:i=>a({...o,barCount:i})}),u.jsx(Fr,{label:"Bar Width",value:o.barWidth,min:10,max:30,step:1,onChange:i=>a({...o,barWidth:i})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5",children:"Bar Shape"}),u.jsx("div",{className:"flex gap-1.5",children:j5.map(i=>u.jsx("button",{onClick:()=>a({...o,barShape:i.value}),className:`flex-1 text-[9px] py-1 rounded-lg font-medium transition-colors ${o.barShape===i.value?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:i.label},i.value))})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Gooey Filter"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Fr,{label:"Blur",value:o.blur,min:4,max:20,step:1,onChange:i=>a({...o,blur:i})}),u.jsx(Fr,{label:"Threshold",value:o.threshold,min:10,max:40,step:1,onChange:i=>a({...o,threshold:i})}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Crisp Edges"}),u.jsx("button",{onClick:()=>a({...o,crisp:!o.crisp}),className:`w-8 h-4 rounded-full transition-colors relative ${o.crisp?"bg-neutral-800":"bg-neutral-200"}`,children:u.jsx("div",{className:`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform ${o.crisp?"translate-x-4":"translate-x-0.5"}`})})]}),u.jsxs("div",{children:[u.jsx("div",{className:"flex items-center justify-between mb-1",children:u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Color"})}),u.jsx("input",{type:"color",value:o.color,onChange:i=>a({...o,color:i.target.value}),className:"w-full h-6 rounded cursor-pointer border-0"})]})]})]})]}),E5={speed:1,mode:"spectrum",barCount:16,barWidth:20,barShape:"rect",blur:10,threshold:20,color:"#ad2a2a",crisp:!1},D5=({params:o})=>{const a=R.useRef(null),i=R.useRef(o);i.current=o;const l=R.useRef([null,null]),c=R.useRef([null,null]),f=R.useRef([{currentX:0,currentY:0},{currentX:0,currentY:0}]),r=R.useRef({x:0,y:0}),[m,x]=R.useState(!1),h=R.useCallback(b=>w=>{l.current[b]=w},[]),g=R.useCallback(b=>w=>{c.current[b]=w},[]);return R.useEffect(()=>{const b=a.current;if(!b)return;let w;function _(T){const j="touches"in T?T.touches[0]:T;j&&(r.current={x:j.clientX,y:j.clientY})}function N(){const T=i.current;for(let j=0;j<2;j++){const C=l.current[j],A=c.current[j];if(!C||!A)continue;const k=C.getBoundingClientRect(),G=k.left+k.width/2,L=k.top+k.height/2,M=r.current.x-G,E=r.current.y-L,D=k.width*.18,F=k.height*.1,V=(le,U,W)=>Math.max(U,Math.min(W,le)),$=V(M*T.sensitivity,-D,D),Q=V(E*T.sensitivity,-F,F),te=f.current[j];te.currentX+=($-te.currentX)*T.smoothing,te.currentY+=(Q-te.currentY)*T.smoothing,A.style.transform=`translate(calc(-50% + ${te.currentX}px), calc(-50% + ${te.currentY}px))`}w=requestAnimationFrame(N)}const S=b.getBoundingClientRect();return r.current={x:S.left+S.width/2,y:S.top+S.height/2},window.addEventListener("mousemove",_,{passive:!0}),window.addEventListener("touchmove",_,{passive:!0}),w=requestAnimationFrame(N),()=>{cancelAnimationFrame(w),window.removeEventListener("mousemove",_),window.removeEventListener("touchmove",_)}},[]),R.useEffect(()=>{const b=o.blinkInterval*1e3;if(b<=0)return;const w=setInterval(()=>{x(!0),setTimeout(()=>x(!1),200)},b);return()=>clearInterval(w)},[o.blinkInterval]),u.jsx("div",{ref:a,className:"w-full h-full relative overflow-hidden flex items-center justify-center",style:{background:"#0b0f14"},children:u.jsx("div",{style:{width:"min(860px, 92%)",aspectRatio:"16 / 9",background:o.cardColor,borderRadius:28,display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx("div",{style:{display:"flex",gap:o.eyeGap,transform:"translateY(12px)"},children:[0,1].map(b=>u.jsx("div",{ref:h(b),style:{width:o.eyeWidth,height:o.eyeHeight,background:"#fff",borderRadius:o.eyeRadius,overflow:"hidden",position:"relative",boxShadow:"inset 0 0 0 2px rgba(0,0,0,0.02)",clipPath:m?o.blinkStyle==="top"?`inset(100% 0 0 0 round ${o.eyeRadius}px)`:`inset(50% 0 50% 0 round ${o.eyeRadius}px)`:`inset(0 round ${o.eyeRadius}px)`,transition:"clip-path 0.12s ease-in-out"},children:u.jsx("div",{ref:g(b),style:{width:o.pupilSize,height:o.pupilSize*1.28,background:"#000",borderRadius:999,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",willChange:"transform"}})},b))})})})},z5={eyeGap:72,eyeWidth:220,eyeHeight:88,eyeRadius:999,pupilSize:86,smoothing:.12,sensitivity:.08,cardColor:"#7fa0ff",blinkInterval:5,blinkStyle:"center"},sx=[{id:"classic",label:"Classic",params:{eyeGap:72,eyeWidth:220,eyeHeight:88,eyeRadius:999,pupilSize:86,smoothing:.12,sensitivity:.08,cardColor:"#7fa0ff",blinkInterval:5,blinkStyle:"center"}},{id:"frog",label:"Frog",params:{eyeGap:130,eyeWidth:140,eyeHeight:140,eyeRadius:999,pupilSize:60,smoothing:.06,sensitivity:.05,cardColor:"#5db85a",blinkInterval:8,blinkStyle:"top"}},{id:"cat",label:"Cat",params:{eyeGap:56,eyeWidth:120,eyeHeight:100,eyeRadius:999,pupilSize:56,smoothing:.22,sensitivity:.14,cardColor:"#2d2d2d",blinkInterval:6,blinkStyle:"top"}},{id:"robot",label:"Robot",params:{eyeGap:60,eyeWidth:110,eyeHeight:110,eyeRadius:16,pupilSize:60,smoothing:.3,sensitivity:.12,cardColor:"#4a4a4a",blinkInterval:7,blinkStyle:"center"}},{id:"anime",label:"Anime",params:{eyeGap:48,eyeWidth:180,eyeHeight:130,eyeRadius:999,pupilSize:120,smoothing:.18,sensitivity:.1,cardColor:"#ffb3c6",blinkInterval:4,blinkStyle:"top"}},{id:"alien",label:"Alien",params:{eyeGap:110,eyeWidth:100,eyeHeight:120,eyeRadius:999,pupilSize:36,smoothing:.3,sensitivity:.16,cardColor:"#3a1f5e",blinkInterval:10,blinkStyle:"center"}}],Bn=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:c>=1?a:a.toFixed(c>=.1?1:2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]});function k5(o,a){return o.eyeGap===a.eyeGap&&o.eyeWidth===a.eyeWidth&&o.eyeHeight===a.eyeHeight&&o.eyeRadius===a.eyeRadius&&o.pupilSize===a.pupilSize&&o.smoothing===a.smoothing&&o.sensitivity===a.sensitivity&&o.cardColor===a.cardColor&&o.blinkInterval===a.blinkInterval&&o.blinkStyle===a.blinkStyle}const L5=({params:o,onChange:a})=>{const i=sx.find(l=>k5(l.params,o));return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Presets"}),u.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:sx.map(l=>{const c=(i==null?void 0:i.id)===l.id;return u.jsxs("button",{onClick:()=>a(l.params),className:`relative h-8 rounded-lg text-[9px] font-medium transition-all overflow-hidden ${c?"ring-2 ring-neutral-800 ring-offset-1":"opacity-75 hover:opacity-100"}`,style:{background:l.params.cardColor},children:[u.jsx("div",{className:"absolute inset-0 flex items-center justify-center gap-[3px]",children:[0,1].map(f=>u.jsx("div",{className:"relative flex items-center justify-center",style:{width:14,height:14*(l.params.eyeHeight/l.params.eyeWidth),background:"#fff",borderRadius:Math.min(l.params.eyeRadius,999)*(14/l.params.eyeWidth)},children:u.jsx("div",{style:{width:14*(l.params.pupilSize/l.params.eyeWidth),height:14*(l.params.pupilSize/l.params.eyeWidth)*1.2,background:"#000",borderRadius:999}})},f))}),u.jsx("span",{className:"absolute bottom-0.5 left-0 right-0 text-center text-[7px] font-semibold",style:{color:B5(l.params.cardColor)?"#333":"#fff"},children:l.label})]},l.id)})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Eye Shape"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Bn,{label:"Eye Width",value:o.eyeWidth,min:100,max:320,step:10,onChange:l=>a({...o,eyeWidth:l})}),u.jsx(Bn,{label:"Eye Height",value:o.eyeHeight,min:40,max:160,step:4,onChange:l=>a({...o,eyeHeight:l})}),u.jsx(Bn,{label:"Eye Radius",value:o.eyeRadius,min:0,max:999,step:1,onChange:l=>a({...o,eyeRadius:l})}),u.jsx(Bn,{label:"Eye Gap",value:o.eyeGap,min:20,max:150,step:2,onChange:l=>a({...o,eyeGap:l})}),u.jsx(Bn,{label:"Pupil Size",value:o.pupilSize,min:30,max:140,step:2,onChange:l=>a({...o,pupilSize:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Bn,{label:"Smoothing",value:o.smoothing,min:.02,max:.5,step:.02,onChange:l=>a({...o,smoothing:l})}),u.jsx(Bn,{label:"Sensitivity",value:o.sensitivity,min:.02,max:.2,step:.01,onChange:l=>a({...o,sensitivity:l})}),u.jsx(Bn,{label:"Blink Interval",value:o.blinkInterval,min:1,max:15,step:.5,onChange:l=>a({...o,blinkInterval:l})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5",children:"Blink Style"}),u.jsx("div",{className:"flex gap-1.5",children:["center","top"].map(l=>u.jsx("button",{onClick:()=>a({...o,blinkStyle:l}),className:`flex-1 text-[9px] py-1 rounded-lg font-medium transition-colors ${o.blinkStyle===l?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l==="center"?"Center":"Eyelid"},l))})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Appearance"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsxs("div",{children:[u.jsx("div",{className:"flex items-center justify-between mb-1",children:u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Card Color"})}),u.jsx("input",{type:"color",value:o.cardColor,onChange:l=>a({...o,cardColor:l.target.value}),className:"w-full h-6 rounded cursor-pointer border-0"})]})})]})]})};function B5(o){const a=parseInt(o.slice(1,3),16),i=parseInt(o.slice(3,5),16),l=parseInt(o.slice(5,7),16);return a*.299+i*.587+l*.114>150}const O5=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,F5=`
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uSpeed;
uniform float uScale;
uniform float uSwirl;
uniform float uTurbulence;
uniform float uEdgeSoftness;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
// Phase 1
uniform float uVignette;
uniform float uGrain;
// Phase 2
uniform vec2 uMouse;
uniform float uMouseForce;
uniform float uMouseRadius;
uniform float uSymmetry;
// Phase 3
uniform float uHueDrift;
uniform int uDistortion;
uniform int uTexture;

/* ---- Simplex 3D Noise (Ashima Arts) ---- */
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

/* ---- FBM (Fractal Brownian Motion) ---- */
float fbm(vec3 p, float turb) {
  float val = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for (int i = 0; i < 5; i++) {
    val += amp * snoise(p * freq);
    freq *= 2.0;
    amp *= 0.5;
    if (float(i) >= turb * 4.0) break;
  }
  return val;
}

/* ---- HSL helpers ---- */
vec3 rgb2hsl(vec3 c) {
  float maxC = max(c.r, max(c.g, c.b));
  float minC = min(c.r, min(c.g, c.b));
  float l = (maxC + minC) * 0.5;
  if (maxC == minC) return vec3(0.0, 0.0, l);
  float d = maxC - minC;
  float s = l > 0.5 ? d / (2.0 - maxC - minC) : d / (maxC + minC);
  float h;
  if (maxC == c.r) h = (c.g - c.b) / d + (c.g < c.b ? 6.0 : 0.0);
  else if (maxC == c.g) h = (c.b - c.r) / d + 2.0;
  else h = (c.r - c.g) / d + 4.0;
  h /= 6.0;
  return vec3(h, s, l);
}

float hue2rgb(float p, float q, float t) {
  if (t < 0.0) t += 1.0;
  if (t > 1.0) t -= 1.0;
  if (t < 1.0/6.0) return p + (q - p) * 6.0 * t;
  if (t < 1.0/2.0) return q;
  if (t < 2.0/3.0) return p + (q - p) * (2.0/3.0 - t) * 6.0;
  return p;
}

vec3 hsl2rgb(vec3 hsl) {
  if (hsl.y == 0.0) return vec3(hsl.z);
  float q = hsl.z < 0.5 ? hsl.z * (1.0 + hsl.y) : hsl.z + hsl.y - hsl.z * hsl.y;
  float p = 2.0 * hsl.z - q;
  return vec3(
    hue2rgb(p, q, hsl.x + 1.0/3.0),
    hue2rgb(p, q, hsl.x),
    hue2rgb(p, q, hsl.x - 1.0/3.0)
  );
}

vec3 shiftHue(vec3 rgb, float shift) {
  vec3 hsl = rgb2hsl(rgb);
  hsl.x = fract(hsl.x + shift);
  return hsl2rgb(hsl);
}

/* ---- Grain hash ---- */
float hash12(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

/* ---- Kaleidoscope ---- */
vec2 kaleidoscope(vec2 p, float segments) {
  if (segments <= 1.0) return p;
  float angle = atan(p.y, p.x);
  float r = length(p);
  float seg = 6.2831853 / segments;
  angle = mod(angle, seg);
  if (angle > seg * 0.5) angle = seg - angle;
  return vec2(cos(angle), sin(angle)) * r;
}

void main() {
  // 1. UV + aspect correction
  vec2 uv = gl_FragCoord.xy / uResolution;
  float aspect = uResolution.x / uResolution.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * uScale;

  // 2. Time
  float t = uTime * uSpeed;

  // 3. Mouse displacement
  vec2 mouseP = uMouse * vec2(aspect, 1.0) * uScale * 0.5;
  float mouseDist = length(p - mouseP);
  float mouseInfluence = smoothstep(uMouseRadius, 0.0, mouseDist) * uMouseForce;
  vec2 mouseDir = mouseDist > 0.001 ? normalize(p - mouseP) : vec2(0.0);
  p += mouseDir * mouseInfluence * 0.5;

  // 4. Kaleidoscope
  p = kaleidoscope(p, uSymmetry);

  // 5. Hue drift on colors
  vec3 c1 = uColor1;
  vec3 c2 = uColor2;
  vec3 c3 = uColor3;
  if (uHueDrift > 0.001) {
    float drift = t * uHueDrift * 0.1;
    c1 = shiftHue(c1, drift);
    c2 = shiftHue(c2, drift + 0.33);
    c3 = shiftHue(c3, drift + 0.67);
  }

  // 6. Domain warping with distortion style branching
  vec2 finalP;
  if (uDistortion == 0) {
    // Swirl (original)
    float warp1 = fbm(vec3(p * 0.8, t * 0.7), uTurbulence);
    float warp2 = fbm(vec3(p * 0.8 + 5.2, t * 0.7 + 1.3), uTurbulence);
    vec2 warped = p + vec2(warp1, warp2) * uSwirl;
    float warp3 = fbm(vec3(warped * 0.6, t * 0.5 + 10.0), uTurbulence);
    float warp4 = fbm(vec3(warped * 0.6 + 3.7, t * 0.5 + 7.8), uTurbulence);
    finalP = warped + vec2(warp3, warp4) * uSwirl * 0.5;
  } else if (uDistortion == 1) {
    // Stretch — directional FBM along dominant axis
    float warp1 = fbm(vec3(p.x * 1.5, p.y * 0.3, t * 0.6), uTurbulence);
    float warp2 = fbm(vec3(p.x * 0.3, p.y * 1.5, t * 0.6 + 3.0), uTurbulence);
    vec2 warped = p + vec2(warp1 * uSwirl * 1.5, warp2 * uSwirl * 0.3);
    float warp3 = fbm(vec3(warped * 0.5 + 8.0, t * 0.4), uTurbulence);
    finalP = warped + vec2(warp3 * uSwirl * 0.4, 0.0);
  } else if (uDistortion == 2) {
    // Radial — polar coordinate warping
    float r = length(p);
    float a = atan(p.y, p.x);
    float warpR = fbm(vec3(r * 2.0, a * 0.5, t * 0.6), uTurbulence);
    float warpA = fbm(vec3(r * 0.5, a * 2.0, t * 0.5 + 5.0), uTurbulence);
    r += warpR * uSwirl * 0.3;
    a += warpA * uSwirl * 0.5;
    vec2 warped = vec2(cos(a), sin(a)) * r;
    float warp3 = fbm(vec3(warped * 0.6, t * 0.4 + 10.0), uTurbulence);
    float warp4 = fbm(vec3(warped * 0.6 + 4.0, t * 0.4 + 7.0), uTurbulence);
    finalP = warped + vec2(warp3, warp4) * uSwirl * 0.3;
  } else {
    // Turbulent — high-frequency multi-layer warping
    float warp1 = fbm(vec3(p * 1.2, t * 0.8), uTurbulence);
    float warp2 = fbm(vec3(p * 1.2 + 5.2, t * 0.8 + 1.3), uTurbulence);
    vec2 warped = p + vec2(warp1, warp2) * uSwirl * 0.7;
    float warp3 = fbm(vec3(warped * 1.0, t * 0.7 + 10.0), uTurbulence);
    float warp4 = fbm(vec3(warped * 1.0 + 3.7, t * 0.7 + 7.8), uTurbulence);
    vec2 w2 = warped + vec2(warp3, warp4) * uSwirl * 0.5;
    float warp5 = fbm(vec3(w2 * 1.5, t * 0.6 + 20.0), uTurbulence);
    float warp6 = fbm(vec3(w2 * 1.5 + 2.0, t * 0.6 + 15.0), uTurbulence);
    finalP = w2 + vec2(warp5, warp6) * uSwirl * 0.3;
  }

  // 7. Noise → color band mapping
  float n = fbm(vec3(finalP * 0.7, t * 0.3), uTurbulence);
  float edge = uEdgeSoftness;
  n = n * 0.5 + 0.5;

  float band1 = smoothstep(0.0, 0.333 + edge, n) * (1.0 - smoothstep(0.333 - edge, 0.667, n));
  float band2 = smoothstep(0.333 - edge, 0.667 + edge, n) * (1.0 - smoothstep(0.667 - edge, 1.0, n));
  float band3 = smoothstep(0.667 - edge, 1.0, n);

  float total = band1 + band2 + band3;
  total = max(total, 0.001);
  band1 /= total;
  band2 /= total;
  band3 /= total;

  vec3 color = c1 * band1 + c2 * band2 + c3 * band3;

  // 8. Detail noise
  float detail = snoise(vec3(finalP * 3.0, t * 0.2)) * 0.08;
  color += detail;

  // 8.5 Texture / material style
  if (uTexture == 1) {
    // Silk — directional sheen highlights along flow
    float sheen = snoise(vec3(finalP.x * 8.0, finalP.y * 1.5, t * 0.15));
    sheen = smoothstep(0.2, 0.8, sheen * 0.5 + 0.5);
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    color += sheen * 0.12 * mix(vec3(1.0), color / max(lum, 0.01), 0.5);
  } else if (uTexture == 2) {
    // Oil — impasto bumps, contrast boost, thick ridges
    float bump = snoise(vec3(finalP * 12.0, t * 0.1));
    float ridge = abs(bump);
    ridge = pow(ridge, 0.6) * 0.15;
    color += ridge * sign(bump);
    // contrast boost
    color = (color - 0.5) * 1.15 + 0.5;
  } else if (uTexture == 3) {
    // Watercolor — desaturate, soft bleed, paper grain
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    color = mix(vec3(lum), color, 0.7); // desaturate
    float paper = snoise(vec3(gl_FragCoord.xy * 0.03, 0.0)) * 0.06;
    color += paper;
    // soften: pull toward midtone
    color = mix(color, vec3(lum), 0.08);
  } else if (uTexture == 4) {
    // Metal — sharp contrast, specular peaks, saturate
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    // specular highlight from noise peaks
    float spec = smoothstep(0.55, 0.9, n) * 0.3;
    color += spec;
    // saturate
    color = mix(vec3(lum), color, 1.4);
    // hard contrast
    color = (color - 0.5) * 1.3 + 0.5;
  }

  // 9. Vignette
  vec2 vuv = uv - 0.5;
  float vig = smoothstep(1.2, 0.25, length(vuv * vec2(aspect, 1.0)));
  color *= (1.0 - uVignette) + uVignette * vig;

  // 10. Grain
  float g = hash12(gl_FragCoord.xy + uTime * 60.0) - 0.5;
  color += g * uGrain;

  // 11. Gamma (sqrt)
  color = sqrt(max(color, 0.0));

  // 12. Output
  gl_FragColor = vec4(color, 1.0);
}
`,G5={swirl:0,stretch:1,radial:2,turbulent:3},I5={flat:0,silk:1,oil:2,watercolor:3,metal:4};function ld(o){const a=parseInt(o.replace("#",""),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}const U5=({params:o})=>{const a=R.useRef(null),i=R.useRef(0),l=R.useRef(Date.now()),c=R.useRef(o),f=R.useRef({x:0,y:0}),r=R.useRef(0),m=R.useRef(!1);return R.useEffect(()=>{c.current=o},[o]),R.useEffect(()=>{const x=a.current;if(!x)return;const h=x.getContext("webgl");if(!h)return;const g=(ee,ne)=>{const ie=h.createShader(ne);return h.shaderSource(ie,ee),h.compileShader(ie),h.getShaderParameter(ie,h.COMPILE_STATUS)?ie:(console.error("Shader compile error:",h.getShaderInfoLog(ie)),h.deleteShader(ie),null)},b=g(O5,h.VERTEX_SHADER),w=g(F5,h.FRAGMENT_SHADER);if(!b||!w)return;const _=h.createProgram();if(h.attachShader(_,b),h.attachShader(_,w),h.linkProgram(_),!h.getProgramParameter(_,h.LINK_STATUS)){console.error("Program link error:",h.getProgramInfoLog(_));return}h.useProgram(_);const N=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,S),h.bufferData(h.ARRAY_BUFFER,N,h.STATIC_DRAW);const T=h.getAttribLocation(_,"position");h.enableVertexAttribArray(T),h.vertexAttribPointer(T,2,h.FLOAT,!1,0,0);const j=h.getUniformLocation(_,"uTime"),C=h.getUniformLocation(_,"uResolution"),A=h.getUniformLocation(_,"uSpeed"),k=h.getUniformLocation(_,"uScale"),G=h.getUniformLocation(_,"uSwirl"),L=h.getUniformLocation(_,"uTurbulence"),M=h.getUniformLocation(_,"uEdgeSoftness"),E=h.getUniformLocation(_,"uColor1"),D=h.getUniformLocation(_,"uColor2"),F=h.getUniformLocation(_,"uColor3"),V=h.getUniformLocation(_,"uVignette"),$=h.getUniformLocation(_,"uGrain"),Q=h.getUniformLocation(_,"uMouse"),te=h.getUniformLocation(_,"uMouseForce"),le=h.getUniformLocation(_,"uMouseRadius"),U=h.getUniformLocation(_,"uSymmetry"),W=h.getUniformLocation(_,"uHueDrift"),re=h.getUniformLocation(_,"uDistortion"),ce=h.getUniformLocation(_,"uTexture"),me=ee=>{const ne=x.getBoundingClientRect();f.current={x:(ee.clientX-ne.left)/ne.width*2-1,y:-((ee.clientY-ne.top)/ne.height*2-1)}},B=()=>{f.current={x:0,y:0}};x.addEventListener("mousemove",me),x.addEventListener("mouseleave",B);let Y=!0;const ae=()=>{if(!Y)return;const ee=window.devicePixelRatio||1,ne=x.clientWidth*ee,ie=x.clientHeight*ee;(x.width!==ne||x.height!==ie)&&(x.width=ne,x.height=ie,h.viewport(0,0,h.drawingBufferWidth,h.drawingBufferHeight));const oe=c.current,ve=(Date.now()-l.current)/1e3;let Re;if(oe.paused)m.current||(r.current=ve,m.current=!0),Re=r.current;else{if(m.current){const Te=ve-r.current;l.current+=Te*1e3,m.current=!1}Re=(Date.now()-l.current)/1e3}h.uniform1f(j,Re),h.uniform2f(C,x.width,x.height),h.uniform1f(A,oe.speed),h.uniform1f(k,oe.scale),h.uniform1f(G,oe.swirl),h.uniform1f(L,oe.turbulence),h.uniform1f(M,oe.edgeSoftness);const pe=ld(oe.color1),qe=ld(oe.color2),ct=ld(oe.color3);h.uniform3f(E,pe[0],pe[1],pe[2]),h.uniform3f(D,qe[0],qe[1],qe[2]),h.uniform3f(F,ct[0],ct[1],ct[2]),h.uniform1f(V,oe.vignette),h.uniform1f($,oe.grain),h.uniform2f(Q,f.current.x,f.current.y),h.uniform1f(te,oe.mouseForce),h.uniform1f(le,oe.mouseRadius),h.uniform1f(U,oe.symmetry),h.uniform1f(W,oe.hueDrift),h.uniform1i(re,G5[oe.distortion]??0),h.uniform1i(ce,I5[oe.texture]??0),h.drawArrays(h.TRIANGLE_STRIP,0,4),i.current=requestAnimationFrame(ae)};return ae(),()=>{Y=!1,cancelAnimationFrame(i.current),x.removeEventListener("mousemove",me),x.removeEventListener("mouseleave",B),h.deleteProgram(_)}},[]),u.jsx("canvas",{ref:a,className:"w-full h-full block"})},H5={speed:.4,scale:2,swirl:3,turbulence:1,edgeSoftness:.3,color1:"#3344ff",color2:"#ff66bb",color3:"#ffdd00",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"flat"},cx=[{id:"oil-paint",label:"Oil Paint",params:{speed:.4,scale:2,swirl:3,turbulence:1,edgeSoftness:.3,color1:"#3344ff",color2:"#ff66bb",color3:"#ffdd00",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"oil"}},{id:"lava-flow",label:"Lava Flow",params:{speed:.2,scale:1.8,swirl:4,turbulence:1.4,edgeSoftness:.15,color1:"#1a0500",color2:"#cc2200",color3:"#ff8800",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"flat"}},{id:"ocean-current",label:"Ocean",params:{speed:.25,scale:2.5,swirl:3.5,turbulence:.8,edgeSoftness:.45,color1:"#0a1628",color2:"#1a6888",color3:"#88ddee",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"silk"}},{id:"neon-ink",label:"Neon Ink",params:{speed:.6,scale:1.5,swirl:5,turbulence:1.2,edgeSoftness:.2,color1:"#00ffaa",color2:"#ff00aa",color3:"#00ccff",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"metal"}},{id:"sunset-marble",label:"Sunset",params:{speed:.3,scale:2.2,swirl:2.5,turbulence:.9,edgeSoftness:.4,color1:"#6622aa",color2:"#ee5533",color3:"#ffcc22",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"flat"}},{id:"midnight-aurora",label:"Aurora",params:{speed:.15,scale:3,swirl:2,turbulence:.7,edgeSoftness:.55,color1:"#0a0a2e",color2:"#22aa66",color3:"#6644cc",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"silk"}},{id:"candy-melt",label:"Candy",params:{speed:.35,scale:2,swirl:3.5,turbulence:.6,edgeSoftness:.5,color1:"#aaddff",color2:"#ffaacc",color3:"#ffffaa",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"watercolor"}},{id:"monochrome",label:"Mono",params:{speed:.3,scale:2,swirl:3,turbulence:1.3,edgeSoftness:.1,color1:"#000000",color2:"#555555",color3:"#ffffff",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"flat"}},{id:"mandala",label:"Mandala",params:{speed:.15,scale:2.5,swirl:2.5,turbulence:.8,edgeSoftness:.35,color1:"#0a1040",color2:"#1a3088",color3:"#ccaa33",vignette:.7,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:6,hueDrift:0,distortion:"swirl",texture:"silk"}},{id:"inkblot",label:"Inkblot",params:{speed:.25,scale:2,swirl:3,turbulence:1.5,edgeSoftness:.1,color1:"#0a0a0a",color2:"#444444",color3:"#cccccc",vignette:.4,grain:.2,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:2,hueDrift:0,distortion:"turbulent",texture:"watercolor"}},{id:"interactive",label:"Interactive",params:{speed:.4,scale:2,swirl:3.5,turbulence:1,edgeSoftness:.3,color1:"#ff00ff",color2:"#00ffff",color3:"#ffff00",vignette:0,grain:0,paused:!1,mouseForce:2,mouseRadius:.4,symmetry:1,hueDrift:.3,distortion:"swirl",texture:"metal"}},{id:"dreamscape",label:"Dreamscape",params:{speed:.2,scale:2.8,swirl:2,turbulence:.7,edgeSoftness:.5,color1:"#eeb8dd",color2:"#aaccee",color3:"#ddeebb",vignette:.3,grain:.05,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:4,hueDrift:.15,distortion:"radial",texture:"silk"}}],wa=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:c>=1?a:a.toFixed(c>=.1?1:2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),P5=[{value:"swirl",label:"Swirl"},{value:"stretch",label:"Stretch"},{value:"radial",label:"Radial"},{value:"turbulent",label:"Turbulent"}],q5=[{value:"flat",label:"Flat"},{value:"silk",label:"Silk"},{value:"oil",label:"Oil"},{value:"watercolor",label:"Aqua"},{value:"metal",label:"Metal"}];function V5(o,a){return o.speed===a.speed&&o.scale===a.scale&&o.swirl===a.swirl&&o.turbulence===a.turbulence&&o.edgeSoftness===a.edgeSoftness&&o.color1===a.color1&&o.color2===a.color2&&o.color3===a.color3&&o.vignette===a.vignette&&o.grain===a.grain&&o.mouseForce===a.mouseForce&&o.mouseRadius===a.mouseRadius&&o.symmetry===a.symmetry&&o.hueDrift===a.hueDrift&&o.distortion===a.distortion&&o.texture===a.texture}const Y5=({params:o,onChange:a})=>{const i=(c,f)=>{a({...o,[c]:f})},l=cx.find(c=>V5(c.params,o));return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Presets"}),u.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:cx.map(c=>{const f=(l==null?void 0:l.id)===c.id;return u.jsxs("button",{onClick:()=>a(c.params),className:`flex flex-col items-center gap-1 py-1.5 px-1 rounded-lg transition-all ${f?"bg-neutral-800 ring-1 ring-neutral-700":"bg-neutral-50 hover:bg-neutral-100"}`,children:[u.jsx("div",{className:`w-full h-5 rounded-md overflow-hidden ${f?"ring-1 ring-white/30":""}`,style:{background:`linear-gradient(135deg, ${c.params.color1} 0%, ${c.params.color2} 50%, ${c.params.color3} 100%)`}}),u.jsx("span",{className:`text-[8px] font-medium leading-none ${f?"text-white":"text-neutral-500"}`,children:c.label})]},c.id)})}),l&&u.jsx("div",{className:"mt-2 text-[9px] text-neutral-400",children:l.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Animation"}),u.jsx("button",{onClick:()=>i("paused",!o.paused),className:`flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-medium transition-all ${o.paused?"bg-amber-100 text-amber-700":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:o.paused?"▶ Play":"⏸ Pause"})]}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(wa,{label:"Speed",value:o.speed,min:0,max:2,step:.01,onChange:c=>i("speed",c)}),u.jsx(wa,{label:"Scale",value:o.scale,min:.5,max:6,step:.1,onChange:c=>i("scale",c)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Distortion Style"}),u.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:P5.map(c=>{const f=o.distortion===c.value;return u.jsx("button",{onClick:()=>i("distortion",c.value),className:`py-1.5 px-1 rounded-lg text-[9px] font-medium transition-all ${f?"bg-neutral-800 text-white":"bg-neutral-50 text-neutral-500 hover:bg-neutral-100"}`,children:c.label},c.value)})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Texture"}),u.jsx("div",{className:"grid grid-cols-5 gap-1.5",children:q5.map(c=>{const f=o.texture===c.value;return u.jsx("button",{onClick:()=>i("texture",c.value),className:`py-1.5 px-1 rounded-lg text-[9px] font-medium transition-all ${f?"bg-neutral-800 text-white":"bg-neutral-50 text-neutral-500 hover:bg-neutral-100"}`,children:c.label},c.value)})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Fluid"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(wa,{label:"Swirl",value:o.swirl,min:0,max:8,step:.1,onChange:c=>i("swirl",c)}),u.jsx(wa,{label:"Turbulence",value:o.turbulence,min:.1,max:2,step:.01,onChange:c=>i("turbulence",c)}),u.jsx(wa,{label:"Edge Softness",value:o.edgeSoftness,min:.01,max:.8,step:.01,onChange:c=>i("edgeSoftness",c)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Interaction"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(wa,{label:"Mouse Force",value:o.mouseForce,min:0,max:3,step:.01,onChange:c=>i("mouseForce",c)}),u.jsx(wa,{label:"Mouse Radius",value:o.mouseRadius,min:.05,max:.8,step:.01,onChange:c=>i("mouseRadius",c)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Transform"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(wa,{label:"Symmetry",value:o.symmetry,min:1,max:8,step:1,onChange:c=>i("symmetry",c)}),u.jsx(wa,{label:"Hue Drift",value:o.hueDrift,min:0,max:1,step:.01,onChange:c=>i("hueDrift",c)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Post Processing"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(wa,{label:"Vignette",value:o.vignette,min:0,max:1,step:.01,onChange:c=>i("vignette",c)}),u.jsx(wa,{label:"Grain",value:o.grain,min:0,max:.3,step:.01,onChange:c=>i("grain",c)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Custom Colors"}),u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:o.color1,onChange:c=>i("color1",c.target.value),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Color A"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:o.color2,onChange:c=>i("color2",c.target.value),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Color B"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:o.color3,onChange:c=>i("color3",c.target.value),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Color C"})]})]})]})]})},X5=o=>o<.5?8*o*o*o*o:1-Math.pow(-2*o+2,4)/2,ux=o=>1-Math.pow(1-o,5),Z5=o=>o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2;function W5(o,a,i){const l=Math.ceil(o/i)+2,c=Math.ceil(a/i)+2,f=(o%i-i)/2,r=(a%i-i)/2;return{cols:l,rows:c,offsetX:f,offsetY:r}}function K5(o,a,i,l,c,f){const r=a/2,m=i/2,{cols:x,rows:h,offsetX:g,offsetY:b}=W5(a,i,f.gridSize),w=Math.sqrt(r*r+m*m),_=`${f.colorR}, ${f.colorG}, ${f.colorB}`;if(o.clearRect(0,0,a,i),l===0){const N=X5(c);for(let S=0;S<h;S++)for(let T=0;T<x;T++){const j=g+T*f.gridSize,C=b+S*f.gridSize,A=j-r,k=C-m,L=Math.sqrt(A*A+k*k)/w*f.stagger,M=Math.max(0,Math.min(1,(N-L)/(1-L))),E=ux(M);if(E<=0)continue;const D=r+A*E,F=m+k*E,V=Math.min(E*2,1),$=f.dotRadius*.67+E*(f.dotRadius*.33);o.beginPath(),o.arc(D,F,$,0,Math.PI*2),o.fillStyle=`rgba(${_}, ${V})`,o.fill()}}else if(l===1){const N=ux(Z5(c));for(let S=0;S<h;S++)for(let T=0;T<x;T++){const j=g+T*f.gridSize,C=b+S*f.gridSize,A=f.dotRadius*(1-N*.85),k=f.gridSize/2*N,G=f.dotRadius*(1-N)+1*N;o.fillStyle=`rgba(${_}, 1)`,o.strokeStyle=`rgba(${_}, 1)`,A>.15&&(o.beginPath(),o.arc(j,C,A,0,Math.PI*2),o.fill()),o.lineWidth=G,o.lineCap="round",k>.5&&(T<x-1&&(o.beginPath(),o.moveTo(j,C),o.lineTo(j+k,C),o.stroke()),T>0&&(o.beginPath(),o.moveTo(j,C),o.lineTo(j-k,C),o.stroke()),S<h-1&&(o.beginPath(),o.moveTo(j,C),o.lineTo(j,C+k),o.stroke()),S>0&&(o.beginPath(),o.moveTo(j,C),o.lineTo(j,C-k),o.stroke()))}}else if(l===2){o.lineWidth=1,o.strokeStyle=`rgba(${_}, 1)`;for(let N=0;N<h;N++){const S=b+N*f.gridSize;o.beginPath(),o.moveTo(0,S),o.lineTo(a,S),o.stroke()}for(let N=0;N<x;N++){const S=g+N*f.gridSize;o.beginPath(),o.moveTo(S,0),o.lineTo(S,i),o.stroke()}}}const Q5=({params:o})=>{const a=R.useRef(null),i=R.useRef(o);i.current=o;const l=R.useRef({w:0,h:0}),c=R.useRef({phase:0,accumulatedTime:0,lastTimestamp:null}),f=R.useCallback(()=>{const r=a.current;if(!r)return;const m=r.getContext("2d");if(!m)return;const{w:x,h}=l.current,g=c.current,b=i.current,_=[b.spreadDuration,b.morphDuration,800][g.phase]??800,N=Math.min(g.accumulatedTime/_,1);K5(m,x,h,g.phase,N,b)},[]);return R.useEffect(()=>{const r=a.current;if(!r)return;const m=window.devicePixelRatio||1,x=()=>{const g=r.parentElement;if(!g)return;const b=g.clientWidth,w=g.clientHeight;r.width=b*m,r.height=w*m,r.style.width=b+"px",r.style.height=w+"px";const _=r.getContext("2d");_&&_.setTransform(m,0,0,m,0,0),l.current={w:b,h:w},f()};x();const h=new ResizeObserver(()=>x());return h.observe(r.parentElement),()=>h.disconnect()},[f]),R.useEffect(()=>{let r;const m=x=>{const h=c.current,g=i.current;h.lastTimestamp===null&&(h.lastTimestamp=x);const b=(x-h.lastTimestamp)*g.speed;h.lastTimestamp=x;const _=[g.spreadDuration,g.morphDuration,800][h.phase]??800;h.accumulatedTime+=b,h.accumulatedTime>=_&&(h.phase++,h.accumulatedTime=0,h.phase>2&&(h.phase=0)),f(),r=requestAnimationFrame(m)};return r=requestAnimationFrame(m),()=>cancelAnimationFrame(r)},[f]),u.jsx("div",{className:"w-full h-full relative overflow-hidden",children:u.jsx("canvas",{ref:a,className:"absolute inset-0"})})},nn=({label:o,value:a,min:i,max:l,step:c,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:o}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:c>=1?a:a.toFixed(c>=.1?1:2)})]}),u.jsx("input",{type:"range",min:i,max:l,step:c,value:a,onChange:r=>f(parseFloat(r.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),J5=({params:o,onChange:a})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Grid"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(nn,{label:"Grid Size",value:o.gridSize,min:12,max:48,step:2,onChange:i=>a({...o,gridSize:i})}),u.jsx(nn,{label:"Dot Radius",value:o.dotRadius,min:.5,max:3,step:.1,onChange:i=>a({...o,dotRadius:i})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(nn,{label:"Speed",value:o.speed,min:.3,max:3,step:.1,onChange:i=>a({...o,speed:i})}),u.jsx(nn,{label:"Stagger",value:o.stagger,min:0,max:1,step:.05,onChange:i=>a({...o,stagger:i})}),u.jsx(nn,{label:"Spread Duration",value:o.spreadDuration,min:800,max:5e3,step:100,onChange:i=>a({...o,spreadDuration:i})}),u.jsx(nn,{label:"Morph Duration",value:o.morphDuration,min:800,max:5e3,step:100,onChange:i=>a({...o,morphDuration:i})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(nn,{label:"Red",value:o.colorR,min:0,max:255,step:1,onChange:i=>a({...o,colorR:i})}),u.jsx(nn,{label:"Green",value:o.colorG,min:0,max:255,step:1,onChange:i=>a({...o,colorG:i})}),u.jsx(nn,{label:"Blue",value:o.colorB,min:0,max:255,step:1,onChange:i=>a({...o,colorB:i})})]})]})]}),$5={gridSize:24,speed:1,dotRadius:1.2,stagger:.55,colorR:165,colorG:165,colorB:170,spreadDuration:2400,morphDuration:2200},e_=[{id:"fission",name:"Fission",description:"Canvas 2D particle split-merge with additive glow"},{id:"metaball",name:"Metaball",description:"CSS Gooey filter particle split-merge with liquid fusion"},{id:"sdfmorph",name:"SDF Morph",description:"WebGL SDF shape morphing with liquid fusion and easing curves"},{id:"lettermorph",name:"Letter Morph",description:"26 Letters A-Z SDF morphing with liquid fusion"},{id:"liquidfill",name:"Liquid Fill",description:"CSS Gooey filter blob expansion with SVG path morphing and splash particles"},{id:"gooeyfx",name:"Gooey FX",description:"SVG Gooey filter with crisp circles and gooey blob connections"},{id:"eyetrack",name:"Eye Track",description:"CSS cursor-following eyes with lerp smoothing and blink animation"},{id:"liquidtrans",name:"Liquid Trans",description:"WebGL noise-driven liquid marble transition with domain warping"},{id:"dotgrid",name:"Dot Grid",description:"Canvas 2D dot-to-grid morphing with staggered easing"}],t_=({active:o,onSelect:a})=>{const i=R.useRef(null);return R.useEffect(()=>{var l;(l=i.current)==null||l.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]),u.jsx("div",{className:"flex gap-1.5 overflow-x-auto scrollbar-hide px-5 py-3 flex-shrink-0",children:e_.map(l=>{const c=o===l.id;return u.jsx("button",{ref:c?i:null,onClick:()=>a(l.id),className:`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${c?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.name},l.id)})})},a_={color1:"#8b5cf6",color2:"#06b6d4",speed:0,density:1,suction:0},n_={speed:.2,zoom:3,warpStrength:4,color1:"#000d33",color2:"#1a664d",color3:"#ffcc33"},l_={blockSize:1.5,spacing:2.5,timeSpeed:.8,mouseInfluence:1,fogStart:40,fogEnd:100,camDistance:80},i_={flowSpeed:.2,streakLength:1.5,zoom:2.5,turbulence:1.2,gridOpacity:.15},r_={speed:.5,twist:1,noise:1,width:4,color1:"#4f46e5",color2:"#06b6d4"},o_={speed:.3,scale:1,density:1,brightness:1,color1:"#3b0764",color2:"#06b6d4"},s_={speed:1,scale:1,hueShift:0,saturation:.7,brightness:1,warpStrength:.3},c_={speed:1,scale:1.2,hueSpeed:1,saturation:.7,brightness:.8,contrast:1.2},u_={speed:.2,zoom:3,colorShift:0,complexity:1,contrast:1},f_={speed:.5,height:2,smoothness:1,color1:"#2266ff",color2:"#9933ff"},d_={textGlow:5,textScale:1,terrainBrightness:.5},m_={waveSpeed:.5,colorShift:1,opacity:.4},p_={speed:1,glow:1,gridSize:1,color1:"#4040ff",color2:"#40a0ff"},h_={speed:1,gamma:2,accent1:"#ff1a80",accent2:"#ff801a",bg1:"#1a80ff",bg2:"#1a8099"},g_={speed:1,grain:.1,vignette:.5},x_={speed:1,layers:12,depth:1,turbulence:1,grain:.05,vignette:.5,color1:"#c44b32",color2:"#f0a050",color3:"#9ab4ff"},v_={scrollProgress:0,colWidth:.7,speed:.2,scale:.25,seed:.231,color:[.235,.635,.062]},b_={vortex:{name:"Vortex Portal",technique:"Simplex Noise + FBM + Polar Domain Warping"},lumina:{name:"Lumina Flow",technique:"Perlin Noise + Multi-Layer Domain Warping"},isometric:{name:"Isometric Flow",technique:"DDA Raymarching + AABB Collision + Procedural Animation"},flowfield:{name:"Flow Field",technique:"Curl Noise + Pseudo-LIC Advection + Procedural Heatmap"},tunnel:{name:"Warp Tunnel",technique:"Volumetric Raymarching + FBM Noise Displacement"},aura:{name:"Noise Aura",technique:"Volumetric Light Accumulation + Multi-Orb Lighting"},neon:{name:"Neon Noise",technique:"FBM + Domain Warping + HSV Color Mapping"},fluid:{name:"Fluid Flow",technique:"Double Domain Warping + FBM + HSV Gradients"},neuro:{name:"NeuroFlow",technique:"Simplex Noise + Hue Rotation + Dynamic Lines"},neonwave:{name:"Neonwave",technique:"3D Plane Stacking + FBM Terrain + HSV Gradients",credit:{author:"mrange",url:"https://www.shadertoy.com/view/7dyyRy",date:"2022-06-12"}},neontext:{name:"Neon Text",technique:"Sphere Raymarching + SDF Text + Neon Glow"},aurora:{name:"Aurora Cloudscape",technique:"Volumetric Clouds + Wave Motion + Color Gradients"},hypergrid:{name:"Hyper Grid",technique:"Grid Marching + Rodrigues Rotation + Glow Accumulation",credit:{author:"totetmatt",url:"https://www.shadertoy.com/view/lcjGWV",date:"2024-01-07"}},jellyfish:{name:"Luminescence",technique:"SDF Raymarching + Space Repetition + Volumetric Rendering",credit:{author:"BigWings",url:"https://www.shadertoy.com/view/MlKcDD",date:"2017-05-23"}},trainjourney:{name:"Train Journey",technique:"Multi-Layer Parallax + FBM Terrain + Procedural SDF",credit:{author:"mdb",url:"https://www.shadertoy.com/view/Ndc3zl",date:"2021-08-31"}},horizon:{name:"Horizon",technique:"Parametric Parallax + FBM Terrain + Depth Color Gradient"}},y_=()=>{const[o,a]=R.useState("shaders"),[i,l]=R.useState("vortex"),[c,f]=R.useState("gooey"),[r,m]=R.useState("echotrace"),[x,h]=R.useState(a_),[g,b]=R.useState(n_),[w,_]=R.useState(l_),[N,S]=R.useState(i_),[T,j]=R.useState(r_),[C,A]=R.useState(o_),[k,G]=R.useState(s_),[L,M]=R.useState(c_),[E,D]=R.useState(u_),[F,V]=R.useState(f_),[$,Q]=R.useState(d_),[te,le]=R.useState(m_),[U,W]=R.useState(p_),[re,ce]=R.useState(h_),[me,B]=R.useState(g_),[Y,ae]=R.useState(x_),[ee,ne]=R.useState(v_),[ie,oe]=R.useState(Vy),[ve,Re]=R.useState(p3),[pe,qe]=R.useState(v3),[ct,Te]=R.useState(I3),[Ee,Ut]=R.useState(Y3),[Na,Ht]=R.useState(J3),[he,xa]=R.useState("fission"),[fn,Oa]=R.useState(a5),[ge,Tl]=R.useState(i5),[yt,ac]=R.useState(d5),[Gi,lo]=R.useState(x5),[Xn,nc]=R.useState(N5),[Ii,lc]=R.useState(E5),[io,Zn]=R.useState(z5),[St,Ra]=R.useState(H5),[_t,ic]=R.useState($5),[rc,Wn]=R.useState(!1),va=b_[i];return u.jsxs("div",{className:"h-screen bg-[#f8f8f8] flex p-3 gap-3",children:[u.jsx(cb,{activeCategory:o,onCategoryChange:a}),u.jsx("div",{className:"flex-1 bg-white rounded-3xl flex flex-col overflow-hidden",children:o==="shaders"?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 flex-shrink-0",children:[u.jsx("span",{className:"text-[13px] font-medium text-neutral-700",children:va.name}),u.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400",children:va.technique}),va.credit&&u.jsxs("a",{href:va.credit.url,target:"_blank",rel:"noopener noreferrer",className:"text-[8px] text-neutral-400 hover:text-neutral-600 transition-colors",children:["by ",va.credit.author," · ",va.credit.date]}),u.jsx("div",{className:"flex-1"}),u.jsx("button",{onClick:()=>Wn(!0),className:"w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors",children:u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[u.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.2"}),u.jsx("path",{d:"M4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.17 7 5.5 6.5 5.75C6.25 5.88 6 6.08 6 6.4V6.75",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round"}),u.jsx("circle",{cx:"6",cy:"8.25",r:"0.5",fill:"currentColor"})]})})]}),u.jsxs("div",{className:"flex-1 flex min-h-0 px-5 gap-4",children:[u.jsx("div",{className:"flex-[3] flex flex-col min-h-0",children:u.jsxs("div",{className:"bg-neutral-100 rounded-2xl flex-1 overflow-hidden",children:[i==="vortex"&&u.jsx(bb,{params:x}),i==="lumina"&&u.jsx(wb,{params:g}),i==="isometric"&&u.jsx(Rb,{params:w}),i==="flowfield"&&u.jsx(Eb,{params:N}),i==="tunnel"&&u.jsx(Lb,{params:T}),i==="aura"&&u.jsx(Gb,{params:C}),i==="neon"&&u.jsx(Pb,{params:k}),i==="fluid"&&u.jsx(Xb,{params:L}),i==="neuro"&&u.jsx(Qb,{params:E}),i==="neonwave"&&u.jsx(ty,{params:F}),i==="neontext"&&u.jsx(iy,{params:$}),i==="aurora"&&u.jsx(cy,{params:te}),i==="hypergrid"&&u.jsx(my,{params:U}),i==="jellyfish"&&u.jsx(xy,{params:re}),i==="trainjourney"&&u.jsx(Sy,{params:me}),i==="horizon"&&u.jsx(Ny,{params:Y})]})}),u.jsx("div",{className:"flex-[2] flex flex-col min-h-0",children:u.jsx("div",{className:"h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden",children:u.jsxs("div",{className:"p-3 overflow-y-auto flex-1 min-h-0",children:[i==="vortex"&&u.jsx(yb,{params:x,onChange:h}),i==="lumina"&&u.jsx(Cb,{params:g,onChange:b}),i==="isometric"&&u.jsx(Tb,{params:w,onChange:_}),i==="flowfield"&&u.jsx(Db,{params:N,onChange:S}),i==="tunnel"&&u.jsx(Bb,{params:T,onChange:j}),i==="aura"&&u.jsx(Ib,{params:C,onChange:A}),i==="neon"&&u.jsx(qb,{params:k,onChange:G}),i==="fluid"&&u.jsx(Zb,{params:L,onChange:M}),i==="neuro"&&u.jsx(Jb,{params:E,onChange:D}),i==="neonwave"&&u.jsx(ay,{params:F,onChange:V}),i==="neontext"&&u.jsx(ry,{params:$,onChange:Q}),i==="aurora"&&u.jsx(uy,{params:te,onChange:le}),i==="hypergrid"&&u.jsx(py,{params:U,onChange:W}),i==="jellyfish"&&u.jsx(vy,{params:re,onChange:ce}),i==="trainjourney"&&u.jsx(wy,{params:me,onChange:B}),i==="horizon"&&u.jsx(Ry,{params:Y,onChange:ae})]})})})]}),u.jsx(fb,{active:i,onSelect:l})]}):o==="demos"?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 flex-shrink-0",children:[u.jsx("span",{className:"text-[13px] font-medium text-neutral-700",children:c==="gooey"?"Gooey Overlay":c==="parallax"?"Parallax Scroll":c==="frosted"?"Frosted Glass":"Video Text"}),u.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400",children:c==="gooey"?"Simplex Noise + Scroll-Driven Animation":c==="parallax"?"SVG + GSAP ScrollTrigger":c==="frosted"?"CSS backdrop-filter + mask-image":"SVG feComponentTransfer + background-clip: text"}),u.jsx("div",{className:"flex-1"}),u.jsxs("a",{href:c==="gooey"?"https://codepen.io/ksenia-k/pen/NWmMxLg":c==="parallax"?"https://codepen.io/isladjan/pen/abdyPBw":c==="frosted"?"https://codepen.io/lessthanthree/pen/LENwGyZ":"https://codepen.io/thebabydino/pen/RNBwBYe",target:"_blank",rel:"noopener noreferrer",className:"text-[8px] text-neutral-400 hover:text-neutral-600 transition-colors",children:["by ",c==="gooey"?"ksenia-k":c==="parallax"?"isladjan":c==="frosted"?"lessthanthree":"thebabydino"," · CodePen"]}),u.jsx("button",{onClick:()=>Wn(!0),className:"w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors",children:u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[u.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.2"}),u.jsx("path",{d:"M4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.17 7 5.5 6.5 5.75C6.25 5.88 6 6.08 6 6.4V6.75",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round"}),u.jsx("circle",{cx:"6",cy:"8.25",r:"0.5",fill:"currentColor"})]})})]}),u.jsx("div",{className:"flex-1 flex min-h-0 px-5 gap-4",children:c==="gooey"?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"flex-[3] flex flex-col min-h-0",children:u.jsx("div",{className:"bg-[#fff0e5] rounded-2xl flex-1 overflow-hidden",children:u.jsx(My,{params:ee})})}),u.jsx("div",{className:"flex-[2] flex flex-col min-h-0",children:u.jsx("div",{className:"h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden",children:u.jsx("div",{className:"p-3 overflow-y-auto flex-1 min-h-0",children:u.jsx(zy,{params:ee,onChange:ne})})})})]}):c==="frosted"?u.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:u.jsx("div",{className:"bg-neutral-900 rounded-2xl flex-1 overflow-hidden",children:u.jsx(Fy,{})})}):c==="videotext"?u.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:u.jsx("div",{className:"bg-neutral-800 rounded-2xl flex-1 overflow-hidden",children:u.jsx(Gy,{})})}):u.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:u.jsx("div",{className:"bg-white rounded-2xl flex-1 overflow-hidden",children:u.jsx(ky,{})})})}),u.jsx(Uy,{active:c,onSelect:f})]}):o==="playground"?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 flex-shrink-0",children:[u.jsx("span",{className:"text-[13px] font-medium text-neutral-700",children:r==="echotrace"?"EchoTrace":r==="spotlight"?"Spotlight":r==="textmask"?"Text Mask":r==="flip"?"FLIP":r==="framers"?"Framers":"Squares"}),u.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400",children:r==="echotrace"?"Psychedelic Motion Trail":r==="spotlight"?"CSS Screen Blend Mode + GSAP":r==="textmask"?"SVG Mask + GSAP Bubble Reveal":r==="flip"?"GSAP Flip Layout Animation":r==="framers"?"Splitting.js + CSS Stagger Animation":"Normal Distribution + Gradient Color Mapping"}),u.jsx("div",{className:"flex-1"}),u.jsx("button",{onClick:()=>Wn(!0),className:"w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors",children:u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[u.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.2"}),u.jsx("path",{d:"M4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.17 7 5.5 6.5 5.75C6.25 5.88 6 6.08 6 6.4V6.75",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round"}),u.jsx("circle",{cx:"6",cy:"8.25",r:"0.5",fill:"currentColor"})]})})]}),u.jsxs("div",{className:"flex-1 flex min-h-0 px-5 gap-4",children:[u.jsx("div",{className:"flex-[3] flex flex-col min-h-0",children:u.jsxs("div",{className:`rounded-2xl flex-1 overflow-hidden ${r==="echotrace"?"bg-neutral-950":r==="textmask"||r==="framers"?"":"bg-white"}`,style:r==="textmask"?{backgroundColor:pe.bgColor}:r==="framers"?{backgroundColor:Ee.bgColor}:void 0,children:[r==="echotrace"&&u.jsx(qy,{params:ie}),r==="spotlight"&&u.jsx(m3,{params:ve}),r==="textmask"&&u.jsx(x3,{params:pe}),r==="flip"&&u.jsx(G3,{params:ct}),r==="framers"&&u.jsx(P3,{params:Ee}),r==="squares"&&u.jsx(K3,{params:Na})]})}),u.jsx("div",{className:"flex-[2] flex flex-col min-h-0",children:u.jsx("div",{className:"h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden",children:u.jsxs("div",{className:"p-3 overflow-y-auto flex-1 min-h-0",children:[r==="echotrace"&&u.jsx(Zy,{params:ie,onChange:oe}),r==="spotlight"&&u.jsx(h3,{params:ve,onChange:Re}),r==="textmask"&&u.jsx(y3,{params:pe,onChange:qe}),r==="flip"&&u.jsx(U3,{params:ct,onChange:Te}),r==="framers"&&u.jsx(V3,{params:Ee,onChange:Ut}),r==="squares"&&u.jsx(Q3,{params:Na,onChange:Ht})]})})})]}),u.jsx(_3,{active:r,onSelect:m})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 flex-shrink-0",children:[u.jsx("span",{className:"text-[13px] font-medium text-neutral-700",children:he==="fission"?"Fission":he==="metaball"?"Metaball":he==="sdfmorph"?"SDF Morph":he==="lettermorph"?"Letter Morph":he==="liquidfill"?"Liquid Fill":he==="gooeyfx"?"Gooey FX":he==="eyetrack"?"Eye Track":he==="liquidtrans"?"Liquid Trans":"Dot Grid"}),u.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400",children:he==="fission"?"Canvas 2D + Additive Glow + Lerp Easing":he==="metaball"?"CSS Gooey Filter (blur + contrast) + Lerp Easing":he==="sdfmorph"?"WebGL SDF Morphing + Liquid Fusion + Easing Curves":he==="lettermorph"?"WebGL 26-Letter SDF Morphing + Smooth Min Fusion":he==="liquidfill"?"CSS Gooey Filter + SVG Path Morphing + Splash Particles":he==="gooeyfx"?"SVG Gooey Filter (feGaussianBlur + feColorMatrix) Spectrum Bars":he==="eyetrack"?"CSS Cursor Tracking + Lerp Smoothing + Blink Animation":he==="liquidtrans"?"Simplex Noise + Double Domain Warping + Smoothstep Banding":"Canvas 2D Dot-to-Grid Morphing + Staggered Easing"}),u.jsx("div",{className:"flex-1"}),u.jsx("button",{onClick:()=>Wn(!0),className:"w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors",children:u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[u.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.2"}),u.jsx("path",{d:"M4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.17 7 5.5 6.5 5.75C6.25 5.88 6 6.08 6 6.4V6.75",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round"}),u.jsx("circle",{cx:"6",cy:"8.25",r:"0.5",fill:"currentColor"})]})})]}),u.jsxs("div",{className:"flex-1 flex min-h-0 px-5 gap-4",children:[u.jsx("div",{className:"flex-[3] flex flex-col min-h-0",children:u.jsxs("div",{className:"bg-neutral-950 rounded-2xl flex-1 overflow-hidden",children:[he==="fission"&&u.jsx(e5,{params:fn}),he==="metaball"&&u.jsx(n5,{params:ge}),he==="sdfmorph"&&u.jsx(s5,{params:yt}),he==="lettermorph"&&u.jsx(h5,{params:Gi}),he==="liquidfill"&&u.jsx(w5,{params:Xn}),he==="gooeyfx"&&u.jsx(R5,{params:Ii}),he==="eyetrack"&&u.jsx(D5,{params:io}),he==="liquidtrans"&&u.jsx(U5,{params:St}),he==="dotgrid"&&u.jsx(Q5,{params:_t})]})}),u.jsx("div",{className:"flex-[2] flex flex-col min-h-0",children:u.jsx("div",{className:"h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden",children:u.jsxs("div",{className:"p-3 overflow-y-auto flex-1 min-h-0",children:[he==="fission"&&u.jsx(t5,{params:fn,onChange:Oa}),he==="metaball"&&u.jsx(l5,{params:ge,onChange:Tl}),he==="sdfmorph"&&u.jsx(f5,{params:yt,onChange:ac}),he==="lettermorph"&&u.jsx(g5,{params:Gi,onChange:lo}),he==="liquidfill"&&u.jsx(A5,{params:Xn,onChange:nc}),he==="gooeyfx"&&u.jsx(M5,{params:Ii,onChange:lc}),he==="eyetrack"&&u.jsx(L5,{params:io,onChange:Zn}),he==="liquidtrans"&&u.jsx(Y5,{params:St,onChange:Ra}),he==="dotgrid"&&u.jsx(J5,{params:_t,onChange:ic})]})})})]}),u.jsx(t_,{active:he,onSelect:xa})]})}),rc&&u.jsx(db,{guide:o==="shaders"?mb[i]:o==="demos"?pb[c]:o==="particle"?gb[he]:hb[r],onClose:()=>Wn(!1)})]})};Y2.createRoot(document.getElementById("root")).render(u.jsx(dx.StrictMode,{children:u.jsx(y_,{})}));
