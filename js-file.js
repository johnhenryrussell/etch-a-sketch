//------JS FILE-----------------------------------------------------------------

const gridColumnContainer = document.querySelector('.grid-column-container');

//-------FUNCTIONS--------------------------------------------------------------

// Appends 16 div boxes to one row container 
function appendRows(rowContainer) {
for (let i=0; i < 16; i++) {
  const divGrid = document.createElement('div');
  divGrid.classList.add('grid-squares');
  rowContainer.appendChild(divGrid);
}};

// Appends 16 row containers to the main column container
function createRowContainer() {
  for (let i=0; i<16; i++) {
    const gridRowContainer = document.createElement('div');
    gridRowContainer.classList.add('grid-row-container');
    gridColumnContainer.appendChild(gridRowContainer);
  };
};

// Selects all row containers and adds 16 div boxes toe ach
function generateGrid() {
  createRowContainer();
  const gridContainer = document.querySelectorAll('.grid-row-container')
  gridContainer.forEach(appendRows); 
}

const squares = document.querySelectorAll('.grid-squares');



//-------Program-------------------------------------------------------------

generateGrid();

