"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debounce = debounce;
function debounce(func, wait) {
    var _this = this,
        _arguments = arguments;

    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var timeout = 0;

    return function () {
        var context = _this,
            args = _arguments;
        var later = function later() {
            timeout = 0;

            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}