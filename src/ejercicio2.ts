const myPromise2: Promise<number> = new Promise((resolve) => {
  resolve(1);
});

myPromise2.then((value: number) => {
  console.log(value + 1); // log: 2
});
