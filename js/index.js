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
  //On vide le conteneur
  grid.textContent = "";

  // On récupère les valeurs des inputs
  // on récupère le nombre de ligne
  const numberGrid = Number(e.target[0].value);
  // On récupère le nombre de pixel
  const numberPixel = Number(e.target[1].value);

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
// Ligne
let sizeGrid;
// pixel
let sizePixel;

// Création fonction pour générer les lignes : createligne

// Sélection de la div "invader" dans le DOM pour y insérer notre grille
const grid = document.getElementById("invader");
console.log(grid);

// Fonction createLigne
function createLigne(grid) {
  // Creation de la ligne
  const ligne = document.createElement("div");
  // Ajout d'une class pour cette div
  ligne.classList.add("ligne");
  //on affiche la div dans le DOM au niveau
  grid.appendChild(ligne);
  console.log(ligne);
  return ligne;
}
createLigne(grid);

// Création pour générer les pixels

// Fonction createPixel
function createPixel() {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  //pixel.classList.add("pixel--gray");
  pixel.style.witdh = sizeGrid + "px";
  pixel.style.height = sizePixel + "px";
  pixel.style.background = "#CCFFFF";
  pixel.style.border = "1px solid black";

  grid.appendChild(pixel);
}

createPixel();

// Création pour générer la grille avec les lignes et les pixels

// Fonction CreateGrid

// On va créer une fonction pour générer la grille de ligne et pixel - On a 2 paramètres dans cette fonction : le nombre de ligne et le nombre de pixel

function createGrid(numberGrid, numberPixel) {
  for (let i = 0; i < numberGrid; i++) {
    const ligne = createLigne(grid);
    for (let j = 0; j < numberGrid; j++) {
      createPixel(ligne, numberPixel);
    }
  }
}

createGrid(ligne, pixel);
