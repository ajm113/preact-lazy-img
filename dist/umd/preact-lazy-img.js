!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PreactLazyImg=t():e.PreactLazyImg=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports
var r=n[o]={i:o,l:!1,exports:{}}
return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={}
return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e}
return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=0)}([function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.LazyImg=void 0
var o=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(o)
t.LazyImg=r.default},function(e,t,n){"use strict"
function o(e,t){var n={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])
return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":a(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":a(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=n(2),s=function(e){return e&&e.__esModule?e:{default:e}}(p),f=function(e){function t(e){r(this,t)
var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.shouldComponentUpdate=function(){return n.state.visible},n.state={},n}return l(t,e),c(t,[{key:"render",value:function(e,t){var n=this,r=(t.visible,o(e,[]))
return this.visible?h("img",u({ref:function(e){return n.el=e}},r)):r.placeholder?r.placeholder:h("div",{style:{height:r.height},className:"lazyload-placeholder"})}},{key:"checkIfInViewport",value:function(){if(!this.el)return!1
var e=this.el.getBoundingClientRect().top
return e+this.prop.cushion>=0&&e-this.prop.cushion<=window.innerHeight}}]),t}(s.default.Component)
f.defaultProps={cushion:0,visible:!0,placeholder:"",unmountIfInvisible:!0,placeholderIfInvisible:!0},t.default=f},function(e,t,n){"use strict"
function o(){}function r(e,t){var n,r,i,l,a=B
for(l=arguments.length;l-- >2;)I.push(arguments[l])
for(t&&null!=t.children&&(I.length||I.push(t.children),delete t.children);I.length;)if((r=I.pop())&&void 0!==r.pop)for(l=r.length;l--;)I.push(r[l])
else"boolean"==typeof r&&(r=null),(i="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(i=!1)),i&&n?a[a.length-1]+=r:a===B?a=[r]:a.push(r),n=i
var u=new o
return u.nodeName=e,u.children=a,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==E.vnode&&E.vnode(u),u}function i(e,t){for(var n in t)e[n]=t[n]
return e}function l(e,t){return r(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function a(e){!e._dirty&&(e._dirty=!0)&&1==V.push(e)&&(E.debounceRendering||z)(u)}function u(){var e,t=V
for(V=[];e=t.pop();)e._dirty&&O(e)}function c(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&p(e,t.nodeName):n||e._componentConstructor===t.nodeName}function p(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function s(e){var t=i({},e.attributes)
t.children=e.children
var n=e.nodeName.defaultProps
if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o])
return t}function f(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e)
return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode
t&&t.removeChild(e)}function v(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e)
else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"===(void 0===o?"undefined":T(o))){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="")
for(var i in o)e.style[i]="number"==typeof o[i]&&!1===W.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"")
else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""))
t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,_,l):e.removeEventListener(t,_,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)m(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t)
else{var a=r&&t!==(t=t.replace(/^xlink:?/,""))
null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function m(e,t,n){try{e[t]=n}catch(e){}}function _(e){return this._listeners[e.type](E.event&&E.event(e)||e)}function h(){for(var e;e=A.pop();)E.afterMount&&E.afterMount(e),e.componentDidMount&&e.componentDidMount()}function y(e,t,n,o,r,i){H++||(R=null!=r&&void 0!==r.ownerSVGElement,D=null!=e&&!("__preactattr_"in e))
var l=b(e,t,n,o,i)
return r&&l.parentNode!==r&&r.appendChild(l),--H||(D=!1,i||h()),l}function b(e,t,n,o,r){var i=e,l=R
if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),C(e,!0))),i.__preactattr_=!0,i
var a=t.nodeName
if("function"==typeof a)return j(e,t,n,o)
if(R="svg"===a||"foreignObject"!==a&&R,a=String(a),(!e||!p(e,a))&&(i=f(a,R),e)){for(;e.firstChild;)i.appendChild(e.firstChild)
e.parentNode&&e.parentNode.replaceChild(i,e),C(e,!0)}var u=i.firstChild,c=i.__preactattr_,s=t.children
if(null==c){c=i.__preactattr_={}
for(var d=i.attributes,v=d.length;v--;)c[d[v].name]=d[v].value}return!D&&s&&1===s.length&&"string"==typeof s[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=s[0]&&(u.nodeValue=s[0]):(s&&s.length||null!=u)&&g(i,s,n,o,D||null!=c.dangerouslySetInnerHTML),w(i,t.attributes,c),R=l,i}function g(e,t,n,o,r){var i,l,a,u,p,s=e.childNodes,f=[],v={},m=0,_=0,h=s.length,y=0,g=t?t.length:0
if(0!==h)for(var x=0;x<h;x++){var w=s[x],N=w.__preactattr_,k=g&&N?w._component?w._component.__key:N.key:null
null!=k?(m++,v[k]=w):(N||(void 0!==w.splitText?!r||w.nodeValue.trim():r))&&(f[y++]=w)}if(0!==g)for(var x=0;x<g;x++){u=t[x],p=null
var k=u.key
if(null!=k)m&&void 0!==v[k]&&(p=v[k],v[k]=void 0,m--)
else if(!p&&_<y)for(i=_;i<y;i++)if(void 0!==f[i]&&c(l=f[i],u,r)){p=l,f[i]=void 0,i===y-1&&y--,i===_&&_++
break}p=b(p,u,n,o),a=s[x],p&&p!==e&&p!==a&&(null==a?e.appendChild(p):p===a.nextSibling?d(a):e.insertBefore(p,a))}if(m)for(var x in v)void 0!==v[x]&&C(v[x],!1)
for(;_<=y;)void 0!==(p=f[y--])&&C(p,!1)}function C(e,t){var n=e._component
n?M(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),x(e))}function x(e){for(e=e.lastChild;e;){var t=e.previousSibling
C(e,!0),e=t}}function w(e,t,n){var o
for(o in n)t&&null!=t[o]||null==n[o]||v(e,o,n[o],n[o]=void 0,R)
for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||v(e,o,n[o],n[o]=t[o],R)}function N(e){var t=e.constructor.name;($[t]||($[t]=[])).push(e)}function k(e,t,n){var o,r=$[e.name]
if(e.prototype&&e.prototype.render?(o=new e(t,n),L.call(o,t,n)):(o=new L(t,n),o.constructor=e,o.render=S),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1)
break}return o}function S(e,t,n){return this.constructor(e,n)}function P(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===E.syncComponentUpdates&&e.base?a(e):O(e,1,r)),e.__ref&&e.__ref(e))}function O(e,t,n,o){if(!e._disable){var r,l,a,u=e.props,c=e.state,p=e.context,f=e.prevProps||u,d=e.prevState||c,v=e.prevContext||p,m=e.base,_=e.nextBase,b=m||_,g=e._component,x=!1
if(m&&(e.props=f,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,c,p)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(u,c,p),e.props=u,e.state=c,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){r=e.render(u,c,p),e.getChildContext&&(p=i(i({},p),e.getChildContext()))
var w,N,S=r&&r.nodeName
if("function"==typeof S){var j=s(r)
l=g,l&&l.constructor===S&&j.key==l.__key?P(l,j,1,p,!1):(w=l,e._component=l=k(S,j,p),l.nextBase=l.nextBase||_,l._parentComponent=e,P(l,j,0,p,!1),O(l,1,n,!0)),N=l.base}else a=b,w=g,w&&(a=e._component=null),(b||1===t)&&(a&&(a._component=null),N=y(a,r,p,n||!m,b&&b.parentNode,!0))
if(b&&N!==b&&l!==g){var L=b.parentNode
L&&N!==L&&(L.replaceChild(N,b),w||(b._component=null,C(b,!1)))}if(w&&M(w),e.base=N,N&&!o){for(var U=e,T=e;T=T._parentComponent;)(U=T).base=N
N._component=U,N._componentConstructor=U.constructor}}if(!m||n?A.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(f,d,v),E.afterUpdate&&E.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e)
H||o||h()}}function j(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,u=a,c=s(t);r&&!u&&(r=r._parentComponent);)u=r.constructor===t.nodeName
return r&&u&&(!o||r._component)?(P(r,c,3,n,o),e=r.base):(i&&!a&&(M(i),e=l=null),r=k(t.nodeName,c,n),e&&!r.nextBase&&(r.nextBase=e,l=null),P(r,c,1,n,o),e=r.base,l&&e!==l&&(l._component=null,C(l,!1))),e}function M(e){E.beforeUnmount&&E.beforeUnmount(e)
var t=e.base
e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null
var n=e._component
n?M(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),N(e),x(t)),e.__ref&&e.__ref(null)}function L(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function U(e,t,n){return y(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0})
var T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E={},I=[],B=[],z="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,W=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,V=[],A=[],H=0,R=!1,D=!1,$={}
i(L.prototype,{setState:function(e,t){var n=this.state
this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),a(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),O(this,2)},render:function(){}})
var G={h:r,createElement:r,cloneElement:l,Component:L,render:U,rerender:u,options:E}
t.default=G,t.h=r,t.createElement=r,t.cloneElement=l,t.Component=L,t.render=U,t.rerender=u,t.options=E}])})

//# sourceMappingURL=preact-lazy-img.js.map