'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _utils = require('./utils');

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PLACEHOLDER_DIV_CLASSNAME = '';

var LazyImg = function (_Component) {
    _inherits(LazyImg, _Component);

    function LazyImg(props) {
        _classCallCheck(this, LazyImg);

        var _this = _possibleConstructorReturn(this, (LazyImg.__proto__ || Object.getPrototypeOf(LazyImg)).call(this, props));

        _this.state = {
            visible: false
        };


        _this.el = null;
        return _this;
    }

    _createClass(LazyImg, [{
        key: 'checkIfImgIsInView',
        value: function checkIfImgIsInView() {
            if (!this.el) return;

            this.setState({
                visible: (0, _utils.isInViewport)(this.el, this.props.cushion)
            });
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(_ref, _ref2) {
            var visible = _ref2.visible;

            _objectDestructuringEmpty(_ref);

            return visible !== this.state.visible;
        }
    }, {
        key: 'render',
        value: function render(props) {
            var _this2 = this;

            var mergedClassName = 'lazyload-placeholder ' + props.className;

            var placeholder = props.placeholder ? props.placeholder : (0, _preact.h)('div', _extends({}, props, { style: { height: props.height }, className: mergedClassName, ref: function ref(el) {
                    return _this2.el = el;
                } }));

            return this.state.visible ? (0, _preact.h)('img', _extends({}, props, { ref: function ref(el) {
                    return _this2.el = el;
                } })) : placeholder;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.checkIfImgIsInView();
        }
    }]);

    return LazyImg;
}(_preact.Component);

LazyImg.displayName = 'LazyImg';
LazyImg.defaultProps = {
    className: '',
    el: null,
    cushion: 0,
    placeholderIfInvisible: true,
    placeholder: null
};
exports.default = LazyImg;