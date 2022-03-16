window.addEventListener('load', function () {
var acc = document.getElementsByClassName("accordion");
var i;
console.log(acc.length)

for (i = 0; i < acc.length; i++) {
    console.log('plop')

  acc[i].addEventListener("click", function() {
    /*  */
    this.classList.toggle("active");

    /*  */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
  })

