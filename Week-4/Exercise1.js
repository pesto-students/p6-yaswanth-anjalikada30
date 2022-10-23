const getNumber = (ms, printNumberCb) => {
    return new Promise((resolve, reject)=>{
        this.randomNumber = Math.floor(Math.random()*1000);
        /*binding callback's this to Promise this*/
        const printNumber = printNumberCb.bind(this);
        /*prints generated random number*/
        printNumber();
        if(!(this.randomNumber % 5)){
            /*resolves number with given delay*/
            setTimeout(()=>resolve(this.randomNumber), ms)
        }else{
            /*rejects number with given delay*/
            setTimeout(()=>reject(this.randomNumber), ms)
        }
    })
}
const obj = {
    randomNumber: Math.random(),
    printNumber(){
        console.log('Random number-', this.randomNumber);
    }
}
/* sending printNumber as callback*/
getNumber(1000, obj.printNumber)
.then(response=>console.log("Success! Number is divisible by 5-", response))
.catch(error=>console.log("Error! Number is not divisible by 5-", error))