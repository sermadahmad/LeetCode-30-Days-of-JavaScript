/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

const argumentsLength = (...args) => args.length;

/**
 * argumentsLength(1, 2, 3); // 3
 */