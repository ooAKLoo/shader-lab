(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))o(S);new MutationObserver(S=>{for(const x of S)if(x.type==="childList")for(const c of x.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function p(S){const x={};return S.integrity&&(x.integrity=S.integrity),S.referrerPolicy&&(x.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?x.credentials="include":S.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function o(S){if(S.ep)return;S.ep=!0;const x=p(S);fetch(S.href,x)}})();function sd(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vu={exports:{}},Nn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function Uv(){if(_0)return Nn;_0=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function p(o,S,x){var c=null;if(x!==void 0&&(c=""+x),S.key!==void 0&&(c=""+S.key),"key"in S){x={};for(var m in S)m!=="key"&&(x[m]=S[m])}else x=S;return S=x.ref,{$$typeof:s,type:o,key:c,ref:S!==void 0?S:null,props:x}}return Nn.Fragment=d,Nn.jsx=p,Nn.jsxs=p,Nn}var M0;function Bv(){return M0||(M0=1,vu.exports=Uv()),vu.exports}var u=Bv(),pu={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function Ov(){if(U0)return ce;U0=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),c=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),X=Symbol.iterator;function F(y){return y===null||typeof y!="object"?null:(y=X&&y[X]||y["@@iterator"],typeof y=="function"?y:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,ee={};function ie(y,M,V){this.props=y,this.context=M,this.refs=ee,this.updater=V||P}ie.prototype.isReactComponent={},ie.prototype.setState=function(y,M){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,M,"setState")},ie.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function oe(){}oe.prototype=ie.prototype;function te(y,M,V){this.props=y,this.context=M,this.refs=ee,this.updater=V||P}var ae=te.prototype=new oe;ae.constructor=te,J(ae,ie.prototype),ae.isPureReactComponent=!0;var ne=Array.isArray;function Z(){}var B={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function H(y,M,V){var Q=V.ref;return{$$typeof:s,type:y,key:M,ref:Q!==void 0?Q:null,props:V}}function O(y,M){return H(y.type,M,y.props)}function G(y){return typeof y=="object"&&y!==null&&y.$$typeof===s}function K(y){var M={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(V){return M[V]})}var I=/\/+/g;function se(y,M){return typeof y=="object"&&y!==null&&y.key!=null?K(""+y.key):M.toString(36)}function Be(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Z,Z):(y.status="pending",y.then(function(M){y.status==="pending"&&(y.status="fulfilled",y.value=M)},function(M){y.status==="pending"&&(y.status="rejected",y.reason=M)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function z(y,M,V,Q,ue){var de=typeof y;(de==="undefined"||de==="boolean")&&(y=null);var Te=!1;if(y===null)Te=!0;else switch(de){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(y.$$typeof){case s:case d:Te=!0;break;case v:return Te=y._init,z(Te(y._payload),M,V,Q,ue)}}if(Te)return ue=ue(y),Te=Q===""?"."+se(y,0):Q,ne(ue)?(V="",Te!=null&&(V=Te.replace(I,"$&/")+"/"),z(ue,M,V,"",function(Da){return Da})):ue!=null&&(G(ue)&&(ue=O(ue,V+(ue.key==null||y&&y.key===ue.key?"":(""+ue.key).replace(I,"$&/")+"/")+Te)),M.push(ue)),1;Te=0;var Ie=Q===""?".":Q+":";if(ne(y))for(var Oe=0;Oe<y.length;Oe++)Q=y[Oe],de=Ie+se(Q,Oe),Te+=z(Q,M,V,de,ue);else if(Oe=F(y),typeof Oe=="function")for(y=Oe.call(y),Oe=0;!(Q=y.next()).done;)Q=Q.value,de=Ie+se(Q,Oe++),Te+=z(Q,M,V,de,ue);else if(de==="object"){if(typeof y.then=="function")return z(Be(y),M,V,Q,ue);throw M=String(y),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return Te}function q(y,M,V){if(y==null)return y;var Q=[],ue=0;return z(y,Q,"","",function(de){return M.call(V,de,ue++)}),Q}function $(y){if(y._status===-1){var M=y._result;M=M(),M.then(function(V){(y._status===0||y._status===-1)&&(y._status=1,y._result=V)},function(V){(y._status===0||y._status===-1)&&(y._status=2,y._result=V)}),y._status===-1&&(y._status=0,y._result=M)}if(y._status===1)return y._result.default;throw y._result}var xe=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},ye={map:q,forEach:function(y,M,V){q(y,function(){M.apply(this,arguments)},V)},count:function(y){var M=0;return q(y,function(){M++}),M},toArray:function(y){return q(y,function(M){return M})||[]},only:function(y){if(!G(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return ce.Activity=U,ce.Children=ye,ce.Component=ie,ce.Fragment=p,ce.Profiler=S,ce.PureComponent=te,ce.StrictMode=o,ce.Suspense=_,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ce.__COMPILER_RUNTIME={__proto__:null,c:function(y){return B.H.useMemoCache(y)}},ce.cache=function(y){return function(){return y.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(y,M,V){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var Q=J({},y.props),ue=y.key;if(M!=null)for(de in M.key!==void 0&&(ue=""+M.key),M)!L.call(M,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&M.ref===void 0||(Q[de]=M[de]);var de=arguments.length-2;if(de===1)Q.children=V;else if(1<de){for(var Te=Array(de),Ie=0;Ie<de;Ie++)Te[Ie]=arguments[Ie+2];Q.children=Te}return H(y.type,ue,Q)},ce.createContext=function(y){return y={$$typeof:c,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:x,_context:y},y},ce.createElement=function(y,M,V){var Q,ue={},de=null;if(M!=null)for(Q in M.key!==void 0&&(de=""+M.key),M)L.call(M,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ue[Q]=M[Q]);var Te=arguments.length-2;if(Te===1)ue.children=V;else if(1<Te){for(var Ie=Array(Te),Oe=0;Oe<Te;Oe++)Ie[Oe]=arguments[Oe+2];ue.children=Ie}if(y&&y.defaultProps)for(Q in Te=y.defaultProps,Te)ue[Q]===void 0&&(ue[Q]=Te[Q]);return H(y,de,ue)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(y){return{$$typeof:m,render:y}},ce.isValidElement=G,ce.lazy=function(y){return{$$typeof:v,_payload:{_status:-1,_result:y},_init:$}},ce.memo=function(y,M){return{$$typeof:A,type:y,compare:M===void 0?null:M}},ce.startTransition=function(y){var M=B.T,V={};B.T=V;try{var Q=y(),ue=B.S;ue!==null&&ue(V,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(Z,xe)}catch(de){xe(de)}finally{M!==null&&V.types!==null&&(M.types=V.types),B.T=M}},ce.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ce.use=function(y){return B.H.use(y)},ce.useActionState=function(y,M,V){return B.H.useActionState(y,M,V)},ce.useCallback=function(y,M){return B.H.useCallback(y,M)},ce.useContext=function(y){return B.H.useContext(y)},ce.useDebugValue=function(){},ce.useDeferredValue=function(y,M){return B.H.useDeferredValue(y,M)},ce.useEffect=function(y,M){return B.H.useEffect(y,M)},ce.useEffectEvent=function(y){return B.H.useEffectEvent(y)},ce.useId=function(){return B.H.useId()},ce.useImperativeHandle=function(y,M,V){return B.H.useImperativeHandle(y,M,V)},ce.useInsertionEffect=function(y,M){return B.H.useInsertionEffect(y,M)},ce.useLayoutEffect=function(y,M){return B.H.useLayoutEffect(y,M)},ce.useMemo=function(y,M){return B.H.useMemo(y,M)},ce.useOptimistic=function(y,M){return B.H.useOptimistic(y,M)},ce.useReducer=function(y,M,V){return B.H.useReducer(y,M,V)},ce.useRef=function(y){return B.H.useRef(y)},ce.useState=function(y){return B.H.useState(y)},ce.useSyncExternalStore=function(y,M,V){return B.H.useSyncExternalStore(y,M,V)},ce.useTransition=function(){return B.H.useTransition()},ce.version="19.2.4",ce}var B0;function Cu(){return B0||(B0=1,pu.exports=Ov()),pu.exports}var D=Cu();const Lv=sd(D);var hu={exports:{}},Rn={},xu={exports:{}},gu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function Hv(){return O0||(O0=1,(function(s){function d(z,q){var $=z.length;z.push(q);e:for(;0<$;){var xe=$-1>>>1,ye=z[xe];if(0<S(ye,q))z[xe]=q,z[$]=ye,$=xe;else break e}}function p(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var q=z[0],$=z.pop();if($!==q){z[0]=$;e:for(var xe=0,ye=z.length,y=ye>>>1;xe<y;){var M=2*(xe+1)-1,V=z[M],Q=M+1,ue=z[Q];if(0>S(V,$))Q<ye&&0>S(ue,V)?(z[xe]=ue,z[Q]=$,xe=Q):(z[xe]=V,z[M]=$,xe=M);else if(Q<ye&&0>S(ue,$))z[xe]=ue,z[Q]=$,xe=Q;else break e}}return q}function S(z,q){var $=z.sortIndex-q.sortIndex;return $!==0?$:z.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;s.unstable_now=function(){return x.now()}}else{var c=Date,m=c.now();s.unstable_now=function(){return c.now()-m}}var _=[],A=[],v=1,U=null,X=3,F=!1,P=!1,J=!1,ee=!1,ie=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function ae(z){for(var q=p(A);q!==null;){if(q.callback===null)o(A);else if(q.startTime<=z)o(A),q.sortIndex=q.expirationTime,d(_,q);else break;q=p(A)}}function ne(z){if(J=!1,ae(z),!P)if(p(_)!==null)P=!0,Z||(Z=!0,K());else{var q=p(A);q!==null&&Be(ne,q.startTime-z)}}var Z=!1,B=-1,L=5,H=-1;function O(){return ee?!0:!(s.unstable_now()-H<L)}function G(){if(ee=!1,Z){var z=s.unstable_now();H=z;var q=!0;try{e:{P=!1,J&&(J=!1,oe(B),B=-1),F=!0;var $=X;try{t:{for(ae(z),U=p(_);U!==null&&!(U.expirationTime>z&&O());){var xe=U.callback;if(typeof xe=="function"){U.callback=null,X=U.priorityLevel;var ye=xe(U.expirationTime<=z);if(z=s.unstable_now(),typeof ye=="function"){U.callback=ye,ae(z),q=!0;break t}U===p(_)&&o(_),ae(z)}else o(_);U=p(_)}if(U!==null)q=!0;else{var y=p(A);y!==null&&Be(ne,y.startTime-z),q=!1}}break e}finally{U=null,X=$,F=!1}q=void 0}}finally{q?K():Z=!1}}}var K;if(typeof te=="function")K=function(){te(G)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,se=I.port2;I.port1.onmessage=G,K=function(){se.postMessage(null)}}else K=function(){ie(G,0)};function Be(z,q){B=ie(function(){z(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return X},s.unstable_next=function(z){switch(X){case 1:case 2:case 3:var q=3;break;default:q=X}var $=X;X=q;try{return z()}finally{X=$}},s.unstable_requestPaint=function(){ee=!0},s.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=X;X=z;try{return q()}finally{X=$}},s.unstable_scheduleCallback=function(z,q,$){var xe=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?xe+$:xe):$=xe,z){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=$+ye,z={id:v++,callback:q,priorityLevel:z,startTime:$,expirationTime:ye,sortIndex:-1},$>xe?(z.sortIndex=$,d(A,z),p(_)===null&&z===p(A)&&(J?(oe(B),B=-1):J=!0,Be(ne,$-xe))):(z.sortIndex=ye,d(_,z),P||F||(P=!0,Z||(Z=!0,K()))),z},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(z){var q=X;return function(){var $=X;X=q;try{return z.apply(this,arguments)}finally{X=$}}}})(gu)),gu}var L0;function qv(){return L0||(L0=1,xu.exports=Hv()),xu.exports}var yu={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function Gv(){if(H0)return $e;H0=1;var s=Cu();function d(_){var A="https://react.dev/errors/"+_;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)A+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(){}var o={d:{f:p,r:function(){throw Error(d(522))},D:p,C:p,L:p,m:p,X:p,S:p,M:p},p:0,findDOMNode:null},S=Symbol.for("react.portal");function x(_,A,v){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:U==null?null:""+U,children:_,containerInfo:A,implementation:v}}var c=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,A){if(_==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,$e.createPortal=function(_,A){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(d(299));return x(_,A,null,v)},$e.flushSync=function(_){var A=c.T,v=o.p;try{if(c.T=null,o.p=2,_)return _()}finally{c.T=A,o.p=v,o.d.f()}},$e.preconnect=function(_,A){typeof _=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,o.d.C(_,A))},$e.prefetchDNS=function(_){typeof _=="string"&&o.d.D(_)},$e.preinit=function(_,A){if(typeof _=="string"&&A&&typeof A.as=="string"){var v=A.as,U=m(v,A.crossOrigin),X=typeof A.integrity=="string"?A.integrity:void 0,F=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;v==="style"?o.d.S(_,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:U,integrity:X,fetchPriority:F}):v==="script"&&o.d.X(_,{crossOrigin:U,integrity:X,fetchPriority:F,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},$e.preinitModule=function(_,A){if(typeof _=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var v=m(A.as,A.crossOrigin);o.d.M(_,{crossOrigin:v,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&o.d.M(_)},$e.preload=function(_,A){if(typeof _=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var v=A.as,U=m(v,A.crossOrigin);o.d.L(_,v,{crossOrigin:U,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},$e.preloadModule=function(_,A){if(typeof _=="string")if(A){var v=m(A.as,A.crossOrigin);o.d.m(_,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:v,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else o.d.m(_)},$e.requestFormReset=function(_){o.d.r(_)},$e.unstable_batchedUpdates=function(_,A){return _(A)},$e.useFormState=function(_,A,v){return c.H.useFormState(_,A,v)},$e.useFormStatus=function(){return c.H.useHostTransitionStatus()},$e.version="19.2.4",$e}var q0;function Fv(){if(q0)return yu.exports;q0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),yu.exports=Gv(),yu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function Vv(){if(G0)return Rn;G0=1;var s=qv(),d=Cu(),p=Fv();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(x(e)!==e)throw Error(o(188))}function A(e){var t=e.alternate;if(!t){if(t=x(e),t===null)throw Error(o(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return _(n),e;if(i===a)return _(n),t;i=i.sibling}throw Error(o(188))}if(l.return!==a.return)l=n,a=i;else{for(var r=!1,f=n.child;f;){if(f===l){r=!0,l=n,a=i;break}if(f===a){r=!0,a=n,l=i;break}f=f.sibling}if(!r){for(f=i.child;f;){if(f===l){r=!0,l=i,a=n;break}if(f===a){r=!0,a=i,l=n;break}f=f.sibling}if(!r)throw Error(o(189))}}if(l.alternate!==a)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var U=Object.assign,X=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),oe=Symbol.for("react.consumer"),te=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case ie:return"Profiler";case ee:return"StrictMode";case ne:return"Suspense";case Z:return"SuspenseList";case H:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case te:return e.displayName||"Context";case oe:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case L:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var Be=Array.isArray,z=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},xe=[],ye=-1;function y(e){return{current:e}}function M(e){0>ye||(e.current=xe[ye],xe[ye]=null,ye--)}function V(e,t){ye++,xe[ye]=e.current,e.current=t}var Q=y(null),ue=y(null),de=y(null),Te=y(null);function Ie(e,t){switch(V(de,t),V(ue,e),V(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?t0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=t0(t),e=l0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(Q),V(Q,e)}function Oe(){M(Q),M(ue),M(de)}function Da(e){e.memoizedState!==null&&V(Te,e);var t=Q.current,l=l0(t,e.type);t!==l&&(V(ue,e),V(Q,l))}function En(e){ue.current===e&&(M(Q),M(ue)),Te.current===e&&(M(Te),bn._currentValue=$)}var Ji,Du;function Tl(e){if(Ji===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Ji=t&&t[1]||"",Du=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ji+e+Du}var Wi=!1;function $i(e,t){if(!e||Wi)return"";Wi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(w){var R=w}Reflect.construct(e,[],j)}else{try{j.call()}catch(w){R=w}e.call(j.prototype)}}else{try{throw Error()}catch(w){R=w}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(w){if(w&&R&&typeof w.stack=="string")return[w.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],f=i[1];if(r&&f){var h=r.split(`
`),N=f.split(`
`);for(n=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;n<N.length&&!N[n].includes("DetermineComponentFrameRoot");)n++;if(a===h.length||n===N.length)for(a=h.length-1,n=N.length-1;1<=a&&0<=n&&h[a]!==N[n];)n--;for(;1<=a&&0<=n;a--,n--)if(h[a]!==N[n]){if(a!==1||n!==1)do if(a--,n--,0>n||h[a]!==N[n]){var E=`
`+h[a].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=a&&0<=n);break}}}finally{Wi=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Tl(l):""}function fd(e,t){switch(e.tag){case 26:case 27:case 5:return Tl(e.type);case 16:return Tl("Lazy");case 13:return e.child!==t&&t!==null?Tl("Suspense Fallback"):Tl("Suspense");case 19:return Tl("SuspenseList");case 0:case 15:return $i(e.type,!1);case 11:return $i(e.type.render,!1);case 1:return $i(e.type,!0);case 31:return Tl("Activity");default:return""}}function ju(e){try{var t="",l=null;do t+=fd(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ii=Object.prototype.hasOwnProperty,Pi=s.unstable_scheduleCallback,ec=s.unstable_cancelCallback,dd=s.unstable_shouldYield,md=s.unstable_requestPaint,ot=s.unstable_now,vd=s.unstable_getCurrentPriorityLevel,_u=s.unstable_ImmediatePriority,Mu=s.unstable_UserBlockingPriority,Cn=s.unstable_NormalPriority,pd=s.unstable_LowPriority,Uu=s.unstable_IdlePriority,hd=s.log,xd=s.unstable_setDisableYieldValue,ja=null,ut=null;function It(e){if(typeof hd=="function"&&xd(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(ja,e)}catch{}}var rt=Math.clz32?Math.clz32:bd,gd=Math.log,yd=Math.LN2;function bd(e){return e>>>=0,e===0?32:31-(gd(e)/yd|0)|0}var Dn=256,jn=262144,_n=4194304;function Nl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?n=Nl(a):(r&=f,r!==0?n=Nl(r):l||(l=f&~e,l!==0&&(n=Nl(l))))):(f=a&~i,f!==0?n=Nl(f):r!==0?n=Nl(r):l||(l=a&~e,l!==0&&(n=Nl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function _a(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bu(){var e=_n;return _n<<=1,(_n&62914560)===0&&(_n=4194304),e}function tc(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ma(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ad(e,t,l,a,n,i){var r=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var f=e.entanglements,h=e.expirationTimes,N=e.hiddenUpdates;for(l=r&~l;0<l;){var E=31-rt(l),j=1<<E;f[E]=0,h[E]=-1;var R=N[E];if(R!==null)for(N[E]=null,E=0;E<R.length;E++){var w=R[E];w!==null&&(w.lane&=-536870913)}l&=~j}a!==0&&Ou(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function Ou(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-rt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Lu(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-rt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Hu(e,t){var l=t&-t;return l=(l&42)!==0?1:lc(l),(l&(e.suspendedLanes|t))!==0?0:l}function lc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ac(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qu(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:R0(e.type))}function Gu(e,t){var l=q.p;try{return q.p=e,t()}finally{q.p=l}}var Pt=Math.random().toString(36).slice(2),ke="__reactFiber$"+Pt,et="__reactProps$"+Pt,Yl="__reactContainer$"+Pt,nc="__reactEvents$"+Pt,Td="__reactListeners$"+Pt,Nd="__reactHandles$"+Pt,Fu="__reactResources$"+Pt,Ua="__reactMarker$"+Pt;function ic(e){delete e[ke],delete e[et],delete e[nc],delete e[Td],delete e[Nd]}function Xl(e){var t=e[ke];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Yl]||l[ke]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=r0(e);e!==null;){if(l=e[ke])return l;e=r0(e)}return t}e=l,l=e.parentNode}return null}function Ql(e){if(e=e[ke]||e[Yl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ba(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function kl(e){var t=e[Fu];return t||(t=e[Fu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Ua]=!0}var Vu=new Set,Yu={};function Rl(e,t){Zl(e,t),Zl(e+"Capture",t)}function Zl(e,t){for(Yu[e]=t,e=0;e<t.length;e++)Vu.add(t[e])}var Rd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xu={},Qu={};function wd(e){return Ii.call(Qu,e)?!0:Ii.call(Xu,e)?!1:Rd.test(e)?Qu[e]=!0:(Xu[e]=!0,!1)}function Un(e,t,l){if(wd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Bn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Ut(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zd(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){l=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cc(e){if(!e._valueTracker){var t=ku(e)?"checked":"value";e._valueTracker=zd(e,t,""+e[t])}}function Zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=ku(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function On(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ed=/[\n"\\]/g;function gt(e){return e.replace(Ed,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function oc(e,t,l,a,n,i,r,f){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?uc(e,r,xt(t)):l!=null?uc(e,r,xt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+xt(f):e.removeAttribute("name")}function Ku(e,t,l,a,n,i,r,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){cc(e);return}l=l!=null?""+xt(l):"",t=t!=null?""+xt(t):l,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),cc(e)}function uc(e,t,l){t==="number"&&On(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Kl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+xt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Ju(e,t,l){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+xt(l):""}function Wu(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(o(92));if(Be(a)){if(1<a.length)throw Error(o(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=xt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),cc(e)}function Jl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Cd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $u(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Cd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Iu(e,t,l){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&$u(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&$u(e,i,t[i])}function rc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ln(e){return jd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bt(){}var sc=null;function fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,$l=null;function Pu(e){var t=Ql(e);if(t&&(e=t.stateNode)){var l=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(oc(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[et]||null;if(!n)throw Error(o(90));oc(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Zu(a)}break e;case"textarea":Ju(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Kl(e,!!l.multiple,t,!1)}}}var dc=!1;function er(e,t,l){if(dc)return e(t,l);dc=!0;try{var a=e(t);return a}finally{if(dc=!1,(Wl!==null||$l!==null)&&(Ni(),Wl&&(t=Wl,e=$l,$l=Wl=null,Pu(t),e)))for(t=0;t<e.length;t++)Pu(e[t])}}function Oa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[et]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(o(231,t,typeof l));return l}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mc=!1;if(Ot)try{var La={};Object.defineProperty(La,"passive",{get:function(){mc=!0}}),window.addEventListener("test",La,La),window.removeEventListener("test",La,La)}catch{mc=!1}var el=null,vc=null,Hn=null;function tr(){if(Hn)return Hn;var e,t=vc,l=t.length,a,n="value"in el?el.value:el.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var r=l-e;for(a=1;a<=r&&t[l-a]===n[i-a];a++);return Hn=n.slice(e,1<a?1-a:void 0)}function qn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gn(){return!0}function lr(){return!1}function tt(e){function t(l,a,n,i,r){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(l=e[f],this[f]=l?l(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gn:lr,this.isPropagationStopped=lr,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),t}var wl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fn=tt(wl),Ha=U({},wl,{view:0,detail:0}),_d=tt(Ha),pc,hc,qa,Vn=U({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qa&&(qa&&e.type==="mousemove"?(pc=e.screenX-qa.screenX,hc=e.screenY-qa.screenY):hc=pc=0,qa=e),pc)},movementY:function(e){return"movementY"in e?e.movementY:hc}}),ar=tt(Vn),Md=U({},Vn,{dataTransfer:0}),Ud=tt(Md),Bd=U({},Ha,{relatedTarget:0}),xc=tt(Bd),Od=U({},wl,{animationName:0,elapsedTime:0,pseudoElement:0}),Ld=tt(Od),Hd=U({},wl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qd=tt(Hd),Gd=U({},wl,{data:0}),nr=tt(Gd),Fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yd[e])?!!t[e]:!1}function gc(){return Xd}var Qd=U({},Ha,{key:function(e){if(e.key){var t=Fd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(e){return e.type==="keypress"?qn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=tt(Qd),Zd=U({},Vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ir=tt(Zd),Kd=U({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),Jd=tt(Kd),Wd=U({},wl,{propertyName:0,elapsedTime:0,pseudoElement:0}),$d=tt(Wd),Id=U({},Vn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=tt(Id),em=U({},wl,{newState:0,oldState:0}),tm=tt(em),lm=[9,13,27,32],yc=Ot&&"CompositionEvent"in window,Ga=null;Ot&&"documentMode"in document&&(Ga=document.documentMode);var am=Ot&&"TextEvent"in window&&!Ga,cr=Ot&&(!yc||Ga&&8<Ga&&11>=Ga),or=" ",ur=!1;function rr(e,t){switch(e){case"keyup":return lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Il=!1;function nm(e,t){switch(e){case"compositionend":return sr(t);case"keypress":return t.which!==32?null:(ur=!0,or);case"textInput":return e=t.data,e===or&&ur?null:e;default:return null}}function im(e,t){if(Il)return e==="compositionend"||!yc&&rr(e,t)?(e=tr(),Hn=vc=el=null,Il=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cr&&t.locale!=="ko"?null:t.data;default:return null}}var cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cm[e.type]:t==="textarea"}function dr(e,t,l,a){Wl?$l?$l.push(a):$l=[a]:Wl=a,t=ji(t,"onChange"),0<t.length&&(l=new Fn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Fa=null,Va=null;function om(e){Jf(e,0)}function Yn(e){var t=Ba(e);if(Zu(t))return e}function mr(e,t){if(e==="change")return t}var vr=!1;if(Ot){var bc;if(Ot){var Sc="oninput"in document;if(!Sc){var pr=document.createElement("div");pr.setAttribute("oninput","return;"),Sc=typeof pr.oninput=="function"}bc=Sc}else bc=!1;vr=bc&&(!document.documentMode||9<document.documentMode)}function hr(){Fa&&(Fa.detachEvent("onpropertychange",xr),Va=Fa=null)}function xr(e){if(e.propertyName==="value"&&Yn(Va)){var t=[];dr(t,Va,e,fc(e)),er(om,t)}}function um(e,t,l){e==="focusin"?(hr(),Fa=t,Va=l,Fa.attachEvent("onpropertychange",xr)):e==="focusout"&&hr()}function rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yn(Va)}function sm(e,t){if(e==="click")return Yn(t)}function fm(e,t){if(e==="input"||e==="change")return Yn(t)}function dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:dm;function Ya(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ii.call(t,n)||!st(e[n],t[n]))return!1}return!0}function gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yr(e,t){var l=gr(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=gr(l)}}function br(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?br(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=On(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=On(e.document)}return t}function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mm=Ot&&"documentMode"in document&&11>=document.documentMode,Pl=null,Tc=null,Xa=null,Nc=!1;function Ar(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nc||Pl==null||Pl!==On(a)||(a=Pl,"selectionStart"in a&&Ac(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Xa&&Ya(Xa,a)||(Xa=a,a=ji(Tc,"onSelect"),0<a.length&&(t=new Fn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Pl)))}function zl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ea={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionrun:zl("Transition","TransitionRun"),transitionstart:zl("Transition","TransitionStart"),transitioncancel:zl("Transition","TransitionCancel"),transitionend:zl("Transition","TransitionEnd")},Rc={},Tr={};Ot&&(Tr=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function El(e){if(Rc[e])return Rc[e];if(!ea[e])return e;var t=ea[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Tr)return Rc[e]=t[l];return e}var Nr=El("animationend"),Rr=El("animationiteration"),wr=El("animationstart"),vm=El("transitionrun"),pm=El("transitionstart"),hm=El("transitioncancel"),zr=El("transitionend"),Er=new Map,wc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wc.push("scrollEnd");function zt(e,t){Er.set(e,t),Rl(t,[e])}var Xn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],ta=0,zc=0;function Qn(){for(var e=ta,t=zc=ta=0;t<e;){var l=yt[t];yt[t++]=null;var a=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var i=yt[t];if(yt[t++]=null,a!==null&&n!==null){var r=a.pending;r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n}i!==0&&Cr(l,n,i)}}function kn(e,t,l,a){yt[ta++]=e,yt[ta++]=t,yt[ta++]=l,yt[ta++]=a,zc|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ec(e,t,l,a){return kn(e,t,l,a),Zn(e)}function Cl(e,t){return kn(e,null,null,t),Zn(e)}function Cr(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-rt(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function Zn(e){if(50<mn)throw mn=0,Ho=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var la={};function xm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,l,a){return new xm(e,t,l,a)}function Cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var l=e.alternate;return l===null?(l=ft(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Dr(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kn(e,t,l,a,n,i){var r=0;if(a=e,typeof e=="function")Cc(e)&&(r=1);else if(typeof e=="string")r=Av(e,l,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case H:return e=ft(31,l,t,n),e.elementType=H,e.lanes=i,e;case J:return Dl(l.children,n,i,t);case ee:r=8,n|=24;break;case ie:return e=ft(12,l,t,n|2),e.elementType=ie,e.lanes=i,e;case ne:return e=ft(13,l,t,n),e.elementType=ne,e.lanes=i,e;case Z:return e=ft(19,l,t,n),e.elementType=Z,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case te:r=10;break e;case oe:r=9;break e;case ae:r=11;break e;case B:r=14;break e;case L:r=16,a=null;break e}r=29,l=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=ft(r,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Dl(e,t,l,a){return e=ft(7,e,a,t),e.lanes=l,e}function Dc(e,t,l){return e=ft(6,e,null,t),e.lanes=l,e}function jr(e){var t=ft(18,null,null,0);return t.stateNode=e,t}function jc(e,t,l){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _r=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var l=_r.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ju(t)},_r.set(e,t),t)}return{value:e,source:t,stack:ju(t)}}var aa=[],na=0,Jn=null,Qa=0,St=[],At=0,tl=null,Dt=1,jt="";function Ht(e,t){aa[na++]=Qa,aa[na++]=Jn,Jn=e,Qa=t}function Mr(e,t,l){St[At++]=Dt,St[At++]=jt,St[At++]=tl,tl=e;var a=Dt;e=jt;var n=32-rt(a)-1;a&=~(1<<n),l+=1;var i=32-rt(t)+n;if(30<i){var r=n-n%5;i=(a&(1<<r)-1).toString(32),a>>=r,n-=r,Dt=1<<32-rt(t)+n|l<<n|a,jt=i+e}else Dt=1<<i|l<<n|a,jt=e}function _c(e){e.return!==null&&(Ht(e,1),Mr(e,1,0))}function Mc(e){for(;e===Jn;)Jn=aa[--na],aa[na]=null,Qa=aa[--na],aa[na]=null;for(;e===tl;)tl=St[--At],St[At]=null,jt=St[--At],St[At]=null,Dt=St[--At],St[At]=null}function Ur(e,t){St[At++]=Dt,St[At++]=jt,St[At++]=tl,Dt=t.id,jt=t.overflow,tl=e}var Ze=null,De=null,ge=!1,ll=null,Tt=!1,Uc=Error(o(519));function al(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ka(bt(t,e)),Uc}function Br(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[ke]=e,t[et]=a,l){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(l=0;l<pn.length;l++)ve(pn[l],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),Ku(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),Wu(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Pf(t.textContent,l)?(a.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),a.onScroll!=null&&ve("scroll",t),a.onScrollEnd!=null&&ve("scrollend",t),a.onClick!=null&&(t.onclick=Bt),t=!0):t=!1,t||al(e,!0)}function Or(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 31:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Ze=Ze.return}}function ia(e){if(e!==Ze)return!1;if(!ge)return Or(e),ge=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Po(e.type,e.memoizedProps)),l=!l),l&&De&&al(e),Or(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));De=u0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));De=u0(e)}else t===27?(t=De,xl(e.type)?(e=nu,nu=null,De=e):De=t):De=Ze?Rt(e.stateNode.nextSibling):null;return!0}function jl(){De=Ze=null,ge=!1}function Bc(){var e=ll;return e!==null&&(it===null?it=e:it.push.apply(it,e),ll=null),e}function ka(e){ll===null?ll=[e]:ll.push(e)}var Oc=y(null),_l=null,qt=null;function nl(e,t,l){V(Oc,t._currentValue),t._currentValue=l}function Gt(e){e._currentValue=Oc.current,M(Oc)}function Lc(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Hc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=n;for(var h=0;h<t.length;h++)if(f.context===t[h]){i.lanes|=l,f=i.alternate,f!==null&&(f.lanes|=l),Lc(i.return,l,e),a||(r=null);break e}i=f.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(o(341));r.lanes|=l,i=r.alternate,i!==null&&(i.lanes|=l),Lc(r,l,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function ca(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var f=n.type;st(n.pendingProps.value,r.value)||(e!==null?e.push(f):e=[f])}}else if(n===Te.current){if(r=n.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(bn):e=[bn])}n=n.return}e!==null&&Hc(t,e,l,a),t.flags|=262144}function Wn(e){for(e=e.firstContext;e!==null;){if(!st(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ml(e){_l=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return Lr(_l,e)}function $n(e,t){return _l===null&&Ml(e),Lr(e,t)}function Lr(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},qt===null){if(e===null)throw Error(o(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return l}var gm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},ym=s.unstable_scheduleCallback,bm=s.unstable_NormalPriority,qe={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qc(){return{controller:new gm,data:new Map,refCount:0}}function Za(e){e.refCount--,e.refCount===0&&ym(bm,function(){e.controller.abort()})}var Ka=null,Gc=0,oa=0,ua=null;function Sm(e,t){if(Ka===null){var l=Ka=[];Gc=0,oa=Xo(),ua={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Gc++,t.then(Hr,Hr),t}function Hr(){if(--Gc===0&&Ka!==null){ua!==null&&(ua.status="fulfilled");var e=Ka;Ka=null,oa=0,ua=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Am(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var qr=z.S;z.S=function(e,t){Tf=ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sm(e,t),qr!==null&&qr(e,t)};var Ul=y(null);function Fc(){var e=Ul.current;return e!==null?e:Ce.pooledCache}function In(e,t){t===null?V(Ul,Ul.current):V(Ul,t.pool)}function Gr(){var e=Fc();return e===null?null:{parent:qe._currentValue,pool:e}}var ra=Error(o(460)),Vc=Error(o(474)),Pn=Error(o(542)),ei={then:function(){}};function Fr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vr(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Bt,Bt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xr(e),e;default:if(typeof t.status=="string")t.then(Bt,Bt);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xr(e),e}throw Ol=t,ra}}function Bl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Ol=l,ra):l}}var Ol=null;function Yr(){if(Ol===null)throw Error(o(459));var e=Ol;return Ol=null,e}function Xr(e){if(e===ra||e===Pn)throw Error(o(483))}var sa=null,Ja=0;function ti(e){var t=Ja;return Ja+=1,sa===null&&(sa=[]),Vr(sa,e,t)}function Wa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function li(e,t){throw t.$$typeof===X?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Qr(e){function t(b,g){if(e){var T=b.deletions;T===null?(b.deletions=[g],b.flags|=16):T.push(g)}}function l(b,g){if(!e)return null;for(;g!==null;)t(b,g),g=g.sibling;return null}function a(b){for(var g=new Map;b!==null;)b.key!==null?g.set(b.key,b):g.set(b.index,b),b=b.sibling;return g}function n(b,g){return b=Lt(b,g),b.index=0,b.sibling=null,b}function i(b,g,T){return b.index=T,e?(T=b.alternate,T!==null?(T=T.index,T<g?(b.flags|=67108866,g):T):(b.flags|=67108866,g)):(b.flags|=1048576,g)}function r(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function f(b,g,T,C){return g===null||g.tag!==6?(g=Dc(T,b.mode,C),g.return=b,g):(g=n(g,T),g.return=b,g)}function h(b,g,T,C){var W=T.type;return W===J?E(b,g,T.props.children,C,T.key):g!==null&&(g.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===L&&Bl(W)===g.type)?(g=n(g,T.props),Wa(g,T),g.return=b,g):(g=Kn(T.type,T.key,T.props,null,b.mode,C),Wa(g,T),g.return=b,g)}function N(b,g,T,C){return g===null||g.tag!==4||g.stateNode.containerInfo!==T.containerInfo||g.stateNode.implementation!==T.implementation?(g=jc(T,b.mode,C),g.return=b,g):(g=n(g,T.children||[]),g.return=b,g)}function E(b,g,T,C,W){return g===null||g.tag!==7?(g=Dl(T,b.mode,C,W),g.return=b,g):(g=n(g,T),g.return=b,g)}function j(b,g,T){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Dc(""+g,b.mode,T),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case F:return T=Kn(g.type,g.key,g.props,null,b.mode,T),Wa(T,g),T.return=b,T;case P:return g=jc(g,b.mode,T),g.return=b,g;case L:return g=Bl(g),j(b,g,T)}if(Be(g)||K(g))return g=Dl(g,b.mode,T,null),g.return=b,g;if(typeof g.then=="function")return j(b,ti(g),T);if(g.$$typeof===te)return j(b,$n(b,g),T);li(b,g)}return null}function R(b,g,T,C){var W=g!==null?g.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return W!==null?null:f(b,g,""+T,C);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case F:return T.key===W?h(b,g,T,C):null;case P:return T.key===W?N(b,g,T,C):null;case L:return T=Bl(T),R(b,g,T,C)}if(Be(T)||K(T))return W!==null?null:E(b,g,T,C,null);if(typeof T.then=="function")return R(b,g,ti(T),C);if(T.$$typeof===te)return R(b,g,$n(b,T),C);li(b,T)}return null}function w(b,g,T,C,W){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return b=b.get(T)||null,f(g,b,""+C,W);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case F:return b=b.get(C.key===null?T:C.key)||null,h(g,b,C,W);case P:return b=b.get(C.key===null?T:C.key)||null,N(g,b,C,W);case L:return C=Bl(C),w(b,g,T,C,W)}if(Be(C)||K(C))return b=b.get(T)||null,E(g,b,C,W,null);if(typeof C.then=="function")return w(b,g,T,ti(C),W);if(C.$$typeof===te)return w(b,g,T,$n(g,C),W);li(g,C)}return null}function Y(b,g,T,C){for(var W=null,be=null,k=g,fe=g=0,he=null;k!==null&&fe<T.length;fe++){k.index>fe?(he=k,k=null):he=k.sibling;var Se=R(b,k,T[fe],C);if(Se===null){k===null&&(k=he);break}e&&k&&Se.alternate===null&&t(b,k),g=i(Se,g,fe),be===null?W=Se:be.sibling=Se,be=Se,k=he}if(fe===T.length)return l(b,k),ge&&Ht(b,fe),W;if(k===null){for(;fe<T.length;fe++)k=j(b,T[fe],C),k!==null&&(g=i(k,g,fe),be===null?W=k:be.sibling=k,be=k);return ge&&Ht(b,fe),W}for(k=a(k);fe<T.length;fe++)he=w(k,b,fe,T[fe],C),he!==null&&(e&&he.alternate!==null&&k.delete(he.key===null?fe:he.key),g=i(he,g,fe),be===null?W=he:be.sibling=he,be=he);return e&&k.forEach(function(Al){return t(b,Al)}),ge&&Ht(b,fe),W}function le(b,g,T,C){if(T==null)throw Error(o(151));for(var W=null,be=null,k=g,fe=g=0,he=null,Se=T.next();k!==null&&!Se.done;fe++,Se=T.next()){k.index>fe?(he=k,k=null):he=k.sibling;var Al=R(b,k,Se.value,C);if(Al===null){k===null&&(k=he);break}e&&k&&Al.alternate===null&&t(b,k),g=i(Al,g,fe),be===null?W=Al:be.sibling=Al,be=Al,k=he}if(Se.done)return l(b,k),ge&&Ht(b,fe),W;if(k===null){for(;!Se.done;fe++,Se=T.next())Se=j(b,Se.value,C),Se!==null&&(g=i(Se,g,fe),be===null?W=Se:be.sibling=Se,be=Se);return ge&&Ht(b,fe),W}for(k=a(k);!Se.done;fe++,Se=T.next())Se=w(k,b,fe,Se.value,C),Se!==null&&(e&&Se.alternate!==null&&k.delete(Se.key===null?fe:Se.key),g=i(Se,g,fe),be===null?W=Se:be.sibling=Se,be=Se);return e&&k.forEach(function(Mv){return t(b,Mv)}),ge&&Ht(b,fe),W}function Ee(b,g,T,C){if(typeof T=="object"&&T!==null&&T.type===J&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case F:e:{for(var W=T.key;g!==null;){if(g.key===W){if(W=T.type,W===J){if(g.tag===7){l(b,g.sibling),C=n(g,T.props.children),C.return=b,b=C;break e}}else if(g.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===L&&Bl(W)===g.type){l(b,g.sibling),C=n(g,T.props),Wa(C,T),C.return=b,b=C;break e}l(b,g);break}else t(b,g);g=g.sibling}T.type===J?(C=Dl(T.props.children,b.mode,C,T.key),C.return=b,b=C):(C=Kn(T.type,T.key,T.props,null,b.mode,C),Wa(C,T),C.return=b,b=C)}return r(b);case P:e:{for(W=T.key;g!==null;){if(g.key===W)if(g.tag===4&&g.stateNode.containerInfo===T.containerInfo&&g.stateNode.implementation===T.implementation){l(b,g.sibling),C=n(g,T.children||[]),C.return=b,b=C;break e}else{l(b,g);break}else t(b,g);g=g.sibling}C=jc(T,b.mode,C),C.return=b,b=C}return r(b);case L:return T=Bl(T),Ee(b,g,T,C)}if(Be(T))return Y(b,g,T,C);if(K(T)){if(W=K(T),typeof W!="function")throw Error(o(150));return T=W.call(T),le(b,g,T,C)}if(typeof T.then=="function")return Ee(b,g,ti(T),C);if(T.$$typeof===te)return Ee(b,g,$n(b,T),C);li(b,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,g!==null&&g.tag===6?(l(b,g.sibling),C=n(g,T),C.return=b,b=C):(l(b,g),C=Dc(T,b.mode,C),C.return=b,b=C),r(b)):l(b,g)}return function(b,g,T,C){try{Ja=0;var W=Ee(b,g,T,C);return sa=null,W}catch(k){if(k===ra||k===Pn)throw k;var be=ft(29,k,null,b.mode);return be.lanes=C,be.return=b,be}finally{}}}var Ll=Qr(!0),kr=Qr(!1),il=!1;function Yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ol(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ae&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Zn(e),Cr(e,null,l),t}return kn(e,a,t,l),Zn(e)}function $a(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Lu(e,l)}}function Qc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var r={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var kc=!1;function Ia(){if(kc){var e=ua;if(e!==null)throw e}}function Pa(e,t,l,a){kc=!1;var n=e.updateQueue;il=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var h=f,N=h.next;h.next=null,r===null?i=N:r.next=N,r=h;var E=e.alternate;E!==null&&(E=E.updateQueue,f=E.lastBaseUpdate,f!==r&&(f===null?E.firstBaseUpdate=N:f.next=N,E.lastBaseUpdate=h))}if(i!==null){var j=n.baseState;r=0,E=N=h=null,f=i;do{var R=f.lane&-536870913,w=R!==f.lane;if(w?(pe&R)===R:(a&R)===R){R!==0&&R===oa&&(kc=!0),E!==null&&(E=E.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var Y=e,le=f;R=t;var Ee=l;switch(le.tag){case 1:if(Y=le.payload,typeof Y=="function"){j=Y.call(Ee,j,R);break e}j=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=le.payload,R=typeof Y=="function"?Y.call(Ee,j,R):Y,R==null)break e;j=U({},j,R);break e;case 2:il=!0}}R=f.callback,R!==null&&(e.flags|=64,w&&(e.flags|=8192),w=n.callbacks,w===null?n.callbacks=[R]:w.push(R))}else w={lane:R,tag:f.tag,payload:f.payload,callback:f.callback,next:null},E===null?(N=E=w,h=j):E=E.next=w,r|=R;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;w=f,f=w.next,w.next=null,n.lastBaseUpdate=w,n.shared.pending=null}}while(!0);E===null&&(h=j),n.baseState=h,n.firstBaseUpdate=N,n.lastBaseUpdate=E,i===null&&(n.shared.lanes=0),dl|=r,e.lanes=r,e.memoizedState=j}}function Zr(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Kr(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Zr(l[e],t)}var fa=y(null),ai=y(0);function Jr(e,t){e=Jt,V(ai,e),V(fa,t),Jt=e|t.baseLanes}function Zc(){V(ai,Jt),V(fa,fa.current)}function Kc(){Jt=ai.current,M(fa),M(ai)}var dt=y(null),Nt=null;function ul(e){var t=e.alternate;V(Le,Le.current&1),V(dt,e),Nt===null&&(t===null||fa.current!==null||t.memoizedState!==null)&&(Nt=e)}function Jc(e){V(Le,Le.current),V(dt,e),Nt===null&&(Nt=e)}function Wr(e){e.tag===22?(V(Le,Le.current),V(dt,e),Nt===null&&(Nt=e)):rl()}function rl(){V(Le,Le.current),V(dt,dt.current)}function mt(e){M(dt),Nt===e&&(Nt=null),M(Le)}var Le=y(0);function ni(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||lu(l)||au(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ft=0,re=null,we=null,Ge=null,ii=!1,da=!1,Hl=!1,ci=0,en=0,ma=null,Tm=0;function Me(){throw Error(o(321))}function Wc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!st(e[l],t[l]))return!1;return!0}function $c(e,t,l,a,n,i){return Ft=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Ms:mo,Hl=!1,i=l(a,n),Hl=!1,da&&(i=Ir(t,l,a,n)),$r(e),i}function $r(e){z.H=an;var t=we!==null&&we.next!==null;if(Ft=0,Ge=we=re=null,ii=!1,en=0,ma=null,t)throw Error(o(300));e===null||Fe||(e=e.dependencies,e!==null&&Wn(e)&&(Fe=!0))}function Ir(e,t,l,a){re=e;var n=0;do{if(da&&(ma=null),en=0,da=!1,25<=n)throw Error(o(301));if(n+=1,Ge=we=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Us,i=t(l,a)}while(da);return i}function Nm(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?tn(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(re.flags|=1024),t}function Ic(){var e=ci!==0;return ci=0,e}function Pc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function eo(e){if(ii){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ii=!1}Ft=0,Ge=we=re=null,da=!1,en=ci=0,ma=null}function Pe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?re.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function He(){if(we===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ge===null?re.memoizedState:Ge.next;if(t!==null)Ge=t,we=e;else{if(e===null)throw re.alternate===null?Error(o(467)):Error(o(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ge===null?re.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function oi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tn(e){var t=en;return en+=1,ma===null&&(ma=[]),e=Vr(ma,e,t),t=re,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Ms:mo),e}function ui(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tn(e);if(e.$$typeof===te)return Ke(e)}throw Error(o(438,String(e)))}function to(e){var t=null,l=re.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=re.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=oi(),re.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=O;return t.index++,l}function Vt(e,t){return typeof t=="function"?t(e):t}function ri(e){var t=He();return lo(t,we,e)}function lo(e,t,l){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var f=r=null,h=null,N=t,E=!1;do{var j=N.lane&-536870913;if(j!==N.lane?(pe&j)===j:(Ft&j)===j){var R=N.revertLane;if(R===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),j===oa&&(E=!0);else if((Ft&R)===R){N=N.next,R===oa&&(E=!0);continue}else j={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},h===null?(f=h=j,r=i):h=h.next=j,re.lanes|=R,dl|=R;j=N.action,Hl&&l(i,j),i=N.hasEagerState?N.eagerState:l(i,j)}else R={lane:j,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},h===null?(f=h=R,r=i):h=h.next=R,re.lanes|=j,dl|=j;N=N.next}while(N!==null&&N!==t);if(h===null?r=i:h.next=f,!st(i,e.memoizedState)&&(Fe=!0,E&&(l=ua,l!==null)))throw l;e.memoizedState=i,e.baseState=r,e.baseQueue=h,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ao(e){var t=He(),l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);st(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Pr(e,t,l){var a=re,n=He(),i=ge;if(i){if(l===void 0)throw Error(o(407));l=l()}else l=t();var r=!st((we||n).memoizedState,l);if(r&&(n.memoizedState=l,Fe=!0),n=n.queue,co(ls.bind(null,a,n,e),[e]),n.getSnapshot!==t||r||Ge!==null&&Ge.memoizedState.tag&1){if(a.flags|=2048,va(9,{destroy:void 0},ts.bind(null,a,n,l,t),null),Ce===null)throw Error(o(349));i||(Ft&127)!==0||es(a,t,l)}return l}function es(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=re.updateQueue,t===null?(t=oi(),re.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function ts(e,t,l,a){t.value=l,t.getSnapshot=a,as(t)&&ns(e)}function ls(e,t,l){return l(function(){as(t)&&ns(e)})}function as(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!st(e,l)}catch{return!0}}function ns(e){var t=Cl(e,2);t!==null&&ct(t,e,2)}function no(e){var t=Pe();if(typeof e=="function"){var l=e;if(e=l(),Hl){It(!0);try{l()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},t}function is(e,t,l,a){return e.baseState=l,lo(e,we,typeof a=="function"?a:Vt)}function Rm(e,t,l,a,n){if(di(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};z.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,cs(t,i)):(i.next=l.next,t.pending=l.next=i)}}function cs(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=z.T,r={};z.T=r;try{var f=l(n,a),h=z.S;h!==null&&h(r,f),os(e,t,f)}catch(N){io(e,t,N)}finally{i!==null&&r.types!==null&&(i.types=r.types),z.T=i}}else try{i=l(n,a),os(e,t,i)}catch(N){io(e,t,N)}}function os(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){us(e,t,a)},function(a){return io(e,t,a)}):us(e,t,l)}function us(e,t,l){t.status="fulfilled",t.value=l,rs(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,cs(e,l)))}function io(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,rs(t),t=t.next;while(t!==a)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ss(e,t){return t}function fs(e,t){if(ge){var l=Ce.formState;if(l!==null){e:{var a=re;if(ge){if(De){t:{for(var n=De,i=Tt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Rt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){De=Rt(n.nextSibling),a=n.data==="F!";break e}}al(a)}a=!1}a&&(t=l[0])}}return l=Pe(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:t},l.queue=a,l=Ds.bind(null,re,a),a.dispatch=l,a=no(!1),i=fo.bind(null,re,!1,a.queue),a=Pe(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Rm.bind(null,re,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function ds(e){var t=He();return ms(t,we,e)}function ms(e,t,l){if(t=lo(e,t,ss)[0],e=ri(Vt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=tn(t)}catch(r){throw r===ra?Pn:r}else a=t;t=He();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(re.flags|=2048,va(9,{destroy:void 0},wm.bind(null,n,l),null)),[a,i,e]}function wm(e,t){e.action=t}function vs(e){var t=He(),l=we;if(l!==null)return ms(t,l,e);He(),t=t.memoizedState,l=He();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function va(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=re.updateQueue,t===null&&(t=oi(),re.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function ps(){return He().memoizedState}function si(e,t,l,a){var n=Pe();re.flags|=e,n.memoizedState=va(1|t,{destroy:void 0},l,a===void 0?null:a)}function fi(e,t,l,a){var n=He();a=a===void 0?null:a;var i=n.memoizedState.inst;we!==null&&a!==null&&Wc(a,we.memoizedState.deps)?n.memoizedState=va(t,i,l,a):(re.flags|=e,n.memoizedState=va(1|t,i,l,a))}function hs(e,t){si(8390656,8,e,t)}function co(e,t){fi(2048,8,e,t)}function zm(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=oi(),re.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function xs(e){var t=He().memoizedState;return zm({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return fi(4,2,e,t)}function ys(e,t){return fi(4,4,e,t)}function bs(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ss(e,t,l){l=l!=null?l.concat([e]):null,fi(4,4,bs.bind(null,t,e),l)}function oo(){}function As(e,t){var l=He();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Wc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Ts(e,t){var l=He();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Wc(t,a[1]))return a[0];if(a=e(),Hl){It(!0);try{e()}finally{It(!1)}}return l.memoizedState=[a,t],a}function uo(e,t,l){return l===void 0||(Ft&1073741824)!==0&&(pe&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Rf(),re.lanes|=e,dl|=e,l)}function Ns(e,t,l,a){return st(l,t)?l:fa.current!==null?(e=uo(e,l,a),st(e,t)||(Fe=!0),e):(Ft&42)===0||(Ft&1073741824)!==0&&(pe&261930)===0?(Fe=!0,e.memoizedState=l):(e=Rf(),re.lanes|=e,dl|=e,t)}function Rs(e,t,l,a,n){var i=q.p;q.p=i!==0&&8>i?i:8;var r=z.T,f={};z.T=f,fo(e,!1,t,l);try{var h=n(),N=z.S;if(N!==null&&N(f,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var E=Am(h,a);ln(e,t,E,ht(e))}else ln(e,t,a,ht(e))}catch(j){ln(e,t,{then:function(){},status:"rejected",reason:j},ht())}finally{q.p=i,r!==null&&f.types!==null&&(r.types=f.types),z.T=r}}function Em(){}function ro(e,t,l,a){if(e.tag!==5)throw Error(o(476));var n=ws(e).queue;Rs(e,n,t,$,l===null?Em:function(){return zs(e),l(a)})}function ws(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:$},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function zs(e){var t=ws(e);t.next===null&&(t=e.alternate.memoizedState),ln(e,t.next.queue,{},ht())}function so(){return Ke(bn)}function Es(){return He().memoizedState}function Cs(){return He().memoizedState}function Cm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ht();e=cl(l);var a=ol(t,e,l);a!==null&&(ct(a,t,l),$a(a,t,l)),t={cache:qc()},e.payload=t;return}t=t.return}}function Dm(e,t,l){var a=ht();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},di(e)?js(t,l):(l=Ec(e,t,l,a),l!==null&&(ct(l,e,a),_s(l,t,a)))}function Ds(e,t,l){var a=ht();ln(e,t,l,a)}function ln(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(di(e))js(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,f=i(r,l);if(n.hasEagerState=!0,n.eagerState=f,st(f,r))return kn(e,t,n,0),Ce===null&&Qn(),!1}catch{}finally{}if(l=Ec(e,t,n,a),l!==null)return ct(l,e,a),_s(l,t,a),!0}return!1}function fo(e,t,l,a){if(a={lane:2,revertLane:Xo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},di(e)){if(t)throw Error(o(479))}else t=Ec(e,l,a,2),t!==null&&ct(t,e,2)}function di(e){var t=e.alternate;return e===re||t!==null&&t===re}function js(e,t){da=ii=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function _s(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Lu(e,l)}}var an={readContext:Ke,use:ui,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};an.useEffectEvent=Me;var Ms={readContext:Ke,use:ui,useCallback:function(e,t){return Pe().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:hs,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,si(4194308,4,bs.bind(null,t,e),l)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){si(4,2,e,t)},useMemo:function(e,t){var l=Pe();t=t===void 0?null:t;var a=e();if(Hl){It(!0);try{e()}finally{It(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Pe();if(l!==void 0){var n=l(t);if(Hl){It(!0);try{l(t)}finally{It(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Dm.bind(null,re,e),[a.memoizedState,e]},useRef:function(e){var t=Pe();return e={current:e},t.memoizedState=e},useState:function(e){e=no(e);var t=e.queue,l=Ds.bind(null,re,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:oo,useDeferredValue:function(e,t){var l=Pe();return uo(l,e,t)},useTransition:function(){var e=no(!1);return e=Rs.bind(null,re,e.queue,!0,!1),Pe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=re,n=Pe();if(ge){if(l===void 0)throw Error(o(407));l=l()}else{if(l=t(),Ce===null)throw Error(o(349));(pe&127)!==0||es(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,hs(ls.bind(null,a,i,e),[e]),a.flags|=2048,va(9,{destroy:void 0},ts.bind(null,a,i,l,t),null),l},useId:function(){var e=Pe(),t=Ce.identifierPrefix;if(ge){var l=jt,a=Dt;l=(a&~(1<<32-rt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ci++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Tm++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:so,useFormState:fs,useActionState:fs,useOptimistic:function(e){var t=Pe();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=fo.bind(null,re,!0,l),l.dispatch=t,[e,t]},useMemoCache:to,useCacheRefresh:function(){return Pe().memoizedState=Cm.bind(null,re)},useEffectEvent:function(e){var t=Pe(),l={impl:e};return t.memoizedState=l,function(){if((Ae&2)!==0)throw Error(o(440));return l.impl.apply(void 0,arguments)}}},mo={readContext:Ke,use:ui,useCallback:As,useContext:Ke,useEffect:co,useImperativeHandle:Ss,useInsertionEffect:gs,useLayoutEffect:ys,useMemo:Ts,useReducer:ri,useRef:ps,useState:function(){return ri(Vt)},useDebugValue:oo,useDeferredValue:function(e,t){var l=He();return Ns(l,we.memoizedState,e,t)},useTransition:function(){var e=ri(Vt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:tn(e),t]},useSyncExternalStore:Pr,useId:Es,useHostTransitionStatus:so,useFormState:ds,useActionState:ds,useOptimistic:function(e,t){var l=He();return is(l,we,e,t)},useMemoCache:to,useCacheRefresh:Cs};mo.useEffectEvent=xs;var Us={readContext:Ke,use:ui,useCallback:As,useContext:Ke,useEffect:co,useImperativeHandle:Ss,useInsertionEffect:gs,useLayoutEffect:ys,useMemo:Ts,useReducer:ao,useRef:ps,useState:function(){return ao(Vt)},useDebugValue:oo,useDeferredValue:function(e,t){var l=He();return we===null?uo(l,e,t):Ns(l,we.memoizedState,e,t)},useTransition:function(){var e=ao(Vt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:tn(e),t]},useSyncExternalStore:Pr,useId:Es,useHostTransitionStatus:so,useFormState:vs,useActionState:vs,useOptimistic:function(e,t){var l=He();return we!==null?is(l,we,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:to,useCacheRefresh:Cs};Us.useEffectEvent=xs;function vo(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:U({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var po={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ht(),n=cl(a);n.payload=t,l!=null&&(n.callback=l),t=ol(e,n,a),t!==null&&(ct(t,e,a),$a(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ht(),n=cl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=ol(e,n,a),t!==null&&(ct(t,e,a),$a(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ht(),a=cl(l);a.tag=2,t!=null&&(a.callback=t),t=ol(e,a,l),t!==null&&(ct(t,e,l),$a(t,e,l))}};function Bs(e,t,l,a,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,r):t.prototype&&t.prototype.isPureReactComponent?!Ya(l,a)||!Ya(n,i):!0}function Os(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&po.enqueueReplaceState(t,t.state,null)}function ql(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=U({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Ls(e){Xn(e)}function Hs(e){console.error(e)}function qs(e){Xn(e)}function mi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Gs(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ho(e,t,l){return l=cl(l),l.tag=3,l.payload={element:null},l.callback=function(){mi(e,t)},l}function Fs(e){return e=cl(e),e.tag=3,e}function Vs(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Gs(t,l,a)}}var r=l.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Gs(t,l,a),typeof n!="function"&&(ml===null?ml=new Set([this]):ml.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function jm(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ca(t,l,n,!0),l=dt.current,l!==null){switch(l.tag){case 31:case 13:return Nt===null?Ri():l.alternate===null&&Ue===0&&(Ue=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===ei?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Fo(e,a,n)),!1;case 22:return l.flags|=65536,a===ei?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Fo(e,a,n)),!1}throw Error(o(435,l.tag))}return Fo(e,a,n),Ri(),!1}if(ge)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Uc&&(e=Error(o(422),{cause:a}),ka(bt(e,l)))):(a!==Uc&&(t=Error(o(423),{cause:a}),ka(bt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=bt(a,l),n=ho(e.stateNode,a,n),Qc(e,n),Ue!==4&&(Ue=2)),!1;var i=Error(o(520),{cause:a});if(i=bt(i,l),dn===null?dn=[i]:dn.push(i),Ue!==4&&(Ue=2),t===null)return!0;a=bt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=ho(l.stateNode,a,e),Qc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ml===null||!ml.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Fs(n),Vs(n,e,l,a),Qc(l,n),!1}l=l.return}while(l!==null);return!1}var xo=Error(o(461)),Fe=!1;function Je(e,t,l,a){t.child=e===null?kr(t,null,l,a):Ll(t,e.child,l,a)}function Ys(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var r={};for(var f in a)f!=="ref"&&(r[f]=a[f])}else r=a;return Ml(t),a=$c(e,t,l,r,i,n),f=Ic(),e!==null&&!Fe?(Pc(e,t,n),Yt(e,t,n)):(ge&&f&&_c(t),t.flags|=1,Je(e,t,a,n),t.child)}function Xs(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!Cc(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Qs(e,t,i,a,n)):(e=Kn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ro(e,n)){var r=i.memoizedProps;if(l=l.compare,l=l!==null?l:Ya,l(r,a)&&e.ref===t.ref)return Yt(e,t,n)}return t.flags|=1,e=Lt(i,a),e.ref=t.ref,e.return=t,t.child=e}function Qs(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Ya(i,a)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=a=i,Ro(e,n))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,Yt(e,t,n)}return go(e,t,l,a,n)}function ks(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return Zs(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&In(t,i!==null?i.cachePool:null),i!==null?Jr(t,i):Zc(),Wr(t);else return a=t.lanes=536870912,Zs(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(In(t,i.cachePool),Jr(t,i),rl(),t.memoizedState=null):(e!==null&&In(t,null),Zc(),rl());return Je(e,t,n,l),t.child}function nn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Zs(e,t,l,a,n){var i=Fc();return i=i===null?null:{parent:qe._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&In(t,null),Zc(),Wr(t),e!==null&&ca(e,t,a,!0),t.childLanes=n,null}function vi(e,t){return t=hi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ks(e,t,l){return Ll(t,e.child,null,l),e=vi(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function _m(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(a.mode==="hidden")return e=vi(t,a),t.lanes=536870912,nn(null,e);if(Jc(t),(e=De)?(e=o0(e,Tt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:tl!==null?{id:Dt,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},l=jr(e),l.return=t,t.child=l,Ze=t,De=null)):e=null,e===null)throw al(t);return t.lanes=536870912,null}return vi(t,a)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(Jc(t),n)if(t.flags&256)t.flags&=-257,t=Ks(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Fe||ca(e,t,l,!1),n=(l&e.childLanes)!==0,Fe||n){if(a=Ce,a!==null&&(r=Hu(a,l),r!==0&&r!==i.retryLane))throw i.retryLane=r,Cl(e,r),ct(a,e,r),xo;Ri(),t=Ks(e,t,l)}else e=i.treeContext,De=Rt(r.nextSibling),Ze=t,ge=!0,ll=null,Tt=!1,e!==null&&Ur(t,e),t=vi(t,a),t.flags|=4096;return t}return e=Lt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function go(e,t,l,a,n){return Ml(t),l=$c(e,t,l,a,void 0,n),a=Ic(),e!==null&&!Fe?(Pc(e,t,n),Yt(e,t,n)):(ge&&a&&_c(t),t.flags|=1,Je(e,t,l,n),t.child)}function Js(e,t,l,a,n,i){return Ml(t),t.updateQueue=null,l=Ir(t,a,l,n),$r(e),a=Ic(),e!==null&&!Fe?(Pc(e,t,i),Yt(e,t,i)):(ge&&a&&_c(t),t.flags|=1,Je(e,t,l,i),t.child)}function Ws(e,t,l,a,n){if(Ml(t),t.stateNode===null){var i=la,r=l.contextType;typeof r=="object"&&r!==null&&(i=Ke(r)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=po,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Yc(t),r=l.contextType,i.context=typeof r=="object"&&r!==null?Ke(r):la,i.state=t.memoizedState,r=l.getDerivedStateFromProps,typeof r=="function"&&(vo(t,l,r,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&po.enqueueReplaceState(i,i.state,null),Pa(t,a,i,n),Ia(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,h=ql(l,f);i.props=h;var N=i.context,E=l.contextType;r=la,typeof E=="object"&&E!==null&&(r=Ke(E));var j=l.getDerivedStateFromProps;E=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,E||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||N!==r)&&Os(t,i,a,r),il=!1;var R=t.memoizedState;i.state=R,Pa(t,a,i,n),Ia(),N=t.memoizedState,f||R!==N||il?(typeof j=="function"&&(vo(t,l,j,a),N=t.memoizedState),(h=il||Bs(t,l,h,a,R,N,r))?(E||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=N),i.props=a,i.state=N,i.context=r,a=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Xc(e,t),r=t.memoizedProps,E=ql(l,r),i.props=E,j=t.pendingProps,R=i.context,N=l.contextType,h=la,typeof N=="object"&&N!==null&&(h=Ke(N)),f=l.getDerivedStateFromProps,(N=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==j||R!==h)&&Os(t,i,a,h),il=!1,R=t.memoizedState,i.state=R,Pa(t,a,i,n),Ia();var w=t.memoizedState;r!==j||R!==w||il||e!==null&&e.dependencies!==null&&Wn(e.dependencies)?(typeof f=="function"&&(vo(t,l,f,a),w=t.memoizedState),(E=il||Bs(t,l,E,a,R,w,h)||e!==null&&e.dependencies!==null&&Wn(e.dependencies))?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,w,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,w,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=w),i.props=a,i.state=w,i.context=h,a=E):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,pi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Ll(t,e.child,null,n),t.child=Ll(t,null,l,n)):Je(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Yt(e,t,n),e}function $s(e,t,l,a){return jl(),t.flags|=256,Je(e,t,l,a),t.child}var yo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bo(e){return{baseLanes:e,cachePool:Gr()}}function So(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=pt),e}function Is(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(n?ul(t):rl(),(e=De)?(e=o0(e,Tt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:tl!==null?{id:Dt,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},l=jr(e),l.return=t,t.child=l,Ze=t,De=null)):e=null,e===null)throw al(t);return au(e)?t.lanes=32:t.lanes=536870912,null}var f=a.children;return a=a.fallback,n?(rl(),n=t.mode,f=hi({mode:"hidden",children:f},n),a=Dl(a,n,l,null),f.return=t,a.return=t,f.sibling=a,t.child=f,a=t.child,a.memoizedState=bo(l),a.childLanes=So(e,r,l),t.memoizedState=yo,nn(null,a)):(ul(t),Ao(t,f))}var h=e.memoizedState;if(h!==null&&(f=h.dehydrated,f!==null)){if(i)t.flags&256?(ul(t),t.flags&=-257,t=To(e,t,l)):t.memoizedState!==null?(rl(),t.child=e.child,t.flags|=128,t=null):(rl(),f=a.fallback,n=t.mode,a=hi({mode:"visible",children:a.children},n),f=Dl(f,n,l,null),f.flags|=2,a.return=t,f.return=t,a.sibling=f,t.child=a,Ll(t,e.child,null,l),a=t.child,a.memoizedState=bo(l),a.childLanes=So(e,r,l),t.memoizedState=yo,t=nn(null,a));else if(ul(t),au(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var N=r.dgst;r=N,a=Error(o(419)),a.stack="",a.digest=r,ka({value:a,source:null,stack:null}),t=To(e,t,l)}else if(Fe||ca(e,t,l,!1),r=(l&e.childLanes)!==0,Fe||r){if(r=Ce,r!==null&&(a=Hu(r,l),a!==0&&a!==h.retryLane))throw h.retryLane=a,Cl(e,a),ct(r,e,a),xo;lu(f)||Ri(),t=To(e,t,l)}else lu(f)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,De=Rt(f.nextSibling),Ze=t,ge=!0,ll=null,Tt=!1,e!==null&&Ur(t,e),t=Ao(t,a.children),t.flags|=4096);return t}return n?(rl(),f=a.fallback,n=t.mode,h=e.child,N=h.sibling,a=Lt(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,N!==null?f=Lt(N,f):(f=Dl(f,n,l,null),f.flags|=2),f.return=t,a.return=t,a.sibling=f,t.child=a,nn(null,a),a=t.child,f=e.child.memoizedState,f===null?f=bo(l):(n=f.cachePool,n!==null?(h=qe._currentValue,n=n.parent!==h?{parent:h,pool:h}:n):n=Gr(),f={baseLanes:f.baseLanes|l,cachePool:n}),a.memoizedState=f,a.childLanes=So(e,r,l),t.memoizedState=yo,nn(e.child,a)):(ul(t),l=e.child,e=l.sibling,l=Lt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=l,t.memoizedState=null,l)}function Ao(e,t){return t=hi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hi(e,t){return e=ft(22,e,null,t),e.lanes=0,e}function To(e,t,l){return Ll(t,e.child,null,l),e=Ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ps(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Lc(e.return,t,l)}function No(e,t,l,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=l,r.tailMode=n,r.treeForkCount=i)}function ef(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var r=Le.current,f=(r&2)!==0;if(f?(r=r&1|2,t.flags|=128):r&=1,V(Le,r),Je(e,t,a,l),a=ge?Qa:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ps(e,l,t);else if(e.tag===19)Ps(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&ni(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),No(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ni(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}No(t,!0,l,null,i,a);break;case"together":No(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Yt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),dl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ca(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,l=Lt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Lt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Ro(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wn(e)))}function Mm(e,t,l){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),nl(t,qe,e.memoizedState.cache),jl();break;case 27:case 5:Da(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:nl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Jc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ul(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Is(e,t,l):(ul(t),e=Yt(e,t,l),e!==null?e.sibling:null);ul(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ca(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return ef(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),V(Le,Le.current),a)break;return null;case 22:return t.lanes=0,ks(e,t,l,t.pendingProps);case 24:nl(t,qe,e.memoizedState.cache)}return Yt(e,t,l)}function tf(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!Ro(e,l)&&(t.flags&128)===0)return Fe=!1,Mm(e,t,l);Fe=(e.flags&131072)!==0}else Fe=!1,ge&&(t.flags&1048576)!==0&&Mr(t,Qa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Bl(t.elementType),t.type=e,typeof e=="function")Cc(e)?(a=ql(e,a),t.tag=1,t=Ws(null,t,e,a,l)):(t.tag=0,t=go(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===ae){t.tag=11,t=Ys(null,t,e,a,l);break e}else if(n===B){t.tag=14,t=Xs(null,t,e,a,l);break e}}throw t=se(e)||e,Error(o(306,t,""))}}return t;case 0:return go(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=ql(a,t.pendingProps),Ws(e,t,a,n,l);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(o(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,Xc(e,t),Pa(t,a,null,l);var r=t.memoizedState;if(a=r.cache,nl(t,qe,a),a!==i.cache&&Hc(t,[qe],l,!0),Ia(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=$s(e,t,a,l);break e}else if(a!==n){n=bt(Error(o(424)),t),ka(n),t=$s(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=Rt(e.firstChild),Ze=t,ge=!0,ll=null,Tt=!0,l=kr(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(jl(),a===n){t=Yt(e,t,l);break e}Je(e,t,a,l)}t=t.child}return t;case 26:return pi(e,t),e===null?(l=m0(t.type,null,t.pendingProps,null))?t.memoizedState=l:ge||(l=t.type,e=t.pendingProps,a=_i(de.current).createElement(l),a[ke]=t,a[et]=e,We(a,l,e),Xe(a),t.stateNode=a):t.memoizedState=m0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Da(t),e===null&&ge&&(a=t.stateNode=s0(t.type,t.pendingProps,de.current),Ze=t,Tt=!0,n=De,xl(t.type)?(nu=n,De=Rt(a.firstChild)):De=n),Je(e,t,t.pendingProps.children,l),pi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((n=a=De)&&(a=rv(a,t.type,t.pendingProps,Tt),a!==null?(t.stateNode=a,Ze=t,De=Rt(a.firstChild),Tt=!1,n=!0):n=!1),n||al(t)),Da(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,a=i.children,Po(n,i)?a=null:r!==null&&Po(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=$c(e,t,Nm,null,null,l),bn._currentValue=n),pi(e,t),Je(e,t,a,l),t.child;case 6:return e===null&&ge&&((e=l=De)&&(l=sv(l,t.pendingProps,Tt),l!==null?(t.stateNode=l,Ze=t,De=null,e=!0):e=!1),e||al(t)),null;case 13:return Is(e,t,l);case 4:return Ie(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ll(t,null,a,l):Je(e,t,a,l),t.child;case 11:return Ys(e,t,t.type,t.pendingProps,l);case 7:return Je(e,t,t.pendingProps,l),t.child;case 8:return Je(e,t,t.pendingProps.children,l),t.child;case 12:return Je(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,nl(t,t.type,a.value),Je(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Ml(t),n=Ke(n),a=a(n),t.flags|=1,Je(e,t,a,l),t.child;case 14:return Xs(e,t,t.type,t.pendingProps,l);case 15:return Qs(e,t,t.type,t.pendingProps,l);case 19:return ef(e,t,l);case 31:return _m(e,t,l);case 22:return ks(e,t,l,t.pendingProps);case 24:return Ml(t),a=Ke(qe),e===null?(n=Fc(),n===null&&(n=Ce,i=qc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},Yc(t),nl(t,qe,n)):((e.lanes&l)!==0&&(Xc(e,t),Pa(t,null,null,l),Ia()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),nl(t,qe,a)):(a=i.cache,nl(t,qe,a),a!==n.cache&&Hc(t,[qe],l,!0))),Je(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Xt(e){e.flags|=4}function wo(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Cf())e.flags|=8192;else throw Ol=ei,Vc}else e.flags&=-16777217}function lf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!g0(t))if(Cf())e.flags|=8192;else throw Ol=ei,Vc}function xi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bu():536870912,e.lanes|=t,ga|=t)}function cn(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Um(e,t,l){var a=t.pendingProps;switch(Mc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Gt(qe),Oe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ia(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bc())),je(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Xt(t),i!==null?(je(t),lf(t,i)):(je(t),wo(t,n,null,a,l))):i?i!==e.memoizedState?(Xt(t),je(t),lf(t,i)):(je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Xt(t),je(t),wo(t,n,e,a,l)),null;case 27:if(En(t),l=de.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Xt(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return je(t),null}e=Q.current,ia(t)?Br(t):(e=s0(n,a,l),t.stateNode=e,Xt(t))}return je(t),null;case 5:if(En(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Xt(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return je(t),null}if(i=Q.current,ia(t))Br(t);else{var r=_i(de.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}i[ke]=t,i[et]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(We(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Xt(t)}}return je(t),wo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Xt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=de.current,ia(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Ze,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[ke]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Pf(e.nodeValue,l)),e||al(t,!0)}else e=_i(e).createTextNode(a),e[ke]=t,t.stateNode=e}return je(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ia(t),l!==null){if(e===null){if(!a)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[ke]=t}else jl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),e=!1}else l=Bc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return je(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ia(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[ke]=t}else jl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),n=!1}else n=Bc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),xi(t,t.updateQueue),je(t),null);case 4:return Oe(),e===null&&Ko(t.stateNode.containerInfo),je(t),null;case 10:return Gt(t.type),je(t),null;case 19:if(M(Le),a=t.memoizedState,a===null)return je(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)cn(a,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ni(e),i!==null){for(t.flags|=128,cn(a,!1),e=i.updateQueue,t.updateQueue=e,xi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Dr(l,e),l=l.sibling;return V(Le,Le.current&1|2),ge&&Ht(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&ot()>Ai&&(t.flags|=128,n=!0,cn(a,!1),t.lanes=4194304)}else{if(!n)if(e=ni(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,xi(t,e),cn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ge)return je(t),null}else 2*ot()-a.renderingStartTime>Ai&&l!==536870912&&(t.flags|=128,n=!0,cn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ot(),e.sibling=null,l=Le.current,V(Le,n?l&1|2:l&1),ge&&Ht(t,a.treeForkCount),e):(je(t),null);case 22:case 23:return mt(t),Kc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),l=t.updateQueue,l!==null&&xi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&M(Ul),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Gt(qe),je(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Bm(e,t){switch(Mc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gt(qe),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return En(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(o(340));jl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));jl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(Le),null;case 4:return Oe(),null;case 10:return Gt(t.type),null;case 22:case 23:return mt(t),Kc(),e!==null&&M(Ul),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gt(qe),null;case 25:return null;default:return null}}function af(e,t){switch(Mc(t),t.tag){case 3:Gt(qe),Oe();break;case 26:case 27:case 5:En(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:M(Le);break;case 10:Gt(t.type);break;case 22:case 23:mt(t),Kc(),e!==null&&M(Ul);break;case 24:Gt(qe)}}function on(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,r=l.inst;a=i(),r.destroy=a}l=l.next}while(l!==n)}}catch(f){Re(t,t.return,f)}}function sl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var r=a.inst,f=r.destroy;if(f!==void 0){r.destroy=void 0,n=t;var h=l,N=f;try{N()}catch(E){Re(n,h,E)}}}a=a.next}while(a!==i)}}catch(E){Re(t,t.return,E)}}function nf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Kr(t,l)}catch(a){Re(e,e.return,a)}}}function cf(e,t,l){l.props=ql(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Re(e,t,a)}}function un(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){Re(e,t,n)}}function _t(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Re(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Re(e,t,n)}else l.current=null}function of(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Re(e,e.return,n)}}function zo(e,t,l){try{var a=e.stateNode;av(a,e.type,l,t),a[et]=t}catch(n){Re(e,e.return,n)}}function uf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xl(e.type)||e.tag===4}function Eo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Co(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Bt));else if(a!==4&&(a===27&&xl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Co(e,t,l),e=e.sibling;e!==null;)Co(e,t,l),e=e.sibling}function gi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&xl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(gi(e,t,l),e=e.sibling;e!==null;)gi(e,t,l),e=e.sibling}function rf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);We(t,a,l),t[ke]=e,t[et]=l}catch(i){Re(e,e.return,i)}}var Qt=!1,Ve=!1,Do=!1,sf=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Om(e,t){if(e=e.containerInfo,$o=qi,e=Sr(e),Ac(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var r=0,f=-1,h=-1,N=0,E=0,j=e,R=null;t:for(;;){for(var w;j!==l||n!==0&&j.nodeType!==3||(f=r+n),j!==i||a!==0&&j.nodeType!==3||(h=r+a),j.nodeType===3&&(r+=j.nodeValue.length),(w=j.firstChild)!==null;)R=j,j=w;for(;;){if(j===e)break t;if(R===l&&++N===n&&(f=r),R===i&&++E===a&&(h=r),(w=j.nextSibling)!==null)break;j=R,R=j.parentNode}j=w}l=f===-1||h===-1?null:{start:f,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(Io={focusedElem:e,selectionRange:l},qi=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var Y=ql(l.type,n);e=a.getSnapshotBeforeUpdate(Y,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(le){Re(l,l.return,le)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)tu(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":tu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function ff(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Zt(e,l),a&4&&on(5,l);break;case 1:if(Zt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(r){Re(l,l.return,r)}else{var n=ql(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Re(l,l.return,r)}}a&64&&nf(l),a&512&&un(l,l.return);break;case 3:if(Zt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Kr(e,t)}catch(r){Re(l,l.return,r)}}break;case 27:t===null&&a&4&&rf(l);case 26:case 5:Zt(e,l),t===null&&a&4&&of(l),a&512&&un(l,l.return);break;case 12:Zt(e,l);break;case 31:Zt(e,l),a&4&&vf(e,l);break;case 13:Zt(e,l),a&4&&pf(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Qm.bind(null,l),fv(e,l))));break;case 22:if(a=l.memoizedState!==null||Qt,!a){t=t!==null&&t.memoizedState!==null||Ve,n=Qt;var i=Ve;Qt=a,(Ve=t)&&!i?Kt(e,l,(l.subtreeFlags&8772)!==0):Zt(e,l),Qt=n,Ve=i}break;case 30:break;default:Zt(e,l)}}function df(e){var t=e.alternate;t!==null&&(e.alternate=null,df(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ic(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,lt=!1;function kt(e,t,l){for(l=l.child;l!==null;)mf(e,t,l),l=l.sibling}function mf(e,t,l){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(ja,l)}catch{}switch(l.tag){case 26:Ve||_t(l,t),kt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ve||_t(l,t);var a=_e,n=lt;xl(l.type)&&(_e=l.stateNode,lt=!1),kt(e,t,l),xn(l.stateNode),_e=a,lt=n;break;case 5:Ve||_t(l,t);case 6:if(a=_e,n=lt,_e=null,kt(e,t,l),_e=a,lt=n,_e!==null)if(lt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(l.stateNode)}catch(i){Re(l,t,i)}else try{_e.removeChild(l.stateNode)}catch(i){Re(l,t,i)}break;case 18:_e!==null&&(lt?(e=_e,i0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),wa(e)):i0(_e,l.stateNode));break;case 4:a=_e,n=lt,_e=l.stateNode.containerInfo,lt=!0,kt(e,t,l),_e=a,lt=n;break;case 0:case 11:case 14:case 15:sl(2,l,t),Ve||sl(4,l,t),kt(e,t,l);break;case 1:Ve||(_t(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&cf(l,t,a)),kt(e,t,l);break;case 21:kt(e,t,l);break;case 22:Ve=(a=Ve)||l.memoizedState!==null,kt(e,t,l),Ve=a;break;default:kt(e,t,l)}}function vf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wa(e)}catch(l){Re(t,t.return,l)}}}function pf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wa(e)}catch(l){Re(t,t.return,l)}}function Lm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sf),t;default:throw Error(o(435,e.tag))}}function yi(e,t){var l=Lm(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=km.bind(null,e,a);a.then(n,n)}})}function at(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,r=t,f=r;e:for(;f!==null;){switch(f.tag){case 27:if(xl(f.type)){_e=f.stateNode,lt=!1;break e}break;case 5:_e=f.stateNode,lt=!1;break e;case 3:case 4:_e=f.stateNode.containerInfo,lt=!0;break e}f=f.return}if(_e===null)throw Error(o(160));mf(i,r,n),_e=null,lt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hf(t,e),t=t.sibling}var Et=null;function hf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:at(t,e),nt(e),a&4&&(sl(3,e,e.return),on(3,e),sl(5,e,e.return));break;case 1:at(t,e),nt(e),a&512&&(Ve||l===null||_t(l,l.return)),a&64&&Qt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Et;if(at(t,e),nt(e),a&512&&(Ve||l===null||_t(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ua]||i[ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),We(i,a,l),i[ke]=e,Xe(i),a=i;break e;case"link":var r=h0("link","href",n).get(a+(l.href||""));if(r){for(var f=0;f<r.length;f++)if(i=r[f],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){r.splice(f,1);break t}}i=n.createElement(a),We(i,a,l),n.head.appendChild(i);break;case"meta":if(r=h0("meta","content",n).get(a+(l.content||""))){for(f=0;f<r.length;f++)if(i=r[f],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){r.splice(f,1);break t}}i=n.createElement(a),We(i,a,l),n.head.appendChild(i);break;default:throw Error(o(468,a))}i[ke]=e,Xe(i),a=i}e.stateNode=a}else x0(n,e.type,e.stateNode);else e.stateNode=p0(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?x0(n,e.type,e.stateNode):p0(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&zo(e,e.memoizedProps,l.memoizedProps)}break;case 27:at(t,e),nt(e),a&512&&(Ve||l===null||_t(l,l.return)),l!==null&&a&4&&zo(e,e.memoizedProps,l.memoizedProps);break;case 5:if(at(t,e),nt(e),a&512&&(Ve||l===null||_t(l,l.return)),e.flags&32){n=e.stateNode;try{Jl(n,"")}catch(Y){Re(e,e.return,Y)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,zo(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Do=!0);break;case 6:if(at(t,e),nt(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(Y){Re(e,e.return,Y)}}break;case 3:if(Bi=null,n=Et,Et=Mi(t.containerInfo),at(t,e),Et=n,nt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{wa(t.containerInfo)}catch(Y){Re(e,e.return,Y)}Do&&(Do=!1,xf(e));break;case 4:a=Et,Et=Mi(e.stateNode.containerInfo),at(t,e),nt(e),Et=a;break;case 12:at(t,e),nt(e);break;case 31:at(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,yi(e,a)));break;case 13:at(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Si=ot()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,yi(e,a)));break;case 22:n=e.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,N=Qt,E=Ve;if(Qt=N||n,Ve=E||h,at(t,e),Ve=E,Qt=N,nt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||h||Qt||Ve||Gl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){h=l=t;try{if(i=h.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{f=h.stateNode;var j=h.memoizedProps.style,R=j!=null&&j.hasOwnProperty("display")?j.display:null;f.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(Y){Re(h,h.return,Y)}}}else if(t.tag===6){if(l===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(Y){Re(h,h.return,Y)}}}else if(t.tag===18){if(l===null){h=t;try{var w=h.stateNode;n?c0(w,!0):c0(h.stateNode,!1)}catch(Y){Re(h,h.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,yi(e,l))));break;case 19:at(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,yi(e,a)));break;case 30:break;case 21:break;default:at(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(uf(a)){l=a;break}a=a.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var n=l.stateNode,i=Eo(e);gi(e,i,n);break;case 5:var r=l.stateNode;l.flags&32&&(Jl(r,""),l.flags&=-33);var f=Eo(e);gi(e,f,r);break;case 3:case 4:var h=l.stateNode.containerInfo,N=Eo(e);Co(e,N,h);break;default:throw Error(o(161))}}catch(E){Re(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ff(e,t.alternate,t),t=t.sibling}function Gl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Gl(t);break;case 1:_t(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&cf(t,t.return,l),Gl(t);break;case 27:xn(t.stateNode);case 26:case 5:_t(t,t.return),Gl(t);break;case 22:t.memoizedState===null&&Gl(t);break;case 30:Gl(t);break;default:Gl(t)}e=e.sibling}}function Kt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:Kt(n,i,l),on(4,i);break;case 1:if(Kt(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(N){Re(a,a.return,N)}if(a=i,n=a.updateQueue,n!==null){var f=a.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)Zr(h[n],f)}catch(N){Re(a,a.return,N)}}l&&r&64&&nf(i),un(i,i.return);break;case 27:rf(i);case 26:case 5:Kt(n,i,l),l&&a===null&&r&4&&of(i),un(i,i.return);break;case 12:Kt(n,i,l);break;case 31:Kt(n,i,l),l&&r&4&&vf(n,i);break;case 13:Kt(n,i,l),l&&r&4&&pf(n,i);break;case 22:i.memoizedState===null&&Kt(n,i,l),un(i,i.return);break;case 30:break;default:Kt(n,i,l)}t=t.sibling}}function jo(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Za(l))}function _o(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e))}function Ct(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gf(e,t,l,a),t=t.sibling}function gf(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ct(e,t,l,a),n&2048&&on(9,t);break;case 1:Ct(e,t,l,a);break;case 3:Ct(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e)));break;case 12:if(n&2048){Ct(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,f=i.onPostCommit;typeof f=="function"&&f(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){Re(t,t.return,h)}}else Ct(e,t,l,a);break;case 31:Ct(e,t,l,a);break;case 13:Ct(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Ct(e,t,l,a):rn(e,t):i._visibility&2?Ct(e,t,l,a):(i._visibility|=2,pa(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&jo(r,t);break;case 24:Ct(e,t,l,a),n&2048&&_o(t.alternate,t);break;default:Ct(e,t,l,a)}}function pa(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,f=l,h=a,N=r.flags;switch(r.tag){case 0:case 11:case 15:pa(i,r,f,h,n),on(8,r);break;case 23:break;case 22:var E=r.stateNode;r.memoizedState!==null?E._visibility&2?pa(i,r,f,h,n):rn(i,r):(E._visibility|=2,pa(i,r,f,h,n)),n&&N&2048&&jo(r.alternate,r);break;case 24:pa(i,r,f,h,n),n&&N&2048&&_o(r.alternate,r);break;default:pa(i,r,f,h,n)}t=t.sibling}}function rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:rn(l,a),n&2048&&jo(a.alternate,a);break;case 24:rn(l,a),n&2048&&_o(a.alternate,a);break;default:rn(l,a)}t=t.sibling}}var sn=8192;function ha(e,t,l){if(e.subtreeFlags&sn)for(e=e.child;e!==null;)yf(e,t,l),e=e.sibling}function yf(e,t,l){switch(e.tag){case 26:ha(e,t,l),e.flags&sn&&e.memoizedState!==null&&Tv(l,Et,e.memoizedState,e.memoizedProps);break;case 5:ha(e,t,l);break;case 3:case 4:var a=Et;Et=Mi(e.stateNode.containerInfo),ha(e,t,l),Et=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=sn,sn=16777216,ha(e,t,l),sn=a):ha(e,t,l));break;default:ha(e,t,l)}}function bf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Qe=a,Af(a,e)}bf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sf(e),e=e.sibling}function Sf(e){switch(e.tag){case 0:case 11:case 15:fn(e),e.flags&2048&&sl(9,e,e.return);break;case 3:fn(e);break;case 12:fn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,bi(e)):fn(e);break;default:fn(e)}}function bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Qe=a,Af(a,e)}bf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sl(8,t,t.return),bi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,bi(t));break;default:bi(t)}e=e.sibling}}function Af(e,t){for(;Qe!==null;){var l=Qe;switch(l.tag){case 0:case 11:case 15:sl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Qe=a;else e:for(l=e;Qe!==null;){a=Qe;var n=a.sibling,i=a.return;if(df(a),a===l){Qe=null;break e}if(n!==null){n.return=i,Qe=n;break e}Qe=i}}}var Hm={getCacheForType:function(e){var t=Ke(qe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Ke(qe).controller.signal}},qm=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Ce=null,me=null,pe=0,Ne=0,vt=null,fl=!1,xa=!1,Mo=!1,Jt=0,Ue=0,dl=0,Fl=0,Uo=0,pt=0,ga=0,dn=null,it=null,Bo=!1,Si=0,Tf=0,Ai=1/0,Ti=null,ml=null,Ye=0,vl=null,ya=null,Wt=0,Oo=0,Lo=null,Nf=null,mn=0,Ho=null;function ht(){return(Ae&2)!==0&&pe!==0?pe&-pe:z.T!==null?Xo():qu()}function Rf(){if(pt===0)if((pe&536870912)===0||ge){var e=jn;jn<<=1,(jn&3932160)===0&&(jn=262144),pt=e}else pt=536870912;return e=dt.current,e!==null&&(e.flags|=32),pt}function ct(e,t,l){(e===Ce&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(ba(e,0),pl(e,pe,pt,!1)),Ma(e,l),((Ae&2)===0||e!==Ce)&&(e===Ce&&((Ae&2)===0&&(Fl|=l),Ue===4&&pl(e,pe,pt,!1)),Mt(e))}function wf(e,t,l){if((Ae&6)!==0)throw Error(o(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||_a(e,t),n=a?Vm(e,t):Go(e,t,!0),i=a;do{if(n===0){xa&&!a&&pl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!Gm(l)){n=Go(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var f=e;n=dn;var h=f.current.memoizedState.isDehydrated;if(h&&(ba(f,r).flags|=256),r=Go(f,r,!1),r!==2){if(Mo&&!h){f.errorRecoveryDisabledLanes|=i,Fl|=i,n=4;break e}i=it,it=n,i!==null&&(it===null?it=i:it.push.apply(it,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){ba(e,0),pl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:pl(a,t,pt,!fl);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Si+300-ot(),10<n)){if(pl(a,t,pt,!fl),Mn(a,0,!0)!==0)break e;Wt=t,a.timeoutHandle=a0(zf.bind(null,a,l,it,Ti,Bo,t,pt,Fl,ga,fl,i,"Throttled",-0,0),n);break e}zf(a,l,it,Ti,Bo,t,pt,Fl,ga,fl,i,null,-0,0)}}break}while(!0);Mt(e)}function zf(e,t,l,a,n,i,r,f,h,N,E,j,R,w){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bt},yf(t,i,j);var Y=(i&62914560)===i?Si-ot():(i&4194048)===i?Tf-ot():0;if(Y=Nv(j,Y),Y!==null){Wt=i,e.cancelPendingCommit=Y(Bf.bind(null,e,t,i,l,a,n,r,f,h,E,j,null,R,w)),pl(e,i,r,!N);return}}Bf(e,t,i,l,a,n,r,f,h)}function Gm(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!st(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pl(e,t,l,a){t&=~Uo,t&=~Fl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-rt(n),r=1<<i;a[i]=-1,n&=~r}l!==0&&Ou(e,l,t)}function Ni(){return(Ae&6)===0?(vn(0),!1):!0}function qo(){if(me!==null){if(Ne===0)var e=me.return;else e=me,qt=_l=null,eo(e),sa=null,Ja=0,e=me;for(;e!==null;)af(e.alternate,e),e=e.return;me=null}}function ba(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,cv(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Wt=0,qo(),Ce=e,me=l=Lt(e.current,null),pe=t,Ne=0,vt=null,fl=!1,xa=_a(e,t),Mo=!1,ga=pt=Uo=Fl=dl=Ue=0,it=dn=null,Bo=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-rt(a),i=1<<n;t|=e[n],a&=~i}return Jt=t,Qn(),l}function Ef(e,t){re=null,z.H=an,t===ra||t===Pn?(t=Yr(),Ne=3):t===Vc?(t=Yr(),Ne=4):Ne=t===xo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,vt=t,me===null&&(Ue=1,mi(e,bt(t,e.current)))}function Cf(){var e=dt.current;return e===null?!0:(pe&4194048)===pe?Nt===null:(pe&62914560)===pe||(pe&536870912)!==0?e===Nt:!1}function Df(){var e=z.H;return z.H=an,e===null?an:e}function jf(){var e=z.A;return z.A=Hm,e}function Ri(){Ue=4,fl||(pe&4194048)!==pe&&dt.current!==null||(xa=!0),(dl&134217727)===0&&(Fl&134217727)===0||Ce===null||pl(Ce,pe,pt,!1)}function Go(e,t,l){var a=Ae;Ae|=2;var n=Df(),i=jf();(Ce!==e||pe!==t)&&(Ti=null,ba(e,t)),t=!1;var r=Ue;e:do try{if(Ne!==0&&me!==null){var f=me,h=vt;switch(Ne){case 8:qo(),r=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var N=Ne;if(Ne=0,vt=null,Sa(e,f,h,N),l&&xa){r=0;break e}break;default:N=Ne,Ne=0,vt=null,Sa(e,f,h,N)}}Fm(),r=Ue;break}catch(E){Ef(e,E)}while(!0);return t&&e.shellSuspendCounter++,qt=_l=null,Ae=a,z.H=n,z.A=i,me===null&&(Ce=null,pe=0,Qn()),r}function Fm(){for(;me!==null;)_f(me)}function Vm(e,t){var l=Ae;Ae|=2;var a=Df(),n=jf();Ce!==e||pe!==t?(Ti=null,Ai=ot()+500,ba(e,t)):xa=_a(e,t);e:do try{if(Ne!==0&&me!==null){t=me;var i=vt;t:switch(Ne){case 1:Ne=0,vt=null,Sa(e,t,i,1);break;case 2:case 9:if(Fr(i)){Ne=0,vt=null,Mf(t);break}t=function(){Ne!==2&&Ne!==9||Ce!==e||(Ne=7),Mt(e)},i.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:Fr(i)?(Ne=0,vt=null,Mf(t)):(Ne=0,vt=null,Sa(e,t,i,7));break;case 5:var r=null;switch(me.tag){case 26:r=me.memoizedState;case 5:case 27:var f=me;if(r?g0(r):f.stateNode.complete){Ne=0,vt=null;var h=f.sibling;if(h!==null)me=h;else{var N=f.return;N!==null?(me=N,wi(N)):me=null}break t}}Ne=0,vt=null,Sa(e,t,i,5);break;case 6:Ne=0,vt=null,Sa(e,t,i,6);break;case 8:qo(),Ue=6;break e;default:throw Error(o(462))}}Ym();break}catch(E){Ef(e,E)}while(!0);return qt=_l=null,z.H=a,z.A=n,Ae=l,me!==null?0:(Ce=null,pe=0,Qn(),Ue)}function Ym(){for(;me!==null&&!dd();)_f(me)}function _f(e){var t=tf(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?wi(e):me=t}function Mf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Js(l,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=Js(l,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:eo(t);default:af(l,t),t=me=Dr(t,Jt),t=tf(l,t,Jt)}e.memoizedProps=e.pendingProps,t===null?wi(e):me=t}function Sa(e,t,l,a){qt=_l=null,eo(t),sa=null,Ja=0;var n=t.return;try{if(jm(e,n,t,l,pe)){Ue=1,mi(e,bt(l,e.current)),me=null;return}}catch(i){if(n!==null)throw me=n,i;Ue=1,mi(e,bt(l,e.current)),me=null;return}t.flags&32768?(ge||a===1?e=!0:xa||(pe&536870912)!==0?e=!1:(fl=e=!0,(a===2||a===9||a===3||a===6)&&(a=dt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Uf(t,e)):wi(t)}function wi(e){var t=e;do{if((t.flags&32768)!==0){Uf(t,fl);return}e=t.return;var l=Um(t.alternate,t,Jt);if(l!==null){me=l;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Ue===0&&(Ue=5)}function Uf(e,t){do{var l=Bm(e.alternate,e);if(l!==null){l.flags&=32767,me=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=l}while(e!==null);Ue=6,me=null}function Bf(e,t,l,a,n,i,r,f,h){e.cancelPendingCommit=null;do zi();while(Ye!==0);if((Ae&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=zc,Ad(e,l,i,r,f,h),e===Ce&&(me=Ce=null,pe=0),ya=t,vl=e,Wt=l,Oo=i,Lo=n,Nf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Zm(Cn,function(){return Gf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,n=q.p,q.p=2,r=Ae,Ae|=4;try{Om(e,t,l)}finally{Ae=r,q.p=n,z.T=a}}Ye=1,Of(),Lf(),Hf()}}function Of(){if(Ye===1){Ye=0;var e=vl,t=ya,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=z.T,z.T=null;var a=q.p;q.p=2;var n=Ae;Ae|=4;try{hf(t,e);var i=Io,r=Sr(e.containerInfo),f=i.focusedElem,h=i.selectionRange;if(r!==f&&f&&f.ownerDocument&&br(f.ownerDocument.documentElement,f)){if(h!==null&&Ac(f)){var N=h.start,E=h.end;if(E===void 0&&(E=N),"selectionStart"in f)f.selectionStart=N,f.selectionEnd=Math.min(E,f.value.length);else{var j=f.ownerDocument||document,R=j&&j.defaultView||window;if(R.getSelection){var w=R.getSelection(),Y=f.textContent.length,le=Math.min(h.start,Y),Ee=h.end===void 0?le:Math.min(h.end,Y);!w.extend&&le>Ee&&(r=Ee,Ee=le,le=r);var b=yr(f,le),g=yr(f,Ee);if(b&&g&&(w.rangeCount!==1||w.anchorNode!==b.node||w.anchorOffset!==b.offset||w.focusNode!==g.node||w.focusOffset!==g.offset)){var T=j.createRange();T.setStart(b.node,b.offset),w.removeAllRanges(),le>Ee?(w.addRange(T),w.extend(g.node,g.offset)):(T.setEnd(g.node,g.offset),w.addRange(T))}}}}for(j=[],w=f;w=w.parentNode;)w.nodeType===1&&j.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<j.length;f++){var C=j[f];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}qi=!!$o,Io=$o=null}finally{Ae=n,q.p=a,z.T=l}}e.current=t,Ye=2}}function Lf(){if(Ye===2){Ye=0;var e=vl,t=ya,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=z.T,z.T=null;var a=q.p;q.p=2;var n=Ae;Ae|=4;try{ff(e,t.alternate,t)}finally{Ae=n,q.p=a,z.T=l}}Ye=3}}function Hf(){if(Ye===4||Ye===3){Ye=0,md();var e=vl,t=ya,l=Wt,a=Nf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,ya=vl=null,qf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ml=null),ac(l),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(ja,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=z.T,n=q.p,q.p=2,z.T=null;try{for(var i=e.onRecoverableError,r=0;r<a.length;r++){var f=a[r];i(f.value,{componentStack:f.stack})}}finally{z.T=t,q.p=n}}(Wt&3)!==0&&zi(),Mt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===Ho?mn++:(mn=0,Ho=e):mn=0,vn(0)}}function qf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Za(t)))}function zi(){return Of(),Lf(),Hf(),Gf()}function Gf(){if(Ye!==5)return!1;var e=vl,t=Oo;Oo=0;var l=ac(Wt),a=z.T,n=q.p;try{q.p=32>l?32:l,z.T=null,l=Lo,Lo=null;var i=vl,r=Wt;if(Ye=0,ya=vl=null,Wt=0,(Ae&6)!==0)throw Error(o(331));var f=Ae;if(Ae|=4,Sf(i.current),gf(i,i.current,r,l),Ae=f,vn(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(ja,i)}catch{}return!0}finally{q.p=n,z.T=a,qf(e,t)}}function Ff(e,t,l){t=bt(l,t),t=ho(e.stateNode,t,2),e=ol(e,t,2),e!==null&&(Ma(e,2),Mt(e))}function Re(e,t,l){if(e.tag===3)Ff(e,e,l);else for(;t!==null;){if(t.tag===3){Ff(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ml===null||!ml.has(a))){e=bt(l,e),l=Fs(2),a=ol(t,l,2),a!==null&&(Vs(l,a,t,e),Ma(a,2),Mt(a));break}}t=t.return}}function Fo(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new qm;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Mo=!0,n.add(l),e=Xm.bind(null,e,t,l),t.then(e,e))}function Xm(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ce===e&&(pe&l)===l&&(Ue===4||Ue===3&&(pe&62914560)===pe&&300>ot()-Si?(Ae&2)===0&&ba(e,0):Uo|=l,ga===pe&&(ga=0)),Mt(e)}function Vf(e,t){t===0&&(t=Bu()),e=Cl(e,t),e!==null&&(Ma(e,t),Mt(e))}function Qm(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Vf(e,l)}function km(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),Vf(e,l)}function Zm(e,t){return Pi(e,t)}var Ei=null,Aa=null,Vo=!1,Ci=!1,Yo=!1,hl=0;function Mt(e){e!==Aa&&e.next===null&&(Aa===null?Ei=Aa=e:Aa=Aa.next=e),Ci=!0,Vo||(Vo=!0,Jm())}function vn(e,t){if(!Yo&&Ci){Yo=!0;do for(var l=!1,a=Ei;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var r=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-rt(42|e)+1)-1,i&=n&~(r&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,kf(a,i))}else i=pe,i=Mn(a,a===Ce?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||_a(a,i)||(l=!0,kf(a,i));a=a.next}while(l);Yo=!1}}function Km(){Yf()}function Yf(){Ci=Vo=!1;var e=0;hl!==0&&iv()&&(e=hl);for(var t=ot(),l=null,a=Ei;a!==null;){var n=a.next,i=Xf(a,t);i===0?(a.next=null,l===null?Ei=n:l.next=n,n===null&&(Aa=l)):(l=a,(e!==0||(i&3)!==0)&&(Ci=!0)),a=n}Ye!==0&&Ye!==5||vn(e),hl!==0&&(hl=0)}function Xf(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-rt(i),f=1<<r,h=n[r];h===-1?((f&l)===0||(f&a)!==0)&&(n[r]=Sd(f,t)):h<=t&&(e.expiredLanes|=f),i&=~f}if(t=Ce,l=pe,l=Mn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ec(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||_a(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&ec(a),ac(l)){case 2:case 8:l=Mu;break;case 32:l=Cn;break;case 268435456:l=Uu;break;default:l=Cn}return a=Qf.bind(null,e),l=Pi(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&ec(a),e.callbackPriority=2,e.callbackNode=null,2}function Qf(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(zi()&&e.callbackNode!==l)return null;var a=pe;return a=Mn(e,e===Ce?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(wf(e,a,t),Xf(e,ot()),e.callbackNode!=null&&e.callbackNode===l?Qf.bind(null,e):null)}function kf(e,t){if(zi())return null;wf(e,t,!0)}function Jm(){ov(function(){(Ae&6)!==0?Pi(_u,Km):Yf()})}function Xo(){if(hl===0){var e=oa;e===0&&(e=Dn,Dn<<=1,(Dn&261888)===0&&(Dn=256)),hl=e}return hl}function Zf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ln(""+e)}function Kf(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Wm(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=Zf((n[et]||null).action),r=a.submitter;r&&(t=(t=r[et]||null)?Zf(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var f=new Fn("action","action",null,a,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(hl!==0){var h=r?Kf(n,r):new FormData(n);ro(l,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(f.preventDefault(),h=r?Kf(n,r):new FormData(n),ro(l,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var Qo=0;Qo<wc.length;Qo++){var ko=wc[Qo],$m=ko.toLowerCase(),Im=ko[0].toUpperCase()+ko.slice(1);zt($m,"on"+Im)}zt(Nr,"onAnimationEnd"),zt(Rr,"onAnimationIteration"),zt(wr,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(vm,"onTransitionRun"),zt(pm,"onTransitionStart"),zt(hm,"onTransitionCancel"),zt(zr,"onTransitionEnd"),Zl("onMouseEnter",["mouseout","mouseover"]),Zl("onMouseLeave",["mouseout","mouseover"]),Zl("onPointerEnter",["pointerout","pointerover"]),Zl("onPointerLeave",["pointerout","pointerover"]),Rl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));function Jf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var r=a.length-1;0<=r;r--){var f=a[r],h=f.instance,N=f.currentTarget;if(f=f.listener,h!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=N;try{i(n)}catch(E){Xn(E)}n.currentTarget=null,i=h}else for(r=0;r<a.length;r++){if(f=a[r],h=f.instance,N=f.currentTarget,f=f.listener,h!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=N;try{i(n)}catch(E){Xn(E)}n.currentTarget=null,i=h}}}}function ve(e,t){var l=t[nc];l===void 0&&(l=t[nc]=new Set);var a=e+"__bubble";l.has(a)||(Wf(t,e,2,!1),l.add(a))}function Zo(e,t,l){var a=0;t&&(a|=4),Wf(l,e,a,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function Ko(e){if(!e[Di]){e[Di]=!0,Vu.forEach(function(l){l!=="selectionchange"&&(Pm.has(l)||Zo(l,!1,e),Zo(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,Zo("selectionchange",!1,t))}}function Wf(e,t,l,a){switch(R0(t)){case 2:var n=zv;break;case 8:n=Ev;break;default:n=ru}l=n.bind(null,t,l,e),n=void 0,!mc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Jo(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var f=a.stateNode.containerInfo;if(f===n)break;if(r===4)for(r=a.return;r!==null;){var h=r.tag;if((h===3||h===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;f!==null;){if(r=Xl(f),r===null)return;if(h=r.tag,h===5||h===6||h===26||h===27){a=i=r;continue e}f=f.parentNode}}a=a.return}er(function(){var N=i,E=fc(l),j=[];e:{var R=Er.get(e);if(R!==void 0){var w=Fn,Y=e;switch(e){case"keypress":if(qn(l)===0)break e;case"keydown":case"keyup":w=kd;break;case"focusin":Y="focus",w=xc;break;case"focusout":Y="blur",w=xc;break;case"beforeblur":case"afterblur":w=xc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ar;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Jd;break;case Nr:case Rr:case wr:w=Ld;break;case zr:w=$d;break;case"scroll":case"scrollend":w=_d;break;case"wheel":w=Pd;break;case"copy":case"cut":case"paste":w=qd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ir;break;case"toggle":case"beforetoggle":w=tm}var le=(t&4)!==0,Ee=!le&&(e==="scroll"||e==="scrollend"),b=le?R!==null?R+"Capture":null:R;le=[];for(var g=N,T;g!==null;){var C=g;if(T=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||T===null||b===null||(C=Oa(g,b),C!=null&&le.push(hn(g,C,T))),Ee)break;g=g.return}0<le.length&&(R=new w(R,Y,null,l,E),j.push({event:R,listeners:le}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",R&&l!==sc&&(Y=l.relatedTarget||l.fromElement)&&(Xl(Y)||Y[Yl]))break e;if((w||R)&&(R=E.window===E?E:(R=E.ownerDocument)?R.defaultView||R.parentWindow:window,w?(Y=l.relatedTarget||l.toElement,w=N,Y=Y?Xl(Y):null,Y!==null&&(Ee=x(Y),le=Y.tag,Y!==Ee||le!==5&&le!==27&&le!==6)&&(Y=null)):(w=null,Y=N),w!==Y)){if(le=ar,C="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(le=ir,C="onPointerLeave",b="onPointerEnter",g="pointer"),Ee=w==null?R:Ba(w),T=Y==null?R:Ba(Y),R=new le(C,g+"leave",w,l,E),R.target=Ee,R.relatedTarget=T,C=null,Xl(E)===N&&(le=new le(b,g+"enter",Y,l,E),le.target=T,le.relatedTarget=Ee,C=le),Ee=C,w&&Y)t:{for(le=ev,b=w,g=Y,T=0,C=b;C;C=le(C))T++;C=0;for(var W=g;W;W=le(W))C++;for(;0<T-C;)b=le(b),T--;for(;0<C-T;)g=le(g),C--;for(;T--;){if(b===g||g!==null&&b===g.alternate){le=b;break t}b=le(b),g=le(g)}le=null}else le=null;w!==null&&$f(j,R,w,le,!1),Y!==null&&Ee!==null&&$f(j,Ee,Y,le,!0)}}e:{if(R=N?Ba(N):window,w=R.nodeName&&R.nodeName.toLowerCase(),w==="select"||w==="input"&&R.type==="file")var be=mr;else if(fr(R))if(vr)be=fm;else{be=rm;var k=um}else w=R.nodeName,!w||w.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?N&&rc(N.elementType)&&(be=mr):be=sm;if(be&&(be=be(e,N))){dr(j,be,l,E);break e}k&&k(e,R,N),e==="focusout"&&N&&R.type==="number"&&N.memoizedProps.value!=null&&uc(R,"number",R.value)}switch(k=N?Ba(N):window,e){case"focusin":(fr(k)||k.contentEditable==="true")&&(Pl=k,Tc=N,Xa=null);break;case"focusout":Xa=Tc=Pl=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,Ar(j,l,E);break;case"selectionchange":if(mm)break;case"keydown":case"keyup":Ar(j,l,E)}var fe;if(yc)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else Il?rr(e,l)&&(he="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(he="onCompositionStart");he&&(cr&&l.locale!=="ko"&&(Il||he!=="onCompositionStart"?he==="onCompositionEnd"&&Il&&(fe=tr()):(el=E,vc="value"in el?el.value:el.textContent,Il=!0)),k=ji(N,he),0<k.length&&(he=new nr(he,e,null,l,E),j.push({event:he,listeners:k}),fe?he.data=fe:(fe=sr(l),fe!==null&&(he.data=fe)))),(fe=am?nm(e,l):im(e,l))&&(he=ji(N,"onBeforeInput"),0<he.length&&(k=new nr("onBeforeInput","beforeinput",null,l,E),j.push({event:k,listeners:he}),k.data=fe)),Wm(j,e,N,l,E)}Jf(j,t)})}function hn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function ji(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Oa(e,l),n!=null&&a.unshift(hn(e,n,i)),n=Oa(e,t),n!=null&&a.push(hn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function ev(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $f(e,t,l,a,n){for(var i=t._reactName,r=[];l!==null&&l!==a;){var f=l,h=f.alternate,N=f.stateNode;if(f=f.tag,h!==null&&h===a)break;f!==5&&f!==26&&f!==27||N===null||(h=N,n?(N=Oa(l,i),N!=null&&r.unshift(hn(l,N,h))):n||(N=Oa(l,i),N!=null&&r.push(hn(l,N,h)))),l=l.return}r.length!==0&&e.push({event:t,listeners:r})}var tv=/\r\n?/g,lv=/\u0000|\uFFFD/g;function If(e){return(typeof e=="string"?e:""+e).replace(tv,`
`).replace(lv,"")}function Pf(e,t){return t=If(t),If(e)===t}function ze(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Jl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Jl(e,""+a);break;case"className":Bn(e,"class",a);break;case"tabIndex":Bn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Bn(e,l,a);break;case"style":Iu(e,a,i);break;case"data":if(t!=="object"){Bn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Ln(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&ze(e,t,"name",n.name,n,null),ze(e,t,"formEncType",n.formEncType,n,null),ze(e,t,"formMethod",n.formMethod,n,null),ze(e,t,"formTarget",n.formTarget,n,null)):(ze(e,t,"encType",n.encType,n,null),ze(e,t,"method",n.method,n,null),ze(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Ln(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Bt);break;case"onScroll":a!=null&&ve("scroll",e);break;case"onScrollEnd":a!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Ln(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Un(e,"popover",a);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Un(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Dd.get(l)||l,Un(e,l,a))}}function Wo(e,t,l,a,n,i){switch(l){case"style":Iu(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Jl(e,a):(typeof a=="number"||typeof a=="bigint")&&Jl(e,""+a);break;case"onScroll":a!=null&&ve("scroll",e);break;case"onScrollEnd":a!=null&&ve("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Bt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yu.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[et]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Un(e,l,a)}}}function We(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var r=l[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ze(e,t,i,r,l,null)}}n&&ze(e,t,"srcSet",l.srcSet,l,null),a&&ze(e,t,"src",l.src,l,null);return;case"input":ve("invalid",e);var f=i=r=n=null,h=null,N=null;for(a in l)if(l.hasOwnProperty(a)){var E=l[a];if(E!=null)switch(a){case"name":n=E;break;case"type":r=E;break;case"checked":h=E;break;case"defaultChecked":N=E;break;case"value":i=E;break;case"defaultValue":f=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,t));break;default:ze(e,t,a,E,l,null)}}Ku(e,i,f,h,N,r,n,!1);return;case"select":ve("invalid",e),a=r=i=null;for(n in l)if(l.hasOwnProperty(n)&&(f=l[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":r=f;break;case"multiple":a=f;default:ze(e,t,n,f,l,null)}t=i,l=r,e.multiple=!!a,t!=null?Kl(e,!!a,t,!1):l!=null&&Kl(e,!!a,l,!0);return;case"textarea":ve("invalid",e),i=n=a=null;for(r in l)if(l.hasOwnProperty(r)&&(f=l[r],f!=null))switch(r){case"value":a=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(o(91));break;default:ze(e,t,r,f,l,null)}Wu(e,a,n,i);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ze(e,t,h,a,l,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(a=0;a<pn.length;a++)ve(pn[a],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in l)if(l.hasOwnProperty(N)&&(a=l[N],a!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ze(e,t,N,a,l,null)}return;default:if(rc(t)){for(E in l)l.hasOwnProperty(E)&&(a=l[E],a!==void 0&&Wo(e,t,E,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&ze(e,t,f,a,l,null))}function av(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,f=null,h=null,N=null,E=null;for(w in l){var j=l[w];if(l.hasOwnProperty(w)&&j!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":h=j;default:a.hasOwnProperty(w)||ze(e,t,w,null,a,j)}}for(var R in a){var w=a[R];if(j=l[R],a.hasOwnProperty(R)&&(w!=null||j!=null))switch(R){case"type":i=w;break;case"name":n=w;break;case"checked":N=w;break;case"defaultChecked":E=w;break;case"value":r=w;break;case"defaultValue":f=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(o(137,t));break;default:w!==j&&ze(e,t,R,w,a,j)}}oc(e,r,f,h,N,E,i,n);return;case"select":w=r=f=R=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":w=h;default:a.hasOwnProperty(i)||ze(e,t,i,null,a,h)}for(n in a)if(i=a[n],h=l[n],a.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":R=i;break;case"defaultValue":f=i;break;case"multiple":r=i;default:i!==h&&ze(e,t,n,i,a,h)}t=f,l=r,a=w,R!=null?Kl(e,!!l,R,!1):!!a!=!!l&&(t!=null?Kl(e,!!l,t,!0):Kl(e,!!l,l?[]:"",!1));return;case"textarea":w=R=null;for(f in l)if(n=l[f],l.hasOwnProperty(f)&&n!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:ze(e,t,f,null,a,n)}for(r in a)if(n=a[r],i=l[r],a.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":R=n;break;case"defaultValue":w=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&ze(e,t,r,n,a,i)}Ju(e,R,w);return;case"option":for(var Y in l)if(R=l[Y],l.hasOwnProperty(Y)&&R!=null&&!a.hasOwnProperty(Y))switch(Y){case"selected":e.selected=!1;break;default:ze(e,t,Y,null,a,R)}for(h in a)if(R=a[h],w=l[h],a.hasOwnProperty(h)&&R!==w&&(R!=null||w!=null))switch(h){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:ze(e,t,h,R,a,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in l)R=l[le],l.hasOwnProperty(le)&&R!=null&&!a.hasOwnProperty(le)&&ze(e,t,le,null,a,R);for(N in a)if(R=a[N],w=l[N],a.hasOwnProperty(N)&&R!==w&&(R!=null||w!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:ze(e,t,N,R,a,w)}return;default:if(rc(t)){for(var Ee in l)R=l[Ee],l.hasOwnProperty(Ee)&&R!==void 0&&!a.hasOwnProperty(Ee)&&Wo(e,t,Ee,void 0,a,R);for(E in a)R=a[E],w=l[E],!a.hasOwnProperty(E)||R===w||R===void 0&&w===void 0||Wo(e,t,E,R,a,w);return}}for(var b in l)R=l[b],l.hasOwnProperty(b)&&R!=null&&!a.hasOwnProperty(b)&&ze(e,t,b,null,a,R);for(j in a)R=a[j],w=l[j],!a.hasOwnProperty(j)||R===w||R==null&&w==null||ze(e,t,j,R,a,w)}function e0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,r=n.initiatorType,f=n.duration;if(i&&f&&e0(r)){for(r=0,f=n.responseEnd,a+=1;a<l.length;a++){var h=l[a],N=h.startTime;if(N>f)break;var E=h.transferSize,j=h.initiatorType;E&&e0(j)&&(h=h.responseEnd,r+=E*(h<f?1:(f-N)/(h-N)))}if(--a,t+=8*(i+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $o=null,Io=null;function _i(e){return e.nodeType===9?e:e.ownerDocument}function t0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var eu=null;function iv(){var e=window.event;return e&&e.type==="popstate"?e===eu?!1:(eu=e,!0):(eu=null,!1)}var a0=typeof setTimeout=="function"?setTimeout:void 0,cv=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,ov=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(e){return n0.resolve(null).then(e).catch(uv)}:a0;function uv(e){setTimeout(function(){throw e})}function xl(e){return e==="head"}function i0(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),wa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")xn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,xn(l);for(var i=l.firstChild;i;){var r=i.nextSibling,f=i.nodeName;i[Ua]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=r}}else l==="body"&&xn(e.ownerDocument.body);l=n}while(l);wa(t)}function c0(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function tu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":tu(l),ic(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function rv(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ua])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function sv(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Rt(e.nextSibling),e===null))return null;return e}function o0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function lu(e){return e.data==="$?"||e.data==="$~"}function au(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fv(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var nu=null;function u0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Rt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function r0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function s0(e,t,l){switch(t=_i(l),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function xn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ic(e)}var wt=new Map,f0=new Set;function Mi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $t=q.d;q.d={f:dv,r:mv,D:vv,C:pv,L:hv,m:xv,X:yv,S:gv,M:bv};function dv(){var e=$t.f(),t=Ni();return e||t}function mv(e){var t=Ql(e);t!==null&&t.tag===5&&t.type==="form"?zs(t):$t.r(e)}var Ta=typeof document>"u"?null:document;function d0(e,t,l){var a=Ta;if(a&&typeof t=="string"&&t){var n=gt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),f0.has(n)||(f0.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),We(t,"link",e),Xe(t),a.head.appendChild(t)))}}function vv(e){$t.D(e),d0("dns-prefetch",e,null)}function pv(e,t){$t.C(e,t),d0("preconnect",e,t)}function hv(e,t,l){$t.L(e,t,l);var a=Ta;if(a&&e&&t){var n='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+gt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+gt(l.imageSizes)+'"]')):n+='[href="'+gt(e)+'"]';var i=n;switch(t){case"style":i=Na(e);break;case"script":i=Ra(e)}wt.has(i)||(e=U({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),wt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(gn(i))||t==="script"&&a.querySelector(yn(i))||(t=a.createElement("link"),We(t,"link",e),Xe(t),a.head.appendChild(t)))}}function xv(e,t){$t.m(e,t);var l=Ta;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+gt(a)+'"][href="'+gt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ra(e)}if(!wt.has(i)&&(e=U({rel:"modulepreload",href:e},t),wt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yn(i)))return}a=l.createElement("link"),We(a,"link",e),Xe(a),l.head.appendChild(a)}}}function gv(e,t,l){$t.S(e,t,l);var a=Ta;if(a&&e){var n=kl(a).hoistableStyles,i=Na(e);t=t||"default";var r=n.get(i);if(!r){var f={loading:0,preload:null};if(r=a.querySelector(gn(i)))f.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":t},l),(l=wt.get(i))&&iu(e,l);var h=r=a.createElement("link");Xe(h),We(h,"link",e),h._p=new Promise(function(N,E){h.onload=N,h.onerror=E}),h.addEventListener("load",function(){f.loading|=1}),h.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ui(r,t,a)}r={type:"stylesheet",instance:r,count:1,state:f},n.set(i,r)}}}function yv(e,t){$t.X(e,t);var l=Ta;if(l&&e){var a=kl(l).hoistableScripts,n=Ra(e),i=a.get(n);i||(i=l.querySelector(yn(n)),i||(e=U({src:e,async:!0},t),(t=wt.get(n))&&cu(e,t),i=l.createElement("script"),Xe(i),We(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function bv(e,t){$t.M(e,t);var l=Ta;if(l&&e){var a=kl(l).hoistableScripts,n=Ra(e),i=a.get(n);i||(i=l.querySelector(yn(n)),i||(e=U({src:e,async:!0,type:"module"},t),(t=wt.get(n))&&cu(e,t),i=l.createElement("script"),Xe(i),We(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function m0(e,t,l,a){var n=(n=de.current)?Mi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Na(l.href),l=kl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Na(l.href);var i=kl(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(gn(e)))&&!i._p&&(r.instance=i,r.state.loading=5),wt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},wt.set(e,l),i||Sv(n,e,l,r.state))),t&&a===null)throw Error(o(528,""));return r}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ra(l),l=kl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Na(e){return'href="'+gt(e)+'"'}function gn(e){return'link[rel="stylesheet"]['+e+"]"}function v0(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function Sv(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),We(t,"link",l),Xe(t),e.head.appendChild(t))}function Ra(e){return'[src="'+gt(e)+'"]'}function yn(e){return"script[async]"+e}function p0(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+gt(l.href)+'"]');if(a)return t.instance=a,Xe(a),a;var n=U({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Xe(a),We(a,"style",n),Ui(a,l.precedence,e),t.instance=a;case"stylesheet":n=Na(l.href);var i=e.querySelector(gn(n));if(i)return t.state.loading|=4,t.instance=i,Xe(i),i;a=v0(l),(n=wt.get(n))&&iu(a,n),i=(e.ownerDocument||e).createElement("link"),Xe(i);var r=i;return r._p=new Promise(function(f,h){r.onload=f,r.onerror=h}),We(i,"link",a),t.state.loading|=4,Ui(i,l.precedence,e),t.instance=i;case"script":return i=Ra(l.src),(n=e.querySelector(yn(i)))?(t.instance=n,Xe(n),n):(a=l,(n=wt.get(i))&&(a=U({},l),cu(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Xe(n),We(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ui(a,l.precedence,e));return t.instance}function Ui(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,r=0;r<a.length;r++){var f=a[r];if(f.dataset.precedence===t)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function iu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function cu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Bi=null;function h0(e,t,l){if(Bi===null){var a=new Map,n=Bi=new Map;n.set(l,a)}else n=Bi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Ua]||i[ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var f=a.get(r);f?f.push(i):a.set(r,[i])}}return a}function x0(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Av(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function g0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Tv(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Na(a.href),i=t.querySelector(gn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Oi.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Xe(i);return}i=t.ownerDocument||t,a=v0(a),(n=wt.get(n))&&iu(a,n),i=i.createElement("link"),Xe(i);var r=i;r._p=new Promise(function(f,h){r.onload=f,r.onerror=h}),We(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Oi.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var ou=0;function Nv(e,t){return e.stylesheets&&e.count===0&&Hi(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&ou===0&&(ou=62500*nv());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>ou?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Oi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Li=null;function Hi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Li=new Map,t.forEach(Rv,e),Li=null,Oi.call(e))}function Rv(e,t){if(!(t.state.loading&4)){var l=Li.get(e);if(l)var a=l.get(null);else{l=new Map,Li.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(l.set(r.dataset.precedence,r),a=r)}a&&l.set(null,a)}n=t.instance,r=n.getAttribute("data-precedence"),i=l.get(r)||a,i===a&&l.set(null,n),l.set(r,n),this.count++,a=Oi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var bn={$$typeof:te,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function wv(e,t,l,a,n,i,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tc(0),this.hiddenUpdates=tc(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function y0(e,t,l,a,n,i,r,f,h,N,E,j){return e=new wv(e,t,l,r,h,N,E,j,f),t=1,i===!0&&(t|=24),i=ft(3,null,null,t),e.current=i,i.stateNode=e,t=qc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},Yc(i),e}function b0(e){return e?(e=la,e):la}function S0(e,t,l,a,n,i){n=b0(n),a.context===null?a.context=n:a.pendingContext=n,a=cl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=ol(e,a,t),l!==null&&(ct(l,e,t),$a(l,e,t))}function A0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function uu(e,t){A0(e,t),(e=e.alternate)&&A0(e,t)}function T0(e){if(e.tag===13||e.tag===31){var t=Cl(e,67108864);t!==null&&ct(t,e,67108864),uu(e,67108864)}}function N0(e){if(e.tag===13||e.tag===31){var t=ht();t=lc(t);var l=Cl(e,t);l!==null&&ct(l,e,t),uu(e,t)}}var qi=!0;function zv(e,t,l,a){var n=z.T;z.T=null;var i=q.p;try{q.p=2,ru(e,t,l,a)}finally{q.p=i,z.T=n}}function Ev(e,t,l,a){var n=z.T;z.T=null;var i=q.p;try{q.p=8,ru(e,t,l,a)}finally{q.p=i,z.T=n}}function ru(e,t,l,a){if(qi){var n=su(a);if(n===null)Jo(e,t,a,Gi,l),w0(e,a);else if(Dv(n,e,t,l,a))a.stopPropagation();else if(w0(e,a),t&4&&-1<Cv.indexOf(e)){for(;n!==null;){var i=Ql(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Nl(i.pendingLanes);if(r!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;r;){var h=1<<31-rt(r);f.entanglements[1]|=h,r&=~h}Mt(i),(Ae&6)===0&&(Ai=ot()+500,vn(0))}}break;case 31:case 13:f=Cl(i,2),f!==null&&ct(f,i,2),Ni(),uu(i,2)}if(i=su(a),i===null&&Jo(e,t,a,Gi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Jo(e,t,a,null,l)}}function su(e){return e=fc(e),fu(e)}var Gi=null;function fu(e){if(Gi=null,e=Xl(e),e!==null){var t=x(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=c(t),e!==null)return e;e=null}else if(l===31){if(e=m(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gi=e,null}function R0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vd()){case _u:return 2;case Mu:return 8;case Cn:case pd:return 32;case Uu:return 268435456;default:return 32}default:return 32}}var du=!1,gl=null,yl=null,bl=null,Sn=new Map,An=new Map,Sl=[],Cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w0(e,t){switch(e){case"focusin":case"focusout":gl=null;break;case"dragenter":case"dragleave":yl=null;break;case"mouseover":case"mouseout":bl=null;break;case"pointerover":case"pointerout":Sn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(t.pointerId)}}function Tn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ql(t),t!==null&&T0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Dv(e,t,l,a,n){switch(t){case"focusin":return gl=Tn(gl,e,t,l,a,n),!0;case"dragenter":return yl=Tn(yl,e,t,l,a,n),!0;case"mouseover":return bl=Tn(bl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Sn.set(i,Tn(Sn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,An.set(i,Tn(An.get(i)||null,e,t,l,a,n)),!0}return!1}function z0(e){var t=Xl(e.target);if(t!==null){var l=x(t);if(l!==null){if(t=l.tag,t===13){if(t=c(l),t!==null){e.blockedOn=t,Gu(e.priority,function(){N0(l)});return}}else if(t===31){if(t=m(l),t!==null){e.blockedOn=t,Gu(e.priority,function(){N0(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=su(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);sc=a,l.target.dispatchEvent(a),sc=null}else return t=Ql(l),t!==null&&T0(t),e.blockedOn=l,!1;t.shift()}return!0}function E0(e,t,l){Fi(e)&&l.delete(t)}function jv(){du=!1,gl!==null&&Fi(gl)&&(gl=null),yl!==null&&Fi(yl)&&(yl=null),bl!==null&&Fi(bl)&&(bl=null),Sn.forEach(E0),An.forEach(E0)}function Vi(e,t){e.blockedOn===t&&(e.blockedOn=null,du||(du=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,jv)))}var Yi=null;function C0(e){Yi!==e&&(Yi=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Yi===e&&(Yi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(fu(a||l)===null)continue;break}var i=Ql(l);i!==null&&(e.splice(t,3),t-=3,ro(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function wa(e){function t(h){return Vi(h,e)}gl!==null&&Vi(gl,e),yl!==null&&Vi(yl,e),bl!==null&&Vi(bl,e),Sn.forEach(t),An.forEach(t);for(var l=0;l<Sl.length;l++){var a=Sl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Sl.length&&(l=Sl[0],l.blockedOn===null);)z0(l),l.blockedOn===null&&Sl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],r=n[et]||null;if(typeof i=="function")r||C0(l);else if(r){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[et]||null)f=r.formAction;else if(fu(n)!==null)continue}else f=r.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),C0(l)}}}function D0(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function mu(e){this._internalRoot=e}Xi.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var l=t.current,a=ht();S0(l,a,e,t,null,null)},Xi.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;S0(e.current,2,null,e,null,null),Ni(),t[Yl]=null}};function Xi(e){this._internalRoot=e}Xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=qu();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Sl.length&&t!==0&&t<Sl[l].priority;l++);Sl.splice(l,0,e),l===0&&z0(e)}};var j0=d.version;if(j0!=="19.2.4")throw Error(o(527,j0,"19.2.4"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=A(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var _v={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{ja=Qi.inject(_v),ut=Qi}catch{}}return Rn.createRoot=function(e,t){if(!S(e))throw Error(o(299));var l=!1,a="",n=Ls,i=Hs,r=qs;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=y0(e,1,!1,null,null,l,a,null,n,i,r,D0),e[Yl]=t.current,Ko(e),new mu(t)},Rn.hydrateRoot=function(e,t,l){if(!S(e))throw Error(o(299));var a=!1,n="",i=Ls,r=Hs,f=qs,h=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(r=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.formState!==void 0&&(h=l.formState)),t=y0(e,1,!0,t,l??null,a,n,h,i,r,f,D0),t.context=b0(null),l=t.current,a=ht(),a=lc(a),n=cl(a),n.callback=null,ol(l,n,a),l=a,t.current.lanes=l,Ma(t,l),Mt(t),e[Yl]=t.current,Ko(e),new Xi(t)},Rn.version="19.2.4",Rn}var F0;function Yv(){if(F0)return hu.exports;F0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),hu.exports=Vv(),hu.exports}var Xv=Yv();const Qv=sd(Xv),kv=[{id:"vortex",name:"Vortex Portal",description:"Spiral energy field",technique:"FBM + Polar Warp"},{id:"lumina",name:"Lumina Flow",description:"Domain warping fluid",technique:"Multi-layer FBM"},{id:"isometric",name:"Isometric Flow",description:"Dynamic block grid",technique:"DDA Raymarching"},{id:"flowfield",name:"Flow Field",description:"Vector field visualization",technique:"Curl Noise + LIC"},{id:"tunnel",name:"Warp Tunnel",description:"Volumetric wormhole",technique:"Raymarching + FBM"},{id:"aura",name:"Noise Aura",description:"Volumetric nebula",technique:"Vol. Accumulation"},{id:"neon",name:"Neon Noise",description:"Psychedelic color flow",technique:"FBM + Domain Warp"},{id:"fluid",name:"Fluid Flow",description:"Double-warped liquid",technique:"Dual Domain Warp"},{id:"neuro",name:"NeuroFlow",description:"Cyberpunk energy lines",technique:"Simplex + Hue Shift"},{id:"neonwave",name:"Neonwave",description:"Neon terrain flight",technique:"Plane Stacking + FBM"},{id:"neontext",name:"Neon Text",description:"SDF text on sphere",technique:"SDF + Raymarching"},{id:"aurora",name:"Aurora Cloudscape",description:"Volumetric aurora",technique:"Soft Clouds + Waves"},{id:"hypergrid",name:"Hyper Grid",description:"Warp speed grid cells",technique:"Grid March + Rotation"},{id:"jellyfish",name:"Luminescence",description:"Bioluminescent jellyfish",technique:"SDF + Volumetric"},{id:"trainjourney",name:"Train Journey",description:"Parallax mountain train",technique:"FBM + Parallax Layers"},{id:"horizon",name:"Horizon",description:"Parallax mountain scape",technique:"FBM + Depth Parallax"}],Zv=({active:s,onSelect:d})=>u.jsxs("div",{className:"w-[200px] flex-shrink-0 flex flex-col h-full py-4 px-3",children:[u.jsxs("div",{className:"flex items-center gap-2 px-2 mb-5",children:[u.jsx("div",{className:"w-6 h-6 rounded-lg bg-neutral-800 flex items-center justify-center",children:u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:[u.jsx("circle",{cx:"7",cy:"7",r:"3",stroke:"white",strokeWidth:"1.5"}),u.jsx("circle",{cx:"7",cy:"7",r:"6",stroke:"white",strokeWidth:"0.5",opacity:"0.4"})]})}),u.jsx("span",{className:"text-[12px] font-semibold text-neutral-700",children:"Shader Lab"})]}),u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide px-2 mb-2",children:"Shaders"}),u.jsx("div",{className:"flex flex-col gap-1 flex-1 min-h-0 overflow-y-auto",children:kv.map(p=>u.jsxs("button",{onClick:()=>d(p.id),className:`w-full flex flex-col items-start px-3 py-2.5 rounded-xl text-left transition-all ${s===p.id?"bg-neutral-800 text-white":"text-neutral-600 hover:bg-neutral-100"}`,children:[u.jsx("span",{className:"text-[11px] font-medium",children:p.name}),u.jsx("span",{className:`text-[9px] mt-0.5 ${s===p.id,"text-neutral-400"}`,children:p.description})]},p.id))}),u.jsxs("div",{className:"mt-auto px-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Info"}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] text-neutral-500 leading-relaxed",children:"WebGL shader gallery with real-time parameter control. Pure fragment shader rendering."}),u.jsxs("div",{className:"mt-2 flex items-center gap-1",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),u.jsx("span",{className:"text-[8px] text-neutral-400",children:"GPU Accelerated"})]})]})]})]}),Kv=({guide:s,onClose:d})=>(D.useEffect(()=>{const p=o=>{o.key==="Escape"&&d()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[d]),u.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-6",onClick:d,children:[u.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-sm"}),u.jsxs("div",{className:"relative w-full max-w-[640px] max-h-[85vh] bg-white rounded-3xl flex flex-col overflow-hidden",onClick:p=>p.stopPropagation(),children:[u.jsxs("div",{className:"flex items-center gap-3 px-6 py-4 flex-shrink-0",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[14px] font-semibold text-neutral-800",children:s.title}),u.jsx("span",{className:"text-[10px] text-neutral-400",children:s.subtitle})]}),u.jsx("p",{className:"text-[11px] text-neutral-500 mt-0.5",children:s.oneLiner})]}),u.jsx("button",{onClick:d,className:"w-7 h-7 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors flex-shrink-0",children:u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:u.jsx("path",{d:"M2 2L10 10M10 2L2 10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto min-h-0 px-6 pb-6",children:[u.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"What You See"}),u.jsx("p",{className:"text-[11px] text-neutral-600 leading-[1.7]",children:s.whatYouSee})]}),u.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Rendering Pipeline"}),u.jsx("div",{className:"flex flex-col gap-2",children:s.pipeline.map(p=>u.jsx("div",{className:"bg-white rounded-xl p-3",children:u.jsxs("div",{className:"flex items-start gap-2.5",children:[u.jsx("span",{className:"text-[9px] font-semibold text-neutral-300 mt-px flex-shrink-0 w-4",children:p.step}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("div",{className:"text-[10px] font-semibold text-neutral-700 mb-1",children:p.title}),u.jsx("p",{className:"text-[10px] text-neutral-500 leading-[1.6]",children:p.description}),p.glsl&&u.jsx("pre",{className:"mt-2 bg-neutral-50 rounded-lg px-2.5 py-1.5 overflow-x-auto",children:u.jsx("code",{className:"text-[9px] font-mono text-neutral-500 leading-relaxed whitespace-pre",children:p.glsl})})]})]})},p.step))})]}),u.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Core Concepts"}),u.jsx("div",{className:"flex flex-col gap-2",children:s.concepts.map(p=>u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsxs("div",{className:"flex items-center gap-1.5 mb-1.5",children:[u.jsx("span",{className:"text-[10px] font-semibold text-neutral-700",children:p.name}),u.jsx("span",{className:"text-[8px] px-1 py-0.5 rounded bg-neutral-100 text-neutral-400 font-mono",children:p.nameEN})]}),u.jsx("div",{className:"bg-neutral-50 rounded-lg px-2.5 py-2 mb-2",children:u.jsx("p",{className:"text-[10px] text-neutral-600 leading-[1.6] italic",children:p.analogy})}),u.jsx("p",{className:"text-[10px] text-neutral-500 leading-[1.6] mb-1.5",children:p.explanation}),u.jsxs("div",{className:"flex items-start gap-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 flex-shrink-0",children:"Why:"}),u.jsx("span",{className:"text-[9px] text-neutral-500 leading-[1.5]",children:p.whyItMatters})]})]},p.nameEN))})]}),u.jsxs("div",{className:"bg-neutral-100 rounded-2xl p-4 mb-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Real-World Applications"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:s.applications.map(p=>u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[10px] font-semibold text-neutral-700 mb-1",children:p.field}),u.jsx("p",{className:"text-[9px] text-neutral-500 leading-[1.5]",children:p.examples})]},p.field))})]}),u.jsxs("div",{className:"bg-neutral-800 rounded-2xl p-4",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-500 uppercase tracking-wide mb-2",children:"Key Insight"}),u.jsx("p",{className:"text-[11px] text-neutral-300 leading-[1.7]",children:s.keyInsight})]})]})]})]})),Jv={flowfield:{id:"flowfield",title:"Flow Field",subtitle:"向量场可视化",oneLiner:"用噪声生成「风向地图」，再让粒子沿着风向留下轨迹",whatYouSee:"想象气象台的风速图——颜色代表速度快慢（蓝→绿→黄→红），条纹代表风的流动轨迹。每个像素都在问：「这里的风往哪吹？」然后顺着风向往回看，采样噪声留下运动模糊的条纹。多个时间相位叠加，产生连续流动的动画效果。",pipeline:[{step:"01",title:"构建向量场",description:"用 FBM 噪声生成一个「势场」（potential field），然后计算它的旋度（curl）得到无散度的向量场。就像气压图→风向：高压流向低压，旋度确保风不会凭空消失或产生。加上纬向基础流（zonal flow）模拟地球大气环流。",glsl:`vec2 curl = vec2((n3 - n1)/eps, -(n2 - n1)/eps);
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
col *= mix(1.0, 0.5 + 0.5*vig, uVignette);`}],concepts:[{name:"参数化程序生成",nameEN:"Parametric Procedural Generation",analogy:"一个菜谱可以做出无限种菜——同样的步骤，换食材（颜色）、调火候（速度）、改分量（层数），就是完全不同的风味。",explanation:"将硬编码的 14 层替换为参数驱动的循环：层数、深度、色彩都成为 uniform 变量。GPU 在每帧根据当前参数实时计算所有层，无需预烘焙。这是从「固定作品」到「生成系统」的本质跃迁。",whyItMatters:"参数化是程序生成的灵魂。一个参数化的 shader 可以生成无限变体——日落沙漠、极地冰川、午夜幽谷——只需调几个滑块。这正是游戏和影视中 PCG（程序化内容生成）的核心理念。"},{name:"运动视差",nameEN:"Motion Parallax",analogy:"坐车看风景：路边的树飞速后退，远山几乎不动。大脑通过速度差判断远近。",explanation:"每层的滚动速度 = t / dist，dist 从 1（最近）到 100（最远），形成二次曲线分布（nearRatio²）。这模拟了透视投影中「角速度与距离成反比」的物理规律，是 2D 画面中最强的深度线索。",whyItMatters:"运动视差是人类日常感知深度的主要方式之一（仅次于双目视差）。掌握这个原理，你可以在任何 2D 媒介中创造令人信服的 3D 空间感——网页、游戏、动画都适用。"},{name:"FBM 分形地形",nameEN:"FBM Fractal Terrain",analogy:"从太空看地球：大陆板块是最大的起伏，山脉是中等起伏，岩石是小起伏——它们在不同尺度上自相似。",explanation:"FBM 叠加 8 层噪声，每层频率 ×2、振幅 ×0.7。低频层决定山脊走势，高频层添加细节。0.7 的衰减比产生自然的 1/f 噪声特征，这与真实地形的功率谱分布惊人吻合。",whyItMatters:"FBM 是程序化地形生成的基石，从 Minecraft 到 3A 大作的开放世界都在使用。理解频率-振幅关系，你就能生成山脉、云层、海浪——自然界的大部分纹理都是分形的。"}],applications:[{field:"动态壁纸",examples:"桌面/手机动态壁纸、数字相框、LED 墙面装饰"},{field:"游戏背景",examples:"横版游戏远景、主菜单动态背景、加载界面"},{field:"网页设计",examples:"着陆页首屏背景、博客 hero 区域、产品展示动态背景"},{field:"直播/视频",examples:"直播间虚拟背景、视频转场、音乐可视化底图"}],keyInsight:"Horizon 的核心洞察是「参数化 = 从作品到工具的跃迁」。Train Journey 是一幅精心手绘的画——14 层手调颜色、固定的火车和桥梁；Horizon 是一台画画机器——用循环和参数取代硬编码，用三色渐变取代 40+ 个 RGB 值。看似简化，实则升维：一个固定作品只有一种形态，一个参数化系统拥有无限变体。这正是程序化生成（Procedural Generation）的哲学精髓——不要画一棵树，要写一个长树的规则。从游戏世界生成到 AI 辅助设计，参数化思维是通往「用代码创造世界」的第一步。"}},Wv=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,$v=`
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
`,V0=s=>{const d=parseInt(s.replace("#",""),16),p=(d>>16&255)/255,o=(d>>8&255)/255,S=(d&255)/255;return[p,o,S]},Iv=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s);return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const x=d.current;if(!x)return;const c=x.getContext("webgl");if(!c)return;const m=(B,L)=>{const H=c.createShader(L);return H?(c.shaderSource(H,B),c.compileShader(H),c.getShaderParameter(H,c.COMPILE_STATUS)?H:(c.deleteShader(H),null)):null},_=m(Wv,c.VERTEX_SHADER),A=m($v,c.FRAGMENT_SHADER);if(!_||!A)return;const v=c.createProgram();if(!v)return;c.attachShader(v,_),c.attachShader(v,A),c.linkProgram(v),c.useProgram(v);const U=new Float32Array([-1,-1,1,-1,-1,1,1,1]),X=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,X),c.bufferData(c.ARRAY_BUFFER,U,c.STATIC_DRAW);const F=c.getAttribLocation(v,"position");c.enableVertexAttribArray(F),c.vertexAttribPointer(F,2,c.FLOAT,!1,0,0);const P=c.getUniformLocation(v,"iResolution"),J=c.getUniformLocation(v,"iTime"),ee=c.getUniformLocation(v,"uColor1"),ie=c.getUniformLocation(v,"uColor2"),oe=c.getUniformLocation(v,"uSpeed"),te=c.getUniformLocation(v,"uDensity"),ae=c.getUniformLocation(v,"uSuction");let ne=!0;const Z=()=>{if(!ne)return;const B=x.clientWidth*window.devicePixelRatio,L=x.clientHeight*window.devicePixelRatio;(x.width!==B||x.height!==L)&&(x.width=B,x.height=L,c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight));const H=(Date.now()-o.current)/1e3,O=S.current,G=V0(O.color1),K=V0(O.color2);c.uniform2f(P,x.width,x.height),c.uniform1f(J,H),c.uniform3f(ee,G[0],G[1],G[2]),c.uniform3f(ie,K[0],K[1],K[2]),c.uniform1f(oe,O.speed),c.uniform1f(te,O.density),c.uniform1f(ae,O.suction),c.drawArrays(c.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(Z)};return Z(),()=>{ne=!1,cancelAnimationFrame(p.current),c.deleteProgram(v)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},Y0=[{id:"arcane",label:"Arcane",c1:"#8b5cf6",c2:"#06b6d4"},{id:"biohazard",label:"Biohazard",c1:"#4ade80",c2:"#022c22"},{id:"inferno",label:"Inferno",c1:"#f59e0b",c2:"#b91c1c"},{id:"void",label:"The Void",c1:"#ffffff",c2:"#000000"}],bu=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(1)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Pv=({params:s,onChange:d})=>{const p=Y0.find(o=>o.c1===s.color1&&o.c2===s.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(bu,{label:"Flow Speed",value:s.speed,min:0,max:5,step:.1,onChange:o=>d({...s,speed:o})}),u.jsx(bu,{label:"Twist Intensity",value:s.suction,min:0,max:3,step:.1,onChange:o=>d({...s,suction:o})}),u.jsx(bu,{label:"Noise Density",value:s.density,min:1,max:10,step:.5,onChange:o=>d({...s,density:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Resonance"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:Y0.map(o=>u.jsx("button",{onClick:()=>d({...s,color1:o.c1,color2:o.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(p==null?void 0:p.id)===o.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${o.c1}, ${o.c2})`},title:o.label},o.id))}),p&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:p.label})]})]})},ep=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,tp=`
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

    vec3 crimson = vec3(0.8, 0.1, 0.2);
    color = mix(color, crimson, smoothstep(0.0, 1.0, length(r.x) * length(r.y)));

    vec3 oilPalette = palette(
      length(q) + f,
      vec3(0.5, 0.5, 0.5),
      vec3(0.5, 0.5, 0.5),
      vec3(1.0, 1.0, 1.0),
      vec3(0.0, 0.33, 0.67)
    );

    color = mix(color, oilPalette, 0.3);
    color *= f * f * 2.5 + 0.5;

    gl_FragColor = vec4(color, 1.0);
  }
`,Su=s=>{const d=parseInt(s.slice(1,3),16)/255,p=parseInt(s.slice(3,5),16)/255,o=parseInt(s.slice(5,7),16)/255;return[d,p,o]},lp=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s);return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const x=d.current;if(!x)return;const c=x.getContext("webgl");if(!c)return;const m=(L,H)=>{const O=c.createShader(H);return O?(c.shaderSource(O,L),c.compileShader(O),c.getShaderParameter(O,c.COMPILE_STATUS)?O:(c.deleteShader(O),null)):null},_=m(ep,c.VERTEX_SHADER),A=m(tp,c.FRAGMENT_SHADER);if(!_||!A)return;const v=c.createProgram();if(!v)return;c.attachShader(v,_),c.attachShader(v,A),c.linkProgram(v),c.useProgram(v);const U=new Float32Array([-1,-1,1,-1,-1,1,1,1]),X=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,X),c.bufferData(c.ARRAY_BUFFER,U,c.STATIC_DRAW);const F=c.getAttribLocation(v,"position");c.enableVertexAttribArray(F),c.vertexAttribPointer(F,2,c.FLOAT,!1,0,0);const P=c.getUniformLocation(v,"iResolution"),J=c.getUniformLocation(v,"iTime"),ee=c.getUniformLocation(v,"u_speed"),ie=c.getUniformLocation(v,"u_zoom"),oe=c.getUniformLocation(v,"u_warpStrength"),te=c.getUniformLocation(v,"u_color1"),ae=c.getUniformLocation(v,"u_color2"),ne=c.getUniformLocation(v,"u_color3");let Z=!0;const B=()=>{if(!Z)return;const L=x.clientWidth*window.devicePixelRatio,H=x.clientHeight*window.devicePixelRatio;(x.width!==L||x.height!==H)&&(x.width=L,x.height=H,c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight));const O=(Date.now()-o.current)/1e3,G=S.current,K=Su(G.color1),I=Su(G.color2),se=Su(G.color3);c.uniform2f(P,x.width,x.height),c.uniform1f(J,O),c.uniform1f(ee,G.speed),c.uniform1f(ie,G.zoom),c.uniform1f(oe,G.warpStrength),c.uniform3f(te,K[0],K[1],K[2]),c.uniform3f(ae,I[0],I[1],I[2]),c.uniform3f(ne,se[0],se[1],se[2]),c.drawArrays(c.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(B)};return B(),()=>{Z=!1,cancelAnimationFrame(p.current),c.deleteProgram(v)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},X0=[{id:"ocean",label:"Deep Ocean",c1:"#000d33",c2:"#1a664d",c3:"#ffcc33"},{id:"sunset",label:"Sunset",c1:"#1a0a2e",c2:"#b44d12",c3:"#f5d442"},{id:"aurora",label:"Aurora",c1:"#0a1628",c2:"#2dd4bf",c3:"#a78bfa"},{id:"midnight",label:"Midnight",c1:"#0f172a",c2:"#334155",c3:"#e2e8f0"}],Au=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(S<.1?2:1)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),ap=({params:s,onChange:d})=>{const p=X0.find(o=>o.c1===s.color1&&o.c2===s.color2&&o.c3===s.color3);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Au,{label:"Flow Speed",value:s.speed,min:0,max:2,step:.01,onChange:o=>d({...s,speed:o})}),u.jsx(Au,{label:"Zoom / Scale",value:s.zoom,min:.5,max:10,step:.1,onChange:o=>d({...s,zoom:o})}),u.jsx(Au,{label:"Warp Strength",value:s.warpStrength,min:0,max:8,step:.1,onChange:o=>d({...s,warpStrength:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Theme Presets"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:X0.map(o=>u.jsx("button",{onClick:()=>d({...s,color1:o.c1,color2:o.c2,color3:o.c3}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(p==null?void 0:p.id)===o.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${o.c1}, ${o.c2}, ${o.c3})`},title:o.label},o.id))}),p&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:p.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Custom Palette"}),u.jsx("div",{className:"flex flex-col gap-2",children:[{key:"color1",label:"Base"},{key:"color2",label:"Mid"},{key:"color3",label:"Highlight"}].map(({key:o,label:S})=>u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 w-12",children:S}),u.jsxs("div",{className:"flex-1 flex items-center gap-1.5 bg-neutral-50 rounded-lg px-2 py-1",children:[u.jsx("input",{type:"color",value:s[o],onChange:x=>d({...s,[o]:x.target.value}),className:"w-4 h-4 rounded cursor-pointer bg-transparent p-0",style:{border:"none"}}),u.jsx("span",{className:"text-[9px] font-mono text-neutral-500",children:s[o]})]})]},o))})]})]})},np=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,ip=`
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
`,cp=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s),x=D.useRef({x:.5,y:.5});return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const c=d.current;if(!c)return;const m=_=>{const A=c.getBoundingClientRect();x.current={x:(_.clientX-A.left)/A.width*2-1,y:-((_.clientY-A.top)/A.height*2-1)}};return c.addEventListener("mousemove",m),()=>c.removeEventListener("mousemove",m)},[]),D.useEffect(()=>{const c=d.current;if(!c)return;const m=c.getContext("webgl");if(!m)return;const _=(G,K)=>{const I=m.createShader(K);return I?(m.shaderSource(I,G),m.compileShader(I),m.getShaderParameter(I,m.COMPILE_STATUS)?I:(m.deleteShader(I),null)):null},A=_(np,m.VERTEX_SHADER),v=_(ip,m.FRAGMENT_SHADER);if(!A||!v)return;const U=m.createProgram();if(!U)return;m.attachShader(U,A),m.attachShader(U,v),m.linkProgram(U),m.useProgram(U);const X=new Float32Array([-1,-1,1,-1,-1,1,1,1]),F=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,F),m.bufferData(m.ARRAY_BUFFER,X,m.STATIC_DRAW);const P=m.getAttribLocation(U,"position");m.enableVertexAttribArray(P),m.vertexAttribPointer(P,2,m.FLOAT,!1,0,0);const J=m.getUniformLocation(U,"iResolution"),ee=m.getUniformLocation(U,"iTime"),ie=m.getUniformLocation(U,"iMouse"),oe=m.getUniformLocation(U,"uBlockSize"),te=m.getUniformLocation(U,"uSpacing"),ae=m.getUniformLocation(U,"uTimeSpeed"),ne=m.getUniformLocation(U,"uMouseInfluence"),Z=m.getUniformLocation(U,"uFogStart"),B=m.getUniformLocation(U,"uFogEnd"),L=m.getUniformLocation(U,"uCamDistance");let H=!0;const O=()=>{if(!H)return;const G=c.clientWidth*window.devicePixelRatio,K=c.clientHeight*window.devicePixelRatio;(c.width!==G||c.height!==K)&&(c.width=G,c.height=K,m.viewport(0,0,m.drawingBufferWidth,m.drawingBufferHeight));const I=(Date.now()-o.current)/1e3,se=S.current;m.uniform2f(J,c.width,c.height),m.uniform1f(ee,I),m.uniform2f(ie,x.current.x,x.current.y),m.uniform1f(oe,se.blockSize),m.uniform1f(te,se.spacing),m.uniform1f(ae,se.timeSpeed),m.uniform1f(ne,se.mouseInfluence),m.uniform1f(Z,se.fogStart),m.uniform1f(B,se.fogEnd),m.uniform1f(L,se.camDistance),m.drawArrays(m.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(O)};return O(),()=>{H=!1,cancelAnimationFrame(p.current),m.deleteProgram(U)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},Q0=[{id:"default",label:"Default",params:{blockSize:1.5,spacing:2.5,timeSpeed:.8,mouseInfluence:1,fogStart:40,fogEnd:100,camDistance:80}},{id:"dense",label:"Dense Grid",params:{blockSize:1.8,spacing:2.2,timeSpeed:1.2,mouseInfluence:.8,fogStart:30,fogEnd:80,camDistance:70}},{id:"sparse",label:"Sparse Flow",params:{blockSize:1.2,spacing:3.5,timeSpeed:.5,mouseInfluence:1.5,fogStart:50,fogEnd:120,camDistance:100}},{id:"distant",label:"Distant View",params:{blockSize:1.5,spacing:2.5,timeSpeed:.6,mouseInfluence:.5,fogStart:60,fogEnd:150,camDistance:120}}],Vl=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(1)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),op=({params:s,onChange:d})=>{const p=Q0.find(o=>o.params.blockSize===s.blockSize&&o.params.spacing===s.spacing&&o.params.timeSpeed===s.timeSpeed&&o.params.camDistance===s.camDistance);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Geometry"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Vl,{label:"Block Size",value:s.blockSize,min:.5,max:3,step:.1,onChange:o=>d({...s,blockSize:o})}),u.jsx(Vl,{label:"Grid Spacing",value:s.spacing,min:1.5,max:5,step:.1,onChange:o=>d({...s,spacing:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Vl,{label:"Time Speed",value:s.timeSpeed,min:0,max:2,step:.1,onChange:o=>d({...s,timeSpeed:o})}),u.jsx(Vl,{label:"Mouse Influence",value:s.mouseInfluence,min:0,max:2,step:.1,onChange:o=>d({...s,mouseInfluence:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Camera & Atmosphere"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Vl,{label:"Camera Distance",value:s.camDistance,min:50,max:150,step:5,onChange:o=>d({...s,camDistance:o})}),u.jsx(Vl,{label:"Fog Start",value:s.fogStart,min:20,max:80,step:5,onChange:o=>d({...s,fogStart:o})}),u.jsx(Vl,{label:"Fog End",value:s.fogEnd,min:60,max:180,step:10,onChange:o=>d({...s,fogEnd:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"View Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:Q0.map(o=>u.jsx("button",{onClick:()=>d(o.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(p==null?void 0:p.id)===o.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:o.label},o.id))})]})]})},up=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,rp=`
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
`,sp=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s);return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const x=d.current;if(!x)return;const c=x.getContext("webgl");if(!c)return;const m=(B,L)=>{const H=c.createShader(L);return H?(c.shaderSource(H,B),c.compileShader(H),c.getShaderParameter(H,c.COMPILE_STATUS)?H:(c.deleteShader(H),null)):null},_=m(up,c.VERTEX_SHADER),A=m(rp,c.FRAGMENT_SHADER);if(!_||!A)return;const v=c.createProgram();if(!v)return;c.attachShader(v,_),c.attachShader(v,A),c.linkProgram(v),c.useProgram(v);const U=new Float32Array([-1,-1,1,-1,-1,1,1,1]),X=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,X),c.bufferData(c.ARRAY_BUFFER,U,c.STATIC_DRAW);const F=c.getAttribLocation(v,"position");c.enableVertexAttribArray(F),c.vertexAttribPointer(F,2,c.FLOAT,!1,0,0);const P=c.getUniformLocation(v,"iResolution"),J=c.getUniformLocation(v,"iTime"),ee=c.getUniformLocation(v,"uFlowSpeed"),ie=c.getUniformLocation(v,"uStreakLength"),oe=c.getUniformLocation(v,"uZoom"),te=c.getUniformLocation(v,"uTurbulence"),ae=c.getUniformLocation(v,"uGridOpacity");let ne=!0;const Z=()=>{if(!ne)return;const B=x.clientWidth*window.devicePixelRatio,L=x.clientHeight*window.devicePixelRatio;(x.width!==B||x.height!==L)&&(x.width=B,x.height=L,c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight));const H=(Date.now()-o.current)/1e3,O=S.current;c.uniform2f(P,x.width,x.height),c.uniform1f(J,H),c.uniform1f(ee,O.flowSpeed),c.uniform1f(ie,O.streakLength),c.uniform1f(oe,O.zoom),c.uniform1f(te,O.turbulence),c.uniform1f(ae,O.gridOpacity),c.drawArrays(c.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(Z)};return Z(),()=>{ne=!1,cancelAnimationFrame(p.current),c.deleteProgram(v)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},k0=[{id:"calm",label:"Calm Breeze",params:{flowSpeed:.1,streakLength:1,zoom:2.5,turbulence:.8,gridOpacity:.15}},{id:"moderate",label:"Moderate Flow",params:{flowSpeed:.2,streakLength:1.5,zoom:2.5,turbulence:1.2,gridOpacity:.15}},{id:"turbulent",label:"Turbulent Current",params:{flowSpeed:.35,streakLength:2,zoom:2,turbulence:1.8,gridOpacity:.1}},{id:"storm",label:"Storm System",params:{flowSpeed:.5,streakLength:2.5,zoom:1.8,turbulence:2.5,gridOpacity:.05}}],wn=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(2)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),fp=({params:s,onChange:d})=>{const p=k0.find(o=>o.params.flowSpeed===s.flowSpeed&&o.params.streakLength===s.streakLength&&o.params.turbulence===s.turbulence);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Flow Dynamics"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(wn,{label:"Flow Speed",value:s.flowSpeed,min:0,max:.8,step:.05,onChange:o=>d({...s,flowSpeed:o})}),u.jsx(wn,{label:"Turbulence",value:s.turbulence,min:.5,max:3,step:.1,onChange:o=>d({...s,turbulence:o})}),u.jsx(wn,{label:"Streak Length",value:s.streakLength,min:.5,max:3,step:.1,onChange:o=>d({...s,streakLength:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"View Settings"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(wn,{label:"Zoom",value:s.zoom,min:1,max:4,step:.1,onChange:o=>d({...s,zoom:o})}),u.jsx(wn,{label:"Grid Opacity",value:s.gridOpacity,min:0,max:.3,step:.05,onChange:o=>d({...s,gridOpacity:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Flow Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:k0.map(o=>u.jsx("button",{onClick:()=>d(o.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(p==null?void 0:p.id)===o.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:o.label},o.id))})]})]})},dp=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,mp=`
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
`,Z0=s=>{const d=parseInt(s.replace("#",""),16),p=(d>>16&255)/255,o=(d>>8&255)/255,S=(d&255)/255;return[p,o,S]},vp=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s);return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const x=d.current;if(!x)return;const c=x.getContext("webgl");if(!c)return;const m=(L,H)=>{const O=c.createShader(H);return O?(c.shaderSource(O,L),c.compileShader(O),c.getShaderParameter(O,c.COMPILE_STATUS)?O:(console.error("Shader error:",c.getShaderInfoLog(O)),c.deleteShader(O),null)):null},_=m(dp,c.VERTEX_SHADER),A=m(mp,c.FRAGMENT_SHADER);if(!_||!A)return;const v=c.createProgram();if(!v)return;if(c.attachShader(v,_),c.attachShader(v,A),c.linkProgram(v),!c.getProgramParameter(v,c.LINK_STATUS)){console.error("Link error:",c.getProgramInfoLog(v));return}c.useProgram(v);const U=new Float32Array([-1,-1,1,-1,-1,1,1,1]),X=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,X),c.bufferData(c.ARRAY_BUFFER,U,c.STATIC_DRAW);const F=c.getAttribLocation(v,"position");c.enableVertexAttribArray(F),c.vertexAttribPointer(F,2,c.FLOAT,!1,0,0);const P=c.getUniformLocation(v,"iResolution"),J=c.getUniformLocation(v,"iTime"),ee=c.getUniformLocation(v,"uSpeed"),ie=c.getUniformLocation(v,"uTwist"),oe=c.getUniformLocation(v,"uNoise"),te=c.getUniformLocation(v,"uWidth"),ae=c.getUniformLocation(v,"uColor1"),ne=c.getUniformLocation(v,"uColor2");let Z=!0;const B=()=>{if(!Z)return;const L=x.clientWidth*window.devicePixelRatio,H=x.clientHeight*window.devicePixelRatio;(x.width!==L||x.height!==H)&&(x.width=L,x.height=H,c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight));const O=(Date.now()-o.current)/1e3,G=S.current,K=Z0(G.color1),I=Z0(G.color2);c.uniform2f(P,x.width,x.height),c.uniform1f(J,O),c.uniform1f(ee,G.speed),c.uniform1f(ie,G.twist),c.uniform1f(oe,G.noise),c.uniform1f(te,G.width),c.uniform3f(ae,K[0],K[1],K[2]),c.uniform3f(ne,I[0],I[1],I[2]),c.drawArrays(c.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(B)};return B(),()=>{Z=!1,cancelAnimationFrame(p.current),c.deleteProgram(v)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},K0=[{id:"cyber",label:"Cyber",c1:"#4f46e5",c2:"#06b6d4"},{id:"inferno",label:"Inferno",c1:"#dc2626",c2:"#f59e0b"},{id:"matrix",label:"Matrix",c1:"#059669",c2:"#d4ff00"},{id:"void",label:"Void",c1:"#a855f7",c2:"#1e1b4b"}],ki=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(S<.1?2:1)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),pp=({params:s,onChange:d})=>{const p=K0.find(o=>o.c1===s.color1&&o.c2===s.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(ki,{label:"Speed",value:s.speed,min:0,max:2,step:.05,onChange:o=>d({...s,speed:o})}),u.jsx(ki,{label:"Twist",value:s.twist,min:0,max:3,step:.1,onChange:o=>d({...s,twist:o})}),u.jsx(ki,{label:"Noise",value:s.noise,min:0,max:2,step:.1,onChange:o=>d({...s,noise:o})}),u.jsx(ki,{label:"Tunnel Width",value:s.width,min:2,max:8,step:.5,onChange:o=>d({...s,width:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:K0.map(o=>u.jsx("button",{onClick:()=>d({...s,color1:o.c1,color2:o.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(p==null?void 0:p.id)===o.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${o.c1}, ${o.c2})`},title:o.label},o.id))}),p&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:p.label})]})]})},hp=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,xp=`
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
`,J0=s=>{const d=parseInt(s.replace("#",""),16),p=(d>>16&255)/255,o=(d>>8&255)/255,S=(d&255)/255;return[p,o,S]},gp=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s);return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const x=d.current;if(!x)return;const c=x.getContext("webgl");if(!c)return;const m=(L,H)=>{const O=c.createShader(H);return O?(c.shaderSource(O,L),c.compileShader(O),c.getShaderParameter(O,c.COMPILE_STATUS)?O:(console.error("Shader error:",c.getShaderInfoLog(O)),c.deleteShader(O),null)):null},_=m(hp,c.VERTEX_SHADER),A=m(xp,c.FRAGMENT_SHADER);if(!_||!A)return;const v=c.createProgram();if(!v)return;if(c.attachShader(v,_),c.attachShader(v,A),c.linkProgram(v),!c.getProgramParameter(v,c.LINK_STATUS)){console.error("Link error:",c.getProgramInfoLog(v));return}c.useProgram(v);const U=new Float32Array([-1,-1,1,-1,-1,1,1,1]),X=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,X),c.bufferData(c.ARRAY_BUFFER,U,c.STATIC_DRAW);const F=c.getAttribLocation(v,"position");c.enableVertexAttribArray(F),c.vertexAttribPointer(F,2,c.FLOAT,!1,0,0);const P=c.getUniformLocation(v,"iResolution"),J=c.getUniformLocation(v,"iTime"),ee=c.getUniformLocation(v,"uSpeed"),ie=c.getUniformLocation(v,"uScale"),oe=c.getUniformLocation(v,"uDensity"),te=c.getUniformLocation(v,"uBrightness"),ae=c.getUniformLocation(v,"uColor1"),ne=c.getUniformLocation(v,"uColor2");let Z=!0;const B=()=>{if(!Z)return;const L=x.clientWidth*window.devicePixelRatio,H=x.clientHeight*window.devicePixelRatio;(x.width!==L||x.height!==H)&&(x.width=L,x.height=H,c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight));const O=(Date.now()-o.current)/1e3,G=S.current,K=J0(G.color1),I=J0(G.color2);c.uniform2f(P,x.width,x.height),c.uniform1f(J,O),c.uniform1f(ee,G.speed),c.uniform1f(ie,G.scale),c.uniform1f(oe,G.density),c.uniform1f(te,G.brightness),c.uniform3f(ae,K[0],K[1],K[2]),c.uniform3f(ne,I[0],I[1],I[2]),c.drawArrays(c.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(B)};return B(),()=>{Z=!1,cancelAnimationFrame(p.current),c.deleteProgram(v)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},W0=[{id:"nebula",label:"Nebula",c1:"#3b0764",c2:"#06b6d4"},{id:"solar",label:"Solar",c1:"#7c2d12",c2:"#fbbf24"},{id:"arctic",label:"Arctic",c1:"#0c4a6e",c2:"#e0f2fe"},{id:"phantom",label:"Phantom",c1:"#18181b",c2:"#a78bfa"}],Zi=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(S<.1?2:1)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),yp=({params:s,onChange:d})=>{const p=W0.find(o=>o.c1===s.color1&&o.c2===s.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Zi,{label:"Speed",value:s.speed,min:0,max:1.5,step:.05,onChange:o=>d({...s,speed:o})}),u.jsx(Zi,{label:"Noise Scale",value:s.scale,min:.3,max:3,step:.1,onChange:o=>d({...s,scale:o})}),u.jsx(Zi,{label:"Density",value:s.density,min:.2,max:2,step:.1,onChange:o=>d({...s,density:o})}),u.jsx(Zi,{label:"Brightness",value:s.brightness,min:.3,max:3,step:.1,onChange:o=>d({...s,brightness:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:W0.map(o=>u.jsx("button",{onClick:()=>d({...s,color1:o.c1,color2:o.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(p==null?void 0:p.id)===o.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${o.c1}, ${o.c2})`},title:o.label},o.id))}),p&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:p.label})]})]})},bp=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Sp=`
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
`,Ap=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s);return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const x=d.current;if(!x)return;const c=x.getContext("webgl");if(!c)return;const m=(L,H)=>{const O=c.createShader(H);return O?(c.shaderSource(O,L),c.compileShader(O),c.getShaderParameter(O,c.COMPILE_STATUS)?O:(c.deleteShader(O),null)):null},_=m(bp,c.VERTEX_SHADER),A=m(Sp,c.FRAGMENT_SHADER);if(!_||!A)return;const v=c.createProgram();if(!v)return;c.attachShader(v,_),c.attachShader(v,A),c.linkProgram(v),c.useProgram(v);const U=new Float32Array([-1,-1,1,-1,-1,1,1,1]),X=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,X),c.bufferData(c.ARRAY_BUFFER,U,c.STATIC_DRAW);const F=c.getAttribLocation(v,"position");c.enableVertexAttribArray(F),c.vertexAttribPointer(F,2,c.FLOAT,!1,0,0);const P=c.getUniformLocation(v,"iResolution"),J=c.getUniformLocation(v,"iTime"),ee=c.getUniformLocation(v,"uSpeed"),ie=c.getUniformLocation(v,"uScale"),oe=c.getUniformLocation(v,"uHueShift"),te=c.getUniformLocation(v,"uSaturation"),ae=c.getUniformLocation(v,"uBrightness"),ne=c.getUniformLocation(v,"uWarpStrength");let Z=!0;const B=()=>{if(!Z)return;const L=x.clientWidth*window.devicePixelRatio,H=x.clientHeight*window.devicePixelRatio;(x.width!==L||x.height!==H)&&(x.width=L,x.height=H,c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight));const O=(Date.now()-o.current)/1e3,G=S.current;c.uniform2f(P,x.width,x.height),c.uniform1f(J,O),c.uniform1f(ee,G.speed),c.uniform1f(ie,G.scale),c.uniform1f(oe,G.hueShift),c.uniform1f(te,G.saturation),c.uniform1f(ae,G.brightness),c.uniform1f(ne,G.warpStrength),c.drawArrays(c.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(B)};return B(),()=>{Z=!1,cancelAnimationFrame(p.current),c.deleteProgram(v)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},$0=[{id:"electric",label:"Electric Blue",params:{speed:1,scale:1,hueShift:.5,saturation:.8,brightness:1,warpStrength:.3}},{id:"plasma",label:"Hot Plasma",params:{speed:1.5,scale:1.2,hueShift:0,saturation:.9,brightness:1.2,warpStrength:.5}},{id:"aurora",label:"Aurora Flow",params:{speed:.6,scale:.8,hueShift:.3,saturation:.7,brightness:.9,warpStrength:.4}},{id:"cyberpunk",label:"Cyberpunk",params:{speed:1.2,scale:1.5,hueShift:.8,saturation:1,brightness:1.1,warpStrength:.6}}],za=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(2)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Tp=({params:s,onChange:d})=>{const p=$0.find(o=>o.params.speed===s.speed&&o.params.scale===s.scale&&o.params.hueShift===s.hueShift);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(za,{label:"Speed",value:s.speed,min:0,max:2,step:.1,onChange:o=>d({...s,speed:o})}),u.jsx(za,{label:"Scale",value:s.scale,min:.3,max:2,step:.1,onChange:o=>d({...s,scale:o})}),u.jsx(za,{label:"Warp Strength",value:s.warpStrength,min:0,max:1,step:.05,onChange:o=>d({...s,warpStrength:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(za,{label:"Hue Shift",value:s.hueShift,min:0,max:1,step:.01,onChange:o=>d({...s,hueShift:o})}),u.jsx(za,{label:"Saturation",value:s.saturation,min:0,max:1,step:.05,onChange:o=>d({...s,saturation:o})}),u.jsx(za,{label:"Brightness",value:s.brightness,min:.3,max:1.5,step:.1,onChange:o=>d({...s,brightness:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Style Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:$0.map(o=>u.jsx("button",{onClick:()=>d(o.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(p==null?void 0:p.id)===o.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:o.label},o.id))})]})]})},Np=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Rp=`
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
`,wp=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s);return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const x=d.current;if(!x)return;const c=x.getContext("webgl");if(!c)return;const m=(L,H)=>{const O=c.createShader(H);return O?(c.shaderSource(O,L),c.compileShader(O),c.getShaderParameter(O,c.COMPILE_STATUS)?O:(c.deleteShader(O),null)):null},_=m(Np,c.VERTEX_SHADER),A=m(Rp,c.FRAGMENT_SHADER);if(!_||!A)return;const v=c.createProgram();if(!v)return;c.attachShader(v,_),c.attachShader(v,A),c.linkProgram(v),c.useProgram(v);const U=new Float32Array([-1,-1,1,-1,-1,1,1,1]),X=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,X),c.bufferData(c.ARRAY_BUFFER,U,c.STATIC_DRAW);const F=c.getAttribLocation(v,"position");c.enableVertexAttribArray(F),c.vertexAttribPointer(F,2,c.FLOAT,!1,0,0);const P=c.getUniformLocation(v,"iResolution"),J=c.getUniformLocation(v,"iTime"),ee=c.getUniformLocation(v,"uSpeed"),ie=c.getUniformLocation(v,"uScale"),oe=c.getUniformLocation(v,"uHueSpeed"),te=c.getUniformLocation(v,"uSaturation"),ae=c.getUniformLocation(v,"uBrightness"),ne=c.getUniformLocation(v,"uContrast");let Z=!0;const B=()=>{if(!Z)return;const L=x.clientWidth*window.devicePixelRatio,H=x.clientHeight*window.devicePixelRatio;(x.width!==L||x.height!==H)&&(x.width=L,x.height=H,c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight));const O=(Date.now()-o.current)/1e3,G=S.current;c.uniform2f(P,x.width,x.height),c.uniform1f(J,O),c.uniform1f(ee,G.speed),c.uniform1f(ie,G.scale),c.uniform1f(oe,G.hueSpeed),c.uniform1f(te,G.saturation),c.uniform1f(ae,G.brightness),c.uniform1f(ne,G.contrast),c.drawArrays(c.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(B)};return B(),()=>{Z=!1,cancelAnimationFrame(p.current),c.deleteProgram(v)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},I0=[{id:"calm",label:"Calm Ocean",params:{speed:.5,scale:1,hueSpeed:.5,saturation:.6,brightness:.8,contrast:1.2}},{id:"vibrant",label:"Vibrant Flow",params:{speed:1,scale:1.2,hueSpeed:1,saturation:.7,brightness:.8,contrast:1.2}},{id:"psychedelic",label:"Psychedelic",params:{speed:1.5,scale:1.5,hueSpeed:2,saturation:.9,brightness:.8,contrast:1.4}},{id:"cosmic",label:"Cosmic Nebula",params:{speed:.8,scale:.8,hueSpeed:.3,saturation:.8,brightness:.7,contrast:1.5}}],Ea=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(2)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),zp=({params:s,onChange:d})=>{const p=I0.find(o=>o.params.speed===s.speed&&o.params.scale===s.scale&&o.params.hueSpeed===s.hueSpeed);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Flow Dynamics"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ea,{label:"Speed",value:s.speed,min:0,max:2,step:.1,onChange:o=>d({...s,speed:o})}),u.jsx(Ea,{label:"Scale",value:s.scale,min:.3,max:2,step:.1,onChange:o=>d({...s,scale:o})}),u.jsx(Ea,{label:"Hue Speed",value:s.hueSpeed,min:0,max:3,step:.1,onChange:o=>d({...s,hueSpeed:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Color"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ea,{label:"Saturation",value:s.saturation,min:0,max:1,step:.05,onChange:o=>d({...s,saturation:o})}),u.jsx(Ea,{label:"Brightness",value:s.brightness,min:.3,max:1.2,step:.1,onChange:o=>d({...s,brightness:o})}),u.jsx(Ea,{label:"Contrast",value:s.contrast,min:.8,max:2,step:.1,onChange:o=>d({...s,contrast:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Fluid Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:I0.map(o=>u.jsx("button",{onClick:()=>d(o.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(p==null?void 0:p.id)===o.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:o.label},o.id))})]})]})},Ep=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Cp=`
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
`,Dp=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s);return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const x=d.current;if(!x)return;const c=x.getContext("webgl");if(!c)return;const m=(B,L)=>{const H=c.createShader(L);return H?(c.shaderSource(H,B),c.compileShader(H),c.getShaderParameter(H,c.COMPILE_STATUS)?H:(c.deleteShader(H),null)):null},_=m(Ep,c.VERTEX_SHADER),A=m(Cp,c.FRAGMENT_SHADER);if(!_||!A)return;const v=c.createProgram();if(!v)return;c.attachShader(v,_),c.attachShader(v,A),c.linkProgram(v),c.useProgram(v);const U=new Float32Array([-1,-1,1,-1,-1,1,1,1]),X=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,X),c.bufferData(c.ARRAY_BUFFER,U,c.STATIC_DRAW);const F=c.getAttribLocation(v,"position");c.enableVertexAttribArray(F),c.vertexAttribPointer(F,2,c.FLOAT,!1,0,0);const P=c.getUniformLocation(v,"iResolution"),J=c.getUniformLocation(v,"iTime"),ee=c.getUniformLocation(v,"uSpeed"),ie=c.getUniformLocation(v,"uZoom"),oe=c.getUniformLocation(v,"uColorShift"),te=c.getUniformLocation(v,"uComplexity"),ae=c.getUniformLocation(v,"uContrast");let ne=!0;const Z=()=>{if(!ne)return;const B=x.clientWidth*window.devicePixelRatio,L=x.clientHeight*window.devicePixelRatio;(x.width!==B||x.height!==L)&&(x.width=B,x.height=L,c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight));const H=(Date.now()-o.current)/1e3,O=S.current;c.uniform2f(P,x.width,x.height),c.uniform1f(J,H),c.uniform1f(ee,O.speed),c.uniform1f(ie,O.zoom),c.uniform1f(oe,O.colorShift),c.uniform1f(te,O.complexity),c.uniform1f(ae,O.contrast),c.drawArrays(c.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(Z)};return Z(),()=>{ne=!1,cancelAnimationFrame(p.current),c.deleteProgram(v)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},P0=[{id:"classic",label:"Classic Cyber",params:{speed:.2,zoom:3,colorShift:0,complexity:1,contrast:1}},{id:"neon",label:"Neon City",params:{speed:.4,zoom:2.5,colorShift:2,complexity:1.2,contrast:1.3}},{id:"matrix",label:"Digital Matrix",params:{speed:.3,zoom:3.5,colorShift:3.5,complexity:.8,contrast:.8}},{id:"synthwave",label:"Synthwave",params:{speed:.15,zoom:2.8,colorShift:5,complexity:1.5,contrast:1.2}}],zn=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(2)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),jp=({params:s,onChange:d})=>{const p=P0.find(o=>o.params.speed===s.speed&&o.params.zoom===s.zoom&&o.params.colorShift===s.colorShift);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Animation"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(zn,{label:"Speed",value:s.speed,min:0,max:1,step:.05,onChange:o=>d({...s,speed:o})}),u.jsx(zn,{label:"Zoom",value:s.zoom,min:1,max:5,step:.1,onChange:o=>d({...s,zoom:o})}),u.jsx(zn,{label:"Complexity",value:s.complexity,min:.3,max:2,step:.1,onChange:o=>d({...s,complexity:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Visual"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(zn,{label:"Color Shift",value:s.colorShift,min:0,max:6.28,step:.1,onChange:o=>d({...s,colorShift:o})}),u.jsx(zn,{label:"Contrast",value:s.contrast,min:.5,max:2,step:.1,onChange:o=>d({...s,contrast:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Cyberpunk Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:P0.map(o=>u.jsx("button",{onClick:()=>d(o.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(p==null?void 0:p.id)===o.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:o.label},o.id))})]})]})},_p=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Mp=`
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
`,ed=s=>{if(!s)return[0,0,0];const d=parseInt(s.replace("#",""),16),p=(d>>16&255)/255,o=(d>>8&255)/255,S=(d&255)/255;return[p,o,S]},Up=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s);return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const x=d.current;if(!x)return;const c=x.getContext("webgl");if(!c){console.error("WebGL not supported");return}const m=(Z,B)=>{const L=c.createShader(B);return L?(c.shaderSource(L,Z),c.compileShader(L),c.getShaderParameter(L,c.COMPILE_STATUS)?L:(console.error("Shader compilation error:",c.getShaderInfoLog(L)),c.deleteShader(L),null)):null},_=m(_p,c.VERTEX_SHADER),A=m(Mp,c.FRAGMENT_SHADER);if(!_||!A)return;const v=c.createProgram();c.attachShader(v,_),c.attachShader(v,A),c.linkProgram(v),c.useProgram(v);const U=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,U),c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),c.STATIC_DRAW);const X=c.getAttribLocation(v,"position");c.enableVertexAttribArray(X),c.vertexAttribPointer(X,2,c.FLOAT,!1,0,0);const F=c.getUniformLocation(v,"iTime"),P=c.getUniformLocation(v,"iResolution"),J=c.getUniformLocation(v,"uSpeed"),ee=c.getUniformLocation(v,"uHeight"),ie=c.getUniformLocation(v,"uSmoothness"),oe=c.getUniformLocation(v,"uColor1"),te=c.getUniformLocation(v,"uColor2");let ae=!0;const ne=()=>{if(!ae)return;const Z=x.clientWidth,B=x.clientHeight;(x.width!==Z||x.height!==B)&&(x.width=Z,x.height=B,c.viewport(0,0,x.width,x.height));const L=S.current,H=(Date.now()-o.current)/1e3,O=ed(L.color1),G=ed(L.color2);c.uniform1f(F,H),c.uniform2f(P,x.width,x.height),c.uniform1f(J,L.speed),c.uniform1f(ee,L.height),c.uniform1f(ie,L.smoothness),c.uniform3f(oe,O[0],O[1],O[2]),c.uniform3f(te,G[0],G[1],G[2]),c.clearColor(0,0,0,1),c.clear(c.COLOR_BUFFER_BIT),c.drawArrays(c.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(ne)};return ne(),()=>{ae=!1,cancelAnimationFrame(p.current),c.deleteProgram(v),c.deleteShader(_),c.deleteShader(A)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full"})},td=[{id:"cyber",label:"Cyber",c1:"#2266ff",c2:"#9933ff"},{id:"retrowave",label:"Retrowave",c1:"#ff1493",c2:"#ff6600"},{id:"emerald",label:"Emerald",c1:"#00cc66",c2:"#00bbff"},{id:"inferno",label:"Inferno",c1:"#ff3300",c2:"#ffaa00"},{id:"frost",label:"Frost",c1:"#33ccff",c2:"#6666ff"}],ld=[{id:"calm",label:"Calm Waves",params:{speed:.3,height:2.2,smoothness:1}},{id:"cruise",label:"Night Cruise",params:{speed:.5,height:2,smoothness:1.5}},{id:"rush",label:"Speed Rush",params:{speed:1,height:1.8,smoothness:.8}},{id:"dream",label:"Dream Flight",params:{speed:.2,height:2.5,smoothness:2}}],Tu=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(2)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Bp=({params:s,onChange:d})=>{const p=ld.find(S=>S.params.speed===s.speed&&S.params.height===s.height&&S.params.smoothness===s.smoothness),o=td.find(S=>S.c1===s.color1&&S.c2===s.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Motion"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Tu,{label:"Speed",value:s.speed,min:0,max:2,step:.1,onChange:S=>d({...s,speed:S})}),u.jsx(Tu,{label:"Height",value:s.height,min:1.5,max:3,step:.1,onChange:S=>d({...s,height:S})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Visual"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(Tu,{label:"Smoothness",value:s.smoothness,min:.5,max:3,step:.1,onChange:S=>d({...s,smoothness:S})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:td.map(S=>u.jsx("button",{onClick:()=>d({...s,color1:S.c1,color2:S.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(o==null?void 0:o.id)===S.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${S.c1}, ${S.c2})`},title:S.label},S.id))}),o&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:o.label}),u.jsxs("div",{className:"mt-3 flex gap-3",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Wave"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[u.jsx("input",{type:"color",value:s.color1,onChange:S=>d({...s,color1:S.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),u.jsx("div",{className:"w-full h-full rounded-lg",style:{background:s.color1}})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:s.color1})]})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Sky"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[u.jsx("input",{type:"color",value:s.color2,onChange:S=>d({...s,color2:S.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),u.jsx("div",{className:"w-full h-full rounded-lg",style:{background:s.color2}})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:s.color2})]})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Flight Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:ld.map(S=>u.jsx("button",{onClick:()=>d({...s,...S.params}),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(p==null?void 0:p.id)===S.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:S.label},S.id))})]})]})},Op=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Lp=`
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
`,Hp=({params:s})=>{const d=D.useRef(null),p=D.useRef(null),o=D.useRef(null),S=D.useRef(0),x=D.useRef(Date.now());return D.useEffect(()=>{const c=d.current;if(!c)return;const m=c.getContext("webgl");if(!m){console.error("WebGL not supported");return}p.current=m;const _=m.createShader(m.VERTEX_SHADER);m.shaderSource(_,Op),m.compileShader(_);const A=m.createShader(m.FRAGMENT_SHADER);m.shaderSource(A,Lp),m.compileShader(A),m.getShaderParameter(A,m.COMPILE_STATUS)||console.error("Fragment shader compilation error:",m.getShaderInfoLog(A));const v=m.createProgram();m.attachShader(v,_),m.attachShader(v,A),m.linkProgram(v),m.useProgram(v),o.current=v;const U=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,U),m.bufferData(m.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),m.STATIC_DRAW);const X=m.getAttribLocation(v,"position");m.enableVertexAttribArray(X),m.vertexAttribPointer(X,2,m.FLOAT,!1,0,0);const F=()=>{const J=c.clientWidth,ee=c.clientHeight;(c.width!==J||c.height!==ee)&&(c.width=J,c.height=ee,m.viewport(0,0,c.width,c.height))},P=()=>{if(!p.current||!o.current)return;F();const J=m.getUniformLocation(o.current,"iTime"),ee=m.getUniformLocation(o.current,"iResolution"),ie=m.getUniformLocation(o.current,"uTextGlow"),oe=m.getUniformLocation(o.current,"uTextScale"),te=m.getUniformLocation(o.current,"uTerrainBrightness"),ae=(Date.now()-x.current)/1e3;m.uniform1f(J,ae),m.uniform2f(ee,c.width,c.height),m.uniform1f(ie,s.textGlow),m.uniform1f(oe,s.textScale),m.uniform1f(te,s.terrainBrightness),m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.TRIANGLE_STRIP,0,4),S.current=requestAnimationFrame(P)};return F(),P(),()=>{cancelAnimationFrame(S.current),m.deleteProgram(v),m.deleteShader(_),m.deleteShader(A)}},[s]),u.jsx("canvas",{ref:d,className:"w-full h-full"})},ad=[{id:"subtle",label:"Subtle Glow",params:{textGlow:3,textScale:1,terrainBrightness:.3}},{id:"vibrant",label:"Vibrant Pop",params:{textGlow:5,textScale:1,terrainBrightness:.5}},{id:"neon",label:"Full Neon",params:{textGlow:8,textScale:1.2,terrainBrightness:.2}},{id:"minimalist",label:"Minimal Mood",params:{textGlow:2,textScale:.8,terrainBrightness:.1}}],Nu=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(2)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),qp=({params:s,onChange:d})=>{const p=ad.find(o=>o.params.textGlow===s.textGlow&&o.params.textScale===s.textScale&&o.params.terrainBrightness===s.terrainBrightness);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Text"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Nu,{label:"Glow Intensity",value:s.textGlow,min:1,max:10,step:.5,onChange:o=>d({...s,textGlow:o})}),u.jsx(Nu,{label:"Scale",value:s.textScale,min:.5,max:2,step:.1,onChange:o=>d({...s,textScale:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Terrain"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(Nu,{label:"Brightness",value:s.terrainBrightness,min:0,max:1,step:.1,onChange:o=>d({...s,terrainBrightness:o})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Neon Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:ad.map(o=>u.jsx("button",{onClick:()=>d(o.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(p==null?void 0:p.id)===o.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:o.label},o.id))})]})]})},Gp=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Fp=`
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
`,Vp=({params:s})=>{const d=D.useRef(null),p=D.useRef(null),o=D.useRef(null),S=D.useRef(0),x=D.useRef(Date.now());return D.useEffect(()=>{const c=d.current;if(!c)return;const m=c.getContext("webgl");if(!m){console.error("WebGL not supported");return}p.current=m;const _=m.createShader(m.VERTEX_SHADER);m.shaderSource(_,Gp),m.compileShader(_);const A=m.createShader(m.FRAGMENT_SHADER);m.shaderSource(A,Fp),m.compileShader(A),m.getShaderParameter(A,m.COMPILE_STATUS)||console.error("Fragment shader compilation error:",m.getShaderInfoLog(A));const v=m.createProgram();m.attachShader(v,_),m.attachShader(v,A),m.linkProgram(v),m.useProgram(v),o.current=v;const U=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,U),m.bufferData(m.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),m.STATIC_DRAW);const X=m.getAttribLocation(v,"position");m.enableVertexAttribArray(X),m.vertexAttribPointer(X,2,m.FLOAT,!1,0,0);const F=()=>{const J=c.clientWidth,ee=c.clientHeight;(c.width!==J||c.height!==ee)&&(c.width=J,c.height=ee,m.viewport(0,0,c.width,c.height))},P=()=>{if(!p.current||!o.current)return;F();const J=m.getUniformLocation(o.current,"iTime"),ee=m.getUniformLocation(o.current,"iResolution"),ie=m.getUniformLocation(o.current,"uWaveSpeed"),oe=m.getUniformLocation(o.current,"uColorShift"),te=m.getUniformLocation(o.current,"uOpacity"),ae=(Date.now()-x.current)/1e3;m.uniform1f(J,ae),m.uniform2f(ee,c.width,c.height),m.uniform1f(ie,s.waveSpeed),m.uniform1f(oe,s.colorShift),m.uniform1f(te,s.opacity),m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.TRIANGLE_STRIP,0,4),S.current=requestAnimationFrame(P)};return F(),P(),()=>{cancelAnimationFrame(S.current),m.deleteProgram(v),m.deleteShader(_),m.deleteShader(A)}},[s]),u.jsx("canvas",{ref:d,className:"w-full h-full"})},nd=[{id:"gentle",label:"Gentle Drift",params:{waveSpeed:.3,colorShift:0,opacity:.3}},{id:"flow",label:"Flowing Sky",params:{waveSpeed:.5,colorShift:1,opacity:.4}},{id:"ethereal",label:"Ethereal Mist",params:{waveSpeed:.2,colorShift:2,opacity:.25}},{id:"vivid",label:"Vivid Aurora",params:{waveSpeed:.7,colorShift:.5,opacity:.5}}],Ru=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(2)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Yp=({params:s,onChange:d})=>{const p=nd.find(o=>o.params.waveSpeed===s.waveSpeed&&o.params.colorShift===s.colorShift&&o.params.opacity===s.opacity);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Motion"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ru,{label:"Wave Speed",value:s.waveSpeed,min:0,max:1,step:.1,onChange:o=>d({...s,waveSpeed:o})}),u.jsx(Ru,{label:"Color Shift",value:s.colorShift,min:0,max:3,step:.1,onChange:o=>d({...s,colorShift:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Visual"}),u.jsx("div",{className:"flex flex-col gap-3",children:u.jsx(Ru,{label:"Opacity",value:s.opacity,min:.1,max:.7,step:.05,onChange:o=>d({...s,opacity:o})})})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Aurora Presets"}),u.jsx("div",{className:"flex flex-col gap-1.5",children:nd.map(o=>u.jsx("button",{onClick:()=>d(o.params),className:`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${(p==null?void 0:p.id)===o.id?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:o.label},o.id))})]})]})},Xp=`#version 300 es
  in vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Qp=`#version 300 es
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
`,id=s=>{if(!s)return[0,0,0];const d=parseInt(s.replace("#",""),16),p=(d>>16&255)/255,o=(d>>8&255)/255,S=(d&255)/255;return[p,o,S]},kp=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s);return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const x=d.current;if(!x)return;const c=x.getContext("webgl2");if(!c){console.error("WebGL 2.0 not supported");return}const m=(B,L)=>{const H=c.createShader(L);return H?(c.shaderSource(H,B),c.compileShader(H),c.getShaderParameter(H,c.COMPILE_STATUS)?H:(console.error("Shader compilation error:",c.getShaderInfoLog(H)),c.deleteShader(H),null)):null},_=m(Xp,c.VERTEX_SHADER),A=m(Qp,c.FRAGMENT_SHADER);if(!_||!A)return;const v=c.createProgram();if(!v)return;if(c.attachShader(v,_),c.attachShader(v,A),c.linkProgram(v),!c.getProgramParameter(v,c.LINK_STATUS)){console.error("Program link error:",c.getProgramInfoLog(v));return}c.useProgram(v);const U=new Float32Array([-1,-1,1,-1,-1,1,1,1]),X=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,X),c.bufferData(c.ARRAY_BUFFER,U,c.STATIC_DRAW);const F=c.getAttribLocation(v,"position");c.enableVertexAttribArray(F),c.vertexAttribPointer(F,2,c.FLOAT,!1,0,0);const P=c.getUniformLocation(v,"iResolution"),J=c.getUniformLocation(v,"iTime"),ee=c.getUniformLocation(v,"uSpeed"),ie=c.getUniformLocation(v,"uGlow"),oe=c.getUniformLocation(v,"uGridSize"),te=c.getUniformLocation(v,"uColor1"),ae=c.getUniformLocation(v,"uColor2");let ne=!0;const Z=()=>{if(!ne)return;const B=x.clientWidth*window.devicePixelRatio,L=x.clientHeight*window.devicePixelRatio;(x.width!==B||x.height!==L)&&(x.width=B,x.height=L,c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight));const H=(Date.now()-o.current)/1e3,O=S.current,G=id(O.color1),K=id(O.color2);c.uniform3f(P,x.width,x.height,1),c.uniform1f(J,H),c.uniform1f(ee,O.speed),c.uniform1f(ie,O.glow),c.uniform1f(oe,O.gridSize),c.uniform3f(te,G[0],G[1],G[2]),c.uniform3f(ae,K[0],K[1],K[2]),c.drawArrays(c.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(Z)};return Z(),()=>{ne=!1,cancelAnimationFrame(p.current),c.deleteProgram(v)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},cd=[{id:"neon",label:"Neon Blue",c1:"#4040ff",c2:"#40a0ff"},{id:"cyber",label:"Cyber Pink",c1:"#ff40a0",c2:"#a040ff"},{id:"matrix",label:"Matrix",c1:"#00ff66",c2:"#00aa44"},{id:"solar",label:"Solar",c1:"#ff8800",c2:"#ffdd00"},{id:"ice",label:"Ice",c1:"#88ccff",c2:"#ffffff"}],wu=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(S<.1?2:1)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),Zp=({params:s,onChange:d})=>{const p=cd.find(o=>o.c1===s.color1&&o.c2===s.color2);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(wu,{label:"Speed",value:s.speed,min:0,max:3,step:.1,onChange:o=>d({...s,speed:o})}),u.jsx(wu,{label:"Glow",value:s.glow,min:.1,max:3,step:.1,onChange:o=>d({...s,glow:o})}),u.jsx(wu,{label:"Grid Size",value:s.gridSize,min:.5,max:3,step:.1,onChange:o=>d({...s,gridSize:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:cd.map(o=>u.jsx("button",{onClick:()=>d({...s,color1:o.c1,color2:o.c2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(p==null?void 0:p.id)===o.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${o.c1}, ${o.c2})`},title:o.label},o.id))}),p&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:p.label}),u.jsxs("div",{className:"mt-3 flex gap-3",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Primary"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[u.jsx("input",{type:"color",value:s.color1,onChange:o=>d({...s,color1:o.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),u.jsx("div",{className:"w-full h-full rounded-lg",style:{background:s.color1}})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:s.color1})]})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1",children:"Accent"}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("label",{className:"w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block",children:[u.jsx("input",{type:"color",value:s.color2,onChange:o=>d({...s,color2:o.target.value}),className:"w-full h-full cursor-pointer opacity-0 absolute"}),u.jsx("div",{className:"w-full h-full rounded-lg",style:{background:s.color2}})]}),u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 tabular-nums uppercase",children:s.color2})]})]})]})]})]})},Kp=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Jp=`
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
`,Ki=s=>{const d=parseInt(s.replace("#",""),16),p=(d>>16&255)/255,o=(d>>8&255)/255,S=(d&255)/255;return[p,o,S]},Wp=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s),x=D.useRef({x:0,y:0,active:!1});return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const c=d.current;if(!c)return;const m=c.getContext("webgl");if(!m)return;const _=G=>{const K=c.getBoundingClientRect(),I=window.devicePixelRatio;x.current.x=(G.clientX-K.left)*I,x.current.y=(K.height-(G.clientY-K.top))*I,x.current.active=!0},A=()=>{x.current.active=!1};c.addEventListener("mousemove",_),c.addEventListener("mouseleave",A);const v=(G,K)=>{const I=m.createShader(K);return I?(m.shaderSource(I,G),m.compileShader(I),m.getShaderParameter(I,m.COMPILE_STATUS)?I:(console.error("Shader error:",m.getShaderInfoLog(I)),m.deleteShader(I),null)):null},U=v(Kp,m.VERTEX_SHADER),X=v(Jp,m.FRAGMENT_SHADER);if(!U||!X)return;const F=m.createProgram();if(!F)return;if(m.attachShader(F,U),m.attachShader(F,X),m.linkProgram(F),!m.getProgramParameter(F,m.LINK_STATUS)){console.error("Link error:",m.getProgramInfoLog(F));return}m.useProgram(F);const P=new Float32Array([-1,-1,1,-1,-1,1,1,1]),J=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,J),m.bufferData(m.ARRAY_BUFFER,P,m.STATIC_DRAW);const ee=m.getAttribLocation(F,"position");m.enableVertexAttribArray(ee),m.vertexAttribPointer(ee,2,m.FLOAT,!1,0,0);const ie=m.getUniformLocation(F,"iResolution"),oe=m.getUniformLocation(F,"iTime"),te=m.getUniformLocation(F,"iMouse"),ae=m.getUniformLocation(F,"uGamma"),ne=m.getUniformLocation(F,"uAccent1"),Z=m.getUniformLocation(F,"uAccent2"),B=m.getUniformLocation(F,"uBg1"),L=m.getUniformLocation(F,"uBg2");let H=!0;const O=()=>{if(!H)return;const G=c.clientWidth*window.devicePixelRatio,K=c.clientHeight*window.devicePixelRatio;(c.width!==G||c.height!==K)&&(c.width=G,c.height=K,m.viewport(0,0,m.drawingBufferWidth,m.drawingBufferHeight));const I=(Date.now()-o.current)/1e3,se=S.current,Be=x.current;m.uniform3f(ie,c.width,c.height,1),m.uniform1f(oe,I*se.speed),m.uniform4f(te,Be.x,Be.y,Be.active?1:-1,0),m.uniform1f(ae,se.gamma);const z=Ki(se.accent1),q=Ki(se.accent2),$=Ki(se.bg1),xe=Ki(se.bg2);m.uniform3f(ne,z[0],z[1],z[2]),m.uniform3f(Z,q[0],q[1],q[2]),m.uniform3f(B,$[0],$[1],$[2]),m.uniform3f(L,xe[0],xe[1],xe[2]),m.drawArrays(m.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(O)};return O(),()=>{H=!1,cancelAnimationFrame(p.current),c.removeEventListener("mousemove",_),c.removeEventListener("mouseleave",A),m.deleteProgram(F)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},od=[{id:"ocean",label:"Ocean",accent1:"#ff1a80",accent2:"#ff801a",bg1:"#1a80ff",bg2:"#1a8099"},{id:"abyss",label:"Abyss",accent1:"#00ffaa",accent2:"#00aaff",bg1:"#0a0033",bg2:"#001a33"},{id:"ember",label:"Ember",accent1:"#ff4400",accent2:"#ffcc00",bg1:"#1a0022",bg2:"#331a00"},{id:"arctic",label:"Arctic",accent1:"#66ccff",accent2:"#eeffff",bg1:"#001133",bg2:"#002244"},{id:"toxic",label:"Toxic",accent1:"#88ff00",accent2:"#ff00aa",bg1:"#001a00",bg2:"#0a0033"}],ud=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(S<.1?2:1)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),$p=({params:s,onChange:d})=>{const p=od.find(o=>o.accent1===s.accent1&&o.bg1===s.bg1);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(ud,{label:"Speed",value:s.speed,min:.2,max:2,step:.1,onChange:o=>d({...s,speed:o})}),u.jsx(ud,{label:"Gamma",value:s.gamma,min:1,max:3.5,step:.1,onChange:o=>d({...s,gamma:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Palette"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:od.map(o=>u.jsx("button",{onClick:()=>d({...s,accent1:o.accent1,accent2:o.accent2,bg1:o.bg1,bg2:o.bg2}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(p==null?void 0:p.id)===o.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${o.accent1}, ${o.bg1})`},title:o.label},o.id))}),p&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:p.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Interaction"}),u.jsx("div",{className:"text-[9px] text-neutral-500 leading-relaxed",children:"Move mouse over canvas to control camera angle. Leave canvas for auto-animation."})]})]})},Ip=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Pp=`
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
`,eh=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s);return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const x=d.current;if(!x)return;const c=x.getContext("webgl");if(!c)return;const m=(ne,Z)=>{const B=c.createShader(Z);return B?(c.shaderSource(B,ne),c.compileShader(B),c.getShaderParameter(B,c.COMPILE_STATUS)?B:(console.error("Shader error:",c.getShaderInfoLog(B)),c.deleteShader(B),null)):null},_=m(Ip,c.VERTEX_SHADER),A=m(Pp,c.FRAGMENT_SHADER);if(!_||!A)return;const v=c.createProgram();if(!v)return;if(c.attachShader(v,_),c.attachShader(v,A),c.linkProgram(v),!c.getProgramParameter(v,c.LINK_STATUS)){console.error("Link error:",c.getProgramInfoLog(v));return}c.useProgram(v);const U=new Float32Array([-1,-1,1,-1,-1,1,1,1]),X=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,X),c.bufferData(c.ARRAY_BUFFER,U,c.STATIC_DRAW);const F=c.getAttribLocation(v,"position");c.enableVertexAttribArray(F),c.vertexAttribPointer(F,2,c.FLOAT,!1,0,0);const P=c.getUniformLocation(v,"iResolution"),J=c.getUniformLocation(v,"iTime"),ee=c.getUniformLocation(v,"uSpeed"),ie=c.getUniformLocation(v,"uGrain"),oe=c.getUniformLocation(v,"uVignette");let te=!0;const ae=()=>{if(!te)return;const ne=x.clientWidth*window.devicePixelRatio,Z=x.clientHeight*window.devicePixelRatio;(x.width!==ne||x.height!==Z)&&(x.width=ne,x.height=Z,c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight));const B=(Date.now()-o.current)/1e3,L=S.current;c.uniform2f(P,x.width,x.height),c.uniform1f(J,B),c.uniform1f(ee,L.speed),c.uniform1f(ie,L.grain),c.uniform1f(oe,L.vignette),c.drawArrays(c.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(ae)};return ae(),()=>{te=!1,cancelAnimationFrame(p.current),c.deleteProgram(v)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},zu=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(S<.1?2:1)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),th=[{id:"slow",label:"Slow",speed:.3},{id:"cruise",label:"Cruise",speed:1},{id:"express",label:"Express",speed:2}],lh=({params:s,onChange:d})=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Parameters"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(zu,{label:"Speed",value:s.speed,min:.1,max:3,step:.1,onChange:p=>d({...s,speed:p})}),u.jsx(zu,{label:"Film Grain",value:s.grain,min:0,max:.4,step:.01,onChange:p=>d({...s,grain:p})}),u.jsx(zu,{label:"Vignette",value:s.vignette,min:0,max:1,step:.1,onChange:p=>d({...s,vignette:p})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Speed Presets"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:th.map(p=>u.jsx("button",{onClick:()=>d({...s,speed:p.speed}),className:`px-2.5 py-1 rounded-lg text-[9px] font-medium transition-all ${s.speed===p.speed?"bg-neutral-800 text-white":"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,children:p.label},p.id))})]})]}),ah=`
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,nh=`
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
`,Eu=s=>{if(!s)return[0,0,0];const d=parseInt(s.replace("#",""),16),p=(d>>16&255)/255,o=(d>>8&255)/255,S=(d&255)/255;return[p,o,S]},ih=({params:s})=>{const d=D.useRef(null),p=D.useRef(0),o=D.useRef(Date.now()),S=D.useRef(s);return D.useEffect(()=>{S.current=s},[s]),D.useEffect(()=>{const x=d.current;if(!x)return;const c=x.getContext("webgl");if(!c)return;const m=(G,K)=>{const I=c.createShader(K);return I?(c.shaderSource(I,G),c.compileShader(I),c.getShaderParameter(I,c.COMPILE_STATUS)?I:(console.error("Shader error:",c.getShaderInfoLog(I)),c.deleteShader(I),null)):null},_=m(ah,c.VERTEX_SHADER),A=m(nh,c.FRAGMENT_SHADER);if(!_||!A)return;const v=c.createProgram();if(!v)return;if(c.attachShader(v,_),c.attachShader(v,A),c.linkProgram(v),!c.getProgramParameter(v,c.LINK_STATUS)){console.error("Link error:",c.getProgramInfoLog(v));return}c.useProgram(v);const U=new Float32Array([-1,-1,1,-1,-1,1,1,1]),X=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,X),c.bufferData(c.ARRAY_BUFFER,U,c.STATIC_DRAW);const F=c.getAttribLocation(v,"position");c.enableVertexAttribArray(F),c.vertexAttribPointer(F,2,c.FLOAT,!1,0,0);const P=c.getUniformLocation(v,"iResolution"),J=c.getUniformLocation(v,"iTime"),ee=c.getUniformLocation(v,"uSpeed"),ie=c.getUniformLocation(v,"uLayers"),oe=c.getUniformLocation(v,"uDepth"),te=c.getUniformLocation(v,"uTurbulence"),ae=c.getUniformLocation(v,"uGrain"),ne=c.getUniformLocation(v,"uVignette"),Z=c.getUniformLocation(v,"uColor1"),B=c.getUniformLocation(v,"uColor2"),L=c.getUniformLocation(v,"uColor3");let H=!0;const O=()=>{if(!H)return;const G=x.clientWidth*window.devicePixelRatio,K=x.clientHeight*window.devicePixelRatio;(x.width!==G||x.height!==K)&&(x.width=G,x.height=K,c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight));const I=(Date.now()-o.current)/1e3,se=S.current,Be=Eu(se.color1),z=Eu(se.color2),q=Eu(se.color3);c.uniform2f(P,x.width,x.height),c.uniform1f(J,I),c.uniform1f(ee,se.speed),c.uniform1f(ie,se.layers),c.uniform1f(oe,se.depth),c.uniform1f(te,se.turbulence),c.uniform1f(ae,se.grain),c.uniform1f(ne,se.vignette),c.uniform3f(Z,Be[0],Be[1],Be[2]),c.uniform3f(B,z[0],z[1],z[2]),c.uniform3f(L,q[0],q[1],q[2]),c.drawArrays(c.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(O)};return O(),()=>{H=!1,cancelAnimationFrame(p.current),c.deleteProgram(v)}},[]),u.jsx("canvas",{ref:d,className:"w-full h-full block rounded-2xl"})},Ca=({label:s,value:d,min:p,max:o,step:S,onChange:x})=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide",children:s}),u.jsx("span",{className:"text-[9px] font-semibold text-neutral-700 tabular-nums",children:d.toFixed(S<.1?2:1)})]}),u.jsx("input",{type:"range",min:p,max:o,step:S,value:d,onChange:c=>x(parseFloat(c.target.value)),className:"w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"})]}),rd=[{id:"sunset",label:"Sunset",color1:"#c44b32",color2:"#f0a050",color3:"#9ab4ff"},{id:"arctic",label:"Arctic",color1:"#4a6a8a",color2:"#a0c8e0",color3:"#d8e8f0"},{id:"forest",label:"Forest",color1:"#2a4a2a",color2:"#5a8a4a",color3:"#b0c8a0"},{id:"desert",label:"Desert",color1:"#8a5a30",color2:"#d4a060",color3:"#e8d0a0"},{id:"midnight",label:"Midnight",color1:"#1a1040",color2:"#3a2870",color3:"#1a2040"}],ch=({params:s,onChange:d})=>{const p=rd.find(o=>o.color1===s.color1&&o.color2===s.color2&&o.color3===s.color3);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Landscape"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ca,{label:"Speed",value:s.speed,min:.1,max:3,step:.1,onChange:o=>d({...s,speed:o})}),u.jsx(Ca,{label:"Layers",value:s.layers,min:4,max:16,step:1,onChange:o=>d({...s,layers:o})}),u.jsx(Ca,{label:"Depth",value:s.depth,min:.3,max:3,step:.1,onChange:o=>d({...s,depth:o})}),u.jsx(Ca,{label:"Turbulence",value:s.turbulence,min:.3,max:2.5,step:.1,onChange:o=>d({...s,turbulence:o})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Color Theme"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:rd.map(o=>u.jsx("button",{onClick:()=>d({...s,color1:o.color1,color2:o.color2,color3:o.color3}),className:`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${(p==null?void 0:p.id)===o.id?"ring-2 ring-neutral-800 ring-offset-1 scale-110":"opacity-70 hover:opacity-100 hover:scale-105"}`,style:{background:`linear-gradient(180deg, ${o.color3}, ${o.color2}, ${o.color1})`},title:o.label},o.id))}),p&&u.jsx("div",{className:"mt-2 text-[9px] font-medium text-neutral-500",children:p.label})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3 mb-2",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2",children:"Custom Colors"}),u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:s.color1,onChange:o=>d({...s,color1:o.target.value}),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Near"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:s.color2,onChange:o=>d({...s,color2:o.target.value}),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Mid"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"color",value:s.color3,onChange:o=>d({...s,color3:o.target.value}),className:"w-6 h-6 rounded-lg border-0 cursor-pointer"}),u.jsx("span",{className:"text-[9px] text-neutral-500",children:"Sky"})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl p-3",children:[u.jsx("div",{className:"text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3",children:"Post Processing"}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsx(Ca,{label:"Film Grain",value:s.grain,min:0,max:.3,step:.01,onChange:o=>d({...s,grain:o})}),u.jsx(Ca,{label:"Vignette",value:s.vignette,min:0,max:1,step:.1,onChange:o=>d({...s,vignette:o})})]})]})]})},oh={color1:"#8b5cf6",color2:"#06b6d4",speed:0,density:1,suction:0},uh={speed:.2,zoom:3,warpStrength:4,color1:"#000d33",color2:"#1a664d",color3:"#ffcc33"},rh={blockSize:1.5,spacing:2.5,timeSpeed:.8,mouseInfluence:1,fogStart:40,fogEnd:100,camDistance:80},sh={flowSpeed:.2,streakLength:1.5,zoom:2.5,turbulence:1.2,gridOpacity:.15},fh={speed:.5,twist:1,noise:1,width:4,color1:"#4f46e5",color2:"#06b6d4"},dh={speed:.3,scale:1,density:1,brightness:1,color1:"#3b0764",color2:"#06b6d4"},mh={speed:1,scale:1,hueShift:0,saturation:.7,brightness:1,warpStrength:.3},vh={speed:1,scale:1.2,hueSpeed:1,saturation:.7,brightness:.8,contrast:1.2},ph={speed:.2,zoom:3,colorShift:0,complexity:1,contrast:1},hh={speed:.5,height:2,smoothness:1,color1:"#2266ff",color2:"#9933ff"},xh={textGlow:5,textScale:1,terrainBrightness:.5},gh={waveSpeed:.5,colorShift:1,opacity:.4},yh={speed:1,glow:1,gridSize:1,color1:"#4040ff",color2:"#40a0ff"},bh={speed:1,gamma:2,accent1:"#ff1a80",accent2:"#ff801a",bg1:"#1a80ff",bg2:"#1a8099"},Sh={speed:1,grain:.1,vignette:.5},Ah={speed:1,layers:12,depth:1,turbulence:1,grain:.05,vignette:.5,color1:"#c44b32",color2:"#f0a050",color3:"#9ab4ff"},Th={vortex:{name:"Vortex Portal",technique:"Simplex Noise + FBM + Polar Domain Warping"},lumina:{name:"Lumina Flow",technique:"Perlin Noise + Multi-Layer Domain Warping"},isometric:{name:"Isometric Flow",technique:"DDA Raymarching + AABB Collision + Procedural Animation"},flowfield:{name:"Flow Field",technique:"Curl Noise + Pseudo-LIC Advection + Procedural Heatmap"},tunnel:{name:"Warp Tunnel",technique:"Volumetric Raymarching + FBM Noise Displacement"},aura:{name:"Noise Aura",technique:"Volumetric Light Accumulation + Multi-Orb Lighting"},neon:{name:"Neon Noise",technique:"FBM + Domain Warping + HSV Color Mapping"},fluid:{name:"Fluid Flow",technique:"Double Domain Warping + FBM + HSV Gradients"},neuro:{name:"NeuroFlow",technique:"Simplex Noise + Hue Rotation + Dynamic Lines"},neonwave:{name:"Neonwave",technique:"3D Plane Stacking + FBM Terrain + HSV Gradients",credit:{author:"mrange",url:"https://www.shadertoy.com/view/7dyyRy",date:"2022-06-12"}},neontext:{name:"Neon Text",technique:"Sphere Raymarching + SDF Text + Neon Glow"},aurora:{name:"Aurora Cloudscape",technique:"Volumetric Clouds + Wave Motion + Color Gradients"},hypergrid:{name:"Hyper Grid",technique:"Grid Marching + Rodrigues Rotation + Glow Accumulation",credit:{author:"totetmatt",url:"https://www.shadertoy.com/view/lcjGWV",date:"2024-01-07"}},jellyfish:{name:"Luminescence",technique:"SDF Raymarching + Space Repetition + Volumetric Rendering",credit:{author:"BigWings",url:"https://www.shadertoy.com/view/MlKcDD",date:"2017-05-23"}},trainjourney:{name:"Train Journey",technique:"Multi-Layer Parallax + FBM Terrain + Procedural SDF",credit:{author:"mdb",url:"https://www.shadertoy.com/view/Ndc3zl",date:"2021-08-31"}},horizon:{name:"Horizon",technique:"Parametric Parallax + FBM Terrain + Depth Color Gradient"}},Nh=()=>{const[s,d]=D.useState("vortex"),[p,o]=D.useState(oh),[S,x]=D.useState(uh),[c,m]=D.useState(rh),[_,A]=D.useState(sh),[v,U]=D.useState(fh),[X,F]=D.useState(dh),[P,J]=D.useState(mh),[ee,ie]=D.useState(vh),[oe,te]=D.useState(ph),[ae,ne]=D.useState(hh),[Z,B]=D.useState(xh),[L,H]=D.useState(gh),[O,G]=D.useState(yh),[K,I]=D.useState(bh),[se,Be]=D.useState(Sh),[z,q]=D.useState(Ah),[$,xe]=D.useState(!1),ye=Th[s];return u.jsxs("div",{className:"h-screen bg-[#f8f8f8] flex p-3 gap-3",children:[u.jsx(Zv,{active:s,onSelect:d}),u.jsxs("div",{className:"flex-1 bg-white rounded-3xl flex flex-col overflow-hidden",children:[u.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 flex-shrink-0",children:[u.jsx("span",{className:"text-[13px] font-medium text-neutral-700",children:ye.name}),u.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400",children:ye.technique}),ye.credit&&u.jsxs("a",{href:ye.credit.url,target:"_blank",rel:"noopener noreferrer",className:"text-[8px] text-neutral-400 hover:text-neutral-600 transition-colors",children:["by ",ye.credit.author," · ",ye.credit.date]}),u.jsx("div",{className:"flex-1"}),u.jsx("button",{onClick:()=>xe(!0),className:"w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors",children:u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:[u.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.2"}),u.jsx("path",{d:"M4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.17 7 5.5 6.5 5.75C6.25 5.88 6 6.08 6 6.4V6.75",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round"}),u.jsx("circle",{cx:"6",cy:"8.25",r:"0.5",fill:"currentColor"})]})})]}),u.jsxs("div",{className:"flex-1 flex min-h-0 px-5 pb-5 gap-4",children:[u.jsx("div",{className:"flex-[3] flex flex-col min-h-0",children:u.jsxs("div",{className:"bg-neutral-100 rounded-2xl flex-1 overflow-hidden",children:[s==="vortex"&&u.jsx(Iv,{params:p}),s==="lumina"&&u.jsx(lp,{params:S}),s==="isometric"&&u.jsx(cp,{params:c}),s==="flowfield"&&u.jsx(sp,{params:_}),s==="tunnel"&&u.jsx(vp,{params:v}),s==="aura"&&u.jsx(gp,{params:X}),s==="neon"&&u.jsx(Ap,{params:P}),s==="fluid"&&u.jsx(wp,{params:ee}),s==="neuro"&&u.jsx(Dp,{params:oe}),s==="neonwave"&&u.jsx(Up,{params:ae}),s==="neontext"&&u.jsx(Hp,{params:Z}),s==="aurora"&&u.jsx(Vp,{params:L}),s==="hypergrid"&&u.jsx(kp,{params:O}),s==="jellyfish"&&u.jsx(Wp,{params:K}),s==="trainjourney"&&u.jsx(eh,{params:se}),s==="horizon"&&u.jsx(ih,{params:z})]})}),u.jsx("div",{className:"flex-[2] flex flex-col min-h-0",children:u.jsx("div",{className:"h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden",children:u.jsxs("div",{className:"p-3 overflow-y-auto flex-1 min-h-0",children:[s==="vortex"&&u.jsx(Pv,{params:p,onChange:o}),s==="lumina"&&u.jsx(ap,{params:S,onChange:x}),s==="isometric"&&u.jsx(op,{params:c,onChange:m}),s==="flowfield"&&u.jsx(fp,{params:_,onChange:A}),s==="tunnel"&&u.jsx(pp,{params:v,onChange:U}),s==="aura"&&u.jsx(yp,{params:X,onChange:F}),s==="neon"&&u.jsx(Tp,{params:P,onChange:J}),s==="fluid"&&u.jsx(zp,{params:ee,onChange:ie}),s==="neuro"&&u.jsx(jp,{params:oe,onChange:te}),s==="neonwave"&&u.jsx(Bp,{params:ae,onChange:ne}),s==="neontext"&&u.jsx(qp,{params:Z,onChange:B}),s==="aurora"&&u.jsx(Yp,{params:L,onChange:H}),s==="hypergrid"&&u.jsx(Zp,{params:O,onChange:G}),s==="jellyfish"&&u.jsx($p,{params:K,onChange:I}),s==="trainjourney"&&u.jsx(lh,{params:se,onChange:Be}),s==="horizon"&&u.jsx(ch,{params:z,onChange:q})]})})})]})]}),$&&u.jsx(Kv,{guide:Jv[s],onClose:()=>xe(!1)})]})};Qv.createRoot(document.getElementById("root")).render(u.jsx(Lv.StrictMode,{children:u.jsx(Nh,{})}));
