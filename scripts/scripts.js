
const etchASketch = document.querySelector('#etch-a-sketch');
const containerDiv = document.querySelector('#container-div');

let grid = [];
let dot = document.querySelector('.draw');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('draw');
    grid.push(div);
    
    grid.forEach(function (grid){
        containerDiv.appendChild(div);
    });
}
function styleBackground (){
    div.cssText = "background: black;"
    containerDiv.appendChild(div);
}
div.addEventListener('mouseenter', styleBackground);



