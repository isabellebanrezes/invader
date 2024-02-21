// ############ INVERDER #############

/* ### PLAN ######
 * CREATION DU FORMULAIRE
 * CREATION DE LA GRILLE
 * GESTION DU CLIC SUR UNE PIXEL
 * PALETTE DE COULEUR
 */

//----------------------------------------
// #####  CREATION DES FORMULAIRES #######
//----------------------------------------

// Il faut 2 formulaires avec des inputs et un bouton
// ____________________________________________________________
// 2 formulaires "input" pour le nombre de ligne et de pixel
// 1 formulaire pour le bouton validation
//____________________________________________________________

// ########## 2 fonctions pour les formulaires ###############
//_____________________________________________________________
// Une fonction pour créer les 2 inputs : createInput
// Une fonction pour créer le groupe de formulaire (les 2 inputs et le bouton) : createForm
//_________________________________________________________________

// On pointe l'endroit où on va mettre le formulaire dans le DOM : au niveau de la balise ayant la class "configuration"
const form = document.querySelector(".configuration");

// Formulaires des inputs - fonction createInput()

function createInput(placeholder) {
  // On génére un input
  const input = document.createElement("input");
  // On donne le type "nombre" à notre input
  input.type = "size";
  input.style.textAlign = "center";
  input.style.height = " 55px";
  input.style.background = "#33CCCC";
  input.style.fontSize = "20px";
  // On rajoute un placeholder dans l'input qui sera paramètrable
  input.placeholder = placeholder;
  // On affiche l'input dans le DOM au niveau de la balise "configuration
  form.appendChild(input);
}

// Formulaire complet avec les 2 input et le bouton - fonction createForm

function createForm() {
  // creation du formulaire nombre de ligne
  createInput("Taille de la grille");
  // creation du formulaire nombre de pixel
  createInput("Taille des pixels");

  // On créé le bouton valider
  const button = document.createElement("button");
  // On crée le texte dans le bouton
  button.textContent = "Validation";
  // On affiche le bouton dans le DOM au niveau de la balise "configuration"
  button.style.borderRadius = "0px 10px 10px 0px";
  button.style.width = "120px";
  button.style.fontSize = "20px";
  form.appendChild(button);
  // On pose un écouteur d'évenement au botton
  form.addEventListener("submit", clicForm);
}

createForm();

//------------------------------------------------
// ####### ECOUTEURS EVENEMENTS #########
//------------------------------------------------

// Ecouteur pour déclencher la création de la grille

// On va créer une fonction clicForm()

function clicForm(e) {
  // Pour ne pas que la page se recharge toute seule !
  e.preventDefault();
  //On vide la balise avec l'id "invader"
  grid.textContent = "";
  // On récupère les valeurs des inputs
  // on récupère le nombre de ligne
  const numberGrid = Number(e.target[0].value);
  console.log(numberGrid);
  // On récupère le nombre de pixel
  const numberPixel = Number(e.target[1].value);
  console.log(numberPixel);

  // On génère la grille avec les tailles founies dans le formulaire
  createGrid(numberGrid, numberPixel);
}

// ------------------------------------
// ####  CREATION DE LA GRILLE  ######
// ------------------------------------

// #####  On va créer 3 fonctions #######
//______________________________________
// Une fonction pour générer la grille  : createGrid
// Une fonction pour générer les lignes : createLigne
// Une fonction pour générer les pixels : createPixel
//______________________________________

// on créé 2 variables
// pour les lignes
let sizeGrid;
// pour les pixels
let sizePixel;
// Sélection de la div "invader" dans le DOM pour y insérer notre grille
const grid = document.getElementById("invader");

// Création fonction pour générer les lignes : createligne

//console.log(grid);

// Fonction createLigne
function createLigne(grid) {
  // Creation de la ligne
  const ligne = document.createElement("div");
  // Ajout d'une class pour cette div
  ligne.classList.add("ligne");
  //on affiche la div dans le DOM au niveau
  grid.appendChild(ligne);
  //console.log(ligne);
  // On retourne le résultat car on en aura besoin pour la fonctiopn createPixel
  return ligne;
}
// Pour lancer la foncion createligne()
// createLigne();

// Création pour générer les pixels

// Fonction createPixel varialbles "grid et sizePixel" sont en paramètre de cette fonction
function createPixel(grid, sizePixel) {
  // Création de l'élèment "div" qui sera notre pixel
  const pixel = document.createElement("div");
  // On donne une class a cette "div" (notre pixel)
  pixel.classList.add("pixel");
  //pixel.classList.add("pixel--gray");
  //On donne une hauteur à notre pixel
  pixel.style.witdh = sizePixel + "px";
  // On donne une hauteur à notre pixel
  pixel.style.height = sizePixel + "px";
  // On donne une couleur à nos pixels
  pixel.style.background = "gray";
  // On donne une couleur et épaisseur à la bordure de notre pixel
  pixel.style.border = "1px solid black";
  // On affiche notre pixel dans le DOM au niveau de la balise "invader"
  grid.appendChild(pixel);
}
// Pour lancer la fonction createPixel()
//createPixel();

// Création pour générer la grille avec les lignes et les pixels

// Fonction CreateGrid

// On va créer une fonction pour générer la grille de ligne et pixel - On a 2 paramètres dans cette fonction : le nombre de ligne et le nombre de pixel

// Fonction createGrid

function createGrid(sizeGrid, sizePixel) {
  // on va boucler autant de fois que le nombre de ligne (sizeGrid)
  for (let i = 0; i < sizeGrid; i++) {
    // on va créer un ligne a chaque tour
    const ligne = createLigne(grid);
    // Pour chaque ligne créé on va crée  autant de fois de pixel
    for (let j = 0; j < sizeGrid; j++) {
      // creation du pixel pour chaque ligne
      createPixel(ligne, sizePixel);
    }
  }
}

//createGrid();
