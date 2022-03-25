const hamb = document.querySelector('.hamburger');
hamb.addEventListener('click', function(e) {
    e.preventDefault()
    hamb.classList.toggle("open");
    nav_ul.classList.toggle("slide");
    document.body.classList.toggle("noScroll");

});

onscroll = () => {
    header.classList.add("shadowHeader");
    footer.classList.add("shadowFooter");

    setTimeout(() => {
        header.classList.remove("shadowHeader");
        footer.classList.remove("shadowFooter");
    }, 1000);

    
    if (progressBar.style.width == "100%")
    progressBar.style.backgroundColor = "green";
    else progressBar.style.backgroundColor = "rgb(192, 127, 6)";
}