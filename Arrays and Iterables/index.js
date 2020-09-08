/* const numbers = [1, 2, 3];
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

const hobbies = ["Sport", "Beer"];

hobbies.push("Reading");
hobbies.unshift("Music");
hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = "Coding";
//hobbies[5] = "Reading";
console.log(hobbies);

hobbies.splice(1, 0, "Good food");

console.log(hobbies);

const removedElement = hobbies.splice(-2, 1);
console.log(removedElement);
console.log(hobbies);
