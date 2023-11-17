document.addEventListener("DOMContentLoaded", function () {
  const wordList = document.getElementById("wordList");
  const text = document.getElementById("text");
  const scoreEl = document.getElementById("score");
  const timeEl = document.getElementById("time");

  let randomWord;
  let score = 0;
  let time = 60;

  text.focus();

  const timeInterval = setInterval(updateTime, 1000);

  const words = [
    "Lorem",
    "ipsum",
    "dolor sit",
    "amet",
    "consectetur",
    "adipisicing",
    "elit",
    "Enim",
    "id",
    "sequi",
    "excepturi",
    "voluptate",
  ];

  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  function addWordToDOM() {
    randomWord = getRandomWord();
    wordList.innerHTML = `<li>${randomWord}</li>`;
  }

  function updateScore() {
    score++;
    scoreEl.innerHTML = `Score: ${score}`;
  }

  function updateTime() {
    time--;
    timeEl.innerHTML = `${time}s`;

    if (time === 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  }

  function gameOver() {
    document.body.innerHTML = `
    <div class="app">
    <div class="title" style="font-size: xx-large">End Game</div>
    <br />
    <div class="endGame">
      <div class="result">
        <div>
          <div class="title">Correct answer</div>
          <div class="number">${score}</div>
        </div>
        
      </div>
      <button onclick="location.reload()">Reload</button>
    </div>
  </div>
    `;
  }

  addWordToDOM();

  text.addEventListener("input", (e) => {
    const insertedText = e.target.value.trim().toLowerCase();
    const currentWord = randomWord.toLowerCase();

    if (insertedText === currentWord) {
      wordList.firstElementChild.style.color = "white";
      setTimeout(() => {
        wordList.firstElementChild.style.color = "green";
        updateScore();

        setTimeout(() => {
          addWordToDOM();
          e.target.value = "";
          wordList.firstElementChild.style.color = "";
          updateTime();
        }, 500);
      }, 300);
    } else {
      wordList.firstElementChild.style.color = "white";
      setTimeout(() => {
        wordList.firstElementChild.style.color = "red";
        setTimeout(() => {
          wordList.firstElementChild.style.color = "";
        }, 500);
      }, 300);
    }
  });

  text.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior of the Enter key
      text.value = ""; // Clear the input field
      addWordToDOM();
      updateTime();
    }
  });
});
