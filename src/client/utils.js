export const createInput = ({ id, value = '', type = 'text', placeholder }) => {
  const input = document.createElement('input');
  input.classList.add('form-control');
  input.setAttribute('type', type);
  input.setAttribute('id', id);
  input.setAttribute('value', value);
  input.setAttribute('placeholder', placeholder);

  return input;
};

export const createButton = (title, css) => {
  const button = document.createElement('button');
  button.classList.add(...css);
  button.innerHTML = title;

  return button;
};

export const extendValuesFromInputs = inputs => {
  return inputs.reduce((result, el) => {
    return {
      ...result,
      [el.id]: el.value,
    };
  }, {});
};
