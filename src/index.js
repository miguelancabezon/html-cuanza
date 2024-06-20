console.log("LANG " + document.documentElement.lang);

/* Listeners */
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  var menu = document.getElementById("menu");
  var topMenu = document.getElementsByClassName("top-navigation")[0];
  if (width <= 768) {
    menu.style.display = "none";
    topMenu.style.display = "none";
  } else {
    menu.style.display = "flex";
    topMenu.style.display = "flex";
  }
});

document.getElementById("top-toggler").addEventListener("click", (el) => {
  let topMenu = document.getElementsByClassName("top-navigation")[0];
  let toggler = el.target;

  if (
    menu === null ||
    menu === undefined ||
    toggler === null ||
    toggler === undefined
  )
    return;

  if (topMenu.style.display === "flex") {
    topMenu.style.display = "none";
    toggler.style.transform = "rotate(0deg)";
  } else {
    topMenu.style.display = "flex";
    toggler.style.transform = "rotate(-90deg)";
  }
});

document.getElementById("menu-toggler").addEventListener("click", (el) => {
  let menu = document.getElementById("menu");
  let toggler = el.target;

  if (
    menu === null ||
    menu === undefined ||
    toggler === null ||
    toggler === undefined
  )
    return;

  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});

/* Functions */

/* ----  To Top button: Hide on Top, Show when Scroll --- */
// Get the button:
let topButton = document.getElementById("to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
