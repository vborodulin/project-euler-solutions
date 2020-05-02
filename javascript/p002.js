/*
 * Solution to Project Euler problem 002. Even Fibonacci numbers
 * https://projecteuler.net/problem=002
 *
 */

/**
 * Solution algorithm:
 * We can express n even like E(n) = 4 * E(n - 1) - E(n - 2)
 * So next even value can be calc: 4 * currValue  + prevValue
 *
 */

/**
 * @param {number} n
 * @return {string}
 */
const main = (n) => {
  n = BigInt(n);

  let res = 2n;
  let nextRes = res;

  let prevValue = 0n;
  let currValue = 2n;

  while (currValue <= n) {
    [prevValue, currValue] = [currValue, currValue * 4n + prevValue];
    [res, nextRes] = [nextRes, nextRes + currValue]
  }

  return res.toString();
}

/**
 * expected: 4613732
 */
const res = main(4000000);

console.log('result:', res);
