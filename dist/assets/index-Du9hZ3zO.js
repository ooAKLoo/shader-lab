var ty=Object.defineProperty;var ny=(r,n,l)=>n in r?ty(r,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[n]=l;var Wi=(r,n,l)=>ny(r,typeof n!="symbol"?n+"":n,l);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const o of f.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerPolicy&&(f.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?f.credentials="include":s.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function a(s){if(s.ep)return;s.ep=!0;const f=l(s);fetch(s.href,f)}})();function N1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var gd={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function ay(){if(Vg)return bo;Vg=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function l(a,s,f){var o=null;if(f!==void 0&&(o=""+f),s.key!==void 0&&(o=""+s.key),"key"in s){f={};for(var m in s)m!=="key"&&(f[m]=s[m])}else f=s;return s=f.ref,{$$typeof:r,type:a,key:o,ref:s!==void 0?s:null,props:f}}return bo.Fragment=n,bo.jsx=l,bo.jsxs=l,bo}var Yg;function iy(){return Yg||(Yg=1,gd.exports=ay()),gd.exports}var u=iy(),xd={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function ly(){if(Xg)return _e;Xg=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),o=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,N={};function j(O,P,J){this.props=O,this.context=P,this.refs=N,this.updater=J||R}j.prototype.isReactComponent={},j.prototype.setState=function(O,P){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,P,"setState")},j.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function A(){}A.prototype=j.prototype;function C(O,P,J){this.props=O,this.context=P,this.refs=N,this.updater=J||R}var z=C.prototype=new A;z.constructor=C,w(z,j.prototype),z.isPureReactComponent=!0;var M=Array.isArray;function k(){}var D={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function E(O,P,J){var te=J.ref;return{$$typeof:r,type:O,key:P,ref:te!==void 0?te:null,props:J}}function L(O,P){return E(O.type,P,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function W(O){var P={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(J){return P[J]})}var K=/\/+/g;function q(O,P){return typeof O=="object"&&O!==null&&O.key!=null?W(""+O.key):P.toString(36)}function ie(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(k,k):(O.status="pending",O.then(function(P){O.status==="pending"&&(O.status="fulfilled",O.value=P)},function(P){O.status==="pending"&&(O.status="rejected",O.reason=P)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function U(O,P,J,te,ae){var le=typeof O;(le==="undefined"||le==="boolean")&&(O=null);var oe=!1;if(O===null)oe=!0;else switch(le){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(O.$$typeof){case r:case n:oe=!0;break;case g:return oe=O._init,U(oe(O._payload),P,J,te,ae)}}if(oe)return ae=ae(O),oe=te===""?"."+q(O,0):te,M(ae)?(J="",oe!=null&&(J=oe.replace(K,"$&/")+"/"),U(ae,P,J,"",function(fe){return fe})):ae!=null&&(G(ae)&&(ae=L(ae,J+(ae.key==null||O&&O.key===ae.key?"":(""+ae.key).replace(K,"$&/")+"/")+oe)),P.push(ae)),1;oe=0;var me=te===""?".":te+":";if(M(O))for(var re=0;re<O.length;re++)te=O[re],le=me+q(te,re),oe+=U(te,P,J,le,ae);else if(re=y(O),typeof re=="function")for(O=re.call(O),re=0;!(te=O.next()).done;)te=te.value,le=me+q(te,re++),oe+=U(te,P,J,le,ae);else if(le==="object"){if(typeof O.then=="function")return U(ie(O),P,J,te,ae);throw P=String(O),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return oe}function Q(O,P,J){if(O==null)return O;var te=[],ae=0;return U(O,te,"","",function(le){return P.call(J,le,ae++)}),te}function se(O){if(O._status===-1){var P=O._result;P=P(),P.then(function(J){(O._status===0||O._status===-1)&&(O._status=1,O._result=J)},function(J){(O._status===0||O._status===-1)&&(O._status=2,O._result=J)}),O._status===-1&&(O._status=0,O._result=P)}if(O._status===1)return O._result.default;throw O._result}var ue=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},pe={map:Q,forEach:function(O,P,J){Q(O,function(){P.apply(this,arguments)},J)},count:function(O){var P=0;return Q(O,function(){P++}),P},toArray:function(O){return Q(O,function(P){return P})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return _e.Activity=v,_e.Children=pe,_e.Component=j,_e.Fragment=l,_e.Profiler=s,_e.PureComponent=C,_e.StrictMode=a,_e.Suspense=x,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,_e.__COMPILER_RUNTIME={__proto__:null,c:function(O){return D.H.useMemoCache(O)}},_e.cache=function(O){return function(){return O.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(O,P,J){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var te=w({},O.props),ae=O.key;if(P!=null)for(le in P.key!==void 0&&(ae=""+P.key),P)!B.call(P,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&P.ref===void 0||(te[le]=P[le]);var le=arguments.length-2;if(le===1)te.children=J;else if(1<le){for(var oe=Array(le),me=0;me<le;me++)oe[me]=arguments[me+2];te.children=oe}return E(O.type,ae,te)},_e.createContext=function(O){return O={$$typeof:o,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:f,_context:O},O},_e.createElement=function(O,P,J){var te,ae={},le=null;if(P!=null)for(te in P.key!==void 0&&(le=""+P.key),P)B.call(P,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ae[te]=P[te]);var oe=arguments.length-2;if(oe===1)ae.children=J;else if(1<oe){for(var me=Array(oe),re=0;re<oe;re++)me[re]=arguments[re+2];ae.children=me}if(O&&O.defaultProps)for(te in oe=O.defaultProps,oe)ae[te]===void 0&&(ae[te]=oe[te]);return E(O,le,ae)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(O){return{$$typeof:m,render:O}},_e.isValidElement=G,_e.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:se}},_e.memo=function(O,P){return{$$typeof:p,type:O,compare:P===void 0?null:P}},_e.startTransition=function(O){var P=D.T,J={};D.T=J;try{var te=O(),ae=D.S;ae!==null&&ae(J,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(k,ue)}catch(le){ue(le)}finally{P!==null&&J.types!==null&&(P.types=J.types),D.T=P}},_e.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},_e.use=function(O){return D.H.use(O)},_e.useActionState=function(O,P,J){return D.H.useActionState(O,P,J)},_e.useCallback=function(O,P){return D.H.useCallback(O,P)},_e.useContext=function(O){return D.H.useContext(O)},_e.useDebugValue=function(){},_e.useDeferredValue=function(O,P){return D.H.useDeferredValue(O,P)},_e.useEffect=function(O,P){return D.H.useEffect(O,P)},_e.useEffectEvent=function(O){return D.H.useEffectEvent(O)},_e.useId=function(){return D.H.useId()},_e.useImperativeHandle=function(O,P,J){return D.H.useImperativeHandle(O,P,J)},_e.useInsertionEffect=function(O,P){return D.H.useInsertionEffect(O,P)},_e.useLayoutEffect=function(O,P){return D.H.useLayoutEffect(O,P)},_e.useMemo=function(O,P){return D.H.useMemo(O,P)},_e.useOptimistic=function(O,P){return D.H.useOptimistic(O,P)},_e.useReducer=function(O,P,J){return D.H.useReducer(O,P,J)},_e.useRef=function(O){return D.H.useRef(O)},_e.useState=function(O){return D.H.useState(O)},_e.useSyncExternalStore=function(O,P,J){return D.H.useSyncExternalStore(O,P,J)},_e.useTransition=function(){return D.H.useTransition()},_e.version="19.2.4",_e}var Zg;function N0(){return Zg||(Zg=1,xd.exports=ly()),xd.exports}var _=N0();const T1=N1(_);var vd={exports:{}},yo={},bd={exports:{}},yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function ry(){return Wg||(Wg=1,(function(r){function n(U,Q){var se=U.length;U.push(Q);e:for(;0<se;){var ue=se-1>>>1,pe=U[ue];if(0<s(pe,Q))U[ue]=Q,U[se]=pe,se=ue;else break e}}function l(U){return U.length===0?null:U[0]}function a(U){if(U.length===0)return null;var Q=U[0],se=U.pop();if(se!==Q){U[0]=se;e:for(var ue=0,pe=U.length,O=pe>>>1;ue<O;){var P=2*(ue+1)-1,J=U[P],te=P+1,ae=U[te];if(0>s(J,se))te<pe&&0>s(ae,J)?(U[ue]=ae,U[te]=se,ue=te):(U[ue]=J,U[P]=se,ue=P);else if(te<pe&&0>s(ae,se))U[ue]=ae,U[te]=se,ue=te;else break e}}return Q}function s(U,Q){var se=U.sortIndex-Q.sortIndex;return se!==0?se:U.id-Q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var o=Date,m=o.now();r.unstable_now=function(){return o.now()-m}}var x=[],p=[],g=1,v=null,S=3,y=!1,R=!1,w=!1,N=!1,j=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function z(U){for(var Q=l(p);Q!==null;){if(Q.callback===null)a(p);else if(Q.startTime<=U)a(p),Q.sortIndex=Q.expirationTime,n(x,Q);else break;Q=l(p)}}function M(U){if(w=!1,z(U),!R)if(l(x)!==null)R=!0,k||(k=!0,W());else{var Q=l(p);Q!==null&&ie(M,Q.startTime-U)}}var k=!1,D=-1,B=5,E=-1;function L(){return N?!0:!(r.unstable_now()-E<B)}function G(){if(N=!1,k){var U=r.unstable_now();E=U;var Q=!0;try{e:{R=!1,w&&(w=!1,A(D),D=-1),y=!0;var se=S;try{t:{for(z(U),v=l(x);v!==null&&!(v.expirationTime>U&&L());){var ue=v.callback;if(typeof ue=="function"){v.callback=null,S=v.priorityLevel;var pe=ue(v.expirationTime<=U);if(U=r.unstable_now(),typeof pe=="function"){v.callback=pe,z(U),Q=!0;break t}v===l(x)&&a(x),z(U)}else a(x);v=l(x)}if(v!==null)Q=!0;else{var O=l(p);O!==null&&ie(M,O.startTime-U),Q=!1}}break e}finally{v=null,S=se,y=!1}Q=void 0}}finally{Q?W():k=!1}}}var W;if(typeof C=="function")W=function(){C(G)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,q=K.port2;K.port1.onmessage=G,W=function(){q.postMessage(null)}}else W=function(){j(G,0)};function ie(U,Q){D=j(function(){U(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(U){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var se=S;S=Q;try{return U()}finally{S=se}},r.unstable_requestPaint=function(){N=!0},r.unstable_runWithPriority=function(U,Q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var se=S;S=U;try{return Q()}finally{S=se}},r.unstable_scheduleCallback=function(U,Q,se){var ue=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?ue+se:ue):se=ue,U){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=se+pe,U={id:g++,callback:Q,priorityLevel:U,startTime:se,expirationTime:pe,sortIndex:-1},se>ue?(U.sortIndex=se,n(p,U),l(x)===null&&U===l(p)&&(w?(A(D),D=-1):w=!0,ie(M,se-ue))):(U.sortIndex=pe,n(x,U),R||y||(R=!0,k||(k=!0,W()))),U},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(U){var Q=S;return function(){var se=S;S=Q;try{return U.apply(this,arguments)}finally{S=se}}}})(yd)),yd}var Kg;function oy(){return Kg||(Kg=1,bd.exports=ry()),bd.exports}var Sd={exports:{}},Gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function sy(){if(Qg)return Gt;Qg=1;var r=N0();function n(x){var p="https://react.dev/errors/"+x;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+x+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var a={d:{f:l,r:function(){throw Error(n(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},s=Symbol.for("react.portal");function f(x,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:x,containerInfo:p,implementation:g}}var o=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,p){if(x==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Gt.createPortal=function(x,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return f(x,p,null,g)},Gt.flushSync=function(x){var p=o.T,g=a.p;try{if(o.T=null,a.p=2,x)return x()}finally{o.T=p,a.p=g,a.d.f()}},Gt.preconnect=function(x,p){typeof x=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(x,p))},Gt.prefetchDNS=function(x){typeof x=="string"&&a.d.D(x)},Gt.preinit=function(x,p){if(typeof x=="string"&&p&&typeof p.as=="string"){var g=p.as,v=m(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(x,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):g==="script"&&a.d.X(x,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Gt.preinitModule=function(x,p){if(typeof x=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=m(p.as,p.crossOrigin);a.d.M(x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(x)},Gt.preload=function(x,p){if(typeof x=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=m(g,p.crossOrigin);a.d.L(x,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Gt.preloadModule=function(x,p){if(typeof x=="string")if(p){var g=m(p.as,p.crossOrigin);a.d.m(x,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(x)},Gt.requestFormReset=function(x){a.d.r(x)},Gt.unstable_batchedUpdates=function(x,p){return x(p)},Gt.useFormState=function(x,p,g){return o.H.useFormState(x,p,g)},Gt.useFormStatus=function(){return o.H.useHostTransitionStatus()},Gt.version="19.2.4",Gt}var $g;function j1(){if($g)return Sd.exports;$g=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),Sd.exports=sy(),Sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function cy(){if(Jg)return yo;Jg=1;var r=oy(),n=N0(),l=j1();function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function o(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(a(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(a(188));return t!==e?null:e}for(var i=e,c=t;;){var d=i.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){i=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===i)return x(d),e;if(h===c)return x(d),t;h=h.sibling}throw Error(a(188))}if(i.return!==c.return)i=d,c=h;else{for(var b=!1,T=d.child;T;){if(T===i){b=!0,i=d,c=h;break}if(T===c){b=!0,c=d,i=h;break}T=T.sibling}if(!b){for(T=h.child;T;){if(T===i){b=!0,i=h,c=d;break}if(T===c){b=!0,c=h,i=d;break}T=T.sibling}if(!b)throw Error(a(189))}}if(i.alternate!==c)throw Error(a(190))}if(i.tag!==3)throw Error(a(188));return i.stateNode.current===i?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),C=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var K=Symbol.for("react.client.reference");function q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===K?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case j:return"Profiler";case N:return"StrictMode";case M:return"Suspense";case k:return"SuspenseList";case E:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case C:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return t=e.displayName||null,t!==null?t:q(e.type)||"Memo";case B:t=e._payload,e=e._init;try{return q(e(t))}catch{}}return null}var ie=Array.isArray,U=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ue=[],pe=-1;function O(e){return{current:e}}function P(e){0>pe||(e.current=ue[pe],ue[pe]=null,pe--)}function J(e,t){pe++,ue[pe]=e.current,e.current=t}var te=O(null),ae=O(null),le=O(null),oe=O(null);function me(e,t){switch(J(le,t),J(ae,e),J(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hg(t),e=pg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(te),J(te,e)}function re(){P(te),P(ae),P(le)}function fe(e){e.memoizedState!==null&&J(oe,e);var t=te.current,i=pg(t,e.type);t!==i&&(J(ae,e),J(te,i))}function Ae(e){ae.current===e&&(P(te),P(ae)),oe.current===e&&(P(oe),po._currentValue=se)}var Oe,Se;function ce(e){if(Oe===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);Oe=t&&t[1]||"",Se=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Oe+e+Se}var ke=!1;function Le(e,t){if(!e||ke)return"";ke=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(t){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(Z){var X=Z}Reflect.construct(e,[],ne)}else{try{ne.call()}catch(Z){X=Z}e.call(ne.prototype)}}else{try{throw Error()}catch(Z){X=Z}(ne=e())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(Z){if(Z&&X&&typeof Z.stack=="string")return[Z.stack,X.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=c.DetermineComponentFrameRoot(),b=h[0],T=h[1];if(b&&T){var F=b.split(`
`),Y=T.split(`
`);for(d=c=0;c<F.length&&!F[c].includes("DetermineComponentFrameRoot");)c++;for(;d<Y.length&&!Y[d].includes("DetermineComponentFrameRoot");)d++;if(c===F.length||d===Y.length)for(c=F.length-1,d=Y.length-1;1<=c&&0<=d&&F[c]!==Y[d];)d--;for(;1<=c&&0<=d;c--,d--)if(F[c]!==Y[d]){if(c!==1||d!==1)do if(c--,d--,0>d||F[c]!==Y[d]){var $=`
`+F[c].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),$}while(1<=c&&0<=d);break}}}finally{ke=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?ce(i):""}function Qe(e,t){switch(e.tag){case 26:case 27:case 5:return ce(e.type);case 16:return ce("Lazy");case 13:return e.child!==t&&t!==null?ce("Suspense Fallback"):ce("Suspense");case 19:return ce("SuspenseList");case 0:case 15:return Le(e.type,!1);case 11:return Le(e.type.render,!1);case 1:return Le(e.type,!0);case 31:return ce("Activity");default:return""}}function ge(e){try{var t="",i=null;do t+=Qe(e,i),i=e,e=e.return;while(e);return t}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var je=Object.prototype.hasOwnProperty,be=r.unstable_scheduleCallback,we=r.unstable_cancelCallback,de=r.unstable_shouldYield,at=r.unstable_requestPaint,Me=r.unstable_now,jn=r.unstable_getCurrentPriorityLevel,un=r.unstable_ImmediatePriority,Vt=r.unstable_UserBlockingPriority,It=r.unstable_NormalPriority,Yt=r.unstable_LowPriority,Xt=r.unstable_IdlePriority,fn=r.log,dn=r.unstable_setDisableYieldValue,mn=null,dt=null;function gt(e){if(typeof fn=="function"&&dn(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(mn,e)}catch{}}var Xe=Math.clz32?Math.clz32:qa,aa=Math.log,Zt=Math.LN2;function qa(e){return e>>>=0,e===0?32:31-(aa(e)/Zt|0)|0}var Yn=256,Xn=262144,ia=4194304;function Mn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function la(e,t,i){var c=e.pendingLanes;if(c===0)return 0;var d=0,h=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var T=c&134217727;return T!==0?(c=T&~h,c!==0?d=Mn(c):(b&=T,b!==0?d=Mn(b):i||(i=T&~e,i!==0&&(d=Mn(i))))):(T=c&~h,T!==0?d=Mn(T):b!==0?d=Mn(b):i||(i=c&~e,i!==0&&(d=Mn(i)))),d===0?0:t!==0&&t!==d&&(t&h)===0&&(h=d&-d,i=t&-t,h>=i||h===32&&(i&4194048)!==0)?t:d}function ra(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function fl(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oa(){var e=ia;return ia<<=1,(ia&62914560)===0&&(ia=4194304),e}function Zn(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Qt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sa(e,t,i,c,d,h){var b=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var T=e.entanglements,F=e.expirationTimes,Y=e.hiddenUpdates;for(i=b&~i;0<i;){var $=31-Xe(i),ne=1<<$;T[$]=0,F[$]=-1;var X=Y[$];if(X!==null)for(Y[$]=null,$=0;$<X.length;$++){var Z=X[$];Z!==null&&(Z.lane&=-536870913)}i&=~ne}c!==0&&Rr(e,c,0),h!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=h&~(b&~t))}function Rr(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var c=31-Xe(t);e.entangledLanes|=t,e.entanglements[c]=e.entanglements[c]|1073741824|i&261930}function Nr(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var c=31-Xe(i),d=1<<c;d&t|e[c]&t&&(e[c]|=t),i&=~d}}function ts(e,t){var i=t&-t;return i=(i&42)!==0?1:dl(i),(i&(e.suspendedLanes|t))!==0?0:i}function dl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ml(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Tr(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Fg(e.type))}function ns(e,t){var i=Q.p;try{return Q.p=e,t()}finally{Q.p=i}}var Dn=Math.random().toString(36).slice(2),it="__reactFiber$"+Dn,jt="__reactProps$"+Dn,hl="__reactContainer$"+Dn,ru="__reactEvents$"+Dn,qv="__reactListeners$"+Dn,Vv="__reactHandles$"+Dn,tm="__reactResources$"+Dn,jr="__reactMarker$"+Dn;function ou(e){delete e[it],delete e[jt],delete e[ru],delete e[qv],delete e[Vv]}function pl(e){var t=e[it];if(t)return t;for(var i=e.parentNode;i;){if(t=i[hl]||i[it]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=wg(e);e!==null;){if(i=e[it])return i;e=wg(e)}return t}e=i,i=e.parentNode}return null}function gl(e){if(e=e[it]||e[hl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Mr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(a(33))}function xl(e){var t=e[tm];return t||(t=e[tm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Mt(e){e[jr]=!0}var nm=new Set,am={};function Ei(e,t){vl(e,t),vl(e+"Capture",t)}function vl(e,t){for(am[e]=t,e=0;e<t.length;e++)nm.add(t[e])}var Yv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),im={},lm={};function Xv(e){return je.call(lm,e)?!0:je.call(im,e)?!1:Yv.test(e)?lm[e]=!0:(im[e]=!0,!1)}function as(e,t,i){if(Xv(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var c=t.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function is(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function va(e,t,i,c){if(c===null)e.removeAttribute(i);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+c)}}function En(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zv(e,t,i){var c=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var d=c.get,h=c.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(b){i=""+b,h.call(this,b)}}),Object.defineProperty(e,t,{enumerable:c.enumerable}),{getValue:function(){return i},setValue:function(b){i=""+b},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function su(e){if(!e._valueTracker){var t=rm(e)?"checked":"value";e._valueTracker=Zv(e,t,""+e[t])}}function om(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),c="";return e&&(c=rm(e)?e.checked?"true":"false":e.value),e=c,e!==i?(t.setValue(e),!0):!1}function ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wv=/[\n"\\]/g;function kn(e){return e.replace(Wv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function cu(e,t,i,c,d,h,b,T){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),t!=null?b==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+En(t)):e.value!==""+En(t)&&(e.value=""+En(t)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),t!=null?uu(e,b,En(t)):i!=null?uu(e,b,En(i)):c!=null&&e.removeAttribute("value"),d==null&&h!=null&&(e.defaultChecked=!!h),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+En(T):e.removeAttribute("name")}function sm(e,t,i,c,d,h,b,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),t!=null||i!=null){if(!(h!=="submit"&&h!=="reset"||t!=null)){su(e);return}i=i!=null?""+En(i):"",t=t!=null?""+En(t):i,T||t===e.value||(e.value=t),e.defaultValue=t}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,e.checked=T?e.checked:!!c,e.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),su(e)}function uu(e,t,i){t==="number"&&ls(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function bl(e,t,i,c){if(e=e.options,t){t={};for(var d=0;d<i.length;d++)t["$"+i[d]]=!0;for(i=0;i<e.length;i++)d=t.hasOwnProperty("$"+e[i].value),e[i].selected!==d&&(e[i].selected=d),d&&c&&(e[i].defaultSelected=!0)}else{for(i=""+En(i),t=null,d=0;d<e.length;d++){if(e[d].value===i){e[d].selected=!0,c&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function cm(e,t,i){if(t!=null&&(t=""+En(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+En(i):""}function um(e,t,i,c){if(t==null){if(c!=null){if(i!=null)throw Error(a(92));if(ie(c)){if(1<c.length)throw Error(a(93));c=c[0]}i=c}i==null&&(i=""),t=i}i=En(t),e.defaultValue=i,c=e.textContent,c===i&&c!==""&&c!==null&&(e.value=c),su(e)}function yl(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Kv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fm(e,t,i){var c=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?c?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":c?e.setProperty(t,i):typeof i!="number"||i===0||Kv.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function dm(e,t,i){if(t!=null&&typeof t!="object")throw Error(a(62));if(e=e.style,i!=null){for(var c in i)!i.hasOwnProperty(c)||t!=null&&t.hasOwnProperty(c)||(c.indexOf("--")===0?e.setProperty(c,""):c==="float"?e.cssFloat="":e[c]="");for(var d in t)c=t[d],t.hasOwnProperty(d)&&i[d]!==c&&fm(e,d,c)}else for(var h in t)t.hasOwnProperty(h)&&fm(e,h,t[h])}function fu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rs(e){return $v.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ba(){}var du=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,wl=null;function mm(e){var t=gl(e);if(t&&(e=t.stateNode)){var i=e[jt]||null;e:switch(e=t.stateNode,t.type){case"input":if(cu(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+kn(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var c=i[t];if(c!==e&&c.form===e.form){var d=c[jt]||null;if(!d)throw Error(a(90));cu(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<i.length;t++)c=i[t],c.form===e.form&&om(c)}break e;case"textarea":cm(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&bl(e,!!i.multiple,t,!1)}}}var hu=!1;function hm(e,t,i){if(hu)return e(t,i);hu=!0;try{var c=e(t);return c}finally{if(hu=!1,(Sl!==null||wl!==null)&&(Xs(),Sl&&(t=Sl,e=wl,wl=Sl=null,mm(t),e)))for(t=0;t<e.length;t++)mm(e[t])}}function Dr(e,t){var i=e.stateNode;if(i===null)return null;var c=i[jt]||null;if(c===null)return null;i=c[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(e=e.type,c=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!c;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(a(231,t,typeof i));return i}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(ya)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){pu=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{pu=!1}var Va=null,gu=null,os=null;function pm(){if(os)return os;var e,t=gu,i=t.length,c,d="value"in Va?Va.value:Va.textContent,h=d.length;for(e=0;e<i&&t[e]===d[e];e++);var b=i-e;for(c=1;c<=b&&t[i-c]===d[h-c];c++);return os=d.slice(e,1<c?1-c:void 0)}function ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cs(){return!0}function gm(){return!1}function $t(e){function t(i,c,d,h,b){this._reactName=i,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(i=e[T],this[T]=i?i(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?cs:gm,this.isPropagationStopped=gm,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=cs)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=cs)},persist:function(){},isPersistent:cs}),t}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},us=$t(ki),kr=v({},ki,{view:0,detail:0}),Jv=$t(kr),xu,vu,zr,fs=v({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(xu=e.screenX-zr.screenX,vu=e.screenY-zr.screenY):vu=xu=0,zr=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),xm=$t(fs),e2=v({},fs,{dataTransfer:0}),t2=$t(e2),n2=v({},kr,{relatedTarget:0}),bu=$t(n2),a2=v({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),i2=$t(a2),l2=v({},ki,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r2=$t(l2),o2=v({},ki,{data:0}),vm=$t(o2),s2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u2[e])?!!t[e]:!1}function yu(){return f2}var d2=v({},kr,{key:function(e){if(e.key){var t=s2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m2=$t(d2),h2=v({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=$t(h2),p2=v({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),g2=$t(p2),x2=v({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),v2=$t(x2),b2=v({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y2=$t(b2),S2=v({},ki,{newState:0,oldState:0}),w2=$t(S2),_2=[9,13,27,32],Su=ya&&"CompositionEvent"in window,Br=null;ya&&"documentMode"in document&&(Br=document.documentMode);var C2=ya&&"TextEvent"in window&&!Br,ym=ya&&(!Su||Br&&8<Br&&11>=Br),Sm=" ",wm=!1;function _m(e,t){switch(e){case"keyup":return _2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _l=!1;function A2(e,t){switch(e){case"compositionend":return Cm(t);case"keypress":return t.which!==32?null:(wm=!0,Sm);case"textInput":return e=t.data,e===Sm&&wm?null:e;default:return null}}function R2(e,t){if(_l)return e==="compositionend"||!Su&&_m(e,t)?(e=pm(),os=gu=Va=null,_l=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ym&&t.locale!=="ko"?null:t.data;default:return null}}var N2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!N2[e.type]:t==="textarea"}function Rm(e,t,i,c){Sl?wl?wl.push(c):wl=[c]:Sl=c,t=ec(t,"onChange"),0<t.length&&(i=new us("onChange","change",null,i,c),e.push({event:i,listeners:t}))}var Lr=null,Or=null;function T2(e){sg(e,0)}function ds(e){var t=Mr(e);if(om(t))return e}function Nm(e,t){if(e==="change")return t}var Tm=!1;if(ya){var wu;if(ya){var _u="oninput"in document;if(!_u){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),_u=typeof jm.oninput=="function"}wu=_u}else wu=!1;Tm=wu&&(!document.documentMode||9<document.documentMode)}function Mm(){Lr&&(Lr.detachEvent("onpropertychange",Dm),Or=Lr=null)}function Dm(e){if(e.propertyName==="value"&&ds(Or)){var t=[];Rm(t,Or,e,mu(e)),hm(T2,t)}}function j2(e,t,i){e==="focusin"?(Mm(),Lr=t,Or=i,Lr.attachEvent("onpropertychange",Dm)):e==="focusout"&&Mm()}function M2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ds(Or)}function D2(e,t){if(e==="click")return ds(t)}function E2(e,t){if(e==="input"||e==="change")return ds(t)}function k2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hn=typeof Object.is=="function"?Object.is:k2;function Fr(e,t){if(hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),c=Object.keys(t);if(i.length!==c.length)return!1;for(c=0;c<i.length;c++){var d=i[c];if(!je.call(t,d)||!hn(e[d],t[d]))return!1}return!0}function Em(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function km(e,t){var i=Em(e);e=0;for(var c;i;){if(i.nodeType===3){if(c=e+i.textContent.length,e<=t&&c>=t)return{node:i,offset:t-e};e=c}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Em(i)}}function zm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ls(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=ls(e.document)}return t}function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var z2=ya&&"documentMode"in document&&11>=document.documentMode,Cl=null,Au=null,Ir=null,Ru=!1;function Lm(e,t,i){var c=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ru||Cl==null||Cl!==ls(c)||(c=Cl,"selectionStart"in c&&Cu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ir&&Fr(Ir,c)||(Ir=c,c=ec(Au,"onSelect"),0<c.length&&(t=new us("onSelect","select",null,t,i),e.push({event:t,listeners:c}),t.target=Cl)))}function zi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Al={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionrun:zi("Transition","TransitionRun"),transitionstart:zi("Transition","TransitionStart"),transitioncancel:zi("Transition","TransitionCancel"),transitionend:zi("Transition","TransitionEnd")},Nu={},Om={};ya&&(Om=document.createElement("div").style,"AnimationEvent"in window||(delete Al.animationend.animation,delete Al.animationiteration.animation,delete Al.animationstart.animation),"TransitionEvent"in window||delete Al.transitionend.transition);function Bi(e){if(Nu[e])return Nu[e];if(!Al[e])return e;var t=Al[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Om)return Nu[e]=t[i];return e}var Fm=Bi("animationend"),Im=Bi("animationiteration"),Gm=Bi("animationstart"),B2=Bi("transitionrun"),L2=Bi("transitionstart"),O2=Bi("transitioncancel"),Um=Bi("transitionend"),Pm=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function Wn(e,t){Pm.set(e,t),Ei(t,[e])}var ms=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zn=[],Rl=0,ju=0;function hs(){for(var e=Rl,t=ju=Rl=0;t<e;){var i=zn[t];zn[t++]=null;var c=zn[t];zn[t++]=null;var d=zn[t];zn[t++]=null;var h=zn[t];if(zn[t++]=null,c!==null&&d!==null){var b=c.pending;b===null?d.next=d:(d.next=b.next,b.next=d),c.pending=d}h!==0&&Hm(i,d,h)}}function ps(e,t,i,c){zn[Rl++]=e,zn[Rl++]=t,zn[Rl++]=i,zn[Rl++]=c,ju|=c,e.lanes|=c,e=e.alternate,e!==null&&(e.lanes|=c)}function Mu(e,t,i,c){return ps(e,t,i,c),gs(e)}function Li(e,t){return ps(e,null,null,t),gs(e)}function Hm(e,t,i){e.lanes|=i;var c=e.alternate;c!==null&&(c.lanes|=i);for(var d=!1,h=e.return;h!==null;)h.childLanes|=i,c=h.alternate,c!==null&&(c.childLanes|=i),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(d=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,d&&t!==null&&(d=31-Xe(i),e=h.hiddenUpdates,c=e[d],c===null?e[d]=[t]:c.push(t),t.lane=i|536870912),h):null}function gs(e){if(50<oo)throw oo=0,Gf=null,Error(a(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Nl={};function F2(e,t,i,c){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,t,i,c){return new F2(e,t,i,c)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sa(e,t){var i=e.alternate;return i===null?(i=pn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function qm(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xs(e,t,i,c,d,h){var b=0;if(c=e,typeof e=="function")Du(e)&&(b=1);else if(typeof e=="string")b=Hb(e,i,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case E:return e=pn(31,i,t,d),e.elementType=E,e.lanes=h,e;case w:return Oi(i.children,d,h,t);case N:b=8,d|=24;break;case j:return e=pn(12,i,t,d|2),e.elementType=j,e.lanes=h,e;case M:return e=pn(13,i,t,d),e.elementType=M,e.lanes=h,e;case k:return e=pn(19,i,t,d),e.elementType=k,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:b=10;break e;case A:b=9;break e;case z:b=11;break e;case D:b=14;break e;case B:b=16,c=null;break e}b=29,i=Error(a(130,e===null?"null":typeof e,"")),c=null}return t=pn(b,i,t,d),t.elementType=e,t.type=c,t.lanes=h,t}function Oi(e,t,i,c){return e=pn(7,e,c,t),e.lanes=i,e}function Eu(e,t,i){return e=pn(6,e,null,t),e.lanes=i,e}function Vm(e){var t=pn(18,null,null,0);return t.stateNode=e,t}function ku(e,t,i){return t=pn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ym=new WeakMap;function Bn(e,t){if(typeof e=="object"&&e!==null){var i=Ym.get(e);return i!==void 0?i:(t={value:e,source:t,stack:ge(t)},Ym.set(e,t),t)}return{value:e,source:t,stack:ge(t)}}var Tl=[],jl=0,vs=null,Gr=0,Ln=[],On=0,Ya=null,ca=1,ua="";function wa(e,t){Tl[jl++]=Gr,Tl[jl++]=vs,vs=e,Gr=t}function Xm(e,t,i){Ln[On++]=ca,Ln[On++]=ua,Ln[On++]=Ya,Ya=e;var c=ca;e=ua;var d=32-Xe(c)-1;c&=~(1<<d),i+=1;var h=32-Xe(t)+d;if(30<h){var b=d-d%5;h=(c&(1<<b)-1).toString(32),c>>=b,d-=b,ca=1<<32-Xe(t)+d|i<<d|c,ua=h+e}else ca=1<<h|i<<d|c,ua=e}function zu(e){e.return!==null&&(wa(e,1),Xm(e,1,0))}function Bu(e){for(;e===vs;)vs=Tl[--jl],Tl[jl]=null,Gr=Tl[--jl],Tl[jl]=null;for(;e===Ya;)Ya=Ln[--On],Ln[On]=null,ua=Ln[--On],Ln[On]=null,ca=Ln[--On],Ln[On]=null}function Zm(e,t){Ln[On++]=ca,Ln[On++]=ua,Ln[On++]=Ya,ca=t.id,ua=t.overflow,Ya=e}var kt=null,$e=null,ze=!1,Xa=null,Fn=!1,Lu=Error(a(519));function Za(e){var t=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ur(Bn(t,e)),Lu}function Wm(e){var t=e.stateNode,i=e.type,c=e.memoizedProps;switch(t[it]=e,t[jt]=c,i){case"dialog":Te("cancel",t),Te("close",t);break;case"iframe":case"object":case"embed":Te("load",t);break;case"video":case"audio":for(i=0;i<co.length;i++)Te(co[i],t);break;case"source":Te("error",t);break;case"img":case"image":case"link":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"input":Te("invalid",t),sm(t,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Te("invalid",t);break;case"textarea":Te("invalid",t),um(t,c.value,c.defaultValue,c.children)}i=c.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||c.suppressHydrationWarning===!0||dg(t.textContent,i)?(c.popover!=null&&(Te("beforetoggle",t),Te("toggle",t)),c.onScroll!=null&&Te("scroll",t),c.onScrollEnd!=null&&Te("scrollend",t),c.onClick!=null&&(t.onclick=ba),t=!0):t=!1,t||Za(e,!0)}function Km(e){for(kt=e.return;kt;)switch(kt.tag){case 5:case 31:case 13:Fn=!1;return;case 27:case 3:Fn=!0;return;default:kt=kt.return}}function Ml(e){if(e!==kt)return!1;if(!ze)return Km(e),ze=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||td(e.type,e.memoizedProps)),i=!i),i&&$e&&Za(e),Km(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));$e=Sg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));$e=Sg(e)}else t===27?(t=$e,si(e.type)?(e=rd,rd=null,$e=e):$e=t):$e=kt?Gn(e.stateNode.nextSibling):null;return!0}function Fi(){$e=kt=null,ze=!1}function Ou(){var e=Xa;return e!==null&&(nn===null?nn=e:nn.push.apply(nn,e),Xa=null),e}function Ur(e){Xa===null?Xa=[e]:Xa.push(e)}var Fu=O(null),Ii=null,_a=null;function Wa(e,t,i){J(Fu,t._currentValue),t._currentValue=i}function Ca(e){e._currentValue=Fu.current,P(Fu)}function Iu(e,t,i){for(;e!==null;){var c=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,c!==null&&(c.childLanes|=t)):c!==null&&(c.childLanes&t)!==t&&(c.childLanes|=t),e===i)break;e=e.return}}function Gu(e,t,i,c){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var h=d.dependencies;if(h!==null){var b=d.child;h=h.firstContext;e:for(;h!==null;){var T=h;h=d;for(var F=0;F<t.length;F++)if(T.context===t[F]){h.lanes|=i,T=h.alternate,T!==null&&(T.lanes|=i),Iu(h.return,i,e),c||(b=null);break e}h=T.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(a(341));b.lanes|=i,h=b.alternate,h!==null&&(h.lanes|=i),Iu(b,i,e),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===e){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function Dl(e,t,i,c){e=null;for(var d=t,h=!1;d!==null;){if(!h){if((d.flags&524288)!==0)h=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var T=d.type;hn(d.pendingProps.value,b.value)||(e!==null?e.push(T):e=[T])}}else if(d===oe.current){if(b=d.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(po):e=[po])}d=d.return}e!==null&&Gu(t,e,i,c),t.flags|=262144}function bs(e){for(e=e.firstContext;e!==null;){if(!hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gi(e){Ii=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zt(e){return Qm(Ii,e)}function ys(e,t){return Ii===null&&Gi(e),Qm(e,t)}function Qm(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},_a===null){if(e===null)throw Error(a(308));_a=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _a=_a.next=t;return i}var I2=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,c){e.push(c)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},G2=r.unstable_scheduleCallback,U2=r.unstable_NormalPriority,St={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new I2,data:new Map,refCount:0}}function Pr(e){e.refCount--,e.refCount===0&&G2(U2,function(){e.controller.abort()})}var Hr=null,Pu=0,El=0,kl=null;function P2(e,t){if(Hr===null){var i=Hr=[];Pu=0,El=Yf(),kl={status:"pending",value:void 0,then:function(c){i.push(c)}}}return Pu++,t.then($m,$m),t}function $m(){if(--Pu===0&&Hr!==null){kl!==null&&(kl.status="fulfilled");var e=Hr;Hr=null,El=0,kl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function H2(e,t){var i=[],c={status:"pending",value:null,reason:null,then:function(d){i.push(d)}};return e.then(function(){c.status="fulfilled",c.value=t;for(var d=0;d<i.length;d++)(0,i[d])(t)},function(d){for(c.status="rejected",c.reason=d,d=0;d<i.length;d++)(0,i[d])(void 0)}),c}var Jm=U.S;U.S=function(e,t){Lp=Me(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&P2(e,t),Jm!==null&&Jm(e,t)};var Ui=O(null);function Hu(){var e=Ui.current;return e!==null?e:Ze.pooledCache}function Ss(e,t){t===null?J(Ui,Ui.current):J(Ui,t.pool)}function eh(){var e=Hu();return e===null?null:{parent:St._currentValue,pool:e}}var zl=Error(a(460)),qu=Error(a(474)),ws=Error(a(542)),_s={then:function(){}};function th(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nh(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(ba,ba),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ih(e),e;default:if(typeof t.status=="string")t.then(ba,ba);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=t,e.status="pending",e.then(function(c){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=c}},function(c){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=c}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ih(e),e}throw Hi=t,zl}}function Pi(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Hi=i,zl):i}}var Hi=null;function ah(){if(Hi===null)throw Error(a(459));var e=Hi;return Hi=null,e}function ih(e){if(e===zl||e===ws)throw Error(a(483))}var Bl=null,qr=0;function Cs(e){var t=qr;return qr+=1,Bl===null&&(Bl=[]),nh(Bl,e,t)}function Vr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function As(e,t){throw t.$$typeof===S?Error(a(525)):(e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function lh(e){function t(H,I){if(e){var V=H.deletions;V===null?(H.deletions=[I],H.flags|=16):V.push(I)}}function i(H,I){if(!e)return null;for(;I!==null;)t(H,I),I=I.sibling;return null}function c(H){for(var I=new Map;H!==null;)H.key!==null?I.set(H.key,H):I.set(H.index,H),H=H.sibling;return I}function d(H,I){return H=Sa(H,I),H.index=0,H.sibling=null,H}function h(H,I,V){return H.index=V,e?(V=H.alternate,V!==null?(V=V.index,V<I?(H.flags|=67108866,I):V):(H.flags|=67108866,I)):(H.flags|=1048576,I)}function b(H){return e&&H.alternate===null&&(H.flags|=67108866),H}function T(H,I,V,ee){return I===null||I.tag!==6?(I=Eu(V,H.mode,ee),I.return=H,I):(I=d(I,V),I.return=H,I)}function F(H,I,V,ee){var ve=V.type;return ve===w?$(H,I,V.props.children,ee,V.key):I!==null&&(I.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===B&&Pi(ve)===I.type)?(I=d(I,V.props),Vr(I,V),I.return=H,I):(I=xs(V.type,V.key,V.props,null,H.mode,ee),Vr(I,V),I.return=H,I)}function Y(H,I,V,ee){return I===null||I.tag!==4||I.stateNode.containerInfo!==V.containerInfo||I.stateNode.implementation!==V.implementation?(I=ku(V,H.mode,ee),I.return=H,I):(I=d(I,V.children||[]),I.return=H,I)}function $(H,I,V,ee,ve){return I===null||I.tag!==7?(I=Oi(V,H.mode,ee,ve),I.return=H,I):(I=d(I,V),I.return=H,I)}function ne(H,I,V){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=Eu(""+I,H.mode,V),I.return=H,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case y:return V=xs(I.type,I.key,I.props,null,H.mode,V),Vr(V,I),V.return=H,V;case R:return I=ku(I,H.mode,V),I.return=H,I;case B:return I=Pi(I),ne(H,I,V)}if(ie(I)||W(I))return I=Oi(I,H.mode,V,null),I.return=H,I;if(typeof I.then=="function")return ne(H,Cs(I),V);if(I.$$typeof===C)return ne(H,ys(H,I),V);As(H,I)}return null}function X(H,I,V,ee){var ve=I!==null?I.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return ve!==null?null:T(H,I,""+V,ee);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return V.key===ve?F(H,I,V,ee):null;case R:return V.key===ve?Y(H,I,V,ee):null;case B:return V=Pi(V),X(H,I,V,ee)}if(ie(V)||W(V))return ve!==null?null:$(H,I,V,ee,null);if(typeof V.then=="function")return X(H,I,Cs(V),ee);if(V.$$typeof===C)return X(H,I,ys(H,V),ee);As(H,V)}return null}function Z(H,I,V,ee,ve){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return H=H.get(V)||null,T(I,H,""+ee,ve);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:return H=H.get(ee.key===null?V:ee.key)||null,F(I,H,ee,ve);case R:return H=H.get(ee.key===null?V:ee.key)||null,Y(I,H,ee,ve);case B:return ee=Pi(ee),Z(H,I,V,ee,ve)}if(ie(ee)||W(ee))return H=H.get(V)||null,$(I,H,ee,ve,null);if(typeof ee.then=="function")return Z(H,I,V,Cs(ee),ve);if(ee.$$typeof===C)return Z(H,I,V,ys(I,ee),ve);As(I,ee)}return null}function he(H,I,V,ee){for(var ve=null,Fe=null,xe=I,Re=I=0,Ee=null;xe!==null&&Re<V.length;Re++){xe.index>Re?(Ee=xe,xe=null):Ee=xe.sibling;var Ie=X(H,xe,V[Re],ee);if(Ie===null){xe===null&&(xe=Ee);break}e&&xe&&Ie.alternate===null&&t(H,xe),I=h(Ie,I,Re),Fe===null?ve=Ie:Fe.sibling=Ie,Fe=Ie,xe=Ee}if(Re===V.length)return i(H,xe),ze&&wa(H,Re),ve;if(xe===null){for(;Re<V.length;Re++)xe=ne(H,V[Re],ee),xe!==null&&(I=h(xe,I,Re),Fe===null?ve=xe:Fe.sibling=xe,Fe=xe);return ze&&wa(H,Re),ve}for(xe=c(xe);Re<V.length;Re++)Ee=Z(xe,H,Re,V[Re],ee),Ee!==null&&(e&&Ee.alternate!==null&&xe.delete(Ee.key===null?Re:Ee.key),I=h(Ee,I,Re),Fe===null?ve=Ee:Fe.sibling=Ee,Fe=Ee);return e&&xe.forEach(function(mi){return t(H,mi)}),ze&&wa(H,Re),ve}function ye(H,I,V,ee){if(V==null)throw Error(a(151));for(var ve=null,Fe=null,xe=I,Re=I=0,Ee=null,Ie=V.next();xe!==null&&!Ie.done;Re++,Ie=V.next()){xe.index>Re?(Ee=xe,xe=null):Ee=xe.sibling;var mi=X(H,xe,Ie.value,ee);if(mi===null){xe===null&&(xe=Ee);break}e&&xe&&mi.alternate===null&&t(H,xe),I=h(mi,I,Re),Fe===null?ve=mi:Fe.sibling=mi,Fe=mi,xe=Ee}if(Ie.done)return i(H,xe),ze&&wa(H,Re),ve;if(xe===null){for(;!Ie.done;Re++,Ie=V.next())Ie=ne(H,Ie.value,ee),Ie!==null&&(I=h(Ie,I,Re),Fe===null?ve=Ie:Fe.sibling=Ie,Fe=Ie);return ze&&wa(H,Re),ve}for(xe=c(xe);!Ie.done;Re++,Ie=V.next())Ie=Z(xe,H,Re,Ie.value,ee),Ie!==null&&(e&&Ie.alternate!==null&&xe.delete(Ie.key===null?Re:Ie.key),I=h(Ie,I,Re),Fe===null?ve=Ie:Fe.sibling=Ie,Fe=Ie);return e&&xe.forEach(function(ey){return t(H,ey)}),ze&&wa(H,Re),ve}function Ye(H,I,V,ee){if(typeof V=="object"&&V!==null&&V.type===w&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case y:e:{for(var ve=V.key;I!==null;){if(I.key===ve){if(ve=V.type,ve===w){if(I.tag===7){i(H,I.sibling),ee=d(I,V.props.children),ee.return=H,H=ee;break e}}else if(I.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===B&&Pi(ve)===I.type){i(H,I.sibling),ee=d(I,V.props),Vr(ee,V),ee.return=H,H=ee;break e}i(H,I);break}else t(H,I);I=I.sibling}V.type===w?(ee=Oi(V.props.children,H.mode,ee,V.key),ee.return=H,H=ee):(ee=xs(V.type,V.key,V.props,null,H.mode,ee),Vr(ee,V),ee.return=H,H=ee)}return b(H);case R:e:{for(ve=V.key;I!==null;){if(I.key===ve)if(I.tag===4&&I.stateNode.containerInfo===V.containerInfo&&I.stateNode.implementation===V.implementation){i(H,I.sibling),ee=d(I,V.children||[]),ee.return=H,H=ee;break e}else{i(H,I);break}else t(H,I);I=I.sibling}ee=ku(V,H.mode,ee),ee.return=H,H=ee}return b(H);case B:return V=Pi(V),Ye(H,I,V,ee)}if(ie(V))return he(H,I,V,ee);if(W(V)){if(ve=W(V),typeof ve!="function")throw Error(a(150));return V=ve.call(V),ye(H,I,V,ee)}if(typeof V.then=="function")return Ye(H,I,Cs(V),ee);if(V.$$typeof===C)return Ye(H,I,ys(H,V),ee);As(H,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,I!==null&&I.tag===6?(i(H,I.sibling),ee=d(I,V),ee.return=H,H=ee):(i(H,I),ee=Eu(V,H.mode,ee),ee.return=H,H=ee),b(H)):i(H,I)}return function(H,I,V,ee){try{qr=0;var ve=Ye(H,I,V,ee);return Bl=null,ve}catch(xe){if(xe===zl||xe===ws)throw xe;var Fe=pn(29,xe,null,H.mode);return Fe.lanes=ee,Fe.return=H,Fe}finally{}}}var qi=lh(!0),rh=lh(!1),Ka=!1;function Vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,t,i){var c=e.updateQueue;if(c===null)return null;if(c=c.shared,(Ge&2)!==0){var d=c.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),c.pending=t,t=gs(e),Hm(e,null,i),t}return ps(e,c,t,i),gs(e)}function Yr(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var c=t.lanes;c&=e.pendingLanes,i|=c,t.lanes=i,Nr(e,i)}}function Xu(e,t){var i=e.updateQueue,c=e.alternate;if(c!==null&&(c=c.updateQueue,i===c)){var d=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var b={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};h===null?d=h=b:h=h.next=b,i=i.next}while(i!==null);h===null?d=h=t:h=h.next=t}else d=h=t;i={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,callbacks:c.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var Zu=!1;function Xr(){if(Zu){var e=kl;if(e!==null)throw e}}function Zr(e,t,i,c){Zu=!1;var d=e.updateQueue;Ka=!1;var h=d.firstBaseUpdate,b=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var F=T,Y=F.next;F.next=null,b===null?h=Y:b.next=Y,b=F;var $=e.alternate;$!==null&&($=$.updateQueue,T=$.lastBaseUpdate,T!==b&&(T===null?$.firstBaseUpdate=Y:T.next=Y,$.lastBaseUpdate=F))}if(h!==null){var ne=d.baseState;b=0,$=Y=F=null,T=h;do{var X=T.lane&-536870913,Z=X!==T.lane;if(Z?(De&X)===X:(c&X)===X){X!==0&&X===El&&(Zu=!0),$!==null&&($=$.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var he=e,ye=T;X=t;var Ye=i;switch(ye.tag){case 1:if(he=ye.payload,typeof he=="function"){ne=he.call(Ye,ne,X);break e}ne=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=ye.payload,X=typeof he=="function"?he.call(Ye,ne,X):he,X==null)break e;ne=v({},ne,X);break e;case 2:Ka=!0}}X=T.callback,X!==null&&(e.flags|=64,Z&&(e.flags|=8192),Z=d.callbacks,Z===null?d.callbacks=[X]:Z.push(X))}else Z={lane:X,tag:T.tag,payload:T.payload,callback:T.callback,next:null},$===null?(Y=$=Z,F=ne):$=$.next=Z,b|=X;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;Z=T,T=Z.next,Z.next=null,d.lastBaseUpdate=Z,d.shared.pending=null}}while(!0);$===null&&(F=ne),d.baseState=F,d.firstBaseUpdate=Y,d.lastBaseUpdate=$,h===null&&(d.shared.lanes=0),ai|=b,e.lanes=b,e.memoizedState=ne}}function oh(e,t){if(typeof e!="function")throw Error(a(191,e));e.call(t)}function sh(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)oh(i[e],t)}var Ll=O(null),Rs=O(0);function ch(e,t){e=ka,J(Rs,e),J(Ll,t),ka=e|t.baseLanes}function Wu(){J(Rs,ka),J(Ll,Ll.current)}function Ku(){ka=Rs.current,P(Ll),P(Rs)}var gn=O(null),In=null;function Ja(e){var t=e.alternate;J(xt,xt.current&1),J(gn,e),In===null&&(t===null||Ll.current!==null||t.memoizedState!==null)&&(In=e)}function Qu(e){J(xt,xt.current),J(gn,e),In===null&&(In=e)}function uh(e){e.tag===22?(J(xt,xt.current),J(gn,e),In===null&&(In=e)):ei()}function ei(){J(xt,xt.current),J(gn,gn.current)}function xn(e){P(gn),In===e&&(In=null),P(xt)}var xt=O(0);function Ns(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||id(i)||ld(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Aa=0,Ce=null,qe=null,wt=null,Ts=!1,Ol=!1,Vi=!1,js=0,Wr=0,Fl=null,q2=0;function mt(){throw Error(a(321))}function $u(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!hn(e[i],t[i]))return!1;return!0}function Ju(e,t,i,c,d,h){return Aa=h,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?Xh:pf,Vi=!1,h=i(c,d),Vi=!1,Ol&&(h=dh(t,i,c,d)),fh(e),h}function fh(e){U.H=$r;var t=qe!==null&&qe.next!==null;if(Aa=0,wt=qe=Ce=null,Ts=!1,Wr=0,Fl=null,t)throw Error(a(300));e===null||_t||(e=e.dependencies,e!==null&&bs(e)&&(_t=!0))}function dh(e,t,i,c){Ce=e;var d=0;do{if(Ol&&(Fl=null),Wr=0,Ol=!1,25<=d)throw Error(a(301));if(d+=1,wt=qe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}U.H=Zh,h=t(i,c)}while(Ol);return h}function V2(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?Kr(t):t,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(Ce.flags|=1024),t}function ef(){var e=js!==0;return js=0,e}function tf(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function nf(e){if(Ts){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ts=!1}Aa=0,wt=qe=Ce=null,Ol=!1,Wr=js=0,Fl=null}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ce.memoizedState=wt=e:wt=wt.next=e,wt}function vt(){if(qe===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=wt===null?Ce.memoizedState:wt.next;if(t!==null)wt=t,qe=e;else{if(e===null)throw Ce.alternate===null?Error(a(467)):Error(a(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},wt===null?Ce.memoizedState=wt=e:wt=wt.next=e}return wt}function Ms(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kr(e){var t=Wr;return Wr+=1,Fl===null&&(Fl=[]),e=nh(Fl,e,t),t=Ce,(wt===null?t.memoizedState:wt.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?Xh:pf),e}function Ds(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Kr(e);if(e.$$typeof===C)return zt(e)}throw Error(a(438,String(e)))}function af(e){var t=null,i=Ce.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var c=Ce.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(t={data:c.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=Ms(),Ce.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),c=0;c<e;c++)i[c]=L;return t.index++,i}function Ra(e,t){return typeof t=="function"?t(e):t}function Es(e){var t=vt();return lf(t,qe,e)}function lf(e,t,i){var c=e.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=i;var d=e.baseQueue,h=c.pending;if(h!==null){if(d!==null){var b=d.next;d.next=h.next,h.next=b}t.baseQueue=d=h,c.pending=null}if(h=e.baseState,d===null)e.memoizedState=h;else{t=d.next;var T=b=null,F=null,Y=t,$=!1;do{var ne=Y.lane&-536870913;if(ne!==Y.lane?(De&ne)===ne:(Aa&ne)===ne){var X=Y.revertLane;if(X===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),ne===El&&($=!0);else if((Aa&X)===X){Y=Y.next,X===El&&($=!0);continue}else ne={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},F===null?(T=F=ne,b=h):F=F.next=ne,Ce.lanes|=X,ai|=X;ne=Y.action,Vi&&i(h,ne),h=Y.hasEagerState?Y.eagerState:i(h,ne)}else X={lane:ne,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},F===null?(T=F=X,b=h):F=F.next=X,Ce.lanes|=ne,ai|=ne;Y=Y.next}while(Y!==null&&Y!==t);if(F===null?b=h:F.next=T,!hn(h,e.memoizedState)&&(_t=!0,$&&(i=kl,i!==null)))throw i;e.memoizedState=h,e.baseState=b,e.baseQueue=F,c.lastRenderedState=h}return d===null&&(c.lanes=0),[e.memoizedState,c.dispatch]}function rf(e){var t=vt(),i=t.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=e;var c=i.dispatch,d=i.pending,h=t.memoizedState;if(d!==null){i.pending=null;var b=d=d.next;do h=e(h,b.action),b=b.next;while(b!==d);hn(h,t.memoizedState)||(_t=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),i.lastRenderedState=h}return[h,c]}function mh(e,t,i){var c=Ce,d=vt(),h=ze;if(h){if(i===void 0)throw Error(a(407));i=i()}else i=t();var b=!hn((qe||d).memoizedState,i);if(b&&(d.memoizedState=i,_t=!0),d=d.queue,cf(gh.bind(null,c,d,e),[e]),d.getSnapshot!==t||b||wt!==null&&wt.memoizedState.tag&1){if(c.flags|=2048,Il(9,{destroy:void 0},ph.bind(null,c,d,i,t),null),Ze===null)throw Error(a(349));h||(Aa&127)!==0||hh(c,t,i)}return i}function hh(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Ce.updateQueue,t===null?(t=Ms(),Ce.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function ph(e,t,i,c){t.value=i,t.getSnapshot=c,xh(t)&&vh(e)}function gh(e,t,i){return i(function(){xh(t)&&vh(e)})}function xh(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!hn(e,i)}catch{return!0}}function vh(e){var t=Li(e,2);t!==null&&an(t,e,2)}function of(e){var t=Wt();if(typeof e=="function"){var i=e;if(e=i(),Vi){gt(!0);try{i()}finally{gt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:e},t}function bh(e,t,i,c){return e.baseState=i,lf(e,qe,typeof c=="function"?c:Ra)}function Y2(e,t,i,c,d){if(Bs(e))throw Error(a(485));if(e=t.action,e!==null){var h={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};U.T!==null?i(!0):h.isTransition=!1,c(h),i=t.pending,i===null?(h.next=t.pending=h,yh(t,h)):(h.next=i.next,t.pending=i.next=h)}}function yh(e,t){var i=t.action,c=t.payload,d=e.state;if(t.isTransition){var h=U.T,b={};U.T=b;try{var T=i(d,c),F=U.S;F!==null&&F(b,T),Sh(e,t,T)}catch(Y){sf(e,t,Y)}finally{h!==null&&b.types!==null&&(h.types=b.types),U.T=h}}else try{h=i(d,c),Sh(e,t,h)}catch(Y){sf(e,t,Y)}}function Sh(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(c){wh(e,t,c)},function(c){return sf(e,t,c)}):wh(e,t,i)}function wh(e,t,i){t.status="fulfilled",t.value=i,_h(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,yh(e,i)))}function sf(e,t,i){var c=e.pending;if(e.pending=null,c!==null){c=c.next;do t.status="rejected",t.reason=i,_h(t),t=t.next;while(t!==c)}e.action=null}function _h(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ch(e,t){return t}function Ah(e,t){if(ze){var i=Ze.formState;if(i!==null){e:{var c=Ce;if(ze){if($e){t:{for(var d=$e,h=Fn;d.nodeType!==8;){if(!h){d=null;break t}if(d=Gn(d.nextSibling),d===null){d=null;break t}}h=d.data,d=h==="F!"||h==="F"?d:null}if(d){$e=Gn(d.nextSibling),c=d.data==="F!";break e}}Za(c)}c=!1}c&&(t=i[0])}}return i=Wt(),i.memoizedState=i.baseState=t,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ch,lastRenderedState:t},i.queue=c,i=qh.bind(null,Ce,c),c.dispatch=i,c=of(!1),h=hf.bind(null,Ce,!1,c.queue),c=Wt(),d={state:t,dispatch:null,action:e,pending:null},c.queue=d,i=Y2.bind(null,Ce,d,h,i),d.dispatch=i,c.memoizedState=e,[t,i,!1]}function Rh(e){var t=vt();return Nh(t,qe,e)}function Nh(e,t,i){if(t=lf(e,t,Ch)[0],e=Es(Ra)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var c=Kr(t)}catch(b){throw b===zl?ws:b}else c=t;t=vt();var d=t.queue,h=d.dispatch;return i!==t.memoizedState&&(Ce.flags|=2048,Il(9,{destroy:void 0},X2.bind(null,d,i),null)),[c,h,e]}function X2(e,t){e.action=t}function Th(e){var t=vt(),i=qe;if(i!==null)return Nh(t,i,e);vt(),t=t.memoizedState,i=vt();var c=i.queue.dispatch;return i.memoizedState=e,[t,c,!1]}function Il(e,t,i,c){return e={tag:e,create:i,deps:c,inst:t,next:null},t=Ce.updateQueue,t===null&&(t=Ms(),Ce.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(c=i.next,i.next=e,e.next=c,t.lastEffect=e),e}function jh(){return vt().memoizedState}function ks(e,t,i,c){var d=Wt();Ce.flags|=e,d.memoizedState=Il(1|t,{destroy:void 0},i,c===void 0?null:c)}function zs(e,t,i,c){var d=vt();c=c===void 0?null:c;var h=d.memoizedState.inst;qe!==null&&c!==null&&$u(c,qe.memoizedState.deps)?d.memoizedState=Il(t,h,i,c):(Ce.flags|=e,d.memoizedState=Il(1|t,h,i,c))}function Mh(e,t){ks(8390656,8,e,t)}function cf(e,t){zs(2048,8,e,t)}function Z2(e){Ce.flags|=4;var t=Ce.updateQueue;if(t===null)t=Ms(),Ce.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function Dh(e){var t=vt().memoizedState;return Z2({ref:t,nextImpl:e}),function(){if((Ge&2)!==0)throw Error(a(440));return t.impl.apply(void 0,arguments)}}function Eh(e,t){return zs(4,2,e,t)}function kh(e,t){return zs(4,4,e,t)}function zh(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bh(e,t,i){i=i!=null?i.concat([e]):null,zs(4,4,zh.bind(null,t,e),i)}function uf(){}function Lh(e,t){var i=vt();t=t===void 0?null:t;var c=i.memoizedState;return t!==null&&$u(t,c[1])?c[0]:(i.memoizedState=[e,t],e)}function Oh(e,t){var i=vt();t=t===void 0?null:t;var c=i.memoizedState;if(t!==null&&$u(t,c[1]))return c[0];if(c=e(),Vi){gt(!0);try{e()}finally{gt(!1)}}return i.memoizedState=[c,t],c}function ff(e,t,i){return i===void 0||(Aa&1073741824)!==0&&(De&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=Fp(),Ce.lanes|=e,ai|=e,i)}function Fh(e,t,i,c){return hn(i,t)?i:Ll.current!==null?(e=ff(e,i,c),hn(e,t)||(_t=!0),e):(Aa&42)===0||(Aa&1073741824)!==0&&(De&261930)===0?(_t=!0,e.memoizedState=i):(e=Fp(),Ce.lanes|=e,ai|=e,t)}function Ih(e,t,i,c,d){var h=Q.p;Q.p=h!==0&&8>h?h:8;var b=U.T,T={};U.T=T,hf(e,!1,t,i);try{var F=d(),Y=U.S;if(Y!==null&&Y(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var $=H2(F,c);Qr(e,t,$,yn(e))}else Qr(e,t,c,yn(e))}catch(ne){Qr(e,t,{then:function(){},status:"rejected",reason:ne},yn())}finally{Q.p=h,b!==null&&T.types!==null&&(b.types=T.types),U.T=b}}function W2(){}function df(e,t,i,c){if(e.tag!==5)throw Error(a(476));var d=Gh(e).queue;Ih(e,d,t,se,i===null?W2:function(){return Uh(e),i(c)})}function Gh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:se},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Uh(e){var t=Gh(e);t.next===null&&(t=e.alternate.memoizedState),Qr(e,t.next.queue,{},yn())}function mf(){return zt(po)}function Ph(){return vt().memoizedState}function Hh(){return vt().memoizedState}function K2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=yn();e=Qa(i);var c=$a(t,e,i);c!==null&&(an(c,t,i),Yr(c,t,i)),t={cache:Uu()},e.payload=t;return}t=t.return}}function Q2(e,t,i){var c=yn();i={lane:c,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vh(t,i):(i=Mu(e,t,i,c),i!==null&&(an(i,e,c),Yh(i,t,c)))}function qh(e,t,i){var c=yn();Qr(e,t,i,c)}function Qr(e,t,i,c){var d={lane:c,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vh(t,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var b=t.lastRenderedState,T=h(b,i);if(d.hasEagerState=!0,d.eagerState=T,hn(T,b))return ps(e,t,d,0),Ze===null&&hs(),!1}catch{}finally{}if(i=Mu(e,t,d,c),i!==null)return an(i,e,c),Yh(i,t,c),!0}return!1}function hf(e,t,i,c){if(c={lane:2,revertLane:Yf(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(a(479))}else t=Mu(e,i,c,2),t!==null&&an(t,e,2)}function Bs(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Vh(e,t){Ol=Ts=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Yh(e,t,i){if((i&4194048)!==0){var c=t.lanes;c&=e.pendingLanes,i|=c,t.lanes=i,Nr(e,i)}}var $r={readContext:zt,use:Ds,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt,useHostTransitionStatus:mt,useFormState:mt,useActionState:mt,useOptimistic:mt,useMemoCache:mt,useCacheRefresh:mt};$r.useEffectEvent=mt;var Xh={readContext:zt,use:Ds,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:Mh,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,ks(4194308,4,zh.bind(null,t,e),i)},useLayoutEffect:function(e,t){return ks(4194308,4,e,t)},useInsertionEffect:function(e,t){ks(4,2,e,t)},useMemo:function(e,t){var i=Wt();t=t===void 0?null:t;var c=e();if(Vi){gt(!0);try{e()}finally{gt(!1)}}return i.memoizedState=[c,t],c},useReducer:function(e,t,i){var c=Wt();if(i!==void 0){var d=i(t);if(Vi){gt(!0);try{i(t)}finally{gt(!1)}}}else d=t;return c.memoizedState=c.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},c.queue=e,e=e.dispatch=Q2.bind(null,Ce,e),[c.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:function(e){e=of(e);var t=e.queue,i=qh.bind(null,Ce,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:uf,useDeferredValue:function(e,t){var i=Wt();return ff(i,e,t)},useTransition:function(){var e=of(!1);return e=Ih.bind(null,Ce,e.queue,!0,!1),Wt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var c=Ce,d=Wt();if(ze){if(i===void 0)throw Error(a(407));i=i()}else{if(i=t(),Ze===null)throw Error(a(349));(De&127)!==0||hh(c,t,i)}d.memoizedState=i;var h={value:i,getSnapshot:t};return d.queue=h,Mh(gh.bind(null,c,h,e),[e]),c.flags|=2048,Il(9,{destroy:void 0},ph.bind(null,c,h,i,t),null),i},useId:function(){var e=Wt(),t=Ze.identifierPrefix;if(ze){var i=ua,c=ca;i=(c&~(1<<32-Xe(c)-1)).toString(32)+i,t="_"+t+"R_"+i,i=js++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=q2++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:mf,useFormState:Ah,useActionState:Ah,useOptimistic:function(e){var t=Wt();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=hf.bind(null,Ce,!0,i),i.dispatch=t,[e,t]},useMemoCache:af,useCacheRefresh:function(){return Wt().memoizedState=K2.bind(null,Ce)},useEffectEvent:function(e){var t=Wt(),i={impl:e};return t.memoizedState=i,function(){if((Ge&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}},pf={readContext:zt,use:Ds,useCallback:Lh,useContext:zt,useEffect:cf,useImperativeHandle:Bh,useInsertionEffect:Eh,useLayoutEffect:kh,useMemo:Oh,useReducer:Es,useRef:jh,useState:function(){return Es(Ra)},useDebugValue:uf,useDeferredValue:function(e,t){var i=vt();return Fh(i,qe.memoizedState,e,t)},useTransition:function(){var e=Es(Ra)[0],t=vt().memoizedState;return[typeof e=="boolean"?e:Kr(e),t]},useSyncExternalStore:mh,useId:Ph,useHostTransitionStatus:mf,useFormState:Rh,useActionState:Rh,useOptimistic:function(e,t){var i=vt();return bh(i,qe,e,t)},useMemoCache:af,useCacheRefresh:Hh};pf.useEffectEvent=Dh;var Zh={readContext:zt,use:Ds,useCallback:Lh,useContext:zt,useEffect:cf,useImperativeHandle:Bh,useInsertionEffect:Eh,useLayoutEffect:kh,useMemo:Oh,useReducer:rf,useRef:jh,useState:function(){return rf(Ra)},useDebugValue:uf,useDeferredValue:function(e,t){var i=vt();return qe===null?ff(i,e,t):Fh(i,qe.memoizedState,e,t)},useTransition:function(){var e=rf(Ra)[0],t=vt().memoizedState;return[typeof e=="boolean"?e:Kr(e),t]},useSyncExternalStore:mh,useId:Ph,useHostTransitionStatus:mf,useFormState:Th,useActionState:Th,useOptimistic:function(e,t){var i=vt();return qe!==null?bh(i,qe,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:af,useCacheRefresh:Hh};Zh.useEffectEvent=Dh;function gf(e,t,i,c){t=e.memoizedState,i=i(c,t),i=i==null?t:v({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var xf={enqueueSetState:function(e,t,i){e=e._reactInternals;var c=yn(),d=Qa(c);d.payload=t,i!=null&&(d.callback=i),t=$a(e,d,c),t!==null&&(an(t,e,c),Yr(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var c=yn(),d=Qa(c);d.tag=1,d.payload=t,i!=null&&(d.callback=i),t=$a(e,d,c),t!==null&&(an(t,e,c),Yr(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=yn(),c=Qa(i);c.tag=2,t!=null&&(c.callback=t),t=$a(e,c,i),t!==null&&(an(t,e,i),Yr(t,e,i))}};function Wh(e,t,i,c,d,h,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(c,h,b):t.prototype&&t.prototype.isPureReactComponent?!Fr(i,c)||!Fr(d,h):!0}function Kh(e,t,i,c){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,c),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,c),t.state!==e&&xf.enqueueReplaceState(t,t.state,null)}function Yi(e,t){var i=t;if("ref"in t){i={};for(var c in t)c!=="ref"&&(i[c]=t[c])}if(e=e.defaultProps){i===t&&(i=v({},i));for(var d in e)i[d]===void 0&&(i[d]=e[d])}return i}function Qh(e){ms(e)}function $h(e){console.error(e)}function Jh(e){ms(e)}function Ls(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(c){setTimeout(function(){throw c})}}function ep(e,t,i){try{var c=e.onCaughtError;c(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function vf(e,t,i){return i=Qa(i),i.tag=3,i.payload={element:null},i.callback=function(){Ls(e,t)},i}function tp(e){return e=Qa(e),e.tag=3,e}function np(e,t,i,c){var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var h=c.value;e.payload=function(){return d(h)},e.callback=function(){ep(t,i,c)}}var b=i.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){ep(t,i,c),typeof d!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var T=c.stack;this.componentDidCatch(c.value,{componentStack:T!==null?T:""})})}function $2(e,t,i,c,d){if(i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(t=i.alternate,t!==null&&Dl(t,i,d,!0),i=gn.current,i!==null){switch(i.tag){case 31:case 13:return In===null?Zs():i.alternate===null&&ht===0&&(ht=3),i.flags&=-257,i.flags|=65536,i.lanes=d,c===_s?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([c]):t.add(c),Hf(e,c,d)),!1;case 22:return i.flags|=65536,c===_s?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([c])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([c]):i.add(c)),Hf(e,c,d)),!1}throw Error(a(435,i.tag))}return Hf(e,c,d),Zs(),!1}if(ze)return t=gn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,c!==Lu&&(e=Error(a(422),{cause:c}),Ur(Bn(e,i)))):(c!==Lu&&(t=Error(a(423),{cause:c}),Ur(Bn(t,i))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,c=Bn(c,i),d=vf(e.stateNode,c,d),Xu(e,d),ht!==4&&(ht=2)),!1;var h=Error(a(520),{cause:c});if(h=Bn(h,i),ro===null?ro=[h]:ro.push(h),ht!==4&&(ht=2),t===null)return!0;c=Bn(c,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=d&-d,i.lanes|=e,e=vf(i.stateNode,c,e),Xu(i,e),!1;case 1:if(t=i.type,h=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ii===null||!ii.has(h))))return i.flags|=65536,d&=-d,i.lanes|=d,d=tp(d),np(d,e,i,c),Xu(i,d),!1}i=i.return}while(i!==null);return!1}var bf=Error(a(461)),_t=!1;function Bt(e,t,i,c){t.child=e===null?rh(t,null,i,c):qi(t,e.child,i,c)}function ap(e,t,i,c,d){i=i.render;var h=t.ref;if("ref"in c){var b={};for(var T in c)T!=="ref"&&(b[T]=c[T])}else b=c;return Gi(t),c=Ju(e,t,i,b,h,d),T=ef(),e!==null&&!_t?(tf(e,t,d),Na(e,t,d)):(ze&&T&&zu(t),t.flags|=1,Bt(e,t,c,d),t.child)}function ip(e,t,i,c,d){if(e===null){var h=i.type;return typeof h=="function"&&!Du(h)&&h.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=h,lp(e,t,h,c,d)):(e=xs(i.type,null,c,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,!Nf(e,d)){var b=h.memoizedProps;if(i=i.compare,i=i!==null?i:Fr,i(b,c)&&e.ref===t.ref)return Na(e,t,d)}return t.flags|=1,e=Sa(h,c),e.ref=t.ref,e.return=t,t.child=e}function lp(e,t,i,c,d){if(e!==null){var h=e.memoizedProps;if(Fr(h,c)&&e.ref===t.ref)if(_t=!1,t.pendingProps=c=h,Nf(e,d))(e.flags&131072)!==0&&(_t=!0);else return t.lanes=e.lanes,Na(e,t,d)}return yf(e,t,i,c,d)}function rp(e,t,i,c){var d=c.children,h=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((t.flags&128)!==0){if(h=h!==null?h.baseLanes|i:i,e!==null){for(c=t.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;c=d&~h}else c=0,t.child=null;return op(e,t,h,i,c)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ss(t,h!==null?h.cachePool:null),h!==null?ch(t,h):Wu(),uh(t);else return c=t.lanes=536870912,op(e,t,h!==null?h.baseLanes|i:i,i,c)}else h!==null?(Ss(t,h.cachePool),ch(t,h),ei(),t.memoizedState=null):(e!==null&&Ss(t,null),Wu(),ei());return Bt(e,t,d,i),t.child}function Jr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function op(e,t,i,c,d){var h=Hu();return h=h===null?null:{parent:St._currentValue,pool:h},t.memoizedState={baseLanes:i,cachePool:h},e!==null&&Ss(t,null),Wu(),uh(t),e!==null&&Dl(e,t,c,!0),t.childLanes=d,null}function Os(e,t){return t=Is({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sp(e,t,i){return qi(t,e.child,null,i),e=Os(t,t.pendingProps),e.flags|=2,xn(t),t.memoizedState=null,e}function J2(e,t,i){var c=t.pendingProps,d=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ze){if(c.mode==="hidden")return e=Os(t,c),t.lanes=536870912,Jr(null,e);if(Qu(t),(e=$e)?(e=yg(e,Fn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},i=Vm(e),i.return=t,t.child=i,kt=t,$e=null)):e=null,e===null)throw Za(t);return t.lanes=536870912,null}return Os(t,c)}var h=e.memoizedState;if(h!==null){var b=h.dehydrated;if(Qu(t),d)if(t.flags&256)t.flags&=-257,t=sp(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(a(558));else if(_t||Dl(e,t,i,!1),d=(i&e.childLanes)!==0,_t||d){if(c=Ze,c!==null&&(b=ts(c,i),b!==0&&b!==h.retryLane))throw h.retryLane=b,Li(e,b),an(c,e,b),bf;Zs(),t=sp(e,t,i)}else e=h.treeContext,$e=Gn(b.nextSibling),kt=t,ze=!0,Xa=null,Fn=!1,e!==null&&Zm(t,e),t=Os(t,c),t.flags|=4096;return t}return e=Sa(e.child,{mode:c.mode,children:c.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fs(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(a(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function yf(e,t,i,c,d){return Gi(t),i=Ju(e,t,i,c,void 0,d),c=ef(),e!==null&&!_t?(tf(e,t,d),Na(e,t,d)):(ze&&c&&zu(t),t.flags|=1,Bt(e,t,i,d),t.child)}function cp(e,t,i,c,d,h){return Gi(t),t.updateQueue=null,i=dh(t,c,i,d),fh(e),c=ef(),e!==null&&!_t?(tf(e,t,h),Na(e,t,h)):(ze&&c&&zu(t),t.flags|=1,Bt(e,t,i,h),t.child)}function up(e,t,i,c,d){if(Gi(t),t.stateNode===null){var h=Nl,b=i.contextType;typeof b=="object"&&b!==null&&(h=zt(b)),h=new i(c,h),t.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=xf,t.stateNode=h,h._reactInternals=t,h=t.stateNode,h.props=c,h.state=t.memoizedState,h.refs={},Vu(t),b=i.contextType,h.context=typeof b=="object"&&b!==null?zt(b):Nl,h.state=t.memoizedState,b=i.getDerivedStateFromProps,typeof b=="function"&&(gf(t,i,b,c),h.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&xf.enqueueReplaceState(h,h.state,null),Zr(t,c,h,d),Xr(),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308),c=!0}else if(e===null){h=t.stateNode;var T=t.memoizedProps,F=Yi(i,T);h.props=F;var Y=h.context,$=i.contextType;b=Nl,typeof $=="object"&&$!==null&&(b=zt($));var ne=i.getDerivedStateFromProps;$=typeof ne=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=t.pendingProps!==T,$||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||Y!==b)&&Kh(t,h,c,b),Ka=!1;var X=t.memoizedState;h.state=X,Zr(t,c,h,d),Xr(),Y=t.memoizedState,T||X!==Y||Ka?(typeof ne=="function"&&(gf(t,i,ne,c),Y=t.memoizedState),(F=Ka||Wh(t,i,F,c,X,Y,b))?($||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=c,t.memoizedState=Y),h.props=c,h.state=Y,h.context=b,c=F):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),c=!1)}else{h=t.stateNode,Yu(e,t),b=t.memoizedProps,$=Yi(i,b),h.props=$,ne=t.pendingProps,X=h.context,Y=i.contextType,F=Nl,typeof Y=="object"&&Y!==null&&(F=zt(Y)),T=i.getDerivedStateFromProps,(Y=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==ne||X!==F)&&Kh(t,h,c,F),Ka=!1,X=t.memoizedState,h.state=X,Zr(t,c,h,d),Xr();var Z=t.memoizedState;b!==ne||X!==Z||Ka||e!==null&&e.dependencies!==null&&bs(e.dependencies)?(typeof T=="function"&&(gf(t,i,T,c),Z=t.memoizedState),($=Ka||Wh(t,i,$,c,X,Z,F)||e!==null&&e.dependencies!==null&&bs(e.dependencies))?(Y||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(c,Z,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(c,Z,F)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),t.memoizedProps=c,t.memoizedState=Z),h.props=c,h.state=Z,h.context=F,c=$):(typeof h.componentDidUpdate!="function"||b===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),c=!1)}return h=c,Fs(e,t),c=(t.flags&128)!==0,h||c?(h=t.stateNode,i=c&&typeof i.getDerivedStateFromError!="function"?null:h.render(),t.flags|=1,e!==null&&c?(t.child=qi(t,e.child,null,d),t.child=qi(t,null,i,d)):Bt(e,t,i,d),t.memoizedState=h.state,e=t.child):e=Na(e,t,d),e}function fp(e,t,i,c){return Fi(),t.flags|=256,Bt(e,t,i,c),t.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(e){return{baseLanes:e,cachePool:eh()}}function _f(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=bn),e}function dp(e,t,i){var c=t.pendingProps,d=!1,h=(t.flags&128)!==0,b;if((b=h)||(b=e!==null&&e.memoizedState===null?!1:(xt.current&2)!==0),b&&(d=!0,t.flags&=-129),b=(t.flags&32)!==0,t.flags&=-33,e===null){if(ze){if(d?Ja(t):ei(),(e=$e)?(e=yg(e,Fn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},i=Vm(e),i.return=t,t.child=i,kt=t,$e=null)):e=null,e===null)throw Za(t);return ld(e)?t.lanes=32:t.lanes=536870912,null}var T=c.children;return c=c.fallback,d?(ei(),d=t.mode,T=Is({mode:"hidden",children:T},d),c=Oi(c,d,i,null),T.return=t,c.return=t,T.sibling=c,t.child=T,c=t.child,c.memoizedState=wf(i),c.childLanes=_f(e,b,i),t.memoizedState=Sf,Jr(null,c)):(Ja(t),Cf(t,T))}var F=e.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(h)t.flags&256?(Ja(t),t.flags&=-257,t=Af(e,t,i)):t.memoizedState!==null?(ei(),t.child=e.child,t.flags|=128,t=null):(ei(),T=c.fallback,d=t.mode,c=Is({mode:"visible",children:c.children},d),T=Oi(T,d,i,null),T.flags|=2,c.return=t,T.return=t,c.sibling=T,t.child=c,qi(t,e.child,null,i),c=t.child,c.memoizedState=wf(i),c.childLanes=_f(e,b,i),t.memoizedState=Sf,t=Jr(null,c));else if(Ja(t),ld(T)){if(b=T.nextSibling&&T.nextSibling.dataset,b)var Y=b.dgst;b=Y,c=Error(a(419)),c.stack="",c.digest=b,Ur({value:c,source:null,stack:null}),t=Af(e,t,i)}else if(_t||Dl(e,t,i,!1),b=(i&e.childLanes)!==0,_t||b){if(b=Ze,b!==null&&(c=ts(b,i),c!==0&&c!==F.retryLane))throw F.retryLane=c,Li(e,c),an(b,e,c),bf;id(T)||Zs(),t=Af(e,t,i)}else id(T)?(t.flags|=192,t.child=e.child,t=null):(e=F.treeContext,$e=Gn(T.nextSibling),kt=t,ze=!0,Xa=null,Fn=!1,e!==null&&Zm(t,e),t=Cf(t,c.children),t.flags|=4096);return t}return d?(ei(),T=c.fallback,d=t.mode,F=e.child,Y=F.sibling,c=Sa(F,{mode:"hidden",children:c.children}),c.subtreeFlags=F.subtreeFlags&65011712,Y!==null?T=Sa(Y,T):(T=Oi(T,d,i,null),T.flags|=2),T.return=t,c.return=t,c.sibling=T,t.child=c,Jr(null,c),c=t.child,T=e.child.memoizedState,T===null?T=wf(i):(d=T.cachePool,d!==null?(F=St._currentValue,d=d.parent!==F?{parent:F,pool:F}:d):d=eh(),T={baseLanes:T.baseLanes|i,cachePool:d}),c.memoizedState=T,c.childLanes=_f(e,b,i),t.memoizedState=Sf,Jr(e.child,c)):(Ja(t),i=e.child,e=i.sibling,i=Sa(i,{mode:"visible",children:c.children}),i.return=t,i.sibling=null,e!==null&&(b=t.deletions,b===null?(t.deletions=[e],t.flags|=16):b.push(e)),t.child=i,t.memoizedState=null,i)}function Cf(e,t){return t=Is({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Is(e,t){return e=pn(22,e,null,t),e.lanes=0,e}function Af(e,t,i){return qi(t,e.child,null,i),e=Cf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mp(e,t,i){e.lanes|=t;var c=e.alternate;c!==null&&(c.lanes|=t),Iu(e.return,t,i)}function Rf(e,t,i,c,d,h){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:c,tail:i,tailMode:d,treeForkCount:h}:(b.isBackwards=t,b.rendering=null,b.renderingStartTime=0,b.last=c,b.tail=i,b.tailMode=d,b.treeForkCount=h)}function hp(e,t,i){var c=t.pendingProps,d=c.revealOrder,h=c.tail;c=c.children;var b=xt.current,T=(b&2)!==0;if(T?(b=b&1|2,t.flags|=128):b&=1,J(xt,b),Bt(e,t,c,i),c=ze?Gr:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mp(e,i,t);else if(e.tag===19)mp(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(i=t.child,d=null;i!==null;)e=i.alternate,e!==null&&Ns(e)===null&&(d=i),i=i.sibling;i=d,i===null?(d=t.child,t.child=null):(d=i.sibling,i.sibling=null),Rf(t,!1,d,i,h,c);break;case"backwards":case"unstable_legacy-backwards":for(i=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Ns(e)===null){t.child=d;break}e=d.sibling,d.sibling=i,i=d,d=e}Rf(t,!0,i,null,h,c);break;case"together":Rf(t,!1,null,null,void 0,c);break;default:t.memoizedState=null}return t.child}function Na(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),ai|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(Dl(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,i=Sa(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Sa(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Nf(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bs(e)))}function eb(e,t,i){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),Wa(t,St,e.memoizedState.cache),Fi();break;case 27:case 5:fe(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:Wa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qu(t),null;break;case 13:var c=t.memoizedState;if(c!==null)return c.dehydrated!==null?(Ja(t),t.flags|=128,null):(i&t.child.childLanes)!==0?dp(e,t,i):(Ja(t),e=Na(e,t,i),e!==null?e.sibling:null);Ja(t);break;case 19:var d=(e.flags&128)!==0;if(c=(i&t.childLanes)!==0,c||(Dl(e,t,i,!1),c=(i&t.childLanes)!==0),d){if(c)return hp(e,t,i);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),J(xt,xt.current),c)break;return null;case 22:return t.lanes=0,rp(e,t,i,t.pendingProps);case 24:Wa(t,St,e.memoizedState.cache)}return Na(e,t,i)}function pp(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)_t=!0;else{if(!Nf(e,i)&&(t.flags&128)===0)return _t=!1,eb(e,t,i);_t=(e.flags&131072)!==0}else _t=!1,ze&&(t.flags&1048576)!==0&&Xm(t,Gr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var c=t.pendingProps;if(e=Pi(t.elementType),t.type=e,typeof e=="function")Du(e)?(c=Yi(e,c),t.tag=1,t=up(null,t,e,c,i)):(t.tag=0,t=yf(null,t,e,c,i));else{if(e!=null){var d=e.$$typeof;if(d===z){t.tag=11,t=ap(null,t,e,c,i);break e}else if(d===D){t.tag=14,t=ip(null,t,e,c,i);break e}}throw t=q(e)||e,Error(a(306,t,""))}}return t;case 0:return yf(e,t,t.type,t.pendingProps,i);case 1:return c=t.type,d=Yi(c,t.pendingProps),up(e,t,c,d,i);case 3:e:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(a(387));c=t.pendingProps;var h=t.memoizedState;d=h.element,Yu(e,t),Zr(t,c,null,i);var b=t.memoizedState;if(c=b.cache,Wa(t,St,c),c!==h.cache&&Gu(t,[St],i,!0),Xr(),c=b.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:b.cache},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){t=fp(e,t,c,i);break e}else if(c!==d){d=Bn(Error(a(424)),t),Ur(d),t=fp(e,t,c,i);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Gn(e.firstChild),kt=t,ze=!0,Xa=null,Fn=!0,i=rh(t,null,c,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Fi(),c===d){t=Na(e,t,i);break e}Bt(e,t,c,i)}t=t.child}return t;case 26:return Fs(e,t),e===null?(i=Rg(t.type,null,t.pendingProps,null))?t.memoizedState=i:ze||(i=t.type,e=t.pendingProps,c=tc(le.current).createElement(i),c[it]=t,c[jt]=e,Lt(c,i,e),Mt(c),t.stateNode=c):t.memoizedState=Rg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fe(t),e===null&&ze&&(c=t.stateNode=_g(t.type,t.pendingProps,le.current),kt=t,Fn=!0,d=$e,si(t.type)?(rd=d,$e=Gn(c.firstChild)):$e=d),Bt(e,t,t.pendingProps.children,i),Fs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ze&&((d=c=$e)&&(c=Mb(c,t.type,t.pendingProps,Fn),c!==null?(t.stateNode=c,kt=t,$e=Gn(c.firstChild),Fn=!1,d=!0):d=!1),d||Za(t)),fe(t),d=t.type,h=t.pendingProps,b=e!==null?e.memoizedProps:null,c=h.children,td(d,h)?c=null:b!==null&&td(d,b)&&(t.flags|=32),t.memoizedState!==null&&(d=Ju(e,t,V2,null,null,i),po._currentValue=d),Fs(e,t),Bt(e,t,c,i),t.child;case 6:return e===null&&ze&&((e=i=$e)&&(i=Db(i,t.pendingProps,Fn),i!==null?(t.stateNode=i,kt=t,$e=null,e=!0):e=!1),e||Za(t)),null;case 13:return dp(e,t,i);case 4:return me(t,t.stateNode.containerInfo),c=t.pendingProps,e===null?t.child=qi(t,null,c,i):Bt(e,t,c,i),t.child;case 11:return ap(e,t,t.type,t.pendingProps,i);case 7:return Bt(e,t,t.pendingProps,i),t.child;case 8:return Bt(e,t,t.pendingProps.children,i),t.child;case 12:return Bt(e,t,t.pendingProps.children,i),t.child;case 10:return c=t.pendingProps,Wa(t,t.type,c.value),Bt(e,t,c.children,i),t.child;case 9:return d=t.type._context,c=t.pendingProps.children,Gi(t),d=zt(d),c=c(d),t.flags|=1,Bt(e,t,c,i),t.child;case 14:return ip(e,t,t.type,t.pendingProps,i);case 15:return lp(e,t,t.type,t.pendingProps,i);case 19:return hp(e,t,i);case 31:return J2(e,t,i);case 22:return rp(e,t,i,t.pendingProps);case 24:return Gi(t),c=zt(St),e===null?(d=Hu(),d===null&&(d=Ze,h=Uu(),d.pooledCache=h,h.refCount++,h!==null&&(d.pooledCacheLanes|=i),d=h),t.memoizedState={parent:c,cache:d},Vu(t),Wa(t,St,d)):((e.lanes&i)!==0&&(Yu(e,t),Zr(t,null,null,i),Xr()),d=e.memoizedState,h=t.memoizedState,d.parent!==c?(d={parent:c,cache:c},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),Wa(t,St,c)):(c=h.cache,Wa(t,St,c),c!==d.cache&&Gu(t,[St],i,!0))),Bt(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Ta(e){e.flags|=4}function Tf(e,t,i,c,d){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(Pp())e.flags|=8192;else throw Hi=_s,qu}else e.flags&=-16777217}function gp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dg(t))if(Pp())e.flags|=8192;else throw Hi=_s,qu}function Gs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?oa():536870912,e.lanes|=t,Hl|=t)}function eo(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var c=null;i!==null;)i.alternate!==null&&(c=i),i=i.sibling;c===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:c.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,c=0;if(t)for(var d=e.child;d!==null;)i|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)i|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=c,e.childLanes=i,t}function tb(e,t,i){var c=t.pendingProps;switch(Bu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return Je(t),null;case 3:return i=t.stateNode,c=null,e!==null&&(c=e.memoizedState.cache),t.memoizedState.cache!==c&&(t.flags|=2048),Ca(St),re(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ml(t)?Ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ou())),Je(t),null;case 26:var d=t.type,h=t.memoizedState;return e===null?(Ta(t),h!==null?(Je(t),gp(t,h)):(Je(t),Tf(t,d,null,c,i))):h?h!==e.memoizedState?(Ta(t),Je(t),gp(t,h)):(Je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==c&&Ta(t),Je(t),Tf(t,d,e,c,i)),null;case 27:if(Ae(t),i=le.current,d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==c&&Ta(t);else{if(!c){if(t.stateNode===null)throw Error(a(166));return Je(t),null}e=te.current,Ml(t)?Wm(t):(e=_g(d,c,i),t.stateNode=e,Ta(t))}return Je(t),null;case 5:if(Ae(t),d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==c&&Ta(t);else{if(!c){if(t.stateNode===null)throw Error(a(166));return Je(t),null}if(h=te.current,Ml(t))Wm(t);else{var b=tc(le.current);switch(h){case 1:h=b.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:h=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":h=b.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":h=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":h=b.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof c.is=="string"?b.createElement("select",{is:c.is}):b.createElement("select"),c.multiple?h.multiple=!0:c.size&&(h.size=c.size);break;default:h=typeof c.is=="string"?b.createElement(d,{is:c.is}):b.createElement(d)}}h[it]=t,h[jt]=c;e:for(b=t.child;b!==null;){if(b.tag===5||b.tag===6)h.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===t)break e;for(;b.sibling===null;){if(b.return===null||b.return===t)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}t.stateNode=h;e:switch(Lt(h,d,c),d){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&Ta(t)}}return Je(t),Tf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==c&&Ta(t);else{if(typeof c!="string"&&t.stateNode===null)throw Error(a(166));if(e=le.current,Ml(t)){if(e=t.stateNode,i=t.memoizedProps,c=null,d=kt,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}e[it]=t,e=!!(e.nodeValue===i||c!==null&&c.suppressHydrationWarning===!0||dg(e.nodeValue,i)),e||Za(t,!0)}else e=tc(e).createTextNode(c),e[it]=t,t.stateNode=e}return Je(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(c=Ml(t),i!==null){if(e===null){if(!c)throw Error(a(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[it]=t}else Fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),e=!1}else i=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(xn(t),t):(xn(t),null);if((t.flags&128)!==0)throw Error(a(558))}return Je(t),null;case 13:if(c=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Ml(t),c!==null&&c.dehydrated!==null){if(e===null){if(!d)throw Error(a(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[it]=t}else Fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),d=!1}else d=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(xn(t),t):(xn(t),null)}return xn(t),(t.flags&128)!==0?(t.lanes=i,t):(i=c!==null,e=e!==null&&e.memoizedState!==null,i&&(c=t.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool),h=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(h=c.memoizedState.cachePool.pool),h!==d&&(c.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),Gs(t,t.updateQueue),Je(t),null);case 4:return re(),e===null&&Kf(t.stateNode.containerInfo),Je(t),null;case 10:return Ca(t.type),Je(t),null;case 19:if(P(xt),c=t.memoizedState,c===null)return Je(t),null;if(d=(t.flags&128)!==0,h=c.rendering,h===null)if(d)eo(c,!1);else{if(ht!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=Ns(e),h!==null){for(t.flags|=128,eo(c,!1),e=h.updateQueue,t.updateQueue=e,Gs(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)qm(i,e),i=i.sibling;return J(xt,xt.current&1|2),ze&&wa(t,c.treeForkCount),t.child}e=e.sibling}c.tail!==null&&Me()>Vs&&(t.flags|=128,d=!0,eo(c,!1),t.lanes=4194304)}else{if(!d)if(e=Ns(h),e!==null){if(t.flags|=128,d=!0,e=e.updateQueue,t.updateQueue=e,Gs(t,e),eo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!ze)return Je(t),null}else 2*Me()-c.renderingStartTime>Vs&&i!==536870912&&(t.flags|=128,d=!0,eo(c,!1),t.lanes=4194304);c.isBackwards?(h.sibling=t.child,t.child=h):(e=c.last,e!==null?e.sibling=h:t.child=h,c.last=h)}return c.tail!==null?(e=c.tail,c.rendering=e,c.tail=e.sibling,c.renderingStartTime=Me(),e.sibling=null,i=xt.current,J(xt,d?i&1|2:i&1),ze&&wa(t,c.treeForkCount),e):(Je(t),null);case 22:case 23:return xn(t),Ku(),c=t.memoizedState!==null,e!==null?e.memoizedState!==null!==c&&(t.flags|=8192):c&&(t.flags|=8192),c?(i&536870912)!==0&&(t.flags&128)===0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),i=t.updateQueue,i!==null&&Gs(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),c=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(c=t.memoizedState.cachePool.pool),c!==i&&(t.flags|=2048),e!==null&&P(Ui),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ca(St),Je(t),null;case 25:return null;case 30:return null}throw Error(a(156,t.tag))}function nb(e,t){switch(Bu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ca(St),re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ae(t),null;case 31:if(t.memoizedState!==null){if(xn(t),t.alternate===null)throw Error(a(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(xn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(xt),null;case 4:return re(),null;case 10:return Ca(t.type),null;case 22:case 23:return xn(t),Ku(),e!==null&&P(Ui),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ca(St),null;case 25:return null;default:return null}}function xp(e,t){switch(Bu(t),t.tag){case 3:Ca(St),re();break;case 26:case 27:case 5:Ae(t);break;case 4:re();break;case 31:t.memoizedState!==null&&xn(t);break;case 13:xn(t);break;case 19:P(xt);break;case 10:Ca(t.type);break;case 22:case 23:xn(t),Ku(),e!==null&&P(Ui);break;case 24:Ca(St)}}function to(e,t){try{var i=t.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var d=c.next;i=d;do{if((i.tag&e)===e){c=void 0;var h=i.create,b=i.inst;c=h(),b.destroy=c}i=i.next}while(i!==d)}}catch(T){He(t,t.return,T)}}function ti(e,t,i){try{var c=t.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var h=d.next;c=h;do{if((c.tag&e)===e){var b=c.inst,T=b.destroy;if(T!==void 0){b.destroy=void 0,d=t;var F=i,Y=T;try{Y()}catch($){He(d,F,$)}}}c=c.next}while(c!==h)}}catch($){He(t,t.return,$)}}function vp(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{sh(t,i)}catch(c){He(e,e.return,c)}}}function bp(e,t,i){i.props=Yi(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(c){He(e,t,c)}}function no(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var c=e.stateNode;break;case 30:c=e.stateNode;break;default:c=e.stateNode}typeof i=="function"?e.refCleanup=i(c):i.current=c}}catch(d){He(e,t,d)}}function fa(e,t){var i=e.ref,c=e.refCleanup;if(i!==null)if(typeof c=="function")try{c()}catch(d){He(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(d){He(e,t,d)}else i.current=null}function yp(e){var t=e.type,i=e.memoizedProps,c=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&c.focus();break e;case"img":i.src?c.src=i.src:i.srcSet&&(c.srcset=i.srcSet)}}catch(d){He(e,e.return,d)}}function jf(e,t,i){try{var c=e.stateNode;Cb(c,e.type,i,t),c[jt]=t}catch(d){He(e,e.return,d)}}function Sp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&si(e.type)||e.tag===4}function Mf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&si(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,t,i){var c=e.tag;if(c===5||c===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=ba));else if(c!==4&&(c===27&&si(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(Df(e,t,i),e=e.sibling;e!==null;)Df(e,t,i),e=e.sibling}function Us(e,t,i){var c=e.tag;if(c===5||c===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(c!==4&&(c===27&&si(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Us(e,t,i),e=e.sibling;e!==null;)Us(e,t,i),e=e.sibling}function wp(e){var t=e.stateNode,i=e.memoizedProps;try{for(var c=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);Lt(t,c,i),t[it]=e,t[jt]=i}catch(h){He(e,e.return,h)}}var ja=!1,Ct=!1,Ef=!1,_p=typeof WeakSet=="function"?WeakSet:Set,Dt=null;function ab(e,t){if(e=e.containerInfo,Jf=sc,e=Bm(e),Cu(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var c=i.getSelection&&i.getSelection();if(c&&c.rangeCount!==0){i=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var b=0,T=-1,F=-1,Y=0,$=0,ne=e,X=null;t:for(;;){for(var Z;ne!==i||d!==0&&ne.nodeType!==3||(T=b+d),ne!==h||c!==0&&ne.nodeType!==3||(F=b+c),ne.nodeType===3&&(b+=ne.nodeValue.length),(Z=ne.firstChild)!==null;)X=ne,ne=Z;for(;;){if(ne===e)break t;if(X===i&&++Y===d&&(T=b),X===h&&++$===c&&(F=b),(Z=ne.nextSibling)!==null)break;ne=X,X=ne.parentNode}ne=Z}i=T===-1||F===-1?null:{start:T,end:F}}else i=null}i=i||{start:0,end:0}}else i=null;for(ed={focusedElem:e,selectionRange:i},sc=!1,Dt=t;Dt!==null;)if(t=Dt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Dt=e;else for(;Dt!==null;){switch(t=Dt,h=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)d=e[i],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,i=t,d=h.memoizedProps,h=h.memoizedState,c=i.stateNode;try{var he=Yi(i.type,d);e=c.getSnapshotBeforeUpdate(he,h),c.__reactInternalSnapshotBeforeUpdate=e}catch(ye){He(i,i.return,ye)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)ad(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ad(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=t.sibling,e!==null){e.return=t.return,Dt=e;break}Dt=t.return}}function Cp(e,t,i){var c=i.flags;switch(i.tag){case 0:case 11:case 15:Da(e,i),c&4&&to(5,i);break;case 1:if(Da(e,i),c&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(b){He(i,i.return,b)}else{var d=Yi(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(b){He(i,i.return,b)}}c&64&&vp(i),c&512&&no(i,i.return);break;case 3:if(Da(e,i),c&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{sh(e,t)}catch(b){He(i,i.return,b)}}break;case 27:t===null&&c&4&&wp(i);case 26:case 5:Da(e,i),t===null&&c&4&&yp(i),c&512&&no(i,i.return);break;case 12:Da(e,i);break;case 31:Da(e,i),c&4&&Np(e,i);break;case 13:Da(e,i),c&4&&Tp(e,i),c&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=db.bind(null,i),Eb(e,i))));break;case 22:if(c=i.memoizedState!==null||ja,!c){t=t!==null&&t.memoizedState!==null||Ct,d=ja;var h=Ct;ja=c,(Ct=t)&&!h?Ea(e,i,(i.subtreeFlags&8772)!==0):Da(e,i),ja=d,Ct=h}break;case 30:break;default:Da(e,i)}}function Ap(e){var t=e.alternate;t!==null&&(e.alternate=null,Ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ou(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var lt=null,Jt=!1;function Ma(e,t,i){for(i=i.child;i!==null;)Rp(e,t,i),i=i.sibling}function Rp(e,t,i){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(mn,i)}catch{}switch(i.tag){case 26:Ct||fa(i,t),Ma(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ct||fa(i,t);var c=lt,d=Jt;si(i.type)&&(lt=i.stateNode,Jt=!1),Ma(e,t,i),fo(i.stateNode),lt=c,Jt=d;break;case 5:Ct||fa(i,t);case 6:if(c=lt,d=Jt,lt=null,Ma(e,t,i),lt=c,Jt=d,lt!==null)if(Jt)try{(lt.nodeType===9?lt.body:lt.nodeName==="HTML"?lt.ownerDocument.body:lt).removeChild(i.stateNode)}catch(h){He(i,t,h)}else try{lt.removeChild(i.stateNode)}catch(h){He(i,t,h)}break;case 18:lt!==null&&(Jt?(e=lt,vg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Ql(e)):vg(lt,i.stateNode));break;case 4:c=lt,d=Jt,lt=i.stateNode.containerInfo,Jt=!0,Ma(e,t,i),lt=c,Jt=d;break;case 0:case 11:case 14:case 15:ti(2,i,t),Ct||ti(4,i,t),Ma(e,t,i);break;case 1:Ct||(fa(i,t),c=i.stateNode,typeof c.componentWillUnmount=="function"&&bp(i,t,c)),Ma(e,t,i);break;case 21:Ma(e,t,i);break;case 22:Ct=(c=Ct)||i.memoizedState!==null,Ma(e,t,i),Ct=c;break;default:Ma(e,t,i)}}function Np(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ql(e)}catch(i){He(t,t.return,i)}}}function Tp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ql(e)}catch(i){He(t,t.return,i)}}function ib(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _p),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _p),t;default:throw Error(a(435,e.tag))}}function Ps(e,t){var i=ib(e);t.forEach(function(c){if(!i.has(c)){i.add(c);var d=mb.bind(null,e,c);c.then(d,d)}})}function en(e,t){var i=t.deletions;if(i!==null)for(var c=0;c<i.length;c++){var d=i[c],h=e,b=t,T=b;e:for(;T!==null;){switch(T.tag){case 27:if(si(T.type)){lt=T.stateNode,Jt=!1;break e}break;case 5:lt=T.stateNode,Jt=!1;break e;case 3:case 4:lt=T.stateNode.containerInfo,Jt=!0;break e}T=T.return}if(lt===null)throw Error(a(160));Rp(h,b,d),lt=null,Jt=!1,h=d.alternate,h!==null&&(h.return=null),d.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)jp(t,e),t=t.sibling}var Kn=null;function jp(e,t){var i=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:en(t,e),tn(e),c&4&&(ti(3,e,e.return),to(3,e),ti(5,e,e.return));break;case 1:en(t,e),tn(e),c&512&&(Ct||i===null||fa(i,i.return)),c&64&&ja&&(e=e.updateQueue,e!==null&&(c=e.callbacks,c!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?c:i.concat(c))));break;case 26:var d=Kn;if(en(t,e),tn(e),c&512&&(Ct||i===null||fa(i,i.return)),c&4){var h=i!==null?i.memoizedState:null;if(c=e.memoizedState,i===null)if(c===null)if(e.stateNode===null){e:{c=e.type,i=e.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":h=d.getElementsByTagName("title")[0],(!h||h[jr]||h[it]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=d.createElement(c),d.head.insertBefore(h,d.querySelector("head > title"))),Lt(h,c,i),h[it]=e,Mt(h),c=h;break e;case"link":var b=jg("link","href",d).get(c+(i.href||""));if(b){for(var T=0;T<b.length;T++)if(h=b[T],h.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&h.getAttribute("rel")===(i.rel==null?null:i.rel)&&h.getAttribute("title")===(i.title==null?null:i.title)&&h.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){b.splice(T,1);break t}}h=d.createElement(c),Lt(h,c,i),d.head.appendChild(h);break;case"meta":if(b=jg("meta","content",d).get(c+(i.content||""))){for(T=0;T<b.length;T++)if(h=b[T],h.getAttribute("content")===(i.content==null?null:""+i.content)&&h.getAttribute("name")===(i.name==null?null:i.name)&&h.getAttribute("property")===(i.property==null?null:i.property)&&h.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&h.getAttribute("charset")===(i.charSet==null?null:i.charSet)){b.splice(T,1);break t}}h=d.createElement(c),Lt(h,c,i),d.head.appendChild(h);break;default:throw Error(a(468,c))}h[it]=e,Mt(h),c=h}e.stateNode=c}else Mg(d,e.type,e.stateNode);else e.stateNode=Tg(d,c,e.memoizedProps);else h!==c?(h===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):h.count--,c===null?Mg(d,e.type,e.stateNode):Tg(d,c,e.memoizedProps)):c===null&&e.stateNode!==null&&jf(e,e.memoizedProps,i.memoizedProps)}break;case 27:en(t,e),tn(e),c&512&&(Ct||i===null||fa(i,i.return)),i!==null&&c&4&&jf(e,e.memoizedProps,i.memoizedProps);break;case 5:if(en(t,e),tn(e),c&512&&(Ct||i===null||fa(i,i.return)),e.flags&32){d=e.stateNode;try{yl(d,"")}catch(he){He(e,e.return,he)}}c&4&&e.stateNode!=null&&(d=e.memoizedProps,jf(e,d,i!==null?i.memoizedProps:d)),c&1024&&(Ef=!0);break;case 6:if(en(t,e),tn(e),c&4){if(e.stateNode===null)throw Error(a(162));c=e.memoizedProps,i=e.stateNode;try{i.nodeValue=c}catch(he){He(e,e.return,he)}}break;case 3:if(ic=null,d=Kn,Kn=nc(t.containerInfo),en(t,e),Kn=d,tn(e),c&4&&i!==null&&i.memoizedState.isDehydrated)try{Ql(t.containerInfo)}catch(he){He(e,e.return,he)}Ef&&(Ef=!1,Mp(e));break;case 4:c=Kn,Kn=nc(e.stateNode.containerInfo),en(t,e),tn(e),Kn=c;break;case 12:en(t,e),tn(e);break;case 31:en(t,e),tn(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,Ps(e,c)));break;case 13:en(t,e),tn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(qs=Me()),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,Ps(e,c)));break;case 22:d=e.memoizedState!==null;var F=i!==null&&i.memoizedState!==null,Y=ja,$=Ct;if(ja=Y||d,Ct=$||F,en(t,e),Ct=$,ja=Y,tn(e),c&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(i===null||F||ja||Ct||Xi(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){F=i=t;try{if(h=F.stateNode,d)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{T=F.stateNode;var ne=F.memoizedProps.style,X=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;T.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(he){He(F,F.return,he)}}}else if(t.tag===6){if(i===null){F=t;try{F.stateNode.nodeValue=d?"":F.memoizedProps}catch(he){He(F,F.return,he)}}}else if(t.tag===18){if(i===null){F=t;try{var Z=F.stateNode;d?bg(Z,!0):bg(F.stateNode,!1)}catch(he){He(F,F.return,he)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}c&4&&(c=e.updateQueue,c!==null&&(i=c.retryQueue,i!==null&&(c.retryQueue=null,Ps(e,i))));break;case 19:en(t,e),tn(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,Ps(e,c)));break;case 30:break;case 21:break;default:en(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{for(var i,c=e.return;c!==null;){if(Sp(c)){i=c;break}c=c.return}if(i==null)throw Error(a(160));switch(i.tag){case 27:var d=i.stateNode,h=Mf(e);Us(e,h,d);break;case 5:var b=i.stateNode;i.flags&32&&(yl(b,""),i.flags&=-33);var T=Mf(e);Us(e,T,b);break;case 3:case 4:var F=i.stateNode.containerInfo,Y=Mf(e);Df(e,Y,F);break;default:throw Error(a(161))}}catch($){He(e,e.return,$)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Da(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Cp(e,t.alternate,t),t=t.sibling}function Xi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ti(4,t,t.return),Xi(t);break;case 1:fa(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&bp(t,t.return,i),Xi(t);break;case 27:fo(t.stateNode);case 26:case 5:fa(t,t.return),Xi(t);break;case 22:t.memoizedState===null&&Xi(t);break;case 30:Xi(t);break;default:Xi(t)}e=e.sibling}}function Ea(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var c=t.alternate,d=e,h=t,b=h.flags;switch(h.tag){case 0:case 11:case 15:Ea(d,h,i),to(4,h);break;case 1:if(Ea(d,h,i),c=h,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(Y){He(c,c.return,Y)}if(c=h,d=c.updateQueue,d!==null){var T=c.stateNode;try{var F=d.shared.hiddenCallbacks;if(F!==null)for(d.shared.hiddenCallbacks=null,d=0;d<F.length;d++)oh(F[d],T)}catch(Y){He(c,c.return,Y)}}i&&b&64&&vp(h),no(h,h.return);break;case 27:wp(h);case 26:case 5:Ea(d,h,i),i&&c===null&&b&4&&yp(h),no(h,h.return);break;case 12:Ea(d,h,i);break;case 31:Ea(d,h,i),i&&b&4&&Np(d,h);break;case 13:Ea(d,h,i),i&&b&4&&Tp(d,h);break;case 22:h.memoizedState===null&&Ea(d,h,i),no(h,h.return);break;case 30:break;default:Ea(d,h,i)}t=t.sibling}}function kf(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Pr(i))}function zf(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pr(e))}function Qn(e,t,i,c){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dp(e,t,i,c),t=t.sibling}function Dp(e,t,i,c){var d=t.flags;switch(t.tag){case 0:case 11:case 15:Qn(e,t,i,c),d&2048&&to(9,t);break;case 1:Qn(e,t,i,c);break;case 3:Qn(e,t,i,c),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pr(e)));break;case 12:if(d&2048){Qn(e,t,i,c),e=t.stateNode;try{var h=t.memoizedProps,b=h.id,T=h.onPostCommit;typeof T=="function"&&T(b,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){He(t,t.return,F)}}else Qn(e,t,i,c);break;case 31:Qn(e,t,i,c);break;case 13:Qn(e,t,i,c);break;case 23:break;case 22:h=t.stateNode,b=t.alternate,t.memoizedState!==null?h._visibility&2?Qn(e,t,i,c):ao(e,t):h._visibility&2?Qn(e,t,i,c):(h._visibility|=2,Gl(e,t,i,c,(t.subtreeFlags&10256)!==0||!1)),d&2048&&kf(b,t);break;case 24:Qn(e,t,i,c),d&2048&&zf(t.alternate,t);break;default:Qn(e,t,i,c)}}function Gl(e,t,i,c,d){for(d=d&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var h=e,b=t,T=i,F=c,Y=b.flags;switch(b.tag){case 0:case 11:case 15:Gl(h,b,T,F,d),to(8,b);break;case 23:break;case 22:var $=b.stateNode;b.memoizedState!==null?$._visibility&2?Gl(h,b,T,F,d):ao(h,b):($._visibility|=2,Gl(h,b,T,F,d)),d&&Y&2048&&kf(b.alternate,b);break;case 24:Gl(h,b,T,F,d),d&&Y&2048&&zf(b.alternate,b);break;default:Gl(h,b,T,F,d)}t=t.sibling}}function ao(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,c=t,d=c.flags;switch(c.tag){case 22:ao(i,c),d&2048&&kf(c.alternate,c);break;case 24:ao(i,c),d&2048&&zf(c.alternate,c);break;default:ao(i,c)}t=t.sibling}}var io=8192;function Ul(e,t,i){if(e.subtreeFlags&io)for(e=e.child;e!==null;)Ep(e,t,i),e=e.sibling}function Ep(e,t,i){switch(e.tag){case 26:Ul(e,t,i),e.flags&io&&e.memoizedState!==null&&qb(i,Kn,e.memoizedState,e.memoizedProps);break;case 5:Ul(e,t,i);break;case 3:case 4:var c=Kn;Kn=nc(e.stateNode.containerInfo),Ul(e,t,i),Kn=c;break;case 22:e.memoizedState===null&&(c=e.alternate,c!==null&&c.memoizedState!==null?(c=io,io=16777216,Ul(e,t,i),io=c):Ul(e,t,i));break;default:Ul(e,t,i)}}function kp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function lo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var c=t[i];Dt=c,Bp(c,e)}kp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zp(e),e=e.sibling}function zp(e){switch(e.tag){case 0:case 11:case 15:lo(e),e.flags&2048&&ti(9,e,e.return);break;case 3:lo(e);break;case 12:lo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hs(e)):lo(e);break;default:lo(e)}}function Hs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var c=t[i];Dt=c,Bp(c,e)}kp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ti(8,t,t.return),Hs(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,Hs(t));break;default:Hs(t)}e=e.sibling}}function Bp(e,t){for(;Dt!==null;){var i=Dt;switch(i.tag){case 0:case 11:case 15:ti(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var c=i.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Pr(i.memoizedState.cache)}if(c=i.child,c!==null)c.return=i,Dt=c;else e:for(i=e;Dt!==null;){c=Dt;var d=c.sibling,h=c.return;if(Ap(c),c===i){Dt=null;break e}if(d!==null){d.return=h,Dt=d;break e}Dt=h}}}var lb={getCacheForType:function(e){var t=zt(St),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return zt(St).controller.signal}},rb=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Ze=null,Ne=null,De=0,Pe=0,vn=null,ni=!1,Pl=!1,Bf=!1,ka=0,ht=0,ai=0,Zi=0,Lf=0,bn=0,Hl=0,ro=null,nn=null,Of=!1,qs=0,Lp=0,Vs=1/0,Ys=null,ii=null,Nt=0,li=null,ql=null,za=0,Ff=0,If=null,Op=null,oo=0,Gf=null;function yn(){return(Ge&2)!==0&&De!==0?De&-De:U.T!==null?Yf():Tr()}function Fp(){if(bn===0)if((De&536870912)===0||ze){var e=Xn;Xn<<=1,(Xn&3932160)===0&&(Xn=262144),bn=e}else bn=536870912;return e=gn.current,e!==null&&(e.flags|=32),bn}function an(e,t,i){(e===Ze&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(Vl(e,0),ri(e,De,bn,!1)),Qt(e,i),((Ge&2)===0||e!==Ze)&&(e===Ze&&((Ge&2)===0&&(Zi|=i),ht===4&&ri(e,De,bn,!1)),da(e))}function Ip(e,t,i){if((Ge&6)!==0)throw Error(a(327));var c=!i&&(t&127)===0&&(t&e.expiredLanes)===0||ra(e,t),d=c?cb(e,t):Pf(e,t,!0),h=c;do{if(d===0){Pl&&!c&&ri(e,t,0,!1);break}else{if(i=e.current.alternate,h&&!ob(i)){d=Pf(e,t,!1),h=!1;continue}if(d===2){if(h=t,e.errorRecoveryDisabledLanes&h)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){t=b;e:{var T=e;d=ro;var F=T.current.memoizedState.isDehydrated;if(F&&(Vl(T,b).flags|=256),b=Pf(T,b,!1),b!==2){if(Bf&&!F){T.errorRecoveryDisabledLanes|=h,Zi|=h,d=4;break e}h=nn,nn=d,h!==null&&(nn===null?nn=h:nn.push.apply(nn,h))}d=b}if(h=!1,d!==2)continue}}if(d===1){Vl(e,0),ri(e,t,0,!0);break}e:{switch(c=e,h=d,h){case 0:case 1:throw Error(a(345));case 4:if((t&4194048)!==t)break;case 6:ri(c,t,bn,!ni);break e;case 2:nn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((t&62914560)===t&&(d=qs+300-Me(),10<d)){if(ri(c,t,bn,!ni),la(c,0,!0)!==0)break e;za=t,c.timeoutHandle=gg(Gp.bind(null,c,i,nn,Ys,Of,t,bn,Zi,Hl,ni,h,"Throttled",-0,0),d);break e}Gp(c,i,nn,Ys,Of,t,bn,Zi,Hl,ni,h,null,-0,0)}}break}while(!0);da(e)}function Gp(e,t,i,c,d,h,b,T,F,Y,$,ne,X,Z){if(e.timeoutHandle=-1,ne=t.subtreeFlags,ne&8192||(ne&16785408)===16785408){ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ba},Ep(t,h,ne);var he=(h&62914560)===h?qs-Me():(h&4194048)===h?Lp-Me():0;if(he=Vb(ne,he),he!==null){za=h,e.cancelPendingCommit=he(Zp.bind(null,e,t,h,i,c,d,b,T,F,$,ne,null,X,Z)),ri(e,h,b,!Y);return}}Zp(e,t,h,i,c,d,b,T,F)}function ob(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var c=0;c<i.length;c++){var d=i[c],h=d.getSnapshot;d=d.value;try{if(!hn(h(),d))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ri(e,t,i,c){t&=~Lf,t&=~Zi,e.suspendedLanes|=t,e.pingedLanes&=~t,c&&(e.warmLanes|=t),c=e.expirationTimes;for(var d=t;0<d;){var h=31-Xe(d),b=1<<h;c[h]=-1,d&=~b}i!==0&&Rr(e,i,t)}function Xs(){return(Ge&6)===0?(so(0),!1):!0}function Uf(){if(Ne!==null){if(Pe===0)var e=Ne.return;else e=Ne,_a=Ii=null,nf(e),Bl=null,qr=0,e=Ne;for(;e!==null;)xp(e.alternate,e),e=e.return;Ne=null}}function Vl(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Nb(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),za=0,Uf(),Ze=e,Ne=i=Sa(e.current,null),De=t,Pe=0,vn=null,ni=!1,Pl=ra(e,t),Bf=!1,Hl=bn=Lf=Zi=ai=ht=0,nn=ro=null,Of=!1,(t&8)!==0&&(t|=t&32);var c=e.entangledLanes;if(c!==0)for(e=e.entanglements,c&=t;0<c;){var d=31-Xe(c),h=1<<d;t|=e[d],c&=~h}return ka=t,hs(),i}function Up(e,t){Ce=null,U.H=$r,t===zl||t===ws?(t=ah(),Pe=3):t===qu?(t=ah(),Pe=4):Pe=t===bf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,vn=t,Ne===null&&(ht=1,Ls(e,Bn(t,e.current)))}function Pp(){var e=gn.current;return e===null?!0:(De&4194048)===De?In===null:(De&62914560)===De||(De&536870912)!==0?e===In:!1}function Hp(){var e=U.H;return U.H=$r,e===null?$r:e}function qp(){var e=U.A;return U.A=lb,e}function Zs(){ht=4,ni||(De&4194048)!==De&&gn.current!==null||(Pl=!0),(ai&134217727)===0&&(Zi&134217727)===0||Ze===null||ri(Ze,De,bn,!1)}function Pf(e,t,i){var c=Ge;Ge|=2;var d=Hp(),h=qp();(Ze!==e||De!==t)&&(Ys=null,Vl(e,t)),t=!1;var b=ht;e:do try{if(Pe!==0&&Ne!==null){var T=Ne,F=vn;switch(Pe){case 8:Uf(),b=6;break e;case 3:case 2:case 9:case 6:gn.current===null&&(t=!0);var Y=Pe;if(Pe=0,vn=null,Yl(e,T,F,Y),i&&Pl){b=0;break e}break;default:Y=Pe,Pe=0,vn=null,Yl(e,T,F,Y)}}sb(),b=ht;break}catch($){Up(e,$)}while(!0);return t&&e.shellSuspendCounter++,_a=Ii=null,Ge=c,U.H=d,U.A=h,Ne===null&&(Ze=null,De=0,hs()),b}function sb(){for(;Ne!==null;)Vp(Ne)}function cb(e,t){var i=Ge;Ge|=2;var c=Hp(),d=qp();Ze!==e||De!==t?(Ys=null,Vs=Me()+500,Vl(e,t)):Pl=ra(e,t);e:do try{if(Pe!==0&&Ne!==null){t=Ne;var h=vn;t:switch(Pe){case 1:Pe=0,vn=null,Yl(e,t,h,1);break;case 2:case 9:if(th(h)){Pe=0,vn=null,Yp(t);break}t=function(){Pe!==2&&Pe!==9||Ze!==e||(Pe=7),da(e)},h.then(t,t);break e;case 3:Pe=7;break e;case 4:Pe=5;break e;case 7:th(h)?(Pe=0,vn=null,Yp(t)):(Pe=0,vn=null,Yl(e,t,h,7));break;case 5:var b=null;switch(Ne.tag){case 26:b=Ne.memoizedState;case 5:case 27:var T=Ne;if(b?Dg(b):T.stateNode.complete){Pe=0,vn=null;var F=T.sibling;if(F!==null)Ne=F;else{var Y=T.return;Y!==null?(Ne=Y,Ws(Y)):Ne=null}break t}}Pe=0,vn=null,Yl(e,t,h,5);break;case 6:Pe=0,vn=null,Yl(e,t,h,6);break;case 8:Uf(),ht=6;break e;default:throw Error(a(462))}}ub();break}catch($){Up(e,$)}while(!0);return _a=Ii=null,U.H=c,U.A=d,Ge=i,Ne!==null?0:(Ze=null,De=0,hs(),ht)}function ub(){for(;Ne!==null&&!de();)Vp(Ne)}function Vp(e){var t=pp(e.alternate,e,ka);e.memoizedProps=e.pendingProps,t===null?Ws(e):Ne=t}function Yp(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=cp(i,t,t.pendingProps,t.type,void 0,De);break;case 11:t=cp(i,t,t.pendingProps,t.type.render,t.ref,De);break;case 5:nf(t);default:xp(i,t),t=Ne=qm(t,ka),t=pp(i,t,ka)}e.memoizedProps=e.pendingProps,t===null?Ws(e):Ne=t}function Yl(e,t,i,c){_a=Ii=null,nf(t),Bl=null,qr=0;var d=t.return;try{if($2(e,d,t,i,De)){ht=1,Ls(e,Bn(i,e.current)),Ne=null;return}}catch(h){if(d!==null)throw Ne=d,h;ht=1,Ls(e,Bn(i,e.current)),Ne=null;return}t.flags&32768?(ze||c===1?e=!0:Pl||(De&536870912)!==0?e=!1:(ni=e=!0,(c===2||c===9||c===3||c===6)&&(c=gn.current,c!==null&&c.tag===13&&(c.flags|=16384))),Xp(t,e)):Ws(t)}function Ws(e){var t=e;do{if((t.flags&32768)!==0){Xp(t,ni);return}e=t.return;var i=tb(t.alternate,t,ka);if(i!==null){Ne=i;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);ht===0&&(ht=5)}function Xp(e,t){do{var i=nb(e.alternate,e);if(i!==null){i.flags&=32767,Ne=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=i}while(e!==null);ht=6,Ne=null}function Zp(e,t,i,c,d,h,b,T,F){e.cancelPendingCommit=null;do Ks();while(Nt!==0);if((Ge&6)!==0)throw Error(a(327));if(t!==null){if(t===e.current)throw Error(a(177));if(h=t.lanes|t.childLanes,h|=ju,sa(e,i,h,b,T,F),e===Ze&&(Ne=Ze=null,De=0),ql=t,li=e,za=i,Ff=h,If=d,Op=c,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hb(It,function(){return Jp(),null})):(e.callbackNode=null,e.callbackPriority=0),c=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||c){c=U.T,U.T=null,d=Q.p,Q.p=2,b=Ge,Ge|=4;try{ab(e,t,i)}finally{Ge=b,Q.p=d,U.T=c}}Nt=1,Wp(),Kp(),Qp()}}function Wp(){if(Nt===1){Nt=0;var e=li,t=ql,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=U.T,U.T=null;var c=Q.p;Q.p=2;var d=Ge;Ge|=4;try{jp(t,e);var h=ed,b=Bm(e.containerInfo),T=h.focusedElem,F=h.selectionRange;if(b!==T&&T&&T.ownerDocument&&zm(T.ownerDocument.documentElement,T)){if(F!==null&&Cu(T)){var Y=F.start,$=F.end;if($===void 0&&($=Y),"selectionStart"in T)T.selectionStart=Y,T.selectionEnd=Math.min($,T.value.length);else{var ne=T.ownerDocument||document,X=ne&&ne.defaultView||window;if(X.getSelection){var Z=X.getSelection(),he=T.textContent.length,ye=Math.min(F.start,he),Ye=F.end===void 0?ye:Math.min(F.end,he);!Z.extend&&ye>Ye&&(b=Ye,Ye=ye,ye=b);var H=km(T,ye),I=km(T,Ye);if(H&&I&&(Z.rangeCount!==1||Z.anchorNode!==H.node||Z.anchorOffset!==H.offset||Z.focusNode!==I.node||Z.focusOffset!==I.offset)){var V=ne.createRange();V.setStart(H.node,H.offset),Z.removeAllRanges(),ye>Ye?(Z.addRange(V),Z.extend(I.node,I.offset)):(V.setEnd(I.node,I.offset),Z.addRange(V))}}}}for(ne=[],Z=T;Z=Z.parentNode;)Z.nodeType===1&&ne.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ne.length;T++){var ee=ne[T];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}sc=!!Jf,ed=Jf=null}finally{Ge=d,Q.p=c,U.T=i}}e.current=t,Nt=2}}function Kp(){if(Nt===2){Nt=0;var e=li,t=ql,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=U.T,U.T=null;var c=Q.p;Q.p=2;var d=Ge;Ge|=4;try{Cp(e,t.alternate,t)}finally{Ge=d,Q.p=c,U.T=i}}Nt=3}}function Qp(){if(Nt===4||Nt===3){Nt=0,at();var e=li,t=ql,i=za,c=Op;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Nt=5:(Nt=0,ql=li=null,$p(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(ii=null),ml(i),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(mn,t,void 0,(t.current.flags&128)===128)}catch{}if(c!==null){t=U.T,d=Q.p,Q.p=2,U.T=null;try{for(var h=e.onRecoverableError,b=0;b<c.length;b++){var T=c[b];h(T.value,{componentStack:T.stack})}}finally{U.T=t,Q.p=d}}(za&3)!==0&&Ks(),da(e),d=e.pendingLanes,(i&261930)!==0&&(d&42)!==0?e===Gf?oo++:(oo=0,Gf=e):oo=0,so(0)}}function $p(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pr(t)))}function Ks(){return Wp(),Kp(),Qp(),Jp()}function Jp(){if(Nt!==5)return!1;var e=li,t=Ff;Ff=0;var i=ml(za),c=U.T,d=Q.p;try{Q.p=32>i?32:i,U.T=null,i=If,If=null;var h=li,b=za;if(Nt=0,ql=li=null,za=0,(Ge&6)!==0)throw Error(a(331));var T=Ge;if(Ge|=4,zp(h.current),Dp(h,h.current,b,i),Ge=T,so(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(mn,h)}catch{}return!0}finally{Q.p=d,U.T=c,$p(e,t)}}function eg(e,t,i){t=Bn(i,t),t=vf(e.stateNode,t,2),e=$a(e,t,2),e!==null&&(Qt(e,2),da(e))}function He(e,t,i){if(e.tag===3)eg(e,e,i);else for(;t!==null;){if(t.tag===3){eg(t,e,i);break}else if(t.tag===1){var c=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ii===null||!ii.has(c))){e=Bn(i,e),i=tp(2),c=$a(t,i,2),c!==null&&(np(i,c,t,e),Qt(c,2),da(c));break}}t=t.return}}function Hf(e,t,i){var c=e.pingCache;if(c===null){c=e.pingCache=new rb;var d=new Set;c.set(t,d)}else d=c.get(t),d===void 0&&(d=new Set,c.set(t,d));d.has(i)||(Bf=!0,d.add(i),e=fb.bind(null,e,t,i),t.then(e,e))}function fb(e,t,i){var c=e.pingCache;c!==null&&c.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Ze===e&&(De&i)===i&&(ht===4||ht===3&&(De&62914560)===De&&300>Me()-qs?(Ge&2)===0&&Vl(e,0):Lf|=i,Hl===De&&(Hl=0)),da(e)}function tg(e,t){t===0&&(t=oa()),e=Li(e,t),e!==null&&(Qt(e,t),da(e))}function db(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),tg(e,i)}function mb(e,t){var i=0;switch(e.tag){case 31:case 13:var c=e.stateNode,d=e.memoizedState;d!==null&&(i=d.retryLane);break;case 19:c=e.stateNode;break;case 22:c=e.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(t),tg(e,i)}function hb(e,t){return be(e,t)}var Qs=null,Xl=null,qf=!1,$s=!1,Vf=!1,oi=0;function da(e){e!==Xl&&e.next===null&&(Xl===null?Qs=Xl=e:Xl=Xl.next=e),$s=!0,qf||(qf=!0,gb())}function so(e,t){if(!Vf&&$s){Vf=!0;do for(var i=!1,c=Qs;c!==null;){if(e!==0){var d=c.pendingLanes;if(d===0)var h=0;else{var b=c.suspendedLanes,T=c.pingedLanes;h=(1<<31-Xe(42|e)+1)-1,h&=d&~(b&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(i=!0,lg(c,h))}else h=De,h=la(c,c===Ze?h:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(h&3)===0||ra(c,h)||(i=!0,lg(c,h));c=c.next}while(i);Vf=!1}}function pb(){ng()}function ng(){$s=qf=!1;var e=0;oi!==0&&Rb()&&(e=oi);for(var t=Me(),i=null,c=Qs;c!==null;){var d=c.next,h=ag(c,t);h===0?(c.next=null,i===null?Qs=d:i.next=d,d===null&&(Xl=i)):(i=c,(e!==0||(h&3)!==0)&&($s=!0)),c=d}Nt!==0&&Nt!==5||so(e),oi!==0&&(oi=0)}function ag(e,t){for(var i=e.suspendedLanes,c=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var b=31-Xe(h),T=1<<b,F=d[b];F===-1?((T&i)===0||(T&c)!==0)&&(d[b]=fl(T,t)):F<=t&&(e.expiredLanes|=T),h&=~T}if(t=Ze,i=De,i=la(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c=e.callbackNode,i===0||e===t&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return c!==null&&c!==null&&we(c),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||ra(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(c!==null&&we(c),ml(i)){case 2:case 8:i=Vt;break;case 32:i=It;break;case 268435456:i=Xt;break;default:i=It}return c=ig.bind(null,e),i=be(i,c),e.callbackPriority=t,e.callbackNode=i,t}return c!==null&&c!==null&&we(c),e.callbackPriority=2,e.callbackNode=null,2}function ig(e,t){if(Nt!==0&&Nt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Ks()&&e.callbackNode!==i)return null;var c=De;return c=la(e,e===Ze?c:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c===0?null:(Ip(e,c,t),ag(e,Me()),e.callbackNode!=null&&e.callbackNode===i?ig.bind(null,e):null)}function lg(e,t){if(Ks())return null;Ip(e,t,!0)}function gb(){Tb(function(){(Ge&6)!==0?be(un,pb):ng()})}function Yf(){if(oi===0){var e=El;e===0&&(e=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),oi=e}return oi}function rg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rs(""+e)}function og(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function xb(e,t,i,c,d){if(t==="submit"&&i&&i.stateNode===d){var h=rg((d[jt]||null).action),b=c.submitter;b&&(t=(t=b[jt]||null)?rg(t.formAction):b.getAttribute("formAction"),t!==null&&(h=t,b=null));var T=new us("action","action",null,c,d);e.push({event:T,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(oi!==0){var F=b?og(d,b):new FormData(d);df(i,{pending:!0,data:F,method:d.method,action:h},null,F)}}else typeof h=="function"&&(T.preventDefault(),F=b?og(d,b):new FormData(d),df(i,{pending:!0,data:F,method:d.method,action:h},h,F))},currentTarget:d}]})}}for(var Xf=0;Xf<Tu.length;Xf++){var Zf=Tu[Xf],vb=Zf.toLowerCase(),bb=Zf[0].toUpperCase()+Zf.slice(1);Wn(vb,"on"+bb)}Wn(Fm,"onAnimationEnd"),Wn(Im,"onAnimationIteration"),Wn(Gm,"onAnimationStart"),Wn("dblclick","onDoubleClick"),Wn("focusin","onFocus"),Wn("focusout","onBlur"),Wn(B2,"onTransitionRun"),Wn(L2,"onTransitionStart"),Wn(O2,"onTransitionCancel"),Wn(Um,"onTransitionEnd"),vl("onMouseEnter",["mouseout","mouseover"]),vl("onMouseLeave",["mouseout","mouseover"]),vl("onPointerEnter",["pointerout","pointerover"]),vl("onPointerLeave",["pointerout","pointerover"]),Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co));function sg(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var c=e[i],d=c.event;c=c.listeners;e:{var h=void 0;if(t)for(var b=c.length-1;0<=b;b--){var T=c[b],F=T.instance,Y=T.currentTarget;if(T=T.listener,F!==h&&d.isPropagationStopped())break e;h=T,d.currentTarget=Y;try{h(d)}catch($){ms($)}d.currentTarget=null,h=F}else for(b=0;b<c.length;b++){if(T=c[b],F=T.instance,Y=T.currentTarget,T=T.listener,F!==h&&d.isPropagationStopped())break e;h=T,d.currentTarget=Y;try{h(d)}catch($){ms($)}d.currentTarget=null,h=F}}}}function Te(e,t){var i=t[ru];i===void 0&&(i=t[ru]=new Set);var c=e+"__bubble";i.has(c)||(cg(t,e,2,!1),i.add(c))}function Wf(e,t,i){var c=0;t&&(c|=4),cg(i,e,c,t)}var Js="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[Js]){e[Js]=!0,nm.forEach(function(i){i!=="selectionchange"&&(yb.has(i)||Wf(i,!1,e),Wf(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Js]||(t[Js]=!0,Wf("selectionchange",!1,t))}}function cg(e,t,i,c){switch(Fg(t)){case 2:var d=Zb;break;case 8:d=Wb;break;default:d=fd}i=d.bind(null,t,i,e),d=void 0,!pu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),c?d!==void 0?e.addEventListener(t,i,{capture:!0,passive:d}):e.addEventListener(t,i,!0):d!==void 0?e.addEventListener(t,i,{passive:d}):e.addEventListener(t,i,!1)}function Qf(e,t,i,c,d){var h=c;if((t&1)===0&&(t&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var T=c.stateNode.containerInfo;if(T===d)break;if(b===4)for(b=c.return;b!==null;){var F=b.tag;if((F===3||F===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;T!==null;){if(b=pl(T),b===null)return;if(F=b.tag,F===5||F===6||F===26||F===27){c=h=b;continue e}T=T.parentNode}}c=c.return}hm(function(){var Y=h,$=mu(i),ne=[];e:{var X=Pm.get(e);if(X!==void 0){var Z=us,he=e;switch(e){case"keypress":if(ss(i)===0)break e;case"keydown":case"keyup":Z=m2;break;case"focusin":he="focus",Z=bu;break;case"focusout":he="blur",Z=bu;break;case"beforeblur":case"afterblur":Z=bu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=t2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=g2;break;case Fm:case Im:case Gm:Z=i2;break;case Um:Z=v2;break;case"scroll":case"scrollend":Z=Jv;break;case"wheel":Z=y2;break;case"copy":case"cut":case"paste":Z=r2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=bm;break;case"toggle":case"beforetoggle":Z=w2}var ye=(t&4)!==0,Ye=!ye&&(e==="scroll"||e==="scrollend"),H=ye?X!==null?X+"Capture":null:X;ye=[];for(var I=Y,V;I!==null;){var ee=I;if(V=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||V===null||H===null||(ee=Dr(I,H),ee!=null&&ye.push(uo(I,ee,V))),Ye)break;I=I.return}0<ye.length&&(X=new Z(X,he,null,i,$),ne.push({event:X,listeners:ye}))}}if((t&7)===0){e:{if(X=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",X&&i!==du&&(he=i.relatedTarget||i.fromElement)&&(pl(he)||he[hl]))break e;if((Z||X)&&(X=$.window===$?$:(X=$.ownerDocument)?X.defaultView||X.parentWindow:window,Z?(he=i.relatedTarget||i.toElement,Z=Y,he=he?pl(he):null,he!==null&&(Ye=f(he),ye=he.tag,he!==Ye||ye!==5&&ye!==27&&ye!==6)&&(he=null)):(Z=null,he=Y),Z!==he)){if(ye=xm,ee="onMouseLeave",H="onMouseEnter",I="mouse",(e==="pointerout"||e==="pointerover")&&(ye=bm,ee="onPointerLeave",H="onPointerEnter",I="pointer"),Ye=Z==null?X:Mr(Z),V=he==null?X:Mr(he),X=new ye(ee,I+"leave",Z,i,$),X.target=Ye,X.relatedTarget=V,ee=null,pl($)===Y&&(ye=new ye(H,I+"enter",he,i,$),ye.target=V,ye.relatedTarget=Ye,ee=ye),Ye=ee,Z&&he)t:{for(ye=Sb,H=Z,I=he,V=0,ee=H;ee;ee=ye(ee))V++;ee=0;for(var ve=I;ve;ve=ye(ve))ee++;for(;0<V-ee;)H=ye(H),V--;for(;0<ee-V;)I=ye(I),ee--;for(;V--;){if(H===I||I!==null&&H===I.alternate){ye=H;break t}H=ye(H),I=ye(I)}ye=null}else ye=null;Z!==null&&ug(ne,X,Z,ye,!1),he!==null&&Ye!==null&&ug(ne,Ye,he,ye,!0)}}e:{if(X=Y?Mr(Y):window,Z=X.nodeName&&X.nodeName.toLowerCase(),Z==="select"||Z==="input"&&X.type==="file")var Fe=Nm;else if(Am(X))if(Tm)Fe=E2;else{Fe=M2;var xe=j2}else Z=X.nodeName,!Z||Z.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?Y&&fu(Y.elementType)&&(Fe=Nm):Fe=D2;if(Fe&&(Fe=Fe(e,Y))){Rm(ne,Fe,i,$);break e}xe&&xe(e,X,Y),e==="focusout"&&Y&&X.type==="number"&&Y.memoizedProps.value!=null&&uu(X,"number",X.value)}switch(xe=Y?Mr(Y):window,e){case"focusin":(Am(xe)||xe.contentEditable==="true")&&(Cl=xe,Au=Y,Ir=null);break;case"focusout":Ir=Au=Cl=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Lm(ne,i,$);break;case"selectionchange":if(z2)break;case"keydown":case"keyup":Lm(ne,i,$)}var Re;if(Su)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else _l?_m(e,i)&&(Ee="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Ee="onCompositionStart");Ee&&(ym&&i.locale!=="ko"&&(_l||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&_l&&(Re=pm()):(Va=$,gu="value"in Va?Va.value:Va.textContent,_l=!0)),xe=ec(Y,Ee),0<xe.length&&(Ee=new vm(Ee,e,null,i,$),ne.push({event:Ee,listeners:xe}),Re?Ee.data=Re:(Re=Cm(i),Re!==null&&(Ee.data=Re)))),(Re=C2?A2(e,i):R2(e,i))&&(Ee=ec(Y,"onBeforeInput"),0<Ee.length&&(xe=new vm("onBeforeInput","beforeinput",null,i,$),ne.push({event:xe,listeners:Ee}),xe.data=Re)),xb(ne,e,Y,i,$)}sg(ne,t)})}function uo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function ec(e,t){for(var i=t+"Capture",c=[];e!==null;){var d=e,h=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||h===null||(d=Dr(e,i),d!=null&&c.unshift(uo(e,d,h)),d=Dr(e,t),d!=null&&c.push(uo(e,d,h))),e.tag===3)return c;e=e.return}return[]}function Sb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ug(e,t,i,c,d){for(var h=t._reactName,b=[];i!==null&&i!==c;){var T=i,F=T.alternate,Y=T.stateNode;if(T=T.tag,F!==null&&F===c)break;T!==5&&T!==26&&T!==27||Y===null||(F=Y,d?(Y=Dr(i,h),Y!=null&&b.unshift(uo(i,Y,F))):d||(Y=Dr(i,h),Y!=null&&b.push(uo(i,Y,F)))),i=i.return}b.length!==0&&e.push({event:t,listeners:b})}var wb=/\r\n?/g,_b=/\u0000|\uFFFD/g;function fg(e){return(typeof e=="string"?e:""+e).replace(wb,`
`).replace(_b,"")}function dg(e,t){return t=fg(t),fg(e)===t}function Ve(e,t,i,c,d,h){switch(i){case"children":typeof c=="string"?t==="body"||t==="textarea"&&c===""||yl(e,c):(typeof c=="number"||typeof c=="bigint")&&t!=="body"&&yl(e,""+c);break;case"className":is(e,"class",c);break;case"tabIndex":is(e,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":is(e,i,c);break;case"style":dm(e,c,h);break;case"data":if(t!=="object"){is(e,"data",c);break}case"src":case"href":if(c===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(i);break}c=rs(""+c),e.setAttribute(i,c);break;case"action":case"formAction":if(typeof c=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(i==="formAction"?(t!=="input"&&Ve(e,t,"name",d.name,d,null),Ve(e,t,"formEncType",d.formEncType,d,null),Ve(e,t,"formMethod",d.formMethod,d,null),Ve(e,t,"formTarget",d.formTarget,d,null)):(Ve(e,t,"encType",d.encType,d,null),Ve(e,t,"method",d.method,d,null),Ve(e,t,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(i);break}c=rs(""+c),e.setAttribute(i,c);break;case"onClick":c!=null&&(e.onclick=ba);break;case"onScroll":c!=null&&Te("scroll",e);break;case"onScrollEnd":c!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(i=c.__html,i!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=i}}break;case"multiple":e.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":e.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){e.removeAttribute("xlink:href");break}i=rs(""+c),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(i,""+c):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":c===!0?e.setAttribute(i,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(i,c):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?e.setAttribute(i,c):e.removeAttribute(i);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?e.removeAttribute(i):e.setAttribute(i,c);break;case"popover":Te("beforetoggle",e),Te("toggle",e),as(e,"popover",c);break;case"xlinkActuate":va(e,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":va(e,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":va(e,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":va(e,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":va(e,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":va(e,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":va(e,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":va(e,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":va(e,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":as(e,"is",c);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Qv.get(i)||i,as(e,i,c))}}function $f(e,t,i,c,d,h){switch(i){case"style":dm(e,c,h);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(i=c.__html,i!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=i}}break;case"children":typeof c=="string"?yl(e,c):(typeof c=="number"||typeof c=="bigint")&&yl(e,""+c);break;case"onScroll":c!=null&&Te("scroll",e);break;case"onScrollEnd":c!=null&&Te("scrollend",e);break;case"onClick":c!=null&&(e.onclick=ba);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!am.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(d=i.endsWith("Capture"),t=i.slice(2,d?i.length-7:void 0),h=e[jt]||null,h=h!=null?h[i]:null,typeof h=="function"&&e.removeEventListener(t,h,d),typeof c=="function")){typeof h!="function"&&h!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,c,d);break e}i in e?e[i]=c:c===!0?e.setAttribute(i,""):as(e,i,c)}}}function Lt(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var c=!1,d=!1,h;for(h in i)if(i.hasOwnProperty(h)){var b=i[h];if(b!=null)switch(h){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Ve(e,t,h,b,i,null)}}d&&Ve(e,t,"srcSet",i.srcSet,i,null),c&&Ve(e,t,"src",i.src,i,null);return;case"input":Te("invalid",e);var T=h=b=d=null,F=null,Y=null;for(c in i)if(i.hasOwnProperty(c)){var $=i[c];if($!=null)switch(c){case"name":d=$;break;case"type":b=$;break;case"checked":F=$;break;case"defaultChecked":Y=$;break;case"value":h=$;break;case"defaultValue":T=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(a(137,t));break;default:Ve(e,t,c,$,i,null)}}sm(e,h,T,F,Y,b,d,!1);return;case"select":Te("invalid",e),c=b=h=null;for(d in i)if(i.hasOwnProperty(d)&&(T=i[d],T!=null))switch(d){case"value":h=T;break;case"defaultValue":b=T;break;case"multiple":c=T;default:Ve(e,t,d,T,i,null)}t=h,i=b,e.multiple=!!c,t!=null?bl(e,!!c,t,!1):i!=null&&bl(e,!!c,i,!0);return;case"textarea":Te("invalid",e),h=d=c=null;for(b in i)if(i.hasOwnProperty(b)&&(T=i[b],T!=null))switch(b){case"value":c=T;break;case"defaultValue":d=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Ve(e,t,b,T,i,null)}um(e,c,d,h);return;case"option":for(F in i)if(i.hasOwnProperty(F)&&(c=i[F],c!=null))switch(F){case"selected":e.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Ve(e,t,F,c,i,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(c=0;c<co.length;c++)Te(co[c],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in i)if(i.hasOwnProperty(Y)&&(c=i[Y],c!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Ve(e,t,Y,c,i,null)}return;default:if(fu(t)){for($ in i)i.hasOwnProperty($)&&(c=i[$],c!==void 0&&$f(e,t,$,c,i,void 0));return}}for(T in i)i.hasOwnProperty(T)&&(c=i[T],c!=null&&Ve(e,t,T,c,i,null))}function Cb(e,t,i,c){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,h=null,b=null,T=null,F=null,Y=null,$=null;for(Z in i){var ne=i[Z];if(i.hasOwnProperty(Z)&&ne!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":F=ne;default:c.hasOwnProperty(Z)||Ve(e,t,Z,null,c,ne)}}for(var X in c){var Z=c[X];if(ne=i[X],c.hasOwnProperty(X)&&(Z!=null||ne!=null))switch(X){case"type":h=Z;break;case"name":d=Z;break;case"checked":Y=Z;break;case"defaultChecked":$=Z;break;case"value":b=Z;break;case"defaultValue":T=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(a(137,t));break;default:Z!==ne&&Ve(e,t,X,Z,c,ne)}}cu(e,b,T,F,Y,$,h,d);return;case"select":Z=b=T=X=null;for(h in i)if(F=i[h],i.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":Z=F;default:c.hasOwnProperty(h)||Ve(e,t,h,null,c,F)}for(d in c)if(h=c[d],F=i[d],c.hasOwnProperty(d)&&(h!=null||F!=null))switch(d){case"value":X=h;break;case"defaultValue":T=h;break;case"multiple":b=h;default:h!==F&&Ve(e,t,d,h,c,F)}t=T,i=b,c=Z,X!=null?bl(e,!!i,X,!1):!!c!=!!i&&(t!=null?bl(e,!!i,t,!0):bl(e,!!i,i?[]:"",!1));return;case"textarea":Z=X=null;for(T in i)if(d=i[T],i.hasOwnProperty(T)&&d!=null&&!c.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ve(e,t,T,null,c,d)}for(b in c)if(d=c[b],h=i[b],c.hasOwnProperty(b)&&(d!=null||h!=null))switch(b){case"value":X=d;break;case"defaultValue":Z=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==h&&Ve(e,t,b,d,c,h)}cm(e,X,Z);return;case"option":for(var he in i)if(X=i[he],i.hasOwnProperty(he)&&X!=null&&!c.hasOwnProperty(he))switch(he){case"selected":e.selected=!1;break;default:Ve(e,t,he,null,c,X)}for(F in c)if(X=c[F],Z=i[F],c.hasOwnProperty(F)&&X!==Z&&(X!=null||Z!=null))switch(F){case"selected":e.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:Ve(e,t,F,X,c,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in i)X=i[ye],i.hasOwnProperty(ye)&&X!=null&&!c.hasOwnProperty(ye)&&Ve(e,t,ye,null,c,X);for(Y in c)if(X=c[Y],Z=i[Y],c.hasOwnProperty(Y)&&X!==Z&&(X!=null||Z!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,t));break;default:Ve(e,t,Y,X,c,Z)}return;default:if(fu(t)){for(var Ye in i)X=i[Ye],i.hasOwnProperty(Ye)&&X!==void 0&&!c.hasOwnProperty(Ye)&&$f(e,t,Ye,void 0,c,X);for($ in c)X=c[$],Z=i[$],!c.hasOwnProperty($)||X===Z||X===void 0&&Z===void 0||$f(e,t,$,X,c,Z);return}}for(var H in i)X=i[H],i.hasOwnProperty(H)&&X!=null&&!c.hasOwnProperty(H)&&Ve(e,t,H,null,c,X);for(ne in c)X=c[ne],Z=i[ne],!c.hasOwnProperty(ne)||X===Z||X==null&&Z==null||Ve(e,t,ne,X,c,Z)}function mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ab(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),c=0;c<i.length;c++){var d=i[c],h=d.transferSize,b=d.initiatorType,T=d.duration;if(h&&T&&mg(b)){for(b=0,T=d.responseEnd,c+=1;c<i.length;c++){var F=i[c],Y=F.startTime;if(Y>T)break;var $=F.transferSize,ne=F.initiatorType;$&&mg(ne)&&(F=F.responseEnd,b+=$*(F<T?1:(T-Y)/(F-Y)))}if(--c,t+=8*(h+b)/(d.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,ed=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function hg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function td(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nd=null;function Rb(){var e=window.event;return e&&e.type==="popstate"?e===nd?!1:(nd=e,!0):(nd=null,!1)}var gg=typeof setTimeout=="function"?setTimeout:void 0,Nb=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,Tb=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(e){return xg.resolve(null).then(e).catch(jb)}:gg;function jb(e){setTimeout(function(){throw e})}function si(e){return e==="head"}function vg(e,t){var i=t,c=0;do{var d=i.nextSibling;if(e.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"||i==="/&"){if(c===0){e.removeChild(d),Ql(t);return}c--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")c++;else if(i==="html")fo(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,fo(i);for(var h=i.firstChild;h;){var b=h.nextSibling,T=h.nodeName;h[jr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&h.rel.toLowerCase()==="stylesheet"||i.removeChild(h),h=b}}else i==="body"&&fo(e.ownerDocument.body);i=d}while(i);Ql(t)}function bg(e,t){var i=e;e=0;do{var c=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=c}while(i)}function ad(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":ad(i),ou(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Mb(e,t,i,c){for(;e.nodeType===1;){var d=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!c&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(c){if(!e[jr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var h=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Gn(e.nextSibling),e===null)break}return null}function Db(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Gn(e.nextSibling),e===null))return null;return e}function yg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gn(e.nextSibling),e===null))return null;return e}function id(e){return e.data==="$?"||e.data==="$~"}function ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Eb(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var c=function(){t(),i.removeEventListener("DOMContentLoaded",c)};i.addEventListener("DOMContentLoaded",c),e._reactRetry=c}}function Gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var rd=null;function Sg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return Gn(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function wg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function _g(e,t,i){switch(t=tc(i),e){case"html":if(e=t.documentElement,!e)throw Error(a(452));return e;case"head":if(e=t.head,!e)throw Error(a(453));return e;case"body":if(e=t.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function fo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ou(e)}var Un=new Map,Cg=new Set;function nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ba=Q.d;Q.d={f:kb,r:zb,D:Bb,C:Lb,L:Ob,m:Fb,X:Gb,S:Ib,M:Ub};function kb(){var e=Ba.f(),t=Xs();return e||t}function zb(e){var t=gl(e);t!==null&&t.tag===5&&t.type==="form"?Uh(t):Ba.r(e)}var Zl=typeof document>"u"?null:document;function Ag(e,t,i){var c=Zl;if(c&&typeof t=="string"&&t){var d=kn(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof i=="string"&&(d+='[crossorigin="'+i+'"]'),Cg.has(d)||(Cg.add(d),e={rel:e,crossOrigin:i,href:t},c.querySelector(d)===null&&(t=c.createElement("link"),Lt(t,"link",e),Mt(t),c.head.appendChild(t)))}}function Bb(e){Ba.D(e),Ag("dns-prefetch",e,null)}function Lb(e,t){Ba.C(e,t),Ag("preconnect",e,t)}function Ob(e,t,i){Ba.L(e,t,i);var c=Zl;if(c&&e&&t){var d='link[rel="preload"][as="'+kn(t)+'"]';t==="image"&&i&&i.imageSrcSet?(d+='[imagesrcset="'+kn(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(d+='[imagesizes="'+kn(i.imageSizes)+'"]')):d+='[href="'+kn(e)+'"]';var h=d;switch(t){case"style":h=Wl(e);break;case"script":h=Kl(e)}Un.has(h)||(e=v({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),Un.set(h,e),c.querySelector(d)!==null||t==="style"&&c.querySelector(mo(h))||t==="script"&&c.querySelector(ho(h))||(t=c.createElement("link"),Lt(t,"link",e),Mt(t),c.head.appendChild(t)))}}function Fb(e,t){Ba.m(e,t);var i=Zl;if(i&&e){var c=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+kn(c)+'"][href="'+kn(e)+'"]',h=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Kl(e)}if(!Un.has(h)&&(e=v({rel:"modulepreload",href:e},t),Un.set(h,e),i.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(ho(h)))return}c=i.createElement("link"),Lt(c,"link",e),Mt(c),i.head.appendChild(c)}}}function Ib(e,t,i){Ba.S(e,t,i);var c=Zl;if(c&&e){var d=xl(c).hoistableStyles,h=Wl(e);t=t||"default";var b=d.get(h);if(!b){var T={loading:0,preload:null};if(b=c.querySelector(mo(h)))T.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},i),(i=Un.get(h))&&od(e,i);var F=b=c.createElement("link");Mt(F),Lt(F,"link",e),F._p=new Promise(function(Y,$){F.onload=Y,F.onerror=$}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ac(b,t,c)}b={type:"stylesheet",instance:b,count:1,state:T},d.set(h,b)}}}function Gb(e,t){Ba.X(e,t);var i=Zl;if(i&&e){var c=xl(i).hoistableScripts,d=Kl(e),h=c.get(d);h||(h=i.querySelector(ho(d)),h||(e=v({src:e,async:!0},t),(t=Un.get(d))&&sd(e,t),h=i.createElement("script"),Mt(h),Lt(h,"link",e),i.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},c.set(d,h))}}function Ub(e,t){Ba.M(e,t);var i=Zl;if(i&&e){var c=xl(i).hoistableScripts,d=Kl(e),h=c.get(d);h||(h=i.querySelector(ho(d)),h||(e=v({src:e,async:!0,type:"module"},t),(t=Un.get(d))&&sd(e,t),h=i.createElement("script"),Mt(h),Lt(h,"link",e),i.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},c.set(d,h))}}function Rg(e,t,i,c){var d=(d=le.current)?nc(d):null;if(!d)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=Wl(i.href),i=xl(d).hoistableStyles,c=i.get(t),c||(c={type:"style",instance:null,count:0,state:null},i.set(t,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Wl(i.href);var h=xl(d).hoistableStyles,b=h.get(e);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,b),(h=d.querySelector(mo(e)))&&!h._p&&(b.instance=h,b.state.loading=5),Un.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Un.set(e,i),h||Pb(d,e,i,b.state))),t&&c===null)throw Error(a(528,""));return b}if(t&&c!==null)throw Error(a(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Kl(i),i=xl(d).hoistableScripts,c=i.get(t),c||(c={type:"script",instance:null,count:0,state:null},i.set(t,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Wl(e){return'href="'+kn(e)+'"'}function mo(e){return'link[rel="stylesheet"]['+e+"]"}function Ng(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Pb(e,t,i,c){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?c.loading=1:(t=e.createElement("link"),c.preload=t,t.addEventListener("load",function(){return c.loading|=1}),t.addEventListener("error",function(){return c.loading|=2}),Lt(t,"link",i),Mt(t),e.head.appendChild(t))}function Kl(e){return'[src="'+kn(e)+'"]'}function ho(e){return"script[async]"+e}function Tg(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var c=e.querySelector('style[data-href~="'+kn(i.href)+'"]');if(c)return t.instance=c,Mt(c),c;var d=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return c=(e.ownerDocument||e).createElement("style"),Mt(c),Lt(c,"style",d),ac(c,i.precedence,e),t.instance=c;case"stylesheet":d=Wl(i.href);var h=e.querySelector(mo(d));if(h)return t.state.loading|=4,t.instance=h,Mt(h),h;c=Ng(i),(d=Un.get(d))&&od(c,d),h=(e.ownerDocument||e).createElement("link"),Mt(h);var b=h;return b._p=new Promise(function(T,F){b.onload=T,b.onerror=F}),Lt(h,"link",c),t.state.loading|=4,ac(h,i.precedence,e),t.instance=h;case"script":return h=Kl(i.src),(d=e.querySelector(ho(h)))?(t.instance=d,Mt(d),d):(c=i,(d=Un.get(h))&&(c=v({},i),sd(c,d)),e=e.ownerDocument||e,d=e.createElement("script"),Mt(d),Lt(d,"link",c),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(a(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(c=t.instance,t.state.loading|=4,ac(c,i.precedence,e));return t.instance}function ac(e,t,i){for(var c=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,h=d,b=0;b<c.length;b++){var T=c[b];if(T.dataset.precedence===t)h=T;else if(h!==d)break}h?h.parentNode.insertBefore(e,h.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function od(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function sd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ic=null;function jg(e,t,i){if(ic===null){var c=new Map,d=ic=new Map;d.set(i,c)}else d=ic,c=d.get(i),c||(c=new Map,d.set(i,c));if(c.has(e))return c;for(c.set(e,null),i=i.getElementsByTagName(e),d=0;d<i.length;d++){var h=i[d];if(!(h[jr]||h[it]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(t)||"";b=e+b;var T=c.get(b);T?T.push(h):c.set(b,[h])}}return c}function Mg(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function Hb(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Dg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qb(e,t,i,c){if(i.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var d=Wl(c.href),h=t.querySelector(mo(d));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=lc.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=h,Mt(h);return}h=t.ownerDocument||t,c=Ng(c),(d=Un.get(d))&&od(c,d),h=h.createElement("link"),Mt(h);var b=h;b._p=new Promise(function(T,F){b.onload=T,b.onerror=F}),Lt(h,"link",c),i.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=lc.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var cd=0;function Vb(e,t){return e.stylesheets&&e.count===0&&oc(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var c=setTimeout(function(){if(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+t);0<e.imgBytes&&cd===0&&(cd=62500*Ab());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>cd?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(c),clearTimeout(d)}}:null}function lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rc=null;function oc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rc=new Map,t.forEach(Yb,e),rc=null,lc.call(e))}function Yb(e,t){if(!(t.state.loading&4)){var i=rc.get(e);if(i)var c=i.get(null);else{i=new Map,rc.set(e,i);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<d.length;h++){var b=d[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(i.set(b.dataset.precedence,b),c=b)}c&&i.set(null,c)}d=t.instance,b=d.getAttribute("data-precedence"),h=i.get(b)||c,h===c&&i.set(null,d),i.set(b,d),this.count++,c=lc.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),h?h.parentNode.insertBefore(d,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var po={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function Xb(e,t,i,c,d,h,b,T,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zn(0),this.hiddenUpdates=Zn(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Eg(e,t,i,c,d,h,b,T,F,Y,$,ne){return e=new Xb(e,t,i,b,F,Y,$,ne,T),t=1,h===!0&&(t|=24),h=pn(3,null,null,t),e.current=h,h.stateNode=e,t=Uu(),t.refCount++,e.pooledCache=t,t.refCount++,h.memoizedState={element:c,isDehydrated:i,cache:t},Vu(h),e}function kg(e){return e?(e=Nl,e):Nl}function zg(e,t,i,c,d,h){d=kg(d),c.context===null?c.context=d:c.pendingContext=d,c=Qa(t),c.payload={element:i},h=h===void 0?null:h,h!==null&&(c.callback=h),i=$a(e,c,t),i!==null&&(an(i,e,t),Yr(i,e,t))}function Bg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function ud(e,t){Bg(e,t),(e=e.alternate)&&Bg(e,t)}function Lg(e){if(e.tag===13||e.tag===31){var t=Li(e,67108864);t!==null&&an(t,e,67108864),ud(e,67108864)}}function Og(e){if(e.tag===13||e.tag===31){var t=yn();t=dl(t);var i=Li(e,t);i!==null&&an(i,e,t),ud(e,t)}}var sc=!0;function Zb(e,t,i,c){var d=U.T;U.T=null;var h=Q.p;try{Q.p=2,fd(e,t,i,c)}finally{Q.p=h,U.T=d}}function Wb(e,t,i,c){var d=U.T;U.T=null;var h=Q.p;try{Q.p=8,fd(e,t,i,c)}finally{Q.p=h,U.T=d}}function fd(e,t,i,c){if(sc){var d=dd(c);if(d===null)Qf(e,t,c,cc,i),Ig(e,c);else if(Qb(d,e,t,i,c))c.stopPropagation();else if(Ig(e,c),t&4&&-1<Kb.indexOf(e)){for(;d!==null;){var h=gl(d);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=Mn(h.pendingLanes);if(b!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;b;){var F=1<<31-Xe(b);T.entanglements[1]|=F,b&=~F}da(h),(Ge&6)===0&&(Vs=Me()+500,so(0))}}break;case 31:case 13:T=Li(h,2),T!==null&&an(T,h,2),Xs(),ud(h,2)}if(h=dd(c),h===null&&Qf(e,t,c,cc,i),h===d)break;d=h}d!==null&&c.stopPropagation()}else Qf(e,t,c,null,i)}}function dd(e){return e=mu(e),md(e)}var cc=null;function md(e){if(cc=null,e=pl(e),e!==null){var t=f(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=o(t),e!==null)return e;e=null}else if(i===31){if(e=m(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cc=e,null}function Fg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jn()){case un:return 2;case Vt:return 8;case It:case Yt:return 32;case Xt:return 268435456;default:return 32}default:return 32}}var hd=!1,ci=null,ui=null,fi=null,go=new Map,xo=new Map,di=[],Kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ig(e,t){switch(e){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":ui=null;break;case"mouseover":case"mouseout":fi=null;break;case"pointerover":case"pointerout":go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(t.pointerId)}}function vo(e,t,i,c,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:i,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},t!==null&&(t=gl(t),t!==null&&Lg(t)),e):(e.eventSystemFlags|=c,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function Qb(e,t,i,c,d){switch(t){case"focusin":return ci=vo(ci,e,t,i,c,d),!0;case"dragenter":return ui=vo(ui,e,t,i,c,d),!0;case"mouseover":return fi=vo(fi,e,t,i,c,d),!0;case"pointerover":var h=d.pointerId;return go.set(h,vo(go.get(h)||null,e,t,i,c,d)),!0;case"gotpointercapture":return h=d.pointerId,xo.set(h,vo(xo.get(h)||null,e,t,i,c,d)),!0}return!1}function Gg(e){var t=pl(e.target);if(t!==null){var i=f(t);if(i!==null){if(t=i.tag,t===13){if(t=o(i),t!==null){e.blockedOn=t,ns(e.priority,function(){Og(i)});return}}else if(t===31){if(t=m(i),t!==null){e.blockedOn=t,ns(e.priority,function(){Og(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=dd(e.nativeEvent);if(i===null){i=e.nativeEvent;var c=new i.constructor(i.type,i);du=c,i.target.dispatchEvent(c),du=null}else return t=gl(i),t!==null&&Lg(t),e.blockedOn=i,!1;t.shift()}return!0}function Ug(e,t,i){uc(e)&&i.delete(t)}function $b(){hd=!1,ci!==null&&uc(ci)&&(ci=null),ui!==null&&uc(ui)&&(ui=null),fi!==null&&uc(fi)&&(fi=null),go.forEach(Ug),xo.forEach(Ug)}function fc(e,t){e.blockedOn===t&&(e.blockedOn=null,hd||(hd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,$b)))}var dc=null;function Pg(e){dc!==e&&(dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var t=0;t<e.length;t+=3){var i=e[t],c=e[t+1],d=e[t+2];if(typeof c!="function"){if(md(c||i)===null)continue;break}var h=gl(i);h!==null&&(e.splice(t,3),t-=3,df(h,{pending:!0,data:d,method:i.method,action:c},c,d))}}))}function Ql(e){function t(F){return fc(F,e)}ci!==null&&fc(ci,e),ui!==null&&fc(ui,e),fi!==null&&fc(fi,e),go.forEach(t),xo.forEach(t);for(var i=0;i<di.length;i++){var c=di[i];c.blockedOn===e&&(c.blockedOn=null)}for(;0<di.length&&(i=di[0],i.blockedOn===null);)Gg(i),i.blockedOn===null&&di.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(c=0;c<i.length;c+=3){var d=i[c],h=i[c+1],b=d[jt]||null;if(typeof h=="function")b||Pg(i);else if(b){var T=null;if(h&&h.hasAttribute("formAction")){if(d=h,b=h[jt]||null)T=b.formAction;else if(md(d)!==null)continue}else T=b.action;typeof T=="function"?i[c+1]=T:(i.splice(c,3),c-=3),Pg(i)}}}function Hg(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(b){return d=b})},focusReset:"manual",scroll:"manual"})}function t(){d!==null&&(d(),d=null),c||setTimeout(i,20)}function i(){if(!c&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){c=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),d!==null&&(d(),d=null)}}}function pd(e){this._internalRoot=e}mc.prototype.render=pd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));var i=t.current,c=yn();zg(i,c,e,t,null,null)},mc.prototype.unmount=pd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zg(e.current,2,null,e,null,null),Xs(),t[hl]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tr();e={blockedOn:null,target:e,priority:t};for(var i=0;i<di.length&&t!==0&&t<di[i].priority;i++);di.splice(i,0,e),i===0&&Gg(e)}};var qg=n.version;if(qg!=="19.2.4")throw Error(a(527,qg,"19.2.4"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Jb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{mn=hc.inject(Jb),dt=hc}catch{}}return yo.createRoot=function(e,t){if(!s(e))throw Error(a(299));var i=!1,c="",d=Qh,h=$h,b=Jh;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(c=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError)),t=Eg(e,1,!1,null,null,i,c,null,d,h,b,Hg),e[hl]=t.current,Kf(e),new pd(t)},yo.hydrateRoot=function(e,t,i){if(!s(e))throw Error(a(299));var c=!1,d="",h=Qh,b=$h,T=Jh,F=null;return i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(b=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.formState!==void 0&&(F=i.formState)),t=Eg(e,1,!0,t,i??null,c,d,F,h,b,T,Hg),t.context=kg(null),i=t.current,c=yn(),c=dl(c),d=Qa(c),d.callback=null,$a(i,d,c),i=c,t.current.lanes=i,Qt(t,i),da(t),e[hl]=t.current,Kf(e),new mc(t)},yo.version="19.2.4",yo}var ex;function uy(){if(ex)return vd.exports;ex=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),vd.exports=cy(),vd.exports}var fy=uy();const dy=N1(fy);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=(...r)=>r.filter((n,l,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===l).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,l,a)=>a?a.toUpperCase():l.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=r=>{const n=hy(r);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var py={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=r=>{for(const n in r)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=_.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:s="",children:f,iconNode:o,...m},x)=>_.createElement("svg",{ref:x,...py,width:n,height:n,stroke:r,strokeWidth:a?Number(l)*24/Number(n):l,className:M1("lucide",s),...!f&&!gy(m)&&{"aria-hidden":"true"},...m},[...o.map(([p,g])=>_.createElement(p,g)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=(r,n)=>{const l=_.forwardRef(({className:a,...s},f)=>_.createElement(xy,{ref:f,iconNode:n,className:M1(`lucide-${my(tx(r))}`,`lucide-${r}`,a),...s}));return l.displayName=tx(r),l};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],by=Jo("atom",vy);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Sy=Jo("info",yy);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],_y=Jo("layers",wy);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Ay=Jo("palette",Cy);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ny=Jo("sparkles",Ry),Ty=[{id:"shaders",label:"Shaders",icon:_y},{id:"demos",label:"Demos",icon:Ny},{id:"playground",label:"Play",icon:Ay},{id:"particle",label:"Particle",icon:by}],jy=({activeCategory:r,onCategoryChange:n})=>u.jsxs("div",{className:"w-16 flex-shrink-0 flex flex-col items-center h-full py-4 gap-1",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center mb-4",children:u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 14 14",fill:"none",children:[u.jsx("circle",{cx:"7",cy:"7",r:"3",stroke:"white",strokeWidth:"1.5"}),u.jsx("circle",{cx:"7",cy:"7",r:"6",stroke:"white",strokeWidth:"0.5",opacity:"0.4"})]})}),Ty.map(l=>{const a=r===l.id;return u.jsxs("button",{onClick:()=>n(l.id),className:"flex flex-col items-center gap-1 transition-colors ",children:[u.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${a?"bg-neutral-800 text-white":"text-neutral-400 hover:bg-neutral-100"}`,children:u.jsx(l.icon,{size:18})}),u.jsx("span",{className:`text-[8px] uppercase tracking-wide font-medium ${a?"text-neutral-700":"text-neutral-400"}`,children:l.label})]},l.id)}),u.jsx("div",{className:"flex-1"}),u.jsxs("div",{className:"flex flex-col items-center gap-1",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center text-neutral-400 hover:bg-neutral-100 transition-colors cursor-default",children:u.jsx(Sy,{size:18})}),u.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),u.jsx("span",{className:"text-[7px] text-neutral-400",children:"GPU"})]})]}),My=[{id:"vortex",name:"Vortex Portal",description:"Spiral energy field",technique:"FBM + Polar Warp"},{id:"lumina",name:"Lumina Flow",description:"Domain warping fluid",technique:"Multi-layer FBM"},{id:"isometric",name:"Isometric Flow",description:"Dynamic block grid",technique:"DDA Raymarching"},{id:"flowfield",name:"Flow Field",description:"Vector field visualization",technique:"Curl Noise + LIC"},{id:"tunnel",name:"Warp Tunnel",description:"Volumetric wormhole",technique:"Raymarching + FBM"},{id:"aura",name:"Noise Aura",description:"Volumetric nebula",technique:"Vol. Accumulation"},{id:"neon",name:"Neon Noise",description:"Psychedelic color flow",technique:"FBM + Domain Warp"},{id:"fluid",name:"Fluid Flow",description:"Double-warped liquid",technique:"Dual Domain Warp"},{id:"neuro",name:"NeuroFlow",description:"Cyberpunk energy lines",technique:"Simplex + Hue Shift"},{id:"neonwave",name:"Neonwave",description:"Neon terrain flight",technique:"Plane Stacking + FBM"},{id:"neontext",name:"Neon Text",description:"SDF text on sphere",technique:"SDF + Raymarching"},{id:"aurora",name:"Aurora Cloudscape",description:"Volumetric aurora",technique:"Soft Clouds + Waves"},{id:"hypergrid",name:"Hyper Grid",description:"Warp speed grid cells",technique:"Grid March + Rotation"},{id:"jellyfish",name:"Luminescence",description:"Bioluminescent jellyfish",technique:"SDF + Volumetric"},{id:"trainjourney",name:"Train Journey",description:"Parallax mountain train",technique:"FBM + Parallax Layers"},{id:"horizon",name:"Horizon",description:"Parallax mountain scape",technique:"FBM + Depth Parallax"}],Dy=({active:r,onSelect:n})=>{const l=_.useRef(null);return _.useEffect(()=>{var a;(a=l.current)==null||a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[r]),u.jsx("div",{className:"flex gap-1.5 overflow-x-auto scrollbar-hide px-5 py-3 flex-shrink-0",children:My.map(a=>{const s=r===a.id;return u.jsx("button",{ref:s?l:null,onClick:()=>n(a.id),className:`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${s?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:a.name},a.id)})})},Ey=({guide:r,onClose:n})=>(_.useEffect(()=>{const l=a=>{a.key==="Escape"&&n()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[n]),u.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-6",onClick:n,children:[u.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-sm"}),u.jsxs("div",{className:"relative w-full max-w-[640px] max-h-[85vh] bg-white rounded-3xl flex flex-col overflow-hidden",onClick:l=>l.stopPropagation(),children:[u.jsxs("div",{className:"flex items-center gap-3 px-6 py-4 flex-shrink-0",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[14px] font-semibold text-neutral-800",children:r.title}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:r.subtitle})]}),u.jsx("p",{className:"text-[11px] text-neutral-500 mt-0.5",children:r.oneLiner})]}),u.jsx("button",{onClick:n,className:"w-7 h-7 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors flex-shrink-0",children:u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:u.jsx("path",{d:"M2 2L10 10M10 2L2 10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto min-h-0 px-6 pb-6",children:[u.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"What You See"}),u.jsx("p",{className:"text-[11px] text-neutral-600 leading-[1.7]",children:r.whatYouSee})]}),u.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Rendering Pipeline"}),u.jsx("div",{className:"flex flex-col gap-2",children:r.pipeline.map(l=>u.jsx("div",{className:"bg-white rounded-xl p-3",children:u.jsxs("div",{className:"flex items-start gap-2.5",children:[u.jsx("span",{className:"text-[9px] font-semibold text-neutral-300 mt-px flex-shrink-0 w-4",children:l.step}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("div",{className:"text-[10px] font-semibold text-neutral-700 mb-1",children:l.title}),u.jsx("p",{className:"text-[10px] text-neutral-500 leading-[1.6]",children:l.description}),l.glsl&&u.jsx("pre",{className:"mt-2 bg-neutral-50 rounded-lg px-2.5 py-1.5 overflow-x-auto",children:u.jsx("code",{className:"text-[9px] font-mono text-neutral-500 leading-relaxed whitespace-pre",children:l.glsl})})]})]})},l.step))})]}),u.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Core Concepts"}),u.jsx("div",{className:"flex flex-col gap-2",children:r.concepts.map(l=>u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsxs("div",{className:"flex items-center gap-1.5 mb-1.5",children:[u.jsx("span",{className:"text-[10px] font-semibold text-neutral-700",children:l.name}),u.jsx("span",{className:"text-[8px] px-1 py-0.5 rounded bg-neutral-100 text-neutral-400 font-mono",children:l.nameEN})]}),u.jsx("div",{className:"bg-neutral-50 rounded-lg px-2.5 py-2 mb-2",children:u.jsx("p",{className:"text-[10px] text-neutral-600 leading-[1.6] italic",children:l.analogy})}),u.jsx("p",{className:"text-[10px] text-neutral-500 leading-[1.6] mb-1.5",children:l.explanation}),u.jsxs("div",{className:"flex items-start gap-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 flex-shrink-0",children:"Why:"}),u.jsx("span",{className:"text-[9px] text-neutral-500 leading-[1.5]",children:l.whyItMatters})]})]},l.nameEN))})]}),u.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Real-World Applications"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:r.applications.map(l=>u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[10px] font-semibold text-neutral-700 mb-1",children:l.field}),u.jsx("p",{className:"text-[9px] text-neutral-500 leading-[1.5]",children:l.examples})]},l.field))})]}),u.jsxs("div",{className:"bg-neutral-800 rounded-2xl p-4",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-500 uppercase tracking-wide mb-2",children:"Key Insight"}),u.jsx("p",{className:"text-[11px] text-neutral-300 leading-[1.7]",children:r.keyInsight})]})]})]})]})),ky={flowfield:{id:"flowfield",title:"Flow Field",subtitle:"向量场可视化",oneLiner:"用噪声生成「风向地图」，再让粒子沿着风向留下轨迹",whatYouSee:"想象气象台的风速图——颜色代表速度快慢（蓝→绿→黄→红），条纹代表风的流动轨迹。每个像素都在问：「这里的风往哪吹？」然后顺着风向往回看，采样噪声留下运动模糊的条纹。多个时间相位叠加，产生连续流动的动画效果。",pipeline:[{step:"01",title:"构建向量场",description:"用 FBM 噪声生成一个「势场」（potential field），然后计算它的旋度（curl）得到无散度的向量场。就像气压图→风向：高压流向低压，旋度确保风不会凭空消失或产生。加上纬向基础流（zonal flow）模拟地球大气环流。",glsl:`vec2 curl = vec2((n3 - n1)/eps, -(n2 - n1)/eps);
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
col *= mix(1.0, 0.5 + 0.5*vig, uVignette);`}],concepts:[{name:"参数化程序生成",nameEN:"Parametric Procedural Generation",analogy:"一个菜谱可以做出无限种菜——同样的步骤，换食材（颜色）、调火候（速度）、改分量（层数），就是完全不同的风味。",explanation:"将硬编码的 14 层替换为参数驱动的循环：层数、深度、色彩都成为 uniform 变量。GPU 在每帧根据当前参数实时计算所有层，无需预烘焙。这是从「固定作品」到「生成系统」的本质跃迁。",whyItMatters:"参数化是程序生成的灵魂。一个参数化的 shader 可以生成无限变体——日落沙漠、极地冰川、午夜幽谷——只需调几个滑块。这正是游戏和影视中 PCG（程序化内容生成）的核心理念。"},{name:"运动视差",nameEN:"Motion Parallax",analogy:"坐车看风景：路边的树飞速后退，远山几乎不动。大脑通过速度差判断远近。",explanation:"每层的滚动速度 = t / dist，dist 从 1（最近）到 100（最远），形成二次曲线分布（nearRatio²）。这模拟了透视投影中「角速度与距离成反比」的物理规律，是 2D 画面中最强的深度线索。",whyItMatters:"运动视差是人类日常感知深度的主要方式之一（仅次于双目视差）。掌握这个原理，你可以在任何 2D 媒介中创造令人信服的 3D 空间感——网页、游戏、动画都适用。"},{name:"FBM 分形地形",nameEN:"FBM Fractal Terrain",analogy:"从太空看地球：大陆板块是最大的起伏，山脉是中等起伏，岩石是小起伏——它们在不同尺度上自相似。",explanation:"FBM 叠加 8 层噪声，每层频率 ×2、振幅 ×0.7。低频层决定山脊走势，高频层添加细节。0.7 的衰减比产生自然的 1/f 噪声特征，这与真实地形的功率谱分布惊人吻合。",whyItMatters:"FBM 是程序化地形生成的基石，从 Minecraft 到 3A 大作的开放世界都在使用。理解频率-振幅关系，你就能生成山脉、云层、海浪——自然界的大部分纹理都是分形的。"}],applications:[{field:"动态壁纸",examples:"桌面/手机动态壁纸、数字相框、LED 墙面装饰"},{field:"游戏背景",examples:"横版游戏远景、主菜单动态背景、加载界面"},{field:"网页设计",examples:"着陆页首屏背景、博客 hero 区域、产品展示动态背景"},{field:"直播/视频",examples:"直播间虚拟背景、视频转场、音乐可视化底图"}],keyInsight:"Horizon 的核心洞察是「参数化 = 从作品到工具的跃迁」。Train Journey 是一幅精心手绘的画——14 层手调颜色、固定的火车和桥梁；Horizon 是一台画画机器——用循环和参数取代硬编码，用三色渐变取代 40+ 个 RGB 值。看似简化，实则升维：一个固定作品只有一种形态，一个参数化系统拥有无限变体。这正是程序化生成（Procedural Generation）的哲学精髓——不要画一棵树，要写一个长树的规则。从游戏世界生成到 AI 辅助设计，参数化思维是通往「用代码创造世界」的第一步。"}},zy={gooey:{id:"gooey",title:"Gooey Overlay",subtitle:"滚动驱动液态形变",oneLiner:"基于 Simplex Noise 的滚动驱动液态形变动画——让噪声变成液体，让滚动变成引力",whatYouSee:"屏幕上有 9 列垂直的液滴通道。当你滚动页面时，就像开启了引力——每条通道中的液滴开始下落，形成粘稠的水滴形态。你看到的液态变形效果叫 **Gooey Effect / Metaball Effect**。滴落的时机、速度都略有不同，创造出有机的、不可预测的视觉节奏。背景的噪声纹理也随滚动逐渐上涌，像是液体从底部慢慢填满整个画面。",pipeline:[{step:"01",title:"生成噪声基底 (Simplex Noise)",description:"用 Simplex Noise 生成有机纹理——不是完全随机的噪点，而是有连续性、有结构的灰度分布。就像在白纸上撒盐粒，每个位置的盐粒密度不同，形成自然的纹理基底。",glsl:`// Simplex Noise 生成有机纹理
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
});`}],concepts:[{name:"feComponentTransfer",nameEN:"SVG feComponentTransfer Filter",analogy:"像 Photoshop 的「反相」——但只反转透明度通道，文字变透明、背景变不透明",explanation:"SVG 滤镜原语 feComponentTransfer 允许对 RGBA 四个通道分别做映射变换。feFuncA type='table' tableValues='10 0' 将 alpha 值做线性插值反转：0→10（clamp 到 1），1→0。这是实现 Text Knockout 的关键，比 mix-blend-mode 方案更可控、文字保持可选。",whyItMatters:"知道 feComponentTransfer 后，你就能对 AI 说「用 SVG feComponentTransfer 反转 alpha 通道实现 text knockout」——而不是说「让文字变成透明的，能看到后面的视频」。"},{name:"background-clip: text",nameEN:"CSS background-clip: text",analogy:"把背景图案用文字形状做饼干模具「切割」——只在文字轮廓内显示背景",explanation:"CSS background-clip: text 将元素背景裁切到文字前景区域。配合 color: transparent 使用，可以让任意背景（图片、渐变、视频截图）填充文字。这是 CSS 原生的 Text Fill 方案，但不能直接填充动态视频——需要配合本 demo 的滤镜方案。",whyItMatters:"知道 background-clip: text 后，你就能对 AI 说「用 background-clip: text + 渐变背景做文字填充效果」——精准描述文字内显示图案的需求。"},{name:"容器查询单位",nameEN:"Container Query Units (cqw)",analogy:"vw 相对于视口宽度，cqw 相对于容器宽度——让文字大小跟随容器而非窗口缩放",explanation:"CSS Container Query Units（cqw, cqh 等）让尺寸相对于最近的 container-type: inline-size 祖先。font-size: 30cqw 意味着文字宽度始终是容器的 30%，无论容器在页面中多大。比 vw 更灵活，是组件级响应式设计的基础。",whyItMatters:"知道 cqw 后，你就能对 AI 说「文字大小用 clamp(2rem, 30cqw, 25rem) 配合 container-type: inline-size」——实现容器级别的响应式排版。"},{name:"CSS Grid 层叠",nameEN:"CSS Grid Stacking",analogy:"所有子元素放在同一个格子里，像叠卡片一样——比 position: absolute 更优雅的重叠方案",explanation:"通过 display: grid 配合 grid-area: 1/1 让多个子元素重叠在同一网格区域。相比 absolute 定位，Grid Stacking 不脱离文档流、自动参与尺寸计算、更易维护。是现代 CSS 中实现元素重叠的推荐方式。",whyItMatters:"知道 CSS Grid Stacking 后，你就能对 AI 说「用 grid-area: 1/1 做元素层叠，替代 absolute 定位」——这是更现代、更健壮的重叠方案。"}],applications:[{field:"品牌首页 Hero",examples:"用视频填充品牌名称，创造沉浸式的第一印象"},{field:"数据可视化标题",examples:"用实时数据流动画填充标题文字，暗示「动态数据」的概念"},{field:"交互式海报",examples:"文字内显示用户摄像头画面或交互式 Canvas，创造参与感"},{field:"无障碍视觉设计",examples:"视觉效果震撼的同时文字保持可选、可复制、屏幕阅读器可读"}],keyInsight:"**视觉效果和语义可访问性不是对立的**。这个 demo 证明：文字可以同时是「视觉容器」（显示视频）和「语义文本」（可选择、可复制、可被屏幕阅读器读取）。核心术语链：**feComponentTransfer**（alpha 通道反转 → text knockout）→ **Grid Stacking**（grid-area: 1/1 → 元素层叠）→ **background-clip: text**（背景裁切 → 文字填充）→ **Container Query Units**（cqw → 容器响应式排版）。关键洞察：SVG 滤镜操作的是渲染层，不影响 DOM 层——所以文字「看起来」是视频，「本质上」仍是真实文本。"}},By={flip:{id:"flip",title:"FLIP",subtitle:"布局过渡动画",oneLiner:"基于 FLIP（First-Last-Invert-Play）技术的布局状态切换动画——让 CSS 布局变化拥有 60fps 的流畅过渡",whatYouSee:'四个彩色字母 F、L、I、P 在不同布局间平滑切换：先是水平排列拼成 "FLIP for GSAP"（Final 布局），然后变为无背景的纯文字（Plain），接着四列等宽排列（Columns），最后变成 2×2 网格（Grid）。每次布局切换时，字母从旧位置滑动到新位置，"for" 和 "GSAP" 文字在 Final 状态淡入、离开时淡出。切到 Final 时字母还会旋转一圈。这种效果在前端叫 **Layout Animation（布局动画）**。',pipeline:[{step:"01",title:"捕获初始状态 (First)",description:"在任何布局变化发生之前，用 Flip.getState() 快照所有元素的当前位置、尺寸、颜色。这一步对应 FLIP 中的 F（First）——记录「动画起点在哪」。",glsl:`// 捕获所有参与动画的元素状态
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
// 极少数超大/超小 → 视觉"惊喜"`}],concepts:[{name:"正态分布",nameEN:"Normal / Gaussian Distribution",analogy:"人群自然聚集的规律——大多数人站在中心附近，越往边缘人越少，形成钟形曲线",explanation:"正态分布（高斯分布）是自然界最常见的概率分布，用均值 μ 和标准差 σ 描述。68% 的值落在 μ±σ 内，95% 落在 μ±2σ 内。在 Canvas 中通过 Box-Muller 变换从 Math.random() 生成。它是生成艺术中创造「自然聚集感」的核心工具。",whyItMatters:"知道正态分布后，你就能对 AI 说「用正态分布采样位置，mean 在画布中心，stddev 为宽度的 1/4」——精确控制粒子的聚散效果。"},{name:"Box-Muller 变换",nameEN:"Box-Muller Transform",analogy:"把「掷骰子」（均匀分布）变成「扔飞镖」（中心密、边缘疏）的数学魔法",explanation:"Box-Muller 变换将两个独立的 [0,1] 均匀分布随机数转换为标准正态分布。公式：z = √(-2·ln(u₁)) · cos(2π·u₂)。这是在浏览器中生成正态分布随机数的最简单方法，因为 JavaScript 只提供均匀分布的 Math.random()。",whyItMatters:"知道 Box-Muller 后，你就能对 AI 说「用 Box-Muller 变换生成正态分布随机数」——而不是用一堆 Math.random() 相加来近似。"},{name:"多段颜色渐变",nameEN:"Multi-Stop Color Gradient",analogy:"调色板上的多个颜色锚点——在锚点之间做线性插值，就能生成任意位置的颜色",explanation:"定义若干 { position, color } 色标，对任意 t∈[0,1] 找到左右两个最近的色标并做 RGB 线性插值。这和 CSS linear-gradient 的原理一致。通过 pow(t, gamma) 做非线性映射可以偏移色域分布。",whyItMatters:"知道 multi-stop gradient 后，你就能对 AI 说「做一个 7 段色标的渐变映射，gamma 1.6 偏移向暖色调」——精确控制生成艺术的色彩空间。"},{name:"生成艺术",nameEN:"Generative Art",analogy:"艺术家不画每一笔，而是设计「规则」——让算法在规则内自由创作，每次运行结果不同",explanation:"Generative Art 是指由算法或规则系统生成的艺术作品。核心思想是：艺术家定义参数空间（分布、颜色、形状规则），程序在空间中采样生成作品。每次运行的随机种子不同，作品就不同——但风格一致。",whyItMatters:"知道 Generative Art 这个术语后，你就能搜索 Processing、p5.js、Canvas generative art 等资源，进入一个完整的创意编程社区。"}],applications:[{field:"数据艺术",examples:"将真实数据（气温、股价、人口）映射为颜色和密度，让数据变成可感知的视觉作品"},{field:"动态壁纸",examples:"每次加载生成不同的抽象画面，作为网站背景或桌面壁纸"},{field:"NFT / 数字收藏",examples:"链上存储生成参数，每个 token 对应唯一的视觉输出（Art Blocks 模式）"},{field:"品牌视觉系统",examples:"用品牌色生成渐变色标，为每张名片/海报生成独一无二的抽象背景"}],keyInsight:"**生成艺术的本质是「约束下的自由」**。正态分布提供了结构（中心聚集），随机扰动提供了变化（每次不同），多段渐变提供了氛围（色彩情绪）。三者叠加：有序 + 无序 = 有机。核心术语链：**Normal Distribution**（控制空间密度）→ **Box-Muller Transform**（生成正态随机数）→ **Multi-Stop Gradient**（颜色映射）→ **Alpha Compositing**（密度→饱和度的自然转化）。记住：**最好的生成艺术来自简单规则的叠加，而非复杂规则的堆砌**。"}},Ly={fission:{id:"fission",title:"Fission",subtitle:"粒子分裂聚合系统",oneLiner:"基于 Canvas 2D + requestAnimationFrame 的粒子动画系统——用 lerp 插值驱动粒子的放大、分裂、散开、聚合、缩小全生命周期",whatYouSee:"一个发光圆点在屏幕中央出现并缓慢放大，然后突然「分裂」成多个小圆点，沿圆形均匀散开。散开后，所有粒子又被「吸引」回中心聚合为一个，缩小消失后重新开始。整个过程流畅自然，带有惯性缓动。这种效果叫 **Particle System（粒子系统）**，核心是每帧用 **Lerp（线性插值）** 让当前值趋近目标值，天然产生缓动效果。",pipeline:[{step:"01",title:"粒子数据模型 (Particle Data Model)",description:"每个粒子是一个对象，包含当前状态（x, y, radius）和目标状态（targetX, targetY, targetRadius）。动画不直接设置位置，而是设置「目标」——粒子自己会慢慢靠过去。这种「目标驱动」的模型让所有动画效果都归结为修改 target 值。",glsl:`interface Particle {
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
};`}],concepts:[{name:"交错动画",nameEN:"Staggered Animation",analogy:"往池塘里扔一颗石子——水波从落点向外一圈一圈扩散，远处的涟漪比近处的晚到达",explanation:"Staggered Animation 是让多个元素按照某种规则（距离、索引、随机）依次启动动画，而非同时开始。核心公式：localT = (globalT - delay) / (1 - delay)，delay 由元素与锚点（如中心）的距离决定。delay 越大元素启动越晚，视觉上形成传播波。这是 Motion Design 中最常用的编排手法之一。",whyItMatters:"知道 Staggered Animation 后，你就能对 AI 说「用 stagger delay 按距中心距离编排动画，形成涟漪扩散效果」——而不是说「那种一个一个冒出来的效果」。"},{name:"缓动函数",nameEN:"Easing Functions",analogy:"汽车的油门和刹车——不是匀速从 A 到 B，而是先加速再减速，动作有「呼吸感」",explanation:"缓动函数将线性的 [0,1] 时间映射为非线性的进度值。easeInOutQuart（四次方）让动画「慢-快-慢」，适合整体进度；easeOutQuint（五次方出）让动画快速启动后缓慢停下，适合单个粒子到位；easeInOutCubic（三次方）提供中等力度的缓动，适合变形过程。不同阶段选择不同缓动函数是动效精细调控的关键。",whyItMatters:"知道 easing functions 后，你就能对 AI 说「扩散阶段用 easeInOutQuart，落位用 easeOutQuint，变形用 easeInOutCubic」——精确控制每个阶段的运动节奏。"},{name:"形状变形",nameEN:"Shape Morphing",analogy:"一块橡皮泥被慢慢捏成另一个形状——始终是同一块材料，只是外形在连续变化",explanation:"Shape Morphing 是让一个图形连续变形为另一个图形。本效果中每个圆点 morph 为十字形：圆的半径缩小（消失）的同时线段长度增长（出现），中间过程是「有核心的短十字」。关键是所有几何参数（半径、臂长、线粗）都由同一个 morphT ∈ [0,1] 驱动，保证变形的连贯性。",whyItMatters:"知道 Shape Morphing 后，你就能对 AI 说「做 circle-to-cross 的 shape morphing，用单一参数 t 同时驱动半径缩小和臂长增长」——精确描述粒子的形变过程。"},{name:"Canvas 2D 即时模式渲染",nameEN:"Canvas 2D Immediate Mode Rendering",analogy:"在白板上画画——每次先擦干净再重新画一帧，画什么完全由代码控制",explanation:"Canvas 2D 的 API（arc、moveTo、lineTo、stroke、fill）是即时模式——没有保留的场景图，每帧必须重新绘制所有内容。clearRect 清空画布后，逐点计算位置和形状并绘制。这种模式适合大量简单几何体的动画（如数百个圆点），因为没有 DOM 节点的创建销毁开销。",whyItMatters:"知道 Canvas 2D immediate mode 后，你就能对 AI 说「用 Canvas 2D 即时模式渲染网格动画，每帧 clearRect + 逐点绘制」——这是处理大量粒子的最高效方案。"}],applications:[{field:"页面加载与启动",examples:"网站首屏的网格揭示动画、App 启动画面的点阵扩散、背景网格的渐进出现"},{field:"数据可视化",examples:"散点图到热力图的 morphing 过渡、网格布局的展开动画、矩阵数据的波纹填充"},{field:"UI 过渡",examples:"网格布局视图的出场动画、卡片列表的交错入场、瀑布流的涟漪加载"},{field:"创意背景",examples:"科技感的动态网格背景、交互式点阵装饰、品牌 Landing Page 的呼吸网格"}],keyInsight:"**点阵→网格变形的本质是「交错编排 + 单粒子形变」**。数百个圆点不是各做各的动画——它们共享一个全局进度条，每个点根据「离中心的距离」获得不同的延迟偏移，形成涟漪般的传播波。形变阶段，每个圆点用同一个 morphT 参数同时驱动半径缩小和臂长增长，实现 circle→cross 的连续变形。核心术语链：**Staggered Animation**（交错编排）→ **Easing Functions**（缓动曲线）→ **Shape Morphing**（形状变形）→ **Canvas 2D Immediate Mode**（即时渲染）。记住：**最自然的群体动画不是「同时开始」而是「依次启动」——一个简单的距离延迟就能把机械的全体运动变成有机的传播波浪**。"}},Oy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Fy=`
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
`,nx=r=>{const n=parseInt(r.replace("#",""),16),l=(n>>16&255)/255,a=(n>>8&255)/255,s=(n&255)/255;return[l,a,s]},Iy=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o)return;const m=(D,B)=>{const E=o.createShader(B);return E?(o.shaderSource(E,D),o.compileShader(E),o.getShaderParameter(E,o.COMPILE_STATUS)?E:(o.deleteShader(E),null)):null},x=m(Oy,o.VERTEX_SHADER),p=m(Fy,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(!g)return;o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"iResolution"),w=o.getUniformLocation(g,"iTime"),N=o.getUniformLocation(g,"uColor1"),j=o.getUniformLocation(g,"uColor2"),A=o.getUniformLocation(g,"uSpeed"),C=o.getUniformLocation(g,"uDensity"),z=o.getUniformLocation(g,"uSuction");let M=!0;const k=()=>{if(!M)return;const D=f.clientWidth*window.devicePixelRatio,B=f.clientHeight*window.devicePixelRatio;(f.width!==D||f.height!==B)&&(f.width=D,f.height=B,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const E=(Date.now()-a.current)/1e3,L=s.current,G=nx(L.color1),W=nx(L.color2);o.uniform2f(R,f.width,f.height),o.uniform1f(w,E),o.uniform3f(N,G[0],G[1],G[2]),o.uniform3f(j,W[0],W[1],W[2]),o.uniform1f(A,L.speed),o.uniform1f(C,L.density),o.uniform1f(z,L.suction),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(k)};return k(),()=>{M=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},ax=[{id:"arcane",label:"Arcane",c1:"#8b5cf6",c2:"#06b6d4"},{id:"biohazard",label:"Biohazard",c1:"#4ade80",c2:"#022c22"},{id:"inferno",label:"Inferno",c1:"#f59e0b",c2:"#b91c1c"},{id:"void",label:"The Void",c1:"#ffffff",c2:"#000000"}],wd=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(1)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Gy=({params:r,onChange:n})=>{const l=ax.find(a=>a.c1===r.color1&&a.c2===r.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(wd,{label:"Flow Speed",value:r.speed,min:0,max:5,step:.1,onChange:a=>n({...r,speed:a})}),u.jsx(wd,{label:"Twist Intensity",value:r.suction,min:0,max:3,step:.1,onChange:a=>n({...r,suction:a})}),u.jsx(wd,{label:"Noise Density",value:r.density,min:1,max:10,step:.5,onChange:a=>n({...r,density:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Resonance"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:ax.map(a=>u.jsx("button",{onClick:()=>n({...r,color1:a.c1,color2:a.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===a.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${a.c1}, ${a.c2})`},title:a.label},a.id))}),l&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label})]})]})},Uy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Py=`
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
`,_d=r=>{const n=parseInt(r.slice(1,3),16)/255,l=parseInt(r.slice(3,5),16)/255,a=parseInt(r.slice(5,7),16)/255;return[n,l,a]},Hy=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o)return;const m=(B,E)=>{const L=o.createShader(E);return L?(o.shaderSource(L,B),o.compileShader(L),o.getShaderParameter(L,o.COMPILE_STATUS)?L:(o.deleteShader(L),null)):null},x=m(Uy,o.VERTEX_SHADER),p=m(Py,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(!g)return;o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"iResolution"),w=o.getUniformLocation(g,"iTime"),N=o.getUniformLocation(g,"u_speed"),j=o.getUniformLocation(g,"u_zoom"),A=o.getUniformLocation(g,"u_warpStrength"),C=o.getUniformLocation(g,"u_color1"),z=o.getUniformLocation(g,"u_color2"),M=o.getUniformLocation(g,"u_color3");let k=!0;const D=()=>{if(!k)return;const B=f.clientWidth*window.devicePixelRatio,E=f.clientHeight*window.devicePixelRatio;(f.width!==B||f.height!==E)&&(f.width=B,f.height=E,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const L=(Date.now()-a.current)/1e3,G=s.current,W=_d(G.color1),K=_d(G.color2),q=_d(G.color3);o.uniform2f(R,f.width,f.height),o.uniform1f(w,L),o.uniform1f(N,G.speed),o.uniform1f(j,G.zoom),o.uniform1f(A,G.warpStrength),o.uniform3f(C,W[0],W[1],W[2]),o.uniform3f(z,K[0],K[1],K[2]),o.uniform3f(M,q[0],q[1],q[2]),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(D)};return D(),()=>{k=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},ix=[{id:"ocean",label:"Deep Ocean",c1:"#000d33",c2:"#1a664d",c3:"#ffcc33"},{id:"sunset",label:"Sunset",c1:"#1a0a2e",c2:"#b44d12",c3:"#f5d442"},{id:"aurora",label:"Aurora",c1:"#0a1628",c2:"#2dd4bf",c3:"#a78bfa"},{id:"midnight",label:"Midnight",c1:"#0f172a",c2:"#334155",c3:"#e2e8f0"}],Cd=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(s<.1?2:1)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),qy=({params:r,onChange:n})=>{const l=ix.find(a=>a.c1===r.color1&&a.c2===r.color2&&a.c3===r.color3);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Cd,{label:"Flow Speed",value:r.speed,min:0,max:2,step:.01,onChange:a=>n({...r,speed:a})}),u.jsx(Cd,{label:"Zoom / Scale",value:r.zoom,min:.5,max:10,step:.1,onChange:a=>n({...r,zoom:a})}),u.jsx(Cd,{label:"Warp Strength",value:r.warpStrength,min:0,max:8,step:.1,onChange:a=>n({...r,warpStrength:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Theme Presets"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:ix.map(a=>u.jsx("button",{onClick:()=>n({...r,color1:a.c1,color2:a.c2,color3:a.c3}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===a.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${a.c1}, ${a.c2}, ${a.c3})`},title:a.label},a.id))}),l&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Custom Palette"}),u.jsx("div",{className:"flex flex-col gap-2",children:[{key:"color1",label:"Base"},{key:"color2",label:"Mid"},{key:"color3",label:"Highlight"}].map(({key:a,label:s})=>u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 w-12",children:s}),u.jsxs("div",{className:"flex-1 flex items-center gap-1.5 bg-neutral-50 rounded-lg px-2 py-1",children:[u.jsx("input",{type:"color",value:r[a],onChange:f=>n({...r,[a]:f.target.value}),className:"w-4 h-4 rounded cursor-pointer bg-transparent p-0",style:{border:"none"}}),u.jsx("span",{className:"text-[9px] font-mono text-neutral-500",children:r[a]})]})]},a))})]})]})},Vy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Yy=`
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
`,Xy=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r),f=_.useRef({x:.5,y:.5});return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const o=n.current;if(!o)return;const m=x=>{const p=o.getBoundingClientRect();f.current={x:(x.clientX-p.left)/p.width*2-1,y:-((x.clientY-p.top)/p.height*2-1)}};return o.addEventListener("mousemove",m),()=>o.removeEventListener("mousemove",m)},[]),_.useEffect(()=>{const o=n.current;if(!o)return;const m=o.getContext("webgl");if(!m)return;const x=(G,W)=>{const K=m.createShader(W);return K?(m.shaderSource(K,G),m.compileShader(K),m.getShaderParameter(K,m.COMPILE_STATUS)?K:(m.deleteShader(K),null)):null},p=x(Vy,m.VERTEX_SHADER),g=x(Yy,m.FRAGMENT_SHADER);if(!p||!g)return;const v=m.createProgram();if(!v)return;m.attachShader(v,p),m.attachShader(v,g),m.linkProgram(v),m.useProgram(v);const S=new Float32Array([-1,-1,1,-1,-1,1,1,1]),y=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,y),m.bufferData(m.ARRAY_BUFFER,S,m.STATIC_DRAW);const R=m.getAttribLocation(v,"position");m.enableVertexAttribArray(R),m.vertexAttribPointer(R,2,m.FLOAT,!1,0,0);const w=m.getUniformLocation(v,"iResolution"),N=m.getUniformLocation(v,"iTime"),j=m.getUniformLocation(v,"iMouse"),A=m.getUniformLocation(v,"uBlockSize"),C=m.getUniformLocation(v,"uSpacing"),z=m.getUniformLocation(v,"uTimeSpeed"),M=m.getUniformLocation(v,"uMouseInfluence"),k=m.getUniformLocation(v,"uFogStart"),D=m.getUniformLocation(v,"uFogEnd"),B=m.getUniformLocation(v,"uCamDistance");let E=!0;const L=()=>{if(!E)return;const G=o.clientWidth*window.devicePixelRatio,W=o.clientHeight*window.devicePixelRatio;(o.width!==G||o.height!==W)&&(o.width=G,o.height=W,m.viewport(0,0,m.drawingBufferWidth,m.drawingBufferHeight));const K=(Date.now()-a.current)/1e3,q=s.current;m.uniform2f(w,o.width,o.height),m.uniform1f(N,K),m.uniform2f(j,f.current.x,f.current.y),m.uniform1f(A,q.blockSize),m.uniform1f(C,q.spacing),m.uniform1f(z,q.timeSpeed),m.uniform1f(M,q.mouseInfluence),m.uniform1f(k,q.fogStart),m.uniform1f(D,q.fogEnd),m.uniform1f(B,q.camDistance),m.drawArrays(m.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(L)};return L(),()=>{E=!1,cancelAnimationFrame(l.current),m.deleteProgram(v)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},lx=[{id:"default",label:"Default",params:{blockSize:1.5,spacing:2.5,timeSpeed:.8,mouseInfluence:1,fogStart:40,fogEnd:100,camDistance:80}},{id:"dense",label:"Dense Grid",params:{blockSize:1.8,spacing:2.2,timeSpeed:1.2,mouseInfluence:.8,fogStart:30,fogEnd:80,camDistance:70}},{id:"sparse",label:"Sparse Flow",params:{blockSize:1.2,spacing:3.5,timeSpeed:.5,mouseInfluence:1.5,fogStart:50,fogEnd:120,camDistance:100}},{id:"distant",label:"Distant View",params:{blockSize:1.5,spacing:2.5,timeSpeed:.6,mouseInfluence:.5,fogStart:60,fogEnd:150,camDistance:120}}],Ki=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(1)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Zy=({params:r,onChange:n})=>{const l=lx.find(a=>a.params.blockSize===r.blockSize&&a.params.spacing===r.spacing&&a.params.timeSpeed===r.timeSpeed&&a.params.camDistance===r.camDistance);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Geometry"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ki,{label:"Block Size",value:r.blockSize,min:.5,max:3,step:.1,onChange:a=>n({...r,blockSize:a})}),u.jsx(Ki,{label:"Grid Spacing",value:r.spacing,min:1.5,max:5,step:.1,onChange:a=>n({...r,spacing:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ki,{label:"Time Speed",value:r.timeSpeed,min:0,max:2,step:.1,onChange:a=>n({...r,timeSpeed:a})}),u.jsx(Ki,{label:"Mouse Influence",value:r.mouseInfluence,min:0,max:2,step:.1,onChange:a=>n({...r,mouseInfluence:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Camera & Atmosphere"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ki,{label:"Camera Distance",value:r.camDistance,min:50,max:150,step:5,onChange:a=>n({...r,camDistance:a})}),u.jsx(Ki,{label:"Fog Start",value:r.fogStart,min:20,max:80,step:5,onChange:a=>n({...r,fogStart:a})}),u.jsx(Ki,{label:"Fog End",value:r.fogEnd,min:60,max:180,step:10,onChange:a=>n({...r,fogEnd:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"View Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:lx.map(a=>u.jsx("button",{onClick:()=>n(a.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(l==null?void 0:l.id)===a.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:a.label},a.id))})]})]})},Wy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Ky=`
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
`,Qy=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o)return;const m=(D,B)=>{const E=o.createShader(B);return E?(o.shaderSource(E,D),o.compileShader(E),o.getShaderParameter(E,o.COMPILE_STATUS)?E:(o.deleteShader(E),null)):null},x=m(Wy,o.VERTEX_SHADER),p=m(Ky,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(!g)return;o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"iResolution"),w=o.getUniformLocation(g,"iTime"),N=o.getUniformLocation(g,"uFlowSpeed"),j=o.getUniformLocation(g,"uStreakLength"),A=o.getUniformLocation(g,"uZoom"),C=o.getUniformLocation(g,"uTurbulence"),z=o.getUniformLocation(g,"uGridOpacity");let M=!0;const k=()=>{if(!M)return;const D=f.clientWidth*window.devicePixelRatio,B=f.clientHeight*window.devicePixelRatio;(f.width!==D||f.height!==B)&&(f.width=D,f.height=B,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const E=(Date.now()-a.current)/1e3,L=s.current;o.uniform2f(R,f.width,f.height),o.uniform1f(w,E),o.uniform1f(N,L.flowSpeed),o.uniform1f(j,L.streakLength),o.uniform1f(A,L.zoom),o.uniform1f(C,L.turbulence),o.uniform1f(z,L.gridOpacity),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(k)};return k(),()=>{M=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},rx=[{id:"calm",label:"Calm Breeze",params:{flowSpeed:.1,streakLength:1,zoom:2.5,turbulence:.8,gridOpacity:.15}},{id:"moderate",label:"Moderate Flow",params:{flowSpeed:.2,streakLength:1.5,zoom:2.5,turbulence:1.2,gridOpacity:.15}},{id:"turbulent",label:"Turbulent Current",params:{flowSpeed:.35,streakLength:2,zoom:2,turbulence:1.8,gridOpacity:.1}},{id:"storm",label:"Storm System",params:{flowSpeed:.5,streakLength:2.5,zoom:1.8,turbulence:2.5,gridOpacity:.05}}],So=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),$y=({params:r,onChange:n})=>{const l=rx.find(a=>a.params.flowSpeed===r.flowSpeed&&a.params.streakLength===r.streakLength&&a.params.turbulence===r.turbulence);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Flow Dynamics"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(So,{label:"Flow Speed",value:r.flowSpeed,min:0,max:.8,step:.05,onChange:a=>n({...r,flowSpeed:a})}),u.jsx(So,{label:"Turbulence",value:r.turbulence,min:.5,max:3,step:.1,onChange:a=>n({...r,turbulence:a})}),u.jsx(So,{label:"Streak Length",value:r.streakLength,min:.5,max:3,step:.1,onChange:a=>n({...r,streakLength:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"View Settings"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(So,{label:"Zoom",value:r.zoom,min:1,max:4,step:.1,onChange:a=>n({...r,zoom:a})}),u.jsx(So,{label:"Grid Opacity",value:r.gridOpacity,min:0,max:.3,step:.05,onChange:a=>n({...r,gridOpacity:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Flow Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:rx.map(a=>u.jsx("button",{onClick:()=>n(a.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(l==null?void 0:l.id)===a.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:a.label},a.id))})]})]})},Jy=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,e3=`
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
`,ox=r=>{const n=parseInt(r.replace("#",""),16),l=(n>>16&255)/255,a=(n>>8&255)/255,s=(n&255)/255;return[l,a,s]},t3=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o)return;const m=(B,E)=>{const L=o.createShader(E);return L?(o.shaderSource(L,B),o.compileShader(L),o.getShaderParameter(L,o.COMPILE_STATUS)?L:(console.error("Shader error:",o.getShaderInfoLog(L)),o.deleteShader(L),null)):null},x=m(Jy,o.VERTEX_SHADER),p=m(e3,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(!g)return;if(o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),!o.getProgramParameter(g,o.LINK_STATUS)){console.error("Link error:",o.getProgramInfoLog(g));return}o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"iResolution"),w=o.getUniformLocation(g,"iTime"),N=o.getUniformLocation(g,"uSpeed"),j=o.getUniformLocation(g,"uTwist"),A=o.getUniformLocation(g,"uNoise"),C=o.getUniformLocation(g,"uWidth"),z=o.getUniformLocation(g,"uColor1"),M=o.getUniformLocation(g,"uColor2");let k=!0;const D=()=>{if(!k)return;const B=f.clientWidth*window.devicePixelRatio,E=f.clientHeight*window.devicePixelRatio;(f.width!==B||f.height!==E)&&(f.width=B,f.height=E,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const L=(Date.now()-a.current)/1e3,G=s.current,W=ox(G.color1),K=ox(G.color2);o.uniform2f(R,f.width,f.height),o.uniform1f(w,L),o.uniform1f(N,G.speed),o.uniform1f(j,G.twist),o.uniform1f(A,G.noise),o.uniform1f(C,G.width),o.uniform3f(z,W[0],W[1],W[2]),o.uniform3f(M,K[0],K[1],K[2]),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(D)};return D(),()=>{k=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},sx=[{id:"cyber",label:"Cyber",c1:"#4f46e5",c2:"#06b6d4"},{id:"inferno",label:"Inferno",c1:"#dc2626",c2:"#f59e0b"},{id:"matrix",label:"Matrix",c1:"#059669",c2:"#d4ff00"},{id:"void",label:"Void",c1:"#a855f7",c2:"#1e1b4b"}],pc=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(s<.1?2:1)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),n3=({params:r,onChange:n})=>{const l=sx.find(a=>a.c1===r.color1&&a.c2===r.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(pc,{label:"Speed",value:r.speed,min:0,max:2,step:.05,onChange:a=>n({...r,speed:a})}),u.jsx(pc,{label:"Twist",value:r.twist,min:0,max:3,step:.1,onChange:a=>n({...r,twist:a})}),u.jsx(pc,{label:"Noise",value:r.noise,min:0,max:2,step:.1,onChange:a=>n({...r,noise:a})}),u.jsx(pc,{label:"Tunnel Width",value:r.width,min:2,max:8,step:.5,onChange:a=>n({...r,width:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:sx.map(a=>u.jsx("button",{onClick:()=>n({...r,color1:a.c1,color2:a.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===a.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${a.c1}, ${a.c2})`},title:a.label},a.id))}),l&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label})]})]})},a3=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,i3=`
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
`,cx=r=>{const n=parseInt(r.replace("#",""),16),l=(n>>16&255)/255,a=(n>>8&255)/255,s=(n&255)/255;return[l,a,s]},l3=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o)return;const m=(B,E)=>{const L=o.createShader(E);return L?(o.shaderSource(L,B),o.compileShader(L),o.getShaderParameter(L,o.COMPILE_STATUS)?L:(console.error("Shader error:",o.getShaderInfoLog(L)),o.deleteShader(L),null)):null},x=m(a3,o.VERTEX_SHADER),p=m(i3,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(!g)return;if(o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),!o.getProgramParameter(g,o.LINK_STATUS)){console.error("Link error:",o.getProgramInfoLog(g));return}o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"iResolution"),w=o.getUniformLocation(g,"iTime"),N=o.getUniformLocation(g,"uSpeed"),j=o.getUniformLocation(g,"uScale"),A=o.getUniformLocation(g,"uDensity"),C=o.getUniformLocation(g,"uBrightness"),z=o.getUniformLocation(g,"uColor1"),M=o.getUniformLocation(g,"uColor2");let k=!0;const D=()=>{if(!k)return;const B=f.clientWidth*window.devicePixelRatio,E=f.clientHeight*window.devicePixelRatio;(f.width!==B||f.height!==E)&&(f.width=B,f.height=E,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const L=(Date.now()-a.current)/1e3,G=s.current,W=cx(G.color1),K=cx(G.color2);o.uniform2f(R,f.width,f.height),o.uniform1f(w,L),o.uniform1f(N,G.speed),o.uniform1f(j,G.scale),o.uniform1f(A,G.density),o.uniform1f(C,G.brightness),o.uniform3f(z,W[0],W[1],W[2]),o.uniform3f(M,K[0],K[1],K[2]),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(D)};return D(),()=>{k=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},ux=[{id:"nebula",label:"Nebula",c1:"#3b0764",c2:"#06b6d4"},{id:"solar",label:"Solar",c1:"#7c2d12",c2:"#fbbf24"},{id:"arctic",label:"Arctic",c1:"#0c4a6e",c2:"#e0f2fe"},{id:"phantom",label:"Phantom",c1:"#18181b",c2:"#a78bfa"}],gc=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(s<.1?2:1)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),r3=({params:r,onChange:n})=>{const l=ux.find(a=>a.c1===r.color1&&a.c2===r.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(gc,{label:"Speed",value:r.speed,min:0,max:1.5,step:.05,onChange:a=>n({...r,speed:a})}),u.jsx(gc,{label:"Noise Scale",value:r.scale,min:.3,max:3,step:.1,onChange:a=>n({...r,scale:a})}),u.jsx(gc,{label:"Density",value:r.density,min:.2,max:2,step:.1,onChange:a=>n({...r,density:a})}),u.jsx(gc,{label:"Brightness",value:r.brightness,min:.3,max:3,step:.1,onChange:a=>n({...r,brightness:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:ux.map(a=>u.jsx("button",{onClick:()=>n({...r,color1:a.c1,color2:a.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===a.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${a.c1}, ${a.c2})`},title:a.label},a.id))}),l&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label})]})]})},o3=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,s3=`
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
`,c3=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o)return;const m=(B,E)=>{const L=o.createShader(E);return L?(o.shaderSource(L,B),o.compileShader(L),o.getShaderParameter(L,o.COMPILE_STATUS)?L:(o.deleteShader(L),null)):null},x=m(o3,o.VERTEX_SHADER),p=m(s3,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(!g)return;o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"iResolution"),w=o.getUniformLocation(g,"iTime"),N=o.getUniformLocation(g,"uSpeed"),j=o.getUniformLocation(g,"uScale"),A=o.getUniformLocation(g,"uHueShift"),C=o.getUniformLocation(g,"uSaturation"),z=o.getUniformLocation(g,"uBrightness"),M=o.getUniformLocation(g,"uWarpStrength");let k=!0;const D=()=>{if(!k)return;const B=f.clientWidth*window.devicePixelRatio,E=f.clientHeight*window.devicePixelRatio;(f.width!==B||f.height!==E)&&(f.width=B,f.height=E,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const L=(Date.now()-a.current)/1e3,G=s.current;o.uniform2f(R,f.width,f.height),o.uniform1f(w,L),o.uniform1f(N,G.speed),o.uniform1f(j,G.scale),o.uniform1f(A,G.hueShift),o.uniform1f(C,G.saturation),o.uniform1f(z,G.brightness),o.uniform1f(M,G.warpStrength),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(D)};return D(),()=>{k=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},fx=[{id:"electric",label:"Electric Blue",params:{speed:1,scale:1,hueShift:.5,saturation:.8,brightness:1,warpStrength:.3}},{id:"plasma",label:"Hot Plasma",params:{speed:1.5,scale:1.2,hueShift:0,saturation:.9,brightness:1.2,warpStrength:.5}},{id:"aurora",label:"Aurora Flow",params:{speed:.6,scale:.8,hueShift:.3,saturation:.7,brightness:.9,warpStrength:.4}},{id:"cyberpunk",label:"Cyberpunk",params:{speed:1.2,scale:1.5,hueShift:.8,saturation:1,brightness:1.1,warpStrength:.6}}],$l=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),u3=({params:r,onChange:n})=>{const l=fx.find(a=>a.params.speed===r.speed&&a.params.scale===r.scale&&a.params.hueShift===r.hueShift);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx($l,{label:"Speed",value:r.speed,min:0,max:2,step:.1,onChange:a=>n({...r,speed:a})}),u.jsx($l,{label:"Scale",value:r.scale,min:.3,max:2,step:.1,onChange:a=>n({...r,scale:a})}),u.jsx($l,{label:"Warp Strength",value:r.warpStrength,min:0,max:1,step:.05,onChange:a=>n({...r,warpStrength:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx($l,{label:"Hue Shift",value:r.hueShift,min:0,max:1,step:.01,onChange:a=>n({...r,hueShift:a})}),u.jsx($l,{label:"Saturation",value:r.saturation,min:0,max:1,step:.05,onChange:a=>n({...r,saturation:a})}),u.jsx($l,{label:"Brightness",value:r.brightness,min:.3,max:1.5,step:.1,onChange:a=>n({...r,brightness:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Style Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:fx.map(a=>u.jsx("button",{onClick:()=>n(a.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(l==null?void 0:l.id)===a.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:a.label},a.id))})]})]})},f3=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,d3=`
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
`,m3=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o)return;const m=(B,E)=>{const L=o.createShader(E);return L?(o.shaderSource(L,B),o.compileShader(L),o.getShaderParameter(L,o.COMPILE_STATUS)?L:(o.deleteShader(L),null)):null},x=m(f3,o.VERTEX_SHADER),p=m(d3,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(!g)return;o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"iResolution"),w=o.getUniformLocation(g,"iTime"),N=o.getUniformLocation(g,"uSpeed"),j=o.getUniformLocation(g,"uScale"),A=o.getUniformLocation(g,"uHueSpeed"),C=o.getUniformLocation(g,"uSaturation"),z=o.getUniformLocation(g,"uBrightness"),M=o.getUniformLocation(g,"uContrast");let k=!0;const D=()=>{if(!k)return;const B=f.clientWidth*window.devicePixelRatio,E=f.clientHeight*window.devicePixelRatio;(f.width!==B||f.height!==E)&&(f.width=B,f.height=E,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const L=(Date.now()-a.current)/1e3,G=s.current;o.uniform2f(R,f.width,f.height),o.uniform1f(w,L),o.uniform1f(N,G.speed),o.uniform1f(j,G.scale),o.uniform1f(A,G.hueSpeed),o.uniform1f(C,G.saturation),o.uniform1f(z,G.brightness),o.uniform1f(M,G.contrast),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(D)};return D(),()=>{k=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},dx=[{id:"calm",label:"Calm Ocean",params:{speed:.5,scale:1,hueSpeed:.5,saturation:.6,brightness:.8,contrast:1.2}},{id:"vibrant",label:"Vibrant Flow",params:{speed:1,scale:1.2,hueSpeed:1,saturation:.7,brightness:.8,contrast:1.2}},{id:"psychedelic",label:"Psychedelic",params:{speed:1.5,scale:1.5,hueSpeed:2,saturation:.9,brightness:.8,contrast:1.4}},{id:"cosmic",label:"Cosmic Nebula",params:{speed:.8,scale:.8,hueSpeed:.3,saturation:.8,brightness:.7,contrast:1.5}}],Jl=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),h3=({params:r,onChange:n})=>{const l=dx.find(a=>a.params.speed===r.speed&&a.params.scale===r.scale&&a.params.hueSpeed===r.hueSpeed);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Flow Dynamics"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Jl,{label:"Speed",value:r.speed,min:0,max:2,step:.1,onChange:a=>n({...r,speed:a})}),u.jsx(Jl,{label:"Scale",value:r.scale,min:.3,max:2,step:.1,onChange:a=>n({...r,scale:a})}),u.jsx(Jl,{label:"Hue Speed",value:r.hueSpeed,min:0,max:3,step:.1,onChange:a=>n({...r,hueSpeed:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Jl,{label:"Saturation",value:r.saturation,min:0,max:1,step:.05,onChange:a=>n({...r,saturation:a})}),u.jsx(Jl,{label:"Brightness",value:r.brightness,min:.3,max:1.2,step:.1,onChange:a=>n({...r,brightness:a})}),u.jsx(Jl,{label:"Contrast",value:r.contrast,min:.8,max:2,step:.1,onChange:a=>n({...r,contrast:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Fluid Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:dx.map(a=>u.jsx("button",{onClick:()=>n(a.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(l==null?void 0:l.id)===a.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:a.label},a.id))})]})]})},p3=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,g3=`
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
`,x3=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o)return;const m=(D,B)=>{const E=o.createShader(B);return E?(o.shaderSource(E,D),o.compileShader(E),o.getShaderParameter(E,o.COMPILE_STATUS)?E:(o.deleteShader(E),null)):null},x=m(p3,o.VERTEX_SHADER),p=m(g3,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(!g)return;o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"iResolution"),w=o.getUniformLocation(g,"iTime"),N=o.getUniformLocation(g,"uSpeed"),j=o.getUniformLocation(g,"uZoom"),A=o.getUniformLocation(g,"uColorShift"),C=o.getUniformLocation(g,"uComplexity"),z=o.getUniformLocation(g,"uContrast");let M=!0;const k=()=>{if(!M)return;const D=f.clientWidth*window.devicePixelRatio,B=f.clientHeight*window.devicePixelRatio;(f.width!==D||f.height!==B)&&(f.width=D,f.height=B,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const E=(Date.now()-a.current)/1e3,L=s.current;o.uniform2f(R,f.width,f.height),o.uniform1f(w,E),o.uniform1f(N,L.speed),o.uniform1f(j,L.zoom),o.uniform1f(A,L.colorShift),o.uniform1f(C,L.complexity),o.uniform1f(z,L.contrast),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(k)};return k(),()=>{M=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},mx=[{id:"classic",label:"Classic Cyber",params:{speed:.2,zoom:3,colorShift:0,complexity:1,contrast:1}},{id:"neon",label:"Neon City",params:{speed:.4,zoom:2.5,colorShift:2,complexity:1.2,contrast:1.3}},{id:"matrix",label:"Digital Matrix",params:{speed:.3,zoom:3.5,colorShift:3.5,complexity:.8,contrast:.8}},{id:"synthwave",label:"Synthwave",params:{speed:.15,zoom:2.8,colorShift:5,complexity:1.5,contrast:1.2}}],wo=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),v3=({params:r,onChange:n})=>{const l=mx.find(a=>a.params.speed===r.speed&&a.params.zoom===r.zoom&&a.params.colorShift===r.colorShift);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(wo,{label:"Speed",value:r.speed,min:0,max:1,step:.05,onChange:a=>n({...r,speed:a})}),u.jsx(wo,{label:"Zoom",value:r.zoom,min:1,max:5,step:.1,onChange:a=>n({...r,zoom:a})}),u.jsx(wo,{label:"Complexity",value:r.complexity,min:.3,max:2,step:.1,onChange:a=>n({...r,complexity:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Visual"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(wo,{label:"Color Shift",value:r.colorShift,min:0,max:6.28,step:.1,onChange:a=>n({...r,colorShift:a})}),u.jsx(wo,{label:"Contrast",value:r.contrast,min:.5,max:2,step:.1,onChange:a=>n({...r,contrast:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Cyberpunk Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:mx.map(a=>u.jsx("button",{onClick:()=>n(a.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(l==null?void 0:l.id)===a.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:a.label},a.id))})]})]})},b3=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,y3=`
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
`,hx=r=>{if(!r)return[0,0,0];const n=parseInt(r.replace("#",""),16),l=(n>>16&255)/255,a=(n>>8&255)/255,s=(n&255)/255;return[l,a,s]},S3=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o){console.error("WebGL not supported");return}const m=(k,D)=>{const B=o.createShader(D);return B?(o.shaderSource(B,k),o.compileShader(B),o.getShaderParameter(B,o.COMPILE_STATUS)?B:(console.error("Shader compilation error:",o.getShaderInfoLog(B)),o.deleteShader(B),null)):null},x=m(b3,o.VERTEX_SHADER),p=m(y3,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),o.useProgram(g);const v=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,v),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),o.STATIC_DRAW);const S=o.getAttribLocation(g,"position");o.enableVertexAttribArray(S),o.vertexAttribPointer(S,2,o.FLOAT,!1,0,0);const y=o.getUniformLocation(g,"iTime"),R=o.getUniformLocation(g,"iResolution"),w=o.getUniformLocation(g,"uSpeed"),N=o.getUniformLocation(g,"uHeight"),j=o.getUniformLocation(g,"uSmoothness"),A=o.getUniformLocation(g,"uColor1"),C=o.getUniformLocation(g,"uColor2");let z=!0;const M=()=>{if(!z)return;const k=f.clientWidth,D=f.clientHeight;(f.width!==k||f.height!==D)&&(f.width=k,f.height=D,o.viewport(0,0,f.width,f.height));const B=s.current,E=(Date.now()-a.current)/1e3,L=hx(B.color1),G=hx(B.color2);o.uniform1f(y,E),o.uniform2f(R,f.width,f.height),o.uniform1f(w,B.speed),o.uniform1f(N,B.height),o.uniform1f(j,B.smoothness),o.uniform3f(A,L[0],L[1],L[2]),o.uniform3f(C,G[0],G[1],G[2]),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(M)};return M(),()=>{z=!1,cancelAnimationFrame(l.current),o.deleteProgram(g),o.deleteShader(x),o.deleteShader(p)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full"})},px=[{id:"cyber",label:"Cyber",c1:"#2266ff",c2:"#9933ff"},{id:"retrowave",label:"Retrowave",c1:"#ff1493",c2:"#ff6600"},{id:"emerald",label:"Emerald",c1:"#00cc66",c2:"#00bbff"},{id:"inferno",label:"Inferno",c1:"#ff3300",c2:"#ffaa00"},{id:"frost",label:"Frost",c1:"#33ccff",c2:"#6666ff"}],gx=[{id:"calm",label:"Calm Waves",params:{speed:.3,height:2.2,smoothness:1}},{id:"cruise",label:"Night Cruise",params:{speed:.5,height:2,smoothness:1.5}},{id:"rush",label:"Speed Rush",params:{speed:1,height:1.8,smoothness:.8}},{id:"dream",label:"Dream Flight",params:{speed:.2,height:2.5,smoothness:2}}],Ad=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),w3=({params:r,onChange:n})=>{const l=gx.find(s=>s.params.speed===r.speed&&s.params.height===r.height&&s.params.smoothness===r.smoothness),a=px.find(s=>s.c1===r.color1&&s.c2===r.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Motion"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ad,{label:"Speed",value:r.speed,min:0,max:2,step:.1,onChange:s=>n({...r,speed:s})}),u.jsx(Ad,{label:"Height",value:r.height,min:1.5,max:3,step:.1,onChange:s=>n({...r,height:s})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Visual"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(Ad,{label:"Smoothness",value:r.smoothness,min:.5,max:3,step:.1,onChange:s=>n({...r,smoothness:s})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:px.map(s=>u.jsx("button",{onClick:()=>n({...r,color1:s.c1,color2:s.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(a==null?void 0:a.id)===s.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${s.c1}, ${s.c2})`},title:s.label},s.id))}),a&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:a.label}),u.jsxs("div",{className:"mt-3 flex gap-3",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Wave"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[u.jsx("input",{type:"color",value:r.color1,onChange:s=>n({...r,color1:s.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),u.jsx("div",{className:"w-full h-full rounded-lg",style:{background:r.color1}})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:r.color1})]})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Sky"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[u.jsx("input",{type:"color",value:r.color2,onChange:s=>n({...r,color2:s.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),u.jsx("div",{className:"w-full h-full rounded-lg",style:{background:r.color2}})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:r.color2})]})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Flight Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:gx.map(s=>u.jsx("button",{onClick:()=>n({...r,...s.params}),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(l==null?void 0:l.id)===s.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:s.label},s.id))})]})]})},_3=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,C3=`
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
`,A3=({params:r})=>{const n=_.useRef(null),l=_.useRef(null),a=_.useRef(null),s=_.useRef(0),f=_.useRef(Date.now());return _.useEffect(()=>{const o=n.current;if(!o)return;const m=o.getContext("webgl");if(!m){console.error("WebGL not supported");return}l.current=m;const x=m.createShader(m.VERTEX_SHADER);m.shaderSource(x,_3),m.compileShader(x);const p=m.createShader(m.FRAGMENT_SHADER);m.shaderSource(p,C3),m.compileShader(p),m.getShaderParameter(p,m.COMPILE_STATUS)||console.error("Fragment shader compilation error:",m.getShaderInfoLog(p));const g=m.createProgram();m.attachShader(g,x),m.attachShader(g,p),m.linkProgram(g),m.useProgram(g),a.current=g;const v=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,v),m.bufferData(m.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),m.STATIC_DRAW);const S=m.getAttribLocation(g,"position");m.enableVertexAttribArray(S),m.vertexAttribPointer(S,2,m.FLOAT,!1,0,0);const y=()=>{const w=o.clientWidth,N=o.clientHeight;(o.width!==w||o.height!==N)&&(o.width=w,o.height=N,m.viewport(0,0,o.width,o.height))},R=()=>{if(!l.current||!a.current)return;y();const w=m.getUniformLocation(a.current,"iTime"),N=m.getUniformLocation(a.current,"iResolution"),j=m.getUniformLocation(a.current,"uTextGlow"),A=m.getUniformLocation(a.current,"uTextScale"),C=m.getUniformLocation(a.current,"uTerrainBrightness"),z=(Date.now()-f.current)/1e3;m.uniform1f(w,z),m.uniform2f(N,o.width,o.height),m.uniform1f(j,r.textGlow),m.uniform1f(A,r.textScale),m.uniform1f(C,r.terrainBrightness),m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.TRIANGLE_STRIP,0,4),s.current=requestAnimationFrame(R)};return y(),R(),()=>{cancelAnimationFrame(s.current),m.deleteProgram(g),m.deleteShader(x),m.deleteShader(p)}},[r]),u.jsx("canvas",{ref:n,className:"w-full h-full"})},xx=[{id:"subtle",label:"Subtle Glow",params:{textGlow:3,textScale:1,terrainBrightness:.3}},{id:"vibrant",label:"Vibrant Pop",params:{textGlow:5,textScale:1,terrainBrightness:.5}},{id:"neon",label:"Full Neon",params:{textGlow:8,textScale:1.2,terrainBrightness:.2}},{id:"minimalist",label:"Minimal Mood",params:{textGlow:2,textScale:.8,terrainBrightness:.1}}],Rd=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),R3=({params:r,onChange:n})=>{const l=xx.find(a=>a.params.textGlow===r.textGlow&&a.params.textScale===r.textScale&&a.params.terrainBrightness===r.terrainBrightness);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Text"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Rd,{label:"Glow Intensity",value:r.textGlow,min:1,max:10,step:.5,onChange:a=>n({...r,textGlow:a})}),u.jsx(Rd,{label:"Scale",value:r.textScale,min:.5,max:2,step:.1,onChange:a=>n({...r,textScale:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Terrain"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(Rd,{label:"Brightness",value:r.terrainBrightness,min:0,max:1,step:.1,onChange:a=>n({...r,terrainBrightness:a})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Neon Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:xx.map(a=>u.jsx("button",{onClick:()=>n(a.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(l==null?void 0:l.id)===a.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:a.label},a.id))})]})]})},N3=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,T3=`
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
`,j3=({params:r})=>{const n=_.useRef(null),l=_.useRef(null),a=_.useRef(null),s=_.useRef(0),f=_.useRef(Date.now());return _.useEffect(()=>{const o=n.current;if(!o)return;const m=o.getContext("webgl");if(!m){console.error("WebGL not supported");return}l.current=m;const x=m.createShader(m.VERTEX_SHADER);m.shaderSource(x,N3),m.compileShader(x);const p=m.createShader(m.FRAGMENT_SHADER);m.shaderSource(p,T3),m.compileShader(p),m.getShaderParameter(p,m.COMPILE_STATUS)||console.error("Fragment shader compilation error:",m.getShaderInfoLog(p));const g=m.createProgram();m.attachShader(g,x),m.attachShader(g,p),m.linkProgram(g),m.useProgram(g),a.current=g;const v=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,v),m.bufferData(m.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),m.STATIC_DRAW);const S=m.getAttribLocation(g,"position");m.enableVertexAttribArray(S),m.vertexAttribPointer(S,2,m.FLOAT,!1,0,0);const y=()=>{const w=o.clientWidth,N=o.clientHeight;(o.width!==w||o.height!==N)&&(o.width=w,o.height=N,m.viewport(0,0,o.width,o.height))},R=()=>{if(!l.current||!a.current)return;y();const w=m.getUniformLocation(a.current,"iTime"),N=m.getUniformLocation(a.current,"iResolution"),j=m.getUniformLocation(a.current,"uWaveSpeed"),A=m.getUniformLocation(a.current,"uColorShift"),C=m.getUniformLocation(a.current,"uOpacity"),z=(Date.now()-f.current)/1e3;m.uniform1f(w,z),m.uniform2f(N,o.width,o.height),m.uniform1f(j,r.waveSpeed),m.uniform1f(A,r.colorShift),m.uniform1f(C,r.opacity),m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.TRIANGLE_STRIP,0,4),s.current=requestAnimationFrame(R)};return y(),R(),()=>{cancelAnimationFrame(s.current),m.deleteProgram(g),m.deleteShader(x),m.deleteShader(p)}},[r]),u.jsx("canvas",{ref:n,className:"w-full h-full"})},vx=[{id:"gentle",label:"Gentle Drift",params:{waveSpeed:.3,colorShift:0,opacity:.3}},{id:"flow",label:"Flowing Sky",params:{waveSpeed:.5,colorShift:1,opacity:.4}},{id:"ethereal",label:"Ethereal Mist",params:{waveSpeed:.2,colorShift:2,opacity:.25}},{id:"vivid",label:"Vivid Aurora",params:{waveSpeed:.7,colorShift:.5,opacity:.5}}],Nd=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),M3=({params:r,onChange:n})=>{const l=vx.find(a=>a.params.waveSpeed===r.waveSpeed&&a.params.colorShift===r.colorShift&&a.params.opacity===r.opacity);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Motion"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Nd,{label:"Wave Speed",value:r.waveSpeed,min:0,max:1,step:.1,onChange:a=>n({...r,waveSpeed:a})}),u.jsx(Nd,{label:"Color Shift",value:r.colorShift,min:0,max:3,step:.1,onChange:a=>n({...r,colorShift:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Visual"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(Nd,{label:"Opacity",value:r.opacity,min:.1,max:.7,step:.05,onChange:a=>n({...r,opacity:a})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Aurora Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:vx.map(a=>u.jsx("button",{onClick:()=>n(a.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(l==null?void 0:l.id)===a.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:a.label},a.id))})]})]})},D3=`#version 300 es
  in vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,E3=`#version 300 es
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
`,bx=r=>{if(!r)return[0,0,0];const n=parseInt(r.replace("#",""),16),l=(n>>16&255)/255,a=(n>>8&255)/255,s=(n&255)/255;return[l,a,s]},k3=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl2");if(!o){console.error("WebGL 2.0 not supported");return}const m=(D,B)=>{const E=o.createShader(B);return E?(o.shaderSource(E,D),o.compileShader(E),o.getShaderParameter(E,o.COMPILE_STATUS)?E:(console.error("Shader compilation error:",o.getShaderInfoLog(E)),o.deleteShader(E),null)):null},x=m(D3,o.VERTEX_SHADER),p=m(E3,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(!g)return;if(o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),!o.getProgramParameter(g,o.LINK_STATUS)){console.error("Program link error:",o.getProgramInfoLog(g));return}o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"iResolution"),w=o.getUniformLocation(g,"iTime"),N=o.getUniformLocation(g,"uSpeed"),j=o.getUniformLocation(g,"uGlow"),A=o.getUniformLocation(g,"uGridSize"),C=o.getUniformLocation(g,"uColor1"),z=o.getUniformLocation(g,"uColor2");let M=!0;const k=()=>{if(!M)return;const D=f.clientWidth*window.devicePixelRatio,B=f.clientHeight*window.devicePixelRatio;(f.width!==D||f.height!==B)&&(f.width=D,f.height=B,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const E=(Date.now()-a.current)/1e3,L=s.current,G=bx(L.color1),W=bx(L.color2);o.uniform3f(R,f.width,f.height,1),o.uniform1f(w,E),o.uniform1f(N,L.speed),o.uniform1f(j,L.glow),o.uniform1f(A,L.gridSize),o.uniform3f(C,G[0],G[1],G[2]),o.uniform3f(z,W[0],W[1],W[2]),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(k)};return k(),()=>{M=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},yx=[{id:"neon",label:"Neon Blue",c1:"#4040ff",c2:"#40a0ff"},{id:"cyber",label:"Cyber Pink",c1:"#ff40a0",c2:"#a040ff"},{id:"matrix",label:"Matrix",c1:"#00ff66",c2:"#00aa44"},{id:"solar",label:"Solar",c1:"#ff8800",c2:"#ffdd00"},{id:"ice",label:"Ice",c1:"#88ccff",c2:"#ffffff"}],Td=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(s<.1?2:1)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),z3=({params:r,onChange:n})=>{const l=yx.find(a=>a.c1===r.color1&&a.c2===r.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Td,{label:"Speed",value:r.speed,min:0,max:3,step:.1,onChange:a=>n({...r,speed:a})}),u.jsx(Td,{label:"Glow",value:r.glow,min:.1,max:3,step:.1,onChange:a=>n({...r,glow:a})}),u.jsx(Td,{label:"Grid Size",value:r.gridSize,min:.5,max:3,step:.1,onChange:a=>n({...r,gridSize:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:yx.map(a=>u.jsx("button",{onClick:()=>n({...r,color1:a.c1,color2:a.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===a.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${a.c1}, ${a.c2})`},title:a.label},a.id))}),l&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label}),u.jsxs("div",{className:"mt-3 flex gap-3",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Primary"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[u.jsx("input",{type:"color",value:r.color1,onChange:a=>n({...r,color1:a.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),u.jsx("div",{className:"w-full h-full rounded-lg",style:{background:r.color1}})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:r.color1})]})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Accent"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[u.jsx("input",{type:"color",value:r.color2,onChange:a=>n({...r,color2:a.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),u.jsx("div",{className:"w-full h-full rounded-lg",style:{background:r.color2}})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:r.color2})]})]})]})]})]})},B3=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,L3=`
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
`,xc=r=>{const n=parseInt(r.replace("#",""),16),l=(n>>16&255)/255,a=(n>>8&255)/255,s=(n&255)/255;return[l,a,s]},O3=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r),f=_.useRef({x:0,y:0,active:!1});return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const o=n.current;if(!o)return;const m=o.getContext("webgl");if(!m)return;const x=G=>{const W=o.getBoundingClientRect(),K=window.devicePixelRatio;f.current.x=(G.clientX-W.left)*K,f.current.y=(W.height-(G.clientY-W.top))*K,f.current.active=!0},p=()=>{f.current.active=!1};o.addEventListener("mousemove",x),o.addEventListener("mouseleave",p);const g=(G,W)=>{const K=m.createShader(W);return K?(m.shaderSource(K,G),m.compileShader(K),m.getShaderParameter(K,m.COMPILE_STATUS)?K:(console.error("Shader error:",m.getShaderInfoLog(K)),m.deleteShader(K),null)):null},v=g(B3,m.VERTEX_SHADER),S=g(L3,m.FRAGMENT_SHADER);if(!v||!S)return;const y=m.createProgram();if(!y)return;if(m.attachShader(y,v),m.attachShader(y,S),m.linkProgram(y),!m.getProgramParameter(y,m.LINK_STATUS)){console.error("Link error:",m.getProgramInfoLog(y));return}m.useProgram(y);const R=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,w),m.bufferData(m.ARRAY_BUFFER,R,m.STATIC_DRAW);const N=m.getAttribLocation(y,"position");m.enableVertexAttribArray(N),m.vertexAttribPointer(N,2,m.FLOAT,!1,0,0);const j=m.getUniformLocation(y,"iResolution"),A=m.getUniformLocation(y,"iTime"),C=m.getUniformLocation(y,"iMouse"),z=m.getUniformLocation(y,"uGamma"),M=m.getUniformLocation(y,"uAccent1"),k=m.getUniformLocation(y,"uAccent2"),D=m.getUniformLocation(y,"uBg1"),B=m.getUniformLocation(y,"uBg2");let E=!0;const L=()=>{if(!E)return;const G=o.clientWidth*window.devicePixelRatio,W=o.clientHeight*window.devicePixelRatio;(o.width!==G||o.height!==W)&&(o.width=G,o.height=W,m.viewport(0,0,m.drawingBufferWidth,m.drawingBufferHeight));const K=(Date.now()-a.current)/1e3,q=s.current,ie=f.current;m.uniform3f(j,o.width,o.height,1),m.uniform1f(A,K*q.speed),m.uniform4f(C,ie.x,ie.y,ie.active?1:-1,0),m.uniform1f(z,q.gamma);const U=xc(q.accent1),Q=xc(q.accent2),se=xc(q.bg1),ue=xc(q.bg2);m.uniform3f(M,U[0],U[1],U[2]),m.uniform3f(k,Q[0],Q[1],Q[2]),m.uniform3f(D,se[0],se[1],se[2]),m.uniform3f(B,ue[0],ue[1],ue[2]),m.drawArrays(m.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(L)};return L(),()=>{E=!1,cancelAnimationFrame(l.current),o.removeEventListener("mousemove",x),o.removeEventListener("mouseleave",p),m.deleteProgram(y)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},Sx=[{id:"ocean",label:"Ocean",accent1:"#ff1a80",accent2:"#ff801a",bg1:"#1a80ff",bg2:"#1a8099"},{id:"abyss",label:"Abyss",accent1:"#00ffaa",accent2:"#00aaff",bg1:"#1a2d80",bg2:"#0a3366"},{id:"ember",label:"Ember",accent1:"#ff4400",accent2:"#ffcc00",bg1:"#801a28",bg2:"#805020"},{id:"arctic",label:"Arctic",accent1:"#66ccff",accent2:"#eeffff",bg1:"#103d80",bg2:"#1a5570"},{id:"toxic",label:"Toxic",accent1:"#88ff00",accent2:"#ff00aa",bg1:"#1a5530",bg2:"#2a1a66"},{id:"violet",label:"Violet",accent1:"#bb99ff",accent2:"#ff99cc",bg1:"#2a1566",bg2:"#1a2070"}],wx=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(s<.1?2:1)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),F3=({params:r,onChange:n})=>{const l=Sx.find(a=>a.accent1===r.accent1&&a.bg1===r.bg1);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(wx,{label:"Speed",value:r.speed,min:.2,max:2,step:.1,onChange:a=>n({...r,speed:a})}),u.jsx(wx,{label:"Gamma",value:r.gamma,min:1,max:3.5,step:.1,onChange:a=>n({...r,gamma:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Palette"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:Sx.map(a=>u.jsx("button",{onClick:()=>n({...r,accent1:a.accent1,accent2:a.accent2,bg1:a.bg1,bg2:a.bg2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===a.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${a.accent1}, ${a.bg1})`},title:a.label},a.id))}),l&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Interaction"}),u.jsx("div",{className:"text-[9px] text-neutral-500 leading-relaxed",children:"Move mouse over canvas to control camera angle. Leave canvas for auto-animation."})]})]})},I3=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,G3=`
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
`,U3=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o)return;const m=(M,k)=>{const D=o.createShader(k);return D?(o.shaderSource(D,M),o.compileShader(D),o.getShaderParameter(D,o.COMPILE_STATUS)?D:(console.error("Shader error:",o.getShaderInfoLog(D)),o.deleteShader(D),null)):null},x=m(I3,o.VERTEX_SHADER),p=m(G3,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(!g)return;if(o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),!o.getProgramParameter(g,o.LINK_STATUS)){console.error("Link error:",o.getProgramInfoLog(g));return}o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"iResolution"),w=o.getUniformLocation(g,"iTime"),N=o.getUniformLocation(g,"uSpeed"),j=o.getUniformLocation(g,"uGrain"),A=o.getUniformLocation(g,"uVignette");let C=!0;const z=()=>{if(!C)return;const M=f.clientWidth*window.devicePixelRatio,k=f.clientHeight*window.devicePixelRatio;(f.width!==M||f.height!==k)&&(f.width=M,f.height=k,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const D=(Date.now()-a.current)/1e3,B=s.current;o.uniform2f(R,f.width,f.height),o.uniform1f(w,D),o.uniform1f(N,B.speed),o.uniform1f(j,B.grain),o.uniform1f(A,B.vignette),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(z)};return z(),()=>{C=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},jd=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(s<.1?2:1)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),P3=[{id:"slow",label:"Slow",speed:.3},{id:"cruise",label:"Cruise",speed:1},{id:"express",label:"Express",speed:2}],H3=({params:r,onChange:n})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(jd,{label:"Speed",value:r.speed,min:.1,max:3,step:.1,onChange:l=>n({...r,speed:l})}),u.jsx(jd,{label:"Film Grain",value:r.grain,min:0,max:.4,step:.01,onChange:l=>n({...r,grain:l})}),u.jsx(jd,{label:"Vignette",value:r.vignette,min:0,max:1,step:.1,onChange:l=>n({...r,vignette:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Speed Presets"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:P3.map(l=>u.jsx("button",{onClick:()=>n({...r,speed:l.speed}),className:`px-2.5 py-1 rounded-lg text-[9px] font-medium transition-all ${r.speed===l.speed?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.id))})]})]}),q3=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,V3=`
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
`,Md=r=>{if(!r)return[0,0,0];const n=parseInt(r.replace("#",""),16),l=(n>>16&255)/255,a=(n>>8&255)/255,s=(n&255)/255;return[l,a,s]},Y3=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o)return;const m=(G,W)=>{const K=o.createShader(W);return K?(o.shaderSource(K,G),o.compileShader(K),o.getShaderParameter(K,o.COMPILE_STATUS)?K:(console.error("Shader error:",o.getShaderInfoLog(K)),o.deleteShader(K),null)):null},x=m(q3,o.VERTEX_SHADER),p=m(V3,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(!g)return;if(o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),!o.getProgramParameter(g,o.LINK_STATUS)){console.error("Link error:",o.getProgramInfoLog(g));return}o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"iResolution"),w=o.getUniformLocation(g,"iTime"),N=o.getUniformLocation(g,"uSpeed"),j=o.getUniformLocation(g,"uLayers"),A=o.getUniformLocation(g,"uDepth"),C=o.getUniformLocation(g,"uTurbulence"),z=o.getUniformLocation(g,"uGrain"),M=o.getUniformLocation(g,"uVignette"),k=o.getUniformLocation(g,"uColor1"),D=o.getUniformLocation(g,"uColor2"),B=o.getUniformLocation(g,"uColor3");let E=!0;const L=()=>{if(!E)return;const G=f.clientWidth*window.devicePixelRatio,W=f.clientHeight*window.devicePixelRatio;(f.width!==G||f.height!==W)&&(f.width=G,f.height=W,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const K=(Date.now()-a.current)/1e3,q=s.current,ie=Md(q.color1),U=Md(q.color2),Q=Md(q.color3);o.uniform2f(R,f.width,f.height),o.uniform1f(w,K),o.uniform1f(N,q.speed),o.uniform1f(j,q.layers),o.uniform1f(A,q.depth),o.uniform1f(C,q.turbulence),o.uniform1f(z,q.grain),o.uniform1f(M,q.vignette),o.uniform3f(k,ie[0],ie[1],ie[2]),o.uniform3f(D,U[0],U[1],U[2]),o.uniform3f(B,Q[0],Q[1],Q[2]),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(L)};return L(),()=>{E=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block rounded-2xl"})},er=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(s<.1?2:1)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),_x=[{id:"sunset",label:"Sunset",color1:"#c44b32",color2:"#f0a050",color3:"#9ab4ff"},{id:"arctic",label:"Arctic",color1:"#4a6a8a",color2:"#a0c8e0",color3:"#d8e8f0"},{id:"forest",label:"Forest",color1:"#2a4a2a",color2:"#5a8a4a",color3:"#b0c8a0"},{id:"desert",label:"Desert",color1:"#8a5a30",color2:"#d4a060",color3:"#e8d0a0"},{id:"midnight",label:"Midnight",color1:"#1a1040",color2:"#3a2870",color3:"#1a2040"}],X3=({params:r,onChange:n})=>{const l=_x.find(a=>a.color1===r.color1&&a.color2===r.color2&&a.color3===r.color3);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Landscape"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(er,{label:"Speed",value:r.speed,min:.1,max:3,step:.1,onChange:a=>n({...r,speed:a})}),u.jsx(er,{label:"Layers",value:r.layers,min:4,max:16,step:1,onChange:a=>n({...r,layers:a})}),u.jsx(er,{label:"Depth",value:r.depth,min:.3,max:3,step:.1,onChange:a=>n({...r,depth:a})}),u.jsx(er,{label:"Turbulence",value:r.turbulence,min:.3,max:2.5,step:.1,onChange:a=>n({...r,turbulence:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:_x.map(a=>u.jsx("button",{onClick:()=>n({...r,color1:a.color1,color2:a.color2,color3:a.color3}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===a.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(180deg, ${a.color3}, ${a.color2}, ${a.color1})`},title:a.label},a.id))}),l&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Custom Colors"}),u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:r.color1,onChange:a=>n({...r,color1:a.target.value}),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Near"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:r.color2,onChange:a=>n({...r,color2:a.target.value}),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Mid"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:r.color3,onChange:a=>n({...r,color3:a.target.value}),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Sky"})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Post Processing"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(er,{label:"Film Grain",value:r.grain,min:0,max:.3,step:.01,onChange:a=>n({...r,grain:a})}),u.jsx(er,{label:"Vignette",value:r.vignette,min:0,max:1,step:.1,onChange:a=>n({...r,vignette:a})})]})]})]})},Z3=`
precision mediump float;

varying vec2 vUv;
attribute vec2 a_position;

void main() {
    vUv = a_position;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,W3=`
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
`,K3=({params:r})=>{const n=_.useRef(null),l=_.useRef(null),a=_.useRef({}),s=_.useRef();return _.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl")||f.getContext("experimental-webgl");if(!o){console.error("WebGL not supported");return}l.current=o;const m=(j,A)=>{const C=o.createShader(j);return C?(o.shaderSource(C,A),o.compileShader(C),o.getShaderParameter(C,o.COMPILE_STATUS)?C:(console.error("Shader compile error:",o.getShaderInfoLog(C)),o.deleteShader(C),null)):null},x=m(o.VERTEX_SHADER,Z3),p=m(o.FRAGMENT_SHADER,W3);if(!x||!p)return;const g=o.createProgram();if(!g)return;if(o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),!o.getProgramParameter(g,o.LINK_STATUS)){console.error("Program link error:",o.getProgramInfoLog(g));return}o.useProgram(g);const v=()=>{const j={},A=o.getProgramParameter(g,o.ACTIVE_UNIFORMS);for(let C=0;C<A;C++){const z=o.getActiveUniform(g,C);z&&(j[z.name]=o.getUniformLocation(g,z.name))}return j};a.current=v();const S=new Float32Array([-1,-1,1,-1,-1,1,1,1]),y=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,y),o.bufferData(o.ARRAY_BUFFER,S,o.STATIC_DRAW);const R=o.getAttribLocation(g,"a_position");o.enableVertexAttribArray(R),o.vertexAttribPointer(R,2,o.FLOAT,!1,0,0),o.enable(o.BLEND),o.blendFunc(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA);const w=()=>{const j=Math.min(window.devicePixelRatio,2);f.width=f.clientWidth*j,f.height=f.clientHeight*j,o.viewport(0,0,f.width,f.height),a.current.u_resolution&&o.uniform2f(a.current.u_resolution,f.width,f.height)};w(),window.addEventListener("resize",w);const N=()=>{const j=performance.now();a.current.u_time&&o.uniform1f(a.current.u_time,j),o.drawArrays(o.TRIANGLE_STRIP,0,4),s.current=requestAnimationFrame(N)};return N(),()=>{window.removeEventListener("resize",w),s.current&&cancelAnimationFrame(s.current)}},[]),_.useEffect(()=>{const f=l.current;if(!f)return;const o=a.current;o.u_col_width&&f.uniform1f(o.u_col_width,r.colWidth),o.u_speed&&f.uniform1f(o.u_speed,r.speed),o.u_scale&&f.uniform1f(o.u_scale,r.scale),o.u_seed&&f.uniform1f(o.u_seed,r.seed),o.u_color&&f.uniform3f(o.u_color,r.color[0],r.color[1],r.color[2]),o.u_scroll_progr&&f.uniform1f(o.u_scroll_progr,r.scrollProgress)},[r]),u.jsx("canvas",{ref:n,className:"w-full h-full"})},Q3=r=>{const n=parseInt(r.slice(1,3),16)/255,l=parseInt(r.slice(3,5),16)/255,a=parseInt(r.slice(5,7),16)/255;return[n,l,a]},$3=r=>{const n=Math.round(r[0]*255),l=Math.round(r[1]*255),a=Math.round(r[2]*255);return`#${n.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}`},J3=({params:r,onChange:n})=>{const l=(a,s)=>{n({...r,[a]:s})};return u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Scroll Progress"}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:r.scrollProgress.toFixed(2)})]}),u.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:r.scrollProgress,onChange:a=>l("scrollProgress",parseFloat(a.target.value)),className:"w-full"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Column Width"}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:r.colWidth.toFixed(2)})]}),u.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.01",value:r.colWidth,onChange:a=>l("colWidth",parseFloat(a.target.value)),className:"w-full"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Speed"}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:r.speed.toFixed(2)})]}),u.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:r.speed,onChange:a=>l("speed",parseFloat(a.target.value)),className:"w-full"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Scale"}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:r.scale.toFixed(2)})]}),u.jsx("input",{type:"range",min:"0.15",max:"0.35",step:"0.01",value:r.scale,onChange:a=>l("scale",parseFloat(a.target.value)),className:"w-full"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Seed"}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:r.seed.toFixed(3)})]}),u.jsx("input",{type:"range",min:"0",max:"1",step:"0.001",value:r.seed,onChange:a=>l("seed",parseFloat(a.target.value)),className:"w-full"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"flex justify-between items-center mb-1.5",children:u.jsx("span",{className:"text-[10px] text-neutral-500 uppercase tracking-wide",children:"Color"})}),u.jsx("input",{type:"color",value:$3(r.color),onChange:a=>l("color",Q3(a.target.value)),className:"w-full h-8 rounded-lg cursor-pointer"})]})]})},eS=()=>{const r=_.useRef(null),n=_.useRef(null);return _.useEffect(()=>{(async()=>{try{const s=await(await fetch(new URL("/assets/parallax-CPv_KoVe.html",import.meta.url).href)).text(),o=await(await fetch(new URL("/assets/parallax-D_zRWyDI.js",import.meta.url).href)).text(),m=`
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
    ${o}
  <\/script>
</body>
</html>
        `;if(n.current){const x=n.current;x.srcdoc=m}}catch(a){console.error("Failed to load parallax demo:",a)}})()},[]),u.jsx("div",{ref:r,className:"w-full h-full relative",children:u.jsx("iframe",{ref:n,className:"w-full h-full border-0",title:"Parallax Scroll Animation"})})},rt="frosted-glass-demo",tS='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>',nS=[{category:"Instant",title:"Soul Shatter",description:"Each opponent sacrifices a creature or planeswalker with the greatest mana value among creatures and planeswalkers they control.",image:"https://cards.scryfall.io/art_crop/front/a/b/abdd053f-87ea-4cc8-b3df-a0c69c798d57.jpg?1678736299"},{category:"Instant",title:"Finishing Blow",description:"Destroy target creature or planeswalker.",image:"https://cards.scryfall.io/art_crop/front/2/b/2b85a552-2119-4d9c-b7c1-c09c2d9f2f38.jpg?1594736130"},{category:"Creature",title:"Essence Channeler",description:"As long as you've lost life this turn, this creature has flying and vigilance.",image:"https://cards.scryfall.io/art_crop/front/b/b/bbd5c86a-0991-4322-a0a2-48424c4be2af.jpg?1721427902"}],aS=`
.${rt} {
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

.${rt}__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.${rt}__card {
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
.${rt}__card img {
  transition: transform 500ms ease-in-out;
}
.${rt}__card svg {
  transition: transform 250ms ease-in-out;
}
.${rt}__card:hover {
  transform: scale(1.05);
}
.${rt}__card:hover img {
  transform: scale(1.1);
}
.${rt}__card:hover svg {
  transform: scale(1.5);
}

.${rt}__card::after {
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

.${rt}__backdrop {
  position: absolute;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  width: 100%;
  height: 100%;
}

.${rt}__content {
  position: relative;
  z-index: 2;
  display: grid;
  bottom: 0;
  justify-content: start;
  align-content: end;
  gap: 0.5rem;
}

.${rt}__title {
  font-size: 1.7rem;
}

.${rt}__category {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1rem;
  opacity: 0.45;
}

.${rt}__desc {
  font-size: 1.3rem;
  line-height: 1.35;
  display: grid;
  grid-template-columns: 1fr auto;
  place-content: start;
  gap: 0.5rem;
}
.${rt}__desc p {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.${rt}__desc span {
  transform: translateY(-0.1rem);
  font-size: 4rem;
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
}
`,iS=()=>{const r=_.useRef(null);return _.useEffect(()=>{const n=document.createElement("style");return n.textContent=aS,document.head.appendChild(n),r.current=n,()=>{n.remove()}},[]),u.jsx("div",{className:rt,children:u.jsx("article",{className:`${rt}__cards`,children:nS.map((n,l)=>u.jsxs("div",{className:`${rt}__card`,children:[u.jsx("img",{className:`${rt}__backdrop`,src:n.image,alt:n.title}),u.jsxs("div",{className:`${rt}__content`,children:[u.jsx("div",{className:`${rt}__category`,children:n.category}),u.jsx("div",{className:`${rt}__title`,children:n.title}),u.jsxs("div",{className:`${rt}__desc`,children:[u.jsx("p",{children:n.description}),u.jsx("span",{dangerouslySetInnerHTML:{__html:tS}})]})]})]},l))})})},lS=()=>{const r=_.useRef(null),n=_.useRef(null);return _.useEffect(()=>{(async()=>{try{const s=await(await fetch(new URL("/assets/videotext-Bqmj0-bG.html",import.meta.url).href)).text(),o=await(await fetch(new URL("data:text/css;base64,QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEA5MDAmZGlzcGxheT1zd2FwJyk7Cgo6cm9vdCB7IGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyayB9CgpzdmdbYXJpYS1oaWRkZW49J3RydWUnXVtoZWlnaHQ9JzAnXSB7IHBvc2l0aW9uOiBmaXhlZCB9CgoudmlkZW8tdGV4dC1jb250YWluZXIsIC50ZXh0LWJveCB7IGRpc3BsYXk6IGdyaWQgfQo6aXMoLnZpZGVvLXRleHQtY29udGFpbmVyLCAudGV4dC1ib3gpID4gKiB7IGdyaWQtYXJlYTogMS8gMSB9CgoudmlkZW8tdGV4dC1jb250YWluZXIgewogIGNvbnRhaW5lci10eXBlOiBpbmxpbmUtc2l6ZTsKICBwYWRkaW5nOiAuMjVyZW07CiAgYmFja2dyb3VuZDogbGlnaHQtZGFyaygjMzMzLCAjY2NjKSBjb250ZW50LWJveDsKCiAgdmlkZW8gewogICAgLS1hdXRvOiAxOwogICAgd2lkdGg6IDEwMCU7CiAgICBhc3BlY3QtcmF0aW86IDE2LyA5CiAgfQoKICAucGxheS1jdHJsIHsKICAgIC0taG92OiAwOwogICAgcGxhY2Utc2VsZjogZW5kIHN0YXJ0OwogICAgei1pbmRleDogMjsKICAgIG1hcmdpbjogLjc1ZW07CiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoZnJvbSBjdXJyZW50Y29sb3IgciBnIGIvIC41KTsKICAgIHBhZGRpbmc6IC4yNWVtOwogICAgd2lkdGg6IDRlbTsKICAgIGJvcmRlci1yYWRpdXM6IC4zNzVlbTsKICAgIG9wYWNpdHk6IGNhbGMoMSAtICgxIC0gdmFyKC0taG92KSkqLjM3NSk7CiAgICBiYWNrZ3JvdW5kOiBub25lOwogICAgZm9udDogY2xhbXAoLjYyNWVtLCA0Y3F3LCAxLjM3NWVtKSBzYW5zLXNlcmlmOwogICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsKICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1czsKICAgIGN1cnNvcjogcG9pbnRlcjsKCiAgICAmOmlzKDpob3ZlciwgOmZvY3VzKSB7IC0taG92OiAxIH0KCiAgICAmOmZvY3VzLXZpc2libGUgewogICAgICBvdXRsaW5lOiBkb3R0ZWQgMXB4OwogICAgICBvdXRsaW5lLW9mZnNldDogLTVweAogICAgfQogIH0KfQoKLnRleHQtYm94IHsgbWFyZ2luOiAtLjI1cmVtIH0KCi50ZXh0LWNvbnRlbnQgewogIGRpc3BsYXk6IGdyaWQ7CiAgcGxhY2UtY29udGVudDogY2VudGVyOwogIHotaW5kZXg6IDE7CiAgZm9udDogOTAwIGNsYW1wKDJyZW0sIDMwY3F3LCAyNXJlbSkvIDEuMDM1Y2FwIHJ1YmlrLCBzYW5zLXNlcmlmOwogIGxldHRlci1zcGFjaW5nOiAtLjAyZW07CiAgdGV4dC1hbGlnbjogY2VudGVyOwogIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CgogICY6OnNlbGVjdGlvbiB7CiAgICBjb2xvcjogbGlnaHQtZGFyaygjMDMwNDVlLCAjOThmNWUxKTsKICAgIGJhY2tncm91bmQ6IHJnYihmcm9tIGN1cnJlbnRjb2xvciByIGcgYi8gLjMpOwogICAgdGV4dC1zaGFkb3c6IDAgMCAxcHgsIDAgMCAycHgKICB9Cn0KCkBtZWRpYSBub3QgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSkgewogIC52aWRlby10ZXh0LWNvbnRhaW5lciB7IGNsaXAtcGF0aDogaW5zZXQoMXB4IHJvdW5kIC4zNzVlbSkgfQoKICAudGV4dC1ib3ggewogICAgLS1jOiBsaWdodC1kYXJrKCNhOWQ2ZTUsICMwMDE3MWYpOwogICAgY29sb3I6IHZhcigtLWMpOwogICAgZmlsdGVyOiB1cmwoI2V4dHJhY3QpCiAgICAgIGRyb3Atc2hhZG93KDAgMCAycHggdmFyKC0tYykpCiAgICAgIGRyb3Atc2hhZG93KDJweCAycHggNHB4ICMwMjAyMDIpOwoKICAgICY6bm90KC5iYWNrLWltZyk6bm90KDpoYXMoPiAudGV4dC1jb250ZXh0KSkgewogICAgICBiYWNrZ3JvdW5kOiByZ2IoZnJvbSB2YXIoLS1jKSByIGcgYi8gLjgpOwogICAgfQogIH0KCiAgLmJhY2staW1nIHsKICAgIC0tYmFjazogY29uaWMtZ3JhZGllbnQoZnJvbSA5MGRlZyBhdCAxcHggMXB4LAogICAgICAgICAgdmFyKC0tYykgMjUlLCBncmV5IDAlKQogICAgICAgIC0uNXB4IC0uNXB4LyAzcmVtIDNyZW0gcm91bmQ7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICBjb2xvcjogIzAwMDA7CiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrKTsKICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDsKCiAgICAmOjphZnRlciB7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgaW5zZXQ6IDA7CiAgICAgIG9wYWNpdHk6IC44OwogICAgICB6LWluZGV4OiAtMTsKICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDsKICAgICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94OwogICAgICBjb250ZW50OiAnJwogICAgfQogIH0KCiAgLmJhY2staW1nLS1tdWx0aSB7CiAgICAtLWJhY2s6CiAgICAgIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsCiAgICAgICAgICBsaWdodC1kYXJrKCNhOWQ2ZTUsICMwMjNlN2QpLAogICAgICAgICAgbGlnaHQtZGFyaygjYWJjNGZmLCAjMzM0MTVjKSksCiAgICAgIHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ1NDI2NzI4NjMyNy0yMTYxYzA0NjA1Y2U/dz02NDApCiAgICAgICAgNTAlLyBjb3ZlciwKICAgICAgbGlnaHQtZGFyaygjZGVkZWRlLCAjOTk5KTsKCiAgICAmOjphZnRlciB7IGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodCB9CiAgfQoKICAudGV4dC1jb250ZXh0IHsKICAgIC0tYmFjazogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLAogICAgICBsaWdodC1kYXJrKCNhOWQ2ZTUsICMwMDI4NTUpLCBsaWdodC1kYXJrKCNhYmM0ZmYsICMzMzQxNWMpKTsKCiAgICBvcGFjaXR5OiAuODsKICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2spCiAgfQp9CgpAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1kYXRhOiByZWR1Y2UpLAogIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHsKICAgIC52aWRlby10ZXh0LWNvbnRhaW5lciB2aWRlbyB7IC0tYXV0bzogMCB9Cn0KCmJvZHkgewogIGRpc3BsYXk6IGdyaWQ7CiAgZ3JpZC1nYXA6IDJlbTsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6CiAgICByZXBlYXQoYXV0by1maXQsIG1pbm1heChtaW4oMTAwJSwgNDByZW0pLCAxZnIpKTsKICBwbGFjZS1jb250ZW50OiBjZW50ZXI7CiAgcGFkZGluZzogMmVtIGNhbGMoLjVlbSArIHNpZ24oMTAwdncgLSAyMGVtKSo2dncpOwogIGJhY2tncm91bmQ6IGxpZ2h0LWRhcmsoIzg5YzJkOSwgIzMzNDE1Yyk7CiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDVweCAjMDAwOSkKfQoKLnRleHQtY29udGV4dCB7CiAgZGlzcGxheTogZ3JpZDsKICBwbGFjZS1pdGVtczogZW5kOwogIHBhZGRpbmc6IC41ZW07CiAgZm9udC1zaXplOiBjbGFtcCguNzVlbSwgOHZ3LCAyLjI1ZW0pCn0K",import.meta.url).href)).text(),x=await(await fetch(new URL("data:text/javascript;base64,Y29uc3QgRk4gPSBbJ3BsYXknLCAncGF1c2UnXQoKZnVuY3Rpb24gZ2V0VXBzdHJlYW0oX2VsLCBjbHMpIHsKICBpZihfZWwgPT09IGRvY3VtZW50LmJvZHkpIHJldHVybiBudWxsOwogIGlmKF9lbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkgcmV0dXJuIF9lbDsKICByZXR1cm4gZ2V0VXBzdHJlYW0oX2VsLnBhcmVudE5vZGUsIGNscykKfQoKZnVuY3Rpb24gdXBkYXRlKF9idG4sIGJpdCA9IDApIHsKICBfYnRuLnRleHRDb250ZW50ID0gRk5bX2J0bi5kYXRhc2V0LmFjdGlvbiA9IGJpdF0KfQoKZnVuY3Rpb24gbWFudWFsKF92aWQpIHsKICBsZXQgX2NvbnQgPSBnZXRVcHN0cmVhbShfdmlkLCAndmlkZW8tdGV4dC1jb250YWluZXInKSwKICAgICAgX2J0biA9IG51bGw7CgogIF92aWQuZGF0YXNldC5hdXRvID0gMDsKICBfdmlkLnBhdXNlKCk7CgogIGlmKF9jb250KSB7CiAgICBsZXQgX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOwoKICAgIF9idG4uY2xhc3NMaXN0LmFkZCgncGxheS1jdHJsJyk7CiAgICB1cGRhdGUoX2J0bik7CiAgICBfY29udC5hcHBlbmRDaGlsZChfYnRuKTsKCiAgICByZXR1cm4gX2J0bgogIH0KfQoKYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGUgPT4gewogIGNvbnN0IF9WSURTID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvJyldOwoKICBfVklEUy5mb3JFYWNoKChfdmlkLCBpKSA9PiB7CiAgICBsZXQgX2J0biA9IG51bGw7CgogICAgaWYoK2dldENvbXB1dGVkU3R5bGUoX3ZpZCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1hdXRvJykpIHsKICAgICAgbGV0IHByb21pc2UgPSBfdmlkLnBsYXkoKTsKCiAgICAgIGlmKHByb21pc2UgIT09IHVuZGVmaW5lZCkKICAgICAgICBwcm9taXNlLnRoZW4oXyA9PiB7IF92aWQuZGF0YXNldC5hdXRvID0gMSB9KQogICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHsgX2J0biA9IG1hbnVhbChfdmlkKSB9KQogICAgfQogICAgZWxzZSBfYnRuID0gbWFudWFsKF92aWQpOwoKICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4gewogICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7CiAgICAgICAgbGV0IGludmlldyA9IE1hdGguY2VpbChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyk7CiAgICAgICAgaWYoK192aWQuZGF0YXNldC5hdXRvKSBfdmlkW0ZOW2ludmlld11dKCk7CiAgICAgICAgZWxzZSB7CiAgICAgICAgICBpZighaW52aWV3ICYmIF9idG4gJiYgK19idG4uZGF0YXNldC5hY3Rpb24pIHsKICAgICAgICAgICAgX3ZpZC5wYXVzZSgpOwogICAgICAgICAgICB1cGRhdGUoX2J0bikKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0pOwogICAgfSk7CgogICAgb2JzZXJ2ZXIub2JzZXJ2ZShfdmlkKTsKICB9KTsKCiAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHsKICAgIGxldCBfdCA9IGUudGFyZ2V0OwoKICAgIGlmKF90LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicpIHsKICAgICAgbGV0IGJpdCA9ICtfdC5kYXRhc2V0LmFjdGlvbiwKICAgICAgICAgIF9jb250ID0gZ2V0VXBzdHJlYW0oX3QsICd2aWRlby10ZXh0LWNvbnRhaW5lcicpLAogICAgICAgICAgX3ZpZCA9IG51bGw7CgogICAgICBpZihfY29udCkgX3ZpZCA9IF9jb250LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7CgogICAgICBpZihfdmlkKSB7CiAgICAgICAgdXBkYXRlKF90LCAxIC0gYml0KTsKICAgICAgICBfdmlkW0ZOW2JpdF1dKCkKICAgICAgfQogICAgfQogIH0pCn0pCg==",import.meta.url).href)).text(),p=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    ${o}
  </style>
</head>
<body>
  ${s}
  <script>
    ${x}
  <\/script>
</body>
</html>
        `;n.current&&(n.current.srcdoc=p)}catch(a){console.error("Failed to load videotext demo:",a)}})()},[]),u.jsx("div",{ref:r,className:"w-full h-full relative",children:u.jsx("iframe",{ref:n,className:"w-full h-full border-0",title:"Video Text Wrapping",allow:"autoplay"})})},rS=[{id:"gooey",name:"Gooey Overlay",description:"Scroll-driven liquid drops",author:"ksenia-k",url:"https://codepen.io/ksenia-k/pen/NWmMxLg"},{id:"parallax",name:"Parallax Scroll",description:"SVG landscape parallax",author:"isladjan",url:"https://codepen.io/isladjan/pen/abdyPBw"},{id:"frosted",name:"Frosted Glass",description:"CSS backdrop-filter cards",author:"lessthanthree",url:"https://codepen.io/lessthanthree/pen/LENwGyZ"},{id:"videotext",name:"Video Text",description:"SVG filter video text fill",author:"thebabydino",url:"https://codepen.io/thebabydino/pen/RNBwBYe"}],oS=({active:r,onSelect:n})=>u.jsx("div",{className:"px-5 py-3 flex-shrink-0",children:u.jsx("div",{className:"flex gap-2 overflow-x-auto scrollbar-hide",children:rS.map(l=>u.jsx("button",{onClick:()=>n(l.id),className:`px-3 py-1.5 rounded-full text-[10px] font-medium whitespace-nowrap transition-colors flex-shrink-0 ${r===l.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.name},l.id))})}),sS=r=>{const[n,l]=_.useState([]),a=_.useRef(),s=_.useRef({x:0,y:0}),f=_.useRef([]),o=_.useRef(0),m=_.useRef(0),x=_.useCallback((g,v)=>{s.current={x:g,y:v}},[]),p=_.useCallback(()=>{o.current++;const g={x:s.current.x,y:s.current.y,id:m.current++,angle:o.current*r.rotationSpeed,hue:(r.baseHue+o.current*r.hueSpeed)%360,timestamp:Date.now()};f.current=[g,...f.current].slice(0,r.trailLength),l([...f.current]),a.current=requestAnimationFrame(p)},[r.trailLength,r.rotationSpeed,r.hueSpeed,r.baseHue]);return _.useEffect(()=>(a.current=requestAnimationFrame(p),()=>{a.current&&cancelAnimationFrame(a.current)}),[p]),{trail:n,handleMove:x}},cS=({type:r,text:n,size:l})=>{const a={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};switch(r){case"square":return u.jsx("div",{style:{...a,backgroundColor:"currentColor"}});case"circle":return u.jsx("div",{style:{...a,backgroundColor:"currentColor",borderRadius:"50%"}});case"triangle":return u.jsx("div",{style:{width:0,height:0,borderLeft:`${l/2}px solid transparent`,borderRight:`${l/2}px solid transparent`,borderBottom:`${l}px solid currentColor`}});case"star":return u.jsx("div",{style:{...a,backgroundColor:"currentColor",clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"}});case"text":return u.jsx("div",{style:{...a,fontSize:`${l}px`,whiteSpace:"nowrap",color:"currentColor",fontWeight:"bold"},children:n});default:return null}},uS=({params:r})=>{const n=_.useRef(null),{trail:l,handleMove:a}=sS(r),s=o=>{if(n.current){const m=n.current.getBoundingClientRect();a(o.clientX-m.left,o.clientY-m.top)}},f=o=>{if(n.current){const m=n.current.getBoundingClientRect(),x=o.touches[0];a(x.clientX-m.left,x.clientY-m.top)}};return _.useEffect(()=>{const o=n.current;if(!o)return;const m=x=>x.preventDefault();return o.addEventListener("touchmove",m,{passive:!1}),()=>o.removeEventListener("touchmove",m)},[]),u.jsxs("div",{ref:n,onPointerMove:s,onTouchMove:f,className:"relative w-full h-full bg-neutral-950 overflow-hidden cursor-crosshair touch-none",children:[u.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none",children:u.jsx("h1",{className:"text-[120px] font-black text-white tracking-tighter select-none",children:"ECHO"})}),l.length===0&&u.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:u.jsx("p",{className:"text-neutral-500 text-sm animate-pulse",children:"Move your cursor"})}),l.map((o,m)=>{const x=m/r.trailLength,p=r.scaleDecay?Math.max(.1,1-x):1,g=r.opacityDecay?1-x:1,v=`hsl(${o.hue}, 100%, 50%)`;return u.jsx("div",{className:"absolute top-0 left-0 pointer-events-none will-change-transform",style:{transform:`translate3d(${o.x-r.size/2}px, ${o.y-r.size/2}px, 0) scale(${p}) rotate(${o.angle}deg)`,width:r.size,height:r.size,opacity:g,color:v,mixBlendMode:r.blendMode,zIndex:r.trailLength-m},children:u.jsx(cS,{type:r.shape,text:r.text,size:r.size})},o.id)})]})},fS={trailLength:30,shape:"circle",text:"Echo",size:40,opacityDecay:!0,scaleDecay:!0,rotationSpeed:0,hueSpeed:2,baseHue:280,blendMode:"screen",spread:1,lag:.1},dS=[{value:"normal",label:"Normal"},{value:"screen",label:"Glow"},{value:"difference",label:"Psychedelic"},{value:"exclusion",label:"X-Ray"},{value:"plus-lighter",label:"Neon"}],mS=[{value:"circle",label:"●"},{value:"square",label:"■"},{value:"triangle",label:"▲"},{value:"star",label:"★"},{value:"text",label:"Aa"}],vc=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(s>=1?0:1)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Cx=({label:r,value:n,onChange:l})=>u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("button",{onClick:()=>l(!n),className:`relative w-7 h-4 rounded-full transition-colors ${n?"bg-neutral-800":"bg-neutral-300"}`,children:u.jsx("span",{className:`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${n?"translate-x-3":"translate-x-0"}`})})]}),hS=({params:r,onChange:n})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Shape"}),u.jsx("div",{className:"flex gap-1.5",children:mS.map(l=>u.jsx("button",{onClick:()=>n({...r,shape:l.value}),className:`flex-1 h-8 rounded-lg text-sm font-bold transition-all ${r.shape===l.value?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-400 hover:bg-neutral-200"}`,children:l.label},l.value))}),r.shape==="text"&&u.jsx("input",{type:"text",value:r.text,onChange:l=>n({...r,text:l.target.value}),maxLength:10,className:"w-full mt-2 px-2 py-1.5 text-xs bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400",placeholder:"Text content"})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Style"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(vc,{label:"Size",value:r.size,min:10,max:200,step:5,onChange:l=>n({...r,size:l})}),u.jsxs("div",{children:[u.jsx("div",{className:"flex items-center justify-between mb-1",children:u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Blend Mode"})}),u.jsx("select",{value:r.blendMode,onChange:l=>n({...r,blendMode:l.target.value}),className:"w-full px-2 py-1.5 text-[9px] bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400",children:dS.map(l=>u.jsx("option",{value:l.value,children:l.label},l.value))})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Base Hue"}),u.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-200",style:{backgroundColor:`hsl(${r.baseHue}, 100%, 50%)`}})]}),u.jsx("input",{type:"range",min:0,max:360,step:1,value:r.baseHue,onChange:l=>n({...r,baseHue:parseInt(l.target.value)}),className:"w-full h-1 rounded-full appearance-none cursor-pointer",style:{background:"linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))"}})]}),u.jsx(vc,{label:"Rainbow Speed",value:r.hueSpeed,min:0,max:20,step:.5,onChange:l=>n({...r,hueSpeed:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Physics"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(vc,{label:"Trail Length",value:r.trailLength,min:5,max:200,step:5,onChange:l=>n({...r,trailLength:l})}),u.jsx(vc,{label:"Spin Speed",value:r.rotationSpeed,min:-20,max:20,step:1,onChange:l=>n({...r,rotationSpeed:l})}),u.jsx(Cx,{label:"Fade Out",value:r.opacityDecay,onChange:l=>n({...r,opacityDecay:l})}),u.jsx(Cx,{label:"Shrink Trail",value:r.scaleDecay,onChange:l=>n({...r,scaleDecay:l})})]})]})]});function Oa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function D1(r,n){r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vr={duration:.5,overwrite:!1,delay:0},T0,Ft,st,Hn=1e8,Ke=1/Hn,r0=Math.PI*2,pS=r0/4,gS=0,E1=Math.sqrt,xS=Math.cos,vS=Math.sin,Et=function(n){return typeof n=="string"},pt=function(n){return typeof n=="function"},Pa=function(n){return typeof n=="number"},j0=function(n){return typeof n>"u"},ga=function(n){return typeof n=="object"},ln=function(n){return n!==!1},M0=function(){return typeof window<"u"},bc=function(n){return pt(n)||Et(n)},k1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qt=Array.isArray,bS=/random\([^)]+\)/g,yS=/,\s*/g,Ax=/(?:-?\.?\d|\.)+/gi,z1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,cr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,B1=/[+-]=-?[.\d]+/,SS=/[^,'"\[\]\s]+/gi,wS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,ma,o0,D0,Nn={},Uc={},L1,O1=function(n){return(Uc=br(n,Nn))&&cn},E0=function(n,l){return console.warn("Invalid property",n,"set to",l,"Missing plugin? gsap.registerPlugin()")},Vo=function(n,l){return!l&&console.warn(n)},F1=function(n,l){return n&&(Nn[n]=l)&&Uc&&(Uc[n]=l)||Nn},Yo=function(){return 0},_S={suppressEvents:!0,isStart:!0,kill:!1},kc={suppressEvents:!0,kill:!1},CS={suppressEvents:!0},k0={},Ri=[],s0={},I1,wn={},Ed={},Rx=30,zc=[],z0="",B0=function(n){var l=n[0],a,s;if(ga(l)||pt(l)||(n=[n]),!(a=(l._gsap||{}).harness)){for(s=zc.length;s--&&!zc[s].targetTest(l););a=zc[s]}for(s=n.length;s--;)n[s]&&(n[s]._gsap||(n[s]._gsap=new cv(n[s],a)))||n.splice(s,1);return n},al=function(n){return n._gsap||B0(qn(n))[0]._gsap},G1=function(n,l,a){return(a=n[l])&&pt(a)?n[l]():j0(a)&&n.getAttribute&&n.getAttribute(l)||a},rn=function(n,l){return(n=n.split(",")).forEach(l)||n},bt=function(n){return Math.round(n*1e5)/1e5||0},ct=function(n){return Math.round(n*1e7)/1e7||0},mr=function(n,l){var a=l.charAt(0),s=parseFloat(l.substr(2));return n=parseFloat(n),a==="+"?n+s:a==="-"?n-s:a==="*"?n*s:n/s},AS=function(n,l){for(var a=l.length,s=0;n.indexOf(l[s])<0&&++s<a;);return s<a},Pc=function(){var n=Ri.length,l=Ri.slice(0),a,s;for(s0={},Ri.length=0,a=0;a<n;a++)s=l[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},L0=function(n){return!!(n._initted||n._startAt||n.add)},U1=function(n,l,a,s){Ri.length&&!Ft&&Pc(),n.render(l,a,!!(Ft&&l<0&&L0(n))),Ri.length&&!Ft&&Pc()},P1=function(n){var l=parseFloat(n);return(l||l===0)&&(n+"").match(SS).length<2?l:Et(n)?n.trim():n},H1=function(n){return n},Tn=function(n,l){for(var a in l)a in n||(n[a]=l[a]);return n},RS=function(n){return function(l,a){for(var s in a)s in l||s==="duration"&&n||s==="ease"||(l[s]=a[s])}},br=function(n,l){for(var a in l)n[a]=l[a];return n},Nx=function r(n,l){for(var a in l)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(n[a]=ga(l[a])?r(n[a]||(n[a]={}),l[a]):l[a]);return n},Hc=function(n,l){var a={},s;for(s in n)s in l||(a[s]=n[s]);return a},Fo=function(n){var l=n.parent||ut,a=n.keyframes?RS(qt(n.keyframes)):Tn;if(ln(n.inherit))for(;l;)a(n,l.vars.defaults),l=l.parent||l._dp;return n},NS=function(n,l){for(var a=n.length,s=a===l.length;s&&a--&&n[a]===l[a];);return a<0},q1=function(n,l,a,s,f){var o=n[s],m;if(f)for(m=l[f];o&&o[f]>m;)o=o._prev;return o?(l._next=o._next,o._next=l):(l._next=n[a],n[a]=l),l._next?l._next._prev=l:n[s]=l,l._prev=o,l.parent=l._dp=n,l},eu=function(n,l,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var f=l._prev,o=l._next;f?f._next=o:n[a]===l&&(n[a]=o),o?o._prev=f:n[s]===l&&(n[s]=f),l._next=l._prev=l.parent=null},Ti=function(n,l){n.parent&&(!l||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},il=function(n,l){if(n&&(!l||l._end>n._dur||l._start<0))for(var a=n;a;)a._dirty=1,a=a.parent;return n},TS=function(n){for(var l=n.parent;l&&l.parent;)l._dirty=1,l.totalDuration(),l=l.parent;return n},c0=function(n,l,a,s){return n._startAt&&(Ft?n._startAt.revert(kc):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(l,!0,s))},jS=function r(n){return!n||n._ts&&r(n.parent)},Tx=function(n){return n._repeat?yr(n._tTime,n=n.duration()+n._rDelay)*n:0},yr=function(n,l){var a=Math.floor(n=ct(n/l));return n&&a===n?a-1:a},qc=function(n,l){return(n-l._start)*l._ts+(l._ts>=0?0:l._dirty?l.totalDuration():l._tDur)},tu=function(n){return n._end=ct(n._start+(n._tDur/Math.abs(n._ts||n._rts||Ke)||0))},nu=function(n,l){var a=n._dp;return a&&a.smoothChildTiming&&n._ts&&(n._start=ct(a._time-(n._ts>0?l/n._ts:((n._dirty?n.totalDuration():n._tDur)-l)/-n._ts)),tu(n),a._dirty||il(a,n)),n},V1=function(n,l){var a;if((l._time||!l._dur&&l._initted||l._start<n._time&&(l._dur||!l.add))&&(a=qc(n.rawTime(),l),(!l._dur||es(0,l.totalDuration(),a)-l._tTime>Ke)&&l.render(a,!0)),il(n,l)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(a=n;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;n._zTime=-Ke}},ha=function(n,l,a,s){return l.parent&&Ti(l),l._start=ct((Pa(a)?a:a||n!==ut?Pn(n,a,l):n._time)+l._delay),l._end=ct(l._start+(l.totalDuration()/Math.abs(l.timeScale())||0)),q1(n,l,"_first","_last",n._sort?"_start":0),u0(l)||(n._recent=l),s||V1(n,l),n._ts<0&&nu(n,n._tTime),n},Y1=function(n,l){return(Nn.ScrollTrigger||E0("scrollTrigger",l))&&Nn.ScrollTrigger.create(l,n)},X1=function(n,l,a,s,f){if(F0(n,l,f),!n._initted)return 1;if(!a&&n._pt&&!Ft&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&I1!==_n.frame)return Ri.push(n),n._lazy=[f,s],1},MS=function r(n){var l=n.parent;return l&&l._ts&&l._initted&&!l._lock&&(l.rawTime()<0||r(l))},u0=function(n){var l=n.data;return l==="isFromStart"||l==="isStart"},DS=function(n,l,a,s){var f=n.ratio,o=l<0||!l&&(!n._start&&MS(n)&&!(!n._initted&&u0(n))||(n._ts<0||n._dp._ts<0)&&!u0(n))?0:1,m=n._rDelay,x=0,p,g,v;if(m&&n._repeat&&(x=es(0,n._tDur,l),g=yr(x,m),n._yoyo&&g&1&&(o=1-o),g!==yr(n._tTime,m)&&(f=1-o,n.vars.repeatRefresh&&n._initted&&n.invalidate())),o!==f||Ft||s||n._zTime===Ke||!l&&n._zTime){if(!n._initted&&X1(n,l,s,a,x))return;for(v=n._zTime,n._zTime=l||(a?Ke:0),a||(a=l&&!v),n.ratio=o,n._from&&(o=1-o),n._time=0,n._tTime=x,p=n._pt;p;)p.r(o,p.d),p=p._next;l<0&&c0(n,l,a,!0),n._onUpdate&&!a&&Cn(n,"onUpdate"),x&&n._repeat&&!a&&n.parent&&Cn(n,"onRepeat"),(l>=n._tDur||l<0)&&n.ratio===o&&(o&&Ti(n,1),!a&&!Ft&&(Cn(n,o?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=l)},ES=function(n,l,a){var s;if(a>l)for(s=n._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>l)return s;s=s._next}else for(s=n._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<l)return s;s=s._prev}},Sr=function(n,l,a,s){var f=n._repeat,o=ct(l)||0,m=n._tTime/n._tDur;return m&&!s&&(n._time*=o/n._dur),n._dur=o,n._tDur=f?f<0?1e10:ct(o*(f+1)+n._rDelay*f):o,m>0&&!s&&nu(n,n._tTime=n._tDur*m),n.parent&&tu(n),a||il(n.parent,n),n},jx=function(n){return n instanceof Kt?il(n):Sr(n,n._dur)},kS={_start:0,endTime:Yo,totalDuration:Yo},Pn=function r(n,l,a){var s=n.labels,f=n._recent||kS,o=n.duration()>=Hn?f.endTime(!1):n._dur,m,x,p;return Et(l)&&(isNaN(l)||l in s)?(x=l.charAt(0),p=l.substr(-1)==="%",m=l.indexOf("="),x==="<"||x===">"?(m>=0&&(l=l.replace(/=/,"")),(x==="<"?f._start:f.endTime(f._repeat>=0))+(parseFloat(l.substr(1))||0)*(p?(m<0?f:a).totalDuration()/100:1)):m<0?(l in s||(s[l]=o),s[l]):(x=parseFloat(l.charAt(m-1)+l.substr(m+1)),p&&a&&(x=x/100*(qt(a)?a[0]:a).totalDuration()),m>1?r(n,l.substr(0,m-1),a)+x:o+x)):l==null?o:+l},Io=function(n,l,a){var s=Pa(l[1]),f=(s?2:1)+(n<2?0:1),o=l[f],m,x;if(s&&(o.duration=l[1]),o.parent=a,n){for(m=o,x=a;x&&!("immediateRender"in m);)m=x.vars.defaults||{},x=ln(x.vars.inherit)&&x.parent;o.immediateRender=ln(m.immediateRender),n<2?o.runBackwards=1:o.startAt=l[f-1]}return new Rt(l[0],o,l[f+1])},Di=function(n,l){return n||n===0?l(n):l},es=function(n,l,a){return a<n?n:a>l?l:a},Ht=function(n,l){return!Et(n)||!(l=wS.exec(n))?"":l[1]},zS=function(n,l,a){return Di(a,function(s){return es(n,l,s)})},f0=[].slice,Z1=function(n,l){return n&&ga(n)&&"length"in n&&(!l&&!n.length||n.length-1 in n&&ga(n[0]))&&!n.nodeType&&n!==ma},BS=function(n,l,a){return a===void 0&&(a=[]),n.forEach(function(s){var f;return Et(s)&&!l||Z1(s,1)?(f=a).push.apply(f,qn(s)):a.push(s)})||a},qn=function(n,l,a){return st&&!l&&st.selector?st.selector(n):Et(n)&&!a&&(o0||!wr())?f0.call((l||D0).querySelectorAll(n),0):qt(n)?BS(n,a):Z1(n)?f0.call(n,0):n?[n]:[]},d0=function(n){return n=qn(n)[0]||Vo("Invalid scope")||{},function(l){var a=n.current||n.nativeElement||n;return qn(l,a.querySelectorAll?a:a===n?Vo("Invalid scope")||D0.createElement("div"):n)}},W1=function(n){return n.sort(function(){return .5-Math.random()})},K1=function(n){if(pt(n))return n;var l=ga(n)?n:{each:n},a=ll(l.ease),s=l.from||0,f=parseFloat(l.base)||0,o={},m=s>0&&s<1,x=isNaN(s)||m,p=l.axis,g=s,v=s;return Et(s)?g=v={center:.5,edges:.5,end:1}[s]||0:!m&&x&&(g=s[0],v=s[1]),function(S,y,R){var w=(R||l).length,N=o[w],j,A,C,z,M,k,D,B,E;if(!N){if(E=l.grid==="auto"?0:(l.grid||[1,Hn])[1],!E){for(D=-Hn;D<(D=R[E++].getBoundingClientRect().left)&&E<w;);E<w&&E--}for(N=o[w]=[],j=x?Math.min(E,w)*g-.5:s%E,A=E===Hn?0:x?w*v/E-.5:s/E|0,D=0,B=Hn,k=0;k<w;k++)C=k%E-j,z=A-(k/E|0),N[k]=M=p?Math.abs(p==="y"?z:C):E1(C*C+z*z),M>D&&(D=M),M<B&&(B=M);s==="random"&&W1(N),N.max=D-B,N.min=B,N.v=w=(parseFloat(l.amount)||parseFloat(l.each)*(E>w?w-1:p?p==="y"?w/E:E:Math.max(E,w/E))||0)*(s==="edges"?-1:1),N.b=w<0?f-w:f,N.u=Ht(l.amount||l.each)||0,a=a&&w<0?rv(a):a}return w=(N[S]-N.min)/N.max||0,ct(N.b+(a?a(w):w)*N.v)+N.u}},m0=function(n){var l=Math.pow(10,((n+"").split(".")[1]||"").length);return function(a){var s=ct(Math.round(parseFloat(a)/n)*n*l);return(s-s%1)/l+(Pa(a)?0:Ht(a))}},Q1=function(n,l){var a=qt(n),s,f;return!a&&ga(n)&&(s=a=n.radius||Hn,n.values?(n=qn(n.values),(f=!Pa(n[0]))&&(s*=s)):n=m0(n.increment)),Di(l,a?pt(n)?function(o){return f=n(o),Math.abs(f-o)<=s?f:o}:function(o){for(var m=parseFloat(f?o.x:o),x=parseFloat(f?o.y:0),p=Hn,g=0,v=n.length,S,y;v--;)f?(S=n[v].x-m,y=n[v].y-x,S=S*S+y*y):S=Math.abs(n[v]-m),S<p&&(p=S,g=v);return g=!s||p<=s?n[g]:o,f||g===o||Pa(o)?g:g+Ht(o)}:m0(n))},$1=function(n,l,a,s){return Di(qt(n)?!l:a===!0?!!(a=0):!s,function(){return qt(n)?n[~~(Math.random()*n.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((n-a/2+Math.random()*(l-n+a*.99))/a)*a*s)/s})},LS=function(){for(var n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return function(s){return l.reduce(function(f,o){return o(f)},s)}},OS=function(n,l){return function(a){return n(parseFloat(a))+(l||Ht(a))}},FS=function(n,l,a){return ev(n,l,0,1,a)},J1=function(n,l,a){return Di(a,function(s){return n[~~l(s)]})},IS=function r(n,l,a){var s=l-n;return qt(n)?J1(n,r(0,n.length),l):Di(a,function(f){return(s+(f-n)%s)%s+n})},GS=function r(n,l,a){var s=l-n,f=s*2;return qt(n)?J1(n,r(0,n.length-1),l):Di(a,function(o){return o=(f+(o-n)%f)%f||0,n+(o>s?f-o:o)})},Xo=function(n){return n.replace(bS,function(l){var a=l.indexOf("[")+1,s=l.substring(a||7,a?l.indexOf("]"):l.length-1).split(yS);return $1(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},ev=function(n,l,a,s,f){var o=l-n,m=s-a;return Di(f,function(x){return a+((x-n)/o*m||0)})},US=function r(n,l,a,s){var f=isNaN(n+l)?0:function(y){return(1-y)*n+y*l};if(!f){var o=Et(n),m={},x,p,g,v,S;if(a===!0&&(s=1)&&(a=null),o)n={p:n},l={p:l};else if(qt(n)&&!qt(l)){for(g=[],v=n.length,S=v-2,p=1;p<v;p++)g.push(r(n[p-1],n[p]));v--,f=function(R){R*=v;var w=Math.min(S,~~R);return g[w](R-w)},a=l}else s||(n=br(qt(n)?[]:{},n));if(!g){for(x in l)O0.call(m,n,x,"get",l[x]);f=function(R){return U0(R,m)||(o?n.p:n)}}}return Di(a,f)},Mx=function(n,l,a){var s=n.labels,f=Hn,o,m,x;for(o in s)m=s[o]-l,m<0==!!a&&m&&f>(m=Math.abs(m))&&(x=o,f=m);return x},Cn=function(n,l,a){var s=n.vars,f=s[l],o=st,m=n._ctx,x,p,g;if(f)return x=s[l+"Params"],p=s.callbackScope||n,a&&Ri.length&&Pc(),m&&(st=m),g=x?f.apply(p,x):f.call(p),st=o,g},zo=function(n){return Ti(n),n.scrollTrigger&&n.scrollTrigger.kill(!!Ft),n.progress()<1&&Cn(n,"onInterrupt"),n},ur,tv=[],nv=function(n){if(n)if(n=!n.name&&n.default||n,M0()||n.headless){var l=n.name,a=pt(n),s=l&&!a&&n.init?function(){this._props=[]}:n,f={init:Yo,render:U0,add:O0,kill:a5,modifier:n5,rawVars:0},o={targetTest:0,get:0,getSetter:G0,aliases:{},register:0};if(wr(),n!==s){if(wn[l])return;Tn(s,Tn(Hc(n,f),o)),br(s.prototype,br(f,Hc(n,o))),wn[s.prop=l]=s,n.targetTest&&(zc.push(s),k0[l]=1),l=(l==="css"?"CSS":l.charAt(0).toUpperCase()+l.substr(1))+"Plugin"}F1(l,s),n.register&&n.register(cn,s,on)}else tv.push(n)},We=255,Bo={aqua:[0,We,We],lime:[0,We,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,We],navy:[0,0,128],white:[We,We,We],olive:[128,128,0],yellow:[We,We,0],orange:[We,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[We,0,0],pink:[We,192,203],cyan:[0,We,We],transparent:[We,We,We,0]},kd=function(n,l,a){return n+=n<0?1:n>1?-1:0,(n*6<1?l+(a-l)*n*6:n<.5?a:n*3<2?l+(a-l)*(2/3-n)*6:l)*We+.5|0},av=function(n,l,a){var s=n?Pa(n)?[n>>16,n>>8&We,n&We]:0:Bo.black,f,o,m,x,p,g,v,S,y,R;if(!s){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),Bo[n])s=Bo[n];else if(n.charAt(0)==="#"){if(n.length<6&&(f=n.charAt(1),o=n.charAt(2),m=n.charAt(3),n="#"+f+f+o+o+m+m+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return s=parseInt(n.substr(1,6),16),[s>>16,s>>8&We,s&We,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),s=[n>>16,n>>8&We,n&We]}else if(n.substr(0,3)==="hsl"){if(s=R=n.match(Ax),!l)x=+s[0]%360/360,p=+s[1]/100,g=+s[2]/100,o=g<=.5?g*(p+1):g+p-g*p,f=g*2-o,s.length>3&&(s[3]*=1),s[0]=kd(x+1/3,f,o),s[1]=kd(x,f,o),s[2]=kd(x-1/3,f,o);else if(~n.indexOf("="))return s=n.match(z1),a&&s.length<4&&(s[3]=1),s}else s=n.match(Ax)||Bo.transparent;s=s.map(Number)}return l&&!R&&(f=s[0]/We,o=s[1]/We,m=s[2]/We,v=Math.max(f,o,m),S=Math.min(f,o,m),g=(v+S)/2,v===S?x=p=0:(y=v-S,p=g>.5?y/(2-v-S):y/(v+S),x=v===f?(o-m)/y+(o<m?6:0):v===o?(m-f)/y+2:(f-o)/y+4,x*=60),s[0]=~~(x+.5),s[1]=~~(p*100+.5),s[2]=~~(g*100+.5)),a&&s.length<4&&(s[3]=1),s},iv=function(n){var l=[],a=[],s=-1;return n.split(Ni).forEach(function(f){var o=f.match(cr)||[];l.push.apply(l,o),a.push(s+=o.length+1)}),l.c=a,l},Dx=function(n,l,a){var s="",f=(n+s).match(Ni),o=l?"hsla(":"rgba(",m=0,x,p,g,v;if(!f)return n;if(f=f.map(function(S){return(S=av(S,l,1))&&o+(l?S[0]+","+S[1]+"%,"+S[2]+"%,"+S[3]:S.join(","))+")"}),a&&(g=iv(n),x=a.c,x.join(s)!==g.c.join(s)))for(p=n.replace(Ni,"1").split(cr),v=p.length-1;m<v;m++)s+=p[m]+(~x.indexOf(m)?f.shift()||o+"0,0,0,0)":(g.length?g:f.length?f:a).shift());if(!p)for(p=n.split(Ni),v=p.length-1;m<v;m++)s+=p[m]+f[m];return s+p[v]},Ni=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",n;for(n in Bo)r+="|"+n+"\\b";return new RegExp(r+")","gi")})(),PS=/hsl[a]?\(/,lv=function(n){var l=n.join(" "),a;if(Ni.lastIndex=0,Ni.test(l))return a=PS.test(l),n[1]=Dx(n[1],a),n[0]=Dx(n[0],a,iv(n[1])),!0},Zo,_n=(function(){var r=Date.now,n=500,l=33,a=r(),s=a,f=1e3/240,o=f,m=[],x,p,g,v,S,y,R=function w(N){var j=r()-s,A=N===!0,C,z,M,k;if((j>n||j<0)&&(a+=j-l),s+=j,M=s-a,C=M-o,(C>0||A)&&(k=++v.frame,S=M-v.time*1e3,v.time=M=M/1e3,o+=C+(C>=f?4:f-C),z=1),A||(x=p(w)),z)for(y=0;y<m.length;y++)m[y](M,S,k,N)};return v={time:0,frame:0,tick:function(){R(!0)},deltaRatio:function(N){return S/(1e3/(N||60))},wake:function(){L1&&(!o0&&M0()&&(ma=o0=window,D0=ma.document||{},Nn.gsap=cn,(ma.gsapVersions||(ma.gsapVersions=[])).push(cn.version),O1(Uc||ma.GreenSockGlobals||!ma.gsap&&ma||{}),tv.forEach(nv)),g=typeof requestAnimationFrame<"u"&&requestAnimationFrame,x&&v.sleep(),p=g||function(N){return setTimeout(N,o-v.time*1e3+1|0)},Zo=1,R(2))},sleep:function(){(g?cancelAnimationFrame:clearTimeout)(x),Zo=0,p=Yo},lagSmoothing:function(N,j){n=N||1/0,l=Math.min(j||33,n)},fps:function(N){f=1e3/(N||240),o=v.time*1e3+f},add:function(N,j,A){var C=j?function(z,M,k,D){N(z,M,k,D),v.remove(C)}:N;return v.remove(N),m[A?"unshift":"push"](C),wr(),C},remove:function(N,j){~(j=m.indexOf(N))&&m.splice(j,1)&&y>=j&&y--},_listeners:m},v})(),wr=function(){return!Zo&&_n.wake()},Be={},HS=/^[\d.\-M][\d.\-,\s]/,qS=/["']/g,VS=function(n){for(var l={},a=n.substr(1,n.length-3).split(":"),s=a[0],f=1,o=a.length,m,x,p;f<o;f++)x=a[f],m=f!==o-1?x.lastIndexOf(","):x.length,p=x.substr(0,m),l[s]=isNaN(p)?p.replace(qS,"").trim():+p,s=x.substr(m+1).trim();return l},YS=function(n){var l=n.indexOf("(")+1,a=n.indexOf(")"),s=n.indexOf("(",l);return n.substring(l,~s&&s<a?n.indexOf(")",a+1):a)},XS=function(n){var l=(n+"").split("("),a=Be[l[0]];return a&&l.length>1&&a.config?a.config.apply(null,~n.indexOf("{")?[VS(l[1])]:YS(n).split(",").map(P1)):Be._CE&&HS.test(n)?Be._CE("",n):a},rv=function(n){return function(l){return 1-n(1-l)}},ov=function r(n,l){for(var a=n._first,s;a;)a instanceof Kt?r(a,l):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==l&&(a.timeline?r(a.timeline,l):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=l)),a=a._next},ll=function(n,l){return n&&(pt(n)?n:Be[n]||XS(n))||l},ul=function(n,l,a,s){a===void 0&&(a=function(x){return 1-l(1-x)}),s===void 0&&(s=function(x){return x<.5?l(x*2)/2:1-l((1-x)*2)/2});var f={easeIn:l,easeOut:a,easeInOut:s},o;return rn(n,function(m){Be[m]=Nn[m]=f,Be[o=m.toLowerCase()]=a;for(var x in f)Be[o+(x==="easeIn"?".in":x==="easeOut"?".out":".inOut")]=Be[m+"."+x]=f[x]}),f},sv=function(n){return function(l){return l<.5?(1-n(1-l*2))/2:.5+n((l-.5)*2)/2}},zd=function r(n,l,a){var s=l>=1?l:1,f=(a||(n?.3:.45))/(l<1?l:1),o=f/r0*(Math.asin(1/s)||0),m=function(g){return g===1?1:s*Math.pow(2,-10*g)*vS((g-o)*f)+1},x=n==="out"?m:n==="in"?function(p){return 1-m(1-p)}:sv(m);return f=r0/f,x.config=function(p,g){return r(n,p,g)},x},Bd=function r(n,l){l===void 0&&(l=1.70158);var a=function(o){return o?--o*o*((l+1)*o+l)+1:0},s=n==="out"?a:n==="in"?function(f){return 1-a(1-f)}:sv(a);return s.config=function(f){return r(n,f)},s};rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,n){var l=n<5?n+1:n;ul(r+",Power"+(l-1),n?function(a){return Math.pow(a,l)}:function(a){return a},function(a){return 1-Math.pow(1-a,l)},function(a){return a<.5?Math.pow(a*2,l)/2:1-Math.pow((1-a)*2,l)/2})});Be.Linear.easeNone=Be.none=Be.Linear.easeIn;ul("Elastic",zd("in"),zd("out"),zd());(function(r,n){var l=1/n,a=2*l,s=2.5*l,f=function(m){return m<l?r*m*m:m<a?r*Math.pow(m-1.5/n,2)+.75:m<s?r*(m-=2.25/n)*m+.9375:r*Math.pow(m-2.625/n,2)+.984375};ul("Bounce",function(o){return 1-f(1-o)},f)})(7.5625,2.75);ul("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ul("Circ",function(r){return-(E1(1-r*r)-1)});ul("Sine",function(r){return r===1?1:-xS(r*pS)+1});ul("Back",Bd("in"),Bd("out"),Bd());Be.SteppedEase=Be.steps=Nn.SteppedEase={config:function(n,l){n===void 0&&(n=1);var a=1/n,s=n+(l?0:1),f=l?1:0,o=1-Ke;return function(m){return((s*es(0,o,m)|0)+f)*a}}};vr.ease=Be["quad.out"];rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return z0+=r+","+r+"Params,"});var cv=function(n,l){this.id=gS++,n._gsap=this,this.target=n,this.harness=l,this.get=l?l.get:G1,this.set=l?l.getSetter:G0},Wo=(function(){function r(l){this.vars=l,this._delay=+l.delay||0,(this._repeat=l.repeat===1/0?-2:l.repeat||0)&&(this._rDelay=l.repeatDelay||0,this._yoyo=!!l.yoyo||!!l.yoyoEase),this._ts=1,Sr(this,+l.duration,1,1),this.data=l.data,st&&(this._ctx=st,st.data.push(this)),Zo||_n.wake()}var n=r.prototype;return n.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},n.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},n.totalDuration=function(a){return arguments.length?(this._dirty=0,Sr(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},n.totalTime=function(a,s){if(wr(),!arguments.length)return this._tTime;var f=this._dp;if(f&&f.smoothChildTiming&&this._ts){for(nu(this,a),!f._dp||f.parent||V1(f,this);f&&f.parent;)f.parent._time!==f._start+(f._ts>=0?f._tTime/f._ts:(f.totalDuration()-f._tTime)/-f._ts)&&f.totalTime(f._tTime,!0),f=f.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&ha(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ke||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),U1(this,a,s)),this},n.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+Tx(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},n.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},n.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+Tx(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},n.iteration=function(a,s){var f=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*f,s):this._repeat?yr(this._tTime,f)+1:1},n.timeScale=function(a,s){if(!arguments.length)return this._rts===-Ke?0:this._rts;if(this._rts===a)return this;var f=this.parent&&this._ts?qc(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Ke?0:this._rts,this.totalTime(es(-Math.abs(this._delay),this.totalDuration(),f),s!==!1),tu(this),TS(this)},n.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ke&&(this._tTime-=Ke)))),this):this._ps},n.startTime=function(a){if(arguments.length){this._start=ct(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ha(s,this,this._start-this._delay),this}return this._start},n.endTime=function(a){return this._start+(ln(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},n.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qc(s.rawTime(a),this):this._tTime:this._tTime},n.revert=function(a){a===void 0&&(a=CS);var s=Ft;return Ft=a,L0(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Ft=s,this},n.globalTime=function(a){for(var s=this,f=arguments.length?a:s.rawTime();s;)f=s._start+f/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):f},n.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,jx(this)):this._repeat===-2?1/0:this._repeat},n.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,jx(this),s?this.time(s):this}return this._rDelay},n.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},n.seek=function(a,s){return this.totalTime(Pn(this,a),ln(s))},n.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ln(s)),this._dur||(this._zTime=-Ke),this},n.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},n.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},n.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},n.resume=function(){return this.paused(!1)},n.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Ke:0)),this):this._rts<0},n.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ke,this},n.isActive=function(){var a=this.parent||this._dp,s=this._start,f;return!!(!a||this._ts&&this._initted&&a.isActive()&&(f=a.rawTime(!0))>=s&&f<this.endTime(!0)-Ke)},n.eventCallback=function(a,s,f){var o=this.vars;return arguments.length>1?(s?(o[a]=s,f&&(o[a+"Params"]=f),a==="onUpdate"&&(this._onUpdate=s)):delete o[a],this):o[a]},n.then=function(a){var s=this,f=s._prom;return new Promise(function(o){var m=pt(a)?a:H1,x=function(){var g=s.then;s.then=null,f&&f(),pt(m)&&(m=m(s))&&(m.then||m===s)&&(s.then=g),o(m),s.then=g};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?x():s._prom=x})},n.kill=function(){zo(this)},r})();Tn(Wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ke,_prom:0,_ps:!1,_rts:1});var Kt=(function(r){D1(n,r);function n(a,s){var f;return a===void 0&&(a={}),f=r.call(this,a)||this,f.labels={},f.smoothChildTiming=!!a.smoothChildTiming,f.autoRemoveChildren=!!a.autoRemoveChildren,f._sort=ln(a.sortChildren),ut&&ha(a.parent||ut,Oa(f),s),a.reversed&&f.reverse(),a.paused&&f.paused(!0),a.scrollTrigger&&Y1(Oa(f),a.scrollTrigger),f}var l=n.prototype;return l.to=function(s,f,o){return Io(0,arguments,this),this},l.from=function(s,f,o){return Io(1,arguments,this),this},l.fromTo=function(s,f,o,m){return Io(2,arguments,this),this},l.set=function(s,f,o){return f.duration=0,f.parent=this,Fo(f).repeatDelay||(f.repeat=0),f.immediateRender=!!f.immediateRender,new Rt(s,f,Pn(this,o),1),this},l.call=function(s,f,o){return ha(this,Rt.delayedCall(0,s,f),o)},l.staggerTo=function(s,f,o,m,x,p,g){return o.duration=f,o.stagger=o.stagger||m,o.onComplete=p,o.onCompleteParams=g,o.parent=this,new Rt(s,o,Pn(this,x)),this},l.staggerFrom=function(s,f,o,m,x,p,g){return o.runBackwards=1,Fo(o).immediateRender=ln(o.immediateRender),this.staggerTo(s,f,o,m,x,p,g)},l.staggerFromTo=function(s,f,o,m,x,p,g,v){return m.startAt=o,Fo(m).immediateRender=ln(m.immediateRender),this.staggerTo(s,f,m,x,p,g,v)},l.render=function(s,f,o){var m=this._time,x=this._dirty?this.totalDuration():this._tDur,p=this._dur,g=s<=0?0:ct(s),v=this._zTime<0!=s<0&&(this._initted||!p),S,y,R,w,N,j,A,C,z,M,k,D;if(this!==ut&&g>x&&s>=0&&(g=x),g!==this._tTime||o||v){if(m!==this._time&&p&&(g+=this._time-m,s+=this._time-m),S=g,z=this._start,C=this._ts,j=!C,v&&(p||(m=this._zTime),(s||!f)&&(this._zTime=s)),this._repeat){if(k=this._yoyo,N=p+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(N*100+s,f,o);if(S=ct(g%N),g===x?(w=this._repeat,S=p):(M=ct(g/N),w=~~M,w&&w===M&&(S=p,w--),S>p&&(S=p)),M=yr(this._tTime,N),!m&&this._tTime&&M!==w&&this._tTime-M*N-this._dur<=0&&(M=w),k&&w&1&&(S=p-S,D=1),w!==M&&!this._lock){var B=k&&M&1,E=B===(k&&w&1);if(w<M&&(B=!B),m=B?0:g%p?p:g,this._lock=1,this.render(m||(D?0:ct(w*N)),f,!p)._lock=0,this._tTime=g,!f&&this.parent&&Cn(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,M=w),m&&m!==this._time||j!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,x=this._tDur,E&&(this._lock=2,m=B?p:-1e-4,this.render(m,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!j)return this;ov(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=ES(this,ct(m),ct(S)),A&&(g-=S-(S=A._start))),this._tTime=g,this._time=S,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,m=0),!m&&g&&p&&!f&&!M&&(Cn(this,"onStart"),this._tTime!==g))return this;if(S>=m&&s>=0)for(y=this._first;y;){if(R=y._next,(y._act||S>=y._start)&&y._ts&&A!==y){if(y.parent!==this)return this.render(s,f,o);if(y.render(y._ts>0?(S-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(S-y._start)*y._ts,f,o),S!==this._time||!this._ts&&!j){A=0,R&&(g+=this._zTime=-Ke);break}}y=R}else{y=this._last;for(var L=s<0?s:S;y;){if(R=y._prev,(y._act||L<=y._end)&&y._ts&&A!==y){if(y.parent!==this)return this.render(s,f,o);if(y.render(y._ts>0?(L-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(L-y._start)*y._ts,f,o||Ft&&L0(y)),S!==this._time||!this._ts&&!j){A=0,R&&(g+=this._zTime=L?-Ke:Ke);break}}y=R}}if(A&&!f&&(this.pause(),A.render(S>=m?0:-Ke)._zTime=S>=m?1:-1,this._ts))return this._start=z,tu(this),this.render(s,f,o);this._onUpdate&&!f&&Cn(this,"onUpdate",!0),(g===x&&this._tTime>=this.totalDuration()||!g&&m)&&(z===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((s||!p)&&(g===x&&this._ts>0||!g&&this._ts<0)&&Ti(this,1),!f&&!(s<0&&!m)&&(g||m||!x)&&(Cn(this,g===x&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<x&&this.timeScale()>0)&&this._prom())))}return this},l.add=function(s,f){var o=this;if(Pa(f)||(f=Pn(this,f,s)),!(s instanceof Wo)){if(qt(s))return s.forEach(function(m){return o.add(m,f)}),this;if(Et(s))return this.addLabel(s,f);if(pt(s))s=Rt.delayedCall(0,s);else return this}return this!==s?ha(this,s,f):this},l.getChildren=function(s,f,o,m){s===void 0&&(s=!0),f===void 0&&(f=!0),o===void 0&&(o=!0),m===void 0&&(m=-Hn);for(var x=[],p=this._first;p;)p._start>=m&&(p instanceof Rt?f&&x.push(p):(o&&x.push(p),s&&x.push.apply(x,p.getChildren(!0,f,o)))),p=p._next;return x},l.getById=function(s){for(var f=this.getChildren(1,1,1),o=f.length;o--;)if(f[o].vars.id===s)return f[o]},l.remove=function(s){return Et(s)?this.removeLabel(s):pt(s)?this.killTweensOf(s):(s.parent===this&&eu(this,s),s===this._recent&&(this._recent=this._last),il(this))},l.totalTime=function(s,f){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ct(_n.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,f),this._forcing=0,this):this._tTime},l.addLabel=function(s,f){return this.labels[s]=Pn(this,f),this},l.removeLabel=function(s){return delete this.labels[s],this},l.addPause=function(s,f,o){var m=Rt.delayedCall(0,f||Yo,o);return m.data="isPause",this._hasPause=1,ha(this,m,Pn(this,s))},l.removePause=function(s){var f=this._first;for(s=Pn(this,s);f;)f._start===s&&f.data==="isPause"&&Ti(f),f=f._next},l.killTweensOf=function(s,f,o){for(var m=this.getTweensOf(s,o),x=m.length;x--;)_i!==m[x]&&m[x].kill(s,f);return this},l.getTweensOf=function(s,f){for(var o=[],m=qn(s),x=this._first,p=Pa(f),g;x;)x instanceof Rt?AS(x._targets,m)&&(p?(!_i||x._initted&&x._ts)&&x.globalTime(0)<=f&&x.globalTime(x.totalDuration())>f:!f||x.isActive())&&o.push(x):(g=x.getTweensOf(m,f)).length&&o.push.apply(o,g),x=x._next;return o},l.tweenTo=function(s,f){f=f||{};var o=this,m=Pn(o,s),x=f,p=x.startAt,g=x.onStart,v=x.onStartParams,S=x.immediateRender,y,R=Rt.to(o,Tn({ease:f.ease||"none",lazy:!1,immediateRender:!1,time:m,overwrite:"auto",duration:f.duration||Math.abs((m-(p&&"time"in p?p.time:o._time))/o.timeScale())||Ke,onStart:function(){if(o.pause(),!y){var N=f.duration||Math.abs((m-(p&&"time"in p?p.time:o._time))/o.timeScale());R._dur!==N&&Sr(R,N,0,1).render(R._time,!0,!0),y=1}g&&g.apply(R,v||[])}},f));return S?R.render(0):R},l.tweenFromTo=function(s,f,o){return this.tweenTo(f,Tn({startAt:{time:Pn(this,s)}},o))},l.recent=function(){return this._recent},l.nextLabel=function(s){return s===void 0&&(s=this._time),Mx(this,Pn(this,s))},l.previousLabel=function(s){return s===void 0&&(s=this._time),Mx(this,Pn(this,s),1)},l.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ke)},l.shiftChildren=function(s,f,o){o===void 0&&(o=0);var m=this._first,x=this.labels,p;for(s=ct(s);m;)m._start>=o&&(m._start+=s,m._end+=s),m=m._next;if(f)for(p in x)x[p]>=o&&(x[p]+=s);return il(this)},l.invalidate=function(s){var f=this._first;for(this._lock=0;f;)f.invalidate(s),f=f._next;return r.prototype.invalidate.call(this,s)},l.clear=function(s){s===void 0&&(s=!0);for(var f=this._first,o;f;)o=f._next,this.remove(f),f=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),il(this)},l.totalDuration=function(s){var f=0,o=this,m=o._last,x=Hn,p,g,v;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(v=o.parent;m;)p=m._prev,m._dirty&&m.totalDuration(),g=m._start,g>x&&o._sort&&m._ts&&!o._lock?(o._lock=1,ha(o,m,g-m._delay,1)._lock=0):x=g,g<0&&m._ts&&(f-=g,(!v&&!o._dp||v&&v.smoothChildTiming)&&(o._start+=ct(g/o._ts),o._time-=g,o._tTime-=g),o.shiftChildren(-g,!1,-1/0),x=0),m._end>f&&m._ts&&(f=m._end),m=p;Sr(o,o===ut&&o._time>f?o._time:f,1,1),o._dirty=0}return o._tDur},n.updateRoot=function(s){if(ut._ts&&(U1(ut,qc(s,ut)),I1=_n.frame),_n.frame>=Rx){Rx+=Rn.autoSleep||120;var f=ut._first;if((!f||!f._ts)&&Rn.autoSleep&&_n._listeners.length<2){for(;f&&!f._ts;)f=f._next;f||_n.sleep()}}},n})(Wo);Tn(Kt.prototype,{_lock:0,_hasPause:0,_forcing:0});var ZS=function(n,l,a,s,f,o,m){var x=new on(this._pt,n,l,0,1,pv,null,f),p=0,g=0,v,S,y,R,w,N,j,A;for(x.b=a,x.e=s,a+="",s+="",(j=~s.indexOf("random("))&&(s=Xo(s)),o&&(A=[a,s],o(A,n,l),a=A[0],s=A[1]),S=a.match(Dd)||[];v=Dd.exec(s);)R=v[0],w=s.substring(p,v.index),y?y=(y+1)%5:w.substr(-5)==="rgba("&&(y=1),R!==S[g++]&&(N=parseFloat(S[g-1])||0,x._pt={_next:x._pt,p:w||g===1?w:",",s:N,c:R.charAt(1)==="="?mr(N,R)-N:parseFloat(R)-N,m:y&&y<4?Math.round:0},p=Dd.lastIndex);return x.c=p<s.length?s.substring(p,s.length):"",x.fp=m,(B1.test(s)||j)&&(x.e=0),this._pt=x,x},O0=function(n,l,a,s,f,o,m,x,p,g){pt(s)&&(s=s(f||0,n,o));var v=n[l],S=a!=="get"?a:pt(v)?p?n[l.indexOf("set")||!pt(n["get"+l.substr(3)])?l:"get"+l.substr(3)](p):n[l]():v,y=pt(v)?p?JS:mv:I0,R;if(Et(s)&&(~s.indexOf("random(")&&(s=Xo(s)),s.charAt(1)==="="&&(R=mr(S,s)+(Ht(S)||0),(R||R===0)&&(s=R))),!g||S!==s||h0)return!isNaN(S*s)&&s!==""?(R=new on(this._pt,n,l,+S||0,s-(S||0),typeof v=="boolean"?t5:hv,0,y),p&&(R.fp=p),m&&R.modifier(m,this,n),this._pt=R):(!v&&!(l in n)&&E0(l,s),ZS.call(this,n,l,S,s,y,x||Rn.stringFilter,p))},WS=function(n,l,a,s,f){if(pt(n)&&(n=Go(n,f,l,a,s)),!ga(n)||n.style&&n.nodeType||qt(n)||k1(n))return Et(n)?Go(n,f,l,a,s):n;var o={},m;for(m in n)o[m]=Go(n[m],f,l,a,s);return o},uv=function(n,l,a,s,f,o){var m,x,p,g;if(wn[n]&&(m=new wn[n]).init(f,m.rawVars?l[n]:WS(l[n],s,f,o,a),a,s,o)!==!1&&(a._pt=x=new on(a._pt,f,n,0,1,m.render,m,0,m.priority),a!==ur))for(p=a._ptLookup[a._targets.indexOf(f)],g=m._props.length;g--;)p[m._props[g]]=x;return m},_i,h0,F0=function r(n,l,a){var s=n.vars,f=s.ease,o=s.startAt,m=s.immediateRender,x=s.lazy,p=s.onUpdate,g=s.runBackwards,v=s.yoyoEase,S=s.keyframes,y=s.autoRevert,R=n._dur,w=n._startAt,N=n._targets,j=n.parent,A=j&&j.data==="nested"?j.vars.targets:N,C=n._overwrite==="auto"&&!T0,z=n.timeline,M,k,D,B,E,L,G,W,K,q,ie,U,Q;if(z&&(!S||!f)&&(f="none"),n._ease=ll(f,vr.ease),n._yEase=v?rv(ll(v===!0?f:v,vr.ease)):0,v&&n._yoyo&&!n._repeat&&(v=n._yEase,n._yEase=n._ease,n._ease=v),n._from=!z&&!!s.runBackwards,!z||S&&!s.stagger){if(W=N[0]?al(N[0]).harness:0,U=W&&s[W.prop],M=Hc(s,k0),w&&(w._zTime<0&&w.progress(1),l<0&&g&&m&&!y?w.render(-1,!0):w.revert(g&&R?kc:_S),w._lazy=0),o){if(Ti(n._startAt=Rt.set(N,Tn({data:"isStart",overwrite:!1,parent:j,immediateRender:!0,lazy:!w&&ln(x),startAt:null,delay:0,onUpdate:p&&function(){return Cn(n,"onUpdate")},stagger:0},o))),n._startAt._dp=0,n._startAt._sat=n,l<0&&(Ft||!m&&!y)&&n._startAt.revert(kc),m&&R&&l<=0&&a<=0){l&&(n._zTime=l);return}}else if(g&&R&&!w){if(l&&(m=!1),D=Tn({overwrite:!1,data:"isFromStart",lazy:m&&!w&&ln(x),immediateRender:m,stagger:0,parent:j},M),U&&(D[W.prop]=U),Ti(n._startAt=Rt.set(N,D)),n._startAt._dp=0,n._startAt._sat=n,l<0&&(Ft?n._startAt.revert(kc):n._startAt.render(-1,!0)),n._zTime=l,!m)r(n._startAt,Ke,Ke);else if(!l)return}for(n._pt=n._ptCache=0,x=R&&ln(x)||x&&!R,k=0;k<N.length;k++){if(E=N[k],G=E._gsap||B0(N)[k]._gsap,n._ptLookup[k]=q={},s0[G.id]&&Ri.length&&Pc(),ie=A===N?k:A.indexOf(E),W&&(K=new W).init(E,U||M,n,ie,A)!==!1&&(n._pt=B=new on(n._pt,E,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(se){q[se]=B}),K.priority&&(L=1)),!W||U)for(D in M)wn[D]&&(K=uv(D,M,n,ie,E,A))?K.priority&&(L=1):q[D]=B=O0.call(n,E,D,"get",M[D],ie,A,0,s.stringFilter);n._op&&n._op[k]&&n.kill(E,n._op[k]),C&&n._pt&&(_i=n,ut.killTweensOf(E,q,n.globalTime(l)),Q=!n.parent,_i=0),n._pt&&x&&(s0[G.id]=1)}L&&gv(n),n._onInit&&n._onInit(n)}n._onUpdate=p,n._initted=(!n._op||n._pt)&&!Q,S&&l<=0&&z.render(Hn,!0,!0)},KS=function(n,l,a,s,f,o,m,x){var p=(n._pt&&n._ptCache||(n._ptCache={}))[l],g,v,S,y;if(!p)for(p=n._ptCache[l]=[],S=n._ptLookup,y=n._targets.length;y--;){if(g=S[y][l],g&&g.d&&g.d._pt)for(g=g.d._pt;g&&g.p!==l&&g.fp!==l;)g=g._next;if(!g)return h0=1,n.vars[l]="+=0",F0(n,m),h0=0,x?Vo(l+" not eligible for reset"):1;p.push(g)}for(y=p.length;y--;)v=p[y],g=v._pt||v,g.s=(s||s===0)&&!f?s:g.s+(s||0)+o*g.c,g.c=a-g.s,v.e&&(v.e=bt(a)+Ht(v.e)),v.b&&(v.b=g.s+Ht(v.b))},QS=function(n,l){var a=n[0]?al(n[0]).harness:0,s=a&&a.aliases,f,o,m,x;if(!s)return l;f=br({},l);for(o in s)if(o in f)for(x=s[o].split(","),m=x.length;m--;)f[x[m]]=f[o];return f},$S=function(n,l,a,s){var f=l.ease||s||"power1.inOut",o,m;if(qt(l))m=a[n]||(a[n]=[]),l.forEach(function(x,p){return m.push({t:p/(l.length-1)*100,v:x,e:f})});else for(o in l)m=a[o]||(a[o]=[]),o==="ease"||m.push({t:parseFloat(n),v:l[o],e:f})},Go=function(n,l,a,s,f){return pt(n)?n.call(l,a,s,f):Et(n)&&~n.indexOf("random(")?Xo(n):n},fv=z0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",dv={};rn(fv+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return dv[r]=1});var Rt=(function(r){D1(n,r);function n(a,s,f,o){var m;typeof s=="number"&&(f.duration=s,s=f,f=null),m=r.call(this,o?s:Fo(s))||this;var x=m.vars,p=x.duration,g=x.delay,v=x.immediateRender,S=x.stagger,y=x.overwrite,R=x.keyframes,w=x.defaults,N=x.scrollTrigger,j=x.yoyoEase,A=s.parent||ut,C=(qt(a)||k1(a)?Pa(a[0]):"length"in s)?[a]:qn(a),z,M,k,D,B,E,L,G;if(m._targets=C.length?B0(C):Vo("GSAP target "+a+" not found. https://gsap.com",!Rn.nullTargetWarn)||[],m._ptLookup=[],m._overwrite=y,R||S||bc(p)||bc(g)){if(s=m.vars,z=m.timeline=new Kt({data:"nested",defaults:w||{},targets:A&&A.data==="nested"?A.vars.targets:C}),z.kill(),z.parent=z._dp=Oa(m),z._start=0,S||bc(p)||bc(g)){if(D=C.length,L=S&&K1(S),ga(S))for(B in S)~fv.indexOf(B)&&(G||(G={}),G[B]=S[B]);for(M=0;M<D;M++)k=Hc(s,dv),k.stagger=0,j&&(k.yoyoEase=j),G&&br(k,G),E=C[M],k.duration=+Go(p,Oa(m),M,E,C),k.delay=(+Go(g,Oa(m),M,E,C)||0)-m._delay,!S&&D===1&&k.delay&&(m._delay=g=k.delay,m._start+=g,k.delay=0),z.to(E,k,L?L(M,E,C):0),z._ease=Be.none;z.duration()?p=g=0:m.timeline=0}else if(R){Fo(Tn(z.vars.defaults,{ease:"none"})),z._ease=ll(R.ease||s.ease||"none");var W=0,K,q,ie;if(qt(R))R.forEach(function(U){return z.to(C,U,">")}),z.duration();else{k={};for(B in R)B==="ease"||B==="easeEach"||$S(B,R[B],k,R.easeEach);for(B in k)for(K=k[B].sort(function(U,Q){return U.t-Q.t}),W=0,M=0;M<K.length;M++)q=K[M],ie={ease:q.e,duration:(q.t-(M?K[M-1].t:0))/100*p},ie[B]=q.v,z.to(C,ie,W),W+=ie.duration;z.duration()<p&&z.to({},{duration:p-z.duration()})}}p||m.duration(p=z.duration())}else m.timeline=0;return y===!0&&!T0&&(_i=Oa(m),ut.killTweensOf(C),_i=0),ha(A,Oa(m),f),s.reversed&&m.reverse(),s.paused&&m.paused(!0),(v||!p&&!R&&m._start===ct(A._time)&&ln(v)&&jS(Oa(m))&&A.data!=="nested")&&(m._tTime=-Ke,m.render(Math.max(0,-g)||0)),N&&Y1(Oa(m),N),m}var l=n.prototype;return l.render=function(s,f,o){var m=this._time,x=this._tDur,p=this._dur,g=s<0,v=s>x-Ke&&!g?x:s<Ke?0:s,S,y,R,w,N,j,A,C,z;if(!p)DS(this,s,f,o);else if(v!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g||this._lazy){if(S=v,C=this.timeline,this._repeat){if(w=p+this._rDelay,this._repeat<-1&&g)return this.totalTime(w*100+s,f,o);if(S=ct(v%w),v===x?(R=this._repeat,S=p):(N=ct(v/w),R=~~N,R&&R===N?(S=p,R--):S>p&&(S=p)),j=this._yoyo&&R&1,j&&(z=this._yEase,S=p-S),N=yr(this._tTime,w),S===m&&!o&&this._initted&&R===N)return this._tTime=v,this;R!==N&&(C&&this._yEase&&ov(C,j),this.vars.repeatRefresh&&!j&&!this._lock&&S!==w&&this._initted&&(this._lock=o=1,this.render(ct(w*R),!0).invalidate()._lock=0))}if(!this._initted){if(X1(this,g?s:S,o,f,v))return this._tTime=0,this;if(m!==this._time&&!(o&&this.vars.repeatRefresh&&R!==N))return this;if(p!==this._dur)return this.render(s,f,o)}if(this._tTime=v,this._time=S,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(z||this._ease)(S/p),this._from&&(this.ratio=A=1-A),!m&&v&&!f&&!N&&(Cn(this,"onStart"),this._tTime!==v))return this;for(y=this._pt;y;)y.r(A,y.d),y=y._next;C&&C.render(s<0?s:C._dur*C._ease(S/this._dur),f,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!f&&(g&&c0(this,s,f,o),Cn(this,"onUpdate")),this._repeat&&R!==N&&this.vars.onRepeat&&!f&&this.parent&&Cn(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(g&&!this._onUpdate&&c0(this,s,!0,!0),(s||!p)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&Ti(this,1),!f&&!(g&&!m)&&(v||m||j)&&(Cn(this,v===x?"onComplete":"onReverseComplete",!0),this._prom&&!(v<x&&this.timeScale()>0)&&this._prom()))}return this},l.targets=function(){return this._targets},l.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},l.resetTo=function(s,f,o,m,x){Zo||_n.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),g;return this._initted||F0(this,p),g=this._ease(p/this._dur),KS(this,s,f,o,m,g,p,x)?this.resetTo(s,f,o,m,1):(nu(this,0),this.parent||q1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},l.kill=function(s,f){if(f===void 0&&(f="all"),!s&&(!f||f==="all"))return this._lazy=this._pt=0,this.parent?zo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ft),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,f,_i&&_i.vars.overwrite!==!0)._first||zo(this),this.parent&&o!==this.timeline.totalDuration()&&Sr(this,this._dur*this.timeline._tDur/o,0,1),this}var m=this._targets,x=s?qn(s):m,p=this._ptLookup,g=this._pt,v,S,y,R,w,N,j;if((!f||f==="all")&&NS(m,x))return f==="all"&&(this._pt=0),zo(this);for(v=this._op=this._op||[],f!=="all"&&(Et(f)&&(w={},rn(f,function(A){return w[A]=1}),f=w),f=QS(m,f)),j=m.length;j--;)if(~x.indexOf(m[j])){S=p[j],f==="all"?(v[j]=f,R=S,y={}):(y=v[j]=v[j]||{},R=f);for(w in R)N=S&&S[w],N&&((!("kill"in N.d)||N.d.kill(w)===!0)&&eu(this,N,"_pt"),delete S[w]),y!=="all"&&(y[w]=1)}return this._initted&&!this._pt&&g&&zo(this),this},n.to=function(s,f){return new n(s,f,arguments[2])},n.from=function(s,f){return Io(1,arguments)},n.delayedCall=function(s,f,o,m){return new n(f,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:f,onReverseComplete:f,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:m})},n.fromTo=function(s,f,o){return Io(2,arguments)},n.set=function(s,f){return f.duration=0,f.repeatDelay||(f.repeat=0),new n(s,f)},n.killTweensOf=function(s,f,o){return ut.killTweensOf(s,f,o)},n})(Wo);Tn(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rn("staggerTo,staggerFrom,staggerFromTo",function(r){Rt[r]=function(){var n=new Kt,l=f0.call(arguments,0);return l.splice(r==="staggerFromTo"?5:4,0,0),n[r].apply(n,l)}});var I0=function(n,l,a){return n[l]=a},mv=function(n,l,a){return n[l](a)},JS=function(n,l,a,s){return n[l](s.fp,a)},e5=function(n,l,a){return n.setAttribute(l,a)},G0=function(n,l){return pt(n[l])?mv:j0(n[l])&&n.setAttribute?e5:I0},hv=function(n,l){return l.set(l.t,l.p,Math.round((l.s+l.c*n)*1e6)/1e6,l)},t5=function(n,l){return l.set(l.t,l.p,!!(l.s+l.c*n),l)},pv=function(n,l){var a=l._pt,s="";if(!n&&l.b)s=l.b;else if(n===1&&l.e)s=l.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*n):Math.round((a.s+a.c*n)*1e4)/1e4)+s,a=a._next;s+=l.c}l.set(l.t,l.p,s,l)},U0=function(n,l){for(var a=l._pt;a;)a.r(n,a.d),a=a._next},n5=function(n,l,a,s){for(var f=this._pt,o;f;)o=f._next,f.p===s&&f.modifier(n,l,a),f=o},a5=function(n){for(var l=this._pt,a,s;l;)s=l._next,l.p===n&&!l.op||l.op===n?eu(this,l,"_pt"):l.dep||(a=1),l=s;return!a},i5=function(n,l,a,s){s.mSet(n,l,s.m.call(s.tween,a,s.mt),s)},gv=function(n){for(var l=n._pt,a,s,f,o;l;){for(a=l._next,s=f;s&&s.pr>l.pr;)s=s._next;(l._prev=s?s._prev:o)?l._prev._next=l:f=l,(l._next=s)?s._prev=l:o=l,l=a}n._pt=f},on=(function(){function r(l,a,s,f,o,m,x,p,g){this.t=a,this.s=f,this.c=o,this.p=s,this.r=m||hv,this.d=x||this,this.set=p||I0,this.pr=g||0,this._next=l,l&&(l._prev=this)}var n=r.prototype;return n.modifier=function(a,s,f){this.mSet=this.mSet||this.set,this.set=i5,this.m=a,this.mt=f,this.tween=s},r})();rn(z0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return k0[r]=1});Nn.TweenMax=Nn.TweenLite=Rt;Nn.TimelineLite=Nn.TimelineMax=Kt;ut=new Kt({sortChildren:!1,defaults:vr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Rn.stringFilter=lv;var rl=[],Bc={},l5=[],Ex=0,r5=0,Ld=function(n){return(Bc[n]||l5).map(function(l){return l()})},p0=function(){var n=Date.now(),l=[];n-Ex>2&&(Ld("matchMediaInit"),rl.forEach(function(a){var s=a.queries,f=a.conditions,o,m,x,p;for(m in s)o=ma.matchMedia(s[m]).matches,o&&(x=1),o!==f[m]&&(f[m]=o,p=1);p&&(a.revert(),x&&l.push(a))}),Ld("matchMediaRevert"),l.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),Ex=n,Ld("matchMedia"))},xv=(function(){function r(l,a){this.selector=a&&d0(a),this.data=[],this._r=[],this.isReverted=!1,this.id=r5++,l&&this.add(l)}var n=r.prototype;return n.add=function(a,s,f){pt(a)&&(f=s,s=a,a=pt);var o=this,m=function(){var p=st,g=o.selector,v;return p&&p!==o&&p.data.push(o),f&&(o.selector=d0(f)),st=o,v=s.apply(o,arguments),pt(v)&&o._r.push(v),st=p,o.selector=g,o.isReverted=!1,v};return o.last=m,a===pt?m(o,function(x){return o.add(null,x)}):a?o[a]=m:m},n.ignore=function(a){var s=st;st=null,a(this),st=s},n.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof r?a.push.apply(a,s.getTweens()):s instanceof Rt&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},n.clear=function(){this._r.length=this.data.length=0},n.kill=function(a,s){var f=this;if(a?(function(){for(var m=f.getTweens(),x=f.data.length,p;x--;)p=f.data[x],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(g){return m.splice(m.indexOf(g),1)}));for(m.map(function(g){return{g:g._dur||g._delay||g._sat&&!g._sat.vars.immediateRender?g.globalTime(0):-1/0,t:g}}).sort(function(g,v){return v.g-g.g||-1/0}).forEach(function(g){return g.t.revert(a)}),x=f.data.length;x--;)p=f.data[x],p instanceof Kt?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof Rt)&&p.revert&&p.revert(a);f._r.forEach(function(g){return g(a,f)}),f.isReverted=!0})():this.data.forEach(function(m){return m.kill&&m.kill()}),this.clear(),s)for(var o=rl.length;o--;)rl[o].id===this.id&&rl.splice(o,1)},n.revert=function(a){this.kill(a||{})},r})(),o5=(function(){function r(l){this.contexts=[],this.scope=l,st&&st.data.push(this)}var n=r.prototype;return n.add=function(a,s,f){ga(a)||(a={matches:a});var o=new xv(0,f||this.scope),m=o.conditions={},x,p,g;st&&!o.selector&&(o.selector=st.selector),this.contexts.push(o),s=o.add("onMatch",s),o.queries=a;for(p in a)p==="all"?g=1:(x=ma.matchMedia(a[p]),x&&(rl.indexOf(o)<0&&rl.push(o),(m[p]=x.matches)&&(g=1),x.addListener?x.addListener(p0):x.addEventListener("change",p0)));return g&&s(o,function(v){return o.add(null,v)}),this},n.revert=function(a){this.kill(a||{})},n.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},r})(),Vc={registerPlugin:function(){for(var n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];l.forEach(function(s){return nv(s)})},timeline:function(n){return new Kt(n)},getTweensOf:function(n,l){return ut.getTweensOf(n,l)},getProperty:function(n,l,a,s){Et(n)&&(n=qn(n)[0]);var f=al(n||{}).get,o=a?H1:P1;return a==="native"&&(a=""),n&&(l?o((wn[l]&&wn[l].get||f)(n,l,a,s)):function(m,x,p){return o((wn[m]&&wn[m].get||f)(n,m,x,p))})},quickSetter:function(n,l,a){if(n=qn(n),n.length>1){var s=n.map(function(g){return cn.quickSetter(g,l,a)}),f=s.length;return function(g){for(var v=f;v--;)s[v](g)}}n=n[0]||{};var o=wn[l],m=al(n),x=m.harness&&(m.harness.aliases||{})[l]||l,p=o?function(g){var v=new o;ur._pt=0,v.init(n,a?g+a:g,ur,0,[n]),v.render(1,v),ur._pt&&U0(1,ur)}:m.set(n,x);return o?p:function(g){return p(n,x,a?g+a:g,m,1)}},quickTo:function(n,l,a){var s,f=cn.to(n,Tn((s={},s[l]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),o=function(x,p,g){return f.resetTo(l,x,p,g)};return o.tween=f,o},isTweening:function(n){return ut.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=ll(n.ease,vr.ease)),Nx(vr,n||{})},config:function(n){return Nx(Rn,n||{})},registerEffect:function(n){var l=n.name,a=n.effect,s=n.plugins,f=n.defaults,o=n.extendTimeline;(s||"").split(",").forEach(function(m){return m&&!wn[m]&&!Nn[m]&&Vo(l+" effect requires "+m+" plugin.")}),Ed[l]=function(m,x,p){return a(qn(m),Tn(x||{},f),p)},o&&(Kt.prototype[l]=function(m,x,p){return this.add(Ed[l](m,ga(x)?x:(p=x)&&{},this),p)})},registerEase:function(n,l){Be[n]=ll(l)},parseEase:function(n,l){return arguments.length?ll(n,l):Be},getById:function(n){return ut.getById(n)},exportRoot:function(n,l){n===void 0&&(n={});var a=new Kt(n),s,f;for(a.smoothChildTiming=ln(n.smoothChildTiming),ut.remove(a),a._dp=0,a._time=a._tTime=ut._time,s=ut._first;s;)f=s._next,(l||!(!s._dur&&s instanceof Rt&&s.vars.onComplete===s._targets[0]))&&ha(a,s,s._start-s._delay),s=f;return ha(ut,a,0),a},context:function(n,l){return n?new xv(n,l):st},matchMedia:function(n){return new o5(n)},matchMediaRefresh:function(){return rl.forEach(function(n){var l=n.conditions,a,s;for(s in l)l[s]&&(l[s]=!1,a=1);a&&n.revert()})||p0()},addEventListener:function(n,l){var a=Bc[n]||(Bc[n]=[]);~a.indexOf(l)||a.push(l)},removeEventListener:function(n,l){var a=Bc[n],s=a&&a.indexOf(l);s>=0&&a.splice(s,1)},utils:{wrap:IS,wrapYoyo:GS,distribute:K1,random:$1,snap:Q1,normalize:FS,getUnit:Ht,clamp:zS,splitColor:av,toArray:qn,selector:d0,mapRange:ev,pipe:LS,unitize:OS,interpolate:US,shuffle:W1},install:O1,effects:Ed,ticker:_n,updateRoot:Kt.updateRoot,plugins:wn,globalTimeline:ut,core:{PropTween:on,globals:F1,Tween:Rt,Timeline:Kt,Animation:Wo,getCache:al,_removeLinkedListItem:eu,reverting:function(){return Ft},context:function(n){return n&&st&&(st.data.push(n),n._ctx=st),st},suppressOverwrites:function(n){return T0=n}}};rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Vc[r]=Rt[r]});_n.add(Kt.updateRoot);ur=Vc.to({},{duration:0});var s5=function(n,l){for(var a=n._pt;a&&a.p!==l&&a.op!==l&&a.fp!==l;)a=a._next;return a},c5=function(n,l){var a=n._targets,s,f,o;for(s in l)for(f=a.length;f--;)o=n._ptLookup[f][s],o&&(o=o.d)&&(o._pt&&(o=s5(o,s)),o&&o.modifier&&o.modifier(l[s],n,a[f],s))},Od=function(n,l){return{name:n,headless:1,rawVars:1,init:function(s,f,o){o._onInit=function(m){var x,p;if(Et(f)&&(x={},rn(f,function(g){return x[g]=1}),f=x),l){x={};for(p in f)x[p]=l(f[p]);f=x}c5(m,f)}}}},cn=Vc.registerPlugin({name:"attr",init:function(n,l,a,s,f){var o,m,x;this.tween=a;for(o in l)x=n.getAttribute(o)||"",m=this.add(n,"setAttribute",(x||0)+"",l[o],s,f,0,0,o),m.op=o,m.b=x,this._props.push(o)},render:function(n,l){for(var a=l._pt;a;)Ft?a.set(a.t,a.p,a.b,a):a.r(n,a.d),a=a._next}},{name:"endArray",headless:1,init:function(n,l){for(var a=l.length;a--;)this.add(n,a,n[a]||0,l[a],0,0,0,0,0,1)}},Od("roundProps",m0),Od("modifiers"),Od("snap",Q1))||Vc;Rt.version=Kt.version=cn.version="3.14.2";L1=1;M0()&&wr();Be.Power0;Be.Power1;Be.Power2;Be.Power3;Be.Power4;Be.Linear;Be.Quad;Be.Cubic;Be.Quart;Be.Quint;Be.Strong;Be.Elastic;Be.Back;Be.SteppedEase;Be.Bounce;Be.Sine;Be.Expo;Be.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var kx,Ci,hr,P0,nl,zx,H0,u5=function(){return typeof window<"u"},Ha={},tl=180/Math.PI,pr=Math.PI/180,tr=Math.atan2,Bx=1e8,q0=/([A-Z])/g,f5=/(left|right|width|margin|padding|x)/i,d5=/[\s,\(]\S/,pa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},g0=function(n,l){return l.set(l.t,l.p,Math.round((l.s+l.c*n)*1e4)/1e4+l.u,l)},m5=function(n,l){return l.set(l.t,l.p,n===1?l.e:Math.round((l.s+l.c*n)*1e4)/1e4+l.u,l)},h5=function(n,l){return l.set(l.t,l.p,n?Math.round((l.s+l.c*n)*1e4)/1e4+l.u:l.b,l)},p5=function(n,l){return l.set(l.t,l.p,n===1?l.e:n?Math.round((l.s+l.c*n)*1e4)/1e4+l.u:l.b,l)},g5=function(n,l){var a=l.s+l.c*n;l.set(l.t,l.p,~~(a+(a<0?-.5:.5))+l.u,l)},vv=function(n,l){return l.set(l.t,l.p,n?l.e:l.b,l)},bv=function(n,l){return l.set(l.t,l.p,n!==1?l.b:l.e,l)},x5=function(n,l,a){return n.style[l]=a},v5=function(n,l,a){return n.style.setProperty(l,a)},b5=function(n,l,a){return n._gsap[l]=a},y5=function(n,l,a){return n._gsap.scaleX=n._gsap.scaleY=a},S5=function(n,l,a,s,f){var o=n._gsap;o.scaleX=o.scaleY=a,o.renderTransform(f,o)},w5=function(n,l,a,s,f){var o=n._gsap;o[l]=a,o.renderTransform(f,o)},ft="transform",sn=ft+"Origin",_5=function r(n,l){var a=this,s=this.target,f=s.style,o=s._gsap;if(n in Ha&&f){if(this.tfm=this.tfm||{},n!=="transform")n=pa[n]||n,~n.indexOf(",")?n.split(",").forEach(function(m){return a.tfm[m]=Fa(s,m)}):this.tfm[n]=o.x?o[n]:Fa(s,n),n===sn&&(this.tfm.zOrigin=o.zOrigin);else return pa.transform.split(",").forEach(function(m){return r.call(a,m,l)});if(this.props.indexOf(ft)>=0)return;o.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(sn,l,"")),n=ft}(f||l)&&this.props.push(n,l,f[n])},yv=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},C5=function(){var n=this.props,l=this.target,a=l.style,s=l._gsap,f,o;for(f=0;f<n.length;f+=3)n[f+1]?n[f+1]===2?l[n[f]](n[f+2]):l[n[f]]=n[f+2]:n[f+2]?a[n[f]]=n[f+2]:a.removeProperty(n[f].substr(0,2)==="--"?n[f]:n[f].replace(q0,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),l.setAttribute("data-svg-origin",this.svgo||"")),f=H0(),(!f||!f.isStart)&&!a[ft]&&(yv(a),s.zOrigin&&a[sn]&&(a[sn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Sv=function(n,l){var a={target:n,props:[],revert:C5,save:_5};return n._gsap||cn.core.getCache(n),l&&n.style&&n.nodeType&&l.split(",").forEach(function(s){return a.save(s)}),a},wv,x0=function(n,l){var a=Ci.createElementNS?Ci.createElementNS((l||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):Ci.createElement(n);return a&&a.style?a:Ci.createElement(n)},An=function r(n,l,a){var s=getComputedStyle(n);return s[l]||s.getPropertyValue(l.replace(q0,"-$1").toLowerCase())||s.getPropertyValue(l)||!a&&r(n,_r(l)||l,1)||""},Lx="O,Moz,ms,Ms,Webkit".split(","),_r=function(n,l,a){var s=l||nl,f=s.style,o=5;if(n in f&&!a)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);o--&&!(Lx[o]+n in f););return o<0?null:(o===3?"ms":o>=0?Lx[o]:"")+n},v0=function(){u5()&&window.document&&(kx=window,Ci=kx.document,hr=Ci.documentElement,nl=x0("div")||{style:{}},x0("div"),ft=_r(ft),sn=ft+"Origin",nl.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wv=!!_r("perspective"),H0=cn.core.reverting,P0=1)},Ox=function(n){var l=n.ownerSVGElement,a=x0("svg",l&&l.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=n.cloneNode(!0),f;s.style.display="block",a.appendChild(s),hr.appendChild(a);try{f=s.getBBox()}catch{}return a.removeChild(s),hr.removeChild(a),f},Fx=function(n,l){for(var a=l.length;a--;)if(n.hasAttribute(l[a]))return n.getAttribute(l[a])},_v=function(n){var l,a;try{l=n.getBBox()}catch{l=Ox(n),a=1}return l&&(l.width||l.height)||a||(l=Ox(n)),l&&!l.width&&!l.x&&!l.y?{x:+Fx(n,["x","cx","x1"])||0,y:+Fx(n,["y","cy","y1"])||0,width:0,height:0}:l},Cv=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&_v(n))},ji=function(n,l){if(l){var a=n.style,s;l in Ha&&l!==sn&&(l=ft),a.removeProperty?(s=l.substr(0,2),(s==="ms"||l.substr(0,6)==="webkit")&&(l="-"+l),a.removeProperty(s==="--"?l:l.replace(q0,"-$1").toLowerCase())):a.removeAttribute(l)}},Ai=function(n,l,a,s,f,o){var m=new on(n._pt,l,a,0,1,o?bv:vv);return n._pt=m,m.b=s,m.e=f,n._props.push(a),m},Ix={deg:1,rad:1,turn:1},A5={grid:1,flex:1},Mi=function r(n,l,a,s){var f=parseFloat(a)||0,o=(a+"").trim().substr((f+"").length)||"px",m=nl.style,x=f5.test(l),p=n.tagName.toLowerCase()==="svg",g=(p?"client":"offset")+(x?"Width":"Height"),v=100,S=s==="px",y=s==="%",R,w,N,j;if(s===o||!f||Ix[s]||Ix[o])return f;if(o!=="px"&&!S&&(f=r(n,l,a,"px")),j=n.getCTM&&Cv(n),(y||o==="%")&&(Ha[l]||~l.indexOf("adius")))return R=j?n.getBBox()[x?"width":"height"]:n[g],bt(y?f/R*v:f/100*R);if(m[x?"width":"height"]=v+(S?o:s),w=s!=="rem"&&~l.indexOf("adius")||s==="em"&&n.appendChild&&!p?n:n.parentNode,j&&(w=(n.ownerSVGElement||{}).parentNode),(!w||w===Ci||!w.appendChild)&&(w=Ci.body),N=w._gsap,N&&y&&N.width&&x&&N.time===_n.time&&!N.uncache)return bt(f/N.width*v);if(y&&(l==="height"||l==="width")){var A=n.style[l];n.style[l]=v+s,R=n[g],A?n.style[l]=A:ji(n,l)}else(y||o==="%")&&!A5[An(w,"display")]&&(m.position=An(n,"position")),w===n&&(m.position="static"),w.appendChild(nl),R=nl[g],w.removeChild(nl),m.position="absolute";return x&&y&&(N=al(w),N.time=_n.time,N.width=w[g]),bt(S?R*f/v:R&&f?v/R*f:0)},Fa=function(n,l,a,s){var f;return P0||v0(),l in pa&&l!=="transform"&&(l=pa[l],~l.indexOf(",")&&(l=l.split(",")[0])),Ha[l]&&l!=="transform"?(f=Qo(n,s),f=l!=="transformOrigin"?f[l]:f.svg?f.origin:Xc(An(n,sn))+" "+f.zOrigin+"px"):(f=n.style[l],(!f||f==="auto"||s||~(f+"").indexOf("calc("))&&(f=Yc[l]&&Yc[l](n,l,a)||An(n,l)||G1(n,l)||(l==="opacity"?1:0))),a&&!~(f+"").trim().indexOf(" ")?Mi(n,l,f,a)+a:f},R5=function(n,l,a,s){if(!a||a==="none"){var f=_r(l,n,1),o=f&&An(n,f,1);o&&o!==a?(l=f,a=o):l==="borderColor"&&(a=An(n,"borderTopColor"))}var m=new on(this._pt,n.style,l,0,1,pv),x=0,p=0,g,v,S,y,R,w,N,j,A,C,z,M;if(m.b=a,m.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=An(n,s.substring(4,s.indexOf(")")))),s==="auto"&&(w=n.style[l],n.style[l]=s,s=An(n,l)||s,w?n.style[l]=w:ji(n,l)),g=[a,s],lv(g),a=g[0],s=g[1],S=a.match(cr)||[],M=s.match(cr)||[],M.length){for(;v=cr.exec(s);)N=v[0],A=s.substring(x,v.index),R?R=(R+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(R=1),N!==(w=S[p++]||"")&&(y=parseFloat(w)||0,z=w.substr((y+"").length),N.charAt(1)==="="&&(N=mr(y,N)+z),j=parseFloat(N),C=N.substr((j+"").length),x=cr.lastIndex-C.length,C||(C=C||Rn.units[l]||z,x===s.length&&(s+=C,m.e+=C)),z!==C&&(y=Mi(n,l,w,C)||0),m._pt={_next:m._pt,p:A||p===1?A:",",s:y,c:j-y,m:R&&R<4||l==="zIndex"?Math.round:0});m.c=x<s.length?s.substring(x,s.length):""}else m.r=l==="display"&&s==="none"?bv:vv;return B1.test(s)&&(m.e=0),this._pt=m,m},Gx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},N5=function(n){var l=n.split(" "),a=l[0],s=l[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(n=a,a=s,s=n),l[0]=Gx[a]||a,l[1]=Gx[s]||s,l.join(" ")},T5=function(n,l){if(l.tween&&l.tween._time===l.tween._dur){var a=l.t,s=a.style,f=l.u,o=a._gsap,m,x,p;if(f==="all"||f===!0)s.cssText="",x=1;else for(f=f.split(","),p=f.length;--p>-1;)m=f[p],Ha[m]&&(x=1,m=m==="transformOrigin"?sn:ft),ji(a,m);x&&(ji(a,ft),o&&(o.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Qo(a,1),o.uncache=1,yv(s)))}},Yc={clearProps:function(n,l,a,s,f){if(f.data!=="isFromStart"){var o=n._pt=new on(n._pt,l,a,0,0,T5);return o.u=s,o.pr=-10,o.tween=f,n._props.push(a),1}}},Ko=[1,0,0,1,0,0],Av={},Rv=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},Ux=function(n){var l=An(n,ft);return Rv(l)?Ko:l.substr(7).match(z1).map(bt)},V0=function(n,l){var a=n._gsap||al(n),s=n.style,f=Ux(n),o,m,x,p;return a.svg&&n.getAttribute("transform")?(x=n.transform.baseVal.consolidate().matrix,f=[x.a,x.b,x.c,x.d,x.e,x.f],f.join(",")==="1,0,0,1,0,0"?Ko:f):(f===Ko&&!n.offsetParent&&n!==hr&&!a.svg&&(x=s.display,s.display="block",o=n.parentNode,(!o||!n.offsetParent&&!n.getBoundingClientRect().width)&&(p=1,m=n.nextElementSibling,hr.appendChild(n)),f=Ux(n),x?s.display=x:ji(n,"display"),p&&(m?o.insertBefore(n,m):o?o.appendChild(n):hr.removeChild(n))),l&&f.length>6?[f[0],f[1],f[4],f[5],f[12],f[13]]:f)},b0=function(n,l,a,s,f,o){var m=n._gsap,x=f||V0(n,!0),p=m.xOrigin||0,g=m.yOrigin||0,v=m.xOffset||0,S=m.yOffset||0,y=x[0],R=x[1],w=x[2],N=x[3],j=x[4],A=x[5],C=l.split(" "),z=parseFloat(C[0])||0,M=parseFloat(C[1])||0,k,D,B,E;a?x!==Ko&&(D=y*N-R*w)&&(B=z*(N/D)+M*(-w/D)+(w*A-N*j)/D,E=z*(-R/D)+M*(y/D)-(y*A-R*j)/D,z=B,M=E):(k=_v(n),z=k.x+(~C[0].indexOf("%")?z/100*k.width:z),M=k.y+(~(C[1]||C[0]).indexOf("%")?M/100*k.height:M)),s||s!==!1&&m.smooth?(j=z-p,A=M-g,m.xOffset=v+(j*y+A*w)-j,m.yOffset=S+(j*R+A*N)-A):m.xOffset=m.yOffset=0,m.xOrigin=z,m.yOrigin=M,m.smooth=!!s,m.origin=l,m.originIsAbsolute=!!a,n.style[sn]="0px 0px",o&&(Ai(o,m,"xOrigin",p,z),Ai(o,m,"yOrigin",g,M),Ai(o,m,"xOffset",v,m.xOffset),Ai(o,m,"yOffset",S,m.yOffset)),n.setAttribute("data-svg-origin",z+" "+M)},Qo=function(n,l){var a=n._gsap||new cv(n);if("x"in a&&!l&&!a.uncache)return a;var s=n.style,f=a.scaleX<0,o="px",m="deg",x=getComputedStyle(n),p=An(n,sn)||"0",g,v,S,y,R,w,N,j,A,C,z,M,k,D,B,E,L,G,W,K,q,ie,U,Q,se,ue,pe,O,P,J,te,ae;return g=v=S=w=N=j=A=C=z=0,y=R=1,a.svg=!!(n.getCTM&&Cv(n)),x.translate&&((x.translate!=="none"||x.scale!=="none"||x.rotate!=="none")&&(s[ft]=(x.translate!=="none"?"translate3d("+(x.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(x.rotate!=="none"?"rotate("+x.rotate+") ":"")+(x.scale!=="none"?"scale("+x.scale.split(" ").join(",")+") ":"")+(x[ft]!=="none"?x[ft]:"")),s.scale=s.rotate=s.translate="none"),D=V0(n,a.svg),a.svg&&(a.uncache?(se=n.getBBox(),p=a.xOrigin-se.x+"px "+(a.yOrigin-se.y)+"px",Q=""):Q=!l&&n.getAttribute("data-svg-origin"),b0(n,Q||p,!!Q||a.originIsAbsolute,a.smooth!==!1,D)),M=a.xOrigin||0,k=a.yOrigin||0,D!==Ko&&(G=D[0],W=D[1],K=D[2],q=D[3],g=ie=D[4],v=U=D[5],D.length===6?(y=Math.sqrt(G*G+W*W),R=Math.sqrt(q*q+K*K),w=G||W?tr(W,G)*tl:0,A=K||q?tr(K,q)*tl+w:0,A&&(R*=Math.abs(Math.cos(A*pr))),a.svg&&(g-=M-(M*G+k*K),v-=k-(M*W+k*q))):(ae=D[6],J=D[7],pe=D[8],O=D[9],P=D[10],te=D[11],g=D[12],v=D[13],S=D[14],B=tr(ae,P),N=B*tl,B&&(E=Math.cos(-B),L=Math.sin(-B),Q=ie*E+pe*L,se=U*E+O*L,ue=ae*E+P*L,pe=ie*-L+pe*E,O=U*-L+O*E,P=ae*-L+P*E,te=J*-L+te*E,ie=Q,U=se,ae=ue),B=tr(-K,P),j=B*tl,B&&(E=Math.cos(-B),L=Math.sin(-B),Q=G*E-pe*L,se=W*E-O*L,ue=K*E-P*L,te=q*L+te*E,G=Q,W=se,K=ue),B=tr(W,G),w=B*tl,B&&(E=Math.cos(B),L=Math.sin(B),Q=G*E+W*L,se=ie*E+U*L,W=W*E-G*L,U=U*E-ie*L,G=Q,ie=se),N&&Math.abs(N)+Math.abs(w)>359.9&&(N=w=0,j=180-j),y=bt(Math.sqrt(G*G+W*W+K*K)),R=bt(Math.sqrt(U*U+ae*ae)),B=tr(ie,U),A=Math.abs(B)>2e-4?B*tl:0,z=te?1/(te<0?-te:te):0),a.svg&&(Q=n.getAttribute("transform"),a.forceCSS=n.setAttribute("transform","")||!Rv(An(n,ft)),Q&&n.setAttribute("transform",Q))),Math.abs(A)>90&&Math.abs(A)<270&&(f?(y*=-1,A+=w<=0?180:-180,w+=w<=0?180:-180):(R*=-1,A+=A<=0?180:-180)),l=l||a.uncache,a.x=g-((a.xPercent=g&&(!l&&a.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-g)?-50:0)))?n.offsetWidth*a.xPercent/100:0)+o,a.y=v-((a.yPercent=v&&(!l&&a.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-v)?-50:0)))?n.offsetHeight*a.yPercent/100:0)+o,a.z=S+o,a.scaleX=bt(y),a.scaleY=bt(R),a.rotation=bt(w)+m,a.rotationX=bt(N)+m,a.rotationY=bt(j)+m,a.skewX=A+m,a.skewY=C+m,a.transformPerspective=z+o,(a.zOrigin=parseFloat(p.split(" ")[2])||!l&&a.zOrigin||0)&&(s[sn]=Xc(p)),a.xOffset=a.yOffset=0,a.force3D=Rn.force3D,a.renderTransform=a.svg?M5:wv?Nv:j5,a.uncache=0,a},Xc=function(n){return(n=n.split(" "))[0]+" "+n[1]},Fd=function(n,l,a){var s=Ht(l);return bt(parseFloat(l)+parseFloat(Mi(n,"x",a+"px",s)))+s},j5=function(n,l){l.z="0px",l.rotationY=l.rotationX="0deg",l.force3D=0,Nv(n,l)},Qi="0deg",_o="0px",$i=") ",Nv=function(n,l){var a=l||this,s=a.xPercent,f=a.yPercent,o=a.x,m=a.y,x=a.z,p=a.rotation,g=a.rotationY,v=a.rotationX,S=a.skewX,y=a.skewY,R=a.scaleX,w=a.scaleY,N=a.transformPerspective,j=a.force3D,A=a.target,C=a.zOrigin,z="",M=j==="auto"&&n&&n!==1||j===!0;if(C&&(v!==Qi||g!==Qi)){var k=parseFloat(g)*pr,D=Math.sin(k),B=Math.cos(k),E;k=parseFloat(v)*pr,E=Math.cos(k),o=Fd(A,o,D*E*-C),m=Fd(A,m,-Math.sin(k)*-C),x=Fd(A,x,B*E*-C+C)}N!==_o&&(z+="perspective("+N+$i),(s||f)&&(z+="translate("+s+"%, "+f+"%) "),(M||o!==_o||m!==_o||x!==_o)&&(z+=x!==_o||M?"translate3d("+o+", "+m+", "+x+") ":"translate("+o+", "+m+$i),p!==Qi&&(z+="rotate("+p+$i),g!==Qi&&(z+="rotateY("+g+$i),v!==Qi&&(z+="rotateX("+v+$i),(S!==Qi||y!==Qi)&&(z+="skew("+S+", "+y+$i),(R!==1||w!==1)&&(z+="scale("+R+", "+w+$i),A.style[ft]=z||"translate(0, 0)"},M5=function(n,l){var a=l||this,s=a.xPercent,f=a.yPercent,o=a.x,m=a.y,x=a.rotation,p=a.skewX,g=a.skewY,v=a.scaleX,S=a.scaleY,y=a.target,R=a.xOrigin,w=a.yOrigin,N=a.xOffset,j=a.yOffset,A=a.forceCSS,C=parseFloat(o),z=parseFloat(m),M,k,D,B,E;x=parseFloat(x),p=parseFloat(p),g=parseFloat(g),g&&(g=parseFloat(g),p+=g,x+=g),x||p?(x*=pr,p*=pr,M=Math.cos(x)*v,k=Math.sin(x)*v,D=Math.sin(x-p)*-S,B=Math.cos(x-p)*S,p&&(g*=pr,E=Math.tan(p-g),E=Math.sqrt(1+E*E),D*=E,B*=E,g&&(E=Math.tan(g),E=Math.sqrt(1+E*E),M*=E,k*=E)),M=bt(M),k=bt(k),D=bt(D),B=bt(B)):(M=v,B=S,k=D=0),(C&&!~(o+"").indexOf("px")||z&&!~(m+"").indexOf("px"))&&(C=Mi(y,"x",o,"px"),z=Mi(y,"y",m,"px")),(R||w||N||j)&&(C=bt(C+R-(R*M+w*D)+N),z=bt(z+w-(R*k+w*B)+j)),(s||f)&&(E=y.getBBox(),C=bt(C+s/100*E.width),z=bt(z+f/100*E.height)),E="matrix("+M+","+k+","+D+","+B+","+C+","+z+")",y.setAttribute("transform",E),A&&(y.style[ft]=E)},D5=function(n,l,a,s,f){var o=360,m=Et(f),x=parseFloat(f)*(m&&~f.indexOf("rad")?tl:1),p=x-s,g=s+p+"deg",v,S;return m&&(v=f.split("_")[1],v==="short"&&(p%=o,p!==p%(o/2)&&(p+=p<0?o:-o)),v==="cw"&&p<0?p=(p+o*Bx)%o-~~(p/o)*o:v==="ccw"&&p>0&&(p=(p-o*Bx)%o-~~(p/o)*o)),n._pt=S=new on(n._pt,l,a,s,p,m5),S.e=g,S.u="deg",n._props.push(a),S},Px=function(n,l){for(var a in l)n[a]=l[a];return n},E5=function(n,l,a){var s=Px({},a._gsap),f="perspective,force3D,transformOrigin,svgOrigin",o=a.style,m,x,p,g,v,S,y,R;s.svg?(p=a.getAttribute("transform"),a.setAttribute("transform",""),o[ft]=l,m=Qo(a,1),ji(a,ft),a.setAttribute("transform",p)):(p=getComputedStyle(a)[ft],o[ft]=l,m=Qo(a,1),o[ft]=p);for(x in Ha)p=s[x],g=m[x],p!==g&&f.indexOf(x)<0&&(y=Ht(p),R=Ht(g),v=y!==R?Mi(a,x,p,R):parseFloat(p),S=parseFloat(g),n._pt=new on(n._pt,m,x,v,S-v,g0),n._pt.u=R||0,n._props.push(x));Px(m,s)};rn("padding,margin,Width,Radius",function(r,n){var l="Top",a="Right",s="Bottom",f="Left",o=(n<3?[l,a,s,f]:[l+f,l+a,s+a,s+f]).map(function(m){return n<2?r+m:"border"+m+r});Yc[n>1?"border"+r:r]=function(m,x,p,g,v){var S,y;if(arguments.length<4)return S=o.map(function(R){return Fa(m,R,p)}),y=S.join(" "),y.split(S[0]).length===5?S[0]:y;S=(g+"").split(" "),y={},o.forEach(function(R,w){return y[R]=S[w]=S[w]||S[(w-1)/2|0]}),m.init(x,y,v)}});var Tv={name:"css",register:v0,targetTest:function(n){return n.style&&n.nodeType},init:function(n,l,a,s,f){var o=this._props,m=n.style,x=a.vars.startAt,p,g,v,S,y,R,w,N,j,A,C,z,M,k,D,B,E;P0||v0(),this.styles=this.styles||Sv(n),B=this.styles.props,this.tween=a;for(w in l)if(w!=="autoRound"&&(g=l[w],!(wn[w]&&uv(w,l,a,s,n,f)))){if(y=typeof g,R=Yc[w],y==="function"&&(g=g.call(a,s,n,f),y=typeof g),y==="string"&&~g.indexOf("random(")&&(g=Xo(g)),R)R(this,n,w,g,a)&&(D=1);else if(w.substr(0,2)==="--")p=(getComputedStyle(n).getPropertyValue(w)+"").trim(),g+="",Ni.lastIndex=0,Ni.test(p)||(N=Ht(p),j=Ht(g),j?N!==j&&(p=Mi(n,w,p,j)+j):N&&(g+=N)),this.add(m,"setProperty",p,g,s,f,0,0,w),o.push(w),B.push(w,0,m[w]);else if(y!=="undefined"){if(x&&w in x?(p=typeof x[w]=="function"?x[w].call(a,s,n,f):x[w],Et(p)&&~p.indexOf("random(")&&(p=Xo(p)),Ht(p+"")||p==="auto"||(p+=Rn.units[w]||Ht(Fa(n,w))||""),(p+"").charAt(1)==="="&&(p=Fa(n,w))):p=Fa(n,w),S=parseFloat(p),A=y==="string"&&g.charAt(1)==="="&&g.substr(0,2),A&&(g=g.substr(2)),v=parseFloat(g),w in pa&&(w==="autoAlpha"&&(S===1&&Fa(n,"visibility")==="hidden"&&v&&(S=0),B.push("visibility",0,m.visibility),Ai(this,m,"visibility",S?"inherit":"hidden",v?"inherit":"hidden",!v)),w!=="scale"&&w!=="transform"&&(w=pa[w],~w.indexOf(",")&&(w=w.split(",")[0]))),C=w in Ha,C){if(this.styles.save(w),E=g,y==="string"&&g.substring(0,6)==="var(--"){if(g=An(n,g.substring(4,g.indexOf(")"))),g.substring(0,5)==="calc("){var L=n.style.perspective;n.style.perspective=g,g=An(n,"perspective"),L?n.style.perspective=L:ji(n,"perspective")}v=parseFloat(g)}if(z||(M=n._gsap,M.renderTransform&&!l.parseTransform||Qo(n,l.parseTransform),k=l.smoothOrigin!==!1&&M.smooth,z=this._pt=new on(this._pt,m,ft,0,1,M.renderTransform,M,0,-1),z.dep=1),w==="scale")this._pt=new on(this._pt,M,"scaleY",M.scaleY,(A?mr(M.scaleY,A+v):v)-M.scaleY||0,g0),this._pt.u=0,o.push("scaleY",w),w+="X";else if(w==="transformOrigin"){B.push(sn,0,m[sn]),g=N5(g),M.svg?b0(n,g,0,k,0,this):(j=parseFloat(g.split(" ")[2])||0,j!==M.zOrigin&&Ai(this,M,"zOrigin",M.zOrigin,j),Ai(this,m,w,Xc(p),Xc(g)));continue}else if(w==="svgOrigin"){b0(n,g,1,k,0,this);continue}else if(w in Av){D5(this,M,w,S,A?mr(S,A+g):g);continue}else if(w==="smoothOrigin"){Ai(this,M,"smooth",M.smooth,g);continue}else if(w==="force3D"){M[w]=g;continue}else if(w==="transform"){E5(this,g,n);continue}}else w in m||(w=_r(w)||w);if(C||(v||v===0)&&(S||S===0)&&!d5.test(g)&&w in m)N=(p+"").substr((S+"").length),v||(v=0),j=Ht(g)||(w in Rn.units?Rn.units[w]:N),N!==j&&(S=Mi(n,w,p,j)),this._pt=new on(this._pt,C?M:m,w,S,(A?mr(S,A+v):v)-S,!C&&(j==="px"||w==="zIndex")&&l.autoRound!==!1?g5:g0),this._pt.u=j||0,C&&E!==g?(this._pt.b=p,this._pt.e=E,this._pt.r=p5):N!==j&&j!=="%"&&(this._pt.b=p,this._pt.r=h5);else if(w in m)R5.call(this,n,w,p,A?A+g:g);else if(w in n)this.add(n,w,p||n[w],A?A+g:g,s,f);else if(w!=="parseTransform"){E0(w,g);continue}C||(w in m?B.push(w,0,m[w]):typeof n[w]=="function"?B.push(w,2,n[w]()):B.push(w,1,p||n[w])),o.push(w)}}D&&gv(this)},render:function(n,l){if(l.tween._time||!H0())for(var a=l._pt;a;)a.r(n,a.d),a=a._next;else l.styles.revert()},get:Fa,aliases:pa,getSetter:function(n,l,a){var s=pa[l];return s&&s.indexOf(",")<0&&(l=s),l in Ha&&l!==sn&&(n._gsap.x||Fa(n,"x"))?a&&zx===a?l==="scale"?y5:b5:(zx=a||{})&&(l==="scale"?S5:w5):n.style&&!j0(n.style[l])?x5:~l.indexOf("-")?v5:G0(n,l)},core:{_removeProperty:ji,_getMatrix:V0}};cn.utils.checkPrefix=_r;cn.core.getStyleSaver=Sv;(function(r,n,l,a){var s=rn(r+","+n+","+l,function(f){Ha[f]=1});rn(n,function(f){Rn.units[f]="deg",Av[f]=1}),pa[s[13]]=r+","+n,rn(a,function(f){var o=f.split(":");pa[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Rn.units[r]="px"});cn.registerPlugin(Tv);var Vn=cn.registerPlugin(Tv)||cn;Vn.core.Tween;const k5=({params:r})=>{const n=_.useRef(null),l=_.useRef(null),a=_.useRef(null),s=_.useRef(null),f=_.useRef(null);return _.useEffect(()=>{const o=x=>{const p=x.clientX,g=x.clientY;l.current&&Vn.set(l.current,{x:p,y:g});const v=[a.current,s.current,f.current].filter(Boolean);v.length>0&&Vn.to(v,{x:p,y:g,stagger:-r.stagger})},m=n.current;if(m)return m.addEventListener("mousemove",o),()=>m.removeEventListener("mousemove",o)},[r.stagger]),u.jsxs("div",{ref:n,className:"relative w-full h-full overflow-hidden",style:{cursor:"none"},children:[u.jsxs("div",{className:"absolute inset-0",style:{backgroundColor:r.bgColor},children:[u.jsx("div",{ref:a,className:"absolute rounded-full will-change-transform",style:{backgroundColor:r.shape1Color,width:r.shape1Size,height:r.shape1Size,marginLeft:-r.shape1Size/2,marginTop:-r.shape1Size/2}}),u.jsx("div",{ref:s,className:"absolute rounded-full will-change-transform",style:{backgroundColor:r.shape2Color,width:r.shape2Size,height:r.shape2Size,marginLeft:-r.shape2Size/2,marginTop:-r.shape2Size/2}}),u.jsx("div",{ref:f,className:"absolute rounded-full will-change-transform",style:{backgroundColor:r.shape3Color,width:r.shape3Size,height:r.shape3Size,marginLeft:-r.shape3Size/2,marginTop:-r.shape3Size/2}})]}),u.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white",style:{mixBlendMode:"screen"},children:u.jsx("h1",{className:"font-black text-center m-0 select-none",style:{color:"#000",fontSize:`${r.fontSize}px`,lineHeight:1.2},children:r.text})}),u.jsx("div",{ref:l,className:"fixed rounded-full will-change-transform pointer-events-none select-none z-[10000]",style:{backgroundColor:r.bgColor,width:r.cursorSize,height:r.cursorSize,marginLeft:-r.cursorSize/2,marginTop:-r.cursorSize/2}})]})},z5={text:"Hello there!",bgColor:"#2128bd",shape1Color:"#005ffe",shape1Size:650,shape2Color:"#ffe5e3",shape2Size:440,shape3Color:"#ffcc57",shape3Size:270,cursorSize:20,stagger:.1,fontSize:120},Hx=[{id:"original",label:"Original",bg:"#2128bd",shape1:"#005ffe",shape2:"#ffe5e3",shape3:"#ffcc57"},{id:"sunset",label:"Sunset",bg:"#1a0033",shape1:"#ff3366",shape2:"#ff9933",shape3:"#ffcc00"},{id:"ocean",label:"Ocean",bg:"#001a33",shape1:"#0066cc",shape2:"#00ccff",shape3:"#66ffcc"},{id:"forest",label:"Forest",bg:"#1a3300",shape1:"#336600",shape2:"#66cc33",shape3:"#ccff66"}],nr=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(s>=1?0:1)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),yc=({label:r,value:n,onChange:l})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("div",{className:"w-4 h-4 rounded border border-neutral-200",style:{backgroundColor:n}})]}),u.jsx("input",{type:"color",value:n,onChange:a=>l(a.target.value),className:"w-full h-7 bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer"})]}),B5=({params:r,onChange:n})=>{const l=Hx.find(s=>s.bg===r.bgColor&&s.shape1===r.shape1Color&&s.shape2===r.shape2Color&&s.shape3===r.shape3Color),a=s=>{n({...r,bgColor:s.bg,shape1Color:s.shape1,shape2Color:s.shape2,shape3Color:s.shape3})};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Text Content"}),u.jsx("input",{type:"text",value:r.text,onChange:s=>n({...r,text:s.target.value}),maxLength:30,className:"w-full px-2 py-1.5 text-xs bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400",placeholder:"Enter text"})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Presets"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:Hx.map(s=>u.jsx("button",{onClick:()=>a(s),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===s.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${s.shape1}, ${s.shape2}, ${s.shape3})`},title:s.label},s.id))}),l&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Custom Colors"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(yc,{label:"Background",value:r.bgColor,onChange:s=>n({...r,bgColor:s})}),u.jsx(yc,{label:"Shape 1",value:r.shape1Color,onChange:s=>n({...r,shape1Color:s})}),u.jsx(yc,{label:"Shape 2",value:r.shape2Color,onChange:s=>n({...r,shape2Color:s})}),u.jsx(yc,{label:"Shape 3",value:r.shape3Color,onChange:s=>n({...r,shape3Color:s})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Shape Sizes"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(nr,{label:"Shape 1 Size",value:r.shape1Size,min:200,max:1e3,step:10,onChange:s=>n({...r,shape1Size:s})}),u.jsx(nr,{label:"Shape 2 Size",value:r.shape2Size,min:150,max:800,step:10,onChange:s=>n({...r,shape2Size:s})}),u.jsx(nr,{label:"Shape 3 Size",value:r.shape3Size,min:100,max:600,step:10,onChange:s=>n({...r,shape3Size:s})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(nr,{label:"Stagger",value:r.stagger,min:0,max:.5,step:.01,onChange:s=>n({...r,stagger:s})}),u.jsx(nr,{label:"Cursor Size",value:r.cursorSize,min:10,max:50,step:1,onChange:s=>n({...r,cursorSize:s})}),u.jsx(nr,{label:"Font Size",value:r.fontSize,min:40,max:200,step:5,onChange:s=>n({...r,fontSize:s})})]})]})]})},L5=["M1915.1-195.3c-87.9,90.4-16.3,268,122.9,331.9S2339,73.2,2365.6,15.3c26.6-57.8-59-269.3-108-291.9C2208.5-299.1,2068.2-352.9,1915.1-195.3z","M1933.8,671.4c90.4,87.9,268,16.3,331.9-122.9s-63.4-301.1-121.3-327.6c-57.8-26.6-15.9,174-91.5,266.5C1982.4,573.6,1776.2,518.2,1933.8,671.4z","M1258.7-42c70.5-34.1-46.1-157.7-140.5-170.6C1024-225.4,918.9-146,884.9-93.2C836.2-17.5,895.4,45,928.6,49.5S1167.6,2,1258.7-42z","M-189.2-4.9c-113.8,54.3-108.3,245.6,0,353.9s304.4,45,349.4,0s38.1-273.1,0-311.2S9.1-99.5-189.2-4.9z","M1503.8,882.5c42.1-118.8-97.1-250.3-250.3-250.3s-247,183.4-247,247s166.1,220.1,220.1,220.1C1280.5,1099.3,1430.4,1089.6,1503.8,882.5z","M1124.8,102.8C1006,60.8,874.5,199.9,874.5,353.1s183.4,247,247,247c63.6,0-58.2-164.8-28.2-280.3C1121.4,212,1331.9,176.2,1124.8,102.8z","M1695.5,1061.4c101.8,74.3,189.1-184.9,135.9-328.6c-53.2-143.7-245.5-232.8-346.2-241.1c-144.5-11.9-188.4,119.6-169.7,170.2C1334.3,712.5,1564,965.3,1695.5,1061.4z","M1570.8,113.5c-78.3,1.5-24,162.6,56.4,213.6s209,22.8,261.9-11c75.9-48.5,48.2-130,19.9-148C1880.7,150.2,1672,111.6,1570.8,113.5z","M1751.5,747c-78.3,1.5-24,162.6,56.4,213.6c80.3,51.1,209,22.8,261.9-11c75.9-48.5,48.2-130,19.9-148C2061.4,783.7,1852.8,745.1,1751.5,747z","M410.4,530.7c-113.8,54.3-108.3,245.6,0,353.9s304.4,45,349.4,0c45-45,38.1-273.1,0-311.2C721.6,535.3,608.7,436.1,410.4,530.7z","M518-226.9c-113.8,54.3-108.3,245.6,0,353.9s304.4,45,349.4,0c45-45,38.1-273.1,0-311.2C829.2-222.3,716.3-321.5,518-226.9z","M234.7,592.4c54.3,113.8,245.6,108.3,353.9,0s45-304.4,0-349.4s-75.3,157.7-178.3,218.1C314.2,517.6,140.1,394.1,234.7,592.4z","M510.5,282.4c15.7,125,224.6,72.7,332.9-35.6s78.8-147.2,33.8-192.3s-109.1,0.6-212.1,61C569,172.1,493.7,148.7,510.5,282.4z","M150.3,414.5c-125,15.7-72.7,224.6,35.6,332.9s147.2,78.8,192.3,33.8s-0.6-109.1-61-212.1C260.6,472.9,284,397.7,150.3,414.5z","M531.6,326.2c105-69.6-94-116.5-247.2-116.5s-317.3,24.4-360,115.9C-136.9,457-28.8,543.8,25.1,543.8S395.8,416.2,531.6,326.2z","M685,456.6c105-69.6-94-116.5-247.2-116.5c-153.2,0-317.3,24.4-360,115.9c-61.3,131.4,46.8,218.2,100.7,218.2S549.2,546.6,685,456.6z","M1142.7,463.6c105-69.6-94-116.5-247.2-116.5s-317.3,24.4-360,115.9c-61.3,131.4,46.8,218.2,100.7,218.2C690.1,681.3,1006.9,553.6,1142.7,463.6z","M374.8,360.6c69.6,105,241.5-107.8,241.5-261s-149.4-303.5-241-346.3c-131.4-61.3-218.2,46.8-218.2,100.7S284.8,224.8,374.8,360.6z","M-17.6,985.6c69.6,105,241.5-107.8,241.5-261S74.5,421.1-17,378.4c-131.4-61.3-218.2,46.8-218.2,100.7S-107.6,849.8-17.6,985.6z","M87.9-56.7C13.9-82.5,9,87.4,66.6,163.2s188.1,93.9,249.4,80.6c88-19.1,90.3-105.2,70-131.9C365.7,85.3,183.5-23.4,87.9-56.7z","M130.4,627.6c-74-25.8-78.9,144.1-21.3,219.9s188.1,93.9,249.4,80.6c88-19.1,90.3-105.2,70-131.9C408.2,769.6,225.9,660.9,130.4,627.6z","M1846.9,225.4c42.1-118.8-97.1-250.3-250.3-250.3s-247,183.4-247,247s166.1,220.1,220.1,220.1C1623.6,442.3,1773.5,432.6,1846.9,225.4z","M1044.2,270.7c42.1-118.8-97.1-250.3-250.3-250.3s-247,183.4-247,247S713,487.6,766.9,487.6C820.9,487.6,970.8,477.9,1044.2,270.7z","M1148.9,517c-99.5-77.3-210.2,107.4-210.2,260.5s48.4,159.8,112.1,159.8s76.8-77.5,106.8-193.1C1185.6,636.4,1255.4,599.8,1148.9,517z","M1310.3,169c77.3-99.5-107.4-210.2-260.5-210.2S889.9,7.2,889.9,70.8s77.5,76.8,193.1,106.8C1190.9,205.7,1227.6,275.4,1310.3,169z","M1103.1,501.1c-25,123.5,148.8,15.9,257.1-92.4S1567.3,167,1532.8,72.1C1483.3-64.2,1345.5-49.1,1307.4-11S1135.4,341.4,1103.1,501.1z","M902.4,517.3c-25,123.5,148.8,15.9,257.1-92.4s207.1-241.6,172.6-336.6C1282.6-48,1144.8-32.9,1106.7,5.2C1068.5,43.3,934.8,357.6,902.4,517.3z","M675.4,977.7c-25,123.5,148.8,15.9,257.1-92.4c108.3-108.3,207.1-241.6,172.6-336.6c-49.5-136.2-187.3-121.2-225.5-83.1C841.6,503.8,707.8,818,675.4,977.7z","M1189.6,365.8c-123.5-25-94.6,247,13.8,355.3s320.3,109,415.2,74.4c136.2-49.5,121.2-187.3,83.1-225.5C1663.6,531.9,1349.3,398.2,1189.6,365.8z","M1178.3-351.1c-123.5-25-94.6,247,13.8,355.3s320.3,109,415.2,74.4c136.2-49.5,121.2-187.3,83.1-225.5S1338-318.8,1178.3-351.1z","M1687.6,458c70.5-34.1-46.1-157.7-140.5-170.6c-94.3-12.8-199.4,66.6-233.4,119.4c-48.7,75.7,10.5,138.2,43.7,142.8C1390.7,554.1,1596.5,502.1,1687.6,458z","M1328.9,258.3c-87.9,90.4-16.3,268,122.9,331.9s301.1-63.4,327.6-121.3c26.6-57.8-59-269.3-108-291.9S1482.1,100.8,1328.9,258.3z","M2077.1,552.5c-87.9,90.4-16.3,268,122.9,331.9c139.2,64,301.1-63.4,327.6-121.3c26.6-57.8-59-269.3-108-291.9C2370.6,448.7,2230.3,394.9,2077.1,552.5z","M2084.8,284.9c58.1,111.8,235.9-9.7,299.8-148.9c64-139.2,22.8-165.4-35.1-192c-57.8-26.6-102.1,38.4-177.7,130.8C2101.4,161.1,2022.7,165.3,2084.8,284.9z","M1792.8,533.8c-111.8,58.1,9.7,235.9,148.9,299.8s165.4,22.8,192-35.1s-38.4-102.1-130.8-177.7C1916.6,550.3,1912.5,471.6,1792.8,533.8z","M2119.8,318.6c74.3-101.8-128.6-76.6-272.2-23.5s-289.1,133-297.4,233.7c-11.9,144.5,119.6,188.4,170.2,169.7C1770.9,679.8,2023.7,450.1,2119.8,318.6z","M2308.9,387.7c74.3-101.8-128.6-76.6-272.2-23.5s-289.1,133-297.4,233.7c-11.9,144.5,119.6,188.4,170.2,169.7C1960,748.9,2212.8,519.3,2308.9,387.7z","M2722.5,146.8c74.3-101.8-128.6-76.6-272.2-23.5c-143.7,53.2-289.1,133-297.4,233.7c-11.9,144.5,119.6,188.4,170.2,169.7C2373.6,508,2626.4,278.3,2722.5,146.8z","M1984.7,405.3c101.8,74.3,189.1-184.9,135.9-328.6S1875.1-156,1774.4-164.3C1630-176.2,1586.1-44.8,1604.8,5.8C1623.5,56.4,1853.1,309.2,1984.7,405.3z"];function qx(r,n){return Math.floor(Math.random()*(Math.floor(n)-Math.ceil(r)))+Math.ceil(r)}const O5=({params:r})=>{const n=_.useRef(null),l=_.useRef([]),a=_.useRef([]),s=_.useRef(1),f=_.useRef(!0),o=_.useRef(),m=_.useRef(r);m.current=r;const x=_.useCallback(()=>{const R=m.current.slides,w=R[s.current%R.length],N=w.line1.toUpperCase(),j=w.line2.toUpperCase(),A=w.line3.toUpperCase();a.current.forEach((C,z)=>{C&&(C.textContent=[N,j,A][z])})},[]),p=_.useCallback(()=>{const{color1:R,color2:w,color3:N}=m.current,j=[R,w,N];l.current.forEach(A=>{if(!A)return;const C=j[qx(0,j.length)];Vn.set(A,{attr:{fill:C},scale:0,transformOrigin:"center"})})},[]),g=_.useCallback(()=>{n.current&&Vn.set(n.current,{autoAlpha:1});const{duration:R}=m.current;l.current.forEach(w=>{w&&Vn.to(w,{scale:1.2,rotation:qx(-30,30),duration:R,ease:"power2.inOut"})})},[]),v=_.useCallback(()=>{p(),x(),g()},[p,x,g]),S=_.useCallback(()=>{s.current=(s.current+1)%m.current.slides.length;const R=l.current.filter(Boolean),{duration:w}=m.current;Vn.to(R,{scale:0,duration:w,ease:"power2.inOut",onComplete:()=>v()})},[v]),y=_.useCallback(()=>{f.current&&(f.current=!1,setTimeout(()=>{f.current=!0},2e3),S(),clearInterval(o.current),m.current.autoPlay&&(o.current=setInterval(S,m.current.interval*1e3)))},[S]);return _.useEffect(()=>{v()},[v]),_.useEffect(()=>(clearInterval(o.current),r.autoPlay&&(o.current=setInterval(S,r.interval*1e3)),()=>clearInterval(o.current)),[r.autoPlay,r.interval,S]),u.jsx("div",{ref:n,onClick:y,className:"w-full h-full flex items-center justify-center overflow-hidden cursor-pointer",style:{opacity:0},children:u.jsxs("svg",{viewBox:"0 0 2371.2 841.1",className:"w-full shrink-0",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("mask",{maskUnits:"userSpaceOnUse",x:"-273",y:"-353.2",width:"3011.9",height:"1453",id:"textmask-bubbles-mask",children:u.jsxs("g",{children:[u.jsx("text",{ref:R=>{a.current[0]=R},transform:"matrix(1 0 0 1 62.9893 251.1275)",style:{fill:"#fff",fontFamily:"'Source Sans Pro', sans-serif",fontWeight:900,fontSize:"379.144px"},children:"WE ARE"}),u.jsx("text",{ref:R=>{a.current[1]=R},transform:"matrix(1 0 0 1 62.9893 544.8433)",style:{fill:"#fff",fontFamily:"'Source Sans Pro', sans-serif",fontWeight:900,fontSize:"379.144px"},children:"WE ARE"}),u.jsx("text",{ref:R=>{a.current[2]=R},transform:"matrix(1 0 0 1 62.9893 838.5591)",style:{fill:"#fff",fontFamily:"'Source Sans Pro', sans-serif",fontWeight:900,fontSize:"379.144px"},children:"WE ARE"})]})}),u.jsx("g",{style:{mask:"url(#textmask-bubbles-mask)"},children:L5.map((R,w)=>u.jsx("path",{ref:N=>{l.current[w]=N},d:R},w))})]})})},F5={slides:[{line1:"WE ARE",line2:"thinkers",line3:"+Doers"},{line1:"WE ARE",line2:"optimists",line3:"+realists"},{line1:"WE ARE",line2:"willing",line3:"+able"}],duration:1.5,interval:5,autoPlay:!0,color1:"#f5a147",color2:"#51cad8",color3:"#2a5e6e",bgColor:"#112b39"},Vx=[{id:"original",label:"Original",colors:{color1:"#f5a147",color2:"#51cad8",color3:"#2a5e6e"}},{id:"sunset",label:"Sunset",colors:{color1:"#ff6b6b",color2:"#feca57",color3:"#ee5a6f"}},{id:"ocean",label:"Ocean",colors:{color1:"#00d2ff",color2:"#3a7bd5",color3:"#0077b6"}},{id:"forest",label:"Forest",colors:{color1:"#56ab2f",color2:"#a8e063",color3:"#11998e"}},{id:"neon",label:"Neon",colors:{color1:"#f72585",color2:"#7209b7",color3:"#4cc9f0"}}],Yx=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(s>=1?0:1)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Sc=({label:r,value:n,onChange:l})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("div",{className:"w-4 h-4 rounded border border-neutral-200",style:{backgroundColor:n}})]}),u.jsx("input",{type:"color",value:n,onChange:a=>l(a.target.value),className:"w-full h-7 bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer"})]}),I5=({label:r,value:n,onChange:l})=>u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("button",{onClick:()=>l(!n),className:`relative w-7 h-4 rounded-full transition-colors ${n?"bg-neutral-800":"bg-neutral-300"}`,children:u.jsx("span",{className:`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${n?"translate-x-3":"translate-x-0"}`})})]}),G5=({params:r,onChange:n})=>{const l=Vx.find(f=>f.colors.color1===r.color1&&f.colors.color2===r.color2&&f.colors.color3===r.color3),a=f=>{n({...r,...f.colors})},s=(f,o,m)=>{const x=r.slides.map((p,g)=>g===f?{...p,[o]:m}:p);n({...r,slides:x})};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Text Slides"}),u.jsx("div",{className:"flex flex-col gap-3",children:r.slides.map((f,o)=>u.jsxs("div",{className:"bg-neutral-50 rounded-lg p-2",children:[u.jsxs("div",{className:"text-[8px] font-medium text-neutral-400 mb-1.5",children:["Slide ",o+1]}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("input",{type:"text",value:f.line1,onChange:m=>s(o,"line1",m.target.value),maxLength:20,className:"w-full px-2 py-1 text-[9px] bg-white border border-neutral-200 rounded focus:outline-none focus:border-neutral-400",placeholder:"Line 1"}),u.jsx("input",{type:"text",value:f.line2,onChange:m=>s(o,"line2",m.target.value),maxLength:20,className:"w-full px-2 py-1 text-[9px] bg-white border border-neutral-200 rounded focus:outline-none focus:border-neutral-400",placeholder:"Line 2"}),u.jsx("input",{type:"text",value:f.line3,onChange:m=>s(o,"line3",m.target.value),maxLength:20,className:"w-full px-2 py-1 text-[9px] bg-white border border-neutral-200 rounded focus:outline-none focus:border-neutral-400",placeholder:"Line 3"})]})]},o))})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Presets"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:Vx.map(f=>u.jsx("button",{onClick:()=>a(f),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(l==null?void 0:l.id)===f.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${f.colors.color1}, ${f.colors.color2}, ${f.colors.color3})`},title:f.label},f.id))}),l&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:l.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Background"}),u.jsx(Sc,{label:"BG Color",value:r.bgColor,onChange:f=>n({...r,bgColor:f})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Bubble Colors"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Sc,{label:"Color 1",value:r.color1,onChange:f=>n({...r,color1:f})}),u.jsx(Sc,{label:"Color 2",value:r.color2,onChange:f=>n({...r,color2:f})}),u.jsx(Sc,{label:"Color 3",value:r.color3,onChange:f=>n({...r,color3:f})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Yx,{label:"Duration",value:r.duration,min:.5,max:3,step:.1,onChange:f=>n({...r,duration:f})}),u.jsx(Yx,{label:"Interval",value:r.interval,min:2,max:10,step:.5,onChange:f=>n({...r,interval:f})}),u.jsx(I5,{label:"Auto Play",value:r.autoPlay,onChange:f=>n({...r,autoPlay:f})})]})]})]})},U5=[{id:"echotrace",name:"EchoTrace",description:"Psychedelic motion trail"},{id:"spotlight",name:"Spotlight",description:"Cursor spotlight effect"},{id:"textmask",name:"Text Mask",description:"SVG mask bubble reveal"},{id:"flip",name:"FLIP",description:"GSAP Flip layout animation"},{id:"framers",name:"Framers",description:"Splitting.js stagger text animation"},{id:"squares",name:"Squares",description:"Generative normal-distributed art"}],P5=({active:r,onSelect:n})=>{const l=_.useRef(null);return _.useEffect(()=>{var a;(a=l.current)==null||a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[r]),u.jsx("div",{className:"flex gap-1.5 overflow-x-auto scrollbar-hide px-5 py-3 flex-shrink-0",children:U5.map(a=>{const s=r===a.id;return u.jsx("button",{ref:s?l:null,onClick:()=>n(a.id),className:`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${s?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:a.name},a.id)})})};var H5=j1();/*!
 * matrix 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ia,ol,Y0,au,Lo,Lc,Zc,Uo,ta="transform",y0=ta+"Origin",jv,X0=function(n){var l=n.ownerDocument||n;for(!(ta in n.style)&&("msTransform"in n.style)&&(ta="msTransform",y0=ta+"Origin");l.parentNode&&(l=l.parentNode););if(ol=window,Zc=new sl,l){Ia=l,Y0=l.documentElement,au=l.body,Uo=Ia.createElementNS("http://www.w3.org/2000/svg","g"),Uo.style.transform="none";var a=l.createElement("div"),s=l.createElement("div"),f=l&&(l.body||l.firstElementChild);f&&f.appendChild&&(f.appendChild(a),a.appendChild(s),a.style.position="static",a.style.transform="translate3d(0,0,1px)",jv=s.offsetParent!==a,f.removeChild(a))}return l},q5=function(n){for(var l,a;n&&n!==au;)a=n._gsap,a&&a.uncache&&a.get(n,"x"),a&&!a.scaleX&&!a.scaleY&&a.renderTransform&&(a.scaleX=a.scaleY=1e-4,a.renderTransform(1,a),l?l.push(a):l=[a]),n=n.parentNode;return l},Mv=[],Dv=[],Z0=function(){return ol.pageYOffset||Ia.scrollTop||Y0.scrollTop||au.scrollTop||0},W0=function(){return ol.pageXOffset||Ia.scrollLeft||Y0.scrollLeft||au.scrollLeft||0},K0=function(n){return n.ownerSVGElement||((n.tagName+"").toLowerCase()==="svg"?n:null)},V5=function r(n){if(ol.getComputedStyle(n).position==="fixed")return!0;if(n=n.parentNode,n&&n.nodeType===1)return r(n)},Id=function r(n,l){if(n.parentNode&&(Ia||X0(n))){var a=K0(n),s=a?a.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",f=a?l?"rect":"g":"div",o=l!==2?0:100,m=l===3?100:0,x={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},p=Ia.createElementNS?Ia.createElementNS(s.replace(/^https/,"http"),f):Ia.createElement(f);return l&&(a?(Lc||(Lc=r(n)),p.setAttribute("width",.01),p.setAttribute("height",.01),p.setAttribute("transform","translate("+o+","+m+")"),p.setAttribute("fill","transparent"),Lc.appendChild(p)):(Lo||(Lo=r(n),Object.assign(Lo.style,x)),Object.assign(p.style,x,{width:"0.1px",height:"0.1px",top:m+"px",left:o+"px"}),Lo.appendChild(p))),p}throw"Need document and parent."},Y5=function(n){for(var l=new sl,a=0;a<n.numberOfItems;a++)l.multiply(n.getItem(a).matrix);return l},Ev=function(n){var l=n.getCTM(),a;return l||(a=n.style[ta],n.style[ta]="none",n.appendChild(Uo),l=Uo.getCTM(),n.removeChild(Uo),a?n.style[ta]=a:n.style.removeProperty(ta.replace(/([A-Z])/g,"-$1").toLowerCase())),l||Zc.clone()},X5=function(n,l){var a=K0(n),s=n===a,f=a?Mv:Dv,o=n.parentNode,m=o&&!a&&o.shadowRoot&&o.shadowRoot.appendChild?o.shadowRoot:o,x,p,g,v,S,y;if(n===ol)return n;if(f.length||f.push(Id(n,1),Id(n,2),Id(n,3)),x=a?Lc:Lo,a)s?(g=Ev(n),v=-g.e/g.a,S=-g.f/g.d,p=Zc):n.getBBox?(g=n.getBBox(),p=n.transform?n.transform.baseVal:{},p=p.numberOfItems?p.numberOfItems>1?Y5(p):p.getItem(0).matrix:Zc,v=p.a*g.x+p.c*g.y,S=p.b*g.x+p.d*g.y):(p=new sl,v=S=0),l&&n.tagName.toLowerCase()==="g"&&(v=S=0),(s||!n.getBoundingClientRect().width?a:o).appendChild(x),x.setAttribute("transform","matrix("+p.a+","+p.b+","+p.c+","+p.d+","+(p.e+v)+","+(p.f+S)+")");else{if(v=S=0,jv)for(p=n.offsetParent,g=n;g&&(g=g.parentNode)&&g!==p&&g.parentNode;)(ol.getComputedStyle(g)[ta]+"").length>4&&(v=g.offsetLeft,S=g.offsetTop,g=0);if(y=ol.getComputedStyle(n),y.position!=="absolute"&&y.position!=="fixed")for(p=n.offsetParent;o&&o!==p;)v+=o.scrollLeft||0,S+=o.scrollTop||0,o=o.parentNode;g=x.style,g.top=n.offsetTop-S+"px",g.left=n.offsetLeft-v+"px",g[ta]=y[ta],g[y0]=y[y0],g.position=y.position==="fixed"?"fixed":"absolute",m.appendChild(x)}return x},Gd=function(n,l,a,s,f,o,m){return n.a=l,n.b=a,n.c=s,n.d=f,n.e=o,n.f=m,n},sl=(function(){function r(l,a,s,f,o,m){l===void 0&&(l=1),a===void 0&&(a=0),s===void 0&&(s=0),f===void 0&&(f=1),o===void 0&&(o=0),m===void 0&&(m=0),Gd(this,l,a,s,f,o,m)}var n=r.prototype;return n.inverse=function(){var a=this.a,s=this.b,f=this.c,o=this.d,m=this.e,x=this.f,p=a*o-s*f||1e-10;return Gd(this,o/p,-s/p,-f/p,a/p,(f*x-o*m)/p,-(a*x-s*m)/p)},n.multiply=function(a){var s=this.a,f=this.b,o=this.c,m=this.d,x=this.e,p=this.f,g=a.a,v=a.c,S=a.b,y=a.d,R=a.e,w=a.f;return Gd(this,g*s+S*o,g*f+S*m,v*s+y*o,v*f+y*m,x+R*s+w*o,p+R*f+w*m)},n.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},n.equals=function(a){var s=this.a,f=this.b,o=this.c,m=this.d,x=this.e,p=this.f;return s===a.a&&f===a.b&&o===a.c&&m===a.d&&x===a.e&&p===a.f},n.apply=function(a,s){s===void 0&&(s={});var f=a.x,o=a.y,m=this.a,x=this.b,p=this.c,g=this.d,v=this.e,S=this.f;return s.x=f*m+o*p+v||0,s.y=f*x+o*g+S||0,s},r})();function xa(r,n,l,a){if(!r||!r.parentNode||(Ia||X0(r)).documentElement===r)return new sl;var s=q5(r),f=K0(r),o=f?Mv:Dv,m=X5(r,l),x=o[0].getBoundingClientRect(),p=o[1].getBoundingClientRect(),g=o[2].getBoundingClientRect(),v=m.parentNode,S=!a&&V5(r),y=new sl((p.left-x.left)/100,(p.top-x.top)/100,(g.left-x.left)/100,(g.top-x.top)/100,x.left+(S?0:W0()),x.top+(S?0:Z0()));if(v.removeChild(m),s)for(x=s.length;x--;)p=s[x],p.scaleX=p.scaleY=0,p.renderTransform(1,p);return n?y.inverse():y}/*!
 * Flip 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Z5=1,Cr,Ot,tt,Po,wi,Ga,S0,Xx=function(n,l){return n.actions.forEach(function(a){return a.vars[l]&&a.vars[l](a)})},w0={},Zx=180/Math.PI,W5=Math.PI/180,Wc={},Wx={},iu={},Q0=function(n){return typeof n=="string"?n.split(" ").join("").split(","):n},K5=Q0("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),lu=Q0("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),Ho=function(n){return Cr(n)[0]||console.warn("Element not found:",n)},fr=function(n){return Math.round(n*1e4)/1e4||0},Ud=function(n,l,a){return n.forEach(function(s){return s.classList[a](l)})},Kx={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},kv={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},zv=function(n){return n.replace(/([A-Z])/g,"-$1").toLowerCase()},dr=function(n,l){var a={},s;for(s in n)l[s]||(a[s]=n[s]);return a},$0={},Bv=function(n){var l=$0[n]=Q0(n);return iu[n]=l.concat(lu),l},Q5=function(n){var l=n._gsap||Ot.core.getCache(n);return l.gmCache===Ot.ticker.frame?l.gMatrix:(l.gmCache=Ot.ticker.frame,l.gMatrix=xa(n,!0,!1,!0))},$5=function r(n,l,a){a===void 0&&(a=0);for(var s=n.parentNode,f=1e3*Math.pow(10,a)*(l?-1:1),o=l?-f*900:0;n;)o+=f,n=n.previousSibling;return s?o+r(s,l,a+1):o},Kc=function(n,l,a){return n.forEach(function(s){return s.d=$5(a?s.element:s.t,l)}),n.sort(function(s,f){return s.d-f.d}),n},$o=function(n,l){for(var a=n.element.style,s=n.css=n.css||[],f=l.length,o,m;f--;)o=l[f],m=a[o]||a.getPropertyValue(o),s.push(m?o:Wx[o]||(Wx[o]=zv(o)),m);return a},Qc=function(n){var l=n.css,a=n.element.style,s=0;for(n.cache.uncache=1;s<l.length;s+=2)l[s+1]?a[l[s]]=l[s+1]:a.removeProperty(l[s]);!l[l.indexOf("transform")+1]&&a.translate&&(a.removeProperty("translate"),a.removeProperty("scale"),a.removeProperty("rotate"))},Qx=function(n,l){n.forEach(function(a){return a.a.cache.uncache=1}),l||n.finalStates.forEach(Qc)},Pd="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),J0=function(n,l,a){var s=n.element,f=n.width,o=n.height,m=n.uncache,x=n.getProp,p=s.style,g=4,v,S,y;if(typeof l!="object"&&(l=n),tt&&a!==1)return tt._abs.push({t:s,b:n,a:n,sd:0}),tt._final.push(function(){return(n.cache.uncache=1)&&Qc(n)}),s;for(S=x("display")==="none",(!n.isVisible||S)&&(S&&($o(n,["display"]).display=l.display),n.matrix=l.matrix,n.width=f=n.width||l.width,n.height=o=n.height||l.height),$o(n,Pd),y=window.getComputedStyle(s);g--;)p[Pd[g]]=y[Pd[g]];if(p.gridArea="1 / 1 / 1 / 1",p.transition="none",p.position="absolute",p.width=f+"px",p.height=o+"px",p.top||(p.top="0px"),p.left||(p.left="0px"),m)v=new cl(s);else if(v=dr(n,Wc),v.position="absolute",n.simple){var R=s.getBoundingClientRect();v.matrix=new sl(1,0,0,1,R.left+W0(),R.top+Z0())}else v.matrix=xa(s,!1,!1,!0);return v=gr(v,n,!0),n.x=Ga(v.x,.01),n.y=Ga(v.y,.01),s},$x=function(n,l){return l!==!0&&(l=Cr(l),n=n.filter(function(a){if(l.indexOf((a.sd<0?a.b:a.a).element)!==-1)return!0;a.t._gsap.renderTransform(1),a.b.isVisible&&(a.t.style.width=a.b.width+"px",a.t.style.height=a.b.height+"px")})),n},Lv=function(n){return Kc(n,!0).forEach(function(l){return(l.a.isVisible||l.b.isVisible)&&J0(l.sd<0?l.b:l.a,l.b,1)})},J5=function(n,l){return l&&n.idLookup[_0(l).id]||n.elementStates[0]},_0=function(n,l,a,s){return n instanceof cl?n:n instanceof na?J5(n,s):new cl(typeof n=="string"?Ho(n)||console.warn(n+" not found"):n,l,a)},ew=function(n,l){for(var a=Ot.getProperty(n.element,null,"native"),s=n.props={},f=l.length;f--;)s[l[f]]=(a(l[f])+"").trim();return s.zIndex&&(s.zIndex=parseFloat(s.zIndex)||0),n},Ov=function(n,l){var a=n.style||n,s;for(s in l)a[s]=l[s]},tw=function(n){var l=n.getAttribute("data-flip-id");return l||n.setAttribute("data-flip-id",l="auto-"+Z5++),l},Fv=function(n){return n.map(function(l){return l.element})},Jx=function(n,l,a){return n&&l.length&&a.add(n(Fv(l),a,new na(l,0,!0)),0)},gr=function(n,l,a,s,f,o){var m=n.element,x=n.cache,p=n.parent,g=n.x,v=n.y,S=l.width,y=l.height,R=l.scaleX,w=l.scaleY,N=l.rotation,j=l.bounds,A=o&&S0&&S0(m,"transform,width,height"),C=n,z=l.matrix,M=z.e,k=z.f,D=n.bounds.width!==j.width||n.bounds.height!==j.height||n.scaleX!==R||n.scaleY!==w||n.rotation!==N,B=!D&&n.simple&&l.simple&&!f,E,L,G,W,K,q,ie;return B||!p?(R=w=1,N=E=0):(K=Q5(p),q=K.clone().multiply(l.ctm?l.matrix.clone().multiply(l.ctm):l.matrix),N=fr(Math.atan2(q.b,q.a)*Zx),E=fr(Math.atan2(q.c,q.d)*Zx+N)%360,R=Math.sqrt(Math.pow(q.a,2)+Math.pow(q.b,2)),w=Math.sqrt(Math.pow(q.c,2)+Math.pow(q.d,2))*Math.cos(E*W5),f&&(f=Cr(f)[0],W=Ot.getProperty(f),ie=f.getBBox&&typeof f.getBBox=="function"&&f.getBBox(),C={scaleX:W("scaleX"),scaleY:W("scaleY"),width:ie?ie.width:Math.ceil(parseFloat(W("width","px"))),height:ie?ie.height:parseFloat(W("height","px"))}),x.rotation=N+"deg",x.skewX=E+"deg"),a?(R*=S===C.width||!C.width?1:S/C.width,w*=y===C.height||!C.height?1:y/C.height,x.scaleX=R,x.scaleY=w):(S=Ga(S*R/C.scaleX,0),y=Ga(y*w/C.scaleY,0),m.style.width=S+"px",m.style.height=y+"px"),s&&Ov(m,l.props),B||!p?(g+=M-n.matrix.e,v+=k-n.matrix.f):D||p!==l.parent?(x.x=g+"px",x.y=v+"px",x.renderTransform(1,x),q=xa(f||m,!1,!1,!0),L=K.apply({x:q.e,y:q.f}),G=K.apply({x:M,y:k}),g+=G.x-L.x,v+=G.y-L.y):(K.e=K.f=0,G=K.apply({x:M-n.matrix.e,y:k-n.matrix.f}),g+=G.x,v+=G.y),g=Ga(g,.02),v=Ga(v,.02),o&&!(o instanceof cl)?A&&A.revert():(x.x=g+"px",x.y=v+"px",x.renderTransform(1,x)),o&&(o.x=g,o.y=v,o.rotation=N,o.skewX=E,a?(o.scaleX=R,o.scaleY=w):(o.width=S,o.height=y)),o||x},Hd=function(n,l){return n instanceof na?n:new na(n,l)},Iv=function(n,l,a){var s=n.idLookup[a],f=n.alt[a];return f.isVisible&&(!(l.getElementState(f.element)||f).isVisible||!s.isVisible)?f:s},qd=[],Vd="width,height,overflowX,overflowY".split(","),wc,e1=function(n){if(n!==wc){var l=wi.style,a=wi.clientWidth===window.outerWidth,s=wi.clientHeight===window.outerHeight,f=4;if(n&&(a||s)){for(;f--;)qd[f]=l[Vd[f]];a&&(l.width=wi.clientWidth+"px",l.overflowY="hidden"),s&&(l.height=wi.clientHeight+"px",l.overflowX="hidden"),wc=n}else if(wc){for(;f--;)qd[f]?l[Vd[f]]=qd[f]:l.removeProperty(zv(Vd[f]));wc=n}}},t1=function(n,l){for(var a=0;a<n.length;a+=3)Ot.set(n[a],{clearProps:!0}),n[a].setAttribute("style",n[a+l]),n[a]._gsap.gmCache=-1},Yd=function(n,l,a,s){n instanceof na&&l instanceof na||console.warn("Not a valid state object."),a=a||{};var f=a,o=f.clearProps,m=f.onEnter,x=f.onLeave,p=f.absolute,g=f.absoluteOnLeave,v=f.custom,S=f.delay,y=f.paused,R=f.repeat,w=f.repeatDelay,N=f.yoyo,j=f.toggleClass,A=f.nested,C=f.zIndex,z=f.scale,M=f.fade,k=f.stagger,D=f.spin,B=f.prune,E=("props"in a?a:n).props,L=dr(a,Kx),G=Ot.timeline({delay:S,paused:y,repeat:R,repeatDelay:w,yoyo:N,data:"isFlip"}),W=L,K=[],q=[],ie=[],U=[],Q=D===!0?1:D||0,se=typeof D=="function"?D:function(){return Q},ue=n.interrupted||l.interrupted,pe=G[s!==1?"to":"from"],O,P,J,te,ae,le,oe,me,re,fe,Ae,Oe,Se,ce;for(P in l.idLookup)Ae=l.alt[P]?Iv(l,n,P):l.idLookup[P],ae=Ae.element,fe=n.idLookup[P],n.alt[P]&&ae===fe.element&&(n.alt[P].isVisible||!Ae.isVisible)&&(fe=n.alt[P]),fe?(le={t:ae,b:fe,a:Ae,sd:fe.element===ae?0:Ae.isVisible?1:-1},ie.push(le),le.sd&&(le.sd<0&&(le.b=Ae,le.a=fe),ue&&$o(le.b,E?iu[E]:lu),M&&ie.push(le.swap={t:fe.element,b:le.b,a:le.a,sd:-le.sd,swap:le})),ae._flip=fe.element._flip=tt?tt.timeline:G):Ae.isVisible&&(ie.push({t:ae,b:dr(Ae,{isVisible:1}),a:Ae,sd:0,entering:1}),ae._flip=tt?tt.timeline:G);if(E&&($0[E]||Bv(E)).forEach(function(Qe){return L[Qe]=function(ge){return ie[ge].a.props[Qe]}}),ie.finalStates=re=[],Oe=function(){Kc(ie),e1(!0);var ge=[];for(te=0;te<ie.length;te++)le=ie[te],Se=le.a,ce=le.b,B&&!Se.isDifferent(ce)&&!le.entering?ie.splice(te--,1):(ae=le.t,A&&!(le.sd<0)&&te&&(Se=le.a=Se.clone({matrix:xa(ae,!1,!1,!0)})),ce.isVisible&&Se.isVisible?(le.sd<0?(A&&t1(ge,1),oe=new cl(ae,E,n.simple),gr(oe,Se,z,0,0,oe),oe.matrix=xa(ae,!1,!1,!0),oe.bounds=ae.getBoundingClientRect(),oe.css=le.b.css,le.a=Se=oe,M&&(ae.style.opacity=ue?ce.opacity:Se.opacity),k&&U.push(ae),A&&(t1(ge,2),ge.push(ae,ae.getAttribute("style")))):le.sd>0&&M&&(ae.style.opacity=ue?Se.opacity-ce.opacity:"0"),gr(Se,ce,z,E),A&&le.sd<0&&ge.push(ae.getAttribute("style"))):ce.isVisible!==Se.isVisible&&(ce.isVisible?Se.isVisible||(ce.css=Se.css,q.push(ce),ie.splice(te--,1),p&&A&&gr(Se,ce,z,E)):(Se.isVisible&&K.push(Se),ie.splice(te--,1))),z||(ae.style.maxWidth=Math.max(Se.width,ce.width)+"px",ae.style.maxHeight=Math.max(Se.height,ce.height)+"px",ae.style.minWidth=Math.min(Se.width,ce.width)+"px",ae.style.minHeight=Math.min(Se.height,ce.height)+"px"),A&&j&&ae.classList.add(j)),re.push(Se);var je;if(j&&(je=re.map(function(de){return de.element}),A&&je.forEach(function(de){return de.classList.remove(j)})),e1(!1),z?(L.scaleX=function(de){return ie[de].a.scaleX},L.scaleY=function(de){return ie[de].a.scaleY}):(L.width=function(de){return ie[de].a.width+"px"},L.height=function(de){return ie[de].a.height+"px"},L.autoRound=a.autoRound||!1),L.x=function(de){return ie[de].a.x+"px"},L.y=function(de){return ie[de].a.y+"px"},L.rotation=function(de){return ie[de].a.rotation+(D?se(de,me[de],me)*360:0)},L.skewX=function(de){return ie[de].a.skewX},me=ie.map(function(de){return de.t}),(C||C===0)&&(L.modifiers={zIndex:function(){return C}},L.zIndex=C,L.immediateRender=a.immediateRender!==!1),M&&(L.opacity=function(de){return ie[de].sd<0?0:ie[de].sd>0?ie[de].a.opacity:"+=0"}),U.length){k=Ot.utils.distribute(k);var be=me.slice(U.length);L.stagger=function(de,at){return k(~U.indexOf(at)?me.indexOf(ie[de].swap.t):de,at,be)}}if(K5.forEach(function(de){return a[de]&&G.eventCallback(de,a[de],a[de+"Params"])}),v&&me.length){W=dr(L,Kx),"scale"in v&&(v.scaleX=v.scaleY=v.scale,delete v.scale);for(P in v)O=dr(v[P],kv),O[P]=L[P],!("duration"in O)&&"duration"in L&&(O.duration=L.duration),O.stagger=L.stagger,pe.call(G,me,O,0),delete W[P]}(me.length||q.length||K.length)&&(j&&G.add(function(){return Ud(je,j,G._zTime<0?"remove":"add")},0)&&!y&&Ud(je,j,"add"),me.length&&pe.call(G,me,W,0)),Jx(m,K,G),Jx(x,q,G);var we=tt&&tt.timeline;we&&(we.add(G,0),tt._final.push(function(){return Qx(ie,!o)})),J=G.duration(),G.call(function(){var de=G.time()>=J;de&&!we&&Qx(ie,!o),j&&Ud(je,j,de?"remove":"add")})},g&&(p=ie.filter(function(Qe){return!Qe.sd&&!Qe.a.isVisible&&Qe.b.isVisible}).map(function(Qe){return Qe.a.element})),tt){var ke;p&&(ke=tt._abs).push.apply(ke,$x(ie,p)),tt._run.push(Oe)}else p&&Lv($x(ie,p)),Oe();var Le=tt?tt.timeline:G;return Le.revert=function(){return em(Le,1,1)},Le},nw=function r(n){n.vars.onInterrupt&&n.vars.onInterrupt.apply(n,n.vars.onInterruptParams||[]),n.getChildren(!0,!1,!0).forEach(r)},em=function(n,l,a){if(n&&n.progress()<1&&(!n.paused()||a))return l&&(nw(n),l<2&&n.progress(1),n.kill()),!0},_c=function(n){for(var l=n.idLookup={},a=n.alt={},s=n.elementStates,f=s.length,o;f--;)o=s[f],l[o.id]?a[o.id]=o:l[o.id]=o},na=(function(){function r(l,a,s){if(this.props=a&&a.props,this.simple=!!(a&&a.simple),s)this.targets=Fv(l),this.elementStates=l,_c(this);else{this.targets=Cr(l);var f=a&&(a.kill===!1||a.batch&&!a.kill);tt&&!f&&tt._kill.push(this),this.update(f||!!tt)}}var n=r.prototype;return n.update=function(a){var s=this;return this.elementStates=this.targets.map(function(f){return new cl(f,s.props,s.simple)}),_c(this),this.interrupt(a),this.recordInlineStyles(),this},n.clear=function(){return this.targets.length=this.elementStates.length=0,_c(this),this},n.fit=function(a,s,f){for(var o=Kc(this.elementStates.slice(0),!1,!0),m=(a||this).idLookup,x=0,p,g;x<o.length;x++)p=o[x],f&&(p.matrix=xa(p.element,!1,!1,!0)),g=m[p.id],g&&gr(p,g,s,!0,0,p),p.matrix=xa(p.element,!1,!1,!0);return this},n.getProperty=function(a,s){var f=this.getElementState(a)||Wc;return(s in f?f:f.props||Wc)[s]},n.add=function(a){for(var s=a.targets.length,f=this.idLookup,o=this.alt,m,x,p;s--;)x=a.elementStates[s],p=f[x.id],p&&(x.element===p.element||o[x.id]&&o[x.id].element===x.element)?(m=this.elementStates.indexOf(x.element===p.element?p:o[x.id]),this.targets.splice(m,1,a.targets[s]),this.elementStates.splice(m,1,x)):(this.targets.push(a.targets[s]),this.elementStates.push(x));return a.interrupted&&(this.interrupted=!0),a.simple||(this.simple=!1),_c(this),this},n.compare=function(a){var s=a.idLookup,f=this.idLookup,o=[],m=[],x=[],p=[],g=[],v=a.alt,S=this.alt,y=function(B,E,L){return(B.isVisible!==E.isVisible?B.isVisible?x:p:B.isVisible?m:o).push(L)&&g.push(L)},R=function(B,E,L){return g.indexOf(L)<0&&y(B,E,L)},w,N,j,A,C,z,M,k;for(j in s)C=v[j],z=S[j],w=C?Iv(a,this,j):s[j],A=w.element,N=f[j],z?(k=N.isVisible||!z.isVisible&&A===N.element?N:z,M=C&&!w.isVisible&&!C.isVisible&&k.element===C.element?C:w,M.isVisible&&k.isVisible&&M.element!==k.element?((M.isDifferent(k)?m:o).push(M.element,k.element),g.push(M.element,k.element)):y(M,k,M.element),C&&M.element===C.element&&(C=s[j]),R(M.element!==N.element&&C?C:M,N,N.element),R(C&&C.element===z.element?C:M,z,z.element),C&&R(C,z.element===C.element?z:N,C.element)):(N?N.isDifferent(w)?y(w,N,A):o.push(A):x.push(A),C&&R(C,N,C.element));for(j in f)s[j]||(p.push(f[j].element),S[j]&&p.push(S[j].element));return{changed:m,unchanged:o,enter:x,leave:p}},n.recordInlineStyles=function(){for(var a=iu[this.props]||lu,s=this.elementStates.length;s--;)$o(this.elementStates[s],a)},n.interrupt=function(a){var s=this,f=[];this.targets.forEach(function(o){var m=o._flip,x=em(m,a?0:1);a&&x&&f.indexOf(m)<0&&m.add(function(){return s.updateVisibility()}),x&&f.push(m)}),!a&&f.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!f.length)},n.updateVisibility=function(){this.elementStates.forEach(function(a){var s=a.element.getBoundingClientRect();a.isVisible=!!(s.width||s.height||s.top||s.left),a.uncache=1})},n.getElementState=function(a){return this.elementStates[this.targets.indexOf(Ho(a))]},n.makeAbsolute=function(){return Kc(this.elementStates.slice(0),!0,!0).map(J0)},r})(),cl=(function(){function r(l,a,s){l instanceof r?Object.assign(this,l,a||{}):(this.element=l,this.update(a,s))}var n=r.prototype;return n.isDifferent=function(a){var s=this.bounds,f=a.bounds;return s.top!==f.top||s.left!==f.left||s.width!==f.width||s.height!==f.height||!this.matrix.equals(a.matrix)||this.opacity!==a.opacity||this.props&&a.props&&JSON.stringify(this.props)!==JSON.stringify(a.props)},n.clone=function(a){return new r(this,a)},n.update=function(a,s){var f=this,o=f.element,m=Ot.getProperty(o),x=Ot.core.getCache(o),p=o.getBoundingClientRect(),g=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),v=s?new sl(1,0,0,1,p.left+W0(),p.top+Z0()):xa(o,!1,!1,!0);x.uncache=1,f.getProp=m,f.element=o,f.id=tw(o),f.matrix=v,f.cache=x,f.bounds=p,f.isVisible=!!(p.width||p.height||p.left||p.top),f.display=m("display"),f.position=m("position"),f.parent=o.parentNode,f.x=m("x","px"),f.y=m("y","px"),f.scaleX=x.scaleX,f.scaleY=x.scaleY,f.rotation=m("rotation"),f.skewX=m("skewX"),f.opacity=m("opacity"),f.width=g?g.width:Ga(m("width","px"),.04),f.height=g?g.height:Ga(m("height","px"),.04),a&&ew(f,$0[a]||Bv(a)),f.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&Ev(o).inverse(),f.simple=s||fr(v.a)===1&&!fr(v.b)&&!fr(v.c)&&fr(v.d)===1,f.uncache=0},r})(),aw=(function(){function r(l,a){this.vars=l,this.batch=a,this.states=[],this.timeline=a.timeline}var n=r.prototype;return n.getStateById=function(a){for(var s=this.states.length;s--;)if(this.states[s].idLookup[a])return this.states[s]},n.kill=function(){this.batch.remove(this)},r})(),iw=(function(){function r(l){this.id=l,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new na,this.timeline=Ot.timeline()}var n=r.prototype;return n.add=function(a){var s=this.actions.filter(function(f){return f.vars===a});return s.length?s[0]:(s=new aw(typeof a=="function"?{animate:a}:a,this),this.actions.push(s),s)},n.remove=function(a){var s=this.actions.indexOf(a);return s>=0&&this.actions.splice(s,1),this},n.getState=function(a){var s=this,f=tt,o=Po;return tt=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(m){m.vars.getState&&(m.states.length=0,Po=m,m.state=m.vars.getState(m)),a&&m.states.forEach(function(x){return s.state.add(x)})}),Po=o,tt=f,this.killConflicts(),this},n.animate=function(){var a=this,s=tt,f=this.timeline,o=this.actions.length,m,x;for(tt=this,f.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(p){p.vars.animate&&p.vars.animate(p);var g=p.vars.onEnter,v=p.vars.onLeave,S=p.targets,y,R;S&&S.length&&(g||v)&&(y=new na,p.states.forEach(function(w){return y.add(w)}),R=y.compare(Ar.getState(S)),R.enter.length&&g&&g(R.enter),R.leave.length&&v&&v(R.leave))}),Lv(this._abs),this._run.forEach(function(p){return p()}),x=f.duration(),m=this._final.slice(0),f.add(function(){x<=f.time()&&(m.forEach(function(p){return p()}),Xx(a,"onComplete"))}),tt=s;o--;)this.actions[o].vars.once&&this.actions[o].kill();return Xx(this,"onStart"),f.restart(),this},n.loadState=function(a){a||(a=function(){return 0});var s=[];return this.actions.forEach(function(f){if(f.vars.loadState){var o,m=function x(p){p&&(f.targets=p),o=s.indexOf(x),~o&&(s.splice(o,1),s.length||a())};s.push(m),f.vars.loadState(m)}}),s.length||a(),this},n.setState=function(){return this.actions.forEach(function(a){return a.targets=a.vars.setState&&a.vars.setState(a)}),this},n.killConflicts=function(a){return this.state.interrupt(a),this._kill.forEach(function(s){return s.interrupt(a)}),this},n.run=function(a,s){var f=this;return this!==tt&&(a||this.getState(s),this.loadState(function(){f._killed||(f.setState(),f.animate())})),this},n.clear=function(a){this.state.clear(),a||(this.actions.length=0)},n.getStateById=function(a){for(var s=this.actions.length,f;s--;)if(f=this.actions[s].getStateById(a),f)return f;return this.state.idLookup[a]&&this.state},n.kill=function(){this._killed=1,this.clear(),delete w0[this.id]},r})(),Ar=(function(){function r(){}return r.getState=function(l,a){var s=Hd(l,a);return Po&&Po.states.push(s),a&&a.batch&&r.batch(a.batch).state.add(s),s},r.from=function(l,a){return a=a||{},"clearProps"in a||(a.clearProps=!0),Yd(l,Hd(a.targets||l.targets,{props:a.props||l.props,simple:a.simple,kill:!!a.kill}),a,-1)},r.to=function(l,a){return Yd(l,Hd(a.targets||l.targets,{props:a.props||l.props,simple:a.simple,kill:!!a.kill}),a,1)},r.fromTo=function(l,a,s){return Yd(l,a,s)},r.fit=function(l,a,s){var f=s?dr(s,kv):{},o=s||f,m=o.absolute,x=o.scale,p=o.getVars,g=o.props,v=o.runBackwards,S=o.onComplete,y=o.simple,R=s&&s.fitChild&&Ho(s.fitChild),w=_0(a,g,y,l),N=_0(l,0,y,w),j=g?iu[g]:lu,A=Ot.context();return g&&Ov(f,w.props),$o(N,j),v&&("immediateRender"in f||(f.immediateRender=!0),f.onComplete=function(){Qc(N),S&&S.apply(this,arguments)}),m&&J0(N,w),f=gr(N,w,x||R,!f.duration&&g,R,f.duration||p?f:0),typeof s=="object"&&"zIndex"in s&&(f.zIndex=s.zIndex),A&&!p&&A.add(function(){return function(){return Qc(N)}}),p?f:f.duration?Ot.to(N.element,f):null},r.makeAbsolute=function(l,a){return(l instanceof na?l:new na(l,a)).makeAbsolute()},r.batch=function(l){return l||(l="default"),w0[l]||(w0[l]=new iw(l))},r.killFlipsOf=function(l,a){(l instanceof na?l.targets:Cr(l)).forEach(function(s){return s&&em(s._flip,a!==!1?1:2)})},r.isFlipping=function(l){var a=r.getByTarget(l);return!!a&&a.isActive()},r.getByTarget=function(l){return(Ho(l)||Wc)._flip},r.getElementState=function(l,a){return new cl(Ho(l),a)},r.convertCoordinates=function(l,a,s){var f=xa(a,!0,!0).multiply(xa(l));return s?f.apply(s):f},r.register=function(l){if(wi=typeof document<"u"&&document.body,wi){Ot=l,X0(wi),Cr=Ot.utils.toArray,S0=Ot.core.getStyleSaver;var a=Ot.utils.snap(.1);Ga=function(f,o){return a(parseFloat(f)+o)}}},r})();Ar.version="3.14.2";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(Ar);Vn.registerPlugin(Ar);const Xd=["final","plain","columns","grid"],lw=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(null),s=_.useRef(!0),[,f]=T1.useState(0),o=Xd[l.current],m=_.useCallback(()=>{var y;const p=n.current;if(!p)return;const g=p.querySelectorAll(".letter, .for-text, .gsap-text");if(!g.length)return;const v=Ar.getState(g,{props:"color,backgroundColor",simple:!0});l.current=(l.current+1)%Xd.length;const S=Xd[l.current];H5.flushSync(()=>{f(R=>R+1)}),Ar.from(v,{absolute:!0,stagger:r.stagger,duration:r.duration,ease:"power2.inOut",spin:r.spinOnFinal&&S==="final",simple:!0,onEnter:(R,w)=>Vn.fromTo(R,{opacity:0},{opacity:1,delay:w.duration()-.1}),onLeave:R=>Vn.to(R,{opacity:0})}),(y=a.current)==null||y.kill(),r.autoPlay&&(a.current=Vn.delayedCall(S==="final"?3.5:r.interval,m))},[r.stagger,r.duration,r.spinOnFinal,r.autoPlay,r.interval]);_.useEffect(()=>{var p;if((p=a.current)==null||p.kill(),r.autoPlay){const g=s.current?1:o==="final"?3.5:r.interval;s.current=!1,a.current=Vn.delayedCall(g,m)}return()=>{var g;(g=a.current)==null||g.kill()}},[r.autoPlay,m]);const x=o==="grid"||o==="columns";return u.jsxs("div",{ref:n,className:`relative w-full h-full flex overflow-hidden justify-center ${x?"flex-wrap content-stretch items-stretch":"items-center"}`,style:{backgroundColor:r.bgColor,containerType:"size"},children:[u.jsx("div",{className:"letter text-center flex items-center justify-center",style:{backgroundColor:o==="plain"?"transparent":r.colorF,color:o==="plain"?r.textColor:"#000",fontSize:`${r.fontSize}cqmax`,fontWeight:400,padding:o==="plain"?0:"2px 6px",flexBasis:o==="grid"?"50%":o==="columns"?"25%":"auto"},children:"F"}),u.jsx("div",{className:"letter text-center flex items-center justify-center",style:{backgroundColor:o==="plain"?"transparent":r.colorL,color:o==="plain"?r.textColor:"#000",fontSize:`${r.fontSize}cqmax`,fontWeight:400,padding:o==="plain"?0:"2px 6px",flexBasis:o==="grid"?"50%":o==="columns"?"25%":"auto"},children:"L"}),u.jsx("div",{className:"letter text-center flex items-center justify-center",style:{backgroundColor:o==="plain"?"transparent":r.colorI,color:o==="plain"?r.textColor:"#000",fontSize:`${r.fontSize}cqmax`,fontWeight:400,padding:o==="plain"?0:"2px 6px",flexBasis:o==="grid"?"50%":o==="columns"?"25%":"auto"},children:"I"}),u.jsx("div",{className:"letter text-center flex items-center justify-center",style:{backgroundColor:o==="plain"?"transparent":r.colorP,color:o==="plain"?r.textColor:"#000",fontSize:`${r.fontSize}cqmax`,fontWeight:400,padding:o==="plain"?0:"2px 6px",flexBasis:o==="grid"?"50%":o==="columns"?"25%":"auto"},children:"P"}),u.jsx("div",{className:"for-text",style:{fontSize:`${r.fontSize/2}cqmax`,color:r.textColor,padding:`2px ${r.fontSize*.16}cqmax`,fontWeight:300,display:o==="final"?"block":"none"},children:"for"}),u.jsx("div",{className:"gsap-text",style:{fontSize:`${r.fontSize/2}cqmax`,color:r.textColor,padding:"2px 0",fontWeight:600,display:o==="final"?"block":"none"},children:"GSAP"}),!r.autoPlay&&u.jsx("button",{onClick:m,className:"absolute bottom-5 right-5 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-colors",children:"Next Layout"})]})},rw={stagger:.07,duration:.7,autoPlay:!0,interval:1.5,spinOnFinal:!0,colorF:"#88ce02",colorL:"#f178b6",colorI:"#7dc8eb",colorP:"#0ae448",textColor:"#ffffff",bgColor:"#1a1a1a",fontSize:10},n1=[{id:"original",label:"Original",colors:{colorF:"#88ce02",colorL:"#f178b6",colorI:"#7dc8eb",colorP:"#0ae448"}},{id:"sunset",label:"Sunset",colors:{colorF:"#ff6b6b",colorL:"#feca57",colorI:"#ff9ff3",colorP:"#ee5a6f"}},{id:"ocean",label:"Ocean",colors:{colorF:"#00d2ff",colorL:"#3a7bd5",colorI:"#2196f3",colorP:"#00bcd4"}},{id:"forest",label:"Forest",colors:{colorF:"#56ab2f",colorL:"#a8e063",colorI:"#38ef7d",colorP:"#11998e"}}],Cc=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:n.toFixed(s>=1?0:2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),ar=({label:r,value:n,onChange:l})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("div",{className:"w-4 h-4 rounded border border-neutral-200",style:{backgroundColor:n}})]}),u.jsx("input",{type:"color",value:n,onChange:a=>l(a.target.value),className:"w-full h-7 bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer"})]}),a1=({label:r,value:n,onChange:l})=>u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("button",{onClick:()=>l(!n),className:`relative w-7 h-4 rounded-full transition-colors ${n?"bg-neutral-800":"bg-neutral-300"}`,children:u.jsx("span",{className:`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${n?"translate-x-3":"translate-x-0"}`})})]}),ow=({params:r,onChange:n})=>{const l=s=>{n({...r,...s.colors})},a=n1.find(s=>s.colors.colorF===r.colorF&&s.colors.colorL===r.colorL&&s.colors.colorI===r.colorI&&s.colors.colorP===r.colorP);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Presets"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:n1.map(s=>u.jsx("button",{onClick:()=>l(s),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(a==null?void 0:a.id)===s.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${s.colors.colorF}, ${s.colors.colorL}, ${s.colors.colorI}, ${s.colors.colorP})`},title:s.label},s.id))}),a&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:a.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Letter Colors"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(ar,{label:"F Color",value:r.colorF,onChange:s=>n({...r,colorF:s})}),u.jsx(ar,{label:"L Color",value:r.colorL,onChange:s=>n({...r,colorL:s})}),u.jsx(ar,{label:"I Color",value:r.colorI,onChange:s=>n({...r,colorI:s})}),u.jsx(ar,{label:"P Color",value:r.colorP,onChange:s=>n({...r,colorP:s})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Background & Text"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(ar,{label:"Background",value:r.bgColor,onChange:s=>n({...r,bgColor:s})}),u.jsx(ar,{label:"Text Color",value:r.textColor,onChange:s=>n({...r,textColor:s})}),u.jsx(Cc,{label:"Font Size",value:r.fontSize,min:5,max:20,step:.5,onChange:s=>n({...r,fontSize:s})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Cc,{label:"Duration",value:r.duration,min:.3,max:2,step:.1,onChange:s=>n({...r,duration:s})}),u.jsx(Cc,{label:"Stagger",value:r.stagger,min:0,max:.3,step:.01,onChange:s=>n({...r,stagger:s})}),u.jsx(Cc,{label:"Interval",value:r.interval,min:.5,max:5,step:.1,onChange:s=>n({...r,interval:s})}),u.jsx(a1,{label:"Auto Play",value:r.autoPlay,onChange:s=>n({...r,autoPlay:s})}),u.jsx(a1,{label:"Spin on Final",value:r.spinOnFinal,onChange:s=>n({...r,spinOnFinal:s})})]})]})]})};function sw(r){return`
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
      background: ${r.bgColor};
      color: ${r.textColor};
      font-family: 'Bevan', sans-serif;
      font-size: 18vw;
    }
    *, *:before, *:after {
      animation-timing-function: cubic-bezier(.5, 0, .5, 1);
    }
    :root {
      --duration: ${r.duration}s;
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
  <div data-splitting>${r.text}</div>
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
</html>`}const cw=({params:r})=>{const n=_.useRef(null),[l,a]=_.useState(0);return _.useEffect(()=>{n.current&&(n.current.srcdoc=sw(r))},[r,l]),u.jsx("div",{className:"w-full h-full relative",children:u.jsx("iframe",{ref:n,className:"w-full h-full border-0",title:"Framers Logo Animation"},l)})},uw=({label:r,value:n,min:l,max:a,step:s,unit:f="",onChange:o})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsxs("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:[n.toFixed(s>=1?0:s>=.1?1:2),f]})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:m=>o(parseFloat(m.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),i1=({label:r,value:n,onChange:l})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("div",{className:"w-4 h-4 rounded border border-neutral-200",style:{backgroundColor:n}})]}),u.jsx("input",{type:"color",value:n,onChange:a=>l(a.target.value),className:"w-full h-7 bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer"})]}),fw=({params:r,onChange:n})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Text"}),u.jsx("input",{type:"text",value:r.text,onChange:l=>n({...r,text:l.target.value}),maxLength:20,className:"w-full px-2 py-1.5 text-xs bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400",placeholder:"Enter text"})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(uw,{label:"Duration",value:r.duration,min:.1,max:2,step:.1,unit:"s",onChange:l=>n({...r,duration:l})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Colors"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(i1,{label:"Background",value:r.bgColor,onChange:l=>n({...r,bgColor:l})}),u.jsx(i1,{label:"Text",value:r.textColor,onChange:l=>n({...r,textColor:l})})]})]})]}),dw={duration:.5,bgColor:"#26A959",textColor:"#FFFFFF",text:"framers"},$n=[{p:0,color:{r:15,g:25,b:60}},{p:.25,color:{r:40,g:70,b:140}},{p:.45,color:{r:90,g:160,b:200}},{p:.6,color:{r:255,g:220,b:150}},{p:.75,color:{r:255,g:140,b:60}},{p:.9,color:{r:220,g:70,b:40}},{p:1,color:{r:120,g:30,b:60}}];function Zd(r,n,l){return r+(n-r)*l}function mw(r,n,l){return{r:Zd(r.r,n.r,l),g:Zd(r.g,n.g,l),b:Zd(r.b,n.b,l)}}function hw(r,n){if(r<0)return $n[0].color;r=Math.min(1,Math.max(0,Math.pow(r,n)));for(let l=0;l<$n.length-1;l++)if(r>=$n[l].p&&r<=$n[l+1].p){const a=(r-$n[l].p)/($n[l+1].p-$n[l].p);return mw($n[l].color,$n[l+1].color,a)}return $n[$n.length-1].color}function Ac(r,n){const l=Math.random(),a=Math.random(),s=Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*a);return r+s*n}function Wd(r,n,l){return Math.min(l,Math.max(n,r))}function pw(r,n){return{r:Wd(r.r+(Math.random()*2-1)*n,0,255),g:Wd(r.g+(Math.random()*2-1)*n,0,255),b:Wd(r.b+(Math.random()*2-1)*n,0,255)}}const gw=({params:r})=>{const n=_.useRef(null),l=_.useRef(null),a=_.useCallback(()=>{const s=n.current,f=l.current;if(!s||!f)return;const o=f.getBoundingClientRect(),m=window.devicePixelRatio||1,x=o.width,p=o.height;s.width=x*m,s.height=p*m,s.style.width=`${x}px`,s.style.height=`${p}px`;const g=s.getContext("2d");if(!g)return;g.scale(m,m),g.fillStyle="white",g.fillRect(0,0,x,p);const v=x*r.spread,S=p*r.spread;for(let y=0;y<r.count;y++){const R=Ac(x/2,v),w=Ac(p/2,S),N=Ac(r.size,r.sizeVariance),j=Ac(r.size,r.sizeVariance),A=hw(w/p,r.gammaBias),C=pw(A,r.perturbation);g.fillStyle=`rgba(${C.r|0},${C.g|0},${C.b|0},${r.opacity})`,g.fillRect(R,w,N,j)}},[r]);return _.useEffect(()=>{a()},[a]),_.useEffect(()=>{const s=l.current;if(!s)return;const f=new ResizeObserver(()=>a());return f.observe(s),()=>f.disconnect()},[a]),u.jsx("div",{ref:l,className:"w-full h-full",children:u.jsx("canvas",{ref:n,className:"w-full h-full"})})},Ji=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:s>=1?n:n.toFixed(s>=.1?1:2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),xw=({params:r,onChange:n})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Distribution"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ji,{label:"Count",value:r.count,min:500,max:15e3,step:500,onChange:l=>n({...r,count:l})}),u.jsx(Ji,{label:"Spread",value:r.spread,min:.1,max:1,step:.05,onChange:l=>n({...r,spread:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Shape"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ji,{label:"Size",value:r.size,min:10,max:120,step:5,onChange:l=>n({...r,size:l})}),u.jsx(Ji,{label:"Size Variance",value:r.sizeVariance,min:0,max:60,step:5,onChange:l=>n({...r,sizeVariance:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ji,{label:"Opacity",value:r.opacity,min:.05,max:1,step:.05,onChange:l=>n({...r,opacity:l})}),u.jsx(Ji,{label:"Perturbation",value:r.perturbation,min:0,max:80,step:5,onChange:l=>n({...r,perturbation:l})}),u.jsx(Ji,{label:"Gamma Bias",value:r.gammaBias,min:.5,max:3,step:.1,onChange:l=>n({...r,gammaBias:l})})]})]})]}),vw={count:7500,size:50,sizeVariance:20,spread:.5,opacity:.3,perturbation:30,gammaBias:1.6};function Kd(r,n,l){return r+(n-r)*l}function bw(r){const n=parseInt(r.slice(1,3),16),l=parseInt(r.slice(3,5),16),a=parseInt(r.slice(5,7),16);return[n,l,a]}const yw=({params:r})=>{const n=_.useRef(null),l=_.useRef(r);return l.current=r,_.useEffect(()=>{const a=n.current;if(!a)return;const s=a.getContext("2d");let f,o=0,m=0,x=0,p=[],g="idle",v=0;function S(){const D=a.getBoundingClientRect(),B=window.devicePixelRatio||1;a.width=D.width*B,a.height=D.height*B,s.setTransform(B,0,0,B,0,0),m=D.width/2,x=D.height/2}function y(D){var E;const B=l.current;switch(g=D,v=0,D){case"idle":{p=[{x:m,y:x,radius:0,targetX:m,targetY:x,targetRadius:0}];break}case"grow":{p.length===0&&(p=[{x:m,y:x,radius:0,targetX:m,targetY:x,targetRadius:0}]),p[0].targetRadius=B.particleSize,p[0].targetX=m,p[0].targetY=x;break}case"split":{const L=B.splitCount,G=p[0],W=[];for(let K=0;K<L;K++){const q=K*2*Math.PI/L;W.push({x:G.x,y:G.y,radius:G.radius,targetX:m+Math.cos(q)*B.scatterRadius,targetY:x+Math.sin(q)*B.scatterRadius,targetRadius:B.particleSize*.45})}p=W;break}case"scatter":break;case"gather":{for(const L of p)L.targetX=m,L.targetY=x,L.targetRadius=B.particleSize*.45;break}case"shrink":{p=[{x:m,y:x,radius:((E=p[0])==null?void 0:E.radius)||B.particleSize*.45,targetX:m,targetY:x,targetRadius:B.particleSize}];break}}}function R(D){const B=l.current.speed;return{idle:.3,grow:1.2,split:1.5,scatter:.8,gather:1.5,shrink:1}[D]/B}const w=["idle","grow","split","scatter","gather","shrink"];function N(){const D=w.indexOf(g);y(w[(D+1)%w.length])}function j(D){const B=l.current,[E,L,G]=bw(B.color),W=D.radius*B.glowIntensity*2;if(W>0){const K=s.createRadialGradient(D.x,D.y,0,D.x,D.y,W);K.addColorStop(0,`rgba(${E},${L},${G},0.35)`),K.addColorStop(.5,`rgba(${E},${L},${G},0.1)`),K.addColorStop(1,`rgba(${E},${L},${G},0)`),s.beginPath(),s.arc(D.x,D.y,W,0,Math.PI*2),s.fillStyle=K,s.fill()}if(D.radius>0){const K=s.createRadialGradient(D.x,D.y,0,D.x,D.y,D.radius);K.addColorStop(0,"rgba(255,255,255,0.95)"),K.addColorStop(.4,`rgba(${E},${L},${G},0.8)`),K.addColorStop(1,`rgba(${E},${L},${G},0)`),s.beginPath(),s.arc(D.x,D.y,D.radius,0,Math.PI*2),s.fillStyle=K,s.fill()}}function A(D){const B=l.current,E=1-Math.pow(.001,D*B.speed);v+=D;for(const L of p)L.x=Kd(L.x,L.targetX,E),L.y=Kd(L.y,L.targetY,E),L.radius=Kd(L.radius,L.targetRadius,E);v>=R(g)&&(g==="shrink"?(p[0].targetRadius=0,p[0].radius<.5&&N()):N())}function C(){const D=l.current,B=a.getBoundingClientRect();s.fillStyle=`rgba(0,0,0,${D.trailAlpha})`,s.fillRect(0,0,B.width,B.height),s.globalCompositeOperation="lighter";for(const E of p)j(E);s.globalCompositeOperation="source-over"}function z(D){const B=o===0?.016:Math.min((D-o)/1e3,.05);o=D,A(B),C(),f=requestAnimationFrame(z)}S();const M=a.getBoundingClientRect();s.fillStyle="#000",s.fillRect(0,0,M.width,M.height),y("idle");const k=new ResizeObserver(()=>S());return k.observe(a),f=requestAnimationFrame(z),()=>{cancelAnimationFrame(f),k.disconnect()}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block",style:{background:"#000"}})},ir=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:s>=1?n:n.toFixed(s>=.1?1:2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Sw=({params:r,onChange:n})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(ir,{label:"Speed",value:r.speed,min:.3,max:3,step:.1,onChange:l=>n({...r,speed:l})}),u.jsx(ir,{label:"Split Count",value:r.splitCount,min:2,max:8,step:1,onChange:l=>n({...r,splitCount:l})}),u.jsx(ir,{label:"Scatter Radius",value:r.scatterRadius,min:50,max:300,step:10,onChange:l=>n({...r,scatterRadius:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Particle"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(ir,{label:"Size",value:r.particleSize,min:15,max:80,step:5,onChange:l=>n({...r,particleSize:l})}),u.jsx(ir,{label:"Trail Alpha",value:r.trailAlpha,min:.02,max:.5,step:.01,onChange:l=>n({...r,trailAlpha:l})}),u.jsx(ir,{label:"Glow Intensity",value:r.glowIntensity,min:.5,max:3,step:.1,onChange:l=>n({...r,glowIntensity:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsx("input",{type:"color",value:r.color,onChange:l=>n({...r,color:l.target.value}),className:"w-full h-6 rounded cursor-pointer border-0"})]})]}),ww={splitCount:5,speed:1,particleSize:40,scatterRadius:150,color:"#4fc3f7",trailAlpha:.15,glowIntensity:1.5};function Qd(r,n,l){return r+(n-r)*l}let Co=0;const _w=({params:r})=>{const n=_.useRef(null),l=_.useRef({particles:[],phase:"idle",phaseTimer:0,centerX:0,centerY:0}),a=_.useRef(r);a.current=r;const[s,f]=_.useState([]),o=_.useCallback(()=>{const m=l.current;return{id:Co++,x:m.centerX,y:m.centerY,radius:0,targetX:m.centerX,targetY:m.centerY,targetRadius:0}},[]);return _.useEffect(()=>{const m=n.current;if(!m)return;let x,p=0;function g(){const A=m.getBoundingClientRect();l.current.centerX=A.width/2,l.current.centerY=A.height/2}function v(A){var M;const C=l.current,z=a.current;switch(C.phase=A,C.phaseTimer=0,A){case"idle":{C.particles=[{id:Co++,x:C.centerX,y:C.centerY,radius:0,targetX:C.centerX,targetY:C.centerY,targetRadius:0}];break}case"grow":{C.particles.length===0&&(C.particles=[{id:Co++,x:C.centerX,y:C.centerY,radius:0,targetX:C.centerX,targetY:C.centerY,targetRadius:0}]);const k=C.particles[0];k.targetRadius=z.particleSize,k.targetX=C.centerX,k.targetY=C.centerY;break}case"split":{const k=z.splitCount,D=C.particles[0],B=[];for(let E=0;E<k;E++){const L=E*2*Math.PI/k,G=z.scatterRadius;B.push({id:Co++,x:D.x,y:D.y,radius:D.radius,targetX:C.centerX+Math.cos(L)*G,targetY:C.centerY+Math.sin(L)*G,targetRadius:z.particleSize*.5})}C.particles=B;break}case"scatter":break;case"gather":{for(const k of C.particles)k.targetX=C.centerX,k.targetY=C.centerY,k.targetRadius=z.particleSize*.5;break}case"shrink":{C.particles=[{id:Co++,x:C.centerX,y:C.centerY,radius:((M=C.particles[0])==null?void 0:M.radius)||z.particleSize*.5,targetX:C.centerX,targetY:C.centerY,targetRadius:z.particleSize}];break}}}function S(A){const C=a.current.speed;return{idle:.3,grow:1.2,split:1.5,scatter:.8,gather:1.5,shrink:1}[A]/C}const y=["idle","grow","split","scatter","gather","shrink"];function R(){const A=l.current,C=y.indexOf(A.phase),z=y[(C+1)%y.length];v(z)}function w(A){const C=l.current,z=a.current,M=1-Math.pow(.001,A*z.speed);C.phaseTimer+=A;for(const k of C.particles)k.x=Qd(k.x,k.targetX,M),k.y=Qd(k.y,k.targetY,M),k.radius=Qd(k.radius,k.targetRadius,M);C.phaseTimer>=S(C.phase)&&(C.phase==="shrink"?(C.particles[0].targetRadius=0,C.particles[0].radius<.5&&R()):R()),f([...C.particles])}function N(A){const C=p===0?.016:Math.min((A-p)/1e3,.05);p=A,w(C),x=requestAnimationFrame(N)}g(),v("idle");const j=new ResizeObserver(()=>g());return j.observe(m),x=requestAnimationFrame(N),()=>{cancelAnimationFrame(x),j.disconnect()}},[o]),u.jsx("div",{ref:n,className:"w-full h-full relative overflow-hidden",children:u.jsx("div",{className:"absolute inset-0",style:{filter:`blur(${r.blur}px) contrast(${r.contrast})`,background:"#000"},children:s.map(m=>{const x=m.radius*2;return u.jsx("div",{style:{position:"absolute",left:m.x,top:m.y,width:x,height:x,borderRadius:"50%",background:r.color,transform:"translate(-50%, -50%)",willChange:"left, top, width, height"}},m.id)})})})},lr=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:s>=1?n:n.toFixed(s>=.1?1:2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Cw=({params:r,onChange:n})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(lr,{label:"Speed",value:r.speed,min:.3,max:3,step:.1,onChange:l=>n({...r,speed:l})}),u.jsx(lr,{label:"Split Count",value:r.splitCount,min:2,max:8,step:1,onChange:l=>n({...r,splitCount:l})}),u.jsx(lr,{label:"Scatter Radius",value:r.scatterRadius,min:50,max:300,step:10,onChange:l=>n({...r,scatterRadius:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Particle"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(lr,{label:"Size",value:r.particleSize,min:15,max:80,step:5,onChange:l=>n({...r,particleSize:l})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Gooey Filter"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(lr,{label:"Blur",value:r.blur,min:4,max:30,step:1,onChange:l=>n({...r,blur:l})}),u.jsx(lr,{label:"Contrast",value:r.contrast,min:5,max:40,step:1,onChange:l=>n({...r,contrast:l})}),u.jsxs("div",{children:[u.jsx("div",{className:"flex items-center justify-between mb-1",children:u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Color"})}),u.jsx("input",{type:"color",value:r.color,onChange:l=>n({...r,color:l.target.value}),className:"w-full h-6 rounded cursor-pointer border-0"})]})]})]})]}),Aw={splitCount:5,speed:1,particleSize:40,scatterRadius:150,color:"#ffffff",blur:12,contrast:20},Rw=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Nw=`
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
`;function Rc(r){const n=parseInt(r.replace("#",""),16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}const Tw=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o)return;o.getExtension("OES_standard_derivatives");const m=(le,oe)=>{const me=o.createShader(oe);return o.shaderSource(me,le),o.compileShader(me),o.getShaderParameter(me,o.COMPILE_STATUS)?me:(console.error("Shader compile error:",o.getShaderInfoLog(me)),o.deleteShader(me),null)},x=m(Rw,o.VERTEX_SHADER),p=m(Nw,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),!o.getProgramParameter(g,o.LINK_STATUS)){console.error("Program link error:",o.getProgramInfoLog(g));return}o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"uTime"),w=o.getUniformLocation(g,"uResolution"),N=o.getUniformLocation(g,"uBpm"),j=o.getUniformLocation(g,"uGlobalSpeed"),A=o.getUniformLocation(g,"uEaseId"),C=o.getUniformLocation(g,"uMorphBloat"),z=o.getUniformLocation(g,"uLiquidMix"),M=o.getUniformLocation(g,"uLiquidK"),k=o.getUniformLocation(g,"uLiquidMidBoost"),D=o.getUniformLocation(g,"uSizeMain"),B=o.getUniformLocation(g,"uStarInnerRatio"),E=o.getUniformLocation(g,"uStarPoints"),L=Array.from({length:5},(le,oe)=>o.getUniformLocation(g,`uSeq[${oe}]`)),G=o.getUniformLocation(g,"uRotBase"),W=o.getUniformLocation(g,"uRotMorph"),K=o.getUniformLocation(g,"uScaleBreath"),q=o.getUniformLocation(g,"uScaleMorph"),ie=o.getUniformLocation(g,"uStrokeWidth"),U=o.getUniformLocation(g,"uGlowStrength"),Q=o.getUniformLocation(g,"uFillStrength"),se=o.getUniformLocation(g,"uBgColorA"),ue=o.getUniformLocation(g,"uBgColorB"),pe=o.getUniformLocation(g,"uInkColorA"),O=o.getUniformLocation(g,"uInkColorB"),P=o.getUniformLocation(g,"uVignette"),J=o.getUniformLocation(g,"uGrain");let te=!0;const ae=()=>{if(!te)return;const le=window.devicePixelRatio||1,oe=f.clientWidth*le,me=f.clientHeight*le;(f.width!==oe||f.height!==me)&&(f.width=oe,f.height=me,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const re=(Date.now()-a.current)/1e3,fe=s.current;o.uniform1f(R,re),o.uniform2f(w,f.width,f.height),o.uniform1f(N,fe.bpm),o.uniform1f(j,fe.globalSpeed),o.uniform1i(A,fe.easeId),o.uniform1f(C,fe.morphBloat),o.uniform1f(z,fe.liquidMix),o.uniform1f(M,fe.liquidK),o.uniform1f(k,fe.liquidMidBoost),o.uniform1f(D,fe.shapeSize),o.uniform1f(B,fe.starInnerRatio),o.uniform1i(E,fe.starPoints);for(let ke=0;ke<5;ke++)o.uniform1i(L[ke],fe.sequence[ke]);o.uniform1f(G,fe.rotBase),o.uniform1f(W,fe.rotMorph),o.uniform1f(K,fe.scaleBreath),o.uniform1f(q,fe.scaleMorph),o.uniform1f(ie,fe.strokeWidth),o.uniform1f(U,fe.glowStrength),o.uniform1f(Q,fe.fillStrength);const Ae=Rc(fe.bgColorA),Oe=Rc(fe.bgColorB),Se=Rc(fe.inkColorA),ce=Rc(fe.inkColorB);o.uniform3f(se,Ae[0],Ae[1],Ae[2]),o.uniform3f(ue,Oe[0],Oe[1],Oe[2]),o.uniform3f(pe,Se[0],Se[1],Se[2]),o.uniform3f(O,ce[0],ce[1],ce[2]),o.uniform1f(P,fe.vignette),o.uniform1f(J,fe.grain),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(ae)};return ae(),()=>{te=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block"})},jw=["Circle","Box","Triangle","Star","Hexagon","Ring"],Mw=["Linear","Smooth","Cubic InOut","Back Out","Elastic Out","Expo InOut"],Ut=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:s>=1?n:n.toFixed(s>=.1?1:2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Dw=({params:r,onChange:n})=>{const l=(s,f)=>{n({...r,[s]:f})},a=(s,f)=>{const o=[...r.sequence];o[s]=f,l("sequence",o)};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Timeline"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ut,{label:"BPM",value:r.bpm,min:60,max:180,step:1,onChange:s=>l("bpm",s)}),u.jsx(Ut,{label:"Speed",value:r.globalSpeed,min:0,max:3,step:.01,onChange:s=>l("globalSpeed",s)}),u.jsxs("div",{children:[u.jsx("div",{className:"flex items-center justify-between mb-1",children:u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Easing"})}),u.jsx("select",{value:r.easeId,onChange:s=>l("easeId",parseInt(s.target.value)),className:"w-full text-[10px] px-2 py-1 rounded-lg bg-neutral-100 text-neutral-700 border-0 outline-none cursor-pointer",children:Mw.map((s,f)=>u.jsx("option",{value:f,children:s},f))})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Shape Sequence"}),u.jsx("div",{className:"grid grid-cols-5 gap-1 mb-2",children:r.sequence.map((s,f)=>u.jsxs("div",{className:"flex flex-col items-center gap-1",children:[u.jsx("span",{className:"text-[8px] text-neutral-400",children:f+1}),u.jsx("select",{value:s,onChange:o=>a(f,parseInt(o.target.value)),className:"w-full text-[9px] px-1 py-0.5 rounded bg-neutral-100 text-neutral-700 border-0 outline-none cursor-pointer text-center",children:jw.map((o,m)=>u.jsx("option",{value:m,children:o},m))})]},f))})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Morph Physics"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ut,{label:"Liquid Mix",value:r.liquidMix,min:0,max:1,step:.01,onChange:s=>l("liquidMix",s)}),u.jsx(Ut,{label:"Viscosity",value:r.liquidK,min:.01,max:.5,step:.01,onChange:s=>l("liquidK",s)}),u.jsx(Ut,{label:"Bloat",value:r.morphBloat,min:-.5,max:.5,step:.01,onChange:s=>l("morphBloat",s)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Motion"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ut,{label:"Base Rotation",value:r.rotBase,min:0,max:1,step:.01,onChange:s=>l("rotBase",s)}),u.jsx(Ut,{label:"Morph Rotation",value:r.rotMorph,min:0,max:2,step:.01,onChange:s=>l("rotMorph",s)}),u.jsx(Ut,{label:"Breath Scale",value:r.scaleBreath,min:0,max:.2,step:.01,onChange:s=>l("scaleBreath",s)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Style"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ut,{label:"Stroke Width",value:r.strokeWidth,min:.001,max:.1,step:.001,onChange:s=>l("strokeWidth",s)}),u.jsx(Ut,{label:"Glow",value:r.glowStrength,min:0,max:1,step:.01,onChange:s=>l("glowStrength",s)}),u.jsx(Ut,{label:"Fill",value:r.fillStrength,min:0,max:1,step:.01,onChange:s=>l("fillStrength",s)}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-1",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Ink A"}),u.jsx("input",{type:"color",value:r.inkColorA,onChange:s=>l("inkColorA",s.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Ink B"}),u.jsx("input",{type:"color",value:r.inkColorB,onChange:s=>l("inkColorB",s.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Bg A"}),u.jsx("input",{type:"color",value:r.bgColorA,onChange:s=>l("bgColorA",s.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Bg B"}),u.jsx("input",{type:"color",value:r.bgColorB,onChange:s=>l("bgColorB",s.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Shape Geometry"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ut,{label:"Size",value:r.shapeSize,min:.1,max:.8,step:.01,onChange:s=>l("shapeSize",s)}),u.jsx(Ut,{label:"Star Inner Ratio",value:r.starInnerRatio,min:.1,max:.9,step:.01,onChange:s=>l("starInnerRatio",s)}),u.jsx(Ut,{label:"Star Points",value:r.starPoints,min:3,max:10,step:1,onChange:s=>l("starPoints",s)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Post Processing"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ut,{label:"Vignette",value:r.vignette,min:0,max:1,step:.01,onChange:s=>l("vignette",s)}),u.jsx(Ut,{label:"Grain",value:r.grain,min:0,max:.2,step:.01,onChange:s=>l("grain",s)})]})]})]})},Ew={bpm:112,globalSpeed:1,easeId:2,morphBloat:.08,liquidMix:.7,liquidK:.18,liquidMidBoost:1,shapeSize:.36,starPoints:5,starInnerRatio:.45,sequence:[0,1,2,3,0],rotBase:.15,rotMorph:.55,scaleBreath:.06,scaleMorph:.08,strokeWidth:.018,glowStrength:.35,fillStrength:.7,bgColorA:"#05060a",bgColorB:"#080f1a",inkColorA:"#1e59f2",inkColorB:"#e640bf",vignette:.35,grain:.03},kw=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,zw=`
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
`;function Nc(r){const n=parseInt(r.replace("#",""),16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}const Bw=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const f=n.current;if(!f)return;const o=f.getContext("webgl");if(!o)return;o.getExtension("OES_standard_derivatives");const m=(ie,U)=>{const Q=o.createShader(U);return o.shaderSource(Q,ie),o.compileShader(Q),o.getShaderParameter(Q,o.COMPILE_STATUS)?Q:(console.error("Shader compile error:",o.getShaderInfoLog(Q)),o.deleteShader(Q),null)},x=m(kw,o.VERTEX_SHADER),p=m(zw,o.FRAGMENT_SHADER);if(!x||!p)return;const g=o.createProgram();if(o.attachShader(g,x),o.attachShader(g,p),o.linkProgram(g),!o.getProgramParameter(g,o.LINK_STATUS)){console.error("Program link error:",o.getProgramInfoLog(g));return}o.useProgram(g);const v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const y=o.getAttribLocation(g,"position");o.enableVertexAttribArray(y),o.vertexAttribPointer(y,2,o.FLOAT,!1,0,0);const R=o.getUniformLocation(g,"uTime"),w=o.getUniformLocation(g,"uResolution"),N=o.getUniformLocation(g,"uLetterDuration"),j=o.getUniformLocation(g,"uStrokeW"),A=o.getUniformLocation(g,"uLiquidMix"),C=o.getUniformLocation(g,"uLiquidK"),z=o.getUniformLocation(g,"uBloat"),M=o.getUniformLocation(g,"uGlowSharp"),k=o.getUniformLocation(g,"uEdgeSharp"),D=o.getUniformLocation(g,"uInkColorA"),B=o.getUniformLocation(g,"uInkColorB"),E=o.getUniformLocation(g,"uBgColorA"),L=o.getUniformLocation(g,"uBgColorB"),G=o.getUniformLocation(g,"uVignette"),W=o.getUniformLocation(g,"uGrain");let K=!0;const q=()=>{if(!K)return;const ie=window.devicePixelRatio||1,U=f.clientWidth*ie,Q=f.clientHeight*ie;(f.width!==U||f.height!==Q)&&(f.width=U,f.height=Q,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight));const se=(Date.now()-a.current)/1e3,ue=s.current;o.uniform1f(R,se),o.uniform2f(w,f.width,f.height),o.uniform1f(N,ue.letterDuration),o.uniform1f(j,ue.strokeWidth),o.uniform1f(A,ue.liquidMix),o.uniform1f(C,ue.liquidK),o.uniform1f(z,ue.bloat),o.uniform1f(M,ue.glowSharp),o.uniform1f(k,ue.edgeSharp);const pe=Nc(ue.inkColorA),O=Nc(ue.inkColorB),P=Nc(ue.bgColorA),J=Nc(ue.bgColorB);o.uniform3f(D,pe[0],pe[1],pe[2]),o.uniform3f(B,O[0],O[1],O[2]),o.uniform3f(E,P[0],P[1],P[2]),o.uniform3f(L,J[0],J[1],J[2]),o.uniform1f(G,ue.vignette),o.uniform1f(W,ue.grain),o.drawArrays(o.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(q)};return q(),()=>{K=!1,cancelAnimationFrame(l.current),o.deleteProgram(g)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block"})},La=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:s>=1?n:n.toFixed(s>=.1?1:s>=.01?2:3)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Lw=({params:r,onChange:n})=>{const l=(a,s)=>{n({...r,[a]:s})};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Timeline"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(La,{label:"Letter Duration",value:r.letterDuration,min:.3,max:4,step:.1,onChange:a=>l("letterDuration",a)})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Glyph"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(La,{label:"Stroke Width",value:r.strokeWidth,min:.01,max:.15,step:.005,onChange:a=>l("strokeWidth",a)})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Morph Physics"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(La,{label:"Liquid Mix",value:r.liquidMix,min:0,max:1,step:.01,onChange:a=>l("liquidMix",a)}),u.jsx(La,{label:"Viscosity",value:r.liquidK,min:.01,max:.5,step:.01,onChange:a=>l("liquidK",a)}),u.jsx(La,{label:"Bloat",value:r.bloat,min:-.3,max:.3,step:.01,onChange:a=>l("bloat",a)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Style"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(La,{label:"Glow",value:r.glowSharp,min:2,max:30,step:.5,onChange:a=>l("glowSharp",a)}),u.jsx(La,{label:"Edge",value:r.edgeSharp,min:10,max:80,step:1,onChange:a=>l("edgeSharp",a)}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-1",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Ink A"}),u.jsx("input",{type:"color",value:r.inkColorA,onChange:a=>l("inkColorA",a.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Ink B"}),u.jsx("input",{type:"color",value:r.inkColorB,onChange:a=>l("inkColorB",a.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Bg A"}),u.jsx("input",{type:"color",value:r.bgColorA,onChange:a=>l("bgColorA",a.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[8px] text-neutral-400 block mb-1",children:"Bg B"}),u.jsx("input",{type:"color",value:r.bgColorB,onChange:a=>l("bgColorB",a.target.value),className:"w-full h-5 rounded cursor-pointer border-0"})]})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Post Processing"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(La,{label:"Vignette",value:r.vignette,min:0,max:1,step:.01,onChange:a=>l("vignette",a)}),u.jsx(La,{label:"Grain",value:r.grain,min:0,max:.15,step:.01,onChange:a=>l("grain",a)})]})]})]})},Ow={letterDuration:1.2,strokeWidth:.055,liquidMix:.7,liquidK:.18,bloat:.08,glowSharp:10,edgeSharp:42,inkColorA:"#1e59f2",inkColorB:"#e640bf",bgColorA:"#05060a",bgColorB:"#080f1a",vignette:.25,grain:.03},Fw={blob:[{freq:2,amp:.15,phase:0},{freq:3,amp:.1,phase:1.2}],star:[{freq:5,amp:.3,phase:0},{freq:10,amp:.05,phase:.5}],organic:[{freq:3,amp:.12,phase:0},{freq:5,amp:.08,phase:2.1},{freq:7,amp:.05,phase:.7}],flower:[{freq:6,amp:.2,phase:0},{freq:3,amp:.05,phase:1.5},{freq:12,amp:.03,phase:0}]};function xr(r,n,l){return r+(n-r)*l}function $d(r,n){const l=Fw[r],a=l.map(f=>({...f})),s=Math.max(0,n-l.length);for(let f=0;f<s;f++)a.push({freq:(f+a.length+1)*2+1,amp:.04/(f+1),phase:f*1.618});return a}function l1(r,n,l){const a=Math.max(r.length,n.length),s=[];for(let f=0;f<a;f++){const o=r[f]||{freq:n[f].freq,amp:0,phase:n[f].phase},m=n[f]||{freq:r[f].freq,amp:0,phase:r[f].phase};s.push({freq:xr(o.freq,m.freq,l),amp:xr(o.amp,m.amp,l),phase:xr(o.phase,m.phase,l)})}return s}function Iw(r,n,l,a,s,f){const o=[];for(let m=0;m<f;m++){const x=m/f*Math.PI*2;let p=l;for(const g of a)p+=l*g.amp*Math.sin(g.freq*x+g.phase+s);o.push([r+p*Math.cos(x),n+p*Math.sin(x)])}return Gw(o)}function Gw(r){const n=r.length;if(n<3)return"";let l=`M ${r[0][0].toFixed(1)} ${r[0][1].toFixed(1)}`;for(let a=0;a<n;a++){const s=r[(a-1+n)%n],f=r[a],o=r[(a+1)%n],m=r[(a+2)%n],x=f[0]+(o[0]-s[0])/6,p=f[1]+(o[1]-s[1])/6,g=o[0]-(m[0]-f[0])/6,v=o[1]-(m[1]-f[1])/6;l+=` C ${x.toFixed(1)} ${p.toFixed(1)}, ${g.toFixed(1)} ${v.toFixed(1)}, ${o[0].toFixed(1)} ${o[1].toFixed(1)}`}return l+=" Z",l}let Uw=0;const Jd=["idle","expand","splash","absorb","fill","shrink"],Pw={idle:.3,expand:.8,splash:.4,absorb:.6,fill:.3,shrink:.5},Hw=({params:r})=>{const n=_.useRef(null),l=_.useRef({phase:"idle",phaseTimer:0,blobRadius:0,targetRadius:20,time:0,centerX:0,centerY:0,viewportDiag:1e3,splashParticles:[],currentHarmonics:$d("blob",6),targetHarmonics:$d("blob",6),morphProgress:1,lastShape:"blob",lastComplexity:6}),a=_.useRef(r);a.current=r;const[s,f]=_.useState(""),[o,m]=_.useState([]);return _.useEffect(()=>{const x=n.current;if(!x)return;let p,g=0;function v(){const j=x.getBoundingClientRect();l.current.centerX=j.width/2,l.current.centerY=j.height/2,l.current.viewportDiag=Math.sqrt(j.width*j.width+j.height*j.height)/2+50}function S(j){const A=l.current,C=a.current;switch(A.phase=j,A.phaseTimer=0,j){case"idle":A.targetRadius=20,A.splashParticles=[];break;case"expand":A.targetRadius=Math.min(A.centerX,A.centerY)*.3;break;case"splash":{const z=C.particleCount,M=[];for(let k=0;k<z;k++){const D=k/z*Math.PI*2+Math.random()*.3,B=A.blobRadius*.9,E=C.splashForce;M.push({id:Uw++,x:A.centerX+Math.cos(D)*B,y:A.centerY+Math.sin(D)*B,targetX:A.centerX+Math.cos(D)*B*(1+E*1.5),targetY:A.centerY+Math.sin(D)*B*(1+E*1.5),radius:8+Math.random()*12})}A.splashParticles=M;break}case"absorb":for(const z of A.splashParticles)z.targetX=A.centerX,z.targetY=A.centerY;break;case"fill":A.targetRadius=A.viewportDiag,A.splashParticles=[];break;case"shrink":A.targetRadius=0;break}}function y(){const j=l.current,A=Jd.indexOf(j.phase);S(Jd[(A+1)%Jd.length])}function R(j){const A=l.current,C=a.current;A.time+=j*C.speed*2,A.phaseTimer+=j;const z=1-Math.pow(.001,j*C.speed*2);A.blobRadius=xr(A.blobRadius,A.targetRadius,z);const M=1-Math.pow(.001,j*C.speed);for(const B of A.splashParticles)B.x=xr(B.x,B.targetX,M),B.y=xr(B.y,B.targetY,M);(C.shape!==A.lastShape||C.complexity!==A.lastComplexity)&&(A.currentHarmonics=A.morphProgress>=1?A.targetHarmonics.map(B=>({...B})):l1(A.currentHarmonics,A.targetHarmonics,A.morphProgress),A.targetHarmonics=$d(C.shape,C.complexity),A.morphProgress=0,A.lastShape=C.shape,A.lastComplexity=C.complexity),A.morphProgress<1&&(A.morphProgress=Math.min(1,A.morphProgress+j*2));const k=A.morphProgress>=1?A.targetHarmonics:l1(A.currentHarmonics,A.targetHarmonics,A.morphProgress);if(A.blobRadius>.5){const B=48+Math.floor(C.complexity*4);f(Iw(A.centerX,A.centerY,A.blobRadius,k,A.time,B))}else f("");m([...A.splashParticles]);const D=Pw[A.phase]/C.speed;A.phaseTimer>=D&&(A.phase==="shrink"&&A.blobRadius>1||y())}function w(j){const A=g===0?.016:Math.min((j-g)/1e3,.05);g=j,R(A),p=requestAnimationFrame(w)}v(),S("idle");const N=new ResizeObserver(()=>v());return N.observe(x),p=requestAnimationFrame(w),()=>{cancelAnimationFrame(p),N.disconnect()}},[]),u.jsx("div",{ref:n,className:"w-full h-full relative overflow-hidden",children:u.jsxs("div",{className:"absolute inset-0",style:{filter:`blur(${r.blur}px) contrast(${r.contrast})`,background:"#000"},children:[s&&u.jsx("svg",{className:"absolute inset-0 w-full h-full",children:u.jsx("path",{d:s,fill:r.color})}),o.map(x=>u.jsx("div",{style:{position:"absolute",left:x.x,top:x.y,width:x.radius*2,height:x.radius*2,borderRadius:"50%",background:r.color,transform:"translate(-50%, -50%)",willChange:"left, top"}},x.id))]})})},rr=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:s>=1?n:n.toFixed(s>=.1?1:2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),qw=[{value:"blob",label:"Blob"},{value:"star",label:"Star"},{value:"organic",label:"Organic"},{value:"flower",label:"Flower"}],Vw=({params:r,onChange:n})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(rr,{label:"Speed",value:r.speed,min:.3,max:3,step:.1,onChange:l=>n({...r,speed:l})}),u.jsx(rr,{label:"Splash Force",value:r.splashForce,min:.3,max:2,step:.1,onChange:l=>n({...r,splashForce:l})}),u.jsx(rr,{label:"Particle Count",value:r.particleCount,min:3,max:15,step:1,onChange:l=>n({...r,particleCount:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Shape"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5",children:"Preset"}),u.jsx("div",{className:"flex gap-1.5",children:qw.map(l=>u.jsx("button",{onClick:()=>n({...r,shape:l.value}),className:`flex-1 text-[9px] py-1 rounded-lg transition-colors ${r.shape===l.value?"bg-neutral-800 text-white":"bg-neutral-200 text-neutral-500 hover:bg-neutral-300"}`,children:l.label},l.value))})]}),u.jsx(rr,{label:"Complexity",value:r.complexity,min:3,max:12,step:1,onChange:l=>n({...r,complexity:l})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Gooey Filter"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(rr,{label:"Blur",value:r.blur,min:8,max:35,step:1,onChange:l=>n({...r,blur:l})}),u.jsx(rr,{label:"Contrast",value:r.contrast,min:10,max:50,step:1,onChange:l=>n({...r,contrast:l})}),u.jsxs("div",{children:[u.jsx("div",{className:"flex items-center justify-between mb-1",children:u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Color"})}),u.jsx("input",{type:"color",value:r.color,onChange:l=>n({...r,color:l.target.value}),className:"w-full h-6 rounded cursor-pointer border-0"})]})]})]})]}),Yw={speed:1,shape:"blob",complexity:6,particleCount:8,splashForce:1,blur:15,contrast:20,color:"#ffffff"},Xw=({params:r})=>{const n=`goo-fx-${_.useId().replace(/:/g,"")}`,l=_.useRef(null),a=_.useRef({bars:[],time:0,height:400}),s=_.useRef(r);s.current=r;const[f,o]=_.useState([]);_.useEffect(()=>{const p=l.current;if(!p)return;let g,v=0;function S(){a.current.height=p.getBoundingClientRect().height}function y(){const j=s.current.barCount,A=a.current;for(;A.bars.length<j;)A.bars.push({current:.05,target:.15+Math.random()*.75,rising:!0,cooldown:Math.random()*.4});A.bars.length>j&&(A.bars.length=j)}function R(j){const A=a.current,C=s.current;A.time+=j*C.speed,y();const z=A.bars;if(z.length===0)return;if(C.mode==="spectrum")for(const k of z){const D=1-Math.pow(.01,j*C.speed*4),B=1-Math.pow(.01,j*C.speed*2);if(k.current+=(k.target-k.current)*(k.rising?D:B),k.cooldown>0){k.cooldown-=j*C.speed;continue}Math.abs(k.current-k.target)<.03&&(k.rising?(k.rising=!1,k.target=.03+Math.random()*.08,k.cooldown=0):(k.rising=!0,k.target=.2+Math.random()*.8,k.cooldown=Math.random()*.5/C.speed))}else if(C.mode==="wave")for(let k=0;k<z.length;k++){const D=k/z.length*Math.PI*2,B=Math.sin(A.time*2+D)*.5+.5,E=Math.sin(A.time*3.3+D*1.6)*.5+.5;z[k].target=.08+B*.45+E*.35;const L=1-Math.pow(.001,j*C.speed*3);z[k].current+=(z[k].target-z[k].current)*L}else{const k=(z.length-1)/2;for(let D=0;D<z.length;D++){const B=Math.abs(D-k)/Math.max(k,1),E=Math.sin(A.time*3-B*4);z[D].target=.08+Math.max(0,E)*.85;const L=1-Math.pow(.001,j*C.speed*3);z[D].current+=(z[D].target-z[D].current)*L}}const M=A.height*.65;o(z.map(k=>Math.max(k.current*M,2)))}function w(j){const A=v===0?.016:Math.min((j-v)/1e3,.05);v=j,R(A),g=requestAnimationFrame(w)}S(),y();const N=new ResizeObserver(()=>S());return N.observe(p),g=requestAnimationFrame(w),()=>{cancelAnimationFrame(g),N.disconnect()}},[]);const m=Math.floor(r.threshold/2),x=25;return u.jsxs("div",{ref:l,className:"w-full h-full relative overflow-hidden",children:[u.jsx("svg",{className:"absolute w-0 h-0","aria-hidden":"true",children:u.jsx("defs",{children:u.jsxs("filter",{id:n,children:[u.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:r.blur,result:"blur"}),u.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${r.threshold} -${m}`,result:"goo"}),r.crisp&&u.jsx("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]})})}),u.jsxs("div",{className:"absolute inset-0",style:{filter:`url(#${n})`},children:[u.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:x,background:r.color}}),u.jsx("div",{style:{position:"absolute",bottom:x-5,left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"flex-end"},children:f.map((p,g)=>u.jsx("div",{style:{width:r.barWidth,height:p,background:r.color,borderRadius:r.barShape==="pill"?999:r.barShape==="round"?`${r.barWidth/2}px ${r.barWidth/2}px 0 0`:0,willChange:"height"}},g))})]})]})},Ao=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:s>=1?n:n.toFixed(s>=.1?1:2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Zw=[{value:"spectrum",label:"Spectrum"},{value:"wave",label:"Wave"},{value:"pulse",label:"Pulse"}],Ww=[{value:"rect",label:"Rect"},{value:"round",label:"Round"},{value:"pill",label:"Pill"}],Kw=({params:r,onChange:n})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Mode"}),u.jsx("div",{className:"flex gap-1.5",children:Zw.map(l=>u.jsx("button",{onClick:()=>n({...r,mode:l.value}),className:`flex-1 text-[9px] py-1.5 rounded-lg font-medium transition-colors ${r.mode===l.value?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.value))})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ao,{label:"Speed",value:r.speed,min:.3,max:3,step:.1,onChange:l=>n({...r,speed:l})}),u.jsx(Ao,{label:"Bar Count",value:r.barCount,min:8,max:32,step:1,onChange:l=>n({...r,barCount:l})}),u.jsx(Ao,{label:"Bar Width",value:r.barWidth,min:10,max:30,step:1,onChange:l=>n({...r,barWidth:l})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5",children:"Bar Shape"}),u.jsx("div",{className:"flex gap-1.5",children:Ww.map(l=>u.jsx("button",{onClick:()=>n({...r,barShape:l.value}),className:`flex-1 text-[9px] py-1 rounded-lg font-medium transition-colors ${r.barShape===l.value?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:l.label},l.value))})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Gooey Filter"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ao,{label:"Blur",value:r.blur,min:4,max:20,step:1,onChange:l=>n({...r,blur:l})}),u.jsx(Ao,{label:"Threshold",value:r.threshold,min:10,max:40,step:1,onChange:l=>n({...r,threshold:l})}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Crisp Edges"}),u.jsx("button",{onClick:()=>n({...r,crisp:!r.crisp}),className:`w-8 h-4 rounded-full transition-colors relative ${r.crisp?"bg-neutral-800":"bg-neutral-200"}`,children:u.jsx("div",{className:`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform ${r.crisp?"translate-x-4":"translate-x-0.5"}`})})]}),u.jsxs("div",{children:[u.jsx("div",{className:"flex items-center justify-between mb-1",children:u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Color"})}),u.jsx("input",{type:"color",value:r.color,onChange:l=>n({...r,color:l.target.value}),className:"w-full h-6 rounded cursor-pointer border-0"})]})]})]})]}),Qw={speed:1,mode:"spectrum",barCount:16,barWidth:20,barShape:"rect",blur:10,threshold:20,color:"#ad2a2a",crisp:!1},$w=({params:r})=>{const n=_.useRef(null),l=_.useRef(r);l.current=r;const a=_.useRef([null,null]),s=_.useRef([null,null]),f=_.useRef([{currentX:0,currentY:0},{currentX:0,currentY:0}]),o=_.useRef({x:0,y:0}),[m,x]=_.useState(!1),p=_.useCallback(v=>S=>{a.current[v]=S},[]),g=_.useCallback(v=>S=>{s.current[v]=S},[]);return _.useEffect(()=>{const v=n.current;if(!v)return;let S;function y(N){const j="touches"in N?N.touches[0]:N;j&&(o.current={x:j.clientX,y:j.clientY})}function R(){const N=l.current;for(let j=0;j<2;j++){const A=a.current[j],C=s.current[j];if(!A||!C)continue;const z=A.getBoundingClientRect(),M=z.left+z.width/2,k=z.top+z.height/2,D=o.current.x-M,B=o.current.y-k,E=z.width*.18,L=z.height*.1,G=(ie,U,Q)=>Math.max(U,Math.min(Q,ie)),W=G(D*N.sensitivity,-E,E),K=G(B*N.sensitivity,-L,L),q=f.current[j];q.currentX+=(W-q.currentX)*N.smoothing,q.currentY+=(K-q.currentY)*N.smoothing,C.style.transform=`translate(calc(-50% + ${q.currentX}px), calc(-50% + ${q.currentY}px))`}S=requestAnimationFrame(R)}const w=v.getBoundingClientRect();return o.current={x:w.left+w.width/2,y:w.top+w.height/2},window.addEventListener("mousemove",y,{passive:!0}),window.addEventListener("touchmove",y,{passive:!0}),S=requestAnimationFrame(R),()=>{cancelAnimationFrame(S),window.removeEventListener("mousemove",y),window.removeEventListener("touchmove",y)}},[]),_.useEffect(()=>{const v=r.blinkInterval*1e3;if(v<=0)return;const S=setInterval(()=>{x(!0),setTimeout(()=>x(!1),200)},v);return()=>clearInterval(S)},[r.blinkInterval]),u.jsx("div",{ref:n,className:"w-full h-full relative overflow-hidden flex items-center justify-center",style:{background:"#0b0f14"},children:u.jsx("div",{style:{width:"min(860px, 92%)",aspectRatio:"16 / 9",background:r.cardColor,borderRadius:28,display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx("div",{style:{display:"flex",gap:r.eyeGap,transform:"translateY(12px)"},children:[0,1].map(v=>u.jsx("div",{ref:p(v),style:{width:r.eyeWidth,height:r.eyeHeight,background:"#fff",borderRadius:r.eyeRadius,overflow:"hidden",position:"relative",boxShadow:"inset 0 0 0 2px rgba(0,0,0,0.02)",clipPath:m?r.blinkStyle==="top"?`inset(100% 0 0 0 round ${r.eyeRadius}px)`:`inset(50% 0 50% 0 round ${r.eyeRadius}px)`:`inset(0 round ${r.eyeRadius}px)`,transition:"clip-path 0.12s ease-in-out"},children:u.jsx("div",{ref:g(v),style:{width:r.pupilSize,height:r.pupilSize*1.28,background:"#000",borderRadius:999,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",willChange:"transform"}})},v))})})})},Jw={eyeGap:72,eyeWidth:220,eyeHeight:88,eyeRadius:999,pupilSize:86,smoothing:.12,sensitivity:.08,cardColor:"#7fa0ff",blinkInterval:5,blinkStyle:"center"},r1=[{id:"classic",label:"Classic",params:{eyeGap:72,eyeWidth:220,eyeHeight:88,eyeRadius:999,pupilSize:86,smoothing:.12,sensitivity:.08,cardColor:"#7fa0ff",blinkInterval:5,blinkStyle:"center"}},{id:"frog",label:"Frog",params:{eyeGap:130,eyeWidth:140,eyeHeight:140,eyeRadius:999,pupilSize:60,smoothing:.06,sensitivity:.05,cardColor:"#5db85a",blinkInterval:8,blinkStyle:"top"}},{id:"cat",label:"Cat",params:{eyeGap:56,eyeWidth:120,eyeHeight:100,eyeRadius:999,pupilSize:56,smoothing:.22,sensitivity:.14,cardColor:"#2d2d2d",blinkInterval:6,blinkStyle:"top"}},{id:"robot",label:"Robot",params:{eyeGap:60,eyeWidth:110,eyeHeight:110,eyeRadius:16,pupilSize:60,smoothing:.3,sensitivity:.12,cardColor:"#4a4a4a",blinkInterval:7,blinkStyle:"center"}},{id:"anime",label:"Anime",params:{eyeGap:48,eyeWidth:180,eyeHeight:130,eyeRadius:999,pupilSize:120,smoothing:.18,sensitivity:.1,cardColor:"#ffb3c6",blinkInterval:4,blinkStyle:"top"}},{id:"alien",label:"Alien",params:{eyeGap:110,eyeWidth:100,eyeHeight:120,eyeRadius:999,pupilSize:36,smoothing:.3,sensitivity:.16,cardColor:"#3a1f5e",blinkInterval:10,blinkStyle:"center"}}],hi=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:s>=1?n:n.toFixed(s>=.1?1:2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]});function e_(r,n){return r.eyeGap===n.eyeGap&&r.eyeWidth===n.eyeWidth&&r.eyeHeight===n.eyeHeight&&r.eyeRadius===n.eyeRadius&&r.pupilSize===n.pupilSize&&r.smoothing===n.smoothing&&r.sensitivity===n.sensitivity&&r.cardColor===n.cardColor&&r.blinkInterval===n.blinkInterval&&r.blinkStyle===n.blinkStyle}const t_=({params:r,onChange:n})=>{const l=r1.find(a=>e_(a.params,r));return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Presets"}),u.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:r1.map(a=>{const s=(l==null?void 0:l.id)===a.id;return u.jsxs("button",{onClick:()=>n(a.params),className:`relative h-8 rounded-lg text-[9px] font-medium transition-all overflow-hidden ${s?"ring-2 ring-neutral-800 ring-offset-1":"opacity-75 hover:opacity-100"}`,style:{background:a.params.cardColor},children:[u.jsx("div",{className:"absolute inset-0 flex items-center justify-center gap-[3px]",children:[0,1].map(f=>u.jsx("div",{className:"relative flex items-center justify-center",style:{width:14,height:14*(a.params.eyeHeight/a.params.eyeWidth),background:"#fff",borderRadius:Math.min(a.params.eyeRadius,999)*(14/a.params.eyeWidth)},children:u.jsx("div",{style:{width:14*(a.params.pupilSize/a.params.eyeWidth),height:14*(a.params.pupilSize/a.params.eyeWidth)*1.2,background:"#000",borderRadius:999}})},f))}),u.jsx("span",{className:"absolute bottom-0.5 left-0 right-0 text-center text-[7px] font-semibold",style:{color:n_(a.params.cardColor)?"#333":"#fff"},children:a.label})]},a.id)})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Eye Shape"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(hi,{label:"Eye Width",value:r.eyeWidth,min:100,max:320,step:10,onChange:a=>n({...r,eyeWidth:a})}),u.jsx(hi,{label:"Eye Height",value:r.eyeHeight,min:40,max:160,step:4,onChange:a=>n({...r,eyeHeight:a})}),u.jsx(hi,{label:"Eye Radius",value:r.eyeRadius,min:0,max:999,step:1,onChange:a=>n({...r,eyeRadius:a})}),u.jsx(hi,{label:"Eye Gap",value:r.eyeGap,min:20,max:150,step:2,onChange:a=>n({...r,eyeGap:a})}),u.jsx(hi,{label:"Pupil Size",value:r.pupilSize,min:30,max:140,step:2,onChange:a=>n({...r,pupilSize:a})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(hi,{label:"Smoothing",value:r.smoothing,min:.02,max:.5,step:.02,onChange:a=>n({...r,smoothing:a})}),u.jsx(hi,{label:"Sensitivity",value:r.sensitivity,min:.02,max:.2,step:.01,onChange:a=>n({...r,sensitivity:a})}),u.jsx(hi,{label:"Blink Interval",value:r.blinkInterval,min:1,max:15,step:.5,onChange:a=>n({...r,blinkInterval:a})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5",children:"Blink Style"}),u.jsx("div",{className:"flex gap-1.5",children:["center","top"].map(a=>u.jsx("button",{onClick:()=>n({...r,blinkStyle:a}),className:`flex-1 text-[9px] py-1 rounded-lg font-medium transition-colors ${r.blinkStyle===a?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:a==="center"?"Center":"Eyelid"},a))})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Appearance"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsxs("div",{children:[u.jsx("div",{className:"flex items-center justify-between mb-1",children:u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Card Color"})}),u.jsx("input",{type:"color",value:r.cardColor,onChange:a=>n({...r,cardColor:a.target.value}),className:"w-full h-6 rounded cursor-pointer border-0"})]})})]})]})};function n_(r){const n=parseInt(r.slice(1,3),16),l=parseInt(r.slice(3,5),16),a=parseInt(r.slice(5,7),16);return n*.299+l*.587+a*.114>150}const a_=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,i_=`
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
`,l_={swirl:0,stretch:1,radial:2,turbulent:3},r_={flat:0,silk:1,oil:2,watercolor:3,metal:4};function e0(r){const n=parseInt(r.replace("#",""),16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}const o_=({params:r})=>{const n=_.useRef(null),l=_.useRef(0),a=_.useRef(Date.now()),s=_.useRef(r),f=_.useRef({x:0,y:0}),o=_.useRef(0),m=_.useRef(!1);return _.useEffect(()=>{s.current=r},[r]),_.useEffect(()=>{const x=n.current;if(!x)return;const p=x.getContext("webgl");if(!p)return;const g=(te,ae)=>{const le=p.createShader(ae);return p.shaderSource(le,te),p.compileShader(le),p.getShaderParameter(le,p.COMPILE_STATUS)?le:(console.error("Shader compile error:",p.getShaderInfoLog(le)),p.deleteShader(le),null)},v=g(a_,p.VERTEX_SHADER),S=g(i_,p.FRAGMENT_SHADER);if(!v||!S)return;const y=p.createProgram();if(p.attachShader(y,v),p.attachShader(y,S),p.linkProgram(y),!p.getProgramParameter(y,p.LINK_STATUS)){console.error("Program link error:",p.getProgramInfoLog(y));return}p.useProgram(y);const R=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=p.createBuffer();p.bindBuffer(p.ARRAY_BUFFER,w),p.bufferData(p.ARRAY_BUFFER,R,p.STATIC_DRAW);const N=p.getAttribLocation(y,"position");p.enableVertexAttribArray(N),p.vertexAttribPointer(N,2,p.FLOAT,!1,0,0);const j=p.getUniformLocation(y,"uTime"),A=p.getUniformLocation(y,"uResolution"),C=p.getUniformLocation(y,"uSpeed"),z=p.getUniformLocation(y,"uScale"),M=p.getUniformLocation(y,"uSwirl"),k=p.getUniformLocation(y,"uTurbulence"),D=p.getUniformLocation(y,"uEdgeSoftness"),B=p.getUniformLocation(y,"uColor1"),E=p.getUniformLocation(y,"uColor2"),L=p.getUniformLocation(y,"uColor3"),G=p.getUniformLocation(y,"uVignette"),W=p.getUniformLocation(y,"uGrain"),K=p.getUniformLocation(y,"uMouse"),q=p.getUniformLocation(y,"uMouseForce"),ie=p.getUniformLocation(y,"uMouseRadius"),U=p.getUniformLocation(y,"uSymmetry"),Q=p.getUniformLocation(y,"uHueDrift"),se=p.getUniformLocation(y,"uDistortion"),ue=p.getUniformLocation(y,"uTexture"),pe=te=>{const ae=x.getBoundingClientRect();f.current={x:(te.clientX-ae.left)/ae.width*2-1,y:-((te.clientY-ae.top)/ae.height*2-1)}},O=()=>{f.current={x:0,y:0}};x.addEventListener("mousemove",pe),x.addEventListener("mouseleave",O);let P=!0;const J=()=>{if(!P)return;const te=window.devicePixelRatio||1,ae=x.clientWidth*te,le=x.clientHeight*te;(x.width!==ae||x.height!==le)&&(x.width=ae,x.height=le,p.viewport(0,0,p.drawingBufferWidth,p.drawingBufferHeight));const oe=s.current,me=(Date.now()-a.current)/1e3;let re;if(oe.paused)m.current||(o.current=me,m.current=!0),re=o.current;else{if(m.current){const Se=me-o.current;a.current+=Se*1e3,m.current=!1}re=(Date.now()-a.current)/1e3}p.uniform1f(j,re),p.uniform2f(A,x.width,x.height),p.uniform1f(C,oe.speed),p.uniform1f(z,oe.scale),p.uniform1f(M,oe.swirl),p.uniform1f(k,oe.turbulence),p.uniform1f(D,oe.edgeSoftness);const fe=e0(oe.color1),Ae=e0(oe.color2),Oe=e0(oe.color3);p.uniform3f(B,fe[0],fe[1],fe[2]),p.uniform3f(E,Ae[0],Ae[1],Ae[2]),p.uniform3f(L,Oe[0],Oe[1],Oe[2]),p.uniform1f(G,oe.vignette),p.uniform1f(W,oe.grain),p.uniform2f(K,f.current.x,f.current.y),p.uniform1f(q,oe.mouseForce),p.uniform1f(ie,oe.mouseRadius),p.uniform1f(U,oe.symmetry),p.uniform1f(Q,oe.hueDrift),p.uniform1i(se,l_[oe.distortion]??0),p.uniform1i(ue,r_[oe.texture]??0),p.drawArrays(p.TRIANGLE_STRIP,0,4),l.current=requestAnimationFrame(J)};return J(),()=>{P=!1,cancelAnimationFrame(l.current),x.removeEventListener("mousemove",pe),x.removeEventListener("mouseleave",O),p.deleteProgram(y)}},[]),u.jsx("canvas",{ref:n,className:"w-full h-full block"})},s_={speed:.4,scale:2,swirl:3,turbulence:1,edgeSoftness:.3,color1:"#3344ff",color2:"#ff66bb",color3:"#ffdd00",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"flat"},o1=[{id:"oil-paint",label:"Oil Paint",params:{speed:.4,scale:2,swirl:3,turbulence:1,edgeSoftness:.3,color1:"#3344ff",color2:"#ff66bb",color3:"#ffdd00",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"oil"}},{id:"lava-flow",label:"Lava Flow",params:{speed:.2,scale:1.8,swirl:4,turbulence:1.4,edgeSoftness:.15,color1:"#1a0500",color2:"#cc2200",color3:"#ff8800",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"flat"}},{id:"ocean-current",label:"Ocean",params:{speed:.25,scale:2.5,swirl:3.5,turbulence:.8,edgeSoftness:.45,color1:"#0a1628",color2:"#1a6888",color3:"#88ddee",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"silk"}},{id:"neon-ink",label:"Neon Ink",params:{speed:.6,scale:1.5,swirl:5,turbulence:1.2,edgeSoftness:.2,color1:"#00ffaa",color2:"#ff00aa",color3:"#00ccff",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"metal"}},{id:"sunset-marble",label:"Sunset",params:{speed:.3,scale:2.2,swirl:2.5,turbulence:.9,edgeSoftness:.4,color1:"#6622aa",color2:"#ee5533",color3:"#ffcc22",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"flat"}},{id:"midnight-aurora",label:"Aurora",params:{speed:.15,scale:3,swirl:2,turbulence:.7,edgeSoftness:.55,color1:"#0a0a2e",color2:"#22aa66",color3:"#6644cc",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"silk"}},{id:"candy-melt",label:"Candy",params:{speed:.35,scale:2,swirl:3.5,turbulence:.6,edgeSoftness:.5,color1:"#aaddff",color2:"#ffaacc",color3:"#ffffaa",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"watercolor"}},{id:"monochrome",label:"Mono",params:{speed:.3,scale:2,swirl:3,turbulence:1.3,edgeSoftness:.1,color1:"#000000",color2:"#555555",color3:"#ffffff",vignette:0,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:1,hueDrift:0,distortion:"swirl",texture:"flat"}},{id:"mandala",label:"Mandala",params:{speed:.15,scale:2.5,swirl:2.5,turbulence:.8,edgeSoftness:.35,color1:"#0a1040",color2:"#1a3088",color3:"#ccaa33",vignette:.7,grain:0,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:6,hueDrift:0,distortion:"swirl",texture:"silk"}},{id:"inkblot",label:"Inkblot",params:{speed:.25,scale:2,swirl:3,turbulence:1.5,edgeSoftness:.1,color1:"#0a0a0a",color2:"#444444",color3:"#cccccc",vignette:.4,grain:.2,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:2,hueDrift:0,distortion:"turbulent",texture:"watercolor"}},{id:"interactive",label:"Interactive",params:{speed:.4,scale:2,swirl:3.5,turbulence:1,edgeSoftness:.3,color1:"#ff00ff",color2:"#00ffff",color3:"#ffff00",vignette:0,grain:0,paused:!1,mouseForce:2,mouseRadius:.4,symmetry:1,hueDrift:.3,distortion:"swirl",texture:"metal"}},{id:"dreamscape",label:"Dreamscape",params:{speed:.2,scale:2.8,swirl:2,turbulence:.7,edgeSoftness:.5,color1:"#eeb8dd",color2:"#aaccee",color3:"#ddeebb",vignette:.3,grain:.05,paused:!1,mouseForce:0,mouseRadius:.3,symmetry:4,hueDrift:.15,distortion:"radial",texture:"silk"}}],Jn=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:s>=1?n:n.toFixed(s>=.1?1:2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),c_=[{value:"swirl",label:"Swirl"},{value:"stretch",label:"Stretch"},{value:"radial",label:"Radial"},{value:"turbulent",label:"Turbulent"}],u_=[{value:"flat",label:"Flat"},{value:"silk",label:"Silk"},{value:"oil",label:"Oil"},{value:"watercolor",label:"Aqua"},{value:"metal",label:"Metal"}];function f_(r,n){return r.speed===n.speed&&r.scale===n.scale&&r.swirl===n.swirl&&r.turbulence===n.turbulence&&r.edgeSoftness===n.edgeSoftness&&r.color1===n.color1&&r.color2===n.color2&&r.color3===n.color3&&r.vignette===n.vignette&&r.grain===n.grain&&r.mouseForce===n.mouseForce&&r.mouseRadius===n.mouseRadius&&r.symmetry===n.symmetry&&r.hueDrift===n.hueDrift&&r.distortion===n.distortion&&r.texture===n.texture}const d_=({params:r,onChange:n})=>{const l=(s,f)=>{n({...r,[s]:f})},a=o1.find(s=>f_(s.params,r));return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Presets"}),u.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:o1.map(s=>{const f=(a==null?void 0:a.id)===s.id;return u.jsxs("button",{onClick:()=>n(s.params),className:`flex flex-col items-center gap-1 py-1.5 px-1 rounded-lg transition-all ${f?"bg-neutral-800 ring-1 ring-neutral-700":"bg-neutral-50 hover:bg-neutral-100"}`,children:[u.jsx("div",{className:`w-full h-5 rounded-md overflow-hidden ${f?"ring-1 ring-white/30":""}`,style:{background:`linear-gradient(135deg, ${s.params.color1} 0%, ${s.params.color2} 50%, ${s.params.color3} 100%)`}}),u.jsx("span",{className:`text-[8px] font-medium leading-none ${f?"text-white":"text-neutral-500"}`,children:s.label})]},s.id)})}),a&&u.jsx("div",{className:"mt-2 text-[9px] text-neutral-400",children:a.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Animation"}),u.jsx("button",{onClick:()=>l("paused",!r.paused),className:`flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-medium transition-all ${r.paused?"bg-amber-100 text-amber-700":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:r.paused?"▶ Play":"⏸ Pause"})]}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Jn,{label:"Speed",value:r.speed,min:0,max:2,step:.01,onChange:s=>l("speed",s)}),u.jsx(Jn,{label:"Scale",value:r.scale,min:.5,max:6,step:.1,onChange:s=>l("scale",s)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Distortion Style"}),u.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:c_.map(s=>{const f=r.distortion===s.value;return u.jsx("button",{onClick:()=>l("distortion",s.value),className:`py-1.5 px-1 rounded-lg text-[9px] font-medium transition-all ${f?"bg-neutral-800 text-white":"bg-neutral-50 text-neutral-500 hover:bg-neutral-100"}`,children:s.label},s.value)})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Texture"}),u.jsx("div",{className:"grid grid-cols-5 gap-1.5",children:u_.map(s=>{const f=r.texture===s.value;return u.jsx("button",{onClick:()=>l("texture",s.value),className:`py-1.5 px-1 rounded-lg text-[9px] font-medium transition-all ${f?"bg-neutral-800 text-white":"bg-neutral-50 text-neutral-500 hover:bg-neutral-100"}`,children:s.label},s.value)})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Fluid"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Jn,{label:"Swirl",value:r.swirl,min:0,max:8,step:.1,onChange:s=>l("swirl",s)}),u.jsx(Jn,{label:"Turbulence",value:r.turbulence,min:.1,max:2,step:.01,onChange:s=>l("turbulence",s)}),u.jsx(Jn,{label:"Edge Softness",value:r.edgeSoftness,min:.01,max:.8,step:.01,onChange:s=>l("edgeSoftness",s)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Interaction"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Jn,{label:"Mouse Force",value:r.mouseForce,min:0,max:3,step:.01,onChange:s=>l("mouseForce",s)}),u.jsx(Jn,{label:"Mouse Radius",value:r.mouseRadius,min:.05,max:.8,step:.01,onChange:s=>l("mouseRadius",s)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Transform"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Jn,{label:"Symmetry",value:r.symmetry,min:1,max:8,step:1,onChange:s=>l("symmetry",s)}),u.jsx(Jn,{label:"Hue Drift",value:r.hueDrift,min:0,max:1,step:.01,onChange:s=>l("hueDrift",s)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Post Processing"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Jn,{label:"Vignette",value:r.vignette,min:0,max:1,step:.01,onChange:s=>l("vignette",s)}),u.jsx(Jn,{label:"Grain",value:r.grain,min:0,max:.3,step:.01,onChange:s=>l("grain",s)})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Custom Colors"}),u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:r.color1,onChange:s=>l("color1",s.target.value),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Color A"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:r.color2,onChange:s=>l("color2",s.target.value),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Color B"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:r.color3,onChange:s=>l("color3",s.target.value),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Color C"})]})]})]})]})},m_=r=>r<.5?8*r*r*r*r:1-Math.pow(-2*r+2,4)/2,s1=r=>1-Math.pow(1-r,5),t0=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function h_(r,n,l){const a=Math.ceil(r/l)+2,s=Math.ceil(n/l)+2,f=(r%l-l)/2,o=(n%l-l)/2;return{cols:a,rows:s,offsetX:f,offsetY:o}}function p_(r,n,l,a,s,f){const o=n/2,m=l/2,{cols:x,rows:p,offsetX:g,offsetY:v}=h_(n,l,f.gridSize),S=Math.sqrt(o*o+m*m),y=`${f.colorR}, ${f.colorG}, ${f.colorB}`;if(r.clearRect(0,0,n,l),a===0){const R=m_(s);for(let w=0;w<p;w++)for(let N=0;N<x;N++){const j=g+N*f.gridSize,A=v+w*f.gridSize,C=j-o,z=A-m,k=Math.sqrt(C*C+z*z)/S*f.stagger,D=Math.max(0,Math.min(1,(R-k)/(1-k))),B=s1(D);if(B<=0)continue;const E=o+C*B,L=m+z*B,G=Math.min(B*2,1),W=f.dotRadius*.67+B*(f.dotRadius*.33);r.beginPath(),r.arc(E,L,W,0,Math.PI*2),r.fillStyle=`rgba(${y}, ${G})`,r.fill()}}else if(a===1){const R=s1(t0(s));for(let w=0;w<p;w++)for(let N=0;N<x;N++){const j=g+N*f.gridSize,A=v+w*f.gridSize,C=f.dotRadius*(1-R*.85),z=f.gridSize/2*R,M=f.dotRadius*(1-R)+1*R;r.fillStyle=`rgba(${y}, 1)`,r.strokeStyle=`rgba(${y}, 1)`,C>.15&&(r.beginPath(),r.arc(j,A,C,0,Math.PI*2),r.fill()),r.lineWidth=M,r.lineCap="round",z>.5&&(N<x-1&&(r.beginPath(),r.moveTo(j,A),r.lineTo(j+z,A),r.stroke()),N>0&&(r.beginPath(),r.moveTo(j,A),r.lineTo(j-z,A),r.stroke()),w<p-1&&(r.beginPath(),r.moveTo(j,A),r.lineTo(j,A+z),r.stroke()),w>0&&(r.beginPath(),r.moveTo(j,A),r.lineTo(j,A-z),r.stroke()))}}else if(a===2){const R=t0(s),w=f.gridSize/2,N=f.gridSize*.2,j=w+(N-w)*R,A=f.dotRadius*.15;r.fillStyle=`rgba(${y}, 1)`,r.strokeStyle=`rgba(${y}, 1)`,r.lineWidth=1,r.lineCap="round";for(let C=0;C<p;C++)for(let z=0;z<x;z++){const M=g+z*f.gridSize,k=v+C*f.gridSize;A>.15&&(r.beginPath(),r.arc(M,k,A,0,Math.PI*2),r.fill()),r.beginPath(),r.moveTo(M,k),r.lineTo(M+j,k),r.stroke(),r.beginPath(),r.moveTo(M,k),r.lineTo(M-j,k),r.stroke(),r.beginPath(),r.moveTo(M,k),r.lineTo(M,k+j),r.stroke(),r.beginPath(),r.moveTo(M,k),r.lineTo(M,k-j),r.stroke()}}else if(a===3){const w=t0(s)*Math.PI*2,N=f.gridSize*.2,j=f.dotRadius*.15;r.fillStyle=`rgba(${y}, 1)`,r.strokeStyle=`rgba(${y}, 1)`,r.lineWidth=1,r.lineCap="round";for(let A=0;A<p;A++)for(let C=0;C<x;C++){const z=g+C*f.gridSize,M=v+A*f.gridSize;r.save(),r.translate(z,M),r.rotate(w),j>.15&&(r.beginPath(),r.arc(0,0,j,0,Math.PI*2),r.fill()),r.beginPath(),r.moveTo(0,0),r.lineTo(N,0),r.stroke(),r.beginPath(),r.moveTo(0,0),r.lineTo(-N,0),r.stroke(),r.beginPath(),r.moveTo(0,0),r.lineTo(0,N),r.stroke(),r.beginPath(),r.moveTo(0,0),r.lineTo(0,-N),r.stroke(),r.restore()}}else if(a===4){const R=f.gridSize*.2,w=f.dotRadius*.15;r.fillStyle=`rgba(${y}, 1)`,r.strokeStyle=`rgba(${y}, 1)`,r.lineWidth=1,r.lineCap="round";for(let N=0;N<p;N++)for(let j=0;j<x;j++){const A=g+j*f.gridSize,C=v+N*f.gridSize;w>.15&&(r.beginPath(),r.arc(A,C,w,0,Math.PI*2),r.fill()),r.beginPath(),r.moveTo(A,C),r.lineTo(A+R,C),r.stroke(),r.beginPath(),r.moveTo(A,C),r.lineTo(A-R,C),r.stroke(),r.beginPath(),r.moveTo(A,C),r.lineTo(A,C+R),r.stroke(),r.beginPath(),r.moveTo(A,C),r.lineTo(A,C-R),r.stroke()}}}const g_=({params:r,animStateRef:n,phaseOverrideRef:l})=>{const a=_.useRef(null),s=_.useRef(r);s.current=r;const f=_.useRef(n);f.current=n;const o=_.useRef(l);o.current=l;const m=_.useRef({w:0,h:0}),x=_.useRef({phase:0,accumulatedTime:0,lastTimestamp:null}),p=_.useCallback(()=>{const g=a.current;if(!g)return;const v=g.getContext("2d");if(!v)return;const{w:S,h:y}=m.current,R=x.current,w=s.current,j=[w.spreadDuration,w.morphDuration,w.shrinkDuration??1200,w.spinDuration??1e3,600][R.phase]??800,A=Math.min(R.accumulatedTime/j,1);p_(v,S,y,R.phase,A,w)},[]);return _.useEffect(()=>{const g=a.current;if(!g)return;const v=window.devicePixelRatio||1,S=()=>{const R=g.parentElement;if(!R)return;const w=R.clientWidth,N=R.clientHeight;g.width=w*v,g.height=N*v,g.style.width=w+"px",g.style.height=N+"px";const j=g.getContext("2d");j&&j.setTransform(v,0,0,v,0,0),m.current={w,h:N},p()};S();const y=new ResizeObserver(()=>S());return y.observe(g.parentElement),()=>y.disconnect()},[p]),_.useEffect(()=>{let g;const v=S=>{var k;const y=x.current,R=s.current,w=o.current;(k=w==null?void 0:w.current)!=null&&k.trigger&&(y.phase=w.current.phase,y.accumulatedTime=0,y.lastTimestamp=S,w.current.trigger=!1),y.lastTimestamp===null&&(y.lastTimestamp=S);const N=(S-y.lastTimestamp)*R.speed;y.lastTimestamp=S;const A=[R.spreadDuration,R.morphDuration,R.shrinkDuration??1200,R.spinDuration??1e3,600][y.phase]??800;y.accumulatedTime+=N,y.accumulatedTime>=A&&(y.phase++,y.accumulatedTime=0,y.phase>4&&(y.phase=0));const z=[R.spreadDuration,R.morphDuration,R.shrinkDuration,R.spinDuration,600][y.phase]??600,M=z>0?Math.min(y.accumulatedTime/z,1):0;f.current&&(f.current.current={phase:y.phase,progress:M}),p(),g=requestAnimationFrame(v)};return g=requestAnimationFrame(v),()=>cancelAnimationFrame(g)},[p]),u.jsx("div",{className:"w-full h-full relative overflow-hidden",children:u.jsx("canvas",{ref:a,className:"absolute inset-0"})})},x_=({phases:r,animStateRef:n,totalCopyText:l})=>{const a=_.useRef(null),[s,f]=_.useState(0),[o,m]=_.useState(null),x=_.useRef(0),p=_.useMemo(()=>r.reduce((v,S)=>v+S.duration,0),[r]);_.useEffect(()=>{let v;const S=()=>{var R;const y=n.current;if(y&&a.current){const{phase:w,progress:N}=y;let j=0;for(let C=0;C<w&&C<r.length;C++)j+=r[C].duration;j+=(((R=r[w])==null?void 0:R.duration)??0)*N;const A=p>0?j/p*100:0;a.current.style.left=`${Math.min(A,100)}%`,w!==x.current&&(x.current=w,f(w))}v=requestAnimationFrame(S)};return v=requestAnimationFrame(S),()=>cancelAnimationFrame(v)},[r,p,n]);const g=(v,S)=>{navigator.clipboard.writeText(v),m(S),setTimeout(()=>m(y=>y===S?null:y),1500)};return u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Phase Timeline"}),u.jsxs("div",{className:"text-[9px] text-neutral-400 tabular-nums",children:[(p/1e3).toFixed(1),"s"]})]}),u.jsxs("div",{className:"relative h-6 flex gap-px rounded-lg overflow-hidden mb-2.5",children:[r.map((v,S)=>{const y=p>0?v.duration/p*100:0,R=s===S;return u.jsx("div",{className:`relative flex items-center justify-center transition-opacity duration-200 ${R?"opacity-100":"opacity-40"}`,style:{width:`${y}%`,backgroundColor:v.color},children:u.jsx("span",{className:"text-[8px] font-medium text-white/90 truncate px-1.5 select-none",children:v.name})},S)}),u.jsx("div",{ref:a,className:"absolute top-0 bottom-0 w-px bg-neutral-800 pointer-events-none",style:{left:0,zIndex:10},children:u.jsx("div",{className:"absolute -top-px left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-neutral-800"})})]}),u.jsx("div",{className:"flex flex-col gap-1",children:r.map((v,S)=>{const y=s===S,R=o===S;return u.jsxs("div",{className:`flex items-center gap-2 group cursor-pointer rounded-lg px-1.5 py-1 transition-all ${y?"bg-neutral-50":"hover:bg-neutral-50 opacity-60 hover:opacity-100"}`,onClick:()=>g(v.copyText,S),children:[u.jsx("div",{className:"w-2 h-2 rounded-full flex-shrink-0",style:{backgroundColor:v.color}}),u.jsxs("span",{className:"text-[9px] text-neutral-600 flex-1 truncate",children:[v.name,u.jsxs("span",{className:"text-neutral-400 ml-1.5 tabular-nums",children:[v.duration,"ms"]})]}),u.jsx("div",{className:`transition-opacity ${R?"opacity-100":"opacity-0 group-hover:opacity-100"}`,children:R?u.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"#71717a",strokeWidth:"2.5",strokeLinecap:"round",children:u.jsx("path",{d:"M20 6L9 17l-5-5"})}):u.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"#a1a1aa",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),u.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})})]},S)})}),l&&u.jsx("button",{className:"mt-2 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors",onClick:()=>g(l,-1),children:o===-1?u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"#71717a",strokeWidth:"2.5",strokeLinecap:"round",children:u.jsx("path",{d:"M20 6L9 17l-5-5"})}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-500",children:"Copied"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"#a1a1aa",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),u.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400",children:"Copy Full Description"})]})})]})},Gv=2048,v_=Gv/2,c1=15,u1=80,b_=512,y_=43,S_=1.4,w_=.15,__=12;function n0(r,n,l){let a=0;const s=l-n+1;for(let f=n;f<=l&&f<r.length;f++)a+=r[f];return a/s/255}function C_(){const[r,n]=_.useState("idle"),[l,a]=_.useState(null),[s,f]=_.useState(0),[o,m]=_.useState(0),x=_.useRef(null),p=_.useRef(null),g=_.useRef(null),v=_.useRef(null),S=_.useRef(null),y=_.useRef(0),R=_.useRef(null),w=_.useRef([]),N=_.useRef(0),j=_.useRef(0),A=_.useRef({bass:0,mid:0,high:0,energy:0,isBeat:!1,beatCount:0}),C=_.useCallback(()=>{if(cancelAnimationFrame(y.current),v.current&&(v.current.pause(),v.current.src=""),g.current)try{g.current.disconnect()}catch{}S.current&&(URL.revokeObjectURL(S.current),S.current=null),g.current=null,v.current=null,p.current=null,R.current=null,w.current=[],N.current=0,j.current=0,A.current={bass:0,mid:0,high:0,energy:0,isBeat:!1,beatCount:0}},[]),z=_.useCallback(()=>{const L=p.current,G=R.current;if(!L||!G)return;L.getByteFrequencyData(G);const W=n0(G,0,c1),K=n0(G,c1+1,u1),q=n0(G,u1+1,Math.min(b_,v_-1)),ie=W*.5+K*.3+q*.2,U=w.current;U.push(ie),U.length>y_&&U.shift();let Q=0;for(let ue=0;ue<U.length;ue++)Q+=U[ue];Q/=U.length;let se=!1;N.current>0?N.current--:ie>Q*S_&&ie>w_&&(se=!0,N.current=__,j.current++),A.current={bass:W,mid:K,high:q,energy:ie,isBeat:se,beatCount:j.current},v.current&&m(v.current.currentTime),y.current=requestAnimationFrame(z)},[]),M=_.useCallback(L=>{C(),n("loading"),a(L.name),x.current||(x.current=new AudioContext);const G=x.current;G.state==="suspended"&&G.resume();const W=G.createAnalyser();W.fftSize=Gv,W.smoothingTimeConstant=.8,p.current=W,R.current=new Uint8Array(W.frequencyBinCount);const K=URL.createObjectURL(L);S.current=K;const q=new Audio;q.crossOrigin="anonymous",q.src=K,v.current=q,q.addEventListener("loadedmetadata",()=>{f(q.duration),n("paused")}),q.addEventListener("ended",()=>{n("paused"),cancelAnimationFrame(y.current)});const ie=G.createMediaElementSource(q);ie.connect(W),W.connect(G.destination),g.current=ie,q.load()},[C,z]),k=_.useCallback(()=>{const L=v.current,G=x.current;L&&(G&&G.state==="suspended"&&G.resume(),L.play(),n("playing"),y.current=requestAnimationFrame(z))},[z]),D=_.useCallback(()=>{const L=v.current;L&&(L.pause(),n("paused"),cancelAnimationFrame(y.current))},[]),B=_.useCallback(()=>{r==="playing"?D():r==="paused"&&k()},[r,k,D]),E=_.useCallback(L=>{const G=v.current;G&&(G.currentTime=L,m(L))},[]);return _.useEffect(()=>()=>{C(),x.current&&(x.current.close().catch(()=>{}),x.current=null)},[C]),{analysisRef:A,audioState:r,fileName:l,duration:s,currentTime:o,loadFile:M,play:k,pause:D,toggle:B,seek:E,cleanup:C}}const Oc=[{name:"Calm",energyMin:0,energyMax:.25,gridSize:40,speed:.5,dotRadius:1,stagger:.2},{name:"Groove",energyMin:.25,energyMax:.5,gridSize:28,speed:1,dotRadius:1.4,stagger:.45},{name:"Intense",energyMin:.5,energyMax:.75,gridSize:20,speed:1.6,dotRadius:1.8,stagger:.65},{name:"Frenzy",energyMin:.75,energyMax:1,gridSize:14,speed:2.4,dotRadius:2.4,stagger:.85}],A_=120,R_=480,N_=.42,T_=.32;class j_{constructor(){Wi(this,"zone","dots");Wi(this,"targetZone","dots");Wi(this,"smoothedEnergy",0);Wi(this,"zoneHoldFrames",0);Wi(this,"lastSeenPhase",-1);Wi(this,"dropCooldown",0)}reset(){this.zone="dots",this.targetZone="dots",this.smoothedEnergy=0,this.zoneHoldFrames=0,this.lastSeenPhase=-1,this.dropCooldown=0}update(n,l){this.smoothedEnergy=this.smoothedEnergy*.97+n.energy*.03,this.dropCooldown>0&&this.dropCooldown--;const a=this.smoothedEnergy>N_?"crosses":this.smoothedEnergy<T_?"dots":this.targetZone;if(a!==this.targetZone&&(this.zoneHoldFrames=0,this.targetZone=a),this.targetZone!==this.zone&&this.zone!=="transitioning"?(this.zoneHoldFrames++,this.zoneHoldFrames>=A_&&(this.zone="transitioning")):this.targetZone===this.zone&&(this.zoneHoldFrames=0),this.zone==="dots"&&this.dropCooldown<=0&&n.bass>.75&&n.energy>.55&&n.isBeat)return this.zone="crosses",this.targetZone="crosses",this.zoneHoldFrames=0,this.dropCooldown=R_,this.lastSeenPhase=3,3;const s=l!==this.lastSeenPhase;if(this.lastSeenPhase=l,!s)return null;if(this.zone==="dots"){if(l===2)return 0}else if(this.zone==="crosses"){if(l===0)return 2}else this.targetZone==="crosses"&&l===2?(this.zone="crosses",this.zoneHoldFrames=0):this.targetZone==="dots"&&l===0&&(this.zone="dots",this.zoneHoldFrames=0);return null}}let qo=1,Oo=0;const M_=10;let Fc=0;function D_(){return qo}function E_(){qo=1,Oo=0,Fc=0}function pi(r,n,l){return Math.max(n,Math.min(l,r))}function Tc(r,n,l){return r+(n-r)*l}function k_(r,n){const{bass:l,mid:a,high:s,energy:f}=r;let o=0;for(let M=Oc.length-1;M>=0;M--)if(f>=Oc[M].energyMin){o=M;break}o!==qo?(Oo++,Oo>=M_&&(qo=o,Oo=0)):Oo=0;const m=Oc[qo],x=l*l,p=pi(m.dotRadius+x*1.2,.5,3),g=pi(Math.round(m.gridSize-x*8),12,48),v=pi(Math.round(165+a*70),0,255),S=pi(Math.round(165-a*40+s*30),0,255),y=pi(Math.round(170+s*60-l*30),0,255),R=pi(m.speed+s*.8,.3,3),w=pi(m.stagger+s*.15,0,1);Fc=Fc*.97+f*.03;const N=pi(Fc,0,1),j=Math.round(Tc(3500,1e3,N)),A=Math.round(Tc(3e3,800,N)),C=Math.round(Tc(800,1400,N)),z=Math.round(Tc(600,2200,N));return{gridSize:g,speed:R,dotRadius:p,stagger:w,colorR:v,colorG:S,colorB:y,spreadDuration:j,morphDuration:A,shrinkDuration:C,spinDuration:z}}function f1(r){const n=Math.floor(r/60),l=Math.floor(r%60);return`${n}:${l.toString().padStart(2,"0")}`}const z_=({enabled:r,onToggle:n,audioState:l,fileName:a,duration:s,currentTime:f,onLoadFile:o,onTogglePlay:m,onSeek:x,analysisRef:p,choreographer:g})=>{const v=_.useRef(null),S=_.useRef(null),y=_.useRef(null),R=_.useRef(null),w=_.useRef([]),N=_.useRef(null),j=_.useRef(null),A=_.useRef(0),C=_.useCallback(()=>{if(!r)return;const M=p.current;S.current&&(S.current.style.width=`${M.bass*100}%`),y.current&&(y.current.style.width=`${M.mid*100}%`),R.current&&(R.current.style.width=`${M.high*100}%`);const k=D_();w.current.forEach((L,G)=>{L&&(G===k?(L.style.backgroundColor="#3b82f6",L.style.color="#fff"):(L.style.backgroundColor="#f5f5f5",L.style.color="#a3a3a3"))});const D=g.zone,B=D==="dots",E=D==="crosses";N.current&&(N.current.style.backgroundColor=B?"#7c93ab":"#f5f5f5",N.current.style.color=B?"#fff":"#a3a3a3"),j.current&&(j.current.style.backgroundColor=E?"#ab6e7e":"#f5f5f5",j.current.style.color=E?"#fff":"#a3a3a3"),A.current=requestAnimationFrame(C)},[r,p,g]);_.useEffect(()=>(r&&l==="playing"&&(A.current=requestAnimationFrame(C)),()=>cancelAnimationFrame(A.current)),[r,l,C]);const z=M=>{var D;const k=(D=M.target.files)==null?void 0:D[0];k&&o(k)};return u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:"Music Mode"}),u.jsx("button",{onClick:()=>n(!r),className:`relative w-8 h-4 rounded-full transition-colors ${r?"bg-blue-500":"bg-neutral-200"}`,children:u.jsx("span",{className:`absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform ${r?"translate-x-4.5":"translate-x-0.5"}`})})]}),r&&u.jsxs("div",{className:"flex flex-col gap-2.5",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{ref:v,type:"file",accept:"audio/*",onChange:z,className:"hidden"}),u.jsx("button",{onClick:()=>{var M;return(M=v.current)==null?void 0:M.click()},className:"text-[9px] px-2 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-500 transition-colors flex-shrink-0",children:a?"Change":"Upload"}),a&&u.jsx("span",{className:"text-[9px] text-neutral-400 truncate",children:a})]}),(l==="playing"||l==="paused")&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:m,className:"w-5 h-5 rounded-md bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 transition-colors flex-shrink-0",children:l==="playing"?u.jsxs("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"currentColor",children:[u.jsx("rect",{x:"1",y:"1",width:"2",height:"6",rx:"0.5"}),u.jsx("rect",{x:"5",y:"1",width:"2",height:"6",rx:"0.5"})]}):u.jsx("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"currentColor",children:u.jsx("polygon",{points:"1.5,0.5 7,4 1.5,7.5"})})}),u.jsx("div",{className:"flex-1 flex items-center gap-1.5",children:u.jsx("input",{type:"range",min:0,max:s||1,step:.1,value:f,onChange:M=>x(parseFloat(M.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})}),u.jsxs("span",{className:"text-[8px] text-neutral-400 tabular-nums flex-shrink-0",children:[f1(f),"/",f1(s)]})]}),l==="loading"&&u.jsx("span",{className:"text-[9px] text-neutral-400",children:"Loading..."}),(l==="playing"||l==="paused")&&u.jsxs("div",{className:"flex flex-col gap-1.5",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"text-[8px] text-neutral-400 w-6 flex-shrink-0",children:"Bass"}),u.jsx("div",{className:"flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden",children:u.jsx("div",{ref:S,className:"h-full bg-blue-400 rounded-full transition-none",style:{width:"0%"}})})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"text-[8px] text-neutral-400 w-6 flex-shrink-0",children:"Mid"}),u.jsx("div",{className:"flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden",children:u.jsx("div",{ref:y,className:"h-full bg-green-400 rounded-full transition-none",style:{width:"0%"}})})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"text-[8px] text-neutral-400 w-6 flex-shrink-0",children:"High"}),u.jsx("div",{className:"flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden",children:u.jsx("div",{ref:R,className:"h-full bg-purple-400 rounded-full transition-none",style:{width:"0%"}})})]})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-[8px] text-neutral-400 mb-1",children:"Zone"}),u.jsxs("div",{className:"flex gap-1",children:[u.jsx("div",{ref:N,className:"text-[7px] px-1.5 py-0.5 rounded-full",style:{backgroundColor:"#7c93ab",color:"#fff"},children:"Dots"}),u.jsx("div",{ref:j,className:"text-[7px] px-1.5 py-0.5 rounded-full",style:{backgroundColor:"#f5f5f5",color:"#a3a3a3"},children:"Crosses"})]})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[8px] text-neutral-400 mb-1",children:"Energy"}),u.jsx("div",{className:"flex gap-1",children:Oc.map((M,k)=>u.jsx("div",{ref:D=>{w.current[k]=D},className:"text-[7px] px-1.5 py-0.5 rounded-full",style:{backgroundColor:"#f5f5f5",color:"#a3a3a3"},children:M.name},M.name))})]})]})]})]})},ea=({label:r,value:n,min:l,max:a,step:s,onChange:f})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:s>=1?n:n.toFixed(s>=.1?1:2)})]}),u.jsx("input",{type:"range",min:l,max:a,step:s,value:n,onChange:o=>f(parseFloat(o.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),B_=({params:r,onChange:n,animStateRef:l,musicMode:a,onMusicModeChange:s,phaseOverrideRef:f})=>{const o={shrinkDuration:1200,spinDuration:1e3,...r},{analysisRef:m,audioState:x,fileName:p,duration:g,currentTime:v,loadFile:S,toggle:y,seek:R,cleanup:w}=C_(),N=_.useRef(0),j=_.useRef(new j_),A=_.useRef(null),C=_.useCallback(()=>{var K;if(!a.enabled)return;const E=m.current,L=k_(E);n(L);const G=((K=l==null?void 0:l.current)==null?void 0:K.phase)??0,W=j.current.update(E,G);W!==null&&(f.current={trigger:!0,phase:W}),N.current=requestAnimationFrame(C)},[a.enabled,m,l,o,n,f]);_.useEffect(()=>(a.enabled&&x==="playing"?N.current=requestAnimationFrame(C):cancelAnimationFrame(N.current),()=>cancelAnimationFrame(N.current)),[a.enabled,x,C]);const z=_.useCallback(E=>{E?(A.current={...o},E_(),j.current.reset()):(w(),A.current&&(n(A.current),A.current=null),f.current=null,j.current.reset()),s({...a,enabled:E,audioFile:E?a.audioFile:null})},[o,n,s,a,w,f]),M=_.useCallback(E=>{S(E),s({...a,audioFile:E})},[S,s,a]),k=_.useMemo(()=>[{name:"Spread",duration:o.spreadDuration,color:"#7c93ab",copyText:`[阶段: Spread] 时长: ${o.spreadDuration}ms | 缓动: easeInOutQuart(全局进度) + easeOutQuint(单点进度) | 交错: stagger=${o.stagger}(基于到中心距离的延迟, 中心先到达, 边缘后到达) | 视觉: 所有圆点从画布中心飞向各自的网格位置, opacity 0→1, 半径 ${(o.dotRadius*.67).toFixed(1)}→${o.dotRadius}px`},{name:"Morph",duration:o.morphDuration,color:"#ab8f6e",copyText:`[阶段: Morph] 时长: ${o.morphDuration}ms | 缓动: easeOutQuint(easeInOutCubic(t)) 双重缓动嵌套 | 同步变形(无交错) | 视觉: 圆点半径缩小至15%(${o.dotRadius}→${(o.dotRadius*.15).toFixed(2)}px), 十字臂从0生长至${o.gridSize/2}px, 臂宽从${o.dotRadius}px渐变为1px`},{name:"Shrink",duration:o.shrinkDuration,color:"#9e7eab",copyText:`[阶段: Shrink] 时长: ${o.shrinkDuration}ms | 缓动: easeInOutCubic | 视觉: 十字臂从${o.gridSize/2}px收缩至${(o.gridSize*.2).toFixed(1)}px, 形成独立分离的十字形`},{name:"Spin",duration:o.spinDuration,color:"#ab6e7e",copyText:`[阶段: Spin] 时长: ${o.spinDuration}ms | 缓动: easeInOutCubic | 视觉: 每个独立十字臂绕中心旋转360°, 臂长${(o.gridSize*.2).toFixed(1)}px`},{name:"Hold",duration:600,color:"#6e9e7e",copyText:`[阶段: Hold] 时长: 600ms | 静态显示独立十字形, 臂长${(o.gridSize*.2).toFixed(1)}px, 线宽1px`}],[o.spreadDuration,o.morphDuration,o.shrinkDuration,o.spinDuration,o.stagger,o.dotRadius,o.gridSize]),D=_.useMemo(()=>`[动画: Dot Grid] 总时长: ${o.spreadDuration+o.morphDuration+o.shrinkDuration+o.spinDuration+600}ms (5阶段循环)
网格: ${o.gridSize}px间距, 圆点半径: ${o.dotRadius}px, 颜色: rgb(${o.colorR},${o.colorG},${o.colorB})

阶段1 — Spread (${o.spreadDuration}ms):
  缓动: easeInOutQuart(全局) + easeOutQuint(每个点)
  交错延迟: stagger=${o.stagger} (基于到画布中心的距离, 中心先到达, 边缘后到达)
  视觉: 圆点从画布中心飞向网格位置, opacity 0→1, 半径 ${(o.dotRadius*.67).toFixed(1)}→${o.dotRadius}px

阶段2 — Morph (${o.morphDuration}ms):
  缓动: easeOutQuint(easeInOutCubic(t)) 双重缓动嵌套
  所有点同步变形(无交错)
  视觉: 圆点半径缩小至15%, 四方向十字臂从0生长到${o.gridSize/2}px, 臂宽度从dotRadius渐变到1px

阶段3 — Shrink (${o.shrinkDuration}ms):
  缓动: easeInOutCubic
  视觉: 十字臂从${o.gridSize/2}px收缩至${(o.gridSize*.2).toFixed(1)}px, 形成独立分离的十字形

阶段4 — Spin (${o.spinDuration}ms):
  缓动: easeInOutCubic
  视觉: 每个独立十字臂绕自身中心旋转360°

阶段5 — Hold (600ms):
  静态显示独立十字形`,[o]),B=a.enabled;return u.jsxs(u.Fragment,{children:[l&&u.jsx(x_,{phases:k,animStateRef:l,totalCopyText:D}),u.jsx(z_,{enabled:a.enabled,onToggle:z,audioState:x,fileName:p,duration:g,currentTime:v,onLoadFile:M,onTogglePlay:y,onSeek:R,analysisRef:m,choreographer:j.current}),u.jsxs("div",{className:`bg-white rounded-xl p-3 mb-2 ${B?"opacity-50 pointer-events-none":""}`,children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Grid"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(ea,{label:"Grid Size",value:o.gridSize,min:12,max:48,step:2,onChange:E=>n({...o,gridSize:E})}),u.jsx(ea,{label:"Dot Radius",value:o.dotRadius,min:.5,max:3,step:.1,onChange:E=>n({...o,dotRadius:E})})]})]}),u.jsxs("div",{className:`bg-white rounded-xl p-3 mb-2 ${B?"opacity-50 pointer-events-none":""}`,children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(ea,{label:"Speed",value:o.speed,min:.3,max:3,step:.1,onChange:E=>n({...o,speed:E})}),u.jsx(ea,{label:"Stagger",value:o.stagger,min:0,max:1,step:.05,onChange:E=>n({...o,stagger:E})}),u.jsx(ea,{label:"Spread Duration",value:o.spreadDuration,min:800,max:5e3,step:100,onChange:E=>n({...o,spreadDuration:E})}),u.jsx(ea,{label:"Morph Duration",value:o.morphDuration,min:800,max:5e3,step:100,onChange:E=>n({...o,morphDuration:E})}),u.jsx(ea,{label:"Shrink Duration",value:o.shrinkDuration,min:400,max:3e3,step:100,onChange:E=>n({...o,shrinkDuration:E})}),u.jsx(ea,{label:"Spin Duration",value:o.spinDuration,min:400,max:3e3,step:100,onChange:E=>n({...o,spinDuration:E})})]})]}),u.jsxs("div",{className:`bg-white rounded-xl p-3 mb-2 ${B?"opacity-50 pointer-events-none":""}`,children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(ea,{label:"Red",value:o.colorR,min:0,max:255,step:1,onChange:E=>n({...o,colorR:E})}),u.jsx(ea,{label:"Green",value:o.colorG,min:0,max:255,step:1,onChange:E=>n({...o,colorG:E})}),u.jsx(ea,{label:"Blue",value:o.colorB,min:0,max:255,step:1,onChange:E=>n({...o,colorB:E})})]})]})]})},L_={gridSize:24,speed:1,dotRadius:1.2,stagger:.55,colorR:165,colorG:165,colorB:170,spreadDuration:2400,morphDuration:2200,shrinkDuration:1200,spinDuration:1e3};function nt(r,n,l){return Math.max(n,Math.min(l,r))}function O_(r){let n=2166136261;for(let l=0;l<r.length;l++)n^=r.charCodeAt(l),n=Math.imul(n,16777619);return n>>>0}function F_(r){let n=r|0;return()=>{n=n+1831565813|0;let l=Math.imul(n^n>>>15,1|n);return l^=l+Math.imul(l^l>>>7,61|l),((l^l>>>14)>>>0)/4294967296}}function yt(r,n){return(r()-.5)*2*n}function I_(r,n,l={}){var y,R,w;const a=((y=l.color)==null?void 0:y[0])??180,s=((R=l.color)==null?void 0:R[1])??180,f=((w=l.color)==null?void 0:w[2])??185,o=l.radius??2,m=l.opacity??1,x=nt(l.variation??0,0,1),p=nt(l.chaos??.35,0,1),g=nt(l.textDensity??.75,.2,1),v=l.seed??O_(`${r}_${n}_${l.text??""}`),S=F_(v||1);switch(r){case"scatter":return d1(n,a,s,f,o,m,S,p);case"grid":return G_(n,a,s,f,o,m,x,p,S);case"wave":return U_(n,a,s,f,o,m,x,p,S);case"circle":return P_(n,a,s,f,o,m,x,p,S);case"heart":return H_(n,a,s,f,o,m,x,p,S);case"text":return V_(n,l.text??"love",a,s,f,o,m,l.canvasWidth??800,l.canvasHeight??600,g,S);case"burst":return Y_(n,a,s,f,o,m,x,p,S);case"spiral":return X_(n,a,s,f,o,m,x,p,S);case"converge":return Z_(n,a,s,f,o,m,p,S);case"rain":return W_(n,a,s,f,o,m,x,p,S);case"ripple":return K_(n,a,s,f,o,m,x,p,S);default:return d1(n,a,s,f,o,m,S,p)}}function d1(r,n,l,a,s,f,o,m){const x=[],p=.25+m*.8;for(let g=0;g<r;g++){const v=o()*Math.PI*2,S=Math.pow(o(),.7+(1-m)*1.8)*.5*p;x.push({x:nt(.5+Math.cos(v)*S+yt(o,m*.025),0,1),y:nt(.5+Math.sin(v)*S+yt(o,m*.03),0,1),radius:s*(.5+o()*(.7+m*.5)),opacity:f*(.3+o()*.7),r:n,g:l,b:a})}return x}function G_(r,n,l,a,s,f,o,m,x){const p=Math.ceil(Math.sqrt(r*1.5)),g=Math.ceil(r/p),v=[],S=.08,y=.08,R=Math.max(p-1,1),w=Math.max(g-1,1),N=o*.018;for(let j=0;j<r;j++){const A=j%p,C=Math.floor(j/p),z=S+A/R*(1-2*S),M=y+C/w*(1-2*y),k=Math.sin(A*.35+C*.17+o*Math.PI);v.push({x:nt(z+k*N*.35+yt(x,m*.006),0,1),y:nt(M+k*N+yt(x,m*.008),0,1),radius:s*(.9+o*.15),opacity:f,r:n,g:l,b:a})}return v}function U_(r,n,l,a,s,f,o,m,x){const p=[],g=10+Math.round(o*6),v=Math.ceil(r/g),S=2.3+o*2.4,y=.02+o*.025,R=o*Math.PI*.8;for(let w=0;w<r;w++){const N=Math.floor(w/v),j=w%v,A=.1+N/Math.max(g-1,1)*.8,C=j/Math.max(v-1,1),z=Math.sin(C*Math.PI*S+N*.75+R)*y;p.push({x:nt(.05+C*.9+yt(x,m*.004),0,1),y:nt(A+z+yt(x,m*.01),0,1),radius:s*(.78+o*.12),opacity:f,r:n,g:l,b:a})}return p}function P_(r,n,l,a,s,f,o,m,x){const p=[],g=4+Math.round(o*3);let v=0;for(let S=0;S<g&&v<r;S++){const y=.08+S/Math.max(g-1,1)*(.28+o*.1),R=S===0?1:Math.min(Math.ceil(r/g),r-v);for(let w=0;w<R&&v<r;w++){const N=w/Math.max(R,1)*Math.PI*2+S*o*.18,j=1.1+o*.3;p.push({x:nt(.5+Math.cos(N)*y+yt(x,m*.006),0,1),y:nt(.5+Math.sin(N)*y*j+yt(x,m*.008),0,1),radius:s*(.6+S*.1),opacity:f,r:n,g:l,b:a}),v++}}for(;p.length<r;){const S=p[p.length%Math.max(p.length,1)]??{x:.5,y:.5};p.push({x:nt(S.x+yt(x,.01),0,1),y:nt(S.y+yt(x,.01),0,1),radius:s*.55,opacity:f*.7,r:n,g:l,b:a})}return p}function H_(r,n,l,a,s,f,o,m,x){const p=[];let v=0;for(let S=0;S<4&&v<r;S++){const y=.014+S*.005+o*.002,R=Math.ceil(r/4);for(let w=0;w<R&&v<r;w++){const N=w/Math.max(R,1)*Math.PI*2+S*.1+o*.35,j=16*Math.pow(Math.sin(N),3),A=-(13*Math.cos(N)-5*Math.cos(2*N)-2*Math.cos(3*N)-Math.cos(4*N));p.push({x:nt(.5+j*y+yt(x,m*.006),0,1),y:nt(.48+A*y+yt(x,m*.006),0,1),radius:s*(.68+S*.13),opacity:f*(.58+S*.1),r:n,g:l,b:a}),v++}}return p}const C0=new Map;function q_(r,n,l,a,s,f){const o=`${r}_${n}_${l}_${a}_${s.toFixed(2)}`,m=C0.get(o);if(m)return m;const x=document.createElement("canvas"),p=2;x.width=n*p,x.height=l*p;const g=x.getContext("2d");if(!g)return[];const v=Math.min(n,l)*p*.42*(.85+s*.25)/Math.max(r.length,1);g.font=`bold ${Math.max(v,22)}px "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif`,g.textAlign="center",g.textBaseline="middle",g.fillStyle="#000",g.fillText(r,x.width/2,x.height/2);const S=g.getImageData(0,0,x.width,x.height),y=[],R=Math.max(2,Math.round(5-s*3));for(let N=0;N<x.height;N+=R)for(let j=0;j<x.width;j+=R)S.data[(N*x.width+j)*4+3]>128&&y.push({x:j/x.width,y:N/x.height});const w=[];if(y.length===0)return w;if(y.length<=a)for(w.push(...y);w.length<a;){const N=y[Math.floor(f()*y.length)];w.push({x:nt(N.x+yt(f,.004),0,1),y:nt(N.y+yt(f,.004),0,1)})}else{const N=[...y];for(let j=N.length-1;j>0;j--){const A=Math.floor(f()*(j+1));[N[j],N[A]]=[N[A],N[j]]}w.push(...N.slice(0,a))}return C0.set(o,w),w}function V_(r,n,l,a,s,f,o,m,x,p,g){return q_(n,m,x,r,p,g).map(S=>({x:S.x,y:S.y,radius:f*(.75+p*.1),opacity:o,r:l,g:a,b:s}))}function Y_(r,n,l,a,s,f,o,m,x){const p=[],g=.3+o*.2;for(let v=0;v<r;v++){const S=x()*Math.PI*2,y=.08+Math.pow(x(),.45+m*.9)*g;p.push({x:nt(.5+Math.cos(S)*y+yt(x,m*.02),0,1),y:nt(.5+Math.sin(S)*y*(1.05+o*.25)+yt(x,m*.02),0,1),radius:s*(.35+x()*1.1),opacity:f*(.45+x()*.55),r:n,g:l,b:a})}return p}function X_(r,n,l,a,s,f,o,m,x){const p=[],g=3+o*2.5;for(let v=0;v<r;v++){const S=v/Math.max(r-1,1),y=S*Math.PI*2*g,R=.02+S*(.3+o*.14);p.push({x:nt(.5+Math.cos(y)*R+yt(x,m*.01),0,1),y:nt(.5+Math.sin(y)*R+yt(x,m*.01),0,1),radius:s*(.48+S*(.75+o*.2)),opacity:f*(.5+S*.5),r:n,g:l,b:a})}return p}function Z_(r,n,l,a,s,f,o,m){const x=[],p=.035+o*.04;for(let g=0;g<r;g++){const v=m()*Math.PI*2,S=m()*p;x.push({x:.5+Math.cos(v)*S,y:.5+Math.sin(v)*S,radius:s*1.45,opacity:f,r:n,g:l,b:a})}return x}function W_(r,n,l,a,s,f,o,m,x){const p=[];for(let g=0;g<r;g++){const v=(g+x())/Math.max(r-1,1);p.push({x:nt(v+yt(x,.06+m*.04),0,1),y:nt(x(),0,1),radius:s*(.35+x()*(.45+o*.2)),opacity:f*(.22+x()*.5),r:n,g:l,b:a})}return p}function K_(r,n,l,a,s,f,o,m,x){const p=[],g=6+Math.round(o*4);let v=0;for(let S=0;S<g&&v<r;S++){const y=.04+S/Math.max(g-1,1)*(.36+o*.08),R=Math.max(10,Math.floor(r/g*(.55+S/Math.max(g-1,1))));for(let w=0;w<R&&v<r;w++){const N=w/R*Math.PI*2+o*S*.2;p.push({x:nt(.5+Math.cos(N)*y+yt(x,m*.008),0,1),y:nt(.5+Math.sin(N)*y+yt(x,m*.008),0,1),radius:s*(.52+(1-S/g)*.75),opacity:f*(.45+(1-S/g)*.55),r:n,g:l,b:a}),v++}}for(;p.length<r;){const S=x()*Math.PI*2,y=x()*.4;p.push({x:.5+Math.cos(S)*y,y:.5+Math.sin(S)*y,radius:s*.5,opacity:f*.3,r:n,g:l,b:a})}return p}function Q_(){C0.clear()}const gi=[210,130,110],xi=[190,90,90],vi=[140,165,195],jc=[170,185,200],bi=[180,180,185],yi=[210,175,110],Si=[195,110,130],$_=[{time:0,formation:"converge",transitionMs:100,easing:"linear",color:bi,radius:.5,opacity:0,stagger:0,beatPulse:0,label:"Silence - dots invisible at center"},{time:.5,formation:"scatter",transitionMs:4e3,easing:"easeOutQuint",color:jc,radius:1.2,opacity:.3,stagger:.8,beatPulse:0,label:"Intro: gentle scatter emergence"},{time:5,formation:"wave",transitionMs:4e3,easing:"easeInOutCubic",color:vi,radius:1.5,opacity:.5,stagger:.6,beatPulse:.1,label:"Intro: settle into gentle waves"},{time:12,formation:"ripple",transitionMs:4e3,easing:"easeInOutCubic",color:jc,radius:1.5,opacity:.6,stagger:.7,beatPulse:.15,label:"Intro: ripple outward"},{time:20,formation:"spiral",transitionMs:5e3,easing:"easeInOutQuart",color:vi,radius:1.6,opacity:.65,stagger:.5,beatPulse:.2,label:"Intro: spiral, building anticipation"},{time:29,formation:"grid",transitionMs:2500,easing:"easeInOutCubic",color:bi,radius:1.8,opacity:.8,stagger:.55,beatPulse:.25,label:"V1: 道不尽红尘舍恋 - ordered grid (structure of fate)"},{time:35,formation:"wave",transitionMs:3e3,easing:"easeInOutCubic",color:vi,radius:1.8,opacity:.85,stagger:.45,beatPulse:.3,label:"V1: 诉不完人间恩怨 - waves (emotion flowing)"},{time:40.5,formation:"scatter",transitionMs:2500,easing:"easeOutQuint",color:gi,radius:2,opacity:.8,stagger:.6,beatPulse:.3,label:"V1: 世世代代都是缘 - scatter (countless connections)"},{time:46,formation:"circle",transitionMs:3e3,easing:"easeInOutQuart",color:vi,radius:1.8,opacity:.85,stagger:.5,beatPulse:.25,label:"V1: 留一半清醒 - circles (containment/clarity)"},{time:52,formation:"spiral",transitionMs:3e3,easing:"easeInOutCubic",color:gi,radius:2,opacity:.9,stagger:.4,beatPulse:.3,label:"V1: 问世间情为何物 - spiral inward (questioning)"},{time:57,formation:"ripple",transitionMs:3e3,easing:"easeOutQuint",color:xi,radius:2.2,opacity:.85,stagger:.65,beatPulse:.35,label:"V1: 直叫人生死相许 - ripple (echoing question)"},{time:62,formation:"grid",transitionMs:2500,easing:"easeInOutCubic",color:bi,radius:1.6,opacity:.8,stagger:.5,beatPulse:.3,label:"V2: 看人间多少故事 - grid (observing stories)"},{time:68,formation:"wave",transitionMs:2500,easing:"easeInOutCubic",color:vi,radius:1.8,opacity:.85,stagger:.4,beatPulse:.35,label:"V2: 最销魂是 - flowing waves"},{time:73,formation:"text",text:"美人",transitionMs:2800,easing:"easeOutQuint",color:Si,radius:2,opacity:.95,stagger:.55,beatPulse:.3,label:"V2: 美人 reveal!"},{time:78,formation:"circle",transitionMs:2500,easing:"easeInOutCubic",color:gi,radius:2,opacity:.9,stagger:.45,beatPulse:.35,label:"V2: 为她/你痴为她/你狂 - circles tightening"},{time:84,formation:"spiral",transitionMs:2500,easing:"easeInOutQuart",color:xi,radius:2.2,opacity:.9,stagger:.5,beatPulse:.4,label:"Pre-chorus: building spiral (tension rising)"},{time:90,formation:"converge",transitionMs:2e3,easing:"easeInBack",color:yi,radius:2.5,opacity:1,stagger:.3,beatPulse:.5,label:"Pre-chorus: converge (gathering energy for chorus)"},{time:95,formation:"burst",transitionMs:1200,easing:"easeOutBack",color:yi,radius:2.8,opacity:1,stagger:.7,beatPulse:.6,label:"CHORUS: 偷得半日闲 - BURST! (explosion of energy)"},{time:99,formation:"wave",transitionMs:2e3,easing:"easeInOutCubic",color:gi,radius:2.5,opacity:1,stagger:.4,beatPulse:.5,label:"CHORUS: 醉煞这 - riding the wave"},{time:104,formation:"text",text:"江山",transitionMs:2200,easing:"easeOutQuint",color:yi,radius:2.5,opacity:1,stagger:.5,beatPulse:.5,label:"CHORUS: 江山 reveal!"},{time:109,formation:"burst",transitionMs:1500,easing:"easeOutBack",color:xi,radius:2.8,opacity:1,stagger:.65,beatPulse:.55,label:"CHORUS: burst transition"},{time:113,formation:"heart",transitionMs:2500,easing:"easeOutQuint",color:Si,radius:2.5,opacity:1,stagger:.5,beatPulse:.5,label:"CHORUS: 半点朱唇 - heart shape (love)"},{time:118,formation:"text",text:"爱",transitionMs:2e3,easing:"easeOutQuint",color:Si,radius:3,opacity:1,stagger:.6,beatPulse:.55,label:"CHORUS: 爱 reveal! (CLIMAX)"},{time:123,formation:"burst",transitionMs:1e3,easing:"easeOutBack",color:yi,radius:3,opacity:1,stagger:.8,beatPulse:.65,label:"CHORUS: 爱江山更爱美人 - explosive burst"},{time:127,formation:"text",text:"爱美人",transitionMs:2500,easing:"easeOutQuint",color:xi,radius:2.8,opacity:1,stagger:.55,beatPulse:.5,label:"CHORUS: 爱美人 text"},{time:133,formation:"heart",transitionMs:3e3,easing:"easeInOutCubic",color:Si,radius:2.5,opacity:.95,stagger:.4,beatPulse:.4,label:"CHORUS: ending heart (chorus winds down)"},{time:139,formation:"ripple",transitionMs:4e3,easing:"easeInOutCubic",color:jc,radius:1.8,opacity:.7,stagger:.6,beatPulse:.15,label:"Interlude: gentle ripple (exhale)"},{time:148,formation:"spiral",transitionMs:5e3,easing:"easeInOutQuart",color:vi,radius:1.6,opacity:.65,stagger:.5,beatPulse:.2,label:"Interlude: slow spiral"},{time:158,formation:"wave",transitionMs:4e3,easing:"easeInOutCubic",color:bi,radius:1.5,opacity:.6,stagger:.45,beatPulse:.15,label:"Interlude: gentle waves ending"},{time:167,formation:"grid",transitionMs:3e3,easing:"easeInOutCubic",color:bi,radius:1.6,opacity:.7,stagger:.5,beatPulse:.2,label:"Interlude→V3: settling into grid"},{time:173,formation:"scatter",transitionMs:2500,easing:"easeOutQuint",color:vi,radius:1.8,opacity:.8,stagger:.5,beatPulse:.3,label:"V3: 道不尽红尘舍恋 - scatter (familiar but evolved)"},{time:179,formation:"wave",transitionMs:2500,easing:"easeInOutCubic",color:gi,radius:2,opacity:.85,stagger:.4,beatPulse:.35,label:"V3: 诉不完人间恩怨 - waves (deeper emotion)"},{time:185,formation:"circle",transitionMs:2500,easing:"easeInOutCubic",color:bi,radius:2,opacity:.85,stagger:.45,beatPulse:.3,label:"V3: 世世代代都是缘 - circles"},{time:191,formation:"ripple",transitionMs:3e3,easing:"easeOutQuint",color:vi,radius:1.8,opacity:.85,stagger:.55,beatPulse:.3,label:"V3: 留一半清醒 - ripple"},{time:197,formation:"spiral",transitionMs:3e3,easing:"easeInOutQuart",color:xi,radius:2.2,opacity:.9,stagger:.4,beatPulse:.35,label:"V3: 问世间情为何物 - spiral"},{time:206,formation:"grid",transitionMs:2500,easing:"easeInOutCubic",color:bi,radius:1.8,opacity:.85,stagger:.45,beatPulse:.35,label:"V4: 看人间多少故事 - grid"},{time:212,formation:"wave",transitionMs:2500,easing:"easeInOutCubic",color:gi,radius:2,opacity:.9,stagger:.4,beatPulse:.35,label:"V4: 最销魂是 - waves"},{time:217,formation:"text",text:"美人",transitionMs:2500,easing:"easeOutQuint",color:Si,radius:2.2,opacity:.95,stagger:.5,beatPulse:.35,label:"V4: 美人 reveal"},{time:222,formation:"heart",transitionMs:2500,easing:"easeInOutCubic",color:gi,radius:2,opacity:.9,stagger:.45,beatPulse:.4,label:"V4: 为她痴 - heart"},{time:228,formation:"spiral",transitionMs:2500,easing:"easeInOutQuart",color:xi,radius:2.2,opacity:.95,stagger:.45,beatPulse:.45,label:"Pre-chorus 2: building spiral"},{time:234,formation:"converge",transitionMs:2e3,easing:"easeInBack",color:yi,radius:2.5,opacity:1,stagger:.3,beatPulse:.5,label:"Pre-chorus 2: converge for chorus"},{time:239,formation:"burst",transitionMs:1e3,easing:"easeOutBack",color:yi,radius:3,opacity:1,stagger:.75,beatPulse:.65,label:"CHORUS 2: BURST! (bigger explosion)"},{time:243,formation:"wave",transitionMs:1800,easing:"easeInOutCubic",color:gi,radius:2.8,opacity:1,stagger:.4,beatPulse:.55,label:"CHORUS 2: riding the wave"},{time:248,formation:"text",text:"江山",transitionMs:2e3,easing:"easeOutQuint",color:yi,radius:2.8,opacity:1,stagger:.5,beatPulse:.55,label:"CHORUS 2: 江山 reveal"},{time:253,formation:"burst",transitionMs:1200,easing:"easeOutBack",color:xi,radius:3,opacity:1,stagger:.7,beatPulse:.6,label:"CHORUS 2: transition burst"},{time:257,formation:"heart",transitionMs:2200,easing:"easeOutQuint",color:Si,radius:2.8,opacity:1,stagger:.5,beatPulse:.55,label:"CHORUS 2: heart (love theme)"},{time:262,formation:"text",text:"爱",transitionMs:1800,easing:"easeOutQuint",color:Si,radius:3.2,opacity:1,stagger:.6,beatPulse:.6,label:"CHORUS 2: 爱 CLIMAX!"},{time:267,formation:"burst",transitionMs:800,easing:"easeOutBack",color:yi,radius:3.2,opacity:1,stagger:.85,beatPulse:.7,label:"CHORUS 2: 爱江山更爱美人 PEAK BURST!"},{time:271,formation:"text",text:"爱美人",transitionMs:2500,easing:"easeOutQuint",color:xi,radius:3,opacity:1,stagger:.55,beatPulse:.55,label:"CHORUS 2: 爱美人 text reveal"},{time:282,formation:"heart",transitionMs:3e3,easing:"easeInOutCubic",color:Si,radius:2.5,opacity:.9,stagger:.4,beatPulse:.35,label:"Final: settling into heart"},{time:290,formation:"ripple",transitionMs:4e3,easing:"easeInOutCubic",color:jc,radius:1.8,opacity:.6,stagger:.5,beatPulse:.15,label:"Final: gentle ripple (afterglow)"},{time:297,formation:"converge",transitionMs:5e3,easing:"easeInOutQuart",color:bi,radius:1,opacity:.3,stagger:.6,beatPulse:0,label:"Final: dots converge and fade (ending)"}];function J_(r){return r<29?"intro":r<84?"verse":r<95?"prechorus":r<139?"chorus":r<173?"interlude":r<228?"verse":r<239?"prechorus":r<282?"chorus":"outro"}function eC(r){return r.formation==="grid"||r.formation==="converge"?"order":r.formation==="wave"||r.formation==="ripple"||r.formation==="spiral"?"flow":r.formation==="heart"||r.formation==="text"?"desire":r.formation==="burst"?"peak":"resolve"}function tC(r){return r==="chorus"?.5:r==="prechorus"?1:r==="outro"?2:1}function nC(r,n){return r.formation==="burst"||r.formation==="converge"?"kick":r.formation==="text"||r.formation==="heart"?"snare":r.formation==="ripple"||r.formation==="rain"?"hat":n==="chorus"?"full":"kick"}const Ua=$_.map((r,n)=>{const l=r.section??J_(r.time);return{...r,section:l,motif:r.motif??eC(r),variation:r.variation??n%5/5,quantizeBeats:r.quantizeBeats??tC(l),accent:r.accent??nC(r,l),intensity:r.intensity??Math.max(.15,Math.min(1,r.beatPulse+.2))}}),m1=[{id:"hook15",label:"15s Hook",start:118,duration:15,description:"副歌核心句：爱字成形到爱美人收束"},{id:"story30",label:"30s Story",start:90,duration:30,description:"预副歌蓄势到第一次副歌爆发"},{id:"peak30",label:"30s Peak",start:239,duration:30,description:"第二次副歌高能段，适合展示节奏驱动"}];function Uv(r){let n=0;for(let l=Ua.length-1;l>=0;l--)if(r>=Ua[l].time){n=l;break}return n}function aC(r){const n=Uv(r);return{event:Ua[n],nextEvent:n<Ua.length-1?Ua[n+1]:null,index:n}}const Ro={narrativeIntensity:.68,rhythmTightness:.66,motifConsistency:.78,textDensity:.65,atmosphere:.6},iC={intro:{narrativeIntensity:.48,rhythmTightness:.38,motifConsistency:.9,textDensity:.35,atmosphere:.82},verse:{narrativeIntensity:.62,rhythmTightness:.58,motifConsistency:.84,textDensity:.56,atmosphere:.66},prechorus:{narrativeIntensity:.76,rhythmTightness:.72,motifConsistency:.78,textDensity:.66,atmosphere:.56},chorus:{narrativeIntensity:.9,rhythmTightness:.87,motifConsistency:.7,textDensity:.84,atmosphere:.48},interlude:{narrativeIntensity:.52,rhythmTightness:.45,motifConsistency:.88,textDensity:.4,atmosphere:.75},outro:{narrativeIntensity:.4,rhythmTightness:.34,motifConsistency:.92,textDensity:.32,atmosphere:.86}},lC={balanced:{},rhythm:{rhythmTightness:.12,narrativeIntensity:-.05,motifConsistency:-.08,textDensity:-.08,atmosphere:-.08},story:{rhythmTightness:-.08,narrativeIntensity:.12,motifConsistency:.05,textDensity:.1,atmosphere:.08}},rC={intro:.52,verse:.7,prechorus:.8,chorus:.95,interlude:.62,outro:.44},oC={intro:1.35,verse:1.85,prechorus:2.15,chorus:2.55,interlude:1.65,outro:1.15},sC={intro:[246,247,250],verse:[243,245,249],prechorus:[238,242,247],chorus:[231,238,244],interlude:[245,247,250],outro:[248,248,250]};function ot(r,n,l){return Math.max(n,Math.min(l,r))}function No(r,n,l){return r+(n-r)*l}function cC(r,n){const l=lC[n];return{narrativeIntensity:ot(r.narrativeIntensity+(l.narrativeIntensity??0),0,1),rhythmTightness:ot(r.rhythmTightness+(l.rhythmTightness??0),0,1),motifConsistency:ot(r.motifConsistency+(l.motifConsistency??0),0,1),textDensity:ot(r.textDensity+(l.textDensity??0),0,1),atmosphere:ot(r.atmosphere+(l.atmosphere??0),0,1)}}function Ic(r,n,l){const a=n.section??"verse",s=cC(iC[a],r.directionProfile),f=ot(l.energy,0,1),o=ot(l.onset,0,1),m={narrativeIntensity:ot(s.narrativeIntensity+f*.12+(l.midBeat?.05:0),0,1),rhythmTightness:ot(s.rhythmTightness+o*.2+(l.lowBeat?.08:0)+(l.highBeat?.03:0),0,1),motifConsistency:ot(s.motifConsistency-o*.16-(a==="chorus"?.04:0),0,1),textDensity:ot(s.textDensity+(l.midBeat?.04:0)+(a==="chorus"?.06:0),0,1),atmosphere:ot(s.atmosphere+(.36-f)*.24,0,1)},p=.35+ot(r.directionStrength,0,1)*.65;return{narrativeIntensity:ot(No(Ro.narrativeIntensity,m.narrativeIntensity,p),0,1),rhythmTightness:ot(No(Ro.rhythmTightness,m.rhythmTightness,p),0,1),motifConsistency:ot(No(Ro.motifConsistency,m.motifConsistency,p),0,1),textDensity:ot(No(Ro.textDensity,m.textDensity,p),0,1),atmosphere:ot(No(Ro.atmosphere,m.atmosphere,p),0,1)}}function A0(r,n,l,a){const s=rC[l],f=r.directionProfile==="rhythm"?.08:r.directionProfile==="story"?-.04:0,o=ot(s+f+n.narrativeIntensity*.08+a.energy*.12+a.onset*.1-a.mud*.14,.3,1);let m=Math.round(420+o*1880);r.directionProfile==="rhythm"&&(m+=Math.round(a.onset*120)),m=Math.round(ot(m,360,2400));const x=ot(oC[l]+a.bass*1.05+n.rhythmTightness*.35+a.onset*.22-a.mud*.2,.9,4.4),p=sC[l],g=6+a.energy*26+n.rhythmTightness*8+a.mud*12;let v=p[0]-g,S=p[1]-g*.95,y=p[2]-g*.88;r.directionProfile==="rhythm"?(v-=4,S-=3,y-=1):r.directionProfile==="story"&&(v+=8,S+=3,y-=4);const R=a.lowBeat||a.midBeat?6:0;return v+=R,S+=R*.8,y+=R*.6,{dotCount:m,baseRadius:x,bgR:Math.round(ot(v,0,255)),bgG:Math.round(ot(S,0,255)),bgB:Math.round(ot(y,0,255))}}const h1={bass:0,mud:0,mid:0,high:0,energy:0,onset:0,isBeat:!1,lowBeat:!1,midBeat:!1,highBeat:!1,lookAheadKick:0,lookAheadSnare:0,lookAheadHat:0,anticipation:0,bpm:96,beatInBar:0,barProgress:0},R0={linear:r=>r,easeInOutCubic:r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,easeOutQuint:r=>1-Math.pow(1-r,5),easeInOutQuart:r=>r<.5?8*r*r*r*r:1-Math.pow(-2*r+2,4)/2,easeOutBounce:r=>r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-1.5/2.75)*(r-1.5/2.75)+.75:r<2.5/2.75?7.5625*(r-2.25/2.75)*(r-2.25/2.75)+.9375:7.5625*(r-2.625/2.75)*(r-2.625/2.75)+.984375,easeInBack:r=>(1.70158+1)*r*r*r-1.70158*r*r,easeOutBack:r=>1+(1.70158+1)*Math.pow(r-1,3)+1.70158*Math.pow(r-1,2),easeInOutBack:r=>{const n=2.5949095;return r<.5?Math.pow(2*r,2)*((n+1)*2*r-n)/2:(Math.pow(2*r-2,2)*((n+1)*(2*r-2)+n)+2)/2}};function uC(r){return R0[r]||R0.easeInOutCubic}function Sn(r,n,l){return r+(n-r)*l}function Ue(r,n,l){return Math.max(n,Math.min(l,r))}function At(r,n=0){return Number.isFinite(r)?r:n}function p1(r){let n=2166136261;for(let l=0;l<r.length;l++)n^=r.charCodeAt(l),n=Math.imul(n,16777619);return n>>>0}function a0(r,n){return r==="full"?1:r===n?1.35:.82}function i0(r,n){const l=(r%1+1)%1;return Math.exp(-l*n)}function fC(r,n,l,a){const s=n.quantizeBeats??0;if(s<=0||a<.12)return r;const o=60/Ue(l||96,72,176),m=o*s;if(m<=.001)return r;const x=Math.ceil(r/m)*m,p=x-r,g=o*(.24+a*1.6);return p<=g?x:r}function g1(r){const n=[];for(let l=0;l<r;l++)n.push({x:.5,y:.5,radius:.5,opacity:0,r:180,g:180,b:185,fromX:.5,fromY:.5,fromRadius:.5,fromOpacity:0,fromR:180,fromG:180,fromB:185,toX:.5,toY:.5,toRadius:.5,toOpacity:0,toR:180,toG:180,toB:185,delay:0});return n}function dC(r,n,l){const a=r.map((f,o)=>o);a.sort((f,o)=>{const m=Math.hypot(r[f].x-.5,r[f].y-.5),x=Math.hypot(r[o].x-.5,r[o].y-.5);return m-x});const s=[...n];s.sort((f,o)=>{const m=Math.hypot(f.x-.5,f.y-.5),x=Math.hypot(o.x-.5,o.y-.5);return m-x});for(let f=0;f<a.length;f++){const o=a[f],m=s[f%s.length],x=r[o];x.fromX=x.x,x.fromY=x.y,x.fromRadius=x.radius,x.fromOpacity=x.opacity,x.fromR=x.r,x.fromG=x.g,x.fromB=x.b,x.toX=m.x,x.toY=m.y,x.toRadius=m.radius,x.toOpacity=m.opacity,x.toR=m.r,x.toG=m.g,x.toB=m.b,x.delay=f/Math.max(a.length,1)*l}}const mC=({params:r,audioTimeRef:n,analysisRef:l,isPlaying:a})=>{const s=_.useRef(null),f=_.useRef({w:0,h:0}),o=_.useRef(g1(r.dotCount)),m=_.useRef(r);m.current=r;const x=_.useRef({dotCount:r.dotCount,baseRadius:r.baseRadius,bgR:r.bgR,bgG:r.bgG,bgB:r.bgB}),p=_.useRef({eventIndex:-1,pendingIndex:-1,pendingStart:0,transitionStart:0,transitionMs:2e3,easingFn:R0.easeInOutCubic,beatPulse:.35,stagger:.5,accent:"full",intensity:.5,section:"intro",direction:{narrativeIntensity:.68,rhythmTightness:.66,motifConsistency:.78,textDensity:.65,atmosphere:.6}}),g=_.useRef({kick:0,snare:0,hat:0,global:0});_.useEffect(()=>{o.current.length!==r.dotCount&&(o.current=g1(r.dotCount),p.current.eventIndex=-1,p.current.pendingIndex=-1,x.current.dotCount=r.dotCount)},[r.dotCount]);const v=_.useCallback(()=>{const S=s.current;if(!S)return;const y=S.getContext("2d");if(!y)return;const{w:R,h:w}=f.current;if(R<=0||w<=0)return;const N=m.current,j=o.current,A=l.current??h1,C={...h1,...A,bass:Ue(At(A.bass),0,1),mud:Ue(At(A.mud),0,1),mid:Ue(At(A.mid),0,1),high:Ue(At(A.high),0,1),energy:Ue(At(A.energy),0,1),onset:Ue(At(A.onset),0,1),isBeat:!!A.isBeat,lowBeat:!!A.lowBeat,midBeat:!!A.midBeat,highBeat:!!A.highBeat,lookAheadKick:Ue(At(A.lookAheadKick),0,1),lookAheadSnare:Ue(At(A.lookAheadSnare),0,1),lookAheadHat:Ue(At(A.lookAheadHat),0,1),anticipation:Ue(At(A.anticipation),0,1),bpm:Ue(At(A.bpm,96),60,220),beatInBar:(Math.floor(At(A.beatInBar))%4+4)%4,barProgress:Ue(At(A.barProgress),0,1)},z=n.current??0,M=p.current,k=(je,be)=>{const we=Ua[je];if(!we)return;const de=Ic(N,we,C),at=A0(N,de,we.section??"verse",C),Me=Ue((we.intensity??.5)*(.7+de.narrativeIntensity*.7),.1,1.25),jn=de.motifConsistency,un=Ue((1-jn)*.85+(we.variation??0)*.35,0,1);let Vt=we.formation;Vt==="text"&&de.textDensity<.38&&(we.variation??0)>.45&&(Vt=we.motif==="desire"?"heart":"wave");const It=p1(`${we.motif??we.formation}_${we.text??""}`),Yt=p1(`${we.time}_${we.formation}_${we.text??""}`),Xt=Math.round(Sn(Yt,It,jn));M.eventIndex=je,M.transitionStart=be,M.transitionMs=Math.max(120,we.transitionMs*(1.15-de.rhythmTightness*.32)),M.easingFn=uC(we.easing),M.beatPulse=we.beatPulse*(.7+Me*.55),M.stagger=Ue(we.stagger*(.85+(1-de.rhythmTightness)*.35),0,1),M.accent=we.accent??"full",M.intensity=Me,M.section=we.section??"verse",M.direction=de;const fn=I_(Vt,j.length,{text:we.text,color:we.color,radius:at.baseRadius*(.88+Me*.34),opacity:Ue((we.opacity??1)*(.82+Me*.35),.05,1),canvasWidth:R,canvasHeight:w,seed:Xt,variation:we.variation,chaos:un,textDensity:de.textDensity});dC(j,fn,M.stagger)},D=Uv(z);if(M.eventIndex<0)k(D,z),M.pendingIndex=-1;else if(D<M.eventIndex)k(D,z),M.pendingIndex=-1;else if(D>M.eventIndex){if(D-M.eventIndex>1||!a)k(D,z),M.pendingIndex=-1;else if(M.pendingIndex!==D){const be=Ua[D],we=Ic(N,be,C),de=fC(z,be,C.bpm,we.rhythmTightness);M.pendingIndex=D,M.pendingStart=de}}if(M.pendingIndex>=0&&z>=M.pendingStart){const je=M.pendingIndex;M.pendingIndex=-1,k(je,M.pendingStart)}const B=M.eventIndex>=0?M.eventIndex:D,E=Ua[B]??Ua[0],L=Ic(N,E,C),G=A0(N,L,E.section??"verse",C);x.current.dotCount=Sn(x.current.dotCount,G.dotCount,.08),x.current.baseRadius=Sn(x.current.baseRadius,G.baseRadius,.1),x.current.bgR=Sn(x.current.bgR,G.bgR,.08),x.current.bgG=Sn(x.current.bgG,G.bgG,.08),x.current.bgB=Sn(x.current.bgB,G.bgB,.08);const W=(z-M.transitionStart)*1e3,K=Ue(W/Math.max(M.transitionMs,1),0,1),q=g.current;q.kick=At(q.kick),q.snare=At(q.snare),q.hat=At(q.hat),q.global=At(q.global),C.lowBeat&&(q.kick=Math.max(q.kick,M.beatPulse*a0(M.accent,"kick"))),C.midBeat&&(q.snare=Math.max(q.snare,M.beatPulse*a0(M.accent,"snare"))),C.highBeat&&(q.hat=Math.max(q.hat,M.beatPulse*a0(M.accent,"hat"))),C.isBeat&&(q.global=Math.max(q.global,M.beatPulse*.58));const ie=C.lookAheadKick*M.beatPulse*.32,U=C.lookAheadSnare*M.beatPulse*.26,Q=C.lookAheadHat*M.beatPulse*.2;q.kick=Math.max(q.kick,ie),q.snare=Math.max(q.snare,U),q.hat=Math.max(q.hat,Q);const se=(C.barProgress*4%1+1)%1,ue=(C.barProgress*8%1+1)%1,pe=L,O=Ue(C.anticipation,0,1),P=O*.12,J=i0((se-P+1)%1,8+pe.rhythmTightness*12),te=i0((ue-P*.8+1)%1,12+pe.rhythmTightness*14),ae=i0((se+.5-P*.6+1)%1,9+pe.rhythmTightness*10),le=C.beatInBar===0?1.22:C.beatInBar===2?1.02:.86;q.kick=Math.max(q.kick,J*M.beatPulse*.4*le),q.snare=Math.max(q.snare,ae*M.beatPulse*.3),q.hat=Math.max(q.hat,te*M.beatPulse*.25),q.global=Math.max(q.global,O*M.beatPulse*.22);const oe=Ue(.92-pe.rhythmTightness*.075-C.mud*.04,.78,.95);q.kick*=oe,q.snare*=oe*.93,q.hat*=oe*.87,q.global*=oe*.9;const me=At(pe.atmosphere,.6),re=Math.round(x.current.bgR),fe=Math.round(x.current.bgG),Ae=Math.round(x.current.bgB),Oe=Ue(At(.24-me*.14+q.global*.03+O*.02,.18),.06,.35);if(y.globalCompositeOperation="source-over",y.fillStyle=`rgba(${re}, ${fe}, ${Ae}, ${Oe})`,y.fillRect(0,0,R,w),me>.05){const je=y.createRadialGradient(R*.5,w*(.4+C.barProgress*.2),0,R*.5,w*.5,Math.max(R,w)*.7),be=Ue(At(.03+q.global*.05+O*.03,.04),0,1);je.addColorStop(0,`rgba(255, 240, 220, ${be})`),je.addColorStop(1,"rgba(255, 255, 255, 0)"),y.fillStyle=je,y.fillRect(0,0,R,w)}y.globalCompositeOperation=M.section==="chorus"?"lighter":"source-over";const Se=q.kick*(.75+C.bass*.72+O*.1),ce=q.snare*(.6+C.mid*.75+O*.08),ke=q.hat*(.5+C.high*.85+O*.06),Le=x.current.baseRadius/Math.max(N.baseRadius,.01),Qe=Ue(Math.round(x.current.dotCount),80,j.length),ge=Ue((.7+ke*.9+O*.55)*(1-C.mud*.45),.45,1.7);for(let je=0;je<Qe;je++){const be=j[je],we=Ue((K-be.delay)/(1-be.delay+.001),0,1),de=M.easingFn(we);be.x=Sn(be.fromX,be.toX,de),be.y=Sn(be.fromY,be.toY,de),be.radius=Sn(be.fromRadius,be.toRadius,de),be.opacity=Sn(be.fromOpacity,be.toOpacity,de),be.r=Sn(be.fromR,be.toR,de),be.g=Sn(be.fromG,be.toG,de),be.b=Sn(be.fromB,be.toB,de);const at=Math.hypot(be.x-.5,be.y-.5),Me=Ue(at/.72,0,1),jn=1-Me,un=Se*(.22+jn*.45)+ce*.22+ke*(.06+Me*.06)+C.onset*.08+O*.06-C.mud*.08,Vt=be.radius*Le*(1+un),It=Ue(be.opacity+ce*.24+ke*.12*Me+Se*.1+O*.05-C.mud*.06,0,1),Yt=ke*(.4+Me*.9)*(.5+me*.9)*(1+O*.6)*(1-C.mud*.45),Xt=be.x*R+Math.sin(z*(31*ge)+je*.71)*Yt,fn=be.y*w+Math.cos(z*(27*ge)+je*.59)*Yt;if(Vt<.2||It<.01)continue;const dn=Math.round((ce*18+ke*24*Me+C.onset*16+O*14-C.mud*10)*(.6+M.intensity*.4)),mn=Ue(Math.round(be.r)+dn,0,255),dt=Ue(Math.round(be.g)+dn,0,255),gt=Ue(Math.round(be.b)+dn,0,255);y.beginPath(),y.arc(Xt,fn,Vt,0,Math.PI*2),y.fillStyle=`rgba(${mn}, ${dt}, ${gt}, ${It})`,y.fill()}y.globalCompositeOperation="source-over"},[l,n,a]);return _.useEffect(()=>{const S=s.current;if(!S)return;const y=window.devicePixelRatio||1,R=()=>{const N=S.parentElement;if(!N)return;const j=N.clientWidth,A=N.clientHeight;S.width=j*y,S.height=A*y,S.style.width=`${j}px`,S.style.height=`${A}px`;const C=S.getContext("2d");C&&C.setTransform(y,0,0,y,0,0),f.current={w:j,h:A},Q_(),v()};R();const w=new ResizeObserver(()=>R());return w.observe(S.parentElement),()=>w.disconnect()},[v]),_.useEffect(()=>{let S=0;const y=()=>{v(),S=requestAnimationFrame(y)};return S=requestAnimationFrame(y),()=>cancelAnimationFrame(S)},[v]),u.jsx("div",{className:"w-full h-full relative overflow-hidden",style:{backgroundColor:`rgb(${r.bgR}, ${r.bgG}, ${r.bgB})`},children:u.jsx("canvas",{ref:s,className:"absolute inset-0"})})};function Pt(r,n,l){return Math.max(n,Math.min(l,r))}function To(r){if(r.length===0)return 0;let n=0;for(let l=0;l<r.length;l++)n+=r[l];return n/r.length}function hC(r){if(r.length===0)return 0;const n=[...r].sort((a,s)=>a-s),l=Math.floor(n.length/2);return n.length%2===0?(n[l-1]+n[l])/2:n[l]}function $c(r,n){if(r.length===0)return 0;const l=[...r].sort((m,x)=>m-x),a=Pt(n,0,1)*(l.length-1),s=Math.floor(a),f=Math.ceil(a);if(s===f)return l[s];const o=a-s;return l[s]+(l[f]-l[s])*o}function pC(r){return 20*Math.log10(r+1e-9)}function jo(r){if(r.length===0)return[];const n=r.map(f=>pC(Math.max(f,0))),l=$c(n,.14),a=Math.max(l+10,$c(n,.96)),s=Math.max(a-l,1e-6);return n.map(f=>Pt((f-l)/s,0,1))}function gC(r){if(r.length===0)return[];const n=$c(r,.2),l=Math.max(n+1e-5,$c(r,.97)),a=Math.max(l-n,1e-6);return r.map(s=>Pt((s-n)/a,0,1))}function Mo(r,n,l){r.push(n),r.length>l&&r.shift()}function Mc(r,n,l){const a=2*Math.PI*n/r,s=Math.sin(a)/(2*l),f=Math.cos(a),o=1+s;return{b0:s/o,b1:0,b2:-s/o,a1:-2*f/o,a2:(1-s)/o,z1:0,z2:0}}function Dc(r,n){const l=r.b0*n+r.z1;return r.z1=r.b1*n-r.a1*l+r.z2,r.z2=r.b2*n-r.a2*l,l}function xC(r){const n=r.numberOfChannels,l=r.length,a=new Float32Array(l);for(let f=0;f<n;f++){const o=r.getChannelData(f);for(let m=0;m<l;m++)a[m]+=o[m]}const s=1/Math.max(n,1);for(let f=0;f<l;f++)a[f]*=s;return a}function vC(r){let n=r;for(;n<72;)n*=2;for(;n>182;)n/=2;return Pt(n,72,182)}function bC(r){if(r.length<4)return 96;const n=[];for(let l=1;l<r.length;l++){const a=r[l]-r[l-1];a>.24&&a<1&&n.push(a)}return n.length<3?96:vC(60/hC(n))}function yC(r){const n=xC(r),l=r.sampleRate,a=Math.max(128,Math.round(l/115)),s=a/l,f=Mc(l,90,1.25),o=Mc(l,620,.76),m=Mc(l,3200,.9),x=Mc(l,7600,.92),p=[],g=[],v=[],S=[],y=[];let R=0,w=0,N=0,j=0,A=0,C=0;for(let ce=0;ce<n.length;ce++){const ke=n[ce],Le=Dc(f,ke),Qe=Dc(o,ke),ge=Dc(m,ke),je=Dc(x,ke);R+=Le*Le,w+=Qe*Qe,N+=ge*ge,j+=je*je,A+=ke*ke,C++,C>=a&&(p.push(Math.sqrt(R/C)),g.push(Math.sqrt(w/C)),v.push(Math.sqrt(N/C)),S.push(Math.sqrt(j/C)),y.push(Math.sqrt(A/C)),R=0,w=0,N=0,j=0,A=0,C=0)}C>0&&(p.push(Math.sqrt(R/C)),g.push(Math.sqrt(w/C)),v.push(Math.sqrt(N/C)),S.push(Math.sqrt(j/C)),y.push(Math.sqrt(A/C)));const z=jo(p),M=jo(g),k=jo(v),D=jo(S),B=jo(y),E=z.length,L=new Array(E).fill(!1),G=new Array(E).fill(!1),W=new Array(E).fill(!1),K=new Array(E).fill(0),q=new Array(E).fill(0),ie=[],U=[],Q=[],se=[],ue=[],pe=[],O=[],P=[];let J=0,te=0,ae=0,le=0,oe=0,me=0,re=0,fe=0;for(let ce=0;ce<E;ce++){const ke=Pt(z[ce]-M[ce]*.34,0,1),Le=M[ce],Qe=Pt(k[ce]*.94+z[ce]*.06,0,1),ge=D[ce],je=B[ce];q[ce]=ke*.58+Qe*.26+ge*.16;const be=Math.max(0,ke-J),we=Math.max(0,Le-te),de=Math.max(0,Qe-ae),at=Math.max(0,ge-le),Me=Math.max(0,je-oe);J=ke,te=Le,ae=Qe,le=ge,oe=je,Mo(ie,be,64),Mo(U,de,64),Mo(Q,at,64),Mo(se,we,64),Mo(ue,Me,64),me>0&&me--,re>0&&re--,fe>0&&fe--;const jn=To(ie),un=To(U),Vt=To(Q),It=To(se),Yt=To(ue),Xt=be*1.52+Me*.68-we*.72,fn=de*1.22+Me*.36,dn=at*1.18+Me*.3,mn=jn*1.44+Yt*.36+It*.45+.008,dt=un*1.62+Yt*.28+.007,gt=Vt*1.75+Yt*.22+.006,Xe=ce*s;me<=0&&Xt>mn&&ke>.08&&(L[ce]=!0,pe.push(Xe),me=11),re<=0&&fn>dt&&Qe>.07&&(G[ce]=!0,O.push(Xe),re=9),fe<=0&&dn>gt&&ge>.06&&(W[ce]=!0,P.push(Xe),fe=5),K[ce]=Math.max(0,Xt*1.12+fn*.9+dn*.8)}const Ae=gC(K),Oe=bC(pe),Se=new Array(E);for(let ce=0;ce<E;ce++)Se[ce]={time:ce*s,bass:Pt(z[ce]-M[ce]*.34,0,1),mud:M[ce],mid:Pt(k[ce]*.94+z[ce]*.06,0,1),high:D[ce],energy:q[ce],onset:Ae[ce],lowBeat:L[ce],midBeat:G[ce],highBeat:W[ce]};return{frameStep:s,frames:Se,lowBeatTimes:pe,midBeatTimes:O,highBeatTimes:P,bpm:Oe}}function SC(r,n){let l=0,a=r.length;for(;l<a;){const s=l+a>>1;r[s]<n?l=s+1:a=s}return l}function l0(r,n,l=.34,a=.05){if(r.length===0)return 0;const s=SC(r,n-a);let f=0;for(let o=s;o<r.length;o++){const m=r[o]-n;if(m>l)break;if(m<=0){f=Math.max(f,1);continue}const x=Math.exp(-m*8.2);f=Math.max(f,x)}return Pt(f,0,1)}function Pv(r,n){if(!r||r.frames.length===0)return null;const l=Pt(Math.round(n/r.frameStep),0,r.frames.length-1);return r.frames[l]??null}function wC(r,n,l){if(!n)return r;const a=Pv(n,l);if(!a)return r;const s=r.bass*.58+a.bass*.42,f=r.mud*.62+a.mud*.38,o=r.mid*.64+a.mid*.36,m=r.high*.65+a.high*.35,x=r.energy*.64+a.energy*.36,p=Pt(r.onset*.62+a.onset*.38,0,1);return{...r,bass:Pt(s,0,1),mud:Pt(f,0,1),mid:Pt(o,0,1),high:Pt(m,0,1),energy:Pt(x,0,1),onset:p}}const _C=1024,CC=56,x1=10,v1=8,b1=4,Gc=96,Jc=-88,Hv=-18,y1={bass:0,mud:0,mid:0,high:0,energy:0,onset:0,isBeat:!1,lowBeat:!1,midBeat:!1,highBeat:!1,lookAheadKick:0,lookAheadSnare:0,lookAheadHat:0,anticipation:0,bpm:Gc,beatInBar:0,barProgress:0};function et(r,n,l){return Math.max(n,Math.min(l,r))}function Tt(r,n=0){return Number.isFinite(r)?r:n}function Do(r){if(r.length===0)return 0;let n=0;for(let l=0;l<r.length;l++)n+=r[l];return n/r.length}function AC(r){if(r.length===0)return 0;const n=[...r].sort((a,s)=>a-s),l=Math.floor(n.length/2);return n.length%2===0?(n[l-1]+n[l])/2:n[l]}function Eo(r,n){r.push(n),r.length>CC&&r.shift()}function RC(r){let n=0;for(let l=0;l<r.length;l++){const a=(r[l]-128)/128;n+=a*a}return Math.sqrt(n/Math.max(r.length,1))}function NC(r){return Number.isFinite(r)?et((r-Jc)/(Hv-Jc),0,1):0}function TC(r,n,l,a,s){const f=n*.5,o=et(a,0,f),m=et(s,o+1,f),x=n/l,p=et(Math.floor(o/x),0,r.length-1),g=et(Math.ceil(m/x),p,r.length-1);let v=0,S=0;for(let y=p;y<=g;y++){const R=r[y];Number.isFinite(R)&&(v+=R,S++)}return S===0?Jc:v/S}function Ec(r,n,l,a,s){return NC(TC(r,n,l,a,s))}function ko(r,n,l,a,s){const f=Tt(n);return Number.isFinite(r.value)||(r.value=0),f>=r.value?(r.value+=(f-r.value)*et(l,0,1),r.hold=s,Tt(r.value)):r.hold>0?(r.hold--,Tt(r.value)):(r.value+=(f-r.value)*et(a,0,1),Tt(r.value))}function jC(){const[r,n]=_.useState("idle"),[l,a]=_.useState(null),[s,f]=_.useState(0),[o,m]=_.useState(0),x=_.useRef(null),p=_.useRef(null),g=_.useRef(null),v=_.useRef(null),S=_.useRef(null),y=_.useRef(0),R=_.useRef(null),w=_.useRef(null),N=_.useRef({...y1}),j=_.useRef(0),A=_.useRef({low:0,mud:0,mid:0,high:0}),C=_.useRef(0),z=_.useRef({low:[],mud:[],mid:[],high:[]}),M=_.useRef([]),k=_.useRef({low:0,mid:0,high:0}),D=_.useRef([]),B=_.useRef(Gc),E=_.useRef(null),L=_.useRef(0),G=_.useRef({bass:{value:0,hold:0},mud:{value:0,hold:0},mid:{value:0,hold:0},high:{value:0,hold:0},onset:{value:0,hold:0}}),W=_.useCallback(()=>{if(L.current++,E.current=null,cancelAnimationFrame(y.current),v.current&&(v.current.pause(),v.current.src=""),g.current)try{g.current.disconnect()}catch{}S.current&&(URL.revokeObjectURL(S.current),S.current=null),g.current=null,v.current=null,p.current=null,R.current=null,w.current=null,A.current={low:0,mud:0,mid:0,high:0},C.current=0,z.current={low:[],mud:[],mid:[],high:[]},M.current=[],k.current={low:0,mid:0,high:0},D.current=[],B.current=Gc,G.current={bass:{value:0,hold:0},mud:{value:0,hold:0},mid:{value:0,hold:0},high:{value:0,hold:0},onset:{value:0,hold:0}},N.current={...y1},j.current=0,m(0)},[]),K=_.useCallback(async(P,J)=>{let te=null;try{let ae=x.current;ae||(te=new AudioContext,ae=te);const le=await ae.decodeAudioData(P.slice(0)),oe=yC(le);if(L.current!==J)return;E.current=oe,B.current=B.current*.6+oe.bpm*.4}catch{L.current===J&&(E.current=null)}finally{te&&await te.close().catch(()=>{})}},[]),q=_.useCallback(()=>{const P=p.current,J=R.current,te=w.current,ae=v.current;if(!P||!J||!te||!ae)return;P.getFloatFrequencyData(J),P.getByteTimeDomainData(te);const le=P.context.sampleRate,oe=Ec(J,le,P.fftSize,60,120),me=Ec(J,le,P.fftSize,300,1e3),re=Ec(J,le,P.fftSize,2e3,5e3),fe=Ec(J,le,P.fftSize,6e3,1e4),Ae=et(oe-me*.34,0,1),Oe=me,Se=et(re*.92+oe*.08,0,1),ce=fe,ke=Ae*.58+Se*.26+ce*.16,Le=A.current,Qe=Math.max(0,Ae-Le.low),ge=Math.max(0,Oe-Le.mud),je=Math.max(0,Se-Le.mid),be=Math.max(0,ce-Le.high);Le.low=Ae,Le.mud=Oe,Le.mid=Se,Le.high=ce;const we=RC(te),de=Math.max(0,we-C.current);C.current=we,Eo(z.current.low,Qe),Eo(z.current.mud,ge),Eo(z.current.mid,je),Eo(z.current.high,be),Eo(M.current,de);const at=ae.currentTime;j.current=at,m(at);const Me=Do(M.current),jn=Do(z.current.low),un=Do(z.current.mud),Vt=Do(z.current.mid),It=Do(z.current.high),Yt=Qe*1.52+de*.72-ge*.64,Xt=je*1.22+de*.4,fn=be*1.18+de*.32,dn=jn*1.48+Me*.42+un*.4+.007,mn=Vt*1.66+Me*.32+.007,dt=It*1.78+Me*.24+.006;let gt=!1,Xe=!1,aa=!1;k.current.low>0&&k.current.low--,k.current.mid>0&&k.current.mid--,k.current.high>0&&k.current.high--,k.current.low<=0&&Yt>dn&&Ae>.08&&(gt=!0,k.current.low=x1,D.current.push(at),D.current.length>20&&D.current.shift()),k.current.mid<=0&&Xt>mn&&Se>.07&&(Xe=!0,k.current.mid=v1),k.current.high<=0&&fn>dt&&ce>.06&&(aa=!0,k.current.high=b1);const Zt=E.current,qa=Pv(Zt,at);qa&&(!gt&&k.current.low<=1&&qa.lowBeat&&(gt=!0,k.current.low=x1,D.current.push(at),D.current.length>20&&D.current.shift()),!Xe&&k.current.mid<=1&&qa.midBeat&&(Xe=!0,k.current.mid=v1),!aa&&k.current.high<=1&&qa.highBeat&&(aa=!0,k.current.high=b1));const Yn=D.current;if(Yn.length>=4){const Dn=[];for(let it=1;it<Yn.length;it++){const jt=Yn[it]-Yn[it-1];jt>.24&&jt<1&&Dn.push(jt)}if(Dn.length>=3){const it=et(60/AC(Dn),72,182);B.current=B.current*.84+it*.16}}Zt&&(B.current=B.current*.94+Zt.bpm*.06);const Xn=et(B.current,72,182),ia=at*Xn/60,Mn=(Math.floor(ia)%4+4)%4,la=(ia%4+4)%4/4,ra=et((Yt*1.15+Xt+fn*.84)*2.5,0,1),fl=gt||Xe||aa,oa=wC({bass:Ae,mud:Oe,mid:Se,high:ce,energy:ke,onset:ra,isBeat:fl,lowBeat:gt,midBeat:Xe,highBeat:aa,lookAheadKick:0,lookAheadSnare:0,lookAheadHat:0,anticipation:0,bpm:Xn,beatInBar:Mn,barProgress:la},Zt,at),Zn=G.current,Qt=ko(Zn.bass,oa.bass,.97,.08,2),sa=ko(Zn.mud,oa.mud,.88,.16,1),Rr=ko(Zn.mid,oa.mid,.95,.1,2),Nr=ko(Zn.high,oa.high,.95,.11,1),ts=ko(Zn.onset,oa.onset,.98,.14,1),dl=Zt?l0(Zt.lowBeatTimes,at,.34,.05):0,ml=Zt?l0(Zt.midBeatTimes,at,.32,.05):0,Tr=Zt?l0(Zt.highBeatTimes,at,.28,.04):0,ns=et(dl*.9+ml*.62+Tr*.5,0,1);N.current={bass:et(Tt(Qt),0,1),mud:et(Tt(sa),0,1),mid:et(Tt(Rr),0,1),high:et(Tt(Nr),0,1),energy:et(Tt(Qt)*.58+Tt(Rr)*.26+Tt(Nr)*.16,0,1),onset:et(Tt(ts),0,1),isBeat:!!fl,lowBeat:!!gt,midBeat:!!Xe,highBeat:!!aa,lookAheadKick:et(Tt(dl),0,1),lookAheadSnare:et(Tt(ml),0,1),lookAheadHat:et(Tt(Tr),0,1),anticipation:et(Tt(ns),0,1),bpm:et(Tt(Xn,Gc),72,182),beatInBar:(Math.floor(Tt(Mn))%4+4)%4,barProgress:et(Tt(la),0,1)},y.current=requestAnimationFrame(q)},[]),ie=_.useCallback((P,J,te)=>{W();const ae=L.current;n("loading"),a(J),x.current||(x.current=new AudioContext);const le=x.current;le.state==="suspended"&&le.resume().catch(()=>{});const oe=le.createAnalyser();oe.fftSize=_C,oe.minDecibels=Jc,oe.maxDecibels=Hv,oe.smoothingTimeConstant=.22,p.current=oe,R.current=new Float32Array(oe.frequencyBinCount),w.current=new Uint8Array(oe.fftSize),te?S.current=P:S.current=null;const me=new Audio;me.crossOrigin="anonymous",me.src=P,v.current=me,me.addEventListener("loadedmetadata",()=>{f(me.duration),n("paused")}),me.addEventListener("ended",()=>{n("paused"),cancelAnimationFrame(y.current)});const re=le.createMediaElementSource(me);return re.connect(oe),oe.connect(le.destination),g.current=re,me.load(),ae},[W]),U=_.useCallback(P=>{const J=URL.createObjectURL(P),te=ie(J,P.name,!0);P.arrayBuffer().then(ae=>K(ae,te))},[K,ie]),Q=_.useCallback((P,J)=>{const te=P.split("/").pop()||"Audio",ae=ie(P,J??te,!1);fetch(P).then(le=>le.ok?le.arrayBuffer():Promise.reject(new Error("fetch failed"))).then(le=>K(le,ae)).catch(()=>{L.current===ae&&(E.current=null)})},[K,ie]),se=_.useCallback(()=>{const P=v.current,J=x.current;P&&(J&&J.state==="suspended"&&J.resume().catch(()=>{}),P.play().then(()=>{n("playing"),y.current=requestAnimationFrame(q)}).catch(()=>{n("paused")}))},[q]),ue=_.useCallback(()=>{const P=v.current;P&&(P.pause(),n("paused"),cancelAnimationFrame(y.current))},[]),pe=_.useCallback(()=>{r==="playing"?ue():r==="paused"&&se()},[r,se,ue]),O=_.useCallback(P=>{const J=v.current;J&&(J.currentTime=P,j.current=P,m(P))},[]);return _.useEffect(()=>()=>{W(),x.current&&(x.current.close().catch(()=>{}),x.current=null)},[W]),{analysisRef:N,audioTimeRef:j,audioState:r,fileName:l,duration:s,currentTime:o,loadFile:U,loadUrl:Q,play:se,pause:ue,toggle:pe,seek:O,cleanup:W}}const S1="/dotgrid2/aysggmr-lilifen.m4a",w1="/dotgrid2/aysggmr-lilifen.lrc",_1="爱江山更爱美人 - 李丽芬";function MC(r){const n=r.split(/\r?\n/),l=[];for(const a of n){if(!a.trim())continue;const s=[...a.matchAll(/\[(\d{2}):(\d{2}(?:\.\d{1,3})?)\]/g)];if(s.length===0)continue;const f=a.replace(/\[(\d{2}):(\d{2}(?:\.\d{1,3})?)\]/g,"").trim();if(f)for(const o of s){const m=Number(o[1]),x=Number(o[2]),p=m*60+x;Number.isFinite(p)&&l.push({time:p,text:f})}}return l.sort((a,s)=>a.time-s.time),l}async function C1(r){try{const n=await fetch(r,{cache:"force-cache"});if(!n.ok)return[];const l=await n.text();return MC(l)}catch{return[]}}function DC(r,n){var a,s,f;if(r.length===0)return{current:"",next:"",index:-1};let l=-1;for(let o=r.length-1;o>=0;o--)if(n>=r[o].time){l=o;break}return l<0?{current:"",next:((a=r[0])==null?void 0:a.text)??"",index:-1}:{current:((s=r[l])==null?void 0:s.text)??"",next:((f=r[l+1])==null?void 0:f.text)??"",index:l}}const A1=.04;function el(r){const n=Math.floor(r/60),l=Math.floor(r%60);return`${n}:${l.toString().padStart(2,"0")}`}const EC={intro:"Intro",verse:"Verse",prechorus:"Pre-Chorus",chorus:"Chorus",interlude:"Interlude",outro:"Outro"},R1={balanced:"Balanced",rhythm:"Rhythm",story:"Story"},kC=({params:r,onChange:n,audioTimeRef:l,analysisRef:a,onPlayingChange:s})=>{const f=_.useRef(null),o=_.useRef(null),m=_.useRef(null),x=_.useRef(null),p=_.useRef(null),g=_.useRef(null),v=_.useRef(null),S=_.useRef(null),y=_.useRef(null),R=_.useRef(null),w=_.useRef(null),N=_.useRef(null),j=_.useRef(null),A=_.useRef(null),C=_.useRef(null),z=_.useRef(null),M=_.useRef(0),k=_.useRef({kick:0,snare:0,hat:0}),D=_.useRef(null),B=_.useRef(!1),E=_.useRef([]),[L,G]=_.useState(""),{analysisRef:W,audioTimeRef:K,audioState:q,fileName:ie,duration:U,currentTime:Q,loadFile:se,loadUrl:ue,play:pe,pause:O,toggle:P,seek:J}=jC();_.useEffect(()=>{s(q==="playing")},[q,s]),_.useEffect(()=>{B.current||(B.current=!0,ue(S1,_1),C1(w1).then(re=>{E.current=re}))},[ue]);const te=_.useCallback(()=>{ue(S1,_1),D.current=null,C1(w1).then(re=>{E.current=re})},[ue]),ae=_.useCallback(()=>{const re=W.current,fe=K.current,Ae=U>0?Math.min(U,fe+A1):fe+A1;a.current={...re},l.current=Ae,o.current&&(o.current.style.width=`${or(re.bass)*100}%`),m.current&&(m.current.style.width=`${or(re.mid)*100}%`),x.current&&(x.current.style.width=`${or(re.high)*100}%`),k.current.kick=Math.max(k.current.kick*.88,re.lowBeat?1:re.bass*.45),k.current.snare=Math.max(k.current.snare*.9,re.midBeat?1:re.mid*.42),k.current.hat=Math.max(k.current.hat*.84,re.highBeat?1:re.high*.5),p.current&&(p.current.style.width=`${or(k.current.kick)*100}%`),g.current&&(g.current.style.width=`${or(k.current.snare)*100}%`),v.current&&(v.current.style.width=`${or(k.current.hat)*100}%`);const{event:Oe,nextEvent:Se}=aC(Ae);S.current&&(S.current.textContent=Oe.label||Oe.formation),y.current&&(y.current.textContent=EC[Oe.section||"verse"]||"Section"),R.current&&(R.current.textContent=Se!=null?`${el(Se.time)} · T-${Math.max(0,Se.time-Ae).toFixed(1)}s`:"END"),w.current&&(w.current.textContent=`${Math.round(re.bpm)} BPM · Beat ${re.beatInBar+1}/4`);const ce=DC(E.current,fe+.02);N.current&&(N.current.textContent=ce.current||"-"),j.current&&(j.current.textContent=ce.next||"");const ke=Ic(r,Oe,re),Le=A0(r,ke,Oe.section||"verse",re);A.current&&(A.current.textContent=`${Le.dotCount}`),C.current&&(C.current.textContent=`${Le.baseRadius.toFixed(2)} px`),z.current&&(z.current.textContent=`rgb(${Le.bgR}, ${Le.bgG}, ${Le.bgB})`),D.current!=null&&q==="playing"&&fe>=D.current&&(D.current=null,O()),M.current=requestAnimationFrame(ae)},[W,q,l,U,K,r,O,a]);_.useEffect(()=>(M.current=requestAnimationFrame(ae),()=>cancelAnimationFrame(M.current)),[ae]);const le=re=>{var Ae;const fe=(Ae=re.target.files)==null?void 0:Ae[0];fe&&(se(fe),D.current=null,E.current=[])},oe=(re,fe)=>{J(re),D.current=re+fe,pe()},me=async()=>{const re=m1.map(fe=>`${fe.label}: ${el(fe.start)}-${el(fe.start+fe.duration)}  ${fe.description}`).join(`
`);if(!navigator.clipboard){G("浏览器不支持剪贴板"),window.setTimeout(()=>G(""),1800);return}try{await navigator.clipboard.writeText(re),G("已复制片段时间轴")}catch{G("复制失败")}window.setTimeout(()=>G(""),1800)};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Music"}),u.jsxs("div",{className:"flex flex-col gap-2.5",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{ref:f,type:"file",accept:"audio/*",onChange:le,className:"hidden"}),u.jsx("button",{onClick:()=>{var re;return(re=f.current)==null?void 0:re.click()},className:"text-[9px] px-2 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-500 transition-colors flex-shrink-0",children:ie?"Change":"Upload Song"}),u.jsx("button",{onClick:te,className:"text-[9px] px-2 py-1 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors flex-shrink-0",children:"Use Default"}),ie&&u.jsx("span",{className:"text-[9px] text-neutral-400 truncate",children:ie})]}),(q==="playing"||q==="paused")&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:P,className:"w-5 h-5 rounded-md bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 transition-colors flex-shrink-0",children:q==="playing"?u.jsxs("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"currentColor",children:[u.jsx("rect",{x:"1",y:"1",width:"2",height:"6",rx:"0.5"}),u.jsx("rect",{x:"5",y:"1",width:"2",height:"6",rx:"0.5"})]}):u.jsx("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"currentColor",children:u.jsx("polygon",{points:"1.5,0.5 7,4 1.5,7.5"})})}),u.jsx("div",{className:"flex-1 flex items-center gap-1.5",children:u.jsx("input",{type:"range",min:0,max:U||1,step:.05,value:Q,onChange:re=>{D.current=null,J(parseFloat(re.target.value))},className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})}),u.jsxs("span",{className:"text-[8px] text-neutral-400 tabular-nums flex-shrink-0",children:[el(Q),"/",el(U)]})]}),q==="loading"&&u.jsx("span",{className:"text-[9px] text-neutral-400",children:"Loading..."}),(q==="playing"||q==="paused")&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex flex-col gap-1.5",children:[u.jsx(sr,{label:"Bass",refEl:o,color:"bg-blue-400"}),u.jsx(sr,{label:"Mid",refEl:m,color:"bg-green-400"}),u.jsx(sr,{label:"High",refEl:x,color:"bg-rose-400"})]}),u.jsxs("div",{className:"flex flex-col gap-1.5",children:[u.jsx(sr,{label:"Kick",refEl:p,color:"bg-indigo-500"}),u.jsx(sr,{label:"Snare",refEl:g,color:"bg-emerald-500"}),u.jsx(sr,{label:"Hat",refEl:v,color:"bg-amber-500"})]}),u.jsx("div",{ref:w,className:"text-[8px] text-neutral-500 tabular-nums"}),u.jsxs("div",{className:"grid grid-cols-[34px_1fr] gap-x-2 gap-y-1.5 text-[8px]",children:[u.jsx("span",{className:"text-neutral-400",children:"Now"}),u.jsx("div",{ref:S,className:"text-neutral-600 truncate"}),u.jsx("span",{className:"text-neutral-400",children:"Section"}),u.jsx("div",{ref:y,className:"text-neutral-600 truncate"}),u.jsx("span",{className:"text-neutral-400",children:"Next"}),u.jsx("div",{ref:R,className:"text-neutral-500 truncate tabular-nums"})]})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Lyrics"}),u.jsx("div",{ref:N,className:"text-[12px] text-neutral-800 leading-relaxed min-h-6"}),u.jsx("div",{ref:j,className:"text-[9px] text-neutral-400 mt-1 min-h-4"})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Direction"}),u.jsx("div",{className:"text-[8px] text-neutral-500 mb-3",children:"算法自动控制节奏、叙事、点数、半径和背景色。"}),u.jsx("div",{className:"flex gap-1 mb-3",children:Object.keys(R1).map(re=>u.jsx("button",{onClick:()=>n({...r,directionProfile:re}),className:`flex-1 text-[9px] px-2 py-1 rounded-md transition-colors ${r.directionProfile===re?"bg-neutral-900 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:R1[re]},re))}),u.jsx(zC,{label:"Direction Strength",value:r.directionStrength,onChange:re=>n({...r,directionStrength:re})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Auto Visual"}),u.jsxs("div",{className:"grid grid-cols-[64px_1fr] gap-y-1.5 text-[8px]",children:[u.jsx("span",{className:"text-neutral-400",children:"Dot Count"}),u.jsx("div",{ref:A,className:"text-neutral-700 tabular-nums"}),u.jsx("span",{className:"text-neutral-400",children:"Base Radius"}),u.jsx("div",{ref:C,className:"text-neutral-700 tabular-nums"}),u.jsx("span",{className:"text-neutral-400",children:"Background"}),u.jsx("div",{ref:z,className:"text-neutral-700 tabular-nums"})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Quick Preview"}),u.jsxs("div",{className:"flex flex-col gap-1.5",children:[m1.map(re=>u.jsxs("button",{onClick:()=>oe(re.start,re.duration),className:"text-left px-2 py-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200 transition-colors",children:[u.jsxs("div",{className:"text-[9px] font-medium text-neutral-700",children:[re.label," · ",el(re.start),"-",el(re.start+re.duration)]}),u.jsx("div",{className:"text-[8px] text-neutral-500",children:re.description})]},re.id)),u.jsx("button",{onClick:me,className:"text-[9px] px-2 py-1 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors",children:"Copy Shot List"}),L&&u.jsx("div",{className:"text-[8px] text-neutral-500",children:L})]})]})]})};function or(r){return Math.max(0,Math.min(1,r))}const sr=({label:r,refEl:n,color:l})=>u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"text-[8px] text-neutral-400 w-8 flex-shrink-0",children:r}),u.jsx("div",{className:"flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden",children:u.jsx("div",{ref:n,className:`h-full ${l} rounded-full transition-none`,style:{width:"0%"}})})]}),zC=({label:r,value:n,onChange:l})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:r}),u.jsxs("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:[Math.round(n*100),"%"]})]}),u.jsx("input",{type:"range",min:0,max:1,step:.01,value:n,onChange:a=>l(parseFloat(a.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),BC=2400,LC={dotCount:BC,baseRadius:2,colorR:180,colorG:180,colorB:185,bgR:250,bgG:250,bgB:250,directionProfile:"rhythm",directionStrength:.72},OC=[{id:"fission",name:"Fission",description:"Canvas 2D particle split-merge with additive glow"},{id:"metaball",name:"Metaball",description:"CSS Gooey filter particle split-merge with liquid fusion"},{id:"sdfmorph",name:"SDF Morph",description:"WebGL SDF shape morphing with liquid fusion and easing curves"},{id:"lettermorph",name:"Letter Morph",description:"26 Letters A-Z SDF morphing with liquid fusion"},{id:"liquidfill",name:"Liquid Fill",description:"CSS Gooey filter blob expansion with SVG path morphing and splash particles"},{id:"gooeyfx",name:"Gooey FX",description:"SVG Gooey filter with crisp circles and gooey blob connections"},{id:"eyetrack",name:"Eye Track",description:"CSS cursor-following eyes with lerp smoothing and blink animation"},{id:"liquidtrans",name:"Liquid Trans",description:"WebGL noise-driven liquid marble transition with domain warping"},{id:"dotgrid",name:"Dot Grid",description:"Canvas 2D dot-to-grid morphing with staggered easing"},{id:"dotgrid2",name:"Dot Grid 2.0",description:"Music-choreographed dot formations with timeline-driven narrative"}],FC=({active:r,onSelect:n})=>{const l=_.useRef(null);return _.useEffect(()=>{var a;(a=l.current)==null||a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[r]),u.jsx("div",{className:"flex gap-1.5 overflow-x-auto scrollbar-hide px-5 py-3 flex-shrink-0",children:OC.map(a=>{const s=r===a.id;return u.jsx("button",{ref:s?l:null,onClick:()=>n(a.id),className:`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${s?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:a.name},a.id)})})},IC={color1:"#8b5cf6",color2:"#06b6d4",speed:0,density:1,suction:0},GC={speed:.2,zoom:3,warpStrength:4,color1:"#000d33",color2:"#1a664d",color3:"#ffcc33"},UC={blockSize:1.5,spacing:2.5,timeSpeed:.8,mouseInfluence:1,fogStart:40,fogEnd:100,camDistance:80},PC={flowSpeed:.2,streakLength:1.5,zoom:2.5,turbulence:1.2,gridOpacity:.15},HC={speed:.5,twist:1,noise:1,width:4,color1:"#4f46e5",color2:"#06b6d4"},qC={speed:.3,scale:1,density:1,brightness:1,color1:"#3b0764",color2:"#06b6d4"},VC={speed:1,scale:1,hueShift:0,saturation:.7,brightness:1,warpStrength:.3},YC={speed:1,scale:1.2,hueSpeed:1,saturation:.7,brightness:.8,contrast:1.2},XC={speed:.2,zoom:3,colorShift:0,complexity:1,contrast:1},ZC={speed:.5,height:2,smoothness:1,color1:"#2266ff",color2:"#9933ff"},WC={textGlow:5,textScale:1,terrainBrightness:.5},KC={waveSpeed:.5,colorShift:1,opacity:.4},QC={speed:1,glow:1,gridSize:1,color1:"#4040ff",color2:"#40a0ff"},$C={speed:1,gamma:2,accent1:"#ff1a80",accent2:"#ff801a",bg1:"#1a80ff",bg2:"#1a8099"},JC={speed:1,grain:.1,vignette:.5},e4={speed:1,layers:12,depth:1,turbulence:1,grain:.05,vignette:.5,color1:"#c44b32",color2:"#f0a050",color3:"#9ab4ff"},t4={scrollProgress:0,colWidth:.7,speed:.2,scale:.25,seed:.231,color:[.235,.635,.062]},n4={vortex:{name:"Vortex Portal",technique:"Simplex Noise + FBM + Polar Domain Warping"},lumina:{name:"Lumina Flow",technique:"Perlin Noise + Multi-Layer Domain Warping"},isometric:{name:"Isometric Flow",technique:"DDA Raymarching + AABB Collision + Procedural Animation"},flowfield:{name:"Flow Field",technique:"Curl Noise + Pseudo-LIC Advection + Procedural Heatmap"},tunnel:{name:"Warp Tunnel",technique:"Volumetric Raymarching + FBM Noise Displacement"},aura:{name:"Noise Aura",technique:"Volumetric Light Accumulation + Multi-Orb Lighting"},neon:{name:"Neon Noise",technique:"FBM + Domain Warping + HSV Color Mapping"},fluid:{name:"Fluid Flow",technique:"Double Domain Warping + FBM + HSV Gradients"},neuro:{name:"NeuroFlow",technique:"Simplex Noise + Hue Rotation + Dynamic Lines"},neonwave:{name:"Neonwave",technique:"3D Plane Stacking + FBM Terrain + HSV Gradients",credit:{author:"mrange",url:"https://www.shadertoy.com/view/7dyyRy",date:"2022-06-12"}},neontext:{name:"Neon Text",technique:"Sphere Raymarching + SDF Text + Neon Glow"},aurora:{name:"Aurora Cloudscape",technique:"Volumetric Clouds + Wave Motion + Color Gradients"},hypergrid:{name:"Hyper Grid",technique:"Grid Marching + Rodrigues Rotation + Glow Accumulation",credit:{author:"totetmatt",url:"https://www.shadertoy.com/view/lcjGWV",date:"2024-01-07"}},jellyfish:{name:"Luminescence",technique:"SDF Raymarching + Space Repetition + Volumetric Rendering",credit:{author:"BigWings",url:"https://www.shadertoy.com/view/MlKcDD",date:"2017-05-23"}},trainjourney:{name:"Train Journey",technique:"Multi-Layer Parallax + FBM Terrain + Procedural SDF",credit:{author:"mdb",url:"https://www.shadertoy.com/view/Ndc3zl",date:"2021-08-31"}},horizon:{name:"Horizon",technique:"Parametric Parallax + FBM Terrain + Depth Color Gradient"}},a4=()=>{const[r,n]=_.useState("shaders"),[l,a]=_.useState("vortex"),[s,f]=_.useState("gooey"),[o,m]=_.useState("echotrace"),[x,p]=_.useState(IC),[g,v]=_.useState(GC),[S,y]=_.useState(UC),[R,w]=_.useState(PC),[N,j]=_.useState(HC),[A,C]=_.useState(qC),[z,M]=_.useState(VC),[k,D]=_.useState(YC),[B,E]=_.useState(XC),[L,G]=_.useState(ZC),[W,K]=_.useState(WC),[q,ie]=_.useState(KC),[U,Q]=_.useState(QC),[se,ue]=_.useState($C),[pe,O]=_.useState(JC),[P,J]=_.useState(e4),[te,ae]=_.useState(t4),[le,oe]=_.useState(fS),[me,re]=_.useState(z5),[fe,Ae]=_.useState(F5),[Oe,Se]=_.useState(rw),[ce,ke]=_.useState(dw),[Le,Qe]=_.useState(vw),[ge,je]=_.useState("fission"),[be,we]=_.useState(ww),[de,at]=_.useState(Aw),[Me,jn]=_.useState(Ew),[un,Vt]=_.useState(Ow),[It,Yt]=_.useState(Yw),[Xt,fn]=_.useState(Qw),[dn,mn]=_.useState(Jw),[dt,gt]=_.useState(s_),[Xe,aa]=_.useState(L_),Zt=_.useRef({phase:0,progress:0}),[qa,Yn]=_.useState({enabled:!1,audioFile:null}),Xn=_.useRef(null),[ia,Mn]=_.useState(LC),la=_.useRef(0),ra=_.useRef({bass:0,mud:0,mid:0,high:0,energy:0,onset:0,isBeat:!1,lowBeat:!1,midBeat:!1,highBeat:!1,lookAheadKick:0,lookAheadSnare:0,lookAheadHat:0,anticipation:0,bpm:96,beatInBar:0,barProgress:0}),[fl,oa]=_.useState(!1),[Zn,Qt]=_.useState(!1),sa=n4[l];return u.jsxs("div",{className:"h-screen bg-[#f8f8f8] flex p-3 gap-3",children:[u.jsx(jy,{activeCategory:r,onCategoryChange:n}),u.jsx("div",{className:"flex-1 bg-white rounded-3xl flex flex-col overflow-hidden",children:r==="shaders"?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 flex-shrink-0",children:[u.jsx("span",{className:"text-[13px] font-medium text-neutral-700",children:sa.name}),u.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400",children:sa.technique}),sa.credit&&u.jsxs("a",{href:sa.credit.url,target:"_blank",rel:"noopener noreferrer",className:"text-[8px] text-neutral-400 hover:text-neutral-600 transition-colors",children:["by ",sa.credit.author," · ",sa.credit.date]}),u.jsx("div",{className:"flex-1"}),u.jsx("button",{onClick:()=>Qt(!0),className:"w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors",children:u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[u.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.2"}),u.jsx("path",{d:"M4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.17 7 5.5 6.5 5.75C6.25 5.88 6 6.08 6 6.4V6.75",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round"}),u.jsx("circle",{cx:"6",cy:"8.25",r:"0.5",fill:"currentColor"})]})})]}),u.jsxs("div",{className:"flex-1 flex min-h-0 px-5 gap-4",children:[u.jsx("div",{className:"flex-[3] flex flex-col min-h-0",children:u.jsxs("div",{className:"bg-neutral-100 rounded-2xl flex-1 overflow-hidden",children:[l==="vortex"&&u.jsx(Iy,{params:x}),l==="lumina"&&u.jsx(Hy,{params:g}),l==="isometric"&&u.jsx(Xy,{params:S}),l==="flowfield"&&u.jsx(Qy,{params:R}),l==="tunnel"&&u.jsx(t3,{params:N}),l==="aura"&&u.jsx(l3,{params:A}),l==="neon"&&u.jsx(c3,{params:z}),l==="fluid"&&u.jsx(m3,{params:k}),l==="neuro"&&u.jsx(x3,{params:B}),l==="neonwave"&&u.jsx(S3,{params:L}),l==="neontext"&&u.jsx(A3,{params:W}),l==="aurora"&&u.jsx(j3,{params:q}),l==="hypergrid"&&u.jsx(k3,{params:U}),l==="jellyfish"&&u.jsx(O3,{params:se}),l==="trainjourney"&&u.jsx(U3,{params:pe}),l==="horizon"&&u.jsx(Y3,{params:P})]})}),u.jsx("div",{className:"flex-[2] flex flex-col min-h-0",children:u.jsx("div",{className:"h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden",children:u.jsxs("div",{className:"p-3 overflow-y-auto flex-1 min-h-0",children:[l==="vortex"&&u.jsx(Gy,{params:x,onChange:p}),l==="lumina"&&u.jsx(qy,{params:g,onChange:v}),l==="isometric"&&u.jsx(Zy,{params:S,onChange:y}),l==="flowfield"&&u.jsx($y,{params:R,onChange:w}),l==="tunnel"&&u.jsx(n3,{params:N,onChange:j}),l==="aura"&&u.jsx(r3,{params:A,onChange:C}),l==="neon"&&u.jsx(u3,{params:z,onChange:M}),l==="fluid"&&u.jsx(h3,{params:k,onChange:D}),l==="neuro"&&u.jsx(v3,{params:B,onChange:E}),l==="neonwave"&&u.jsx(w3,{params:L,onChange:G}),l==="neontext"&&u.jsx(R3,{params:W,onChange:K}),l==="aurora"&&u.jsx(M3,{params:q,onChange:ie}),l==="hypergrid"&&u.jsx(z3,{params:U,onChange:Q}),l==="jellyfish"&&u.jsx(F3,{params:se,onChange:ue}),l==="trainjourney"&&u.jsx(H3,{params:pe,onChange:O}),l==="horizon"&&u.jsx(X3,{params:P,onChange:J})]})})})]}),u.jsx(Dy,{active:l,onSelect:a})]}):r==="demos"?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 flex-shrink-0",children:[u.jsx("span",{className:"text-[13px] font-medium text-neutral-700",children:s==="gooey"?"Gooey Overlay":s==="parallax"?"Parallax Scroll":s==="frosted"?"Frosted Glass":"Video Text"}),u.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400",children:s==="gooey"?"Simplex Noise + Scroll-Driven Animation":s==="parallax"?"SVG + GSAP ScrollTrigger":s==="frosted"?"CSS backdrop-filter + mask-image":"SVG feComponentTransfer + background-clip: text"}),u.jsx("div",{className:"flex-1"}),u.jsxs("a",{href:s==="gooey"?"https://codepen.io/ksenia-k/pen/NWmMxLg":s==="parallax"?"https://codepen.io/isladjan/pen/abdyPBw":s==="frosted"?"https://codepen.io/lessthanthree/pen/LENwGyZ":"https://codepen.io/thebabydino/pen/RNBwBYe",target:"_blank",rel:"noopener noreferrer",className:"text-[8px] text-neutral-400 hover:text-neutral-600 transition-colors",children:["by ",s==="gooey"?"ksenia-k":s==="parallax"?"isladjan":s==="frosted"?"lessthanthree":"thebabydino"," · CodePen"]}),u.jsx("button",{onClick:()=>Qt(!0),className:"w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors",children:u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[u.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.2"}),u.jsx("path",{d:"M4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.17 7 5.5 6.5 5.75C6.25 5.88 6 6.08 6 6.4V6.75",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round"}),u.jsx("circle",{cx:"6",cy:"8.25",r:"0.5",fill:"currentColor"})]})})]}),u.jsx("div",{className:"flex-1 flex min-h-0 px-5 gap-4",children:s==="gooey"?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"flex-[3] flex flex-col min-h-0",children:u.jsx("div",{className:"bg-[#fff0e5] rounded-2xl flex-1 overflow-hidden",children:u.jsx(K3,{params:te})})}),u.jsx("div",{className:"flex-[2] flex flex-col min-h-0",children:u.jsx("div",{className:"h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden",children:u.jsx("div",{className:"p-3 overflow-y-auto flex-1 min-h-0",children:u.jsx(J3,{params:te,onChange:ae})})})})]}):s==="frosted"?u.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:u.jsx("div",{className:"bg-neutral-900 rounded-2xl flex-1 overflow-hidden",children:u.jsx(iS,{})})}):s==="videotext"?u.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:u.jsx("div",{className:"bg-neutral-800 rounded-2xl flex-1 overflow-hidden",children:u.jsx(lS,{})})}):u.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:u.jsx("div",{className:"bg-white rounded-2xl flex-1 overflow-hidden",children:u.jsx(eS,{})})})}),u.jsx(oS,{active:s,onSelect:f})]}):r==="playground"?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 flex-shrink-0",children:[u.jsx("span",{className:"text-[13px] font-medium text-neutral-700",children:o==="echotrace"?"EchoTrace":o==="spotlight"?"Spotlight":o==="textmask"?"Text Mask":o==="flip"?"FLIP":o==="framers"?"Framers":"Squares"}),u.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400",children:o==="echotrace"?"Psychedelic Motion Trail":o==="spotlight"?"CSS Screen Blend Mode + GSAP":o==="textmask"?"SVG Mask + GSAP Bubble Reveal":o==="flip"?"GSAP Flip Layout Animation":o==="framers"?"Splitting.js + CSS Stagger Animation":"Normal Distribution + Gradient Color Mapping"}),u.jsx("div",{className:"flex-1"}),u.jsx("button",{onClick:()=>Qt(!0),className:"w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors",children:u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[u.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.2"}),u.jsx("path",{d:"M4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.17 7 5.5 6.5 5.75C6.25 5.88 6 6.08 6 6.4V6.75",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round"}),u.jsx("circle",{cx:"6",cy:"8.25",r:"0.5",fill:"currentColor"})]})})]}),u.jsxs("div",{className:"flex-1 flex min-h-0 px-5 gap-4",children:[u.jsx("div",{className:"flex-[3] flex flex-col min-h-0",children:u.jsxs("div",{className:`rounded-2xl flex-1 overflow-hidden ${o==="echotrace"?"bg-neutral-950":o==="textmask"||o==="framers"?"":"bg-white"}`,style:o==="textmask"?{backgroundColor:fe.bgColor}:o==="framers"?{backgroundColor:ce.bgColor}:void 0,children:[o==="echotrace"&&u.jsx(uS,{params:le}),o==="spotlight"&&u.jsx(k5,{params:me}),o==="textmask"&&u.jsx(O5,{params:fe}),o==="flip"&&u.jsx(lw,{params:Oe}),o==="framers"&&u.jsx(cw,{params:ce}),o==="squares"&&u.jsx(gw,{params:Le})]})}),u.jsx("div",{className:"flex-[2] flex flex-col min-h-0",children:u.jsx("div",{className:"h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden",children:u.jsxs("div",{className:"p-3 overflow-y-auto flex-1 min-h-0",children:[o==="echotrace"&&u.jsx(hS,{params:le,onChange:oe}),o==="spotlight"&&u.jsx(B5,{params:me,onChange:re}),o==="textmask"&&u.jsx(G5,{params:fe,onChange:Ae}),o==="flip"&&u.jsx(ow,{params:Oe,onChange:Se}),o==="framers"&&u.jsx(fw,{params:ce,onChange:ke}),o==="squares"&&u.jsx(xw,{params:Le,onChange:Qe})]})})})]}),u.jsx(P5,{active:o,onSelect:m})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 flex-shrink-0",children:[u.jsx("span",{className:"text-[13px] font-medium text-neutral-700",children:ge==="fission"?"Fission":ge==="metaball"?"Metaball":ge==="sdfmorph"?"SDF Morph":ge==="lettermorph"?"Letter Morph":ge==="liquidfill"?"Liquid Fill":ge==="gooeyfx"?"Gooey FX":ge==="eyetrack"?"Eye Track":ge==="liquidtrans"?"Liquid Trans":"Dot Grid"}),u.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400",children:ge==="fission"?"Canvas 2D + Additive Glow + Lerp Easing":ge==="metaball"?"CSS Gooey Filter (blur + contrast) + Lerp Easing":ge==="sdfmorph"?"WebGL SDF Morphing + Liquid Fusion + Easing Curves":ge==="lettermorph"?"WebGL 26-Letter SDF Morphing + Smooth Min Fusion":ge==="liquidfill"?"CSS Gooey Filter + SVG Path Morphing + Splash Particles":ge==="gooeyfx"?"SVG Gooey Filter (feGaussianBlur + feColorMatrix) Spectrum Bars":ge==="eyetrack"?"CSS Cursor Tracking + Lerp Smoothing + Blink Animation":ge==="liquidtrans"?"Simplex Noise + Double Domain Warping + Smoothstep Banding":"Canvas 2D Dot-to-Grid Morphing + Staggered Easing"}),u.jsx("div",{className:"flex-1"}),u.jsx("button",{onClick:()=>Qt(!0),className:"w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors",children:u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[u.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.2"}),u.jsx("path",{d:"M4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.17 7 5.5 6.5 5.75C6.25 5.88 6 6.08 6 6.4V6.75",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round"}),u.jsx("circle",{cx:"6",cy:"8.25",r:"0.5",fill:"currentColor"})]})})]}),u.jsxs("div",{className:"flex-1 flex min-h-0 px-5 gap-4",children:[u.jsx("div",{className:"flex-[3] flex flex-col min-h-0",children:u.jsxs("div",{className:"bg-neutral-950 rounded-2xl flex-1 overflow-hidden",children:[ge==="fission"&&u.jsx(yw,{params:be}),ge==="metaball"&&u.jsx(_w,{params:de}),ge==="sdfmorph"&&u.jsx(Tw,{params:Me}),ge==="lettermorph"&&u.jsx(Bw,{params:un}),ge==="liquidfill"&&u.jsx(Hw,{params:It}),ge==="gooeyfx"&&u.jsx(Xw,{params:Xt}),ge==="eyetrack"&&u.jsx($w,{params:dn}),ge==="liquidtrans"&&u.jsx(o_,{params:dt}),ge==="dotgrid"&&u.jsx(g_,{params:Xe,animStateRef:Zt,phaseOverrideRef:Xn}),ge==="dotgrid2"&&u.jsx(mC,{params:ia,audioTimeRef:la,analysisRef:ra,isPlaying:fl})]})}),u.jsx("div",{className:"flex-[2] flex flex-col min-h-0",children:u.jsx("div",{className:"h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden",children:u.jsxs("div",{className:"p-3 overflow-y-auto flex-1 min-h-0",children:[ge==="fission"&&u.jsx(Sw,{params:be,onChange:we}),ge==="metaball"&&u.jsx(Cw,{params:de,onChange:at}),ge==="sdfmorph"&&u.jsx(Dw,{params:Me,onChange:jn}),ge==="lettermorph"&&u.jsx(Lw,{params:un,onChange:Vt}),ge==="liquidfill"&&u.jsx(Vw,{params:It,onChange:Yt}),ge==="gooeyfx"&&u.jsx(Kw,{params:Xt,onChange:fn}),ge==="eyetrack"&&u.jsx(t_,{params:dn,onChange:mn}),ge==="liquidtrans"&&u.jsx(d_,{params:dt,onChange:gt}),ge==="dotgrid"&&u.jsx(B_,{params:Xe,onChange:aa,animStateRef:Zt,musicMode:qa,onMusicModeChange:Yn,phaseOverrideRef:Xn}),ge==="dotgrid2"&&u.jsx(kC,{params:ia,onChange:Mn,audioTimeRef:la,analysisRef:ra,onPlayingChange:oa})]})})})]}),u.jsx(FC,{active:ge,onSelect:je})]})}),Zn&&u.jsx(Ey,{guide:r==="shaders"?ky[l]:r==="demos"?zy[s]:r==="particle"?Ly[ge]:By[o],onClose:()=>Qt(!1)})]})};dy.createRoot(document.getElementById("root")).render(u.jsx(T1.StrictMode,{children:u.jsx(a4,{})}));
