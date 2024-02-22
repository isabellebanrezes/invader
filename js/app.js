// ----------------------------------------------------
// ############ INVADER #############
// ----------------------------------------------------

//CREATION D'UN OBJET "app"
// Les variables deviennent des propriétés
// Les fonctions deviennnet des méthodes
// Ranger les fonction à "initialiser" dans l'application dans une méthode "init"
// Appeler la fonction app.init() pour lancer le programme

//__________________________________________________
// création d'un objet "app"
//_________________________________________________

const app = {
  // Les variables sont transformées en propriété

  sizeGrid: 8,
  sizePixel: 60,
  form: document.querySelector(".configuration"),
  grid: document.querySelector("#invader"),

  //_______________________________________________________
  // Les fonctions sont rangées dans la méthode "init()"
  //_______________________________________________________

  init: function () {
    // creation de la grille
    app.createGrid(app.sizeGrid, app.sizePixel);

    // creation du formulaire
    app.createForm();

    // Clic pixel
    app.clicPixel();
  },

  // creation des lignes
  createLigne: function (grid) {
    const ligne = document.createElement("div");

    ligne.classList.add("ligne");

    grid.appendChild(ligne);

    return ligne;
  },
  // creation des pixels
  createPixel: function (ligne, sizePixel) {
    const pixel = document.createElement("div");

    pixel.classList.add("pixel");
    pixel.classList.add("pixel-color");
    pixel.style.width = sizePixel + "px";
    pixel.style.height = sizePixel + "px";
    //pixel.style.background = "gray";
    pixel.style.border = "1px solid black";
    pixel;

    ligne.appendChild(pixel);

    return pixel;
  },

  // génération de la grille
  createGrid: function (sizeGrid, sizePixel) {
    app.createTitle();

    for (let i = 0; i < sizeGrid; i++) {
      const ligne = app.createLigne(app.grid);

      for (let j = 0; j < sizeGrid; j++) {
        app.createPixel(ligne, sizePixel);
      }
    }
    app.clicPixel();
  },

  // génération titre
  createTitle: function (grid) {
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "INVADER GAME";
    title.style.width = "440px";
    title.style.height = "50px";
    title.style.background = "#0099CC";
    title.style.textAlign = "center";
    title.style.border = "1px solid black";
    title.style.borderRadius = "10px 10px 10px 10px";
    title.style.fontSize = "50px";

    app.grid.appendChild(title);
  },

  //creation du formulaire

  // creation des inputs
  createInput: function (placeholder) {
    const input = document.createElement("input");

    input.type = "number";
    input.style.textAlign = "center";
    input.style.height = " 55px";
    input.style.background = "#33CCCC";
    input.style.fontSize = "20px";
    input.placeholder = placeholder;

    app.form.appendChild(input);
  },

  // Formulaire complet avec les 2 input et le bouton - fonction createForm

  createForm: function () {
    app.createInput("INVADER GAME");
    app.createInput("Taille de la grille");
    app.createInput("Taille des pixels");

    const button = document.createElement("button");
    button.classList.add("button");

    button.textContent = "Valider";
    button.style.borderRadius = "10px 10px 10px 10px";
    button.style.width = "120px";
    button.style.fontSize = "20px";

    app.form.appendChild(button);
    app.form.addEventListener("submit", app.clicForm);
  },

  // ECOUTEUR D'EVENEMENTS

  // Ecouteur pour déclencher la création de la grille

  clicForm: function (e) {
    e.preventDefault();
    app.grid.textContent = "";

    const numberGrid = Number(e.target[1].value);

    const numberPixel = Number(e.target[2].value);

    app.createGrid(numberGrid, numberPixel);
  },

  // Ecouteur sur un pixel

  clicPixel: function (e, pixel) {
    const pixels = document.querySelectorAll(".pixel");
    console.log(pixels);
    pixels.forEach((pixel) => {
      pixel.addEventListener("click", (e) => {
        console.log("clic sur un pixel");
        pixel.classList.remove("pixel-color");
        pixel.classList.toggle("pixel-black");
      });
    });
  },
};

app.init();
