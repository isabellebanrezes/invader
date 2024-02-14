// ETAPE N°1 GENERATION D'UNE GRILLE 8 x 8 - FONCTION drawbOARD

// Element container pour notre grille de pixels

const form = document.querySelector(".configuration");

//  ________________________________  //

// Fonction qui génère un nombre de ligne

// Variables pour la taille de la grille
let gridSize = 8;
let pixelSize = 50;

function numberLigne() {
  // On pointe la div avec la class "invader"
  const contener = document.getElementById("invader");
  // On Créée une nouvelle "div"
  const ligne = document.createElement("div");
  // On ajoute une "class"
  ligne.classList.add("ligne");
  console.log(ligne);

  contener.appendChild(ligne);
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

/* function drawBoard() {
 

  // Nettoyage du tableau - remise à zéro
  board.innerHTML = " ";

  // Boucle pour générer les lignes de la grille
  for (let i = 0; i < gridSize; i++) {
    // On va créer un nouvel élèment (une "div") sous la div avec la classe "invader"
    let ligne = document.createElement("div");
    // On va ajouter une classe (ligne) à cette "div"
    ligne.classList.add("ligne");

    for (let j = 0; j < gridSize; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.width = pixelSize + "px";
      pixel.style.height = pixel.Size + "px";
      pixel.style.color = "red";

      newLigne.appendChild(pixel);

      board.appendChild(ligne);
    }
  }
}

drawBoard(); */
