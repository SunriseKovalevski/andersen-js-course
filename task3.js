/* eslint-disable spaced-comment */
/* promise tasks*/
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(100), ms);
  });
}
delay(1000).then(x => console.log(x));
