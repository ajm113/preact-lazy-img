!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("preact")):"function"==typeof define&&define.amd?define(["preact"],t):"object"==typeof exports?exports.preactLazyImg=t(require("preact")):e.preactLazyImg=t(e.preact)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports
var r=n[o]={i:o,l:!1,exports:{}}
return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={}
return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e}
return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=2)}([function(e,t,n){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var c=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0
try{for(var u,c=e[Symbol.iterator]();!(o=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),a=n(3),s={passive:!0},p=function(e){function t(){var e,n,i,u
o(this,t)
for(var c=arguments.length,l=Array(c),f=0;f<c;f++)l[f]=arguments[f]
return n=i=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.windowResizeEvent=function(e){if(i.props.onWindowResize)return(0,a.debounce)(i.props.onWindowResize,100)(e)},i.windowScrollEvent=function(e){if(i.props.onWindowScroll)return(0,a.debounce)(i.props.onWindowScroll,100)(e)},u=n,r(i,u)}return i(t,e),l(t,[{key:"render",value:function(e){var t=c(e.children,1),n=t[0]
return"function"==typeof n?n():n}},{key:"componentDidMount",value:function(){this.props.onWindowScroll&&addEventListener("scroll",this.windowScrollEvent,s),this.props.onWindowResize&&addEventListener("resize",this.windowResizeEvent,s)}},{key:"componentWillUnmount",value:function(){this.props.onWindowScroll&&removeEventListener("scroll",this.windowScrollEvent,s),this.props.onWindowResize&&removeEventListener("resize",this.windowResizeEvent,s)}}]),t}(f.Component)
t.default=p},function(t,n){t.exports=e},function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LazyImg=t.LazyImgWrapper=void 0
var r=n(0),i=o(r),u=n(4),c=o(u)
t.LazyImgWrapper=i.default,t.LazyImg=c.default},function(e,t,n){"use strict"
function o(e,t){var n=this,o=arguments,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=0
return function(){var u=n,c=o,l=function(){i=0,r||e.apply(u,c)},f=r&&!i
clearTimeout(i),i=setTimeout(l,t),f&&e.apply(u,c)}}Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=o},function(e,t,n){"use strict"
function o(e,t){var n={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])
return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),s=n(0),p=function(e){return e&&e.__esModule?e:{default:e}}(s),d=function(e){function t(e){r(this,t)
var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.onScrollOrResize=function(e){n.setState({visible:n.isInViewport()})},n.state={visible:!1},n.el=null,n}return u(t,e),f(t,[{key:"render",value:function(e,t){var n=this,r=t.visible,i=o(e,[]),u=i.placeholder?i.placeholder:(0,a.h)("div",{ref:function(e){return n.el=e},style:{height:i.height},className:"lazyload-placeholder"})
return(0,a.h)(p.default,{onWindowScroll:this.onScrollOrResize,onWindowResize:this.onScrollOrResize},r?(0,a.h)("img",l({},i,{ref:function(e){return n.el=e}})):"function"===u?u():u)}},{key:"componentDidMount",value:function(){this.setState({visible:this.isInViewport()})}},{key:"isInViewport",value:function(){if(!this.el)return!1
var e=this.el.getBoundingClientRect().top
return this.el.getBoundingClientRect().bottom+this.props.cushion>=0&&e-this.props.cushion<=window.innerHeight}}]),t}(a.Component)
d.defaultProps={cushion:0,placeholder:"",unmountIfInvisible:!0,placeholderIfInvisible:!0},t.default=d}])})

//# sourceMappingURL=preact-lazy-img.js.map