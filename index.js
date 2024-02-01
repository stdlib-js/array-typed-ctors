// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ctors=r()}(this,(function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function i(e,r){return null!=e&&n.call(e,r)}var o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"";var u=r()?function(e){var r,n,o;if(null==e)return t.call(e);n=e[a],r=i(e,a);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=n:delete e[a],o}:function(e){return t.call(e)},f="function"==typeof Float64Array;var l="function"==typeof Float64Array?Float64Array:null;var c="function"==typeof Float64Array?Float64Array:void 0;var s=function(){var e,r,t;if("function"!=typeof l)return!1;try{r=new l([1,3.14,-3.14,NaN]),t=r,e=(f&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?c:function(){throw new Error("not implemented")},y="function"==typeof Float32Array;var h=Number.POSITIVE_INFINITY,p="function"==typeof Float32Array?Float32Array:null;var g="function"==typeof Float32Array?Float32Array:void 0;var m=function(){var e,r,t;if("function"!=typeof p)return!1;try{r=new p([1,3.14,-3.14,5e40]),t=r,e=(y&&t instanceof Float32Array||"[object Float32Array]"===u(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===h}catch(r){e=!1}return e}()?g:function(){throw new Error("not implemented")},w="function"==typeof Int16Array;var b="function"==typeof Int16Array?Int16Array:null;var v="function"==typeof Int16Array?Int16Array:void 0;var d=function(){var e,r,t;if("function"!=typeof b)return!1;try{r=new b([1,3.14,-3.14,32768]),t=r,e=(w&&t instanceof Int16Array||"[object Int16Array]"===u(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?v:function(){throw new Error("not implemented")},E="function"==typeof Int32Array;var A="function"==typeof Int32Array?Int32Array:null;var T="function"==typeof Int32Array?Int32Array:void 0;var _=function(){var e,r,t;if("function"!=typeof A)return!1;try{r=new A([1,3.14,-3.14,2147483648]),t=r,e=(E&&t instanceof Int32Array||"[object Int32Array]"===u(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?T:function(){throw new Error("not implemented")},x="function"==typeof Int8Array;var j="function"==typeof Int8Array?Int8Array:null;var k="function"==typeof Int8Array?Int8Array:void 0;var V=function(){var e,r,t;if("function"!=typeof j)return!1;try{r=new j([1,3.14,-3.14,128]),t=r,e=(x&&t instanceof Int8Array||"[object Int8Array]"===u(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?k:function(){throw new Error("not implemented")},L="function"==typeof Uint16Array;var R="function"==typeof Uint16Array?Uint16Array:null;var S="function"==typeof Uint16Array?Uint16Array:void 0;var B=function(){var e,r,t;if("function"!=typeof R)return!1;try{r=new R(r=[1,3.14,-3.14,65536,65537]),t=r,e=(L&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?S:function(){throw new Error("not implemented")},I="function"==typeof Uint32Array;var C="function"==typeof Uint32Array?Uint32Array:null;var O="function"==typeof Uint32Array?Uint32Array:void 0;var F=function(){var e,r,t;if("function"!=typeof C)return!1;try{r=new C(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(I&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?O:function(){throw new Error("not implemented")},M="function"==typeof Uint8Array;var N="function"==typeof Uint8Array?Uint8Array:null;var U="function"==typeof Uint8Array?Uint8Array:void 0;var P=function(){var e,r,t;if("function"!=typeof N)return!1;try{r=new N(r=[1,3.14,-3.14,256,257]),t=r,e=(M&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?U:function(){throw new Error("not implemented")},Y="function"==typeof Uint8ClampedArray;var W="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var $="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var G=function(){var e,r,t;if("function"!=typeof W)return!1;try{r=new W([-1,0,1,3.14,4.99,255,256]),t=r,e=(Y&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===u(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?$:function(){throw new Error("not implemented")},Z="function"==typeof Object.defineProperty?Object.defineProperty:null;var X=Object.defineProperty;function J(e){return"number"==typeof e}function z(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function q(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+z(i):z(i)+e,n&&(e="-"+e)),e}var D=String.prototype.toLowerCase,H=String.prototype.toUpperCase;function K(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!J(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=q(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=q(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===H.call(e.specifier)?H.call(t):D.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Q(e){return"string"==typeof e}var ee=Math.abs,re=String.prototype.toLowerCase,te=String.prototype.toUpperCase,ne=String.prototype.replace,ie=/e\+(\d)$/,oe=/e-(\d)$/,ae=/^(\d+)$/,ue=/^(\d+)e/,fe=/\.0$/,le=/\.0*e/,ce=/(\..*[^0])0*e/;function se(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!J(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":ee(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=ne.call(t,ce,"$1e"),t=ne.call(t,le,"e"),t=ne.call(t,fe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ne.call(t,ie,"e+0$1"),t=ne.call(t,oe,"e-0$1"),e.alternate&&(t=ne.call(t,ae,"$1."),t=ne.call(t,ue,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===te.call(e.specifier)?te.call(t):re.call(t)}function ye(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function he(e,r,t){var n=r-e.length;return n<0?e:e=t?e+ye(n):ye(n)+e}var pe=String.fromCharCode,ge=isNaN,me=Array.isArray;function we(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function be(e){var r,t,n,i,o,a,u,f,l;if(!me(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,f=0;f<e.length;f++)if(Q(n=e[f]))a+=n;else{if(r=void 0!==n.precision,!(n=we(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ge(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,ge(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=K(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!ge(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ge(o)?String(n.arg):pe(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=se(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=q(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=he(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var ve=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function de(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ee(e){var r,t,n,i;for(t=[],i=0,n=ve.exec(e);n;)(r=e.slice(i,ve.lastIndex-n[0].length)).length&&t.push(r),t.push(de(n)),i=ve.lastIndex,n=ve.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Ae(e){return"string"==typeof e}function Te(e){var r,t,n;if(!Ae(e))throw new TypeError(Te("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ee(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return be.apply(null,t)}var _e,xe=Object.prototype,je=xe.toString,ke=xe.__defineGetter__,Ve=xe.__defineSetter__,Le=xe.__lookupGetter__,Re=xe.__lookupSetter__;_e=function(){try{return Z({},"x",{}),!0}catch(e){return!1}}()?X:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===je.call(e))throw new TypeError(Te("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===je.call(t))throw new TypeError(Te("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Le.call(e,r)||Re.call(e,r)?(n=e.__proto__,e.__proto__=xe,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&ke&&ke.call(e,r,t.get),a&&Ve&&Ve.call(e,r,t.set),e};var Se=_e;function Be(e,r,t){Se(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Ie(e){return"number"==typeof e}var Ce=Number,Oe=Ce.prototype.toString;var Fe=r();function Me(e){return"object"==typeof e&&(e instanceof Ce||(Fe?function(e){try{return Oe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===u(e)))}function Ne(e){return Ie(e)||Me(e)}Be(Ne,"isPrimitive",Ie),Be(Ne,"isObject",Me);var Ue=Ce.NEGATIVE_INFINITY,Pe=Math.floor;function Ye(e){return Pe(e)===e}function We(e){return e<h&&e>Ue&&Ye(e)}function $e(e){return Ie(e)&&We(e)}function Ge(e){return Me(e)&&We(e.valueOf())}function Ze(e){return $e(e)||Ge(e)}function Xe(e){return $e(e)&&e>=0}function Je(e){return Ge(e)&&e.valueOf()>=0}function ze(e){return Xe(e)||Je(e)}Be(Ze,"isPrimitive",$e),Be(Ze,"isObject",Ge),Be(ze,"isPrimitive",Xe),Be(ze,"isObject",Je);function qe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ye(e.length)&&e.length>=0&&e.length<=4294967295}function De(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ye(e.length)&&e.length>=0&&e.length<=9007199254740991}var He="function"==typeof ArrayBuffer;function Ke(e){return He&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===u(e)}var Qe=Array.isArray?Array.isArray:function(e){return"[object Array]"===u(e)};function er(e){return"object"==typeof e&&null!==e&&!Qe(e)}var rr=/./;function tr(e){return"boolean"==typeof e}var nr=Boolean,ir=Boolean.prototype.toString;var or=r();function ar(e){return"object"==typeof e&&(e instanceof nr||(or?function(e){try{return ir.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===u(e)))}function ur(e){return tr(e)||ar(e)}function fr(){return new Function("return this;")()}Be(ur,"isPrimitive",tr),Be(ur,"isObject",ar);var lr="object"==typeof self?self:null,cr="object"==typeof window?window:null,sr="object"==typeof global?global:null,yr="object"==typeof globalThis?globalThis:null;var hr=function(e){if(arguments.length){if(!tr(e))throw new TypeError(Te("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return fr()}if(yr)return yr;if(lr)return lr;if(cr)return cr;if(sr)return sr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=hr.document&&hr.document.childNodes,gr=Int8Array;function mr(){return/^\s*function\s*([^(]*)/i}var wr=/^\s*function\s*([^(]*)/i;function br(e){return null!==e&&"object"==typeof e}function vr(e){var r,t,n,i;if(("Object"===(t=u(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=wr.exec(n.toString()))return r[1]}return br(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Be(mr,"REGEXP",wr),Be(br,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Te("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Qe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(br));var dr="function"==typeof rr||"object"==typeof gr||"function"==typeof pr?function(e){return vr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?vr(e).toLowerCase():r};function Er(e){return"function"===dr(e)}function Ar(e,r){if(!(this instanceof Ar))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ie(e))throw new TypeError(Te("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ie(r))throw new TypeError(Te("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Se(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Se(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Be(Ar,"BYTES_PER_ELEMENT",8),Be(Ar.prototype,"BYTES_PER_ELEMENT",8),Be(Ar.prototype,"byteLength",16),Be(Ar.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Be(Ar.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Tr="function"==typeof Math.fround?Math.fround:null,_r=new m(1);var xr="function"==typeof Tr?Tr:function(e){return _r[0]=e,_r[0]};function jr(e,r){if(!(this instanceof jr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ie(e))throw new TypeError(Te("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ie(r))throw new TypeError(Te("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Se(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:xr(e)}),Se(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:xr(r)}),this}function kr(e){return e instanceof Ar||e instanceof jr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Vr(e){return Ye(e/2)}function Lr(){return"function"==typeof o&&"symbol"==typeof o("foo")&&i(o,"iterator")&&"symbol"==typeof o.iterator}Be(jr,"BYTES_PER_ELEMENT",4),Be(jr.prototype,"BYTES_PER_ELEMENT",4),Be(jr.prototype,"byteLength",8),Be(jr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Be(jr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Rr=Lr()?Symbol.iterator:null;function Sr(e,r,t){Se(e,r,{configurable:!1,enumerable:!1,get:t})}function Br(e){return e.re}function Ir(e){return e.im}function Cr(e,r){return new m(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Or(e,r){return new s(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var Fr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function Mr(e){var r=Fr[e];return"function"==typeof r?r:Fr.default}var Nr={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function Ur(e){var r=Nr[e];return"function"==typeof r?r:Nr.default}function Pr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(qe(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!kr(n))return new TypeError(Te("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Br(n),Ir(n))}return r}function Yr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,qe(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!kr(o))return new TypeError(Te("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Br(o),Ir(o))}return n}function Wr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!kr(n=r[i]))return null;e[o]=Br(n),e[o+1]=Ir(n),o+=2}return e}var $r=2*m.BYTES_PER_ELEMENT,Gr=Lr();function Zr(e){return e instanceof qr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Xr(e){return e===qr||"Complex128Array"===e.name}function Jr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===$r}function zr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*$r}function qr(){var e,r,t,n;if(r=arguments.length,!(this instanceof qr))return 0===r?new qr:1===r?new qr(arguments[0]):2===r?new qr(arguments[0],arguments[1]):new qr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new m(0);else if(1===r)if(Xe(arguments[0]))t=new m(2*arguments[0]);else if(De(arguments[0]))if((n=(t=arguments[0]).length)&&Qe(t)&&kr(t[0])){if(null===(t=Wr(new m(2*n),t))){if(!Vr(n))throw new RangeError(Te("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new m(arguments[0])}}else{if(Jr(t))t=Cr(t,0);else if(zr(t))t=Or(t,0);else if(!Vr(n))throw new RangeError(Te("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new m(t)}else if(Ke(arguments[0])){if(!Ye((t=arguments[0]).byteLength/$r))throw new RangeError(Te("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",$r,t.byteLength));t=new m(t)}else{if(!er(arguments[0]))throw new TypeError(Te("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Gr)throw new TypeError(Te("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Er(t[Rr]))throw new TypeError(Te("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Er((t=t[Rr]()).next))throw new TypeError(Te("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Pr(t))instanceof Error)throw t;t=new m(t)}else{if(!Ke(t=arguments[0]))throw new TypeError(Te("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Xe(e=arguments[1]))throw new TypeError(Te("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Ye(e/$r))throw new RangeError(Te("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",$r,e));if(2===r){if(!Ye((n=t.byteLength-e)/$r))throw new RangeError(Te("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",$r,n));t=new m(t,e)}else{if(!Xe(n=arguments[2]))throw new TypeError(Te("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*$r>t.byteLength-e)throw new RangeError(Te("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*$r));t=new m(t,e,2*n)}}return Be(this,"_buffer",t),Be(this,"_length",t.length/2),this}function Dr(e){return e.re}function Hr(e){return e.im}function Kr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(qe(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!kr(n))return new TypeError(Te("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Dr(n),Hr(n))}return r}function Qr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,qe(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!kr(o))return new TypeError(Te("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Dr(o),Hr(o))}return n}function et(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!kr(n=r[i]))return null;e[o]=Dr(n),e[o+1]=Hr(n),o+=2}return e}Be(qr,"BYTES_PER_ELEMENT",$r),Be(qr,"name","Complex64Array"),Be(qr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Er(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Er(n=arguments[1]))throw new TypeError(Te("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Zr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(kr(c=n.call(r,e.get(s),s)))o[y]=Br(c),o[y+1]=Ir(c);else{if(!(qe(c)&&c.length>=2))throw new TypeError(Te("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(De(e)){if(n){for(f=e.length,u=e.get&&e.set?Ur("default"):Mr("default"),s=0;s<f;s++)if(!kr(u(e,s))){l=!0;break}if(l){if(!Vr(f))throw new RangeError(Te("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(kr(c=n.call(r,u(e,s),s)))o[y]=Br(c),o[y+1]=Ir(c);else{if(!(qe(c)&&c.length>=2))throw new TypeError(Te("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(er(e)&&Gr&&Er(e[Rr])){if(!Er((o=e[Rr]()).next))throw new TypeError(Te("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Yr(o,n,r):Pr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(Te("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Be(qr,"of",(function(){var e,r;if(!Er(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Sr(qr.prototype,"buffer",(function(){return this._buffer.buffer})),Sr(qr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Sr(qr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Be(qr.prototype,"BYTES_PER_ELEMENT",qr.BYTES_PER_ELEMENT),Be(qr.prototype,"copyWithin",(function(e,r){if(!Zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Be(qr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Be(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new jr(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),Be(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Rr&&Be(t,Rr,(function(){return r.entries()})),t})),Be(qr.prototype,"get",(function(e){var r;if(!Zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Xe(e))throw new TypeError(Te("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new jr((r=this._buffer)[e*=2],r[e+1])})),Sr(qr.prototype,"length",(function(){return this._length})),Be(qr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Xe(t=arguments[1]))throw new TypeError(Te("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(kr(e)){if(t>=this._length)throw new RangeError(Te("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Br(e),void(n[t+1]=Ir(e))}if(Zr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*$r,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new m(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!De(e))throw new TypeError(Te("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!kr(e[f])){o=!0;break}if(o){if(!Vr(a))throw new RangeError(Te("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*$r,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new m(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Br(u),n[t+1]=Ir(u),t+=2}}));var rt=2*s.BYTES_PER_ELEMENT,tt=Lr();function nt(e){return e instanceof ut||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function it(e){return e===ut||"Complex64Array"===e.name}function ot(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===rt/2}function at(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===rt}function ut(){var e,r,t,n;if(r=arguments.length,!(this instanceof ut))return 0===r?new ut:1===r?new ut(arguments[0]):2===r?new ut(arguments[0],arguments[1]):new ut(arguments[0],arguments[1],arguments[2]);if(0===r)t=new s(0);else if(1===r)if(Xe(arguments[0]))t=new s(2*arguments[0]);else if(De(arguments[0]))if((n=(t=arguments[0]).length)&&Qe(t)&&kr(t[0])){if(null===(t=et(new s(2*n),t))){if(!Vr(n))throw new RangeError(Te("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new s(arguments[0])}}else{if(ot(t))t=Cr(t,0);else if(at(t))t=Or(t,0);else if(!Vr(n))throw new RangeError(Te("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new s(t)}else if(Ke(arguments[0])){if(!Ye((t=arguments[0]).byteLength/rt))throw new RangeError(Te("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",rt,t.byteLength));t=new s(t)}else{if(!er(arguments[0]))throw new TypeError(Te("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===tt)throw new TypeError(Te("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Er(t[Rr]))throw new TypeError(Te("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Er((t=t[Rr]()).next))throw new TypeError(Te("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Kr(t))instanceof Error)throw t;t=new s(t)}else{if(!Ke(t=arguments[0]))throw new TypeError(Te("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Xe(e=arguments[1]))throw new TypeError(Te("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Ye(e/rt))throw new RangeError(Te("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",rt,e));if(2===r){if(!Ye((n=t.byteLength-e)/rt))throw new RangeError(Te("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",rt,n));t=new s(t,e)}else{if(!Xe(n=arguments[2]))throw new TypeError(Te("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*rt>t.byteLength-e)throw new RangeError(Te("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*rt));t=new s(t,e,2*n)}}return Be(this,"_buffer",t),Be(this,"_length",t.length/2),this}Be(ut,"BYTES_PER_ELEMENT",rt),Be(ut,"name","Complex128Array"),Be(ut,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Er(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Er(n=arguments[1]))throw new TypeError(Te("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(nt(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(kr(c=n.call(r,e.get(s),s)))o[y]=Dr(c),o[y+1]=Hr(c);else{if(!(qe(c)&&c.length>=2))throw new TypeError(Te("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(De(e)){if(n){for(f=e.length,u=e.get&&e.set?Ur("default"):Mr("default"),s=0;s<f;s++)if(!kr(u(e,s))){l=!0;break}if(l){if(!Vr(f))throw new RangeError(Te("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(kr(c=n.call(r,u(e,s),s)))o[y]=Dr(c),o[y+1]=Hr(c);else{if(!(qe(c)&&c.length>=2))throw new TypeError(Te("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(er(e)&&tt&&Er(e[Rr])){if(!Er((o=e[Rr]()).next))throw new TypeError(Te("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Qr(o,n,r):Kr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(Te("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Be(ut,"of",(function(){var e,r;if(!Er(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Sr(ut.prototype,"buffer",(function(){return this._buffer.buffer})),Sr(ut.prototype,"byteLength",(function(){return this._buffer.byteLength})),Sr(ut.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Be(ut.prototype,"BYTES_PER_ELEMENT",ut.BYTES_PER_ELEMENT),Be(ut.prototype,"copyWithin",(function(e,r){if(!nt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Be(ut.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!nt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Be(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Ar(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),Be(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Rr&&Be(t,Rr,(function(){return r.entries()})),t})),Be(ut.prototype,"get",(function(e){var r;if(!nt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Xe(e))throw new TypeError(Te("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Ar((r=this._buffer)[e*=2],r[e+1])})),Sr(ut.prototype,"length",(function(){return this._length})),Be(ut.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!nt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Xe(t=arguments[1]))throw new TypeError(Te("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(kr(e)){if(t>=this._length)throw new RangeError(Te("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Dr(e),void(n[t+1]=Hr(e))}if(nt(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*rt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new s(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!De(e))throw new TypeError(Te("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!kr(e[f])){o=!0;break}if(o){if(!Vr(a))throw new RangeError(Te("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*rt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new s(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Dr(u),n[t+1]=Hr(u),t+=2}}));var ft={float64:s,float32:m,int16:d,int32:_,int8:V,uint16:B,uint32:F,uint8:P,uint8c:G,complex64:qr,complex128:ut};return function(e){return ft[e]||null}}));
//# sourceMappingURL=index.js.map
