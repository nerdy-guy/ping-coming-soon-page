const form = document.querySelector("#form");
const email = document.querySelector("#email");
const validation = document.querySelector("#validation");

const validateInput = () => {
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (pattern.test(email.value)) {
    validation.textContent = "You will be notified";
    validation.style.color = "var(--clr-green)";
    validation.style.marginRight = "16em";
    email.value = "";
    email.style.borderColor = "var(--clr-green)";
  } else if (email.value === "") {
    validation.textContent =
      "Whoops! It looks like you forgot to add your email";
    validation.style.color = "var(--clr-light-red)";
    email.style.borderColor = "var(--clr-light-red)";
  } else {
    validation.textContent = "Please provide a valid email address";
    validation.style.color = "var(--clr-light-red)";
    validation.style.marginRight = "8em";
    email.style.borderColor = "var(--clr-light-red)";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});
