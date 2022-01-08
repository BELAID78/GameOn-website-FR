function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const thankBtn = document.querySelectorAll(".thank-btn");
const thankBg = document.querySelector(".bground-thank");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch thank event
thankBtn.forEach((btn) => btn.addEventListener("click", launchThank));

// launch thank form
function launchThank() {
  thankBg.style.display = "block";
}