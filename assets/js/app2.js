let buttons = document.querySelectorAll("button");
//console.log(buttons);

/* Put buttons into an array */
buttons.forEach((button) => {
  button.addEventListener("click", btnClicked);
});

// Set Lastpressed to O since the first player is X
let lastPressed = "O";

//What happens when a button is clicked
function btnClicked(button) {
  // if the square is empty
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

//update the view after a button is clicked
function updateView(button, value) {
  if (value === "X") {
    button.target.textContent = value;
    checkWin();
  } else {
    button.target.textContent = "O";
    checkWin();
  }
}

//check if there is a winner
function checkWin() {
  const buttons = document.querySelectorAll("button");
  const arrVal = [];
  // populate array with values from buttons
  buttons.forEach((button) => {
    arrVal.push(button.textContent);
  });
  console.log(arrVal);
  //check if there is a winner
  if (
    checkVertical(arrVal) ||
    checkHorizontal(arrVal) ||
    checkDiagonal(arrVal)
  ) {
    console.log("WINNER WINNER");
  }
}

//check horizontally for a winner
function checkHorizontal(arrVal) {
  if (arrVal[0] === arrVal[1] && arrVal[1] === arrVal[2]) {
    if (arrVal[0] !== "") {
      return true;
    }
  } else if (arrVal[3] === arrVal[4] && arrVal[4] === arrVal[5]) {
    if (arrVal[3] !== "") {
      return true;
    }
  } else if (arrVal[6] === arrVal[7] && arrVal[7] === arrVal[8]) {
    if (arrVal[6] !== "") {
      return true;
    }
  } else {
    return false;
  }
}

//check vertically for a winner
function checkVertical(arrVal) {
  if (arrVal[0] === arrVal[3] && arrVal[3] === arrVal[6]) {
    if (arrVal[0] !== "") {
      return true;
    }
  } else if (arrVal[1] === arrVal[4] && arrVal[4] === arrVal[7]) {
    if (arrVal[1] !== "") {
      return true;
    }
  } else if (arrVal[2] === arrVal[5] && arrVal[5] === arrVal[8]) {
    if (arrVal[2] !== "") {
      console.log(arrVal[2]);
      return true;
    }
  } else {
    return false;
  }
}

//check diagonally for a winner
function checkDiagonal(arrVal) {
  if (arrVal[0] === arrVal[4] && arrVal[4] === arrVal[8]) {
    if (arrVal[0] !== "") {
      return true;
    }
  } else if (arrVal[2] === arrVal[4] && arrVal[4] === arrVal[6]) {
    if (arrVal[2] !== "") {
      return true;
    }
  } else {
    return false;
  }
}
