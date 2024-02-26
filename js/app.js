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
  paletteDiv: document.querySelector(".palette"),
  styles: ["black", "blue", "yellow", "red", "green", "gray"],
  initialColor: "black",
  //_______________________________________________________
  // Les fonctions sont rangées dans la méthode "init()"
  //_______________________________________________________

  init: function () {
    // creation de la grille
    app.createGrid(app.sizeGrid, app.sizePixel);

    // creation du formulaire
    app.createForm();

    // generation palette
    app.genrationPalette();
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
    pixel.classList.add("pixel--gray");
    pixel.style.width = sizePixel + "px";
    pixel.style.height = sizePixel + "px";
    //pixel.style.background = "gray";
    pixel.style.border = "1px solid black";
    // Ajout d'un écouteur d'évènement
    pixel.addEventListener("click", app.clicPixelColor);
    console.log("j'ai cliqué");

    ligne.appendChild(pixel);

    return pixel;
  },

  // génération de la grille
  createGrid: function (sizeGrid, sizePixel) {
    // creation du titre du jeu
    app.createTitle();

    for (let i = 0; i < sizeGrid; i++) {
      const ligne = app.createLigne(app.grid);

      for (let j = 0; j < sizeGrid; j++) {
        app.createPixel(ligne, sizePixel);
      }
    }
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
    title.style.fontSize = "30px";

    app.grid.appendChild(title);
  },

  // CREATION DE LA PALETTE DE COULEUR

  // creation de la div pour la palette

  /*  createPalette: function (grid) {
    const paletteColor = document.createElement("div");

    paletteColor.classList.add("palette");
    paletteColor.style.width = "300px";
    paletteColor.style.height = "40px";
    paletteColor.style.background = "#99CCFF";
    paletteColor.style.textAlign = "center";
    paletteColor.style.fontSize = "30px";

    app.grid.appendChild(paletteColor);

    return paletteColor;
  }, */

  // GENRATION DE TOUS LES BOUTONS DE DIFFERENTES COULEURS

  genrationPalette: function () {
    for (const style of app.styles) {
      app.createButtonPalette(style);
    }
  },

  // AJOUT D'UN BOUTON D'UNE COULEUR DANS LA PALETTE

  createButtonPalette: function (style) {
    const buttonPalette = document.createElement("button");
    buttonPalette.classList.add("palette-color");
    buttonPalette.classList.add("palette-color--" + style);
    console.log(buttonPalette);
    // pose d'un écouteur quand on clique sur les couleurs de la palette
    buttonPalette.addEventListener("click", function (e) {
      console.log("la couleur couleur choisie est : " + style);
      app.initialColor = style;
    });

    // creation du bouton couleur dans la div palette
    app.paletteDiv.appendChild(buttonPalette);
  },

  //creation du formulaire

  // creation des inputs
  createInput: function (placeholder) {
    const input = document.createElement("input");
    input.classList.add(".input");
    input.type = "number";
    input.style.textAlign = "center";
    input.style.height = "55px";
    input.style.background = "#0099FF";
    input.style.fontSize = "20px";
    input.placeholder = placeholder;

    app.form.appendChild(input);
  },

  // Formulaire complet avec les 2 input et le bouton - fonction createForm

  createForm: function (form) {
    //app.createInput("INVADER GAME");
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

    const numberGrid = Number(e.target[0].value);

    const numberPixel = Number(e.target[1].value);

    app.createGrid(numberGrid, numberPixel);
  },

  // Ecouteur sur un pixel

  /*  clicPixel: function (e, pixel) {
    const pixels = document.querySelectorAll(".pixel");
    //console.log(pixels);
    //const targetpixel = e.target;
    //console.log(e.target);
    pixels.forEach((pixel) => {
      pixel.addEventListener("click", (e) => {
        console.log("clic sur un pixel");
        pixel.classList.toggle("pixel-black");
      });
    });
  },

  */

  // REMOVE STYLES

  removeStyles: function (targetElement) {
    for (const style of app.styles) {
      targetElement.classList.remove("pixel--" + style);
    }
  },

  // Ecouteur sur un pixel avec les couleurs

  clicPixelColor: function (e) {
    const targetPixel = e.target;
    console.log(e.target);

    app.removeStyles(targetPixel);

    targetPixel.classList.add("pixel--" + app.initialColor);
  },
};

app.init();
