const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
];
const playerConfigOverlayEl = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const formEl = document.querySelector('form');
const errorsOutputEl = document.getElementById('config-errors');
const gameAreaEl = document.getElementById('active-game');
const activePlayerNameEl = document.getElementById('active-player-name');
const gameOverEl = document.getElementById('game-over');
const editPlayer1El = document.getElementById('edit-player-1-btn');
const editPlayer2El = document.getElementById('edit-player-2-btn');
const cancelConfigel = document.getElementById('cancel-config-btn');
const startNewGameBtnEl = document.getElementById('start-game-btn');
const gameFieldElements = document.querySelectorAll('.game-board li');
const gameBoard = document.querySelector('.game-board');

editPlayer1El.addEventListener('click', openPlayerConfig);
editPlayer2El.addEventListener('click', openPlayerConfig);

cancelConfigel.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

formEl.addEventListener('submit', savePlayerConfig);

startNewGameBtnEl.addEventListener('click', startNewGame);

for (const gameField of gameFieldElements) {
  gameField.addEventListener('click', selectGameField);
}
