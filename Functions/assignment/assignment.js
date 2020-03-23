const sayHello = name => console.log("Hi " + name);
const sayHello2 = (name, phrase) => {
  console.log(phrase + " " + name);
};
const sayHello3 = () => console.log("Hi hardcoded ");
const sayHello4 = name => "Hi " + name;

sayHello("Sashka");
sayHello2("Hello", "Max");
sayHello3();
console.log(sayHello4("alex"));

const sayHello5 = (name, phrase = "Hello again") => {
  console.log(phrase + " " + name);
};

sayHello5("Offych");
sayHello5("Alexashka", "Replace default value");

function checkInput(callback, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    callback();
  }
}

checkInput(
  () => {
    console.log("All not empty");
  },
  "sam",
  "ohohooho",
  ""
);
