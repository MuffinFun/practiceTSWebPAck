const inputFirstValue = document.querySelector(
  "#first"
) as HTMLInputElement | null;
const inputSecondValue = document.querySelector(
  "#second"
) as HTMLInputElement | null;

const getValues = () => {
  console.log(inputFirstValue!.value);
  return [inputFirstValue!.value, inputSecondValue!.value];
};
const clearInputs = (): void => {
  inputFirstValue!.value = inputSecondValue!.value = "";
};

export { getValues, clearInputs };
