// ------------------------------------------------------------
// #################### INVADER GAME ##########################
// ------------------------------------------------------------

// Creation d"un objet "app"
// Les variables deviennent des propriétés
// Les fonctions deviennent des méthodes
// Ranger les fonctions à "initialiser" dans l'app. dans une   méthode "init"
// Appeler la fonction app.init() pour lancer le programme

//_____________________________________________________________
//*********************  Plan d'action  ***********************
//_____________________________________________________________

//  1/ Creation de la grille (lignes, pixel, génération grille, titre)
//  2/ Creation des formulaires (inputs, bouton validation)
//  3/ Creation de la palette de couleur (boutons, generation palette)
//  4/ Creation des ecouteurs d'événements (sur validation et pixels)
//  5/ Creation de la factions "remove" sur la grille
//  6/ Lancement de la fonction init()

//__________________________________________________________
// création d'un objet "app"
//__________________________________________________________

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

  // On a 3 fonctions dans init()

  init: function () {
    // creation de la grille
    app.createGrid(app.sizeGrid, app.sizePixel);

    // creation du formulaire
    app.createForm();

    // generation palette
    app.genrationPalette();

    // On ferme la fonction init()
  },

  //____________________________________________________________
  // *************** Creation de la grille ********************
  //____________________________________________________________

  //_________________________________________________________
  // creation des lignes
  //_________________________________________________________

  createLigne: function (grid) {
    const ligne = document.createElement("div");

    ligne.classList.add("ligne");

    grid.appendChild(ligne);

    return ligne;
  },

  //_________________________________________________________
  // creation des pixels (qui seront dans les lignes)
  //_________________________________________________________

  createPixel: function (ligne, sizePixel) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.classList.add("pixel--gray");
    pixel.style.width = sizePixel + "px";
    pixel.style.height = sizePixel + "px";
    pixel.style.border = "1px solid black";
    // Ajout d'un écouteur d'évènement
    pixel.addEventListener("click", app.clicPixelColor);
    console.log("j'ai cliqué");

    ligne.appendChild(pixel);

    return pixel;
  },

  //___________________________________________________________
  // génération de la grille
  //___________________________________________________________

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

  //__________________________________________________________
  // génération nom du jeu
  //__________________________________________________________

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

  //_______________________________________________________________
  //*********** Creation de la palette de couleur *****************
  //_______________________________________________________________

  //____________________________________________________________
  // GENRATION DE TOUS LES BOUTONS DE DIFFERENTES COULEURS
  //____________________________________________________________

  genrationPalette: function () {
    for (const style of app.styles) {
      app.createButtonPalette(style);
    }
  },
  //_____________________________________________________________
  // AJOUT D'UN BOUTON D'UNE COULEUR DANS LA PALETTE
  //_____________________________________________________________

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

  //______________________________________________________________
  // *****************  Creation du formulaire *******************
  //______________________________________________________________

  //______________________________________________________________
  // creation des inputs
  //______________________________________________________________

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

  //______________________________________________________________
  // Génération du formulaire complet avec les 2 input et le bouton
  //______________________________________________________________

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

  //_______________________________________________________________
  //*********** Creation ecouteurs d'evenements *****************
  //_______________________________________________________________

  //______________________________________________________________
  // Ecouteur pour déclencher la création de la grille
  //______________________________________________________________

  clicForm: function (e) {
    // On ne recharge pas la page
    e.preventDefault();

    // On nettoie la grille
    app.grid.textContent = "";

    const numberGrid = Number(e.target[0].value);

    const numberPixel = Number(e.target[1].value);

    app.createGrid(numberGrid, numberPixel);
  },

  //_______________________________________________________________
  // fonction remove - suppression des couleurs sur la grille
  //_______________________________________________________________

  removeStyles: function (targetElement) {
    for (const style of app.styles) {
      targetElement.classList.remove("pixel--" + style);
    }
  },

  //_______________________________________________________________
  // Ecouteur sur un pixel avec les couleurs
  //_______________________________________________________________

  clicPixelColor: function (e) {
    const targetPixel = e.target;
    console.log(e.target);

    app.removeStyles(targetPixel);

    targetPixel.classList.add("pixel--" + app.initialColor);
  },

  // On ferme l'objet app
};

//________________________________________________________________
// *************** On lance la fonction init()  ******************
//________________________________________________________________
app.init();
