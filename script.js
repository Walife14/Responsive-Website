const hamburger = document.querySelector('#hamburger');
const navContainer = document.querySelector('#navBox');

hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('showNav');
});
