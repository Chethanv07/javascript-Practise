//call back 
// A callback is a function that is passed as an argument to another function.
// The function receiving the callback can then call it at a later time, allowing for asynchronous operations.

function order(callback) {
    console.log("Order placed successfully!");
    setTimeout(() => {
        console.log("deliverred.");
        callback();
    }, 2000)

    console.log("watching TV ");
}
function eatpizza() {
    console.log("Eating pizza");
}
order(eatpizza);

// promises
console.log("//Promises");
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
const promise = new Promise((resolve, reject) => {
    let x = 5;
    if (x == 6) {
        resolve("Promise resolved successfully!");
    }
    else {
        reject("Promise rejected!");
    }
});

promise.then((message) => {
    console.log(message);
})
    .catch((error) => {
        console.log(error);
    })



// promesis expample
const PromiseExample = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully!");
        reject("Error fetching data!");
    }, 3000);
});