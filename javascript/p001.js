/*
 * Solution to Project Euler problem 001
 * https://projecteuler.net/problem=001
 *
 */

/**
 * Solution algorithm:
 * We can imagine sum of numbers multiplies of 3
 * as arithmetic progression like 3 * (1 + 2 + 3 + 4 + 5 ...)
 * and multiplies of 5 like 5 * (1 + 2 + 3 + 4 + 5 ...)
 * But for find sum of number multiplies of 3 or 5 we can imagine like
 * 3 * (1 + 2 + 3 + 4 + 5 ...) + 5 * (1 + 2 + 3 + 4 + 5 ...) - 15 (1 + 2 + 3 + 4 + 5 ...)
 * For calculate sum of arithmetic progression for n first items we can use formula
 * from wiki https://en.wikipedia.org/wiki/Arithmetic_progression
 */

/**
 *
 * @param d
 * @param n
 * @param a1
 * @return {bigint}
 */
const getNumSeqSum = (d, n, a1 = 0) => {
  d = BigInt(d);
  n = BigInt(n);
  a1 = BigInt(a1);

  return ((BigInt(2) * a1 + d * (n - BigInt(1))) * n / BigInt(2))
};

/**
 * @param {number} n
 * @return {number}
 */
const main = (n) => {
  n = n - 1;

  const num5SeqLength = Math.floor(n / 5);
  const num3SeqLength = Math.floor(n / 3);
  const num15SeqLength = Math.floor(n / 15);

  return getNumSeqSum(5, num5SeqLength, 5)
    + getNumSeqSum(3, num3SeqLength, 3)
    - getNumSeqSum(15, num15SeqLength, 15);
};

/**
 * expected 233168
 *
 */
const res = main(1000);

console.log('result:', res);
