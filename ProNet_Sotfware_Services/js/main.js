document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var nav = document.querySelector("nav");
      const {
        scrollTop, scrollHeight, clientHeight 
      } = document;
      if (scrollTop + clientHeight >= scrollHeight) {
      nav.classList.toggle("abajo");
      }
    });
});
  