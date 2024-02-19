// GAME INVADER

// Création des 3 formulaires pour le choix de la taille de la grille, le nombre de pixel et validation

// I - Formulaire pour la taille de ma grille

// 1 - On pointe la classe configuration car c'es une balise type "formulaire"
const form = document.querySelector(".configuration");
//form.style.background = "#CCFFCC";

// 2 - Création de l'input pour la taille de la grille
const sizeGrid = document.createElement("input");

// 3 - On va insérer du texte dans l'input "taille de la grille"
sizeGrid.setAttribute("placeholder", "Taille de la grille"); // On insére un placeholder dans l'input
sizeGrid.setAttribute("id", "valueInput"); // On donne un "id" à cet input
sizeGrid.style.textAlign = "center";
sizeGrid.style.height = " 30px";
sizeGrid.style.borderRadius = "10px 0px 0px 10px";
sizeGrid.style.background = "#00FFFF";
// 4 - On affiche le nouvel input dans le DOM
form.appendChild(sizeGrid);

// II - Formulaire pour le nombre de pixels

// 1 - Création de l'input pour le nombre de pixel
sizePixel = document.createElement("input");
// 2 - Insertion du texte dans l'input
sizePixel.setAttribute("placeholder", "Nombre de pixel");
sizePixel.setAttribute("id", "valuePixel");
sizePixel.style.textAlign = "center";
sizePixel.style.background = "#00CCFF";

// 3 - Affichage dans le DOM
form.appendChild(sizePixel);

// III - Création d'un bouton "validation"
// 1 - Création du bouton
validboutton = document.createElement("button");
// 2 - Création d'une classe pour le bouton et ajout de texte dans cette classe
validboutton.classList.add("buttonValid");
validboutton.textContent = "valider";
validboutton.style.background = "#CC66FF";
validboutton.style.borderRadius = " 0px 10px 10px 0px";
// 3 - Affichage dans le DOM
form.appendChild(validboutton);

// Récupéreation des valeurs entrées dans les input par le joueur

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
