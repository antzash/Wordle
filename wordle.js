// 1. Creating the variables

let height = 6; // number of guesses
let width = 5; // number of letters in a guess
let row = 0; // attempt number
let column = 0; // letter for that attempt
let gameOver = false; // Variable to indicate end of game regardless of win/loss
let words = [
  // im going to keep it to just four words for easier presentation
  "DARTH",
  "VADER",
  "DEATH",
  "STARS",
]; // call a random word API? https://random-word-api.herokuapp.com/word?length=5

let word = words[Math.floor(Math.random() * words.length)]; // choose a random word out of the array
console.log(word); // for testing and presentation purposes

window.onload = function () {
  startup();
}; // Inititae startup function when page loads

//Define a startup function
function startup() {
  // create the game board , r = row and c = column
  for (let r = 0; r < height; r++) {
    // loop rows indefinitely
    for (let c = 0; c < width; c++) {
      // loop column indefinitely
      // for loops for each
      let tile = document.createElement("span"); // adds a span to the html <span id='0-0' class='tile'>the letter</span>
      tile.id = r.toString() + "-" + c.toString(); // adss ID to tile (row-column) i.e. '03-05' meaning row 3 column 5
      tile.classList.add("tile"); // add 'tile' class properties from CSS
      tile.innerText = ""; // blank text within tile
      document.getElementById("gameboard").appendChild(tile); //find the div id='gameboard', add the span to the and loops
    }
  }
}

//Update Function to check for missing, present and correct letters

function update() {
  let correct = 0; // start with 0
  for (let c = 0; c < width; c++) {
    // Loop function
    // check through all the letters of the word that has been types
    let currTile = document.getElementById(row.toString() + "-" + c.toString()); // get the tile user is on
    let letter = currTile.innerText; // create variable letter and link to text within the current

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
      // if all the letters in the column are correct
      gameOver = true; // initiate gameOver
      const correctModal = document.getElementById("correctModal"); // define variable correctModal
      const correctWord = document.getElementById("correctWord"); // define variable correctWord
      correctWord.textContent = word; // populate correctWord in modal to display the answer
      correctModal.classList.add("active"); // add active to the correctModal HTML class to display on screen
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
      if (currTile.innerText === "") {
        //Populate it with the letter that user has input
        currTile.innerText = e.code[3];
        // move on to the next letter/column
        currTile.classList.add("show-letter");
        column += 1; //
      }
    }
  } else if (e.code === "Backspace") {
    // check for Backspace
    if (0 < column && column <= width) {
      // if column user is on is in between 1 and 5. if you are on O you havent actually add anything yet
      column -= 1; // minus one column when backspace is pressed
    }
    let currTile = document.getElementById(
      row.toString() + "-" + column.toString()
    ); // find current tile user is on
    currTile.innerText = ""; // and make it blank
  } else if (e.code === "Enter") {
    // once all five letters have been input, user presses enter to submit answer
    const rowComplete = column === width;
    if (rowComplete) {
      update(); // call an update function (defined above) to check for missing, correct and present tiles
      row += 1; // move on to next row for next guess
      column = 0; // start at column 0 i.e. first letter
    }
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

//Ensure play again button refreshes the game for a new attempt

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelectorAll(".close-button");

  closeButton.forEach((button) => {
    button.addEventListener("click", function () {
      location.reload();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select the play button and the audio player
  const playButton = document.getElementById("play");
  const audioPlayer = document.getElementById("audioPlayer");

  // Add event listener to the play button
  playButton.addEventListener("click", () => {
    // Check if the audio player is paused or ended
    if (audioPlayer.paused || audioPlayer.ended) {
      // Play the audio
      audioPlayer.play();
      // Change the button text to "Pause" to indicate music is playing
      playButton.textContent = "Pause";
    } else {
      // Pause the audio
      audioPlayer.pause();
      // Change the button text to "Music" to indicate that the music can be played
      playButton.textContent = "Music";
    }
  });
});
