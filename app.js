const form = document.querySelector("#form");
const email = document.querySelector("#email");
const validation = document.querySelector("#validation");

const validateInput = () => {
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (pattern.test(email.value)) {
    location.reload();
  } else if (email.value === "") {
    validation.textContent =
      "Whoops! It looks like you forgot to add your email";
  } else {
    validation.textContent = "Please provide a valid email address";
    email.style.borderColor = "var(--clr-light-red)";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});
