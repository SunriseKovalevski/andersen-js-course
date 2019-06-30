const getPromise1 = () => Promise.resolve(2);
const getPromise2 = () => Promise.resolve(3);
const getPromise3 = () => Promise.resolve(7);

async function foo() {
  const value1 = await getPromise1();
  const value2 = await getPromise2();
  const value3 = await getPromise3();

  console.log(value1 * (value2 + value3));
}

foo();

/*
function foo() {
  let value1;
  let value2;
  let value3;

  getPromise()
  .then(val => {
    value1 = val;
    return getPromise2();
  })
  .then(val => {
    value2 = val;
    return getPromise3();
  })
  .then(value3 => {
    console.log(value1 * (value2 + value3));
  })
}
*/
