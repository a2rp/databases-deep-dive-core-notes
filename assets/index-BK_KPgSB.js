(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))l(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&l(b)}).observe(document,{childList:!0,subtree:!0});function d(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function l(p){if(p.ep)return;p.ep=!0;const m=d(p);fetch(p.href,m)}})();function xh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Gs={exports:{}},go={},Qs={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hu;function vh(){if(hu)return oe;hu=1;var i=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),b=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),F=Symbol.iterator;function Y(x){return x===null||typeof x!="object"?null:(x=F&&x[F]||x["@@iterator"],typeof x=="function"?x:null)}var ce={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,U={};function K(x,k,ee){this.props=x,this.context=k,this.refs=U,this.updater=ee||ce}K.prototype.isReactComponent={},K.prototype.setState=function(x,k){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,k,"setState")},K.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ge(){}ge.prototype=K.prototype;function ue(x,k,ee){this.props=x,this.context=k,this.refs=U,this.updater=ee||ce}var ne=ue.prototype=new ge;ne.constructor=ue,J(ne,K.prototype),ne.isPureReactComponent=!0;var O=Array.isArray,Z=Object.prototype.hasOwnProperty,H={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function B(x,k,ee){var re,se={},ie=null,pe=null;if(k!=null)for(re in k.ref!==void 0&&(pe=k.ref),k.key!==void 0&&(ie=""+k.key),k)Z.call(k,re)&&!R.hasOwnProperty(re)&&(se[re]=k[re]);var de=arguments.length-2;if(de===1)se.children=ee;else if(1<de){for(var xe=Array(de),Ne=0;Ne<de;Ne++)xe[Ne]=arguments[Ne+2];se.children=xe}if(x&&x.defaultProps)for(re in de=x.defaultProps,de)se[re]===void 0&&(se[re]=de[re]);return{$$typeof:i,type:x,key:ie,ref:pe,props:se,_owner:H.current}}function ye(x,k){return{$$typeof:i,type:x.type,key:k,ref:x.ref,props:x.props,_owner:x._owner}}function Re(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function ae(x){var k={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ee){return k[ee]})}var _e=/\/+/g;function Ee(x,k){return typeof x=="object"&&x!==null&&x.key!=null?ae(""+x.key):k.toString(36)}function Ge(x,k,ee,re,se){var ie=typeof x;(ie==="undefined"||ie==="boolean")&&(x=null);var pe=!1;if(x===null)pe=!0;else switch(ie){case"string":case"number":pe=!0;break;case"object":switch(x.$$typeof){case i:case c:pe=!0}}if(pe)return pe=x,se=se(pe),x=re===""?"."+Ee(pe,0):re,O(se)?(ee="",x!=null&&(ee=x.replace(_e,"$&/")+"/"),Ge(se,k,ee,"",function(Ne){return Ne})):se!=null&&(Re(se)&&(se=ye(se,ee+(!se.key||pe&&pe.key===se.key?"":(""+se.key).replace(_e,"$&/")+"/")+x)),k.push(se)),1;if(pe=0,re=re===""?".":re+":",O(x))for(var de=0;de<x.length;de++){ie=x[de];var xe=re+Ee(ie,de);pe+=Ge(ie,k,ee,xe,se)}else if(xe=Y(x),typeof xe=="function")for(x=xe.call(x),de=0;!(ie=x.next()).done;)ie=ie.value,xe=re+Ee(ie,de++),pe+=Ge(ie,k,ee,xe,se);else if(ie==="object")throw k=String(x),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return pe}function er(x,k,ee){if(x==null)return x;var re=[],se=0;return Ge(x,re,"","",function(ie){return k.call(ee,ie,se++)}),re}function Qe(x){if(x._status===-1){var k=x._result;k=k(),k.then(function(ee){(x._status===0||x._status===-1)&&(x._status=1,x._result=ee)},function(ee){(x._status===0||x._status===-1)&&(x._status=2,x._result=ee)}),x._status===-1&&(x._status=0,x._result=k)}if(x._status===1)return x._result.default;throw x._result}var we={current:null},I={transition:null},$={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:I,ReactCurrentOwner:H};function P(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:er,forEach:function(x,k,ee){er(x,function(){k.apply(this,arguments)},ee)},count:function(x){var k=0;return er(x,function(){k++}),k},toArray:function(x){return er(x,function(k){return k})||[]},only:function(x){if(!Re(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},oe.Component=K,oe.Fragment=d,oe.Profiler=p,oe.PureComponent=ue,oe.StrictMode=l,oe.Suspense=C,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,oe.act=P,oe.cloneElement=function(x,k,ee){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var re=J({},x.props),se=x.key,ie=x.ref,pe=x._owner;if(k!=null){if(k.ref!==void 0&&(ie=k.ref,pe=H.current),k.key!==void 0&&(se=""+k.key),x.type&&x.type.defaultProps)var de=x.type.defaultProps;for(xe in k)Z.call(k,xe)&&!R.hasOwnProperty(xe)&&(re[xe]=k[xe]===void 0&&de!==void 0?de[xe]:k[xe])}var xe=arguments.length-2;if(xe===1)re.children=ee;else if(1<xe){de=Array(xe);for(var Ne=0;Ne<xe;Ne++)de[Ne]=arguments[Ne+2];re.children=de}return{$$typeof:i,type:x.type,key:se,ref:ie,props:re,_owner:pe}},oe.createContext=function(x){return x={$$typeof:b,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:m,_context:x},x.Consumer=x},oe.createElement=B,oe.createFactory=function(x){var k=B.bind(null,x);return k.type=x,k},oe.createRef=function(){return{current:null}},oe.forwardRef=function(x){return{$$typeof:_,render:x}},oe.isValidElement=Re,oe.lazy=function(x){return{$$typeof:L,_payload:{_status:-1,_result:x},_init:Qe}},oe.memo=function(x,k){return{$$typeof:G,type:x,compare:k===void 0?null:k}},oe.startTransition=function(x){var k=I.transition;I.transition={};try{x()}finally{I.transition=k}},oe.unstable_act=P,oe.useCallback=function(x,k){return we.current.useCallback(x,k)},oe.useContext=function(x){return we.current.useContext(x)},oe.useDebugValue=function(){},oe.useDeferredValue=function(x){return we.current.useDeferredValue(x)},oe.useEffect=function(x,k){return we.current.useEffect(x,k)},oe.useId=function(){return we.current.useId()},oe.useImperativeHandle=function(x,k,ee){return we.current.useImperativeHandle(x,k,ee)},oe.useInsertionEffect=function(x,k){return we.current.useInsertionEffect(x,k)},oe.useLayoutEffect=function(x,k){return we.current.useLayoutEffect(x,k)},oe.useMemo=function(x,k){return we.current.useMemo(x,k)},oe.useReducer=function(x,k,ee){return we.current.useReducer(x,k,ee)},oe.useRef=function(x){return we.current.useRef(x)},oe.useState=function(x){return we.current.useState(x)},oe.useSyncExternalStore=function(x,k,ee){return we.current.useSyncExternalStore(x,k,ee)},oe.useTransition=function(){return we.current.useTransition()},oe.version="18.3.1",oe}var mu;function fl(){return mu||(mu=1,Qs.exports=vh()),Qs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu;function yh(){if(gu)return go;gu=1;var i=fl(),c=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,p=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function b(_,C,G){var L,F={},Y=null,ce=null;G!==void 0&&(Y=""+G),C.key!==void 0&&(Y=""+C.key),C.ref!==void 0&&(ce=C.ref);for(L in C)l.call(C,L)&&!m.hasOwnProperty(L)&&(F[L]=C[L]);if(_&&_.defaultProps)for(L in C=_.defaultProps,C)F[L]===void 0&&(F[L]=C[L]);return{$$typeof:c,type:_,key:Y,ref:ce,props:F,_owner:p.current}}return go.Fragment=d,go.jsx=b,go.jsxs=b,go}var xu;function wh(){return xu||(xu=1,Gs.exports=yh()),Gs.exports}var a=wh(),zi={},Ys={exports:{}},lr={},Ks={exports:{}},Xs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vu;function bh(){return vu||(vu=1,(function(i){function c(I,$){var P=I.length;I.push($);e:for(;0<P;){var x=P-1>>>1,k=I[x];if(0<p(k,$))I[x]=$,I[P]=k,P=x;else break e}}function d(I){return I.length===0?null:I[0]}function l(I){if(I.length===0)return null;var $=I[0],P=I.pop();if(P!==$){I[0]=P;e:for(var x=0,k=I.length,ee=k>>>1;x<ee;){var re=2*(x+1)-1,se=I[re],ie=re+1,pe=I[ie];if(0>p(se,P))ie<k&&0>p(pe,se)?(I[x]=pe,I[ie]=P,x=ie):(I[x]=se,I[re]=P,x=re);else if(ie<k&&0>p(pe,P))I[x]=pe,I[ie]=P,x=ie;else break e}}return $}function p(I,$){var P=I.sortIndex-$.sortIndex;return P!==0?P:I.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var b=Date,_=b.now();i.unstable_now=function(){return b.now()-_}}var C=[],G=[],L=1,F=null,Y=3,ce=!1,J=!1,U=!1,K=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(I){for(var $=d(G);$!==null;){if($.callback===null)l(G);else if($.startTime<=I)l(G),$.sortIndex=$.expirationTime,c(C,$);else break;$=d(G)}}function O(I){if(U=!1,ne(I),!J)if(d(C)!==null)J=!0,Qe(Z);else{var $=d(G);$!==null&&we(O,$.startTime-I)}}function Z(I,$){J=!1,U&&(U=!1,ge(B),B=-1),ce=!0;var P=Y;try{for(ne($),F=d(C);F!==null&&(!(F.expirationTime>$)||I&&!ae());){var x=F.callback;if(typeof x=="function"){F.callback=null,Y=F.priorityLevel;var k=x(F.expirationTime<=$);$=i.unstable_now(),typeof k=="function"?F.callback=k:F===d(C)&&l(C),ne($)}else l(C);F=d(C)}if(F!==null)var ee=!0;else{var re=d(G);re!==null&&we(O,re.startTime-$),ee=!1}return ee}finally{F=null,Y=P,ce=!1}}var H=!1,R=null,B=-1,ye=5,Re=-1;function ae(){return!(i.unstable_now()-Re<ye)}function _e(){if(R!==null){var I=i.unstable_now();Re=I;var $=!0;try{$=R(!0,I)}finally{$?Ee():(H=!1,R=null)}}else H=!1}var Ee;if(typeof ue=="function")Ee=function(){ue(_e)};else if(typeof MessageChannel!="undefined"){var Ge=new MessageChannel,er=Ge.port2;Ge.port1.onmessage=_e,Ee=function(){er.postMessage(null)}}else Ee=function(){K(_e,0)};function Qe(I){R=I,H||(H=!0,Ee())}function we(I,$){B=K(function(){I(i.unstable_now())},$)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_continueExecution=function(){J||ce||(J=!0,Qe(Z))},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return Y},i.unstable_getFirstCallbackNode=function(){return d(C)},i.unstable_next=function(I){switch(Y){case 1:case 2:case 3:var $=3;break;default:$=Y}var P=Y;Y=$;try{return I()}finally{Y=P}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(I,$){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=Y;Y=I;try{return $()}finally{Y=P}},i.unstable_scheduleCallback=function(I,$,P){var x=i.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?x+P:x):P=x,I){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=P+k,I={id:L++,callback:$,priorityLevel:I,startTime:P,expirationTime:k,sortIndex:-1},P>x?(I.sortIndex=P,c(G,I),d(C)===null&&I===d(G)&&(U?(ge(B),B=-1):U=!0,we(O,P-x))):(I.sortIndex=k,c(C,I),J||ce||(J=!0,Qe(Z))),I},i.unstable_shouldYield=ae,i.unstable_wrapCallback=function(I){var $=Y;return function(){var P=Y;Y=$;try{return I.apply(this,arguments)}finally{Y=P}}}})(Xs)),Xs}var yu;function kh(){return yu||(yu=1,Ks.exports=bh()),Ks.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu;function Sh(){if(wu)return lr;wu=1;var i=fl(),c=kh();function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,p={};function m(e,r){b(e,r),b(e+"Capture",r)}function b(e,r){for(p[e]=r,e=0;e<r.length;e++)l.add(r[e])}var _=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),C=Object.prototype.hasOwnProperty,G=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L={},F={};function Y(e){return C.call(F,e)?!0:C.call(L,e)?!1:G.test(e)?F[e]=!0:(L[e]=!0,!1)}function ce(e,r,t,n){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function J(e,r,t,n){if(r===null||typeof r=="undefined"||ce(e,r,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function U(e,r,t,n,o,s,u){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=u}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){K[e]=new U(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];K[r]=new U(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){K[e]=new U(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){K[e]=new U(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){K[e]=new U(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){K[e]=new U(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){K[e]=new U(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){K[e]=new U(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){K[e]=new U(e,5,!1,e.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(ge,ue);K[r]=new U(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(ge,ue);K[r]=new U(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(ge,ue);K[r]=new U(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){K[e]=new U(e,1,!1,e.toLowerCase(),null,!1,!1)}),K.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){K[e]=new U(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,r,t,n){var o=K.hasOwnProperty(r)?K[r]:null;(o!==null?o.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(J(r,t,o,n)&&(t=null),n||o===null?Y(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(r=o.attributeName,n=o.attributeNamespace,t===null?e.removeAttribute(r):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,n?e.setAttributeNS(n,r,t):e.setAttribute(r,t))))}var O=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),H=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),Re=Symbol.for("react.provider"),ae=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),er=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),I=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,x;function k(e){if(x===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+e}var ee=!1;function re(e,r){if(!e||ee)return"";ee=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(w){var n=w}Reflect.construct(e,[],r)}else{try{r.call()}catch(w){n=w}e.call(r.prototype)}else{try{throw Error()}catch(w){n=w}e()}}catch(w){if(w&&n&&typeof w.stack=="string"){for(var o=w.stack.split(`
`),s=n.stack.split(`
`),u=o.length-1,f=s.length-1;1<=u&&0<=f&&o[u]!==s[f];)f--;for(;1<=u&&0<=f;u--,f--)if(o[u]!==s[f]){if(u!==1||f!==1)do if(u--,f--,0>f||o[u]!==s[f]){var h=`
`+o[u].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=u&&0<=f);break}}}finally{ee=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?k(e):""}function se(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case H:return"Portal";case ye:return"Profiler";case B:return"StrictMode";case Ee:return"Suspense";case Ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case Re:return(e._context.displayName||"Context")+".Provider";case _e:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case er:return r=e.displayName||null,r!==null?r:ie(e.type)||"Memo";case Qe:r=e._payload,e=e._init;try{return ie(e(r))}catch{}}return null}function pe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(r);case 8:return r===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ne(e){var r=xe(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,s=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return o.call(this)},set:function(u){n=""+u,s.call(this,u)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function et(e){e._valueTracker||(e._valueTracker=Ne(e))}function kt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),n="";return e&&(n=xe(e)?e.checked?"true":"false":e.value),e=n,e!==t?(r.setValue(e),!0):!1}function Nr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,r){var t=r.checked;return P({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function bl(e,r){var t=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;t=de(r.value!=null?r.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function kl(e,r){r=r.checked,r!=null&&ne(e,"checked",r,!1)}function ra(e,r){kl(e,r);var t=de(r.value),n=r.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?ta(e,r.type,t):r.hasOwnProperty("defaultValue")&&ta(e,r.type,de(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Sl(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ta(e,r,t){(r!=="number"||Nr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var _n=Array.isArray;function Jt(e,r,t,n){if(e=e.options,r){r={};for(var o=0;o<t.length;o++)r["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=r.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&n&&(e[t].defaultSelected=!0)}else{for(t=""+de(t),r=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}r!==null||e[o].disabled||(r=e[o])}r!==null&&(r.selected=!0)}}function na(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(d(91));return P({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jl(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(d(92));if(_n(t)){if(1<t.length)throw Error(d(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:de(t)}}function El(e,r){var t=de(r.value),n=de(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function Tl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Nl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Nl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Co,Cl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,t,n,o){MSApp.execUnsafeLocalFunction(function(){return e(r,t,n,o)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Ln(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wp=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){wp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Rn[r]=Rn[e]})});function Il(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+r).trim():r+"px"}function _l(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var n=t.indexOf("--")===0,o=Il(t,r[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,o):e[t]=o}}var bp=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(e,r){if(r){if(bp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(d(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(d(61))}if(r.style!=null&&typeof r.style!="object")throw Error(d(62))}}function aa(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=null;function la(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ca=null,Zt=null,en=null;function Ll(e){if(e=eo(e)){if(typeof ca!="function")throw Error(d(280));var r=e.stateNode;r&&(r=Xo(r),ca(e.stateNode,e.type,r))}}function Rl(e){Zt?en?en.push(e):en=[e]:Zt=e}function Ol(){if(Zt){var e=Zt,r=en;if(en=Zt=null,Ll(e),r)for(e=0;e<r.length;e++)Ll(r[e])}}function Pl(e,r){return e(r)}function Al(){}var da=!1;function zl(e,r,t){if(da)return e(r,t);da=!0;try{return Pl(e,r,t)}finally{da=!1,(Zt!==null||en!==null)&&(Al(),Ol())}}function On(e,r){var t=e.stateNode;if(t===null)return null;var n=Xo(t);if(n===null)return null;t=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(d(231,r,typeof t));return t}var ua=!1;if(_)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){ua=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{ua=!1}function kp(e,r,t,n,o,s,u,f,h){var w=Array.prototype.slice.call(arguments,3);try{r.apply(t,w)}catch(E){this.onError(E)}}var An=!1,Io=null,_o=!1,pa=null,Sp={onError:function(e){An=!0,Io=e}};function jp(e,r,t,n,o,s,u,f,h){An=!1,Io=null,kp.apply(Sp,arguments)}function Ep(e,r,t,n,o,s,u,f,h){if(jp.apply(this,arguments),An){if(An){var w=Io;An=!1,Io=null}else throw Error(d(198));_o||(_o=!0,pa=w)}}function St(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function Dl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Ml(e){if(St(e)!==e)throw Error(d(188))}function Tp(e){var r=e.alternate;if(!r){if(r=St(e),r===null)throw Error(d(188));return r!==e?null:e}for(var t=e,n=r;;){var o=t.return;if(o===null)break;var s=o.alternate;if(s===null){if(n=o.return,n!==null){t=n;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===t)return Ml(o),e;if(s===n)return Ml(o),r;s=s.sibling}throw Error(d(188))}if(t.return!==n.return)t=o,n=s;else{for(var u=!1,f=o.child;f;){if(f===t){u=!0,t=o,n=s;break}if(f===n){u=!0,n=o,t=s;break}f=f.sibling}if(!u){for(f=s.child;f;){if(f===t){u=!0,t=s,n=o;break}if(f===n){u=!0,n=s,t=o;break}f=f.sibling}if(!u)throw Error(d(189))}}if(t.alternate!==n)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?e:r}function Fl(e){return e=Tp(e),e!==null?Bl(e):null}function Bl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Bl(e);if(r!==null)return r;e=e.sibling}return null}var Wl=c.unstable_scheduleCallback,$l=c.unstable_cancelCallback,Np=c.unstable_shouldYield,Cp=c.unstable_requestPaint,Oe=c.unstable_now,Ip=c.unstable_getCurrentPriorityLevel,fa=c.unstable_ImmediatePriority,Ul=c.unstable_UserBlockingPriority,Lo=c.unstable_NormalPriority,_p=c.unstable_LowPriority,Hl=c.unstable_IdlePriority,Ro=null,Fr=null;function Lp(e){if(Fr&&typeof Fr.onCommitFiberRoot=="function")try{Fr.onCommitFiberRoot(Ro,e,void 0,(e.current.flags&128)===128)}catch{}}var Cr=Math.clz32?Math.clz32:Pp,Rp=Math.log,Op=Math.LN2;function Pp(e){return e>>>=0,e===0?32:31-(Rp(e)/Op|0)|0}var Oo=64,Po=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,r){var t=e.pendingLanes;if(t===0)return 0;var n=0,o=e.suspendedLanes,s=e.pingedLanes,u=t&268435455;if(u!==0){var f=u&~o;f!==0?n=zn(f):(s&=u,s!==0&&(n=zn(s)))}else u=t&~o,u!==0?n=zn(u):s!==0&&(n=zn(s));if(n===0)return 0;if(r!==0&&r!==n&&(r&o)===0&&(o=n&-n,s=r&-r,o>=s||o===16&&(s&4194240)!==0))return r;if((n&4)!==0&&(n|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)t=31-Cr(r),o=1<<t,n|=e[t],r&=~o;return n}function Ap(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zp(e,r){for(var t=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var u=31-Cr(s),f=1<<u,h=o[u];h===-1?((f&t)===0||(f&n)!==0)&&(o[u]=Ap(f,r)):h<=r&&(e.expiredLanes|=f),s&=~f}}function ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ql(){var e=Oo;return Oo<<=1,(Oo&4194240)===0&&(Oo=64),e}function ma(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function Dn(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Cr(r),e[r]=t}function Dp(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Cr(t),s=1<<o;r[o]=0,n[o]=-1,e[o]=-1,t&=~s}}function ga(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var n=31-Cr(t),o=1<<n;o&r|e[n]&r&&(e[n]|=r),t&=~o}}var ve=0;function Vl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Gl,xa,Ql,Yl,Kl,va=!1,zo=[],rt=null,tt=null,nt=null,Mn=new Map,Fn=new Map,ot=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xl(e,r){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":tt=null;break;case"mouseover":case"mouseout":nt=null;break;case"pointerover":case"pointerout":Mn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(r.pointerId)}}function Bn(e,r,t,n,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:t,eventSystemFlags:n,nativeEvent:s,targetContainers:[o]},r!==null&&(r=eo(r),r!==null&&xa(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,o!==null&&r.indexOf(o)===-1&&r.push(o),e)}function Fp(e,r,t,n,o){switch(r){case"focusin":return rt=Bn(rt,e,r,t,n,o),!0;case"dragenter":return tt=Bn(tt,e,r,t,n,o),!0;case"mouseover":return nt=Bn(nt,e,r,t,n,o),!0;case"pointerover":var s=o.pointerId;return Mn.set(s,Bn(Mn.get(s)||null,e,r,t,n,o)),!0;case"gotpointercapture":return s=o.pointerId,Fn.set(s,Bn(Fn.get(s)||null,e,r,t,n,o)),!0}return!1}function Jl(e){var r=jt(e.target);if(r!==null){var t=St(r);if(t!==null){if(r=t.tag,r===13){if(r=Dl(t),r!==null){e.blockedOn=r,Kl(e.priority,function(){Ql(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=wa(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);sa=n,t.target.dispatchEvent(n),sa=null}else return r=eo(t),r!==null&&xa(r),e.blockedOn=t,!1;r.shift()}return!0}function Zl(e,r,t){Do(e)&&t.delete(r)}function Bp(){va=!1,rt!==null&&Do(rt)&&(rt=null),tt!==null&&Do(tt)&&(tt=null),nt!==null&&Do(nt)&&(nt=null),Mn.forEach(Zl),Fn.forEach(Zl)}function Wn(e,r){e.blockedOn===r&&(e.blockedOn=null,va||(va=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Bp)))}function $n(e){function r(o){return Wn(o,e)}if(0<zo.length){Wn(zo[0],e);for(var t=1;t<zo.length;t++){var n=zo[t];n.blockedOn===e&&(n.blockedOn=null)}}for(rt!==null&&Wn(rt,e),tt!==null&&Wn(tt,e),nt!==null&&Wn(nt,e),Mn.forEach(r),Fn.forEach(r),t=0;t<ot.length;t++)n=ot[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<ot.length&&(t=ot[0],t.blockedOn===null);)Jl(t),t.blockedOn===null&&ot.shift()}var rn=O.ReactCurrentBatchConfig,Mo=!0;function Wp(e,r,t,n){var o=ve,s=rn.transition;rn.transition=null;try{ve=1,ya(e,r,t,n)}finally{ve=o,rn.transition=s}}function $p(e,r,t,n){var o=ve,s=rn.transition;rn.transition=null;try{ve=4,ya(e,r,t,n)}finally{ve=o,rn.transition=s}}function ya(e,r,t,n){if(Mo){var o=wa(e,r,t,n);if(o===null)Da(e,r,n,Fo,t),Xl(e,n);else if(Fp(o,e,r,t,n))n.stopPropagation();else if(Xl(e,n),r&4&&-1<Mp.indexOf(e)){for(;o!==null;){var s=eo(o);if(s!==null&&Gl(s),s=wa(e,r,t,n),s===null&&Da(e,r,n,Fo,t),s===o)break;o=s}o!==null&&n.stopPropagation()}else Da(e,r,n,null,t)}}var Fo=null;function wa(e,r,t,n){if(Fo=null,e=la(n),e=jt(e),e!==null)if(r=St(e),r===null)e=null;else if(t=r.tag,t===13){if(e=Dl(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Fo=e,null}function ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ip()){case fa:return 1;case Ul:return 4;case Lo:case _p:return 16;case Hl:return 536870912;default:return 16}default:return 16}}var it=null,ba=null,Bo=null;function rc(){if(Bo)return Bo;var e,r=ba,t=r.length,n,o="value"in it?it.value:it.textContent,s=o.length;for(e=0;e<t&&r[e]===o[e];e++);var u=t-e;for(n=1;n<=u&&r[t-n]===o[s-n];n++);return Bo=o.slice(e,1<n?1-n:void 0)}function Wo(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function tc(){return!1}function ur(e){function r(t,n,o,s,u){this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$o:tc,this.isPropagationStopped=tc,this}return P(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),r}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=ur(tn),Un=P({},tn,{view:0,detail:0}),Up=ur(Un),Sa,ja,Hn,Uo=P({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hn&&(Hn&&e.type==="mousemove"?(Sa=e.screenX-Hn.screenX,ja=e.screenY-Hn.screenY):ja=Sa=0,Hn=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:ja}}),nc=ur(Uo),Hp=P({},Uo,{dataTransfer:0}),qp=ur(Hp),Vp=P({},Un,{relatedTarget:0}),Ea=ur(Vp),Gp=P({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Qp=ur(Gp),Yp=P({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kp=ur(Yp),Xp=P({},tn,{data:0}),oc=ur(Xp),Jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rf(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=ef[e])?!!r[e]:!1}function Ta(){return rf}var tf=P({},Un,{key:function(e){if(e.key){var r=Jp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ta,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nf=ur(tf),of=P({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ic=ur(of),af=P({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ta}),sf=ur(af),lf=P({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cf=ur(lf),df=P({},Uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uf=ur(df),pf=[9,13,27,32],Na=_&&"CompositionEvent"in window,qn=null;_&&"documentMode"in document&&(qn=document.documentMode);var ff=_&&"TextEvent"in window&&!qn,ac=_&&(!Na||qn&&8<qn&&11>=qn),sc=" ",lc=!1;function cc(e,r){switch(e){case"keyup":return pf.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function hf(e,r){switch(e){case"compositionend":return dc(r);case"keypress":return r.which!==32?null:(lc=!0,sc);case"textInput":return e=r.data,e===sc&&lc?null:e;default:return null}}function mf(e,r){if(nn)return e==="compositionend"||!Na&&cc(e,r)?(e=rc(),Bo=ba=it=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ac&&r.locale!=="ko"?null:r.data;default:return null}}var gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!gf[e.type]:r==="textarea"}function pc(e,r,t,n){Rl(n),r=Qo(r,"onChange"),0<r.length&&(t=new ka("onChange","change",null,t,n),e.push({event:t,listeners:r}))}var Vn=null,Gn=null;function xf(e){_c(e,0)}function Ho(e){var r=cn(e);if(kt(r))return e}function vf(e,r){if(e==="change")return r}var fc=!1;if(_){var Ca;if(_){var Ia="oninput"in document;if(!Ia){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),Ia=typeof hc.oninput=="function"}Ca=Ia}else Ca=!1;fc=Ca&&(!document.documentMode||9<document.documentMode)}function mc(){Vn&&(Vn.detachEvent("onpropertychange",gc),Gn=Vn=null)}function gc(e){if(e.propertyName==="value"&&Ho(Gn)){var r=[];pc(r,Gn,e,la(e)),zl(xf,r)}}function yf(e,r,t){e==="focusin"?(mc(),Vn=r,Gn=t,Vn.attachEvent("onpropertychange",gc)):e==="focusout"&&mc()}function wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ho(Gn)}function bf(e,r){if(e==="click")return Ho(r)}function kf(e,r){if(e==="input"||e==="change")return Ho(r)}function Sf(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Ir=typeof Object.is=="function"?Object.is:Sf;function Qn(e,r){if(Ir(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var o=t[n];if(!C.call(r,o)||!Ir(e[o],r[o]))return!1}return!0}function xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vc(e,r){var t=xc(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=r&&n>=r)return{node:t,offset:r-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xc(t)}}function yc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?yc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function wc(){for(var e=window,r=Nr();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=Nr(e.document)}return r}function _a(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function jf(e){var r=wc(),t=e.focusedElem,n=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&yc(t.ownerDocument.documentElement,t)){if(n!==null&&_a(t)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,s=Math.min(n.start,o);n=n.end===void 0?s:Math.min(n.end,o),!e.extend&&s>n&&(o=n,n=s,s=o),o=vc(t,s);var u=vc(t,n);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(r=r.createRange(),r.setStart(o.node,o.offset),e.removeAllRanges(),s>n?(e.addRange(r),e.extend(u.node,u.offset)):(r.setEnd(u.node,u.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ef=_&&"documentMode"in document&&11>=document.documentMode,on=null,La=null,Yn=null,Ra=!1;function bc(e,r,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ra||on==null||on!==Nr(n)||(n=on,"selectionStart"in n&&_a(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Yn&&Qn(Yn,n)||(Yn=n,n=Qo(La,"onSelect"),0<n.length&&(r=new ka("onSelect","select",null,r,t),e.push({event:r,listeners:n}),r.target=on)))}function qo(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var an={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},Oa={},kc={};_&&(kc=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function Vo(e){if(Oa[e])return Oa[e];if(!an[e])return e;var r=an[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in kc)return Oa[e]=r[t];return e}var Sc=Vo("animationend"),jc=Vo("animationiteration"),Ec=Vo("animationstart"),Tc=Vo("transitionend"),Nc=new Map,Cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function at(e,r){Nc.set(e,r),m(r,[e])}for(var Pa=0;Pa<Cc.length;Pa++){var Aa=Cc[Pa],Tf=Aa.toLowerCase(),Nf=Aa[0].toUpperCase()+Aa.slice(1);at(Tf,"on"+Nf)}at(Sc,"onAnimationEnd"),at(jc,"onAnimationIteration"),at(Ec,"onAnimationStart"),at("dblclick","onDoubleClick"),at("focusin","onFocus"),at("focusout","onBlur"),at(Tc,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));function Ic(e,r,t){var n=e.type||"unknown-event";e.currentTarget=t,Ep(n,r,void 0,e),e.currentTarget=null}function _c(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],o=n.event;n=n.listeners;e:{var s=void 0;if(r)for(var u=n.length-1;0<=u;u--){var f=n[u],h=f.instance,w=f.currentTarget;if(f=f.listener,h!==s&&o.isPropagationStopped())break e;Ic(o,f,w),s=h}else for(u=0;u<n.length;u++){if(f=n[u],h=f.instance,w=f.currentTarget,f=f.listener,h!==s&&o.isPropagationStopped())break e;Ic(o,f,w),s=h}}}if(_o)throw e=pa,_o=!1,pa=null,e}function ke(e,r){var t=r[Ua];t===void 0&&(t=r[Ua]=new Set);var n=e+"__bubble";t.has(n)||(Lc(r,e,2,!1),t.add(n))}function za(e,r,t){var n=0;r&&(n|=4),Lc(t,e,n,r)}var Go="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Go]){e[Go]=!0,l.forEach(function(t){t!=="selectionchange"&&(Cf.has(t)||za(t,!1,e),za(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Go]||(r[Go]=!0,za("selectionchange",!1,r))}}function Lc(e,r,t,n){switch(ec(r)){case 1:var o=Wp;break;case 4:o=$p;break;default:o=ya}t=o.bind(null,r,t,e),o=void 0,!ua||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(r,t,{capture:!0,passive:o}):e.addEventListener(r,t,!0):o!==void 0?e.addEventListener(r,t,{passive:o}):e.addEventListener(r,t,!1)}function Da(e,r,t,n,o){var s=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var f=n.stateNode.containerInfo;if(f===o||f.nodeType===8&&f.parentNode===o)break;if(u===4)for(u=n.return;u!==null;){var h=u.tag;if((h===3||h===4)&&(h=u.stateNode.containerInfo,h===o||h.nodeType===8&&h.parentNode===o))return;u=u.return}for(;f!==null;){if(u=jt(f),u===null)return;if(h=u.tag,h===5||h===6){n=s=u;continue e}f=f.parentNode}}n=n.return}zl(function(){var w=s,E=la(t),T=[];e:{var j=Nc.get(e);if(j!==void 0){var A=ka,D=e;switch(e){case"keypress":if(Wo(t)===0)break e;case"keydown":case"keyup":A=nf;break;case"focusin":D="focus",A=Ea;break;case"focusout":D="blur",A=Ea;break;case"beforeblur":case"afterblur":A=Ea;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=sf;break;case Sc:case jc:case Ec:A=Qp;break;case Tc:A=cf;break;case"scroll":A=Up;break;case"wheel":A=uf;break;case"copy":case"cut":case"paste":A=Kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=ic}var M=(r&4)!==0,Pe=!M&&e==="scroll",v=M?j!==null?j+"Capture":null:j;M=[];for(var g=w,y;g!==null;){y=g;var N=y.stateNode;if(y.tag===5&&N!==null&&(y=N,v!==null&&(N=On(g,v),N!=null&&M.push(Jn(g,N,y)))),Pe)break;g=g.return}0<M.length&&(j=new A(j,D,null,t,E),T.push({event:j,listeners:M}))}}if((r&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",j&&t!==sa&&(D=t.relatedTarget||t.fromElement)&&(jt(D)||D[Hr]))break e;if((A||j)&&(j=E.window===E?E:(j=E.ownerDocument)?j.defaultView||j.parentWindow:window,A?(D=t.relatedTarget||t.toElement,A=w,D=D?jt(D):null,D!==null&&(Pe=St(D),D!==Pe||D.tag!==5&&D.tag!==6)&&(D=null)):(A=null,D=w),A!==D)){if(M=nc,N="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(M=ic,N="onPointerLeave",v="onPointerEnter",g="pointer"),Pe=A==null?j:cn(A),y=D==null?j:cn(D),j=new M(N,g+"leave",A,t,E),j.target=Pe,j.relatedTarget=y,N=null,jt(E)===w&&(M=new M(v,g+"enter",D,t,E),M.target=y,M.relatedTarget=Pe,N=M),Pe=N,A&&D)r:{for(M=A,v=D,g=0,y=M;y;y=sn(y))g++;for(y=0,N=v;N;N=sn(N))y++;for(;0<g-y;)M=sn(M),g--;for(;0<y-g;)v=sn(v),y--;for(;g--;){if(M===v||v!==null&&M===v.alternate)break r;M=sn(M),v=sn(v)}M=null}else M=null;A!==null&&Rc(T,j,A,M,!1),D!==null&&Pe!==null&&Rc(T,Pe,D,M,!0)}}e:{if(j=w?cn(w):window,A=j.nodeName&&j.nodeName.toLowerCase(),A==="select"||A==="input"&&j.type==="file")var W=vf;else if(uc(j))if(fc)W=kf;else{W=wf;var q=yf}else(A=j.nodeName)&&A.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(W=bf);if(W&&(W=W(e,w))){pc(T,W,t,E);break e}q&&q(e,j,w),e==="focusout"&&(q=j._wrapperState)&&q.controlled&&j.type==="number"&&ta(j,"number",j.value)}switch(q=w?cn(w):window,e){case"focusin":(uc(q)||q.contentEditable==="true")&&(on=q,La=w,Yn=null);break;case"focusout":Yn=La=on=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,bc(T,t,E);break;case"selectionchange":if(Ef)break;case"keydown":case"keyup":bc(T,t,E)}var V;if(Na)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else nn?cc(e,t)&&(X="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(X="onCompositionStart");X&&(ac&&t.locale!=="ko"&&(nn||X!=="onCompositionStart"?X==="onCompositionEnd"&&nn&&(V=rc()):(it=E,ba="value"in it?it.value:it.textContent,nn=!0)),q=Qo(w,X),0<q.length&&(X=new oc(X,e,null,t,E),T.push({event:X,listeners:q}),V?X.data=V:(V=dc(t),V!==null&&(X.data=V)))),(V=ff?hf(e,t):mf(e,t))&&(w=Qo(w,"onBeforeInput"),0<w.length&&(E=new oc("onBeforeInput","beforeinput",null,t,E),T.push({event:E,listeners:w}),E.data=V))}_c(T,r)})}function Jn(e,r,t){return{instance:e,listener:r,currentTarget:t}}function Qo(e,r){for(var t=r+"Capture",n=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=On(e,t),s!=null&&n.unshift(Jn(e,s,o)),s=On(e,r),s!=null&&n.push(Jn(e,s,o))),e=e.return}return n}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rc(e,r,t,n,o){for(var s=r._reactName,u=[];t!==null&&t!==n;){var f=t,h=f.alternate,w=f.stateNode;if(h!==null&&h===n)break;f.tag===5&&w!==null&&(f=w,o?(h=On(t,s),h!=null&&u.unshift(Jn(t,h,f))):o||(h=On(t,s),h!=null&&u.push(Jn(t,h,f)))),t=t.return}u.length!==0&&e.push({event:r,listeners:u})}var If=/\r\n?/g,_f=/\u0000|\uFFFD/g;function Oc(e){return(typeof e=="string"?e:""+e).replace(If,`
`).replace(_f,"")}function Yo(e,r,t){if(r=Oc(r),Oc(e)!==r&&t)throw Error(d(425))}function Ko(){}var Ma=null,Fa=null;function Ba(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Wa=typeof setTimeout=="function"?setTimeout:void 0,Lf=typeof clearTimeout=="function"?clearTimeout:void 0,Pc=typeof Promise=="function"?Promise:void 0,Rf=typeof queueMicrotask=="function"?queueMicrotask:typeof Pc!="undefined"?function(e){return Pc.resolve(null).then(e).catch(Of)}:Wa;function Of(e){setTimeout(function(){throw e})}function $a(e,r){var t=r,n=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(n===0){e.removeChild(o),$n(r);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=o}while(t);$n(r)}function st(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Ac(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var ln=Math.random().toString(36).slice(2),Br="__reactFiber$"+ln,Zn="__reactProps$"+ln,Hr="__reactContainer$"+ln,Ua="__reactEvents$"+ln,Pf="__reactListeners$"+ln,Af="__reactHandles$"+ln;function jt(e){var r=e[Br];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Hr]||t[Br]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=Ac(e);e!==null;){if(t=e[Br])return t;e=Ac(e)}return r}e=t,t=e.parentNode}return null}function eo(e){return e=e[Br]||e[Hr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function Xo(e){return e[Zn]||null}var Ha=[],dn=-1;function lt(e){return{current:e}}function Se(e){0>dn||(e.current=Ha[dn],Ha[dn]=null,dn--)}function be(e,r){dn++,Ha[dn]=e.current,e.current=r}var ct={},Ye=lt(ct),nr=lt(!1),Et=ct;function un(e,r){var t=e.type.contextTypes;if(!t)return ct;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in t)o[s]=r[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),o}function or(e){return e=e.childContextTypes,e!=null}function Jo(){Se(nr),Se(Ye)}function zc(e,r,t){if(Ye.current!==ct)throw Error(d(168));be(Ye,r),be(nr,t)}function Dc(e,r,t){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var o in n)if(!(o in r))throw Error(d(108,pe(e)||"Unknown",o));return P({},t,n)}function Zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ct,Et=Ye.current,be(Ye,e),be(nr,nr.current),!0}function Mc(e,r,t){var n=e.stateNode;if(!n)throw Error(d(169));t?(e=Dc(e,r,Et),n.__reactInternalMemoizedMergedChildContext=e,Se(nr),Se(Ye),be(Ye,e)):Se(nr),be(nr,t)}var qr=null,ei=!1,qa=!1;function Fc(e){qr===null?qr=[e]:qr.push(e)}function zf(e){ei=!0,Fc(e)}function dt(){if(!qa&&qr!==null){qa=!0;var e=0,r=ve;try{var t=qr;for(ve=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}qr=null,ei=!1}catch(o){throw qr!==null&&(qr=qr.slice(e+1)),Wl(fa,dt),o}finally{ve=r,qa=!1}}return null}var pn=[],fn=0,ri=null,ti=0,vr=[],yr=0,Tt=null,Vr=1,Gr="";function Nt(e,r){pn[fn++]=ti,pn[fn++]=ri,ri=e,ti=r}function Bc(e,r,t){vr[yr++]=Vr,vr[yr++]=Gr,vr[yr++]=Tt,Tt=e;var n=Vr;e=Gr;var o=32-Cr(n)-1;n&=~(1<<o),t+=1;var s=32-Cr(r)+o;if(30<s){var u=o-o%5;s=(n&(1<<u)-1).toString(32),n>>=u,o-=u,Vr=1<<32-Cr(r)+o|t<<o|n,Gr=s+e}else Vr=1<<s|t<<o|n,Gr=e}function Va(e){e.return!==null&&(Nt(e,1),Bc(e,1,0))}function Ga(e){for(;e===ri;)ri=pn[--fn],pn[fn]=null,ti=pn[--fn],pn[fn]=null;for(;e===Tt;)Tt=vr[--yr],vr[yr]=null,Gr=vr[--yr],vr[yr]=null,Vr=vr[--yr],vr[yr]=null}var pr=null,fr=null,Te=!1,_r=null;function Wc(e,r){var t=Sr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function $c(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,pr=e,fr=st(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,pr=e,fr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=Tt!==null?{id:Vr,overflow:Gr}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=Sr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,pr=e,fr=null,!0):!1;default:return!1}}function Qa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ya(e){if(Te){var r=fr;if(r){var t=r;if(!$c(e,r)){if(Qa(e))throw Error(d(418));r=st(t.nextSibling);var n=pr;r&&$c(e,r)?Wc(n,t):(e.flags=e.flags&-4097|2,Te=!1,pr=e)}}else{if(Qa(e))throw Error(d(418));e.flags=e.flags&-4097|2,Te=!1,pr=e}}}function Uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pr=e}function ni(e){if(e!==pr)return!1;if(!Te)return Uc(e),Te=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Ba(e.type,e.memoizedProps)),r&&(r=fr)){if(Qa(e))throw Hc(),Error(d(418));for(;r;)Wc(e,r),r=st(r.nextSibling)}if(Uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){fr=st(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}fr=null}}else fr=pr?st(e.stateNode.nextSibling):null;return!0}function Hc(){for(var e=fr;e;)e=st(e.nextSibling)}function hn(){fr=pr=null,Te=!1}function Ka(e){_r===null?_r=[e]:_r.push(e)}var Df=O.ReactCurrentBatchConfig;function ro(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(d(309));var n=t.stateNode}if(!n)throw Error(d(147,e));var o=n,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(u){var f=o.refs;u===null?delete f[s]:f[s]=u},r._stringRef=s,r)}if(typeof e!="string")throw Error(d(284));if(!t._owner)throw Error(d(290,e))}return e}function oi(e,r){throw e=Object.prototype.toString.call(r),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function qc(e){var r=e._init;return r(e._payload)}function Vc(e){function r(v,g){if(e){var y=v.deletions;y===null?(v.deletions=[g],v.flags|=16):y.push(g)}}function t(v,g){if(!e)return null;for(;g!==null;)r(v,g),g=g.sibling;return null}function n(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function o(v,g){return v=vt(v,g),v.index=0,v.sibling=null,v}function s(v,g,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<g?(v.flags|=2,g):y):(v.flags|=2,g)):(v.flags|=1048576,g)}function u(v){return e&&v.alternate===null&&(v.flags|=2),v}function f(v,g,y,N){return g===null||g.tag!==6?(g=Ws(y,v.mode,N),g.return=v,g):(g=o(g,y),g.return=v,g)}function h(v,g,y,N){var W=y.type;return W===R?E(v,g,y.props.children,N,y.key):g!==null&&(g.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Qe&&qc(W)===g.type)?(N=o(g,y.props),N.ref=ro(v,g,y),N.return=v,N):(N=Ci(y.type,y.key,y.props,null,v.mode,N),N.ref=ro(v,g,y),N.return=v,N)}function w(v,g,y,N){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=$s(y,v.mode,N),g.return=v,g):(g=o(g,y.children||[]),g.return=v,g)}function E(v,g,y,N,W){return g===null||g.tag!==7?(g=At(y,v.mode,N,W),g.return=v,g):(g=o(g,y),g.return=v,g)}function T(v,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ws(""+g,v.mode,y),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Z:return y=Ci(g.type,g.key,g.props,null,v.mode,y),y.ref=ro(v,null,g),y.return=v,y;case H:return g=$s(g,v.mode,y),g.return=v,g;case Qe:var N=g._init;return T(v,N(g._payload),y)}if(_n(g)||$(g))return g=At(g,v.mode,y,null),g.return=v,g;oi(v,g)}return null}function j(v,g,y,N){var W=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return W!==null?null:f(v,g,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Z:return y.key===W?h(v,g,y,N):null;case H:return y.key===W?w(v,g,y,N):null;case Qe:return W=y._init,j(v,g,W(y._payload),N)}if(_n(y)||$(y))return W!==null?null:E(v,g,y,N,null);oi(v,y)}return null}function A(v,g,y,N,W){if(typeof N=="string"&&N!==""||typeof N=="number")return v=v.get(y)||null,f(g,v,""+N,W);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Z:return v=v.get(N.key===null?y:N.key)||null,h(g,v,N,W);case H:return v=v.get(N.key===null?y:N.key)||null,w(g,v,N,W);case Qe:var q=N._init;return A(v,g,y,q(N._payload),W)}if(_n(N)||$(N))return v=v.get(y)||null,E(g,v,N,W,null);oi(g,N)}return null}function D(v,g,y,N){for(var W=null,q=null,V=g,X=g=0,Ue=null;V!==null&&X<y.length;X++){V.index>X?(Ue=V,V=null):Ue=V.sibling;var he=j(v,V,y[X],N);if(he===null){V===null&&(V=Ue);break}e&&V&&he.alternate===null&&r(v,V),g=s(he,g,X),q===null?W=he:q.sibling=he,q=he,V=Ue}if(X===y.length)return t(v,V),Te&&Nt(v,X),W;if(V===null){for(;X<y.length;X++)V=T(v,y[X],N),V!==null&&(g=s(V,g,X),q===null?W=V:q.sibling=V,q=V);return Te&&Nt(v,X),W}for(V=n(v,V);X<y.length;X++)Ue=A(V,v,X,y[X],N),Ue!==null&&(e&&Ue.alternate!==null&&V.delete(Ue.key===null?X:Ue.key),g=s(Ue,g,X),q===null?W=Ue:q.sibling=Ue,q=Ue);return e&&V.forEach(function(yt){return r(v,yt)}),Te&&Nt(v,X),W}function M(v,g,y,N){var W=$(y);if(typeof W!="function")throw Error(d(150));if(y=W.call(y),y==null)throw Error(d(151));for(var q=W=null,V=g,X=g=0,Ue=null,he=y.next();V!==null&&!he.done;X++,he=y.next()){V.index>X?(Ue=V,V=null):Ue=V.sibling;var yt=j(v,V,he.value,N);if(yt===null){V===null&&(V=Ue);break}e&&V&&yt.alternate===null&&r(v,V),g=s(yt,g,X),q===null?W=yt:q.sibling=yt,q=yt,V=Ue}if(he.done)return t(v,V),Te&&Nt(v,X),W;if(V===null){for(;!he.done;X++,he=y.next())he=T(v,he.value,N),he!==null&&(g=s(he,g,X),q===null?W=he:q.sibling=he,q=he);return Te&&Nt(v,X),W}for(V=n(v,V);!he.done;X++,he=y.next())he=A(V,v,X,he.value,N),he!==null&&(e&&he.alternate!==null&&V.delete(he.key===null?X:he.key),g=s(he,g,X),q===null?W=he:q.sibling=he,q=he);return e&&V.forEach(function(gh){return r(v,gh)}),Te&&Nt(v,X),W}function Pe(v,g,y,N){if(typeof y=="object"&&y!==null&&y.type===R&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Z:e:{for(var W=y.key,q=g;q!==null;){if(q.key===W){if(W=y.type,W===R){if(q.tag===7){t(v,q.sibling),g=o(q,y.props.children),g.return=v,v=g;break e}}else if(q.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Qe&&qc(W)===q.type){t(v,q.sibling),g=o(q,y.props),g.ref=ro(v,q,y),g.return=v,v=g;break e}t(v,q);break}else r(v,q);q=q.sibling}y.type===R?(g=At(y.props.children,v.mode,N,y.key),g.return=v,v=g):(N=Ci(y.type,y.key,y.props,null,v.mode,N),N.ref=ro(v,g,y),N.return=v,v=N)}return u(v);case H:e:{for(q=y.key;g!==null;){if(g.key===q)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){t(v,g.sibling),g=o(g,y.children||[]),g.return=v,v=g;break e}else{t(v,g);break}else r(v,g);g=g.sibling}g=$s(y,v.mode,N),g.return=v,v=g}return u(v);case Qe:return q=y._init,Pe(v,g,q(y._payload),N)}if(_n(y))return D(v,g,y,N);if($(y))return M(v,g,y,N);oi(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(t(v,g.sibling),g=o(g,y),g.return=v,v=g):(t(v,g),g=Ws(y,v.mode,N),g.return=v,v=g),u(v)):t(v,g)}return Pe}var mn=Vc(!0),Gc=Vc(!1),ii=lt(null),ai=null,gn=null,Xa=null;function Ja(){Xa=gn=ai=null}function Za(e){var r=ii.current;Se(ii),e._currentValue=r}function es(e,r,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===t)break;e=e.return}}function xn(e,r){ai=e,Xa=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(ir=!0),e.firstContext=null)}function wr(e){var r=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:r,next:null},gn===null){if(ai===null)throw Error(d(308));gn=e,ai.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return r}var Ct=null;function rs(e){Ct===null?Ct=[e]:Ct.push(e)}function Qc(e,r,t,n){var o=r.interleaved;return o===null?(t.next=t,rs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Qr(e,n)}function Qr(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ut=!1;function ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function pt(e,r,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(fe&2)!==0){var o=n.pending;return o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r,Qr(e,t)}return o=n.interleaved,o===null?(r.next=r,rs(n)):(r.next=o.next,o.next=r),n.interleaved=r,Qr(e,t)}function si(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,ga(e,t)}}function Kc(e,r){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var o=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var u={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?o=s=u:s=s.next=u,t=t.next}while(t!==null);s===null?o=s=r:s=s.next=r}else o=s=r;t={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function li(e,r,t,n){var o=e.updateQueue;ut=!1;var s=o.firstBaseUpdate,u=o.lastBaseUpdate,f=o.shared.pending;if(f!==null){o.shared.pending=null;var h=f,w=h.next;h.next=null,u===null?s=w:u.next=w,u=h;var E=e.alternate;E!==null&&(E=E.updateQueue,f=E.lastBaseUpdate,f!==u&&(f===null?E.firstBaseUpdate=w:f.next=w,E.lastBaseUpdate=h))}if(s!==null){var T=o.baseState;u=0,E=w=h=null,f=s;do{var j=f.lane,A=f.eventTime;if((n&j)===j){E!==null&&(E=E.next={eventTime:A,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var D=e,M=f;switch(j=r,A=t,M.tag){case 1:if(D=M.payload,typeof D=="function"){T=D.call(A,T,j);break e}T=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=M.payload,j=typeof D=="function"?D.call(A,T,j):D,j==null)break e;T=P({},T,j);break e;case 2:ut=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,j=o.effects,j===null?o.effects=[f]:j.push(f))}else A={eventTime:A,lane:j,tag:f.tag,payload:f.payload,callback:f.callback,next:null},E===null?(w=E=A,h=T):E=E.next=A,u|=j;if(f=f.next,f===null){if(f=o.shared.pending,f===null)break;j=f,f=j.next,j.next=null,o.lastBaseUpdate=j,o.shared.pending=null}}while(!0);if(E===null&&(h=T),o.baseState=h,o.firstBaseUpdate=w,o.lastBaseUpdate=E,r=o.shared.interleaved,r!==null){o=r;do u|=o.lane,o=o.next;while(o!==r)}else s===null&&(o.shared.lanes=0);Lt|=u,e.lanes=u,e.memoizedState=T}}function Xc(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],o=n.callback;if(o!==null){if(n.callback=null,n=t,typeof o!="function")throw Error(d(191,o));o.call(n)}}}var to={},Wr=lt(to),no=lt(to),oo=lt(to);function It(e){if(e===to)throw Error(d(174));return e}function ns(e,r){switch(be(oo,r),be(no,e),be(Wr,to),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:oa(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=oa(r,e)}Se(Wr),be(Wr,r)}function vn(){Se(Wr),Se(no),Se(oo)}function Jc(e){It(oo.current);var r=It(Wr.current),t=oa(r,e.type);r!==t&&(be(no,e),be(Wr,t))}function os(e){no.current===e&&(Se(Wr),Se(no))}var Ce=lt(0);function ci(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var is=[];function as(){for(var e=0;e<is.length;e++)is[e]._workInProgressVersionPrimary=null;is.length=0}var di=O.ReactCurrentDispatcher,ss=O.ReactCurrentBatchConfig,_t=0,Ie=null,Me=null,We=null,ui=!1,io=!1,ao=0,Mf=0;function Ke(){throw Error(d(321))}function ls(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Ir(e[t],r[t]))return!1;return!0}function cs(e,r,t,n,o,s){if(_t=s,Ie=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,di.current=e===null||e.memoizedState===null?$f:Uf,e=t(n,o),io){s=0;do{if(io=!1,ao=0,25<=s)throw Error(d(301));s+=1,We=Me=null,r.updateQueue=null,di.current=Hf,e=t(n,o)}while(io)}if(di.current=hi,r=Me!==null&&Me.next!==null,_t=0,We=Me=Ie=null,ui=!1,r)throw Error(d(300));return e}function ds(){var e=ao!==0;return ao=0,e}function $r(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ie.memoizedState=We=e:We=We.next=e,We}function br(){if(Me===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var r=We===null?Ie.memoizedState:We.next;if(r!==null)We=r,Me=e;else{if(e===null)throw Error(d(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},We===null?Ie.memoizedState=We=e:We=We.next=e}return We}function so(e,r){return typeof r=="function"?r(e):r}function us(e){var r=br(),t=r.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var n=Me,o=n.baseQueue,s=t.pending;if(s!==null){if(o!==null){var u=o.next;o.next=s.next,s.next=u}n.baseQueue=o=s,t.pending=null}if(o!==null){s=o.next,n=n.baseState;var f=u=null,h=null,w=s;do{var E=w.lane;if((_t&E)===E)h!==null&&(h=h.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),n=w.hasEagerState?w.eagerState:e(n,w.action);else{var T={lane:E,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};h===null?(f=h=T,u=n):h=h.next=T,Ie.lanes|=E,Lt|=E}w=w.next}while(w!==null&&w!==s);h===null?u=n:h.next=f,Ir(n,r.memoizedState)||(ir=!0),r.memoizedState=n,r.baseState=u,r.baseQueue=h,t.lastRenderedState=n}if(e=t.interleaved,e!==null){o=e;do s=o.lane,Ie.lanes|=s,Lt|=s,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function ps(e){var r=br(),t=r.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var n=t.dispatch,o=t.pending,s=r.memoizedState;if(o!==null){t.pending=null;var u=o=o.next;do s=e(s,u.action),u=u.next;while(u!==o);Ir(s,r.memoizedState)||(ir=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),t.lastRenderedState=s}return[s,n]}function Zc(){}function ed(e,r){var t=Ie,n=br(),o=r(),s=!Ir(n.memoizedState,o);if(s&&(n.memoizedState=o,ir=!0),n=n.queue,fs(nd.bind(null,t,n,e),[e]),n.getSnapshot!==r||s||We!==null&&We.memoizedState.tag&1){if(t.flags|=2048,lo(9,td.bind(null,t,n,o,r),void 0,null),$e===null)throw Error(d(349));(_t&30)!==0||rd(t,r,o)}return o}function rd(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Ie.updateQueue,r===null?(r={lastEffect:null,stores:null},Ie.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function td(e,r,t,n){r.value=t,r.getSnapshot=n,od(r)&&id(e)}function nd(e,r,t){return t(function(){od(r)&&id(e)})}function od(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Ir(e,t)}catch{return!0}}function id(e){var r=Qr(e,1);r!==null&&Pr(r,e,1,-1)}function ad(e){var r=$r();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:e},r.queue=e,e=e.dispatch=Wf.bind(null,Ie,e),[r.memoizedState,e]}function lo(e,r,t,n){return e={tag:e,create:r,destroy:t,deps:n,next:null},r=Ie.updateQueue,r===null?(r={lastEffect:null,stores:null},Ie.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,r.lastEffect=e)),e}function sd(){return br().memoizedState}function pi(e,r,t,n){var o=$r();Ie.flags|=e,o.memoizedState=lo(1|r,t,void 0,n===void 0?null:n)}function fi(e,r,t,n){var o=br();n=n===void 0?null:n;var s=void 0;if(Me!==null){var u=Me.memoizedState;if(s=u.destroy,n!==null&&ls(n,u.deps)){o.memoizedState=lo(r,t,s,n);return}}Ie.flags|=e,o.memoizedState=lo(1|r,t,s,n)}function ld(e,r){return pi(8390656,8,e,r)}function fs(e,r){return fi(2048,8,e,r)}function cd(e,r){return fi(4,2,e,r)}function dd(e,r){return fi(4,4,e,r)}function ud(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function pd(e,r,t){return t=t!=null?t.concat([e]):null,fi(4,4,ud.bind(null,r,e),t)}function hs(){}function fd(e,r){var t=br();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&ls(r,n[1])?n[0]:(t.memoizedState=[e,r],e)}function hd(e,r){var t=br();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&ls(r,n[1])?n[0]:(e=e(),t.memoizedState=[e,r],e)}function md(e,r,t){return(_t&21)===0?(e.baseState&&(e.baseState=!1,ir=!0),e.memoizedState=t):(Ir(t,r)||(t=ql(),Ie.lanes|=t,Lt|=t,e.baseState=!0),r)}function Ff(e,r){var t=ve;ve=t!==0&&4>t?t:4,e(!0);var n=ss.transition;ss.transition={};try{e(!1),r()}finally{ve=t,ss.transition=n}}function gd(){return br().memoizedState}function Bf(e,r,t){var n=gt(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},xd(e))vd(r,t);else if(t=Qc(e,r,t,n),t!==null){var o=tr();Pr(t,e,n,o),yd(t,r,n)}}function Wf(e,r,t){var n=gt(e),o={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(xd(e))vd(r,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var u=r.lastRenderedState,f=s(u,t);if(o.hasEagerState=!0,o.eagerState=f,Ir(f,u)){var h=r.interleaved;h===null?(o.next=o,rs(r)):(o.next=h.next,h.next=o),r.interleaved=o;return}}catch{}finally{}t=Qc(e,r,o,n),t!==null&&(o=tr(),Pr(t,e,n,o),yd(t,r,n))}}function xd(e){var r=e.alternate;return e===Ie||r!==null&&r===Ie}function vd(e,r){io=ui=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function yd(e,r,t){if((t&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,ga(e,t)}}var hi={readContext:wr,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},$f={readContext:wr,useCallback:function(e,r){return $r().memoizedState=[e,r===void 0?null:r],e},useContext:wr,useEffect:ld,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,pi(4194308,4,ud.bind(null,r,e),t)},useLayoutEffect:function(e,r){return pi(4194308,4,e,r)},useInsertionEffect:function(e,r){return pi(4,2,e,r)},useMemo:function(e,r){var t=$r();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var n=$r();return r=t!==void 0?t(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Bf.bind(null,Ie,e),[n.memoizedState,e]},useRef:function(e){var r=$r();return e={current:e},r.memoizedState=e},useState:ad,useDebugValue:hs,useDeferredValue:function(e){return $r().memoizedState=e},useTransition:function(){var e=ad(!1),r=e[0];return e=Ff.bind(null,e[1]),$r().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var n=Ie,o=$r();if(Te){if(t===void 0)throw Error(d(407));t=t()}else{if(t=r(),$e===null)throw Error(d(349));(_t&30)!==0||rd(n,r,t)}o.memoizedState=t;var s={value:t,getSnapshot:r};return o.queue=s,ld(nd.bind(null,n,s,e),[e]),n.flags|=2048,lo(9,td.bind(null,n,s,t,r),void 0,null),t},useId:function(){var e=$r(),r=$e.identifierPrefix;if(Te){var t=Gr,n=Vr;t=(n&~(1<<32-Cr(n)-1)).toString(32)+t,r=":"+r+"R"+t,t=ao++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=Mf++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Uf={readContext:wr,useCallback:fd,useContext:wr,useEffect:fs,useImperativeHandle:pd,useInsertionEffect:cd,useLayoutEffect:dd,useMemo:hd,useReducer:us,useRef:sd,useState:function(){return us(so)},useDebugValue:hs,useDeferredValue:function(e){var r=br();return md(r,Me.memoizedState,e)},useTransition:function(){var e=us(so)[0],r=br().memoizedState;return[e,r]},useMutableSource:Zc,useSyncExternalStore:ed,useId:gd,unstable_isNewReconciler:!1},Hf={readContext:wr,useCallback:fd,useContext:wr,useEffect:fs,useImperativeHandle:pd,useInsertionEffect:cd,useLayoutEffect:dd,useMemo:hd,useReducer:ps,useRef:sd,useState:function(){return ps(so)},useDebugValue:hs,useDeferredValue:function(e){var r=br();return Me===null?r.memoizedState=e:md(r,Me.memoizedState,e)},useTransition:function(){var e=ps(so)[0],r=br().memoizedState;return[e,r]},useMutableSource:Zc,useSyncExternalStore:ed,useId:gd,unstable_isNewReconciler:!1};function Lr(e,r){if(e&&e.defaultProps){r=P({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function ms(e,r,t,n){r=e.memoizedState,t=t(n,r),t=t==null?r:P({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var mi={isMounted:function(e){return(e=e._reactInternals)?St(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var n=tr(),o=gt(e),s=Yr(n,o);s.payload=r,t!=null&&(s.callback=t),r=pt(e,s,o),r!==null&&(Pr(r,e,o,n),si(r,e,o))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var n=tr(),o=gt(e),s=Yr(n,o);s.tag=1,s.payload=r,t!=null&&(s.callback=t),r=pt(e,s,o),r!==null&&(Pr(r,e,o,n),si(r,e,o))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=tr(),n=gt(e),o=Yr(t,n);o.tag=2,r!=null&&(o.callback=r),r=pt(e,o,n),r!==null&&(Pr(r,e,n,t),si(r,e,n))}};function wd(e,r,t,n,o,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,u):r.prototype&&r.prototype.isPureReactComponent?!Qn(t,n)||!Qn(o,s):!0}function bd(e,r,t){var n=!1,o=ct,s=r.contextType;return typeof s=="object"&&s!==null?s=wr(s):(o=or(r)?Et:Ye.current,n=r.contextTypes,s=(n=n!=null)?un(e,o):ct),r=new r(t,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=mi,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),r}function kd(e,r,t,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,n),r.state!==e&&mi.enqueueReplaceState(r,r.state,null)}function gs(e,r,t,n){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},ts(e);var s=r.contextType;typeof s=="object"&&s!==null?o.context=wr(s):(s=or(r)?Et:Ye.current,o.context=un(e,s)),o.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(ms(e,r,s,t),o.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&mi.enqueueReplaceState(o,o.state,null),li(e,t,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function yn(e,r){try{var t="",n=r;do t+=se(n),n=n.return;while(n);var o=t}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:o,digest:null}}function xs(e,r,t){return{value:e,source:null,stack:t!=null?t:null,digest:r!=null?r:null}}function vs(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var qf=typeof WeakMap=="function"?WeakMap:Map;function Sd(e,r,t){t=Yr(-1,t),t.tag=3,t.payload={element:null};var n=r.value;return t.callback=function(){ki||(ki=!0,Os=n),vs(e,r)},t}function jd(e,r,t){t=Yr(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=r.value;t.payload=function(){return n(o)},t.callback=function(){vs(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){vs(e,r),typeof n!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var u=r.stack;this.componentDidCatch(r.value,{componentStack:u!==null?u:""})}),t}function Ed(e,r,t){var n=e.pingCache;if(n===null){n=e.pingCache=new qf;var o=new Set;n.set(r,o)}else o=n.get(r),o===void 0&&(o=new Set,n.set(r,o));o.has(t)||(o.add(t),e=ih.bind(null,e,r,t),r.then(e,e))}function Td(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Nd(e,r,t,n,o){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=Yr(-1,1),r.tag=2,pt(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Vf=O.ReactCurrentOwner,ir=!1;function rr(e,r,t,n){r.child=e===null?Gc(r,null,t,n):mn(r,e.child,t,n)}function Cd(e,r,t,n,o){t=t.render;var s=r.ref;return xn(r,o),n=cs(e,r,t,n,s,o),t=ds(),e!==null&&!ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~o,Kr(e,r,o)):(Te&&t&&Va(r),r.flags|=1,rr(e,r,n,o),r.child)}function Id(e,r,t,n,o){if(e===null){var s=t.type;return typeof s=="function"&&!Bs(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=s,_d(e,r,s,n,o)):(e=Ci(t.type,null,n,r,r.mode,o),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,(e.lanes&o)===0){var u=s.memoizedProps;if(t=t.compare,t=t!==null?t:Qn,t(u,n)&&e.ref===r.ref)return Kr(e,r,o)}return r.flags|=1,e=vt(s,n),e.ref=r.ref,e.return=r,r.child=e}function _d(e,r,t,n,o){if(e!==null){var s=e.memoizedProps;if(Qn(s,n)&&e.ref===r.ref)if(ir=!1,r.pendingProps=n=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ir=!0);else return r.lanes=e.lanes,Kr(e,r,o)}return ys(e,r,t,n,o)}function Ld(e,r,t){var n=r.pendingProps,o=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(bn,hr),hr|=t;else{if((t&1073741824)===0)return e=s!==null?s.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,be(bn,hr),hr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:t,be(bn,hr),hr|=n}else s!==null?(n=s.baseLanes|t,r.memoizedState=null):n=t,be(bn,hr),hr|=n;return rr(e,r,o,t),r.child}function Rd(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function ys(e,r,t,n,o){var s=or(t)?Et:Ye.current;return s=un(r,s),xn(r,o),t=cs(e,r,t,n,s,o),n=ds(),e!==null&&!ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~o,Kr(e,r,o)):(Te&&n&&Va(r),r.flags|=1,rr(e,r,t,o),r.child)}function Od(e,r,t,n,o){if(or(t)){var s=!0;Zo(r)}else s=!1;if(xn(r,o),r.stateNode===null)xi(e,r),bd(r,t,n),gs(r,t,n,o),n=!0;else if(e===null){var u=r.stateNode,f=r.memoizedProps;u.props=f;var h=u.context,w=t.contextType;typeof w=="object"&&w!==null?w=wr(w):(w=or(t)?Et:Ye.current,w=un(r,w));var E=t.getDerivedStateFromProps,T=typeof E=="function"||typeof u.getSnapshotBeforeUpdate=="function";T||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==n||h!==w)&&kd(r,u,n,w),ut=!1;var j=r.memoizedState;u.state=j,li(r,n,u,o),h=r.memoizedState,f!==n||j!==h||nr.current||ut?(typeof E=="function"&&(ms(r,t,E,n),h=r.memoizedState),(f=ut||wd(r,t,f,n,j,h,w))?(T||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(r.flags|=4194308)):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=h),u.props=n,u.state=h,u.context=w,n=f):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{u=r.stateNode,Yc(e,r),f=r.memoizedProps,w=r.type===r.elementType?f:Lr(r.type,f),u.props=w,T=r.pendingProps,j=u.context,h=t.contextType,typeof h=="object"&&h!==null?h=wr(h):(h=or(t)?Et:Ye.current,h=un(r,h));var A=t.getDerivedStateFromProps;(E=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==T||j!==h)&&kd(r,u,n,h),ut=!1,j=r.memoizedState,u.state=j,li(r,n,u,o);var D=r.memoizedState;f!==T||j!==D||nr.current||ut?(typeof A=="function"&&(ms(r,t,A,n),D=r.memoizedState),(w=ut||wd(r,t,w,n,j,D,h)||!1)?(E||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,D,h),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,D,h)),typeof u.componentDidUpdate=="function"&&(r.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=D),u.props=n,u.state=D,u.context=h,n=w):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=1024),n=!1)}return ws(e,r,t,n,s,o)}function ws(e,r,t,n,o,s){Rd(e,r);var u=(r.flags&128)!==0;if(!n&&!u)return o&&Mc(r,t,!1),Kr(e,r,s);n=r.stateNode,Vf.current=r;var f=u&&typeof t.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&u?(r.child=mn(r,e.child,null,s),r.child=mn(r,null,f,s)):rr(e,r,f,s),r.memoizedState=n.state,o&&Mc(r,t,!0),r.child}function Pd(e){var r=e.stateNode;r.pendingContext?zc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&zc(e,r.context,!1),ns(e,r.containerInfo)}function Ad(e,r,t,n,o){return hn(),Ka(o),r.flags|=256,rr(e,r,t,n),r.child}var bs={dehydrated:null,treeContext:null,retryLane:0};function ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function zd(e,r,t){var n=r.pendingProps,o=Ce.current,s=!1,u=(r.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(o&2)!==0),f?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),be(Ce,o&1),e===null)return Ya(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(u=n.children,e=n.fallback,s?(n=r.mode,s=r.child,u={mode:"hidden",children:u},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=u):s=Ii(u,n,0,null),e=At(e,n,t,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=ks(t),r.memoizedState=bs,e):Ss(r,u));if(o=e.memoizedState,o!==null&&(f=o.dehydrated,f!==null))return Gf(e,r,u,n,f,o,t);if(s){s=n.fallback,u=r.mode,o=e.child,f=o.sibling;var h={mode:"hidden",children:n.children};return(u&1)===0&&r.child!==o?(n=r.child,n.childLanes=0,n.pendingProps=h,r.deletions=null):(n=vt(o,h),n.subtreeFlags=o.subtreeFlags&14680064),f!==null?s=vt(f,s):(s=At(s,u,t,null),s.flags|=2),s.return=r,n.return=r,n.sibling=s,r.child=n,n=s,s=r.child,u=e.child.memoizedState,u=u===null?ks(t):{baseLanes:u.baseLanes|t,cachePool:null,transitions:u.transitions},s.memoizedState=u,s.childLanes=e.childLanes&~t,r.memoizedState=bs,n}return s=e.child,e=s.sibling,n=vt(s,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=t),n.return=r,n.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=n,r.memoizedState=null,n}function Ss(e,r){return r=Ii({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function gi(e,r,t,n){return n!==null&&Ka(n),mn(r,e.child,null,t),e=Ss(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Gf(e,r,t,n,o,s,u){if(t)return r.flags&256?(r.flags&=-257,n=xs(Error(d(422))),gi(e,r,u,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=n.fallback,o=r.mode,n=Ii({mode:"visible",children:n.children},o,0,null),s=At(s,o,u,null),s.flags|=2,n.return=r,s.return=r,n.sibling=s,r.child=n,(r.mode&1)!==0&&mn(r,e.child,null,u),r.child.memoizedState=ks(u),r.memoizedState=bs,s);if((r.mode&1)===0)return gi(e,r,u,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var f=n.dgst;return n=f,s=Error(d(419)),n=xs(s,n,void 0),gi(e,r,u,n)}if(f=(u&e.childLanes)!==0,ir||f){if(n=$e,n!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(n.suspendedLanes|u))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Qr(e,o),Pr(n,e,o,-1))}return Fs(),n=xs(Error(d(421))),gi(e,r,u,n)}return o.data==="$?"?(r.flags|=128,r.child=e.child,r=ah.bind(null,e),o._reactRetry=r,null):(e=s.treeContext,fr=st(o.nextSibling),pr=r,Te=!0,_r=null,e!==null&&(vr[yr++]=Vr,vr[yr++]=Gr,vr[yr++]=Tt,Vr=e.id,Gr=e.overflow,Tt=r),r=Ss(r,n.children),r.flags|=4096,r)}function Dd(e,r,t){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),es(e.return,r,t)}function js(e,r,t,n,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:o}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=t,s.tailMode=o)}function Md(e,r,t){var n=r.pendingProps,o=n.revealOrder,s=n.tail;if(rr(e,r,n.children,t),n=Ce.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dd(e,t,r);else if(e.tag===19)Dd(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(be(Ce,n),(r.mode&1)===0)r.memoizedState=null;else switch(o){case"forwards":for(t=r.child,o=null;t!==null;)e=t.alternate,e!==null&&ci(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=r.child,r.child=null):(o=t.sibling,t.sibling=null),js(r,!1,o,t,s);break;case"backwards":for(t=null,o=r.child,r.child=null;o!==null;){if(e=o.alternate,e!==null&&ci(e)===null){r.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}js(r,!0,t,null,s);break;case"together":js(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function xi(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Kr(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),Lt|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(d(153));if(r.child!==null){for(e=r.child,t=vt(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=vt(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function Qf(e,r,t){switch(r.tag){case 3:Pd(r),hn();break;case 5:Jc(r);break;case 1:or(r.type)&&Zo(r);break;case 4:ns(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,o=r.memoizedProps.value;be(ii,n._currentValue),n._currentValue=o;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(be(Ce,Ce.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?zd(e,r,t):(be(Ce,Ce.current&1),e=Kr(e,r,t),e!==null?e.sibling:null);be(Ce,Ce.current&1);break;case 19:if(n=(t&r.childLanes)!==0,(e.flags&128)!==0){if(n)return Md(e,r,t);r.flags|=128}if(o=r.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),be(Ce,Ce.current),n)break;return null;case 22:case 23:return r.lanes=0,Ld(e,r,t)}return Kr(e,r,t)}var Fd,Es,Bd,Wd;Fd=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Es=function(){},Bd=function(e,r,t,n){var o=e.memoizedProps;if(o!==n){e=r.stateNode,It(Wr.current);var s=null;switch(t){case"input":o=ea(e,o),n=ea(e,n),s=[];break;case"select":o=P({},o,{value:void 0}),n=P({},n,{value:void 0}),s=[];break;case"textarea":o=na(e,o),n=na(e,n),s=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ko)}ia(t,n);var u;t=null;for(w in o)if(!n.hasOwnProperty(w)&&o.hasOwnProperty(w)&&o[w]!=null)if(w==="style"){var f=o[w];for(u in f)f.hasOwnProperty(u)&&(t||(t={}),t[u]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(p.hasOwnProperty(w)?s||(s=[]):(s=s||[]).push(w,null));for(w in n){var h=n[w];if(f=o!=null?o[w]:void 0,n.hasOwnProperty(w)&&h!==f&&(h!=null||f!=null))if(w==="style")if(f){for(u in f)!f.hasOwnProperty(u)||h&&h.hasOwnProperty(u)||(t||(t={}),t[u]="");for(u in h)h.hasOwnProperty(u)&&f[u]!==h[u]&&(t||(t={}),t[u]=h[u])}else t||(s||(s=[]),s.push(w,t)),t=h;else w==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,f=f?f.__html:void 0,h!=null&&f!==h&&(s=s||[]).push(w,h)):w==="children"?typeof h!="string"&&typeof h!="number"||(s=s||[]).push(w,""+h):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(p.hasOwnProperty(w)?(h!=null&&w==="onScroll"&&ke("scroll",e),s||f===h||(s=[])):(s=s||[]).push(w,h))}t&&(s=s||[]).push("style",t);var w=s;(r.updateQueue=w)&&(r.flags|=4)}},Wd=function(e,r,t,n){t!==n&&(r.flags|=4)};function co(e,r){if(!Te)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Xe(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(r)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=t,r}function Yf(e,r,t){var n=r.pendingProps;switch(Ga(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(r),null;case 1:return or(r.type)&&Jo(),Xe(r),null;case 3:return n=r.stateNode,vn(),Se(nr),Se(Ye),as(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ni(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,_r!==null&&(zs(_r),_r=null))),Es(e,r),Xe(r),null;case 5:os(r);var o=It(oo.current);if(t=r.type,e!==null&&r.stateNode!=null)Bd(e,r,t,n,o),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(d(166));return Xe(r),null}if(e=It(Wr.current),ni(r)){n=r.stateNode,t=r.type;var s=r.memoizedProps;switch(n[Br]=r,n[Zn]=s,e=(r.mode&1)!==0,t){case"dialog":ke("cancel",n),ke("close",n);break;case"iframe":case"object":case"embed":ke("load",n);break;case"video":case"audio":for(o=0;o<Kn.length;o++)ke(Kn[o],n);break;case"source":ke("error",n);break;case"img":case"image":case"link":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"input":bl(n,s),ke("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},ke("invalid",n);break;case"textarea":jl(n,s),ke("invalid",n)}ia(t,s),o=null;for(var u in s)if(s.hasOwnProperty(u)){var f=s[u];u==="children"?typeof f=="string"?n.textContent!==f&&(s.suppressHydrationWarning!==!0&&Yo(n.textContent,f,e),o=["children",f]):typeof f=="number"&&n.textContent!==""+f&&(s.suppressHydrationWarning!==!0&&Yo(n.textContent,f,e),o=["children",""+f]):p.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&ke("scroll",n)}switch(t){case"input":et(n),Sl(n,s,!0);break;case"textarea":et(n),Tl(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Ko)}n=o,r.updateQueue=n,n!==null&&(r.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=u.createElement(t,{is:n.is}):(e=u.createElement(t),t==="select"&&(u=e,n.multiple?u.multiple=!0:n.size&&(u.size=n.size))):e=u.createElementNS(e,t),e[Br]=r,e[Zn]=n,Fd(e,r,!1,!1),r.stateNode=e;e:{switch(u=aa(t,n),t){case"dialog":ke("cancel",e),ke("close",e),o=n;break;case"iframe":case"object":case"embed":ke("load",e),o=n;break;case"video":case"audio":for(o=0;o<Kn.length;o++)ke(Kn[o],e);o=n;break;case"source":ke("error",e),o=n;break;case"img":case"image":case"link":ke("error",e),ke("load",e),o=n;break;case"details":ke("toggle",e),o=n;break;case"input":bl(e,n),o=ea(e,n),ke("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=P({},n,{value:void 0}),ke("invalid",e);break;case"textarea":jl(e,n),o=na(e,n),ke("invalid",e);break;default:o=n}ia(t,o),f=o;for(s in f)if(f.hasOwnProperty(s)){var h=f[s];s==="style"?_l(e,h):s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Cl(e,h)):s==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&Ln(e,h):typeof h=="number"&&Ln(e,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(p.hasOwnProperty(s)?h!=null&&s==="onScroll"&&ke("scroll",e):h!=null&&ne(e,s,h,u))}switch(t){case"input":et(e),Sl(e,n,!1);break;case"textarea":et(e),Tl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+de(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Jt(e,!!n.multiple,s,!1):n.defaultValue!=null&&Jt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ko)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Xe(r),null;case 6:if(e&&r.stateNode!=null)Wd(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(d(166));if(t=It(oo.current),It(Wr.current),ni(r)){if(n=r.stateNode,t=r.memoizedProps,n[Br]=r,(s=n.nodeValue!==t)&&(e=pr,e!==null))switch(e.tag){case 3:Yo(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yo(n.nodeValue,t,(e.mode&1)!==0)}s&&(r.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[Br]=r,r.stateNode=n}return Xe(r),null;case 13:if(Se(Ce),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&fr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Hc(),hn(),r.flags|=98560,s=!1;else if(s=ni(r),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(d(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(d(317));s[Br]=r}else hn(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Xe(r),s=!1}else _r!==null&&(zs(_r),_r=null),s=!0;if(!s)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Fe===0&&(Fe=3):Fs())),r.updateQueue!==null&&(r.flags|=4),Xe(r),null);case 4:return vn(),Es(e,r),e===null&&Xn(r.stateNode.containerInfo),Xe(r),null;case 10:return Za(r.type._context),Xe(r),null;case 17:return or(r.type)&&Jo(),Xe(r),null;case 19:if(Se(Ce),s=r.memoizedState,s===null)return Xe(r),null;if(n=(r.flags&128)!==0,u=s.rendering,u===null)if(n)co(s,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(u=ci(e),u!==null){for(r.flags|=128,co(s,!1),n=u.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=t,t=r.child;t!==null;)s=t,e=n,s.flags&=14680066,u=s.alternate,u===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=u.childLanes,s.lanes=u.lanes,s.child=u.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=u.memoizedProps,s.memoizedState=u.memoizedState,s.updateQueue=u.updateQueue,s.type=u.type,e=u.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return be(Ce,Ce.current&1|2),r.child}e=e.sibling}s.tail!==null&&Oe()>kn&&(r.flags|=128,n=!0,co(s,!1),r.lanes=4194304)}else{if(!n)if(e=ci(u),e!==null){if(r.flags|=128,n=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!Te)return Xe(r),null}else 2*Oe()-s.renderingStartTime>kn&&t!==1073741824&&(r.flags|=128,n=!0,co(s,!1),r.lanes=4194304);s.isBackwards?(u.sibling=r.child,r.child=u):(t=s.last,t!==null?t.sibling=u:r.child=u,s.last=u)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Oe(),r.sibling=null,t=Ce.current,be(Ce,n?t&1|2:t&1),r):(Xe(r),null);case 22:case 23:return Ms(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(hr&1073741824)!==0&&(Xe(r),r.subtreeFlags&6&&(r.flags|=8192)):Xe(r),null;case 24:return null;case 25:return null}throw Error(d(156,r.tag))}function Kf(e,r){switch(Ga(r),r.tag){case 1:return or(r.type)&&Jo(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return vn(),Se(nr),Se(Ye),as(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return os(r),null;case 13:if(Se(Ce),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(d(340));hn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Se(Ce),null;case 4:return vn(),null;case 10:return Za(r.type._context),null;case 22:case 23:return Ms(),null;case 24:return null;default:return null}}var vi=!1,Je=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,z=null;function wn(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Le(e,r,n)}else t.current=null}function Ts(e,r,t){try{t()}catch(n){Le(e,r,n)}}var $d=!1;function Jf(e,r){if(Ma=Mo,e=wc(),_a(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var o=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var u=0,f=-1,h=-1,w=0,E=0,T=e,j=null;r:for(;;){for(var A;T!==t||o!==0&&T.nodeType!==3||(f=u+o),T!==s||n!==0&&T.nodeType!==3||(h=u+n),T.nodeType===3&&(u+=T.nodeValue.length),(A=T.firstChild)!==null;)j=T,T=A;for(;;){if(T===e)break r;if(j===t&&++w===o&&(f=u),j===s&&++E===n&&(h=u),(A=T.nextSibling)!==null)break;T=j,j=T.parentNode}T=A}t=f===-1||h===-1?null:{start:f,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fa={focusedElem:e,selectionRange:t},Mo=!1,z=r;z!==null;)if(r=z,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,z=e;else for(;z!==null;){r=z;try{var D=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var M=D.memoizedProps,Pe=D.memoizedState,v=r.stateNode,g=v.getSnapshotBeforeUpdate(r.elementType===r.type?M:Lr(r.type,M),Pe);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=r.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(N){Le(r,r.return,N)}if(e=r.sibling,e!==null){e.return=r.return,z=e;break}z=r.return}return D=$d,$d=!1,D}function uo(e,r,t){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&Ts(r,t,s)}o=o.next}while(o!==n)}}function yi(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==r)}}function Ns(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Ud(e){var r=e.alternate;r!==null&&(e.alternate=null,Ud(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Br],delete r[Zn],delete r[Ua],delete r[Pf],delete r[Af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function qd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cs(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Ko));else if(n!==4&&(e=e.child,e!==null))for(Cs(e,r,t),e=e.sibling;e!==null;)Cs(e,r,t),e=e.sibling}function Is(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Is(e,r,t),e=e.sibling;e!==null;)Is(e,r,t),e=e.sibling}var qe=null,Rr=!1;function ft(e,r,t){for(t=t.child;t!==null;)Vd(e,r,t),t=t.sibling}function Vd(e,r,t){if(Fr&&typeof Fr.onCommitFiberUnmount=="function")try{Fr.onCommitFiberUnmount(Ro,t)}catch{}switch(t.tag){case 5:Je||wn(t,r);case 6:var n=qe,o=Rr;qe=null,ft(e,r,t),qe=n,Rr=o,qe!==null&&(Rr?(e=qe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):qe.removeChild(t.stateNode));break;case 18:qe!==null&&(Rr?(e=qe,t=t.stateNode,e.nodeType===8?$a(e.parentNode,t):e.nodeType===1&&$a(e,t),$n(e)):$a(qe,t.stateNode));break;case 4:n=qe,o=Rr,qe=t.stateNode.containerInfo,Rr=!0,ft(e,r,t),qe=n,Rr=o;break;case 0:case 11:case 14:case 15:if(!Je&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var s=o,u=s.destroy;s=s.tag,u!==void 0&&((s&2)!==0||(s&4)!==0)&&Ts(t,r,u),o=o.next}while(o!==n)}ft(e,r,t);break;case 1:if(!Je&&(wn(t,r),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(f){Le(t,r,f)}ft(e,r,t);break;case 21:ft(e,r,t);break;case 22:t.mode&1?(Je=(n=Je)||t.memoizedState!==null,ft(e,r,t),Je=n):ft(e,r,t);break;default:ft(e,r,t)}}function Gd(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Xf),r.forEach(function(n){var o=sh.bind(null,e,n);t.has(n)||(t.add(n),n.then(o,o))})}}function Or(e,r){var t=r.deletions;if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];try{var s=e,u=r,f=u;e:for(;f!==null;){switch(f.tag){case 5:qe=f.stateNode,Rr=!1;break e;case 3:qe=f.stateNode.containerInfo,Rr=!0;break e;case 4:qe=f.stateNode.containerInfo,Rr=!0;break e}f=f.return}if(qe===null)throw Error(d(160));Vd(s,u,o),qe=null,Rr=!1;var h=o.alternate;h!==null&&(h.return=null),o.return=null}catch(w){Le(o,r,w)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Qd(r,e),r=r.sibling}function Qd(e,r){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Or(r,e),Ur(e),n&4){try{uo(3,e,e.return),yi(3,e)}catch(M){Le(e,e.return,M)}try{uo(5,e,e.return)}catch(M){Le(e,e.return,M)}}break;case 1:Or(r,e),Ur(e),n&512&&t!==null&&wn(t,t.return);break;case 5:if(Or(r,e),Ur(e),n&512&&t!==null&&wn(t,t.return),e.flags&32){var o=e.stateNode;try{Ln(o,"")}catch(M){Le(e,e.return,M)}}if(n&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,u=t!==null?t.memoizedProps:s,f=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{f==="input"&&s.type==="radio"&&s.name!=null&&kl(o,s),aa(f,u);var w=aa(f,s);for(u=0;u<h.length;u+=2){var E=h[u],T=h[u+1];E==="style"?_l(o,T):E==="dangerouslySetInnerHTML"?Cl(o,T):E==="children"?Ln(o,T):ne(o,E,T,w)}switch(f){case"input":ra(o,s);break;case"textarea":El(o,s);break;case"select":var j=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Jt(o,!!s.multiple,A,!1):j!==!!s.multiple&&(s.defaultValue!=null?Jt(o,!!s.multiple,s.defaultValue,!0):Jt(o,!!s.multiple,s.multiple?[]:"",!1))}o[Zn]=s}catch(M){Le(e,e.return,M)}}break;case 6:if(Or(r,e),Ur(e),n&4){if(e.stateNode===null)throw Error(d(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(M){Le(e,e.return,M)}}break;case 3:if(Or(r,e),Ur(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{$n(r.containerInfo)}catch(M){Le(e,e.return,M)}break;case 4:Or(r,e),Ur(e);break;case 13:Or(r,e),Ur(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Rs=Oe())),n&4&&Gd(e);break;case 22:if(E=t!==null&&t.memoizedState!==null,e.mode&1?(Je=(w=Je)||E,Or(r,e),Je=w):Or(r,e),Ur(e),n&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!E&&(e.mode&1)!==0)for(z=e,E=e.child;E!==null;){for(T=z=E;z!==null;){switch(j=z,A=j.child,j.tag){case 0:case 11:case 14:case 15:uo(4,j,j.return);break;case 1:wn(j,j.return);var D=j.stateNode;if(typeof D.componentWillUnmount=="function"){n=j,t=j.return;try{r=n,D.props=r.memoizedProps,D.state=r.memoizedState,D.componentWillUnmount()}catch(M){Le(n,t,M)}}break;case 5:wn(j,j.return);break;case 22:if(j.memoizedState!==null){Xd(T);continue}}A!==null?(A.return=j,z=A):Xd(T)}E=E.sibling}e:for(E=null,T=e;;){if(T.tag===5){if(E===null){E=T;try{o=T.stateNode,w?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(f=T.stateNode,h=T.memoizedProps.style,u=h!=null&&h.hasOwnProperty("display")?h.display:null,f.style.display=Il("display",u))}catch(M){Le(e,e.return,M)}}}else if(T.tag===6){if(E===null)try{T.stateNode.nodeValue=w?"":T.memoizedProps}catch(M){Le(e,e.return,M)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===e)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===e)break e;for(;T.sibling===null;){if(T.return===null||T.return===e)break e;E===T&&(E=null),T=T.return}E===T&&(E=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:Or(r,e),Ur(e),n&4&&Gd(e);break;case 21:break;default:Or(r,e),Ur(e)}}function Ur(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(Hd(t)){var n=t;break e}t=t.return}throw Error(d(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Ln(o,""),n.flags&=-33);var s=qd(e);Is(e,s,o);break;case 3:case 4:var u=n.stateNode.containerInfo,f=qd(e);Cs(e,f,u);break;default:throw Error(d(161))}}catch(h){Le(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Zf(e,r,t){z=e,Yd(e)}function Yd(e,r,t){for(var n=(e.mode&1)!==0;z!==null;){var o=z,s=o.child;if(o.tag===22&&n){var u=o.memoizedState!==null||vi;if(!u){var f=o.alternate,h=f!==null&&f.memoizedState!==null||Je;f=vi;var w=Je;if(vi=u,(Je=h)&&!w)for(z=o;z!==null;)u=z,h=u.child,u.tag===22&&u.memoizedState!==null?Jd(o):h!==null?(h.return=u,z=h):Jd(o);for(;s!==null;)z=s,Yd(s),s=s.sibling;z=o,vi=f,Je=w}Kd(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,z=s):Kd(e)}}function Kd(e){for(;z!==null;){var r=z;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Je||yi(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!Je)if(t===null)n.componentDidMount();else{var o=r.elementType===r.type?t.memoizedProps:Lr(r.type,t.memoizedProps);n.componentDidUpdate(o,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Xc(r,s,n);break;case 3:var u=r.updateQueue;if(u!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Xc(r,u,t)}break;case 5:var f=r.stateNode;if(t===null&&r.flags&4){t=f;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var w=r.alternate;if(w!==null){var E=w.memoizedState;if(E!==null){var T=E.dehydrated;T!==null&&$n(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}Je||r.flags&512&&Ns(r)}catch(j){Le(r,r.return,j)}}if(r===e){z=null;break}if(t=r.sibling,t!==null){t.return=r.return,z=t;break}z=r.return}}function Xd(e){for(;z!==null;){var r=z;if(r===e){z=null;break}var t=r.sibling;if(t!==null){t.return=r.return,z=t;break}z=r.return}}function Jd(e){for(;z!==null;){var r=z;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{yi(4,r)}catch(h){Le(r,t,h)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var o=r.return;try{n.componentDidMount()}catch(h){Le(r,o,h)}}var s=r.return;try{Ns(r)}catch(h){Le(r,s,h)}break;case 5:var u=r.return;try{Ns(r)}catch(h){Le(r,u,h)}}}catch(h){Le(r,r.return,h)}if(r===e){z=null;break}var f=r.sibling;if(f!==null){f.return=r.return,z=f;break}z=r.return}}var eh=Math.ceil,wi=O.ReactCurrentDispatcher,_s=O.ReactCurrentOwner,kr=O.ReactCurrentBatchConfig,fe=0,$e=null,Ae=null,Ve=0,hr=0,bn=lt(0),Fe=0,po=null,Lt=0,bi=0,Ls=0,fo=null,ar=null,Rs=0,kn=1/0,Xr=null,ki=!1,Os=null,ht=null,Si=!1,mt=null,ji=0,ho=0,Ps=null,Ei=-1,Ti=0;function tr(){return(fe&6)!==0?Oe():Ei!==-1?Ei:Ei=Oe()}function gt(e){return(e.mode&1)===0?1:(fe&2)!==0&&Ve!==0?Ve&-Ve:Df.transition!==null?(Ti===0&&(Ti=ql()),Ti):(e=ve,e!==0||(e=window.event,e=e===void 0?16:ec(e.type)),e)}function Pr(e,r,t,n){if(50<ho)throw ho=0,Ps=null,Error(d(185));Dn(e,t,n),((fe&2)===0||e!==$e)&&(e===$e&&((fe&2)===0&&(bi|=t),Fe===4&&xt(e,Ve)),sr(e,n),t===1&&fe===0&&(r.mode&1)===0&&(kn=Oe()+500,ei&&dt()))}function sr(e,r){var t=e.callbackNode;zp(e,r);var n=Ao(e,e===$e?Ve:0);if(n===0)t!==null&&$l(t),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(t!=null&&$l(t),r===1)e.tag===0?zf(eu.bind(null,e)):Fc(eu.bind(null,e)),Rf(function(){(fe&6)===0&&dt()}),t=null;else{switch(Vl(n)){case 1:t=fa;break;case 4:t=Ul;break;case 16:t=Lo;break;case 536870912:t=Hl;break;default:t=Lo}t=lu(t,Zd.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Zd(e,r){if(Ei=-1,Ti=0,(fe&6)!==0)throw Error(d(327));var t=e.callbackNode;if(Sn()&&e.callbackNode!==t)return null;var n=Ao(e,e===$e?Ve:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=Ni(e,n);else{r=n;var o=fe;fe|=2;var s=tu();($e!==e||Ve!==r)&&(Xr=null,kn=Oe()+500,Ot(e,r));do try{nh();break}catch(f){ru(e,f)}while(!0);Ja(),wi.current=s,fe=o,Ae!==null?r=0:($e=null,Ve=0,r=Fe)}if(r!==0){if(r===2&&(o=ha(e),o!==0&&(n=o,r=As(e,o))),r===1)throw t=po,Ot(e,0),xt(e,n),sr(e,Oe()),t;if(r===6)xt(e,n);else{if(o=e.current.alternate,(n&30)===0&&!rh(o)&&(r=Ni(e,n),r===2&&(s=ha(e),s!==0&&(n=s,r=As(e,s))),r===1))throw t=po,Ot(e,0),xt(e,n),sr(e,Oe()),t;switch(e.finishedWork=o,e.finishedLanes=n,r){case 0:case 1:throw Error(d(345));case 2:Pt(e,ar,Xr);break;case 3:if(xt(e,n),(n&130023424)===n&&(r=Rs+500-Oe(),10<r)){if(Ao(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){tr(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Wa(Pt.bind(null,e,ar,Xr),r);break}Pt(e,ar,Xr);break;case 4:if(xt(e,n),(n&4194240)===n)break;for(r=e.eventTimes,o=-1;0<n;){var u=31-Cr(n);s=1<<u,u=r[u],u>o&&(o=u),n&=~s}if(n=o,n=Oe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*eh(n/1960))-n,10<n){e.timeoutHandle=Wa(Pt.bind(null,e,ar,Xr),n);break}Pt(e,ar,Xr);break;case 5:Pt(e,ar,Xr);break;default:throw Error(d(329))}}}return sr(e,Oe()),e.callbackNode===t?Zd.bind(null,e):null}function As(e,r){var t=fo;return e.current.memoizedState.isDehydrated&&(Ot(e,r).flags|=256),e=Ni(e,r),e!==2&&(r=ar,ar=t,r!==null&&zs(r)),e}function zs(e){ar===null?ar=e:ar.push.apply(ar,e)}function rh(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var o=t[n],s=o.getSnapshot;o=o.value;try{if(!Ir(s(),o))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function xt(e,r){for(r&=~Ls,r&=~bi,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Cr(r),n=1<<t;e[t]=-1,r&=~n}}function eu(e){if((fe&6)!==0)throw Error(d(327));Sn();var r=Ao(e,0);if((r&1)===0)return sr(e,Oe()),null;var t=Ni(e,r);if(e.tag!==0&&t===2){var n=ha(e);n!==0&&(r=n,t=As(e,n))}if(t===1)throw t=po,Ot(e,0),xt(e,r),sr(e,Oe()),t;if(t===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Pt(e,ar,Xr),sr(e,Oe()),null}function Ds(e,r){var t=fe;fe|=1;try{return e(r)}finally{fe=t,fe===0&&(kn=Oe()+500,ei&&dt())}}function Rt(e){mt!==null&&mt.tag===0&&(fe&6)===0&&Sn();var r=fe;fe|=1;var t=kr.transition,n=ve;try{if(kr.transition=null,ve=1,e)return e()}finally{ve=n,kr.transition=t,fe=r,(fe&6)===0&&dt()}}function Ms(){hr=bn.current,Se(bn)}function Ot(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Lf(t)),Ae!==null)for(t=Ae.return;t!==null;){var n=t;switch(Ga(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Jo();break;case 3:vn(),Se(nr),Se(Ye),as();break;case 5:os(n);break;case 4:vn();break;case 13:Se(Ce);break;case 19:Se(Ce);break;case 10:Za(n.type._context);break;case 22:case 23:Ms()}t=t.return}if($e=e,Ae=e=vt(e.current,null),Ve=hr=r,Fe=0,po=null,Ls=bi=Lt=0,ar=fo=null,Ct!==null){for(r=0;r<Ct.length;r++)if(t=Ct[r],n=t.interleaved,n!==null){t.interleaved=null;var o=n.next,s=t.pending;if(s!==null){var u=s.next;s.next=o,n.next=u}t.pending=n}Ct=null}return e}function ru(e,r){do{var t=Ae;try{if(Ja(),di.current=hi,ui){for(var n=Ie.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}ui=!1}if(_t=0,We=Me=Ie=null,io=!1,ao=0,_s.current=null,t===null||t.return===null){Fe=1,po=r,Ae=null;break}e:{var s=e,u=t.return,f=t,h=r;if(r=Ve,f.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var w=h,E=f,T=E.tag;if((E.mode&1)===0&&(T===0||T===11||T===15)){var j=E.alternate;j?(E.updateQueue=j.updateQueue,E.memoizedState=j.memoizedState,E.lanes=j.lanes):(E.updateQueue=null,E.memoizedState=null)}var A=Td(u);if(A!==null){A.flags&=-257,Nd(A,u,f,s,r),A.mode&1&&Ed(s,w,r),r=A,h=w;var D=r.updateQueue;if(D===null){var M=new Set;M.add(h),r.updateQueue=M}else D.add(h);break e}else{if((r&1)===0){Ed(s,w,r),Fs();break e}h=Error(d(426))}}else if(Te&&f.mode&1){var Pe=Td(u);if(Pe!==null){(Pe.flags&65536)===0&&(Pe.flags|=256),Nd(Pe,u,f,s,r),Ka(yn(h,f));break e}}s=h=yn(h,f),Fe!==4&&(Fe=2),fo===null?fo=[s]:fo.push(s),s=u;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var v=Sd(s,h,r);Kc(s,v);break e;case 1:f=h;var g=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ht===null||!ht.has(y)))){s.flags|=65536,r&=-r,s.lanes|=r;var N=jd(s,f,r);Kc(s,N);break e}}s=s.return}while(s!==null)}ou(t)}catch(W){r=W,Ae===t&&t!==null&&(Ae=t=t.return);continue}break}while(!0)}function tu(){var e=wi.current;return wi.current=hi,e===null?hi:e}function Fs(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),$e===null||(Lt&268435455)===0&&(bi&268435455)===0||xt($e,Ve)}function Ni(e,r){var t=fe;fe|=2;var n=tu();($e!==e||Ve!==r)&&(Xr=null,Ot(e,r));do try{th();break}catch(o){ru(e,o)}while(!0);if(Ja(),fe=t,wi.current=n,Ae!==null)throw Error(d(261));return $e=null,Ve=0,Fe}function th(){for(;Ae!==null;)nu(Ae)}function nh(){for(;Ae!==null&&!Np();)nu(Ae)}function nu(e){var r=su(e.alternate,e,hr);e.memoizedProps=e.pendingProps,r===null?ou(e):Ae=r,_s.current=null}function ou(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=Yf(t,r,hr),t!==null){Ae=t;return}}else{if(t=Kf(t,r),t!==null){t.flags&=32767,Ae=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Ae=null;return}}if(r=r.sibling,r!==null){Ae=r;return}Ae=r=e}while(r!==null);Fe===0&&(Fe=5)}function Pt(e,r,t){var n=ve,o=kr.transition;try{kr.transition=null,ve=1,oh(e,r,t,n)}finally{kr.transition=o,ve=n}return null}function oh(e,r,t,n){do Sn();while(mt!==null);if((fe&6)!==0)throw Error(d(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Dp(e,s),e===$e&&(Ae=$e=null,Ve=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Si||(Si=!0,lu(Lo,function(){return Sn(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=kr.transition,kr.transition=null;var u=ve;ve=1;var f=fe;fe|=4,_s.current=null,Jf(e,t),Qd(t,e),jf(Fa),Mo=!!Ma,Fa=Ma=null,e.current=t,Zf(t),Cp(),fe=f,ve=u,kr.transition=s}else e.current=t;if(Si&&(Si=!1,mt=e,ji=o),s=e.pendingLanes,s===0&&(ht=null),Lp(t.stateNode),sr(e,Oe()),r!==null)for(n=e.onRecoverableError,t=0;t<r.length;t++)o=r[t],n(o.value,{componentStack:o.stack,digest:o.digest});if(ki)throw ki=!1,e=Os,Os=null,e;return(ji&1)!==0&&e.tag!==0&&Sn(),s=e.pendingLanes,(s&1)!==0?e===Ps?ho++:(ho=0,Ps=e):ho=0,dt(),null}function Sn(){if(mt!==null){var e=Vl(ji),r=kr.transition,t=ve;try{if(kr.transition=null,ve=16>e?16:e,mt===null)var n=!1;else{if(e=mt,mt=null,ji=0,(fe&6)!==0)throw Error(d(331));var o=fe;for(fe|=4,z=e.current;z!==null;){var s=z,u=s.child;if((z.flags&16)!==0){var f=s.deletions;if(f!==null){for(var h=0;h<f.length;h++){var w=f[h];for(z=w;z!==null;){var E=z;switch(E.tag){case 0:case 11:case 15:uo(8,E,s)}var T=E.child;if(T!==null)T.return=E,z=T;else for(;z!==null;){E=z;var j=E.sibling,A=E.return;if(Ud(E),E===w){z=null;break}if(j!==null){j.return=A,z=j;break}z=A}}}var D=s.alternate;if(D!==null){var M=D.child;if(M!==null){D.child=null;do{var Pe=M.sibling;M.sibling=null,M=Pe}while(M!==null)}}z=s}}if((s.subtreeFlags&2064)!==0&&u!==null)u.return=s,z=u;else e:for(;z!==null;){if(s=z,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:uo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,z=v;break e}z=s.return}}var g=e.current;for(z=g;z!==null;){u=z;var y=u.child;if((u.subtreeFlags&2064)!==0&&y!==null)y.return=u,z=y;else e:for(u=g;z!==null;){if(f=z,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:yi(9,f)}}catch(W){Le(f,f.return,W)}if(f===u){z=null;break e}var N=f.sibling;if(N!==null){N.return=f.return,z=N;break e}z=f.return}}if(fe=o,dt(),Fr&&typeof Fr.onPostCommitFiberRoot=="function")try{Fr.onPostCommitFiberRoot(Ro,e)}catch{}n=!0}return n}finally{ve=t,kr.transition=r}}return!1}function iu(e,r,t){r=yn(t,r),r=Sd(e,r,1),e=pt(e,r,1),r=tr(),e!==null&&(Dn(e,1,r),sr(e,r))}function Le(e,r,t){if(e.tag===3)iu(e,e,t);else for(;r!==null;){if(r.tag===3){iu(r,e,t);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ht===null||!ht.has(n))){e=yn(t,e),e=jd(r,e,1),r=pt(r,e,1),e=tr(),r!==null&&(Dn(r,1,e),sr(r,e));break}}r=r.return}}function ih(e,r,t){var n=e.pingCache;n!==null&&n.delete(r),r=tr(),e.pingedLanes|=e.suspendedLanes&t,$e===e&&(Ve&t)===t&&(Fe===4||Fe===3&&(Ve&130023424)===Ve&&500>Oe()-Rs?Ot(e,0):Ls|=t),sr(e,r)}function au(e,r){r===0&&((e.mode&1)===0?r=1:(r=Po,Po<<=1,(Po&130023424)===0&&(Po=4194304)));var t=tr();e=Qr(e,r),e!==null&&(Dn(e,r,t),sr(e,t))}function ah(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),au(e,t)}function sh(e,r){var t=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(d(314))}n!==null&&n.delete(r),au(e,t)}var su;su=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||nr.current)ir=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return ir=!1,Qf(e,r,t);ir=(e.flags&131072)!==0}else ir=!1,Te&&(r.flags&1048576)!==0&&Bc(r,ti,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;xi(e,r),e=r.pendingProps;var o=un(r,Ye.current);xn(r,t),o=cs(null,r,n,e,o,t);var s=ds();return r.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,or(n)?(s=!0,Zo(r)):s=!1,r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ts(r),o.updater=mi,r.stateNode=o,o._reactInternals=r,gs(r,n,e,t),r=ws(null,r,n,!0,s,t)):(r.tag=0,Te&&s&&Va(r),rr(null,r,o,t),r=r.child),r;case 16:n=r.elementType;e:{switch(xi(e,r),e=r.pendingProps,o=n._init,n=o(n._payload),r.type=n,o=r.tag=ch(n),e=Lr(n,e),o){case 0:r=ys(null,r,n,e,t);break e;case 1:r=Od(null,r,n,e,t);break e;case 11:r=Cd(null,r,n,e,t);break e;case 14:r=Id(null,r,n,Lr(n.type,e),t);break e}throw Error(d(306,n,""))}return r;case 0:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:Lr(n,o),ys(e,r,n,o,t);case 1:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:Lr(n,o),Od(e,r,n,o,t);case 3:e:{if(Pd(r),e===null)throw Error(d(387));n=r.pendingProps,s=r.memoizedState,o=s.element,Yc(e,r),li(r,n,null,t);var u=r.memoizedState;if(n=u.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){o=yn(Error(d(423)),r),r=Ad(e,r,n,t,o);break e}else if(n!==o){o=yn(Error(d(424)),r),r=Ad(e,r,n,t,o);break e}else for(fr=st(r.stateNode.containerInfo.firstChild),pr=r,Te=!0,_r=null,t=Gc(r,null,n,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(hn(),n===o){r=Kr(e,r,t);break e}rr(e,r,n,t)}r=r.child}return r;case 5:return Jc(r),e===null&&Ya(r),n=r.type,o=r.pendingProps,s=e!==null?e.memoizedProps:null,u=o.children,Ba(n,o)?u=null:s!==null&&Ba(n,s)&&(r.flags|=32),Rd(e,r),rr(e,r,u,t),r.child;case 6:return e===null&&Ya(r),null;case 13:return zd(e,r,t);case 4:return ns(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=mn(r,null,n,t):rr(e,r,n,t),r.child;case 11:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:Lr(n,o),Cd(e,r,n,o,t);case 7:return rr(e,r,r.pendingProps,t),r.child;case 8:return rr(e,r,r.pendingProps.children,t),r.child;case 12:return rr(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(n=r.type._context,o=r.pendingProps,s=r.memoizedProps,u=o.value,be(ii,n._currentValue),n._currentValue=u,s!==null)if(Ir(s.value,u)){if(s.children===o.children&&!nr.current){r=Kr(e,r,t);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var f=s.dependencies;if(f!==null){u=s.child;for(var h=f.firstContext;h!==null;){if(h.context===n){if(s.tag===1){h=Yr(-1,t&-t),h.tag=2;var w=s.updateQueue;if(w!==null){w=w.shared;var E=w.pending;E===null?h.next=h:(h.next=E.next,E.next=h),w.pending=h}}s.lanes|=t,h=s.alternate,h!==null&&(h.lanes|=t),es(s.return,t,r),f.lanes|=t;break}h=h.next}}else if(s.tag===10)u=s.type===r.type?null:s.child;else if(s.tag===18){if(u=s.return,u===null)throw Error(d(341));u.lanes|=t,f=u.alternate,f!==null&&(f.lanes|=t),es(u,t,r),u=s.sibling}else u=s.child;if(u!==null)u.return=s;else for(u=s;u!==null;){if(u===r){u=null;break}if(s=u.sibling,s!==null){s.return=u.return,u=s;break}u=u.return}s=u}rr(e,r,o.children,t),r=r.child}return r;case 9:return o=r.type,n=r.pendingProps.children,xn(r,t),o=wr(o),n=n(o),r.flags|=1,rr(e,r,n,t),r.child;case 14:return n=r.type,o=Lr(n,r.pendingProps),o=Lr(n.type,o),Id(e,r,n,o,t);case 15:return _d(e,r,r.type,r.pendingProps,t);case 17:return n=r.type,o=r.pendingProps,o=r.elementType===n?o:Lr(n,o),xi(e,r),r.tag=1,or(n)?(e=!0,Zo(r)):e=!1,xn(r,t),bd(r,n,o),gs(r,n,o,t),ws(null,r,n,!0,e,t);case 19:return Md(e,r,t);case 22:return Ld(e,r,t)}throw Error(d(156,r.tag))};function lu(e,r){return Wl(e,r)}function lh(e,r,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sr(e,r,t,n){return new lh(e,r,t,n)}function Bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ch(e){if(typeof e=="function")return Bs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_e)return 11;if(e===er)return 14}return 2}function vt(e,r){var t=e.alternate;return t===null?(t=Sr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ci(e,r,t,n,o,s){var u=2;if(n=e,typeof e=="function")Bs(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case R:return At(t.children,o,s,r);case B:u=8,o|=8;break;case ye:return e=Sr(12,t,r,o|2),e.elementType=ye,e.lanes=s,e;case Ee:return e=Sr(13,t,r,o),e.elementType=Ee,e.lanes=s,e;case Ge:return e=Sr(19,t,r,o),e.elementType=Ge,e.lanes=s,e;case we:return Ii(t,o,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Re:u=10;break e;case ae:u=9;break e;case _e:u=11;break e;case er:u=14;break e;case Qe:u=16,n=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return r=Sr(u,t,r,o),r.elementType=e,r.type=n,r.lanes=s,r}function At(e,r,t,n){return e=Sr(7,e,n,r),e.lanes=t,e}function Ii(e,r,t,n){return e=Sr(22,e,n,r),e.elementType=we,e.lanes=t,e.stateNode={isHidden:!1},e}function Ws(e,r,t){return e=Sr(6,e,null,r),e.lanes=t,e}function $s(e,r,t){return r=Sr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function dh(e,r,t,n,o){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Us(e,r,t,n,o,s,u,f,h){return e=new dh(e,r,t,f,h),r===1?(r=1,s===!0&&(r|=8)):r=0,s=Sr(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ts(s),e}function uh(e,r,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:n==null?null:""+n,children:e,containerInfo:r,implementation:t}}function cu(e){if(!e)return ct;e=e._reactInternals;e:{if(St(e)!==e||e.tag!==1)throw Error(d(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(d(171))}if(e.tag===1){var t=e.type;if(or(t))return Dc(e,t,r)}return r}function du(e,r,t,n,o,s,u,f,h){return e=Us(t,n,!0,e,o,s,u,f,h),e.context=cu(null),t=e.current,n=tr(),o=gt(t),s=Yr(n,o),s.callback=r!=null?r:null,pt(t,s,o),e.current.lanes=o,Dn(e,o,n),sr(e,n),e}function _i(e,r,t,n){var o=r.current,s=tr(),u=gt(o);return t=cu(t),r.context===null?r.context=t:r.pendingContext=t,r=Yr(s,u),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=pt(o,r,u),e!==null&&(Pr(e,o,u,s),si(e,o,u)),u}function Li(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function Hs(e,r){uu(e,r),(e=e.alternate)&&uu(e,r)}function ph(){return null}var pu=typeof reportError=="function"?reportError:function(e){console.error(e)};function qs(e){this._internalRoot=e}Ri.prototype.render=qs.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(d(409));_i(e,r,null,null)},Ri.prototype.unmount=qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Rt(function(){_i(null,e,null,null)}),r[Hr]=null}};function Ri(e){this._internalRoot=e}Ri.prototype.unstable_scheduleHydration=function(e){if(e){var r=Yl();e={blockedOn:null,target:e,priority:r};for(var t=0;t<ot.length&&r!==0&&r<ot[t].priority;t++);ot.splice(t,0,e),t===0&&Jl(e)}};function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fu(){}function fh(e,r,t,n,o){if(o){if(typeof n=="function"){var s=n;n=function(){var w=Li(u);s.call(w)}}var u=du(r,n,e,0,null,!1,!1,"",fu);return e._reactRootContainer=u,e[Hr]=u.current,Xn(e.nodeType===8?e.parentNode:e),Rt(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var f=n;n=function(){var w=Li(h);f.call(w)}}var h=Us(e,0,!1,null,null,!1,!1,"",fu);return e._reactRootContainer=h,e[Hr]=h.current,Xn(e.nodeType===8?e.parentNode:e),Rt(function(){_i(r,h,t,n)}),h}function Pi(e,r,t,n,o){var s=t._reactRootContainer;if(s){var u=s;if(typeof o=="function"){var f=o;o=function(){var h=Li(u);f.call(h)}}_i(r,u,e,o)}else u=fh(t,r,e,o,n);return Li(u)}Gl=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=zn(r.pendingLanes);t!==0&&(ga(r,t|1),sr(r,Oe()),(fe&6)===0&&(kn=Oe()+500,dt()))}break;case 13:Rt(function(){var n=Qr(e,1);if(n!==null){var o=tr();Pr(n,e,1,o)}}),Hs(e,1)}},xa=function(e){if(e.tag===13){var r=Qr(e,134217728);if(r!==null){var t=tr();Pr(r,e,134217728,t)}Hs(e,134217728)}},Ql=function(e){if(e.tag===13){var r=gt(e),t=Qr(e,r);if(t!==null){var n=tr();Pr(t,e,r,n)}Hs(e,r)}},Yl=function(){return ve},Kl=function(e,r){var t=ve;try{return ve=e,r()}finally{ve=t}},ca=function(e,r,t){switch(r){case"input":if(ra(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var n=t[r];if(n!==e&&n.form===e.form){var o=Xo(n);if(!o)throw Error(d(90));kt(n),ra(n,o)}}}break;case"textarea":El(e,t);break;case"select":r=t.value,r!=null&&Jt(e,!!t.multiple,r,!1)}},Pl=Ds,Al=Rt;var hh={usingClientEntryPoint:!1,Events:[eo,cn,Xo,Rl,Ol,Ds]},mo={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mh={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fl(e),e===null?null:e.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||ph,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{Ro=Ai.inject(mh),Fr=Ai}catch{}}return lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hh,lr.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vs(r))throw Error(d(200));return uh(e,r,null,t)},lr.createRoot=function(e,r){if(!Vs(e))throw Error(d(299));var t=!1,n="",o=pu;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),r=Us(e,1,!1,null,null,t,!1,n,o),e[Hr]=r.current,Xn(e.nodeType===8?e.parentNode:e),new qs(r)},lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=Fl(r),e=e===null?null:e.stateNode,e},lr.flushSync=function(e){return Rt(e)},lr.hydrate=function(e,r,t){if(!Oi(r))throw Error(d(200));return Pi(null,e,r,!0,t)},lr.hydrateRoot=function(e,r,t){if(!Vs(e))throw Error(d(405));var n=t!=null&&t.hydratedSources||null,o=!1,s="",u=pu;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),r=du(r,null,e,1,t!=null?t:null,o,!1,s,u),e[Hr]=r.current,Xn(e),n)for(e=0;e<n.length;e++)t=n[e],o=t._getVersion,o=o(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,o]:r.mutableSourceEagerHydrationData.push(t,o);return new Ri(r)},lr.render=function(e,r,t){if(!Oi(r))throw Error(d(200));return Pi(null,e,r,!1,t)},lr.unmountComponentAtNode=function(e){if(!Oi(e))throw Error(d(40));return e._reactRootContainer?(Rt(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[Hr]=null})}),!0):!1},lr.unstable_batchedUpdates=Ds,lr.unstable_renderSubtreeIntoContainer=function(e,r,t,n){if(!Oi(t))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return Pi(e,r,t,!1,n)},lr.version="18.3.1-next-f1338f8080-20240426",lr}var bu;function jh(){if(bu)return Ys.exports;bu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Ys.exports=Sh(),Ys.exports}var ku;function Eh(){if(ku)return zi;ku=1;var i=jh();return zi.createRoot=i.createRoot,zi.hydrateRoot=i.hydrateRoot,zi}var Th=Eh(),Q=fl();const gr=xh(Q);var cr=function(){return cr=Object.assign||function(c){for(var d,l=1,p=arguments.length;l<p;l++){d=arguments[l];for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&(c[m]=d[m])}return c},cr.apply(this,arguments)};function Ui(i,c,d){if(d||arguments.length===2)for(var l=0,p=c.length,m;l<p;l++)(m||!(l in c))&&(m||(m=Array.prototype.slice.call(c,0,l)),m[l]=c[l]);return i.concat(m||Array.prototype.slice.call(c))}var je="-ms-",yo="-moz-",me="-webkit-",Hu="comm",Yi="rule",hl="decl",Nh="@import",Ch="@namespace",qu="@keyframes",Ih="@layer",Vu=Math.abs,ml=String.fromCharCode,ol=Object.assign;function _h(i,c){return Be(i,0)^45?(((c<<2^Be(i,0))<<2^Be(i,1))<<2^Be(i,2))<<2^Be(i,3):0}function Gu(i){return i.trim()}function Jr(i,c){return(i=c.exec(i))?i[0]:i}function te(i,c,d){return i.replace(c,d)}function Di(i,c,d){return i.indexOf(c,d)}function Be(i,c){return i.charCodeAt(c)|0}function Xt(i,c,d){return i.slice(c,d)}function Ar(i){return i.length}function Qu(i){return i.length}function xo(i,c){return c.push(i),i}function Lh(i,c){return i.map(c).join("")}function Su(i,c){return i.filter(function(d){return!Jr(d,c)})}var Ki=1,En=1,Yu=0,jr=0,ze=0,In="";function Xi(i,c,d,l,p,m,b,_){return{value:i,root:c,parent:d,type:l,props:p,children:m,line:Ki,column:En,length:b,return:"",siblings:_}}function wt(i,c){return ol(Xi("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},c)}function jn(i){for(;i.root;)i=wt(i.root,{children:[i]});xo(i,i.siblings)}function Rh(){return ze}function Oh(){return ze=jr>0?Be(In,--jr):0,En--,ze===10&&(En=1,Ki--),ze}function zr(){return ze=jr<Yu?Be(In,jr++):0,En++,ze===10&&(En=1,Ki++),ze}function bt(){return Be(In,jr)}function Mi(){return jr}function Ji(i,c){return Xt(In,i,c)}function ko(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ph(i){return Ki=En=1,Yu=Ar(In=i),jr=0,[]}function Ah(i){return In="",i}function Js(i){return Gu(Ji(jr-1,il(i===91?i+2:i===40?i+1:i)))}function zh(i){for(;(ze=bt())&&ze<33;)zr();return ko(i)>2||ko(ze)>3?"":" "}function Dh(i,c){for(;--c&&zr()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Ji(i,Mi()+(c<6&&bt()==32&&zr()==32))}function il(i){for(;zr();)switch(ze){case i:return jr;case 34:case 39:i!==34&&i!==39&&il(ze);break;case 40:i===41&&il(i);break;case 92:zr();break}return jr}function Mh(i,c){for(;zr()&&i+ze!==57;)if(i+ze===84&&bt()===47)break;return"/*"+Ji(c,jr-1)+"*"+ml(i===47?i:zr())}function Fh(i){for(;!ko(bt());)zr();return Ji(i,jr)}function Bh(i){return Ah(Fi("",null,null,null,[""],i=Ph(i),0,[0],i))}function Fi(i,c,d,l,p,m,b,_,C){for(var G=0,L=0,F=b,Y=0,ce=0,J=0,U=1,K=1,ge=1,ue=0,ne="",O=p,Z=m,H=l,R=ne;K;)switch(J=ue,ue=zr()){case 40:if(J!=108&&Be(R,F-1)==58){Di(R+=te(Js(ue),"&","&\f"),"&\f",Vu(G?_[G-1]:0))!=-1&&(ge=-1);break}case 34:case 39:case 91:R+=Js(ue);break;case 9:case 10:case 13:case 32:R+=zh(J);break;case 92:R+=Dh(Mi()-1,7);continue;case 47:switch(bt()){case 42:case 47:xo(Wh(Mh(zr(),Mi()),c,d,C),C),(ko(J||1)==5||ko(bt()||1)==5)&&Ar(R)&&Xt(R,-1,void 0)!==" "&&(R+=" ");break;default:R+="/"}break;case 123*U:_[G++]=Ar(R)*ge;case 125*U:case 59:case 0:switch(ue){case 0:case 125:K=0;case 59+L:ge==-1&&(R=te(R,/\f/g,"")),ce>0&&(Ar(R)-F||U===0&&J===47)&&xo(ce>32?Eu(R+";",l,d,F-1,C):Eu(te(R," ","")+";",l,d,F-2,C),C);break;case 59:R+=";";default:if(xo(H=ju(R,c,d,G,L,p,_,ne,O=[],Z=[],F,m),m),ue===123)if(L===0)Fi(R,c,H,H,O,m,F,_,Z);else{switch(Y){case 99:if(Be(R,3)===110)break;case 108:if(Be(R,2)===97)break;default:L=0;case 100:case 109:case 115:}L?Fi(i,H,H,l&&xo(ju(i,H,H,0,0,p,_,ne,p,O=[],F,Z),Z),p,Z,F,_,l?O:Z):Fi(R,H,H,H,[""],Z,0,_,Z)}}G=L=ce=0,U=ge=1,ne=R="",F=b;break;case 58:F=1+Ar(R),ce=J;default:if(U<1){if(ue==123)--U;else if(ue==125&&U++==0&&Oh()==125)continue}switch(R+=ml(ue),ue*U){case 38:ge=L>0?1:(R+="\f",-1);break;case 44:_[G++]=(Ar(R)-1)*ge,ge=1;break;case 64:bt()===45&&(R+=Js(zr())),Y=bt(),L=F=Ar(ne=R+=Fh(Mi())),ue++;break;case 45:J===45&&Ar(R)==2&&(U=0)}}return m}function ju(i,c,d,l,p,m,b,_,C,G,L,F){for(var Y=p-1,ce=p===0?m:[""],J=Qu(ce),U=0,K=0,ge=0;U<l;++U)for(var ue=0,ne=Xt(i,Y+1,Y=Vu(K=b[U])),O=i;ue<J;++ue)(O=Gu(K>0?ce[ue]+" "+ne:te(ne,/&\f/g,ce[ue])))&&(C[ge++]=O);return Xi(i,c,d,p===0?Yi:_,C,G,L,F)}function Wh(i,c,d,l){return Xi(i,c,d,Hu,ml(Rh()),Xt(i,2,-2),0,l)}function Eu(i,c,d,l,p){return Xi(i,c,d,hl,Xt(i,0,l),Xt(i,l+1,-1),l,p)}function Ku(i,c,d){switch(_h(i,c)){case 5103:return me+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return me+i+i;case 4855:return me+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return yo+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return me+i+yo+i+je+i+i;case 5936:switch(Be(i,c+11)){case 114:return me+i+je+te(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return me+i+je+te(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return me+i+je+te(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return me+i+je+i+i;case 6165:return me+i+je+"flex-"+i+i;case 5187:return me+i+te(i,/(\w+).+(:[^]+)/,me+"box-$1$2"+je+"flex-$1$2")+i;case 5443:return me+i+je+"flex-item-"+te(i,/flex-|-self/g,"")+(Jr(i,/flex-|baseline/)?"":je+"grid-row-"+te(i,/flex-|-self/g,""))+i;case 4675:return me+i+je+"flex-line-pack"+te(i,/align-content|flex-|-self/g,"")+i;case 5548:return me+i+je+te(i,"shrink","negative")+i;case 5292:return me+i+je+te(i,"basis","preferred-size")+i;case 6060:return me+"box-"+te(i,"-grow","")+me+i+je+te(i,"grow","positive")+i;case 4554:return me+te(i,/([^-])(transform)/g,"$1"+me+"$2")+i;case 6187:return te(te(te(i,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),i,"")+i;case 5495:case 3959:return te(i,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return te(te(i,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+je+"flex-pack:$3"),/space-between/,"justify")+me+i+i;case 4200:if(!Jr(i,/flex-|baseline/))return je+"grid-column-align"+Xt(i,c)+i;break;case 2592:case 3360:return je+te(i,"template-","")+i;case 4384:case 3616:return d&&d.some(function(l,p){return c=p,Jr(l.props,/grid-\w+-end/)})?~Di(i+(d=d[c].value),"span",0)?i:je+te(i,"-start","")+i+je+"grid-row-span:"+(~Di(d,"span",0)?Jr(d,/\d+/):+Jr(d,/\d+/)-+Jr(i,/\d+/))+";":je+te(i,"-start","")+i;case 4896:case 4128:return d&&d.some(function(l){return Jr(l.props,/grid-\w+-start/)})?i:je+te(te(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return te(i,/(.+)-inline(.+)/,me+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ar(i)-1-c>6)switch(Be(i,c+1)){case 109:if(Be(i,c+4)!==45)break;case 102:return te(i,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+yo+(Be(i,c+3)==108?"$3":"$2-$3"))+i;case 115:return~Di(i,"stretch",0)?Ku(te(i,"stretch","fill-available"),c,d)+i:i}break;case 5152:case 5920:return te(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,p,m,b,_,C,G){return je+p+":"+m+G+(b?je+p+"-span:"+(_?C:+C-+m)+G:"")+i});case 4949:if(Be(i,c+6)===121)return te(i,":",":"+me)+i;break;case 6444:switch(Be(i,Be(i,14)===45?18:11)){case 120:return te(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(Be(i,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+je+"$2box$3")+i;case 100:return te(i,":",":"+je)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(i,"scroll-","scroll-snap-")+i}return i}function Hi(i,c){for(var d="",l=0;l<i.length;l++)d+=c(i[l],l,i,c)||"";return d}function $h(i,c,d,l){switch(i.type){case Ih:if(i.children.length)break;case Nh:case Ch:case hl:return i.return=i.return||i.value;case Hu:return"";case qu:return i.return=i.value+"{"+Hi(i.children,l)+"}";case Yi:if(!Ar(i.value=i.props.join(",")))return""}return Ar(d=Hi(i.children,l))?i.return=i.value+"{"+d+"}":""}function Uh(i){var c=Qu(i);return function(d,l,p,m){for(var b="",_=0;_<c;_++)b+=i[_](d,l,p,m)||"";return b}}function Hh(i){return function(c){c.root||(c=c.return)&&i(c)}}function qh(i,c,d,l){if(i.length>-1&&!i.return)switch(i.type){case hl:i.return=Ku(i.value,i.length,d);return;case qu:return Hi([wt(i,{value:te(i.value,"@","@"+me)})],l);case Yi:if(i.length)return Lh(d=i.props,function(p){switch(Jr(p,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(wt(i,{props:[te(p,/:(read-\w+)/,":"+yo+"$1")]})),jn(wt(i,{props:[p]})),ol(i,{props:Su(d,l)});break;case"::placeholder":jn(wt(i,{props:[te(p,/:(plac\w+)/,":"+me+"input-$1")]})),jn(wt(i,{props:[te(p,/:(plac\w+)/,":"+yo+"$1")]})),jn(wt(i,{props:[te(p,/:(plac\w+)/,je+"input-$1")]})),jn(wt(i,{props:[p]})),ol(i,{props:Su(d,l)});break}return""})}}var Vh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mr={},Tn=typeof process!="undefined"&&mr!==void 0&&(mr.REACT_APP_SC_ATTR||mr.SC_ATTR)||"data-styled",Xu="active",Ju="data-styled-version",Zi="6.3.10",gl=`/*!sc*/
`,wo=typeof window!="undefined"&&typeof document!="undefined",Gh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&mr!==void 0&&mr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&mr.REACT_APP_SC_DISABLE_SPEEDY!==""?mr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&mr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&mr!==void 0&&mr.SC_DISABLE_SPEEDY!==void 0&&mr.SC_DISABLE_SPEEDY!==""&&mr.SC_DISABLE_SPEEDY!=="false"&&mr.SC_DISABLE_SPEEDY);function To(i){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Bi=new Map,qi=new Map,Wi=1,vo=function(i){if(Bi.has(i))return Bi.get(i);for(;qi.has(Wi);)Wi++;var c=Wi++;return Bi.set(i,c),qi.set(c,i),c},Qh=function(i,c){Wi=c+1,Bi.set(i,c),qi.set(c,i)},xl=Object.freeze([]),Nn=Object.freeze({});function Yh(i,c,d){return d===void 0&&(d=Nn),i.theme!==d.theme&&i.theme||c||d.theme}var Zu=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Kh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xh=/(^-|-$)/g;function Tu(i){return i.replace(Kh,"-").replace(Xh,"")}var Jh=/(a)(d)/gi,Nu=function(i){return String.fromCharCode(i+(i>25?39:97))};function al(i){var c,d="";for(c=Math.abs(i);c>52;c=c/52|0)d=Nu(c%52)+d;return(Nu(c%52)+d).replace(Jh,"$1-$2")}var Zs,Gt=function(i,c){for(var d=c.length;d;)i=33*i^c.charCodeAt(--d);return i},ep=function(i){return Gt(5381,i)};function Zh(i){return al(ep(i)>>>0)}function em(i){return i.displayName||i.name||"Component"}function el(i){return typeof i=="string"&&!0}var rp=typeof Symbol=="function"&&Symbol.for,tp=rp?Symbol.for("react.memo"):60115,rm=rp?Symbol.for("react.forward_ref"):60112,tm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},np={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},om=((Zs={})[rm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zs[tp]=np,Zs);function Cu(i){return("type"in(c=i)&&c.type.$$typeof)===tp?np:"$$typeof"in i?om[i.$$typeof]:tm;var c}var im=Object.defineProperty,am=Object.getOwnPropertyNames,Iu=Object.getOwnPropertySymbols,sm=Object.getOwnPropertyDescriptor,lm=Object.getPrototypeOf,_u=Object.prototype;function op(i,c,d){if(typeof c!="string"){if(_u){var l=lm(c);l&&l!==_u&&op(i,l,d)}var p=am(c);Iu&&(p=p.concat(Iu(c)));for(var m=Cu(i),b=Cu(c),_=0;_<p.length;++_){var C=p[_];if(!(C in nm||d&&d[C]||b&&C in b||m&&C in m)){var G=sm(c,C);try{im(i,C,G)}catch{}}}}return i}function Cn(i){return typeof i=="function"}function vl(i){return typeof i=="object"&&"styledComponentId"in i}function Yt(i,c){return i&&c?"".concat(i," ").concat(c):i||c||""}function Lu(i,c){return i.join("")}function So(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function sl(i,c,d){if(d===void 0&&(d=!1),!d&&!So(i)&&!Array.isArray(i))return c;if(Array.isArray(c))for(var l=0;l<c.length;l++)i[l]=sl(i[l],c[l]);else if(So(c))for(var l in c)i[l]=sl(i[l],c[l]);return i}function yl(i,c){Object.defineProperty(i,"toString",{value:c})}var cm=(function(){function i(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return i.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var d=this._cIndex;if(c>this._cGroup)for(var l=this._cGroup;l<c;l++)d+=this.groupSizes[l];else for(l=this._cGroup-1;l>=c;l--)d-=this.groupSizes[l];return this._cGroup=c,this._cIndex=d,d},i.prototype.insertRules=function(c,d){if(c>=this.groupSizes.length){for(var l=this.groupSizes,p=l.length,m=p;c>=m;)if((m<<=1)<0)throw To(16,"".concat(c));this.groupSizes=new Uint32Array(m),this.groupSizes.set(l),this.length=m;for(var b=p;b<m;b++)this.groupSizes[b]=0}for(var _=this.indexOfGroup(c+1),C=0,G=(b=0,d.length);b<G;b++)this.tag.insertRule(_,d[b])&&(this.groupSizes[c]++,_++,C++);C>0&&this._cGroup>c&&(this._cIndex+=C)},i.prototype.clearGroup=function(c){if(c<this.length){var d=this.groupSizes[c],l=this.indexOfGroup(c),p=l+d;this.groupSizes[c]=0;for(var m=l;m<p;m++)this.tag.deleteRule(l);d>0&&this._cGroup>c&&(this._cIndex-=d)}},i.prototype.getGroup=function(c){var d="";if(c>=this.length||this.groupSizes[c]===0)return d;for(var l=this.groupSizes[c],p=this.indexOfGroup(c),m=p+l,b=p;b<m;b++)d+=this.tag.getRule(b)+gl;return d},i})(),dm="style[".concat(Tn,"][").concat(Ju,'="').concat(Zi,'"]'),um=new RegExp("^".concat(Tn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ru=function(i){return typeof ShadowRoot!="undefined"&&i instanceof ShadowRoot||"host"in i&&i.nodeType===11},ll=function(i){if(!i)return document;if(Ru(i))return i;if("getRootNode"in i){var c=i.getRootNode();if(Ru(c))return c}return document},pm=function(i,c,d){for(var l,p=d.split(","),m=0,b=p.length;m<b;m++)(l=p[m])&&i.registerName(c,l)},fm=function(i,c){for(var d,l=((d=c.textContent)!==null&&d!==void 0?d:"").split(gl),p=[],m=0,b=l.length;m<b;m++){var _=l[m].trim();if(_){var C=_.match(um);if(C){var G=0|parseInt(C[1],10),L=C[2];G!==0&&(Qh(L,G),pm(i,L,C[3]),i.getTag().insertRules(G,p)),p.length=0}else p.push(_)}}},rl=function(i){for(var c=ll(i.options.target).querySelectorAll(dm),d=0,l=c.length;d<l;d++){var p=c[d];p&&p.getAttribute(Tn)!==Xu&&(fm(i,p),p.parentNode&&p.parentNode.removeChild(p))}};function hm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var ip=function(i){var c=document.head,d=i||c,l=document.createElement("style"),p=(function(_){var C=Array.from(_.querySelectorAll("style[".concat(Tn,"]")));return C[C.length-1]})(d),m=p!==void 0?p.nextSibling:null;l.setAttribute(Tn,Xu),l.setAttribute(Ju,Zi);var b=hm();return b&&l.setAttribute("nonce",b),d.insertBefore(l,m),l},mm=(function(){function i(c){this.element=ip(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(d){var l;if(d.sheet)return d.sheet;for(var p=(l=d.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets,m=0,b=p.length;m<b;m++){var _=p[m];if(_.ownerNode===d)return _}throw To(17)})(this.element),this.length=0}return i.prototype.insertRule=function(c,d){try{return this.sheet.insertRule(d,c),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},i.prototype.getRule=function(c){var d=this.sheet.cssRules[c];return d&&d.cssText?d.cssText:""},i})(),gm=(function(){function i(c){this.element=ip(c),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(c,d){if(c<=this.length&&c>=0){var l=document.createTextNode(d);return this.element.insertBefore(l,this.nodes[c]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},i.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},i})(),xm=(function(){function i(c){this.rules=[],this.length=0}return i.prototype.insertRule=function(c,d){return c<=this.length&&(c===this.length?this.rules.push(d):this.rules.splice(c,0,d),this.length++,!0)},i.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},i.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},i})(),Ou=wo,vm={isServer:!wo,useCSSOMInjection:!Gh},ap=(function(){function i(c,d,l){c===void 0&&(c=Nn),d===void 0&&(d={});var p=this;this.options=cr(cr({},vm),c),this.gs=d,this.names=new Map(l),this.server=!!c.isServer,!this.server&&wo&&Ou&&(Ou=!1,rl(this)),yl(this,function(){return(function(m){for(var b=m.getTag(),_=b.length,C="",G=function(F){var Y=(function(ge){return qi.get(ge)})(F);if(Y===void 0)return"continue";var ce=m.names.get(Y);if(ce===void 0||!ce.size)return"continue";var J=b.getGroup(F);if(J.length===0)return"continue";var U=Tn+".g"+F+'[id="'+Y+'"]',K="";ce.forEach(function(ge){ge.length>0&&(K+=ge+",")}),C+=J+U+'{content:"'+K+'"}'+gl},L=0;L<_;L++)G(L);return C})(p)})}return i.registerId=function(c){return vo(c)},i.prototype.rehydrate=function(){!this.server&&wo&&rl(this)},i.prototype.reconstructWithOptions=function(c,d){d===void 0&&(d=!0);var l=new i(cr(cr({},this.options),c),this.gs,d&&this.names||void 0);return!this.server&&wo&&c.target!==this.options.target&&ll(this.options.target)!==ll(c.target)&&rl(l),l},i.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(d){var l=d.useCSSOMInjection,p=d.target;return d.isServer?new xm(p):l?new mm(p):new gm(p)})(this.options),new cm(c)));var c},i.prototype.hasNameForId=function(c,d){var l,p;return(p=(l=this.names.get(c))===null||l===void 0?void 0:l.has(d))!==null&&p!==void 0&&p},i.prototype.registerName=function(c,d){vo(c);var l=this.names.get(c);l?l.add(d):this.names.set(c,new Set([d]))},i.prototype.insertRules=function(c,d,l){this.registerName(c,d),this.getTag().insertRules(vo(c),l)},i.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},i.prototype.clearRules=function(c){this.getTag().clearGroup(vo(c)),this.clearNames(c)},i.prototype.clearTag=function(){this.tag=void 0},i})(),ym=/&/g,Zr=47,Qt=42;function Pu(i){if(i.indexOf("}")===-1)return!1;for(var c=i.length,d=0,l=0,p=!1,m=0;m<c;m++){var b=i.charCodeAt(m);if(l!==0||p||b!==Zr||i.charCodeAt(m+1)!==Qt)if(p)b===Qt&&i.charCodeAt(m+1)===Zr&&(p=!1,m++);else if(b!==34&&b!==39||m!==0&&i.charCodeAt(m-1)===92){if(l===0){if(b===123)d++;else if(b===125&&--d<0)return!0}}else l===0?l=b:l===b&&(l=0);else p=!0,m++}return d!==0||l!==0}function sp(i,c){return i.map(function(d){return d.type==="rule"&&(d.value="".concat(c," ").concat(d.value),d.value=d.value.replaceAll(",",",".concat(c," ")),d.props=d.props.map(function(l){return"".concat(c," ").concat(l)})),Array.isArray(d.children)&&d.type!=="@keyframes"&&(d.children=sp(d.children,c)),d})}function wm(i){var c,d,l,p=Nn,m=p.options,b=m===void 0?Nn:m,_=p.plugins,C=_===void 0?xl:_,G=function(J,U,K){return K.startsWith(d)&&K.endsWith(d)&&K.replaceAll(d,"").length>0?".".concat(c):J},L=C.slice();L.push(function(J){J.type===Yi&&J.value.includes("&")&&(l||(l=new RegExp("\\".concat(d,"\\b"),"g")),J.props[0]=J.props[0].replace(ym,d).replace(l,G))}),b.prefix&&L.push(qh),L.push($h);var F=[],Y=Uh(L.concat(Hh(function(J){return F.push(J)}))),ce=function(J,U,K,ge){U===void 0&&(U=""),K===void 0&&(K=""),ge===void 0&&(ge="&"),c=ge,d=U,l=void 0;var ue=(function(O){if(!Pu(O))return O;for(var Z=O.length,H="",R=0,B=0,ye=0,Re=!1,ae=0;ae<Z;ae++){var _e=O.charCodeAt(ae);if(ye!==0||Re||_e!==Zr||O.charCodeAt(ae+1)!==Qt)if(Re)_e===Qt&&O.charCodeAt(ae+1)===Zr&&(Re=!1,ae++);else if(_e!==34&&_e!==39||ae!==0&&O.charCodeAt(ae-1)===92){if(ye===0)if(_e===123)B++;else if(_e===125){if(--B<0){for(var Ee=ae+1;Ee<Z;){var Ge=O.charCodeAt(Ee);if(Ge===59||Ge===10)break;Ee++}Ee<Z&&O.charCodeAt(Ee)===59&&Ee++,B=0,ae=Ee-1,R=Ee;continue}B===0&&(H+=O.substring(R,ae+1),R=ae+1)}else _e===59&&B===0&&(H+=O.substring(R,ae+1),R=ae+1)}else ye===0?ye=_e:ye===_e&&(ye=0);else Re=!0,ae++}if(R<Z){var er=O.substring(R);Pu(er)||(H+=er)}return H})((function(O){if(O.indexOf("//")===-1)return O;for(var Z=O.length,H=[],R=0,B=0,ye=0,Re=0;B<Z;){var ae=O.charCodeAt(B);if(ae!==34&&ae!==39||B!==0&&O.charCodeAt(B-1)===92)if(ye===0)if(ae===Zr&&B+1<Z&&O.charCodeAt(B+1)===Qt){for(B+=2;B+1<Z&&(O.charCodeAt(B)!==Qt||O.charCodeAt(B+1)!==Zr);)B++;B+=2}else if(ae===40&&B>=3&&(32|O.charCodeAt(B-1))==108&&(32|O.charCodeAt(B-2))==114&&(32|O.charCodeAt(B-3))==117)Re=1,B++;else if(Re>0)ae===41?Re--:ae===40&&Re++,B++;else if(ae===Qt&&B+1<Z&&O.charCodeAt(B+1)===Zr)B>R&&H.push(O.substring(R,B)),R=B+=2;else if(ae===Zr&&B+1<Z&&O.charCodeAt(B+1)===Zr){for(B>R&&H.push(O.substring(R,B));B<Z&&O.charCodeAt(B)!==10;)B++;R=B}else B++;else B++;else ye===0?ye=ae:ye===ae&&(ye=0),B++}return R===0?O:(R<Z&&H.push(O.substring(R)),H.join(""))})(J)),ne=Bh(K||U?"".concat(K," ").concat(U," { ").concat(ue," }"):ue);return b.namespace&&(ne=sp(ne,b.namespace)),F=[],Hi(ne,Y),F};return ce.hash=C.length?C.reduce(function(J,U){return U.name||To(15),Gt(J,U.name)},5381).toString():"",ce}var bm=new ap,cl=wm(),lp=gr.createContext({shouldForwardProp:void 0,styleSheet:bm,stylis:cl});lp.Consumer;gr.createContext(void 0);function Au(){return gr.useContext(lp)}var km=(function(){function i(c,d){var l=this;this.inject=function(p,m){m===void 0&&(m=cl);var b=l.name+m.hash;p.hasNameForId(l.id,b)||p.insertRules(l.id,b,m(l.rules,b,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=d,yl(this,function(){throw To(12,String(l.name))})}return i.prototype.getName=function(c){return c===void 0&&(c=cl),this.name+c.hash},i})();function Sm(i,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||i in Vh||i.startsWith("--")?String(c).trim():"".concat(c,"px")}var jm=function(i){return i>="A"&&i<="Z"};function zu(i){for(var c="",d=0;d<i.length;d++){var l=i[d];if(d===1&&l==="-"&&i[0]==="-")return i;jm(l)?c+="-"+l.toLowerCase():c+=l}return c.startsWith("ms-")?"-"+c:c}var cp=function(i){return i==null||i===!1||i===""},dp=function(i){var c=[];for(var d in i){var l=i[d];i.hasOwnProperty(d)&&!cp(l)&&(Array.isArray(l)&&l.isCss||Cn(l)?c.push("".concat(zu(d),":"),l,";"):So(l)?c.push.apply(c,Ui(Ui(["".concat(d," {")],dp(l),!1),["}"],!1)):c.push("".concat(zu(d),": ").concat(Sm(d,l),";")))}return c};function Kt(i,c,d,l,p){if(p===void 0&&(p=[]),typeof i=="string")return i&&p.push(i),p;if(cp(i))return p;if(vl(i))return p.push(".".concat(i.styledComponentId)),p;if(Cn(i)){if(!Cn(b=i)||b.prototype&&b.prototype.isReactComponent||!c)return p.push(i),p;var m=i(c);return Kt(m,c,d,l,p)}var b;if(i instanceof km)return d?(i.inject(d,l),p.push(i.getName(l))):p.push(i),p;if(So(i)){for(var _=dp(i),C=0;C<_.length;C++)p.push(_[C]);return p}if(!Array.isArray(i))return p.push(i.toString()),p;for(C=0;C<i.length;C++)Kt(i[C],c,d,l,p);return p}function Em(i){for(var c=0;c<i.length;c+=1){var d=i[c];if(Cn(d)&&!vl(d))return!1}return!0}var Tm=ep(Zi),Nm=(function(){function i(c,d,l){this.rules=c,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&Em(c),this.componentId=d,this.baseHash=Gt(Tm,d),this.baseStyle=l,ap.registerId(d)}return i.prototype.generateAndInjectStyles=function(c,d,l){var p=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,d,l).className:"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&d.hasNameForId(this.componentId,this.staticRulesId))p=Yt(p,this.staticRulesId);else{var m=Lu(Kt(this.rules,c,d,l)),b=al(Gt(this.baseHash,m)>>>0);if(!d.hasNameForId(this.componentId,b)){var _=l(m,".".concat(b),void 0,this.componentId);d.insertRules(this.componentId,b,_)}p=Yt(p,b),this.staticRulesId=b}else{for(var C=Gt(this.baseHash,l.hash),G="",L=0;L<this.rules.length;L++){var F=this.rules[L];if(typeof F=="string")G+=F;else if(F){var Y=Lu(Kt(F,c,d,l));C=Gt(Gt(C,String(L)),Y),G+=Y}}if(G){var ce=al(C>>>0);if(!d.hasNameForId(this.componentId,ce)){var J=l(G,".".concat(ce),void 0,this.componentId);d.insertRules(this.componentId,ce,J)}p=Yt(p,ce)}}return{className:p,css:typeof window=="undefined"?d.getTag().getGroup(vo(this.componentId)):""}},i})(),up=gr.createContext(void 0);up.Consumer;var tl={};function Cm(i,c,d){var l=vl(i),p=i,m=!el(i),b=c.attrs,_=b===void 0?xl:b,C=c.componentId,G=C===void 0?(function(O,Z){var H=typeof O!="string"?"sc":Tu(O);tl[H]=(tl[H]||0)+1;var R="".concat(H,"-").concat(Zh(Zi+H+tl[H]));return Z?"".concat(Z,"-").concat(R):R})(c.displayName,c.parentComponentId):C,L=c.displayName,F=L===void 0?(function(O){return el(O)?"styled.".concat(O):"Styled(".concat(em(O),")")})(i):L,Y=c.displayName&&c.componentId?"".concat(Tu(c.displayName),"-").concat(c.componentId):c.componentId||G,ce=l&&p.attrs?p.attrs.concat(_).filter(Boolean):_,J=c.shouldForwardProp;if(l&&p.shouldForwardProp){var U=p.shouldForwardProp;if(c.shouldForwardProp){var K=c.shouldForwardProp;J=function(O,Z){return U(O,Z)&&K(O,Z)}}else J=U}var ge=new Nm(d,Y,l?p.componentStyle:void 0);function ue(O,Z){return(function(H,R,B){var ye=H.attrs,Re=H.componentStyle,ae=H.defaultProps,_e=H.foldedComponentIds,Ee=H.styledComponentId,Ge=H.target,er=gr.useContext(up),Qe=Au(),we=H.shouldForwardProp||Qe.shouldForwardProp,I=Yh(R,er,ae)||Nn,$=(function(ie,pe,de){for(var xe,Ne=cr(cr({},pe),{className:void 0,theme:de}),et=0;et<ie.length;et+=1){var kt=Cn(xe=ie[et])?xe(Ne):xe;for(var Nr in kt)Nr==="className"?Ne.className=Yt(Ne.className,kt[Nr]):Nr==="style"?Ne.style=cr(cr({},Ne.style),kt[Nr]):Ne[Nr]=kt[Nr]}return"className"in pe&&typeof pe.className=="string"&&(Ne.className=Yt(Ne.className,pe.className)),Ne})(ye,R,I),P=$.as||Ge,x={};for(var k in $)$[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&$.theme===I||(k==="forwardedAs"?x.as=$.forwardedAs:we&&!we(k,P)||(x[k]=$[k]));var ee=(function(ie,pe){var de=Au(),xe=ie.generateAndInjectStyles(pe,de.styleSheet,de.stylis);return xe})(Re,$),re=ee.className,se=Yt(_e,Ee);return re&&(se+=" "+re),$.className&&(se+=" "+$.className),x[el(P)&&!Zu.has(P)?"class":"className"]=se,B&&(x.ref=B),Q.createElement(P,x)})(ne,O,Z)}ue.displayName=F;var ne=gr.forwardRef(ue);return ne.attrs=ce,ne.componentStyle=ge,ne.displayName=F,ne.shouldForwardProp=J,ne.foldedComponentIds=l?Yt(p.foldedComponentIds,p.styledComponentId):"",ne.styledComponentId=Y,ne.target=l?p.target:i,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=l?(function(Z){for(var H=[],R=1;R<arguments.length;R++)H[R-1]=arguments[R];for(var B=0,ye=H;B<ye.length;B++)sl(Z,ye[B],!0);return Z})({},p.defaultProps,O):O}}),yl(ne,function(){return".".concat(ne.styledComponentId)}),m&&op(ne,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function Du(i,c){for(var d=[i[0]],l=0,p=c.length;l<p;l+=1)d.push(c[l],i[l+1]);return d}var Mu=function(i){return Object.assign(i,{isCss:!0})};function Im(i){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];if(Cn(i)||So(i))return Mu(Kt(Du(xl,Ui([i],c,!0))));var l=i;return c.length===0&&l.length===1&&typeof l[0]=="string"?Kt(l):Mu(Kt(Du(l,c)))}function dl(i,c,d){if(d===void 0&&(d=Nn),!c)throw To(1,c);var l=function(p){for(var m=[],b=1;b<arguments.length;b++)m[b-1]=arguments[b];return i(c,d,Im.apply(void 0,Ui([p],m,!1)))};return l.attrs=function(p){return dl(i,c,cr(cr({},d),{attrs:Array.prototype.concat(d.attrs,p).filter(Boolean)}))},l.withConfig=function(p){return dl(i,c,cr(cr({},d),p))},l}var pp=function(i){return dl(Cm,i)},S=pp;Zu.forEach(function(i){S[i]=pp(i)});const nl={Wrapper:S.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:S.header`
        height: 60px;
        flex-shrink: 0;
    `,Main:S.main`
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
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
    `},Fu={Wrapper:S.header`
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

        position: sticky;
        top: 0;
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
    `,Main:S.div`
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
    `},_m="/database-deep-dive-core-notes/images/transparentLogo.png";var fp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bu=gr.createContext&&gr.createContext(fp),Lm=["attr","size","title"];function Rm(i,c){if(i==null)return{};var d=Om(i,c),l,p;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(i);for(p=0;p<m.length;p++)l=m[p],!(c.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(i,l)&&(d[l]=i[l])}return d}function Om(i,c){if(i==null)return{};var d={};for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)){if(c.indexOf(l)>=0)continue;d[l]=i[l]}return d}function Vi(){return Vi=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var d=arguments[c];for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}return i},Vi.apply(this,arguments)}function Wu(i,c){var d=Object.keys(i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);c&&(l=l.filter(function(p){return Object.getOwnPropertyDescriptor(i,p).enumerable})),d.push.apply(d,l)}return d}function Gi(i){for(var c=1;c<arguments.length;c++){var d=arguments[c]!=null?arguments[c]:{};c%2?Wu(Object(d),!0).forEach(function(l){Pm(i,l,d[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(d)):Wu(Object(d)).forEach(function(l){Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(d,l))})}return i}function Pm(i,c,d){return c=Am(c),c in i?Object.defineProperty(i,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):i[c]=d,i}function Am(i){var c=zm(i,"string");return typeof c=="symbol"?c:c+""}function zm(i,c){if(typeof i!="object"||!i)return i;var d=i[Symbol.toPrimitive];if(d!==void 0){var l=d.call(i,c);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(i)}function hp(i){return i&&i.map((c,d)=>gr.createElement(c.tag,Gi({key:d},c.attr),hp(c.child)))}function le(i){return c=>gr.createElement(Dm,Vi({attr:Gi({},i.attr)},c),hp(i.child))}function Dm(i){var c=d=>{var{attr:l,size:p,title:m}=i,b=Rm(i,Lm),_=p||d.size||"1em",C;return d.className&&(C=d.className),i.className&&(C=(C?C+" ":"")+i.className),gr.createElement("svg",Vi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,l,b,{className:C,style:Gi(Gi({color:i.color||d.color},d.style),i.style),height:_,width:_,xmlns:"http://www.w3.org/2000/svg"}),m&&gr.createElement("title",null,m),i.children)};return Bu!==void 0?gr.createElement(Bu.Consumer,null,d=>c(d)):c(fp)}function No(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(i)}function dr(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function ul(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(i)}function mp(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(i)}function Mm(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(i)}function pl(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(i)}function xr(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(i)}function Er(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(i)}function Tr(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(i)}function Fm(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},child:[]}]})(i)}function $i(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(i)}function $u(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(i)}function Mr(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(i)}function Ze(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(i)}function Bm(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(i)}function Wm(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(i)}function gp(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(i)}function $m(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(i)}function xp(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(i)}function Um(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(i)}function De(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(i)}function jo(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(i)}function vp(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(i)}function Hm(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(i)}function qm(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function Vm(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(i)}function Gm(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"polyline",attr:{points:"23 20 23 14 17 14"},child:[]},{tag:"path",attr:{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"},child:[]}]})(i)}function wl(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(i)}function Dr(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(i)}function Qm(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(i)}function Eo(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(i)}function bo(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(i)}function Ym(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(i)}function yp(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(i)}function Km(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(i)}function Qi(i){return le({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(i)}const Uu="database-deep-dive-core-notes-theme",Xm=()=>{const[i,c]=Q.useState(!1),[d,l]=Q.useState("dark");Q.useEffect(()=>{const _=localStorage.getItem(Uu)||"dark";l(_),_==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),Q.useEffect(()=>{d==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem(Uu,d)},[d]);const p=Q.useMemo(()=>d==="light"?"dark":"light",[d]),m=()=>{l(p)};return a.jsx(Fu.Wrapper,{children:a.jsxs(Fu.Main,{children:[a.jsx("div",{className:"leftSide",children:a.jsxs("div",{className:"logoNameWrapper",children:[a.jsxs("div",{className:"logoWrapper",children:[!i&&a.jsx("div",{className:"logoSkeleton"}),a.jsx("img",{src:_m,alt:"database-deep-dive-core-notes",onLoad:()=>c(!0),style:{opacity:i?1:0},loading:"lazy"})]}),a.jsxs("div",{className:"nameWrapper",children:[a.jsx("div",{className:"title",children:"database-deep-dive-core-notes"}),a.jsx("div",{className:"subTitle",children:"MongoDB, SQL, indexes, transactions, replication, sharding"})]}),a.jsxs("div",{className:"pillRow",children:[a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"sIcon",children:a.jsx(Ze,{})}),a.jsx("span",{children:"DB"})]}),a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"sIcon",children:a.jsx(De,{})}),a.jsx("span",{children:"Deep Dive"})]})]})]})}),a.jsx("div",{className:"rightSide",children:a.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:m,"aria-label":`Switch to ${p} theme`,title:`Switch to ${p}`,children:[a.jsx("span",{className:"icon",children:d==="light"?a.jsx(Hm,{}):a.jsx(Ym,{})}),a.jsx("span",{className:"label",children:d==="light"?"Light":"Dark"})]})})]})})},Jm={Wrapper:S.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},Zm=()=>a.jsxs(Jm.Wrapper,{children:[a.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),a.jsxs("div",{className:"right",children:["By ",a.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),He={Wrapper:S.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 16px;
    `,TopRow:S.div`
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;
        gap: 14px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,TitleBlock:S.div`
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
    `,Badge:S.div`
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
    `,Title:S.h2`
        margin-top: 12px;
        font-size: 26px;

        @media (max-width: 520px) {
            font-size: 22px;
        }
    `,Subtitle:S.p`
        margin-top: 8px;
        color: var(--color-text-secondary);
        font-size: 14px;
        max-width: 68ch;
    `,Actions:S.div`
        margin-top: 14px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    `,PrimaryBtn:S.button`
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
    `,SecondaryLink:S.a`
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
    `,StatsGrid:S.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    `,StatCard:S.div`
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
    `,Body:S.div`
        margin-top: 12px;
        display: grid;
        gap: 12px;
    `,Section:S.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 14px 40px var(--color-shadow);
        padding: 14px;
    `,SectionHeader:S.div`
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
    `,SearchWrap:S.label`
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
    `,TopicGrid:S.div`
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
    `,TopicCard:S.div`
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
    `,EmptyState:S.div`
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
    `,MiniGrid:S.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,MiniCard:S.div`
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
    `},eg=({scrollerRef:i})=>{const[c,d]=Q.useState(!0),[l,p]=Q.useState(""),m=Q.useMemo(()=>[{key:"mongoAdvanced",title:"MongoDB Advanced",icon:a.jsx(Ze,{}),tag:"NoSQL",desc:"Document model, BSON, embedding vs referencing, write and read concerns, and real production patterns."},{key:"aggregation",title:"Aggregation",icon:a.jsx(De,{}),tag:"Pipelines",desc:"Aggregation pipeline mental model, common stages, and performance friendly pipeline habits."},{key:"indexStrategy",title:"Index Strategy",icon:a.jsx(Dr,{}),tag:"Performance",desc:"How indexes work, when they help, when they hurt, and how to choose practical index shapes."},{key:"schemaDesign",title:"Schema Design",icon:a.jsx(pl,{}),tag:"Modeling",desc:"Schema design tradeoffs, data shape decisions, denormalization, and consistency tradeoffs."},{key:"sql",title:"SQL",icon:a.jsx(Ze,{}),tag:"RDBMS",desc:"Relational fundamentals, keys, constraints, ACID, and query execution mental model."},{key:"joins",title:"Joins",icon:a.jsx(jo,{}),tag:"Queries",desc:"Inner and outer joins, join conditions, and practical performance considerations."},{key:"subqueries",title:"Subqueries",icon:a.jsx(Mr,{}),tag:"Queries",desc:"Scalar and correlated subqueries, EXISTS patterns, and when joins are simpler."},{key:"transactions",title:"Transactions",icon:a.jsx(vp,{}),tag:"Consistency",desc:"ACID, isolation levels, conflicts, and the real meaning of durability in practice."},{key:"scalingDatabases",title:"Scaling Databases",icon:a.jsx(Qi,{}),tag:"Scale",desc:"Vertical vs horizontal scaling, read replicas, partitioning, and common bottlenecks."},{key:"replication",title:"Replication",icon:a.jsx(De,{}),tag:"Availability",desc:"Primary secondary replication, failover basics, replication lag, and read patterns."},{key:"sharding",title:"Sharding",icon:a.jsx(De,{}),tag:"Scale",desc:"Shard keys, distribution, query routing, rebalancing, and distributed query tradeoffs."}],[]),b=Q.useMemo(()=>{const L=l.trim().toLowerCase();return L?m.filter(F=>F.title.toLowerCase().includes(L)||F.tag.toLowerCase().includes(L)||F.desc.toLowerCase().includes(L)):m},[l,m]),_=Q.useMemo(()=>[{label:"Topics",value:String(m.length),icon:a.jsx(xr,{})},{label:"Focus",value:"Revision",icon:a.jsx(pl,{})},{label:"Style",value:"At a glance",icon:a.jsx(De,{})},{label:"Deploy",value:"GitHub Pages",icon:a.jsx(Bm,{})}],[m.length]),C="https://github.com/a2rp/database-deep-dive-core-notes",G=L=>{const Y=((i==null?void 0:i.current)||document).querySelector(`.topicWrapper.${L}`);Y&&(Y.scrollIntoView({behavior:"smooth",block:"start"}),Y.classList.add("a2rpFocusPulse"),window.setTimeout(()=>Y.classList.remove("a2rpFocusPulse"),900),window.dispatchEvent(new CustomEvent("a2rp:open-topic",{detail:{key:L}})))};return a.jsxs(He.Wrapper,{children:[a.jsxs(He.TopRow,{children:[a.jsxs(He.TitleBlock,{children:[a.jsxs(He.Badge,{children:[a.jsx("span",{className:"icon",children:a.jsx(Ze,{})}),a.jsx("span",{className:"text",children:"Databases Deep Dive Core Notes"})]}),a.jsx(He.Title,{children:"Database engineering, without the boring fog."}),a.jsx(He.Subtitle,{children:"A single page revision map for MongoDB advanced topics, SQL query thinking, index strategy, transactions, replication, and sharding. Built for fast recall and production mental models."}),a.jsxs(He.Actions,{children:[a.jsxs(He.PrimaryBtn,{type:"button",onClick:()=>d(L=>!L),"aria-expanded":c,children:[a.jsx("span",{className:"btnIcon",children:c?a.jsx(Tr,{}):a.jsx(Er,{})}),a.jsx("span",{className:"btnText",children:c?"Collapse overview":"Expand overview"})]}),a.jsxs(He.SecondaryLink,{href:C,target:"_blank",rel:"noreferrer",children:[a.jsx("span",{className:"btnIcon",children:a.jsx($m,{})}),a.jsx("span",{className:"btnText",children:"Open repo"})]})]})]}),a.jsx(He.StatsGrid,{children:_.map(L=>a.jsxs(He.StatCard,{children:[a.jsx("div",{className:"icon",children:L.icon}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"value",children:L.value}),a.jsx("div",{className:"label",children:L.label})]})]},L.label))})]}),c&&a.jsx(He.Body,{children:a.jsxs(He.Section,{children:[a.jsxs(He.SectionHeader,{children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(De,{})}),a.jsxs("div",{children:[a.jsx("div",{className:"title",children:"What you get here"}),a.jsx("div",{className:"hint",children:"Short, accurate, and practical notes. No essays."})]})]}),a.jsxs(He.SearchWrap,{children:[a.jsx(Dr,{}),a.jsx("input",{value:l,onChange:L=>p(L.target.value),placeholder:"Search topics, tags, keywords","aria-label":"Search topics"})]})]}),a.jsx(He.TopicGrid,{children:b.map(L=>a.jsxs(He.TopicCard,{role:"button",tabIndex:0,onClick:()=>G(L.key),onKeyDown:F=>{(F.key==="Enter"||F.key===" ")&&G(L.key)},"aria-label":`Go to ${L.title}`,children:[a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"icon",children:L.icon}),a.jsx("div",{className:"title",children:L.title})]}),a.jsx("div",{className:"tag",children:L.tag}),a.jsx("div",{className:"desc",children:L.desc})]},L.key))}),b.length===0&&a.jsxs(He.EmptyState,{children:[a.jsx("div",{className:"icon",children:a.jsx(Dr,{})}),a.jsx("div",{className:"title",children:"No matches"}),a.jsx("div",{className:"desc",children:'Try searching for "index", "join", "replication", or "shard".'})]})]})})]})},rg={Button:S.button`
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
    `},tg=({scrollerRef:i})=>{const[c,d]=Q.useState(!1);Q.useEffect(()=>{const p=i==null?void 0:i.current;if(!p)return;const m=()=>{const b=p.scrollTop||0;d(b>350)};return m(),p.addEventListener("scroll",m),()=>p.removeEventListener("scroll",m)},[i]);const l=()=>{const p=i==null?void 0:i.current;p&&p.scrollTo({top:0,behavior:"smooth"})};return a.jsx(rg.Button,{type:"button",onClick:l,className:c?"show":"hide","aria-label":"Go to top",title:"Go to top",children:a.jsx(mp,{})})},zt={Wrapper:S.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:S.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:S.div`
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
    `,Body:S.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:S.div`
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
    `,SectionGrid:S.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:S.div`
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
    `},ng=()=>{const[i,c]=Q.useState(!1),d=Q.useMemo(()=>[{id:"docModel",icon:a.jsx(Ze,{}),title:"Document model and BSON",points:["MongoDB stores data as documents inside collections.","A document is like a JSON object, but MongoDB stores it as BSON (Binary JSON).","BSON adds types that plain JSON does not have, like Date, ObjectId, Decimal128."],exampleTitle:"Example - document in a users collection",example:`// users collection (one document)
{
  "_id": ObjectId("65f1c2c1a9b0c7d6e12a0001"),
  "name": "Ashish",
  "email": "ashish@example.com",
  "age": 26,
  "isActive": true,
  "createdAt": ISODate("2026-03-05T08:00:00Z")
}`,notes:["Why BSON matters - MongoDB can store and compare real Date values, not just strings.","ObjectId is a special id type that includes a timestamp + randomness."]},{id:"embedVsRef",icon:a.jsx(jo,{}),title:"Embedded vs referenced documents",points:["Embedding means nested objects or arrays inside one document.","Referencing means storing another document id and fetching it separately.","Choose based on how you read data and how often it changes."],exampleTitle:"Example - embedding order items",example:`// orders (embedding items)
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
}`},{id:"consistency",icon:a.jsx(Eo,{}),title:"Write concern and read concern",points:["Write concern controls how safely MongoDB confirms a write.","Read concern controls how stable the data is when reading.","In clusters, you trade speed for safety."],exampleTitle:"Write concern - common levels",example:`// w: 1 - primary confirms write (fast, default in many apps)
db.orders.insertOne({ status: "PAID" }, { writeConcern: { w: 1 } })

// w: "majority" - majority of replica set confirms (safer)
db.orders.insertOne({ status: "PAID" }, { writeConcern: { w: "majority" } })

// j: true - journal commit (safer against sudden power loss)
db.orders.insertOne({ status: "PAID" }, { writeConcern: { w: "majority", j: true } })`,notes:["w: 1 is usually fine for many apps, but majority is better for important money writes.","j: true means write is recorded in journal on disk before ack (more durability)."],extraTitle:"Read concern - idea",extra:`// local - can read data that may roll back in rare failover cases
db.orders.find({}, { readConcern: { level: "local" } })

// majority - reads only data confirmed by majority
db.orders.find({}, { readConcern: { level: "majority" } })`},{id:"aggregationIntro",icon:a.jsx(De,{}),title:"Aggregation mental model (advanced usage)",points:["Aggregation is a pipeline - data flows stage by stage.","Use $match early to reduce documents quickly.","Use $project to reduce fields and compute values.","Use $group for totals, counts, and analytics."],exampleTitle:"Example - total revenue per day",example:`db.orders.aggregate([
  { $match: { status: "PAID" } },
  {
    $group: {
      _id: { day: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } } },
      revenue: { $sum: "$total" },
      orders: { $sum: 1 }
    }
  },
  { $sort: { "_id.day": 1 } }
])`,notes:["Rule - $match first, $sort later, keep pipeline lean.","Indexes help $match and $sort when used correctly."]},{id:"transactions",icon:a.jsx(No,{}),title:"Transactions (when and why)",points:["A transaction means multiple writes succeed together or fail together.","MongoDB supports transactions in replica sets and sharded clusters (with limits).","Use transactions when you must keep multiple documents consistent."],exampleTitle:"Example - wallet transfer (concept)",example:`// Pseudocode style (Node.js driver style idea)
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
});`,notes:["Avoid overusing transactions - they add overhead and can reduce throughput.","If your data model can embed and update in one document, do that first."]},{id:"validation",icon:a.jsx(xr,{}),title:"Schema validation (MongoDB is flexible, not schema-less)",points:["MongoDB is schema flexible, but you can still enforce rules.","Schema validation helps catch bad writes early.","Use it when multiple services or teams write to the same collection."],exampleTitle:"Example - simple validation rules",example:`db.createCollection("users", {
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
})`,notes:["Validation is not a replacement for app validation, but it is a strong safety net."]},{id:"performanceHabits",icon:a.jsx(Dr,{}),title:"Performance habits that matter",points:["Prefer precise queries - always use filters that can use indexes.","Avoid huge unbounded arrays in a document (they can grow forever).","Project only needed fields (do not return the full document if you do not need it).","Keep documents small and stable for frequent updates."],exampleTitle:"Example - project only needed fields",example:`// Bad - returns full document
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
db.loginEvents.insertOne({ userId, at: new Date(), ip: "1.2.3.4" })`}],[]);return Q.useEffect(()=>{const l=p=>{var m;((m=p==null?void 0:p.detail)==null?void 0:m.key)==="mongodbAdvanced"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(zt.Wrapper,{children:a.jsxs(zt.Card,{children:[a.jsxs(zt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Ze,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"MongoDB Advanced"}),a.jsx("div",{className:"subtitle",children:"Document model, schema patterns, concerns, aggregation, transactions"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(Mr,{}),a.jsx("span",{children:"At a glance"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Tr,{}):a.jsx(Er,{})})]})]}),i&&a.jsxs(zt.Body,{children:[a.jsxs(zt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(dr,{})}),a.jsx("div",{className:"text",children:"MongoDB looks simple at first, but real projects win by choosing the right data shape, the right concerns, and the right query patterns. This section explains those decisions with examples."})]}),a.jsx(zt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(zt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((m,b)=>a.jsx("li",{children:m},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.extraTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.extraTitle}),a.jsx("pre",{className:"code",children:l.extra})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((m,b)=>a.jsx("li",{children:m},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Dt={Wrapper:S.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:S.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:S.div`
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
    `,Body:S.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:S.div`
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
    `,SectionGrid:S.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:S.div`
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
    `},og=()=>{const[i,c]=Q.useState(!1),d=Q.useMemo(()=>[{id:"mentalModel",icon:a.jsx(De,{}),title:"Aggregation mental model",points:["Aggregation is a pipeline - documents flow through stages one by one.","Each stage transforms the stream - filter, reshape, group, sort, join.","Think of it like a factory line - each stage does one job."],exampleTitle:"Pipeline idea",example:`// pipeline skeleton
db.collection.aggregate([
  { $match: { /* filter */ } },
  { $project: { /* select or compute fields */ } },
  { $group: { /* aggregate */ } },
  { $sort: { /* order results */ } }
])`,notes:["Rule - do filtering early to reduce data quickly.","Rule - do expensive stages only after the dataset is smaller."]},{id:"match",icon:a.jsx(Wm,{}),title:"$match - filter documents",points:["$match is like find - it filters documents.","Put $match as early as possible for performance.","$match can use indexes when it is early in the pipeline."],exampleTitle:"Example - filter paid orders",example:`db.orders.aggregate([
  { $match: { status: "PAID" } }
])`,notes:["If you have an index on status, MongoDB can use it here."]},{id:"project",icon:a.jsx(Km,{}),title:"$project - select fields and compute new fields",points:["$project decides what fields move forward.","It can rename fields, remove fields, and compute new fields.","Reducing fields early saves memory and network cost."],exampleTitle:"Example - keep only needed fields",example:`db.users.aggregate([
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
])`},{id:"group",icon:a.jsx(Mm,{}),title:"$group - totals, counts, analytics",points:["$group collects documents into buckets based on _id.","Inside each bucket you can compute sum, avg, min, max, count.","This is how you create reports - like revenue per day."],exampleTitle:"Example - total revenue per user",example:`db.orders.aggregate([
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
])`},{id:"sortLimitSkip",icon:a.jsx(bo,{}),title:"$sort, $limit, $skip - ordering and pagination",points:["$sort orders the stream. Sorting large data can be expensive.","$limit reduces result count quickly - use it soon after sort when possible.","$skip is used for pagination, but deep skip is slow in large collections."],exampleTitle:"Example - top 10 highest value orders",example:`db.orders.aggregate([
  { $match: { status: "PAID" } },
  { $sort: { total: -1 } },
  { $limit: 10 },
  { $project: { userId: 1, total: 1, createdAt: 1 } }
])`,notes:["Better pagination for large datasets - use range queries instead of huge skip."],extraTitle:"Pagination idea - range based",extra:`// instead of skip
// fetch next page by using a lastSeen value
db.orders.find(
  { status: "PAID", total: { $lt: lastSeenTotal } }
).sort({ total: -1 }).limit(10)`},{id:"lookup",icon:a.jsx(Dr,{}),title:"$lookup - join like behavior",points:["$lookup pulls matching documents from another collection.","This is similar to SQL join, but can be heavier if misused.","Use it when data is truly separate and you need combined view."],exampleTitle:"Example - join orders with users",example:`db.orders.aggregate([
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
])`,notes:["$unwind converts array into single object (because lookup returns array).","Index on foreignField (_id) already exists, so lookup is usually efficient there."]},{id:"performance",icon:a.jsx(Mr,{}),title:"Performance rules that actually matter",points:["Put $match early and filter aggressively.","Project only required fields.","Avoid sorting huge datasets without supporting indexes.","Prefer pre-aggregated collections for heavy analytics workloads.","Use explain to understand if indexes are being used."],exampleTitle:"Example - explain pipeline",example:`db.orders.explain("executionStats").aggregate([
  { $match: { status: "PAID" } },
  { $group: { _id: "$userId", revenue: { $sum: "$total" } } }
])`,notes:["Look for - totalDocsExamined vs totalKeysExamined.","If totalDocsExamined is huge, your match is not using indexes well."]}],[]);return Q.useEffect(()=>{const l=p=>{var m;((m=p==null?void 0:p.detail)==null?void 0:m.key)==="aggregation"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Dt.Wrapper,{children:a.jsxs(Dt.Card,{children:[a.jsxs(Dt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(De,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Aggregation"}),a.jsx("div",{className:"subtitle",children:"Pipeline thinking - match, project, group, sort, lookup"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(xr,{}),a.jsx("span",{children:"Beginner friendly"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Tr,{}):a.jsx(Er,{})})]})]}),i&&a.jsxs(Dt.Body,{children:[a.jsxs(Dt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(dr,{})}),a.jsx("div",{className:"text",children:"Aggregation is MongoDB's reporting engine. The secret is not memorizing stages - the secret is pipeline order and reducing data early. This section explains the common stages with practical examples."})]}),a.jsx(Dt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Dt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((m,b)=>a.jsx("li",{children:m},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.extraTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.extraTitle}),a.jsx("pre",{className:"code",children:l.extra})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((m,b)=>a.jsx("li",{children:m},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Mt={Wrapper:S.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:S.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:S.div`
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
    `,Body:S.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:S.div`
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
    `,SectionGrid:S.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:S.div`
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
    `},ig=()=>{const[i,c]=Q.useState(!1),d=Q.useMemo(()=>[{id:"whatIsIndex",icon:a.jsx(pl,{}),title:"What is an index (simple mental model)",points:["An index is like a book index - it helps you find pages without scanning the whole book.","Without an index, the database does a full scan - it checks every document or row.","With an index, the database can jump closer to matching data quickly."],exampleTitle:"Example - full scan vs index scan idea",example:`// Query
db.users.find({ email: "ashish@example.com" })

// Without index
// - MongoDB checks many users until it finds the match

// With index on email
// - MongoDB jumps directly to the matching record`,notes:["Indexes speed up reads, but they add cost to writes.","Every insert and update may need to update indexes too."]},{id:"bTreeBasics",icon:a.jsx(De,{}),title:"B-Tree basics (why indexes are fast)",points:["Most database indexes are B-Tree based (balanced tree).","Balanced means the tree height is small, so lookup steps are limited.","That is why index lookups feel fast even with millions of rows."],exampleTitle:"Simple idea - search steps",example:`// Rough idea (not exact numbers)
// 1,000,000 documents
// Full scan - 1,000,000 checks worst case
// B-Tree - maybe around 20 to 30 comparisons`,notes:["You do not need to memorize tree structure - just remember 'logarithmic search'."]},{id:"chooseFields",icon:a.jsx(yp,{}),title:"Choosing index fields (what to index)",points:["Index fields used in filters - like status, userId, createdAt, email.","Index fields used in sorting - like createdAt desc, total desc.","Index fields used in joins - foreign keys in SQL, referenced fields in MongoDB."],exampleTitle:"Example - common production indexes",example:`// MongoDB examples
db.users.createIndex({ email: 1 }, { unique: true })
db.orders.createIndex({ userId: 1, createdAt: -1 })
db.orders.createIndex({ status: 1, createdAt: -1 })

// SQL examples (concept)
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);`,notes:["If you search by email, index email.","If you list recent orders per user, compound index (userId, createdAt) helps."]},{id:"compound",icon:a.jsx(Ze,{}),title:"Compound indexes (order matters)",points:["Compound index means multiple fields in one index.","Order matters because the index is sorted by the fields in order.","The leftmost prefix rule - queries can use the beginning of the index."],exampleTitle:"Example - leftmost prefix rule",example:`// Index
db.orders.createIndex({ userId: 1, createdAt: -1 })

// Uses index - filter by userId
db.orders.find({ userId: ObjectId("...") })

// Uses index - filter by userId + sort by createdAt
db.orders.find({ userId: ObjectId("...") }).sort({ createdAt: -1 })

// Usually NOT ideal - filter only by createdAt
// because userId is first field in the index
db.orders.find({ createdAt: { $gte: ISODate("2026-03-01") } })`,notes:["Design compound indexes based on your most common query patterns."]},{id:"selectivity",icon:a.jsx(No,{}),title:"Selectivity (why some indexes do not help)",points:["Selectivity means how well the index narrows down results.","High selectivity - email, phone, userId (many unique values).","Low selectivity - boolean fields like isActive, isDeleted."],exampleTitle:"Example - low selectivity index",example:`// If most users have isActive: true
// this index may not help much
db.users.createIndex({ isActive: 1 })

// Better - combine it with another field you filter or sort by
db.users.createIndex({ isActive: 1, createdAt: -1 })`,notes:["Boolean alone is often not enough because it returns too many results."]},{id:"covering",icon:a.jsx(xr,{}),title:"Covering index (big performance trick)",points:["A query is 'covered' when the database can answer using only the index.","Covered queries avoid fetching the full document from disk.","This can be a huge win for list pages and dashboards."],exampleTitle:"Example - cover with projection",example:`// Index
db.users.createIndex({ isActive: 1, createdAt: -1, name: 1 })

// Query that can be covered if it only needs indexed fields
db.users.find(
  { isActive: true },
  { projection: { _id: 0, name: 1, createdAt: 1 } }
).sort({ createdAt: -1 }).limit(20)`,notes:["Covering indexes are great for list endpoints and admin tables."]},{id:"writeCost",icon:a.jsx(Mr,{}),title:"Write cost (why too many indexes hurt)",points:["Indexes speed up reads but slow down writes.","Every insert needs to update all indexes for that collection/table.","Every update that changes indexed fields also updates those indexes."],exampleTitle:"Rule of thumb - fewer, smarter indexes",example:`// Imagine a collection with 8 indexes
// Every insert updates 8 index structures
// If you are write heavy, this hurts throughput

// Best practice
// - add indexes only for real query patterns
// - remove unused indexes`,notes:["If you have slow writes, check how many indexes exist.","In MongoDB, use db.collection.getIndexes() to inspect."]},{id:"measure",icon:a.jsx(Dr,{}),title:"How to verify (explain is your friend)",points:["Never guess - verify with explain.","Explain shows if indexes are used and how many docs were examined.","A good query usually examines fewer docs and more index keys."],exampleTitle:"MongoDB explain example",example:`db.orders.explain("executionStats").find({
  userId: ObjectId("..."),
  status: "PAID"
}).sort({ createdAt: -1 }).limit(20)`,notes:["Look for - totalDocsExamined should be low.","If totalDocsExamined is huge, your query is scanning too much."],warningTitle:"Common beginner mistake",warning:`// Sorting without an index can be expensive
db.orders.find({ status: "PAID" }).sort({ createdAt: -1 })

// Better - add index that supports filter + sort
db.orders.createIndex({ status: 1, createdAt: -1 })`}],[]);return Q.useEffect(()=>{const l=p=>{var m;((m=p==null?void 0:p.detail)==null?void 0:m.key)==="indexStrategy"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Mt.Wrapper,{children:a.jsxs(Mt.Card,{children:[a.jsxs(Mt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Dr,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Index Strategy"}),a.jsx("div",{className:"subtitle",children:"What to index, compound order, selectivity, covering, and explain"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(xr,{}),a.jsx("span",{children:"Production mindset"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Tr,{}):a.jsx(Er,{})})]})]}),i&&a.jsxs(Mt.Body,{children:[a.jsxs(Mt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(dr,{})}),a.jsx("div",{className:"text",children:'Indexes decide whether your API feels instant or painfully slow. The goal is not "index everything" - the goal is indexing the exact query patterns you actually run in production.'})]}),a.jsx(Mt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Mt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((m,b)=>a.jsx("li",{children:m},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.extraTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.extraTitle}),a.jsx("pre",{className:"code",children:l.extra})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((m,b)=>a.jsx("li",{children:m},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Ft={Wrapper:S.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:S.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:S.div`
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
    `,Body:S.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:S.div`
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
    `,SectionGrid:S.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:S.div`
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
    `},ag=()=>{const[i,c]=Q.useState(!1),d=Q.useMemo(()=>[{id:"goal",icon:a.jsx(De,{}),title:"Schema design goal - shape the data for your reads",points:["Schema design is about choosing the best data shape for your most common queries.","In MongoDB, you can embed or reference. In SQL, you normalize and join.","Good schema is not about being perfect - it is about being practical."],exampleTitle:"Rule of thumb",example:`- If you read things together - store them together
- If things grow forever - store separately
- If things are shared by many records - reference them`,notes:["Start from queries - not from tables or collections.","List your top 5 API endpoints and design for them first."]},{id:"embedVsRef",icon:a.jsx(jo,{}),title:"Embedding vs referencing (MongoDB core decision)",points:["Embedding means nested data inside one document.","Referencing means storing an id and fetching the related data separately.","Embedding is faster for read together data, referencing is safer for shared and frequently changing data."],exampleTitle:"Embedding example - order with items",example:`// orders
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
}`,notes:["Embed when - read together, updated together, bounded size.","Reference when - shared entities, large arrays, frequent updates."]},{id:"oneToMany",icon:a.jsx(xp,{}),title:"One to many patterns",points:["One to many means one parent has many children - user has many orders, blog has many comments.","MongoDB gives you two main options - embed children or store children in a separate collection.","The main deciding factor is growth - can the list become huge"],exampleTitle:"Option A - embed small bounded children",example:`// product with small set of tags (bounded)
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
db.loginEvents.createIndex({ userId: 1, at: -1 })`,notes:["If it can grow forever - do not embed it in one document.","Use a child collection plus indexes for fast reads."]},{id:"manyToMany",icon:a.jsx(wl,{}),title:"Many to many patterns",points:["Many to many means both sides can have many relationships - students and courses, users and roles.","In SQL you usually use a join table.","In MongoDB you can use a mapping collection or store arrays of ids."],exampleTitle:"SQL mapping table idea",example:`-- users, roles, user_roles
users(id, name)
roles(id, name)
user_roles(user_id, role_id)`,extraTitle:"MongoDB mapping collection",extra:`// users
{ "_id": ObjectId("u1"), "name": "Ashish" }

// roles
{ "_id": ObjectId("r1"), "name": "reportsOnly" }

// userRoles mapping
{ "_id": ObjectId("m1"), "userId": ObjectId("u1"), "roleId": ObjectId("r1") }

// index for fast lookup
db.userRoles.createIndex({ userId: 1, roleId: 1 }, { unique: true })`,notes:["Mapping collection scales better than huge arrays when relations can grow large.","Arrays of ids are fine when relationship count is small and stable."]},{id:"normalization",icon:a.jsx(Ze,{}),title:"Normalization vs denormalization",points:["Normalization means reduce duplication - store facts once and reference them.","Denormalization means duplicate some data to make reads faster and simpler.","Real systems often use a mix - normalize core entities, denormalize read models."],exampleTitle:"Denormalization example - snapshot customer name in orders",example:`// customers
{ "_id": ObjectId("c1"), "name": "Ashish Ranjan", "phone": "9999999999" }

// orders - keep a snapshot for historical accuracy and faster reads
{
  "_id": ObjectId("o1"),
  "customerId": ObjectId("c1"),
  "customerNameSnapshot": "Ashish Ranjan",
  "total": 1397,
  "createdAt": ISODate("...")
}`,notes:["Snapshot fields avoid surprises when the original value changes later.","This is very common for invoices and order history."]},{id:"readWriteTradeoff",icon:a.jsx(No,{}),title:"Read heavy vs write heavy design",points:["Read heavy systems optimize for fast reads - dashboards, catalog browsing, analytics views.","Write heavy systems optimize for fast writes - event logs, telemetry, click tracking.","Indexes and denormalization help reads but cost more on writes."],exampleTitle:"Read heavy example - catalog listing endpoint",example:`// You display product cards - name, price, rating, thumbnail
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
db.clickEvents.createIndex({ at: -1 })`,notes:["Write heavy collections should have fewer indexes.","Read heavy collections can afford more indexes and denormalization."]},{id:"antiPatterns",icon:a.jsx(dr,{}),title:"Common schema mistakes (beginner traps)",points:["Unbounded arrays inside one document - they keep growing and become slow to update.","Over embedding shared entities - data becomes duplicated and inconsistent.","Indexing everything - write throughput drops and storage grows fast."],exampleTitle:"Unbounded array mistake",example:`// avoid this if it grows forever
{
  "_id": ObjectId("u1"),
  "name": "Ashish",
  "notifications": [ /* thousands of items forever */ ]
}

// better
// store notifications in separate collection with userId index`,notes:["If something can grow forever - model it as its own collection."],warningTitle:"Performance reminder",warning:`- Schema and indexes are linked
- A great schema can reduce the need for joins and heavy pipelines
- A bad schema forces you to do expensive queries forever`},{id:"howToDesign",icon:a.jsx(qm,{}),title:"A practical workflow to design schema",points:["Step 1 - list your top API endpoints and their response shapes.","Step 2 - decide which data must be read together.","Step 3 - decide which lists can grow forever.","Step 4 - choose embedding or referencing based on steps 2 and 3.","Step 5 - add indexes for filters and sorts.","Step 6 - verify with explain and real data sizes."],exampleTitle:"Mini checklist",example:`- What are the top queries
- What fields are filtered
- What fields are sorted
- What fields are displayed
- What can grow unbounded
- What must stay historically accurate`,notes:["Design for today plus realistic growth, not for imaginary perfect future."]}],[]);return Q.useEffect(()=>{const l=p=>{var m;((m=p==null?void 0:p.detail)==null?void 0:m.key)==="schemaDesign"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Ft.Wrapper,{children:a.jsxs(Ft.Card,{children:[a.jsxs(Ft.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Ze,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Schema Design"}),a.jsx("div",{className:"subtitle",children:"Embedding, referencing, normalization, denormalization, and real patterns"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(xr,{}),a.jsx("span",{children:"Beginner friendly"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Tr,{}):a.jsx(Er,{})})]})]}),i&&a.jsxs(Ft.Body,{children:[a.jsxs(Ft.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(dr,{})}),a.jsx("div",{className:"text",children:"Schema design is the hidden superpower of backend engineering. If the data shape is right, queries become simple and fast. If the data shape is wrong, you will fight performance forever."})]}),a.jsx(Ft.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Ft.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((m,b)=>a.jsx("li",{children:m},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.extraTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.extraTitle}),a.jsx("pre",{className:"code",children:l.extra})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((m,b)=>a.jsx("li",{children:m},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Bt={Wrapper:S.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:S.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:S.div`
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
    `,Body:S.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:S.div`
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
    `,SectionGrid:S.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:S.div`
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
    `},sg=()=>{const[i,c]=Q.useState(!1),d=Q.useMemo(()=>[{id:"whatIsSql",icon:a.jsx(Ze,{}),title:"What is SQL and why it exists",points:["SQL means Structured Query Language.","SQL is used to store and query data in relational databases (RDBMS).","Relational databases store data in tables with rows and columns.","SQL is declarative - you tell what you want, the database decides how to get it."],exampleTitle:"Example - read data",example:`SELECT * FROM users;
SELECT name, email FROM users WHERE is_active = TRUE;`,notes:["RDBMS common examples - PostgreSQL, MySQL, SQL Server, Oracle.","SQL is great when you need relationships, constraints, and strong consistency."]},{id:"coreTerms",icon:a.jsx(xp,{}),title:"Core terms you must know",points:["Table - a set of rows (like a spreadsheet) for one entity, like users or orders.","Row - one record inside a table.","Column - one field inside a row, like name or created_at.","Schema - structure definition of tables, columns, and constraints."],exampleTitle:"Example - users table",example:`CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);`,notes:["PRIMARY KEY means unique identifier for each row.","UNIQUE means no duplicate values allowed in that column.","NOT NULL means value is required."]},{id:"keys",icon:a.jsx(Um,{}),title:"Primary key and foreign key (relationships)",points:["Primary key (PK) uniquely identifies a row in a table.","Foreign key (FK) is a column that points to a primary key in another table.","Foreign keys enforce referential integrity - no broken references."],exampleTitle:"Example - orders referencing users",example:`CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id),
  status TEXT NOT NULL,
  total NUMERIC(12,2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);`,notes:["REFERENCES users(id) means user_id must exist in users table.","This is how relational data stays clean over time."]},{id:"crud",icon:a.jsx(Vm,{}),title:"CRUD basics - create, read, update, delete",points:["CRUD is the core set of operations for most apps.","Create - INSERT","Read - SELECT","Update - UPDATE","Delete - DELETE"],exampleTitle:"Examples - CRUD",example:`-- Create
INSERT INTO users (name, email) VALUES ('Ashish', 'ashish@example.com');

-- Read
SELECT id, name, email FROM users WHERE email = 'ashish@example.com';

-- Update
UPDATE users SET is_active = FALSE WHERE id = 10;

-- Delete
DELETE FROM users WHERE id = 10;`,notes:["In production, hard delete is often avoided. Use soft delete like deleted_at."]},{id:"queryOrder",icon:a.jsx(De,{}),title:"Query structure and execution mental model",points:["A SELECT query usually has these parts - SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT.","WHERE filters rows before grouping.","GROUP BY groups rows.","HAVING filters groups after grouping.","ORDER BY sorts results.","LIMIT restricts number of rows returned."],exampleTitle:"Example - grouped report",example:`SELECT
  status,
  COUNT(*) AS orders_count,
  SUM(total) AS revenue
FROM orders
WHERE created_at >= NOW() - INTERVAL '7 days'
GROUP BY status
HAVING SUM(total) > 1000
ORDER BY revenue DESC
LIMIT 10;`,notes:["WHERE is row level filter, HAVING is group level filter."]},{id:"acid",icon:a.jsx(Eo,{}),title:"ACID (transaction guarantees)",points:["ACID is a set of guarantees for transactions.","A - Atomicity - all operations succeed or none do.","C - Consistency - constraints remain valid after transaction.","I - Isolation - concurrent transactions do not break each other.","D - Durability - committed data survives crashes."],exampleTitle:"Example - money transfer transaction",example:`BEGIN;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

COMMIT;`,notes:["If something fails, you do ROLLBACK so partial changes are not saved."]},{id:"indexes",icon:a.jsx(Dr,{}),title:"Indexes in SQL (when and why)",points:["Indexes speed up reads by avoiding full table scans.","Indexes can support filtering and sorting.","Too many indexes slow down INSERT and UPDATE."],exampleTitle:"Example - indexes for common queries",example:`-- Search by email
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- List orders per user, newest first
CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);`,notes:["Index choice must match query patterns - filter and sort fields."]},{id:"explain",icon:a.jsx(Mr,{}),title:"How to verify performance (EXPLAIN)",points:["Do not guess performance. Use EXPLAIN to see the plan.","Look for - index scan vs sequential scan.","If you see sequential scan on a huge table, index might be missing or not usable."],exampleTitle:"Example - Postgres EXPLAIN",example:`EXPLAIN ANALYZE
SELECT id, total, created_at
FROM orders
WHERE user_id = 10
ORDER BY created_at DESC
LIMIT 20;`,notes:["EXPLAIN ANALYZE actually runs the query and gives real timing."],warningTitle:"Common beginner mistake",warning:`- Selecting too many columns (SELECT *) for list pages
- Deep pagination using OFFSET on huge tables
- Missing indexes for filter + sort`}],[]);return Q.useEffect(()=>{const l=p=>{var m;((m=p==null?void 0:p.detail)==null?void 0:m.key)==="sql"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Bt.Wrapper,{children:a.jsxs(Bt.Card,{children:[a.jsxs(Bt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Ze,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"SQL"}),a.jsx("div",{className:"subtitle",children:"Tables, keys, CRUD, query structure, ACID, indexes, explain"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(xr,{}),a.jsx("span",{children:"At a glance"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Tr,{}):a.jsx(Er,{})})]})]}),i&&a.jsxs(Bt.Body,{children:[a.jsxs(Bt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(dr,{})}),a.jsx("div",{className:"text",children:"SQL is the language of relational truth. It shines when data has relationships, constraints, and transactions. Learn the mental model and you can debug slow queries and messy schemas like a pro."})]}),a.jsx(Bt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Bt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((m,b)=>a.jsx("li",{children:m},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((m,b)=>a.jsx("li",{children:m},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Wt={Wrapper:S.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:S.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:S.div`
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
    `,Body:S.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:S.div`
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
    `,SectionGrid:S.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:S.div`
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
    `},lg=()=>{const[i,c]=Q.useState(!1),d=Q.useMemo(()=>[{id:"whatIsJoin",icon:a.jsx(jo,{}),title:"What is a join (simple mental model)",points:["A join combines rows from two (or more) tables using a related column.","Most common join key is a foreign key - like orders.user_id referencing users.id.","Joins let you fetch related data in one query instead of multiple queries."],exampleTitle:"Example - tables",example:`-- users
-- id | name  | email
-- 1  | Ashish| ashish@example.com
-- 2  | Neha  | neha@example.com

-- orders
-- id | user_id | total
-- 10 | 1       | 1397
-- 11 | 1       | 499
-- 12 | 2       | 999`,notes:["If you want order info plus user name, you join orders with users."]},{id:"innerJoin",icon:a.jsx(gp,{}),title:"INNER JOIN - only matching rows",points:["INNER JOIN returns rows where the join condition matches on both sides.","If a user has no orders, that user will not appear in INNER JOIN result.","This is the most commonly used join type."],exampleTitle:"Example - orders with user name",example:`SELECT
  o.id AS order_id,
  u.name AS user_name,
  o.total
FROM orders o
INNER JOIN users u ON u.id = o.user_id;`,notes:["If there is no matching user for an order.user_id, that order is excluded."]},{id:"leftJoin",icon:a.jsx(ul,{}),title:"LEFT JOIN - keep all left rows",points:["LEFT JOIN returns all rows from the left table, plus matching rows from the right table.","If there is no match on the right side, right side columns become NULL.","Use LEFT JOIN when you want all rows from the main table even if related data is missing."],exampleTitle:"Example - list all users and their orders (if any)",example:`SELECT
  u.id,
  u.name,
  o.id AS order_id,
  o.total
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
ORDER BY u.id;`,notes:["Users without orders still appear, with order_id = NULL."],extraTitle:"Common pattern - find users with no orders",extra:`SELECT u.id, u.name
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE o.id IS NULL;`},{id:"rightJoin",icon:a.jsx(ul,{}),title:"RIGHT JOIN - keep all right rows",points:["RIGHT JOIN is like LEFT JOIN but reversed - keeps all rows from the right table.","Many teams avoid RIGHT JOIN to keep queries consistent - use LEFT JOIN by swapping tables.","Still useful to know because you will see it in old code sometimes."],exampleTitle:"Example - keep all orders even if user is missing",example:`SELECT
  o.id AS order_id,
  u.name AS user_name,
  o.total
FROM users u
RIGHT JOIN orders o ON o.user_id = u.id;`,notes:["Same query using LEFT JOIN style"],extraTitle:"Equivalent using LEFT JOIN (preferred style)",extra:`SELECT
  o.id AS order_id,
  u.name AS user_name,
  o.total
FROM orders o
LEFT JOIN users u ON u.id = o.user_id;`},{id:"fullJoin",icon:a.jsx(De,{}),title:"FULL JOIN - keep all rows from both sides",points:["FULL JOIN returns all rows from both tables.","If no match, missing side becomes NULL.","Not supported in some databases (example - MySQL historically). Postgres supports it."],exampleTitle:"Example - show all users and all orders, matched when possible",example:`SELECT
  u.id AS user_id,
  u.name,
  o.id AS order_id,
  o.total
FROM users u
FULL JOIN orders o ON o.user_id = u.id;`,notes:["Useful for data audits - finding mismatches on either side."]},{id:"joinCondition",icon:a.jsx(Dr,{}),title:"Join conditions and filtering (important detail)",points:["Join condition usually goes in ON clause.","Row filtering usually goes in WHERE clause.","If you filter the right table in WHERE after a LEFT JOIN, you might accidentally turn it into an INNER JOIN behavior."],exampleTitle:"Common mistake - filtering in WHERE after LEFT JOIN",example:`-- This removes users with no orders because o.total becomes NULL
SELECT u.id, u.name, o.total
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE o.total > 500;`,notes:["Because NULL > 500 is not true, those rows disappear."],extraTitle:"Correct approach - filter inside ON to keep LEFT behavior",extra:`SELECT u.id, u.name, o.total
FROM users u
LEFT JOIN orders o
  ON o.user_id = u.id
 AND o.total > 500;`},{id:"performance",icon:a.jsx(Mr,{}),title:"Join performance (practical rules)",points:["Indexes on join keys matter a lot - users.id is primary key, orders.user_id should be indexed.","Joining huge tables without indexes can be extremely slow.","Select only needed columns. Avoid SELECT * for joined queries.","Filter early - reduce rows before join when possible."],exampleTitle:"Index example",example:`-- orders.user_id should be indexed for fast joins
CREATE INDEX idx_orders_user_id ON orders(user_id);`,notes:["For frequent query - orders by user ordered by created_at - use a compound index"],extraTitle:"Compound index for common pattern",extra:"CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);",warningTitle:"Beginner trap",warning:`- Joining on non-indexed columns
- Returning too many columns
- Joining first and filtering later`}],[]);return Q.useEffect(()=>{const l=p=>{var m;((m=p==null?void 0:p.detail)==null?void 0:m.key)==="joins"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Wt.Wrapper,{children:a.jsxs(Wt.Card,{children:[a.jsxs(Wt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(jo,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Joins"}),a.jsx("div",{className:"subtitle",children:"INNER, LEFT, RIGHT, FULL joins with examples and performance habits"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(xr,{}),a.jsx("span",{children:"At a glance"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Tr,{}):a.jsx(Er,{})})]})]}),i&&a.jsxs(Wt.Body,{children:[a.jsxs(Wt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(dr,{})}),a.jsx("div",{className:"text",children:"Joins are how SQL connects reality. They are powerful, but can get slow if you join huge tables without indexes. Learn the join types and the ON vs WHERE trick and you avoid most beginner mistakes."})]}),a.jsx(Wt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Wt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((m,b)=>a.jsx("li",{children:m},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.extraTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.extraTitle}),a.jsx("pre",{className:"code",children:l.extra})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((m,b)=>a.jsx("li",{children:m},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},$t={Wrapper:S.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:S.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:S.div`
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
    `,Body:S.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:S.div`
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
    `,SectionGrid:S.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:S.div`
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
    `},cg=()=>{const[i,c]=Q.useState(!1),d=Q.useMemo(()=>[{id:"whatIsSubquery",icon:a.jsx(De,{}),title:"What is a subquery (simple mental model)",points:["A subquery is a query inside another query.","The inner query produces a value or a set of rows used by the outer query.","Subqueries help when you need intermediate results without creating temporary tables."],exampleTitle:"Basic shape",example:`SELECT *
FROM orders
WHERE user_id IN (
  SELECT id FROM users WHERE is_active = TRUE
);`,notes:["Subqueries can return one value (scalar) or many values (list or table)."]},{id:"types",icon:a.jsx(yp,{}),title:"Types of subqueries you will see",points:["Scalar subquery - returns a single value.","List subquery - returns one column with multiple values (used with IN).","Table subquery - returns a result set used like a table (derived table).","Correlated subquery - inner query depends on outer query row."],exampleTitle:"Table subquery (derived table)",example:`SELECT t.user_id, t.revenue
FROM (
  SELECT user_id, SUM(total) AS revenue
  FROM orders
  WHERE status = 'PAID'
  GROUP BY user_id
) t
WHERE t.revenue > 1000
ORDER BY t.revenue DESC;`,notes:["Derived tables are often clearer than deeply nested WHERE subqueries."]},{id:"scalar",icon:a.jsx($u,{}),title:"Scalar subquery - one value",points:["Scalar subquery returns exactly one value (one row, one column).","It is used like a constant inside SELECT or WHERE.","If it returns more than one row, the query fails."],exampleTitle:"Example - compare with average order value",example:`SELECT id, user_id, total
FROM orders
WHERE total > (
  SELECT AVG(total) FROM orders WHERE status = 'PAID'
);`,notes:["This reads like English - orders above the average paid order value."]},{id:"inSubquery",icon:a.jsx(Dr,{}),title:"IN subquery - filter by a list",points:["IN is used when the subquery returns a list of values.","Good for - users who purchased something, products that appear in orders.","For large lists, EXISTS can be faster in many databases."],exampleTitle:"Example - users who placed at least one paid order",example:`SELECT id, name
FROM users
WHERE id IN (
  SELECT user_id
  FROM orders
  WHERE status = 'PAID'
);`,notes:["If orders.user_id is indexed, this can be decent. But EXISTS is often preferred."]},{id:"exists",icon:a.jsx(wl,{}),title:"EXISTS - check presence (very common in production)",points:["EXISTS returns true if the subquery finds at least one matching row.","Database can stop searching early when it finds a match.","Great for presence checks - does a row exist for this parent row."],exampleTitle:"Example - users who have paid orders (EXISTS)",example:`SELECT u.id, u.name
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
);`},{id:"correlated",icon:a.jsx($u,{}),title:"Correlated subquery (inner query depends on outer row)",points:["Correlated subquery references columns from the outer query.","It runs logically per row, but databases may optimize it internally.","Great for - per user metrics, latest record per group patterns."],exampleTitle:"Example - each user and their last order date",example:`SELECT
  u.id,
  u.name,
  (
    SELECT MAX(o.created_at)
    FROM orders o
    WHERE o.user_id = u.id
  ) AS last_order_at
FROM users u;`,notes:["This is a classic use case - a scalar correlated subquery in SELECT."]},{id:"joinVsSubquery",icon:a.jsx(De,{}),title:"Subquery vs join (how to choose)",points:["Use JOIN when you need columns from the related table in result rows.","Use EXISTS when you only need a yes or no - does a matching row exist.","Use derived table when you need aggregation first, then filter that result.","Readability matters - prefer the clearest query for your team."],exampleTitle:"Same problem - users with paid orders",example:`-- Option A - EXISTS
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
WHERE o.status = 'PAID';`,notes:["EXISTS avoids duplicates naturally. JOIN may require DISTINCT."]},{id:"performance",icon:a.jsx(Mr,{}),title:"Performance and indexing rules",points:["Index the columns used in subquery filters - like orders.user_id and orders.status.","EXISTS can be faster because it can stop at first match.","Avoid subqueries that return huge lists for IN on large datasets.","Use EXPLAIN to see the plan - never guess."],exampleTitle:"Indexes that matter",example:`-- Common helpful indexes
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status_user ON orders(status, user_id);

-- For latest order per user patterns
CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);`,notes:["If queries feel slow, check whether your subquery is forcing full scans."],warningTitle:"Beginner traps",warning:`- Using IN with a subquery returning millions of rows
- Forgetting indexes on foreign key columns
- Writing correlated subqueries without supporting indexes`}],[]);return Q.useEffect(()=>{const l=p=>{var m;((m=p==null?void 0:p.detail)==null?void 0:m.key)==="subqueries"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx($t.Wrapper,{children:a.jsxs($t.Card,{children:[a.jsxs($t.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(De,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Subqueries"}),a.jsx("div",{className:"subtitle",children:"Scalar, IN, EXISTS, correlated subqueries with real patterns"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(xr,{}),a.jsx("span",{children:"Beginner friendly"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Tr,{}):a.jsx(Er,{})})]})]}),i&&a.jsxs($t.Body,{children:[a.jsxs($t.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(dr,{})}),a.jsx("div",{className:"text",children:"Subqueries are like mini-queries that feed into a bigger query. Learn EXISTS and correlated subqueries and you can express many real production filters and reports cleanly."})]}),a.jsx($t.SectionGrid,{children:d.map(l=>{var p;return a.jsxs($t.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((m,b)=>a.jsx("li",{children:m},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.extraTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.extraTitle}),a.jsx("pre",{className:"code",children:l.extra})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((m,b)=>a.jsx("li",{children:m},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Ut={Wrapper:S.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:S.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:S.div`
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
    `,Body:S.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:S.div`
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
    `,SectionGrid:S.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:S.div`
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
    `},dg=()=>{const[i,c]=Q.useState(!1),d=Q.useMemo(()=>[{id:"whatIsTxn",icon:a.jsx(Eo,{}),title:"What is a transaction (simple mental model)",points:["A transaction is a group of database operations treated as one unit.","Either everything succeeds (commit) or everything is undone (rollback).","Transactions protect your data from partial updates and concurrency bugs."],exampleTitle:"Classic example - money transfer",example:`BEGIN;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

COMMIT;`,notes:["If the second update fails, you must rollback so money is not lost."]},{id:"acid",icon:a.jsx(De,{}),title:"ACID - the 4 guarantees",points:["A - Atomicity - all or nothing.","C - Consistency - constraints remain valid after commit.","I - Isolation - concurrent transactions do not corrupt each other.","D - Durability - once committed, data survives crash."],exampleTitle:"Atomicity and durability mental image",example:`- Atomicity - either both updates happen or neither happens
- Durability - after COMMIT, even power cut should not lose the change`,notes:["Different databases implement these with logs, locks, MVCC, replication protocols."]},{id:"beginCommitRollback",icon:a.jsx(wl,{}),title:"BEGIN, COMMIT, ROLLBACK",points:["BEGIN starts a transaction (some DBs use START TRANSACTION).","COMMIT makes changes permanent.","ROLLBACK undoes all changes in the transaction."],exampleTitle:"Example - safe update with rollback",example:`BEGIN;

UPDATE users SET email = 'new@email.com' WHERE id = 10;

-- If you realize it is wrong
ROLLBACK;

-- If correct
-- COMMIT;`,notes:["In apps, you usually open transaction in code and commit or rollback based on errors."]},{id:"whyNeeded",icon:a.jsx(Ze,{}),title:"Why transactions exist in real systems",points:["To maintain invariants - balances cannot go negative, stock cannot be oversold.","To handle failures safely - app crash mid request, network drop, timeouts.","To handle concurrency - multiple users buying the same item at the same time."],exampleTitle:"Inventory example - oversell bug without transaction",example:`-- Imagine stock = 1
-- Two users buy at the same time

User A reads stock = 1
User B reads stock = 1
Both subtract 1
Stock becomes -1 (or both think purchase succeeded)`,notes:["Transactions plus locking or proper isolation prevent this."]},{id:"isolation",icon:a.jsx(vp,{}),title:"Isolation levels (how strong isolation should be)",points:["Isolation level defines what you can see from other concurrent transactions.","Common levels - READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE.","Higher isolation reduces anomalies but can reduce concurrency (more waiting)."],exampleTitle:"Isolation level summary",example:`- READ UNCOMMITTED - can see uncommitted changes (dirty reads) - rarely used
- READ COMMITTED - only see committed data - common default
- REPEATABLE READ - same row read twice returns same value
- SERIALIZABLE - strongest - behaves like transactions ran one by one`,notes:["Defaults differ by database, and implementation details differ too."]},{id:"anomalies",icon:a.jsx(dr,{}),title:"Common concurrency anomalies (what isolation prevents)",points:["Dirty read - reading data that another transaction has not committed yet.","Non-repeatable read - same query returns different result inside same transaction.","Phantom read - rows appear or disappear between reads due to inserts by others.","Lost update - two transactions overwrite each other updates."],exampleTitle:"Non-repeatable read example idea",example:`Transaction A:
BEGIN;
SELECT balance FROM accounts WHERE id = 1; -- 100

Transaction B:
UPDATE accounts SET balance = 50 WHERE id = 1;
COMMIT;

Transaction A again:
SELECT balance FROM accounts WHERE id = 1; -- now 50 (changed)`,notes:["Repeatable read or serializable prevents this kind of surprise depending on DB."]},{id:"locksMvcc",icon:a.jsx(Mr,{}),title:"Locks vs MVCC (how DBs implement isolation)",points:["Locks block other transactions from changing a row or table until transaction ends.","MVCC means Multi Version Concurrency Control - readers see a snapshot while writers create new versions.","Many modern DBs (Postgres) use MVCC heavily to reduce read locks."],exampleTitle:"Row lock example - SELECT FOR UPDATE",example:`BEGIN;

-- lock the row so others cannot modify until commit
SELECT balance
FROM accounts
WHERE id = 1
FOR UPDATE;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;

COMMIT;`,notes:["FOR UPDATE is common when you will update a row and want to prevent race conditions."],warningTitle:"Beginner traps",warning:`- Keeping transactions open too long (locks stay longer)
- Doing external API calls inside a transaction
- Updating rows in random order causing deadlocks`},{id:"deadlocks",icon:a.jsx(gp,{}),title:"Deadlocks (when transactions block each other)",points:["Deadlock happens when Transaction A waits for a lock held by B, and B waits for a lock held by A.","Databases detect deadlocks and kill one transaction so the other can continue.","Best prevention - update rows in consistent order across the codebase."],exampleTitle:"Deadlock idea",example:`Transaction A locks row 1, then wants row 2
Transaction B locks row 2, then wants row 1
Both wait forever -> deadlock -> DB kills one`,notes:["If you see deadlock errors, retry the transaction in code with backoff."]},{id:"distributed",icon:a.jsx(De,{}),title:"Distributed transactions (microservices reality)",points:["Distributed transaction means multiple systems must commit together.","Classic approach is 2PC (two-phase commit) but it is complex and can block.","Modern systems often use Saga pattern - sequence of steps with compensating actions."],exampleTitle:"Saga example - order payment flow",example:`- Step 1 - create order (PENDING)
- Step 2 - charge payment
- Step 3 - reserve inventory
- Step 4 - mark order as PAID

If step 3 fails:
- refund payment (compensation)
- mark order as CANCELED`,notes:["This is not one DB transaction, it is a workflow with recovery steps."]},{id:"mongoParallel",icon:a.jsx(Ze,{}),title:"MongoDB transactions (parallel notes for this repo)",points:["MongoDB supports multi-document transactions (in replica set and sharded clusters).","Transactions are useful but can be slower than single document atomic updates.","MongoDB single document updates are atomic by default - so embed related data when possible."],exampleTitle:"Mongo single document atomic update idea",example:`// atomic update inside one document
db.accounts.updateOne(
  { _id: ObjectId("...") },
  { $inc: { balance: -500 } }
);`,notes:["Use multi-document transactions when you cannot model the change as a single document update."]}],[]);return Q.useEffect(()=>{const l=p=>{var m;((m=p==null?void 0:p.detail)==null?void 0:m.key)==="transactions"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Ut.Wrapper,{children:a.jsxs(Ut.Card,{children:[a.jsxs(Ut.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Eo,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Transactions"}),a.jsx("div",{className:"subtitle",children:"ACID, isolation levels, locks, deadlocks, distributed patterns"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(xr,{}),a.jsx("span",{children:"Beginner friendly"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Tr,{}):a.jsx(Er,{})})]})]}),i&&a.jsxs(Ut.Body,{children:[a.jsxs(Ut.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(dr,{})}),a.jsx("div",{className:"text",children:"Transactions are your safety shield. They prevent half-updates, race conditions, and weird concurrency bugs. Learn them once and you will debug backend issues 10x faster."})]}),a.jsx(Ut.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Ut.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((m,b)=>a.jsx("li",{children:m},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((m,b)=>a.jsx("li",{children:m},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Ht={Wrapper:S.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:S.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:S.div`
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
    `,Body:S.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:S.div`
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
    `,SectionGrid:S.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:S.div`
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
    `},ug=()=>{const[i,c]=Q.useState(!1),d=Q.useMemo(()=>[{id:"whyScale",icon:a.jsx(Qi,{}),title:"Why databases need scaling",points:["Traffic grows - more reads and writes per second.","Data grows - tables and indexes become larger.","Queries grow - more joins, more aggregation, more analytics.","Scaling means keeping latency low and throughput high as load increases."],exampleTitle:"Real symptoms of scaling pain",example:`- API response times increasing
- CPU at 90% all day
- Disk I/O constantly maxed
- Slow queries dominate logs
- Connection pool saturates`,notes:["Scaling is not only hardware - it is also schema, indexes, caching, and architecture."]},{id:"vertical",icon:a.jsx(mp,{}),title:"Vertical scaling (scale up)",points:["Vertical scaling means bigger machine - more CPU, RAM, faster SSD.","Simplest scaling option - no application changes usually required.","Has a hard limit - you cannot scale forever."],exampleTitle:"When vertical scaling works well",example:`- Early stage products
- Moderate traffic
- Single DB can handle workload with better hardware
- You need quick win`,notes:["Often the first step because it is easiest and fastest."]},{id:"horizontal",icon:a.jsx(ul,{}),title:"Horizontal scaling (scale out)",points:["Horizontal scaling means adding more nodes instead of one bigger node.","For reads - add read replicas.","For large data - partition or shard across nodes.","More complex but scales much further than vertical scaling."],exampleTitle:"Horizontal scaling idea",example:`- One primary handles writes
- Multiple replicas handle reads
- For huge systems - split data across shards`,notes:["Most production scaling pain comes from writes, not reads."]},{id:"readReplicas",icon:a.jsx($i,{}),title:"Read replicas (classic scale pattern)",points:["Read replica is a copy of primary database that is kept updated via replication.","Your app sends write queries to primary, read queries to replicas.","This can massively increase read capacity.","Main problem is replication lag - replica may be slightly behind primary."],exampleTitle:"App routing mental model",example:`- Writes - go to PRIMARY
- Reads - go to REPLICAS
- Critical reads right after write - read from PRIMARY (read your writes)`,notes:["If you show user their new order immediately, read from primary or use stronger read settings."],warningTitle:"Beginner trap",warning:`- Sending every read to replica without considering lag
- Expecting replicas to solve write bottleneck`},{id:"writeBottlenecks",icon:a.jsx(Mr,{}),title:"Write bottlenecks (why scaling is hard)",points:["Writes need durability - logs, fsync, replication.","Indexes make writes slower because each write updates indexes.","Hot rows cause contention - many updates to same row or document.","Transactions and locks reduce write concurrency."],exampleTitle:"Common write bottleneck examples",example:`- Counter table updated on every request
- Single row holds global state like last_invoice_number
- Highly indexed event table with too many secondary indexes`,notes:["Fixing write bottlenecks often requires data model changes or partitioning."]},{id:"partitioning",icon:a.jsx(De,{}),title:"Partitioning (split one table into smaller pieces)",points:["Partitioning means splitting a large table into partitions based on a key.","Common keys - date (monthly partitions), tenant_id, region.","Queries become faster because DB can scan only relevant partitions.","This is not always the same as sharding - partitioning can be within one DB node."],exampleTitle:"Date partitioning idea (log table)",example:`-- Conceptual
events_2026_01
events_2026_02
events_2026_03

-- Query for March scans only events_2026_03`,notes:["Partitioning is super useful for time series data and logs."]},{id:"caching",icon:a.jsx(No,{}),title:"Caching and read models (reduce DB load)",points:["Caching means serve frequent reads from fast storage instead of DB.","Examples - in-memory cache, CDN, application cache, materialized views.","Also design read models - precomputed tables for dashboards.","Cache is not only Redis - even simple in-app cache can help."],exampleTitle:"Caching mental model",example:`- DB is source of truth
- Cache is fast copy
- Cache must be invalidated or refreshed when data changes`,notes:["Most scale wins are not fancy sharding - they are caching + indexes + query fixes."]},{id:"queryPatterns",icon:a.jsx(bo,{}),title:"Query distribution patterns (how systems route traffic)",points:["Read heavy endpoints - route to replicas and cache.","Write heavy endpoints - keep minimal indexes and batch writes.","Analytics queries - run on separate warehouse or replica to avoid hurting primary.","Multi-tenant systems - route by tenant to partitions or shards."],exampleTitle:"Production pattern - OLTP vs OLAP",example:`- OLTP (transactions) - fast small queries, primary DB
- OLAP (analytics) - large scans, separate system or replica`,notes:["Mixing analytics scans with transactional DB can destroy latency."]},{id:"practicalPlan",icon:a.jsx(Ze,{}),title:"Practical scaling plan (simple order)",points:["Step 1 - measure - slow queries, CPU, I/O, connections.","Step 2 - fix queries + indexes (often biggest win).","Step 3 - add caching for hot reads.","Step 4 - add read replicas if reads dominate.","Step 5 - partition large tables (logs, events).","Step 6 - shard only when needed - it increases complexity a lot."],exampleTitle:"Quick checklist",example:`- What are top 10 slow queries
- Which indexes are missing
- Which endpoints are read heavy
- Which endpoints are write heavy
- Which tables grow fastest
- What can be cached safely`,notes:["Scaling is mostly engineering discipline and measurement, not magic hardware."],warningTitle:"Do not do this too early",warning:`- Shard before fixing indexes and queries
- Add replicas before understanding lag behavior
- Cache everything without invalidation plan`}],[]);return Q.useEffect(()=>{const l=p=>{var m;((m=p==null?void 0:p.detail)==null?void 0:m.key)==="scalingDatabases"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Ht.Wrapper,{children:a.jsxs(Ht.Card,{children:[a.jsxs(Ht.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(Qi,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Scaling Databases"}),a.jsx("div",{className:"subtitle",children:"Vertical vs horizontal scaling, replicas, partitioning, caching and real patterns"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(xr,{}),a.jsx("span",{children:"Production focused"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Tr,{}):a.jsx(Er,{})})]})]}),i&&a.jsxs(Ht.Body,{children:[a.jsxs(Ht.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(dr,{})}),a.jsx("div",{className:"text",children:"Scaling databases is mostly about removing bottlenecks in the right order. Start with measurement, fix slow queries and indexes, add caching, then replicas. Sharding is powerful but it is not the first move."})]}),a.jsx(Ht.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Ht.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((m,b)=>a.jsx("li",{children:m},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((m,b)=>a.jsx("li",{children:m},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},qt={Wrapper:S.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:S.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:S.div`
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
    `,Body:S.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:S.div`
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
    `,SectionGrid:S.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:S.div`
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
    `},pg=()=>{const[i,c]=Q.useState(!1),d=Q.useMemo(()=>[{id:"whatIsReplication",icon:a.jsx($i,{}),title:"What is replication (simple mental model)",points:["Replication means keeping copies of your database data on multiple machines.","Main goals - high availability (HA), disaster recovery, and scaling reads.","Usually there is one primary (leader) for writes and one or more replicas (followers) for copying."],exampleTitle:"Mental picture",example:`- PRIMARY (writes)
- REPLICA 1 (copy for reads)
- REPLICA 2 (copy for reads and failover)`,notes:["Replication is not the same as backups. Backups are point-in-time snapshots. Replication is continuous copying."]},{id:"leaderFollower",icon:a.jsx(Qm,{}),title:"Primary-secondary (leader-follower) replication",points:["Primary handles writes and produces a stream of changes (log).","Replicas read that change stream and apply it to stay updated.","Replicas usually serve read queries to offload the primary."],exampleTitle:"SQL replication idea",example:`- Primary writes to WAL (write-ahead log)
- Replicas replay WAL to stay in sync`,notes:["Different databases use different names - WAL, binlog, oplog."]},{id:"syncAsync",icon:a.jsx(Gm,{}),title:"Synchronous vs asynchronous replication",points:["Asynchronous - primary commits first, replicas catch up later. Fast writes but can lose last few seconds if primary dies.","Synchronous - primary waits for replica ack before commit. Safer but slower writes.","Many systems use async for performance and accept small risk."],exampleTitle:"Tradeoff",example:`- Async - faster, small window of potential data loss (RPO > 0)
- Sync - safer, higher latency (RPO near 0), lower throughput`,notes:["You pick based on business risk - payments vs likes counter is not same risk."]},{id:"lag",icon:a.jsx(No,{}),title:"Replication lag (the most important practical issue)",points:["Replication lag means replica is behind primary.","If your app reads from replica right after a write, user may not see their update immediately.","This is common and must be handled intentionally in app logic."],exampleTitle:"Example - read-your-writes problem",example:`User updates profile on primary (write)
Immediately loads profile page (read)
If read goes to replica and replica is behind, user sees old data`,notes:["Solution patterns - read from primary after write, session stickiness, or stronger read concerns."],warningTitle:"Beginner trap",warning:`- Sending all reads to replicas without thinking about lag
- Assuming replica always has the latest data`},{id:"failover",icon:a.jsx(Eo,{}),title:"Failover and high availability",points:["Failover means promoting a replica to become the new primary when the primary fails.","High availability means system continues operating even if a node fails.","Failover can be automatic (orchestrated) or manual depending on setup."],exampleTitle:"Failover steps (simple)",example:`- Detect primary failure
- Choose best replica (most up to date)
- Promote replica to primary
- Update routing so writes go to new primary`,notes:["During failover, writes may pause for a short time."]},{id:"rpoRto",icon:a.jsx(Mr,{}),title:"RPO and RTO (reliability language)",points:["RPO means Recovery Point Objective - how much data you can afford to lose.","RTO means Recovery Time Objective - how long you can afford to be down.","Async replication increases RPO risk. Strong HA reduces RTO."],exampleTitle:"Concrete example",example:`- RPO = 5 seconds means losing last 5 seconds of data is acceptable
- RTO = 2 minutes means service must recover within 2 minutes`,notes:["These are business decisions that guide your architecture."]},{id:"readScaling",icon:a.jsx(Ze,{}),title:"Replication for read scaling (what it does and does not do)",points:["Replication increases read capacity by adding replicas.","Replication does not magically fix write bottlenecks - primary still handles writes.","If you are write heavy, you need partitioning or sharding or redesign."],exampleTitle:"Routing pattern",example:`- Writes -> primary
- Reads -> replicas
- Critical reads (after write) -> primary`,notes:["Most big apps do some form of read scaling with replicas."]},{id:"mongo",icon:a.jsx($i,{}),title:"MongoDB replication (replica set basics)",points:["MongoDB uses replica sets - one primary, multiple secondaries.","Replication uses oplog - operation log.","Reads can be configured with read preference and read concern.","Writes can be configured with write concern (example - majority)."],exampleTitle:"Mongo read and write controls (idea)",example:`// write concern idea (pseudo)
db.orders.insertOne(
  { status: "PAID" },
  { writeConcern: { w: "majority" } }
);

// read preference idea (pseudo)
db.orders.find({ userId: ObjectId("...") }).readPref("secondaryPreferred")`,notes:["For critical reads, use primary or stronger read concern to reduce stale data risk."]}],[]);return Q.useEffect(()=>{const l=p=>{var m;((m=p==null?void 0:p.detail)==null?void 0:m.key)==="replication"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(qt.Wrapper,{children:a.jsxs(qt.Card,{children:[a.jsxs(qt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx($i,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Replication"}),a.jsx("div",{className:"subtitle",children:"Leader-follower, lag, sync vs async, failover, HA, RPO and RTO"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(xr,{}),a.jsx("span",{children:"Real-world"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Tr,{}):a.jsx(Er,{})})]})]}),i&&a.jsxs(qt.Body,{children:[a.jsxs(qt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(dr,{})}),a.jsx("div",{className:"text",children:"Replication keeps copies of data so your system survives failures and scales reads. The catch is replication lag - replicas can be behind. Once you handle lag consciously, replicas become a superpower."})]}),a.jsx(qt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(qt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((m,b)=>a.jsx("li",{children:m},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((m,b)=>a.jsx("li",{children:m},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},Vt={Wrapper:S.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,Card:S.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,CardHeader:S.div`
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
    `,Body:S.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,Intro:S.div`
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
    `,SectionGrid:S.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Section:S.div`
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
    `},fg=()=>{const[i,c]=Q.useState(!1),d=Q.useMemo(()=>[{id:"whatIsSharding",icon:a.jsx(bo,{}),title:"What is sharding (simple mental model)",points:["Sharding is splitting data across multiple database nodes so one machine does not store everything.","Each shard holds only a portion of the data, but together they represent the full dataset.","Main goal - scale storage and write throughput beyond a single machine."],exampleTitle:"Mental picture",example:`- Shard 1 stores users 1 to 1,000,000
- Shard 2 stores users 1,000,001 to 2,000,000
- Shard 3 stores users 2,000,001 to 3,000,000`,notes:["Replication makes copies of data. Sharding splits data. They solve different problems."]},{id:"whyShard",icon:a.jsx(Qi,{}),title:"When you actually need sharding",points:["Your dataset is too large for a single node even with good hardware.","Writes are too heavy for a single primary and you already fixed queries and indexes.","You have clear partition key patterns (tenant_id, user_id, region).","You can accept more operational complexity."],exampleTitle:"Signs you are not ready yet",example:`- You still have slow queries without proper indexes
- You have not tried partitioning or caching
- Most load is reads (replicas can help before sharding)`,notes:["Sharding is powerful, but it is a complexity multiplier."]},{id:"shardKey",icon:a.jsx(Fm,{}),title:"Shard key (the most important decision)",points:["Shard key decides how data is distributed across shards.","A good shard key spreads load evenly and supports common queries.","A bad shard key creates hotspots or forces scatter-gather queries."],exampleTitle:"Good vs bad shard keys",example:`Good:
- user_id (high cardinality)
- tenant_id (multi-tenant systems)
- region + user_id (geography aware)

Bad:
- is_active (low cardinality)
- status (few values)
- created_at if inserts always go to latest range (hot shard risk)`,notes:["You want high cardinality and even distribution, not a few repeated values."]},{id:"routing",icon:a.jsx(Dr,{}),title:"Query routing (how the system finds the right shard)",points:["If your query includes shard key, router can send it to one shard (fast).","If query does not include shard key, router may query many shards (scatter-gather).","Design your APIs to include shard key in request path when possible."],exampleTitle:"Fast route vs scatter-gather",example:`Fast:
- GET /users/123/orders
- Query has user_id (shard key) -> hits one shard

Slow:
- GET /orders?status=PAID
- No shard key -> hits all shards -> merges results`,notes:["Scatter-gather queries are the main reason sharded systems feel slower sometimes."]},{id:"balancing",icon:a.jsx(De,{}),title:"Balancing and chunk movement",points:["Sharded systems need to keep data balanced across shards.","Balancer moves chunks or ranges between shards when one shard is too full or too hot.","Moving data has a cost - network, CPU, and temporary load spikes."],exampleTitle:"Balancing idea",example:`- Shard 1 has 60% of data
- Shard 2 has 20%
- Shard 3 has 20%

Balancer moves some ranges from Shard 1 to others`,notes:["A stable shard key reduces balancing pain."]},{id:"hotspots",icon:a.jsx(dr,{}),title:"Hot shards and hotspots (danger zone)",points:["Hotspot means one shard receives most writes or reads.","This happens when shard key causes uneven distribution.","Examples - monotonically increasing key (timestamps) can direct inserts to one shard."],exampleTitle:"Timestamp hotspot example",example:`If shard key is created_at (range based),
all new inserts go to latest time range -> one shard becomes hot`,notes:["Fix patterns - hashed shard keys, compound shard keys, or choose a better key like user_id."],warningTitle:"Beginner traps",warning:`- Choosing shard key without understanding query patterns
- Using low cardinality shard key
- Sharding too early to avoid learning indexing and query tuning`},{id:"crossShard",icon:a.jsx(Mr,{}),title:"Cross-shard queries and transactions",points:["Cross-shard queries are slower because results must be merged across shards.","Cross-shard joins are difficult or not supported like a single SQL database join.","Cross-shard transactions exist in some systems but cost more and add complexity."],exampleTitle:"Design approach",example:`- Prefer queries scoped by shard key
- Keep related data close (same shard) by designing key
- Use denormalization or precomputed views for global reporting`,notes:["For global analytics, many teams move data to a warehouse instead of querying shards."]},{id:"replicationPlusSharding",icon:a.jsx(Ze,{}),title:"Sharding plus replication (real production setup)",points:["Each shard usually has its own replication set for high availability.","So total nodes = shards * replicas per shard.","Example - 4 shards with 3 replicas each = 12 nodes (plus routers and config servers)."],exampleTitle:"Why ops complexity grows",example:`- More nodes
- More monitoring
- More failover events
- More network traffic`,notes:["This is why sharding is usually a later-stage decision."]},{id:"mongo",icon:a.jsx(bo,{}),title:"MongoDB sharding (how it looks in Mongo)",points:["Mongo sharded clusters use mongos router, config servers, and shard replica sets.","Shard key choice is critical to avoid hotspots and scatter-gather.","Mongo supports hashed shard keys to spread inserts more evenly."],exampleTitle:"Mongo shard key ideas",example:`// Example concept only
// Choose shard key that matches query patterns

sh.shardCollection("app.orders", { userId: "hashed" })

// Now queries with userId route well`,notes:["If your app always queries by userId, shard by userId is usually strong."]}],[]);return Q.useEffect(()=>{const l=p=>{var m;((m=p==null?void 0:p.detail)==null?void 0:m.key)==="sharding"&&c(!0)};return window.addEventListener("a2rp:open-topic",l),()=>window.removeEventListener("a2rp:open-topic",l)},[]),a.jsx(Vt.Wrapper,{children:a.jsxs(Vt.Card,{children:[a.jsxs(Vt.CardHeader,{role:"button",tabIndex:0,onClick:()=>c(l=>!l),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&c(p=>!p)},"aria-expanded":i,children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"icon",children:a.jsx(bo,{})}),a.jsxs("div",{className:"meta",children:[a.jsx("div",{className:"title",children:"Sharding"}),a.jsx("div",{className:"subtitle",children:"Shard keys, routing, balancing, hotspots, cross-shard queries and Mongo patterns"})]})]}),a.jsxs("div",{className:"right",children:[a.jsxs("div",{className:"chip",children:[a.jsx(xr,{}),a.jsx("span",{children:"High impact topic"})]}),a.jsx("div",{className:"toggleIcon",children:i?a.jsx(Tr,{}):a.jsx(Er,{})})]})]}),i&&a.jsxs(Vt.Body,{children:[a.jsxs(Vt.Intro,{children:[a.jsx("div",{className:"icon",children:a.jsx(dr,{})}),a.jsx("div",{className:"text",children:"Sharding is how databases scale beyond one machine, but it adds serious complexity. The shard key is the destiny of your cluster. Choose it based on query patterns, cardinality, and hotspot risk."})]}),a.jsx(Vt.SectionGrid,{children:d.map(l=>{var p;return a.jsxs(Vt.Section,{children:[a.jsxs("div",{className:"secHead",children:[a.jsx("div",{className:"secIcon",children:l.icon}),a.jsx("div",{className:"secTitle",children:l.title})]}),a.jsx("ul",{className:"points",children:l.points.map((m,b)=>a.jsx("li",{children:m},`${l.id}-p-${b}`))}),l.exampleTitle&&a.jsxs("div",{className:"block",children:[a.jsx("div",{className:"blockTitle",children:l.exampleTitle}),a.jsx("pre",{className:"code",children:l.example})]}),l.warningTitle&&a.jsxs("div",{className:"warn",children:[a.jsx("div",{className:"warnTitle",children:l.warningTitle}),a.jsx("pre",{className:"code",children:l.warning})]}),(p=l.notes)!=null&&p.length?a.jsxs("div",{className:"notes",children:[a.jsx("div",{className:"notesTitle",children:"Notes"}),a.jsx("ul",{children:l.notes.map((m,b)=>a.jsx("li",{children:m},`${l.id}-n-${b}`))})]}):null]},l.id)})})]})]})})},hg=()=>{const i=Q.useRef(null);return a.jsxs(nl.Wrapper,{children:[a.jsx(nl.Header,{children:a.jsx(Xm,{})}),a.jsxs(nl.Main,{ref:i,children:[a.jsxs("div",{className:"contentWrapper",children:[a.jsx(eg,{scrollerRef:i}),a.jsx("div",{className:"topicWrapper mongoAdvanced",children:a.jsx(ng,{})}),a.jsx("div",{className:"topicWrapper aggregation",children:a.jsx(og,{})}),a.jsx("div",{className:"topicWrapper indexStrategy",children:a.jsx(ig,{})}),a.jsx("div",{className:"topicWrapper schemaDesign",children:a.jsx(ag,{})}),a.jsx("div",{className:"topicWrapper sql",children:a.jsx(sg,{})}),a.jsx("div",{className:"topicWrapper joins",children:a.jsx(lg,{})}),a.jsx("div",{className:"topicWrapper subqueries",children:a.jsx(cg,{})}),a.jsx("div",{className:"topicWrapper transactions",children:a.jsx(dg,{})}),a.jsx("div",{className:"topicWrapper scalingDatabases",children:a.jsx(ug,{})}),a.jsx("div",{className:"topicWrapper replication",children:a.jsx(pg,{})}),a.jsx("div",{className:"topicWrapper sharding",children:a.jsx(fg,{})})]}),a.jsx("div",{className:"footerWrapper",children:a.jsx(Zm,{})})]}),a.jsx(tg,{scrollerRef:i})]})};Th.createRoot(document.getElementById("root")).render(a.jsx(a.Fragment,{children:a.jsx(hg,{})}));
