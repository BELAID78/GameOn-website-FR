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


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* launch thank event
thankBtn.forEach((btn) => btn.addEventListener("click", launchThank));
function launchThank() {
  thankBg.style.display = "block";
  	
	thankBtn.addEventListener("click",  function(launchThank) {
			thankBg.style.display = "block";
}*/

document.getElementById("inscription").addEventListener("click", function(f) {

	let firstName = document.getElementById("first");
	let lastName = document.getElementById("last");
	let emailValid = document.getElementById("email");
	let birthValid = document.getElementById("birthdate");
	let quantityCity = document.getElementById("quantity");
	let checkBox = document.getElementById("checkbox1");

	let thankBtn = document.querySelector(".thank-btn");
	let thankBg = document.querySelector(".bground-thank");

	if (!firstName.value) {
		firstName.oninvalid = function(e) {
			e.target.setCustomValidity("");
			if (!e.target.validity.valid) {
				if (e.target.value.length == 0) {
					f.preventDefault();
					e.target.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
				}
			}
		};		
	}
	else if (!lastName.value) {
		lastName.oninvalid = function(e) {
			e.target.setCustomValidity("");
			if (!e.target.validity.valid) {
				if (e.target.value.length == 0) {
					f.preventDefault();
					e.target.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
				}
			}
		};
	} 
	else if (!emailValid.value) {
		emailValid.oninvalid = function(e) {
			e.target.setCustomValidity("");
			if (!e.target.validity.valid) {
				if (e.target.value.length == 0) {
					f.preventDefault();
					e.target.setCustomValidity("Entrez une adresse valide. Exemple : contact@nom.com");
					return true;
				}
			}
		};
	}
	else if (!birthValid.value) {
		birthValid.oninvalid = function(e) {
			e.target.setCustomValidity("");
			if (!e.target.validity.valid) {
				if (e.target.value.length == 0) {
					f.preventDefault();
					e.target.setCustomValidity("Vous devez entrer votre date de naissance.");
				}
			}
		};
	}
	else if (!quantityCity.value) {
		quantityCity.oninvalid = function(e) {
			e.target.setCustomValidity("");
			if (!e.target.validity.valid) {
				if (e.target.value.length == 0) {
					f.preventDefault();
					e.target.setCustomValidity("Vous devez renseigner ce champ.");
				}
			}
		};
	}
	else if (!checkBox.unchecked) {
		checkBox.oninvalid = function(e) {
			e.target.setCustomValidity("");
			if (!e.target.validity.valid) {
				if (e.target.value.length == 0) {
					f.preventDefault();
					e.target.setCustomValidity("Vous devez accepter les conditions.");
				}
			}
		};
	}
	else {thankBtn.forEach((btn) => btn.addEventListener("click", launchThank));
	function launchThank() {
	  thankBg.style.display = "block";
		}
	}
});