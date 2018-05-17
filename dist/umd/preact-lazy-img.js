!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("preact")):"function"==typeof define&&define.amd?define(["preact"],t):"object"==typeof exports?exports.preactLazyImg=t(require("preact")):e.preactLazyImg=t(e.preact)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(r){if(n[r])return n[r].exports
var o=n[r]={i:r,l:!1,exports:{}}
return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={}
return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e}
return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict"
function r(e,t){var n=this,r=arguments,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=0
return function(){var u=n,l=r,a=function(){i=0,o||e.apply(u,l)},c=o&&!i
clearTimeout(i),i=setTimeout(a,t),c&&e.apply(u,l)}}function o(e,t){if(!e)return!1
var n=e.getBoundingClientRect().top
return e.getBoundingClientRect().bottom+t>=0&&n-t<=window.innerHeight}Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=r,t.isInViewport=o
t.noop=function(){}},function(e,t,n){"use strict"
function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":l(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":l(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),s=n(1),p=function(e){function t(e){o(this,t)
var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.state={visible:!1},n.el=null,n}return u(t,e),c(t,[{key:"checkIfImgIsInView",value:function(){this.el&&this.setState({visible:(0,s.isInViewport)(this.el,this.props.cushion)})}},{key:"shouldComponentUpdate",value:function(e,t){var n=t.visible
return r(e),n!==this.state.visible}},{key:"render",value:function(e){var t=this,n="lazyload-placeholder "+e.className,r=e.placeholder?e.placeholder:(0,f.h)("div",a({},e,{style:{height:e.height},className:n,ref:function(e){return t.el=e}}))
return this.state.visible?(0,f.h)("img",a({},e,{ref:function(e){return t.el=e}})):r}},{key:"componentDidMount",value:function(){this.checkIfImgIsInView()}}]),t}(f.Component)
p.displayName="LazyImg",p.defaultProps={className:"",el:null,cushion:0,placeholderIfInvisible:!0,placeholder:null},t.default=p},function(e,t,n){"use strict"
function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LazyImg=t.LazyImgWrapper=void 0
var o=n(4),i=r(o),u=n(2),l=r(u)
t.LazyImgWrapper=i.default,t.LazyImg=l.default},function(e,t,n){"use strict"
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),c=n(1),f=n(2),s=function(e){return e&&e.__esModule?e:{default:e}}(f),p=function(e){function t(e){r(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return n.windowEvents=["scroll","resize","touchmove"],n.ref={wrapper:null,children:[]},n.windowChangeEvent=function(e){return(0,c.debounce)(function(){var e=(0,c.isInViewport)(n.ref.wrapper,n.props.cushion)
n.setState({visible:e}),n.state.visible&&n.ref.children&&n.ref.children.map(function(e){e.checkIfImgIsInView()})},100)(e)},n.shouldComponentUpdate=function(){return n.state.visible},n.state={visible:!1},n}return i(t,e),l(t,[{key:"render",value:function(e){var t=this,n=e.className,r=e.placeholderIfInvisible,o=e.cushion,i=e.placeholder,u=e.children
return(0,a.h)("div",{className:"lazyload-wrapper "+n,ref:function(e){return t.ref.wrapper=e}},u.map(function(e,n){var u=e.nodeName.hasOwnProperty("displayName")&&e.nodeName.displayName===s.default.displayName?{placeholder:i,cushion:o,placeholderIfInvisible:r,ref:function(e){t.ref.children[n]=e}}:{}
return(0,a.cloneElement)(e,u)}))}},{key:"componentDidMount",value:function(){var e=this
this.setState({visible:(0,c.isInViewport)(this.wrapperEl,this.props.cushion)}),this.state.visible&&this.ref.children&&this.ref.children.map(function(e){e.checkIfImgIsInView()}),this.windowEvents.map(function(t){return window.addEventListener(t,e.windowChangeEvent,!1)})}},{key:"componentWillUnmount",value:function(){var e=this
this.windowEvents.map(function(t){return window.removeEventListener(t,e.windowChangeEvent,!1)})}}]),t}(a.Component)
p.displayName="LazyImgWrapper",p.defaultProps={cushion:0,placeholderIfInvisible:!0,className:"",placeholder:null},t.default=p}])})

//# sourceMappingURL=preact-lazy-img.js.map