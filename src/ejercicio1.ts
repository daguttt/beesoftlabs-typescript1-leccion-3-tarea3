const myPromise = Promise.resolve(1);
myPromise.then((value: number) => {
  console.log(value);
});
