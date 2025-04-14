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
      feedbackElement.innerHTML = "GILA! Lu bener! Mungkin masih ada harapan dikit buat otak lu...";
      feedbackElement.style.color = "green";
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = `Kurang tinggi, kayak cita-cita lu yang gak kesampean. Nyawa lu nih ngurang jadi ${attempts}`;
      feedbackElement.style.color = "red";
      break;
    } else {
      feedbackElement.innerHTML = `Ketinggian, kayak ego lu yang gak ada isinya. Nyawa lu nih ngurang jadi ${attempts}`;
      feedbackElement.style.color = "red";
      break;
    }
  }
  if (attempts === 0 && guess != randomNumber) {
    feedbackElement.innerHTML = `Selesai juga penderitaan buat otak lu. Lu dah kalah, dan itu udah takdir. Jawabannya tuh: ${randomNumber}</b><br><i>Udah sana, belajar dulu yang bener sebelum nebak lagi.</i>`;
    feedbackElement.style.color = "red";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  document.getElementById("guess").value = '';
  document.getElementById("feedback").innerHTML = 'Ayo coba lagi, siapa tau sekarang otak lu nyala.';
}
