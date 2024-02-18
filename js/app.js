// ETAPE N°1 GENERATION D'UNE GRILLE 8x8 - FONCTION drawbOARD

// Création des formulaires pour le choix de la taille de la grille et le nombre de pixel
// On pointe la classe configuration car c'es une balise type "formulaire"
const form = document.querySelector(".configuration");

// Element container pour notre grille de pixels

// Fonction qui génère un nombre de ligne

// Variables pour la taille de la grille
let gridSize = 8;
let pixelSize = 50;

function numberLigne() {
  // On pointe la div avec la class "invader"
  const board = document.getElementById("invader");
  // On Créée une nouvelle "div"
  let ligne = document.createElement("div");
  // On ajoute une "class"
  ligne.classList.add("ligne");
  console.log(ligne);

  board.appendChild(ligne);
  console.log(ligne);

  return ligne;
}

numberLigne(8);

// Fonction qui génère un nobre de pixel

function numberPixel() {
  // on pointe la div avec la class "invader" - déja fait

  // On créé une nouvelle "div"
  const pixel = document.createElement("div");
  // On ajoute une class à cette div
  pixel.classList.add("pixel");
  pixel.style.height = pixelSize + "px";
}
