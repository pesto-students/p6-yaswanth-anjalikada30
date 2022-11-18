class Stack{
    #st = []
    constructor(){
        this.#st = []
    }
    push(element){
        this.#st.push(element)
    }
    pop(){
        return this.#st.pop()
    }
    size(){
        return this.#st.length;
    }
    printStack(){
        console.log(this.#st)
    }
    peek(){
        return this.#st[this.#st.length-1];
    }
    search(target){
        return this.#st.indexOf(target) !== -1;
    }
}
module.exports = Stack;