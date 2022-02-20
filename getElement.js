const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`Check your "${selection}" selection no such element exists`);
};

export default getElement;
