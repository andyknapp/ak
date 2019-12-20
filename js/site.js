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

const contact = document.querySelector('#contact');
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
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
};


function checkPosition() {
    const scroll = window.scrollY;
    const trigger = height - vh - 40;
    const vw = window.innerWidth;


    // move footer nav up to reveal actual footer
    if( vw < 688 ) {
        if( scroll > trigger ) {
            nav.style.transform = "translateY(-" + (scroll - trigger) + "px)";
            nav.classList.add('bottomed-out');

        } else {
            nav.style.transform = "translateY(0)";
            nav.classList.remove('bottomed-out');
        }
    } else {}
    

    // initial logo transition
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

    if( (scroll > 68) && (isInView( contact )) ) {
        navContact.classList.add('active');
        navExp.classList.remove('active');

    } else if( scroll > 68 ) {
        navExp.classList.add('active');
        navContact.classList.remove('active');

    } else {
        navExp.classList.remove('active');
        navContact.classList.remove('active');
    }

    if( isInViewport(divider) ) {
        divider.classList.add('in-view');
    }
}


window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', checkPosition);
