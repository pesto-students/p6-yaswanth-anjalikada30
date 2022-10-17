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

const printPerson2 = person1.printName.bind(person2)
printPerson2();

function calculateDiscount(discount, amount) {
    return (amount * discount) / 100;
}
const calculate10PercentDiscount = calculateDiscount.bind(null, 10);
console.log('10% discount of 500-', calculate10PercentDiscount(500))
console.log('10% discount of 1000-', calculate10PercentDiscount(1000))
console.log('10% discount of 5000-', calculate10PercentDiscount(5000))

const calculate20PercentDiscount = calculateDiscount.bind(null, 20);
console.log('20% discount of 500-', calculate20PercentDiscount(500))
console.log('20% discount of 1000-', calculate20PercentDiscount(1000))
console.log('20% discount of 5000-', calculate20PercentDiscount(5000))