//Select DOM elements
const inputSquare = document.getElementById('squareSide');
const squareMessage = document.getElementById('squareMessage');

//Square functions
function squarePerimeter(side) {
  return side * 4;
}
function squareArea(side) {
  return side * side;
}

function calculateSquarePerimeter() {
  const value = Number(inputSquare.value);
  if (value > 0) {
    const result = squarePerimeter(value);
    renderResults(result, squareMessage);
  } else {
    alert('¡Tu medida es errónea!');
  }
}
function calculateSquareArea() {
  const value = Number(inputSquare.value);
  if (value > 0) {
    const result = squareArea(value);
    renderResults(result, squareMessage);
  } else {
    alert('¡Tu medida es errónea!');
  }
}

//Render

function renderResults(result, place) {
  place.value = result;
}
