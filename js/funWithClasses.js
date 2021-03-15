class Person {
  constructor(name, age, hobby) {
    // let this = this;
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.self = this;
  }

  greeting() {
    alert(
      "Howdy how! I am " + self.name + " and I'm ready to " + self.hobby + " !"
    );
  }
}

class Dancer extends Person {
  constructor(name, age, hobby, dancestyle) {
    super(name, age, hobby);
    this.dancestyle = dancestyle;
  }

  dance() {
    alert(
      "my name is " +
        this.name +
        " and i'd like to say, I love dancing the " +
        this.dancestyle +
        " in a major way!"
    );
  }
}

let person1 = new Person("zorro", 99, "ride a horse");
let person2 = new Person("anna", 16, "let it snow");
let dancer1 = new Dancer("Marry poppins", 20, "magic", "happy jive");
let dancer2 = new Dancer("Michael Jackson", 50, "shamone", "moonwalk");

renderPeople(person1, person2, dancer1, dancer2);

function renderPeople(person1, person2, dancer1, dancer2) {
  addPersonToPeopleDiv(person1);
  addPersonToPeopleDiv(person2);
  addPersonToPeopleDiv(dancer1);
  addPersonToPeopleDiv(dancer2);
}

function addPersonToPeopleDiv(person) {
  let persondiv = document.createElement("div");
  let colour = getRandomColor();
  persondiv.style.borderColor = colour;
  persondiv.style.borderStyle = "solid";

  //added the name of the person to a new p element
  let nameParagraph = document.createElement("p");
  let nameText = document.createTextNode(person.name);
  nameParagraph.appendChild(nameText);
  //added the age of the person to a new p element
  let ageParagraph = document.createElement("p");
  let ageText = document.createTextNode(person.age);
  ageParagraph.appendChild(ageText);
  //added the hobby of the person to a new p element
  let hobbyParagraph = document.createElement("p");
  let hobbyText = document.createTextNode(person.hobby);
  hobbyParagraph.appendChild(hobbyText);

  let danceParagraph = document.createElement("p");
  let danceText = document.createTextNode(person.dancestyle);
  danceParagraph.appendChild(danceText);

  //add a button to call the introduction function
  let buttonelement = document.createElement("button");
  buttonelement.style.backgroundColor = colour;
  buttonelement.style.fontSize = "1rem";
  buttonelement.style.color = "white";
  buttonelement.style.borderColor = "black";
  buttonelement.addEventListener("click", person.greeting);
  buttonelement.textContent = "click to hear an introduction";

  persondiv.appendChild(nameParagraph);
  persondiv.appendChild(ageParagraph);
  persondiv.appendChild(hobbyParagraph);
  persondiv.appendChild(danceParagraph);
  persondiv.appendChild(buttonelement);

  let peoplediv = document.querySelector("#people");
  peoplediv.appendChild(persondiv);
}

//create elements in html that show the persons and the dancer
//make buttons in html to make the person and dancer greet/dance
//use borders with random colors

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
