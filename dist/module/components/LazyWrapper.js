'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _debounce = require('../utils/debounce');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OPTIONS = { passive: true };

var LazyWrapper = function (_Component) {
    _inherits(LazyWrapper, _Component);

    function LazyWrapper() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LazyWrapper);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LazyWrapper.__proto__ || Object.getPrototypeOf(LazyWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.windowResizeEvent = function (e) {
            if (_this.props.onWindowResize) return (0, _debounce.debounce)(_this.props.onWindowResize, 100)(e);
        }, _this.windowScrollEvent = function (e) {
            if (_this.props.onWindowScroll) return (0, _debounce.debounce)(_this.props.onWindowScroll, 100)(e);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LazyWrapper, [{
        key: 'render',
        value: function render(_ref2) {
            var _ref2$children = _slicedToArray(_ref2.children, 1),
                child = _ref2$children[0];

            return typeof child === 'function' ? child() : child;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.onWindowScroll) addEventListener('scroll', this.windowScrollEvent, OPTIONS);
            if (this.props.onWindowResize) addEventListener('resize', this.windowResizeEvent, OPTIONS);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.onWindowScroll) removeEventListener('scroll', this.windowScrollEvent, OPTIONS);
            if (this.props.onWindowResize) removeEventListener('resize', this.windowResizeEvent, OPTIONS);
        }
    }]);

    return LazyWrapper;
}(_preact.Component);

exports.default = LazyWrapper;