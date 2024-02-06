// ton code ici

// 1/ Création de la grille avec des cases:

const formParent = document.getElementsByClassName("configuration")[0]; // On récupère la classe "configuration" dans le dom

const validateButton = document.createElement('button');
const textInput = document.createElement('input');
const textPixel = document.createElement('input');

textInput.setAttribute("id",'valueInput');
validateButton.classList.add('buttonClick');
textPixel.setAttribute("id",'valuePixel');

formParent.appendChild(textInput);
formParent.appendChild(textPixel);
formParent.appendChild(validateButton);

// Fonction entrée de la taille de la grille par l'utilisateur
function inputUser(event) {
    event.preventDefault();
    const sizeByUser = document.getElementById("valueInput");
    const x = sizeByUser.value;
    const pixelByUser = document.getElementById("valuePixel");
    const y = pixelByUser.value; 
    createGrid(x, y);
    console.log(x);
    console.log(sizeByUser);
}

validateButton.addEventListener("click" , inputUser); // Appel de la fonction inputuser

validateButton.textContent="Valider";
textInput.setAttribute("text", "number");
textInput.setAttribute("placeholder", "Entrez la taille de la grille");


// Fonction 

function createGrid(x, y) {
    const parentGrid = document.getElementById('invader');
    parentGrid.innerHTML = "";

    parentGrid.style.gridTemplateColumns = `repeat(${x}, ${y}px)`;
    parentGrid.style.gridTemplateRows = `repeat(${x}, ${y}px)`;


    for (let i = 0; i < ((x)**2);i++) {
       const createDiv = document.createElement('div');

       parentGrid.appendChild(createDiv);

       createDiv.classList.add('styleGrid');
    }
    
    AddListener(); //Appel de la fonction Addlsitener (ecouteur)
}


// Fonction pour changer la couleur
function colorGrid(event) {
    const eventValue = event.target;

    if (eventValue.classList.contains("black")) {
        eventValue.classList.remove("black")
    } else {
        eventValue.classList.add("black");
    }
    console.log(event); 
} 


// Fonction pour ecoute du click
function AddListener() {
    const colorClick = document.getElementsByClassName("styleGrid");
    let i = 0;
    while (i < colorClick.length) {
    colorClick[i].addEventListener("click" , colorGrid);
    i++;
    }
}



