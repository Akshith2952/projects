let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let message = document.querySelector(".message");
let turnO = true;
let c = 0;

const winBoxes = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
    //   console.log("clicked");
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    c++;
    let isWinner = checkWinner();
    if (c == 9 && !isWinner) {
      gameDraw();
    }
  });
});

const resetGame = () => {
  turnO = true;
  c = 0;
  enableBoxes();
  message.classList.add("hide");
};
const gameDraw = () => {
  msg.innerText = `Game was a Draw!`;
  message.classList.remove("hide");
  disableBoxes();
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  message.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winBoxes) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        return true;
      }
    }
  }
};
newGame.addEventListener("click", () => {
  resetGame();
});
reset.addEventListener("click", resetGame);
