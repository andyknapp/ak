const body = document.body;
const html = document.documentElement;
const vh = window.innerHeight;

const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

const logo = document.querySelector('#logo');
const logoContainer = document.querySelector('.logo-container');
const header = document.querySelector('#header');
const nav = document.querySelector('.site-nav');

const logoRect = logo.getBoundingClientRect();
const logoHeight = Math.round(logoRect.height);
const logoBottom = Math.round(logoRect.bottom);
const logoTrigger = (logoBottom - logoHeight);

const leadBlock = document.querySelector('#lead-block');
const secondaryBlock = document.querySelector('#secondary-block');
const tertiaryBlock = document.querySelector('#tertiary-block');


function debounce(func, wait = 10, immediate = true) {
    var timeout;

    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;

            if(!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


function checkPosition() {
    const scroll = window.scrollY;
    const trigger = height - vh - 40;

    // initial logo transition
    if(scroll > logoTrigger) {
        logo.classList.add('reveal');
        logoContainer.classList.add('fade-out');
        nav.classList.add('bottom-header');

    } else {
        logo.classList.remove('reveal');
        logoContainer.classList.remove('fade-out');
        nav.classList.remove('bottom-header');
    }

    // move footer nav up to reveal actual footer
    if( scroll > trigger ) {
        nav.style.transform = "translateY(-" + (scroll - trigger) + "px)";
        nav.classList.add('bottomed-out');

    } else {
        nav.style.transform = "translateY(0)";
        nav.classList.remove('bottomed-out');
    }
}


//window.addEventListener('scroll', debounce(checkPosition));
window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', checkPosition);
