"use strict"

//Menu burger
document.addEventListener("DOMContentLoaded", function () {
  //obtient les references de licone du menu burger, du menu de navigation et de l'overlay
  const headerMobile = document.querySelector(".header-mobile");
  const navMobile = document.querySelector(".nav-mobile");
  const navMobileClose = document.querySelector(".nav-mobile-close")
  const mobileOverlay = document.querySelector(".mobile-overlay")
  //ajoute un evenement quand on clic sur l'icone du menu burger
  headerMobile.addEventListener("click", function () {
    //bascule la clsse 'active' pour affiche/masquer le menu de navigation et l'overlay
    navMobile.classList.toggle("active");
    mobileOverlay.classList.toggle("active");
  });
  //ajoute un evenement quand on clic sur l'icone de croix dans le menu de navigation
  navMobileClose.addEventListener("click", function () {
    //bascule la clsse 'active' pour affiche/masquer le menu de navigation et l'overlay
    navMobile.classList.toggle("active");
    mobileOverlay.classList.toggle("active");
  });
  //ajoute un evenement quand on clic sur l'overlay
  mobileOverlay.addEventListener("click", function () {
    //bascule la clsse 'active' pour affiche/masquer le menu de navigation et l'overlay
    navMobile.classList.toggle("active");
    mobileOverlay.classList.toggle("active");
  });
});

//Connexion
document.addEventListener("DOMContentLoaded", function (){
  let connexionButton = document.querySelector("#connexionButton")
  const connexionClose = document.querySelector(".close")
  const connexion = document.querySelector(".container")
  //ajoute un evenement quand on clic sur le boutton de connexion
  connexionButton.addEventListener("click",function (){
    connexion.classList.toggle("active");
  })
  //ajoute un evenement quand on clic sur l'icone de croix de la page de connexion
  connexionClose.addEventListener("click",function (){
    connexion.classList.toggle("active");
  })
})

//Inscription
{
document.addEventListener("DOMContentLoaded", function (){
  let incriptionButton = document.querySelector("#inscriptionButton");
  const inscriptionClose = document.querySelector(".closeIncription");
  const inscription = document.querySelector(".formInscription");
  const formOverlay = document.querySelector(".form-overlay");
  //ajoute un evenement quand on clic sur le boutton de inscription
  incriptionButton.addEventListener("click",function (){
    inscription.classList.toggle("active");
    formOverlay.classList.toggle("active");
  })
  //ajoute un evenement quand on clic sur l'icone de croix de la page de inscription
  inscriptionClose.addEventListener("click",function (event){
    event.preventDefault();
    inscription.classList.toggle("active");
    formOverlay.classList.toggle("active");
  })
})

let formInscription = document.querySelector(".formInscription");
let formOverlay = document.querySelector(".form-overlay");
let nom = document.querySelector("#nom");
let pseudo = document.querySelector("#pseudo");
let email = document.querySelector('#email');
let passwordInput = document.querySelector("#password2");
let form = document.querySelector("#form2");

console.log(nom, pseudo)

function nouvelleInterface(nom, email) {
  if (theme=="light"){
    formInscription.innerHTML = `
    <div class="containerInscription">
        <div class="headInscription">
            <div class="titleInscription">Bienvenue ${nom}</div>
            <div> Email enregistré : ${email}</div>
            <div class="closeIncription">
              <a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" id="menu" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg> </a>
            </div>
        </div>
    </div>
      `
  } else {
    formInscription.innerHTML = `
    <div class="containerInscription dark">
        <div class="headInscription">
            <div class="titleInscription formTexte dark">Bienvenue ${nom}</div>
            <div class="formTexte dark"> Email enregistré : ${email}</div>
            <div class="closeIncription dark">
              <a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" id="menu" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg> </a>
            </div>
        </div>
    </div>
      `
  }

  let closeNouvelInterface = document.querySelector(".closeIncription")
  closeNouvelInterface.addEventListener("click", function(event){
    event.preventDefault();
    formInscription.classList.toggle("active");
    formOverlay.classList.toggle("active");
  })
  
  formInscription.reset();

}

form.addEventListener('submit', e => {
    e.preventDefault()
    let nomRecup = nom.value
    let emailRecup = email.value
    form.remove()

    nouvelleInterface(nomRecup, emailRecup)
})

passwordInput.addEventListener('input', function () {
  let passwordError = document.querySelector(".mdp");

  let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

  if (passwordRegex.toLocaleString(passwordInput.value) && passwordInput.value.length >= 8){
      passwordError.textContent="";
  } else {
      passwordError.textContent = "Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 caractères de long.";
  }
})

}

// Dark Mode
let theme = "light";
document.addEventListener("DOMContentLoaded", function (){
  let darkMode = document.querySelector(".dark-mode") 
  let darkTexte = document.querySelector(".dark-txt");
  let body = document.querySelector("body");
  let header = document.querySelector(".header");
  let icon = document.querySelectorAll("#menu")
  let headerMobile = document.querySelector(".header-mobile");
  let mainTitre = document.querySelector(".titre");
  let navMobile = document.querySelector(".nav-mobile");
  let navMobileClose = document.querySelector(".nav-mobile-close");
  let container= document.querySelector(".container");
  let container2 = document.querySelector(".containerInscription")
  let formTexte = document.querySelectorAll(".formTexte")
  let input = document.querySelectorAll("form .box input");
  let input2 = document.querySelectorAll("#form2 .boxInscription input")
  let close = document.querySelector(".close");
  let close2 = document.querySelector(".closeIncription");
  let menuT = document.querySelectorAll(".nav-mobile-menu a");
  let profilButton = document.querySelectorAll(".profilButton");
  let lienSocial = document.querySelectorAll(".liens");

  darkMode.addEventListener("click",function (){
    if (theme=="light"){theme = "dark"}
    else{theme = "light"};
    darkMode.classList.toggle("active");
    darkTexte.classList.toggle("dark");
    body.classList.toggle("dark");
    header.classList.toggle("dark");
    icon.forEach(element =>{
      element.classList.toggle("dark")
    })
    headerMobile.classList.toggle("dark");
    mainTitre.classList.toggle("dark");
    navMobile.classList.toggle("dark");
    navMobileClose.classList.toggle("dark");
    container.classList.toggle("dark");
    container2.classList.toggle("dark");
    input.forEach(element =>{
      element.classList.toggle("dark");
    })
    input2.forEach(element =>{
      element.classList.toggle("dark")
    })
    formTexte.forEach(element =>{
      element.classList.toggle("dark")
    })
    close.classList.toggle("dark");
    close2.classList.toggle("dark");
    menuT.forEach(element =>{
      element.classList.toggle("dark")
    })
    profilButton.forEach(element =>{
      element.classList.toggle("dark")
    })
    lienSocial.forEach(element =>{
      element.classList.toggle("dark")
    })
  })

  darkMode.addEventListener("click",function (){
    let monLogo = document.querySelector("img").getAttribute('src');
    if (monLogo =="img/Harry_potter_logo.png"){
      document.querySelector("img").src = "img/Harry_potter_logo_blanc.png";
    } else {
      document.querySelector("img").src = "img/Harry_potter_logo.png";
    }
  })

})