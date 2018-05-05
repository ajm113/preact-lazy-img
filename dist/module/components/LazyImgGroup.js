'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _preact2 = _interopRequireDefault(_preact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyImgGroup = function (_Preact$Component) {
    _inherits(LazyImgGroup, _Preact$Component);

    function LazyImgGroup(props) {
        _classCallCheck(this, LazyImgGroup);

        var _this = _possibleConstructorReturn(this, (LazyImgGroup.__proto__ || Object.getPrototypeOf(LazyImgGroup)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(LazyImgGroup, [{
        key: 'render',
        value: function render() {}
    }]);

    return LazyImgGroup;
}(_preact2.default.Component);

LazyImgGroup.defaultProps = {
    cushion: 0,
    placeholder: '',
    unloadOnHidden: true
};
exports.default = LazyImgGroup;