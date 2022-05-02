/*Make an array with values from the button tag */
let buttons = document.querySelectorAll("button");

/* Add eventlistener to the buttons */
buttons.forEach((button) => {
  button.addEventListener("click", btnClicked);
});

console.log(buttons);
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

/* Check to see if there is a winner */
function checkWinner(value) {
  const btn = document.querySelectorAll("button");
  const btnArr = [];
  btn.forEach((button) => {
    btnArr.push(button.innerText);
  });

  /* Check to see if horizontal, diagonal or vertical are true */
  if (
    checkHorizontal(btnArr) ||
    checkDiagonal(btnArr) ||
    checkVertical(btnArr)
  ) {
    console.log("winner is " + value);

    /* If the last move was O, then current move X wins */
    if (lastPressed === "O") {
      document.querySelector(".winner").innerText += ` Player 1 is the winner`;
    } else {
      /* If the last move was X, then current move O wins */
      document.querySelector(".winner").innerText += ` Player 2 is the winner`;
    }
  }
}

/* Check horizontal buttons to look for winner */
function checkHorizontal(btnArr) {
  /* If all cells of 1st row are equal AND the cell isn't empty return true*/

  if (btnArr[0] === btnArr[1] && btnArr[1] === btnArr[2] && btnArr[0] !== "") {
    return true;
  } else if (
    /* If all cells of 2nd row are equal AND the cell isn't empty return true*/
    btnArr[3] === btnArr[4] &&
    btnArr[4] === btnArr[5] &&
    btnArr[3] !== ""
  ) {
    return true;
  } else if (
    /* If all cells of 3rd row are equal AND the cell isn't empty return true*/
    btnArr[6] === btnArr[7] &&
    btnArr[7] === btnArr[8] &&
    btnArr[6] !== ""
  ) {
    return true;
  } else {
    /* Otherwise return false  */
    return false;
  }
}

/* Check vertically for winner */
function checkVertical(btnArr) {
  /* If all cells of 1st column are equal AND the cell isn't empty return true*/

  if (btnArr[0] === btnArr[3] && btnArr[3] === btnArr[6] && btnArr[0] != "") {
    return true;
  } else if (
    /* If all cells of 2nd column are equal AND the cell isn't empty return true*/

    btnArr[1] === btnArr[4] &&
    btnArr[4] === btnArr[7] &&
    btnArr[1] != ""
  ) {
    return true;
  } else if (
    /* If all cells of 3rd column are equal AND the cell isn't empty return true*/

    btnArr[2] === btnArr[5] &&
    btnArr[5] === btnArr[8] &&
    btnArr[2] != ""
  ) {
    return true;
  } else {
    /* Otherwise return false*/
    return false;
  }
}

/* Check diagonally for winner
 */
function checkDiagonal(btnArr) {
  /* If diagonal cell[0], cell[4], cell[8] are equal and not empty return true*/

  if (btnArr[0] === btnArr[4] && btnArr[4] === btnArr[8] && btnArr[0] != "") {
    return true;
  } else if (
    /* If diagonal cell[2], cell[4], cell[6] are equal and not empty return true*/

    btnArr[2] === btnArr[4] &&
    btnArr[4] === btnArr[6] &&
    btnArr[2] != ""
  ) {
    return true;
  } else {
    /* Otherwise return false*/

    return false;
  }
}
