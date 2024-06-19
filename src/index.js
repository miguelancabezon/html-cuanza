console.log("LANG " + document.documentElement.lang);

/* Listeners */

document.getElementById("top-toggler").addEventListener("click", (el) => {
  let topMenu = document.getElementsByClassName("top-navigation")[0];
  let toggler = el.target;

  if (topMenu === null || topMenu === undefined) {
    return;
  }

  if (toggler === null || toggler === undefined) {
    return;
  }

  if (topMenu.style.display === "flex") {
    topMenu.style.display = "none";
    toggler.style.transform = "rotate(0deg)";
  } else {
    topMenu.style.display = "flex";
    toggler.style.transform = "rotate(90deg)";
  }
});

/* Functions */

/* ----  To Top button: Hide on Top, Show when Scroll --- */
// Get the button:
let mybutton = document.getElementById("to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
