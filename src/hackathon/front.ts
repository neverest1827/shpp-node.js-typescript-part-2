enum Button {
    Plus = "plus",
    Minus = "minus"
}

type TypeButton = Button.Plus | Button.Minus

let buttonPlus: Element | null = document.querySelector('.plus');
let buttonMinus: Element | null = document.querySelector('.minus');
if (buttonPlus && buttonMinus){
    buttonPlus.addEventListener('click', () => taskClick(Button.Plus))
    buttonMinus.addEventListener('click', () => taskClick(Button.Minus))
}

async function taskClick(button: TypeButton) {
    const response = await fetch(`/${button}`, {
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    let counter: Element | null = document.querySelector(`.${button}_counter`)
    if (counter) counter.innerHTML = data.count;
}
