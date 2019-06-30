// dfclt
const first = 'https://www.json-generator.com/api/json/get/cfQCylRjuG';
const second = 'https://www.json-generator.com/api/json/get/cfDZdmxnDm';
const third = 'https://www.json-generator.com/api/json/get/cfkrfOjrfS';
const four = 'https://www.json-generator.com/api/json/get/ceQMMKpidK';

const fetchJson = async url => {
  const response = await fetch(url);

  return response.json();
};

const parallel = async () => {
  const firstData = await fetchJson(first);
  const secondData = await fetchJson(second);
  const thirdData = await fetchJson(third);
  const fourData = await fetchJson(four);

  console.log(firstData, secondData, thirdData, fourData);
};

parallel();
