"use strict"

const dataArray = [
  {nom: "Harry Potter", maison: "gryffondor", data:"Gry", acteur: "Daniel Radcliffe", img: "imgPersonnages/Harry-Potter.jpg", possession: "acquis"},
  {nom: "Hermione Granger", maison: "gryffondor", data:"Gry", acteur: "Emma Watson", img: "imgPersonnages/Hermione-Granger.jpg", possession: "non-acquis"},
  {nom: "Voldemort", maison: "serpentard", data:"Serp", acteur: "Ralph Fiennes", img: "imgPersonnages/Voldemort.jpg", possession: "non-acquis"},
  {nom: "Albus Dumbledore", maison: "gryffondor", data:"Gry", acteur: "Michael Gambon", img: "imgPersonnages/Albus-Dumbledore.jpg", possession: "non-acquis"},
  {nom: "Luna Lovegood", maison: "serdaigle", data:"Serd", acteur: "Evanna Lynch", img: "imgPersonnages/Luna-Lovegood.jpg", possession: "non-acquis"},
  {nom: "Dobby", maison: "autre", data:"autres", acteur: "Toby Jones", img: "imgPersonnages/Dobby.jpg", possession: "non-acquis"},
  {nom: "Sirius Black", maison: "gryffondor", data:"Gry", acteur: "Gary Oldman", img: "imgPersonnages/Sirius-Black.jpg", possession: "non-acquis"},
  {nom: "Neville Londubat", maison: "gryffondor", data:"Gry", acteur: "Matthew Lewis", img: "imgPersonnages/Neville-Londubat.jpg", possession: "non-acquis"},
  {nom: "Severus Rogue", maison: "serpentard", data:"Serp", acteur: "Alan Rickman", img: "imgPersonnages/Severus-Rogue.jpg", possession: "non-acquis"},
  {nom: "Drago Malefoy", maison: "serpentard", data:"Serp", acteur: "Tom Felton", img: "imgPersonnages/Drago-Malefoy.jpg", possession: "non-acquis"},
  {nom: "Ron Weasley", maison: "gryffondor", data:"Gry", acteur: "Rupert Grint", img: "imgPersonnages/Ron-Weasley.jpg", possession: "non-acquis"},
  {nom: "Rubeus Hagrid", maison: "gryffondor", data:"Gry", acteur: "Robbie Coltrane", img: "imgPersonnages/Rubeus-Hagrid.jpg", possession: "non-acquis"},
  {nom: "Cedric Diggory", maison: "poufsouffle", data:"Pouf", acteur: "Robert Pattinson", img: "imgPersonnages/Cedric-Diggory.jpg", possession: "non-acquis"},
  {nom: "Minerva McGonagall", maison: "gryffondor", data:"Gry", acteur: "Maggie Smith", img: "imgPersonnages/Minerva-McGonagall.jpg", possession: "non-acquis"},
  {nom: "Dolores Ombrage", maison: "serpentard", data:"Serp", acteur: "Imelda Staunton", img: "imgPersonnages/Dolores-Ombrage.jpg", possession: "non-acquis"},
  {nom: "Choixpeau", maison: "autre", data:"autres", acteur: "Leslie Phillips", img: "imgPersonnages/Choixpeau.jpg", possession: "non-acquis"},
  {nom: "Gellert Grindelwald", maison: "autre", data:"autres", acteur: "Mads Mikkelsen", img: "imgPersonnages/Gellert-Grindelwald.jpg", possession: "non-acquis"},
  {nom: "Peter Pettigrow", maison: "gryffondor", data:"Gry", acteur: "Timothy Spall", img: "imgPersonnages/Peter-Pettigrow.jpg", possession: "non-acquis"},
  {nom: "Norbert Dragonneau", maison: "poufsouffle", data:"Pouf", acteur: "Eddie Redmayne", img: "imgPersonnages/Norbert-Dragonneau.jpg", possession: "non-acquis"},
  {nom: "Remus Lupin", maison: "gryffondor", data:"Gry", acteur: "David Thewlis", img: "imgPersonnages/Remus-Lupin.jpg", possession: "non-acquis"},
  {nom: "Bellatrix Lestrange", maison: "serpentard", data:"Serp", acteur: "Helena Bonham Carter", img: "imgPersonnages/Bellatrix-Lestrange.jpg", possession: "non-acquis"},
  {nom: "Hedwige", maison: "autre", data:"autres", acteur: "Gizmo", img: "imgPersonnages/Hedwige.jpg", possession: "non-acquis"},
  {nom: "Ginny Weasley", maison: "gryffondor", data:"Gry", acteur: "Bonnie Wright", img: "imgPersonnages/Ginny-Weasley.jpg", possession: "non-acquis"},
  {nom: "Nagini", maison: "autre", data:"autres", acteur: "Claudia Kim", img: "imgPersonnages/Nagini.jpg", possession: "non-acquis"},
  {nom: "Nymphadora Tonks", maison: "poufsouffle", data:"Pouf", acteur: "Natalia Tena", img: "imgPersonnages/Nymphadora-Tonks.jpg", possession: "non-acquis"},
  {nom: "Regulus Black", maison: "serpentard", data:"Serp", acteur: "Tom Moorcroft", img: "imgPersonnages/Regulus-Black.jpg", possession: "non-acquis"},
  {nom: "Lucius Malefoy", maison: "serpentard", data:"Serp", acteur: "Jason Isaacs", img: "imgPersonnages/Lucius-Malefoy.jpg", possession: "non-acquis"},
  {nom: "Fleur Delacour", maison: "autre", data:"autres", acteur: "Clémence Poésy", img: "imgPersonnages/Fleur-Delacour.jpg", possession: "non-acquis"},
  {nom: "Alastor Maugrey", maison: "autre", data:"autres", acteur: "Brendan Gleeson", img: "imgPersonnages/Alastor-Maugrey.jpg", possession: "non-acquis"},
  {nom: "Mimi Geignarde", maison: "serdaigle", data:"Serd", acteur: "Shirley Henderson", img: "imgPersonnages/Mimi-Geignarde.jpg", possession: "non-acquis"},
  {nom: "Argus Rusard", maison: "autre", data:"autres", acteur: "David Bradley", img: "imgPersonnages/Argus-Rusard.jpg", possession: "non-acquis"},
  {nom: "Nicolas Flamel", maison: "autre", data:"autres", acteur: "Brontis Jodorowsky", img: "imgPersonnages/Nicholas-Flamel.jpg", possession: "non-acquis"},
  {nom: "Dudley Dursley", maison: "autre", data:"autres", acteur: "Harry Melling", img: "imgPersonnages/Dudley-Dursley.jpg", possession: "non-acquis"},
  {nom: "Lily Potter", maison: "gryffondor", data:"Gry", acteur: "Ellie Darcey-Alden", img: "imgPersonnages/Lily-Potter.jpg", possession: "non-acquis"},
  {nom: "Cho Chang", maison: "serdaigle", data:"Serd", acteur: "Katie Leung", img: "imgPersonnages/Cho-Chang.jpg", possession: "non-acquis"},
  {nom: "Sibylle Trelawney", maison: "serdaigle", data:"Serd", acteur: "Emma Thompson", img: "imgPersonnages/Sibylle-Trelawney.jpg", possession: "non-acquis"},
  {nom: "Albus Severus Potter", maison: "serpentard", data:"Serp", acteur: "Arthur Bowen", img: "imgPersonnages/Albus-Severus-Potter.jpg", possession: "non-acquis"},
  {nom: "Astoria Greengrass", maison: "serpentard", data:"Serp", acteur: "Jade Gordon", img: "imgPersonnages/Astoria-Greengrass.jpg", possession: "non-acquis"},
  {nom: "James Potter", maison: "gryffondor", data:"Gry", acteur: "Adrian Rawlins", img: "imgPersonnages/James-Potter.jpg", possession: "non-acquis"},
  {nom: "Pansy Parkinson", maison: "serpentard", data:"Serp", acteur: "Katherine Nicholson", img: "imgPersonnages/Pansy-Parkinson.jpg", possession: "non-acquis"},
  {nom: "Gilderoy Lockhart", maison: "serdaigle", data:"Serd", acteur: "Kenneth Branagh", img: "imgPersonnages/Gilderoy-Lockhart.jpg", possession: "non-acquis"},
  {nom: "Narcissa Malefoy", maison: "serpentard", data:"Serp", acteur: "Helen McCrory", img: "imgPersonnages/Narcissa-Malefoy.jpg", possession: "non-acquis"},
  {nom: "Dean Thomas", maison: "gryffondor", data:"Gry", acteur: "Alfred Enoch", img: "imgPersonnages/Dean-Thomas.jpg", possession: "non-acquis"},
  {nom: "Fred Weasley", maison: "gryffondor", data:"Gry", acteur: "James Phelps", img: "imgPersonnages/Fred-Weasley.jpg", possession: "non-acquis"},
  {nom: "Peeves", maison: "autre", data:"autres", acteur: "Rik Mayall", img: "imgPersonnages/Peeves.jpg", possession: "non-acquis"},
  {nom: "Gregory Goyle", maison: "serpentard", data:"Serp", acteur: "Josh Herdman", img: "imgPersonnages/Gregory-Goyle.jpg", possession: "non-acquis"},
]

// Se lance au chargement de la page
// Permet de créer les cartes pour chaque perso de dataArray
function creerCartes(array) {
  array.forEach(card => {
    
    const cartePerso = document.createElement("div")
    cartePerso.className = "carte";
    cartePerso.setAttribute('data-name', card.data)
  
    cartePerso.innerHTML = `
    <div class="tag">
        <span class="${card.maison}">${card.maison}</span>
        <span class="${card.possession}">${card.possession}</span>
    </div>
    <img src="${card.img}" alt="" draggable="false">
    <div class="carte-texte">
        <h1 class="nom">${card.nom}</h1>
        <p class="acteur">${card.acteur}</p>
    </div>
    `
    rechercheResult.appendChild(cartePerso)
    
  });
}


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

//echange
document.addEventListener("DOMContentLoaded",function (){
  let btnFlottant = document.querySelector(".btnFlottant")
  let echangeForm = document.querySelector(".echangeForm")
  let closeEchanges = document.querySelector(".closeEchanges")
  btnFlottant.addEventListener("click",function(){
    echangeForm.classList.toggle("active");
  })
  closeEchanges.addEventListener("click", function(){
    echangeForm.classList.toggle("active");
  })
})

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
  let filtreBtn = document.querySelector(".filtre-btn");
  let cartefiltreBtn = document.querySelectorAll(".cartes-filtres button");
  let RechercheBarre = document.querySelector(".barre-recherche");
  let inputBarre = document.querySelector(".barre-recherche input");
  let txtBibliotheque = document.querySelector(".bibliotheque-description");
  let bosterCarte = document.querySelector(".droite .boster-texte");
  let bosterPage = document.querySelector("#boster");
  let btnFlottant = document.querySelector(".btnFlottant")
  let echangeForm = document.querySelector(".echangeForm")
  let echangeClose = document.querySelector(".closeEchanges")
  let boxEchangeInput = document.querySelectorAll(".boxEchanges");

  darkMode.addEventListener("click",function (){
    if (theme=="light"){theme = "dark"}
    else{theme = "light"};
    darkMode.classList.toggle("dark");
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
    filtreBtn.classList.toggle("dark")
    cartefiltreBtn.forEach(element =>{
      element.classList.toggle("dark")
    })
    RechercheBarre.classList.toggle("dark")
    inputBarre.classList.toggle("dark")
    txtBibliotheque.classList.toggle("dark")
    bosterCarte.classList.toggle("dark")
    bosterPage.classList.toggle("dark")
    btnFlottant.classList.toggle("dark")
    echangeForm.classList.toggle("dark")
    echangeClose.classList.toggle("dark")
    boxEchangeInput.forEach(element =>{
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


//Barre de recherche
let rechercheInput = document.querySelector("#search");
let rechercheResult = document.querySelector(".boite");

rechercheInput.addEventListener('input', function(e){
  rechercheResult.innerHTML = '';
  let filteredArray = dataArray.filter(personnage => personnage.nom.toLowerCase().startsWith(rechercheInput.value.toLowerCase()))
  
  if (rechercheInput.value) {
    creerCartes(filteredArray)
  } else {
    creerCartes(dataArray)
  }
  
})

creerCartes(dataArray)

//Filtre
let filtreEntree = document.querySelector(".filtre-btn");
let filtres = document.querySelector(".cartes-filtres");
let barreRecherche = document.querySelector(".barre-recherche")
let barreLabel = document.querySelector(".barre-recherche label")

barreLabel.addEventListener("click", function(){
  filtres.classList.toggle("activ");
  filtreEntree.classList.toggle("activ");
  barreRecherche.classList.toggle("active");
})

filtreEntree.addEventListener("click", function(){
  filtres.classList.toggle("activ");
  filtreEntree.classList.toggle("activ");
  barreRecherche.classList.toggle("active");
})


const filtreButton = document.querySelectorAll('.cartes-filtres button');
const filtreCarte = document.querySelectorAll('.carte');

const estFiltreCarte = (e) =>{
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  console.log(e.target)

  filtreCarte.forEach(card => {
    card.classList.add("hide");

    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "tous"){
      card.classList.remove("hide");
    }
  });
}

filtreButton.forEach(button => button.addEventListener("click", estFiltreCarte))
