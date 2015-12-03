"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEquals;
/*!
 * @license is-equals
 * (c) sugarshin
 * License: MIT
 */

/**
 *
 * @param {...any} args
 * @returns {Boolean}
 */
function isEquals() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.every(function (arg, i, array) {
    return i === 0 ? true : arg === array[i - 1];
  });
}
