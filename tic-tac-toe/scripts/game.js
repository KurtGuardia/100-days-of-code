startNewGame = () => {
  if (players[0].name === '' || players[1].name === '') {
    alert('Please set custom player names for both players!');
    return;
  }

  activePlayerNameEl.textContent = players[activePlayer].name;
  gameAreaEl.style.display = 'block';
};

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameEl.textContent = players[activePlayer].name;
}

function selectGameField(e) {
  e.target.textContent = players[activePlayer].symbol;
  e.target.classList.add('disabled');
  switchPlayer();
}
