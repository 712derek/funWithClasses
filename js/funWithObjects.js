let person1 = new Person('bobo','65','hobo');

let person2 = new Person('benny', 40, 'playing the guitar');

let person3 = new Person('betty', 30, 'playing badminton');

let person4 = new Person('billy', 20, 'playing cownboy and indian');

let person5 = new Person('bronco', 10, 'riding the minimotorcycle');

renderPeople(person1,person2,person3,person4,person5);

function renderPeople(person1,person2,person3,person4,person5){

    //add the persons to the div with id people
    addPersonToPeopleDiv(person1);
    addPersonToPeopleDiv(person2);
    addPersonToPeopleDiv(person3);
    addPersonToPeopleDiv(person4);
    addPersonToPeopleDiv(person5);
}

function addPersonToPeopleDiv(person){
    let persondiv = document.createElement('div');
    let colour = getRandomColor();
    persondiv.style.borderColor = colour;
    persondiv.style.borderStyle = 'solid';
    
    
    //added the name of the person to a new p element
    let nameParagraph = document.createElement('p');
    let nameText = document.createTextNode(person.name);
    nameParagraph.appendChild(nameText);
    //added the age of the person to a new p element
    let ageParagraph = document.createElement('p');
    let ageText = document.createTextNode(person.age);
    ageParagraph.appendChild(ageText);
    //added the hobby of the person to a new p element
    let hobbyParagraph = document.createElement('p');
    let hobbyText = document.createTextNode(person.hobby);
    hobbyParagraph.appendChild(hobbyText);

    //add a button to call the introduction function
    let buttonelement = document.createElement('button');
    buttonelement.addEventListener('click',person.introduction);
    buttonelement.textContent = 'click to hear an introduction';

    persondiv.appendChild(nameParagraph);
    persondiv.appendChild(ageParagraph);
    persondiv.appendChild(hobbyParagraph);
    persondiv.appendChild(buttonelement);

    let peoplediv = document.querySelector('#people');
    peoplediv.appendChild(persondiv);
}

/*
let person3 = {
    name: 'betty',
    age: 30,
    hobby: 'playing badminton'
}

let person4 = {
    name: 'billy',
    age: 20,
    hobby: 'playing cownboy and indian'
}

let person5 = {
    name: 'bronco',
    age: 10,
    hobby: 'riding the minimotorcycle'
}
*/
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);

function Person(name, age, hobby){
    
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.introduction = function (){
        alert("Hi! nice to meet you, my name is " + this.name + ", I am " + this.age + "years old and my hobby is: " + this.hobby);
    };
}


/*
function personCreateFunction(name, age, hobby){
    let personObject = {};
    personObject.name = name;
    personObject.age = age;
    personObject.hobby = hobby;

    return otherPersonObject;
}
*/




function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }







