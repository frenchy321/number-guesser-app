// GAMES VALUES
let min = 1,
  max = 10,
  winningNum = 2,
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

// LISTEN FOR GUESS
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  //  VALIDATE
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter A Number Between ${min} and ${max}`, "red");
  }

  if (guess === winningNum) {
    // guessInput.disabled = true;
    // guessInput.style.borderColor = "green";
    // setMessage(`${winningNum} is correct, YOU WIN!`, "green");
  } else {
    // WRONG NUMBER
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      guessInput.disabled = true;
      guessInput.style.borderColor = "red";

      setMessage(
        `Game Over, You Lost. The Correct Number Was ${winningNum}`,
        "red"
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
  guessInput.disabled = true;
  guessInput.style.borderColor = "green";

  setMessage(`${winningNum} is correct, YOU WIN!`, "green");
}

// SET MESSAGE
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
