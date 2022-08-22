//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let htmlDivElement = document.createElement('div');

htmlDivElement.innerText = 'hi';
htmlDivElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
htmlDivElement.style.backgroundColor = 'silver';
htmlDivElement.style.color = 'blue';
htmlDivElement.style.fontSize = '50px';

document.body.appendChild(htmlDivElement);

let cloneNode = htmlDivElement.cloneNode(true);
document.body.appendChild(cloneNode);





