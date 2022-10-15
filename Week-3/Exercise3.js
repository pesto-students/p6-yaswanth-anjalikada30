function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// Count is 0 is logged.

/*When increment and log are returned they are returned with their lexical environment. 
message value is assigned with "Count is 0" and count with 0 when createIncrement is called.
After that we are calling increment and incrementing count variable but nowhere
we are updating message variable. Hence when log is called,  it prints message 
as "Count is 0" since it remembers its lexical environment.*/
