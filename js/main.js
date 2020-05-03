const largeur = 766;
const hauteur = 766;
const playerLargeur = 48;
const playerHauteur = 48;

const unite = 60;

let positionJoueur = 0;
const plateau = [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];

function avance (nombre) {
    console.log(nombre);
    const joueur = document.getElementById('player-1');
    // if (direction === 'gauche') {
    //     joueur.style.right = (largeur - playerLargeur ) + 'px' ;
    // } else if (direction === 'droite') {
    //     joueur.style.right = '0px' ;
    // } else if (direction === 'haut') {
    //     joueur.style.bottom = (hauteur - playerHauteur ) + 'px' ;
    // } else if (direction === 'bas') {
    //     joueur.style.bottom = '0px' ;
    // }
    for(let i = 1; i <= nombre; ++i) {
        const pos = plateau[positionJoueur];
        const currentPos = parseInt(joueur.style.right.slice(0, -2), 10) || 0;
        console.log(currentPos);
        console.log((((pos * unite )) + (2 * i)) + 'px');
        joueur.style.right = (currentPos + (pos * unite ) + (2 * i)) + 'px' ;
        positionJoueur +=1;
    }
}

function lancer(max) {
    return Math.floor(Math.random() * Math.floor(max - 1)) + 2;
}