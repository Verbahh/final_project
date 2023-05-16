
const passwordEl = document.querySelector('.registration-input-password');
const repeatEl = document.querySelector('.registration-input-repeat');

const ratingStars = document.querySelectorAll('.rating-star');

let password = "";
let repeat = "";
let error = false;

let selectStar = 0;
let focusStar = 0;

passwordEl.addEventListener('input', (event) => {
    password = event.target.value;
    if (!password && !repeat) {
        repeatEl.removeAttribute("style");
        passwordEl.removeAttribute("style");
        return;
    }
    if (repeat !== password) error = true;
    else error = false;

    if (error) {
        passwordEl.style.border = "2px solid red";
        repeatEl.style.border = "2px solid red";
    } else {
        passwordEl.style.border = "2px solid green";
        repeatEl.style.border = "2px solid green";
    }
});

repeatEl.addEventListener('input', (event) => {
    repeat = event.target.value;
    if (!password && !repeat) {
        repeatEl.removeAttribute("style");
        passwordEl.removeAttribute("style");
        return;
    }
    if (repeat !== password) error = true
    else error = false;

    if (error) {
        passwordEl.style.border = "2px solid red";
        repeatEl.style.border = "2px solid red";
    } else {
        passwordEl.style.border = "2px solid green";
        repeatEl.style.border = "2px solid green";
    }
});

const selectsStars = (id) => {
    ratingStars.forEach(el => {
        if (el.id <= id) {
            el.classList.add('rating-star-checked');
        } else {
            el.classList.remove('rating-star-checked');
        }
    });
}

ratingStars.forEach(element => {
    element.addEventListener('click', () => {
        selectStar === element.id ? selectStar = 0 : selectStar = element.id;
        selectsStars(selectStar);
    });

    element.addEventListener('mouseenter', () => {
        focusStar = element.id;
        selectsStars(focusStar);
    });

    element.addEventListener('mouseleave', () => {
        focusStar = element.id;
        selectsStars(selectStar);
    });
});