/* eslint-disable no-unused-vars */
function foo(x, cb) {
  if (x > 10) {
    console.log('x>10');
  } else {
    console.log('x<=10');
  }
}

const cb = str => () => console.log(str);

foo(5, cb('cb'));
