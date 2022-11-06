//asynchronous delay operation 
function delay(d, type) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (d <= 3000)
                resolve(`Delayed by ${d} successfully using ${type}!`)
            else reject(new Error(`Timed out using ${type}!`))
        }, d)
    })
}
//prints success message
const printSuccessMessage = (message) => {
    console.log(message)
}
//prints error message
const printErrorMessage = (error) => {
    console.log(error)
}
//delay function using async/await
async function delayUsingAsync(d) {
    try {
        const message = await delay(d, 'delayUsingAsync')
        printSuccessMessage(message)
    } catch (exception) {
        printErrorMessage(exception)
    }
}
//delay function using generator
function* delayUsingGenerator() {
    let i = 1000;
    while (true) {
        i += 1000;
        yield delay(i, 'delayUsingGenerator')
    }
}
//using async/await
delayUsingAsync(2000)
delayUsingAsync(4000)

const delayUsingGenObj = delayUsingGenerator()
//using generator which return promise
delayUsingGenObj.next().value
    .then(res => printSuccessMessage(res))
    .catch(error => printErrorMessage(error))
delayUsingGenObj.next().value
    .then(res => printSuccessMessage(res))
    .catch(error => printErrorMessage(error))
delayUsingGenObj.next().value
    .then(res => printSuccessMessage(res))
    .catch(error => printErrorMessage(error))
delayUsingGenObj.next().value
    .then(res => printSuccessMessage(res))
    .catch(error => printErrorMessage(error))