const first = 'http://www.json-generator.com/api/json/get/cfQCylRjuG';
const second = 'http://www.json-generator.com/api/json/get/cguaPsRxAi';
const third = 'http://www.json-generator.com/api/json/get/cfDZdmxnDm';
const four = 'http://www.json-generator.com/api/json/get/cfkrfOjrfS';
const five = 'http://www.json-generator.com/api/json/get/ceQMMKpidK';

const fetchJson = async url => {
  const response = await fetch(url);

  return response.json();
};

const line = async () => {
  const firstData = await fetchJson(first);
  const secondData = await fetchJson(second);
  const thirdData = await fetchJson(third);
  const fourData = await fetchJson(four);
  const fiveData = await fetchJson(five);

  console.log([firstData, secondData, thirdData, fourData, fiveData]);
};

const parallel = () =>
  Promise.all([
    fetchJson(first),
    fetchJson(second),
    fetchJson(third),
    fetchJson(four),
    fetchJson(five),
  ]).then(data => {
    console.log(data);
  });

line();
parallel();
