function headerOpacity() {
    const scrollPositionY = window.scrollY;
    const header = document.querySelector('header');

    if (scrollPositionY === 0) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else {
        header.style.backgroundColor = 'rgb(33, 36, 41)';
    }
}

function buttonToServices() {
    const welcomePageButton = document.getElementById('welcome-page-button');
    const servicesPage = document.getElementById('services-page');

    welcomePageButton.addEventListener('click', function() {
        servicesPage.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

window.addEventListener('scroll', headerOpacity);
headerOpacity();

buttonToServices();
