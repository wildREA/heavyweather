const headerVar = document.querySelector('#header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 55) {
        headerVar.classList.add('scrolled');
    } else {
        headerVar.classList.remove('scrolled');
    }
});