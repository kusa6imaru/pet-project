const headerMenuServices = document.getElementById('header-menu-services');
const servicesPage = document.getElementById('services-page');
const headerMenuPortfolio = document.getElementById('header-menu-portfolio');
const portfolioPage = document.getElementById('portfolio-page');
const headerMenuAbout = document.getElementById('header-menu-about');
const aboutPage = document.getElementById('about-page');
const headerMenuTeam = document.getElementById('header-menu-team');
const teamPage = document.getElementById('team-page');

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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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

    if (scrollPositionY >= 900 && scrollPositionY < 1500) {
        headerMenuServices.style = 'color: rgb(255, 200, 0)';
    } else {
        headerMenuServices.style = '';
    }

    if (scrollPositionY >= 1500 && scrollPositionY < 2651) {
        headerMenuPortfolio.style = 'color: rgb(255, 200, 0)';
    } else {
        headerMenuPortfolio.style = '';
    }

    if (scrollPositionY >= 2651 && scrollPositionY < 4350) {
        headerMenuAbout.style = 'color: rgb(255, 200, 0)';
    } else {
        headerMenuAbout.style = '';
    }

    if (scrollPositionY >= 4350) {
        headerMenuTeam.style = 'color: rgb(255, 200, 0)';
    } else {
        headerMenuTeam.style = '';
    }

    console.log(window.scrollY);
}

function navigationHeaderMenu() {
    headerMenuServices.addEventListener('click', () => {
        servicesPage.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });

    headerMenuPortfolio.addEventListener('click', () => {
        portfolioPage.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })

    headerMenuAbout.addEventListener('click', () => {
        aboutPage.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })

    headerMenuTeam.addEventListener('click', () => {
        teamPage.scrollIntoView({
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
