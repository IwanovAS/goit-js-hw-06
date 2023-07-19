const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function updateNameOutput() {
  const inputText = nameInput.value.trim();

  if (inputText !== "") {
    nameOutput.textContent = inputText;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}

nameInput.addEventListener("input", updateNameOutput);

updateNameOutput();
