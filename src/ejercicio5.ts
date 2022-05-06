const callback1 = (value: string) => console.log("Esto es un texto:", value);
const callback2 = (value: number) => console.log("Esto es un numero:", value);

const myPromise5: Promise<number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

myPromise5.then((value: number) => {
  callback2(value); // log: Esto es un numero: 2
  console.log(1);
});
