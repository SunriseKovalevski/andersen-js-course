function getResolvedPromise(value) {
  return Promise.resolve(value);
}

getResolvedPromise(500)
  .then(val => {
    if (val > 300) {
      throw new Error('Ошибка');
    }
  })
  .catch(err => console.log(err))
  .finally(() => console.log('This is finally!'));
