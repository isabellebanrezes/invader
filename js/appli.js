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
    //console.log("j'ai cliqué");

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
  // Creation du titre du jeu
  //__________________________________________________________

  createTitle: function (grid) {
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "INVADER GAME";
    title.style.width = "440px";
    title.style.height = "30px";
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
    //console.log(buttonPalette);
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
    input.style.background = "#3399FF";
    input.style.fontSize = "25px";
    input.placeholder = placeholder;

    app.form.appendChild(input);
  },

  //______________________________________________________________
  // Génération du formulaire complet avec les 2 input et le bouton
  //______________________________________________________________

  createForm: function () {
    console.log("creation de la grille complete en cours");

    // creation input taille grille  par la fonction createInput
    app.createInput("Taille de la grille");

    // creation input taille pixel  par la fonction createInput
    app.createInput("Taille des pixels");

    // creation du bouton valider

    // on créé un element type bouton dans le DOM qu'on appelle button
    const button = document.createElement("button");

    // on lui ajoute un class
    button.classList.add("button");

    // on lui ajoute du texte et du style
    button.textContent = "VALIDER";
    button.style.borderRadius = "10px 10px 10px 10px";
    button.style.width = "120px";
    button.style.height = "63px";
    button.style.fontSize = "20px";
    button.style.color = "white";
    button.style.fontWeight = "bold";
    button.style.background = "#9900CC";

    // on l'affiche dans le DOM au niveau de la div form
    app.form.appendChild(button);

    // on lui pose un ecouteur d'evenement tyme submit et un handler (une fonction)
    app.form.addEventListener("submit", app.clicForm);
  },

  //_______________________________________________________________
  //*********** Creation ecouteurs d'evenements *****************
  //_______________________________________________________________

  //______________________________________________________________
  // Ecouteur pour déclencher la création de la grille
  //______________________________________________________________

  /* clicForm: function (e) {
    // On ne recharge pas la page (dû au bouton "valider")
    e.preventDefault();

    // On efface la grille déja existante dans le DOM
    app.grid.textContent = "";

    const numberGrid = Number(e.target[0].value);

    const numberPixel = Number(e.target[1].value);

    app.createGrid(numberGrid, numberPixel);
  },
  */

  //Détail de cette fonction sous une autre forme

  clicForm: function (e) {
    console.log(e);

    // pour ne pas recharger la page
    e.preventDefault();

    // on efface la grille existante
    app.grid.texContent = "";
    //console.log(e);

    // on sélectionne l'input taille de la grille
    // childNodes sert à lister les fichiers contenus dans  un répertoire - il renvoie une liste de noeud enfants de l'élement donnée avec le premier noeud affecté à l'index 0
    const sizeGridInput = e.target.childNodes[0];
    console.log(sizeGridInput);

    // on sélectionne l'input taille des pixels
    const sizePixelInput = e.target.childNodes[1];
    console.log(sizePixelInput);

    // on récupère la valeur de l'input  taille de la grille : nombre de ligne & colonne
    // pour récupérer la valeur d'un formulaire  on utilise baliseNom.value
    const numberGrid = Number(sizeGridInput.value);
    console.log(numberGrid);

    // on récupère la valeur de l'input pixel  : nombre le pixel
    const numberPixel = Number(sizePixelInput.value);
    console.log(numberPixel);

    console.log("je génrere une nouvelle grille ");
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
    console.log(e);

    app.removeStyles(targetPixel);

    targetPixel.classList.add("pixel--" + app.initialColor);
  },

  // On ferme l'objet app
};

//________________________________________________________________
// *************** On lance la fonction init()  ******************
//________________________________________________________________

app.init();
