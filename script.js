let currentDisplay = '';

function appendNumber(number) {
  currentDisplay += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentDisplay += operator;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentDisplay);
    currentDisplay = String(result);
    updateDisplay();
  } catch (error) {
    currentDisplay = 'Error';
    updateDisplay();
  }
}

function clearDisplay() {
  currentDisplay = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentDisplay;
}