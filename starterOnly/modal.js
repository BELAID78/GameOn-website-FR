// Nav responsive
function editNav() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// Clic "je m'inscris"
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Lancement formulaire (changement du display en block)
function launchModal() {
  modalbg.style.display = "block";
}

// Function Message erreur
function showErrorMessage(champForm, formRempli, message) {
	champForm.target.setCustomValidity("");
	if (!champForm.target.validity.valid && champForm.target.value.length == 0) {
			champForm.target.setCustomValidity(message);
	}
};

// Messages d'erreurs par champs pour le formulaire
document.getElementById("inscription").addEventListener("click", function(formRempli) {

	let firstName = document.getElementById("first");
	let lastName = document.getElementById("last");
	let emailValid = document.getElementById("email");
	let birthValid = document.getElementById("birthdate");
	let quantityCity = document.getElementById("quantity");
	let checkBox = document.getElementById("checkbox1");

	const thankBtn = document.querySelectorAll(".thank-btn");
	const thankBg = document.querySelector(".bground-thank");
	
	if (!firstName.value) {
		firstName.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
		};	
		return false;	
	}
	if (!lastName.value) {
		lastName.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
		};
		return false;	
	} 
	if (!emailValid.value) {
		emailValid.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Entrez une adresse valide. Exemple : contact@nom.com")
		};
		return false;	
	}
	if (!birthValid.value) {
		birthValid.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Vous devez entrer votre date de naissance.")
		};
		return false;	
	}
	if (!quantityCity.value) {
		quantityCity.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Vous devez renseigner ce champ.")
		};
		return false;	
	}
	if (!checkBox.value) {
		checkBox.oninvalid = function(champForm, formRempli, message) {
				champForm.target.setCustomValidity("");
				if (!champForm.checked) {
						return true;
				}
				else {
					champForm.target.setCustomValidity("Vous devez renseigner ce champ.");
				}
			};
		return false;	
	}
	else {
		thankBtn.forEach((btn) => btn.addEventListener("click", launchThank));
		function launchThank() {
			thankBg.style.display = "block";
		  }
		}
	}
	);