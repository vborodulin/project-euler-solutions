/*
 * Solution to Project Euler problem 230
 * https://projecteuler.net/problem=230
 *
 */

/**
 * Solution algorithm:
 * 1. Determine step of fibonacci iteration in which string is going to be long enough.
 * 2. Disassemble string until we have he equivalent location of the digit
 * in the 3rd iteration(A+B)
 *
 */

/**
 * Disassemble string algorithm
 * String at nth iteration we can get as Fab = Fab(n-2) + Fab(n-1).
 * So we can translate index at nth iteration to the corresponding index at the (n-1)th iteration
 * There are two cases:
 *
 * 1. index > Fab(n-2) -> subtract length Fab(n-2) to the index
 * 2. index < Fab(n-2) -> skip step
 */

/**
 * find length of result string for fibonacci word on specified step
 *
 * @param {string} a - string a
 * @param {string} b - string b
 * @param {number} step - number of step
 * @return {number}
 */
const findLengthForStep = (a, b, step) => {
  if (step === 1) {
    return a.length;
  }

  if (step === 2) {
    return b.length;
  }

  let aLen = a.length;
  let bLen = b.length;
  let i = 2;

  while (i < step) {
    [aLen, bLen] = [bLen, aLen + bLen];
    i++;
  }

  return bLen;
};

/**
 * find fibonacci step for getting string includes index n
 *
 * @param {string} a - string a
 * @param {string} b - string b
 * @param {number} n - index of searching char
 * @return {number}
 */
const findStep = (a, b, n) => {
  if (n === 1) {
    return 1;
  }

  let aLen = a.length;
  let bLen = b.length;
  let c = 0;
  let res = 2;

  while (c < n) {
    c = aLen + bLen;
    [aLen, bLen] = [bLen, c];
    res++;
  }

  return res;
};

/**
 *
 * @param {string} a - string a
 * @param {string} b - string b
 * @param {number} n - index of searching char
 * @return {string}
 */
const main = (a, b, n) => {
  let step = findStep(a, b, n);

  while (step > 2) {
    const l = findLengthForStep(a, b, step - 2);

    if (n > l) {
      n = n - l;
    } else {
      step--;
    }
    step--;
  }

  if (step === 1) {
    return a[n - 1];
  } else {
    return b[n - 1];
  }
};
