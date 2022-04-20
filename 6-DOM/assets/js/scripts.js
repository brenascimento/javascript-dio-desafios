let body = document.querySelector('body');
let h1 = document.querySelector('#page-title');
let button = document.querySelector('#mode-selector');
let footer = document.querySelector('footer');

button.addEventListener('click', () => {
    changeMode();
})

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses() {
    // adicionando toggle para todos os elementos precisos
    [body, h1, button, footer].map((value) => value.classList.toggle('dark-mode'));
}

function changeText() {
    if(body.classList.contains('dark-mode')) {
        button.innerText = 'Light Mode';
        h1.innerText = 'Dark Mode ON';
    } 
    else {
        button.innerText = 'Dark Mode';
        h1.innerHTML = 'Light Mode ON';
    }
}



