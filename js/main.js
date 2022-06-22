//Select DOM elements
const inputSquare = document.getElementById('squareSide');
const squareMessage = document.getElementById('squareMessage');
const triangleMessage = document.getElementById('triangleMessage');
const triangleSideA = document.getElementById('triangleSideA');
const triangleSideB = document.getElementById('triangleSideB');
const triangleBase = document.getElementById('triangleBase');
const triangleHeight = document.getElementById('triangleHeight');
const triangleHeightMessage = document.getElementById('triangleHeightMessage');
const triangleHeightSideA = document.getElementById('triangleHeightSideA');
const triangleHeightSideB = document.getElementById('triangleHeightSideB');
const triangleHeightBase = document.getElementById('triangleHeightBase');
const circleRadio = document.getElementById('circleRadio');
const circleMessage = document.getElementById('circleMessage');

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

//Isosceles tiangle height
function heightTriangleIsosceles(sideA, base) {
  const sideASquared = sideA * sideA;
  const baseSquared = base * base;
  const height = Math.sqrt(sideASquared - baseSquared / 4);
  return height.toFixed(2);
}

function calculateTriangleHeight() {
  const sideA = Number(triangleHeightSideA.value);
  const sideB = Number(triangleHeightSideB.value);
  const base = Number(triangleHeightBase.value);
  if (base > 0 && sideA > 0 && sideB > 0) {
    if (sideA === sideB && sideA !== base) {
      const result = heightTriangleIsosceles(sideA, base);
      renderResults(result, triangleHeightMessage);
    } else {
      alert('Error, el triángulo no es isósceles');
    }
  } else {
    alert('¡Tu medida es errónea!');
  }
}

//Circle
const pi = Math.PI;

function circleDiameter(radio) {
  return radio * 2;
}

function circlePerimeter(radio) {
  const diameter = circleDiameter(radio);
  const perimeter = diameter * pi;
  return perimeter.toFixed(2);
}

function circleArea(radio) {
  const area = radio * radio * pi;
  return area.toFixed(2);
}
function calculateCirclePerimeter() {
  const value = Number(circleRadio.value);
  if (value > 0) {
    const result = circlePerimeter(value);
    renderResults(result, circleMessage);
  } else {
    alert('¡Tu medida es errónea!');
  }
}

function calculateCircleArea() {
  const value = Number(circleRadio.value);
  if (value > 0) {
    const result = circleArea(value);
    renderResults(result, circleMessage);
  } else {
    alert('¡Tu medida es errónea!');
  }
}

//Render

function renderResults(result, place) {
  place.value = result;
}
