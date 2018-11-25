
const logo = document.querySelector('#logo');
const header = document.querySelector('#header');
const dates = document.querySelectorAll('.date');

const logoRect = logo.getBoundingClientRect();
const logoHeight = Math.round(logoRect.height);
const logoBottom = Math.round(logoRect.bottom);
const logoTrigger = (logoBottom + logoHeight);
const swatches = document.querySelectorAll('.swatch');




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

  // initial logo transition
  if(scroll > logoTrigger) {
    logo.classList.add('reveal');
    header.classList.add('bottom-header');
  } else {
    logo.classList.remove('reveal');
    header.classList.remove('bottom-header');
  }

  function removeClassByPrefix(el, prefix) {
    var regx = new RegExp('\\b' + prefix + '(.*)?\\b', 'g');
    el.classList = el.classList.remove(regx, '');
    return el;
}

  swatches.forEach(swatch => {
    const swatchPos = swatch.offsetTop;
    const swatchHeight = swatch.offsetHeight;
    const colorChange = swatch.offsetTop <= scroll && swatch.offsetTop + swatch.offsetHeight > scroll;
    let colorClass = swatch.dataset.color;



    let str = 'color';
    let regex = new RegExp(/^color-\S+/g);
    //let regex = /^color*$/;
    let test = str.match(regex);
    //console.log(removeClassByPrefix(logo, 'color'));


    if(colorChange){
      //removeClassByPrefix(logo, str);
      logo.classList.add(colorClass);

    }
  });

  // timeline transition
  dates.forEach(date => {
    const datePos = date.offsetTop + 150;
    const dateAppear = scroll > datePos;

    if(dateAppear) {
      date.classList.add('active');
    }
  });

}

//window.addEventListener('scroll', debounce(checkPosition));
window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', checkPosition);
