const myPromise3: Promise<number> = new Promise((resolve) => {
  resolve(1);
});

myPromise3
  .then((value: number) => {
    return value + 2;
  })
  .then((value: number) => {
    console.log(value + 1); // log: 4
  });
