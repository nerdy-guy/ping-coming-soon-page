const form = document.querySelector("#form");
const email = document.querySelector("#email");
const validation = document.querySelector("#validation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});

const validateInput = () => {
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (pattern.test(email.value)) {
    location.reload();
  } else {
    validation.textContent = "Please provide a valid email address";
  }
};
