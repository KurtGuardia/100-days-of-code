let editedPlayer = 0;
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
const editPlayer1El = document.getElementById('edit-player-1-btn');
const editPlayer2El = document.getElementById('edit-player-2-btn');
const cancelConfigel = document.getElementById('cancel-config-btn');

editPlayer1El.addEventListener('click', openPlayerConfig);
editPlayer2El.addEventListener('click', openPlayerConfig);

cancelConfigel.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

formEl.addEventListener('submit', savePlayerConfig);
