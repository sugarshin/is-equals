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
export default function isEquals(...args) {
  return args.every((arg, i, array) => i === 0 ? true : arg === array[i - 1]);
}
