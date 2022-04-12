window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");

  if (window.pageYOffset > 0) {
    navbar.classList.add("is-sticky");
  } else {
    navbar.classList.remove("is-sticky");
  }
});
