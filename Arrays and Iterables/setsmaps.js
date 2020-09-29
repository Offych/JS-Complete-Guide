/* const ids = new Set(["hu", "HU1", "123"]);
ids.add(2);
ids.delete("hu");

console.log(ids);

for (const entry of ids.entries()) {
  console.log(entry[0]);
}
 */
/* const person1 = { name: "alex" };
const person2 = { name: "polina" };

const personData = new Map([[person1, [{ date: "monday", price: 10 }]]]);

personData.set(person2, [{ date: "2 weeks", price: 50 }]);

console.log(personData);

console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}
for (const value of personData.values()) {
  console.log(value);
}
console.log(personData.size);
 */

let person = { name: "Sasha" };
const persons = new WeakSet();

persons.add(person);

// ...operations
//person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, "extra info");

person = null;

console.log(personData);
