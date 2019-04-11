// GAMES VALUES
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max);
guessesLeft = 3;

// UI ELEMENTS
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//   ASSIGN UI MIN AND MAX
minNum.textContent = min;
maxNum.textContent = max;

// PLAY AGAIN EVENTLISTENER
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// LISTEN FOR GUESS
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  //  VALIDATE
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter A Number Between ${min} and ${max}`, "red");
  }

  if (guess === winningNum) {
    //   GAME OVER WON
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    // WRONG NUMBER
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game Over, You Lost. The Correct Number Was ${winningNum}`
      );
    } else {
      guessInput.style.bordercolor = "red";

      guessInput.value = "";
      // GAME CONTINUES ANSWER WRONG
      setMessage(`${guess} Is Not Correct, ${guessesLeft} Guesses Left`, "red");
    }
  }
});

// GAME OVER
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);
  //   PLAY AGAIN
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// GET WINNING NUMBER
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// SET MESSAGE
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
