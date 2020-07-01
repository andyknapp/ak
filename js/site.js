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

const dividers = document.querySelectorAll('.divider');

const textArea = document.querySelector('.text-area');


// check if element is within viewport
function isInView(elem) {
    var bounding = elem.getBoundingClientRect();

    return (
        bounding.top < (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.bottom >= ((window.innerHeight / 2) || (document.documentElement.clientHeight / 2))
    );
};


// check if element is above bottom of viewport
function isViewable(elem) {
    var bounding = elem.getBoundingClientRect();

    return (
        bounding.top < ((window.innerHeight - 20) || (document.documentElement.clientHeight - 20))
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


function emptyField() {
    textArea.addEventListener('blur', function() {
        if( textArea.value !== '') {
            textArea.classList.add('not-empty');

        } else {
            textArea.classList.remove('not-empty');
        }
    });
}


function checkPosition() {
    var scroll = window.scrollY;
    var trigger = height - vh - 40;
    var vw = window.innerWidth;


    // move footer nav up to reveal actual footer
    if( vw < 800 ) {
        if( scroll > trigger ) {
            //nav.style.transform = "translateY(-" + (scroll - trigger) + "px)";
            nav.classList.add('bottomed-out');

        } else {
            //nav.style.transform = "translateY(0)";
            nav.classList.remove('bottomed-out');
        }
    } else {}


    // initial logo transition
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

    // contact (dark)
    if ( isViewable( contact ) ) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

}


logoState();
emptyField();

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', checkPosition);
