"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c
  let b2 = b - (b * 2);
  if(d === 0){
    let x = b2 / (2 * a);
    arr.push(x);
  }
  if (d > 0) {
  let x = (b2 - Math.sqrt(d)) / (2 * a);
  arr.push(x);
  let x1 = (b2 + Math.sqrt(d)) / (2 * a);
  arr.push(x1);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}