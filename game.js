const gameContainer = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');

let score = 0;
let gameInterval;
let gameDuration = 30000; // 30 seconds

function startGame() {
    score = 0;
    scoreDisplay.textContent = 'Score: 0';
    gameContainer.innerHTML = ''; // Clear any existing pumpkins
    startButton.disabled = true;
    gameInterval = setInterval(spawnPumpkin, 1000);
    setTimeout(endGame, gameDuration);
}

function endGame() {
    clearInterval(gameInterval);
    alert(`Game over! Your final score is ${score}.`);
    startButton.disabled = false;
}

function spawnPumpkin() {
    const pumpkin = document.createElement('img');
    pumpkin.src = 'https://example.com/pumpkin.png'; // Replace with your pumpkin image URL
    pumpkin.classList.add('pumpkin');
    pumpkin.style.width = '50px';
    pumpkin.style.height = '50px';
    pumpkin.style.left = `${Math.random() * (gameContainer.clientWidth - 50)}px`;
    pumpkin.style.top = `${Math.random() * (gameContainer.clientHeight - 50)}px`;
    pumpkin.addEventListener('click', smashPumpkin);
    gameContainer.appendChild(pumpkin);
    setTimeout(() => pumpkin.remove(), 1000); // Remove pumpkin after 1 second
}

function smashPumpkin(event) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    event.target.remove();
}

startButton.addEventListener('click', startGame);
