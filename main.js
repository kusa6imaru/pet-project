function headerOpacity() {
    const scrollPositionY = window.scrollY;
    const header = document.querySelector('header');

    if (scrollPositionY === 0) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else {
        header.style.backgroundColor = 'rgb(33, 36, 41)';
    }
}

function reloadPageButton() {
    document.getElementById('home-page-button').onclick = () => {
        location.reload();
        window.scrollTo({
            top: 0
        })
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
    const headerMenuServices = document.getElementById('header-menu-services');

    if (scrollPositionY >= 900 && scrollPositionY <= 1368) {
        headerMenuServices.style = 'color: rgb(255, 200, 0)';
    } else {
        headerMenuServices.style = 'color rgb(0, 0, 0)';
    }
}

function navigationHeaderMenu() {
    const headerMenuServices = document.getElementById('header-menu-services');
    const servicesPage = document.getElementById('services-page');

    headerMenuServices.addEventListener('click', () => {
        servicesPage.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

window.addEventListener('scroll', headerOpacity);
headerOpacity();

reloadPageButton();

buttonToServices();

window.addEventListener('scroll', checkHeaderMenu);
checkHeaderMenu();

navigationHeaderMenu();
