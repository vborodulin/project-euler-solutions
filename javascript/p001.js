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
 * expected
 *
 */
const res = main(1000);

console.log('result:', res);
