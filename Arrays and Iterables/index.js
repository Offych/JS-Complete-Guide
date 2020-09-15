/* /* const numbers = [1, 2, 3];
console.log(numbers); */

/* const moreNumbers = new Array(5);
console.log(moreNumbers);

const addMoreNumbers = Array.of(1, 2);
console.log(addMoreNumbers); */

/* const listItems = document.querySelectorAll("li");
console.log(listItems);
const moreNumbers = Array.from(listItems);

console.log(moreNumbers);

const hobbies = ["Sport", "Beer"];
const personData = [43, "Alex", { moreDetaild: [] }];
const analyticData = [
  [1, 1.3],
  [-5.4, 2.1],
];

for (const data of analyticData) {
  // console.log(data);
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personData[1]);
 */
/* 
const hobbies = ["Sport", "Beer"];

hobbies.push("Reading");
hobbies.unshift("Music");
hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = "Coding"; */
//hobbies[5] = "Reading";
/* console.log(hobbies);

hobbies.splice(1, 0, "Good food");

console.log(hobbies);

const removedElement = hobbies.splice(-2, 1);
console.log(removedElement);
console.log(hobbies);
 */
//const testResults = [1, 5.3, 1, 5, 10.99, 5.3, -5, 10];
//const storedResults = testResults.slice(2);
/* const storedResults = testResults.concat([7, 77]);
testResults;
testResults.push(123);

console.log(testResults, storedResults);
console.log(testResults.lastIndexOf(5.3));
console.log(testResults.includes(5.3));
const personData = [{ name: "Max" }, { name: "Alex" }];

console.log(personData.indexOf({ name: "Max" }));

const alex = personData.find((person, index, persons) => {
  return person.name === "Alex";
});
alex.name = "off";
console.log(alex, personData);

const max = personData.findIndex((person, idx, persons) => {
  return (person.name = "Max");
});

console.log(max); */

//const prices = [10.99, 5.99, 3.99, 6.59];
//const tax = 0.19;

//const taxAdjustedPrices = [];

/* for (const price of prices) {
  taxAdjustedPrices.push(price * (1 + tax));
} */
/* prices.forEach((price, index, prices) => {
  const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
}); */

//console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

//const taxAdjustedPrices = [];

const taxAdjustedPrices = prices.map((price, index, prices) => {
  const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

//console.log(prices, taxAdjustedPrices);
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices.reverse());

const filteredArray = prices.filter((price) => price > 6);
console.log(filteredArray);

/* let sum = 0;

prices.forEach((price) => {
  sum += price;
});

console.log(sum);
 */

const sum = prices.reduce((prevValue, curValue, curIndes, prices) => {
  return prevValue + curValue;
}, 0);

console.log(sum);
