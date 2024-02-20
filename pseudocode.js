// Choice of Game: Wordle

/*

1. Create HTML and CSS for the game
    - div ids 
         .title
         .gameboard
         .tile
            .correct
            .present
            .absent
         .answer
         .restart
    - CSS
        body
        hr line
        #title
        #gameboard
        #tile
        .correct
        .present
        .absent


    2. Use Javascript to loop tiles and populate on screen load
        - 5 columns and 6 rows, with 5 being the length of the word and 6 chances to guess the word
        - Create 30 tiles with individual Id with row-column index.
    

    3. Create variables
        - Height (number of guesses)
        - Width (lengtht of the word)
        - Row (current guess)
        - Column (current letter)
        - gameOver - boolean to determine end of game message and to lead to restart
        - words = array of words
        - word = use math to pick a random index out of words to use for the current instant of the game


    4. Using JS, Create 'startup' function on page load, creating the game board with 30 tiles of 5 rows
    and 6 columns. Strings within each tile to be empty. 
    

    5. Create Event Listener for Key Press. 
    - Key Up Event listener to process user input
    - return if gameOver to stop processing user inputs
    - Allow only keys A-Z, enter and backspace to be pressed
    - Ensure user types 5 letters before pressing Enter and prevents moving to next row.
    - go back one column when backspace and also prevent backspacing if you havent type anything on the columns yet.
    - Add an 'update' function to allow user to move to next row once all columns have been used 
    - If rows are used up, display gameOver to be true and correct answer
    - display "you guessed it correctly" and "oops, you got it wrong"
    - Restart button

    6. Define update function for the tiles to allow user to see if letter is present or absent or correct and gameOver
    loop the row and column and check for correct answer then proceed to update each tile


    7. Click refresh to start a new game or add a button 










    
    






























*/
