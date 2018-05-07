'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _LazyWrapper = require('./LazyWrapper');

var _LazyWrapper2 = _interopRequireDefault(_LazyWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PLACEHOLDER_DIV_CLASSNAME = 'lazyload-placeholder';

var LazyImg = function (_Component) {
    _inherits(LazyImg, _Component);

    function LazyImg(props) {
        _classCallCheck(this, LazyImg);

        var _this = _possibleConstructorReturn(this, (LazyImg.__proto__ || Object.getPrototypeOf(LazyImg)).call(this, props));

        _this.onScrollOrResize = function (e) {
            _this.setState({
                visible: _this.isInViewport()
            });
        };

        _this.state = {
            visible: false
        };

        _this.el = null;
        return _this;
    }

    _createClass(LazyImg, [{
        key: 'render',
        value: function render(_ref, _ref2) {
            var _this2 = this;

            var visible = _ref2.visible;

            var props = _objectWithoutProperties(_ref, []);

            var placeholder = props.placeholder ? props.placeholder : (0, _preact.h)('div', { ref: function ref(el) {
                    return _this2.el = el.base;
                }, style: { height: props.height }, className: PLACEHOLDER_DIV_CLASSNAME });

            return (0, _preact.h)(
                _LazyWrapper2.default,
                { onWindowScroll: this.onScrollOrResize, onWindowResize: this.onScrollOrResize },
                visible ? (0, _preact.h)('img', _extends({}, props, { ref: function ref(el) {
                        return _this2.el = el.base;
                    } })) : placeholder
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                visible: this.isInViewport()
            });
        }
    }, {
        key: 'isInViewport',
        value: function isInViewport() {
            if (!this.el) return false;

            var top = this.el.getBoundingClientRect().top;
            return top + this.props.cushion >= 0 && top - this.props.cushion <= window.innerHeight;
        }
    }]);

    return LazyImg;
}(_preact.Component);

LazyImg.defaultProps = {
    cushion: 0,
    placeholder: '',
    unmountIfInvisible: true,
    placeholderIfInvisible: true
};
exports.default = LazyImg;