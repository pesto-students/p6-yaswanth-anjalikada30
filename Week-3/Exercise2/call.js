
const person1 = {
    name: 'Anjali',
    state: 'Andhra Pradesh',
    printName: function (city, country) {
        console.log(`${this.name} from ${city}, ${this.state}, ${country}.`)
    }
}

const person2 = {
    name: 'Kada',
    state: 'Andhra Pradesh',
}

person1.printName('Hyderabad', 'India');  //prints Anjali from Hyderabad, Andhra Pradesh, India.
person1.printName.call(person2, 'Hyderabad', 'India'); //prints Kada from Hyderabad, Andhra Pradesh, India.