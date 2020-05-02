/*
 * Solution to Project Euler problem 003
 * https://projecteuler.net/problem=003
 *
 */

/**
 * Solution algorithm:
 * 1. If given n is even repeatedly divided by 2
 * 2. If n becomes 1 then 2 is the max prime factor
 * 3. Start with i = 3 and try divide n by i
 * 4. If can divide n by i then n = n / i, else i = i + 2
 * (after repeatedly division n by 2 in result n is odd and no even factors for an odd number)
 * 5. Go to step 3 and run loop till sqrt root of n
 * 6. Return n
 */

/**
 *
 * @param {number} n
 * @return {number}
 */
const main = (n) => {
  while (n %  2 === 0) {
    n = n / 2;

    if (n === 1) {
      return 2;
    }
  }

  let i = 3;
  while (i <= Math.sqrt(n)) {
    if (n % i === 0) {
      n = n / i
      i = 3
    } else {
      i += 2
    }
  }

  return n;
};

/**
 * expected result 6857
 */
const res = main(600851475143);

console.log('result:', res);
