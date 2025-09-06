document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Merci pour votre message ! Je vous répondrai bientôt.");
      form.reset();
    });
  }
});