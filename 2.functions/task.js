function getArrayParams(...arr) {
  let min = Math.min.apply(null, arr)
  let max = Math.max.apply(null, arr)
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
let num = sum / arr.length;
let avg = +num.toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let num = 0;
  for(let i = 0; i < arr.length; i++){
    num += arr[i];
  }
return num;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let result = 0;
  arr.length > 0 ? result = max - min : result;

  return result;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if(arr.length > 0){
    for(let i = 0; i < arr.length; i++){
      (arr[i] % 2) ? sumOddElement += arr[i] : sumEvenElement += arr[i];
    }
  }
  
  return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result = 0;
  if(arr.length > 0){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0){
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    result = sumEvenElement / countEvenElement;
  }

  
  return result;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++){
    const result = func(...arrOfArr[i]);
    if(result > maxWorkerResult) {
      maxWorkerResult = result;
    }

  }
 return maxWorkerResult;
}
