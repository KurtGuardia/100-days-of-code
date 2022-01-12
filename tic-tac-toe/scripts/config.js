function openPlayerConfig() {
  playerConfigOverlayEl.style.display = 'block';
  backdrop.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayEl.style.display = 'none';
  backdrop.style.display = 'none';
  formEl.firstElementChild.classList.remove('error');
  errorsOutputEl.textContent = '';
}

function saveplayerConfig(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayername = formData.get('playername').trim();

  if (!enteredPlayername) {
    e.target.firstElementChild.classList.add('error');
    errorsOutputEl.textContent = 'Please enter a valid name!';
    return;
  }
}
