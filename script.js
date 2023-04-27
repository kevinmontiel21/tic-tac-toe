const cells = document.querySelectorAll("div");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let currentPlayer = "X";
let gameEnd = false;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const player1name = document.querySelector("#player1name");
const player2name = document.querySelector("#player2name");
const player1score = document.querySelector("#player1score");
const player2score = document.querySelector("#player2score");
const restartButton = document.querySelector("#restart");

player1name.textContent = player1.value;
player2name.textContent = player2.value;

player1.addEventListener("input", () => {
  player1name.textContent = player1.value;
});

player2.addEventListener("input", () => {
  player2name.textContent = player2.value;
});

restartButton.addEventListener("click", restart);

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (gameEnd) {
      return;
    }
    if (cell.textContent === "") {
      cell.textContent = currentPlayer;
      if (checkWin()) {
        gameEnd = true;
        updateScore();
        restart();
      } else if (checkTie()) {
        gameEnd = true;
        restart();
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

function checkWin() {
  for (let i = 0; i < winConditions.length; i++) {
    let a = cells[winConditions[i][0]].textContent;
    let b = cells[winConditions[i][1]].textContent;
    let c = cells[winConditions[i][2]].textContent;
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  let tie = true;
  cells.forEach(cell => {
    if (cell.textContent === "") {
      tie = false;
    }
  });
  return tie;
}

function updateScore() {
  if (currentPlayer === "X") {
    player1score.textContent = parseInt(player1score.textContent) + 1;
  } else {
    player2score.textContent = parseInt(player2score.textContent) + 1;
  }
}

function restart() 
  cells.forEach(cell => {
    cell.textContent = "";
  });
  gameEnd = false;

