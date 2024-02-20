// GAME INVADER

// Création des 3 formulaires avec les 2 "input" pour le choix de la taille de la grille, le nombre de pixel et vet un bouton pour validation

// I - Input pour la taille de ma grille

// 1 - On pointe la class "configuration" c'est la balise type "formulaire" déjà créée - on va y insérer les 2 input et le bouton de validation
const form = document.querySelector(".configuration");
//form.style.background = "#CCFFCC";

// 2 - Création de l'input pour la taille de la grille
const sizeGrid = document.createElement("input");
// 3 - On va insérer ce texte dans l'input "Taille de la grille"
sizeGrid.setAttribute("placeholder", "Taille de la grille"); // On insére un placeholder dans l'input
sizeGrid.setAttribute("id", "valueInput"); // On donne un "id" à cet input
sizeGrid.style.textAlign = "center";
sizeGrid.style.height = " 35px";
sizeGrid.style.borderRadius = "10px 0px 0px 10px";
sizeGrid.style.background = "#33CCCC";
// 4 - On affiche le nouvel input dans le DOM
form.appendChild(sizeGrid);

// II - Input pour le nombre de pixels

// 1 - Création de l'input pour le nombre de pixel
sizePixel = document.createElement("input");
// 2 - Insertion du texte dans l'input
sizePixel.setAttribute("placeholder", "Nombre de pixel");
sizePixel.setAttribute("id", "valuePixel");
sizePixel.style.textAlign = "center";
sizePixel.style.background = "#00CCFF";
// 3 - Affichage du formulaure "nombre de pixel" dans le DOM
form.appendChild(sizePixel);

// III - Création d'un bouton "validation"
// 1 - Création du bouton
validboutton = document.createElement("button");
// 2 - Création d'une classe pour le bouton et ajout de texte dans cette classe
validboutton.classList.add("buttonValid");
validboutton.textContent = "valider";
validboutton.style.background = "#FFCCFF";
validboutton.style.borderRadius = " 0px 10px 10px 0px";
validboutton.style.width = "60px";
// 3 - Affichage dans le DOM
form.appendChild(validboutton);

// Récupération des valeurs entrées dans les inputs par le joueur dans les inputs

// Récupérer l'Input sizeGrid
let numberGrid;
sizeGrid.addEventListener("input", (e) => {
  //console.log(e.target.value);
  numberGrid = e.target.value;
  console.log(numberGrid);
});

// Récupérer l'input sizePixel
let numberPixel;
sizePixel.addEventListener("input", (e) => {
  //console.log(e.target.value);
  numberPixel = e.target.value;
  console.log(numberPixel);
});
// Récupérer le click sur le bouton "valider"
let clickValidation;
form.addEventListener("click", (e) => {
  e.preventDefault(); // Permet de ne pas recharger la page - un formulaire change de page quand on clique dessus (sur "valider")
  clickValidation = e.target.value;
  console.log(clickValidation);
});

// Génération de la grille

// Fonction drawGrid qui génère un nombre de ligne avec le nombre  de pixel choisi

const board = document.getElementById("invader");

function drawGrid(numberGrid, numberPixel) {
  // Boucle pour générer les lignes de la grille
  for (let i = 0; i < numberGrid; i++) {
    // On créé une "div" pour faire les lignes
    let ligne = document.createElement("div");
    // On ajoute une class à cette div
    ligne.classList.add(ligne);
    // On ajoute la ligne avec les pixel dans le DOM
    board.appendChild(ligne);

    return ligne;
  }

  // Boucle pour générer les pixels de la grille
  for (let j = 0; j < numberGrid; j++) {
    // Création d'un pixel
    let pixel = document.createElement("div");
    // On ajoute un class
    pixel.classList.add("pixel");
    // On ajoute du style : largeur et hauteur
    pixel.style.width = numberPixel + "px";
    pixel.style.height = numberPixel + "px";
    // on ajoute ce pixel dans le DOM
    ligne.appendChild(pixel);

    pixel.addEventListener("click");
    // On ajoute la ligne avec les pixel dans le DOM
    board.appendChild(ligne);
  }
}

drawGrid(numberGrid, numberPixel);
