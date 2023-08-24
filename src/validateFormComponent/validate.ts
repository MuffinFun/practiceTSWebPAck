export default (...inputs: number[]): boolean => {
  return inputs.every((inp) => Number.isFinite(inp));
};
