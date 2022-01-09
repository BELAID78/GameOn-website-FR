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
}*/

document.getElementById("inscription").addEventListener("click", function(f) {

	let erreur;
	let firstName = document.getElementById("first");
	let lastName = document.getElementById("last");
	let emailValid = document.getElementById("email");
	let birthValid = document.getElementById("birthdate");
	let quantityCity = document.getElementById("quantity");
	let checkBox = document.getElementById("checkbox1");

	const thankBtn = document.querySelectorAll(".thank-btn");
	const thankBg = document.querySelector(".bground-thank");

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
	if (!lastName.value) {
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
	if (!emailValid.value) {
		emailValid.oninvalid = function(e) {
			e.target.setCustomValidity("");
			if (!e.target.validity.valid) {
				if (e.target.value.length == 0) {
					f.preventDefault();
					e.target.setCustomValidity("Entrez une adresse valide. Exemple : contact@nom.com");
				}
			}
		};
	}
	if (!birthValid.value) {
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
	if (!quantityCity.value) {
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
	if (!checkBox.value) {
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
	else {
		thankBtn.forEach((btn) => btn.addEventListener("click", launchThank));
		function launchThank() {
			thankBg.style.display = "block";
		  }
		}
	}
	);