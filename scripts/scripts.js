const etchASketch = document.querySelector("#etch-a-sketch");
const containerDiv = document.querySelector("#container-div");
const clearAndPrompt = document.querySelector("#clearAndPrompt");
// let myColor = document.querySelector('#myColor');
//const rainbow = document.getElementById('#rainbow');

let selection = 16; //default on load

function newGrid(selection) {
	let selectionSquared = selection * selection;
	containerDiv.style.gridTemplateColumns = `repeat(${selection}, 1fr)`;

	for (let j = 0; j < selectionSquared; j++) {
		let div = document.createElement("div");
		containerDiv.appendChild(div);

		div.addEventListener("mouseover", function (event) {
            // const rainbow = document.getElementById('#rainbow');
			// rainbow.addEventListener('click',function (choice) {
            //     let o = Math.round, r = Math.random, s = 255;
            //     choice = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
            //     return choice;
            // });
            function chooseColor(){
                let myColor = document.querySelector('#myColor');
                let colorValue = myColor.value;
                choice = colorValue;
                return choice;
            }
           
            // function fadedBlack(){
            //     let numerator = 1;
            //     let denominator = 10;
            //     let opacity = (numerator/denominator);
            //     numerator++;
            //     return `rgba(255,255,255,${opacity})`;
            // }

            //let rainbow = random_rgba();
            let color = chooseColor();
            // let faded = fadedBlack();

           // let choice = color;
            // Set value to "black, color, rainbow, or faded"
                event.target.style.background = choice;
		});

		console.log(((j / selectionSquared) * 100).toFixed(2) + "% loaded...");
	}
}

function clearGrid() {
	document.getElementById("container-div").innerHTML = "";
}

clearAndPrompt.addEventListener("click", function () {
	let selection = parseInt(prompt("Select the size of the grid", ""));

	if (isNaN(Number(selection)) || selection > 100 || selection < 1) {
		alert("Please enter a number (1-100)");
	} else if (!selection) {
		return;
	} else {
		clearGrid();
		newGrid(selection);
	}
});

newGrid(selection);
