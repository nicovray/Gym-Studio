const message = "Merci ! Nous reviendrons vers vous dans les meilleurs délais !";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });