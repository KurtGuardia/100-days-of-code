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
