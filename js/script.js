document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const output = document.getElementById("formMessage");

  if (name && email && message) {
    output.textContent = "Thanks for your message!";
    output.style.color = "green";
    this.reset();
  } else {
    output.textContent = "Please fill in all fields.";
    output.style.color = "red";
  }
});
