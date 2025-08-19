module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix) || !matrix.length) return [];
  matrix.forEach((el, i) => {
    if (i % 2 === 0) {
      el.sort((a, b) => a - b);
    } else {
      el.sort((a, b) => b - a);
    }
  });
  return matrix.flat();
};
