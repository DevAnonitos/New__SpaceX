const btn = document.getElementById('menu-btn');
const overplay = document.getElementById('overplay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;
btn.addEventListener('click', navToggle);

function navToggle(){
    btn.classList.toggle('open');
    overplay.classList.toggle('overplay-show')
    document.body.classList.toggle('stop-scroll');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;
  
    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counter) => {
      counter.innerText = '0';
  
    const updateCounter = () => {
        // Get count target
        const target = +counter.getAttribute('data-target');
        // Get current counter value
        const c = +counter.innerText;
  
        // Create an increment
        const increment = target / 100;
  
        // If counter is less than target, add increment
        if (c < target) {
            // Round up and set counter value
            counter.innerText = `${Math.ceil(c + increment)}`;
  
            setTimeout(updateCounter, 75);
        }else {
            counter.innerText = target;
        }
    };
  
        updateCounter();
    });
}

countUp();
  
function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
}