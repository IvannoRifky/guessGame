let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = inputElement.value;
  if (guess === randomNumber) {
    feedbackElement.innerHTML = "Mumpung lu pinter kontol.";
    feedbackElement.style.color = "green";
  } else if (guess < randomNumber) {
    feedbackElement.innerText = "Kurang tinggi tolol, kek tinggi badan lu!";
    feedbackElement.style.color = "orange";
  } else {
    feedbackElement.innerText = "Ketinggian kek harapan lu dapetin dia!";
    feedbackElement.style.color = "red";
  }
}