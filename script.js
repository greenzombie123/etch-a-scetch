const gridContainer = document.querySelector(".gridContainer");
const setGrid = document.querySelector("#setGrid");
const popup = document.querySelector('.popup');
const reset = document.querySelector("#reset");
const opacity = document.querySelector('.opacity');
const enter = document.querySelector('#enter');
const gridsize = document.querySelector('#gridsize');
const message = document.querySelector('.message');
let isHover = false;
let isDown = false;

gridContainer.addEventListener('dragstart',(e)=>{
    e.preventDefault();
})

function createGrid(squares) {
  var column = "1fr ";
  var numOfColumn = "";
  for (let index = 0; index < squares; index++) {
    numOfColumn += column;
  }
  console.log(numOfColumn);

  gridContainer.style.gridTemplateColumns = numOfColumn;

  var gridSize = squares * squares;

  for (let index = 0; index < gridSize; index++) {
    var gridCell = document.createElement("div");
    
    gridCell.addEventListener('mouseover', (e)=>{
        isHover = true;
        if (isDown && isHover) {
            e.target.classList.add("black");
        }
    });
    gridCell.addEventListener('mouseout', ()=>{
        isHover = false;
    })

    gridCell.addEventListener("mousedown", (e) => {
        isDown = true;
        if (isHover && isDown) {
            e.target.classList.add("black");
        }
    });

    gridCell.addEventListener('mouseup', ()=>{
        isDown = false;
    })

    gridContainer.appendChild(gridCell);
  }
}

createGrid(10);

setGrid.addEventListener('click', openResizeMessage);

function openResizeMessage(){
    popup.style.display = "block";
    opacity.style.display = 'block';
}

function closeResizeMessage(){
    
}

enter.addEventListener('click', )

function enterGridSize(){
    var numberofTiles = gridsize.value;
    if (numberofTiles <= 0) {
        message.textContent = "Please enter a number greater than 0";
    }
    else if (numberofTiles <= 64) {
        gridContainer.textContent = '';
        createGrid(numberofTiles);
    }
    else
        message.textContent = "Please enter a number of 64 or below";
    
}

function resetGrid(){
    
}
