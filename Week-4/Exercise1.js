const STATUS = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending"
}
class MyPromise {
    #state = STATUS.PENDING;
    #value = undefined;
    #thenCallbs = [];
    #catchCallbs = [];
    #onSuccessBinded = this.#onSuccess.bind(this)
    #onFailBinded = this.#onFail.bind(this)
    constructor(executorFn) {
        try {
            //call executorFn with binded onSuccess and onFail so that this reference is not lost.
            executorFn(this.#onSuccessBinded, this.#onFailBinded)
        } catch (error) {
            //call onFail if there is an error
            this.#onFail(error)
        }
    }
    #runCallbacks() {
        if (this.#state === STATUS.FULFILLED) {
            //execute then callbacks when state is fulfilled
            this.#thenCallbs.forEach(callback => {
                callback(this.#value)
            })
            //clear callbacks to avoid multiple executions
            this.#thenCallbs = []
        }
        if (this.#state === STATUS.REJECTED) {
            //execute catch callbacks when state is rejected
            this.#catchCallbs.forEach(callback => {
                callback(this.#value)
            })
            //clear callbacks to avoid multiple executions
            this.#catchCallbs = []
        }
    }
    #onSuccess(value) {
        //if promise is already settled, return
        if (this.#state !== STATUS.PENDING) return;
        if(value instanceof MyPromise){
            //if value is promise wait for it to settle
            value.then(this.#onSuccessBinded, this.#onFailBinded)
            return;
        }
        this.#state = STATUS.FULFILLED;
        this.#value = value;
        this.#runCallbacks()
    }
    #onFail(value) {
        //if promise is already settled, return
        if (this.#state !== STATUS.PENDING) return;
        if(value instanceof MyPromise){
            //if value is promise wait for it to settle
            value.then(this.#onSuccessBinded, this.#onFailBinded)
            return;
        }
        if (this.#catchCallbs.length === 0) throw new Error(value)
        this.#state = STATUS.REJECTED;
        this.#value = value;
        this.#runCallbacks()
    }
    then(thencb, catchCb) {
        return new MyPromise((resolve, reject) => {
            this.#thenCallbs.push(result=>{
                if(!thencb){
                    //if then callback is null pass value to the chain
                    resolve(result);
                    return;
                }
                try{
                    resolve(thencb(result))
                }catch{
                    reject(result)
                }
            });
            this.#catchCallbs.push(result=>{
                if(!catchCb){
                    //if catch callback is null pass value to the chain
                    reject(result);
                    return;
                }
                try{
                    resolve(catchCb(result))
                }catch{
                    reject(result)
                }
            });
            //if promise is already settled run callbacks
            if (this.#state !== STATUS.PENDING) this.#runCallbacks()
        })
    }
    catch(cb) {
        return this.then(null, cb);
    }
    finally(cb) {
        //finally doesn't need result. So we call the callback and return result to pass it to the chain
        return this.then(result=>{
            cb();
            return result;
        },result=>{
            cb();
            return result;
        })
    }
}

const getNumber = () => {
    return new MyPromise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 1000)
        setTimeout(() => {
            if (randomNumber % 1 === 0) resolve(randomNumber)
            else reject("not divisible by 5")
        })
    })
}

getNumber()
.then(res => {
    console.log('In then1, Random number-', res)
    return new MyPromise((resolve,reject)=>{
        setTimeout(()=>resolve(res),2000)
    });
})
.then()
.then(res => {
    console.log('In then3, Random number-', res)
})
.catch(err => console.log('catch1-',err))
.finally(()=>{
    console.log('finally called')
})