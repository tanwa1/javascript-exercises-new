const pascal = function (rows) {
  const output = [];

  const row = rows - 1;
  for (let j = 0; j <= row; j++) {
    output.push(pascalNum(row, j));
  }
  return output;
};

function pascalNum(row, column) {
  if (column === 0 || column === row) {
    return 1;
  } else {
    return pascalNum(row - 1, column - 1) + pascalNum(row - 1, column);
  }
}
// Do not edit below this line
module.exports = pascal;
