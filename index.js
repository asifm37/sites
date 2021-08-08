const toTop = document.querySelector(".top-of-site-link");

document.addEventListener('scroll', function(e) {
  if (document.documentElement.scrollTop > 100) {
    toTop.setAttribute("data-visible", true);
  } else {
    toTop.setAttribute("data-visible", false);
  }
});
