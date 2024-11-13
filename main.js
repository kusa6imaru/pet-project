function headerOpacity() {
    const scrollPositionY = window.scrollY;
    const header = document.querySelector('header');

    if (scrollPositionY === 0) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else {
        header.style.backgroundColor = 'rgb(33, 36, 41)';
    }
}

window.addEventListener('scroll', headerOpacity);

headerOpacity();
