let number = Math.floor(Math.random() * 100) + 1;
let lives = 10;

function checkGuess() {
  let guess = Number(document.getElementById("guess").value);
  let result = document.getElementById("result");

  if (guess === number) {
    window.location.href = "win.html";
  } else {
    lives--;
    if (lives <= 0) {
      window.location.href = "loss.html";
    } else {
      result.textContent = guess > number ? "Too high!" : "Too low!";
      document.getElementById("lives").textContent = "Lives: " + lives;
    }
  }
}
