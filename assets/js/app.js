/*Make an array with values from the button tag */
let buttons = document.querySelectorAll("button");

/* Add eventlistener to the buttons */
buttons.forEach((button) => {
  button.addEventListener("click", btnClicked);
});

/* Initialize lastPressed to 'O' since 'X' has turn number 1 */
let lastPressed = "O";

/* When button is clicked it checks to see if the button is empty  */
function btnClicked(button) {
  /* Only do this if the block is empty */
  if (button.target.textContent === "") {
    if (lastPressed === "O") {
      updateView(button, "X");
      lastPressed = "X";
    } else {
      updateView(button, "O");
      lastPressed = "O";
    }
  }
}

/* Update the DOM with the value (X or Y) */
function updateView(button, value) {
  button.target.textContent = value;
  checkWinner(value);
}

function checkWinner(value) {
  const btn = document.querySelectorAll("button");
  const btnArr = [];
  btn.forEach((button) => {
    btnArr.push(button.innerText);
  });
  console.log(btnArr);
  if (
    checkHorizontal(btnArr) ||
    checkDiagonal(btnArr) ||
    checkVertical(btnArr)
  ) {
    console.log("winner is " + value);
    if (lastPressed === "O") {
      document.querySelector(".winner").innerText += ` Player 1 is the winner`;
    }
  }
}

function checkHorizontal(btnArr) {
  if (btnArr[0] === btnArr[1] && btnArr[1] === btnArr[2]) {
    if (btnArr[0] != "") {
      return true;
    }
  } else if (btnArr[3] === btnArr[4] && btnArr[4] === btnArr[5]) {
    if (btnArr[3] != "") {
      return true;
    }
  } else if (btnArr[6] === btnArr[7] && btnArr[7] === btnArr[8]) {
    if (btnArr[6] !== "") {
      return true;
    }
  }
}

function checkVertical(btnArr) {
  if (btnArr[0] === btnArr[3] && btnArr[3] === btnArr[6]) {
    if (btnArr[0] != "") {
      return true;
    }
  } else if (btnArr[1] === btnArr[4] && btnArr[4] === btnArr[7]) {
    if (btnArr[1] != "") {
      return true;
    }
  } else if (btnArr[2] === btnArr[5] && btnArr[5] === btnArr[8]) {
    if (btnArr[2] != "") {
      return true;
    }
  }
}

function checkDiagonal(btnArr) {
  if (btnArr[0] === btnArr[4] && btnArr[4] === btnArr[8]) {
    if (btnArr[0] != "") {
      return true;
    }
  } else if (btnArr[2] === btnArr[4] && btnArr[4] === btnArr[6]) {
    if (btnArr[2] != "") {
      return true;
    }
  }
}
