
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

    containerDiv.innerHTML = "";
    grid = [];

    // let byeDiv = document.getElementsByClassName('.draw');
    // let div = document.querySelector('div');
    // containerDiv = document.querySelector('#container-div');

    // for (let k = 0; k < grid.length; k++){
    //     grid.forEach(function (){
    //         containerDiv.removeChild(containerDiv.firstChild); <---- THROWS ERROR FOR SOME REASON
    //     });
    //     console.log(grid);
    // }
    // console.log(grid);

    setTimeout(function (){
        let selection = parseInt(prompt("Select the size of the grid", ''));

        if (isNaN(Number(selection)) || selection > 100 || selection < 1){
            alert("Please enter a number (1-100)");
        } else if (!selection){
            return;
        } else {
            newGrid();
            return selection;
        }
        function newGrid(){
            let selectionSquared = selection*selection;
            containerDiv.style.gridTemplateColumns = `repeat(${selection}, 1fr)`;

            for (let j = 0; j < selectionSquared; j++) {
                console.log(((j/selectionSquared)*100).toFixed(2) +'% loaded...');
                let div = document.createElement('div');
                grid.push(div);
                
                grid.forEach(function (grid){
                    containerDiv.appendChild(div);
                });
            
                div.addEventListener('mouseover', function (event) {
                    event.target.style.background = "black";
                });
            }
        }
    }, 1000);
});



