const numArr = [1, 2, 3, 12, 23, 44];
console.log(numArr);

const filteredArr = numArr.filter((num) => num > 5);
console.log(filteredArr);

const mappedArr = filteredArr.map((num) => {
  const arrObj = { index: num };
  return arrObj;
});
console.log(mappedArr);
debugger;
const reducedArr = numArr.reduce((reducerValue, arrElement) => {
  return reducerValue * arrElement;
}, 1);
console.log(reducedArr);

function findMaxValue() {
  const maxVal = Math.max(...numArr);
  const minVal = Math.min(...numArr);
  const arr = [minVal, maxVal];
  return arr;
}
const [min, max] = findMaxValue();
console.log(min, max);

const set = new Set();

set.add(10);
set.add(3);
set.add(3);

console.log(set);

//from max
const numbers = [1, 2, 3, 4, 5, 6];

const numbGreater5 = numbers.filter((val) => val > 5);
console.log(numbGreater5);

const mapNumbers = numbers.map((val) => ({ num: val }));
console.log(mapNumbers);

const multiplication = numbers.reduce((curResult, curValue) => {
  return curResult * curValue;
}, 1);
console.log(multiplication);

function findMax2(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}
console.log(findMax2(...numbers));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}
const [min1, max1] = findMinMax(...numbers);
console.log(min1, max1);

const set1 = new Set();

set1.add(10);
set1.add(-5);
set1.add(-5);

console.log(set1);
