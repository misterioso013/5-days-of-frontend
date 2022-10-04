window.onload = () => {
const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const modal = document.querySelector('.subscribe__modal');
const modalbackground = document.querySelector('.modal__background');

btn.addEventListener('click', function() {
    const isActive = body.classList.contains('modal__open');
    if (isActive) {
        body.classList.remove('modal__open');
    } else {
        body.classList.add('modal__open');
    }

    modal.style = 'display: block';
    modalbackground.style = 'display: block';

    const close = document.querySelector('.subscribe__close');
    close.addEventListener('click', function() {
        body.classList.remove('modal__open');
        modal.style = 'display: none';
        modalbackground.style = 'display: none';
    });
});

modalbackground.addEventListener('click', function(e) {
    if (e.target === modalbackground) {
        body.classList.remove('modal__open');
        modal.style = 'display: none';
        modalbackground.style = 'display: none';
    }
});

// count down timer
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// current date
const date = new Date();
const countDown = () => {

    // current date + 5 days
    const countDate = new Date(date.getTime() + 5 * 24 * 60 * 60 * 1000).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    days.innerHTML = textDay;
    hours.innerHTML = textHour;
    minutes.innerHTML = textMinute;
    seconds.innerHTML = textSecond;
}

setInterval(countDown, 1000);

const form = document.querySelector('.subscribe__form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
   const data = new FormData(form);
    const email = data.get('email');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailRegex.test(email);
    console.log(isValid);

    // Continue...
});

}