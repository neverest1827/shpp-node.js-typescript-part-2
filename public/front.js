"use strict";
var Button;
(function (Button) {
    Button["Plus"] = "plus";
    Button["Minus"] = "minus";
})(Button || (Button = {}));
let buttonPlus = document.querySelector('.plus');
let buttonMinus = document.querySelector('.minus');
if (buttonPlus && buttonMinus) {
    buttonPlus.addEventListener('click', () => taskClick(Button.Plus));
    buttonMinus.addEventListener('click', () => taskClick(Button.Minus));
}
async function taskClick(button) {
    const response = await fetch(`/${button}`, {
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    let counter = document.querySelector(`.${button}_counter`);
    if (counter)
        counter.innerHTML = data.count;
}
