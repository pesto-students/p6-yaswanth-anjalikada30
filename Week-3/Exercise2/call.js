
const person1 = {
    name: 'Anjali',
    state: 'Andhra Pradesh',
    printName: function () {
        console.log(`${this.name} from ${this.state} state.`)
    }
}

const person2 = {
    name: 'Kada',
    state: 'Andhra Pradesh',
}

person1.printName();  //prints Anjali from Andhra Pradesh state.
person1.printName.call(person2); //prints Kada from Andhra Pradesh state.