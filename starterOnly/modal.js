function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }
  
  // DOM Elements
  const modalBg = document.querySelector(".bground");
  const modalSuccessMessage = document.querySelector("#message-modal");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  const ModalForm = document.querySelector("#modal-form");
  const closeModal = document.querySelector("#close"); /*Cette constante permet de cibler l'élément du DOM ayant l'id "close" (la croix qui ferme la modale)*/
  const closeSuccessMessage = document.querySelector("#message-modal__close-message "); /*Cette constante permet de cibler la croix qui ferme la modale du message de validation*/
  const closeSuccessBtn = document.querySelector('#close-button'); //Cette constante permet de cibler le bouton "fermer" de la modale de validation.
  
  
  let firstName = document.querySelector("#first")
  let lastName = document.querySelector("#last");
  let email = document.querySelector("#email");
  let age = document.querySelector("#birthdate");
  let participations = document.querySelector("#quantity");
  let city = document.querySelector('input[name="location"]');
  let acceptCGU = document.querySelector("#checkbox1");
  /*Ces variables correspondent à chacune des entrées du formulaire,
  je vais les appeler dans une fonction qui va permettre de vérifier la valeur qui a été entrée par l'utilisateur pour chacune de ces variables,
  et définir si cela doit valider le champ ou renvoyer un message d'erreur.*/
  
  let firstNameError = document.querySelector("#firstname-error");
  let lastNameError = document.querySelector("#lastname-error");
  let emailError = document.querySelector("#email-error");
  let ageError = document.querySelector("#age-error");
  let participationsError = document.querySelector("#participations-error");
  let cityError = document.querySelector("#city-error");
  let acceptCGUError = document.querySelector("#cgu-error")
  /*Ces variables correspondent aux messages d'erreurs qui seront modifiés en fonction de la valeur entrée ou non par l'utilisateur
  dans chaque champ du formulaire*/
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // launch modal form
  function launchModal() {
	modalBg.style.display = "block";
  }
  
  // launch closing-modal event
  closeModal.addEventListener('click', e => { //quand on clique sur la croix
	modalBg.style.display = "none"; //la modale passe en display: none
  })
  
  //fonction qui vérifie le champ du prénom :
  function checkFirstName(){
	  if(!firstName.value){ //si le champ est vide
		firstNameError.innerHTML = "Veuillez renseigner un prénom";
		return false; //les données ne seront pas envoyées
	  } else if(firstName.value.length < 2){ //si le champ comporte moins de 2 caractères
		  firstNameError.innerHTML = "Le prénom doit comporter 2 caractères minimum"; //la div du message d'erreur est modifiée (ajout du texte)
		  firstNameError.style.display = "block"; //la div passe de display: none à display: block
		  return false; //les données ne seront pas envoyées
	  } else{ //sinon (si le champ est rempli et s'il comporte au moins 2 caractères)
		  firstNameError.style.display = "none"; //ne pas montrer le message d'erreur
		  return true; //le champ est valide
	  }
  }
  
  //fonction qui vérifie le champ du nom :
  function checkLastName(){
	  if(!lastName.value){ //si le champ est vide
		  lastNameError.innerHTML = "Veuillez renseigner un nom de famille"; //la div du message d'erreur est modifiée (ajout du texte)
		  lastNameError.style.display = "block"; //la div passe de display: none à display: block
		  return false; //les données ne seront pas envoyées
	  } else if(lastName.value.length < 2){ //si le champ comporte moins de 2 caractères
		  lastNameError.innerHTML = "Le nom doit comporter 2 caractères minimum"; //la div du message d'erreur est modifiée (ajout du texte)
		  lastNameError.style.display = "block"; //la div passe de display: none à display: block
		  return false; //les données ne seront pas envoyées
	  } else{ //sinon (si le champ est rempli et s'il comporte au moins 2 caractères)
		  lastNameError.style.display = "none"; //ne pas montrer le message d'erreur
		  return true; //le champ est valide
	  }
  }
  
  //variable qui permet de définir un format de mail valide avec l'utilisation de Regex:
  let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //la première partie du mail peut contenir des lettres majuscules ou minuscules, des chiffres, ainsi que tous les caractères listés avant le "]+@"
  //après le @, on peut trouver des chiffres ou des lettres mais pas de caractères spéciaux
  //il faut qu'il y ait un point "." et que celui-ci ne soit pas le premier ni le dernier caractère + qu'il n'y ait pas 2 points qui se suivent
  //après le point, on trouve encore une chaine de caractères composés de lettres ou chiffres (nom de domaine en .com, .fr,...)
  
  //fonction qui vérifie le champ de l'email :
  function checkEmail(){
	  if(!email.value){ //si le champ est vide
		  emailError.innerHTML = "Veuillez renseigner une adresse email"; //la div du message d'erreur est modifiée (ajout du texte)
		  emailError.style.display = "block"; //la div passe de display:none à display: block
		  return false; //les données ne seront pas envoyées
	  } else if(emailRegExp.exec(email.value) == null){ //si ce qu'a rentré l'utilisateur ne correspond pas à une valeur attendue par la regex définie ci-dessus
		  emailError.innerHTML = "L'adresse mail n'est pas valide"; //la div du message d'erreur est modifiée (ajout du texte)
		  emailError.style.display = "block"; //la div passe de display:none à display: block
		  return false; //les données ne seront pas envoyées
	  } else{ //sinon (si le champ est rempli et si le mail rentré est au bon format)
		  emailError.style.display = "none"; //ne pas montrer le message d'erreur
		  return true; //le champ est valide
	  }
  }
  
  //fonction qui vérifie le champ de la date de naissance :
  function checkAge(){
	  //Je récupère la date de l'utilisateur :
	  let date1 = age.value
	  //Je crée un objet date à partir de cette value :
	  let dateOfUser = new Date(date1);
	  //Je récupère la date actuelle en appelant simplement le constructeur avec sa valeur par défaut :
	  let currentDate = new Date();
	  if(!age.value){ //si le champ est vide
		  ageError.innerHTML = "Veuillez renseigner une date de naissance"; //la div du message d'erreur est modifiée (ajout du texte)
		  ageError.style.display = "block"; //la div passe de display: none à display: block
		  return false; //les données ne seront pas envoyées
	  } else if(dateOfUser >= currentDate){ //si la date entrée par l'utilisateur est supérieure (= dans le futur) ou égale (= même date) à la date du jour
		  ageError.innerHTML = "La date de naissance n'est pas valide"; //la div du message d'erreur est modifiée (ajout du texte)
		  ageError.style.display = "block"; //la div passe de display: none à display: block
		  return false; //les données ne seront pas envoyées
	  } else{ //sinon (si le champ est rempli et que la date est antérieure à la date du jour)
		  ageError.style.display = "none"; //ne pas montrer le message d'erreur
		  return true; //le champ est valide
	  }	
  }
  
  //fonction qui vérifie le champ du nombre de participations :
  function checkParticipations(){
	  if(!participations.value){ //si le champ est vide
		  participationsError.innerHTML = "Veuillez renseigner un nombre de participations (0 si vous n'avez jamais participé)"; //la div du message d'erreur est modifiée (ajout du texte)
		  participationsError.style.display = "block"; //la div passe de display: none à display: block
		  return false; //les données ne seront pas envoyées
	  } else if(participations.value > 99){ //si le nombre de participations est supérieur à 99
		  participationsError.innerHTML = "Le nombre de participations est trop élevé"; //la div du message d'erreur est modifiée (ajout du texte)
		  participationsError.style.display = "block"; //la div passe de display: none à display: block
		  return false; //les données ne seront pas envoyées
	  } else{ //sinon (si le champ est rempli et que le nombre de participations est inférieur ou égal à 99)
		  participationsError.style.display = "none"; //ne pas montrer le message d'erreur
		  return true; //le champ est valide
	  }	
  }
  
  //Je crée un array qui stocke les boutons radios
  let locationArray = [
	  document.getElementById('location1'),
	  document.getElementById('location2'),
	  document.getElementById('location3'),
	  document.getElementById('location4'),
	  document.getElementById('location5'),
	  document.getElementById('location6')];
  
  //fonction qui vérifie si un bouton radio est coché
  function checkCity(){
	  //si TOUS les boutons radios sont unchecked
	  if((!locationArray[0].checked) //je récupère pour l'élément du tableau ayant l'index 0 (location1) la propriété checked.
	  && (!locationArray[1].checked) //idem élément 2...
	  && (!locationArray[2].checked) //...
	  && (!locationArray[3].checked)
	  && (!locationArray[4].checked)
	  && (!locationArray[5].checked)){
		  cityError.innerHTML = "Veuillez renseigner une ville pour participer"; //la div du message d'erreur est modifiée (ajout du texte)
		  cityError.style.display = "block"; //la div passe de display: none à display: block
		  return false; //les données ne seront pas envoyées
	  } else{ //sinon (si un bouton radio est coché)
		  cityError.style.display = "none"; //ne pas montrer le message d'erreur
		  return true; //le champ est valide
	  }
  }
  
  //fonction qui vérifie si la checkbox d'acceptation des CGU est cochée
  function checkCGU(){
	  if(!acceptCGU.checked){ //si la checkbox est décochée
		  acceptCGUError.innerHTML = "Veuillez accepter les conditions générales d'utilisation"; //la div du message d'erreur est modifiée (ajout du texte)
		  acceptCGUError.style.display = "block"; //la div passe de display: none à display: block
		  return false; //les données ne seront pas envoyées
	  } else{ //sinon (si la checkbox est cochée)
		  acceptCGUError.style.display = "none"; //ne pas montrer le message d'erreur
		  return true; //le champ est valide
	  }
  }
  
  //fonction qui ouvre la modale de message de validation :
  function launchModalSuccess() {
	  modalSuccessMessage.style.display = "block";
	}
  
  //fonction qui permet de valider le formulaire et envoyer les données entrées par l'utilisateur :
  function validateform(e){
	  e.preventDefault(); //stopper le comportement par défaut de onsubmit du formulaire
	  let checkFirstNameResult = checkFirstName(); //j'appelle la fonction de vérification du champ prénom et je la stocke dans une variable
	  let checkLastNameResult = checkLastName(); //j'appelle la fonction de vérification du champ nom et je la stocke dans une variable
	  let checkEmailResult = checkEmail(); //j'appelle la fonction de vérification du champ email et je la stocke dans une variable
	  let checkAgeResult = checkAge(); //j'appelle la fonction de vérification du champ âge et je la stocke dans une variable
	  let checkParticipationsResult = checkParticipations(); //j'appelle la fonction de vérification du champ participations et je la stocke dans une variable
	  let checkCityResult = checkCity(); //j'appelle la fonction de vérification des boutons radios de villes et je la stocke dans une variable
	  let checkCGUResult = checkCGU(); //j'appelle la fonction de vérification de la checkbox des CGU et je la stocke dans une variable
	  
	  if(checkFirstNameResult //si la variable retourne 'true' (correspond au "return: true" dans le "else" de la fonction checkFirstName)
		  && checkLastNameResult //idem
		  && checkEmailResult //idem
		  && checkAgeResult //...
		  && checkParticipationsResult
		  && checkCityResult
		  && checkCGUResult){ //si toutes les fonctions retournent "true" (tous les champs sont valides)
		  modalBg.style.display = "none"; //la modale passe en display: none
		  launchModalSuccess(); //la modale de message de validation s'affiche
		  return true; //valider le formulaire
	  }
  }
  
// closing the success modal
closeSuccessMessage.addEventListener('click', e => { //quand on clique sur la croix
	modalSuccessMessage.style.display = "none"; //la modale passe en display: none
  })

closeSuccessBtn.addEventListener('click', e => { //quand on clique sur le bouton "fermer"
	modalSuccessMessage.style.display = "none"; //la modale passe en display: none
})


// Close a model with ‘Escape’ key
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalBg.style.display = 'none'
  }
})
// Close a thanks message with ‘Escape’ key
window.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		modalSuccessMessage.style.display = 'none'
	}
  })
  // Close a thanks message with 'Enter' key
window.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		modalSuccessMessage.style.display = 'none'
	}
  })
  //YaSsEr 