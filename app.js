const condition = true;   // change to false to test error

console.log("Hiii from Node.js!"); // collabarator change

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Success!!! Async/Await worked.');
  } else {
    reject('Error! Something went wrong!!!');
  }
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();