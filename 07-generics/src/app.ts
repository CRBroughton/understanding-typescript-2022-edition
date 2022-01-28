
// A generic Array type of strings
const names: Array<string> = []

// A promise with a generic Promise type, that will resolve to a number
const promise: Promise<number> = new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000)
})
