const Person = function(city){
    this.city = city;
}

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}

const Teacher = function(city){
    /*binding this of Person with Teacher so when we assign variables to this in
    Person they are assigned to this of Teacher*/
    Person.call(this, city);
}

Teacher.prototype.teach = function(subject){
    console.log(`${this.name} from ${this.city} is now teaching ${subject}`)
}
/*setting prototype of Teacher.prototype to Person.prototype to inherit 
properties and methods*/
Object.setPrototypeOf(Teacher.prototype, Person.prototype)

const him = new Teacher('Hyderabad');
him.initialize("Adam", 45)
him.teach('Inheritance')
