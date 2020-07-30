const movieList = document.getElementById("movie-list");
movieList.style["backgroundColor"] = "red";
movieList.style.display = "block";

const userChosenKeyName = "level";

let person = {
  "first name": "Max",
  age: 30,
  hobbies: ["Sports", "Games"],
  [userChosenKeyName]: "....",
  greet: function () {
    alert("Hi there!");
  },
  1.5: "hello",
};

const keyName = "first name";

//delete person.age;
person.isAdmin = true;
person.age = null;
console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);
