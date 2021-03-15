let person = new Person('Hannah', 48, 'launching rockets');


Person.prototype.farewell = function() {
    alert(this.name + ' has left the building. Bye for now!');
  };

function Person(name, age, hobby){
    
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.introduction = function (){
        alert("Hi! nice to meet you, my name is " + this.name + ", I am " + this.age + "years old and my hobby is: " + this.hobby);
    };
    
}