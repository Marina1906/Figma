window.onload = () => {
    const hamburgerMenu =document.querySelector ('.hamburger-menu');
    const nav = document.querySelector ('.nav');

    const toggleMenu = () => {
        nav.classList.toggle ('.nav-active');
    }

hamburgerMenu.addEventListener ('click',toggleMenu);
}
