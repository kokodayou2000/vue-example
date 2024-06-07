function sleep1(time: number) {
  return function () {
    return new Promise(resolve => setTimeout(resolve, time));
  };
}

const promise = new Promise(function (resolve) {
  console.log('start');
  resolve(true);
});

promise.then(sleep1(2000)).then(function () {
  console.log('done');
});

async function asyncTest() {
  const res = await sleep1(2000);
  console.log('done');
  return res;
}
await asyncTest();
