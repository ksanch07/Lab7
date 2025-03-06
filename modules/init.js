function init() {
    let playAgain = 'y';
    while (playAgain === 'y') {
      playGame();
      playAgain = prompt('Do you want to play again? (y/n)');
    }
    alert('Thanks for playing the game!');
  }
  init();