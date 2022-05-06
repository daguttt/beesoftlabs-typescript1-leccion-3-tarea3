const myPromise4 = new Promise((resolve, reject) => {
  reject("Error: Operation Failed");
});

myPromise4.catch((err) => {
  console.log(err); // log: 'Error: Operation Failed'
});
