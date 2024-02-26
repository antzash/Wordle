// 1. Creating the variables

let height = 6; // number of guesses
let width = 5; // number of letters in a guess
let row = 0; // attempt number
let column = 0; // letter for that attempt
let gameOver = false;
let streak = 0; // score streak counter
let words = [
  // im going to keep it to just four words for easier presentation
  "DARTH",
  "VADER",
  "DEATH",
  "STARS",
]; // call a random word API? https://random-word-api.herokuapp.com/word?length=5

let word = words[Math.floor(Math.random() * words.length)]; // choose a random word out of the array
console.log(word); // for testing and presentation purposes

//stretch goal idea; dont repeat the words and restart in a new array

//Define a startup function

window.onload = function () {
  startup();
};

function startup() {
  // create the game board , r = row and c = column
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      // for loops for each
      let tile = document.createElement("span"); // adds a span to the html <span id='0-0' class='tile'>the letter</span>
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.innerText = "";
      document.getElementById("gameboard").appendChild(tile); //find the div id='gameboard', add the span to the and loops
    }
  }
}

//Update Function to check for missing, present and correct letters

function update() {
  let correct = 0; // start with 0
  for (let c = 0; c < width; c++) {
    // check through all the letters of the word that has been types
    let currTile = document.getElementById(row.toString() + "-" + c.toString()); // get the tile user is on
    let letter = currTile.innerText;

    // Check for Correct Letter and Correct Position
    if (word[c] == letter) {
      currTile.classList.add("correct");
      correct += 1;
    } // check for present letter wrong position
    else if (word.includes(letter)) {
      currTile.classList.add("present");
    } // Check for wrong letter and wrong position (missing)
    else {
      currTile.classList.add("missing");
    }

    if (correct === width) {
      gameOver = true;
      const correctModal = document.getElementById("correctModal");
      const correctWord = document.getElementById("correctWord");
      correctWord.textContent = word;
      correctModal.classList.add("active");
    }
  }
}

//Create Event Listener for Key Press.

// you want the key to only register only when the user lifts finger up from key

// e is the key event
document.addEventListener("keyup", (e) => {
  if (gameOver) return;
  //limit key usage to within A-Z i.e. avoid numbers and symbols
  if ("KeyA" <= e.code && e.code <= "KeyZ") {
    // define variable letter to identfy third index of keystroke e.g. A is [3] of 'KeyA'
    // if user is still within the 5 letter limit
    if (column < width) {
      // define variable currTile to be where user is currently in
      let currTile = document.getElementById(
        row.toString() + "-" + column.toString()
      );
      // check if current tile is empty
      if (currTile.innerText == "") {
        //Populate it with the letter that user has input
        currTile.innerText = e.code[3];
        // move on to the next letter/column
        currTile.classList.add("show-letter");
        column += 1; //
      }
    }
  } else if (e.code == "Backspace") {
    // check for Backspace
    if (0 < column && column <= width) {
      // if column user is on is in between 1 and 5. if you are on O you havent actually add anything yet
      column -= 1; // minus one column when backspace is pressed
    }
    let currTile = document.getElementById(
      row.toString() + "-" + column.toString()
    ); // find current tile user is on
    currTile.innerText = ""; // and make it blank
  } else if (e.code == "Enter") {
    // once all five letters have been input, user presses enter to submit answer
    update(); // call an update function (defined above) to check for missing, correct and present tiles
    row += 1; // move on to next row for next guess
    column = 0; // start at column 0 i.e. first letter
  }

  if (!gameOver && row === height) {
    // once you have used up all your guesses and game is not yet declared over
    gameOver = true; // gameOver is declared
    const wrongModal = document.getElementById("wrongModal");
    const correctWord = document.getElementById("correctWord2");
    correctWord.textContent = word;
    wrongModal.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelectorAll(".close-button");

  closeButton.forEach((button) => {
    button.addEventListener("click", function () {
      location.reload();
    });
  });
});
