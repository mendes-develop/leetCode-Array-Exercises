let isValidSudoku = function(board) {
  const unique = (value, index, self) => {
    if (value === ".") return true;
    return self.indexOf(value) === index;
  };

  let boxCells = [
    [0, 0],
    [0, 3],
    [0, 6],
    [3, 0],
    [3, 3],
    [3, 6],
    [6, 0],
    [6, 3],
    [6, 6]
  ];

  for (let i = 0; i < board.length; i++) {
    let row = board[i].filter(unique);
    if (row.length < 9) return false;

    let col = [];

    for (let j = 0; j < board[i].length; j++) {
      col.push(board[j][i]);
    }

    let colUniq = col.filter(unique);
    if (colUniq.length < 9) return false;
  }

  for (let i = 0; i < 3; i++) {
    let box = [];
    for (let j = 0; j < 3; j++) {
      box.push(board[i]);
    }
  }

  for (let i = 0; i < boxCells.length; i++) {
    let row = boxCells[i][0];
    let col = boxCells[i][1];
    let box = [];

    for (let i = row; i < row + 3; i++) {
      for (let j = col; j < col + 3; j++) {
        box.push(board[i][j]);
      }
    }
    console.log(box);
    boxUniq = box.filter(unique);
    if (boxUniq.length < 9) return false;
  }

  return true;
};

[
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."]
];
