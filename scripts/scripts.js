const etchASketch = document.querySelector("#etch-a-sketch");
const containerDiv = document.querySelector("#container-div");
const clearAndPrompt = document.querySelector("#clearAndPrompt");
const rainbow = document.getElementById("rainbow");
const title = document.getElementById("title");
const myColor = document.getElementById("myColor");

let selection = 16; //default on load

function newGrid(selection) {
  let selectionSquared = selection * selection;
  containerDiv.style.gridTemplateColumns = `repeat(${selection}, 1fr)`;

  for (let j = 0; j < selectionSquared; j++) {
    let div = document.createElement("div");
    containerDiv.appendChild(div);

    div.addEventListener("mouseover", function (event) {
      //make a div.addEventListener("mouseover", function (event) {
      //for each of the 4 variables below and add an erase variable
      //where the color goes back to white
      let ink = "black";
      let random_rgba = rainbowColors();
      let color = chooseColor();
      let faded = fadedBlack();

      rainbow.addEventListener("click", () => {
        ink = random_rgba;
      });
      title.addEventListener("click", () => {
        ink = faded;
      });
      myColor.addEventListener("click", () => {
        ink = color;
      });

      function rainbowColors() {
        let o = Math.round,
          r = Math.random,
          s = 255;
        let rainbow =
          "rgba(" +
          o(r() * s) +
          "," +
          o(r() * s) +
          "," +
          o(r() * s) +
          "," +
          r().toFixed(1) +
          ")";
        return rainbow;
      }

      function chooseColor() {
        let colorValue = myColor.value;
        return colorValue;
      }

      function fadedBlack() {
        let targetOpacity = event.target.style.background;
        if (!targetOpacity) {
          let numerator = 1;
          let denominator = 10;
          let opacity = numerator / denominator;
          return `rgba(0,0,0,${opacity})`;
        } else {
          let slice = +targetOpacity.slice(14, 17);
          slice += 0.1;
          return `rgba(0,0,0,${slice})`;
        }
      }

      // Set value to "black, color, rainbow, or faded"
      event.target.style.background = ink;
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
