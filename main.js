const headerMenuServices = document.getElementById('header-menu-services');
const servicesPage = document.getElementById('services-page');
const headerMenuPortfolio = document.getElementById('header-menu-portfolio');
const portfolioPage = document.getElementById('portfolio-page');
const headerMenuAbout = document.getElementById('header-menu-about');
const aboutPage = document.getElementById('about-page');
const headerMenuTeam = document.getElementById('header-menu-team');
const teamPage = document.getElementById('team-page');
const headerMenuContact = document.getElementById('header-menu-contact');
const contactPage = document.getElementById('contact-page');

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
        headerMenuServices.style = 'color: rgb(255, 200, 0); transition: color 0.3s ease';
    } else {
        headerMenuServices.style = 'transition: color 0.3s ease';
    }

    if (scrollPositionY >= 1500 && scrollPositionY < 2651) {
        headerMenuPortfolio.style = 'color: rgb(255, 200, 0); transition: color 0.3s ease';
    } else {
        headerMenuPortfolio.style = 'transition: color 0.3s ease';
    }

    if (scrollPositionY >= 2651 && scrollPositionY < 4350) {
        headerMenuAbout.style = 'color: rgb(255, 200, 0); transition: color 0.3s ease';
    } else {
        headerMenuAbout.style = 'transition: color 0.3s ease';
    }

    if (scrollPositionY >= 4350 && scrollPositionY < 4947) {
        headerMenuTeam.style = 'color: rgb(255, 200, 0); transition: color 0.3s ease';
    } else {
        headerMenuTeam.style = 'transition: color 0.3s ease';
    }

    if (scrollPositionY >= 4947) {
        headerMenuContact.style = 'color: rgb(255, 200, 0); transition: color 0.3s ease';
    } else {
        headerMenuContact.style = 'transition: color 0.3s ease';
    }
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

    headerMenuContact.addEventListener('click', () => {
        contactPage.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
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
