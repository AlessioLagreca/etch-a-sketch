// 1)  16x16 grid
// 2)  Put your grid squares inside another “container” div
// 3)  Use flexbox to make the divs appear as a grid 
// 4)  Set up a “hover” effect so that the grid divs change color when your mouse passes over them
// 5)  Add a button to remove the existing grid and a new grid should be generated 
//     in the same total space as before (e.g. 960px wide) 
const gridContainer = document.querySelector(".gridContainer");
createGrid(16);

let newBtn = document.getElementById("new");
let clearBtn = document.getElementById("clear");
let rainbowBtn = document.getElementById("rainbow");

function createGrid(newSize) {
    // clear current grid
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let r = 0; r < newSize; r++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add("row");

        for (let c = 0; c < newSize; c++) {
            let gridCell = document.createElement('div');
            gridCell.classList.add("cell");
            gridCell.addEventListener('mouseover', draw);
            gridRow.appendChild(gridCell);
        }

        gridContainer.appendChild(gridRow);
    }
}


function draw() {
    this.classList.add('draw');
}

function rainbow() {
    var o = Math.round, r = Math.random, s = 255;
    var color = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    console.log(color);
    this.style.backgroundColor = color;
}


clearBtn.addEventListener('click', () => {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.classList.remove('draw');
        cell.style.backgroundColor = "white";
    })
})


newBtn.addEventListener('click', () => {
    let newSize = prompt("Enter a new grid size 1-100");
    if (!(newSize >= 1 && newSize <= 100)) {
        alert("Please enter a size between 1 and 100");
        return;
    }
    createGrid(newSize)
});


rainbowBtn.addEventListener('click', () => {
    let cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.removeEventListener('mouseover', draw);
        cell.addEventListener('mouseover', rainbow);
    });
});
