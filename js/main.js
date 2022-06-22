//Select DOM elements
const inputSquare = document.getElementById('squareSide');
const squareMessage = document.getElementById('squareMessage');
const triangleMessage = document.getElementById('triangleMessage');
const triangleSideA = document.getElementById('triangleSideA');
const triangleSideB = document.getElementById('triangleSideB');
const triangleBase = document.getElementById('triangleBase');
const triangleHeight = document.getElementById('triangleHeight');

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

//Triangle

function trianglePerimeter(sideA, sideB, base) {
  return sideA + sideB + base;
}

function triangleArea(base, height) {
  return (base * height) / 2;
}

function calculateTrianglePerimeter() {
  const sideA = Number(triangleSideA.value);
  const sideB = Number(triangleSideB.value);
  const base = Number(triangleBase.value);
  if (base > 0 && sideA > 0 && sideB > 0) {
    const result = trianglePerimeter(sideA, sideB, base);
    renderResults(result, triangleMessage);
  } else {
    alert('¡Tu medida es errónea!');
  }
}

function calculateTriangleArea() {
  const base = Number(triangleBase.value);
  const height = Number(triangleHeight.value);
  if (base > 0 && height > 0) {
    const result = triangleArea(base, height);
    renderResults(result, triangleMessage);
  } else {
    alert('¡Tu medida es errónea!');
  }
}

//Render

function renderResults(result, place) {
  place.value = result;
}
