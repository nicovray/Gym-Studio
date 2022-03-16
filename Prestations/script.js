window.addEventListener('load', function () {
var acc = document.getElementsByClassName("accordion");
var i;
console.log(acc.length)

for (i = 0; i < acc.length; i++) {
    console.log('plop')

  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
  })

