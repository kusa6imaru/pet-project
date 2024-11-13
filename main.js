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

    welcomePageButton.addEventListener('click', () => {
        servicesPage.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}

function checkHeaderMenu() {
    const scrollPositionY = window.scrollY;
    
    if (scrollPositionY >= 900) {
        document.getElementById('header-menu-services').style = "color: rgb(255, 200, 0)";
    } else {
        document.getElementById('header-menu-services').style = "color: rgb(255, 255, 255)";
    }
}

window.addEventListener('scroll', headerOpacity);
headerOpacity();

buttonToServices();

window.addEventListener('scroll', checkHeaderMenu);
checkHeaderMenu();
