// ETAPE N°1 GENERATION D'UNE GRILLE 8 x 8 - FONCTION drawbOARD

let gridSize = 8;
let pixelSize = 50;

// Element container pour notre grille de pixels

const form = document.querySelector(".configuration");

// Création des lignes de la grille

function drawBoard() {
  // On point la div avec la classe "invader"
  const board = document.getElementById("invader");
  console.log(board);

  // Nettoyage du tableau
  board.innerHTML = " ";

  for (let i = 0; i < gridSize; i++) {
    // On va créer un nouvel élèment (une "div") sous la div avec la classe "invader"
    let newLigne = document.createElement("div");
    // On va ajouter une classe (ligne) à cette "div"
    newLigne.classList.add("ligne");

    for (let j = 0; j < gridSize; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.width = pixelSize + "px";
      pixel.style.height = pixel.Size + "px";
      pixel.style.color = "red";

      newLigne.appendChild(pixel);

      board.appendChild(newLigne);
    }
  }
}

drawBoard();
