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
  console.log(guess);
  //   VALIDATE
  if (guess === NaN || guess < min || guess > max) {
    setMessage(`Please Enter A Number Between ${min} and ${max}`);
  }
});

// SET MESSAGE
function setMessage(msg) {
  message.textContent = msg;
}
