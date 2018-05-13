'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _utils = require('./utils');

var _LazyImg = require('./LazyImg');

var _LazyImg2 = _interopRequireDefault(_LazyImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EVENT_LISTEN_OPTIONS = false;

var WRAPPER_DIV_CLASSNAME = 'lazyload-wrapper';

var LazyImgWrapper = function (_Component) {
    _inherits(LazyImgWrapper, _Component);

    function LazyImgWrapper(props) {
        _classCallCheck(this, LazyImgWrapper);

        var _this = _possibleConstructorReturn(this, (LazyImgWrapper.__proto__ || Object.getPrototypeOf(LazyImgWrapper)).call(this, props));

        _this.windowEvents = ['scroll', 'resize', 'touchmove'];
        _this.ref = {
            wrapper: null,
            children: []
        };

        _this.windowChangeEvent = function (e) {
            return (0, _utils.debounce)(function () {
                var visible = (0, _utils.isInViewport)(_this.ref.wrapper, _this.props.cushion);

                _this.setState({ visible: visible });

                if (_this.state.visible && _this.ref.children) _this.ref.children.map(function (c) {
                    c.checkIfImgIsInView();
                });
            }, 100)(e);
        };

        _this.shouldComponentUpdate = function () {
            return _this.state.visible;
        };

        _this.state = {
            visible: false
        };
        return _this;
    }

    _createClass(LazyImgWrapper, [{
        key: 'render',
        value: function render(_ref) {
            var _this2 = this;

            var className = _ref.className,
                placeholderIfInvisible = _ref.placeholderIfInvisible,
                cushion = _ref.cushion,
                placeholder = _ref.placeholder,
                children = _ref.children;


            var mergedClassName = WRAPPER_DIV_CLASSNAME + ' ' + className;

            return (0, _preact.h)(
                'div',
                { className: mergedClassName, ref: function ref(el) {
                        return _this2.ref.wrapper = el;
                    } },
                children.map(function (child, index) {
                    var mergedProps = child.nodeName.hasOwnProperty('displayName') && child.nodeName.displayName === _LazyImg2.default.displayName ? {
                        placeholder: placeholder,
                        cushion: cushion,
                        placeholderIfInvisible: placeholderIfInvisible,
                        ref: function ref(el) {
                            _this2.ref.children[index] = el;
                        }
                    } : {};

                    return (0, _preact.cloneElement)(child, mergedProps);
                })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.setState({
                visible: (0, _utils.isInViewport)(this.wrapperEl, this.props.cushion)
            });

            if (this.state.visible && this.ref.children) this.ref.children.map(function (c) {
                c.checkIfImgIsInView();
            });

            this.windowEvents.map(function (e) {
                return window.addEventListener(e, _this3.windowChangeEvent, EVENT_LISTEN_OPTIONS);
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var _this4 = this;

            this.windowEvents.map(function (e) {
                return window.removeEventListener(e, _this4.windowChangeEvent, EVENT_LISTEN_OPTIONS);
            });
        }
    }]);

    return LazyImgWrapper;
}(_preact.Component);

LazyImgWrapper.displayName = 'LazyImgWrapper';
LazyImgWrapper.defaultProps = {
    cushion: 0,
    placeholderIfInvisible: true,
    className: '',
    placeholder: null
};
exports.default = LazyImgWrapper;