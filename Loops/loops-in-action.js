// First example: Sum numbers

const calculateSumButtonEl = document.querySelector('#calculator button');

calculateSum = () => {
  const userNumberInputEl = document.getElementById('user-number');
  const enteredNumber = userNumberInputEl.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultEl = document.getElementById('calculated-sum');

  outputResultEl.textContent = sumUpToNumber;

  outputResultEl.style.display = 'block';
};

calculateSumButtonEl.addEventListener('click', calculateSum);

// Second example: Highlight links

const highlightLinksButtonEl = document.querySelector(
  '#highlight-links button'
);

highlightLinks = () => {
  const anchorElements = document.querySelectorAll('#highlight-links a');

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add('highlight');
  }
};

highlightLinksButtonEl.addEventListener('click', highlightLinks);

// Third examnple: Display user data

const dummyUserData = {
  firstName: 'Kurt',
  LastName: 'Guardia',
  age: 29,
};

const displayUserDataButtonEl = document.querySelector('#user-data button');

displayUserData = () => {
  const outputDataEl = document.getElementById('output-user-data');

  outputDataEl.innerHTML = '';

  for (const key in dummyUserData) {
    const nweUserDataListItemEl = document.createElement('li');
    const outputText = key.toUpperCase() + ':' + dummyUserData[key];
    nweUserDataListItemEl.textContent = outputText;
    outputDataEl.append(nweUserDataListItemEl);
  }
};

displayUserDataButtonEl.addEventListener('click', displayUserData);

//Fourth example: Statistics/Roll dice

const rollDiceButtonEl = document.querySelector('#statistics button');

rollDice = () => {
  const num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
  return num;
};

deriveNumberOfDiceRolls = () => {
  const targetNumberInputEl = document.getElementById('user-target-number');
  const diceRollsListEl = document.getElementById('dice-rolls');

  const enteredNumber = targetNumberInputEl.value;
  diceRollsListEl.innerHTML = '';

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    console.log('#');
    const rolledNumber = rollDice();
    if (rolledNumber == enteredNumber) {
      hasRolledTargetNumber = true;
    }
    numberOfRolls++;
    const newRollListEl = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListEl.textContent = outputText;
    diceRollsListEl.append(newRollListEl);
    // hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsEl = document.getElementById('output-total-rolls');
  const outputTargetNumberEl = document.getElementById('output-target-number');

  outputTargetNumberEl.textContent = enteredNumber;
  outputTotalRollsEl.textContent = numberOfRolls;
};

rollDiceButtonEl.addEventListener('click', deriveNumberOfDiceRolls);
