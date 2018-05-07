!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.preactLazyImg=t():e.preactLazyImg=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports
var r=n[o]={i:o,l:!1,exports:{}}
return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={}
return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e}
return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=2)}([function(e,t,n){"use strict"
function o(){}function r(e,t){var n,r,i,l,u=I
for(l=arguments.length;l-- >2;)T.push(arguments[l])
for(t&&null!=t.children&&(T.length||T.push(t.children),delete t.children);T.length;)if((r=T.pop())&&void 0!==r.pop)for(l=r.length;l--;)T.push(r[l])
else"boolean"==typeof r&&(r=null),(i="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(i=!1)),i&&n?u[u.length-1]+=r:u===I?u=[r]:u.push(r),n=i
var a=new o
return a.nodeName=e,a.children=u,a.attributes=null==t?void 0:t,a.key=null==t?void 0:t.key,void 0!==W.vnode&&W.vnode(a),a}function i(e,t){for(var n in t)e[n]=t[n]
return e}function l(e,t){return r(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function u(e){!e._dirty&&(e._dirty=!0)&&1==B.push(e)&&(W.debounceRendering||R)(a)}function a(){var e,t=B
for(B=[];e=t.pop();)e._dirty&&P(e)}function c(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&s(e,t.nodeName):n||e._componentConstructor===t.nodeName}function s(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function p(e){var t=i({},e.attributes)
t.children=e.children
var n=e.nodeName.defaultProps
if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o])
return t}function f(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e)
return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode
t&&t.removeChild(e)}function y(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e)
else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"===(void 0===o?"undefined":M(o))){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="")
for(var i in o)e.style[i]="number"==typeof o[i]&&!1===U.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"")
else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""))
t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,m,l):e.removeEventListener(t,m,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)v(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t)
else{var u=r&&t!==(t=t.replace(/^xlink:?/,""))
null==o||!1===o?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(u?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function v(e,t,n){try{e[t]=n}catch(e){}}function m(e){return this._listeners[e.type](W.event&&W.event(e)||e)}function b(){for(var e;e=V.pop();)W.afterMount&&W.afterMount(e),e.componentDidMount&&e.componentDidMount()}function h(e,t,n,o,r,i){A++||(D=null!=r&&void 0!==r.ownerSVGElement,H=null!=e&&!("__preactattr_"in e))
var l=_(e,t,n,o,i)
return r&&l.parentNode!==r&&r.appendChild(l),--A||(H=!1,i||b()),l}function _(e,t,n,o,r){var i=e,l=D
if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),w(e,!0))),i.__preactattr_=!0,i
var u=t.nodeName
if("function"==typeof u)return N(e,t,n,o)
if(D="svg"===u||"foreignObject"!==u&&D,u=String(u),(!e||!s(e,u))&&(i=f(u,D),e)){for(;e.firstChild;)i.appendChild(e.firstChild)
e.parentNode&&e.parentNode.replaceChild(i,e),w(e,!0)}var a=i.firstChild,c=i.__preactattr_,p=t.children
if(null==c){c=i.__preactattr_={}
for(var d=i.attributes,y=d.length;y--;)c[d[y].name]=d[y].value}return!H&&p&&1===p.length&&"string"==typeof p[0]&&null!=a&&void 0!==a.splitText&&null==a.nextSibling?a.nodeValue!=p[0]&&(a.nodeValue=p[0]):(p&&p.length||null!=a)&&g(i,p,n,o,H||null!=c.dangerouslySetInnerHTML),S(i,t.attributes,c),D=l,i}function g(e,t,n,o,r){var i,l,u,a,s,p=e.childNodes,f=[],y={},v=0,m=0,b=p.length,h=0,g=t?t.length:0
if(0!==b)for(var C=0;C<b;C++){var S=p[C],x=S.__preactattr_,O=g&&x?S._component?S._component.__key:x.key:null
null!=O?(v++,y[O]=S):(x||(void 0!==S.splitText?!r||S.nodeValue.trim():r))&&(f[h++]=S)}if(0!==g)for(var C=0;C<g;C++){a=t[C],s=null
var O=a.key
if(null!=O)v&&void 0!==y[O]&&(s=y[O],y[O]=void 0,v--)
else if(!s&&m<h)for(i=m;i<h;i++)if(void 0!==f[i]&&c(l=f[i],a,r)){s=l,f[i]=void 0,i===h-1&&h--,i===m&&m++
break}s=_(s,a,n,o),u=p[C],s&&s!==e&&s!==u&&(null==u?e.appendChild(s):s===u.nextSibling?d(u):e.insertBefore(s,u))}if(v)for(var C in y)void 0!==y[C]&&w(y[C],!1)
for(;m<=h;)void 0!==(s=f[h--])&&w(s,!1)}function w(e,t){var n=e._component
n?z(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),C(e))}function C(e){for(e=e.lastChild;e;){var t=e.previousSibling
w(e,!0),e=t}}function S(e,t,n){var o
for(o in n)t&&null!=t[o]||null==n[o]||y(e,o,n[o],n[o]=void 0,D)
for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||y(e,o,n[o],n[o]=t[o],D)}function x(e){var t=e.constructor.name;(G[t]||(G[t]=[])).push(e)}function O(e,t,n){var o,r=G[e.name]
if(e.prototype&&e.prototype.render?(o=new e(t,n),E.call(o,t,n)):(o=new E(t,n),o.constructor=e,o.render=j),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1)
break}return o}function j(e,t,n){return this.constructor(e,n)}function k(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===W.syncComponentUpdates&&e.base?u(e):P(e,1,r)),e.__ref&&e.__ref(e))}function P(e,t,n,o){if(!e._disable){var r,l,u,a=e.props,c=e.state,s=e.context,f=e.prevProps||a,d=e.prevState||c,y=e.prevContext||s,v=e.base,m=e.nextBase,_=v||m,g=e._component,C=!1
if(v&&(e.props=f,e.state=d,e.context=y,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(a,c,s)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(a,c,s),e.props=a,e.state=c,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!C){r=e.render(a,c,s),e.getChildContext&&(s=i(i({},s),e.getChildContext()))
var S,x,j=r&&r.nodeName
if("function"==typeof j){var N=p(r)
l=g,l&&l.constructor===j&&N.key==l.__key?k(l,N,1,s,!1):(S=l,e._component=l=O(j,N,s),l.nextBase=l.nextBase||m,l._parentComponent=e,k(l,N,0,s,!1),P(l,1,n,!0)),x=l.base}else u=_,S=g,S&&(u=e._component=null),(_||1===t)&&(u&&(u._component=null),x=h(u,r,s,n||!v,_&&_.parentNode,!0))
if(_&&x!==_&&l!==g){var E=_.parentNode
E&&x!==E&&(E.replaceChild(x,_),S||(_._component=null,w(_,!1)))}if(S&&z(S),e.base=x,x&&!o){for(var L=e,M=e;M=M._parentComponent;)(L=M).base=x
x._component=L,x._componentConstructor=L.constructor}}if(!v||n?V.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(f,d,y),W.afterUpdate&&W.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e)
A||o||b()}}function N(e,t,n,o){for(var r=e&&e._component,i=r,l=e,u=r&&e._componentConstructor===t.nodeName,a=u,c=p(t);r&&!a&&(r=r._parentComponent);)a=r.constructor===t.nodeName
return r&&a&&(!o||r._component)?(k(r,c,3,n,o),e=r.base):(i&&!u&&(z(i),e=l=null),r=O(t.nodeName,c,n),e&&!r.nextBase&&(r.nextBase=e,l=null),k(r,c,1,n,o),e=r.base,l&&e!==l&&(l._component=null,w(l,!1))),e}function z(e){W.beforeUnmount&&W.beforeUnmount(e)
var t=e.base
e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null
var n=e._component
n?z(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),x(e),C(t)),e.__ref&&e.__ref(null)}function E(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function L(e,t,n){return h(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0})
var M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W={},T=[],I=[],R="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,U=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,B=[],V=[],A=0,D=!1,H=!1,G={}
i(E.prototype,{setState:function(e,t){var n=this.state
this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),u(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),P(this,2)},render:function(){}})
var $={h:r,createElement:r,cloneElement:l,Component:E,render:L,rerender:a,options:W}
t.default=$,t.h=r,t.createElement=r,t.cloneElement=l,t.Component=E,t.render=L,t.rerender=a,t.options=W},function(e,t,n){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":l(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":l(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var u=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0
try{for(var l,u=e[Symbol.iterator]();!(o=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(0),s=n(3),p={passive:!0},f=function(e){function t(){var e,n,i,l
o(this,t)
for(var u=arguments.length,a=Array(u),c=0;c<u;c++)a[c]=arguments[c]
return n=i=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i.update=function(e){switch(e.type){case"scroll":if(i.props.onWindowScroll)return(0,s.debounce)(i.props.onWindowScroll,50)(e)
case"resize":if(i.props.onWindowResize)return(0,s.debounce)(i.props.onWindowResize,50)(e)}},l=n,r(i,l)}return i(t,e),a(t,[{key:"render",value:function(e){var t=u(e.children,1),n=t[0]
return"function"==typeof n?n():n}},{key:"componentDidMount",value:function(){this.props.onWindowScroll&&addEventListener("scroll",this.update,p),this.props.onWindowResize&&addEventListener("resize",this.update,p)}},{key:"componentWillUnmount",value:function(){this.props.onWindowScroll&&removeEventListener("scroll",this.update,p),this.props.onWindowResize&&removeEventListener("resize",this.update,p)}}]),t}(c.Component)
t.default=f},function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LazyImgGroup=t.LazyImg=t.LazyImgWrapper=void 0
var r=n(1),i=o(r),l=n(4),u=o(l),a=n(5),c=o(a)
t.LazyImgWrapper=i.default,t.LazyImg=u.default,t.LazyImgGroup=c.default},function(e,t,n){"use strict"
function o(e,t){var n=this,o=arguments,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=0
return function(){var l=n,u=o,a=function(){i=0,r||e.apply(l,u)},c=r&&!i
clearTimeout(i),i=setTimeout(a,t),c&&e.apply(l,u)}}Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=o},function(e,t,n){"use strict"
function o(e,t){var n={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])
return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),p=n(1),f=function(e){return e&&e.__esModule?e:{default:e}}(p),d=function(e){function t(e){r(this,t)
var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.onScrollOrResize=function(e){n.setState({visible:n.isInViewport()})},n.state={visible:!1},n.el=null,n}return l(t,e),c(t,[{key:"render",value:function(e,t){var n=this,r=t.visible,i=o(e,[]),l=i.placeholder?i.placeholder:(0,s.h)("div",{ref:function(e){return n.el=e.base},style:{height:i.height},className:"lazyload-placeholder"})
return(0,s.h)(f.default,{onWindowScroll:this.onScrollOrResize,onWindowResize:this.onScrollOrResize},r?(0,s.h)("img",a({},i,{ref:function(e){return n.el=e.base}})):l)}},{key:"componentDidMount",value:function(){this.setState({visible:this.isInViewport()})}},{key:"isInViewport",value:function(){if(!this.el)return!1
var e=this.el.getBoundingClientRect().top
return e+this.props.cushion>=0&&e-this.props.cushion<=window.innerHeight}}]),t}(s.Component)
d.defaultProps={cushion:0,placeholder:"",unmountIfInvisible:!0,placeholderIfInvisible:!0},t.default=d},function(e,t,n){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":l(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":l(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),c=function(e){function t(e){o(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.state={},n}return i(t,e),u(t,[{key:"render",value:function(){}}]),t}(a.Component)
c.defaultProps={cushion:0,placeholder:"",unloadOnHidden:!0},t.default=c}])})

//# sourceMappingURL=preact-lazy-img.js.map