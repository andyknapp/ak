const body = document.body;
const html = document.documentElement;
const vh = window.innerHeight;

const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

const logo = document.querySelector('#logo');
const logoContainer = document.querySelector('.logo-container');
const header = document.querySelector('#header');
const nav = document.querySelector('.site-nav');
const position = document.querySelector('.position');

const logoRect = logo.getBoundingClientRect();
const logoHeight = Math.round(logoRect.height);
const logoBottom = Math.round(logoRect.bottom);
const logoTrigger = (logoBottom - logoHeight);

const work = document.querySelector('#work');
const contact = document.querySelector('#contact');
const experience = document.querySelector('#experience');
const navWork = document.querySelector('.nav-item-work');
const navExp = document.querySelector('.nav-item-exp');
const navContact = document.querySelector('.nav-item-contact');

const divider = document.querySelector('.divider');

// check if element is fully in viewport
function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();

    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


// check if element is above bottom of viewport
function isInView(elem) {
    var bounding = elem.getBoundingClientRect();

    return (
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.bottom >= ((window.innerHeight / 2) || (document.documentElement.clientHeight / 2))
    );
};

function logoState() {
    var scroll = window.scrollY;
    var trigger = height - vh - 40;
    var vw = window.innerWidth;

    if(scroll > logoTrigger) {
        logo.classList.add('reveal');
        logoContainer.classList.add('fade-out');
        position.classList.add('reveal');
        nav.classList.add('bottom-header');

    } else {
        logo.classList.remove('reveal');
        logoContainer.classList.remove('fade-out');
        position.classList.remove('reveal');
        nav.classList.remove('bottom-header');
    }
}


function checkPosition() {
    var scroll = window.scrollY;
    var trigger = height - vh - 40;
    var vw = window.innerWidth;


    // move footer nav up to reveal actual footer
    if( vw < 688 ) {
        if( scroll > trigger ) {
            //nav.style.transform = "translateY(-" + (scroll - trigger) + "px)";
            nav.classList.add('bottomed-out');

        } else {
            //nav.style.transform = "translateY(0)";
            nav.classList.remove('bottomed-out');
        }
    } else {}


    // initial logo transition
    // if(scroll > logoTrigger) {
    //     logo.classList.add('reveal');
    //     logoContainer.classList.add('fade-out');
    //     position.classList.add('reveal');
    //     nav.classList.add('bottom-header');
    //
    // } else {
    //     logo.classList.remove('reveal');
    //     logoContainer.classList.remove('fade-out');
    //     position.classList.remove('reveal');
    //     nav.classList.remove('bottom-header');
    // }

    logoState();

    // highlight active nav item
    if ( isInView( work ) ) {
        navWork.classList.add('active');
        navExp.classList.remove('active');
        navContact.classList.remove('active');

    } else if ( isInView( experience ) ) {
        navExp.classList.add('active');
        navWork.classList.remove('active');
        navContact.classList.remove('active');

    } else if ( isInView( contact ) ) {
        navContact.classList.add('active');
        navExp.classList.remove('active');
        navWork.classList.remove('active');

    } else {
        navWork.classList.remove('active');
        navExp.classList.remove('active');
        navContact.classList.remove('active');
    }


    if( isInViewport(divider) ) {
        divider.classList.add('in-view');
    }
}


logoState();

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', checkPosition);
