const hamburger = document.querySelector('#hamburger');
const navContainer = document.querySelector('#navBox');
const gallery = document.querySelector('#gallery');
const dogImg = './img/dog';

hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('showNav');
});

for(let i = 2; i <= 9; i++){
    let galleryImg = document.createElement('img');
    galleryImg.src = `${dogImg}${i}.jpg`;
    gallery.appendChild(galleryImg);
}