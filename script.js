window.addEventListener("DOMContentLoaded", function () {
  const darkModeBtn = document.querySelector(".dark__mode__btn"),
    body = document.querySelector("body");
 

  

  darkModeBtn.addEventListener("change", function () {
     document.body.classList.toggle('dark-mode')
  });
});
