'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyWrapper = function (_Component) {
    _inherits(LazyWrapper, _Component);

    function LazyWrapper() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LazyWrapper);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LazyWrapper.__proto__ || Object.getPrototypeOf(LazyWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.handleScroll = function (e) {
            if (_this.props.onWindowScroll) _this.props.onWindowScroll(e);
        }, _this.handleResize = function (e) {
            if (_this.props.onWindowResize) _this.props.onWindowResize(e);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LazyWrapper, [{
        key: 'render',
        value: function render(_ref2) {
            var children = _ref2.children,
                props = _objectWithoutProperties(_ref2, ['children']);

            var className = 'preact-lazy-img-wrapper' + (props.className ? ' ' + props.className : '');

            return (0, _preact.h)(
                'div',
                _extends({}, props, { className: className }),
                children
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.onWindowScroll) window.addEventListener('scroll', this.handleScroll);
            if (this.props.onWindowResize) window.addEventListener('resize', this.handleResize);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.onWindowScroll) window.removeEventListener('scroll', this.handleScroll);
            if (this.props.onWindowResize) window.removeEventListener('resize', this.handleResize);
        }
    }]);

    return LazyWrapper;
}(_preact.Component);

exports.default = LazyWrapper;