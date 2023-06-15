// Définition des images du diaporama sous forme de tableau
var slides = [{
    path: "assets/images/slideshow/slide1.jpg",
    title: "Impressions tous formats <span>en boutique et en ligne</span>"
},
{
    path: "assets/images/slideshow/slide2.jpg",
    title: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
},
{
    path: "assets/images/slideshow/slide3.jpg",
    title: "<p>Grand choix de couleurs <span>de CMJN aux pantones</span></p>"
},
{
    path: "assets/images/slideshow/slide4.png",
    title: "Autocollants <span>avec découpe laser sur mesure</span>"
}
];

var currentSlide = 0; // Indice de l'image courante

// Sélection des éléments HTML du diaporama
var dots = document.querySelectorAll('.dots .dot');
var bannerImg = document.querySelector('.banner-img');
var arrowLeft = document.querySelector('.arrow_left');
var arrowRight = document.querySelector('.arrow_right');
var slideTitle = document.querySelector('p');
// Sélection des éléments HTML des points
var dotSelected = document.querySelectorAll('.dot_selected');

function updateSlide() {
// Réinitialiser la couleur de tous les points
dots.forEach(function (dot, index) {
    if (index === currentSlide) {
        dot.classList.add('dot_selected');
    } else {
        dot.classList.remove('dot_selected');
    }
});

// Mettre à jour l'image et le titre en fonction de l'image courante
bannerImg.src = slides[currentSlide].path;
slideTitle.innerHTML = slides[currentSlide].title;
}
// Gestionnaire d'événement pour la flèche gauche
arrowLeft.addEventListener('click', function () {
currentSlide--;
if (currentSlide < 0) {
    currentSlide = slides.length - 1;
}
updateSlide();
});

// Gestionnaire d'événement pour la flèche droite
arrowRight.addEventListener('click', function () {
currentSlide++;
if (currentSlide >= slides.length) {
    currentSlide = 0;
}
updateSlide();
});

// Ajouter un gestionnaire d'événement de clic à chaque point
dots.forEach(function (dot, index) {
dot.addEventListener("click", function () {
    currentSlide = index;
    updateSlide();
});
});