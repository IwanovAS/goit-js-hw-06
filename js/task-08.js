const loginForm = document.querySelector(".login-form");

function handleFormSubmit(event) {
  event.preventDefault(); 

  const formElements = event.target.elements; 
  const formData = {};
  for (let i = 0; i < formElements.length; i += 1) {
    const element = formElements[i];
    if (element.type !== "submit") {
      formData[element.name] = element.value;
    }
  }

  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");
  if (isFormValid) {
    console.log(formData);
    loginForm.reset();
  } else {
    alert("Всі поля повинні бути заповнені!");
  }
}

loginForm.addEventListener("submit", handleFormSubmit);

