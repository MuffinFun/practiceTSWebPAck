type TypeActionsFunctionValues = (
  action: string,
  values: number[]
) => number | unknown;

type TypeActionsFunctionName = (name: string) => string;

const setActionName: TypeActionsFunctionName = (name) => {
  return ` result of < ${name} > action`;
};

const action: TypeActionsFunctionValues = (
  action: string,
  values: number[]
) => {
  try {
    if (!values) {
      throw alert(`error: empty values`);
    } else {
      if (action == "+") {
        return values.reduce((acc, curr) => acc + curr, 0);
      }
      if (action == "-") {
        return values[0] - values[1];
      }
      if (action == "*") {
        return values.reduce((acc, curr) => acc * curr, 1);
      }
      if (action == "/") {
        return values.reduce((acc, curr) => acc / curr, 1).toFixed(1);
      }
      return -1;
    }
  } catch (err) {
    return err;
  }
};

export { action, setActionName };
