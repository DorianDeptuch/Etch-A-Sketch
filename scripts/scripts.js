
const etchASketch = document.querySelector('#etch-a-sketch');
const containerDiv = document.querySelector('#container-div');
const clearAndPrompt = document.querySelector('#clearAndPrompt');

let grid = [];

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    // div.classList.add('draw');
    grid.push(div);
    
    grid.forEach(function (grid){
        containerDiv.appendChild(div);
    });

    div.addEventListener('mouseover', function (event) {
        event.target.style.background = "black";
    });
}

clearAndPrompt.addEventListener('click', function (){

    containerDiv.innerHTML="";

    
    let selection = parseInt(prompt("Select the size of the grid", ''));

    if (!selection){
        return;
    } else if (isNaN(selection) || selection > 100 || selection < 1){
        alert("Please enter a number (1-100)");
        return;
    } 
    
    containerDiv.style.gridTemplateColumns = `repeat(${selection}, 1fr)`;

    for (let j = 0; j < selection^2; j++) {
        let div = document.createElement('div');
        grid.push(div);
        
        grid.forEach(function (grid){
            containerDiv.appendChild(div);
        });
    
        div.addEventListener('mouseover', function (event) {
            event.target.style.background = "black";
        });
    }
});



    // for (let j = 0; j < 256; j++) {
    //     grid.pop();
    // }



