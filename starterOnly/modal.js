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
  const closeModal = document.querySelector("#close"); 
  const closeSuccessMessage = document.querySelector("#message-modal__close-message ");
  const closeSuccessBtn = document.querySelector('#close-button'); 
  
  
  let firstName = document.querySelector("#first")
  let lastName = document.querySelector("#last");
  let email = document.querySelector("#email");
  let age = document.querySelector("#birthdate");
  let participations = document.querySelector("#quantity");
  let city = document.querySelector('input[name="location"]');
  let acceptCGU = document.querySelector("#checkbox1");
   
  let firstNameError = document.querySelector("#firstname-error");
  let lastNameError = document.querySelector("#lastname-error");
  let emailError = document.querySelector("#email-error");
  let ageError = document.querySelector("#age-error");
  let participationsError = document.querySelector("#participations-error");
  let cityError = document.querySelector("#city-error");
  let acceptCGUError = document.querySelector("#cgu-error")

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // launch modal form
  function launchModal() {
	modalBg.style.display = "block";
  }
  
  // launch closing-modal event
  closeModal.addEventListener('click', e => {
	modalBg.style.display = "none"; 
  })
  
  //fonction qui vérifie le champ du prénom :
  function checkFirstName(){
	  if(!firstName.value){ 
		firstNameError.innerHTML = "Veuillez renseigner un prénom";
		return false; 
	  } else if(firstName.value.length < 2){ 
		  firstNameError.innerHTML = "Le prénom doit comporter 2 caractères minimum";
		  firstNameError.style.display = "block"; 
		  return false; 
	  } else{ 
		  firstNameError.style.display = "none";
		  return true; 
	  }
  }
  
  //fonction qui vérifie le champ du nom :
  function checkLastName(){
	  if(!lastName.value){ 
		  lastNameError.innerHTML = "Veuillez renseigner un nom de famille"; 
		  lastNameError.style.display = "block"; 
		  return false; 
	  } else if(lastName.value.length < 2){ 
		  lastNameError.innerHTML = "Le nom doit comporter 2 caractères minimum";
		  lastNameError.style.display = "block";
		  return false;
	  } else{ 
		  lastNameError.style.display = "none"; 
		  return true;
	  }
  }
  
  //variable qui permet de définir un format de mail valide avec l'utilisation de Regex:
  let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //fonction qui vérifie le champ de l'email :
  function checkEmail(){
	  if(!email.value){ 
		  emailError.innerHTML = "Veuillez renseigner une adresse email"; 
		  emailError.style.display = "block"; 
		  return false; 
	  } else if(emailRegExp.exec(email.value) == null){ 
		  emailError.innerHTML = "L'adresse mail n'est pas valide"; 
		  emailError.style.display = "block"; 
		  return false;
	  } else{ 
		  emailError.style.display = "none"; 
		  return true; 
	  }
  }
  
  //fonction qui vérifie le champ de la date de naissance :
  function checkAge(){
	  
	  let date1 = age.value
	  
	  let dateOfUser = new Date(date1);
	  
	  let currentDate = new Date();
	  if(!age.value){ 
		  ageError.innerHTML = "Veuillez renseigner une date de naissance"; 
		  ageError.style.display = "block"; 
		  return false; 
	  } else if(dateOfUser >= currentDate){
		  ageError.innerHTML = "La date de naissance n'est pas valide";
		  ageError.style.display = "block";
		  return false; 
	  } else{
		  ageError.style.display = "none";
		  return true;
	  }	
  }
  
  //fonction qui vérifie le champ du nombre de participations :
  function checkParticipations(){
	  if(!participations.value){
		  participationsError.innerHTML = "Veuillez renseigner un nombre de participations (0 si vous n'avez jamais participé)";
		  participationsError.style.display = "block";
		  return false;
	  } else if(participations.value > 99){
		  participationsError.innerHTML = "Le nombre de participations est trop élevé";
		  participationsError.style.display = "block";
		  return false;
	  } else{
		  participationsError.style.display = "none";
		  return true;
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
	  
	  if((!locationArray[0].checked) 
	  && (!locationArray[1].checked) 
	  && (!locationArray[2].checked) 
	  && (!locationArray[3].checked)
	  && (!locationArray[4].checked)
	  && (!locationArray[5].checked)){
		  cityError.innerHTML = "Veuillez renseigner une ville pour participer";
		  cityError.style.display = "block";
		  return false;
	  } else{
		  cityError.style.display = "none";
		  return true;
	  }
  }
  
    function checkCGU(){
	  if(!acceptCGU.checked){
		  acceptCGUError.innerHTML = "Veuillez accepter les conditions générales d'utilisation";
		  acceptCGUError.style.display = "block";
		  return false;
	  } else{
		  acceptCGUError.style.display = "none";
		  return true;
	  }
  }
  
    function launchModalSuccess() {
	  modalSuccessMessage.style.display = "block";
	}
  
    function validateform(e){
	  e.preventDefault();
	  let checkFirstNameResult = checkFirstName();
	  let checkLastNameResult = checkLastName();
	  let checkEmailResult = checkEmail();
	  let checkAgeResult = checkAge();
	  let checkParticipationsResult = checkParticipations();
	  let checkCityResult = checkCity();
	  let checkCGUResult = checkCGU();
	  
	  if(checkFirstNameResult
		  && checkLastNameResult
		  && checkEmailResult
		  && checkAgeResult
		  && checkParticipationsResult
		  && checkCityResult
		  && checkCGUResult){
		  modalBg.style.display = "none";
		  launchModalSuccess();
		  return true;
	  }
  }
  
// closing the success modal
closeSuccessMessage.addEventListener('click', e => {
	modalSuccessMessage.style.display = "none";
  })

closeSuccessBtn.addEventListener('click', e => {
	modalSuccessMessage.style.display = "none";
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
