!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.preactLazyImg=t():e.preactLazyImg=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports
var r=n[o]={i:o,l:!1,exports:{}}
return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={}
return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e}
return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=2)}([function(e,t,n){"use strict"
function o(){}function r(e,t){var n,r,i,l,a=I
for(l=arguments.length;l-- >2;)T.push(arguments[l])
for(t&&null!=t.children&&(T.length||T.push(t.children),delete t.children);T.length;)if((r=T.pop())&&void 0!==r.pop)for(l=r.length;l--;)T.push(r[l])
else"boolean"==typeof r&&(r=null),(i="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(i=!1)),i&&n?a[a.length-1]+=r:a===I?a=[r]:a.push(r),n=i
var u=new o
return u.nodeName=e,u.children=a,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==M.vnode&&M.vnode(u),u}function i(e,t){for(var n in t)e[n]=t[n]
return e}function l(e,t){return r(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function a(e){!e._dirty&&(e._dirty=!0)&&1==B.push(e)&&(M.debounceRendering||U)(u)}function u(){var e,t=B
for(B=[];e=t.pop();)e._dirty&&P(e)}function c(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&s(e,t.nodeName):n||e._componentConstructor===t.nodeName}function s(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function p(e){var t=i({},e.attributes)
t.children=e.children
var n=e.nodeName.defaultProps
if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o])
return t}function f(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e)
return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode
t&&t.removeChild(e)}function y(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e)
else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"===(void 0===o?"undefined":L(o))){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="")
for(var i in o)e.style[i]="number"==typeof o[i]&&!1===R.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"")
else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""))
t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,h,l):e.removeEventListener(t,h,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)v(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t)
else{var a=r&&t!==(t=t.replace(/^xlink:?/,""))
null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function v(e,t,n){try{e[t]=n}catch(e){}}function h(e){return this._listeners[e.type](M.event&&M.event(e)||e)}function m(){for(var e;e=V.pop();)M.afterMount&&M.afterMount(e),e.componentDidMount&&e.componentDidMount()}function b(e,t,n,o,r,i){A++||(D=null!=r&&void 0!==r.ownerSVGElement,H=null!=e&&!("__preactattr_"in e))
var l=_(e,t,n,o,i)
return r&&l.parentNode!==r&&r.appendChild(l),--A||(H=!1,i||m()),l}function _(e,t,n,o,r){var i=e,l=D
if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),g(e,!0))),i.__preactattr_=!0,i
var a=t.nodeName
if("function"==typeof a)return k(e,t,n,o)
if(D="svg"===a||"foreignObject"!==a&&D,a=String(a),(!e||!s(e,a))&&(i=f(a,D),e)){for(;e.firstChild;)i.appendChild(e.firstChild)
e.parentNode&&e.parentNode.replaceChild(i,e),g(e,!0)}var u=i.firstChild,c=i.__preactattr_,p=t.children
if(null==c){c=i.__preactattr_={}
for(var d=i.attributes,y=d.length;y--;)c[d[y].name]=d[y].value}return!H&&p&&1===p.length&&"string"==typeof p[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=p[0]&&(u.nodeValue=p[0]):(p&&p.length||null!=u)&&w(i,p,n,o,H||null!=c.dangerouslySetInnerHTML),S(i,t.attributes,c),D=l,i}function w(e,t,n,o,r){var i,l,a,u,s,p=e.childNodes,f=[],y={},v=0,h=0,m=p.length,b=0,w=t?t.length:0
if(0!==m)for(var C=0;C<m;C++){var S=p[C],x=S.__preactattr_,O=w&&x?S._component?S._component.__key:x.key:null
null!=O?(v++,y[O]=S):(x||(void 0!==S.splitText?!r||S.nodeValue.trim():r))&&(f[b++]=S)}if(0!==w)for(var C=0;C<w;C++){u=t[C],s=null
var O=u.key
if(null!=O)v&&void 0!==y[O]&&(s=y[O],y[O]=void 0,v--)
else if(!s&&h<b)for(i=h;i<b;i++)if(void 0!==f[i]&&c(l=f[i],u,r)){s=l,f[i]=void 0,i===b-1&&b--,i===h&&h++
break}s=_(s,u,n,o),a=p[C],s&&s!==e&&s!==a&&(null==a?e.appendChild(s):s===a.nextSibling?d(a):e.insertBefore(s,a))}if(v)for(var C in y)void 0!==y[C]&&g(y[C],!1)
for(;h<=b;)void 0!==(s=f[b--])&&g(s,!1)}function g(e,t){var n=e._component
n?E(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),C(e))}function C(e){for(e=e.lastChild;e;){var t=e.previousSibling
g(e,!0),e=t}}function S(e,t,n){var o
for(o in n)t&&null!=t[o]||null==n[o]||y(e,o,n[o],n[o]=void 0,D)
for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||y(e,o,n[o],n[o]=t[o],D)}function x(e){var t=e.constructor.name;(G[t]||(G[t]=[])).push(e)}function O(e,t,n){var o,r=G[e.name]
if(e.prototype&&e.prototype.render?(o=new e(t,n),W.call(o,t,n)):(o=new W(t,n),o.constructor=e,o.render=j),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1)
break}return o}function j(e,t,n){return this.constructor(e,n)}function N(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===M.syncComponentUpdates&&e.base?a(e):P(e,1,r)),e.__ref&&e.__ref(e))}function P(e,t,n,o){if(!e._disable){var r,l,a,u=e.props,c=e.state,s=e.context,f=e.prevProps||u,d=e.prevState||c,y=e.prevContext||s,v=e.base,h=e.nextBase,_=v||h,w=e._component,C=!1
if(v&&(e.props=f,e.state=d,e.context=y,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,c,s)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(u,c,s),e.props=u,e.state=c,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!C){r=e.render(u,c,s),e.getChildContext&&(s=i(i({},s),e.getChildContext()))
var S,x,j=r&&r.nodeName
if("function"==typeof j){var k=p(r)
l=w,l&&l.constructor===j&&k.key==l.__key?N(l,k,1,s,!1):(S=l,e._component=l=O(j,k,s),l.nextBase=l.nextBase||h,l._parentComponent=e,N(l,k,0,s,!1),P(l,1,n,!0)),x=l.base}else a=_,S=w,S&&(a=e._component=null),(_||1===t)&&(a&&(a._component=null),x=b(a,r,s,n||!v,_&&_.parentNode,!0))
if(_&&x!==_&&l!==w){var W=_.parentNode
W&&x!==W&&(W.replaceChild(x,_),S||(_._component=null,g(_,!1)))}if(S&&E(S),e.base=x,x&&!o){for(var z=e,L=e;L=L._parentComponent;)(z=L).base=x
x._component=z,x._componentConstructor=z.constructor}}if(!v||n?V.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(f,d,y),M.afterUpdate&&M.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e)
A||o||m()}}function k(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,u=a,c=p(t);r&&!u&&(r=r._parentComponent);)u=r.constructor===t.nodeName
return r&&u&&(!o||r._component)?(N(r,c,3,n,o),e=r.base):(i&&!a&&(E(i),e=l=null),r=O(t.nodeName,c,n),e&&!r.nextBase&&(r.nextBase=e,l=null),N(r,c,1,n,o),e=r.base,l&&e!==l&&(l._component=null,g(l,!1))),e}function E(e){M.beforeUnmount&&M.beforeUnmount(e)
var t=e.base
e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null
var n=e._component
n?E(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),x(e),C(t)),e.__ref&&e.__ref(null)}function W(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function z(e,t,n){return b(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0})
var L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M={},T=[],I=[],U="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,R=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,B=[],V=[],A=0,D=!1,H=!1,G={}
i(W.prototype,{setState:function(e,t){var n=this.state
this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),a(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),P(this,2)},render:function(){}})
var $={h:r,createElement:r,cloneElement:l,Component:W,render:z,rerender:u,options:M}
t.default=$,t.h=r,t.createElement=r,t.cloneElement=l,t.Component=W,t.render=z,t.rerender=u,t.options=M},function(e,t,n){"use strict"
function o(e,t){var n={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])
return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":a(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":a(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),p=function(e){function t(){var e,n,o,l
r(this,t)
for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c]
return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.handleScroll=function(e){o.props.onWindowScroll&&o.props.onWindowScroll(e)},o.handleResize=function(e){o.props.onWindowResize&&o.props.onWindowResize(e)},l=n,i(o,l)}return l(t,e),c(t,[{key:"render",value:function(e){var t=e.children,n=o(e,["children"]),r="preact-lazy-img-wrapper"+(n.className?" "+n.className:"")
return(0,s.h)("div",u({},n,{className:r}),t)}},{key:"componentDidMount",value:function(){this.props.onWindowScroll&&window.addEventListener("scroll",this.handleScroll),this.props.onWindowResize&&window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){this.props.onWindowScroll&&window.removeEventListener("scroll",this.handleScroll),this.props.onWindowResize&&window.removeEventListener("resize",this.handleResize)}}]),t}(s.Component)
t.default=p},function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LazyImgGroup=t.LazyImg=t.LazyImgWrapper=void 0
var r=n(1),i=o(r),l=n(3),a=o(l),u=n(5),c=o(u)
t.LazyImgWrapper=i.default,t.LazyImg=a.default,t.LazyImgGroup=c.default},function(e,t,n){"use strict"
function o(e,t){var n={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])
return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":a(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":a(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),p=n(1),f=function(e){return e&&e.__esModule?e:{default:e}}(p),d=n(4),y=function(e){function t(e){r(this,t)
var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.onWindowScaleEvent=function(e){(0,d.debounce)(function(){n.setState({visible:n.isInViewport()})},50)()},n.shouldComponentUpdate=function(){return n.state.visible},n.state={visible:!1},n.el=null,n}return l(t,e),c(t,[{key:"render",value:function(e,t){var n=this,r=(t.visible,o(e,[]))
r.placeholder?r.placeholder:(0,s.h)("div",{style:{height:r.height},className:"lazyload-placeholder"})
return(0,s.h)(f.default,{onWindowScroll:this.onWindowScaleEvent,onWindowResize:this.onWindowScaleEvent},(0,s.h)("img",u({},r,{ref:function(e){return n.el=e}})))}},{key:"componentDidMount",value:function(){this.setState({visible:this.isInViewport()})}},{key:"isInViewport",value:function(){if(!this.el)return!1
var e=this.el.getBoundingClientRect().top
return e+this.props.cushion>=0&&e-this.props.cushion<=window.innerHeight}}]),t}(s.Component)
y.defaultProps={cushion:0,placeholder:"",unmountIfInvisible:!0,placeholderIfInvisible:!0},t.default=y},function(e,t,n){"use strict"
function o(e,t){var n=this,o=arguments,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=0
return function(){var l=n,a=o,u=function(){i=0,r||e.apply(l,a)},c=r&&!i
clearTimeout(i),i=setTimeout(u,t),c&&e.apply(l,a)}}Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=o},function(e,t,n){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":l(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":l(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),c=function(e){function t(e){o(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.state={},n}return i(t,e),a(t,[{key:"render",value:function(){}}]),t}(u.Component)
c.defaultProps={cushion:0,placeholder:"",unloadOnHidden:!0},t.default=c}])})

//# sourceMappingURL=preact-lazy-img.js.map