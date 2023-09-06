"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c
  let bNegative = b - (b * 2);
  if(d === 0){
    let x = bNegative / (2 * a);
    arr.push(x);
  }
  if (d > 0) {
  let x = (bNegative + Math.sqrt(d)) / (2 * a);
  arr.push(x);
  let x1 = (bNegative - Math.sqrt(d)) / (2 * a);
  arr.push(x1);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentPerMounth = percent / (100 * 12);
  let payment = (amount - contribution) * (percentPerMounth / (1 - (1 + percentPerMounth) ** (countMonths - (countMonths * 2))));
  let result = payment * countMonths;
  return +result.toFixed(2);
}