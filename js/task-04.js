let counterValue = 0;

const valueSpan = document.getElementById("value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

function updateCounter() {
  valueSpan.textContent = counterValue;
}

function incrementCounter() {
  counterValue += 1;
  updateCounter();
}

function decrementCounter() {
  counterValue -= 1;
  updateCounter();
}

decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);

updateCounter();
