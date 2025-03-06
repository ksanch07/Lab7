function playGame() {
    let number = Math.floor(Math.random() * 10) + 1
    let count = 1
    let guess
    
    alert('Welcome to the number guessing game!')
    alert('I have selected a random number between 1 and 10.')

    while (true) {
        guess = prompt('Guess the number between 1 and 10:')
        if (number > guess) {
            alert('Your guess is too low. Try again')
            count++
        }
        else if (number < guess) {
            alert('Your guess is too high. Try again')
        count++
        }
        else {
            alert(`Congratulations! You guessed the number in ${count} tries.`)
            return
        }
    }
}
// Initializes the game loop.
// @function init
function init() {
  let playAgain = 'y';
  while (playAgain === 'y') {
    playGame();
    playAgain = prompt('Do you want to play again? (y/n)');
  }
  alert('Thanks for playing the game!');
}
init();