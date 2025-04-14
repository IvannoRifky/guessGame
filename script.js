let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = inputElement.value;
  while (attempts > 0) {
    if (guess == randomNumber) {
      attempts = 0;
      feedbackElement.innerHTML = "Mumpung lu pinter kontol!";
      feedbackElement.style.color = "green";
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = `Kurang tinggi tolol, kek tinggi badan lu! Noh nyawa lu ngurang bangsat jadi tinggal ${attempts}`;
      feedbackElement.style.color = "red";
      break;
    } else {
      feedbackElement.innerHTML = `Ketinggian kek harapan lu dapetin dia! Noh nyawa lu ngurang bangsat jadi tinggal ${attempts}`;
      feedbackElement.style.color = "red";
      break;
    }
  }
  if (attempts === 0 && guess != randomNumber) {
    feedbackElement.innerHTML = `Kalau bawaan nya emang idiot emang susah. Noh gw spill jawabannya ${randomNumber}.`;
    feedbackElement.style.color = "red";
  }
}
