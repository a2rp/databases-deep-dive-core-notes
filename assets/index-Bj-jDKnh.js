(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))l(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&l(b)}).observe(document,{childList:!0,subtree:!0});function d(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(p){if(p.ep)return;p.ep=!0;const h=d(p);fetch(p.href,h)}})();function gh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Qs={exports:{}},mo={},Gs={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu;function xh(){if(pu)return ne;pu=1;var i=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),b=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),D=Symbol.iterator;function B(x){return x===null||typeof x!="object"?null:(x=D&&x[D]||x["@@iterator"],typeof x=="function"?x:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ie=Object.assign,Q={};function J(x,k,X){this.props=x,this.context=k,this.refs=Q,this.updater=X||Y}J.prototype.isReactComponent={},J.prototype.setState=function(x,k){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,k,"setState")},J.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function he(){}he.prototype=J.prototype;function le(x,k,X){this.props=x,this.context=k,this.refs=Q,this.updater=X||Y}var ae=le.prototype=new he;ae.constructor=le,ie(ae,J.prototype),ae.isPureReactComponent=!0;var re=Array.isArray,pe=Object.prototype.hasOwnProperty,K={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function _e(x,k,X){var Z,oe={},te=null,fe=null;if(k!=null)for(Z in k.ref!==void 0&&(fe=k.ref),k.key!==void 0&&(te=""+k.key),k)pe.call(k,Z)&&!U.hasOwnProperty(Z)&&(oe[Z]=k[Z]);var se=arguments.length-2;if(se===1)oe.children=X;else if(1<se){for(var de=Array(se),Be=0;Be<se;Be++)de[Be]=arguments[Be+2];oe.children=de}if(x&&x.defaultProps)for(Z in se=x.defaultProps,se)oe[Z]===void 0&&(oe[Z]=se[Z]);return{$$typeof:i,type:x,key:te,ref:fe,props:oe,_owner:K.current}}function ir(x,k){return{$$typeof:i,type:x.type,key:k,ref:x.ref,props:x.props,_owner:x._owner}}function Tr(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function Ur(x){var k={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(X){return k[X]})}var hr=/\/+/g;function Ge(x,k){return typeof x=="object"&&x!==null&&x.key!=null?Ur(""+x.key):k.toString(36)}function ar(x,k,X,Z,oe){var te=typeof x;(te==="undefined"||te==="boolean")&&(x=null);var fe=!1;if(x===null)fe=!0;else switch(te){case"string":case"number":fe=!0;break;case"object":switch(x.$$typeof){case i:case c:fe=!0}}if(fe)return fe=x,oe=oe(fe),x=Z===""?"."+Ge(fe,0):Z,re(oe)?(X="",x!=null&&(X=x.replace(hr,"$&/")+"/"),ar(oe,k,X,"",function(Be){return Be})):oe!=null&&(Tr(oe)&&(oe=ir(oe,X+(!oe.key||fe&&fe.key===oe.key?"":(""+oe.key).replace(hr,"$&/")+"/")+x)),k.push(oe)),1;if(fe=0,Z=Z===""?".":Z+":",re(x))for(var se=0;se<x.length;se++){te=x[se];var de=Z+Ge(te,se);fe+=ar(te,k,X,de,oe)}else if(de=B(x),typeof de=="function")for(x=de.call(x),se=0;!(te=x.next()).done;)te=te.value,de=Z+Ge(te,se++),fe+=ar(te,k,X,de,oe);else if(te==="object")throw k=String(x),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return fe}function mr(x,k,X){if(x==null)return x;var Z=[],oe=0;return ar(x,Z,"","",function(te){return k.call(X,te,oe++)}),Z}function Ue(x){if(x._status===-1){var k=x._result;k=k(),k.then(function(X){(x._status===0||x._status===-1)&&(x._status=1,x._result=X)},function(X){(x._status===0||x._status===-1)&&(x._status=2,x._result=X)}),x._status===-1&&(x._status=0,x._result=k)}if(x._status===1)return x._result.default;throw x._result}var xe={current:null},I={transition:null},F={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:I,ReactCurrentOwner:K};function O(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:mr,forEach:function(x,k,X){mr(x,function(){k.apply(this,arguments)},X)},count:function(x){var k=0;return mr(x,function(){k++}),k},toArray:function(x){return mr(x,function(k){return k})||[]},only:function(x){if(!Tr(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ne.Component=J,ne.Fragment=d,ne.Profiler=p,ne.PureComponent=le,ne.StrictMode=l,ne.Suspense=C,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,ne.act=O,ne.cloneElement=function(x,k,X){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Z=ie({},x.props),oe=x.key,te=x.ref,fe=x._owner;if(k!=null){if(k.ref!==void 0&&(te=k.ref,fe=K.current),k.key!==void 0&&(oe=""+k.key),x.type&&x.type.defaultProps)var se=x.type.defaultProps;for(de in k)pe.call(k,de)&&!U.hasOwnProperty(de)&&(Z[de]=k[de]===void 0&&se!==void 0?se[de]:k[de])}var de=arguments.length-2;if(de===1)Z.children=X;else if(1<de){se=Array(de);for(var Be=0;Be<de;Be++)se[Be]=arguments[Be+2];Z.children=se}return{$$typeof:i,type:x.type,key:oe,ref:te,props:Z,_owner:fe}},ne.createContext=function(x){return x={$$typeof:b,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:h,_context:x},x.Consumer=x},ne.createElement=_e,ne.createFactory=function(x){var k=_e.bind(null,x);return k.type=x,k},ne.createRef=function(){return{current:null}},ne.forwardRef=function(x){return{$$typeof:_,render:x}},ne.isValidElement=Tr,ne.lazy=function(x){return{$$typeof:L,_payload:{_status:-1,_result:x},_init:Ue}},ne.memo=function(x,k){return{$$typeof:q,type:x,compare:k===void 0?null:k}},ne.startTransition=function(x){var k=I.transition;I.transition={};try{x()}finally{I.transition=k}},ne.unstable_act=O,ne.useCallback=function(x,k){return xe.current.useCallback(x,k)},ne.useContext=function(x){return xe.current.useContext(x)},ne.useDebugValue=function(){},ne.useDeferredValue=function(x){return xe.current.useDeferredValue(x)},ne.useEffect=function(x,k){return xe.current.useEffect(x,k)},ne.useId=function(){return xe.current.useId()},ne.useImperativeHandle=function(x,k,X){return xe.current.useImperativeHandle(x,k,X)},ne.useInsertionEffect=function(x,k){return xe.current.useInsertionEffect(x,k)},ne.useLayoutEffect=function(x,k){return xe.current.useLayoutEffect(x,k)},ne.useMemo=function(x,k){return xe.current.useMemo(x,k)},ne.useReducer=function(x,k,X){return xe.current.useReducer(x,k,X)},ne.useRef=function(x){return xe.current.useRef(x)},ne.useState=function(x){return xe.current.useState(x)},ne.useSyncExternalStore=function(x,k,X){return xe.current.useSyncExternalStore(x,k,X)},ne.useTransition=function(){return xe.current.useTransition()},ne.version="18.3.1",ne}var fu;function ul(){return fu||(fu=1,Gs.exports=xh()),Gs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hu;function vh(){if(hu)return mo;hu=1;var i=ul(),c=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,p=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function b(_,C,q){var L,D={},B=null,Y=null;q!==void 0&&(B=""+q),C.key!==void 0&&(B=""+C.key),C.ref!==void 0&&(Y=C.ref);for(L in C)l.call(C,L)&&!h.hasOwnProperty(L)&&(D[L]=C[L]);if(_&&_.defaultProps)for(L in C=_.defaultProps,C)D[L]===void 0&&(D[L]=C[L]);return{$$typeof:c,type:_,key:B,ref:Y,props:D,_owner:p.current}}return mo.Fragment=d,mo.jsx=b,mo.jsxs=b,mo}var mu;function yh(){return mu||(mu=1,Qs.exports=vh()),Qs.exports}var a=yh(),Oi={},Ys={exports:{}},tr={},Ks={exports:{}},Xs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu;function wh(){return gu||(gu=1,(function(i){function c(I,F){var O=I.length;I.push(F);e:for(;0<O;){var x=O-1>>>1,k=I[x];if(0<p(k,F))I[x]=F,I[O]=k,O=x;else break e}}function d(I){return I.length===0?null:I[0]}function l(I){if(I.length===0)return null;var F=I[0],O=I.pop();if(O!==F){I[0]=O;e:for(var x=0,k=I.length,X=k>>>1;x<X;){var Z=2*(x+1)-1,oe=I[Z],te=Z+1,fe=I[te];if(0>p(oe,O))te<k&&0>p(fe,oe)?(I[x]=fe,I[te]=O,x=te):(I[x]=oe,I[Z]=O,x=Z);else if(te<k&&0>p(fe,O))I[x]=fe,I[te]=O,x=te;else break e}}return F}function p(I,F){var O=I.sortIndex-F.sortIndex;return O!==0?O:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var b=Date,_=b.now();i.unstable_now=function(){return b.now()-_}}var C=[],q=[],L=1,D=null,B=3,Y=!1,ie=!1,Q=!1,J=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(I){for(var F=d(q);F!==null;){if(F.callback===null)l(q);else if(F.startTime<=I)l(q),F.sortIndex=F.expirationTime,c(C,F);else break;F=d(q)}}function re(I){if(Q=!1,ae(I),!ie)if(d(C)!==null)ie=!0,Ue(pe);else{var F=d(q);F!==null&&xe(re,F.startTime-I)}}function pe(I,F){ie=!1,Q&&(Q=!1,he(_e),_e=-1),Y=!0;var O=B;try{for(ae(F),D=d(C);D!==null&&(!(D.expirationTime>F)||I&&!Ur());){var x=D.callback;if(typeof x=="function"){D.callback=null,B=D.priorityLevel;var k=x(D.expirationTime<=F);F=i.unstable_now(),typeof k=="function"?D.callback=k:D===d(C)&&l(C),ae(F)}else l(C);D=d(C)}if(D!==null)var X=!0;else{var Z=d(q);Z!==null&&xe(re,Z.startTime-F),X=!1}return X}finally{D=null,B=O,Y=!1}}var K=!1,U=null,_e=-1,ir=5,Tr=-1;function Ur(){return!(i.unstable_now()-Tr<ir)}function hr(){if(U!==null){var I=i.unstable_now();Tr=I;var F=!0;try{F=U(!0,I)}finally{F?Ge():(K=!1,U=null)}}else K=!1}var Ge;if(typeof le=="function")Ge=function(){le(hr)};else if(typeof MessageChannel!="undefined"){var ar=new MessageChannel,mr=ar.port2;ar.port1.onmessage=hr,Ge=function(){mr.postMessage(null)}}else Ge=function(){J(hr,0)};function Ue(I){U=I,K||(K=!0,Ge())}function xe(I,F){_e=J(function(){I(i.unstable_now())},F)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_continueExecution=function(){ie||Y||(ie=!0,Ue(pe))},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ir=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return B},i.unstable_getFirstCallbackNode=function(){return d(C)},i.unstable_next=function(I){switch(B){case 1:case 2:case 3:var F=3;break;default:F=B}var O=B;B=F;try{return I()}finally{B=O}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var O=B;B=I;try{return F()}finally{B=O}},i.unstable_scheduleCallback=function(I,F,O){var x=i.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?x+O:x):O=x,I){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=O+k,I={id:L++,callback:F,priorityLevel:I,startTime:O,expirationTime:k,sortIndex:-1},O>x?(I.sortIndex=O,c(q,I),d(C)===null&&I===d(q)&&(Q?(he(_e),_e=-1):Q=!0,xe(re,O-x))):(I.sortIndex=k,c(C,I),ie||Y||(ie=!0,Ue(pe))),I},i.unstable_shouldYield=Ur,i.unstable_wrapCallback=function(I){var F=B;return function(){var O=B;B=F;try{return I.apply(this,arguments)}finally{B=O}}}})(Xs)),Xs}var xu;function bh(){return xu||(xu=1,Ks.exports=wh()),Ks.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vu;function kh(){if(vu)return tr;vu=1;var i=ul(),c=bh();function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,p={};function h(e,r){b(e,r),b(e+"Capture",r)}function b(e,r){for(p[e]=r,e=0;e<r.length;e++)l.add(r[e])}var _=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),C=Object.prototype.hasOwnProperty,q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L={},D={};function B(e){return C.call(D,e)?!0:C.call(L,e)?!1:q.test(e)?D[e]=!0:(L[e]=!0,!1)}function Y(e,r,t,n){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ie(e,r,t,n){if(r===null||typeof r=="undefined"||Y(e,r,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Q(e,r,t,n,o,s,u){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=u}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new Q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];J[r]=new Q(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new Q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new Q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new Q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new Q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new Q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new Q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new Q(e,5,!1,e.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function le(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(he,le);J[r]=new Q(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(he,le);J[r]=new Q(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(he,le);J[r]=new Q(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new Q(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new Q(e,1,!1,e.toLowerCase(),null,!0,!0)});function ae(e,r,t,n){var o=J.hasOwnProperty(r)?J[r]:null;(o!==null?o.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(ie(r,t,o,n)&&(t=null),n||o===null?B(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(r=o.attributeName,n=o.attributeNamespace,t===null?e.removeAttribute(r):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,n?e.setAttributeNS(n,r,t):e.setAttribute(r,t))))}var re=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),K=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),ir=Symbol.for("react.profiler"),Tr=Symbol.for("react.provider"),Ur=Symbol.for("react.context"),hr=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),ar=Symbol.for("react.suspense_list"),mr=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),I=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,x;function k(e){if(x===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+e}var X=!1;function Z(e,r){if(!e||X)return"";X=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(w){var n=w}Reflect.construct(e,[],r)}else{try{r.call()}catch(w){n=w}e.call(r.prototype)}else{try{throw Error()}catch(w){n=w}e()}}catch(w){if(w&&n&&typeof w.stack=="string"){for(var o=w.stack.split(`
`),s=n.stack.split(`
`),u=o.length-1,f=s.length-1;1<=u&&0<=f&&o[u]!==s[f];)f--;for(;1<=u&&0<=f;u--,f--)if(o[u]!==s[f]){if(u!==1||f!==1)do if(u--,f--,0>f||o[u]!==s[f]){var m=`
`+o[u].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=u&&0<=f);break}}}finally{X=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?k(e):""}function oe(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case K:return"Portal";case ir:return"Profiler";case _e:return"StrictMode";case Ge:return"Suspense";case ar:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ur:return(e.displayName||"Context")+".Consumer";case Tr:return(e._context.displayName||"Context")+".Provider";case hr:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mr:return r=e.displayName||null,r!==null?r:te(e.type)||"Memo";case Ue:r=e._payload,e=e._init;try{return te(e(r))}catch{}}return null}function fe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(r);case 8:return r===_e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Be(e){var r=de(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,s=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return o.call(this)},set:function(u){n=""+u,s.call(this,u)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Hr(e){e._valueTracker||(e._valueTracker=Be(e))}function Nr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),n="";return e&&(n=de(e)?e.checked?"true":"false":e.value),e=n,e!==t?(r.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,r){var t=r.checked;return O({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function yl(e,r){var t=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;t=se(r.value!=null?r.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function wl(e,r){r=r.checked,r!=null&&ae(e,"checked",r,!1)}function ra(e,r){wl(e,r);var t=se(r.value),n=r.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?ta(e,r.type,t):r.hasOwnProperty("defaultValue")&&ta(e,r.type,se(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function bl(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ta(e,r,t){(r!=="number"||jo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var In=Array.isArray;function Qt(e,r,t,n){if(e=e.options,r){r={};for(var o=0;o<t.length;o++)r["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=r.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&n&&(e[t].defaultSelected=!0)}else{for(t=""+se(t),r=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}r!==null||e[o].disabled||(r=e[o])}r!==null&&(r.selected=!0)}}function na(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(d(91));return O({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kl(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(d(92));if(In(t)){if(1<t.length)throw Error(d(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:se(t)}}function jl(e,r){var t=se(r.value),n=se(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function Sl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function El(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?El(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var So,Tl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,t,n,o){MSApp.execUnsafeLocalFunction(function(){return e(r,t,n,o)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=So.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Ln(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yp=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){yp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),_n[r]=_n[e]})});function Nl(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||_n.hasOwnProperty(e)&&_n[e]?(""+r).trim():r+"px"}function Cl(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var n=t.indexOf("--")===0,o=Nl(t,r[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,o):e[t]=o}}var wp=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(e,r){if(r){if(wp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(d(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(d(61))}if(r.style!=null&&typeof r.style!="object")throw Error(d(62))}}function aa(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=null;function la(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ca=null,Gt=null,Yt=null;function Il(e){if(e=Zn(e)){if(typeof ca!="function")throw Error(d(280));var r=e.stateNode;r&&(r=Qo(r),ca(e.stateNode,e.type,r))}}function Ll(e){Gt?Yt?Yt.push(e):Yt=[e]:Gt=e}function _l(){if(Gt){var e=Gt,r=Yt;if(Yt=Gt=null,Il(e),r)for(e=0;e<r.length;e++)Il(r[e])}}function Ol(e,r){return e(r)}function Rl(){}var da=!1;function Pl(e,r,t){if(da)return e(r,t);da=!0;try{return Ol(e,r,t)}finally{da=!1,(Gt!==null||Yt!==null)&&(Rl(),_l())}}function On(e,r){var t=e.stateNode;if(t===null)return null;var n=Qo(t);if(n===null)return null;t=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(d(231,r,typeof t));return t}var ua=!1;if(_)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){ua=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{ua=!1}function bp(e,r,t,n,o,s,u,f,m){var w=Array.prototype.slice.call(arguments,3);try{r.apply(t,w)}catch(E){this.onError(E)}}var Pn=!1,Eo=null,To=!1,pa=null,kp={onError:function(e){Pn=!0,Eo=e}};function jp(e,r,t,n,o,s,u,f,m){Pn=!1,Eo=null,bp.apply(kp,arguments)}function Sp(e,r,t,n,o,s,u,f,m){if(jp.apply(this,arguments),Pn){if(Pn){var w=Eo;Pn=!1,Eo=null}else throw Error(d(198));To||(To=!0,pa=w)}}function wt(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function zl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Al(e){if(wt(e)!==e)throw Error(d(188))}function Ep(e){var r=e.alternate;if(!r){if(r=wt(e),r===null)throw Error(d(188));return r!==e?null:e}for(var t=e,n=r;;){var o=t.return;if(o===null)break;var s=o.alternate;if(s===null){if(n=o.return,n!==null){t=n;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===t)return Al(o),e;if(s===n)return Al(o),r;s=s.sibling}throw Error(d(188))}if(t.return!==n.return)t=o,n=s;else{for(var u=!1,f=o.child;f;){if(f===t){u=!0,t=o,n=s;break}if(f===n){u=!0,n=o,t=s;break}f=f.sibling}if(!u){for(f=s.child;f;){if(f===t){u=!0,t=s,n=o;break}if(f===n){u=!0,n=s,t=o;break}f=f.sibling}if(!u)throw Error(d(189))}}if(t.alternate!==n)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?e:r}function Dl(e){return e=Ep(e),e!==null?Ml(e):null}function Ml(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Ml(e);if(r!==null)return r;e=e.sibling}return null}var Fl=c.unstable_scheduleCallback,Bl=c.unstable_cancelCallback,Tp=c.unstable_shouldYield,Np=c.unstable_requestPaint,Ne=c.unstable_now,Cp=c.unstable_getCurrentPriorityLevel,fa=c.unstable_ImmediatePriority,Wl=c.unstable_UserBlockingPriority,No=c.unstable_NormalPriority,Ip=c.unstable_LowPriority,$l=c.unstable_IdlePriority,Co=null,Dr=null;function Lp(e){if(Dr&&typeof Dr.onCommitFiberRoot=="function")try{Dr.onCommitFiberRoot(Co,e,void 0,(e.current.flags&128)===128)}catch{}}var Cr=Math.clz32?Math.clz32:Rp,_p=Math.log,Op=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(_p(e)/Op|0)|0}var Io=64,Lo=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _o(e,r){var t=e.pendingLanes;if(t===0)return 0;var n=0,o=e.suspendedLanes,s=e.pingedLanes,u=t&268435455;if(u!==0){var f=u&~o;f!==0?n=zn(f):(s&=u,s!==0&&(n=zn(s)))}else u=t&~o,u!==0?n=zn(u):s!==0&&(n=zn(s));if(n===0)return 0;if(r!==0&&r!==n&&(r&o)===0&&(o=n&-n,s=r&-r,o>=s||o===16&&(s&4194240)!==0))return r;if((n&4)!==0&&(n|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)t=31-Cr(r),o=1<<t,n|=e[t],r&=~o;return n}function Pp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zp(e,r){for(var t=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var u=31-Cr(s),f=1<<u,m=o[u];m===-1?((f&t)===0||(f&n)!==0)&&(o[u]=Pp(f,r)):m<=r&&(e.expiredLanes|=f),s&=~f}}function ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ul(){var e=Io;return Io<<=1,(Io&4194240)===0&&(Io=64),e}function ma(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function An(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Cr(r),e[r]=t}function Ap(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Cr(t),s=1<<o;r[o]=0,n[o]=-1,e[o]=-1,t&=~s}}function ga(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var n=31-Cr(t),o=1<<n;o&r|e[n]&r&&(e[n]|=r),t&=~o}}var ge=0;function Hl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ql,xa,Vl,Ql,Gl,va=!1,Oo=[],et=null,rt=null,tt=null,Dn=new Map,Mn=new Map,nt=[],Dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yl(e,r){switch(e){case"focusin":case"focusout":et=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":tt=null;break;case"pointerover":case"pointerout":Dn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(r.pointerId)}}function Fn(e,r,t,n,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:t,eventSystemFlags:n,nativeEvent:s,targetContainers:[o]},r!==null&&(r=Zn(r),r!==null&&xa(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,o!==null&&r.indexOf(o)===-1&&r.push(o),e)}function Mp(e,r,t,n,o){switch(r){case"focusin":return et=Fn(et,e,r,t,n,o),!0;case"dragenter":return rt=Fn(rt,e,r,t,n,o),!0;case"mouseover":return tt=Fn(tt,e,r,t,n,o),!0;case"pointerover":var s=o.pointerId;return Dn.set(s,Fn(Dn.get(s)||null,e,r,t,n,o)),!0;case"gotpointercapture":return s=o.pointerId,Mn.set(s,Fn(Mn.get(s)||null,e,r,t,n,o)),!0}return!1}function Kl(e){var r=bt(e.target);if(r!==null){var t=wt(r);if(t!==null){if(r=t.tag,r===13){if(r=zl(t),r!==null){e.blockedOn=r,Gl(e.priority,function(){Vl(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ro(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=wa(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);sa=n,t.target.dispatchEvent(n),sa=null}else return r=Zn(t),r!==null&&xa(r),e.blockedOn=t,!1;r.shift()}return!0}function Xl(e,r,t){Ro(e)&&t.delete(r)}function Fp(){va=!1,et!==null&&Ro(et)&&(et=null),rt!==null&&Ro(rt)&&(rt=null),tt!==null&&Ro(tt)&&(tt=null),Dn.forEach(Xl),Mn.forEach(Xl)}function Bn(e,r){e.blockedOn===r&&(e.blockedOn=null,va||(va=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Fp)))}function Wn(e){function r(o){return Bn(o,e)}if(0<Oo.length){Bn(Oo[0],e);for(var t=1;t<Oo.length;t++){var n=Oo[t];n.blockedOn===e&&(n.blockedOn=null)}}for(et!==null&&Bn(et,e),rt!==null&&Bn(rt,e),tt!==null&&Bn(tt,e),Dn.forEach(r),Mn.forEach(r),t=0;t<nt.length;t++)n=nt[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<nt.length&&(t=nt[0],t.blockedOn===null);)Kl(t),t.blockedOn===null&&nt.shift()}var Kt=re.ReactCurrentBatchConfig,Po=!0;function Bp(e,r,t,n){var o=ge,s=Kt.transition;Kt.transition=null;try{ge=1,ya(e,r,t,n)}finally{ge=o,Kt.transition=s}}function Wp(e,r,t,n){var o=ge,s=Kt.transition;Kt.transition=null;try{ge=4,ya(e,r,t,n)}finally{ge=o,Kt.transition=s}}function ya(e,r,t,n){if(Po){var o=wa(e,r,t,n);if(o===null)Da(e,r,n,zo,t),Yl(e,n);else if(Mp(o,e,r,t,n))n.stopPropagation();else if(Yl(e,n),r&4&&-1<Dp.indexOf(e)){for(;o!==null;){var s=Zn(o);if(s!==null&&ql(s),s=wa(e,r,t,n),s===null&&Da(e,r,n,zo,t),s===o)break;o=s}o!==null&&n.stopPropagation()}else Da(e,r,n,null,t)}}var zo=null;function wa(e,r,t,n){if(zo=null,e=la(n),e=bt(e),e!==null)if(r=wt(e),r===null)e=null;else if(t=r.tag,t===13){if(e=zl(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return zo=e,null}function Jl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cp()){case fa:return 1;case Wl:return 4;case No:case Ip:return 16;case $l:return 536870912;default:return 16}default:return 16}}var ot=null,ba=null,Ao=null;function Zl(){if(Ao)return Ao;var e,r=ba,t=r.length,n,o="value"in ot?ot.value:ot.textContent,s=o.length;for(e=0;e<t&&r[e]===o[e];e++);var u=t-e;for(n=1;n<=u&&r[t-n]===o[s-n];n++);return Ao=o.slice(e,1<n?1-n:void 0)}function Do(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Mo(){return!0}function ec(){return!1}function sr(e){function r(t,n,o,s,u){this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Mo:ec,this.isPropagationStopped=ec,this}return O(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),r}var Xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=sr(Xt),$n=O({},Xt,{view:0,detail:0}),$p=sr($n),ja,Sa,Un,Fo=O({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(ja=e.screenX-Un.screenX,Sa=e.screenY-Un.screenY):Sa=ja=0,Un=e),ja)},movementY:function(e){return"movementY"in e?e.movementY:Sa}}),rc=sr(Fo),Up=O({},Fo,{dataTransfer:0}),Hp=sr(Up),qp=O({},$n,{relatedTarget:0}),Ea=sr(qp),Vp=O({},Xt,{animationName:0,elapsedTime:0,pseudoElement:0}),Qp=sr(Vp),Gp=O({},Xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yp=sr(Gp),Kp=O({},Xt,{data:0}),tc=sr(Kp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ef(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Zp[e])?!!r[e]:!1}function Ta(){return ef}var rf=O({},$n,{key:function(e){if(e.key){var r=Xp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ta,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tf=sr(rf),nf=O({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nc=sr(nf),of=O({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ta}),af=sr(of),sf=O({},Xt,{propertyName:0,elapsedTime:0,pseudoElement:0}),lf=sr(sf),cf=O({},Fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),df=sr(cf),uf=[9,13,27,32],Na=_&&"CompositionEvent"in window,Hn=null;_&&"documentMode"in document&&(Hn=document.documentMode);var pf=_&&"TextEvent"in window&&!Hn,oc=_&&(!Na||Hn&&8<Hn&&11>=Hn),ic=" ",ac=!1;function sc(e,r){switch(e){case"keyup":return uf.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function ff(e,r){switch(e){case"compositionend":return lc(r);case"keypress":return r.which!==32?null:(ac=!0,ic);case"textInput":return e=r.data,e===ic&&ac?null:e;default:return null}}function hf(e,r){if(Jt)return e==="compositionend"||!Na&&sc(e,r)?(e=Zl(),Ao=ba=ot=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return oc&&r.locale!=="ko"?null:r.data;default:return null}}var mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!mf[e.type]:r==="textarea"}function dc(e,r,t,n){Ll(n),r=Ho(r,"onChange"),0<r.length&&(t=new ka("onChange","change",null,t,n),e.push({event:t,listeners:r}))}var qn=null,Vn=null;function gf(e){Cc(e,0)}function Bo(e){var r=nn(e);if(Nr(r))return e}function xf(e,r){if(e==="change")return r}var uc=!1;if(_){var Ca;if(_){var Ia="oninput"in document;if(!Ia){var pc=document.createElement("div");pc.setAttribute("oninput","return;"),Ia=typeof pc.oninput=="function"}Ca=Ia}else Ca=!1;uc=Ca&&(!document.documentMode||9<document.documentMode)}function fc(){qn&&(qn.detachEvent("onpropertychange",hc),Vn=qn=null)}function hc(e){if(e.propertyName==="value"&&Bo(Vn)){var r=[];dc(r,Vn,e,la(e)),Pl(gf,r)}}function vf(e,r,t){e==="focusin"?(fc(),qn=r,Vn=t,qn.attachEvent("onpropertychange",hc)):e==="focusout"&&fc()}function yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bo(Vn)}function wf(e,r){if(e==="click")return Bo(r)}function bf(e,r){if(e==="input"||e==="change")return Bo(r)}function kf(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Ir=typeof Object.is=="function"?Object.is:kf;function Qn(e,r){if(Ir(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var o=t[n];if(!C.call(r,o)||!Ir(e[o],r[o]))return!1}return!0}function mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gc(e,r){var t=mc(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=r&&n>=r)return{node:t,offset:r-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=mc(t)}}function xc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?xc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function vc(){for(var e=window,r=jo();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=jo(e.document)}return r}function La(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function jf(e){var r=vc(),t=e.focusedElem,n=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&xc(t.ownerDocument.documentElement,t)){if(n!==null&&La(t)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,s=Math.min(n.start,o);n=n.end===void 0?s:Math.min(n.end,o),!e.extend&&s>n&&(o=n,n=s,s=o),o=gc(t,s);var u=gc(t,n);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(r=r.createRange(),r.setStart(o.node,o.offset),e.removeAllRanges(),s>n?(e.addRange(r),e.extend(u.node,u.offset)):(r.setEnd(u.node,u.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sf=_&&"documentMode"in document&&11>=document.documentMode,Zt=null,_a=null,Gn=null,Oa=!1;function yc(e,r,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Oa||Zt==null||Zt!==jo(n)||(n=Zt,"selectionStart"in n&&La(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Gn&&Qn(Gn,n)||(Gn=n,n=Ho(_a,"onSelect"),0<n.length&&(r=new ka("onSelect","select",null,r,t),e.push({event:r,listeners:n}),r.target=Zt)))}function Wo(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var en={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},Ra={},wc={};_&&(wc=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function $o(e){if(Ra[e])return Ra[e];if(!en[e])return e;var r=en[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in wc)return Ra[e]=r[t];return e}var bc=$o("animationend"),kc=$o("animationiteration"),jc=$o("animationstart"),Sc=$o("transitionend"),Ec=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function it(e,r){Ec.set(e,r),h(r,[e])}for(var Pa=0;Pa<Tc.length;Pa++){var za=Tc[Pa],Ef=za.toLowerCase(),Tf=za[0].toUpperCase()+za.slice(1);it(Ef,"on"+Tf)}it(bc,"onAnimationEnd"),it(kc,"onAnimationIteration"),it(jc,"onAnimationStart"),it("dblclick","onDoubleClick"),it("focusin","onFocus"),it("focusout","onBlur"),it(Sc,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function Nc(e,r,t){var n=e.type||"unknown-event";e.currentTarget=t,Sp(n,r,void 0,e),e.currentTarget=null}function Cc(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],o=n.event;n=n.listeners;e:{var s=void 0;if(r)for(var u=n.length-1;0<=u;u--){var f=n[u],m=f.instance,w=f.currentTarget;if(f=f.listener,m!==s&&o.isPropagationStopped())break e;Nc(o,f,w),s=m}else for(u=0;u<n.length;u++){if(f=n[u],m=f.instance,w=f.currentTarget,f=f.listener,m!==s&&o.isPropagationStopped())break e;Nc(o,f,w),s=m}}}if(To)throw e=pa,To=!1,pa=null,e}function ye(e,r){var t=r[Ua];t===void 0&&(t=r[Ua]=new Set);var n=e+"__bubble";t.has(n)||(Ic(r,e,2,!1),t.add(n))}function Aa(e,r,t){var n=0;r&&(n|=4),Ic(t,e,n,r)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[Uo]){e[Uo]=!0,l.forEach(function(t){t!=="selectionchange"&&(Nf.has(t)||Aa(t,!1,e),Aa(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Uo]||(r[Uo]=!0,Aa("selectionchange",!1,r))}}function Ic(e,r,t,n){switch(Jl(r)){case 1:var o=Bp;break;case 4:o=Wp;break;default:o=ya}t=o.bind(null,r,t,e),o=void 0,!ua||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(r,t,{capture:!0,passive:o}):e.addEventListener(r,t,!0):o!==void 0?e.addEventListener(r,t,{passive:o}):e.addEventListener(r,t,!1)}function Da(e,r,t,n,o){var s=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var f=n.stateNode.containerInfo;if(f===o||f.nodeType===8&&f.parentNode===o)break;if(u===4)for(u=n.return;u!==null;){var m=u.tag;if((m===3||m===4)&&(m=u.stateNode.containerInfo,m===o||m.nodeType===8&&m.parentNode===o))return;u=u.return}for(;f!==null;){if(u=bt(f),u===null)return;if(m=u.tag,m===5||m===6){n=s=u;continue e}f=f.parentNode}}n=n.return}Pl(function(){var w=s,E=la(t),T=[];e:{var S=Ec.get(e);if(S!==void 0){var R=ka,z=e;switch(e){case"keypress":if(Do(t)===0)break e;case"keydown":case"keyup":R=tf;break;case"focusin":z="focus",R=Ea;break;case"focusout":z="blur",R=Ea;break;case"beforeblur":case"afterblur":R=Ea;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=af;break;case bc:case kc:case jc:R=Qp;break;case Sc:R=lf;break;case"scroll":R=$p;break;case"wheel":R=df;break;case"copy":case"cut":case"paste":R=Yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=nc}var A=(r&4)!==0,Ce=!A&&e==="scroll",v=A?S!==null?S+"Capture":null:S;A=[];for(var g=w,y;g!==null;){y=g;var N=y.stateNode;if(y.tag===5&&N!==null&&(y=N,v!==null&&(N=On(g,v),N!=null&&A.push(Xn(g,N,y)))),Ce)break;g=g.return}0<A.length&&(S=new R(S,z,null,t,E),T.push({event:S,listeners:A}))}}if((r&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",S&&t!==sa&&(z=t.relatedTarget||t.fromElement)&&(bt(z)||z[qr]))break e;if((R||S)&&(S=E.window===E?E:(S=E.ownerDocument)?S.defaultView||S.parentWindow:window,R?(z=t.relatedTarget||t.toElement,R=w,z=z?bt(z):null,z!==null&&(Ce=wt(z),z!==Ce||z.tag!==5&&z.tag!==6)&&(z=null)):(R=null,z=w),R!==z)){if(A=rc,N="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(A=nc,N="onPointerLeave",v="onPointerEnter",g="pointer"),Ce=R==null?S:nn(R),y=z==null?S:nn(z),S=new A(N,g+"leave",R,t,E),S.target=Ce,S.relatedTarget=y,N=null,bt(E)===w&&(A=new A(v,g+"enter",z,t,E),A.target=y,A.relatedTarget=Ce,N=A),Ce=N,R&&z)r:{for(A=R,v=z,g=0,y=A;y;y=rn(y))g++;for(y=0,N=v;N;N=rn(N))y++;for(;0<g-y;)A=rn(A),g--;for(;0<y-g;)v=rn(v),y--;for(;g--;){if(A===v||v!==null&&A===v.alternate)break r;A=rn(A),v=rn(v)}A=null}else A=null;R!==null&&Lc(T,S,R,A,!1),z!==null&&Ce!==null&&Lc(T,Ce,z,A,!0)}}e:{if(S=w?nn(w):window,R=S.nodeName&&S.nodeName.toLowerCase(),R==="select"||R==="input"&&S.type==="file")var M=xf;else if(cc(S))if(uc)M=bf;else{M=yf;var W=vf}else(R=S.nodeName)&&R.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(M=wf);if(M&&(M=M(e,w))){dc(T,M,t,E);break e}W&&W(e,S,w),e==="focusout"&&(W=S._wrapperState)&&W.controlled&&S.type==="number"&&ta(S,"number",S.value)}switch(W=w?nn(w):window,e){case"focusin":(cc(W)||W.contentEditable==="true")&&(Zt=W,_a=w,Gn=null);break;case"focusout":Gn=_a=Zt=null;break;case"mousedown":Oa=!0;break;case"contextmenu":case"mouseup":case"dragend":Oa=!1,yc(T,t,E);break;case"selectionchange":if(Sf)break;case"keydown":case"keyup":yc(T,t,E)}var $;if(Na)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Jt?sc(e,t)&&(V="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(V="onCompositionStart");V&&(oc&&t.locale!=="ko"&&(Jt||V!=="onCompositionStart"?V==="onCompositionEnd"&&Jt&&($=Zl()):(ot=E,ba="value"in ot?ot.value:ot.textContent,Jt=!0)),W=Ho(w,V),0<W.length&&(V=new tc(V,e,null,t,E),T.push({event:V,listeners:W}),$?V.data=$:($=lc(t),$!==null&&(V.data=$)))),($=pf?ff(e,t):hf(e,t))&&(w=Ho(w,"onBeforeInput"),0<w.length&&(E=new tc("onBeforeInput","beforeinput",null,t,E),T.push({event:E,listeners:w}),E.data=$))}Cc(T,r)})}function Xn(e,r,t){return{instance:e,listener:r,currentTarget:t}}function Ho(e,r){for(var t=r+"Capture",n=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=On(e,t),s!=null&&n.unshift(Xn(e,s,o)),s=On(e,r),s!=null&&n.push(Xn(e,s,o))),e=e.return}return n}function rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lc(e,r,t,n,o){for(var s=r._reactName,u=[];t!==null&&t!==n;){var f=t,m=f.alternate,w=f.stateNode;if(m!==null&&m===n)break;f.tag===5&&w!==null&&(f=w,o?(m=On(t,s),m!=null&&u.unshift(Xn(t,m,f))):o||(m=On(t,s),m!=null&&u.push(Xn(t,m,f)))),t=t.return}u.length!==0&&e.push({event:r,listeners:u})}var Cf=/\r\n?/g,If=/\u0000|\uFFFD/g;function _c(e){return(typeof e=="string"?e:""+e).replace(Cf,`
`).replace(If,"")}function qo(e,r,t){if(r=_c(r),_c(e)!==r&&t)throw Error(d(425))}function Vo(){}var Ma=null,Fa=null;function Ba(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Wa=typeof setTimeout=="function"?setTimeout:void 0,Lf=typeof clearTimeout=="function"?clearTimeout:void 0,Oc=typeof Promise=="function"?Promise:void 0,_f=typeof queueMicrotask=="function"?queueMicrotask:typeof Oc!="undefined"?function(e){return Oc.resolve(null).then(e).catch(Of)}:Wa;function Of(e){setTimeout(function(){throw e})}function $a(e,r){var t=r,n=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(n===0){e.removeChild(o),Wn(r);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=o}while(t);Wn(r)}function at(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Rc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var tn=Math.random().toString(36).slice(2),Mr="__reactFiber$"+tn,Jn="__reactProps$"+tn,qr="__reactContainer$"+tn,Ua="__reactEvents$"+tn,Rf="__reactListeners$"+tn,Pf="__reactHandles$"+tn;function bt(e){var r=e[Mr];if(r)return r;for(var t=e.parentNode;t;){if(r=t[qr]||t[Mr]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=Rc(e);e!==null;){if(t=e[Mr])return t;e=Rc(e)}return r}e=t,t=e.parentNode}return null}function Zn(e){return e=e[Mr]||e[qr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function Qo(e){return e[Jn]||null}var Ha=[],on=-1;function st(e){return{current:e}}function we(e){0>on||(e.current=Ha[on],Ha[on]=null,on--)}function ve(e,r){on++,Ha[on]=e.current,e.current=r}var lt={},He=st(lt),Xe=st(!1),kt=lt;function an(e,r){var t=e.type.contextTypes;if(!t)return lt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in t)o[s]=r[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),o}function Je(e){return e=e.childContextTypes,e!=null}function Go(){we(Xe),we(He)}function Pc(e,r,t){if(He.current!==lt)throw Error(d(168));ve(He,r),ve(Xe,t)}function zc(e,r,t){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var o in n)if(!(o in r))throw Error(d(108,fe(e)||"Unknown",o));return O({},t,n)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||lt,kt=He.current,ve(He,e),ve(Xe,Xe.current),!0}function Ac(e,r,t){var n=e.stateNode;if(!n)throw Error(d(169));t?(e=zc(e,r,kt),n.__reactInternalMemoizedMergedChildContext=e,we(Xe),we(He),ve(He,e)):we(Xe),ve(Xe,t)}var Vr=null,Ko=!1,qa=!1;function Dc(e){Vr===null?Vr=[e]:Vr.push(e)}function zf(e){Ko=!0,Dc(e)}function ct(){if(!qa&&Vr!==null){qa=!0;var e=0,r=ge;try{var t=Vr;for(ge=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}Vr=null,Ko=!1}catch(o){throw Vr!==null&&(Vr=Vr.slice(e+1)),Fl(fa,ct),o}finally{ge=r,qa=!1}}return null}var sn=[],ln=0,Xo=null,Jo=0,gr=[],xr=0,jt=null,Qr=1,Gr="";function St(e,r){sn[ln++]=Jo,sn[ln++]=Xo,Xo=e,Jo=r}function Mc(e,r,t){gr[xr++]=Qr,gr[xr++]=Gr,gr[xr++]=jt,jt=e;var n=Qr;e=Gr;var o=32-Cr(n)-1;n&=~(1<<o),t+=1;var s=32-Cr(r)+o;if(30<s){var u=o-o%5;s=(n&(1<<u)-1).toString(32),n>>=u,o-=u,Qr=1<<32-Cr(r)+o|t<<o|n,Gr=s+e}else Qr=1<<s|t<<o|n,Gr=e}function Va(e){e.return!==null&&(St(e,1),Mc(e,1,0))}function Qa(e){for(;e===Xo;)Xo=sn[--ln],sn[ln]=null,Jo=sn[--ln],sn[ln]=null;for(;e===jt;)jt=gr[--xr],gr[xr]=null,Gr=gr[--xr],gr[xr]=null,Qr=gr[--xr],gr[xr]=null}var lr=null,cr=null,ke=!1,Lr=null;function Fc(e,r){var t=br(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function Bc(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,lr=e,cr=at(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,lr=e,cr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=jt!==null?{id:Qr,overflow:Gr}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=br(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,lr=e,cr=null,!0):!1;default:return!1}}function Ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ya(e){if(ke){var r=cr;if(r){var t=r;if(!Bc(e,r)){if(Ga(e))throw Error(d(418));r=at(t.nextSibling);var n=lr;r&&Bc(e,r)?Fc(n,t):(e.flags=e.flags&-4097|2,ke=!1,lr=e)}}else{if(Ga(e))throw Error(d(418));e.flags=e.flags&-4097|2,ke=!1,lr=e}}}function Wc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lr=e}function Zo(e){if(e!==lr)return!1;if(!ke)return Wc(e),ke=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Ba(e.type,e.memoizedProps)),r&&(r=cr)){if(Ga(e))throw $c(),Error(d(418));for(;r;)Fc(e,r),r=at(r.nextSibling)}if(Wc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){cr=at(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}cr=null}}else cr=lr?at(e.stateNode.nextSibling):null;return!0}function $c(){for(var e=cr;e;)e=at(e.nextSibling)}function cn(){cr=lr=null,ke=!1}function Ka(e){Lr===null?Lr=[e]:Lr.push(e)}var Af=re.ReactCurrentBatchConfig;function eo(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(d(309));var n=t.stateNode}if(!n)throw Error(d(147,e));var o=n,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(u){var f=o.refs;u===null?delete f[s]:f[s]=u},r._stringRef=s,r)}if(typeof e!="string")throw Error(d(284));if(!t._owner)throw Error(d(290,e))}return e}function ei(e,r){throw e=Object.prototype.toString.call(r),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Uc(e){var r=e._init;return r(e._payload)}function Hc(e){function r(v,g){if(e){var y=v.deletions;y===null?(v.deletions=[g],v.flags|=16):y.push(g)}}function t(v,g){if(!e)return null;for(;g!==null;)r(v,g),g=g.sibling;return null}function n(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function o(v,g){return v=xt(v,g),v.index=0,v.sibling=null,v}function s(v,g,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<g?(v.flags|=2,g):y):(v.flags|=2,g)):(v.flags|=1048576,g)}function u(v){return e&&v.alternate===null&&(v.flags|=2),v}function f(v,g,y,N){return g===null||g.tag!==6?(g=Ws(y,v.mode,N),g.return=v,g):(g=o(g,y),g.return=v,g)}function m(v,g,y,N){var M=y.type;return M===U?E(v,g,y.props.children,N,y.key):g!==null&&(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ue&&Uc(M)===g.type)?(N=o(g,y.props),N.ref=eo(v,g,y),N.return=v,N):(N=Si(y.type,y.key,y.props,null,v.mode,N),N.ref=eo(v,g,y),N.return=v,N)}function w(v,g,y,N){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=$s(y,v.mode,N),g.return=v,g):(g=o(g,y.children||[]),g.return=v,g)}function E(v,g,y,N,M){return g===null||g.tag!==7?(g=Ot(y,v.mode,N,M),g.return=v,g):(g=o(g,y),g.return=v,g)}function T(v,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ws(""+g,v.mode,y),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pe:return y=Si(g.type,g.key,g.props,null,v.mode,y),y.ref=eo(v,null,g),y.return=v,y;case K:return g=$s(g,v.mode,y),g.return=v,g;case Ue:var N=g._init;return T(v,N(g._payload),y)}if(In(g)||F(g))return g=Ot(g,v.mode,y,null),g.return=v,g;ei(v,g)}return null}function S(v,g,y,N){var M=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return M!==null?null:f(v,g,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pe:return y.key===M?m(v,g,y,N):null;case K:return y.key===M?w(v,g,y,N):null;case Ue:return M=y._init,S(v,g,M(y._payload),N)}if(In(y)||F(y))return M!==null?null:E(v,g,y,N,null);ei(v,y)}return null}function R(v,g,y,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return v=v.get(y)||null,f(g,v,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case pe:return v=v.get(N.key===null?y:N.key)||null,m(g,v,N,M);case K:return v=v.get(N.key===null?y:N.key)||null,w(g,v,N,M);case Ue:var W=N._init;return R(v,g,y,W(N._payload),M)}if(In(N)||F(N))return v=v.get(y)||null,E(g,v,N,M,null);ei(g,N)}return null}function z(v,g,y,N){for(var M=null,W=null,$=g,V=g=0,Ae=null;$!==null&&V<y.length;V++){$.index>V?(Ae=$,$=null):Ae=$.sibling;var ue=S(v,$,y[V],N);if(ue===null){$===null&&($=Ae);break}e&&$&&ue.alternate===null&&r(v,$),g=s(ue,g,V),W===null?M=ue:W.sibling=ue,W=ue,$=Ae}if(V===y.length)return t(v,$),ke&&St(v,V),M;if($===null){for(;V<y.length;V++)$=T(v,y[V],N),$!==null&&(g=s($,g,V),W===null?M=$:W.sibling=$,W=$);return ke&&St(v,V),M}for($=n(v,$);V<y.length;V++)Ae=R($,v,V,y[V],N),Ae!==null&&(e&&Ae.alternate!==null&&$.delete(Ae.key===null?V:Ae.key),g=s(Ae,g,V),W===null?M=Ae:W.sibling=Ae,W=Ae);return e&&$.forEach(function(vt){return r(v,vt)}),ke&&St(v,V),M}function A(v,g,y,N){var M=F(y);if(typeof M!="function")throw Error(d(150));if(y=M.call(y),y==null)throw Error(d(151));for(var W=M=null,$=g,V=g=0,Ae=null,ue=y.next();$!==null&&!ue.done;V++,ue=y.next()){$.index>V?(Ae=$,$=null):Ae=$.sibling;var vt=S(v,$,ue.value,N);if(vt===null){$===null&&($=Ae);break}e&&$&&vt.alternate===null&&r(v,$),g=s(vt,g,V),W===null?M=vt:W.sibling=vt,W=vt,$=Ae}if(ue.done)return t(v,$),ke&&St(v,V),M;if($===null){for(;!ue.done;V++,ue=y.next())ue=T(v,ue.value,N),ue!==null&&(g=s(ue,g,V),W===null?M=ue:W.sibling=ue,W=ue);return ke&&St(v,V),M}for($=n(v,$);!ue.done;V++,ue=y.next())ue=R($,v,V,ue.value,N),ue!==null&&(e&&ue.alternate!==null&&$.delete(ue.key===null?V:ue.key),g=s(ue,g,V),W===null?M=ue:W.sibling=ue,W=ue);return e&&$.forEach(function(mh){return r(v,mh)}),ke&&St(v,V),M}function Ce(v,g,y,N){if(typeof y=="object"&&y!==null&&y.type===U&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pe:e:{for(var M=y.key,W=g;W!==null;){if(W.key===M){if(M=y.type,M===U){if(W.tag===7){t(v,W.sibling),g=o(W,y.props.children),g.return=v,v=g;break e}}else if(W.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ue&&Uc(M)===W.type){t(v,W.sibling),g=o(W,y.props),g.ref=eo(v,W,y),g.return=v,v=g;break e}t(v,W);break}else r(v,W);W=W.sibling}y.type===U?(g=Ot(y.props.children,v.mode,N,y.key),g.return=v,v=g):(N=Si(y.type,y.key,y.props,null,v.mode,N),N.ref=eo(v,g,y),N.return=v,v=N)}return u(v);case K:e:{for(W=y.key;g!==null;){if(g.key===W)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){t(v,g.sibling),g=o(g,y.children||[]),g.return=v,v=g;break e}else{t(v,g);break}else r(v,g);g=g.sibling}g=$s(y,v.mode,N),g.return=v,v=g}return u(v);case Ue:return W=y._init,Ce(v,g,W(y._payload),N)}if(In(y))return z(v,g,y,N);if(F(y))return A(v,g,y,N);ei(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(t(v,g.sibling),g=o(g,y),g.return=v,v=g):(t(v,g),g=Ws(y,v.mode,N),g.return=v,v=g),u(v)):t(v,g)}return Ce}var dn=Hc(!0),qc=Hc(!1),ri=st(null),ti=null,un=null,Xa=null;function Ja(){Xa=un=ti=null}function Za(e){var r=ri.current;we(ri),e._currentValue=r}function es(e,r,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===t)break;e=e.return}}function pn(e,r){ti=e,Xa=un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Ze=!0),e.firstContext=null)}function vr(e){var r=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:r,next:null},un===null){if(ti===null)throw Error(d(308));un=e,ti.dependencies={lanes:0,firstContext:e}}else un=un.next=e;return r}var Et=null;function rs(e){Et===null?Et=[e]:Et.push(e)}function Vc(e,r,t,n){var o=r.interleaved;return o===null?(t.next=t,rs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Yr(e,n)}function Yr(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var dt=!1;function ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function ut(e,r,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ce&2)!==0){var o=n.pending;return o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r,Yr(e,t)}return o=n.interleaved,o===null?(r.next=r,rs(n)):(r.next=o.next,o.next=r),n.interleaved=r,Yr(e,t)}function ni(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,ga(e,t)}}function Gc(e,r){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var o=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var u={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?o=s=u:s=s.next=u,t=t.next}while(t!==null);s===null?o=s=r:s=s.next=r}else o=s=r;t={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function oi(e,r,t,n){var o=e.updateQueue;dt=!1;var s=o.firstBaseUpdate,u=o.lastBaseUpdate,f=o.shared.pending;if(f!==null){o.shared.pending=null;var m=f,w=m.next;m.next=null,u===null?s=w:u.next=w,u=m;var E=e.alternate;E!==null&&(E=E.updateQueue,f=E.lastBaseUpdate,f!==u&&(f===null?E.firstBaseUpdate=w:f.next=w,E.lastBaseUpdate=m))}if(s!==null){var T=o.baseState;u=0,E=w=m=null,f=s;do{var S=f.lane,R=f.eventTime;if((n&S)===S){E!==null&&(E=E.next={eventTime:R,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var z=e,A=f;switch(S=r,R=t,A.tag){case 1:if(z=A.payload,typeof z=="function"){T=z.call(R,T,S);break e}T=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=A.payload,S=typeof z=="function"?z.call(R,T,S):z,S==null)break e;T=O({},T,S);break e;case 2:dt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,S=o.effects,S===null?o.effects=[f]:S.push(f))}else R={eventTime:R,lane:S,tag:f.tag,payload:f.payload,callback:f.callback,next:null},E===null?(w=E=R,m=T):E=E.next=R,u|=S;if(f=f.next,f===null){if(f=o.shared.pending,f===null)break;S=f,f=S.next,S.next=null,o.lastBaseUpdate=S,o.shared.pending=null}}while(!0);if(E===null&&(m=T),o.baseState=m,o.firstBaseUpdate=w,o.lastBaseUpdate=E,r=o.shared.interleaved,r!==null){o=r;do u|=o.lane,o=o.next;while(o!==r)}else s===null&&(o.shared.lanes=0);Ct|=u,e.lanes=u,e.memoizedState=T}}function Yc(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],o=n.callback;if(o!==null){if(n.callback=null,n=t,typeof o!="function")throw Error(d(191,o));o.call(n)}}}var ro={},Fr=st(ro),to=st(ro),no=st(ro);function Tt(e){if(e===ro)throw Error(d(174));return e}function ns(e,r){switch(ve(no,r),ve(to,e),ve(Fr,ro),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:oa(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=oa(r,e)}we(Fr),ve(Fr,r)}function fn(){we(Fr),we(to),we(no)}function Kc(e){Tt(no.current);var r=Tt(Fr.current),t=oa(r,e.type);r!==t&&(ve(to,e),ve(Fr,t))}function os(e){to.current===e&&(we(Fr),we(to))}var je=st(0);function ii(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var is=[];function as(){for(var e=0;e<is.length;e++)is[e]._workInProgressVersionPrimary=null;is.length=0}var ai=re.ReactCurrentDispatcher,ss=re.ReactCurrentBatchConfig,Nt=0,Se=null,Oe=null,Pe=null,si=!1,oo=!1,io=0,Df=0;function qe(){throw Error(d(321))}function ls(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Ir(e[t],r[t]))return!1;return!0}function cs(e,r,t,n,o,s){if(Nt=s,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ai.current=e===null||e.memoizedState===null?Wf:$f,e=t(n,o),oo){s=0;do{if(oo=!1,io=0,25<=s)throw Error(d(301));s+=1,Pe=Oe=null,r.updateQueue=null,ai.current=Uf,e=t(n,o)}while(oo)}if(ai.current=di,r=Oe!==null&&Oe.next!==null,Nt=0,Pe=Oe=Se=null,si=!1,r)throw Error(d(300));return e}function ds(){var e=io!==0;return io=0,e}function Br(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?Se.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function yr(){if(Oe===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var r=Pe===null?Se.memoizedState:Pe.next;if(r!==null)Pe=r,Oe=e;else{if(e===null)throw Error(d(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Pe===null?Se.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function ao(e,r){return typeof r=="function"?r(e):r}function us(e){var r=yr(),t=r.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var n=Oe,o=n.baseQueue,s=t.pending;if(s!==null){if(o!==null){var u=o.next;o.next=s.next,s.next=u}n.baseQueue=o=s,t.pending=null}if(o!==null){s=o.next,n=n.baseState;var f=u=null,m=null,w=s;do{var E=w.lane;if((Nt&E)===E)m!==null&&(m=m.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),n=w.hasEagerState?w.eagerState:e(n,w.action);else{var T={lane:E,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};m===null?(f=m=T,u=n):m=m.next=T,Se.lanes|=E,Ct|=E}w=w.next}while(w!==null&&w!==s);m===null?u=n:m.next=f,Ir(n,r.memoizedState)||(Ze=!0),r.memoizedState=n,r.baseState=u,r.baseQueue=m,t.lastRenderedState=n}if(e=t.interleaved,e!==null){o=e;do s=o.lane,Se.lanes|=s,Ct|=s,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function ps(e){var r=yr(),t=r.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var n=t.dispatch,o=t.pending,s=r.memoizedState;if(o!==null){t.pending=null;var u=o=o.next;do s=e(s,u.action),u=u.next;while(u!==o);Ir(s,r.memoizedState)||(Ze=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),t.lastRenderedState=s}return[s,n]}function Xc(){}function Jc(e,r){var t=Se,n=yr(),o=r(),s=!Ir(n.memoizedState,o);if(s&&(n.memoizedState=o,Ze=!0),n=n.queue,fs(rd.bind(null,t,n,e),[e]),n.getSnapshot!==r||s||Pe!==null&&Pe.memoizedState.tag&1){if(t.flags|=2048,so(9,ed.bind(null,t,n,o,r),void 0,null),ze===null)throw Error(d(349));(Nt&30)!==0||Zc(t,r,o)}return o}function Zc(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Se.updateQueue,r===null?(r={lastEffect:null,stores:null},Se.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function ed(e,r,t,n){r.value=t,r.getSnapshot=n,td(r)&&nd(e)}function rd(e,r,t){return t(function(){td(r)&&nd(e)})}function td(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Ir(e,t)}catch{return!0}}function nd(e){var r=Yr(e,1);r!==null&&Pr(r,e,1,-1)}function od(e){var r=Br();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:e},r.queue=e,e=e.dispatch=Bf.bind(null,Se,e),[r.memoizedState,e]}function so(e,r,t,n){return e={tag:e,create:r,destroy:t,deps:n,next:null},r=Se.updateQueue,r===null?(r={lastEffect:null,stores:null},Se.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,r.lastEffect=e)),e}function id(){return yr().memoizedState}function li(e,r,t,n){var o=Br();Se.flags|=e,o.memoizedState=so(1|r,t,void 0,n===void 0?null:n)}function ci(e,r,t,n){var o=yr();n=n===void 0?null:n;var s=void 0;if(Oe!==null){var u=Oe.memoizedState;if(s=u.destroy,n!==null&&ls(n,u.deps)){o.memoizedState=so(r,t,s,n);return}}Se.flags|=e,o.memoizedState=so(1|r,t,s,n)}function ad(e,r){return li(8390656,8,e,r)}function fs(e,r){return ci(2048,8,e,r)}function sd(e,r){return ci(4,2,e,r)}function ld(e,r){return ci(4,4,e,r)}function cd(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function dd(e,r,t){return t=t!=null?t.concat([e]):null,ci(4,4,cd.bind(null,r,e),t)}function hs(){}function ud(e,r){var t=yr();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&ls(r,n[1])?n[0]:(t.memoizedState=[e,r],e)}function pd(e,r){var t=yr();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&ls(r,n[1])?n[0]:(e=e(),t.memoizedState=[e,r],e)}function fd(e,r,t){return(Nt&21)===0?(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=t):(Ir(t,r)||(t=Ul(),Se.lanes|=t,Ct|=t,e.baseState=!0),r)}function Mf(e,r){var t=ge;ge=t!==0&&4>t?t:4,e(!0);var n=ss.transition;ss.transition={};try{e(!1),r()}finally{ge=t,ss.transition=n}}function hd(){return yr().memoizedState}function Ff(e,r,t){var n=mt(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},md(e))gd(r,t);else if(t=Vc(e,r,t,n),t!==null){var o=Ke();Pr(t,e,n,o),xd(t,r,n)}}function Bf(e,r,t){var n=mt(e),o={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(md(e))gd(r,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var u=r.lastRenderedState,f=s(u,t);if(o.hasEagerState=!0,o.eagerState=f,Ir(f,u)){var m=r.interleaved;m===null?(o.next=o,rs(r)):(o.next=m.next,m.next=o),r.interleaved=o;return}}catch{}finally{}t=Vc(e,r,o,n),t!==null&&(o=Ke(),Pr(t,e,n,o),xd(t,r,n))}}function md(e){var r=e.alternate;return e===Se||r!==null&&r===Se}function gd(e,r){oo=si=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function xd(e,r,t){if((t&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,ga(e,t)}}var di={readContext:vr,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Wf={readContext:vr,useCallback:function(e,r){return Br().memoizedState=[e,r===void 0?null:r],e},useContext:vr,useEffect:ad,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,li(4194308,4,cd.bind(null,r,e),t)},useLayoutEffect:function(e,r){return li(4194308,4,e,r)},useInsertionEffect:function(e,r){return li(4,2,e,r)},useMemo:function(e,r){var t=Br();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var n=Br();return r=t!==void 0?t(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Ff.bind(null,Se,e),[n.memoizedState,e]},useRef:function(e){var r=Br();return e={current:e},r.memoizedState=e},useState:od,useDebugValue:hs,useDeferredValue:function(e){return Br().memoizedState=e},useTransition:function(){var e=od(!1),r=e[0];return e=Mf.bind(null,e[1]),Br().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var n=Se,o=Br();if(ke){if(t===void 0)throw Error(d(407));t=t()}else{if(t=r(),ze===null)throw Error(d(349));(Nt&30)!==0||Zc(n,r,t)}o.memoizedState=t;var s={value:t,getSnapshot:r};return o.queue=s,ad(rd.bind(null,n,s,e),[e]),n.flags|=2048,so(9,ed.bind(null,n,s,t,r),void 0,null),t},useId:function(){var e=Br(),r=ze.identifierPrefix;if(ke){var t=Gr,n=Qr;t=(n&~(1<<32-Cr(n)-1)).toString(32)+t,r=":"+r+"R"+t,t=io++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=Df++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},$f={readContext:vr,useCallback:ud,useContext:vr,useEffect:fs,useImperativeHandle:dd,useInsertionEffect:sd,useLayoutEffect:ld,useMemo:pd,useReducer:us,useRef:id,useState:function(){return us(ao)},useDebugValue:hs,useDeferredValue:function(e){var r=yr();return fd(r,Oe.memoizedState,e)},useTransition:function(){var e=us(ao)[0],r=yr().memoizedState;return[e,r]},useMutableSource:Xc,useSyncExternalStore:Jc,useId:hd,unstable_isNewReconciler:!1},Uf={readContext:vr,useCallback:ud,useContext:vr,useEffect:fs,useImperativeHandle:dd,useInsertionEffect:sd,useLayoutEffect:ld,useMemo:pd,useReducer:ps,useRef:id,useState:function(){return ps(ao)},useDebugValue:hs,useDeferredValue:function(e){var r=yr();return Oe===null?r.memoizedState=e:fd(r,Oe.memoizedState,e)},useTransition:function(){var e=ps(ao)[0],r=yr().memoizedState;return[e,r]},useMutableSource:Xc,useSyncExternalStore:Jc,useId:hd,unstable_isNewReconciler:!1};function _r(e,r){if(e&&e.defaultProps){r=O({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function ms(e,r,t,n){r=e.memoizedState,t=t(n,r),t=t==null?r:O({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ui={isMounted:function(e){return(e=e._reactInternals)?wt(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var n=Ke(),o=mt(e),s=Kr(n,o);s.payload=r,t!=null&&(s.callback=t),r=ut(e,s,o),r!==null&&(Pr(r,e,o,n),ni(r,e,o))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var n=Ke(),o=mt(e),s=Kr(n,o);s.tag=1,s.payload=r,t!=null&&(s.callback=t),r=ut(e,s,o),r!==null&&(Pr(r,e,o,n),ni(r,e,o))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=Ke(),n=mt(e),o=Kr(t,n);o.tag=2,r!=null&&(o.callback=r),r=ut(e,o,n),r!==null&&(Pr(r,e,n,t),ni(r,e,n))}};function vd(e,r,t,n,o,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,u):r.prototype&&r.prototype.isPureReactComponent?!Qn(t,n)||!Qn(o,s):!0}function yd(e,r,t){var n=!1,o=lt,s=r.contextType;return typeof s=="object"&&s!==null?s=vr(s):(o=Je(r)?kt:He.current,n=r.contextTypes,s=(n=n!=null)?an(e,o):lt),r=new r(t,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ui,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),r}function wd(e,r,t,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,n),r.state!==e&&ui.enqueueReplaceState(r,r.state,null)}function gs(e,r,t,n){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},ts(e);var s=r.contextType;typeof s=="object"&&s!==null?o.context=vr(s):(s=Je(r)?kt:He.current,o.context=an(e,s)),o.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(ms(e,r,s,t),o.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&ui.enqueueReplaceState(o,o.state,null),oi(e,t,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function hn(e,r){try{var t="",n=r;do t+=oe(n),n=n.return;while(n);var o=t}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:o,digest:null}}function xs(e,r,t){return{value:e,source:null,stack:t!=null?t:null,digest:r!=null?r:null}}function vs(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var Hf=typeof WeakMap=="function"?WeakMap:Map;function bd(e,r,t){t=Kr(-1,t),t.tag=3,t.payload={element:null};var n=r.value;return t.callback=function(){vi||(vi=!0,Rs=n),vs(e,r)},t}function kd(e,r,t){t=Kr(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=r.value;t.payload=function(){return n(o)},t.callback=function(){vs(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){vs(e,r),typeof n!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var u=r.stack;this.componentDidCatch(r.value,{componentStack:u!==null?u:""})}),t}function jd(e,r,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Hf;var o=new Set;n.set(r,o)}else o=n.get(r),o===void 0&&(o=new Set,n.set(r,o));o.has(t)||(o.add(t),e=oh.bind(null,e,r,t),r.then(e,e))}function Sd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Ed(e,r,t,n,o){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=Kr(-1,1),r.tag=2,ut(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var qf=re.ReactCurrentOwner,Ze=!1;function Ye(e,r,t,n){r.child=e===null?qc(r,null,t,n):dn(r,e.child,t,n)}function Td(e,r,t,n,o){t=t.render;var s=r.ref;return pn(r,o),n=cs(e,r,t,n,s,o),t=ds(),e!==null&&!Ze?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~o,Xr(e,r,o)):(ke&&t&&Va(r),r.flags|=1,Ye(e,r,n,o),r.child)}function Nd(e,r,t,n,o){if(e===null){var s=t.type;return typeof s=="function"&&!Bs(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=s,Cd(e,r,s,n,o)):(e=Si(t.type,null,n,r,r.mode,o),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,(e.lanes&o)===0){var u=s.memoizedProps;if(t=t.compare,t=t!==null?t:Qn,t(u,n)&&e.ref===r.ref)return Xr(e,r,o)}return r.flags|=1,e=xt(s,n),e.ref=r.ref,e.return=r,r.child=e}function Cd(e,r,t,n,o){if(e!==null){var s=e.memoizedProps;if(Qn(s,n)&&e.ref===r.ref)if(Ze=!1,r.pendingProps=n=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ze=!0);else return r.lanes=e.lanes,Xr(e,r,o)}return ys(e,r,t,n,o)}function Id(e,r,t){var n=r.pendingProps,o=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(gn,dr),dr|=t;else{if((t&1073741824)===0)return e=s!==null?s.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ve(gn,dr),dr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:t,ve(gn,dr),dr|=n}else s!==null?(n=s.baseLanes|t,r.memoizedState=null):n=t,ve(gn,dr),dr|=n;return Ye(e,r,o,t),r.child}function Ld(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function ys(e,r,t,n,o){var s=Je(t)?kt:He.current;return s=an(r,s),pn(r,o),t=cs(e,r,t,n,s,o),n=ds(),e!==null&&!Ze?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~o,Xr(e,r,o)):(ke&&n&&Va(r),r.flags|=1,Ye(e,r,t,o),r.child)}function _d(e,r,t,n,o){if(Je(t)){var s=!0;Yo(r)}else s=!1;if(pn(r,o),r.stateNode===null)fi(e,r),yd(r,t,n),gs(r,t,n,o),n=!0;else if(e===null){var u=r.stateNode,f=r.memoizedProps;u.props=f;var m=u.context,w=t.contextType;typeof w=="object"&&w!==null?w=vr(w):(w=Je(t)?kt:He.current,w=an(r,w));var E=t.getDerivedStateFromProps,T=typeof E=="function"||typeof u.getSnapshotBeforeUpdate=="function";T||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==n||m!==w)&&wd(r,u,n,w),dt=!1;var S=r.memoizedState;u.state=S,oi(r,n,u,o),m=r.memoizedState,f!==n||S!==m||Xe.current||dt?(typeof E=="function"&&(ms(r,t,E,n),m=r.memoizedState),(f=dt||vd(r,t,f,n,S,m,w))?(T||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(r.flags|=4194308)):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=m),u.props=n,u.state=m,u.context=w,n=f):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{u=r.stateNode,Qc(e,r),f=r.memoizedProps,w=r.type===r.elementType?f:_r(r.type,f),u.props=w,T=r.pendingProps,S=u.context,m=t.contextType,typeof m=="object"&&m!==null?m=vr(m):(m=Je(t)?kt:He.current,m=an(r,m));var R=t.getDerivedStateFromProps;(E=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==T||S!==m)&&wd(r,u,n,m),dt=!1,S=r.memoizedState,u.state=S,oi(r,n,u,o);var z=r.memoizedState;f!==T||S!==z||Xe.current||dt?(typeof R=="function"&&(ms(r,t,R,n),z=r.memoizedState),(w=dt||vd(r,t,w,n,S,z,m)||!1)?(E||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,z,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,z,m)),typeof u.componentDidUpdate=="function"&&(r.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&S===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&S===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=z),u.props=n,u.state=z,u.context=m,n=w):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&S===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&S===e.memoizedState||(r.flags|=1024),n=!1)}return ws(e,r,t,n,s,o)}function ws(e,r,t,n,o,s){Ld(e,r);var u=(r.flags&128)!==0;if(!n&&!u)return o&&Ac(r,t,!1),Xr(e,r,s);n=r.stateNode,qf.current=r;var f=u&&typeof t.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&u?(r.child=dn(r,e.child,null,s),r.child=dn(r,null,f,s)):Ye(e,r,f,s),r.memoizedState=n.state,o&&Ac(r,t,!0),r.child}function Od(e){var r=e.stateNode;r.pendingContext?Pc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Pc(e,r.context,!1),ns(e,r.containerInfo)}function Rd(e,r,t,n,o){return cn(),Ka(o),r.flags|=256,Ye(e,r,t,n),r.child}var bs={dehydrated:null,treeContext:null,retryLane:0};function ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pd(e,r,t){var n=r.pendingProps,o=je.current,s=!1,u=(r.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(o&2)!==0),f?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ve(je,o&1),e===null)return Ya(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(u=n.children,e=n.fallback,s?(n=r.mode,s=r.child,u={mode:"hidden",children:u},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=u):s=Ei(u,n,0,null),e=Ot(e,n,t,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=ks(t),r.memoizedState=bs,e):js(r,u));if(o=e.memoizedState,o!==null&&(f=o.dehydrated,f!==null))return Vf(e,r,u,n,f,o,t);if(s){s=n.fallback,u=r.mode,o=e.child,f=o.sibling;var m={mode:"hidden",children:n.children};return(u&1)===0&&r.child!==o?(n=r.child,n.childLanes=0,n.pendingProps=m,r.deletions=null):(n=xt(o,m),n.subtreeFlags=o.subtreeFlags&14680064),f!==null?s=xt(f,s):(s=Ot(s,u,t,null),s.flags|=2),s.return=r,n.return=r,n.sibling=s,r.child=n,n=s,s=r.child,u=e.child.memoizedState,u=u===null?ks(t):{baseLanes:u.baseLanes|t,cachePool:null,transitions:u.transitions},s.memoizedState=u,s.childLanes=e.childLanes&~t,r.memoizedState=bs,n}return s=e.child,e=s.sibling,n=xt(s,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=t),n.return=r,n.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=n,r.memoizedState=null,n}function js(e,r){return r=Ei({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function pi(e,r,t,n){return n!==null&&Ka(n),dn(r,e.child,null,t),e=js(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Vf(e,r,t,n,o,s,u){if(t)return r.flags&256?(r.flags&=-257,n=xs(Error(d(422))),pi(e,r,u,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=n.fallback,o=r.mode,n=Ei({mode:"visible",children:n.children},o,0,null),s=Ot(s,o,u,null),s.flags|=2,n.return=r,s.return=r,n.sibling=s,r.child=n,(r.mode&1)!==0&&dn(r,e.child,null,u),r.child.memoizedState=ks(u),r.memoizedState=bs,s);if((r.mode&1)===0)return pi(e,r,u,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var f=n.dgst;return n=f,s=Error(d(419)),n=xs(s,n,void 0),pi(e,r,u,n)}if(f=(u&e.childLanes)!==0,Ze||f){if(n=ze,n!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(n.suspendedLanes|u))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Yr(e,o),Pr(n,e,o,-1))}return Fs(),n=xs(Error(d(421))),pi(e,r,u,n)}return o.data==="$?"?(r.flags|=128,r.child=e.child,r=ih.bind(null,e),o._reactRetry=r,null):(e=s.treeContext,cr=at(o.nextSibling),lr=r,ke=!0,Lr=null,e!==null&&(gr[xr++]=Qr,gr[xr++]=Gr,gr[xr++]=jt,Qr=e.id,Gr=e.overflow,jt=r),r=js(r,n.children),r.flags|=4096,r)}function zd(e,r,t){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),es(e.return,r,t)}function Ss(e,r,t,n,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:o}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=t,s.tailMode=o)}function Ad(e,r,t){var n=r.pendingProps,o=n.revealOrder,s=n.tail;if(Ye(e,r,n.children,t),n=je.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zd(e,t,r);else if(e.tag===19)zd(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ve(je,n),(r.mode&1)===0)r.memoizedState=null;else switch(o){case"forwards":for(t=r.child,o=null;t!==null;)e=t.alternate,e!==null&&ii(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=r.child,r.child=null):(o=t.sibling,t.sibling=null),Ss(r,!1,o,t,s);break;case"backwards":for(t=null,o=r.child,r.child=null;o!==null;){if(e=o.alternate,e!==null&&ii(e)===null){r.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Ss(r,!0,t,null,s);break;case"together":Ss(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function fi(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Xr(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),Ct|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(d(153));if(r.child!==null){for(e=r.child,t=xt(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=xt(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function Qf(e,r,t){switch(r.tag){case 3:Od(r),cn();break;case 5:Kc(r);break;case 1:Je(r.type)&&Yo(r);break;case 4:ns(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,o=r.memoizedProps.value;ve(ri,n._currentValue),n._currentValue=o;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(ve(je,je.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?Pd(e,r,t):(ve(je,je.current&1),e=Xr(e,r,t),e!==null?e.sibling:null);ve(je,je.current&1);break;case 19:if(n=(t&r.childLanes)!==0,(e.flags&128)!==0){if(n)return Ad(e,r,t);r.flags|=128}if(o=r.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ve(je,je.current),n)break;return null;case 22:case 23:return r.lanes=0,Id(e,r,t)}return Xr(e,r,t)}var Dd,Es,Md,Fd;Dd=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Es=function(){},Md=function(e,r,t,n){var o=e.memoizedProps;if(o!==n){e=r.stateNode,Tt(Fr.current);var s=null;switch(t){case"input":o=ea(e,o),n=ea(e,n),s=[];break;case"select":o=O({},o,{value:void 0}),n=O({},n,{value:void 0}),s=[];break;case"textarea":o=na(e,o),n=na(e,n),s=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Vo)}ia(t,n);var u;t=null;for(w in o)if(!n.hasOwnProperty(w)&&o.hasOwnProperty(w)&&o[w]!=null)if(w==="style"){var f=o[w];for(u in f)f.hasOwnProperty(u)&&(t||(t={}),t[u]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(p.hasOwnProperty(w)?s||(s=[]):(s=s||[]).push(w,null));for(w in n){var m=n[w];if(f=o!=null?o[w]:void 0,n.hasOwnProperty(w)&&m!==f&&(m!=null||f!=null))if(w==="style")if(f){for(u in f)!f.hasOwnProperty(u)||m&&m.hasOwnProperty(u)||(t||(t={}),t[u]="");for(u in m)m.hasOwnProperty(u)&&f[u]!==m[u]&&(t||(t={}),t[u]=m[u])}else t||(s||(s=[]),s.push(w,t)),t=m;else w==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,f=f?f.__html:void 0,m!=null&&f!==m&&(s=s||[]).push(w,m)):w==="children"?typeof m!="string"&&typeof m!="number"||(s=s||[]).push(w,""+m):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(p.hasOwnProperty(w)?(m!=null&&w==="onScroll"&&ye("scroll",e),s||f===m||(s=[])):(s=s||[]).push(w,m))}t&&(s=s||[]).push("style",t);var w=s;(r.updateQueue=w)&&(r.flags|=4)}},Fd=function(e,r,t,n){t!==n&&(r.flags|=4)};function lo(e,r){if(!ke)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ve(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(r)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=t,r}function Gf(e,r,t){var n=r.pendingProps;switch(Qa(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(r),null;case 1:return Je(r.type)&&Go(),Ve(r),null;case 3:return n=r.stateNode,fn(),we(Xe),we(He),as(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zo(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Lr!==null&&(As(Lr),Lr=null))),Es(e,r),Ve(r),null;case 5:os(r);var o=Tt(no.current);if(t=r.type,e!==null&&r.stateNode!=null)Md(e,r,t,n,o),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(d(166));return Ve(r),null}if(e=Tt(Fr.current),Zo(r)){n=r.stateNode,t=r.type;var s=r.memoizedProps;switch(n[Mr]=r,n[Jn]=s,e=(r.mode&1)!==0,t){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(o=0;o<Yn.length;o++)ye(Yn[o],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":yl(n,s),ye("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},ye("invalid",n);break;case"textarea":kl(n,s),ye("invalid",n)}ia(t,s),o=null;for(var u in s)if(s.hasOwnProperty(u)){var f=s[u];u==="children"?typeof f=="string"?n.textContent!==f&&(s.suppressHydrationWarning!==!0&&qo(n.textContent,f,e),o=["children",f]):typeof f=="number"&&n.textContent!==""+f&&(s.suppressHydrationWarning!==!0&&qo(n.textContent,f,e),o=["children",""+f]):p.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&ye("scroll",n)}switch(t){case"input":Hr(n),bl(n,s,!0);break;case"textarea":Hr(n),Sl(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Vo)}n=o,r.updateQueue=n,n!==null&&(r.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=El(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=u.createElement(t,{is:n.is}):(e=u.createElement(t),t==="select"&&(u=e,n.multiple?u.multiple=!0:n.size&&(u.size=n.size))):e=u.createElementNS(e,t),e[Mr]=r,e[Jn]=n,Dd(e,r,!1,!1),r.stateNode=e;e:{switch(u=aa(t,n),t){case"dialog":ye("cancel",e),ye("close",e),o=n;break;case"iframe":case"object":case"embed":ye("load",e),o=n;break;case"video":case"audio":for(o=0;o<Yn.length;o++)ye(Yn[o],e);o=n;break;case"source":ye("error",e),o=n;break;case"img":case"image":case"link":ye("error",e),ye("load",e),o=n;break;case"details":ye("toggle",e),o=n;break;case"input":yl(e,n),o=ea(e,n),ye("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=O({},n,{value:void 0}),ye("invalid",e);break;case"textarea":kl(e,n),o=na(e,n),ye("invalid",e);break;default:o=n}ia(t,o),f=o;for(s in f)if(f.hasOwnProperty(s)){var m=f[s];s==="style"?Cl(e,m):s==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Tl(e,m)):s==="children"?typeof m=="string"?(t!=="textarea"||m!=="")&&Ln(e,m):typeof m=="number"&&Ln(e,""+m):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(p.hasOwnProperty(s)?m!=null&&s==="onScroll"&&ye("scroll",e):m!=null&&ae(e,s,m,u))}switch(t){case"input":Hr(e),bl(e,n,!1);break;case"textarea":Hr(e),Sl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+se(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Qt(e,!!n.multiple,s,!1):n.defaultValue!=null&&Qt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Vo)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ve(r),null;case 6:if(e&&r.stateNode!=null)Fd(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(d(166));if(t=Tt(no.current),Tt(Fr.current),Zo(r)){if(n=r.stateNode,t=r.memoizedProps,n[Mr]=r,(s=n.nodeValue!==t)&&(e=lr,e!==null))switch(e.tag){case 3:qo(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qo(n.nodeValue,t,(e.mode&1)!==0)}s&&(r.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[Mr]=r,r.stateNode=n}return Ve(r),null;case 13:if(we(je),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&cr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)$c(),cn(),r.flags|=98560,s=!1;else if(s=Zo(r),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(d(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(d(317));s[Mr]=r}else cn(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ve(r),s=!1}else Lr!==null&&(As(Lr),Lr=null),s=!0;if(!s)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(je.current&1)!==0?Re===0&&(Re=3):Fs())),r.updateQueue!==null&&(r.flags|=4),Ve(r),null);case 4:return fn(),Es(e,r),e===null&&Kn(r.stateNode.containerInfo),Ve(r),null;case 10:return Za(r.type._context),Ve(r),null;case 17:return Je(r.type)&&Go(),Ve(r),null;case 19:if(we(je),s=r.memoizedState,s===null)return Ve(r),null;if(n=(r.flags&128)!==0,u=s.rendering,u===null)if(n)lo(s,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(u=ii(e),u!==null){for(r.flags|=128,lo(s,!1),n=u.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=t,t=r.child;t!==null;)s=t,e=n,s.flags&=14680066,u=s.alternate,u===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=u.childLanes,s.lanes=u.lanes,s.child=u.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=u.memoizedProps,s.memoizedState=u.memoizedState,s.updateQueue=u.updateQueue,s.type=u.type,e=u.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ve(je,je.current&1|2),r.child}e=e.sibling}s.tail!==null&&Ne()>xn&&(r.flags|=128,n=!0,lo(s,!1),r.lanes=4194304)}else{if(!n)if(e=ii(u),e!==null){if(r.flags|=128,n=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!ke)return Ve(r),null}else 2*Ne()-s.renderingStartTime>xn&&t!==1073741824&&(r.flags|=128,n=!0,lo(s,!1),r.lanes=4194304);s.isBackwards?(u.sibling=r.child,r.child=u):(t=s.last,t!==null?t.sibling=u:r.child=u,s.last=u)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Ne(),r.sibling=null,t=je.current,ve(je,n?t&1|2:t&1),r):(Ve(r),null);case 22:case 23:return Ms(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(dr&1073741824)!==0&&(Ve(r),r.subtreeFlags&6&&(r.flags|=8192)):Ve(r),null;case 24:return null;case 25:return null}throw Error(d(156,r.tag))}function Yf(e,r){switch(Qa(r),r.tag){case 1:return Je(r.type)&&Go(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return fn(),we(Xe),we(He),as(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return os(r),null;case 13:if(we(je),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(d(340));cn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return we(je),null;case 4:return fn(),null;case 10:return Za(r.type._context),null;case 22:case 23:return Ms(),null;case 24:return null;default:return null}}var hi=!1,Qe=!1,Kf=typeof WeakSet=="function"?WeakSet:Set,P=null;function mn(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Ee(e,r,n)}else t.current=null}function Ts(e,r,t){try{t()}catch(n){Ee(e,r,n)}}var Bd=!1;function Xf(e,r){if(Ma=Po,e=vc(),La(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var o=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var u=0,f=-1,m=-1,w=0,E=0,T=e,S=null;r:for(;;){for(var R;T!==t||o!==0&&T.nodeType!==3||(f=u+o),T!==s||n!==0&&T.nodeType!==3||(m=u+n),T.nodeType===3&&(u+=T.nodeValue.length),(R=T.firstChild)!==null;)S=T,T=R;for(;;){if(T===e)break r;if(S===t&&++w===o&&(f=u),S===s&&++E===n&&(m=u),(R=T.nextSibling)!==null)break;T=S,S=T.parentNode}T=R}t=f===-1||m===-1?null:{start:f,end:m}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fa={focusedElem:e,selectionRange:t},Po=!1,P=r;P!==null;)if(r=P,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,P=e;else for(;P!==null;){r=P;try{var z=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var A=z.memoizedProps,Ce=z.memoizedState,v=r.stateNode,g=v.getSnapshotBeforeUpdate(r.elementType===r.type?A:_r(r.type,A),Ce);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=r.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(N){Ee(r,r.return,N)}if(e=r.sibling,e!==null){e.return=r.return,P=e;break}P=r.return}return z=Bd,Bd=!1,z}function co(e,r,t){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&Ts(r,t,s)}o=o.next}while(o!==n)}}function mi(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==r)}}function Ns(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Wd(e){var r=e.alternate;r!==null&&(e.alternate=null,Wd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Mr],delete r[Jn],delete r[Ua],delete r[Rf],delete r[Pf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $d(e){return e.tag===5||e.tag===3||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cs(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Vo));else if(n!==4&&(e=e.child,e!==null))for(Cs(e,r,t),e=e.sibling;e!==null;)Cs(e,r,t),e=e.sibling}function Is(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Is(e,r,t),e=e.sibling;e!==null;)Is(e,r,t),e=e.sibling}var We=null,Or=!1;function pt(e,r,t){for(t=t.child;t!==null;)Hd(e,r,t),t=t.sibling}function Hd(e,r,t){if(Dr&&typeof Dr.onCommitFiberUnmount=="function")try{Dr.onCommitFiberUnmount(Co,t)}catch{}switch(t.tag){case 5:Qe||mn(t,r);case 6:var n=We,o=Or;We=null,pt(e,r,t),We=n,Or=o,We!==null&&(Or?(e=We,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):We.removeChild(t.stateNode));break;case 18:We!==null&&(Or?(e=We,t=t.stateNode,e.nodeType===8?$a(e.parentNode,t):e.nodeType===1&&$a(e,t),Wn(e)):$a(We,t.stateNode));break;case 4:n=We,o=Or,We=t.stateNode.containerInfo,Or=!0,pt(e,r,t),We=n,Or=o;break;case 0:case 11:case 14:case 15:if(!Qe&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var s=o,u=s.destroy;s=s.tag,u!==void 0&&((s&2)!==0||(s&4)!==0)&&Ts(t,r,u),o=o.next}while(o!==n)}pt(e,r,t);break;case 1:if(!Qe&&(mn(t,r),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(f){Ee(t,r,f)}pt(e,r,t);break;case 21:pt(e,r,t);break;case 22:t.mode&1?(Qe=(n=Qe)||t.memoizedState!==null,pt(e,r,t),Qe=n):pt(e,r,t);break;default:pt(e,r,t)}}function qd(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Kf),r.forEach(function(n){var o=ah.bind(null,e,n);t.has(n)||(t.add(n),n.then(o,o))})}}function Rr(e,r){var t=r.deletions;if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];try{var s=e,u=r,f=u;e:for(;f!==null;){switch(f.tag){case 5:We=f.stateNode,Or=!1;break e;case 3:We=f.stateNode.containerInfo,Or=!0;break e;case 4:We=f.stateNode.containerInfo,Or=!0;break e}f=f.return}if(We===null)throw Error(d(160));Hd(s,u,o),We=null,Or=!1;var m=o.alternate;m!==null&&(m.return=null),o.return=null}catch(w){Ee(o,r,w)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Vd(r,e),r=r.sibling}function Vd(e,r){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rr(r,e),Wr(e),n&4){try{co(3,e,e.return),mi(3,e)}catch(A){Ee(e,e.return,A)}try{co(5,e,e.return)}catch(A){Ee(e,e.return,A)}}break;case 1:Rr(r,e),Wr(e),n&512&&t!==null&&mn(t,t.return);break;case 5:if(Rr(r,e),Wr(e),n&512&&t!==null&&mn(t,t.return),e.flags&32){var o=e.stateNode;try{Ln(o,"")}catch(A){Ee(e,e.return,A)}}if(n&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,u=t!==null?t.memoizedProps:s,f=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{f==="input"&&s.type==="radio"&&s.name!=null&&wl(o,s),aa(f,u);var w=aa(f,s);for(u=0;u<m.length;u+=2){var E=m[u],T=m[u+1];E==="style"?Cl(o,T):E==="dangerouslySetInnerHTML"?Tl(o,T):E==="children"?Ln(o,T):ae(o,E,T,w)}switch(f){case"input":ra(o,s);break;case"textarea":jl(o,s);break;case"select":var S=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?Qt(o,!!s.multiple,R,!1):S!==!!s.multiple&&(s.defaultValue!=null?Qt(o,!!s.multiple,s.defaultValue,!0):Qt(o,!!s.multiple,s.multiple?[]:"",!1))}o[Jn]=s}catch(A){Ee(e,e.return,A)}}break;case 6:if(Rr(r,e),Wr(e),n&4){if(e.stateNode===null)throw Error(d(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(A){Ee(e,e.return,A)}}break;case 3:if(Rr(r,e),Wr(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Wn(r.containerInfo)}catch(A){Ee(e,e.return,A)}break;case 4:Rr(r,e),Wr(e);break;case 13:Rr(r,e),Wr(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Os=Ne())),n&4&&qd(e);break;case 22:if(E=t!==null&&t.memoizedState!==null,e.mode&1?(Qe=(w=Qe)||E,Rr(r,e),Qe=w):Rr(r,e),Wr(e),n&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!E&&(e.mode&1)!==0)for(P=e,E=e.child;E!==null;){for(T=P=E;P!==null;){switch(S=P,R=S.child,S.tag){case 0:case 11:case 14:case 15:co(4,S,S.return);break;case 1:mn(S,S.return);var z=S.stateNode;if(typeof z.componentWillUnmount=="function"){n=S,t=S.return;try{r=n,z.props=r.memoizedProps,z.state=r.memoizedState,z.componentWillUnmount()}catch(A){Ee(n,t,A)}}break;case 5:mn(S,S.return);break;case 22:if(S.memoizedState!==null){Yd(T);continue}}R!==null?(R.return=S,P=R):Yd(T)}E=E.sibling}e:for(E=null,T=e;;){if(T.tag===5){if(E===null){E=T;try{o=T.stateNode,w?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(f=T.stateNode,m=T.memoizedProps.style,u=m!=null&&m.hasOwnProperty("display")?m.display:null,f.style.display=Nl("display",u))}catch(A){Ee(e,e.return,A)}}}else if(T.tag===6){if(E===null)try{T.stateNode.nodeValue=w?"":T.memoizedProps}catch(A){Ee(e,e.return,A)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===e)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===e)break e;for(;T.sibling===null;){if(T.return===null||T.return===e)break e;E===T&&(E=null),T=T.return}E===T&&(E=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:Rr(r,e),Wr(e),n&4&&qd(e);break;case 21:break;default:Rr(r,e),Wr(e)}}function Wr(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if($d(t)){var n=t;break e}t=t.return}throw Error(d(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Ln(o,""),n.flags&=-33);var s=Ud(e);Is(e,s,o);break;case 3:case 4:var u=n.stateNode.containerInfo,f=Ud(e);Cs(e,f,u);break;default:throw Error(d(161))}}catch(m){Ee(e,e.return,m)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Jf(e,r,t){P=e,Qd(e)}function Qd(e,r,t){for(var n=(e.mode&1)!==0;P!==null;){var o=P,s=o.child;if(o.tag===22&&n){var u=o.memoizedState!==null||hi;if(!u){var f=o.alternate,m=f!==null&&f.memoizedState!==null||Qe;f=hi;var w=Qe;if(hi=u,(Qe=m)&&!w)for(P=o;P!==null;)u=P,m=u.child,u.tag===22&&u.memoizedState!==null?Kd(o):m!==null?(m.return=u,P=m):Kd(o);for(;s!==null;)P=s,Qd(s),s=s.sibling;P=o,hi=f,Qe=w}Gd(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,P=s):Gd(e)}}function Gd(e){for(;P!==null;){var r=P;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Qe||mi(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!Qe)if(t===null)n.componentDidMount();else{var o=r.elementType===r.type?t.memoizedProps:_r(r.type,t.memoizedProps);n.componentDidUpdate(o,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Yc(r,s,n);break;case 3:var u=r.updateQueue;if(u!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Yc(r,u,t)}break;case 5:var f=r.stateNode;if(t===null&&r.flags&4){t=f;var m=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&t.focus();break;case"img":m.src&&(t.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var w=r.alternate;if(w!==null){var E=w.memoizedState;if(E!==null){var T=E.dehydrated;T!==null&&Wn(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}Qe||r.flags&512&&Ns(r)}catch(S){Ee(r,r.return,S)}}if(r===e){P=null;break}if(t=r.sibling,t!==null){t.return=r.return,P=t;break}P=r.return}}function Yd(e){for(;P!==null;){var r=P;if(r===e){P=null;break}var t=r.sibling;if(t!==null){t.return=r.return,P=t;break}P=r.return}}function Kd(e){for(;P!==null;){var r=P;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{mi(4,r)}catch(m){Ee(r,t,m)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var o=r.return;try{n.componentDidMount()}catch(m){Ee(r,o,m)}}var s=r.return;try{Ns(r)}catch(m){Ee(r,s,m)}break;case 5:var u=r.return;try{Ns(r)}catch(m){Ee(r,u,m)}}}catch(m){Ee(r,r.return,m)}if(r===e){P=null;break}var f=r.sibling;if(f!==null){f.return=r.return,P=f;break}P=r.return}}var Zf=Math.ceil,gi=re.ReactCurrentDispatcher,Ls=re.ReactCurrentOwner,wr=re.ReactCurrentBatchConfig,ce=0,ze=null,Ie=null,$e=0,dr=0,gn=st(0),Re=0,uo=null,Ct=0,xi=0,_s=0,po=null,er=null,Os=0,xn=1/0,Jr=null,vi=!1,Rs=null,ft=null,yi=!1,ht=null,wi=0,fo=0,Ps=null,bi=-1,ki=0;function Ke(){return(ce&6)!==0?Ne():bi!==-1?bi:bi=Ne()}function mt(e){return(e.mode&1)===0?1:(ce&2)!==0&&$e!==0?$e&-$e:Af.transition!==null?(ki===0&&(ki=Ul()),ki):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Jl(e.type)),e)}function Pr(e,r,t,n){if(50<fo)throw fo=0,Ps=null,Error(d(185));An(e,t,n),((ce&2)===0||e!==ze)&&(e===ze&&((ce&2)===0&&(xi|=t),Re===4&&gt(e,$e)),rr(e,n),t===1&&ce===0&&(r.mode&1)===0&&(xn=Ne()+500,Ko&&ct()))}function rr(e,r){var t=e.callbackNode;zp(e,r);var n=_o(e,e===ze?$e:0);if(n===0)t!==null&&Bl(t),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(t!=null&&Bl(t),r===1)e.tag===0?zf(Jd.bind(null,e)):Dc(Jd.bind(null,e)),_f(function(){(ce&6)===0&&ct()}),t=null;else{switch(Hl(n)){case 1:t=fa;break;case 4:t=Wl;break;case 16:t=No;break;case 536870912:t=$l;break;default:t=No}t=au(t,Xd.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Xd(e,r){if(bi=-1,ki=0,(ce&6)!==0)throw Error(d(327));var t=e.callbackNode;if(vn()&&e.callbackNode!==t)return null;var n=_o(e,e===ze?$e:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=ji(e,n);else{r=n;var o=ce;ce|=2;var s=eu();(ze!==e||$e!==r)&&(Jr=null,xn=Ne()+500,Lt(e,r));do try{th();break}catch(f){Zd(e,f)}while(!0);Ja(),gi.current=s,ce=o,Ie!==null?r=0:(ze=null,$e=0,r=Re)}if(r!==0){if(r===2&&(o=ha(e),o!==0&&(n=o,r=zs(e,o))),r===1)throw t=uo,Lt(e,0),gt(e,n),rr(e,Ne()),t;if(r===6)gt(e,n);else{if(o=e.current.alternate,(n&30)===0&&!eh(o)&&(r=ji(e,n),r===2&&(s=ha(e),s!==0&&(n=s,r=zs(e,s))),r===1))throw t=uo,Lt(e,0),gt(e,n),rr(e,Ne()),t;switch(e.finishedWork=o,e.finishedLanes=n,r){case 0:case 1:throw Error(d(345));case 2:_t(e,er,Jr);break;case 3:if(gt(e,n),(n&130023424)===n&&(r=Os+500-Ne(),10<r)){if(_o(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Wa(_t.bind(null,e,er,Jr),r);break}_t(e,er,Jr);break;case 4:if(gt(e,n),(n&4194240)===n)break;for(r=e.eventTimes,o=-1;0<n;){var u=31-Cr(n);s=1<<u,u=r[u],u>o&&(o=u),n&=~s}if(n=o,n=Ne()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Zf(n/1960))-n,10<n){e.timeoutHandle=Wa(_t.bind(null,e,er,Jr),n);break}_t(e,er,Jr);break;case 5:_t(e,er,Jr);break;default:throw Error(d(329))}}}return rr(e,Ne()),e.callbackNode===t?Xd.bind(null,e):null}function zs(e,r){var t=po;return e.current.memoizedState.isDehydrated&&(Lt(e,r).flags|=256),e=ji(e,r),e!==2&&(r=er,er=t,r!==null&&As(r)),e}function As(e){er===null?er=e:er.push.apply(er,e)}function eh(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var o=t[n],s=o.getSnapshot;o=o.value;try{if(!Ir(s(),o))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function gt(e,r){for(r&=~_s,r&=~xi,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Cr(r),n=1<<t;e[t]=-1,r&=~n}}function Jd(e){if((ce&6)!==0)throw Error(d(327));vn();var r=_o(e,0);if((r&1)===0)return rr(e,Ne()),null;var t=ji(e,r);if(e.tag!==0&&t===2){var n=ha(e);n!==0&&(r=n,t=zs(e,n))}if(t===1)throw t=uo,Lt(e,0),gt(e,r),rr(e,Ne()),t;if(t===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,_t(e,er,Jr),rr(e,Ne()),null}function Ds(e,r){var t=ce;ce|=1;try{return e(r)}finally{ce=t,ce===0&&(xn=Ne()+500,Ko&&ct())}}function It(e){ht!==null&&ht.tag===0&&(ce&6)===0&&vn();var r=ce;ce|=1;var t=wr.transition,n=ge;try{if(wr.transition=null,ge=1,e)return e()}finally{ge=n,wr.transition=t,ce=r,(ce&6)===0&&ct()}}function Ms(){dr=gn.current,we(gn)}function Lt(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Lf(t)),Ie!==null)for(t=Ie.return;t!==null;){var n=t;switch(Qa(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Go();break;case 3:fn(),we(Xe),we(He),as();break;case 5:os(n);break;case 4:fn();break;case 13:we(je);break;case 19:we(je);break;case 10:Za(n.type._context);break;case 22:case 23:Ms()}t=t.return}if(ze=e,Ie=e=xt(e.current,null),$e=dr=r,Re=0,uo=null,_s=xi=Ct=0,er=po=null,Et!==null){for(r=0;r<Et.length;r++)if(t=Et[r],n=t.interleaved,n!==null){t.interleaved=null;var o=n.next,s=t.pending;if(s!==null){var u=s.next;s.next=o,n.next=u}t.pending=n}Et=null}return e}function Zd(e,r){do{var t=Ie;try{if(Ja(),ai.current=di,si){for(var n=Se.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}si=!1}if(Nt=0,Pe=Oe=Se=null,oo=!1,io=0,Ls.current=null,t===null||t.return===null){Re=1,uo=r,Ie=null;break}e:{var s=e,u=t.return,f=t,m=r;if(r=$e,f.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var w=m,E=f,T=E.tag;if((E.mode&1)===0&&(T===0||T===11||T===15)){var S=E.alternate;S?(E.updateQueue=S.updateQueue,E.memoizedState=S.memoizedState,E.lanes=S.lanes):(E.updateQueue=null,E.memoizedState=null)}var R=Sd(u);if(R!==null){R.flags&=-257,Ed(R,u,f,s,r),R.mode&1&&jd(s,w,r),r=R,m=w;var z=r.updateQueue;if(z===null){var A=new Set;A.add(m),r.updateQueue=A}else z.add(m);break e}else{if((r&1)===0){jd(s,w,r),Fs();break e}m=Error(d(426))}}else if(ke&&f.mode&1){var Ce=Sd(u);if(Ce!==null){(Ce.flags&65536)===0&&(Ce.flags|=256),Ed(Ce,u,f,s,r),Ka(hn(m,f));break e}}s=m=hn(m,f),Re!==4&&(Re=2),po===null?po=[s]:po.push(s),s=u;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var v=bd(s,m,r);Gc(s,v);break e;case 1:f=m;var g=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ft===null||!ft.has(y)))){s.flags|=65536,r&=-r,s.lanes|=r;var N=kd(s,f,r);Gc(s,N);break e}}s=s.return}while(s!==null)}tu(t)}catch(M){r=M,Ie===t&&t!==null&&(Ie=t=t.return);continue}break}while(!0)}function eu(){var e=gi.current;return gi.current=di,e===null?di:e}function Fs(){(Re===0||Re===3||Re===2)&&(Re=4),ze===null||(Ct&268435455)===0&&(xi&268435455)===0||gt(ze,$e)}function ji(e,r){var t=ce;ce|=2;var n=eu();(ze!==e||$e!==r)&&(Jr=null,Lt(e,r));do try{rh();break}catch(o){Zd(e,o)}while(!0);if(Ja(),ce=t,gi.current=n,Ie!==null)throw Error(d(261));return ze=null,$e=0,Re}function rh(){for(;Ie!==null;)ru(Ie)}function th(){for(;Ie!==null&&!Tp();)ru(Ie)}function ru(e){var r=iu(e.alternate,e,dr);e.memoizedProps=e.pendingProps,r===null?tu(e):Ie=r,Ls.current=null}function tu(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=Gf(t,r,dr),t!==null){Ie=t;return}}else{if(t=Yf(t,r),t!==null){t.flags&=32767,Ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Ie=null;return}}if(r=r.sibling,r!==null){Ie=r;return}Ie=r=e}while(r!==null);Re===0&&(Re=5)}function _t(e,r,t){var n=ge,o=wr.transition;try{wr.transition=null,ge=1,nh(e,r,t,n)}finally{wr.transition=o,ge=n}return null}function nh(e,r,t,n){do vn();while(ht!==null);if((ce&6)!==0)throw Error(d(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Ap(e,s),e===ze&&(Ie=ze=null,$e=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||yi||(yi=!0,au(No,function(){return vn(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=wr.transition,wr.transition=null;var u=ge;ge=1;var f=ce;ce|=4,Ls.current=null,Xf(e,t),Vd(t,e),jf(Fa),Po=!!Ma,Fa=Ma=null,e.current=t,Jf(t),Np(),ce=f,ge=u,wr.transition=s}else e.current=t;if(yi&&(yi=!1,ht=e,wi=o),s=e.pendingLanes,s===0&&(ft=null),Lp(t.stateNode),rr(e,Ne()),r!==null)for(n=e.onRecoverableError,t=0;t<r.length;t++)o=r[t],n(o.value,{componentStack:o.stack,digest:o.digest});if(vi)throw vi=!1,e=Rs,Rs=null,e;return(wi&1)!==0&&e.tag!==0&&vn(),s=e.pendingLanes,(s&1)!==0?e===Ps?fo++:(fo=0,Ps=e):fo=0,ct(),null}function vn(){if(ht!==null){var e=Hl(wi),r=wr.transition,t=ge;try{if(wr.transition=null,ge=16>e?16:e,ht===null)var n=!1;else{if(e=ht,ht=null,wi=0,(ce&6)!==0)throw Error(d(331));var o=ce;for(ce|=4,P=e.current;P!==null;){var s=P,u=s.child;if((P.flags&16)!==0){var f=s.deletions;if(f!==null){for(var m=0;m<f.length;m++){var w=f[m];for(P=w;P!==null;){var E=P;switch(E.tag){case 0:case 11:case 15:co(8,E,s)}var T=E.child;if(T!==null)T.return=E,P=T;else for(;P!==null;){E=P;var S=E.sibling,R=E.return;if(Wd(E),E===w){P=null;break}if(S!==null){S.return=R,P=S;break}P=R}}}var z=s.alternate;if(z!==null){var A=z.child;if(A!==null){z.child=null;do{var Ce=A.sibling;A.sibling=null,A=Ce}while(A!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&u!==null)u.return=s,P=u;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:co(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,P=v;break e}P=s.return}}var g=e.current;for(P=g;P!==null;){u=P;var y=u.child;if((u.subtreeFlags&2064)!==0&&y!==null)y.return=u,P=y;else e:for(u=g;P!==null;){if(f=P,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:mi(9,f)}}catch(M){Ee(f,f.return,M)}if(f===u){P=null;break e}var N=f.sibling;if(N!==null){N.return=f.return,P=N;break e}P=f.return}}if(ce=o,ct(),Dr&&typeof Dr.onPostCommitFiberRoot=="function")try{Dr.onPostCommitFiberRoot(Co,e)}catch{}n=!0}return n}finally{ge=t,wr.transition=r}}return!1}function nu(e,r,t){r=hn(t,r),r=bd(e,r,1),e=ut(e,r,1),r=Ke(),e!==null&&(An(e,1,r),rr(e,r))}function Ee(e,r,t){if(e.tag===3)nu(e,e,t);else for(;r!==null;){if(r.tag===3){nu(r,e,t);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ft===null||!ft.has(n))){e=hn(t,e),e=kd(r,e,1),r=ut(r,e,1),e=Ke(),r!==null&&(An(r,1,e),rr(r,e));break}}r=r.return}}function oh(e,r,t){var n=e.pingCache;n!==null&&n.delete(r),r=Ke(),e.pingedLanes|=e.suspendedLanes&t,ze===e&&($e&t)===t&&(Re===4||Re===3&&($e&130023424)===$e&&500>Ne()-Os?Lt(e,0):_s|=t),rr(e,r)}function ou(e,r){r===0&&((e.mode&1)===0?r=1:(r=Lo,Lo<<=1,(Lo&130023424)===0&&(Lo=4194304)));var t=Ke();e=Yr(e,r),e!==null&&(An(e,r,t),rr(e,t))}function ih(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),ou(e,t)}function ah(e,r){var t=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(d(314))}n!==null&&n.delete(r),ou(e,t)}var iu;iu=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||Xe.current)Ze=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return Ze=!1,Qf(e,r,t);Ze=(e.flags&131072)!==0}else Ze=!1,ke&&(r.flags&1048576)!==0&&Mc(r,Jo,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;fi(e,r),e=r.pendingProps;var o=an(r,He.current);pn(r,t),o=cs(null,r,n,e,o,t);var s=ds();return r.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Je(n)?(s=!0,Yo(r)):s=!1,r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ts(r),o.updater=ui,r.stateNode=o,o._reactInternals=r,gs(r,n,e,t),r=ws(null,r,n,!0,s,t)):(r.tag=0,ke&&s&&Va(r),Ye(null,r,o,t),r=r.child),r;case 16:n=r.elementType;e:{switch(fi(e,r),e=r.pendingProps,o=n._init,n=o(n._payload),r.type=n,o=r.tag=lh(n),e=_r(n,e),o){case 0:r=ys(null,r,n,e,t);break e;case 1:r=_d(null,r,n,e,t);break e;case 11:r=Td(null,r,n,e,t);break e;case 14:r=Nd(null,r,n,_r(n.type,e),t);break e}throw Error(d(306,n,""))}return r;case 0:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:_r(n,o),ys(e,r,n,o,t);case 1:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:_r(n,o),_d(e,r,n,o,t);case 3:e:{if(Od(r),e===null)throw Error(d(387));n=r.pendingProps,s=r.memoizedState,o=s.element,Qc(e,r),oi(r,n,null,t);var u=r.memoizedState;if(n=u.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){o=hn(Error(d(423)),r),r=Rd(e,r,n,t,o);break e}else if(n!==o){o=hn(Error(d(424)),r),r=Rd(e,r,n,t,o);break e}else for(cr=at(r.stateNode.containerInfo.firstChild),lr=r,ke=!0,Lr=null,t=qc(r,null,n,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(cn(),n===o){r=Xr(e,r,t);break e}Ye(e,r,n,t)}r=r.child}return r;case 5:return Kc(r),e===null&&Ya(r),n=r.type,o=r.pendingProps,s=e!==null?e.memoizedProps:null,u=o.children,Ba(n,o)?u=null:s!==null&&Ba(n,s)&&(r.flags|=32),Ld(e,r),Ye(e,r,u,t),r.child;case 6:return e===null&&Ya(r),null;case 13:return Pd(e,r,t);case 4:return ns(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=dn(r,null,n,t):Ye(e,r,n,t),r.child;case 11:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:_r(n,o),Td(e,r,n,o,t);case 7:return Ye(e,r,r.pendingProps,t),r.child;case 8:return Ye(e,r,r.pendingProps.children,t),r.child;case 12:return Ye(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(n=r.type._context,o=r.pendingProps,s=r.memoizedProps,u=o.value,ve(ri,n._currentValue),n._currentValue=u,s!==null)if(Ir(s.value,u)){if(s.children===o.children&&!Xe.current){r=Xr(e,r,t);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var f=s.dependencies;if(f!==null){u=s.child;for(var m=f.firstContext;m!==null;){if(m.context===n){if(s.tag===1){m=Kr(-1,t&-t),m.tag=2;var w=s.updateQueue;if(w!==null){w=w.shared;var E=w.pending;E===null?m.next=m:(m.next=E.next,E.next=m),w.pending=m}}s.lanes|=t,m=s.alternate,m!==null&&(m.lanes|=t),es(s.return,t,r),f.lanes|=t;break}m=m.next}}else if(s.tag===10)u=s.type===r.type?null:s.child;else if(s.tag===18){if(u=s.return,u===null)throw Error(d(341));u.lanes|=t,f=u.alternate,f!==null&&(f.lanes|=t),es(u,t,r),u=s.sibling}else u=s.child;if(u!==null)u.return=s;else for(u=s;u!==null;){if(u===r){u=null;break}if(s=u.sibling,s!==null){s.return=u.return,u=s;break}u=u.return}s=u}Ye(e,r,o.children,t),r=r.child}return r;case 9:return o=r.type,n=r.pendingProps.children,pn(r,t),o=vr(o),n=n(o),r.flags|=1,Ye(e,r,n,t),r.child;case 14:return n=r.type,o=_r(n,r.pendingProps),o=_r(n.type,o),Nd(e,r,n,o,t);case 15:return Cd(e,r,r.type,r.pendingProps,t);case 17:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:_r(n,o),fi(e,r),r.tag=1,Je(n)?(e=!0,Yo(r)):e=!1,pn(r,t),yd(r,n,o),gs(r,n,o,t),ws(null,r,n,!0,e,t);case 19:return Ad(e,r,t);case 22:return Id(e,r,t)}throw Error(d(156,r.tag))};function au(e,r){return Fl(e,r)}function sh(e,r,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(e,r,t,n){return new sh(e,r,t,n)}function Bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lh(e){if(typeof e=="function")return Bs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hr)return 11;if(e===mr)return 14}return 2}function xt(e,r){var t=e.alternate;return t===null?(t=br(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Si(e,r,t,n,o,s){var u=2;if(n=e,typeof e=="function")Bs(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case U:return Ot(t.children,o,s,r);case _e:u=8,o|=8;break;case ir:return e=br(12,t,r,o|2),e.elementType=ir,e.lanes=s,e;case Ge:return e=br(13,t,r,o),e.elementType=Ge,e.lanes=s,e;case ar:return e=br(19,t,r,o),e.elementType=ar,e.lanes=s,e;case xe:return Ei(t,o,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tr:u=10;break e;case Ur:u=9;break e;case hr:u=11;break e;case mr:u=14;break e;case Ue:u=16,n=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return r=br(u,t,r,o),r.elementType=e,r.type=n,r.lanes=s,r}function Ot(e,r,t,n){return e=br(7,e,n,r),e.lanes=t,e}function Ei(e,r,t,n){return e=br(22,e,n,r),e.elementType=xe,e.lanes=t,e.stateNode={isHidden:!1},e}function Ws(e,r,t){return e=br(6,e,null,r),e.lanes=t,e}function $s(e,r,t){return r=br(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function ch(e,r,t,n,o){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Us(e,r,t,n,o,s,u,f,m){return e=new ch(e,r,t,f,m),r===1?(r=1,s===!0&&(r|=8)):r=0,s=br(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ts(s),e}function dh(e,r,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:n==null?null:""+n,children:e,containerInfo:r,implementation:t}}function su(e){if(!e)return lt;e=e._reactInternals;e:{if(wt(e)!==e||e.tag!==1)throw Error(d(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Je(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(d(171))}if(e.tag===1){var t=e.type;if(Je(t))return zc(e,t,r)}return r}function lu(e,r,t,n,o,s,u,f,m){return e=Us(t,n,!0,e,o,s,u,f,m),e.context=su(null),t=e.current,n=Ke(),o=mt(t),s=Kr(n,o),s.callback=r!=null?r:null,ut(t,s,o),e.current.lanes=o,An(e,o,n),rr(e,n),e}function Ti(e,r,t,n){var o=r.current,s=Ke(),u=mt(o);return t=su(t),r.context===null?r.context=t:r.pendingContext=t,r=Kr(s,u),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=ut(o,r,u),e!==null&&(Pr(e,o,u,s),ni(e,o,u)),u}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function Hs(e,r){cu(e,r),(e=e.alternate)&&cu(e,r)}function uh(){return null}var du=typeof reportError=="function"?reportError:function(e){console.error(e)};function qs(e){this._internalRoot=e}Ci.prototype.render=qs.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(d(409));Ti(e,r,null,null)},Ci.prototype.unmount=qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;It(function(){Ti(null,e,null,null)}),r[qr]=null}};function Ci(e){this._internalRoot=e}Ci.prototype.unstable_scheduleHydration=function(e){if(e){var r=Ql();e={blockedOn:null,target:e,priority:r};for(var t=0;t<nt.length&&r!==0&&r<nt[t].priority;t++);nt.splice(t,0,e),t===0&&Kl(e)}};function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uu(){}function ph(e,r,t,n,o){if(o){if(typeof n=="function"){var s=n;n=function(){var w=Ni(u);s.call(w)}}var u=lu(r,n,e,0,null,!1,!1,"",uu);return e._reactRootContainer=u,e[qr]=u.current,Kn(e.nodeType===8?e.parentNode:e),It(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var f=n;n=function(){var w=Ni(m);f.call(w)}}var m=Us(e,0,!1,null,null,!1,!1,"",uu);return e._reactRootContainer=m,e[qr]=m.current,Kn(e.nodeType===8?e.parentNode:e),It(function(){Ti(r,m,t,n)}),m}function Li(e,r,t,n,o){var s=t._reactRootContainer;if(s){var u=s;if(typeof o=="function"){var f=o;o=function(){var m=Ni(u);f.call(m)}}Ti(r,u,e,o)}else u=ph(t,r,e,o,n);return Ni(u)}ql=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=zn(r.pendingLanes);t!==0&&(ga(r,t|1),rr(r,Ne()),(ce&6)===0&&(xn=Ne()+500,ct()))}break;case 13:It(function(){var n=Yr(e,1);if(n!==null){var o=Ke();Pr(n,e,1,o)}}),Hs(e,1)}},xa=function(e){if(e.tag===13){var r=Yr(e,134217728);if(r!==null){var t=Ke();Pr(r,e,134217728,t)}Hs(e,134217728)}},Vl=function(e){if(e.tag===13){var r=mt(e),t=Yr(e,r);if(t!==null){var n=Ke();Pr(t,e,r,n)}Hs(e,r)}},Ql=function(){return ge},Gl=function(e,r){var t=ge;try{return ge=e,r()}finally{ge=t}},ca=function(e,r,t){switch(r){case"input":if(ra(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var n=t[r];if(n!==e&&n.form===e.form){var o=Qo(n);if(!o)throw Error(d(90));Nr(n),ra(n,o)}}}break;case"textarea":jl(e,t);break;case"select":r=t.value,r!=null&&Qt(e,!!t.multiple,r,!1)}},Ol=Ds,Rl=It;var fh={usingClientEntryPoint:!1,Events:[Zn,nn,Qo,Ll,_l,Ds]},ho={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hh={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dl(e),e===null?null:e.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||uh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{Co=_i.inject(hh),Dr=_i}catch{}}return tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh,tr.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vs(r))throw Error(d(200));return dh(e,r,null,t)},tr.createRoot=function(e,r){if(!Vs(e))throw Error(d(299));var t=!1,n="",o=du;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),r=Us(e,1,!1,null,null,t,!1,n,o),e[qr]=r.current,Kn(e.nodeType===8?e.parentNode:e),new qs(r)},tr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=Dl(r),e=e===null?null:e.stateNode,e},tr.flushSync=function(e){return It(e)},tr.hydrate=function(e,r,t){if(!Ii(r))throw Error(d(200));return Li(null,e,r,!0,t)},tr.hydrateRoot=function(e,r,t){if(!Vs(e))throw Error(d(405));var n=t!=null&&t.hydratedSources||null,o=!1,s="",u=du;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),r=lu(r,null,e,1,t!=null?t:null,o,!1,s,u),e[qr]=r.current,Kn(e),n)for(e=0;e<n.length;e++)t=n[e],o=t._getVersion,o=o(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,o]:r.mutableSourceEagerHydrationData.push(t,o);return new Ci(r)},tr.render=function(e,r,t){if(!Ii(r))throw Error(d(200));return Li(null,e,r,!1,t)},tr.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(d(40));return e._reactRootContainer?(It(function(){Li(null,null,e,!1,function(){e._reactRootContainer=null,e[qr]=null})}),!0):!1},tr.unstable_batchedUpdates=Ds,tr.unstable_renderSubtreeIntoContainer=function(e,r,t,n){if(!Ii(t))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return Li(e,r,t,!1,n)},tr.version="18.3.1-next-f1338f8080-20240426",tr}var yu;function jh(){if(yu)return Ys.exports;yu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Ys.exports=kh(),Ys.exports}var wu;function Sh(){if(wu)return Oi;wu=1;var i=jh();return Oi.createRoot=i.createRoot,Oi.hydrateRoot=i.hydrateRoot,Oi}var Eh=Sh(),H=ul();const kr=gh(H);var nr=function(){return nr=Object.assign||function(c){for(var d,l=1,p=arguments.length;l<p;l++){d=arguments[l];for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(c[h]=d[h])}return c},nr.apply(this,arguments)};function Wi(i,c,d){if(d||arguments.length===2)for(var l=0,p=c.length,h;l<p;l++)(h||!(l in c))&&(h||(h=Array.prototype.slice.call(c,0,l)),h[l]=c[l]);return i.concat(h||Array.prototype.slice.call(c))}var be="-ms-",xo="-moz-",me="-webkit-",Wu="comm",Gi="rule",pl="decl",Th="@import",$u="@keyframes",Nh="@layer",Uu=Math.abs,fl=String.fromCharCode,nl=Object.assign;function Ch(i,c){return Me(i,0)^45?(((c<<2^Me(i,0))<<2^Me(i,1))<<2^Me(i,2))<<2^Me(i,3):0}function Hu(i){return i.trim()}function Zr(i,c){return(i=c.exec(i))?i[0]:i}function ee(i,c,d){return i.replace(c,d)}function zi(i,c,d){return i.indexOf(c,d)}function Me(i,c){return i.charCodeAt(c)|0}function bn(i,c,d){return i.slice(c,d)}function $r(i){return i.length}function qu(i){return i.length}function go(i,c){return c.push(i),i}function Ih(i,c){return i.map(c).join("")}function bu(i,c){return i.filter(function(d){return!Zr(d,c)})}var Yi=1,kn=1,Vu=0,jr=0,Le=0,Nn="";function Ki(i,c,d,l,p,h,b,_){return{value:i,root:c,parent:d,type:l,props:p,children:h,line:Yi,column:kn,length:b,return:"",siblings:_}}function yt(i,c){return nl(Ki("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},c)}function yn(i){for(;i.root;)i=yt(i.root,{children:[i]});go(i,i.siblings)}function Lh(){return Le}function _h(){return Le=jr>0?Me(Nn,--jr):0,kn--,Le===10&&(kn=1,Yi--),Le}function zr(){return Le=jr<Vu?Me(Nn,jr++):0,kn++,Le===10&&(kn=1,Yi++),Le}function qt(){return Me(Nn,jr)}function Ai(){return jr}function Xi(i,c){return bn(Nn,i,c)}function ol(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Oh(i){return Yi=kn=1,Vu=$r(Nn=i),jr=0,[]}function Rh(i){return Nn="",i}function Js(i){return Hu(Xi(jr-1,il(i===91?i+2:i===40?i+1:i)))}function Ph(i){for(;(Le=qt())&&Le<33;)zr();return ol(i)>2||ol(Le)>3?"":" "}function zh(i,c){for(;--c&&zr()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Xi(i,Ai()+(c<6&&qt()==32&&zr()==32))}function il(i){for(;zr();)switch(Le){case i:return jr;case 34:case 39:i!==34&&i!==39&&il(Le);break;case 40:i===41&&il(i);break;case 92:zr();break}return jr}function Ah(i,c){for(;zr()&&i+Le!==57;)if(i+Le===84&&qt()===47)break;return"/*"+Xi(c,jr-1)+"*"+fl(i===47?i:zr())}function Dh(i){for(;!ol(qt());)zr();return Xi(i,jr)}function Mh(i){return Rh(Di("",null,null,null,[""],i=Oh(i),0,[0],i))}function Di(i,c,d,l,p,h,b,_,C){for(var q=0,L=0,D=b,B=0,Y=0,ie=0,Q=1,J=1,he=1,le=0,ae="",re=p,pe=h,K=l,U=ae;J;)switch(ie=le,le=zr()){case 40:if(ie!=108&&Me(U,D-1)==58){zi(U+=ee(Js(le),"&","&\f"),"&\f",Uu(q?_[q-1]:0))!=-1&&(he=-1);break}case 34:case 39:case 91:U+=Js(le);break;case 9:case 10:case 13:case 32:U+=Ph(ie);break;case 92:U+=zh(Ai()-1,7);continue;case 47:switch(qt()){case 42:case 47:go(Fh(Ah(zr(),Ai()),c,d,C),C);break;default:U+="/"}break;case 123*Q:_[q++]=$r(U)*he;case 125*Q:case 59:case 0:switch(le){case 0:case 125:J=0;case 59+L:he==-1&&(U=ee(U,/\f/g,"")),Y>0&&$r(U)-D&&go(Y>32?ju(U+";",l,d,D-1,C):ju(ee(U," ","")+";",l,d,D-2,C),C);break;case 59:U+=";";default:if(go(K=ku(U,c,d,q,L,p,_,ae,re=[],pe=[],D,h),h),le===123)if(L===0)Di(U,c,K,K,re,h,D,_,pe);else switch(B===99&&Me(U,3)===110?100:B){case 100:case 108:case 109:case 115:Di(i,K,K,l&&go(ku(i,K,K,0,0,p,_,ae,p,re=[],D,pe),pe),p,pe,D,_,l?re:pe);break;default:Di(U,K,K,K,[""],pe,0,_,pe)}}q=L=Y=0,Q=he=1,ae=U="",D=b;break;case 58:D=1+$r(U),Y=ie;default:if(Q<1){if(le==123)--Q;else if(le==125&&Q++==0&&_h()==125)continue}switch(U+=fl(le),le*Q){case 38:he=L>0?1:(U+="\f",-1);break;case 44:_[q++]=($r(U)-1)*he,he=1;break;case 64:qt()===45&&(U+=Js(zr())),B=qt(),L=D=$r(ae=U+=Dh(Ai())),le++;break;case 45:ie===45&&$r(U)==2&&(Q=0)}}return h}function ku(i,c,d,l,p,h,b,_,C,q,L,D){for(var B=p-1,Y=p===0?h:[""],ie=qu(Y),Q=0,J=0,he=0;Q<l;++Q)for(var le=0,ae=bn(i,B+1,B=Uu(J=b[Q])),re=i;le<ie;++le)(re=Hu(J>0?Y[le]+" "+ae:ee(ae,/&\f/g,Y[le])))&&(C[he++]=re);return Ki(i,c,d,p===0?Gi:_,C,q,L,D)}function Fh(i,c,d,l){return Ki(i,c,d,Wu,fl(Lh()),bn(i,2,-2),0,l)}function ju(i,c,d,l,p){return Ki(i,c,d,pl,bn(i,0,l),bn(i,l+1,-1),l,p)}function Qu(i,c,d){switch(Ch(i,c)){case 5103:return me+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+i+i;case 4789:return xo+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return me+i+xo+i+be+i+i;case 5936:switch(Me(i,c+11)){case 114:return me+i+be+ee(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return me+i+be+ee(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return me+i+be+ee(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return me+i+be+i+i;case 6165:return me+i+be+"flex-"+i+i;case 5187:return me+i+ee(i,/(\w+).+(:[^]+)/,me+"box-$1$2"+be+"flex-$1$2")+i;case 5443:return me+i+be+"flex-item-"+ee(i,/flex-|-self/g,"")+(Zr(i,/flex-|baseline/)?"":be+"grid-row-"+ee(i,/flex-|-self/g,""))+i;case 4675:return me+i+be+"flex-line-pack"+ee(i,/align-content|flex-|-self/g,"")+i;case 5548:return me+i+be+ee(i,"shrink","negative")+i;case 5292:return me+i+be+ee(i,"basis","preferred-size")+i;case 6060:return me+"box-"+ee(i,"-grow","")+me+i+be+ee(i,"grow","positive")+i;case 4554:return me+ee(i,/([^-])(transform)/g,"$1"+me+"$2")+i;case 6187:return ee(ee(ee(i,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),i,"")+i;case 5495:case 3959:return ee(i,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ee(ee(i,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+i+i;case 4200:if(!Zr(i,/flex-|baseline/))return be+"grid-column-align"+bn(i,c)+i;break;case 2592:case 3360:return be+ee(i,"template-","")+i;case 4384:case 3616:return d&&d.some(function(l,p){return c=p,Zr(l.props,/grid-\w+-end/)})?~zi(i+(d=d[c].value),"span",0)?i:be+ee(i,"-start","")+i+be+"grid-row-span:"+(~zi(d,"span",0)?Zr(d,/\d+/):+Zr(d,/\d+/)-+Zr(i,/\d+/))+";":be+ee(i,"-start","")+i;case 4896:case 4128:return d&&d.some(function(l){return Zr(l.props,/grid-\w+-start/)})?i:be+ee(ee(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return ee(i,/(.+)-inline(.+)/,me+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($r(i)-1-c>6)switch(Me(i,c+1)){case 109:if(Me(i,c+4)!==45)break;case 102:return ee(i,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+xo+(Me(i,c+3)==108?"$3":"$2-$3"))+i;case 115:return~zi(i,"stretch",0)?Qu(ee(i,"stretch","fill-available"),c,d)+i:i}break;case 5152:case 5920:return ee(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,p,h,b,_,C,q){return be+p+":"+h+q+(b?be+p+"-span:"+(_?C:+C-+h)+q:"")+i});case 4949:if(Me(i,c+6)===121)return ee(i,":",":"+me)+i;break;case 6444:switch(Me(i,Me(i,14)===45?18:11)){case 120:return ee(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(Me(i,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+be+"$2box$3")+i;case 100:return ee(i,":",":"+be)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(i,"scroll-","scroll-snap-")+i}return i}function $i(i,c){for(var d="",l=0;l<i.length;l++)d+=c(i[l],l,i,c)||"";return d}function Bh(i,c,d,l){switch(i.type){case Nh:if(i.children.length)break;case Th:case pl:return i.return=i.return||i.value;case Wu:return"";case $u:return i.return=i.value+"{"+$i(i.children,l)+"}";case Gi:if(!$r(i.value=i.props.join(",")))return""}return $r(d=$i(i.children,l))?i.return=i.value+"{"+d+"}":""}function Wh(i){var c=qu(i);return function(d,l,p,h){for(var b="",_=0;_<c;_++)b+=i[_](d,l,p,h)||"";return b}}function $h(i){return function(c){c.root||(c=c.return)&&i(c)}}function Uh(i,c,d,l){if(i.length>-1&&!i.return)switch(i.type){case pl:i.return=Qu(i.value,i.length,d);return;case $u:return $i([yt(i,{value:ee(i.value,"@","@"+me)})],l);case Gi:if(i.length)return Ih(d=i.props,function(p){switch(Zr(p,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yn(yt(i,{props:[ee(p,/:(read-\w+)/,":"+xo+"$1")]})),yn(yt(i,{props:[p]})),nl(i,{props:bu(d,l)});break;case"::placeholder":yn(yt(i,{props:[ee(p,/:(plac\w+)/,":"+me+"input-$1")]})),yn(yt(i,{props:[ee(p,/:(plac\w+)/,":"+xo+"$1")]})),yn(yt(i,{props:[ee(p,/:(plac\w+)/,be+"input-$1")]})),yn(yt(i,{props:[p]})),nl(i,{props:bu(d,l)});break}return""})}}var Hh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ur={},jn=typeof process!="undefined"&&ur!==void 0&&(ur.REACT_APP_SC_ATTR||ur.SC_ATTR)||"data-styled",Gu="active",Yu="data-styled-version",Ji="6.1.18",hl=`/*!sc*/
`,Ui=typeof window!="undefined"&&typeof document!="undefined",qh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&ur!==void 0&&ur.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ur.REACT_APP_SC_DISABLE_SPEEDY!==""?ur.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ur.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&ur!==void 0&&ur.SC_DISABLE_SPEEDY!==void 0&&ur.SC_DISABLE_SPEEDY!==""&&ur.SC_DISABLE_SPEEDY!=="false"&&ur.SC_DISABLE_SPEEDY),Zi=Object.freeze([]),Sn=Object.freeze({});function Vh(i,c,d){return d===void 0&&(d=Sn),i.theme!==d.theme&&i.theme||c||d.theme}var Ku=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gh=/(^-|-$)/g;function Su(i){return i.replace(Qh,"-").replace(Gh,"")}var Yh=/(a)(d)/gi,Ri=52,Eu=function(i){return String.fromCharCode(i+(i>25?39:97))};function al(i){var c,d="";for(c=Math.abs(i);c>Ri;c=c/Ri|0)d=Eu(c%Ri)+d;return(Eu(c%Ri)+d).replace(Yh,"$1-$2")}var Zs,Xu=5381,wn=function(i,c){for(var d=c.length;d;)i=33*i^c.charCodeAt(--d);return i},Ju=function(i){return wn(Xu,i)};function Kh(i){return al(Ju(i)>>>0)}function Xh(i){return i.displayName||i.name||"Component"}function el(i){return typeof i=="string"&&!0}var Zu=typeof Symbol=="function"&&Symbol.for,ep=Zu?Symbol.for("react.memo"):60115,Jh=Zu?Symbol.for("react.forward_ref"):60112,Zh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},em={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rm=((Zs={})[Jh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zs[ep]=rp,Zs);function Tu(i){return("type"in(c=i)&&c.type.$$typeof)===ep?rp:"$$typeof"in i?rm[i.$$typeof]:Zh;var c}var tm=Object.defineProperty,nm=Object.getOwnPropertyNames,Nu=Object.getOwnPropertySymbols,om=Object.getOwnPropertyDescriptor,im=Object.getPrototypeOf,Cu=Object.prototype;function tp(i,c,d){if(typeof c!="string"){if(Cu){var l=im(c);l&&l!==Cu&&tp(i,l,d)}var p=nm(c);Nu&&(p=p.concat(Nu(c)));for(var h=Tu(i),b=Tu(c),_=0;_<p.length;++_){var C=p[_];if(!(C in em||d&&d[C]||b&&C in b||h&&C in h)){var q=om(c,C);try{tm(i,C,q)}catch{}}}}return i}function En(i){return typeof i=="function"}function ml(i){return typeof i=="object"&&"styledComponentId"in i}function Ht(i,c){return i&&c?"".concat(i," ").concat(c):i||c||""}function Iu(i,c){if(i.length===0)return"";for(var d=i[0],l=1;l<i.length;l++)d+=i[l];return d}function yo(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function sl(i,c,d){if(d===void 0&&(d=!1),!d&&!yo(i)&&!Array.isArray(i))return c;if(Array.isArray(c))for(var l=0;l<c.length;l++)i[l]=sl(i[l],c[l]);else if(yo(c))for(var l in c)i[l]=sl(i[l],c[l]);return i}function gl(i,c){Object.defineProperty(i,"toString",{value:c})}function ko(i){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var am=(function(){function i(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return i.prototype.indexOfGroup=function(c){for(var d=0,l=0;l<c;l++)d+=this.groupSizes[l];return d},i.prototype.insertRules=function(c,d){if(c>=this.groupSizes.length){for(var l=this.groupSizes,p=l.length,h=p;c>=h;)if((h<<=1)<0)throw ko(16,"".concat(c));this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(var b=p;b<h;b++)this.groupSizes[b]=0}for(var _=this.indexOfGroup(c+1),C=(b=0,d.length);b<C;b++)this.tag.insertRule(_,d[b])&&(this.groupSizes[c]++,_++)},i.prototype.clearGroup=function(c){if(c<this.length){var d=this.groupSizes[c],l=this.indexOfGroup(c),p=l+d;this.groupSizes[c]=0;for(var h=l;h<p;h++)this.tag.deleteRule(l)}},i.prototype.getGroup=function(c){var d="";if(c>=this.length||this.groupSizes[c]===0)return d;for(var l=this.groupSizes[c],p=this.indexOfGroup(c),h=p+l,b=p;b<h;b++)d+="".concat(this.tag.getRule(b)).concat(hl);return d},i})(),Mi=new Map,Hi=new Map,Fi=1,Pi=function(i){if(Mi.has(i))return Mi.get(i);for(;Hi.has(Fi);)Fi++;var c=Fi++;return Mi.set(i,c),Hi.set(c,i),c},sm=function(i,c){Fi=c+1,Mi.set(i,c),Hi.set(c,i)},lm="style[".concat(jn,"][").concat(Yu,'="').concat(Ji,'"]'),cm=new RegExp("^".concat(jn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dm=function(i,c,d){for(var l,p=d.split(","),h=0,b=p.length;h<b;h++)(l=p[h])&&i.registerName(c,l)},um=function(i,c){for(var d,l=((d=c.textContent)!==null&&d!==void 0?d:"").split(hl),p=[],h=0,b=l.length;h<b;h++){var _=l[h].trim();if(_){var C=_.match(cm);if(C){var q=0|parseInt(C[1],10),L=C[2];q!==0&&(sm(L,q),dm(i,L,C[3]),i.getTag().insertRules(q,p)),p.length=0}else p.push(_)}}},Lu=function(i){for(var c=document.querySelectorAll(lm),d=0,l=c.length;d<l;d++){var p=c[d];p&&p.getAttribute(jn)!==Gu&&(um(i,p),p.parentNode&&p.parentNode.removeChild(p))}};function pm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var np=function(i){var c=document.head,d=i||c,l=document.createElement("style"),p=(function(_){var C=Array.from(_.querySelectorAll("style[".concat(jn,"]")));return C[C.length-1]})(d),h=p!==void 0?p.nextSibling:null;l.setAttribute(jn,Gu),l.setAttribute(Yu,Ji);var b=pm();return b&&l.setAttribute("nonce",b),d.insertBefore(l,h),l},fm=(function(){function i(c){this.element=np(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(d){if(d.sheet)return d.sheet;for(var l=document.styleSheets,p=0,h=l.length;p<h;p++){var b=l[p];if(b.ownerNode===d)return b}throw ko(17)})(this.element),this.length=0}return i.prototype.insertRule=function(c,d){try{return this.sheet.insertRule(d,c),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},i.prototype.getRule=function(c){var d=this.sheet.cssRules[c];return d&&d.cssText?d.cssText:""},i})(),hm=(function(){function i(c){this.element=np(c),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(c,d){if(c<=this.length&&c>=0){var l=document.createTextNode(d);return this.element.insertBefore(l,this.nodes[c]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},i.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},i})(),mm=(function(){function i(c){this.rules=[],this.length=0}return i.prototype.insertRule=function(c,d){return c<=this.length&&(this.rules.splice(c,0,d),this.length++,!0)},i.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},i.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},i})(),_u=Ui,gm={isServer:!Ui,useCSSOMInjection:!qh},op=(function(){function i(c,d,l){c===void 0&&(c=Sn),d===void 0&&(d={});var p=this;this.options=nr(nr({},gm),c),this.gs=d,this.names=new Map(l),this.server=!!c.isServer,!this.server&&Ui&&_u&&(_u=!1,Lu(this)),gl(this,function(){return(function(h){for(var b=h.getTag(),_=b.length,C="",q=function(D){var B=(function(he){return Hi.get(he)})(D);if(B===void 0)return"continue";var Y=h.names.get(B),ie=b.getGroup(D);if(Y===void 0||!Y.size||ie.length===0)return"continue";var Q="".concat(jn,".g").concat(D,'[id="').concat(B,'"]'),J="";Y!==void 0&&Y.forEach(function(he){he.length>0&&(J+="".concat(he,","))}),C+="".concat(ie).concat(Q,'{content:"').concat(J,'"}').concat(hl)},L=0;L<_;L++)q(L);return C})(p)})}return i.registerId=function(c){return Pi(c)},i.prototype.rehydrate=function(){!this.server&&Ui&&Lu(this)},i.prototype.reconstructWithOptions=function(c,d){return d===void 0&&(d=!0),new i(nr(nr({},this.options),c),this.gs,d&&this.names||void 0)},i.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(d){var l=d.useCSSOMInjection,p=d.target;return d.isServer?new mm(p):l?new fm(p):new hm(p)})(this.options),new am(c)));var c},i.prototype.hasNameForId=function(c,d){return this.names.has(c)&&this.names.get(c).has(d)},i.prototype.registerName=function(c,d){if(Pi(c),this.names.has(c))this.names.get(c).add(d);else{var l=new Set;l.add(d),this.names.set(c,l)}},i.prototype.insertRules=function(c,d,l){this.registerName(c,d),this.getTag().insertRules(Pi(c),l)},i.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},i.prototype.clearRules=function(c){this.getTag().clearGroup(Pi(c)),this.clearNames(c)},i.prototype.clearTag=function(){this.tag=void 0},i})(),xm=/&/g,vm=/^\s*\/\/.*$/gm;function ip(i,c){return i.map(function(d){return d.type==="rule"&&(d.value="".concat(c," ").concat(d.value),d.value=d.value.replaceAll(",",",".concat(c," ")),d.props=d.props.map(function(l){return"".concat(c," ").concat(l)})),Array.isArray(d.children)&&d.type!=="@keyframes"&&(d.children=ip(d.children,c)),d})}function ym(i){var c,d,l,p=Sn,h=p.options,b=h===void 0?Sn:h,_=p.plugins,C=_===void 0?Zi:_,q=function(B,Y,ie){return ie.startsWith(d)&&ie.endsWith(d)&&ie.replaceAll(d,"").length>0?".".concat(c):B},L=C.slice();L.push(function(B){B.type===Gi&&B.value.includes("&")&&(B.props[0]=B.props[0].replace(xm,d).replace(l,q))}),b.prefix&&L.push(Uh),L.push(Bh);var D=function(B,Y,ie,Q){Y===void 0&&(Y=""),ie===void 0&&(ie=""),Q===void 0&&(Q="&"),c=Q,d=Y,l=new RegExp("\\".concat(d,"\\b"),"g");var J=B.replace(vm,""),he=Mh(ie||Y?"".concat(ie," ").concat(Y," { ").concat(J," }"):J);b.namespace&&(he=ip(he,b.namespace));var le=[];return $i(he,Wh(L.concat($h(function(ae){return le.push(ae)})))),le};return D.hash=C.length?C.reduce(function(B,Y){return Y.name||ko(15),wn(B,Y.name)},Xu).toString():"",D}var wm=new op,ll=ym(),ap=kr.createContext({shouldForwardProp:void 0,styleSheet:wm,stylis:ll});ap.Consumer;kr.createContext(void 0);function Ou(){return H.useContext(ap)}var bm=(function(){function i(c,d){var l=this;this.inject=function(p,h){h===void 0&&(h=ll);var b=l.name+h.hash;p.hasNameForId(l.id,b)||p.insertRules(l.id,b,h(l.rules,b,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=d,gl(this,function(){throw ko(12,String(l.name))})}return i.prototype.getName=function(c){return c===void 0&&(c=ll),this.name+c.hash},i})(),km=function(i){return i>="A"&&i<="Z"};function Ru(i){for(var c="",d=0;d<i.length;d++){var l=i[d];if(d===1&&l==="-"&&i[0]==="-")return i;km(l)?c+="-"+l.toLowerCase():c+=l}return c.startsWith("ms-")?"-"+c:c}var sp=function(i){return i==null||i===!1||i===""},lp=function(i){var c,d,l=[];for(var p in i){var h=i[p];i.hasOwnProperty(p)&&!sp(h)&&(Array.isArray(h)&&h.isCss||En(h)?l.push("".concat(Ru(p),":"),h,";"):yo(h)?l.push.apply(l,Wi(Wi(["".concat(p," {")],lp(h),!1),["}"],!1)):l.push("".concat(Ru(p),": ").concat((c=p,(d=h)==null||typeof d=="boolean"||d===""?"":typeof d!="number"||d===0||c in Hh||c.startsWith("--")?String(d).trim():"".concat(d,"px")),";")))}return l};function Vt(i,c,d,l){if(sp(i))return[];if(ml(i))return[".".concat(i.styledComponentId)];if(En(i)){if(!En(h=i)||h.prototype&&h.prototype.isReactComponent||!c)return[i];var p=i(c);return Vt(p,c,d,l)}var h;return i instanceof bm?d?(i.inject(d,l),[i.getName(l)]):[i]:yo(i)?lp(i):Array.isArray(i)?Array.prototype.concat.apply(Zi,i.map(function(b){return Vt(b,c,d,l)})):[i.toString()]}function jm(i){for(var c=0;c<i.length;c+=1){var d=i[c];if(En(d)&&!ml(d))return!1}return!0}var Sm=Ju(Ji),Em=(function(){function i(c,d,l){this.rules=c,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&jm(c),this.componentId=d,this.baseHash=wn(Sm,d),this.baseStyle=l,op.registerId(d)}return i.prototype.generateAndInjectStyles=function(c,d,l){var p=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,d,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&d.hasNameForId(this.componentId,this.staticRulesId))p=Ht(p,this.staticRulesId);else{var h=Iu(Vt(this.rules,c,d,l)),b=al(wn(this.baseHash,h)>>>0);if(!d.hasNameForId(this.componentId,b)){var _=l(h,".".concat(b),void 0,this.componentId);d.insertRules(this.componentId,b,_)}p=Ht(p,b),this.staticRulesId=b}else{for(var C=wn(this.baseHash,l.hash),q="",L=0;L<this.rules.length;L++){var D=this.rules[L];if(typeof D=="string")q+=D;else if(D){var B=Iu(Vt(D,c,d,l));C=wn(C,B+L),q+=B}}if(q){var Y=al(C>>>0);d.hasNameForId(this.componentId,Y)||d.insertRules(this.componentId,Y,l(q,".".concat(Y),void 0,this.componentId)),p=Ht(p,Y)}}return p},i})(),cp=kr.createContext(void 0);cp.Consumer;var rl={};function Tm(i,c,d){var l=ml(i),p=i,h=!el(i),b=c.attrs,_=b===void 0?Zi:b,C=c.componentId,q=C===void 0?(function(re,pe){var K=typeof re!="string"?"sc":Su(re);rl[K]=(rl[K]||0)+1;var U="".concat(K,"-").concat(Kh(Ji+K+rl[K]));return pe?"".concat(pe,"-").concat(U):U})(c.displayName,c.parentComponentId):C,L=c.displayName,D=L===void 0?(function(re){return el(re)?"styled.".concat(re):"Styled(".concat(Xh(re),")")})(i):L,B=c.displayName&&c.componentId?"".concat(Su(c.displayName),"-").concat(c.componentId):c.componentId||q,Y=l&&p.attrs?p.attrs.concat(_).filter(Boolean):_,ie=c.shouldForwardProp;if(l&&p.shouldForwardProp){var Q=p.shouldForwardProp;if(c.shouldForwardProp){var J=c.shouldForwardProp;ie=function(re,pe){return Q(re,pe)&&J(re,pe)}}else ie=Q}var he=new Em(d,B,l?p.componentStyle:void 0);function le(re,pe){return(function(K,U,_e){var ir=K.attrs,Tr=K.componentStyle,Ur=K.defaultProps,hr=K.foldedComponentIds,Ge=K.styledComponentId,ar=K.target,mr=kr.useContext(cp),Ue=Ou(),xe=K.shouldForwardProp||Ue.shouldForwardProp,I=Vh(U,mr,Ur)||Sn,F=(function(oe,te,fe){for(var se,de=nr(nr({},te),{className:void 0,theme:fe}),Be=0;Be<oe.length;Be+=1){var Hr=En(se=oe[Be])?se(de):se;for(var Nr in Hr)de[Nr]=Nr==="className"?Ht(de[Nr],Hr[Nr]):Nr==="style"?nr(nr({},de[Nr]),Hr[Nr]):Hr[Nr]}return te.className&&(de.className=Ht(de.className,te.className)),de})(ir,U,I),O=F.as||ar,x={};for(var k in F)F[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&F.theme===I||(k==="forwardedAs"?x.as=F.forwardedAs:xe&&!xe(k,O)||(x[k]=F[k]));var X=(function(oe,te){var fe=Ou(),se=oe.generateAndInjectStyles(te,fe.styleSheet,fe.stylis);return se})(Tr,F),Z=Ht(hr,Ge);return X&&(Z+=" "+X),F.className&&(Z+=" "+F.className),x[el(O)&&!Ku.has(O)?"class":"className"]=Z,_e&&(x.ref=_e),H.createElement(O,x)})(ae,re,pe)}le.displayName=D;var ae=kr.forwardRef(le);return ae.attrs=Y,ae.componentStyle=he,ae.displayName=D,ae.shouldForwardProp=ie,ae.foldedComponentIds=l?Ht(p.foldedComponentIds,p.styledComponentId):"",ae.styledComponentId=B,ae.target=l?p.target:i,Object.defineProperty(ae,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(re){this._foldedDefaultProps=l?(function(pe){for(var K=[],U=1;U<arguments.length;U++)K[U-1]=arguments[U];for(var _e=0,ir=K;_e<ir.length;_e++)sl(pe,ir[_e],!0);return pe})({},p.defaultProps,re):re}}),gl(ae,function(){return".".concat(ae.styledComponentId)}),h&&tp(ae,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ae}function Pu(i,c){for(var d=[i[0]],l=0,p=c.length;l<p;l+=1)d.push(c[l],i[l+1]);return d}var zu=function(i){return Object.assign(i,{isCss:!0})};function Nm(i){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];if(En(i)||yo(i))return zu(Vt(Pu(Zi,Wi([i],c,!0))));var l=i;return c.length===0&&l.length===1&&typeof l[0]=="string"?Vt(l):zu(Vt(Pu(l,c)))}function cl(i,c,d){if(d===void 0&&(d=Sn),!c)throw ko(1,c);var l=function(p){for(var h=[],b=1;b<arguments.length;b++)h[b-1]=arguments[b];return i(c,d,Nm.apply(void 0,Wi([p],h,!1)))};return l.attrs=function(p){return cl(i,c,nr(nr({},d),{attrs:Array.prototype.concat(d.attrs,p).filter(Boolean)}))},l.withConfig=function(p){return cl(i,c,nr(nr({},d),p))},l}var dp=function(i){return cl(Tm,i)},j=dp;Ku.forEach(function(i){j[i]=dp(i)});const tl={Wrapper:j.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:j.header`
        height: 64px;
        flex-shrink: 0;
    `,Main:j.main`
        flex: 1;
        overflow-y: auto;
        position: relative;

        .studyNav {
            position: fixed;
            top: 64px;
            bottom: 0;
            left: 0;
            width: 248px;
            padding: 22px 14px;
            overflow-y: auto;
            background: var(--color-surface-2);
            border-right: 1px solid var(--color-border);
            z-index: 4;
        }
        .studyNavLabel { padding: 0 10px 10px; color: var(--color-text-muted); font-size: 11px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
        .studyNav nav { display: grid; gap: 4px; }
        .studyNav button { display: flex; align-items: center; gap: 10px; width: 100%; padding: 10px; border-radius: 10px; color: var(--color-text-secondary); text-align: left; font-size: 13px; font-weight: 800; transition: background .16s ease, color .16s ease, transform .16s ease; }
        .studyNav button svg { flex: 0 0 auto; font-size: 16px; }
        .studyNav button:hover, .studyNav button.active { background: var(--color-primary); color: #fff; }
        .studyNav button:hover { transform: translateX(2px); }
        .studyNav p { margin: 18px 10px 0; color: var(--color-text-muted); font-size: 12px; }

        .contentWrapper {
            min-height: 100%;
            max-width: 1440px;
            margin: 0 0 0 248px;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            flex-shrink: 0;
        }

        /* Topic wrappers - used for same-page scroll targeting */
        .topicWrapper {
            scroll-margin-top: 84px;
            display: none;
        }
        .topicWrapper.activeTopic {
            display: block;
        }

        @media (max-width: 800px) {
            .studyNav { position: static; width: auto; margin: 12px; border: 1px solid var(--color-border); border-radius: 16px; max-height: 220px; }
            .studyNav nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .contentWrapper { margin-left: 0 !important; }
        }

        /* Optional - tiny spacing consistency */
        .topicWrapper + .topicWrapper {
            margin-top: 6px;
        }

        /* Pulse highlight when About scrolls here */
        .topicWrapper.a2rpFocusPulse {
            animation: a2rpFocusPulse 900ms ease;
        }

        @keyframes a2rpFocusPulse {
            0% {
                box-shadow: 0 0 0 0px
                    color-mix(in srgb, var(--color-primary) 28%, transparent);
                border-radius: 18px;
            }
            50% {
                box-shadow: 0 0 0 8px
                    color-mix(in srgb, var(--color-primary) 18%, transparent);
                border-radius: 18px;
            }
            100% {
                box-shadow: 0 0 0 0px
                    color-mix(in srgb, var(--color-primary) 0%, transparent);
                border-radius: 18px;
            }
        }
    `},Au={Wrapper:j.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;

        border-bottom: 1px solid var(--color-border);

        background: color-mix(
            in srgb,
            var(--color-bg) 92%,
            var(--color-surface)
        );

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        height: 64px;

        box-shadow: 0 10px 28px var(--color-shadow);
        overflow: hidden;

        /* Database vibe - calm query glow + index lines */
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                radial-gradient(
                    760px 220px at 16% 0%,
                    color-mix(in srgb, var(--color-primary) 12%, transparent),
                    transparent 66%
                ),
                radial-gradient(
                    620px 200px at 86% 10%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 70%
                ),
                repeating-linear-gradient(
                    90deg,
                    color-mix(in srgb, var(--color-border) 18%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 18%, transparent) 1px,
                    transparent 1px,
                    transparent 30px
                );

            opacity: 0.62;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            pointer-events: none;
            background: linear-gradient(
                90deg,
                transparent,
                var(--color-primary),
                color-mix(
                    in srgb,
                    var(--color-primary) 55%,
                    var(--color-accent)
                ),
                transparent
            );
            opacity: 0.92;
        }
    `,Main:j.div`
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        position: relative;
        z-index: 1;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 14px;
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 6px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);

            box-shadow:
                0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 10%, transparent),
                0 12px 24px var(--color-shadow);

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
                filter: saturate(1.06) contrast(1.03);
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        120px 90px at 20% 20%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    radial-gradient(
                        120px 90px at 85% 80%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 14%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    var(--color-surface-2);
                opacity: 0.85;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 560px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .pillRow {
            display: flex;
            align-items: center;
            gap: 8px;

            @media (width < 760px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .sIcon {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 0 0 auto;
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            .icon {
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .label {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
                box-shadow:
                    0 0 0 4px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 10px 22px var(--color-shadow);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `};var up={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Du=kr.createContext&&kr.createContext(up),Cm=["attr","size","title"];function Im(i,c){if(i==null)return{};var d=Lm(i,c),l,p;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(i);for(p=0;p<h.length;p++)l=h[p],!(c.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(i,l)&&(d[l]=i[l])}return d}function Lm(i,c){if(i==null)return{};var d={};for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)){if(c.indexOf(l)>=0)continue;d[l]=i[l]}return d}function qi(){return qi=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var d=arguments[c];for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}return i},qi.apply(this,arguments)}function Mu(i,c){var d=Object.keys(i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);c&&(l=l.filter(function(p){return Object.getOwnPropertyDescriptor(i,p).enumerable})),d.push.apply(d,l)}return d}function Vi(i){for(var c=1;c<arguments.length;c++){var d=arguments[c]!=null?arguments[c]:{};c%2?Mu(Object(d),!0).forEach(function(l){_m(i,l,d[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(d)):Mu(Object(d)).forEach(function(l){Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(d,l))})}return i}function _m(i,c,d){return c=Om(c),c in i?Object.defineProperty(i,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):i[c]=d,i}function Om(i){var c=Rm(i,"string");return typeof c=="symbol"?c:c+""}function Rm(i,c){if(typeof i!="object"||!i)return i;var d=i[Symbol.toPrimitive];if(d!==void 0){var l=d.call(i,c);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(i)}function pp(i){return i&&i.map((c,d)=>kr.createElement(c.tag,Vi({key:d},c.attr),pp(c.child)))}function G(i){return c=>kr.createElement(Pm,qi({attr:Vi({},i.attr)},c),pp(i.child))}function Pm(i){var c=d=>{var{attr:l,size:p,title:h}=i,b=Im(i,Cm),_=p||d.size||"1em",C;return d.className&&(C=d.className),i.className&&(C=(C?C+" ":"")+i.className),kr.createElement("svg",qi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,l,b,{className:C,style:Vi(Vi({color:i.color||d.color},d.style),i.style),height:_,width:_,xmlns:"http://www.w3.org/2000/svg"}),h&&kr.createElement("title",null,h),i.children)};return Du!==void 0?kr.createElement(Du.Consumer,null,d=>c(d)):c(up)}function Cn(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(i)}function or(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function dl(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(i)}function fp(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(i)}function zm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(i)}function wo(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(i)}function fr(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(i)}function Sr(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(i)}function Er(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(i)}function Am(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(i)}function Dm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(i)}function Mm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},child:[]}]})(i)}function Bi(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(i)}function Fu(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(i)}function Ar(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(i)}function Fe(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(i)}function Fm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(i)}function Bm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(i)}function Wm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(i)}function hp(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(i)}function mp(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(i)}function $m(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(i)}function gp(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(i)}function Um(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(i)}function Hm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(i)}function Te(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(i)}function Tn(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(i)}function qm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(i)}function xl(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(i)}function Vm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(i)}function Qm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(i)}function Gm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function Ym(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(i)}function Km(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"polyline",attr:{points:"23 20 23 14 17 14"},child:[]},{tag:"path",attr:{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"},child:[]}]})(i)}function vl(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(i)}function pr(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(i)}function xp(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(i)}function bo(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(i)}function vo(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(i)}function Xm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(i)}function Jm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(i)}function vp(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(i)}function Zm(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(i)}function Qi(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(i)}function eg(i){return G({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(i)}const Bu="databases-deep-dive-core-notes-theme",rg="/databases-deep-dive-core-notes/logo.png",tg=()=>{const[i,c]=H.useState(!1),[d,l]=H.useState("dark");H.useEffect(()=>{const _=localStorage.getItem(Bu)||"dark";l(_),_==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),H.useEffect(()=>{d==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem(Bu,d)},[d]);const p=H.useMemo(()=>d==="light"?"dark":"light",[d]),h=()=>{l(p)};return a.jsx(Au.Wrapper,{children:a.jsxs(Au.Main,{children:[a.jsx("div",{className:"leftSide",children:a.jsxs("div",{className:"logoNameWrapper",children:[a.jsxs("div",{className:"logoWrapper",children:[!i&&a.jsx("div",{className:"logoSkeleton"}),a.jsx("img",{src:rg,alt:"Databases Deep Dive Core Notes logo",onLoad:()=>c(!0),style:{opacity:i?1:0},loading:"lazy"})]}),a.jsxs("div",{className:"nameWrapper",children:[a.jsx("div",{className:"title",children:"database-deep-dive-core-notes"}),a.jsx("div",{className:"subTitle",children:"MongoDB, SQL, indexes, transactions, replication, sharding"})]}),a.jsxs("div",{className:"pillRow",children:[a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"sIcon",children:a.jsx(Fe,{})}),a.jsx("span",{children:"DB"})]}),a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"sIcon",children:a.jsx(Te,{})}),a.jsx("span",{children:"Deep Dive"})]})]})]})}),a.jsx("div",{className:"rightSide",children:a.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:h,"aria-label":`Switch to ${p} theme`,title:`Switch to ${p}`,children:[a.jsx("span",{className:"icon",children:d==="light"?a.jsx(Qm,{}):a.jsx(Jm,{})}),a.jsx("span",{className:"label",children:d==="light"?"Light":"Dark"})]})})]})})},ng={Wrapper:j.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 18px 15px 24px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        .copy {
            line-height: 1.6;
        }

        .copy a {
            color: var(--color-text-secondary);
            font-weight: 700;
        }

        .copy a:hover {
            color: var(--color-text-primary);
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 7px;
        }

        .links a {
            display: inline-grid;
            place-items: center;
            width: 30px;
            height: 30px;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            color: var(--color-text-secondary);
            transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
        }

        .links a:hover {
            color: var(--color-text-primary);
            border-color: var(--color-accent);
            box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 18%, transparent);
        }

        .links svg {
            width: 15px;
            height: 15px;
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;

            .links {
                justify-content: flex-start;
            }
        }
    `},og=[["Portfolio","https://www.ashishranjan.net/",$m],["GitHub","https://github.com/a2rp",mp],["CodePen","https://codepen.io/ash1198",Am],["LinkedIn","https://www.linkedin.com/in/aashishranjan",qm],["Facebook","https://www.facebook.com/theash.ashish/",Bm],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",eg],["Email","mailto:ash.ranjan09@gmail.com",Vm],["Support","https://a2rp-donation-page.netlify.app/",Um],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",Dm],["Patreon","https://www.patreon.com/a2rp",Xm]],ig=()=>{const i=new Date().getFullYear();return a.jsxs(ng.Wrapper,{children:[a.jsxs("div",{className:"copy",children:["Copyright © ",i," ",a.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),a.jsx("nav",{className:"links","aria-label":"Social and support links",children:og.map(([c,d,l])=>a.jsx("a",{href:d,target:d.startsWith("mailto:")?void 0:"_blank",rel:d.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":c,title:c,children:a.jsx(l,{"aria-hidden":"true"})},c))})]})},De={Wrapper:j.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 16px;
    `,TopRow:j.div`
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;
        gap: 14px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,TitleBlock:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 14px 40px var(--color-shadow);
        padding: 16px;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            inset: -2px;
            background:
                radial-gradient(
                    520px 220px at 14% 0%,
                    color-mix(in srgb, var(--color-primary) 16%, transparent),
                    transparent 62%
                ),
                radial-gradient(
                    540px 240px at 86% 14%,
                    color-mix(in srgb, var(--color-accent) 14%, transparent),
                    transparent 66%
                );
            opacity: 0.9;
            pointer-events: none;
        }

        & > * {
            position: relative;
            z-index: 1;
        }
    `,Badge:j.div`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        border-radius: 999px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 80%, transparent);

        .icon {
            width: 30px;
            height: 30px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            background: color-mix(
                in srgb,
                var(--color-primary) 18%,
                transparent
            );
            color: var(--color-text-primary);

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            font-size: 13px;
        }
    `,Title:j.h2`
        margin-top: 12px;
        font-size: 26px;

        @media (max-width: 520px) {
            font-size: 22px;
        }
    `,Subtitle:j.p`
        margin-top: 8px;
        color: var(--color-text-secondary);
        font-size: 14px;
        max-width: 68ch;
    `,Actions:j.div`
        margin-top: 14px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    `,PrimaryBtn:j.button`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 14px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-primary) 20%, transparent);
        color: var(--color-text-primary);
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        .btnIcon {
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            background: color-mix(
                in srgb,
                var(--color-primary) 22%,
                transparent
            );
            border: 1px solid
                color-mix(in srgb, var(--color-border) 70%, transparent);

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .btnText {
            font-weight: 900;
            font-size: 14px;
        }

        &:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-primary) 26%,
                transparent
            );
            box-shadow: 0 16px 44px var(--color-shadow);
        }

        &:active {
            transform: translateY(0px);
        }
    `,SecondaryLink:j.a`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 14px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 84%, transparent);
        color: var(--color-text-primary);
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        .btnIcon {
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            background: color-mix(
                in srgb,
                var(--color-accent) 16%,
                transparent
            );
            border: 1px solid
                color-mix(in srgb, var(--color-border) 70%, transparent);

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .btnText {
            font-weight: 900;
            font-size: 14px;
        }

        &:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            box-shadow: 0 16px 44px var(--color-shadow);
            text-decoration: none;
        }

        &:active {
            transform: translateY(0px);
        }
    `,StatsGrid:j.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    `,StatCard:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 14px 40px var(--color-shadow);
        padding: 14px;
        display: flex;
        align-items: center;
        gap: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease;

        .icon {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
        }

        .value {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 16px;
        }

        .label {
            color: var(--color-text-muted);
            font-size: 12px;
        }

        &:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );

            .icon {
                background: color-mix(
                    in srgb,
                    var(--color-accent) 14%,
                    transparent
                );
            }
        }
    `,Body:j.div`
        margin-top: 12px;
        display: grid;
        gap: 12px;
    `,Section:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 14px 40px var(--color-shadow);
        padding: 14px;
    `,SectionHeader:j.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .icon {
            width: 44px;
            height: 44px;
            display: grid;
            place-items: center;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 16px;
        }

        .hint {
            color: var(--color-text-muted);
            font-size: 12px;
            margin-top: 2px;
        }
    `,SearchWrap:j.label`
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: color-mix(in srgb, var(--color-surface-2) 86%, transparent);
        min-width: 280px;
        transition:
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        svg {
            width: 18px;
            height: 18px;
            color: var(--color-text-muted);
        }

        input {
            border: 0;
            padding: 0;
            border-radius: 0;
            background: transparent;
            width: 100%;
            min-width: 0;
            outline: none;
        }

        &:hover {
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 94%,
                transparent
            );
        }

        &:focus-within {
            border-color: color-mix(
                in srgb,
                var(--color-primary) 60%,
                var(--color-border)
            );
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 16%, transparent),
                0 14px 40px var(--color-shadow);

            svg {
                color: var(--color-text-secondary);
            }
        }

        @media (max-width: 520px) {
            min-width: 100%;
        }
    `,TopicGrid:j.div`
        margin-top: 12px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 620px) {
            grid-template-columns: 1fr;
        }
    `,TopicCard:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface-2) 80%, transparent);
        padding: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                520px 220px at 16% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 16%, transparent),
                0 18px 48px var(--color-shadow);
        }

        .row {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .icon {
            width: 38px;
            height: 38px;
            display: grid;
            place-items: center;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .tag {
            margin-top: 10px;
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );
            font-size: 12px;
            color: var(--color-text-secondary);
            width: fit-content;
        }

        .desc {
            margin-top: 8px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .foot {
            margin-top: 12px;
            display: flex;
            justify-content: flex-end;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                transparent
            );
            color: var(--color-text-muted);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
            }
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 90%,
                transparent
            );
            box-shadow: 0 18px 48px var(--color-shadow);

            &::after {
                opacity: 1;
            }

            .icon {
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    transparent
                );
            }

            .chip {
                color: var(--color-text-secondary);
            }
        }
    `,EmptyState:j.div`
        margin-top: 12px;
        border: 1px dashed var(--color-border);
        border-radius: 18px;
        padding: 18px;
        display: grid;
        gap: 6px;
        place-items: center;
        text-align: center;
        background: color-mix(in srgb, var(--color-surface-2) 70%, transparent);

        .icon {
            width: 48px;
            height: 48px;
            display: grid;
            place-items: center;
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .desc {
            color: var(--color-text-muted);
            font-size: 13px;
            max-width: 60ch;
        }
    `,MiniGrid:j.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,MiniCard:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface-2) 82%, transparent);
        padding: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease;

        .head {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .icon {
            width: 38px;
            height: 38px;
            display: grid;
            place-items: center;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        ul {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
            padding-left: 16px;
            position: relative;
        }

        li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 70%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .links {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .links a {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 90%,
                transparent
            );
            color: var(--color-text-secondary);
            transition:
                transform 140ms ease,
                border-color 140ms ease,
                background-color 140ms ease;

            svg {
                width: 18px;
                height: 18px;
                color: var(--color-text-muted);
            }
        }

        .links a:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 96%,
                transparent
            );
            color: var(--color-text-primary);
            text-decoration: none;

            svg {
                color: var(--color-text-secondary);
            }
        }

        &:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 90%,
                transparent
            );
        }
    `},ag=({scrollerRef:i})=>{const[c,d]=H.useState(!0),[l,p]=H.useState(""),h=H.useMemo(()=>[{key:"mongoAdvanced",title:"MongoDB Advanced",icon:a.jsx(Fe,{}),tag:"NoSQL",desc:"Document model, BSON, embedding vs referencing, write and read concerns, and real production patterns."},{key:"aggregation",title:"Aggregation",icon:a.jsx(Te,{}),tag:"Pipelines",desc:"Aggregation pipeline mental model, common stages, and performance friendly pipeline habits."},{key:"indexStrategy",title:"Index Strategy",icon:a.jsx(pr,{}),tag:"Performance",desc:"How indexes work, when they help, when they hurt, and how to choose practical index shapes."},{key:"schemaDesign",title:"Schema Design",icon:a.jsx(wo,{}),tag:"Modeling",desc:"Schema design tradeoffs, data shape decisions, denormalization, and consistency tradeoffs."},{key:"sql",title:"SQL",icon:a.jsx(Fe,{}),tag:"RDBMS",desc:"Relational fundamentals, keys, constraints, ACID, and query execution mental model."},{key:"joins",title:"Joins",icon:a.jsx(Tn,{}),tag:"Queries",desc:"Inner and outer joins, join conditions, and practical performance considerations."},{key:"subqueries",title:"Subqueries",icon:a.jsx(Ar,{}),tag:"Queries",desc:"Scalar and correlated subqueries, EXISTS patterns, and when joins are simpler."},{key:"transactions",title:"Transactions",icon:a.jsx(xl,{}),tag:"Consistency",desc:"ACID, isolation levels, conflicts, and the real meaning of durability in practice."},{key:"scalingDatabases",title:"Scaling Databases",icon:a.jsx(Qi,{}),tag:"Scale",desc:"Vertical vs horizontal scaling, read replicas, partitioning, and common bottlenecks."},{key:"replication",title:"Replication",icon:a.jsx(Te,{}),tag:"Availability",desc:"Primary secondary replication, failover basics, replication lag, and read patterns."},{key:"sharding",title:"Sharding",icon:a.jsx(Te,{}),tag:"Scale",desc:"Shard keys, distribution, query routing, rebalancing, and distributed query tradeoffs."}],[]),b=H.useMemo(()=>{const L=l.trim().toLowerCase();return L?h.filter(D=>D.title.toLowerCase().includes(L)||D.tag.toLowerCase().includes(L)||D.desc.toLowerCase().includes(L)):h},[l,h]),_=H.useMemo(()=>[{label:"Topics",value:String(h.length),icon:a.jsx(fr,{})},{label:"Focus",value:"Revision",icon:a.jsx(wo,{})},{label:"Style",value:"At a glance",icon:a.jsx(Te,{})},{label:"Deploy",value:"GitHub Pages",icon:a.jsx(Fm,{})}],[h.length]),C="https://github.com/a2rp/databases-deep-dive-core-notes",q=L=>{const B=((i==null?void 0:i.current)||document).querySelector(`.topicWrapper.${L}`);B&&(B.scrollIntoView({behavior:"smooth",block:"start"}),B.classList.add("a2rpFocusPulse"),window.setTimeout(()=>B.classList.remove("a2rpFocusPulse"),900),window.dispatchEvent(new CustomEvent("a2rp:open-topic",{detail:{key:L}})))};return a.jsxs(De.Wrapper,{children:[a.jsxs(De.TopRow,{children:[a.jsxs(De.TitleBlock,{children:[a.jsxs(De.Badge,{children:[a.jsx("span",{className:"icon",children:a.jsx(Fe,{})}),a.jsx("span",{className:"text",children:"Databases Deep Dive Core Notes"})]}),a.jsx(De.Title,{children:"Database engineering, without the boring fog."}),a.jsx(De.Subtitle,{children:"A single page revision map for MongoDB advanced topics, SQL query thinking, index strategy, transactions, replication, and sharding. Built for fast recall and production mental models."}),a.jsxs(De.Actions,{children:[a.jsxs(De.PrimaryBtn,{type:"button",onClick:()=>d(L=>!L),"aria-expanded":c,children:[a.jsx("span",{className:"btnIcon",children:c?a.jsx(Er,{}):a.jsx(Sr,{})}),a.jsx("span",{className:"btnText",children:c?"Collapse overview":"Expand overview"})]}),a.jsxs(De.SecondaryLink,{href:C,target:"_blank",rel:"noreferrer",children:[a.jsx("span",{className:"btnIcon",children:a.jsx(mp,{})}),a.jsx("span",{className:"btnText",children:"Open repo"})]})]})]}),a.jsx(De.StatsGrid,{children:_.map(L=>a.jsxs(De.StatCard,{children:[a.jsx("div",{className:"icon",children:L.icon}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"value",children:L.value}),a.jsx("div",{className:"label",children:L.label})]})]},L.label))})]}),c&&a.jsx(De.Body,{children:a.jsxs(De.Section,{children:[a.jsxs(De.SectionHeader,{children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Te,{})}),a.jsxs("div",{children:[a.jsx("div",{className:"title",children:"What you get here"}),a.jsx("div",{className:"hint",children:"Short, accurate, and practical notes. No essays."})]})]}),a.jsxs(De.SearchWrap,{children:[a.jsx(pr,{}),a.jsx("input",{value:l,onChange:L=>p(L.target.value),placeholder:"Search topics, tags, keywords","aria-label":"Search topics"})]})]}),a.jsx(De.TopicGrid,{children:b.map(L=>a.jsxs(De.TopicCard,{role:"button",tabIndex:0,onClick:()=>q(L.key),onKeyDown:D=>{(D.key==="Enter"||D.key===" ")&&q(L.key)},"aria-label":`Go to ${L.title}`,children:[a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"icon",children:L.icon}),a.jsx("div",{className:"title",children:L.title})]}),a.jsx("div",{className:"tag",children:L.tag}),a.jsx("div",{className:"desc",children:L.desc})]},L.key))}),b.length===0&&a.jsxs(De.EmptyState,{children:[a.jsx("div",{className:"icon",children:a.jsx(pr,{})}),a.jsx("div",{className:"title",children:"No matches"}),a.jsx("div",{className:"desc",children:'Try searching for "index", "join", "replication", or "shard".'})]})]})})]})},sg={Button:j.button`
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 9999;

        width: 48px;
        height: 48px;

        display: grid;
        place-items: center;

        border-radius: 14px;
        border: 1px solid var(--color-border);

        background: color-mix(in srgb, var(--color-primary) 26%, transparent);
        color: var(--color-text-primary);

        box-shadow: 0 16px 44px var(--color-shadow);

        cursor: pointer;

        transition:
            transform 140ms ease,
            opacity 160ms ease,
            border-color 140ms ease,
            background-color 140ms ease;

        svg {
            width: 20px;
            height: 20px;
        }

        &.hide {
            opacity: 0;
            pointer-events: none;
            transform: translateY(10px) scale(0.98);
        }

        &.show {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0px) scale(1);
        }

        &:hover {
            transform: translateY(-2px) scale(1.02);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-primary) 34%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px) scale(1);
        }
    `},lg=({scrollerRef:i})=>{const[c,d]=H.useState(!1);H.useEffect(()=>{const p=i==null?void 0:i.current;if(!p)return;const h=()=>{const b=p.scrollTop||0;d(b>350)};return h(),p.addEventListener("scroll",h),()=>p.removeEventListener("scroll",h)},[i]);const l=()=>{const p=i==null?void 0:i.current;p&&p.scrollTo({top:0,behavior:"smooth"})};return a.jsx(sg.Button,{type:"button",onClick:l,className:c?"show":"hide","aria-label":"Go to top",title:"Go to top",children:a.jsx(fp,{})})},Rt={Wrapper:j.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:j.div`
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        user-select: none;

        background-image: radial-gradient(
            620px 260px at 14% 0%,
            color-mix(in srgb, var(--color-primary) 14%, transparent),
            transparent 62%
        );

        transition:
            transform 140ms ease,
            background-color 140ms ease,
            border-color 140ms ease;

        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-surface-2) 40%,
                transparent
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 16%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 16px;
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            max-width: 72ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-text-muted);
            }

            @media (max-width: 520px) {
                display: none;
            }
        }

        .toggleIcon {
            width: 36px;
            height: 36px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }
    `,Body:j.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:j.div`
        display: flex;
        align-items: flex-start;
        gap: 12px;
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface-2) 78%, transparent);

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionGrid:j.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface) 86%, transparent);
        position: relative;
        overflow: hidden;

        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                560px 240px at 16% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );
            box-shadow: 0 18px 52px var(--color-shadow);

            &::after {
                opacity: 1;
            }
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .secIcon {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .points {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .points li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .points li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .block {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .blockTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 30%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: color-mix(
                in srgb,
                var(--color-text-primary) 92%,
                transparent
            );
            font-size: 12px;
            line-height: 1.65;
        }

        .notes {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .notesTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .notes ul {
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .notes li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .notes li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-primary) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .warn {
            margin-top: 12px;
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 40%,
                    var(--color-border)
                );
            border-radius: 16px;
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                var(--color-code-bg)
            );
        }

        .warnTitle {
            padding: 10px 12px;
            border-bottom: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 30%,
                    var(--color-border)
                );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );
        }
    `},cg=()=>{const[i,c]=H.useState(!0),d=H.useMemo(()=>[{id:"docModel",icon:a.jsx(Fe,{}),title:"Document model and BSON",points:["MongoDB stores data as documents inside collections.","A document is like a JSON object, but MongoDB stores it as BSON (Binary JSON).","BSON adds types that plain JSON does not have, like Date, ObjectId, Decimal128."],exampleTitle:"Example - document in a users collection",example:`// users collection (one document)
{
  "_id": ObjectId("65f1c2c1a9b0c7d6e12a0001"),
  "name": "Ashish",
  "email": "ashish@example.com",
  "age": 26,
  "isActive": true,
  "createdAt": ISODate("2026-03-05T08:00:00Z")
}`,notes:["Why BSON matters - MongoDB can store and compare real Date values, not just strings.","ObjectId is a special id type that includes a timestamp + randomness."]},{id:"embedVsRef",icon:a.jsx(Tn,{}),title:"Embedded vs referenced documents",points:["Embedding means nested objects or arrays inside one document.","Referencing means storing another document id and fetching it separately.","Choose based on how you read data and how often it changes."],exampleTitle:"Example - embedding order items",example:`// orders (embedding items)
// Good when you usually read order + items together
{
  "_id": ObjectId("65f1c2c1a9b0c7d6e12a0100"),
  "userId": ObjectId("65f1c2c1a9b0c7d6e12a0001"),
  "status": "PAID",
  "items": [
    { "sku": "LAP-001", "name": "Laptop Stand", "qty": 1, "price": 999 },
    { "sku": "CAB-022", "name": "USB-C Cable", "qty": 2, "price": 199 }
  ],
  "total": 1397
}`,notes:["Embed when - read together, updated together, limited size, limited growth.","Reference when - separate lifecycle, large arrays, many updates, shared objects."],extraTitle:"Example - referencing product documents",extra:`// orderItems referencing products
{
  "_id": ObjectId("..."),
  "orderId": ObjectId("..."),
  "productId": ObjectId("..."),
  "qty": 2,
  "priceAtPurchase": 199
}

// products collection
{
  "_id": ObjectId("..."),
  "name": "USB-C Cable",
  "currentPrice": 249
}`},{id:"consistency",icon:a.jsx(bo,{}),title:"Write concern and read concern",points:["Write concern controls how safely MongoDB confirms a write.","Read concern controls how stable the data is when reading.","In clusters, you trade speed for safety."],exampleTitle:"Write concern - common levels",example:`// w: 1 - primary confirms write (fast, default in many apps)
db.orders.insertOne({ status: "PAID" }, { writeConcern: { w: 1 } })

// w: "majority" - majority of replica set confirms (safer)
db.orders.insertOne({ status: "PAID" }, { writeConcern: { w: "majority" } })

// j: true - journal commit (safer against sudden power loss)
db.orders.insertOne({ status: "PAID" }, { writeConcern: { w: "majority", j: true } })`,notes:["w: 1 is usually fine for many apps, but majority is better for important money writes.","j: true means write is recorded in journal on disk before ack (more durability)."],extraTitle:"Read concern - idea",extra:`// local - can read data that may roll back in rare failover cases
db.orders.find({}, { readConcern: { level: "local" } })

// majority - reads only data confirmed by majority
db.orders.find({}, { readConcern: { level: "majority" } })`},{id:"aggregationIntro",icon:a.jsx(Te,{}),title:"Aggregation mental model (advanced usage)",points:["Aggregation is a pipeline - data flows stage by stage.","Use $match early to reduce documents quickly.","Use $project to reduce fields and compute values.","Use $group for totals, counts, and analytics."],exampleTitle:"Example - total revenue per day",example:`db.orders.aggregate([
  { $match: { status: "PAID" } },
  {
    $group: {
      _id: { day: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } } },
      revenue: { $sum: "$total" },
      orders: { $sum: 1 }
    }
  },
  { $sort: { "_id.day": 1 } }
])`,notes:["Rule - $match first, $sort later, keep pipeline lean.","Indexes help $match and $sort when used correctly."]},{id:"transactions",icon:a.jsx(Cn,{}),title:"Transactions (when and why)",points:["A transaction means multiple writes succeed together or fail together.","MongoDB supports transactions in replica sets and sharded clusters (with limits).","Use transactions when you must keep multiple documents consistent."],exampleTitle:"Example - wallet transfer (concept)",example:`// Pseudocode style (Node.js driver style idea)
const session = client.startSession();

await session.withTransaction(async () => {
  await db.collection("wallets").updateOne(
    { userId: fromUserId },
    { $inc: { balance: -amount } },
    { session }
  );

  await db.collection("wallets").updateOne(
    { userId: toUserId },
    { $inc: { balance: amount } },
    { session }
  );

  await db.collection("walletTransfers").insertOne(
    { fromUserId, toUserId, amount, createdAt: new Date() },
    { session }
  );
});`,notes:["Avoid overusing transactions - they add overhead and can reduce throughput.","If your data model can embed and update in one document, do that first."]},{id:"validation",icon:a.jsx(fr,{}),title:"Schema validation (MongoDB is flexible, not schema-less)",points:["MongoDB is schema flexible, but you can still enforce rules.","Schema validation helps catch bad writes early.","Use it when multiple services or teams write to the same collection."],exampleTitle:"Example - simple validation rules",example:`db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "createdAt"],
      properties: {
        name: { bsonType: "string", minLength: 2 },
        email: { bsonType: "string" },
        createdAt: { bsonType: "date" },
        isActive: { bsonType: "bool" }
      }
    }
  }
})`,notes:["Validation is not a replacement for app validation, but it is a strong safety net."]},{id:"performanceHabits",icon:a.jsx(pr,{}),title:"Performance habits that matter",points:["Prefer precise queries - always use filters that can use indexes.","Avoid huge unbounded arrays in a document (they can grow forever).","Project only needed fields (do not return the full document if you do not need it).","Keep documents small and stable for frequent updates."],exampleTitle:"Example - project only needed fields",example:`// Bad - returns full document
db.users.find({ isActive: true })

// Better - returns only name and email
db.users.find(
  { isActive: true },
  { projection: { name: 1, email: 1 } }
)`,notes:["If query feels slow, first check - do we have an index for the filter and sort?","Second check - are we returning too much data?"],warningTitle:"Common beginner mistake",warning:`// This can become huge and slow to update over time
{
  "_id": ObjectId("..."),
  "userId": ObjectId("..."),
  "loginHistory": [ /* thousands of entries */ ]
}

// Better idea - keep history in a separate collection with userId index
db.loginEvents.insertOne({ userId, at: new Date(), ip: "1.2.3.4" })`}],[]);return H.useEffect(()=>{const l=p=>{var h;((h=p==null?void 0:p.detail)==null?void 0:h.key)==="mongodbAdvanced"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Rt.Wrapper,{children:a.jsxs(Rt.Card,{children:[a.jsxs(Rt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Fe,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"MongoDB Advanced"}),a.jsx("div",{className:"subtitle",children:"Document model, schema patterns, concerns, aggregation, transactions"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(Ar,{}),a.jsx("span",{children:"At a glance"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Er,{}):a.jsx(Sr,{})})]})]}),i&&a.jsxs(Rt.Body,{children:[a.jsxs(Rt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(or,{})}),a.jsx("div",{className:"text",children:"MongoDB looks simple at first, but real projects win by choosing the right data shape, the right concerns, and the right query patterns. This section explains those decisions with examples."})]}),a.jsx(Rt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Rt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((h,b)=>a.jsx("li",{children:h},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.extraTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.extraTitle}),a.jsx("pre",{className:"code",children:l.extra})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((h,b)=>a.jsx("li",{children:h},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Pt={Wrapper:j.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:j.div`
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        user-select: none;

        background-image: radial-gradient(
            620px 260px at 14% 0%,
            color-mix(in srgb, var(--color-accent) 14%, transparent),
            transparent 62%
        );

        transition:
            transform 140ms ease,
            background-color 140ms ease,
            border-color 140ms ease;

        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-surface-2) 40%,
                transparent
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 16%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 16px;
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            max-width: 72ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-text-muted);
            }

            @media (max-width: 520px) {
                display: none;
            }
        }

        .toggleIcon {
            width: 36px;
            height: 36px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }
    `,Body:j.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:j.div`
        display: flex;
        align-items: flex-start;
        gap: 12px;
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface-2) 78%, transparent);

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionGrid:j.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface) 86%, transparent);
        position: relative;
        overflow: hidden;

        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                560px 240px at 16% 0%,
                color-mix(in srgb, var(--color-accent) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );
            box-shadow: 0 18px 52px var(--color-shadow);

            &::after {
                opacity: 1;
            }
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .secIcon {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .points {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .points li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .points li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .block {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .blockTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 30%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: color-mix(
                in srgb,
                var(--color-text-primary) 92%,
                transparent
            );
            font-size: 12px;
            line-height: 1.65;
        }

        .notes {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .notesTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .notes ul {
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .notes li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .notes li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-primary) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }
    `},dg=()=>{const[i,c]=H.useState(!0),d=H.useMemo(()=>[{id:"mentalModel",icon:a.jsx(Te,{}),title:"Aggregation mental model",points:["Aggregation is a pipeline - documents flow through stages one by one.","Each stage transforms the stream - filter, reshape, group, sort, join.","Think of it like a factory line - each stage does one job."],exampleTitle:"Pipeline idea",example:`// pipeline skeleton
db.collection.aggregate([
  { $match: { /* filter */ } },
  { $project: { /* select or compute fields */ } },
  { $group: { /* aggregate */ } },
  { $sort: { /* order results */ } }
])`,notes:["Rule - do filtering early to reduce data quickly.","Rule - do expensive stages only after the dataset is smaller."]},{id:"match",icon:a.jsx(Wm,{}),title:"$match - filter documents",points:["$match is like find - it filters documents.","Put $match as early as possible for performance.","$match can use indexes when it is early in the pipeline."],exampleTitle:"Example - filter paid orders",example:`db.orders.aggregate([
  { $match: { status: "PAID" } }
])`,notes:["If you have an index on status, MongoDB can use it here."]},{id:"project",icon:a.jsx(Zm,{}),title:"$project - select fields and compute new fields",points:["$project decides what fields move forward.","It can rename fields, remove fields, and compute new fields.","Reducing fields early saves memory and network cost."],exampleTitle:"Example - keep only needed fields",example:`db.users.aggregate([
  { $project: { name: 1, email: 1, _id: 0 } }
])`,notes:["_id is included by default, so _id: 0 removes it."],extraTitle:"Example - compute a field",extra:`db.orders.aggregate([
  {
    $project: {
      status: 1,
      total: 1,
      tax: { $multiply: ["$total", 0.18] },
      grandTotal: { $add: ["$total", { $multiply: ["$total", 0.18] }] }
    }
  }
])`},{id:"group",icon:a.jsx(zm,{}),title:"$group - totals, counts, analytics",points:["$group collects documents into buckets based on _id.","Inside each bucket you can compute sum, avg, min, max, count.","This is how you create reports - like revenue per day."],exampleTitle:"Example - total revenue per user",example:`db.orders.aggregate([
  { $match: { status: "PAID" } },
  {
    $group: {
      _id: "$userId",
      orders: { $sum: 1 },
      revenue: { $sum: "$total" },
      avgOrderValue: { $avg: "$total" }
    }
  },
  { $sort: { revenue: -1 } }
])`,notes:["_id decides grouping key - it can be a field or an object."],extraTitle:"Example - group by day",extra:`db.orders.aggregate([
  { $match: { status: "PAID" } },
  {
    $group: {
      _id: {
        day: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
        }
      },
      revenue: { $sum: "$total" },
      orders: { $sum: 1 }
    }
  },
  { $sort: { "_id.day": 1 } }
])`},{id:"sortLimitSkip",icon:a.jsx(vo,{}),title:"$sort, $limit, $skip - ordering and pagination",points:["$sort orders the stream. Sorting large data can be expensive.","$limit reduces result count quickly - use it soon after sort when possible.","$skip is used for pagination, but deep skip is slow in large collections."],exampleTitle:"Example - top 10 highest value orders",example:`db.orders.aggregate([
  { $match: { status: "PAID" } },
  { $sort: { total: -1 } },
  { $limit: 10 },
  { $project: { userId: 1, total: 1, createdAt: 1 } }
])`,notes:["Better pagination for large datasets - use range queries instead of huge skip."],extraTitle:"Pagination idea - range based",extra:`// instead of skip
// fetch next page by using a lastSeen value
db.orders.find(
  { status: "PAID", total: { $lt: lastSeenTotal } }
).sort({ total: -1 }).limit(10)`},{id:"lookup",icon:a.jsx(pr,{}),title:"$lookup - join like behavior",points:["$lookup pulls matching documents from another collection.","This is similar to SQL join, but can be heavier if misused.","Use it when data is truly separate and you need combined view."],exampleTitle:"Example - join orders with users",example:`db.orders.aggregate([
  { $match: { status: "PAID" } },
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  },
  { $unwind: "$user" },
  {
    $project: {
      total: 1,
      createdAt: 1,
      "user.name": 1,
      "user.email": 1
    }
  }
])`,notes:["$unwind converts array into single object (because lookup returns array).","Index on foreignField (_id) already exists, so lookup is usually efficient there."]},{id:"performance",icon:a.jsx(Ar,{}),title:"Performance rules that actually matter",points:["Put $match early and filter aggressively.","Project only required fields.","Avoid sorting huge datasets without supporting indexes.","Prefer pre-aggregated collections for heavy analytics workloads.","Use explain to understand if indexes are being used."],exampleTitle:"Example - explain pipeline",example:`db.orders.explain("executionStats").aggregate([
  { $match: { status: "PAID" } },
  { $group: { _id: "$userId", revenue: { $sum: "$total" } } }
])`,notes:["Look for - totalDocsExamined vs totalKeysExamined.","If totalDocsExamined is huge, your match is not using indexes well."]}],[]);return H.useEffect(()=>{const l=p=>{var h;((h=p==null?void 0:p.detail)==null?void 0:h.key)==="aggregation"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Pt.Wrapper,{children:a.jsxs(Pt.Card,{children:[a.jsxs(Pt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Te,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Aggregation"}),a.jsx("div",{className:"subtitle",children:"Pipeline thinking - match, project, group, sort, lookup"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(fr,{}),a.jsx("span",{children:"Beginner friendly"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Er,{}):a.jsx(Sr,{})})]})]}),i&&a.jsxs(Pt.Body,{children:[a.jsxs(Pt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(or,{})}),a.jsx("div",{className:"text",children:"Aggregation is MongoDB's reporting engine. The secret is not memorizing stages - the secret is pipeline order and reducing data early. This section explains the common stages with practical examples."})]}),a.jsx(Pt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Pt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((h,b)=>a.jsx("li",{children:h},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.extraTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.extraTitle}),a.jsx("pre",{className:"code",children:l.extra})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((h,b)=>a.jsx("li",{children:h},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},zt={Wrapper:j.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:j.div`
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        user-select: none;

        background-image: radial-gradient(
            620px 260px at 14% 0%,
            color-mix(in srgb, var(--color-primary) 14%, transparent),
            transparent 62%
        );

        transition:
            transform 140ms ease,
            background-color 140ms ease,
            border-color 140ms ease;

        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-surface-2) 40%,
                transparent
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 16%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 16px;
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            max-width: 72ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-text-muted);
            }

            @media (max-width: 520px) {
                display: none;
            }
        }

        .toggleIcon {
            width: 36px;
            height: 36px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }
    `,Body:j.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:j.div`
        display: flex;
        align-items: flex-start;
        gap: 12px;
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface-2) 78%, transparent);

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionGrid:j.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface) 86%, transparent);
        position: relative;
        overflow: hidden;

        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                560px 240px at 16% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );
            box-shadow: 0 18px 52px var(--color-shadow);

            &::after {
                opacity: 1;
            }
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .secIcon {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .points {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .points li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .points li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .block {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .blockTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 30%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: color-mix(
                in srgb,
                var(--color-text-primary) 92%,
                transparent
            );
            font-size: 12px;
            line-height: 1.65;
        }

        .notes {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .notesTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .notes ul {
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .notes li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .notes li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-primary) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .warn {
            margin-top: 12px;
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 40%,
                    var(--color-border)
                );
            border-radius: 16px;
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                var(--color-code-bg)
            );
        }

        .warnTitle {
            padding: 10px 12px;
            border-bottom: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 30%,
                    var(--color-border)
                );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );
        }
    `},ug=()=>{const[i,c]=H.useState(!0),d=H.useMemo(()=>[{id:"whatIsIndex",icon:a.jsx(wo,{}),title:"What is an index (simple mental model)",points:["An index is like a book index - it helps you find pages without scanning the whole book.","Without an index, the database does a full scan - it checks every document or row.","With an index, the database can jump closer to matching data quickly."],exampleTitle:"Example - full scan vs index scan idea",example:`// Query
db.users.find({ email: "ashish@example.com" })

// Without index
// - MongoDB checks many users until it finds the match

// With index on email
// - MongoDB jumps directly to the matching record`,notes:["Indexes speed up reads, but they add cost to writes.","Every insert and update may need to update indexes too."]},{id:"bTreeBasics",icon:a.jsx(Te,{}),title:"B-Tree basics (why indexes are fast)",points:["Most database indexes are B-Tree based (balanced tree).","Balanced means the tree height is small, so lookup steps are limited.","That is why index lookups feel fast even with millions of rows."],exampleTitle:"Simple idea - search steps",example:`// Rough idea (not exact numbers)
// 1,000,000 documents
// Full scan - 1,000,000 checks worst case
// B-Tree - maybe around 20 to 30 comparisons`,notes:["You do not need to memorize tree structure - just remember 'logarithmic search'."]},{id:"chooseFields",icon:a.jsx(vp,{}),title:"Choosing index fields (what to index)",points:["Index fields used in filters - like status, userId, createdAt, email.","Index fields used in sorting - like createdAt desc, total desc.","Index fields used in joins - foreign keys in SQL, referenced fields in MongoDB."],exampleTitle:"Example - common production indexes",example:`// MongoDB examples
db.users.createIndex({ email: 1 }, { unique: true })
db.orders.createIndex({ userId: 1, createdAt: -1 })
db.orders.createIndex({ status: 1, createdAt: -1 })

// SQL examples (concept)
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);`,notes:["If you search by email, index email.","If you list recent orders per user, compound index (userId, createdAt) helps."]},{id:"compound",icon:a.jsx(Fe,{}),title:"Compound indexes (order matters)",points:["Compound index means multiple fields in one index.","Order matters because the index is sorted by the fields in order.","The leftmost prefix rule - queries can use the beginning of the index."],exampleTitle:"Example - leftmost prefix rule",example:`// Index
db.orders.createIndex({ userId: 1, createdAt: -1 })

// Uses index - filter by userId
db.orders.find({ userId: ObjectId("...") })

// Uses index - filter by userId + sort by createdAt
db.orders.find({ userId: ObjectId("...") }).sort({ createdAt: -1 })

// Usually NOT ideal - filter only by createdAt
// because userId is first field in the index
db.orders.find({ createdAt: { $gte: ISODate("2026-03-01") } })`,notes:["Design compound indexes based on your most common query patterns."]},{id:"selectivity",icon:a.jsx(Cn,{}),title:"Selectivity (why some indexes do not help)",points:["Selectivity means how well the index narrows down results.","High selectivity - email, phone, userId (many unique values).","Low selectivity - boolean fields like isActive, isDeleted."],exampleTitle:"Example - low selectivity index",example:`// If most users have isActive: true
// this index may not help much
db.users.createIndex({ isActive: 1 })

// Better - combine it with another field you filter or sort by
db.users.createIndex({ isActive: 1, createdAt: -1 })`,notes:["Boolean alone is often not enough because it returns too many results."]},{id:"covering",icon:a.jsx(fr,{}),title:"Covering index (big performance trick)",points:["A query is 'covered' when the database can answer using only the index.","Covered queries avoid fetching the full document from disk.","This can be a huge win for list pages and dashboards."],exampleTitle:"Example - cover with projection",example:`// Index
db.users.createIndex({ isActive: 1, createdAt: -1, name: 1 })

// Query that can be covered if it only needs indexed fields
db.users.find(
  { isActive: true },
  { projection: { _id: 0, name: 1, createdAt: 1 } }
).sort({ createdAt: -1 }).limit(20)`,notes:["Covering indexes are great for list endpoints and admin tables."]},{id:"writeCost",icon:a.jsx(Ar,{}),title:"Write cost (why too many indexes hurt)",points:["Indexes speed up reads but slow down writes.","Every insert needs to update all indexes for that collection/table.","Every update that changes indexed fields also updates those indexes."],exampleTitle:"Rule of thumb - fewer, smarter indexes",example:`// Imagine a collection with 8 indexes
// Every insert updates 8 index structures
// If you are write heavy, this hurts throughput

// Best practice
// - add indexes only for real query patterns
// - remove unused indexes`,notes:["If you have slow writes, check how many indexes exist.","In MongoDB, use db.collection.getIndexes() to inspect."]},{id:"measure",icon:a.jsx(pr,{}),title:"How to verify (explain is your friend)",points:["Never guess - verify with explain.","Explain shows if indexes are used and how many docs were examined.","A good query usually examines fewer docs and more index keys."],exampleTitle:"MongoDB explain example",example:`db.orders.explain("executionStats").find({
  userId: ObjectId("..."),
  status: "PAID"
}).sort({ createdAt: -1 }).limit(20)`,notes:["Look for - totalDocsExamined should be low.","If totalDocsExamined is huge, your query is scanning too much."],warningTitle:"Common beginner mistake",warning:`// Sorting without an index can be expensive
db.orders.find({ status: "PAID" }).sort({ createdAt: -1 })

// Better - add index that supports filter + sort
db.orders.createIndex({ status: 1, createdAt: -1 })`}],[]);return H.useEffect(()=>{const l=p=>{var h;((h=p==null?void 0:p.detail)==null?void 0:h.key)==="indexStrategy"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(zt.Wrapper,{children:a.jsxs(zt.Card,{children:[a.jsxs(zt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(pr,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Index Strategy"}),a.jsx("div",{className:"subtitle",children:"What to index, compound order, selectivity, covering, and explain"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(fr,{}),a.jsx("span",{children:"Production mindset"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Er,{}):a.jsx(Sr,{})})]})]}),i&&a.jsxs(zt.Body,{children:[a.jsxs(zt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(or,{})}),a.jsx("div",{className:"text",children:'Indexes decide whether your API feels instant or painfully slow. The goal is not "index everything" - the goal is indexing the exact query patterns you actually run in production.'})]}),a.jsx(zt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(zt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((h,b)=>a.jsx("li",{children:h},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.extraTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.extraTitle}),a.jsx("pre",{className:"code",children:l.extra})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((h,b)=>a.jsx("li",{children:h},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},At={Wrapper:j.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:j.div`
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        user-select: none;

        background-image: radial-gradient(
            620px 260px at 14% 0%,
            color-mix(in srgb, var(--color-primary) 14%, transparent),
            transparent 62%
        );

        transition:
            background-color 140ms ease,
            border-color 140ms ease;

        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-surface-2) 40%,
                transparent
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 16%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 16px;
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            max-width: 72ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-text-muted);
            }

            @media (max-width: 520px) {
                display: none;
            }
        }

        .toggleIcon {
            width: 36px;
            height: 36px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }
    `,Body:j.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:j.div`
        display: flex;
        align-items: flex-start;
        gap: 12px;
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface-2) 78%, transparent);

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionGrid:j.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface) 86%, transparent);
        position: relative;
        overflow: hidden;

        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                560px 240px at 16% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );
            box-shadow: 0 18px 52px var(--color-shadow);

            &::after {
                opacity: 1;
            }
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .secIcon {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .points {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .points li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .points li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .block {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .blockTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 30%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: color-mix(
                in srgb,
                var(--color-text-primary) 92%,
                transparent
            );
            font-size: 12px;
            line-height: 1.65;
        }

        .notes {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .notesTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .notes ul {
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .notes li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .notes li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-primary) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .warn {
            margin-top: 12px;
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 40%,
                    var(--color-border)
                );
            border-radius: 16px;
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                var(--color-code-bg)
            );
        }

        .warnTitle {
            padding: 10px 12px;
            border-bottom: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 30%,
                    var(--color-border)
                );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );
        }
    `},pg=()=>{const[i,c]=H.useState(!0),d=H.useMemo(()=>[{id:"goal",icon:a.jsx(Te,{}),title:"Schema design goal - shape the data for your reads",points:["Schema design is about choosing the best data shape for your most common queries.","In MongoDB, you can embed or reference. In SQL, you normalize and join.","Good schema is not about being perfect - it is about being practical."],exampleTitle:"Rule of thumb",example:`- If you read things together - store them together
- If things grow forever - store separately
- If things are shared by many records - reference them`,notes:["Start from queries - not from tables or collections.","List your top 5 API endpoints and design for them first."]},{id:"embedVsRef",icon:a.jsx(Tn,{}),title:"Embedding vs referencing (MongoDB core decision)",points:["Embedding means nested data inside one document.","Referencing means storing an id and fetching the related data separately.","Embedding is faster for read together data, referencing is safer for shared and frequently changing data."],exampleTitle:"Embedding example - order with items",example:`// orders
{
  "_id": ObjectId("..."),
  "userId": ObjectId("..."),
  "status": "PAID",
  "items": [
    { "sku": "CAB-022", "name": "USB-C Cable", "qty": 2, "price": 199 },
    { "sku": "LAP-001", "name": "Laptop Stand", "qty": 1, "price": 999 }
  ],
  "total": 1397,
  "createdAt": ISODate("2026-03-05T08:00:00Z")
}`,extraTitle:"Referencing example - order references products",extra:`// orderItems
{
  "_id": ObjectId("..."),
  "orderId": ObjectId("..."),
  "productId": ObjectId("..."),
  "qty": 2,
  "priceAtPurchase": 199
}

// products
{
  "_id": ObjectId("..."),
  "name": "USB-C Cable",
  "currentPrice": 249
}`,notes:["Embed when - read together, updated together, bounded size.","Reference when - shared entities, large arrays, frequent updates."]},{id:"oneToMany",icon:a.jsx(gp,{}),title:"One to many patterns",points:["One to many means one parent has many children - user has many orders, blog has many comments.","MongoDB gives you two main options - embed children or store children in a separate collection.","The main deciding factor is growth - can the list become huge"],exampleTitle:"Option A - embed small bounded children",example:`// product with small set of tags (bounded)
{
  "_id": ObjectId("..."),
  "name": "Laptop Stand",
  "tags": ["office", "ergonomics", "desk"]
}`,extraTitle:"Option B - separate collection for unbounded children",extra:`// users
{ "_id": ObjectId("u1"), "name": "Ashish" }

// loginEvents (unbounded growth)
{ "_id": ObjectId("e1"), "userId": ObjectId("u1"), "at": ISODate("..."), "ip": "1.2.3.4" }
{ "_id": ObjectId("e2"), "userId": ObjectId("u1"), "at": ISODate("..."), "ip": "9.8.7.6" }

// index that makes reads fast
db.loginEvents.createIndex({ userId: 1, at: -1 })`,notes:["If it can grow forever - do not embed it in one document.","Use a child collection plus indexes for fast reads."]},{id:"manyToMany",icon:a.jsx(vl,{}),title:"Many to many patterns",points:["Many to many means both sides can have many relationships - students and courses, users and roles.","In SQL you usually use a join table.","In MongoDB you can use a mapping collection or store arrays of ids."],exampleTitle:"SQL mapping table idea",example:`-- users, roles, user_roles
users(id, name)
roles(id, name)
user_roles(user_id, role_id)`,extraTitle:"MongoDB mapping collection",extra:`// users
{ "_id": ObjectId("u1"), "name": "Ashish" }

// roles
{ "_id": ObjectId("r1"), "name": "reportsOnly" }

// userRoles mapping
{ "_id": ObjectId("m1"), "userId": ObjectId("u1"), "roleId": ObjectId("r1") }

// index for fast lookup
db.userRoles.createIndex({ userId: 1, roleId: 1 }, { unique: true })`,notes:["Mapping collection scales better than huge arrays when relations can grow large.","Arrays of ids are fine when relationship count is small and stable."]},{id:"normalization",icon:a.jsx(Fe,{}),title:"Normalization vs denormalization",points:["Normalization means reduce duplication - store facts once and reference them.","Denormalization means duplicate some data to make reads faster and simpler.","Real systems often use a mix - normalize core entities, denormalize read models."],exampleTitle:"Denormalization example - snapshot customer name in orders",example:`// customers
{ "_id": ObjectId("c1"), "name": "Ashish Ranjan", "phone": "9999999999" }

// orders - keep a snapshot for historical accuracy and faster reads
{
  "_id": ObjectId("o1"),
  "customerId": ObjectId("c1"),
  "customerNameSnapshot": "Ashish Ranjan",
  "total": 1397,
  "createdAt": ISODate("...")
}`,notes:["Snapshot fields avoid surprises when the original value changes later.","This is very common for invoices and order history."]},{id:"readWriteTradeoff",icon:a.jsx(Cn,{}),title:"Read heavy vs write heavy design",points:["Read heavy systems optimize for fast reads - dashboards, catalog browsing, analytics views.","Write heavy systems optimize for fast writes - event logs, telemetry, click tracking.","Indexes and denormalization help reads but cost more on writes."],exampleTitle:"Read heavy example - catalog listing endpoint",example:`// You display product cards - name, price, rating, thumbnail
// So keep these fields on the product document itself
{
  "_id": ObjectId("p1"),
  "name": "Laptop Stand",
  "price": 999,
  "ratingAvg": 4.6,
  "thumbUrl": "https://picsum.photos/seed/p1/600/400"
}

// index for sorting and filtering
db.products.createIndex({ price: 1 })
db.products.createIndex({ ratingAvg: -1 })`,extraTitle:"Write heavy example - append only events",extra:`// clickEvents (append only)
{ "_id": ObjectId("e1"), "userId": ObjectId("u1"), "type": "CLICK", "at": ISODate("...") }

// index only for key queries
db.clickEvents.createIndex({ userId: 1, at: -1 })
db.clickEvents.createIndex({ at: -1 })`,notes:["Write heavy collections should have fewer indexes.","Read heavy collections can afford more indexes and denormalization."]},{id:"antiPatterns",icon:a.jsx(or,{}),title:"Common schema mistakes (beginner traps)",points:["Unbounded arrays inside one document - they keep growing and become slow to update.","Over embedding shared entities - data becomes duplicated and inconsistent.","Indexing everything - write throughput drops and storage grows fast."],exampleTitle:"Unbounded array mistake",example:`// avoid this if it grows forever
{
  "_id": ObjectId("u1"),
  "name": "Ashish",
  "notifications": [ /* thousands of items forever */ ]
}

// better
// store notifications in separate collection with userId index`,notes:["If something can grow forever - model it as its own collection."],warningTitle:"Performance reminder",warning:`- Schema and indexes are linked
- A great schema can reduce the need for joins and heavy pipelines
- A bad schema forces you to do expensive queries forever`},{id:"howToDesign",icon:a.jsx(Gm,{}),title:"A practical workflow to design schema",points:["Step 1 - list your top API endpoints and their response shapes.","Step 2 - decide which data must be read together.","Step 3 - decide which lists can grow forever.","Step 4 - choose embedding or referencing based on steps 2 and 3.","Step 5 - add indexes for filters and sorts.","Step 6 - verify with explain and real data sizes."],exampleTitle:"Mini checklist",example:`- What are the top queries
- What fields are filtered
- What fields are sorted
- What fields are displayed
- What can grow unbounded
- What must stay historically accurate`,notes:["Design for today plus realistic growth, not for imaginary perfect future."]}],[]);return H.useEffect(()=>{const l=p=>{var h;((h=p==null?void 0:p.detail)==null?void 0:h.key)==="schemaDesign"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(At.Wrapper,{children:a.jsxs(At.Card,{children:[a.jsxs(At.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Fe,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Schema Design"}),a.jsx("div",{className:"subtitle",children:"Embedding, referencing, normalization, denormalization, and real patterns"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(fr,{}),a.jsx("span",{children:"Beginner friendly"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Er,{}):a.jsx(Sr,{})})]})]}),i&&a.jsxs(At.Body,{children:[a.jsxs(At.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(or,{})}),a.jsx("div",{className:"text",children:"Schema design is the hidden superpower of backend engineering. If the data shape is right, queries become simple and fast. If the data shape is wrong, you will fight performance forever."})]}),a.jsx(At.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(At.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((h,b)=>a.jsx("li",{children:h},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.extraTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.extraTitle}),a.jsx("pre",{className:"code",children:l.extra})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((h,b)=>a.jsx("li",{children:h},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Dt={Wrapper:j.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:j.div`
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        user-select: none;

        background-image: radial-gradient(
            620px 260px at 14% 0%,
            color-mix(in srgb, var(--color-primary) 14%, transparent),
            transparent 62%
        );

        transition:
            background-color 140ms ease,
            border-color 140ms ease;

        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-surface-2) 40%,
                transparent
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 16%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 16px;
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            max-width: 72ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-text-muted);
            }

            @media (max-width: 520px) {
                display: none;
            }
        }

        .toggleIcon {
            width: 36px;
            height: 36px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }
    `,Body:j.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:j.div`
        display: flex;
        align-items: flex-start;
        gap: 12px;
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface-2) 78%, transparent);

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionGrid:j.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface) 86%, transparent);
        position: relative;
        overflow: hidden;

        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                560px 240px at 16% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );
            box-shadow: 0 18px 52px var(--color-shadow);

            &::after {
                opacity: 1;
            }
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .secIcon {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .points {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .points li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .points li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .block {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .blockTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 30%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: color-mix(
                in srgb,
                var(--color-text-primary) 92%,
                transparent
            );
            font-size: 12px;
            line-height: 1.65;
        }

        .notes {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .notesTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .notes ul {
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .notes li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .notes li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-primary) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .warn {
            margin-top: 12px;
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 40%,
                    var(--color-border)
                );
            border-radius: 16px;
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                var(--color-code-bg)
            );
        }

        .warnTitle {
            padding: 10px 12px;
            border-bottom: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 30%,
                    var(--color-border)
                );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );
        }
    `},fg=()=>{const[i,c]=H.useState(!0),d=H.useMemo(()=>[{id:"whatIsSql",icon:a.jsx(Fe,{}),title:"What is SQL and why it exists",points:["SQL means Structured Query Language.","SQL is used to store and query data in relational databases (RDBMS).","Relational databases store data in tables with rows and columns.","SQL is declarative - you tell what you want, the database decides how to get it."],exampleTitle:"Example - read data",example:`SELECT * FROM users;
SELECT name, email FROM users WHERE is_active = TRUE;`,notes:["RDBMS common examples - PostgreSQL, MySQL, SQL Server, Oracle.","SQL is great when you need relationships, constraints, and strong consistency."]},{id:"coreTerms",icon:a.jsx(gp,{}),title:"Core terms you must know",points:["Table - a set of rows (like a spreadsheet) for one entity, like users or orders.","Row - one record inside a table.","Column - one field inside a row, like name or created_at.","Schema - structure definition of tables, columns, and constraints."],exampleTitle:"Example - users table",example:`CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);`,notes:["PRIMARY KEY means unique identifier for each row.","UNIQUE means no duplicate values allowed in that column.","NOT NULL means value is required."]},{id:"keys",icon:a.jsx(Hm,{}),title:"Primary key and foreign key (relationships)",points:["Primary key (PK) uniquely identifies a row in a table.","Foreign key (FK) is a column that points to a primary key in another table.","Foreign keys enforce referential integrity - no broken references."],exampleTitle:"Example - orders referencing users",example:`CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id),
  status TEXT NOT NULL,
  total NUMERIC(12,2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);`,notes:["REFERENCES users(id) means user_id must exist in users table.","This is how relational data stays clean over time."]},{id:"crud",icon:a.jsx(Ym,{}),title:"CRUD basics - create, read, update, delete",points:["CRUD is the core set of operations for most apps.","Create - INSERT","Read - SELECT","Update - UPDATE","Delete - DELETE"],exampleTitle:"Examples - CRUD",example:`-- Create
INSERT INTO users (name, email) VALUES ('Ashish', 'ashish@example.com');

-- Read
SELECT id, name, email FROM users WHERE email = 'ashish@example.com';

-- Update
UPDATE users SET is_active = FALSE WHERE id = 10;

-- Delete
DELETE FROM users WHERE id = 10;`,notes:["In production, hard delete is often avoided. Use soft delete like deleted_at."]},{id:"queryOrder",icon:a.jsx(Te,{}),title:"Query structure and execution mental model",points:["A SELECT query usually has these parts - SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT.","WHERE filters rows before grouping.","GROUP BY groups rows.","HAVING filters groups after grouping.","ORDER BY sorts results.","LIMIT restricts number of rows returned."],exampleTitle:"Example - grouped report",example:`SELECT
  status,
  COUNT(*) AS orders_count,
  SUM(total) AS revenue
FROM orders
WHERE created_at >= NOW() - INTERVAL '7 days'
GROUP BY status
HAVING SUM(total) > 1000
ORDER BY revenue DESC
LIMIT 10;`,notes:["WHERE is row level filter, HAVING is group level filter."]},{id:"acid",icon:a.jsx(bo,{}),title:"ACID (transaction guarantees)",points:["ACID is a set of guarantees for transactions.","A - Atomicity - all operations succeed or none do.","C - Consistency - constraints remain valid after transaction.","I - Isolation - concurrent transactions do not break each other.","D - Durability - committed data survives crashes."],exampleTitle:"Example - money transfer transaction",example:`BEGIN;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

COMMIT;`,notes:["If something fails, you do ROLLBACK so partial changes are not saved."]},{id:"indexes",icon:a.jsx(pr,{}),title:"Indexes in SQL (when and why)",points:["Indexes speed up reads by avoiding full table scans.","Indexes can support filtering and sorting.","Too many indexes slow down INSERT and UPDATE."],exampleTitle:"Example - indexes for common queries",example:`-- Search by email
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- List orders per user, newest first
CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);`,notes:["Index choice must match query patterns - filter and sort fields."]},{id:"explain",icon:a.jsx(Ar,{}),title:"How to verify performance (EXPLAIN)",points:["Do not guess performance. Use EXPLAIN to see the plan.","Look for - index scan vs sequential scan.","If you see sequential scan on a huge table, index might be missing or not usable."],exampleTitle:"Example - Postgres EXPLAIN",example:`EXPLAIN ANALYZE
SELECT id, total, created_at
FROM orders
WHERE user_id = 10
ORDER BY created_at DESC
LIMIT 20;`,notes:["EXPLAIN ANALYZE actually runs the query and gives real timing."],warningTitle:"Common beginner mistake",warning:`- Selecting too many columns (SELECT *) for list pages
- Deep pagination using OFFSET on huge tables
- Missing indexes for filter + sort`}],[]);return H.useEffect(()=>{const l=p=>{var h;((h=p==null?void 0:p.detail)==null?void 0:h.key)==="sql"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Dt.Wrapper,{children:a.jsxs(Dt.Card,{children:[a.jsxs(Dt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Fe,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"SQL"}),a.jsx("div",{className:"subtitle",children:"Tables, keys, CRUD, query structure, ACID, indexes, explain"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(fr,{}),a.jsx("span",{children:"At a glance"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Er,{}):a.jsx(Sr,{})})]})]}),i&&a.jsxs(Dt.Body,{children:[a.jsxs(Dt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(or,{})}),a.jsx("div",{className:"text",children:"SQL is the language of relational truth. It shines when data has relationships, constraints, and transactions. Learn the mental model and you can debug slow queries and messy schemas like a pro."})]}),a.jsx(Dt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Dt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((h,b)=>a.jsx("li",{children:h},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((h,b)=>a.jsx("li",{children:h},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Mt={Wrapper:j.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:j.div`
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        user-select: none;

        background-image: radial-gradient(
            620px 260px at 14% 0%,
            color-mix(in srgb, var(--color-accent) 14%, transparent),
            transparent 62%
        );

        transition:
            background-color 140ms ease,
            border-color 140ms ease;

        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-surface-2) 40%,
                transparent
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 16%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 16px;
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            max-width: 72ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-text-muted);
            }

            @media (max-width: 520px) {
                display: none;
            }
        }

        .toggleIcon {
            width: 36px;
            height: 36px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }
    `,Body:j.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:j.div`
        display: flex;
        align-items: flex-start;
        gap: 12px;
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface-2) 78%, transparent);

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionGrid:j.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface) 86%, transparent);
        position: relative;
        overflow: hidden;

        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                560px 240px at 16% 0%,
                color-mix(in srgb, var(--color-accent) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );
            box-shadow: 0 18px 52px var(--color-shadow);

            &::after {
                opacity: 1;
            }
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .secIcon {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .points {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .points li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .points li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .block {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .blockTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 30%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: color-mix(
                in srgb,
                var(--color-text-primary) 92%,
                transparent
            );
            font-size: 12px;
            line-height: 1.65;
        }

        .notes {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .notesTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .notes ul {
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .notes li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .notes li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-primary) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .warn {
            margin-top: 12px;
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 40%,
                    var(--color-border)
                );
            border-radius: 16px;
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                var(--color-code-bg)
            );
        }

        .warnTitle {
            padding: 10px 12px;
            border-bottom: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 30%,
                    var(--color-border)
                );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );
        }
    `},hg=()=>{const[i,c]=H.useState(!0),d=H.useMemo(()=>[{id:"whatIsJoin",icon:a.jsx(Tn,{}),title:"What is a join (simple mental model)",points:["A join combines rows from two (or more) tables using a related column.","Most common join key is a foreign key - like orders.user_id referencing users.id.","Joins let you fetch related data in one query instead of multiple queries."],exampleTitle:"Example - tables",example:`-- users
-- id | name  | email
-- 1  | Ashish| ashish@example.com
-- 2  | Neha  | neha@example.com

-- orders
-- id | user_id | total
-- 10 | 1       | 1397
-- 11 | 1       | 499
-- 12 | 2       | 999`,notes:["If you want order info plus user name, you join orders with users."]},{id:"innerJoin",icon:a.jsx(hp,{}),title:"INNER JOIN - only matching rows",points:["INNER JOIN returns rows where the join condition matches on both sides.","If a user has no orders, that user will not appear in INNER JOIN result.","This is the most commonly used join type."],exampleTitle:"Example - orders with user name",example:`SELECT
  o.id AS order_id,
  u.name AS user_name,
  o.total
FROM orders o
INNER JOIN users u ON u.id = o.user_id;`,notes:["If there is no matching user for an order.user_id, that order is excluded."]},{id:"leftJoin",icon:a.jsx(dl,{}),title:"LEFT JOIN - keep all left rows",points:["LEFT JOIN returns all rows from the left table, plus matching rows from the right table.","If there is no match on the right side, right side columns become NULL.","Use LEFT JOIN when you want all rows from the main table even if related data is missing."],exampleTitle:"Example - list all users and their orders (if any)",example:`SELECT
  u.id,
  u.name,
  o.id AS order_id,
  o.total
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
ORDER BY u.id;`,notes:["Users without orders still appear, with order_id = NULL."],extraTitle:"Common pattern - find users with no orders",extra:`SELECT u.id, u.name
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE o.id IS NULL;`},{id:"rightJoin",icon:a.jsx(dl,{}),title:"RIGHT JOIN - keep all right rows",points:["RIGHT JOIN is like LEFT JOIN but reversed - keeps all rows from the right table.","Many teams avoid RIGHT JOIN to keep queries consistent - use LEFT JOIN by swapping tables.","Still useful to know because you will see it in old code sometimes."],exampleTitle:"Example - keep all orders even if user is missing",example:`SELECT
  o.id AS order_id,
  u.name AS user_name,
  o.total
FROM users u
RIGHT JOIN orders o ON o.user_id = u.id;`,notes:["Same query using LEFT JOIN style"],extraTitle:"Equivalent using LEFT JOIN (preferred style)",extra:`SELECT
  o.id AS order_id,
  u.name AS user_name,
  o.total
FROM orders o
LEFT JOIN users u ON u.id = o.user_id;`},{id:"fullJoin",icon:a.jsx(Te,{}),title:"FULL JOIN - keep all rows from both sides",points:["FULL JOIN returns all rows from both tables.","If no match, missing side becomes NULL.","Not supported in some databases (example - MySQL historically). Postgres supports it."],exampleTitle:"Example - show all users and all orders, matched when possible",example:`SELECT
  u.id AS user_id,
  u.name,
  o.id AS order_id,
  o.total
FROM users u
FULL JOIN orders o ON o.user_id = u.id;`,notes:["Useful for data audits - finding mismatches on either side."]},{id:"joinCondition",icon:a.jsx(pr,{}),title:"Join conditions and filtering (important detail)",points:["Join condition usually goes in ON clause.","Row filtering usually goes in WHERE clause.","If you filter the right table in WHERE after a LEFT JOIN, you might accidentally turn it into an INNER JOIN behavior."],exampleTitle:"Common mistake - filtering in WHERE after LEFT JOIN",example:`-- This removes users with no orders because o.total becomes NULL
SELECT u.id, u.name, o.total
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE o.total > 500;`,notes:["Because NULL > 500 is not true, those rows disappear."],extraTitle:"Correct approach - filter inside ON to keep LEFT behavior",extra:`SELECT u.id, u.name, o.total
FROM users u
LEFT JOIN orders o
  ON o.user_id = u.id
 AND o.total > 500;`},{id:"performance",icon:a.jsx(Ar,{}),title:"Join performance (practical rules)",points:["Indexes on join keys matter a lot - users.id is primary key, orders.user_id should be indexed.","Joining huge tables without indexes can be extremely slow.","Select only needed columns. Avoid SELECT * for joined queries.","Filter early - reduce rows before join when possible."],exampleTitle:"Index example",example:`-- orders.user_id should be indexed for fast joins
CREATE INDEX idx_orders_user_id ON orders(user_id);`,notes:["For frequent query - orders by user ordered by created_at - use a compound index"],extraTitle:"Compound index for common pattern",extra:"CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);",warningTitle:"Beginner trap",warning:`- Joining on non-indexed columns
- Returning too many columns
- Joining first and filtering later`}],[]);return H.useEffect(()=>{const l=p=>{var h;((h=p==null?void 0:p.detail)==null?void 0:h.key)==="joins"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Mt.Wrapper,{children:a.jsxs(Mt.Card,{children:[a.jsxs(Mt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Tn,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Joins"}),a.jsx("div",{className:"subtitle",children:"INNER, LEFT, RIGHT, FULL joins with examples and performance habits"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(fr,{}),a.jsx("span",{children:"At a glance"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Er,{}):a.jsx(Sr,{})})]})]}),i&&a.jsxs(Mt.Body,{children:[a.jsxs(Mt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(or,{})}),a.jsx("div",{className:"text",children:"Joins are how SQL connects reality. They are powerful, but can get slow if you join huge tables without indexes. Learn the join types and the ON vs WHERE trick and you avoid most beginner mistakes."})]}),a.jsx(Mt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Mt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((h,b)=>a.jsx("li",{children:h},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.extraTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.extraTitle}),a.jsx("pre",{className:"code",children:l.extra})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((h,b)=>a.jsx("li",{children:h},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Ft={Wrapper:j.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:j.div`
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        user-select: none;

        background-image: radial-gradient(
            620px 260px at 14% 0%,
            color-mix(in srgb, var(--color-primary) 14%, transparent),
            transparent 62%
        );

        transition:
            background-color 140ms ease,
            border-color 140ms ease;

        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-surface-2) 40%,
                transparent
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 16%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 16px;
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            max-width: 72ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-text-muted);
            }

            @media (max-width: 520px) {
                display: none;
            }
        }

        .toggleIcon {
            width: 36px;
            height: 36px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }
    `,Body:j.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:j.div`
        display: flex;
        align-items: flex-start;
        gap: 12px;
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface-2) 78%, transparent);

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionGrid:j.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface) 86%, transparent);
        position: relative;
        overflow: hidden;

        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                560px 240px at 16% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );
            box-shadow: 0 18px 52px var(--color-shadow);

            &::after {
                opacity: 1;
            }
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .secIcon {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .points {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .points li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .points li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .block {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .blockTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 30%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: color-mix(
                in srgb,
                var(--color-text-primary) 92%,
                transparent
            );
            font-size: 12px;
            line-height: 1.65;
        }

        .notes {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .notesTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .notes ul {
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .notes li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .notes li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-primary) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .warn {
            margin-top: 12px;
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 40%,
                    var(--color-border)
                );
            border-radius: 16px;
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                var(--color-code-bg)
            );
        }

        .warnTitle {
            padding: 10px 12px;
            border-bottom: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 30%,
                    var(--color-border)
                );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );
        }
    `},mg=()=>{const[i,c]=H.useState(!0),d=H.useMemo(()=>[{id:"whatIsSubquery",icon:a.jsx(Te,{}),title:"What is a subquery (simple mental model)",points:["A subquery is a query inside another query.","The inner query produces a value or a set of rows used by the outer query.","Subqueries help when you need intermediate results without creating temporary tables."],exampleTitle:"Basic shape",example:`SELECT *
FROM orders
WHERE user_id IN (
  SELECT id FROM users WHERE is_active = TRUE
);`,notes:["Subqueries can return one value (scalar) or many values (list or table)."]},{id:"types",icon:a.jsx(vp,{}),title:"Types of subqueries you will see",points:["Scalar subquery - returns a single value.","List subquery - returns one column with multiple values (used with IN).","Table subquery - returns a result set used like a table (derived table).","Correlated subquery - inner query depends on outer query row."],exampleTitle:"Table subquery (derived table)",example:`SELECT t.user_id, t.revenue
FROM (
  SELECT user_id, SUM(total) AS revenue
  FROM orders
  WHERE status = 'PAID'
  GROUP BY user_id
) t
WHERE t.revenue > 1000
ORDER BY t.revenue DESC;`,notes:["Derived tables are often clearer than deeply nested WHERE subqueries."]},{id:"scalar",icon:a.jsx(Fu,{}),title:"Scalar subquery - one value",points:["Scalar subquery returns exactly one value (one row, one column).","It is used like a constant inside SELECT or WHERE.","If it returns more than one row, the query fails."],exampleTitle:"Example - compare with average order value",example:`SELECT id, user_id, total
FROM orders
WHERE total > (
  SELECT AVG(total) FROM orders WHERE status = 'PAID'
);`,notes:["This reads like English - orders above the average paid order value."]},{id:"inSubquery",icon:a.jsx(pr,{}),title:"IN subquery - filter by a list",points:["IN is used when the subquery returns a list of values.","Good for - users who purchased something, products that appear in orders.","For large lists, EXISTS can be faster in many databases."],exampleTitle:"Example - users who placed at least one paid order",example:`SELECT id, name
FROM users
WHERE id IN (
  SELECT user_id
  FROM orders
  WHERE status = 'PAID'
);`,notes:["If orders.user_id is indexed, this can be decent. But EXISTS is often preferred."]},{id:"exists",icon:a.jsx(vl,{}),title:"EXISTS - check presence (very common in production)",points:["EXISTS returns true if the subquery finds at least one matching row.","Database can stop searching early when it finds a match.","Great for presence checks - does a row exist for this parent row."],exampleTitle:"Example - users who have paid orders (EXISTS)",example:`SELECT u.id, u.name
FROM users u
WHERE EXISTS (
  SELECT 1
  FROM orders o
  WHERE o.user_id = u.id
    AND o.status = 'PAID'
);`,notes:["SELECT 1 is a convention - we only care if a row exists, not the columns."],extraTitle:"NOT EXISTS - users with no orders",extra:`SELECT u.id, u.name
FROM users u
WHERE NOT EXISTS (
  SELECT 1
  FROM orders o
  WHERE o.user_id = u.id
);`},{id:"correlated",icon:a.jsx(Fu,{}),title:"Correlated subquery (inner query depends on outer row)",points:["Correlated subquery references columns from the outer query.","It runs logically per row, but databases may optimize it internally.","Great for - per user metrics, latest record per group patterns."],exampleTitle:"Example - each user and their last order date",example:`SELECT
  u.id,
  u.name,
  (
    SELECT MAX(o.created_at)
    FROM orders o
    WHERE o.user_id = u.id
  ) AS last_order_at
FROM users u;`,notes:["This is a classic use case - a scalar correlated subquery in SELECT."]},{id:"joinVsSubquery",icon:a.jsx(Te,{}),title:"Subquery vs join (how to choose)",points:["Use JOIN when you need columns from the related table in result rows.","Use EXISTS when you only need a yes or no - does a matching row exist.","Use derived table when you need aggregation first, then filter that result.","Readability matters - prefer the clearest query for your team."],exampleTitle:"Same problem - users with paid orders",example:`-- Option A - EXISTS
SELECT u.id, u.name
FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o
  WHERE o.user_id = u.id AND o.status = 'PAID'
);

-- Option B - JOIN + DISTINCT
SELECT DISTINCT u.id, u.name
FROM users u
JOIN orders o ON o.user_id = u.id
WHERE o.status = 'PAID';`,notes:["EXISTS avoids duplicates naturally. JOIN may require DISTINCT."]},{id:"performance",icon:a.jsx(Ar,{}),title:"Performance and indexing rules",points:["Index the columns used in subquery filters - like orders.user_id and orders.status.","EXISTS can be faster because it can stop at first match.","Avoid subqueries that return huge lists for IN on large datasets.","Use EXPLAIN to see the plan - never guess."],exampleTitle:"Indexes that matter",example:`-- Common helpful indexes
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status_user ON orders(status, user_id);

-- For latest order per user patterns
CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);`,notes:["If queries feel slow, check whether your subquery is forcing full scans."],warningTitle:"Beginner traps",warning:`- Using IN with a subquery returning millions of rows
- Forgetting indexes on foreign key columns
- Writing correlated subqueries without supporting indexes`}],[]);return H.useEffect(()=>{const l=p=>{var h;((h=p==null?void 0:p.detail)==null?void 0:h.key)==="subqueries"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Ft.Wrapper,{children:a.jsxs(Ft.Card,{children:[a.jsxs(Ft.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Te,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Subqueries"}),a.jsx("div",{className:"subtitle",children:"Scalar, IN, EXISTS, correlated subqueries with real patterns"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(fr,{}),a.jsx("span",{children:"Beginner friendly"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Er,{}):a.jsx(Sr,{})})]})]}),i&&a.jsxs(Ft.Body,{children:[a.jsxs(Ft.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(or,{})}),a.jsx("div",{className:"text",children:"Subqueries are like mini-queries that feed into a bigger query. Learn EXISTS and correlated subqueries and you can express many real production filters and reports cleanly."})]}),a.jsx(Ft.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Ft.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((h,b)=>a.jsx("li",{children:h},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.extraTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.extraTitle}),a.jsx("pre",{className:"code",children:l.extra})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((h,b)=>a.jsx("li",{children:h},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Bt={Wrapper:j.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:j.div`
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        user-select: none;

        background-image: radial-gradient(
            620px 260px at 14% 0%,
            color-mix(in srgb, var(--color-primary) 14%, transparent),
            transparent 62%
        );

        transition:
            background-color 140ms ease,
            border-color 140ms ease;

        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-surface-2) 40%,
                transparent
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 16%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 16px;
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            max-width: 72ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-text-muted);
            }

            @media (max-width: 520px) {
                display: none;
            }
        }

        .toggleIcon {
            width: 36px;
            height: 36px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }
    `,Body:j.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:j.div`
        display: flex;
        align-items: flex-start;
        gap: 12px;
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface-2) 78%, transparent);

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionGrid:j.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface) 86%, transparent);
        position: relative;
        overflow: hidden;

        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                560px 240px at 16% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );
            box-shadow: 0 18px 52px var(--color-shadow);

            &::after {
                opacity: 1;
            }
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .secIcon {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .points {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .points li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .points li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .block {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .blockTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 30%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: color-mix(
                in srgb,
                var(--color-text-primary) 92%,
                transparent
            );
            font-size: 12px;
            line-height: 1.65;
        }

        .notes {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .notesTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .notes ul {
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .notes li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .notes li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-primary) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .warn {
            margin-top: 12px;
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 40%,
                    var(--color-border)
                );
            border-radius: 16px;
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                var(--color-code-bg)
            );
        }

        .warnTitle {
            padding: 10px 12px;
            border-bottom: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 30%,
                    var(--color-border)
                );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );
        }
    `},gg=()=>{const[i,c]=H.useState(!0),d=H.useMemo(()=>[{id:"whatIsTxn",icon:a.jsx(bo,{}),title:"What is a transaction (simple mental model)",points:["A transaction is a group of database operations treated as one unit.","Either everything succeeds (commit) or everything is undone (rollback).","Transactions protect your data from partial updates and concurrency bugs."],exampleTitle:"Classic example - money transfer",example:`BEGIN;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

COMMIT;`,notes:["If the second update fails, you must rollback so money is not lost."]},{id:"acid",icon:a.jsx(Te,{}),title:"ACID - the 4 guarantees",points:["A - Atomicity - all or nothing.","C - Consistency - constraints remain valid after commit.","I - Isolation - concurrent transactions do not corrupt each other.","D - Durability - once committed, data survives crash."],exampleTitle:"Atomicity and durability mental image",example:`- Atomicity - either both updates happen or neither happens
- Durability - after COMMIT, even power cut should not lose the change`,notes:["Different databases implement these with logs, locks, MVCC, replication protocols."]},{id:"beginCommitRollback",icon:a.jsx(vl,{}),title:"BEGIN, COMMIT, ROLLBACK",points:["BEGIN starts a transaction (some DBs use START TRANSACTION).","COMMIT makes changes permanent.","ROLLBACK undoes all changes in the transaction."],exampleTitle:"Example - safe update with rollback",example:`BEGIN;

UPDATE users SET email = 'new@email.com' WHERE id = 10;

-- If you realize it is wrong
ROLLBACK;

-- If correct
-- COMMIT;`,notes:["In apps, you usually open transaction in code and commit or rollback based on errors."]},{id:"whyNeeded",icon:a.jsx(Fe,{}),title:"Why transactions exist in real systems",points:["To maintain invariants - balances cannot go negative, stock cannot be oversold.","To handle failures safely - app crash mid request, network drop, timeouts.","To handle concurrency - multiple users buying the same item at the same time."],exampleTitle:"Inventory example - oversell bug without transaction",example:`-- Imagine stock = 1
-- Two users buy at the same time

User A reads stock = 1
User B reads stock = 1
Both subtract 1
Stock becomes -1 (or both think purchase succeeded)`,notes:["Transactions plus locking or proper isolation prevent this."]},{id:"isolation",icon:a.jsx(xl,{}),title:"Isolation levels (how strong isolation should be)",points:["Isolation level defines what you can see from other concurrent transactions.","Common levels - READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE.","Higher isolation reduces anomalies but can reduce concurrency (more waiting)."],exampleTitle:"Isolation level summary",example:`- READ UNCOMMITTED - can see uncommitted changes (dirty reads) - rarely used
- READ COMMITTED - only see committed data - common default
- REPEATABLE READ - same row read twice returns same value
- SERIALIZABLE - strongest - behaves like transactions ran one by one`,notes:["Defaults differ by database, and implementation details differ too."]},{id:"anomalies",icon:a.jsx(or,{}),title:"Common concurrency anomalies (what isolation prevents)",points:["Dirty read - reading data that another transaction has not committed yet.","Non-repeatable read - same query returns different result inside same transaction.","Phantom read - rows appear or disappear between reads due to inserts by others.","Lost update - two transactions overwrite each other updates."],exampleTitle:"Non-repeatable read example idea",example:`Transaction A:
BEGIN;
SELECT balance FROM accounts WHERE id = 1; -- 100

Transaction B:
UPDATE accounts SET balance = 50 WHERE id = 1;
COMMIT;

Transaction A again:
SELECT balance FROM accounts WHERE id = 1; -- now 50 (changed)`,notes:["Repeatable read or serializable prevents this kind of surprise depending on DB."]},{id:"locksMvcc",icon:a.jsx(Ar,{}),title:"Locks vs MVCC (how DBs implement isolation)",points:["Locks block other transactions from changing a row or table until transaction ends.","MVCC means Multi Version Concurrency Control - readers see a snapshot while writers create new versions.","Many modern DBs (Postgres) use MVCC heavily to reduce read locks."],exampleTitle:"Row lock example - SELECT FOR UPDATE",example:`BEGIN;

-- lock the row so others cannot modify until commit
SELECT balance
FROM accounts
WHERE id = 1
FOR UPDATE;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;

COMMIT;`,notes:["FOR UPDATE is common when you will update a row and want to prevent race conditions."],warningTitle:"Beginner traps",warning:`- Keeping transactions open too long (locks stay longer)
- Doing external API calls inside a transaction
- Updating rows in random order causing deadlocks`},{id:"deadlocks",icon:a.jsx(hp,{}),title:"Deadlocks (when transactions block each other)",points:["Deadlock happens when Transaction A waits for a lock held by B, and B waits for a lock held by A.","Databases detect deadlocks and kill one transaction so the other can continue.","Best prevention - update rows in consistent order across the codebase."],exampleTitle:"Deadlock idea",example:`Transaction A locks row 1, then wants row 2
Transaction B locks row 2, then wants row 1
Both wait forever -> deadlock -> DB kills one`,notes:["If you see deadlock errors, retry the transaction in code with backoff."]},{id:"distributed",icon:a.jsx(Te,{}),title:"Distributed transactions (microservices reality)",points:["Distributed transaction means multiple systems must commit together.","Classic approach is 2PC (two-phase commit) but it is complex and can block.","Modern systems often use Saga pattern - sequence of steps with compensating actions."],exampleTitle:"Saga example - order payment flow",example:`- Step 1 - create order (PENDING)
- Step 2 - charge payment
- Step 3 - reserve inventory
- Step 4 - mark order as PAID

If step 3 fails:
- refund payment (compensation)
- mark order as CANCELED`,notes:["This is not one DB transaction, it is a workflow with recovery steps."]},{id:"mongoParallel",icon:a.jsx(Fe,{}),title:"MongoDB transactions (parallel notes for this repo)",points:["MongoDB supports multi-document transactions (in replica set and sharded clusters).","Transactions are useful but can be slower than single document atomic updates.","MongoDB single document updates are atomic by default - so embed related data when possible."],exampleTitle:"Mongo single document atomic update idea",example:`// atomic update inside one document
db.accounts.updateOne(
  { _id: ObjectId("...") },
  { $inc: { balance: -500 } }
);`,notes:["Use multi-document transactions when you cannot model the change as a single document update."]}],[]);return H.useEffect(()=>{const l=p=>{var h;((h=p==null?void 0:p.detail)==null?void 0:h.key)==="transactions"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Bt.Wrapper,{children:a.jsxs(Bt.Card,{children:[a.jsxs(Bt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(bo,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Transactions"}),a.jsx("div",{className:"subtitle",children:"ACID, isolation levels, locks, deadlocks, distributed patterns"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(fr,{}),a.jsx("span",{children:"Beginner friendly"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Er,{}):a.jsx(Sr,{})})]})]}),i&&a.jsxs(Bt.Body,{children:[a.jsxs(Bt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(or,{})}),a.jsx("div",{className:"text",children:"Transactions are your safety shield. They prevent half-updates, race conditions, and weird concurrency bugs. Learn them once and you will debug backend issues 10x faster."})]}),a.jsx(Bt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Bt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((h,b)=>a.jsx("li",{children:h},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((h,b)=>a.jsx("li",{children:h},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Wt={Wrapper:j.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:j.div`
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        user-select: none;

        background-image: radial-gradient(
            620px 260px at 14% 0%,
            color-mix(in srgb, var(--color-primary) 14%, transparent),
            transparent 62%
        );

        transition:
            background-color 140ms ease,
            border-color 140ms ease;

        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-surface-2) 40%,
                transparent
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 16%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 16px;
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            max-width: 72ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-text-muted);
            }

            @media (max-width: 520px) {
                display: none;
            }
        }

        .toggleIcon {
            width: 36px;
            height: 36px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }
    `,Body:j.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:j.div`
        display: flex;
        align-items: flex-start;
        gap: 12px;
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface-2) 78%, transparent);

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionGrid:j.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface) 86%, transparent);
        position: relative;
        overflow: hidden;

        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                560px 240px at 16% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );
            box-shadow: 0 18px 52px var(--color-shadow);

            &::after {
                opacity: 1;
            }
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .secIcon {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .points {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .points li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .points li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .block {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .blockTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 30%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: color-mix(
                in srgb,
                var(--color-text-primary) 92%,
                transparent
            );
            font-size: 12px;
            line-height: 1.65;
        }

        .notes {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .notesTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .notes ul {
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .notes li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .notes li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-primary) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .warn {
            margin-top: 12px;
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 40%,
                    var(--color-border)
                );
            border-radius: 16px;
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                var(--color-code-bg)
            );
        }

        .warnTitle {
            padding: 10px 12px;
            border-bottom: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 30%,
                    var(--color-border)
                );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );
        }
    `},xg=()=>{const[i,c]=H.useState(!0),d=H.useMemo(()=>[{id:"whyScale",icon:a.jsx(Qi,{}),title:"Why databases need scaling",points:["Traffic grows - more reads and writes per second.","Data grows - tables and indexes become larger.","Queries grow - more joins, more aggregation, more analytics.","Scaling means keeping latency low and throughput high as load increases."],exampleTitle:"Real symptoms of scaling pain",example:`- API response times increasing
- CPU at 90% all day
- Disk I/O constantly maxed
- Slow queries dominate logs
- Connection pool saturates`,notes:["Scaling is not only hardware - it is also schema, indexes, caching, and architecture."]},{id:"vertical",icon:a.jsx(fp,{}),title:"Vertical scaling (scale up)",points:["Vertical scaling means bigger machine - more CPU, RAM, faster SSD.","Simplest scaling option - no application changes usually required.","Has a hard limit - you cannot scale forever."],exampleTitle:"When vertical scaling works well",example:`- Early stage products
- Moderate traffic
- Single DB can handle workload with better hardware
- You need quick win`,notes:["Often the first step because it is easiest and fastest."]},{id:"horizontal",icon:a.jsx(dl,{}),title:"Horizontal scaling (scale out)",points:["Horizontal scaling means adding more nodes instead of one bigger node.","For reads - add read replicas.","For large data - partition or shard across nodes.","More complex but scales much further than vertical scaling."],exampleTitle:"Horizontal scaling idea",example:`- One primary handles writes
- Multiple replicas handle reads
- For huge systems - split data across shards`,notes:["Most production scaling pain comes from writes, not reads."]},{id:"readReplicas",icon:a.jsx(Bi,{}),title:"Read replicas (classic scale pattern)",points:["Read replica is a copy of primary database that is kept updated via replication.","Your app sends write queries to primary, read queries to replicas.","This can massively increase read capacity.","Main problem is replication lag - replica may be slightly behind primary."],exampleTitle:"App routing mental model",example:`- Writes - go to PRIMARY
- Reads - go to REPLICAS
- Critical reads right after write - read from PRIMARY (read your writes)`,notes:["If you show user their new order immediately, read from primary or use stronger read settings."],warningTitle:"Beginner trap",warning:`- Sending every read to replica without considering lag
- Expecting replicas to solve write bottleneck`},{id:"writeBottlenecks",icon:a.jsx(Ar,{}),title:"Write bottlenecks (why scaling is hard)",points:["Writes need durability - logs, fsync, replication.","Indexes make writes slower because each write updates indexes.","Hot rows cause contention - many updates to same row or document.","Transactions and locks reduce write concurrency."],exampleTitle:"Common write bottleneck examples",example:`- Counter table updated on every request
- Single row holds global state like last_invoice_number
- Highly indexed event table with too many secondary indexes`,notes:["Fixing write bottlenecks often requires data model changes or partitioning."]},{id:"partitioning",icon:a.jsx(Te,{}),title:"Partitioning (split one table into smaller pieces)",points:["Partitioning means splitting a large table into partitions based on a key.","Common keys - date (monthly partitions), tenant_id, region.","Queries become faster because DB can scan only relevant partitions.","This is not always the same as sharding - partitioning can be within one DB node."],exampleTitle:"Date partitioning idea (log table)",example:`-- Conceptual
events_2026_01
events_2026_02
events_2026_03

-- Query for March scans only events_2026_03`,notes:["Partitioning is super useful for time series data and logs."]},{id:"caching",icon:a.jsx(Cn,{}),title:"Caching and read models (reduce DB load)",points:["Caching means serve frequent reads from fast storage instead of DB.","Examples - in-memory cache, CDN, application cache, materialized views.","Also design read models - precomputed tables for dashboards.","Cache is not only Redis - even simple in-app cache can help."],exampleTitle:"Caching mental model",example:`- DB is source of truth
- Cache is fast copy
- Cache must be invalidated or refreshed when data changes`,notes:["Most scale wins are not fancy sharding - they are caching + indexes + query fixes."]},{id:"queryPatterns",icon:a.jsx(vo,{}),title:"Query distribution patterns (how systems route traffic)",points:["Read heavy endpoints - route to replicas and cache.","Write heavy endpoints - keep minimal indexes and batch writes.","Analytics queries - run on separate warehouse or replica to avoid hurting primary.","Multi-tenant systems - route by tenant to partitions or shards."],exampleTitle:"Production pattern - OLTP vs OLAP",example:`- OLTP (transactions) - fast small queries, primary DB
- OLAP (analytics) - large scans, separate system or replica`,notes:["Mixing analytics scans with transactional DB can destroy latency."]},{id:"practicalPlan",icon:a.jsx(Fe,{}),title:"Practical scaling plan (simple order)",points:["Step 1 - measure - slow queries, CPU, I/O, connections.","Step 2 - fix queries + indexes (often biggest win).","Step 3 - add caching for hot reads.","Step 4 - add read replicas if reads dominate.","Step 5 - partition large tables (logs, events).","Step 6 - shard only when needed - it increases complexity a lot."],exampleTitle:"Quick checklist",example:`- What are top 10 slow queries
- Which indexes are missing
- Which endpoints are read heavy
- Which endpoints are write heavy
- Which tables grow fastest
- What can be cached safely`,notes:["Scaling is mostly engineering discipline and measurement, not magic hardware."],warningTitle:"Do not do this too early",warning:`- Shard before fixing indexes and queries
- Add replicas before understanding lag behavior
- Cache everything without invalidation plan`}],[]);return H.useEffect(()=>{const l=p=>{var h;((h=p==null?void 0:p.detail)==null?void 0:h.key)==="scalingDatabases"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Wt.Wrapper,{children:a.jsxs(Wt.Card,{children:[a.jsxs(Wt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Qi,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Scaling Databases"}),a.jsx("div",{className:"subtitle",children:"Vertical vs horizontal scaling, replicas, partitioning, caching and real patterns"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(fr,{}),a.jsx("span",{children:"Production focused"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Er,{}):a.jsx(Sr,{})})]})]}),i&&a.jsxs(Wt.Body,{children:[a.jsxs(Wt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(or,{})}),a.jsx("div",{className:"text",children:"Scaling databases is mostly about removing bottlenecks in the right order. Start with measurement, fix slow queries and indexes, add caching, then replicas. Sharding is powerful but it is not the first move."})]}),a.jsx(Wt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Wt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((h,b)=>a.jsx("li",{children:h},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((h,b)=>a.jsx("li",{children:h},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},$t={Wrapper:j.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:j.div`
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        user-select: none;

        background-image: radial-gradient(
            620px 260px at 14% 0%,
            color-mix(in srgb, var(--color-primary) 14%, transparent),
            transparent 62%
        );

        transition:
            background-color 140ms ease,
            border-color 140ms ease;

        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-surface-2) 40%,
                transparent
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 16%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 16px;
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            max-width: 72ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-text-muted);
            }

            @media (max-width: 520px) {
                display: none;
            }
        }

        .toggleIcon {
            width: 36px;
            height: 36px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }
    `,Body:j.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:j.div`
        display: flex;
        align-items: flex-start;
        gap: 12px;
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface-2) 78%, transparent);

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionGrid:j.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface) 86%, transparent);
        position: relative;
        overflow: hidden;

        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                560px 240px at 16% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );
            box-shadow: 0 18px 52px var(--color-shadow);

            &::after {
                opacity: 1;
            }
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .secIcon {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .points {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .points li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .points li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .block {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .blockTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 30%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: color-mix(
                in srgb,
                var(--color-text-primary) 92%,
                transparent
            );
            font-size: 12px;
            line-height: 1.65;
        }

        .notes {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .notesTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .notes ul {
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .notes li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .notes li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-primary) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .warn {
            margin-top: 12px;
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 40%,
                    var(--color-border)
                );
            border-radius: 16px;
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                var(--color-code-bg)
            );
        }

        .warnTitle {
            padding: 10px 12px;
            border-bottom: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 30%,
                    var(--color-border)
                );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );
        }
    `},vg=()=>{const[i,c]=H.useState(!0),d=H.useMemo(()=>[{id:"whatIsReplication",icon:a.jsx(Bi,{}),title:"What is replication (simple mental model)",points:["Replication means keeping copies of your database data on multiple machines.","Main goals - high availability (HA), disaster recovery, and scaling reads.","Usually there is one primary (leader) for writes and one or more replicas (followers) for copying."],exampleTitle:"Mental picture",example:`- PRIMARY (writes)
- REPLICA 1 (copy for reads)
- REPLICA 2 (copy for reads and failover)`,notes:["Replication is not the same as backups. Backups are point-in-time snapshots. Replication is continuous copying."]},{id:"leaderFollower",icon:a.jsx(xp,{}),title:"Primary-secondary (leader-follower) replication",points:["Primary handles writes and produces a stream of changes (log).","Replicas read that change stream and apply it to stay updated.","Replicas usually serve read queries to offload the primary."],exampleTitle:"SQL replication idea",example:`- Primary writes to WAL (write-ahead log)
- Replicas replay WAL to stay in sync`,notes:["Different databases use different names - WAL, binlog, oplog."]},{id:"syncAsync",icon:a.jsx(Km,{}),title:"Synchronous vs asynchronous replication",points:["Asynchronous - primary commits first, replicas catch up later. Fast writes but can lose last few seconds if primary dies.","Synchronous - primary waits for replica ack before commit. Safer but slower writes.","Many systems use async for performance and accept small risk."],exampleTitle:"Tradeoff",example:`- Async - faster, small window of potential data loss (RPO > 0)
- Sync - safer, higher latency (RPO near 0), lower throughput`,notes:["You pick based on business risk - payments vs likes counter is not same risk."]},{id:"lag",icon:a.jsx(Cn,{}),title:"Replication lag (the most important practical issue)",points:["Replication lag means replica is behind primary.","If your app reads from replica right after a write, user may not see their update immediately.","This is common and must be handled intentionally in app logic."],exampleTitle:"Example - read-your-writes problem",example:`User updates profile on primary (write)
Immediately loads profile page (read)
If read goes to replica and replica is behind, user sees old data`,notes:["Solution patterns - read from primary after write, session stickiness, or stronger read concerns."],warningTitle:"Beginner trap",warning:`- Sending all reads to replicas without thinking about lag
- Assuming replica always has the latest data`},{id:"failover",icon:a.jsx(bo,{}),title:"Failover and high availability",points:["Failover means promoting a replica to become the new primary when the primary fails.","High availability means system continues operating even if a node fails.","Failover can be automatic (orchestrated) or manual depending on setup."],exampleTitle:"Failover steps (simple)",example:`- Detect primary failure
- Choose best replica (most up to date)
- Promote replica to primary
- Update routing so writes go to new primary`,notes:["During failover, writes may pause for a short time."]},{id:"rpoRto",icon:a.jsx(Ar,{}),title:"RPO and RTO (reliability language)",points:["RPO means Recovery Point Objective - how much data you can afford to lose.","RTO means Recovery Time Objective - how long you can afford to be down.","Async replication increases RPO risk. Strong HA reduces RTO."],exampleTitle:"Concrete example",example:`- RPO = 5 seconds means losing last 5 seconds of data is acceptable
- RTO = 2 minutes means service must recover within 2 minutes`,notes:["These are business decisions that guide your architecture."]},{id:"readScaling",icon:a.jsx(Fe,{}),title:"Replication for read scaling (what it does and does not do)",points:["Replication increases read capacity by adding replicas.","Replication does not magically fix write bottlenecks - primary still handles writes.","If you are write heavy, you need partitioning or sharding or redesign."],exampleTitle:"Routing pattern",example:`- Writes -> primary
- Reads -> replicas
- Critical reads (after write) -> primary`,notes:["Most big apps do some form of read scaling with replicas."]},{id:"mongo",icon:a.jsx(Bi,{}),title:"MongoDB replication (replica set basics)",points:["MongoDB uses replica sets - one primary, multiple secondaries.","Replication uses oplog - operation log.","Reads can be configured with read preference and read concern.","Writes can be configured with write concern (example - majority)."],exampleTitle:"Mongo read and write controls (idea)",example:`// write concern idea (pseudo)
db.orders.insertOne(
  { status: "PAID" },
  { writeConcern: { w: "majority" } }
);

// read preference idea (pseudo)
db.orders.find({ userId: ObjectId("...") }).readPref("secondaryPreferred")`,notes:["For critical reads, use primary or stronger read concern to reduce stale data risk."]}],[]);return H.useEffect(()=>{const l=p=>{var h;((h=p==null?void 0:p.detail)==null?void 0:h.key)==="replication"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx($t.Wrapper,{children:a.jsxs($t.Card,{children:[a.jsxs($t.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Bi,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Replication"}),a.jsx("div",{className:"subtitle",children:"Leader-follower, lag, sync vs async, failover, HA, RPO and RTO"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(fr,{}),a.jsx("span",{children:"Real-world"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Er,{}):a.jsx(Sr,{})})]})]}),i&&a.jsxs($t.Body,{children:[a.jsxs($t.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(or,{})}),a.jsx("div",{className:"text",children:"Replication keeps copies of data so your system survives failures and scales reads. The catch is replication lag - replicas can be behind. Once you handle lag consciously, replicas become a superpower."})]}),a.jsx($t.SectionGrid,{children:d.map(l=>{var p;return a.jsxs($t.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((h,b)=>a.jsx("li",{children:h},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((h,b)=>a.jsx("li",{children:h},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Ut={Wrapper:j.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:j.div`
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        user-select: none;

        background-image: radial-gradient(
            620px 260px at 14% 0%,
            color-mix(in srgb, var(--color-primary) 14%, transparent),
            transparent 62%
        );

        transition:
            background-color 140ms ease,
            border-color 140ms ease;

        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-surface-2) 40%,
                transparent
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 16%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 16px;
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            max-width: 76ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-text-muted);
            }

            @media (max-width: 520px) {
                display: none;
            }
        }

        .toggleIcon {
            width: 36px;
            height: 36px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }
    `,Body:j.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:j.div`
        display: flex;
        align-items: flex-start;
        gap: 12px;
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface-2) 78%, transparent);

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,SectionGrid:j.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:j.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface) 86%, transparent);
        position: relative;
        overflow: hidden;

        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                560px 240px at 16% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );
            box-shadow: 0 18px 52px var(--color-shadow);

            &::after {
                opacity: 1;
            }
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .secIcon {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .points {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .points li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .points li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .block {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .blockTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 30%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: color-mix(
                in srgb,
                var(--color-text-primary) 92%,
                transparent
            );
            font-size: 12px;
            line-height: 1.65;
        }

        .notes {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .notesTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .notes ul {
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .notes li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .notes li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-primary) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .warn {
            margin-top: 12px;
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 40%,
                    var(--color-border)
                );
            border-radius: 16px;
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                var(--color-code-bg)
            );
        }

        .warnTitle {
            padding: 10px 12px;
            border-bottom: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 30%,
                    var(--color-border)
                );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );
        }
    `},yg=()=>{const[i,c]=H.useState(!0),d=H.useMemo(()=>[{id:"whatIsSharding",icon:a.jsx(vo,{}),title:"What is sharding (simple mental model)",points:["Sharding is splitting data across multiple database nodes so one machine does not store everything.","Each shard holds only a portion of the data, but together they represent the full dataset.","Main goal - scale storage and write throughput beyond a single machine."],exampleTitle:"Mental picture",example:`- Shard 1 stores users 1 to 1,000,000
- Shard 2 stores users 1,000,001 to 2,000,000
- Shard 3 stores users 2,000,001 to 3,000,000`,notes:["Replication makes copies of data. Sharding splits data. They solve different problems."]},{id:"whyShard",icon:a.jsx(Qi,{}),title:"When you actually need sharding",points:["Your dataset is too large for a single node even with good hardware.","Writes are too heavy for a single primary and you already fixed queries and indexes.","You have clear partition key patterns (tenant_id, user_id, region).","You can accept more operational complexity."],exampleTitle:"Signs you are not ready yet",example:`- You still have slow queries without proper indexes
- You have not tried partitioning or caching
- Most load is reads (replicas can help before sharding)`,notes:["Sharding is powerful, but it is a complexity multiplier."]},{id:"shardKey",icon:a.jsx(Mm,{}),title:"Shard key (the most important decision)",points:["Shard key decides how data is distributed across shards.","A good shard key spreads load evenly and supports common queries.","A bad shard key creates hotspots or forces scatter-gather queries."],exampleTitle:"Good vs bad shard keys",example:`Good:
- user_id (high cardinality)
- tenant_id (multi-tenant systems)
- region + user_id (geography aware)

Bad:
- is_active (low cardinality)
- status (few values)
- created_at if inserts always go to latest range (hot shard risk)`,notes:["You want high cardinality and even distribution, not a few repeated values."]},{id:"routing",icon:a.jsx(pr,{}),title:"Query routing (how the system finds the right shard)",points:["If your query includes shard key, router can send it to one shard (fast).","If query does not include shard key, router may query many shards (scatter-gather).","Design your APIs to include shard key in request path when possible."],exampleTitle:"Fast route vs scatter-gather",example:`Fast:
- GET /users/123/orders
- Query has user_id (shard key) -> hits one shard

Slow:
- GET /orders?status=PAID
- No shard key -> hits all shards -> merges results`,notes:["Scatter-gather queries are the main reason sharded systems feel slower sometimes."]},{id:"balancing",icon:a.jsx(Te,{}),title:"Balancing and chunk movement",points:["Sharded systems need to keep data balanced across shards.","Balancer moves chunks or ranges between shards when one shard is too full or too hot.","Moving data has a cost - network, CPU, and temporary load spikes."],exampleTitle:"Balancing idea",example:`- Shard 1 has 60% of data
- Shard 2 has 20%
- Shard 3 has 20%

Balancer moves some ranges from Shard 1 to others`,notes:["A stable shard key reduces balancing pain."]},{id:"hotspots",icon:a.jsx(or,{}),title:"Hot shards and hotspots (danger zone)",points:["Hotspot means one shard receives most writes or reads.","This happens when shard key causes uneven distribution.","Examples - monotonically increasing key (timestamps) can direct inserts to one shard."],exampleTitle:"Timestamp hotspot example",example:`If shard key is created_at (range based),
all new inserts go to latest time range -> one shard becomes hot`,notes:["Fix patterns - hashed shard keys, compound shard keys, or choose a better key like user_id."],warningTitle:"Beginner traps",warning:`- Choosing shard key without understanding query patterns
- Using low cardinality shard key
- Sharding too early to avoid learning indexing and query tuning`},{id:"crossShard",icon:a.jsx(Ar,{}),title:"Cross-shard queries and transactions",points:["Cross-shard queries are slower because results must be merged across shards.","Cross-shard joins are difficult or not supported like a single SQL database join.","Cross-shard transactions exist in some systems but cost more and add complexity."],exampleTitle:"Design approach",example:`- Prefer queries scoped by shard key
- Keep related data close (same shard) by designing key
- Use denormalization or precomputed views for global reporting`,notes:["For global analytics, many teams move data to a warehouse instead of querying shards."]},{id:"replicationPlusSharding",icon:a.jsx(Fe,{}),title:"Sharding plus replication (real production setup)",points:["Each shard usually has its own replication set for high availability.","So total nodes = shards * replicas per shard.","Example - 4 shards with 3 replicas each = 12 nodes (plus routers and config servers)."],exampleTitle:"Why ops complexity grows",example:`- More nodes
- More monitoring
- More failover events
- More network traffic`,notes:["This is why sharding is usually a later-stage decision."]},{id:"mongo",icon:a.jsx(vo,{}),title:"MongoDB sharding (how it looks in Mongo)",points:["Mongo sharded clusters use mongos router, config servers, and shard replica sets.","Shard key choice is critical to avoid hotspots and scatter-gather.","Mongo supports hashed shard keys to spread inserts more evenly."],exampleTitle:"Mongo shard key ideas",example:`// Example concept only
// Choose shard key that matches query patterns

sh.shardCollection("app.orders", { userId: "hashed" })

// Now queries with userId route well`,notes:["If your app always queries by userId, shard by userId is usually strong."]}],[]);return H.useEffect(()=>{const l=p=>{var h;((h=p==null?void 0:p.detail)==null?void 0:h.key)==="sharding"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Ut.Wrapper,{children:a.jsxs(Ut.Card,{children:[a.jsxs(Ut.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(vo,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Sharding"}),a.jsx("div",{className:"subtitle",children:"Shard keys, routing, balancing, hotspots, cross-shard queries and Mongo patterns"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(fr,{}),a.jsx("span",{children:"High impact topic"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Er,{}):a.jsx(Sr,{})})]})]}),i&&a.jsxs(Ut.Body,{children:[a.jsxs(Ut.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(or,{})}),a.jsx("div",{className:"text",children:"Sharding is how databases scale beyond one machine, but it adds serious complexity. The shard key is the destiny of your cluster. Choose it based on query patterns, cardinality, and hotspot risk."})]}),a.jsx(Ut.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Ut.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((h,b)=>a.jsx("li",{children:h},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((h,b)=>a.jsx("li",{children:h},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},wg=()=>{const i=H.useRef(null),[c,d]=H.useState("overview"),l=[["overview","Overview",a.jsx(wo,{})],["mongoAdvanced","MongoDB Advanced",a.jsx(Fe,{})],["aggregation","Aggregation",a.jsx(Te,{})],["indexStrategy","Index Strategy",a.jsx(pr,{})],["schemaDesign","Schema Design",a.jsx(wo,{})],["sql","SQL",a.jsx(Fe,{})],["joins","Joins",a.jsx(Tn,{})],["subqueries","Subqueries",a.jsx(pr,{})],["transactions","Transactions",a.jsx(xl,{})],["scalingDatabases","Scaling Databases",a.jsx(Cn,{})],["replication","Replication",a.jsx(xp,{})],["sharding","Sharding",a.jsx(Te,{})]];H.useEffect(()=>{c!=="overview"&&window.dispatchEvent(new CustomEvent("a2rp:open-topic",{detail:{key:c}}))},[c]);const p=h=>{var b;d(h),(b=i.current)==null||b.scrollTo({top:0,behavior:"smooth"})};return a.jsxs(tl.Wrapper,{children:[a.jsx(tl.Header,{children:a.jsx(tg,{})}),a.jsxs(tl.Main,{ref:i,children:[a.jsxs("aside",{className:"studyNav","aria-label":"Database topics",children:[a.jsx("div",{className:"studyNavLabel",children:"Study guide"}),a.jsx("nav",{children:l.map(([h,b,_])=>a.jsxs("button",{type:"button",className:c===h?"active":"",onClick:()=>p(h),children:[_,a.jsx("span",{children:b})]},h))}),a.jsx("p",{children:"Choose a topic to open its notes."})]}),a.jsxs("div",{className:"contentWrapper",children:[c==="overview"&&a.jsx(ag,{scrollerRef:i}),a.jsx("div",{className:`topicWrapper mongoAdvanced ${c==="mongoAdvanced"?"activeTopic":""}`,children:a.jsx(cg,{})}),a.jsx("div",{className:`topicWrapper aggregation ${c==="aggregation"?"activeTopic":""}`,children:a.jsx(dg,{})}),a.jsx("div",{className:`topicWrapper indexStrategy ${c==="indexStrategy"?"activeTopic":""}`,children:a.jsx(ug,{})}),a.jsx("div",{className:`topicWrapper schemaDesign ${c==="schemaDesign"?"activeTopic":""}`,children:a.jsx(pg,{})}),a.jsx("div",{className:`topicWrapper sql ${c==="sql"?"activeTopic":""}`,children:a.jsx(fg,{})}),a.jsx("div",{className:`topicWrapper joins ${c==="joins"?"activeTopic":""}`,children:a.jsx(hg,{})}),a.jsx("div",{className:`topicWrapper subqueries ${c==="subqueries"?"activeTopic":""}`,children:a.jsx(mg,{})}),a.jsx("div",{className:`topicWrapper transactions ${c==="transactions"?"activeTopic":""}`,children:a.jsx(gg,{})}),a.jsx("div",{className:`topicWrapper scalingDatabases ${c==="scalingDatabases"?"activeTopic":""}`,children:a.jsx(xg,{})}),a.jsx("div",{className:`topicWrapper replication ${c==="replication"?"activeTopic":""}`,children:a.jsx(vg,{})}),a.jsx("div",{className:`topicWrapper sharding ${c==="sharding"?"activeTopic":""}`,children:a.jsx(yg,{})})]}),a.jsx("div",{className:"footerWrapper",children:a.jsx(ig,{})})]}),a.jsx(lg,{scrollerRef:i})]})};Eh.createRoot(document.getElementById("root")).render(a.jsx(a.Fragment,{children:a.jsx(wg,{})}));
